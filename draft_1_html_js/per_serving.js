// salted broad bean

const nutrition_list_per100g = {
    "per_serving": 25,
    "energy": 481,
    "fat": 21.1,
    "saturated_fat": 7.3,
    "cholesterol": 30.2,
    "protien": 25,
    "total_carbohydrate": 47.8
};

const convert_factors = {
    "protien": 4,
    "carbohydrate": 4,
    "fat": 9
}

var nutrition_after_rounding = {
    "protien": 0,
    "carbohydrate": 0,
    "fat": 0
};

// fat cal
function fat_cal() {
    const fat_100g = nutrition_list_per100g.fat;
    const per_serving = nutrition_list_per100g.per_serving;

    const before_rounding = (per_serving / 100) * fat_100g;
    let after_rounding;

    // console.log("before_rounding:", before_rounding.toFixed(3));


    if (before_rounding < 0.5) {
        after_rounding = 0;
    } else if (before_rounding < 5) {
        after_rounding = Math.round(before_rounding * 2) / 2;
    } else {
        after_rounding = Math.round(before_rounding);
    }

    // เก็บ after rounding ไปคำนวณพลังงาน
    nutrition_after_rounding.fat = after_rounding

    return {
        nutrition: "fat",
        before_rounding: before_rounding,
        after_rounding: after_rounding,
        unit: "grams"
    };
}

// saturated fat cal
function saturated_fat_cal() {
    const saturated_fat_100g = nutrition_list_per100g.saturated_fat
    const per_serving = nutrition_list_per100g.per_serving

    const before_rounding = (per_serving / 100) * saturated_fat_100g
    let after_rounding

    if (before_rounding < 0.5) {
        after_rounding = 0
    } else if (before_rounding > 0.5 && before_rounding < 5) {
        after_rounding = Math.round(before_rounding * 2) / 2
    } else {
        after_rounding = Math.round(before_rounding)
    }

    return {
        nutrition: "saturated fat",
        before_rounding: before_rounding,
        after_rounding: after_rounding,
        unit: "grams"
    }
}

// cholesterol cal
function cholesterol_cal() {
    const cholesterol_100g = nutrition_list_per100g.cholesterol
    const per_serving = nutrition_list_per100g.per_serving

    const before_rounding = (per_serving / 100) * cholesterol_100g
    let after_rounding

    // console.log(before_rounding)

    if (before_rounding < 2) {
        after_rounding = 0
    } else if (before_rounding > 2 && before_rounding < 5) {
        after_rounding = "น้อยกว่า 5 มิลลิกรัม"
    } else {
        after_rounding = Math.round(before_rounding / 5) * 5
    }

    return {
        nutrition: "saturated fat",
        before_rounding: before_rounding,
        after_rounding: after_rounding,
        unit: "miligrams"
    }
}

// protien cal
function protien_cal() {
    const protien_100g = nutrition_list_per100g.protien
    const per_serving = nutrition_list_per100g.per_serving

    const before_rounding = (per_serving / 100) * protien_100g
    let after_rounding

    // console.log(before_rounding)

    if (before_rounding < 0.5) {
        after_rounding = 0
    } else if (before_rounding > 0.5 && before_rounding < 1) {
        after_rounding = "น้อยกว่า 1 กรัม"
    } else {
        after_rounding = Math.round(before_rounding)
    }

    // เก็บ after rounding ไปคำนวณพลังงาน
    nutrition_after_rounding.protien = after_rounding

    return {
        nutrition: "protien",
        before_rounding: before_rounding,
        after_rounding: after_rounding,
        unit: "grams"
    }
}

// cabrb cal
function carbohydrate_cal() {
    const carbohydrate_100g = nutrition_list_per100g.total_carbohydrate
    const per_serving = nutrition_list_per100g.per_serving

    const before_rounding = (per_serving / 100) * carbohydrate_100g
    let after_rounding

    console.log(before_rounding)

    if (before_rounding < 0.5) {
        after_rounding = 0
    } else if (before_rounding > 0.5 && before_rounding < 1) {
        after_rounding = "น้อยกว่า 1 กรัม"
    } else {
        after_rounding = Math.round(before_rounding)
    }

    // เก็บ after rounding ไปคำนวณพลังงาน
    nutrition_after_rounding.carbohydrate = after_rounding

    return {
        nutrition: "carbohydrate",
        before_rounding: before_rounding,
        after_rounding: after_rounding,
        unit: "grams"
    }
}

function energy_cal() {
    const protien_after_rounding = nutrition_after_rounding.protien;
    const carbohydrate_after_rounding = nutrition_after_rounding.carbohydrate;
    const fat_after_rounding = nutrition_after_rounding.fat;

    let energy, after_rounding;

    energy = (protien_after_rounding * convert_factors.protien) + (carbohydrate_after_rounding * convert_factors.carbohydrate) + (fat_after_rounding * convert_factors.fat)

    if (energy < 5) {
        after_rounding = 0
    } else if (energy > 5 && energy < 50) {
        after_rounding = Math.round(energy * 5) / 5
    } else {
        after_rounding = Math.round(energy / 10) * 10
    }

    return {
        "total_energy": after_rounding
    }

}

console.log(fat_cal());
console.log(protien_cal());
console.log(carbohydrate_cal());
console.log(energy_cal());

// console.log(nutrition_after_rounding);

// console.log(saturated_fat_cal());
// console.log(cholesterol_cal());

