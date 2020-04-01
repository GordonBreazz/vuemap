<template>
  <div class="wrap-text">
    <v-list one-line dense>
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
              <v-icon color="indigo">mdi-phone-classic</v-icon>
            </v-list-item-icon>

        <v-list-item-content>
          <v-tooltip v-model="showT" top>
          <template v-slot:activator="{ on }">
          <v-list-item-subtitle  v-on="on">Телефон библиотеки</v-list-item-subtitle>
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
          <v-icon color="indigo">mdi-email</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-subtitle>E-mail библиотеки</v-list-item-subtitle>
          <v-list-item-title class="mt-1">{{(currentLocation.email).toUpperCase()}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-item @click="openSite()">
        <v-list-item-icon>
          <v-icon color="indigo">mdi-web</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-subtitle>Сайт</v-list-item-subtitle>
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
    </v-list>
  </div>
</template>
<script>
import { mapState } from "vuex";

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
      window.open("http://" + this.currentLocation.site);
    },
    copyToClipboard(el) {
      this.showT = !this.showT
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
  computed: mapState(["currentLocation"])
};
</script>

<style >
.v-list-item__title,
.v-list-item__title li {
  white-space: pre-line !important;
}
</style>