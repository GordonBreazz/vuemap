import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
    },
    mutations: {
        changeLocation(state, payload) {
            console.log(payload)
            state.currentLocation = payload.newLocation            
        }
    },
    state: {
        currentLocation: { id: 0 },
    },
    getters: {
        getPanaUrl(state) {
            //alert('ok')
            return `http://cbs-uu.ru/tours/f${state.currentLocation.id}/index.html`
        }
    }
})
