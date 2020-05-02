<template>
  <v-card :loading="loading" class="mx-auto my-12 mt-0" :max-width="cartHeight">

    <v-img height="250" :src="getImagePath"></v-img>
     <v-card-title class="text--deep-purple">{{eventdata.name | titlePart1}}</v-card-title>
    <v-card-text>
      <h3 class="headline font-weight-light pt-3  cart-title">
      {{eventdata.name | titlePart2 }}
      </h3>
    </v-card-text>

    <v-card-text>
      <v-row align="center" class="mx-0">

      </v-row>

      <div class="my-4 subtitle-1">{{eventdata.shortDescription}}</div>

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
import { mapState } from "vuex";

export default {
  data: () => ({
    loading: false,
    selection: 1
  }),
  methods: {
    showDetail() {      
      this.$emit("showDetailView");
    }
  },
  computed: {
    ...mapState("CultureEvents", ["imagesPath"]),
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
      let a = value.indexOf('«') 
      if (~a) return  value.slice(0, a)
      return value
    },
    titlePart2: function(value) {
      let a = value.indexOf('«')        
      if (~a) return  value.slice(a)
      return ''
    },
   short: function(value){
     const len = 200     
     if (value.length > len) {
       let st = value.slice(0, len)       
       return st.slice(0, st.lastIndexOf(' ')) + '...'
     }  
     return value  
   },
   planText: value => value.replace(/<\/?[^>]+>/g,'')        
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