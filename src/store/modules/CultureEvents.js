//const URLAPI = "http://cbs-uu.ru/data/json_proxy.php?status=accepted&start=1588291200&organizations=10872&sort=-start&apiKey=" + process.env.VUE_APP_ALLCULTURE_APIKEY
const URLAPI = "https://all.culture.ru/api/2.5/events?status=accepted&start=1588291200&organizations=10872&sort=-start&apiKey=" + process.env.VUE_APP_ALLCULTURE_APIKEY
const IMAGESPATH = "https://all.culture.ru/uploads/"

function titlePart1(value) {
  let a = value.indexOf("«")
  if (~a) return value.slice(0, a)
  return value
}

function titlePart2(value) {
  let a = value.indexOf("«")
  if (~a) return value.slice(a + 1, -1)
  return ""
}

function planText(value) {
  return value.replace(/<\/?[^>]+>/g, "")
}

function withoutPoint(value) {  
  if (!!value) return value.slice(0, -1)
  return value
}

function short(value) {
  const len = 200
  if (value.length > len) {
    let st = value.slice(0, len)
    return st.slice(0, st.lastIndexOf(" ")) + "..."
  }
  return value
}

function eventDate(start, end) {    
  let ds = new Date(start).toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  let shortDs = new Date(start).toLocaleString("ru", {
    month: "long",
    day: "numeric",
  })

  let de = new Date(end).toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return ds.toString() == de.toString()
    ? ds.toString()
    : shortDs.toString() + " - " + de.toString()
}

function eventTime(start, end) {
  let ds = new Date(start).toLocaleString("ru", {
    hour: "numeric",
    minute: "numeric",
  })

  let de = new Date(end).toLocaleString("ru", {
    hour: "numeric",
    minute: "numeric",
  })
  let result = ds.toString() + " - " + de.toString()
  if (result == '00:00 - 23:59') result = ''
  return result
}

function placeIndex(st, placesArr) {
  const result = st.match(/\d+/)
  let url = "/filial/"
  let index = 1
  if (result) index = result[0]
  url += index + "/"
  // console.log('qq', Number(index), this.placesArr[Number(index)])
  return {
    url,
    name: placesArr[Number(index)].name,
    ind: Number(index),
    address: placesArr[Number(index)].address,
  }
}

export const CultureEvents = {
  namespaced: true,
  actions: {
    async fetchPosts(context) {
      console.log("fetch post сработал")
      const res = await fetch(URLAPI)

      const posts = await res.json()
      //const posts = await res.text()    
      console.log("status", res.ok)
      console.log("ответ", posts)
      context.commit("updatePosts", posts)
      context.commit("stopLoader")      
    },
  },
  mutations: {
    stopLoader(state){
      state.loadingPost = false
    },
    updateFilter(state, value){
      state.postsFilter[value.k] = value.v
      //Vue.set(state.postsFilter,value.k, value.v)
      state.filterString = Math.random().toString(36).substring(7)
    },
    updatePosts(state, posts){
      state.posts = posts.events
    },
    updateSearchRequest(state, d){
      if (!d.value) state.postSearchRequest = ''
       else state.postSearchRequest = String(d.value)
    } 
  },
  state: {
    imagesPath: "https://all.culture.ru/uploads/",
    posts: [],
    postSearchRequest: '',
    postsFilter: {},
    filterString: '',
    loadingPost: true
  },
  getters: {
    getNormPosts(state, getters, rootState) {
      return state.posts.map(function(item, i) {
        let record = {}
        record.key = i
        record.titlePart1 = titlePart1(item.name)
        record.titlePart2 = titlePart2(item.name)
        record.shortDescription = withoutPoint(item.shortDescription)
        record.description = item.description
        record.descriptionText = planText(item.description)
        record.descriptionShort = short( planText(item.description) )
        record.eventTime = eventTime(item.start, item.end)
        record.eventDate = eventDate(item.start, item.end)
        record.tags = item.tags.map((i) => i.name)
        record.imagePath = IMAGESPATH + item.image.name
        record.index = placeIndex(item.places[0].name, rootState.placesArr).ind
        record.name = placeIndex(item.places[0].name, rootState.placesArr).name
        record.address = placeIndex(item.places[0].name, rootState.placesArr).address
        record.url = placeIndex(item.places[0].name, rootState.placesArr).url     
        record.allText = record.titlePart1 + '\n' + record.titlePart2+ '\n' + record.tags.join('\n') + '\n' + record.shortDescription
                         + '\n' + record.descriptionText+ '\n' + record.name + '\n' + record.address
        return record
      })
    },
    getPostCategory(state, getters){
      return getters.getNormPosts.map( (i) => i.titlePart1)
    }
  },
}
