import Vue from "vue"
import Vuex from "vuex"
import {MainMenu} from "../store/modules/MainMenu.js"
import {CultureEvents} from "../store/modules/CultureEvents.js"

import shedule from "../bibliocity/shedule.js"
import places from "../bibliocity/places.js"

Vue.use(Vuex)

const FEATURES_IMG_PATH =  'https://cbs-uu.ru/bibliocity/assets/features_lightgray/'

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
    featuresImg:[
      { name: 'aboniment',
        title:'Услуги абонемента',
        img: FEATURES_IMG_PATH + '1.jpg',
        type: 1
      },
      { name: 'partnership',
        title:'Совместные мероприятия библиотеки и других организаций',
        img: FEATURES_IMG_PATH + '2.jpg',
        type: 1
      },
      { name: 'echb',
        title:'Единый читательский билет',
        img: FEATURES_IMG_PATH + '3.jpg',
        type: 1
      },
      { name: 'inet',
        title:'Доступ в интернет',
        img: FEATURES_IMG_PATH + '4.jpg',
        type: 2
      },
      { name: 'pc',
        title:'Предоставление ПК',
        img: FEATURES_IMG_PATH + '5.jpg',
        type: 2
      },
      { name: 'polygraph',
        title:'Полиграфические услуги',
        img: FEATURES_IMG_PATH + '6.jpg',
        type: 2
      },
      { name: 'video',
        title:'Видеопросмотры',
        img: FEATURES_IMG_PATH + '7.jpg',
        type: 1
      },
      { name: 'outwork',
        title:'Внестационарное обслуживание',
        img: FEATURES_IMG_PATH + '8.jpg',
        type: 1
      },
      { name: 'litres',
        title:'Выдача пароля к ЛитРес',
        img: FEATURES_IMG_PATH + '9.jpg',
        type: 1
      },
      { name: 'clubs',
        title:'Клубы и образовательные программы',
        img: FEATURES_IMG_PATH + '10.jpg',
        type: 1
      },
      { name: 'infosearch',
        title:'Поиск информации, услуги библиографов',
        img: FEATURES_IMG_PATH + '11.jpg',
        type: 1
      },
      { name: 'consulting',
        title:'Консультирование',
        img: FEATURES_IMG_PATH + '12.jpg',
        type: 1
      },
      { name: 'disabilities',
        title:'Работа с людьми с ОВЗ',
        img: FEATURES_IMG_PATH + '13.jpg',
        type: 2
      },
      { name: 'esia',
        title:'Центр обслуживания по подтверждению учетных записей ЕСИА',
        img: FEATURES_IMG_PATH + '14.jpg',
        type: 2
      },
      { name: 'coworking',
        title:'Коворкинг',
        img: FEATURES_IMG_PATH + '15.jpg',
        type: 2
      },
      { name: 'memories',
        title:'Мемориальный уголок',
        img: FEATURES_IMG_PATH + '16.jpg',
        type: 1
      },
      { name: 'neb',
        title:'Национальня электронная библиотека',
        img: FEATURES_IMG_PATH + '17.jpg',
        type: 1
      },
      { name: 'wifi',
        title:'Зона Wi-Fi',
        img: FEATURES_IMG_PATH + '18.jpg',
        type: 2
      },
      { name: 'excursions',
        title:'Экскурсии',
        img: FEATURES_IMG_PATH + '19.jpg',
        type: 1
      },
      { name: 'bibliovek',
        title:'Виртуальный музей книги «Библиовек»',
        img: FEATURES_IMG_PATH + '20.jpg',
        type: 1
      },
      { name: 'legalbases',
        title:'Юридические правовые базы',
        img: FEATURES_IMG_PATH + '21.jpg',
        type: 1
      },
      { name: 'children',
        title:'Детская зона',
        img: FEATURES_IMG_PATH + '22.jpg',
        type: 1
      },
      { name: 'piano',
        title:'Предоставление пианино',
        img: FEATURES_IMG_PATH + '23.jpg',
        type: 2
      },
      { name: 'work_with_children',
        title:'Работа с детьми',
        img: FEATURES_IMG_PATH + '24.jpg',
        type: 2
      },
      { name: 'gochs',
        title:'Учебно-консультационный пункт ГО и ЧС',
        img: FEATURES_IMG_PATH + '25.jpg',
        type: 1
      },
      { name: 'renovation',
        title:'Реновация библиотеки',
        img: FEATURES_IMG_PATH + '26.jpg',
        type: 1
      }
    ],
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
        name: "facebook",
        icon: "mdi-facebook",
        link: "https://www.facebook.com/CBSUU",
        hint: "Наш Facebook"
      },
      {
        name: "vk",
        icon: "mdi-vk",
        link: "https://vk.com/ik_kalashnikov",
        hint: "Наша группа ВКонтакте"
      },
      {
        name: "youtube",
        icon: "mdi-youtube",
        link: "https://www.youtube.com/channel/UC3xc55v1C4hJmRp6UCLWeyQ",
        hint: "Наш канал на YouTube"
      },
      {
        name: "instagram",
        icon: "mdi-instagram",
        link: "https://www.instagram.com/cbs_kalashnikov/",
        hint: "Наш Instagram"
      }
    ],
    placemarks: places.placemarks,
    placesArr:  places.getPlacesList(),
    pathMode: false,
    districts: ["Советский", "Октябрьский", "Железнодорожный"],
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
      shedule: 0,
      socnet: {}
    },
    structure: ["Читальный зал"],
    clubs: [],
    site: "cbs-uu.ru",
    foundingYear: 2019,
    featuresList: [
      'aboniment',
      'partnership',
      'echb',
      'inet',
      'pc',
      'polygraph',
      'outwork',
      'litres',
      'clubs',
      'infosearch',
      'consulting',
      'esia',
      'coworking',
      'memories',
      'neb',
      'wifi',
      'excursions',
      'bibliovek',
      'legalbases'
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
    
    getDrawer(state) {
      return state.drawer
    },
    getFeaturesImages(state) {
      if (!state.currentLocation.features) return []
      return state.currentLocation.featuresList.map( 
        item => state.featuresImg.find( i => i.name == item)
      )
    },
    getFoundingYearImage(state) {
      return (
        "https://cbs-uu.ru/bibliocity/assets/years/" +
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
      return `https://cbs-uu.ru/tours/f${state.currentLocation.id}/index.html`
    },
    getCaption(state) {
      if (state.currentLocation.title != state.currentLocation.fullTitle)
        return state.currentLocation.title
      return ''
    },
    getPlacesList(state) {
      return state.placemarks.map( (item) => item.title)
    }
  },
  modules: {
    MainMenu,
    CultureEvents 
  }
})
