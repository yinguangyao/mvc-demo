## mvc demo
这里比较偷懒，就直接使用了react-imvc框架，没有自己封装起来，但是基本上和我博客中讲的原理是一样的。
### 启动
```
npm i
npm start
```
### service
这里service模拟了网络请求，在实际开发中，service里面应该放网络请求的函数。
### controller
只有以handler开头的函数才能被注入到view中
### model
基于redux改进的一个状态管理库（relite）
### view
view就是容器组件，这里将容器组件的生命周期剥离到controller中了。
### 其他
更多用法，详情见[react-imvc](https://github.com/Lucifier129/react-imvc/blob/master/doc/index.md)