var modelRules = {
        "micro 11": { allowedDiameters: [10, 20] },
        "micro l": { allowedDiameters: [10, 20] },
        "скрытый strong": { allowedDiameters: [20] }
    };
    window.calculatePackagingWeight = function (packagingResult) {
        let weight = 0;

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
                weight += getTubeWeight(diameter) * count;
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
    { name: "Micro-L угловой Чёрный анод (2.5)",
      weight: 0.364,
    type: "tube",
 tubeRules: {
    "10-2.5": 25,
    "20-2.5": 100
 }
},
    { name: "Micro-L угловой Серебристый (2.5)",
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
    }
    },
    {name: "Micro 11 mini Gold edition (2.0)",
    weight: 0.101,
    type: "tube",
    tubeRules: {
        "10-2.5": 40,
        "20-2.5": 150
    }
},
    {name: "Micro 11 mini Шампань (2.0)",
    weight: 0.101,
    type: "tube",
    tubeRules: {
        "10-2.5": 40,
        "20-2.5": 150
    }
},
 {name: "Micro 11 mini Светлый шампань (2.0)",
    weight: 0.101,
    type: "tube",
    tubeRules: {
        "10-2.5": 40,
        "20-2.5": 150
    }
    },
     {name: "Micro 11 mini Золото (2.0)",
    weight: 0.101,
    type: "tube",
    tubeRules: {
        "10-2.5": 40,
        "20-2.5": 150
    }
    },
     {name: "Micro 11 mini Светлое золото (2.0)",
    weight: 0.101,
    type: "tube",
    tubeRules: {
        "10-2.5": 40,
        "20-2.5": 150
    }
    },
     {name: "Micro 11 mini Белый матовый (2.0)",
    weight: 0.161,
    type: "tube",
    tubeRules: {
        "10-2.5": 40,
        "20-2.5": 150
    }
    },
     {name: "Micro 11 mini Чёрный матовый (2.0)",
    weight: 0.161,
    type: "tube",
    tubeRules: {
        "10-2.5": 40,
        "20-2.5": 150
    }
    },
     {name: "Micro 11 mini Серебристый анод (2.0)",
    weight: 0.101,
    type: "tube",
    tubeRules: {
        "10-2.5": 40,
        "20-2.5": 150
    }
    },
     {name: "Micro 11 mini Чёрный муар (2.0)",
    weight: 0.161,
    type: "tube",
    tubeRules: {
        "10-2.5": 40,
        "20-2.5": 150
    }
    },

     {name: "Micro 15 mini Чёрный анод (2.5)",
    weight: 0.139,
    type: "tube",
    tubeRules: {
        "10-2.5": 30,
        "20-2.5": 150
    }
    },
     {name: "Micro 15 mini Серебристый анод (2.5)",
    weight: 0.139,
    type: "tube",
    tubeRules: {
        "10-2.5": 30,
        "20-2.5": 150
    }
    },
     {name: "Micro 15 mini Чёрный муар (2.5)",
    weight: 0.174,
    type: "tube",
    tubeRules: {
        "10-2.5": 30,
        "20-2.5": 150
    }
    },
     {name: "Micro 15 mini Чёрный матовый (2.5)",
    weight: 0.174,
    type: "tube",
    tubeRules: {
        "10-2.5": 30,
        "20-2.5": 150
    }
    },
     {name: "Micro 15 mini Золото анод (2.5)",
    weight: 0.139,
    type: "tube",
    tubeRules: {
        "10-2.5": 30,
        "20-2.5": 150
    }
    },
     {name: "Micro 15 mini Светлое золото (2.5)",
    weight: 0.139,
    type: "tube",
    tubeRules: {
        "10-2.5": 30,
        "20-2.5": 150
    }
    },
     {name: "Micro 15 mini Gold edition (2.5)",
    weight: 0.139,
    type: "tube",
    tubeRules: {
        "10-2.5": 30,
        "20-2.5": 150
    }
    },
     {name: "Micro 15 mini Белый матовый (2.5)",
    weight: 0.174,
    type: "tube",
    tubeRules: {
        "10-2.5": 30,
        "20-2.5": 150
    }
    },
     {name: "Micro 15 mini Шампань анод (2.5)",
    weight: 0.139,
    type: "tube",
    tubeRules: {
        "10-2.5": 30,
        "20-2.5": 150
    }
    },
     {name: "Micro 19 mini Без покрытия (2.5)",
    weight: 0.139,
    type: "tube",
    tubeRules: {
        "10-2.5": 25,
        "20-2.5": 150
    }
    },
    {name: "Micro 19 mini Чёрный матовый (2.5)",
    weight: 0.189,
    type: "tube",
    tubeRules: {
        "10-2.5": 25,
        "20-2.5": 150
    }
    },
    {name: "Micro 19 mini Белый муар (2.5)",
    weight: 0.189,
    type: "tube",
    tubeRules: {
        "10-2.5": 25,
        "20-2.5": 150
    }
    },
    {name: "Micro 19 mini Чёрный анод (2.5)",
    weight: 0.168,
    type: "tube",
    tubeRules: {
        "10-2.5": 25,
        "20-2.5": 150
    }
    },
    {name: "Micro 19 mini Серебристый анод (2.5)",
    weight: 0.168,
    type: "tube",
    tubeRules: {
        "10-2.5": 25,
        "20-2.5": 150
    }
    },
    {name: "Micro 19 mini Шампань анод (2.5)",
    weight: 0.168,
    type: "tube",
    tubeRules: {
        "10-2.5": 25,
        "20-2.5": 150
    }
    },
    {name: "Micro 19 mini Чёрный муар (2.5)",
    weight: 0.186,
    type: "tube",
    tubeRules: {
        "10-2.5": 25,
        "20-2.5": 150
    }
    },
    {name: "Micro 19 mini Светлое золото (2.5)",
    weight: 0.168,
    type: "tube",
    tubeRules: {
        "10-2.5": 25,
        "20-2.5": 150
    }
    },
    {name: "Micro 19 mini Золото анод (2.5)",
    weight: 0.168,
    type: "tube",
    tubeRules: {
        "10-2.5": 25,
        "20-2.5": 150
    }
    },
    {name: "Micro 19 mini Светлый шампань (2.5)",
    weight: 0.168,
    type: "tube",
    tubeRules: {
        "10-2.5": 25,
        "20-2.5": 150
    }
    },
    {name: "Micro 19 mini Белый матовый (2.5)",
    weight: 0.189,
    type: "tube",
    tubeRules: {
        "10-2.5": 25,
        "20-2.5": 150
    }
    },
    {name: "Micro 19 mini Gold edition (2.5)",
    weight: 0.168,
    type: "tube",
    tubeRules: {
        "10-2.5": 25,
        "20-2.5": 150
    }
    },
     {name: "Micro-L угловой Чёрный муар (2.7)",
    weight: 0.421,
    type: "tube",
    tubeRules: {
        "10-2.5": 15,
        "20-2.5": 100
    }
    },
     {name: "Micro-L угловой Чёрный матовый (2.7)",
    weight: 0.421,
    type: "tube",
    tubeRules: {
        "10-2.5": 15,
        "20-2.5": 100
    }
    },
     {name: "Micro-L угловой Белый матовый (2.7)",
    weight: 0.421,
    type: "tube",
    tubeRules: {
        "10-2.5": 15,
        "20-2.5": 100
    }
    },
     {name: "Micro-L MAX угловой БЕЗ ПОКРЫТИЯ (2.5)",
    weight: 0.407,
    type: "tube",
    tubeRules: {
        "10-2.5": 15,
        "20-2.5": 100
    }
    },
     {name: "Micro-L MAX угловой Чёрный анод (2.5)",
    weight: 0.407,
    type: "tube",
    tubeRules: {
        "10-2.5": 15,
        "20-2.5": 100
    }
    },
     {name: "Micro-L MAX угловой Чёрный матовый (2.5)",
    weight: 0.477,
    type: "tube",
    tubeRules: {
        "10-2.5": 15,
        "20-2.5": 100
    }
    },
     {name: "Micro-L MAX угловой Серебристый (2.5)",
    weight: 0.407,
    type: "tube",
    tubeRules: {
        "10-2.5": 15,
        "20-2.5": 100
    }
    },
     {name: "Micro-L MAX угловой Шампань (2.5)",
    weight: 0.407,
    type: "tube",
    tubeRules: {
        "10-2.5": 15,
        "20-2.5": 100
    }
    },
     {name: "Micro-L MAX угловой Светлый шампань (2.5)",
    weight: 0.407,
    type: "tube",
    tubeRules: {
        "10-2.5": 15,
        "20-2.5": 100
    }
    },
     {name: "Micro-L MAX угловой Золото (2.5)",
    weight: 0.407,
    type: "tube",
    tubeRules: {
        "10-2.5": 15,
        "20-2.5": 100
    }
    },
     {name: "Micro-L MAX угловой Светлое золото (2.5)",
    weight: 0.407,
    type: "tube",
    tubeRules: {
        "10-2.5": 15,
        "20-2.5": 100
    }
    },
     {name: "Micro-L MAX угловой Белый матовый (2.5)",
    weight: 0.477,
    type: "tube",
    tubeRules: {
        "10-2.5": 15,
        "20-2.5": 100
    }
    },
     {name: "Micro-L MAX угловой Чёрный муар (2.5)",
    weight: 0.457,
    type: "tube",
    tubeRules: {
        "10-2.5": 15,
        "20-2.5": 100
    }
    },
     {name: "Micro-L MAX угловой Белый муар (2.5)",
    weight: 0.457,
    type: "tube",
    tubeRules: {
        "10-2.5": 15,
        "20-2.5": 100
    }
    },
     {name: "потолочный GARDINA Чёрный муар (3.0)",
    weight: 1.060,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 7,
        "20-3.0": 35
    }
    },
     {name: "потолочный GARDINA Белый муар (3.0)",
    weight: 1.060,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 7,
        "20-3.0": 35
    }
    },
     {name: "потолочный GARDINA Без покрытия (3.0)",
    weight: 0.934,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 7,
        "20-3.0": 35
    }
    },
     {name: "потолочный GIPS CLASSIC БЕЗ ПОКРЫТИЯ (3.0)",
    weight: 0.900,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 7,
        "20-3.0": 35
    }
    },
     {name: "потолочный GIPS CLASSIC Чёрный матовый (3.0)",
    weight: 1.054,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 7,
        "20-3.0": 35
    }
    },
     {name: "потолочный GIPS CLASSIC Белый матовый (3.0)",
    weight: 1.054,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 7,
        "20-3.0": 35
    }
    },
     {name: "потолочный GIPS CLASSIC Чёрный муар (3.0)",
    weight: 1.054,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 7,
        "20-3.0": 35
    }
    },
     {name: "потолочный GIPS REGULAR Чёрный муар (3.0)",
    weight: 1.068,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 35
    }
    },
     {name: "потолочный GIPS REGULAR Без покрытия (3.0)",
    weight: 0.960,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 35
    }
    },
     {name: "потолочный GIPS ULTRA БЕЗ ПОКРЫТИЯ (3.0)",
    weight: 0.960,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 35
    }
    },
     {name: "потолочный GIPS ULTRA Чёрный муар (3.0)",
    weight: 1.054,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 35
    }
    },
     {name: "потолочный GIPS ULTRA Белый муар (3.0)",
    weight: 1.054,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 35
    }
    },
     {name: "потолочный GIPS ULTRA NEW БЕЗ ПОКРЫТИЯ (3.0)",
    weight: 0.800,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 35
    }
    },
     {name: "потолочный GIPS ULTRA NEW Чёрный муар (3.0)",
    weight: 1.064,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 35
    }
    },
     {name: "потолочный GIPS ULTRA NEW Белый муар (3.0)",
    weight: 1.064,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 35
    }
    },
     {name: "Скрытый REGULAR БЕЗ ПОКРЫТИЯ (3.0)",
    weight: 0.980,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 30
    }
    },
     {name: "Скрытый REGULAR Чёрный матовый (3.0)",
    weight: 1.080,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 30
    }
    },
     {name: "Скрытый REGULAR Чёрный муар (3.0)",
    weight: 1.090,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 30
    }
    },
     {name: "Скрытый Strong Без покрытия (3.0)",
    weight: 1.090,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 30
    }
    },
     {name: "Скрытый Strong Чёрный муар (3.0)",
    weight: 1.290,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 30
    }
    },
    {name: "Скрытый Strong Чёрный матовый (3.0)",
    weight: 1.270,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 30
    }
    },
     {name: "LIGHT DOORS БЕЗ ПОКРЫТИЯ (3.0)",
    weight: 0.610,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "LIGHT DOORS Чёрный анод (3.0)",
    weight: 0.610,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "LIGHT DOORS Чёрный муар (3.0)",
    weight: 0.690,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "LIGHT DOORS Светлое золото (3.0)",
    weight: 0.610,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "LIGHT 41 БЕЗ ПОКРЫТИЯ (3.0)",
    weight: 0.690,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "LIGHT 41 Чёрный анод (3.0)",
    weight: 0.690,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "LIGHT 41 Чёрный муар (3.0)",
    weight: 0.770,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "LIGHT 41 Светлое золото (3.0)",
    weight: 0.690,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "REGULAR 45 БЕЗ ПОКРЫТИЯ (3.0)",
    weight: 0.518,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "REGULAR 45 Чёрный анод (3.0)",
    weight: 0.518,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "REGULAR 45 Чёрный муар (3.0)",
    weight: 0.568,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "REVERSE 36 Чёрный анод (3.0)",
    weight: 0.454,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "REVERSE 36 Чёрный муар (3.0)",
    weight: 0.500,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "REVERSE 36 Белый муар (3.0)",
    weight: 0.500,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "REVERSE 36 Светлое золото (3.0)",
    weight: 0.454,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "REVERSE 36 Без покрытия (3.0)",
    weight: 0.454,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "REVERSE 2.0 Чёрный муар (3.0)",
    weight: 0.500,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "REVERSE 2.0 Чёрный анод (3.0)",
    weight: 0.454,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "REVERSE 2.0 Белый муар (3.0)",
    weight: 0.500,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "REVERSE 2.0 Светлое золото (3.0)",
    weight: 0.454,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "REVERSE 2.0 Без покрытия (3.0)",
    weight: 0.454,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 70
    }
    },
     {name: "рейка CLASSIC Чёрный муар (3.0)",
    weight: 0.400,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 13,
        "20-3.0": 100
    }
    },
     {name: "рейка CLASSIC БЕЗ ПОКРЫТИЯ (3.0)",
    weight: 0.368,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 13,
        "20-3.0": 100
    }
    },
     {name: "рейка CLASSIC Чёрный анод (3.0)",
    weight: 0.368,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 13,
        "20-3.0": 100
    }
    },
     {name: "рейка CLASSIC Светлое золото (3.0)",
    weight: 0.368,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 13,
        "20-3.0": 100
    }
    },
     {name: "рейка DUAL БЕЗ ПОКРЫТИЯ (3.0)",
    weight: 0.240,
    type: "tube",
    tubeRules: {
       "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 15,
        "20-3.0": 100
    }
    },
     {name: "рейка DUAL Чёрный анод (3.0)",
    weight: 0.268,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 15,
        "20-3.0": 100
    }
    },
     {name: "рейка DUAL Чёрный муар (3.0)",
    weight: 0.284,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 15,
        "20-3.0": 100
    }
    },
     {name: "рейка DUAL Светлое золото (3.0)",
    weight: 0.268,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 15,
        "20-3.0": 100
    }
    },
     {name: "рейка DUAL mini Чёрный анод. (3.0)",
    weight: 0.190,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 20,
        "20-3.0": 100
    }
    },
     {name: "рейка DUAL mini Светлое золото (3.0)",
    weight: 0.190,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 20,
        "20-3.0": 100
    }
    },
     {name: "Защелка DUAL mini Чёрный анод. (3.0)",
    weight: 0.130,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 25,
        "20-3.0": 100
    }
    },
     {name: "Защелка DUAL mini Светлое золото (3.0)",
    weight: 0.130,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 25,
        "20-3.0": 100
    }
    },
     {name: "рейка Light Чёрный анод. (3.0)",
    weight: 0.800,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 3,
        "20-3.0": 50
    }
    },
     {name: "рейка Light Светлое золото (3.0)",
    weight: 0.800,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 3,
        "20-3.0": 50
    }
    },
     {name: "рейка LIGHT mini Чёрный анод. (3.0)",
    weight: 0.412,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 100
    }
    },
     {name: "рейка LIGHT mini Светлое золото (3.0)",
    weight: 0.412,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 12,
        "20-3.0": 100
    }
    },
     {name: "защёлка LIGHT mini Чёрный анод. (3.0)",
    weight: 0.210,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 20,
        "20-3.0": 100
    }
    },
     {name: "защёлка LIGHT mini Светлое золото (3.0)",
    weight: 0.210,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 20,
        "20-3.0": 100
    }
    },
     {name: "рейка micro 3m Чёрный муар (3.0)",
    weight: 1.100,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 20
    }
    },
     {name: "рейка micro 3m Белый муар (3.0)",
    weight: 1.100,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 20
    }
    },
     {name: "рейка micro 3m Серебристый (3.0)",
    weight: 1.000,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 20
    }
    },
     {name: "рейка micro 3m Без покрытия (3.0)",
    weight: 1.000,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 20
    }
    },
     {name: "Multilevel CLASSIC Чёрный анод (3.0)",
    weight: 0.680,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
     {name: "Multilevel CLASSIC Серебристый (3.0)",
    weight: 0.680,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
     {name: "Multilevel CLASSIC Чёрный матовый (3.0)",
    weight: 0.680,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
     {name: "Multilevel CLASSIC Светлое золото (3.0)",
    weight: 0.680,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
     {name: "Multilevel CLASSIC Без покрытия (3.0)",
    weight: 0.680,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
     {name: "Multilevel CLASSIC Белый матовый (3.0)",
    weight: 0.680,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
     {name: "Multilevel CLASSIC Чёрный муар (3.0)",
    weight: 0.680,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
     {name: "Multilevel CLASSIC Белый муар (3.0)",
    weight: 0.680,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
     {name: "Multilevel CLASSIC NEW Белый матовый (3.0)",
    weight: 0.690,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
      {name: "Multilevel CLASSIC NEW Белый муар (3.0)",
    weight: 0.690,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
      {name: "Multilevel CLASSIC NEW Чёрный анод (3.0)",
    weight: 0.690,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
      {name: "Multilevel CLASSIC NEW Серебристый (3.0)",
    weight: 0.690,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
      {name: "Multilevel CLASSIC NEW Чёрный муар (3.0)",
    weight: 0.690,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
      {name: "Multilevel CLASSIC NEW Чёрный матовый (3.0)",
    weight: 0.690,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
      {name: "Multilevel CLASSIC NEW Без покрытия (3.0)",
    weight: 0.690,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
      {name: "Multilevel CLASSIC NEW Светлое золото (3.0)",
    weight: 0.690,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 5,
        "20-3.0": 50
    }
    },
       {name: "Multilevel MAX Серебристый (3.0)",
    weight: 1.010,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 25
    }
    },
       {name: "Multilevel MAX Белый матовый (3.0)",
    weight: 1.050,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 25
    }
    },
       {name: "Multilevel MAX Чёрный анод (3.0)",
    weight: 1.010,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 25
    }
    },
       {name: "Multilevel DUAL Чёрный анод (3.0)",
    weight: 1.010,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 4,
        "20-3.0": 50
    }
    },
       {name: "Multilevel DUAL Чёрный муар (3.0)",
    weight: 1.050,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 4,
        "20-3.0": 50
    }
    },
       {name: "Multilevel DUAL Светлое золото (3.0)",
    weight: 1.010,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 4,
        "20-3.0": 50
    }
    },
       {name: "Multilevel DUAL Без покрытия (3.0)",
    weight: 1.010,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 4,
        "20-3.0": 50
    }
    },
       {name: "Multilevel STRUK Без покрытия (3.0)",
    weight: 0.560,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 8,
        "20-3.0": 70
    }
    },
       {name: "Novel mini Чёрный муар (3.0)",
    weight: 0.418,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 40,
        "20-3.0": 100
    }
    },
       {name: "Novel mini Белый матовый (3.0)",
    weight: 0.418,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 40,
        "20-3.0": 100
    }
    },
       {name: "Novel mini Светлое золото (3.0)",
    weight: 0.368,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 40,
        "20-3.0": 100
    }
    },
       {name: "Novel mini Без покрытия (3.0)",
    weight: 0.368,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 40,
        "20-3.0": 100
    }
    },
       {name: "Novel mini Серебристый (3.0)",
    weight: 0.368,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 40,
        "20-3.0": 100
    }
    },
       {name: "Рассеиватель белый матовый 3 м. (3.0)",
    weight: 0.100,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 30,
        "20-3.0": 200
    }
    },
       {name: "Рассеиватель Чёрный матовый 3 м. (3.0)",
    weight: 0.100,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 30,
        "20-3.0": 200
    }
    },
       {name: "Рассеиватель SM белый матовый 3 м. (3.0)",
    weight: 0.100,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 30,
        "20-3.0": 200
    }
    },
       {name: "Рассеиватель Жесткий белый 2м. (2.0)",
    weight: 0.100,
    type: "tube",
    tubeRules: {
        "10-2.5": 30,
        "20-2.5": 200,
        "10-3.0": 30,
        "20-3.0": 200
    }
    },
       {name: "Рассеиватель Мягкий белый 2м. (2.0)",
    weight: 0.100,
    type: "tube",
    tubeRules: {
        "10-2.5": 30,
        "20-2.5": 200,
        "10-3.0": 30,
        "20-3.0": 200
    }
    },
       {name: "Вставка 80 (3.0)",
    weight: 0.200,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 24
    }
    },
       {name: "Вставка 100 (3.0)",
    weight: 0.200,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 24
    }
    },
       {name: "Вставка 80 (2.0)",
    weight: 0.150,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 24
    }
    },
       {name: "Вставка 100 (2.0)",
    weight: 0.150,
    type: "tube",
    tubeRules: {
        "10-2.5": 0,
        "20-2.5": 0,
        "10-3.0": 0,
        "20-3.0": 24
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
let shown = 0;
    products.forEach(product => {
        if (
    product.name.toLowerCase().includes(value) &&
    shown < 5
)  {
            const div = document.createElement("div");
            div.textContent = product.name;

            div.onclick = () => {
                input.value = product.name;
                list.innerHTML = "";
            };

            list.appendChild(div);
            shown++;
        }
    });
});

