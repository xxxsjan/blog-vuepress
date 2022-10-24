---
title: 数组的常用方法
date: 2020-11-12
categories:
  - JS
tags:
  - JS-Type
sidebar: auto
---
# 数组
## 数组的创建方法
### 字面量和构造器创建
``` js
// 字面量方式: 这个方法也是我们最常用的，在初始化数组的时候 相当方便
let a1 = []; // []
// 构造器: 实际上 new Array === Array,加不加new 一点影响都没有。
let a2 = Array(); // []
let a3 = new Array(3); // [empty * 3]
```
### ES6 Array.of() 返回由所有参数值组成的数组
+ 定义：返回由所有参数值组成的数组，如果没有参数，就返回一个空数组。
+ 目的：Array.of() 出现的目的是为了解决上述构造器因参数个数不同，导致的行为有差异的问题。
``` js
let a = Array.of(3, 11, 8); // [3,11,8]
let a = Array.of(3); // [3]
```
### ES6 Arrary.from() 将两类对象转为真正的数组
+ 定义：用于将两类对象转为真正的数组（不改变原对象，返回新的数组）。

+ 参数：
  + 第一个参数(必需):要转化为真正数组的对象。
  + 第二个参数(可选): 类似数组的map方法，对每个元素进行处理，将处理后的值放入返回的数组。
  + 第三个参数(可选): 用来绑定this
``` js
// 1. 对象拥有length属性
let obj = {0: 'a', 1: 'b', 2:'c', length: 3};
let arr = Array.from(obj); // ['a','b','c'];
// 2. 部署了 Iterator接口的数据结构 比如:字符串、Set、NodeList对象
let arr = Array.from('hello'); // ['h','e','l','l','o']
let arr = Array.from(new Set(['a','b'])); // ['a','b']
```
## 数组添加和删除
### push 和 pop (原数组发生改变)
+ `push`: 可以接收任意数量的参数，把它们逐个添加到数组末尾，并**返回修改后数组的长度**。
+ `pop`: 数组末尾移除最后一项，减少数组的 length值，然后**返回移除的项**。
``` js
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
arr.push('haha'); // [1, 2, 3, 'haha']
arr.push(...arr2); //  [1, 2, 3, 'haha', 4, 5, 6]
arr.pop(); //  [1, 2, 3, 'haha', 4, 5]
```
### unshift 和 shift (原数组发生改变)
+ `unshift`: 可以接收任意数量的参数，把它们逐个添加到数组开头，并**返回修改后数组的长度**。
+ `shift`: 删除数组第一项，减少数组的 length值，然后**返回移除的项**。
``` js
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
arr.unshift('haha'); // ['haha', 1, 2, 3]
arr.unshift(...arr2); // [4, 5, 6, 'haha', 1, 2, 3]
arr.shift(); // [5, 6, 'haha', 1, 2, 3]
```
### ES6: fill() 填充数组 (原数组发生改变)
+ 定义: 使用给定值，填充一个数组。
+ 参数: 
  + 第一个元素(必须): 要填充数组的值
  + 第二个元素(可选): 填充的开始位置,默认值为0
  + 第三个元素(可选)：填充的结束位置，默认是为this.length
``` js
['a', 'b', 'c'].fill(7)
// [7, 7, 7]
['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']
```
### ES6: copyWithin 填充数组 (原数组发生改变)
+ 定义: 在当前数组内部，将指定位置的成员复制到其他位置,并返回这个数组。
+ 参数: 
  + 第一个元素(必须): 从该位置开始替换数据。如果为负值，表示倒数。
  + 第二个元素(可选): 从该位置开始读取数据，默认为 0。如果为负值，表示倒数
  + 第三个元素(可选)：到该位置前停止读取数据，默认等于数组长度。使用负数可从数组结尾处规定
