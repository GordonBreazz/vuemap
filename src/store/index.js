import Vue from "vue";
import Vuex from "vuex";
import filials from "./modules/filials";
import shedule from "../data/shedule.js";
import places from "../data/places.js";

Vue.use(Vuex);

function getHoursAndMin(millisec) {
  var seconds = (millisec / 1000).toFixed(0);
  var minutes = Math.floor(seconds / 60);
  var hours = "";
  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    //hours = (hours >= 10) ? hours : "0" + hours;
    minutes = minutes - hours * 60;
    //minutes = (minutes >= 10) ? minutes : "0" + minutes;
  }
  if (hours != "") {
    return hours + " час.";
  }
  return minutes + " мин.";
}

export default new Vuex.Store({
  actions: {},
  mutations: {
    toggleDrawer(state, val) {
      state.drawer = val;
    },
    changeLocation(state, payload) {
      state.currentLocation = payload.newLocation;
    },
    showInfoPanel(state) {
      state.showInfoPanel = true;
    },

    hideInfoPanel(state) {
      state.showInfoPanel = false;
    }
  },
  state: {

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
    drawer: true,
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
    ]
  },
  getters: {
    getSubMenu(state) {
      let arr = places.placemarks.map(function(item) {
        return {
          district: item.district,
          title: item.title,
          link: "/filial/" + item.id + "/"
        };
      });
      let districts = state.districts.map(function(item, i) {
        return { 
            name: item + ' район',
            items: arr.filter( (i) => item == i.district),
            active: false, };
      });
      let sm = [
        {
          title: "Библиотеки",
          icon: "mdi-bookshelf",
          groups: districts,
          items: arr
        }
      ];
      console.log(sm);
     
      return sm;
    },
    getMenu(state) {
      return state.mainMenu;
    },
    getDrawer(state) {
      return state.drawer;
    },
    getFeaturesImages(state) {
      if (!state.currentLocation.features) return [];
      let arr = Array.from(state.currentLocation.features);
      return arr.map(
        item => "http://cbs-uu.ru/data/assets/features_blue/" + item + ".jpg"
      );
    },
    getFoundingYearImage(state) {
      return (
        "http://cbs-uu.ru/data/assets/years/" +
        state.currentLocation.foundingYear +
        ".jpg"
      );
    },
    getClubs(state) {
      return state.currentLocation.clubs;
    },
    getStructure(state) {
      return state.currentLocation.structure;
    },
    getTimetable(state) {
      let today = new Date();
      if (
        today.getMonth() + 1 >= state.summerTimetable.fromMonth &&
        today.getMonth() + 1 <= state.summerTimetable.toMonth
      )
        return state.timeTables[state.currentLocation.shedule].summerTime;
      else return state.timeTables[state.currentLocation.shedule].winterTime;
      //console.log(state.timeTables[state.currentLocation.shedule])
    },
    getWorkStatus(state, getters) {
      let result = {
        status: "закрыто",
        message: ""
      };
      let today = new Date();
      //today.setHours(19, 37, 0, 0)

      let isOffday = getters.getTimetable[today.getDay()].dayoff;

      if (isOffday) {
        result.status = "закрыто";
        result.message = "Сегодня у библиотеки выходной";
        return result;
      }

      let openTime = new Date();
      openTime.setHours(10, 0, 0, 0);

      let closeTime = new Date();
      closeTime.setHours(19, 0, 0, 0);

      let hours1;

      if (today >= openTime && today <= closeTime) {
        hours1 = closeTime - today;
        result.status = "открыто";
        result.message = `До закрытия библиотеки ${getHoursAndMin(hours1)}`;
      } else {
        result.status = "закрыто";
        hours1 = openTime - today;
        if (hours1 < 0) result.message = "Библиотека откроется завтра";
        else
          result.message = `Библиотека откроется через ${getHoursAndMin(
            hours1
          )}`;
      }
      return result;
    },
    getCurrentLocation(state) {
      return state.currentLocation;
    },
    getCurrentLocationSite(state) {
      return state.currentLocation.site;
    },
    getCurrentLocationId(state) {
      return state.currentLocation.id;
    },
    getPanaUrl(state) {
      return `http://cbs-uu.ru/tours/f${state.currentLocation.id}/index.html`;
    },
    getCaption(state) {
      if (state.currentLocation.title != state.currentLocation.fullTitle)
        return (
          state.currentLocation.fullTitle +
          "( " +
          state.currentLocation.title +
          " )"
        );
      return state.currentLocation.fullTitle;
    }
  },
  modules: {
    filials
  }
});
