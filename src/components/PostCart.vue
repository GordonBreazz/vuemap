<template>
  <v-card :loading="loading" class="mx-auto my-12" :max-width="cartHeight">
    <v-img height="250" :src="getImagePath"></v-img>
    <v-card-text>
      <h3 class="headline font-weight-light pt-3">{{eventdata.name | titlePart1}}<br>
      {{eventdata.name | titlePart2 }}
      </h3>
    </v-card-text>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1">{{eventdata.shortDescription}}</div>

     <p class="text-left" >{{eventdata.description | planText | short}}</p>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">Reserve</v-btn>
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
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
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
     const len = 250     
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
.frow1 {
  border-color: red;
  border-width: 3px;
  height: 50px;
}

</style>