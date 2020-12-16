"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hello ts");
// 浏览器不支持ts,需要编译为 es5
// 字符串，数子
var str = "tssring";
var num1 = 123;
var str2 = "zxx";
console.log(str, num1, str2, "字符串，数子");
// 数组
var arr1 = ["a", "b", "c"];
var arr2 = [1, 2, 3]; //1
var arr3 = [11, 22, 33];
var arr4 = ["a", "b", "c"]; //2
var arr6 = ["a", "b", "c"]; //3
console.log(arr1, arr2, arr3, arr4, arr6, "数组");
// 元数组类型
var arr5 = ["zx", 27, false];
console.log(arr5, "元数组类型");
// 枚举类型,如果没有赋值，打印出索引
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
;
var f1 = Flag.success;
var f2 = Flag.error;
console.log(f1, f2, "枚举有值");
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 5] = "blue";
    Color[Color["yellow"] = 6] = "yellow";
})(Color || (Color = {}));
;
var c1 = Color.red; //0
var c2 = Color.blue; //5
var c3 = Color.yellow; //6
console.log(c1, c1, c3, "枚举无值");
// 任意类型
var random = "123";
random = "str";
console.log(random, "任意类型");
// 用法
var oBox = document.getElementById('box');
oBox.style.color = "red";
// null undefined 类型
var numany;
console.log(numany, "undefined");
// void类型：表示fangfa没有返回任何类型
function run() {
    console.log("run");
}
run();
// 如果有返回值，则指明类型
function run2() {
    return 123;
}
run2();
//never 类型 表示从不出现的值: null undefined 都属于never类型
var anever;
// anever = "never";
// anever = (() => {
//     throw new Error("错误")
// })();
// 函数
// 函数声明：必须标明函数返回类型
function runFun() {
    return "runfun";
}
// 匿名函数
var runFun2 = function () {
    return 123;
};
runFun();
runFun2();
// 定义方法传参
function getInfo(name, age) {
    return name + "..." + age;
}
console.log(getInfo("zxx", 27));
// 没有返回值的方法
function runFun3() {
}
runFun3();
// 方法可选参数：?， 必须配置在参数最后面
function getInfo2(name, age) {
    if (age) {
        return name + "..." + age;
    }
    else {
        return "" + name;
    }
}
console.log(getInfo2("xxx", 27));
console.log(getInfo2("xxx"));
// 方法配置默认参数
function getInfo3(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + "..." + age;
    }
    else {
        return "" + name;
    }
}
console.log(getInfo3("lcc", 27));
console.log(getInfo3("lcc"));
// 剩余参数: 三点运算符，
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, result_1 = result; _a < result_1.length; _a++) {
        var val = result_1[_a];
        sum += val;
    }
    return sum;
}
console.log(sum(1, 2, 3, 4));
// 函数重载：
// function dulpFunc(name: string): string;
// function dulpFunc(name: string, age: number): string;
function dulpFunc(name, age) {
    if (age) {
        return name + "...name " + age;
    }
    else {
        return name + "...name";
    }
}
console.log(dulpFunc("zxxname"));
console.log(dulpFunc('zxx', 30));
// 箭头函数
setTimeout(function () {
    console.log("jiantou");
}, 1000);
// 类
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.work = function () {
        console.log(this.name, "person work");
    };
    return Person;
}());
var p = new Person('zxx');
console.log(p.getName());
console.log(p.name, "nameleix");
p.setName("lcc");
console.log(p.getName());
// 实现继承 extends, super
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name) {
        return _super.call(this, name) || this;
    }
    Child.prototype.work = function () {
        console.log(this.name, "child work");
    };
    return Child;
}(Person));
var c = new Child("lyy");
console.log(c.getName());
c.work();
// 类里面的修饰符
// public: 公有 在类里面，子类，类外面都可以访问
// protected: 保护类型
// private: 私有
// 静态属性 静态方法
// jquery 源码
// $("#box").css("color","red");
// fucntion $(ele) {
//     return new Base(ele)
// }
// function Base(ele) {
//     let dom  = document.getElementById(ele);
//     CSS(attr, color) {
//         dom.style.attr = color;
//     }
// }
var Sun = /** @class */ (function () {
    function Sun(name) {
        this.name = name;
    }
    // 实例方法
    Sun.prototype.run = function () {
        console.log(this.name, "name run");
    };
    Sun.prototype.work = function () {
        console.log(this.name, "name work");
    };
    // 静态方法：不能调用类里面的属性
    Sun.print = function () {
        console.log(Sun.sex, "static print");
    };
    Sun.sex = "nv";
    return Sun;
}());
var s = new Sun("sunhaizi");
Sun.print();
// console.log(Sun.sex,"static print")
// 多态： 属于继承，父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("eat methods");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + "eat food";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + "eat laoshu";
    };
    return Cat;
}(Animal));
// 抽象类 abstract 定义抽象类和抽象方法： 定义子类的标准
var Fruit = /** @class */ (function () {
    function Fruit(name) {
        this.name = name;
    }
    Fruit.prototype.run = function () {
        console.log("其他方法不需要");
    };
    return Fruit;
}());
// var a = new Fruit();
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name) {
        return _super.call(this, name) || this;
    }
    // 抽象类的子类必须实现抽象类里面的抽象方法
    Apple.prototype.eat = function () {
        console.log("eat apple");
    };
    return Apple;
}(Fruit));
var Banner = /** @class */ (function (_super) {
    __extends(Banner, _super);
    function Banner(name) {
        return _super.call(this, name) || this;
    }
    // 抽象类的子类必须实现抽象类里面的抽象方法
    Banner.prototype.eat = function () {
        console.log("eat Banner");
    };
    return Banner;
}(Fruit));
var a = new Apple('apple');
a.eat();
var b = new Apple('Banner');
b.eat();
// 2020.12.13
// ts 中定义方法，传入参数
function printLabel(label) {
    console.log('printLabel');
}
printLabel("1213降温啦");
// json 
function printLabel2(labelInfo) {
    console.log('printLabel');
}
printLabel2({ label: "1213降温啦" });
function printName(obj) {
    console.log(obj.firstName + '---' + obj.secondName);
}
var objName = {
    firstName: "z", secondName: "xx",
    age: "27"
};
printName(objName);
function printName2(obj) {
    console.log(obj.firstName + '---' + obj.secondName);
}
var objName2 = {
    firstName: "l", secondName: "cc",
    age: "27"
};
printName2(objName2);
function getName(name) {
    console.log(name, "namefullname");
}
getName({ firstName: "yy" });
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText, "success");
        }
    };
}
var data = {
    type: "get",
    data: "原生js封装Ajax",
    url: "http://a.itying.com/api/productlist",
    dataType: "json"
};
var md5 = function (key, value) {
    return key + value;
};
console.log(md5("md5key", "md5val"));
var md52 = function (key, value) {
    return key + '...' + value;
};
console.log(md52("md52key", "md52val"));
var arrArr = ['123', "456"];
console.log(arrArr[0]);
var arrObj = {
    name: "duixiangueshu"
};
console.log(arrObj.name, "name");
var Dogs = /** @class */ (function () {
    function Dogs(name) {
        this.name = name;
    }
    Dogs.prototype.eat = function () {
        console.log(this.name, "dog");
    };
    return Dogs;
}());
var d = new Dogs("xiaohei");
d.eat();
var Cats = /** @class */ (function () {
    function Cats(name) {
        this.name = name;
    }
    Cats.prototype.eat = function (food) {
        console.log(this.name + food, "cat");
    };
    return Cats;
}());
var cc = new Cats("xiaohua");
cc.eat("laoshu");
var Progro = /** @class */ (function () {
    function Progro(name) {
        this.name = name;
    }
    Progro.prototype.coding = function (code) {
        console.log(this.name + ",,," + code, "coding");
    };
    return Progro;
}());
// 继承+应用接口
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.eat = function () {
        console.log(this.name, "eat");
    };
    Web.prototype.work = function (work) {
        console.log(this.name + "..." + work, "work");
    };
    return Web;
}(Progro));
var w = new Web("小磊");
w.eat();
w.work("coding");
w.coding("coding");
// 泛型: 可以支持不特定的数据类型，要求：传入的参数和返回的参数一致
function getData(value) {
    return value;
}
console.log(getData(123));
console.log(getData("123"));
console.log(getData(false));
var Minclass = /** @class */ (function () {
    function Minclass() {
        this.list = [];
    }
    Minclass.prototype.add = function (num) {
        this.list.push(num);
    };
    Minclass.prototype.min = function () {
        var minNum = this.list[0];
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val < minNum) {
                minNum = val;
            }
        }
        return minNum;
    };
    return Minclass;
}());
var min = new Minclass();
min.add(3);
min.add(4);
min.add(5);
min.add(2);
min.add(7);
console.log(min.min());
// 泛型类
var Minclass2 = /** @class */ (function () {
    function Minclass2() {
        this.list = [];
    }
    Minclass2.prototype.add = function (value) {
        this.list.push(value);
    };
    Minclass2.prototype.min = function () {
        var minNum = this.list[0];
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var val = _a[_i];
            if (val < minNum) {
                minNum = val;
            }
        }
        return minNum;
    };
    return Minclass2;
}());
var min2 = new Minclass2();
min2.add(456);
min2.add(123);
min2.add(234);
console.log(min2.min());
var min3 = new Minclass2();
min3.add("b");
min3.add("s");
min3.add("a");
console.log(min3.min());
var setData = function (value1, vlaue2) {
    return value1 + vlaue2;
};
setData('name', 'zhangsan');
var getData2 = function (vlaue) {
    return vlaue;
};
getData2("zxx");
getData2(123);
function getData3(value) {
    return value;
}
var myGetData3 = getData3;
console.log(myGetData3("EO"));
// user 表
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// 文章分类 表
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());
var Mysqldb = /** @class */ (function () {
    function Mysqldb() {
    }
    Mysqldb.prototype.add = function (user) {
        console.log(user, "user");
        return true;
    };
    return Mysqldb;
}());
var u = new User();
u.user = "zxxx";
u.password = "1234556";
console.log(u, "u");
var ar = new Article();
ar.title = "国内新闻";
ar.status = 1;
var db = new Mysqldb();
db.add(ar);
// 操作数据库的泛型类
var Mysqldb2 = /** @class */ (function () {
    function Mysqldb2() {
    }
    Mysqldb2.prototype.add = function (user) {
        console.log(user, "user");
        return true;
    };
    Mysqldb2.prototype.update = function (user, id) {
        console.log(user, id, "user id");
        return true;
    };
    return Mysqldb2;
}());
var User2 = /** @class */ (function () {
    function User2() {
    }
    return User2;
}());
var u2 = new User();
u2.user = "lcc";
u2.password = "123456lcc";
var db2 = new Mysqldb2();
db2.add(u2);
var Article2 = /** @class */ (function () {
    function Article2(params) {
        this.title = params.title;
        this.status = params.status;
        this.declare = params.declare;
    }
    return Article2;
}());
var arPatam = {
    title: "经济文章",
    status: 2,
};
var ar2 = new Article2(arPatam);
var db3 = new Mysqldb2();
// db3.add(ar2)
db3.update(ar2, 12);
