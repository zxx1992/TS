"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
db_1.getDbData();
db_1.save();
console.log(db_1.dburl, "dburl");
