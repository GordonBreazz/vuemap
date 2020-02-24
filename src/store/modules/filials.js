export default {
    actions: {
    },
    mutations: {
        chooseFilial(state, payload) {
            state.filials = state.filials.map(() => false)
            state.filials[+payload.id] = true
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
        ]
    },
    getters: {
        getFilialState(state, payload) {
            //alert('ok')
            return state.filials
        },

    }

}
