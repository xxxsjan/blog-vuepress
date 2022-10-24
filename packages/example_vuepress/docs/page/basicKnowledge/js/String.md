---
title: 字符串类型
date: 2020-12-28
categories:
  - JS
tags:
  - JS-Type
sidebar: auto
---
## 字符串的创建方法
``` js
let str = new String('Hello World');
let str = String('Hello World');
let str = 'xxx';
```
## 字符串拼接
### 运算符'+'
``` js
let a = 'hello';
let b = ',world';
let c = a + b;
console.log(c); // 'hello,world'
```
### concat 
+ 将两个或多个字符的文本组合起来，返回一个新的字符串。
``` js
let a = 'hello';
let b = ',world';
let c = a.concat(b);
console.log(c); // 'hello,world'
```
### join
+ `join`: 使用一个指定的分隔符把数组串分割成一个字符。
```js
let a = new Array('jpg', 'bmp', 'gif', 'png');
let b = a.join('|');
console.log(b); // 'jpg|bmp|gif|png'
```
## 判断字符串是否在另一个字符串中
### indexOf 和 lastIndexOf
+ 共同点都是返子字符串的**索引**。（如果没有找到该子字符串，则返回-1）
+ `indexOf`: 方法从字符串的开头向后搜索子字符串，返子字符串的**索引**。
+ `lastIndexOf`: 方法是从字符串的末尾向前搜索子字符串，返子字符串的**索引**。
``` js
let a = 'hello';
a.indexOf('l'); // 2
a.indexOf('l', 3); // 3
a.indexOf('l', 4); // -1 

a.lastIndexOf('l'); // 3
a.lastIndexOf('l', 1); // -1
a.lastIndexOf('l', 2); // 2
a.lastIndexOf('l', 3); // 3
```
### includes
+ `includes`返回的是**布尔值**
``` js
let a = 'hello';
a.includes('l'); // true
a.includes('l', 3); // true
a.includes('l', 4); // false 
```
### startsWith 和 endsWith
+ `startsWith`：返回**布尔值**，表示参数字符串是否在原字符串的头部。
+ `endsWith`：返回**布尔值**，表示参数字符串是否在原字符串的尾部。
``` js
let s = 'Hello world!';
s.startsWith('Hello') // true
s.endsWith('!') // true
//第二个参数，表示开始搜索的位置。
let s = 'Hello world!';
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
```
### search
+ `search` 执行一个正则表达式匹配查找。如果查找成功，返回字符串中匹配的索引值。否则返回 -1。
``` js
a.search(re); // 0
b.search(re); // 1
```
## 获取指定字符串
### charAt
+ `charAt`: 根据索引返回指定位置指定位置的字符。
``` js
let s = 'Hello world!';
s.charAt('2') // 'l'
s.charAt('4') // '0'
```
## 字符串截取
### slice
+ `slice`: 通过指定的开始和结束位置，提取字符串的某个部分，并以新的字符串返回被提取的部分。(不包括结束位置:含头不含尾)，
``` js
var str = '0123456789';
console.log('原始字符串：', str); // 0123456789
console.log('从索引为3的字符起一直到结束：', str.slice(3));  // 3456789
console.log('从倒数第3个字符起一直到结束：', str.slice(-3));  // 789
console.log('从开始一直到索引为5的前一个字符：', str.slice(0,5));  // 01234
console.log('从开始一直到倒数第3个字符的前一个字符：', str.slice(0,-3));  // 0123456
console.log('从索引为3的字符起到索引为5的前一个字符：', str.slice(3,5));  // 34
console.log('从索引为3的字符起到倒数第3个字符的前一个字符：', str.slice(3,-3));  // 3456
```
### substring
+ `substring`: 通过指定的开始和结束位置，提取字符串的某个部分，并以新的字符串返回被提取的部分。(不包括结束位置:含头不含尾)，
``` js
var str = '0123456789';
console.log('原始字符串：', str);
console.log('从索引为3的字符起一直到结束：', str.substring(3)); // '3456789'
console.log('从索引为20的字符起一直到结束：', str.substring(20)); // ''
console.log('从索引为3的字符起到索引为5的前一个字符结束：', str.substring(3,5)); // '34'
console.log('start比end大会自动交换，结果同上：', str.substring(5,3)); // '34'
console.log('从索引为3的字符起到索引为20的前一个字符结束：', str.substring(3,20)); // '3456789'
```
### substr
+ `substr`: 方法用于返回一个从**指定位置**开始的**指定长度**的子字符串。
``` js
var str = '0123456789';
console.log('从索引为3的字符起一直到结束：', str.substr(3));  // '3456789'
console.log('从索引为20的字符起一直到结束：', str.substr(20));  // ''
console.log('从索引为3的字符起截取长度为5的字符串：', str.substr(3,5));  // '34567'
console.log('从索引为3的字符起截取长度为20的字符串：', str.substr(3,20));  // '3456789'
```
### split
+ `split`: 使用一个指定的分隔符把一个字符串分割存储到数组。
``` js
let str = 'jpg|bmp|gif|ico|png';
let arr = str.split('|');
console.log(str); // ["jpg", "bmp", "gif", "ico", "png"]
```
## 字符串修改
### replace
+ `replace`: 替换与正则表达式或字符串匹配的子串。(如果是字符串的话仅匹配一次。)
``` js
let str = '#home#home'
str.replace('home', 'home1') // "#home1#home"
str.replace(/home/, 'home1') // "#home1#home"
```
### trim
+ `trim`: 用于去除字符串的左右空格。
``` js
let a = '   str   '
let b = a.trim() // b为'str'
```
### repeat
+ `repeat`: 返回一个新字符串，表示将原字符串重复n次。
``` js
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""
```
### padStart 和 padEnd
+ `padStart`: 用于头部补全，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
+ `padEnd`: 用于尾部补全，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
``` js
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
//如果省略第二个参数，默认使用空格补全长度。
'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '
```