<template>
  <v-card :loading="loading" class="mx-auto my-12 mt-0" :max-width="cartHeight">
    <v-img height="250" :src="getImagePath"></v-img>

    <v-card-title class="red--text mb-0">
      <v-icon class="pr-1" color="red">mdi-bookmark-multiple-outline</v-icon>
      {{eventdata.name | titlePart1}}
    </v-card-title>

    <v-card-title class="red--text mb-0">
      <v-icon class="pr-1" color="red">mdi-clock-outline</v-icon>
      {{eventTime(eventdata.start, eventdata.end)}}
    </v-card-title>
    <v-card-title class="red--text mb-0">
      <v-icon class="pr-1" color="red">mdi-calendar-month</v-icon>
       {{eventDate(eventdata.start, eventdata.end)}}
    </v-card-title>
    <v-card-title class="red--text mb-0">
      <v-icon class="pr-1" color="red">mdi-map-marker-radius-outline</v-icon>
      <router-link :to="placeIndex(eventdata.places[0].name).url">{{placeIndex(eventdata.places[0].name).name}}</router-link>
    </v-card-title>
    <v-card-text>
      <h3 class="headline cart-title">{{eventdata.name | titlePart2 }}</h3>
      <div
        class="subtitle-1 mt-5 mb-0 pb-0 font-weight-regular"
      >{{eventdata.shortDescription | withoutPoint }}</div>
    </v-card-text>

    <v-card-text>
      <v-row align="center" class="mx-0"></v-row>

      <p class="text-justify">{{eventdata.description | planText | short}}</p>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>
    <v-list-item>
      <v-avatar color="orange" size="50">
        <span class="white--text headline">13</span>
      </v-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="showDetail">Reserve</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data: () => ({
    loading: false,
    selection: 1
  }),
  methods: {
    showDetail() {
      this.$emit("showDetailView");
    },
    eventDate(start, end) {
      let ds = new Date(start).toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });

      let de = new Date(end).toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });

      return ds.toString() == de.toString()
        ? ds.toString()
        : ds.toString() + " - " + de.toString();
    },
    eventTime(start, end) {
      let ds = new Date(start).toLocaleString("ru", {
        hour: "numeric",
        minute: "numeric"
      });

      let de = new Date(end).toLocaleString("ru", {
        hour: "numeric",
        minute: "numeric"
      });

      return ds.toString() + " - " + de.toString();
    },
    placeIndex(st){
      const result = st.match(/\d+/)
      let url = '/filial/'
      let index = 1
      if (result) index = result[0]
      url += index + '/'              
     // console.log('qq', Number(index), this.placesArr[Number(index)]) 
      return { url, name: this.placesArr[Number(index)]}
    }

  },
  computed: {
    ...mapState("CultureEvents", ["imagesPath"]),
    ...mapState(["placesArr"]),
    getImagePath: function() {
      return this.imagesPath + this.eventdata.image.name;
    },
    cartHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100%";
        case "sm":
          return "100%";
        case "md":
          return "400";
        case "lg":
          return "400";
        case "xl":
          return "410";
      }
    }
  },
  filters: {
    titlePart1: function(value) {
      let a = value.indexOf("«");
      if (~a) return value.slice(0, a);
      return value;
    },
    titlePart2: function(value) {
      let a = value.indexOf("«");
      if (~a) return value.slice(a + 1, -1);
      return "";
    },
    short: function(value) {
      const len = 200;
      if (value.length > len) {
        let st = value.slice(0, len);
        return st.slice(0, st.lastIndexOf(" ")) + "...";
      }
      return value;
    },
    planText: value => value.replace(/<\/?[^>]+>/g, ""),
    withoutPoint: value => value.slice(0, -1)
  },
  props: ["eventdata"]
};
</script>

<style scoped>
.cart-title {
  color: black;
}

.frow1 {
  border-color: red;
  border-width: 3px;
  height: 50px;
}
</style>