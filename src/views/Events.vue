<template>
  <div>
    <v-parallax src="http://cbs-uu.ru/data/images/3.jpg" height="350">
      <h2 class="display-2 font-weight-light mb-5" style="text-shadow: black 1px 1px 20px, red 0px 0px 1em "> Афиша МАУ ЦБС г. Улан-Удэ</h2>

      <!--<h2 class="display-1 font-weight-light mb-5">-->
      <h2
        v-bind:class="{'subtitle-1 font-weight-light': $vuetify.breakpoint.xsOnly, 'display-1 font-weight-light': $vuetify.breakpoint.mdAndUp}"
        style="text-shadow: black 1px 1px 20px, red 0px 0px 1em "
      >
      
       Культурные cобытия в библиотеках. Лекции, выставки, кинопоказы, экскурсии
      </h2>
    </v-parallax>
    <v-container style="margin-top:0px; ">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <h3 class="display-1 font-weight-light">МЫ В СОЦИАЛЬНЫХ СЕТЯХ, ПРИСОЕДИНЯЙСЯ!</h3>

          <v-spacer></v-spacer>

          <v-btn
            v-for="(item, index) in socnet"
            :key="index"
            class="mx-4"
            dark
            icon
            x-large
            color="blue-grey darken-3"
            @click="goSoc(item.link)"
            v-bind:title="item.hint"
          >
            <v-icon x-large>{{ item.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container style="margin-top:0px; ">
      <v-row justify="center">
        <v-col cols="12" lg="9">
          <v-img
            src="http://cbs-uu.ru/data/assets/places/1.jpg"
            title="На рисунке изображен театр Оперы и балета г. Улан-Удэ"
          ></v-img>
          <!--
          <v-carousel hide-delimiters cycle>
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
          </v-carousel>
          -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>>

<script>
//API
//https://all.culture.ru/api/2.3/events?status=accepted&start=1588291200&organizations=10872&sort=-start

import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["socnet"])
  },
  methods: {
    goMap() {
      this.$router.push({ path: "/" });
    },
    goSoc(link) {
      window.open(link);
    }
  }
};
</script>

