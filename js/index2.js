"use strict";
// // 装饰器 就是一个方法
// // 普通装饰器
// function logClass(params:any) {
//     console.log(params,"params");
//     params.prototype.apiUrl = "动态扩展属性";
//     params.prototype.run = function() {
//         console.log("我是一个run 方法")
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// // 当前类调用装饰器logClass
// @logClass
// class HttpClass{
//     constructor() {
//     }
//     getData() {
//     }
// }
// // 装饰器工厂:可传参(*)
// function logClass2(params: string) {
//     return function(target:any) {
//         console.log(params,"params")
//         console.log(target,"target")//调用的类
//         target.prototype.apiurl = params;
//     }
// }
// @logClass2("http://www.itying.com/api")
// class HttpClass2{
//     constructor() {
//     }
// }
// var http: any = new HttpClass2();
// console.log(http.apiurl,"apiurl")
// // 类装饰器:更改类里面的构造函数,方法
// function logClass3(target: any) {
//     console.log(target, "");
//     return class extends target {
//         apiurl: any = "我是修改后的数据";
//         getData() {
//             this.apiurl  = this.apiurl + "xxxxxx";
//             console.log(this.apiurl,"this.apiurl")
//         }
//     }
// }
// @logClass3
// class Httpclass3 {
//     public apiurl: string | undefined;
//     constructor() {
//         this.apiurl = "构造行数apiurl";
//     }
//     getData() {
//         console.log(this.apiurl, "")
//     }
// }
// var http3 = new Httpclass3();
// http3.getData();
// // 类装饰器 
// function loginClass4(params:string) {
//     return function(target:any) {
//         console.log(params,"parmas");
//         console.log(target,"target");
//     }
// }
// // 属性装饰器: 可以更改类里面的属性
// function loginProperty(params: any) {
//     // 接受两个参数
//     return function(target:any,attr: any) {
//         console.log(target,"target");
//         console.log(attr,"attr");
//         target[attr] = params;
//     }
// }
// @loginClass4("woshi xiaoxiao")
// class HttpClass4{
//     @loginProperty("http://itying.com")
//     public url:any | undefined;
//     constructor() {
//     }
//     getData() {
//         console.log(this.url,"this.url")
//     }
// }
// var http4 = new HttpClass4();
// http4.getData();
// // 方法装饰器
// function loginMeth(params: any) {
//     console.log(params, "params")
//     return function (target: any, methodName: any, des: any) {
//         console.log(target, "target")
//         console.log(methodName, "methodName")
//         console.log(des.value, "des")///类里面定义的getData()
//         // 扩展类的属性和方法
//         target.apiurl = "new url"
//         target.run = function () {
//             console.log("扩展的方法")
//         };
//         // 修改类的方法,
//         // 1 保存当前方法
//         var oMethod = des.vlaue;
//         des.value = function (...args: any[]) {
//             args = args.map((val) => {
//                 return String(val)
//             });
//             // oMethod.call(this, [...args]);   有问题
//         }
//     }
// }
// class HttpClass5 {
//     public url: any | undefined;
//     constructor() {
//     }
//     @loginMeth("http")
//     getData(...args: any[]) {
//         console.log(args, "getdata")
//     }
// }
// var http5 = new HttpClass5();
// // http5.run();
// http5.getData(123, "xxx");
// // 方法参数装饰器
// function logParms(params: any) {
//     return function (target: any, methodaName: any, paramsIndex: any) {
//         console.log(params, "params")
//         console.log(target, "target")
//         console.log(methodaName, "paramsName")
//         console.log(paramsIndex, "paramsIndex")
//         target.apiUrl = params;
//     }
// }
// class httpClass6 {
//     public url: any | undefined;
//     constructor() {
//     }
//     getData(@logParms('我是zxx') uuid: any) {
//         console.log(uuid, "uuid")
//     }
// }
// var http6 = new httpClass6();
// http6.getData(123455);
// console.log(http6.apiUrl, "http6.apiUrl")
// 装饰器执行顺序: 属性>方法>方法参数>类;  多个同样的装饰器,先执行后面的
function logClass1(params) {
    return function (target) {
        console.log("类装饰器1");
    };
}
function logClass2(params) {
    return function (target) {
        console.log("类装饰器2");
    };
}
function logAttribute(params) {
    return function (target, attrName) {
        console.log("属性装饰器");
    };
}
function logMethod(params) {
    return function (target, attrName, des) {
        console.log("方法装饰器");
    };
}
function logParams1(params) {
    return function (target, attrName, des) {
        console.log("方法参数装饰器1");
    };
}
function logParams2(params) {
    return function (target, attrName, des) {
        console.log("方法参数装饰器2");
    };
}
var HttpClass8 = /** @class */ (function () {
    function HttpClass8() {
    }
    HttpClass8.prototype.getData = function () {
        return true;
    };
    HttpClass8.prototype.setData = function (attr1, attr2) {
    };
    __decorate([
        logAttribute()
    ], HttpClass8.prototype, "apiUrl", void 0);
    __decorate([
        logMethod()
    ], HttpClass8.prototype, "getData", null);
    __decorate([
        __param(0, logParams1()), __param(1, logParams2())
    ], HttpClass8.prototype, "setData", null);
    HttpClass8 = __decorate([
        logClass1("http://www.itying.com/api"),
        logClass2("xxx")
    ], HttpClass8);
    return HttpClass8;
}());
