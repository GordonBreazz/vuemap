<template>
 <div>
 <v-container class="mt-0">
    <v-row >
    <v-col
        v-for="(item, i) in posts"
        :key="i"
      >
      <post-cart :eventdata="item" @showDetailView="detailView" />
    </v-col>  
    </v-row>
</v-container>    
<event-detail ref="eventbar" />
 </div> 
</template>

<script>
import { mapState, mapActions } from "vuex";
import PostCart from "./PostCard.vue";
import EventDetail from "./EventDetail";

export default {
  components: {
    PostCart,
    EventDetail
  },
  data() {
    return {
      detail: false
    }
  },
  methods: {    
      ...mapActions("CultureEvents",["fetchPosts"]),
      detailView(){        
        this.$refs.eventbar.sheet = true
      }
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