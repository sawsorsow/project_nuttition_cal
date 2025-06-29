// salted broad bean

const nutrition_list_per100g = {
    "per_serving": 25,
    "fat": 21.1,
    "saturated_fat": 7.3
}

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

    return {
        nutrition: "fat",
        before_rounding: before_rounding,
        after_rounding: after_rounding
    };
}

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
        after_rounding: after_rounding
    }
}

console.log(fat_cal());
console.log(saturated_fat_cal());
