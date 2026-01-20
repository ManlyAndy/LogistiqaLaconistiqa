var modelRules = {
    "micro 11": { allowedDiameters: [10, 20] },
    "micro l": { allowedDiameters: [10, 20] },
    "скрытый strong": { allowedDiameters: [20] }
};
window.calculatePackagingWeight = function (packagingResult) {
    let weight = 0;
    document.getElementById("close").addEventListener ("click", () => {
    document.getElementById("modal").classList.add("hidden");
});

    // Тубы
    for (const key in packagingResult.tubesResult) {
        const count = packagingResult.tubesResult[key];

        const match = key.match(/Ø(\d+)\s\/\s([\d.]+)\sм/);
        if (!match) continue;

        const diameter = Number(match[1]);
        const length = Number(match[2]);

        const tube = tubes.find(
            t => t.diameter === diameter && t.maxLength === length
        );

        if (tube) {
            weight += tube.weight * count;
        }
    }

    // Коробки
    weight += packagingResult.boxesCount * BOX_WEIGHT;

    return weight;
};
const BOX_WEIGHT = 0.5; 
const products = [
    { name: "Micro-L угловой Шампань анодированный (2.5)",
      weight: 0.8,
    type: "tube",
 tubeRules: {
    "10-2.5": 15,
    "20-2.5": 50
 }
},
    { name: "Micro-L угловой Светлый Шампань анодированный (2.5)",
      weight: 0.8,
    type: "tube",
 tubeRules: {
    "10-2.5": 15,
    "20-2.5": 50
 }
},
    { name: "Micro-L угловой Золото анодированный (2.5)",
      weight: 0.8,
    type: "tube",
 tubeRules: {
    "10-2.5": 15,
    "20-2.5": 50
 }
},
    { name: "Micro-L угловой Светлое золото анодированный (2.5)",
      weight: 0.8,
    type: "tube",
 tubeRules: {
    "10-2.5": 15,
    "20-2.5": 50
 }
},
    { name: "Micro-L угловой Черный анодированный (2.5)",
      weight: 0.8,
    type: "tube",
 tubeRules: {
    "10-2.5": 15,
    "20-2.5": 50
 }
},
    { name: "Micro-L угловой Серебро анодированный (2.5)",
      weight: 0.8,
    type: "tube",
 tubeRules: {
    "10-2.5": 15,
    "20-2.5": 50
 }
},
    { name: "Micro-L угловой Черный матовый (2.5)",
      weight: 0.9,
    type: "tube",
 tubeRules: {
    "10-2.5": 15,
    "20-2.5": 50
 }
},
    { name: "Micro-L угловой Черный муар (2.5)",
      weight: 0.9,
    type: "tube",
 tubeRules: {
    "10-2.5": 15,
    "20-2.5": 50
 }
},
    { name: "Micro-L угловой Белый матовый (2.5)",
      weight: 0.9,
    type: "tube",
 tubeRules: {
    "10-2.5": 15,
    "20-2.5": 50
 }
},
    { name: "Micro-L угловой Белый муар (2.5)",
      weight: 0.9,
    type: "tube",
 tubeRules: {
    "10-2.5": 15,
    "20-2.5": 50
 },
},
    { name: "Micro-L угловой Без покрытия (2.5)",
      weight: 0.7,
    type: "tube",
 tubeRules: {
    "10-2.5": 15,
    "20-2.5": 50
 }
},
    { name: "Реклама S",
      weight: 0.3,
    type: "box",
 
 
},
    { name: "Реклама M",
      weight: 0.4,
    type: "box",
 
 
},

    { name: "Реклама L",
      weight: 0.5,
    type: "box",

},
    { name: "Реклама Бостон",
      weight: 0.5,
    type: "box",

},

    { name: "Реклама Манхеттан",
         weight: 0.5,
    type: "box",
 
},

];
const tubes = [
    {
        diameter: 10,
        maxLength: 2.0,
        maxItems: 20,
        weight: 4.0
    },
    {
        diameter: 10,
        maxLength: 2.5,
        maxItems: 20,
        weight: 5.0
    },
    {
        diameter: 10,
        maxLength: 3.0,
        maxItems: 15,
        weight: 6.0
    },
    {
        diameter: 20,
        maxLength: 3.0,
        maxItems: 10,
        weight: 8.5
    },
     {
        diameter: 20,
        maxLength: 2.0,
        maxItems: 10,
        weight: 5.0
    },
     {
        diameter: 20,
        maxLength: 2.5,
        maxItems: 10,
        weight: 7.0
    }
];
// ===== ДОБАВИТЬ СТРОКУ =====
const addButton = document.getElementById("add");
const itemsDiv = document.getElementById("items");

