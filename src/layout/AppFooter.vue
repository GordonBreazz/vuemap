<template>
  <v-footer padless class="grey lighten-5">
    <v-card class="flex" flat tile color="blue darken-4 mt-3">
      <!--     <v-card-title class="orange darken-4 white--text">
        <strong class="subheading">МЫ В СОЦИАЛЬНЫХ СЕТЯХ, ПРИСОЕДИНЯЙСЯ!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="(icon, index) in icons" :key="index" class="mx-4" dark icon large>
          <v-icon large>{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>-->
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }}
        <strong>© МАУ «Централизованная библиотечная система г. Улан-Удэ»</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-vk", "mdi-youtube", "mdi-instagram"]
  })
};
</script>
 