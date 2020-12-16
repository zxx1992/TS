"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var use_1 = require("./model/use");
var article_1 = require("./model/article");
var animal_1 = require("./model/animal");
// user表操作数据库
var uObj = {
    username: "zxxlcc",
    password: "123456",
};
// 增加数据
var u = new use_1.UserClass();
u.username = uObj.username;
u.password = uObj.password;
use_1.UserModel.add(u);
// 获取user表中数据
console.log(use_1.UserModel.get(1));
// 文章表操作数据库
var articleClass = new article_1.ArticleClass();
articleClass.title = "我要发发发";
articleClass.desc = "理财发发发";
article_1.ArtivleModle.add(articleClass);
var dogclass = new animal_1.Dogclass();
dogclass.name = "xiaobaibai";
animal_1.DogModel.eat(dogclass);
