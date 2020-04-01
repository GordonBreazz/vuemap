import Vue from "vue"
import Vuex from "vuex"
import shedule from "../data/shedule.js"
import places from "../data/places.js"

Vue.use(Vuex)

function getHoursAndMin(millisec) {
  var seconds = (millisec / 1000).toFixed(0)
  var minutes = Math.floor(seconds / 60)
  var hours = ""
  if (minutes > 59) {
    hours = Math.floor(minutes / 60)
    //hours = (hours >= 10) ? hours : "0" + hours;
    minutes = minutes - hours * 60
    //minutes = (minutes >= 10) ? minutes : "0" + minutes;
  }
  if (hours != "") {
    return hours + " час."
  }
  return minutes + " мин."
}

export default new Vuex.Store({
  actions: {},
  mutations: {
    toggleDrawer(state, val) {
      state.drawer = val
    },
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
    ebd:[
      {
        title: 'ЛитРес: библиотека',
        url: 'https://www.litres.ru/o-kompanii/biblioteka/'
      },
      {
        title: 'Национальная электронная библиотека (НЭБ)',
        url: 'https://rusneb.ru/'
      }
    ],    
    socnet: [
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/CBSUU",
        hint: "Наш Facebook"
      },
      {
        icon: "mdi-vk",
        link: "https://vk.com/ik_kalashnikov",
        hint: "Наша группа ВКонтакте"
      },
      {
        icon: "mdi-youtube",
        link: "https://www.youtube.com/channel/UC3xc55v1C4hJmRp6UCLWeyQ",
        hint: "Наш канал на YouTube"
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/cbs_kalashnikov/",
        hint: "Наш Instagram"
      }
    ],
    placemarks: places.placemarks,
    pathMode: false,
    districts: ["Советский", "Октябрьский", "Железнодорожный"],
    mainMenu: [
      {
        title: "Афиша",
        link:
          "http://cbs-uu.ru/category/%d1%87%d1%82%d0%be-%d0%bf%d0%be%d1%87%d0%b8%d1%82%d0%b0%d1%82%d1%8c/",
        icon: "mdi-book-open-page-variant",
        linkName: "href"
      },
      {
        title: "Карта",
        link: "/",
        icon: "mdi-map-marker-multiple-outline",
        linkName: "to"
      },
      {
        title: "О проекте",
        link: "/about",
        icon: "mdi-bookmark-minus-outline",
        linkName: "to"
      }
    ],
    drawer: false,
    timeTables: shedule.scheduleTypes,
    summerTimetable: shedule.summerTimetable,
    winterTimetable: shedule.winterTimetable,
    showInfoPanel: false,
    currentLocation: {
      title: "",
      fullTitle: "",
      coords: [51.8664255625606, 107.7454773644181],
      address: "",
      phone: "",
      forChildren: false,
      district: "",
      photoSmall: "",
      id: 0,
      text: "",
      microdistrict: "",
      email: "",
      itinerary: {
        point: "1",
        bus: "",
        tram: "",
        taxiBus: ""
      },
      chief: {
        title: "",
        name: ""
      },
      libraryType: "",
      shedule: 0
    },
    structure: ["Читальный зал"],
    clubs: [],
    site: "cbs-uu.ru",
    foundingYear: 2019,
    features: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19
    ],
    photos: [],
    forChildren: ['Детская литература', 'Игровая зона'],
    copyCentre: [],
    services: []
  },
  getters: {
    getAllPhoto(state){
      if (state.currentLocation.photos)
        return state.currentLocation.photos
      return []  
    },
    getTwoPhoto(state){    
      if (state.currentLocation.photos)
        return state.currentLocation.photos.slice(0,2) 
    },
    getOtherPhoto(state){   
      if (state.currentLocation.photos) 
        if (state.currentLocation.photos.length > 2)
          return {photo: state.currentLocation.photos[2], cnt: state.currentLocation.photos.length-2}       
    },    
    getPath(state) {
      return `/filial/${state.currentLocation.id}/`
    },
    getSubMenu(state) {
      let arr = state.placemarks.map(function(item) {
        return {
          district: item.district,
          title: item.title,
          link: "/filial/" + item.id + "/",
          id: item.id
        }
      })
      let districts = state.districts.map(function(item, i) {
        return {
          name: item + " район",
          items: arr.filter(i => item == i.district),
          ids: arr.filter(i => item == i.district).map((i)=> i.id),
          idx: i
        }
      })
      let sm = [
        {
          title: "Библиотеки",
          icon: "mdi-bookshelf",
          groups: districts,
          items: arr
        }
      ]
      console.log(sm)

      return sm
    },
    getDrawer(state) {
      return state.drawer
    },
    getFeaturesImages(state) {
      if (!state.currentLocation.features) return []
      let arr = Array.from(state.currentLocation.features)
      return arr.map(
        item => "http://cbs-uu.ru/data/assets/features_blue/" + item + ".jpg"
      )
    },
    getFoundingYearImage(state) {
      return (
        "http://cbs-uu.ru/data/assets/years/" +
        state.currentLocation.foundingYear +
        ".jpg"
      )
    },
    getTimetable(state) {
      let today = new Date()
      if (
        today.getMonth() + 1 >= state.summerTimetable.fromMonth &&
        today.getMonth() + 1 <= state.summerTimetable.toMonth
      )
        return state.timeTables[state.currentLocation.shedule].summerTime
      else return state.timeTables[state.currentLocation.shedule].winterTime
      //console.log(state.timeTables[state.currentLocation.shedule])
    },
    getWorkStatus(state, getters) {
      let result = {
        status: "закрыто",
        message: ""
      }
      let today = new Date()
      //today.setHours(19, 37, 0, 0)

      let isOffday = getters.getTimetable[today.getDay()].dayoff

      if (isOffday) {
        result.status = "закрыто"
        result.message = "Сегодня у библиотеки выходной"
        return result
      }

      let openTime = new Date()
      openTime.setHours(10, 0, 0, 0)

      let closeTime = new Date()
      closeTime.setHours(19, 0, 0, 0)

      let hours1

      if (today >= openTime && today <= closeTime) {
        hours1 = closeTime - today
        result.status = "открыто"
        result.message = `До закрытия библиотеки ${getHoursAndMin(hours1)}`
      } else {
        result.status = "закрыто"
        hours1 = openTime - today
        if (hours1 < 0) result.message = "Библиотека откроется завтра"
        else
          result.message = `Библиотека откроется через ${getHoursAndMin(
            hours1
          )}`
      }
      return result
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
          " )"
        )
      return state.currentLocation.fullTitle
    }
  }
})
