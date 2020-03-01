<template>
  <v-list one-line dense>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-home-city-outline</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-row no-gutters>
          <v-col>
            <v-list-item-subtitle class="mt-1">Район</v-list-item-subtitle>
            <v-list-item-title class="mt-1">{{this.getCurrentData.district}}</v-list-item-title>
          </v-col>
          <v-col v-show="this.$store.state.currentLocation.microdistrict">
            <v-list-item-subtitle class="mt-1">Микрорайон</v-list-item-subtitle>
            <v-list-item-title class="mt-1">{{this.getCurrentData.microdistrict}}</v-list-item-title>
          </v-col>
          <v-col>
            <v-list-item-subtitle class="mt-1">Адрес</v-list-item-subtitle>
            <v-list-item-title class="mt-1">{{this.getCurrentData.address}}</v-list-item-title>
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
          <b>{{this.getCurrentData.itinerary.point}}</b>
        </v-list-item-title>
        <v-list-item-subtitle class="mt-1">Номера маршрутов общественного транспорта</v-list-item-subtitle>

        <div class="mt-1" v-if="this.getCurrentData.itinerary.bus">
          <v-list-item-subtitle>
            <v-icon class="ml-2 mr-1">mdi-bus</v-icon>
            {{this.getCurrentData.itinerary.bus}}
          </v-list-item-subtitle>
        </div>

        <div class="mt-1" v-if="this.getCurrentData.itinerary.taxiBus">
          <v-list-item-subtitle>
            <v-icon class="ml-2 mr-1">mdi-bus-side</v-icon>
            {{this.getCurrentData.itinerary.taxiBus}}
          </v-list-item-subtitle>
        </div>
        <div class="mt-1" v-if="this.getCurrentData.itinerary.tram">
          <v-list-item-subtitle>
            <v-icon class="ml-2 mr-1">mdi-tram-side</v-icon>
            {{this.getCurrentData.itinerary.tram}}
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
        <v-list-item-subtitle>Телефон библиотеки</v-list-item-subtitle>
        <v-list-item-title class="mt-1">{{this.getCurrentData.phone}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider inset></v-divider>

    <v-list-item @click>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-email</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-subtitle>E-mail библиотеки</v-list-item-subtitle>
        <v-list-item-title class="mt-1">{{(this.getCurrentData.email).toUpperCase()}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider inset></v-divider>
    <v-list-item @click>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-account-circle-outline</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-subtitle
          v-if="this.getCurrentData.chief.title"
        >{{this.getCurrentData.chief.title}}</v-list-item-subtitle>
        <v-list-item-subtitle v-else>Заведующая библиотекой</v-list-item-subtitle>
        <v-list-item-title class="mt-1">{{this.getCurrentData.chief.name}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  data: () => ({}),
  computed: {
    getCurrentData() {
      return this.$store.getters.getCurrentLocation
    }
  }
};
</script>