const resultText = document.getElementById("resultText");

document.getElementById("total").addEventListener("click", () => {

    const rows = document.querySelectorAll(".item");
    if (!rows.length) {
        alert("Добавьте хотя бы один товар");
        return;
    }

    const orderItems = [];

    rows.forEach(row => {
        const nameInput = row.querySelector('input[type="text"]');
        const qtyInput = row.querySelector('input[type="number"]');

        if (!nameInput || !qtyInput) return;

        const name = nameInput.value.trim();
        const qty = Number(qtyInput.value);

        if (!name || qty <= 0) return;

        orderItems.push({ name, qty });
    });

    if (!orderItems.length) {
        alert("Заполните корректно хотя бы одну строку");
        return;
    }

    // === РАСЧЁТ ===
    const result = calculatePackaging(orderItems);

    const packagingWeight = calculatePackagingWeight(result);
    const totalWeight = result.productsWeight + packagingWeight;

    // === ВЫВОД ===
    let variantsHtml = "";

    for (const diameter in result.tubeVariantsResult) {
        variantsHtml += `<p>Ø${diameter} — ${result.tubeVariantsResult[diameter]} мест</p>`;
    }

    const resultText = document.getElementById("resultText");

    resultText.innerHTML = `
        <p><strong>Мест всего (выбранный вариант):</strong> ${result.totalPlaces}</p>
        ${variantsHtml ? `<hr><p><strong>Возможные варианты упаковки:</strong></p>${variantsHtml}` : ""}
        <hr>
        <p><strong>Вес товара:</strong> ${result.productsWeight.toFixed(2)} кг</p>
        <p><strong>Вес упаковки:</strong> ${packagingWeight.toFixed(2)} кг</p>
        <p><strong>ИТОГО:</strong> ${totalWeight.toFixed(2)} кг</p>
    `;

    document.getElementById("resultModal").classList.remove("hidden");
});