``` js
var array = [1,2,3,4,5]; 
var array2 = array.copyWithin(0, 3);
console.log(array===array2,array2); // true [4, 5, 3, 4, 5]
var array = [1,2,3,4,5]; 
console.log(array.copyWithin(0, 3, 4)); // [4, 2, 3, 4, 5]
var array = [1,2,3,4,5]; 
console.log(array.copyWithin(0, -2, -1)); // [4, 2, 3, 4, 5]
```
## 数组截取
### splice (原数组发生改变)
+ `splice`: 很强大的数组方法，它有很多种用法，可以实现删除、插入和替换，返回被删除的项目。
  + 参数1：必需。整数，规定添加/删除项目的位置（索引），使用负数可从数组结尾处规定位置。
  + 参数2：必需。要删除的项目数量。如果设置为 0，则不会删除项目。
  + 参数3：可选。向数组添加的新项目。
``` js
let arr = [1, 2, 3, 4, 5, 6];
arr.splice(1, 2); // [1, 4, 5, 6];
arr.splice(1, 0, [9, 9]); // [1, Array(2), 4, 5, 6];
```
### slice 浅拷贝数组的元素
+ `slice`: 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象，且原数组不会被修改。
``` js
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.slice(1, 2)); // [2];
console.log(arr.slice(1); // [2, 3, 4, 5, 6];
```
## 数组拼接、反转、排序
### concat
+ `concat`: 将参数添加到原数组中。这个方法会先创建当前数组一个**副本**，然后将接收到的**参数**添加到这个副本的**末尾**，最后返回**新构建的数组**。在没有给 `concat` 方法传递**参数**的情况下，它只是**复制当前数组**并返回副本。
``` js
let arr2 = [1, 2, 3]
/*
传入的不是数组，则直接把参数添加到数组后面，
如果传入的是数组，则将数组中的各个项添加到数组中。
*/
let arr1 = arr2.concat('bye',[10, 20, 30])
console.log(arr2) // [1, 2, 3]
console.log(arr1) // [1, 2, 3, 'bye', 10, 20, 30]
// 如果传入的是一个二维数组 不会展开二维数组的每一项
let arr1 = arr2.concat('tom',['hh', ['ad', 'hp']])
console.log(arr2) //['nice', 'hello', 'good', 'hi']
console.log(arr1) //['nice', 'hello', 'good', 'hi', 'tom', 'hh', Array[2]]
console.log(arr13[6]) //['ad', 'hp']
```
### ES6扩展运算符...合并数组
+ 定义: 因为ES6的语法更简洁易懂，所以现在合并数组我大部分采用...来处理，...运算符可以实现cancat的每个栗子，且更简洁和具有高度自定义数组元素位置的效果
``` js
let a = [2, 3, 4, 5]
let b = [ 4,...a, 4, 4]
console.log(a,b); //  [2, 3, 4, 5] [4,2,3,4,5,4,4]
```
更多关于扩展符的详细内容移步阮一峰大神的 [ECMAScript 6 入门](https://es6.ruanyifeng.com/#docs/array#%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6)
### reverse (原数组发生改变)
+ `reverse`: 反转数组项的顺序。
``` js
let arr2 = [1, 2, 3]
let arr1 = arr2.reverse()
console.log(arr2) // [3, 2, 1]
console.log(arr1) // [3, 2, 1]
//反转字符串的方法
function reverseString(str){
  return str.split(' ').reverse().join(' ');
}
console.log(reverseString('hello World !'))   //! World hello
```
### sort (原数组发生改变)
+ `sort`: 按升序排列数组项即最小的值位于最前面，最大的值排在最后面(比较的是ASCII码表的值)。
  + 若比较函数返回值<0，那么a将排到b的前面;
  + 若比较函数返回值=0，那么a 和 b 相对位置不变;
  + 若比较函数返回值>0，那么b 排在a 将的前面;
1. 数组元素为数字的升序、降序:
``` js
var array =  [10, 1, 3, 4,20,4,25,8];
// 升序 a-b < 0   a将排到b的前面，按照a的大小来排序的 
// 比如被减数a是10，减数是20  10-20 < 0   被减数a(10)在减数b(20)前面   
array.sort(function(a,b){
  return a-b;
});
console.log(array); // [1,3,4,4,8,10,20,25];
// 降序 被减数和减数调换了  20-10>0 被减数b(20)在减数a(10)的前面
array.sort(function(a,b){
  return b-a;
});
console.log(array); // [25,20,10,8,4,4,3,1];
```
2. 数组多条件排序
``` js
var array = [{id:10,age:2},{id:5,age:4},{id:6,age:10},{id:9,age:6},{id:2,age:8},{id:10,age:9}];
    array.sort(function(a,b){
        if(a.id === b.id){// 如果id的值相等，按照age的值降序
            return b.age - a.age
        }else{ // 如果id的值不相等，按照id的值升序
            return a.id - b.id
        }
    })
// [{"id":2,"age":8},{"id":5,"age":4},{"id":6,"age":10},{"id":9,"age":6},{"id":10,"age":9},{"id":10,"age":2}]
```
3. 自定义比较函数，天空才是你的极限
``` js
var array = [{name:'Koro1'},{name:'Koro1'},{name:'OB'},{name:'Koro1'},{name:'OB'},{name:'OB'}];
array.sort(function(a,b){
    if(a.name === 'Koro1'){// 如果name是'Koro1' 返回-1 ，-1<0 a排在b的前面
        return -1
    }else{ // 如果不是的话，a排在b的后面
      return 1
    }
})
// [{"name":"Koro1"},{"name":"Koro1"},{"name":"Koro1"},{"name":"OB"},{"name":"OB"},{"name":"OB"}]
```
## 数组转字符串
### join
+ 定义: join() 方法用于把数组中的所有元素通过指定的分隔符进行分隔放入一个字符串，返回生成的字符串。
+ 参数: str(可选): 指定要使用的分隔符，默认使用逗号作为分隔符。
``` js
let a= ['hello','world'];
let str=a.join(); // 'hello,world'
let str2=a.join('+'); // 'hello+world'
```
+ 使用join方法或者下文说到的toString方法时，当数组中的元素也是数组或者是对象时会出现什么情况？
``` js
let a= [['OBKoro1','23'],'test'];
let str1=a.join(); // OBKoro1,23,test
let b= [{name:'OBKoro1',age:'23'},'test'];
let str2 = b.join(); // [object Object],test
// 对象转字符串推荐JSON.stringify(obj);
```
### toLocaleString
+ 定义: 返回一个表示数组元素的字符串。该字符串由数组中的每个元素的 toLocaleString() 返回值经调用 join() 方法连接（由逗号隔开）组成。
``` js
let a=[{name:'OBKoro1'},23,'abcd',new Date()];
let str=a.toLocaleString(); // [object Object],23,abcd,2018/5/28 下午1:52:20
```
### toString() 不推荐
+ 定义: toString() 方法可把数组转换为由逗号链接起来的字符串。该方法的效果和join方法一样，都是用于数组转字符串的，但是与join方法相比没有优势，也不能自定义字符串的分隔符，因此不推荐使用。
``` js
let b= [ 'toString','演示'].toString(); // toString,演示
let a= ['调用toString','连接在我后面']+'啦啦啦'; // 调用toString,连接在我后面啦啦啦
```
## 数组查询
### indexOf
+ 定义: 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
  + 参数1：必需。被查找的元素。
  + 参数2：开始查找的位置(不能大于等于数组的长度，返回-1)，接受负值，默认值为0。
+ 注意：
  + indexOf()不能识别NaN
  + 数组的indexOf搜索跟字符串的indexOf不一样,数组的indexOf使用严格相等===搜索元素，即数组元素要完全匹配才能搜索成功
``` js
let a=['啦啦',2,4,24,NaN]
console.log(a.indexOf('啦'));  // -1 
console.log(a.indexOf('NaN'));  // -1 
console.log(a.indexOf('啦啦')); // 0
```
### lastIndexOf
+ 定义: 方法返回指定元素,在数组中的最后一个的索引，如果不存在则返回 -1。（从数组后面往前查找）
  + 参数1：必需。被查找的元素。
  + 参数2：逆向查找开始位置，默认值数组的长度-1，即查找整个数组。
+ 注意：
  + 第二个参数为正值。如果该值大于或等于数组的长度，则整个数组会被查找。
  + 第二个参数为负值。将其视为从数组末尾向前的偏移。(比如-2，从数组最后第二个元素开始往前查找)
  + 第二个参数为负值。其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。
``` js
let a=['OB',4,'Koro1',1,2,'Koro1',3,4,5,'Koro1']; // 数组长度为10
let b=a.lastIndexOf('Koro1',4); // 从下标4开始往前找 返回下标2
let b=a.lastIndexOf('Koro1',100); //  大于或数组的长度 查找整个数组 返回9
let b=a.lastIndexOf('Koro1',-11); // -1 数组不会被查找
let b=a.lastIndexOf('Koro1',-9); // 从第二个元素4往前查找，没有找到 返回-1
```
### ES7 includes()
+ 定义: 返回一个布尔值，表示某个数组是否包含给定的值
  + 参数1：必需。被查找的元素。
  + 参数2：默认值为0，参数表示搜索的起始位置，接受负值。正值超过数组长度，数组不会被搜索，返回false。负值绝对值超过长数组度，重置从0开始搜索。
``` js
let a=['OB','Koro1',1,NaN];
let b=a.includes(NaN); // true 识别NaN
let b=a.includes('Koro1',100); // false 超过数组长度 不搜索
let b=a.includes('Koro1',-3);  // true 从倒数第三个元素开始搜索 
let b=a.includes('Koro1',-100);  // true 负值绝对值超过数组长度，搜索整个数组
```
## 数组遍历
#### js中遍历数组并不会改变原始数组的方法总共有12个:
``` js
ES5：
forEach、every 、some、 filter、map、reduce、reduceRight
ES6：
find、findIndex、keys、values、entries
```
#### 关于遍历：
+ 关于遍历的效率，可以看一下这篇详解JS遍历
+ 尽量不要在遍历的时候，修改后面要遍历的值
+ 尽量不要在遍历的时候修改数组的长度（删除/添加）
### for循环
+ 语法：
``` js
for (let i; i < arr.length; i++) {

}
```
### for of循环
+ 语法：
``` js
for (let val of arr) {
  console.log(val)
}
for (let index of arr.keys()) {
  console.log(index)
}
```
### forEach
+ 定义：按升序为数组中含有效值的每一项执行一次回调函数。
+ 语法：
``` js
array.forEach(function(currentValue, index, arr), thisValue)
```
+ 参数：
  + function(必须): 数组中每个元素需要调用的函数。
  + thisValue(可选): 当执行回调函数时this绑定对象的值，默认值为undefined
+ 注意：
  + 无法中途退出循环，只能用return退出本次回调，进行下一次回调。
  + 它总是返回 undefined值,即使你return了一个值。
``` js
let a = [1, 2, ,3]; // 最后第二个元素是空的，不会遍历(undefined、null会遍历)
let obj = { name: 'OBKoro1' };
let result = a.forEach(function (value, index, array) { 
  a[3] = '改变元素';
  a.push('添加到尾端，不会被遍历')
  console.log(value, 'forEach传递的第一个参数'); // 分别打印 1 ,2 ,改变元素
  console.log(this.name); // OBKoro1 打印三次 this绑定在obj对象上
  // break; // break会报错
  return value; // return只能结束本次回调 会执行下次回调
  console.log('不会执行，因为return 会执行下一次循环回调')
}, obj);
console.log(result); // 即使return了一个值,也还是返回undefined
// 回调函数也接受接头函数写法
```
### 下面类似语法同样适用这些规则
```
1. 对于空数组是不会执行回调函数的
2. 对于已在迭代过程中删除的元素，或者空元素会跳过回调函数
3. 遍历次数再第一次循环前就会确定，再添加到数组中的元素不会被遍历。
4. 如果已经存在的值被改变，则传递给 callback 的值是遍历到他们那一刻的值。
```
### every
+ 定义：方法用于检测数组所有元素是否都符合函数定义的条件。
+ 方法返回值规则:
  + 如果数组中检测到有一个元素不满足，则整个表达式返回 false，且剩余的元素不会再进行检测。
  + 如果所有元素都满足条件，则返回 true。
``` js
function isBigEnough(element, index, array) { 
  return element >= 10; // 判断数组中的所有元素是否都大于10
}
let result = [12, 5, 8, 130, 44].every(isBigEnough);   // false
let result = [12, 54, 18, 130, 44].every(isBigEnough); // true
// 接受箭头函数写法 
[12, 5, 8, 130, 44].every(x => x >= 10); // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true
```
### some
+ 定义：数组中的是否有满足判断条件的元素。
+ 方法返回值规则:
  + 如果**有一个元素满足条件**，则表达式返回**true**, 剩余的元素不会再执行检测。
  + 如果**没有满足条件的元素**，则返回**false**。
``` js
function isBigEnough(element, index, array) {
  return (element >= 10); //数组中是否有一个元素大于 10
}
let result = [2, 5, 8, 1, 4].some(isBigEnough); // false
let result = [12, 5, 8, 1, 4].some(isBigEnough); // true
```
### filter
+ 定义：返回一个新数组, 其包含通过所提供函数实现的测试的所有元素。
+ 方法返回值规则:
  + 返回**满足条件的值**组成的数组。
``` js
let a = [32, 33, 16, 40];
let result = a.filter(function (value, index, array) {
  return value >= 18; // 返回a数组中所有大于18的元素
});
console.log(result,a);// [32,33,40] [32,33,16,40]
```
### map
+ 定义：创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
+ 方法返回值规则:
  + 对数组中的**每个元素进行处理**，返回**新的数组**
``` js
let a = ['1','2','3','4'];
let result = a.map(function (value, index, array) {
  return value + '新数组的新元素'
});
console.log(result, a); 
// ["1新数组的新元素","2新数组的新元素","3新数组的新元素","4新数组的新元素"] ["1","2","3","4"]
```
### reduce
+ 定义：reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，最终合并为一个值。
+ 语法：
``` js
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```
+ 参数：
  + function(必须): 数组中每个元素需要调用的函数。
    1. total(必须)，初始值, 或者上一次调用回调返回的值
    2. currentValue(必须),数组当前元素的值
    3. index(可选), 当前元素的索引值
    4. arr(可选),数组对象本身
  + initialValue(可选): 指定第一次回调 的第一个参数。
``` js
// 数组求和 
let sum = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
}, 0);
// 6
// 将二维数组转化为一维 将数组元素展开
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (a, b) => a.concat(b),
  []
);
  // [0, 1, 2, 3, 4, 5]
```
### reduceRight
+ 定义：这个方法除了与reduce执行方向相反外，其他完全与其一致，请参考上述 [reduce](#reduce) 方法介绍
### ES6：find()& findIndex()
+ 定义：
  + find()定义：返回第一个符合条件的数组成员，如果没有符合条件的成员，则返回undefined。
  + findIndex()定义：返回第一个符合条件的数组成员的索引，如果所有成员都不符合条件，则返回-1。
``` js
// find
let a = [1, 4, -5, 10].find((n) => n < 0); // 返回元素-5
let b = [1, 4, -5, 10,NaN].find((n) => Object.is(NaN, n));  // 返回元素NaN
// findIndex
let a = [1, 4, -5, 10].findIndex((n) => n < 0); // 返回索引2
let b = [1, 4, -5, 10,NaN].findIndex((n) => Object.is(NaN, n));  // 返回索引4
```
### ES6 keys()&values()&entries()
+ **keys**遍历键名、**values**遍历键值、**entries**遍历键名+键值
+ 定义：三个方法都返回一个新的 Array Iterator 对象，对象根据方法不同包含不同的值。
``` js
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

