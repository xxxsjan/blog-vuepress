### Laya笔记

--个人理解

> 场景scene需要加添加根脚本，直接放那种
>
> 场景中静态的物体可以直接拖脚本给他
>
> 动态的，也就是非固定位置的，需要通过场景的脚本通过`getChildByName().addComponent(脚本)`的方式添加脚本

 回调方法（函数指针）必须由Laya.handler.create(this,function(){})—>来进行创建

```js
// 广播事件
Laya.stage.event("事件")
// 执行事件
Laya.stage.on('事件名'，this，function(){})
// 加载本地或者链接的声音
Laya.SoundManager.playSound("src")
```

#### 横屏设置

game.json 里deviceOrientation":"portrait" 改landscape

layabox设置预览位置 

横屏游戏设置： fixedheight+horizontal

竖屏游戏设置： fixedwidth +vertical