const URLAPI = 'https://all.culture.ru/api/2.3/events?status=accepted&start=1588291200&organizations=10872&sort=-start'
export const CultureEvents = {
  namespaced: true,
  actions: {
    async fetchPosts(context) {
        console.log('fetch post сработал')
        const res = await fetch(URLAPI)
        
        const posts = await res.json()
        //const posts = await res.text()
        console.log('status',res.ok)
        console.log('ответ',posts)
        context.commit('updatePosts', posts)
    }
  },
  mutations: {
      updatePosts(state, posts){
          state.posts = posts
      }
  },
  state: {
    posts: [],
  },
  getters: {},
}
