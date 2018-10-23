# vuebi

```bash
node4+ npm3+ # 环境要求
npm i # 在项目里面安装依赖
npm run ios # ios
npm run ad # android
```


### 目录结构

```
   |
   ├──ios/                       * IOS
   |
   ├──android/                   * Android
   |
   ├──src/                       * 主程序
   │   │
   │   │──components             * 所有组件
   │   │
   │   └──pages                  * 所有页面
   │   │
   │   └──images                 * 本地图片资源
   │   │
   │   └──utils                  * 将任何不涉及依赖的复用纯函数进行封装
   │   │
   │   └──common                 * 项目常用的封装
   │   │
   │   └──styles                 * 所有样式变量集中管理，为可切换主题做准备
   │   │
   │   └──service                * 封装服务性质的包，如api网络服务、全局配置、缓存封装..
   │   │
   │   └──index.js               * App入口
   │
   │──package.json               * 包信息
   │
   │──.babelrc                   * Babel配置
   │
   └──reset.sh                   * 清空项目依赖并重新安装
```

### 配置 antd-mobile-rn 的方法

本脚手架已经配置好环境，直接使用即可

1. install dep

  ```bash
  $ npm install antd-mobile-rn --save
  $ npm install babel-plugin-import --save-dev
  ```
2. config `.babelrc`

  ```json
  {"plugins": [["import", { "libraryName": "antd-mobile-rn" }]]}
  ```

### 组件示例代码

  ```jsx
  import React, { Component } from 'react';
  import { AppRegistry } from 'react-native';
  import { Button } from 'antd-mobile-rn';

  class HelloWorldApp extends Component {
    render() {
      return <Button>Start</Button>;
    }
  }

  AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
  ```


### common 

项目中常用的封装都放在 `src/common` 文件夹下面:

- `global.js`：全局变量方法，一般用来设置全局的方法，具体的详情可以查看 `global.js` 内部注释。

  - 系统判断

  - 屏幕宽高

  - 主题设置

  - 图片初始化

- `FontSize.js`：基于屏幕分辨率封装的字体适配方法

- `Tool.js`：封装常用的属性方法，比如说判断是否登录，或者其他的方法

- `px2dp.js`: 在这个方法中，提供了用来做安卓，iOS换算px的方法，使用方法：width:px2dp(100)

- `Config.js` ：配置文件，可以用来配置请求网址，配置表等等

- `SetTheme.js`：更改主题，`teaset` 提供了设置主题和切换主题的能力，但有些时候，有一些颜色需要再手动调整，所以创建了这个文件，通过在里面配置颜色，并在项目的入口中引入，就可以直接使用 `Theme.backgroundColor` 的方式调用颜色了。

- `Request.js`：基于 `react-native-fetch-blob` 封装的网络请求方法

- `Images.js`：在`src/images`目录下的 `index.js` ，统一管理项目图片资源


### 常见问题解决方案

#### 项目问题

- run-ios失败的时候，可以需要删除ios/build文件夹重新编译
  
- 项目出现诸多异常的时候，直接执行. reset.sh会自动清理缓存并重装，而后执行命令即可

#### Icons图标库问题

- 安装完毕若有异常，则需要执行rnpm link/react-native link











