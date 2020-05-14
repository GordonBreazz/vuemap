<template>
  <v-card :loading="loading" class="mx-auto my-12 mt-0" :max-width="cartWidth">
    <v-img height="250" :src="getImagePath" @click="showDetail" class="photoglr"></v-img>

    <div class="mb-0 text-left" style="width: 100%; margin-left: 0px">
      <v-chip class=" ma-2 text-left mt-3" color="deep-purple" label text-color="white" ><!--color="deep-purple" color="#0b4065" #044d7f-->
        <v-icon  left>mdi-bookmark-multiple-outline</v-icon>
        {{eventdata.name | titlePart1}}
      </v-chip>
    </div>
<div style="min-height: 235px">
    <v-card-text class="mt-2 mb-0 pb-0">
      <h3 class="headline cart-title " style="color: #354288">{{eventdata.name | titlePart2 }}</h3>
      <div
        class="subtitle-1 mt-5 mb-0 pb-0 font-weight-regular"
        style="color: #5f6c7a"
      >{{eventdata.shortDescription | withoutPoint }}</div>
    </v-card-text>

    <v-card-text>
      <v-row align="center" class="mx-0"></v-row>

      <p class="text-justify" v-if="fullinfo">{{eventdata.description | planText }}</p>
      <p class="text-justify" v-else>{{eventdata.description | planText | short}}</p>

    </v-card-text>
</div>
    <v-divider class="mx-4"></v-divider>
    <div class="d-flex justify-space-between"  style="color: #5f6c7a" >
      <v-card-title class="mb-0 subtitle-1">
        <v-icon class="pr-1">mdi-clock-outline</v-icon>
        {{eventTime(eventdata.start, eventdata.end)}}
      </v-card-title>

      <v-card-title class="subtitle-1">
        <v-icon class="pr-1">mdi-calendar-month</v-icon>
        {{eventDate(eventdata.start, eventdata.end)}}
      </v-card-title>
    </div>
    <v-list-item @click>
      <v-avatar color="orange lighten-1" size="50" class="mr-3">
        <span class="white--text headline" >{{placeIndex(eventdata.places[0].name).ind}}</span>
      </v-avatar>
      <v-list-item-content>
        <v-list-item-title class="subtitle-1" >{{placeIndex(eventdata.places[0].name).name}}</v-list-item-title>
        <v-list-item-subtitle>{{placeIndex(eventdata.places[0].name).address}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text  v-if="fullinfo">
      <v-chip-group column active-class="deep-purple accent-4 white--text">
        <v-chip color="deep-purple lighten-3" text-color="white"  v-for="tag in eventdata.tags" :key="tag._id">
          <v-avatar left >
            <v-icon>mdi-tag-text-outline</v-icon>
          </v-avatar>
          {{tag.name}}
        </v-chip>
      </v-chip-group>
    </v-card-text>
    
    <v-card-actions class="text-right pb-2 pr-3">
      <v-btn class="font-weight-medium" color="#354288" text  @click="showDetail">Подробнее</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="font-weight-medium" color="deep-orange" text  @click="showDetail">Записатся на мероприятие</v-btn>
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
    placeIndex(st) {
      const result = st.match(/\d+/);
      let url = "/filial/";
      let index = 1;
      if (result) index = result[0];
      url += index + "/";
      // console.log('qq', Number(index), this.placesArr[Number(index)])
      return {
        url,
        name: this.placesArr[Number(index)].name,
        ind: Number(index),
        address: this.placesArr[Number(index)].address
      };
    }
  },
  computed: {
    ...mapState("CultureEvents", ["imagesPath"]),
    ...mapState(["placesArr"]),
    ...mapGetters(["getNormPost"]),
    getImagePath: function() {
      return this.imagesPath + this.eventdata.image.name;
    },
    cartWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100%";
        case "sm":
          return "100%";
        case "md":
          return "400";
        case "lg":
          return "500";
        case "xl":
          return "550";
      }
    },
    cartTextMinHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "0px";
        case "sm":
          return "250px";
        case "md":
          return "250px";
        case "lg":
          return "240px";
        case "xl":
          return "240px";
      }
    },
      fullinfo() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true
        case "sm":
          return false
        case "md":
          return false
        case "lg":
          return false
        case "xl":
          return false
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

.band:before {

       content: '';
       position: absolute;
       border-style: solid;
       border-color: transparent;
       bottom: -10px;
}

.band {
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.cart-title {
  color: black;
}

.frow1 {
  border-color: red;
  border-width: 3px;
  height: 50px;
}

.photoglr {
  cursor: pointer;
}
</style>