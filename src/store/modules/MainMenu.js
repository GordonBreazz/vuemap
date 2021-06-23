export const MainMenu = {
  namespaced: true,
  actions: {},
  mutations: {},
  state: {
    mainMenu: [
      {
        title: "Карта",
        link: "/",
        icon: "mdi-map-marker-multiple-outline",
        linkName: "to"
      },      
      // {
      //   title: "Афиша",
      //   link: "/events",
      //   icon: "mdi-book-open-page-variant",
      //   linkName: "to"
      // },
      {
        title: "О проекте",
        link: "/about",
        icon: "mdi-bookmark-minus-outline",
        linkName: "to"
      }
      // ,
      // {
      //   title: "Вход",
      //   link: "/singin",
      //   icon: "mdi-badge-account-outline",
      //   linkName: "to"
      // }
    ]
  },
  getters: {
    getSubMenu(state, getters, rootState) {
      let arr = rootState.placemarks.map(function(item) {
        return {
          district: item.district,
          title: item.title,
          link: "/filial/" + item.id + "/",
          id: item.id
        }
      })
      let districts = rootState.districts.map(function(item, i) {
        return {
          name: item + " район",
          items: arr.filter(i => item == i.district),
          ids: arr.filter(i => item == i.district).map(i => i.id),
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
      //console.log(sm)
      return sm
    }
  }
}
