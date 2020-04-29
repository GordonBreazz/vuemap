<template>
  
 <v-container>
    <v-row >
    <v-col
        v-for="(item, i) in posts"
        :key="i"
      >
      <post-cart :eventdata="item"/>
    </v-col>  
    </v-row>
</v-container>    
  
</template>

<script>
import { mapState, mapActions } from "vuex";
import PostCart from "./PostCart.vue";

export default {
  components: {
    PostCart
  },
  data() {
    return {}
  },
  methods: {    
      ...mapActions("CultureEvents",["fetchPosts"])
  },
  async mounted() {      
      this.fetchPosts()
  },
  computed: {
    ...mapState("CultureEvents",["posts"]), 
  },
  watch: {
    posts(a) {
      console.log('      watch',a)}

  }
};
</script>

<style >
</style>