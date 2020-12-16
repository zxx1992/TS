console.log("hello ts")

// 浏览器不支持ts,需要编译为 es5

// 字符串，数子
let str: string = "tssring";
const num1: number = 123;
let str2: string = "zxx";
console.log(str, num1, str2, "字符串，数子")


// 数组
let arr1: string[] = ["a", "b", "c"];
let arr2: number[] = [1, 2, 3];//1
let arr3: Array<number> = [11, 22, 33];
let arr4: Array<string> = ["a", "b", "c"];//2
let arr6: any[] = ["a", "b", "c"];//3
console.log(arr1, arr2, arr3, arr4, arr6, "数组")

// 元数组类型
let arr5: [string, number, boolean] = ["zx", 27, false];
console.log(arr5, "元数组类型")

// 枚举类型,如果没有赋值，打印出索引
enum Flag { success = 1, error = 2 };
let f1: Flag = Flag.success;
let f2: Flag = Flag.error;
console.log(f1, f2, "枚举有值")

enum Color { red, blue = 5, yellow };
let c1: Color = Color.red;//0
let c2: Color = Color.blue;//5
let c3: Color = Color.yellow;//6
console.log(c1, c1, c3, "枚举无值")

// 任意类型
let random: any = "123";
random = "str";
console.log(random, "任意类型")

// 用法
let oBox: any = document.getElementById('box');
oBox.style.color = "red";

// null undefined 类型
let numany: number | undefined;
console.log(numany, "undefined")

// void类型：表示fangfa没有返回任何类型
function run(): void {
    console.log("run")
}
run();
// 如果有返回值，则指明类型
function run2(): number {
    return 123;
}
run2();

//never 类型 表示从不出现的值: null undefined 都属于never类型

let anever: never;
// anever = "never";

// anever = (() => {
//     throw new Error("错误")
// })();



// 函数
// 函数声明：必须标明函数返回类型
function runFun(): string {
    return "runfun";
}
// 匿名函数
let runFun2 = function (): number {
    return 123;
};

runFun();
runFun2();

// 定义方法传参
function getInfo(name: string, age: number): string {
    return `${name}...${age}`
}

console.log(getInfo("zxx", 27));

// 没有返回值的方法

function runFun3(): void {

}
runFun3();

// 方法可选参数：?， 必须配置在参数最后面
function getInfo2(name: string, age?: number): string {
    if (age) {
        return `${name}...${age}`
    } else {
        return `${name}`
    }
}
console.log(getInfo2("xxx", 27))
console.log(getInfo2("xxx"))

// 方法配置默认参数

function getInfo3(name: string, age: number = 20): string {
    if (age) {
        return `${name}...${age}`
    } else {
        return `${name}`
    }
}
console.log(getInfo3("lcc", 27))
console.log(getInfo3("lcc"))

// 剩余参数: 三点运算符，
function sum(...result: number[]): number {
    let sum: number = 0;
    for (let val of result) {
        sum += val;
    }
    return sum;
}
console.log(sum(1, 2, 3, 4));

// 函数重载：

// function dulpFunc(name: string): string;
// function dulpFunc(name: string, age: number): string;
function dulpFunc(name: string, age?: number): any {
    if (age) {
        return `${name}...name ${age}`
    } else {
        return `${name}...name`
    }
}
console.log(dulpFunc("zxxname"));
console.log(dulpFunc('zxx', 30));

// 箭头函数
setTimeout(() => {
    console.log("jiantou")
}, 1000)

