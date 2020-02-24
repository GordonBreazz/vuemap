import Vue from 'vue'
import Vuex from 'vuex'
import filials from './modules/filials'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
    },
    mutations: {
        changeLocation(state, payload) {
            state.currentLocation = payload.newLocation
        },
        showInfoPanel(state) {
            state.showInfoPanel = true
        },

        hideInfoPanel(state) {
            state.showInfoPanel = false
        }        
    },
    state: {

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
        getCurrentLocationId(state) {
            return state.currentLocation.id
        },    
        getPanaUrl(state) {
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
    ,
    modules: {
        filials
    }
})
