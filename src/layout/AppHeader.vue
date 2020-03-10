<template>
  <v-app-bar app color="primary" dark id="top-page" clipped-left  >
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
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="http://cbs-uu.ru/data/assets/logo/img_fonts (3).png"
        transition="scale-transition"
        width="300"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="http://cbs-uu.ru/category/%d1%87%d1%82%d0%be-%d0%bf%d0%be%d1%87%d0%b8%d1%82%d0%b0%d1%82%d1%8c/"
      target="_blank"
      text
    >
      <v-icon>mdi-book-open-page-variant</v-icon>
      <span class="mr-2 ml-2">Афиша</span>
    </v-btn>

    <v-btn to="/" text>
      <v-icon>mdi-map-marker-multiple-outline</v-icon>
      <span class="mr-2 ml-2">Карта</span>
    </v-btn>
    <v-btn to="/about" text>
      <v-icon>mdi-bookmark-minus-outline</v-icon>
      <span class="mr-2 ml-2">О проекте</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>