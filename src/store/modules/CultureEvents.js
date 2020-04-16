export const CultureEvents = {
  namespaced: true,
  actions: {
    async fetchPosts(context) {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        
        console.log(res.ok)
        const posts = await res.json()
        context.commit('updatePosts', posts)
    },
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
