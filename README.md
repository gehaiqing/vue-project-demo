# vue项目框架demo
使用vue-cli 3生成

## 语言
javascript/typescript

## 框架
Vue + VueX + vue-router + axios  
使用完整的babel-polyfill  

## 代码检查
eslint  
stylelint  

## 目录结构
  ```js
  .
  ├── README.md
  ├── babel.config.js //babel配置
  ├── build //编译配置
  ├── deploy  //部署配置
  ├── mock  //mock数据目录,每个文件一个接口。可以有子目录
  │   ├── index.js
  │   └── test.js
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.js //postcss配置
  ├── public
  │   └── index.html  //入口html文件
  ├── src
  │   ├── App.vue   //页面入口文件
  │   ├── images  //图片文件夹
  │   ├── components  //公共组件
  │   ├── filter //过滤器  
  │   ├── main.ts //程序入口文件，公共组件的引入
  │   ├── router  //路由。下面有b、c两个文件夹，分别放B、C各端的路由配置
  │   │   └── index.ts //路由入口文件
  │   ├── service //接口文件
  │   ├── shims-tsx.d.ts
  │   ├── shims-vue.d.ts
  │   ├── store //vuex状态管理目录，公共的放在根目录，B、C两个端的放在modules目录
  │   │   └── modules //模块目录，里面分为B、C端两个模块
  │   ├── store.ts  //状态管理入口文件
  │   ├── styles  //公共样式文件
  │   ├── tool  //工具库文件
  │   │   └── util.ts
  │   └── views //页面文件。文件夹`b`放b端的页面；文件夹`c`放c端的页面。公共页面就放在views目录下。页面有组件的，放在页面同名的文件夹下面。
  │       ├── b //b端的页面
  │       ├── c //c端的页面
  │       └── Home.vue
  ├── stylelint.config.js //stylelint配置文件
  ├── tsconfig.json //ts配置
  └── vue.config.js //vue配置
  ```
### 安装依赖
```
npm install
```

### 开发
```
npm run dev
```

### 编译
```js
npm run build:test  //测试
npm run build:online  //线上
```

### 部署
```js
npm run deploy:test  //测试
npm run deploy:online  //线上
```

### 发布
```js
npm run release:test  //测试
npm run release:online  //线上
```
