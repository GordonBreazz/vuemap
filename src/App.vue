<template>
  <v-app>
    <app-header />
    <app-content />    
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import AppFooter from "./components/AppFooter";

// https://codesandbox.io/s/codesandbox-nuxt-1ht4k
export default {
  components: {
    AppHeader,
    AppContent,
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