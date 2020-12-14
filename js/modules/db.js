"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = exports.getDbData = exports.dburl = void 0;
var dburl = "xxxx";
exports.dburl = dburl;
function getDbData() {
    console.log("获取数据库的数据");
    return [
        {
            title: "123"
        },
        {
            title: "456"
        },
    ];
}
exports.getDbData = getDbData;
function save() {
    console.log("save data");
}
exports.save = save;