// 类
class Person {
    public name: string;//属性，省略public关键字
    constructor(n: string) { //构造函数，实例化类的时候出发的方法
        this.name = n
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    work() {
        console.log(this.name, "person work")
    }
}

var p = new Person('zxx');
console.log(p.getName());
console.log(p.name, "nameleix");

p.setName("lcc");
console.log(p.getName());

// 实现继承 extends, super
class Child extends Person {
    constructor(name: string) {
        super(name);///初始化父类的构造函数，重定向this
    }
    work() {
        console.log(this.name, "child work")
    }
    // getName():string {
    //     return this.name;
    // }
}

let c = new Child("lyy");
console.log(c.getName())
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


class Sun {
    public name: string;
    static sex: string = "nv";
    constructor(name: string) {
        this.name = name;
    }
    // 实例方法
    run() {
        console.log(this.name, "name run")
    }
    work() {
        console.log(this.name, "name work")
    }
    // 静态方法：不能调用类里面的属性
    static print() {
        console.log(Sun.sex, "static print")
    }
}

let s = new Sun("sunhaizi");
Sun.print();
// console.log(Sun.sex,"static print")

// 多态： 属于继承，父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log("eat methods")
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }
    eat() {
        return this.name + "eat food"
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name)
    }
    eat() {
        return this.name + "eat laoshu"
    }
}

// 抽象类 abstract 定义抽象类和抽象方法： 定义子类的标准
abstract class Fruit {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract eat(): any;//抽象方法，子类里面必须有
    run() {
        console.log("其他方法不需要")
    }
}

// var a = new Fruit();

class Apple extends Fruit {
    constructor(name: any) {
        super(name);
    }
    // 抽象类的子类必须实现抽象类里面的抽象方法
    eat() {
        console.log("eat apple")
    }
}

class Banner extends Fruit {
    constructor(name: any) {
        super(name);
    }
    // 抽象类的子类必须实现抽象类里面的抽象方法
    eat() {
        console.log("eat Banner")
    }
}

let a = new Apple('apple');
a.eat();

let b = new Apple('Banner');
b.eat();


// 2020.12.13

// ts 中定义方法，传入参数
function printLabel(label: string): void {
    console.log('printLabel')
}
printLabel("1213降温啦")
// json 
function printLabel2(labelInfo: { label: string }): void {
    console.log('printLabel')
}
printLabel2({ label: "1213降温啦" })

// 接口:对批量方法进行约束

interface FullName {
    firstName: string;//分号结束
    secondName: string;
}
function printName(obj: FullName) {
    console.log(obj.firstName + '---' + obj.secondName)
}
let objName = {
    firstName: "z", secondName: "xx",
    age: "27"
};
printName(objName)


function printName2(obj: FullName) {
    console.log(obj.firstName + '---' + obj.secondName)
}
let objName2 = {
    firstName: "l", secondName: "cc",
    age: "27"
};
printName2(objName2)


// 接口： 可选属性
interface FullName2 {
    firstName: string;
    secondName?: string;//可选
}

function getName(name: FullName2) {
    console.log(name, "namefullname")
}

getName({ firstName: "yy" })

// 定义一个请求数据的接口
interface Config {
    type: string;
    url: string;
    data?: string;
    dataType: string;
}

function ajax(config: Config) {
    let xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText, "success")
        }
    }
}
let data = {
    type: "get",
    data: "原生js封装Ajax",
    url: "http://a.itying.com/api/productlist",//？可以用
    dataType: "json"
}
// ajax(data);


// 函数类型接口
interface encrypt {
    // key:string;
    // value:string;
    (key: string, value: string): string;
}

let md5: encrypt = function (key: string, value: string): string {
    return key + value;
}

console.log(md5("md5key", "md5val"));


let md52: encrypt = function (key: string, value: string): string {
    return key + '...' + value
}
console.log(md52("md52key", "md52val"));


// 可索引接口：数组，对象的约束（不常用）
// 对数组的约束
interface UserArr {
    [index: number]: string
}

let arrArr: UserArr = ['123', "456"];
console.log(arrArr[0])

// 对对象的约束
interface UserObj {
    [index: string]: string
}

let arrObj: UserObj = {
    name: "duixiangueshu"
};
console.log(arrObj.name, "name")

// 类类型接口：对类的约束和  抽象类有点相似、

interface Animal3 {
    name: string;
    eat(str: string): void;
}

class Dogs implements Animal3 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log(this.name, "dog")
    }
}

var d = new Dogs("xiaohei");
d.eat()

class Cats implements Animal3 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(food: string) {
        console.log(this.name + food, "cat")
    }
}
var cc = new Cats("xiaohua");
cc.eat("laoshu");

