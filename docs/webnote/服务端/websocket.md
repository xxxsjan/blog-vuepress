# websocket

[阮一峰](http://www.ruanyifeng.com/blog/2017/05/websocket.html)

[WebSocket其实没那么难](https://zhuanlan.zhihu.com/p/74326818)



- WebSocket.onopen： 连接成功后的回调
- WebSocket.onclose： 连接关闭后的回调
- WebSocket.onerror： 连接失败后的回调
- WebSocket.onmessage： 客户端接收到服务端数据的回调
- webSocket.bufferedAmount： 未发送至服务器的二进制字节数
- WebSocket.binaryType： 使用二进制的数据类型连接
- WebSocket.protocol ： 服务器选择的下属协议
- WebSocket.url ： WebSocket 的绝对路径
- WebSocket.readyState： 当前连接状态，对应的四个常量



WebSocket.CONNECTING: 0

WebSocket.OPEN: 1

WebSocket.CLOSING: 2

WebSocket.CLOSED: 3

方法：

- WebSocket.close() 关闭当前连接

- WebSocket.send(data) 向服务器发送数据

  

