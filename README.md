# vlf
vue-localforage 
# 安装
```bash
npm install  --save vlf
```
# 引入即可
```javascript
import Vlf from 'vlf'
Vue.use(Vlf)
```
# 方法参数:
```javascript
this.$vlf.createInstance({
    storeName: 'user'
}).then((store) => {
    store.setItem('key', [])
    store.length().then((keys) => {
        console.log(keys)
    })
    store.iterate((value, key, num) => {
        return [key, value]
    }).then((result) => {
        console.log(result)
    })
})
```
---
其他的使用方法和官网都是一样的, 只是在前面加个this.$vlf, 后面的都一样!
The other methods of use are the same as the official website, just add a this.$vlf in front, the same behind!
