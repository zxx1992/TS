
import { UserClass, UserModel } from "./model/use"
import { ArticleClass, ArtivleModle } from "./model/article"
import { Dogclass,DogModel } from "./model/animal"

// user表操作数据库
var uObj = {
    username: "zxxlcc",
    password: "123456",
}
// 增加数据
var u = new UserClass();
u.username = uObj.username;
u.password = uObj.password;
UserModel.add(u);

// 获取user表中数据
console.log(UserModel.get(1))


// 文章表操作数据库
var articleClass = new ArticleClass();
articleClass.title = "我要发发发"
articleClass.desc = "理财发发发"
ArtivleModle.add(articleClass)


var dogclass = new Dogclass();
dogclass.name = "xiaobaibai";
DogModel.eat(dogclass)