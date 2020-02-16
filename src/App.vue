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
          src="http://cbs-uu.ru/data/assets/logo/bibliocity7.png"
          
          transition="scale-transition"
          width="70"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="http://cbs-uu.ru/data/assets/logo/img_fonts (3).png"
          width="300"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-book-open-page-variant</v-icon>
        <span class="mr-2 ml-2">Афиша</span>        
      </v-btn>

      
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-map-marker-multiple-outline</v-icon>
        <span class="mr-2 ml-2">Карта</span>

      </v-btn>
            <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <v-icon>mdi-bookmark-minus-outline</v-icon>
        <span class="mr-2 ml-2">О проекте</span>

      </v-btn>

    </v-app-bar>

    <v-content>
      <UUMap ref="foo"></UUMap>

    </v-content>
    <button @click="goToAll" id="button100500" style="display: none">Все библиотеки на карте</button> 
  </v-app>
          
</template>

<script>
import UUMap from "./components/UUMap"
// https://codesandbox.io/s/codesandbox-nuxt-1ht4k
export default {
  components: {
    UUMap
  },
  methods: {
    goToAll(){
      this.$refs.foo.goToAll();
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
