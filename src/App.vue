<template>
  <v-app>
   <app-header />
    <v-content class="grey lighten-5">
      <v-container class="white" style="box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <v-row>
          <v-col xs12="xs12">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <app-footer/>
    
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

// https://codesandbox.io/s/codesandbox-nuxt-1ht4k
export default {
  components: {
    AppHeader,
    AppFooter
  },
  created() {
    document.title = "Библиогород МАУ ЦБС г. Улан-Удэ";
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>