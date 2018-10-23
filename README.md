# vuebi

```bash
node4+ npm3+
npm i
npm run ios # ios
npm run ad # android
```

### 已经配置 antd-mobile-rn 的使用

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

