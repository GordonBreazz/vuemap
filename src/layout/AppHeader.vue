<template>
  <v-app-bar app color="primary" dark id="top-page" :clipped-right="$vuetify.breakpoint.lgAndUp">
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="http://cbs-uu.ru/data/assets/logo/bibliocity7.png"
          transition="scale-transition"
          width="70"
        />
      </router-link>

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1"
        contain
        min-width="100"
        src="http://cbs-uu.ru/data/assets/logo/img_fonts (3).png"
        transition="scale-transition"
        width="300"
      />
    </div>

    <v-spacer></v-spacer>
    <div>
      <v-btn
        v-for="(item, index) in mainMenu"
        :key="index"
        :[item.linkName]="item.link"
        target="(item.linkName==href) ? true : false"
        text
        class="hidden-xs-and-down"
        
      >
        <v-icon>{{item.icon}}</v-icon>
        <span class="mr-2 ml-2 hidden-sm-and-down">{{item.title}}</span>
      </v-btn>
<!--
      <v-btn
        href="http://cbs-uu.ru/category/%d1%87%d1%82%d0%be-%d0%bf%d0%be%d1%87%d0%b8%d1%82%d0%b0%d1%82%d1%8c/"
        target="_blank"
        text
        class="hidden-xs-and-down"
      >
        <v-icon>mdi-book-open-page-variant</v-icon>
        <span class="mr-2 ml-2 hidden-sm-and-down">Афиша</span>
      </v-btn>

      <v-btn to="/" text class="hidden-xs-and-down">
        <v-icon>mdi-map-marker-multiple-outline</v-icon>
        <span class="mr-2 ml-2 hidden-sm-and-down">Карта</span>
      </v-btn>
      <v-btn to="/about" text class="hidden-xs-and-down">
        <v-icon>mdi-bookmark-minus-outline</v-icon>
        <span class="mr-2 ml-2 hidden-sm-and-down">О проекте</span>
      </v-btn>-->
    </div>
    <v-app-bar-nav-icon @click.stop="drawer" v-show="!$vuetify.breakpoint.lgAndUp" />
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    drawer() {     
      this.$store.commit("toggleDrawer", !this.$store.getters.getDrawer);
    }
  },
  computed: {
    mainMenu() {
      return this.$store.getters.getMenu
    }
  }
};
</script>

<style>
</style>