import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App.vue'
import router from './router'
import ymapPlugin from 'vue-yandex-maps'
import vuetify from './plugins/vuetify'
import VueLazyLoad from 'vue-lazyload'


Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(ymapPlugin)
Vue.use(VueLazyLoad)

Vue.prototype.$Bus = new Vue({})

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
