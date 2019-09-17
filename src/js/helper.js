export let sum = function (a, b) {
    return a + b;
};

export let calculator = {
    sum: sum,
    dif: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }
}