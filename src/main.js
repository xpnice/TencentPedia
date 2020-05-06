import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
// import Element from 'element-ui'
// './styles/element-variables.scss'
Vue.config.productionTip = false
// Vue.use(Element)
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
