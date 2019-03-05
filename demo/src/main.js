import Vue from 'vue'
import UI from '../../src'
import App from './App.vue'
Vue.use(UI)
new Vue({
    el:'#app',
   render(h){
       return h(App)
   }
})