"use strict";
function sum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
function addN(number) {
    var numberOne = number;
    var calculationFunction = function (numberTwo) { return sum(numberOne, numberTwo); };
    return calculationFunction;
}
//# sourceMappingURL=index.js.map