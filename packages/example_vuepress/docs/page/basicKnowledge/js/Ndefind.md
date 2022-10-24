---
title: Null、Undefined、NaN
date: 2020-12-28
categories:
  - JS
tags:
  - JS-Type
sidebar: auto
---
::: tip
一般来说,null表示空对象
undefined表示空非对象
NaN是Number中的特殊数值,非Number.
:::

区别: 
1. 变量没有赋值: `undefined`.
2. 有一个对象(Object),现在不想赋值,给它`null`(推荐) </br> 有一个非对象,不想给他赋值,给他`undefined`(推荐).
3. NaN是一种特殊的number,是"Not a Number"的简写
## not defined
``` js
 console.log(a); // 报错：a is not defined 终止运行
```
个人理解: `not defined`可以翻译为未定义的,上面代码中的a没有被定义,所以会报错并提示`not defined`.
## Undefined
+ 一个定义了但未赋值的变量:
```  js
var a;
console.log(a); // undefined
```
+ 一个定义了但把值赋为undefined的变量:
``` js
var a = undefined;
console.log(a); // undefined
```
+ 一个对象没有赋值的属性
``` js
console.log(window.a); // undefined
var a = [];
console.log(a.b); // undefined
var a = {};
console.log(a.b); // undefined
```
+ 一个没有返回值的函数：
``` js
function a() {}
console.log(a()) // undefined
```
个人理解：`Undefined`表示 **"缺少值"**,就是此处应该有一个值,但是还没有定义.典型用法是: 
``` js
(1) 变量被声明了,但没有赋值时,就等于undefined.
(2) 调用函数时,应该提供的参数没有提供,该参数等于undefined.
(3) 对象没有赋值的属性,该属性的值为undefined.
(4) 函数没有返回值时,默认返回undefined.
```
## Null
``` js
var a = document.getElementById('main');
console.log(a); // null
```
null表示"没有对象",即该处不应该有值.典型用法是：
``` js
(1) 作为函数的参数,表示该函数的参数不是对象.
(2) 作为对象原型链的终点.
```
个人理解: 上面的代码中如果实际上没有id为main的元素,a则是`null`,所以`null`是真正不存在的东西.另外`null`是一个只有一个值的特殊类型.表示一个空对象引用,用`typeof`检测返回是`Object`.第二种的`Undefined`是派生自`null`,所以有`undefined==null`.
## NaN
``` js
var a;
console.log(a*2); // NaN
isNaN('123') // false
isNaN(123) // false
isNaN(Number('as')) // true
```
个人理解: `NaN`是`"Not a Number"`的简写,从字面上看为不是**数字**的意思,当运算无法返回正确的数值时,就会返回`NaN`值.也可以理解一下W3C给出的定义和用法：`NaN` 属性是代表非数字值的特殊值.该属性用于指示某个值不是数字.可以把 `Number` 对象设置为该值,来指示其不是**数字值**.
::: warning 注意
  `Null`是一种特殊的`Object`；NaN是一种特殊的`number`.
:::