// 接口扩展 接口可以继承接口
interface Animal4 {
    eat(): void;
}
interface Person2 extends Animal4 {
    work(work: string): void;
}
class Progro {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    coding(code: string) {
        console.log(this.name + ",,," + code, "coding")
    }
}
// 继承+应用接口
class Web extends Progro implements Person2 {
    constructor(name: string) {
        super(name);
    }
    eat() {
        console.log(this.name, "eat")
    }
    work(work: string) {
        console.log(this.name + "..." + work, "work")
    }
}


let w = new Web("小磊");
w.eat();
w.work("coding");
w.coding("coding");



// 泛型: 可以支持不特定的数据类型，要求：传入的参数和返回的参数一致

function getData<T>(value: T): T {
    return value;
}
console.log(getData<number>(123));
console.log(getData<string>("123"));
console.log(getData<boolean>(false));

class Minclass {
    public list: number[] = [];
    add(num: number) {
        this.list.push(num)
    }
    min() {
        var minNum = this.list[0];
        for (let val of this.list) {
            if (val < minNum) {
                minNum = val
            }
        }
        return minNum
    }
}

let min = new Minclass();
min.add(3)
min.add(4)
min.add(5)
min.add(2)
min.add(7)
console.log(min.min());
// 泛型类
class Minclass2<T> {
    public list: T[] = [];
    add(value: T): void {
        this.list.push(value)
    }
    min(): T {
        var minNum = this.list[0];
        for (let val of this.list) {
            if (val < minNum) {
                minNum = val
            }
        }
        return minNum
    }
}

let min2 = new Minclass2<number>();
min2.add(456);
min2.add(123);
min2.add(234);
console.log(min2.min());

let min3 = new Minclass2<string>();

min3.add("b");
min3.add("s");
min3.add("a");
console.log(min3.min());

// 函数类型接口
interface ConfigFn {
    (value1: string, vlaue2: string): string;
}

let setData: ConfigFn = function (value1: string, vlaue2: string): string {
    return value1 + vlaue2
}

setData('name', 'zhangsan')
// 泛型接口  1
interface ConfigFn2 {
    <T>(vlaue: T): T;
}

let getData2: ConfigFn2 = function <T>(vlaue: T): T {
    return vlaue;
}
getData2<string>("zxx")
getData2<number>(123)
// 泛型接口  2
interface ConfigFn3<T> {
    (value: T): T;
}
function getData3<T>(value: T): T {
    return value;
}

let myGetData3: ConfigFn3<string> = getData3;

console.log(myGetData3("EO"));

// user 表
class User {
    user: string | undefined;
    password: string | undefined;
}
// 文章分类 表
class Article {
    title: string | undefined;
    status: number | undefined;
}

class Mysqldb {
    add(user: Article): boolean {
        console.log(user, "user")
        return true;
    }
}

let u = new User();
u.user = "zxxx";
u.password = "1234556";
console.log(u, "u")

let ar = new Article();
ar.title = "国内新闻";
ar.status = 1;
let db = new Mysqldb();
db.add(ar)

// 操作数据库的泛型类
class Mysqldb2<T> {
    add(user: T): boolean {
        console.log(user, "user")
        return true;
    }
    update(user: T, id: number): boolean {
        console.log(user, id, "user id")
        return true;
    }
}

class User2 {
    user: string | undefined;
    password: string | undefined;
}

let u2 = new User();
u2.user = "lcc";
u2.password = "123456lcc";

let db2 = new Mysqldb2<User>();
db2.add(u2)

class Article2 {
    title: string | undefined;
    status: number | undefined;
    declare?: string;
    constructor(params: {
        title: string | undefined,
        status: number | undefined,
        declare?: string
    }) {
        this.title = params.title;
        this.status = params.status;
        this.declare = params.declare;
    }
}

let arPatam = {
    title: "经济文章",
    status: 2,
}
let ar2 = new Article2(arPatam);
let db3 = new Mysqldb2<Article2>();
// db3.add(ar2)
db3.update(ar2, 12)

