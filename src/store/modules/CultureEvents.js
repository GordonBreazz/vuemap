const URLAPI = 'http://cbs-uu.ru/data/json_proxy.php?status=accepted&start=1588291200&organizations=10872&sort=-start'
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
          state.posts = posts.events
      }
  },
  state: {
    imagesPath: 'https://all.culture.ru/uploads/',
    posts: [],    
  },
  getters: {},
}
