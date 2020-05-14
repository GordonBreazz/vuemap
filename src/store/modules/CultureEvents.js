const URLAPI =
  "http://cbs-uu.ru/data/json_proxy.php?status=accepted&start=1588291200&organizations=10872&sort=-start"

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
  value.slice(0, -1)
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

  let de = new Date(end).toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return ds.toString() == de.toString()
    ? ds.toString()
    : ds.toString() + " - " + de.toString()
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

  return ds.toString() + " - " + de.toString()
}

function placeIndex(st) {
  const result = st.match(/\d+/)
  let url = "/filial/"
  let index = 1
  if (result) index = result[0]
  url += index + "/"
  // console.log('qq', Number(index), this.placesArr[Number(index)])
  return {
    url,
    name: this.placesArr[Number(index)].name,
    ind: Number(index),
    address: this.placesArr[Number(index)].address,
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
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts.events
    },
  },
  state: {
    imagesPath: "https://all.culture.ru/uploads/",
    posts: [],
  },
  getters: {
    getNormPost(state) {
      return state.posts.map(function(item) {
        let record = {}
        record.titlePart1 = titlePart1(item.name)
        record.titlePart2 = titlePart2(item.name)
        record.description = item.description
        record.descriptionText = planText(item.description)
        record.descriptionShort = short(item.description)
        record.eventTime = eventTime(item.start, item.end)
        record.eventDate = eventDate(item.start, item.end)
        record.tags = item.tags.map((i) => i.name)
        record.url = item.places[0].name
        record.imagePath = IMAGESPATH + item.image.name
        record.index = placeIndex(item.places[0].name).ind
        record.name = placeIndex(item.places[0].name).name
        record.address = placeIndex(item.places[0].name).address
        return record
      })
    },
  },
}
