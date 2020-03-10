<template>
  <v-app>
    <app-nav-drawer />
    <app-header />
    <app-content />
    <app-footer />
  </v-app>
</template>

<script>
import AppNavDrawer from "./layout/AppNavDrawer";
import AppHeader from "./layout/AppHeader";
import AppContent from "./layout/AppContent";
import AppFooter from "./layout/AppFooter";

// https://codesandbox.io/s/codesandbox-nuxt-1ht4k
export default {
  data() {
    return {
      tt: true
    };
  },
  components: {
    AppNavDrawer,
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