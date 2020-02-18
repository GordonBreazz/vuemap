import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ymapPlugin from 'vue-yandex-maps'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(ymapPlugin)
Vue.use(VueScrollTo)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
