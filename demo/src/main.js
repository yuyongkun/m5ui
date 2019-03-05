import Vue from 'vue'
import App from './App.vue'
import m5ui from '../../lib'
// Vue.config.productionTip=false;
Vue.use(m5ui)
new Vue({
    el:'#app',
   render(h){
       return h(App)
   }
})