const closeBtn = document.getElementById("close");
const resultModal = document.getElementById("resultModal");

if (closeBtn && resultModal) {
    closeBtn.addEventListener("click", () => {
        resultModal.classList.add("hidden");
    });
}
const resetBtn = document.getElementById("reset");
if (resetBtn) {
    resetBtn.addEventListener("click", () => {
        const items = document.getElementById("items");
        if (items) items.innerHTML = "";
       if (resultModal) resultModal.classList.add("hidden")
    });
}
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
let tubeVariantsResult = {};

const tubeGroups = {};

    orderItems.forEach(item => {
        const product = products.find(p => p.name === item.name);
        if (!product) return;

      
        if (product.type === "box") {
    const boxes = Math.ceil(item.qty / 3);
    boxesCount += boxes;
    totalPlaces += boxes;
    return;
}

const length = getLengthFromName(product.name);
if (!length) return;

// группируем по длине
if (!tubeGroups[length]) {
    tubeGroups[length] = [];
}

tubeGroups[length].push({
    product,
    qty: item.qty
});
});
// === РАСЧЁТ ТУБ С МУЛЬТИСБОРКОЙ ===
for (const length in tubeGroups) {
    const items = tubeGroups[length];

    // считаем суммарно по диаметрам
    const diameterTotals = {};

    items.forEach(({ product, qty }) => {
        for (const ruleKey in product.tubeRules) {
            const [diameter, tubeLength] = ruleKey.split("-").map(Number);
            if (tubeLength < length) continue;

            const maxItems = product.tubeRules[ruleKey];
            if (!maxItems || maxItems <= 0) continue;

            if (!diameterTotals[diameter]) {
                diameterTotals[diameter] = { qty: 0, maxItems };
            }

            diameterTotals[diameter].qty += qty;
        }
    });

    for (const diameter in diameterTotals) {
        const { qty, maxItems } = diameterTotals[diameter];
        const places = maxItems > 0 ? Math.ceil(qty / maxItems) : 0;

        tubeVariantsResult[diameter] =
            (tubeVariantsResult[diameter] || 0) + places;
    }

    // выбираем минимальный вариант
    const bestDiameter = Object.keys(diameterTotals)
        .map(d => ({
            diameter: Number(d),
            places: Math.ceil(diameterTotals[d].qty / diameterTotals[d].maxItems)
        }))
        .sort((a, b) => a.places - b.places)[0];

    totalPlaces += bestDiameter.places;

    const key = `Ø${bestDiameter.diameter} / ${length} м`;
    tubesResult[key] = (tubesResult[key] || 0) + bestDiameter.places;
}
    return {
        totalPlaces,
        tubesResult,
        boxesCount,
    tubeVariantsResult
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

    const moscowTime = now.toLocaleTimeString("ru-RU", {
        timeZone: "Europe/Moscow",
        hour: "2-digit",
        minute: "2-digit"
    });

    const vladivostokTime = now.toLocaleTimeString("ru-RU", {
        timeZone: "Asia/Vladivostok",
        hour: "2-digit",
        minute: "2-digit"
    });

    document.getElementById("moscowTime").textContent =
        `Москва — ${moscowTime}`;

    document.getElementById("vladivostokTime").textContent =
        `Владивосток — ${vladivostokTime}`;
}

updateTime();
setInterval(updateTime, 1000);
