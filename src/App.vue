<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
          <yandex-map 
              :coords="coords" 
              :zoom="mzoom" 
 
              :controls="controls"
              map-type="map"
              show-all-markers="true"
          >

      <ymap-marker 
        marker-id="123" 
        :coords="coords1"
        :balloon-template="balloonTemplate"
        hint-content="Центральная городская библиотека им. И. Калашникова"    
        :icon="markerIcon"
        @click="onClick"
         cluster-name="ИАУ ЦБС г.Улан-Удэ"
      ></ymap-marker>

      <ymap-marker 
        marker-id="123" 
        :coords="coords2"
        :balloon-template="balloonTemplate"
        hint-content="Центральная городская библиотека им. И. Калашникова"    
        :icon="markerIcon"
        cluster-name="ИАУ ЦБС г.Улан-Удэ"
      ></ymap-marker>

    </yandex-map>
    </v-content>
  </v-app>
</template>

<script>
// https://codesandbox.io/s/codesandbox-nuxt-1ht4k
export default {
  data: () => ({
    coords: [ 51.834464, 107.584574],
    coords1: [51.825683, 107.58439],
    coords2: [51.74677212790084, 107.6959137288361],
    mzoom: 12,
    controls: ["zoomControl"],
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: 'http://cbs-uu.ru//images/assets/pins-maps-library.png',
      imageSize: [50, 50],
      imageOffset: [0, 0],
      content: 'Центральная городская библиотека им. И. Калашникова',
      contentOffset: [-25, 55],
      contentLayout: '<div style="border-radius: 8px; background-color: rgba(117, 190, 218, 0.5);  width: 100px; color: red; font-weight: bold;">$[properties.iconContent]</div>'
    }    
  }),
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Hi, everyone!</h1>
        <p>I am here: ${this.coords}</p>
        <img src="http://via.placeholder.com/350x150">
      `
    }
  },
  methods: {
    onClick(e) {
      //this.coords = e.get('coords');
    this.mzoom = 15
    }
  }  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.ymap-container {
  height: 600px;
}

.red {
  color: red;
}
</style>
