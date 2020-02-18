import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ymapPlugin from 'vue-yandex-maps'
import vuetify from './plugins/vuetify'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false
Vue.use(ymapPlugin)
Vue.use(VueScrollTo)

new Vue({
  router,
  vuetify,
  scrollTo,
  render: h => h(App)
}).$mount('#app')
