# mock模拟数据

https://www.jianshu.com/p/c5568910e946

## 自动引入

mock文件夹-index.js

自动遍历引入index以外的js文件

```
// 首先引入Mock
const Mock = require('mockjs');

// 设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '200-600'
});

let configArray = [];

// 使用webpack的require.context()遍历所有mock文件
const files = require.context('.', true, /\.js$/);
files.keys().forEach((key) => {
    if (key === './index.js') return;
    configArray = configArray.concat(files(key).default);
});

// 注册所有的mock服务
configArray.forEach((item) => {
    for (let [path, target] of Object.entries(item)) {
        let protocol = path.split('|');
        // Mock.mock(url,type,{}|fn)
        Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
    }
});
```

test.js

```
let demoList = [{
    id: 1,
    name: 'zs',
    age: '23',
    job: '前端工程师'
}, {
    id: 2,
    name: 'ww',
    age: '24',
    job: '后端工程师'
}]

export default {
    'get|/parameter/query': option => {
        return {
            status: 200,
            message: 'success',
            data: demoList
        };
    }
}
```

main.js引入，或者组件里引入

```
require('./mock');
```

## 手动引入

mockdemo.js

```
const Mock = require('mockjs');
let demoList = [{
    id: 1,
    name: 'zs',
    age: '23',
    job: '前端工程师'
}, {
    id: 2,
    name: 'ww',
    age: '24',
    job: '后端工程师'
}]
export default {
    'get|/parameter/query': demoList
}
Mock.mock('/parameter/query', 'get', {
    status: 200,
    message: 'success',
    data: demoList
})
```

页面引入

```
require('./mockdemo.js')
```

