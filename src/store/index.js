import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
    },
    mutations: {
        changeLocation(state, payload) {
            state.currentLocation = payload.newLocation
        },
        hideInfoPanel(state) {
            state.showInfoPanel = false
        },
        chooseFilial(state) {
            state.filials = state.filials.map(() => false)
            state.filials[+state.currentLocation.id] = true
        }
    },
    state: {
        filials: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ],
        showInfoPanel: false,
        currentLocation: {
            title: '',
            fullTitle: '',
            coords: [51.8664255625606, 107.7454773644181],
            address: '',
            phone: '',
            forChildren: false,
            district: '',
            photoSmall: '',
            id: 0
        },
    },
    getters: {
        getPanaUrl(state) {
            //alert('ok')
            return `http://cbs-uu.ru/tours/f${state.currentLocation.id}/index.html`
        },
        getCaption(state) {
            if (state.currentLocation.title != state.currentLocation.fullTitle)
                return (
                    state.currentLocation.fullTitle +
                    "( " +
                    state.currentLocation.title +
                    " )")
            return state.currentLocation.fullTitle
        }
    }
})
