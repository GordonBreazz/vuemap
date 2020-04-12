<template>
  <v-app-bar app color="primary" dark id="top-page" :clipped-right="$vuetify.breakpoint.lgAndUp">
    <div class="d-flex align-center">
      <a href="/" >
        <v-img
          alt="Logo"
          class="shrink  mt-2 mr-2"
          contain
          :src="hover ? 'http://cbs-uu.ru/data/assets/logo/bibliocity6.png' : 'http://cbs-uu.ru/data/assets/logo/bibliocity7.png'"
          transition="slide-y-transition"
          width="73"        
          @mouseover="hover = true"
          @mouseleave="hover = false"
        />

      </a>

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1"
        contain
        min-width="100"
        src="http://cbs-uu.ru/data/assets/logo/img_fonts (3).png"
        transition="scale-transition"
        :width="imageHeight"
      />
    </div>

    <v-spacer></v-spacer>

    <drop-down-menu />
    <flat-menu />
    <v-app-bar-nav-icon class="d-sm-flex d-md-none" @click.stop="drawer" />
    
  </v-app-bar>
</template>

<script>
import FlatMenu from "../components/menu/FlatMenu";
import DropDownMenu from "../components/menu/DropDownMenu";
export default {
  components: {
    FlatMenu,
    DropDownMenu
  },
  data() {
    return {
      hover: false
    };
  },
  methods: {
    drawer() {
      this.$store.commit("toggleDrawer", !this.$store.getters.getDrawer);
    }
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200";
        case "sm":
          return "200";
        case "md":
          return "240";
        case "lg":
          return "300";
        case "xl":
          return "300";
      }
    }
  }
};
</script>

<style>
</style>