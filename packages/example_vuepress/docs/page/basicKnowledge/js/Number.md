---
title: 数字类型
date: 2020-12-28
categories:
  - JS
tags:
  - JS-Type
sidebar: auto
---
## 什么是数字类型
```
（正数、负数、0）为有效数字
NaN(not a number)可以理解为非有效数字
```
## 其他类型转数字
### Number
+ `字符串`：只有里面含有非有效数字就为NaN
+ `布尔`：true为1，false为0
+ `null`：为0；
+ `undefined`：为NaN
+ `普通对象`：会隐实转化为字符串再进行转数字，而对象转字符串都是'[object Object]'。因此包含非有效数字，所以为NaN，**即普通对象转数字都是NaN**
+ `数组`：会将数组从左往右的每一项都变为字符串，然后每一项之间使用逗号进行拼接，最后组成新的字符串；**空数组为0**
``` js
Number('12')        // 12
Number('12PX')      // NaN
Number(true)        // 1
Number(false)       // 0
Number(null)        // 0
Number(undefined)   // NaN
Number({})          // NaN
Number([])          // 0
Number([1])         // 1
Number([1,2])       // NaN
```

### parseInt
+ 从左向右去解析，他的结果是一个整数，遇到特殊字符或者小数点就停止。
``` js
parseInt("12.2")          //12
parseInt("12.2px")        //12
parseInt("width：12.2px") //NaN
parseInt(false)           //NaN
parseInt(null)            //NaN
parseInt(undefined)       //NaN
parseInt({})              //NaN
parseInt([])              //NaN
```
### parseFloat
+ 从左向右去解析，他的结果是一个浮点数，遇到特殊字符会停止，遇到第二个小数点也会停止。其余和parseInt一样
``` js
parseFloat("12")  //12
parseFloat("12.2")  //12.2
parseFloat("12.2px")  //12.2
parseFloat("width:12.2px")  //NaN
parseFloat("12.2.2")  //12.2
```