addButton.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
        <div class="autocomplete">
            <input type="text" placeholder="Название товара">
            <div class="list"></div>
        </div>
        <input type="number" placeholder="Кол-во" min="1">
    `;

    itemsDiv.appendChild(div);
});

// ===== АВТОПОДСКАЗКА =====
document.addEventListener("input", function (e) {
    if (e.target.type !== "text") return;

    const input = e.target;
    const list = input.nextElementSibling;
    const value = input.value.toLowerCase();

    list.innerHTML = "";

    if (!value) return;

    products.forEach(product => {
        if (product.name.toLowerCase().includes(value)) {
            const div = document.createElement("div");
            div.textContent = product.name;

            div.onclick = () => {
                input.value = product.name;
                list.innerHTML = "";
            };

            list.appendChild(div);
        }
    });
});
document.getElementById("addRow").addEventListener("click", addRow);
// ===== ЗАГРУЗКА EXCEL =====
document.getElementById("excelInput").addEventListener("change", handleExcelUpload);

function handleExcelUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(worksheet);

        const newProducts = [];

        rows.forEach(row => {
            // 1. игнорируем серые / пустые строки
            if (!row["Наименование"] || !row["Weight of one piece"]) return;

            const typeRaw = String(row["Type of packaging"] || "").toLowerCase();
            const type = typeRaw.includes("box") ? "box" : "tube";

            const capacity = {};

            if (row['Diameter "10"']) {
                capacity[10] = Number(row['Diameter "10"']);
            }
            if (row['Diameter "20"']) {
                capacity[20] = Number(row['Diameter "20"']);
            }

            newProducts.push({
                name: String(row["Наименование"]).trim(),
                type,
                weight: Number(row["Weight of one piece"]),
                capacity
            });
        });

        products = newProducts;

        console.log("Номенклатура загружена из Excel:", products);
        alert("Excel успешно загружен");
    };

    reader.readAsArrayBuffer(file);
}
// ===== КОНЕЦ EXCEL =====

// ===== ИТОГО =====
const resultText = document.getElementById("resultText");
   document.getElementById("total").addEventListener("click", () => {


    const orderItems = [];
   document.querySelectorAll(".item").forEach(item => {
        const name = item.querySelector('input[type="text"]').value;
        const qty = Number(item.querySelector('input[type="number"]').value);
        if (name && qty) {
            orderItems.push({ name, qty });
        }
    });
   
let productsWeight = 0;
orderItems.forEach(item => {
    const product = products.find(p => p.name === item.name);
    if (product) {
        productsWeight += product.weight * item.qty;
    }
});
const result = calculatePackaging(orderItems)
let tubesPlaces = 0;

if (result.tubesResult) {
    Object.values(result.tubesResult).forEach(count => {
        tubesPlaces += count;
    });
}
let output = "<strong>Упаковка:</strong><br>";

if (result.tubesResult && Object.keys(result.tubesResult).length > 0) {
    Object.values(result.tubesResult).forEach(tube => {
        output += `• Туба Ø${tube.diameter} см / ${tube.length} м — ${tube.count} шт<br>`;
    });
} 
else {
    output += "• Туб нет<br>";
}

if (result.boxesCount > 0) {
    output += `• Коробка — ${result.boxesCount} шт<br>`;
}

output += "<br>";
output += "<strong>Места:</strong><br>";
output += `• Тубы — ${tubesPlaces}<br>`;
output += `• Коробки — ${result.boxesCount}<br>`;
output += `<strong>Всего мест:</strong> ${result.totalPlaces}<br>`;
const safeTotalWeight = Number(result.totalWeight || 0);

output += `<strong>Общий вес:</strong> ${safeTotalWeight.toFixed(2)} кг`;


const packagingWeight = calculatePackagingWeight(result);
const totalWeight = productsWeight + packagingWeight;

const modal = document.getElementById("modal");


resultText.innerHTML = `
    <p><strong>Мест всего:</strong> ${result.totalPlaces}</p>
    <p><strong>Вес товара:</strong> ${productsWeight.toFixed(2)} кг</p>
    <p><strong>Вес упаковки:</strong> ${packagingWeight.toFixed(2)} кг</p>
    <hr>
    <p><strong>ИТОГО:</strong> ${totalWeight.toFixed(2)} кг</p>
