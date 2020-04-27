<!--
 * @Description: readme
 * @Author: dmlzj
 * @Github: https://github.com/dmlzj
 * @Email: 284832506@qq.com
 * @Date: 2020-01-10 15:00:51
 * @LastEditors  : dmlzj
 * @LastEditTime : 2020-01-10 15:51:51
 * @如果有bug，那肯定不是我的锅，嘤嘤嘤
 -->
# vlf

vue-localforage and support typescript

> localForage is a fast and simple storage library for JavaScript. localForage improves the offline experience of your web app by using asynchronous storage (IndexedDB or WebSQL) with a simple, `localStorage`-like API.

> localForage uses localStorage in browsers with no IndexedDB or WebSQL support. See [the wiki for detailed compatibility info][supported browsers].

- [localforage repository](https://github.com/localForage/localForage)
- [localforage documentation](https://localforage.github.io/localForage/)

## Install

```bash
npm install  --save localforage vlf
```

## How to use vlf

```javascript
import Vlf from 'vlf'
import localforage from 'localforage'
Vue.use(Vlf, localforage)
```

## In your code

```javascript
// 创建实例
this.$vlf.createInstance({
    storeName: 'user'
})
// 迭代
this.$vlf.iterate((value, key, num) => {
    console.log(key);
});
// 设置值
this.$vlf.setItem('test', 'hello').then(v => {
    console.log(v);
});

// ...和官方调用一致
// The other methods of use are the same as the official website, just add a this.$vlf in front, the same behind!

```
---
