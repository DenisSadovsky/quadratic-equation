module.exports = function solveEquation(equation) {
    result = [];

    var value = equation.replace(/\s/g, "")
                        .match(/[-]?\d+/g);
    x1 = Number(value[0]);
    x2 = Number(value[2]);
    x3 = Number(value[3]);

    sol = -4 * x1 * x3 + x2 * x2

    var k = Math.sqrt(sol);

    var1 = Math.round((-x2 + k) / 2 / x1);
    var2 = Math.round((-x2 - k) / 2 / x1);

    if(var1 < var2) {
        result.push(var1);
        result.push(var2);
    } else {
        result.push(var2);
        result.push(var1);
    }
    return result;
}