`;
modal.classList.remove("hidden");

function getLengthFromName(name) {
    // ищем (2.5 м) или (2,5 м)
    let match = name.match(/\(([\d.,]+)\s*м\)/i);

    // если не нашли — ищем просто (2.5)
    if (!match) {
        match = name.match(/\(([\d.,]+)\)/);
    }

    if (!match) return null;

    const length = Number(match[1].replace(',', '.'));
    return isNaN(length) ? null : length;

}
       function normalizeName(str) {
    return str
        .toLowerCase()
        .replace(/-/g, " ")
        .replace(/\s+/g, " ")
        .trim();
       }
function selectTube(productName) {
    const product = products.find(p => p.name === productName);
    if (!product || product.type.toLowerCase() !== "tube") return null;
    // определяем модель из названия
const productNameNormalized = normalizeName(product.name);

let modelKey = null;

for (const key in modelRules) {
    if (productNameNormalized.includes(normalizeName(key))) {
        modelKey = key;
        break;
    }
}

if (!modelKey) {
    console.warn("Модель не распознана:", product.name);
    return null;
}

    const length = getLengthFromName(product.name);
    if (!length) return null; 
    //варианты туб 
    const possible = [];

    for (const key in product.tubeRules) {
        const [diameter, tubeLength] = key.split("-").map(Number);

        if (tubeLength >= length) {
            possible.push({
                diameter,
                length: tubeLength,
                maxItems: product.tubeRules[key]
            });
        }
    }

    if (possible.length === 0) return null;

    // Сортируем: сначала Ø10, потом Ø20, потом по длине
    possible.sort((a, b) => {
        if (a.diameter !== b.diameter) return a.diameter - b.diameter;
        return a.length - b.length;
    });

    return possible[0];
}
function calculatePackaging(orderItems) {
    let totalPlaces = 0;
    let tubesResult = {};
    let boxesCount = 0;
let packagingWeight = 0;

    orderItems.forEach(item => {
        const product = products.find(p => p.name === item.name);
        if (!product) return;

        // Рекламная продукция — коробки
        if (product.type === "box") {
            const boxes = Math.ceil(item.qty / 3);
            boxesCount += boxes;
            totalPlaces += boxes;
            return;
        }

        // Тубы
       const tube = selectTube(product.name);

if (!tube) {
    console.warn("Туба не подобрана для:", product.name);
} else {
    const tubesNeeded = Math.ceil(item.qty / tube.maxItems);

    totalPlaces += tubesNeeded;
    packagingWeight += tubesNeeded * tube.weight;

    const key = `Ø${tube.diameter} / ${tube.length} м`;
    tubesResult[key] = (tubesResult[key] || 0) + tubesNeeded;
}
    });

    return {
        totalPlaces,
        tubesResult,
        boxesCount,
    }
   }
   });


