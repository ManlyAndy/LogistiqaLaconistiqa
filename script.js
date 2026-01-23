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

        weight += packagingResult.boxesCount * BOX_WEIGHT;

        return weight;
    };
    const BOX_WEIGHT = 0.5; 
    let products = [
        { name: "Micro-L угловой Шампань (2.5)",
        weight: 0.364,
        type: "tube",
    tubeRules: {
        "10-2.5": 25,
        "20-2.5": 100
    }
},
    { name: "Micro-L угловой Светлый Шампань (2.5)",
      weight: 0.364,
    type: "tube",
 tubeRules: {
    "10-2.5": 25,
    "20-2.5": 100
 }
},
    { name: "Micro-L угловой Золото (2.5)",
      weight: 0.364,
    type: "tube",
 tubeRules: {
    "10-2.5": 25,
    "20-2.5": 100
 }
},
    { name: "Micro-L угловой Светлое золото (2.5)",
      weight: 0.364,
    type: "tube",
 tubeRules: {
    "10-2.5": 25,
    "20-2.5": 100
 }
},
    { name: "Micro-L угловой Черный анод (2.5)",
      weight: 0.364,
    type: "tube",
 tubeRules: {
    "10-2.5": 25,
    "20-2.5": 100
 }
},
    { name: "Micro-L угловой Серебро (2.5)",
      weight: 0.364,
    type: "tube",
 tubeRules: {
    "10-2.5": 25,
    "20-2.5": 100
 }
},
    { name: "Micro-L угловой Черный матовый (2.5)",
      weight: 0.434,
    type: "tube",
 tubeRules: {
    "10-2.5": 25,
    "20-2.5": 100
 }
},
    { name: "Micro-L угловой Черный муар (2.5)",
      weight: 0.434,
    type: "tube",
 tubeRules: {
    "10-2.5": 25,
    "20-2.5": 100
 }
},
    { name: "Micro-L угловой Белый матовый (2.5)",
      weight: 0.434,
    type: "tube",
 tubeRules: {
    "10-2.5": 25,
    "20-2.5": 100
 }
},
    { name: "Micro-L угловой Белый муар (2.5)",
      weight: 0.434,
    type: "tube",
 tubeRules: {
    "10-2.5": 25,
    "20-2.5": 100
 }
},
    { name: "Micro-L угловой Без покрытия (2.5)",
      weight: 0.344,
    type: "tube",
 tubeRules: {
    "10-2.5": 25,
    "20-2.5": 100
 }
},
    {name: "Micro 11 mini Чёрный анод (2.0)",
    weight: 0.101,
    type: "tube",
    tubeRules: {
        "10-2.5": 40,
        "20-2.5": 150
    },
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

const addButton = document.getElementById("addRow");
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
            if (!row["Name"] || !row["Weight"]) return;

            const typeRaw = String(row["Type of packaging"] || "").toLowerCase();
            const type = typeRaw.includes("box") ? "box" : "tube";

            const capacity = {};

            if (row['Diameter 10']) {
                capacity[10] = Number(row['Diameter "10"']);
            }
            if (row['Diameter 20']) {
                capacity[20] = Number(row['Diameter "20"']);
            }

            newProducts.push({
                name: String(row["Name"]).trim(),
                type,
                weight: Number(row["Weight"]),
                capacity
            });
        });

        products = newProducts;

        console.log("Номенклатура загружена из Excel:", products);
        alert("Excel успешно загружен");
    };

    reader.readAsArrayBuffer(file);
}
const resultText = document.getElementById("resultText");
document.getElementById("total").addEventListener("click", () => {

    const orderItems = [];

    document.querySelectorAll(".item").forEach(item => {
        const nameInput = item.querySelector('input[type="text"]');
        const qtyInput = item.querySelector('input[type="number"]');

        if (!nameInput || !qtyInput) return;

        const name = nameInput.value.trim();
        const qty = Number(qtyInput.value);

        if (name && qty > 0) {
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

    const result = calculatePackaging(orderItems);

    const packagingWeight = calculatePackagingWeight(result);
    const totalWeight = productsWeight + packagingWeight;

    resultText.innerHTML = `
        <p><strong>Мест всего:</strong> ${result.totalPlaces}</p>
        <p><strong>Вес товара:</strong> ${productsWeight.toFixed(2)} кг</p>
        <p><strong>Вес упаковки:</strong> ${packagingWeight.toFixed(2)} кг</p>
        <hr>
        <p><strong>ИТОГО:</strong> ${totalWeight.toFixed(2)} кг</p>
    `;

    document.getElementById("modal").classList.remove("hidden");
});
function getLengthFromName(name) {
    let match = name.match(/\(([\d.,]+)\s*м\)/i);

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

    const length = getLengthFromName(product.name);
    if (!length) return null; 
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

      
        if (product.type === "box") {
            const boxes = Math.ceil(item.qty / 3);
            boxesCount += boxes;
            totalPlaces += boxes;
            return;
        }

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
    packagingWeight
   
    };
   }
   const starsContainer = document.getElementById("stars");

function createStar() {
    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 2 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    starsContainer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 4000);
}

// каждые 200 мс появляется новая звезда
setInterval(createStar, 40);
function createFallingStar() {
    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = "-10px";
    star.style.width = "2px";
    star.style.height = "2px";

    star.style.animation = "fall 3s linear forwards";
    starsContainer.appendChild(star);

    setTimeout(() => star.remove(), 1200);
}

setInterval(() => {
    if (Math.random() < 0.55) createFallingStar();
}, 3000);
function updateTime() {
    const now = new Date();
    document.getElementById("time").textContent =
        now.toLocaleTimeString("ru-RU");
}

updateTime();
setInterval(updateTime, 1000);
