<template>
  <div class="wrap-text">
    <v-list one-line dense>


      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-bookshelf</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-row no-gutters>
            <v-col cols="9">
              <v-list-item-subtitle>Тип библиотеки</v-list-item-subtitle>
              <v-list-item-title class="mt-1">{{currentLocation.libraryType}}</v-list-item-title>
              <v-list-item-subtitle class="pt-2">Год основания</v-list-item-subtitle>
              <v-list-item-title class="mt-1">{{currentLocation.foundingYear}}</v-list-item-title>
            </v-col>
            <v-col cols="3" title="Год основания">
              <v-img :src="getFoundingYearImage" width="120"></v-img>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-home-city-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-row no-gutters>
            <v-col>
              <v-list-item-subtitle class="mt-1">Район</v-list-item-subtitle>
              <v-list-item-title class="mt-1 pr-1">{{currentLocation.district}}</v-list-item-title>
            </v-col>
            <v-col v-show="this.$store.state.currentLocation.microdistrict">
              <v-list-item-subtitle class="mt-1">Микрорайон</v-list-item-subtitle>
              <v-list-item-title class="mt-1">{{currentLocation.microdistrict}}</v-list-item-title>
            </v-col>
            <v-col>
              <v-list-item-subtitle class="mt-1">Адрес</v-list-item-subtitle>
              <v-list-item-title class="mt-1">{{currentLocation.address}}</v-list-item-title>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item @click>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-bus-multiple</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            Проезд общественным транспортом -
            <b>{{currentLocation.itinerary.point}}</b>
          </v-list-item-title>
          <v-list-item-subtitle class="mt-1">Номера маршрутов общественного транспорта</v-list-item-subtitle>

          <div class="mt-1" v-if="currentLocation.itinerary.bus">
            <v-list-item-subtitle>
              <v-icon class="ml-2 mr-1">mdi-bus</v-icon>
              {{currentLocation.itinerary.bus}}
            </v-list-item-subtitle>
          </div>

          <div class="mt-1" v-if="currentLocation.itinerary.taxiBus">
            <v-list-item-subtitle>
              <v-icon class="ml-2 mr-1">mdi-bus-side</v-icon>
              {{currentLocation.itinerary.taxiBus}}
            </v-list-item-subtitle>
          </div>
          <div class="mt-1" v-if="currentLocation.itinerary.tram">
            <v-list-item-subtitle>
              <v-icon class="ml-2 mr-1">mdi-tram-side</v-icon>
              {{currentLocation.itinerary.tram}}
            </v-list-item-subtitle>
          </div>
        </v-list-item-content>
      </v-list-item>
           
      <v-divider inset></v-divider>
      <v-list-item @click>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-account-circle-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-subtitle v-if="currentLocation.chief.title">{{currentLocation.chief.title}}</v-list-item-subtitle>
          <v-list-item-subtitle v-else>Заведующая библиотекой</v-list-item-subtitle>
          <v-list-item-title class="mt-1">{{currentLocation.chief.name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    <v-divider inset></v-divider>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-desk</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle class="mb-2">Отделы библиотекки</v-list-item-subtitle>
        <v-list-item-title>
          <ul v-for="item in currentLocation.structure" v-bind:key="item.id">
            <li>{{ item }}</li>
          </ul>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

 <v-divider inset></v-divider>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-account-tie</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle class="mb-2">
          Услуги предоставляемые библиотекой
        </v-list-item-subtitle>

        <v-list-item-title>
          <ul v-for="(item) in currentLocation.services" v-bind:key="item">
            <li :class="item == 'Услуги интернет-кафе' ? 'badge': 'non'">{{ item }}</li>
          </ul>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

      <v-divider inset></v-divider>
      <v-list-item @click>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-phone-classic</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-tooltip v-model="showT" top>
            <template v-slot:activator="{ on }">
              <v-list-item-subtitle v-on="on">Телефон библиотеки</v-list-item-subtitle>
            </template>
            <span>Скопированно в буфер обмена</span>
          </v-tooltip>
          <v-list-item-title
            class="mt-1"
            ref="phoneToCopy"
            @click="copyToClipboard('phoneToCopy')"
          >{{currentLocation.phone}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item @click="openEmail()">
        <v-list-item-icon>
          <v-icon color="indigo">mdi-at</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-subtitle>E-mail библиотеки</v-list-item-subtitle>
          <v-list-item-title class="mt-1">{{(currentLocation.email).toUpperCase()}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item @click="openSite()">
        <v-list-item-icon>
          <v-icon color="indigo">mdi-link-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-subtitle>Сайт</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

            <v-list-item @click="openSiteEx(currentLocation.yandexCard)">
        <v-list-item-icon>
          <v-icon color="indigo">mdi-message-draw</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-subtitle>Библиотека в Яндекс.Справочнике</v-list-item-subtitle>
          <v-list-item-title class="mt-1">Здесь вы можете посмотреть и оставить отзывы о библиотеке</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>    

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mdi-thumb-up-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-subtitle>Библиотека в соц. сетях</v-list-item-subtitle>
          <div class="mt-3 text-center"> 
          <v-btn
            v-for="(item, index) in socnet"
            :key="index"
            class="mr-4"
            dark
            icon
            x-large
            color="blue-grey darken-3"
            :href="currentLocation.socnet[item.name] ? currentLocation.socnet[item.name].link : item.link"   
            :title="currentLocation.socnet[item.name] ? currentLocation.socnet[item.name].hint : item.hint"
            target="blank"
          >
            <v-icon large>{{ item.icon }}</v-icon>
          </v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>




    </v-list>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    showT: false
  }),
  methods: {
    openEmail() {
      window.open(
        "mailto:" + this.currentLocation.email + "?subject=" + "bibliogorod"
      );
    },
    openSite() {
      window.open("https://" + this.currentLocation.site);
    },
    openSiteEx(url) {
      if (url) window.open(url);
    },
    copyToClipboard(el) {
      this.showT = !this.showT;
      let txt = this.$refs[el].textContent;
      console.log("copyToClipboard", txt);
      let textarea = document.createElement("textarea");
      textarea.value = txt;
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  },
  computed: {
    ...mapState(["currentLocation", "socnet"]),
    ...mapGetters(["getFoundingYearImage", "getFeaturesImages"])
  }
};
</script>

<style >

.badge:after {
  content: '₽';
  margin-left: 5px;
  padding-left: 0.35em;
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  vertical-align: baseline;
  background-color: #284ac7;
  border-radius: 50%;
  color: white;
  font-size: 0.9em;
  position: relative;
  top: 2px;
  background-size: cover;
}

.badge {
  white-space: nowrap;
}

.v-list-item__title,
.v-list-item__title li {
  white-space: pre-line !important;
}
</style>