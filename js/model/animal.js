"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogModel = exports.Dogclass = void 0;
var db_1 = require("../modules/db");
var Dogclass = /** @class */ (function () {
    function Dogclass() {
    }
    return Dogclass;
}());
exports.Dogclass = Dogclass;
var DogModel = new db_1.B.Dog();
exports.DogModel = DogModel;
