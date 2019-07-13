/*
 * @Author: linkzz
 * @Description: app的入口
 * @Date: 2019-07-13 12:53:57
 */
import Vue from 'vue';
import App from './app.vue';

//  创建html节点
const root = document.createElement('div');
document.body.appendChild(root);

// 创建vue实例，挂载到
new Vue({
  render : (h) => h(App)
}).$mount(root)