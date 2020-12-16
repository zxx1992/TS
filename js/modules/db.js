"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B = exports.A = void 0;
// 接口
// 命名空间
var A;
(function (A) {
    var Mysql = /** @class */ (function () {
        function Mysql() {
        }
        Mysql.prototype.add = function (info) {
            console.log(info, "mysql add");
            return true;
            // throw new Error("Method not implemented.");
        };
        Mysql.prototype.update = function (info, id) {
            throw new Error("Method not implemented.");
        };
        Mysql.prototype.delete = function (id) {
            throw new Error("Method not implemented.");
        };
        Mysql.prototype.get = function (id) {
            throw new Error("Method not implemented.");
        };
        return Mysql;
    }());
    A.Mysql = Mysql;
    var Mssql = /** @class */ (function () {
        function Mssql() {
        }
        Mssql.prototype.add = function (info) {
            console.log(info, "Mssql add");
            return true;
            // throw new Error("Method not implemented.");
        };
        Mssql.prototype.update = function (info, id) {
            throw new Error("Method not implemented.");
        };
        Mssql.prototype.delete = function (id) {
            throw new Error("Method not implemented.");
        };
        Mssql.prototype.get = function (id) {
            var list = [
                { titel: "sssf" }
            ];
            return list;
        };
        return Mssql;
    }());
    A.Mssql = Mssql;
})(A = exports.A || (exports.A = {}));
var B;
(function (B) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.eat = function (info) {
            console.log(info, "animal dog");
            return true;
        };
        return Dog;
    }());
    B.Dog = Dog;
})(B = exports.B || (exports.B = {}));
