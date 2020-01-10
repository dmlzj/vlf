<!--
 * @Description: readme
 * @Author: dmlzj
 * @Github: https://github.com/dmlzj
 * @Email: 284832506@qq.com
 * @Date: 2020-01-10 15:00:51
 * @LastEditors  : dmlzj
 * @LastEditTime : 2020-01-10 15:47:14
 * @如果有bug，那肯定不是我的锅，嘤嘤嘤
 -->
# vlf
vue-localforage 
# install
```bash
npm install  --save vlf
```
# how to use
```javascript
import Vlf from 'vlf'
Vue.use(Vlf)
```
# in your code
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
The other methods of use are the same as the official website, just add a this.$vlf in front, the same behind!
