---
title: js数据类型介绍
date: 2020-11-12
categories:
 - JS
tags:
 - JS-Type
sidebar: auto
---
## js 数据类型
JavaScript在`ES5`时只有**6种**数据类型，分别为`number` `string` `boolean` `null` `undefined` `object`，
ES6 中新增了一种 `Symbol`。
::: tip
  数值(`number`): 整数和小数(比如1和3。14)。 `NaN` 是 `Number` 中的一种，非 `Number`。 </br>
  字符串(`string`): 文本(比如Hello World)。 </br>
  布尔值(`boolean`): 表示真伪的两个特殊值，即true(真)和false(假) </br>
  `undefined`: 表示"未定义"或不存在，即由于目前没有定义，所以此处暂时没有任何值 </br>
  `null`: 表示空值，即此处的值为空。 </br>
  对象(`object`): 各种值组成的集合。 </br>
  `Symbol`: 每个从Symbol()返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符; </br>
:::
## js如何判断数据类型
### typeof运算符
``` js
console.log(typeof  123);   //number
console.log(typeof  '123');  //string
console.log(typeof  true);   //boolean
console.log(typeof  undefined);  //undefined
console.log(typeof  function() {}); //function
console.log(typeof  null);  //object
console.log(typeof  []);   //object
console.log(typeof  {});  //object
console.log(typeof  new Date());  //object
console.log(typeof  /\d/);  //object
```
我们从以上结果可以看出`typeof`的不足之处，它对于数值、字符串、布尔值分别返回`number`、`string`、`boolean`，函数返回`function`，`undefined`返回`undefined`，除此以外，其他情况都返回`object`。
所以如果返回值为`object`，我们是无法得知值的类型到底是数组还是对象或者其他值。<br/>
为了准确得到每个值的类型，我们必须使用js中另一个运算符`instanceof`。
### instanceof运算符
`instanceof`运算符返回一个布尔值，表示指定对象是否为某个构造函数的实例。
`instanceof`运算符的左边是实例对象，右边是构造函数。它会检查右边构造函数的`ptototype`属性，是否在左边对象的原型链上。
``` js
let b =  [];
b  instanceof Array  //true
b  instanceof Object  //true
```
注意：`instanceof`运算符只能用于对象，不适用原始类型的值。

---
所以我们可以结合`typeof`和`instanceof`运算符的特性，来对一个值的类型做出较为准确的判断。
``` js
//得到一个值的类型
function getValueType(value) {
    let type = '';
    if (typeof value != 'object') {
        type = typeof value;
    } else {
        if (value instanceof Array) {
            type = 'array';
        } else {
            if (value instanceof Object) {
                type = 'object';
            } else {
                type = 'null';
            }
        }
    }
    return type;
}

getValueType(123);    //number
getValueType('123');  //string
getValueType(true);   //boolean
getValueType(undefined); //undefined
getValueType(null);  //null
getValueType([]);     //array
getValueType({});    //object
getValueType(function(){});  //function
```
### Object.prototype.toString方法
``` js
console.log(Object.prototype.toString.call(2))        //[object Number]
console.log(Object.prototype.toString.call("123"))   //[object String]
console.log(Object.prototype.toString.call(true))    //[object Boolean]
console.log(Object.prototype.toString.call(null))     //[object Null]
console.log(Object.prototype.toString.call(undefined))   //[object Undefined]
console.log(Object.prototype.toString.call({}))       //[object Object]
console.log(Object.prototype.toString.call([]))         //[object Array]
console.log(Object.prototype.toString.call(/\d/i))     //[object RegExp]
console.log(Object.prototype.toString.call(Math))   //[object Math]
console.log(Object.prototype.toString.call(new Date()))  //[object Date]
console.log(Object.prototype.toString.call(function f() {}))  //[object Function]
console.log(Object.prototype.toString.call(new Error()))    //[object Error]
```
利用以上特性，我们可以写出一个更为**准确**的判断类型的方法。
``` js
function getValueType(value) {
  let type = Object.prototype.toString.call(value)
  type = type.slice(8, -1)
  return type
}

console.log(getValueType(2))     //Number
console.log(getValueType("123"))  //String
console.log(getValueType(true))   //Boolean
console.log(getValueType(null))   //Null
console.log(getValueType(undefined))   //Undefined
console.log(getValueType({}))    //Object
console.log(getValueType([]))    //Array
console.log(getValueType(/\d/i))   //RegExp
console.log(getValueType(Math))   //Math
console.log(getValueType(new Date()))   //Date
console.log(getValueType(function f() {}))    //Function
console.log(getValueType(new Error()))    //Error
```
