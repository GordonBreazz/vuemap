<template>
  <div class="about-page">
    <v-parallax src="../assets/material2.jpg" height="350">
      <h2 class="display-2 font-weight-light mb-5">Добро пожаловать!</h2>

      <!--<h2 class="display-1 font-weight-light mb-5">-->
      <h2
        v-bind:class="{'subtitle-1 font-weight-light': $vuetify.breakpoint.xsOnly, 'display-1 font-weight-light': $vuetify.breakpoint.mdAndUp}"
      >
        Это БИБЛИОГОРОД - навигатор по библиотекам
        МАУ ЦБС
        <br />города Улан-Удэ
      </h2>
    </v-parallax>

    <h4
      class="display-1 font-weight-light"
      style="margin-top:80px"
    >В Улан-Удэ 18 городских библиотек, в которых рады каждому</h4>

    <blockquote class="blockquote">
      <p>
        Здесь вы можете начать свое знакомство с возможностями, которые открывают для вас городские библиотеки МАУ ЦБС.
        Централизованная библиотечная система (МАУ ЦБС г. Улан-Удэ)
        <br />это сеть библиотек города Улан-Удэ, объединяющая Центральную городскую библиотеку
        и семнадцать библиотек-филиалов.
      </p>
    </blockquote>

    <v-container class="mt-10 mb-10">
      <v-row justify="center">
        <v-col cols="12" md="11">
          <v-parallax
            src="../assets/mapimage.jpg"
            style="background-color: #17334e;"
            height="350"
            id="litmap"
          >
            <h2 >С помощью интерактивной карты</h2>

            <h2 class="display-1 font-weight-black">Мы поможем Вам найти свою библиотеку</h2>
            <div class="my-2">
              <v-btn class="ma-2" large outlined color="white" @click="goMap">Перейти к карте</v-btn>
            </div>
          </v-parallax>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="10" lg="6">
          <v-row class="text-left">
            <v-col cols="12">
              <h3 class="display-1 font-weight-light" style="padding-left: 70px;">
                В библиотеках МАУ ЦБС г. Улан-Удэ
                <br />вы найдете
              </h3>
            </v-col>
            <v-col cols="12">
              <v-img
                src="../assets/libfr.jpg"
                title="На рисунке изображена Центральная городская библиотека им. Исая К. Калашникова"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="10" lg="6">
          <v-row class="text-left pl-3">
            <v-col
              cols="1"
              style=" background:no-repeat url(https://cbs-uu.ru/data/images/1.svg) 50% 30%; "
            ></v-col>
            <v-col cols="11" class="mb-10">
              <p>Большое разнообразие литературы, которую можно читать в зале или взять домой совершенно бесплатно. Библиотекари и библиографы помогут подобрать нужные издания. А через стационарный компьютер можно получить доступ к электронным базам данных (Электронная библиотека диссертаций, КонсультантПлюс, Гарант, Национальная электронная библиотека и многие другие).</p>
            </v-col>

            <v-col
              cols="1"
              style=" background:no-repeat url(https://cbs-uu.ru/data/images/2.svg) 50% 30%;"
            ></v-col>
            <v-col cols="11" class="mb-10">
              <p>Комфортное пространство с книгами, периодикой, компьютерами. Здесь можно работать, читать, отдыхать, слушать музыку, а также по предварительной договоренности провести мероприятие.</p>
            </v-col>

            <v-col
              cols="1"
              style=" background:no-repeat url(https://cbs-uu.ru/data/images/3.svg) 50% 30%;"
            ></v-col>
            <v-col cols="11" class="mb-10">
              <p>Множество самых разных культурных, просветительских и образовательных событий.</p>
            </v-col>

            <v-col
              cols="1"
              style=" background:no-repeat url(https://cbs-uu.ru/data/images/4.svg) 50% 30%;"
            ></v-col>
            <v-col cols="11">
              <p>Удобный график работы: взрослые библиотеки открыты со вторника по субботу 10:00 до 19:00, а в воскресенье — до 18:00. Время работы может меняться в зависимости от профиля библиотеки и территориального расположения. Смотрите подробное расписание библиотек на карте.</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-0">
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

    <v-container class="mt-0">
      <v-row justify="center">
        <v-col cols="12" lg="9">
          <v-img
            src="https://cbs-uu.ru/data/assets/places/6.jpg"
            title="На рисунке изображена Площадь советов г. Улан-Удэ"
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
</template>


<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      items: [
        {
          src: "https://cbs-uu.ru/data/assets/places/4.jpg"
        },
        {
          src: "https://cbs-uu.ru/data/assets/places/1.jpg"
        },
        {
          src: "https://cbs-uu.ru/data/assets/places/2.jpg"
        },
        {
          src: "https://cbs-uu.ru/data/assets/places/5.jpg"
        }
      ]
    };
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
<style>

.v-parallax__image-container {
  opacity: 1;
}
#litmap .v-parallax__image-container {
  opacity: 0.5;
}
</style>