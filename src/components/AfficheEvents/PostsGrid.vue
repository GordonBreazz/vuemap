<template>
  <div>
    <v-container class="mt-0" id="card-table">
      <v-row>
        <v-col v-for="(item, i) in paginator" :key="i">
          <post-cart :eventdata="item" @showDetailView="detailView" />
        </v-col>
      </v-row>
    </v-container>

    <div class="text-center" v-if="pageCount > 0">
      <v-pagination v-on:input="next" v-model="currentPage" :length="pageCount" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
    </div>

    <event-detail ref="eventbar" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import PostCart from "./PostCard.vue";
import EventDetail from "./EventDetail";

export default {
  components: {
    PostCart,
    EventDetail
  },
  data() {
    return {
      detail: false,  
      currentPage: 1
      //postPerPage: 6
    };
  },
  methods: {
    ...mapActions("CultureEvents", ["fetchPosts"]),
    detailView(itm) {
      this.$refs.eventbar.sheet = true;
      this.$refs.eventbar.eventdata = itm
    },
    next(){
      setTimeout( () => {
        this.$vuetify.goTo("#card-table", { offset: 0 });
      }, 1);
      
    }
  },
  async mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState("CultureEvents", ["posts"]),
    ...mapGetters("CultureEvents", ["getNormPosts"]),
    paginator(){
      let position = (this.currentPage-1) * (this.postPerPage)
      console.log('QQQ',this.currentPage, position)
      if (this.currentPage > 1) return this.getNormPosts.slice(position, position + this.postPerPage)
      return this.getNormPosts.slice(0, this.postPerPage) 
    },
    pageCount(){
      return Math.ceil(this.getNormPosts.length / this.postPerPage)
    },    
    postPerPage() {
      let result = 6
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 1
        case "sm":
          return result
        case "md":
          return result
        case "lg":
          return result
        case "xl":
          return result          
      }
    }
        
  },
  watch: {
    posts(a) {
     // console.log('ok',this.pageCount, this.getNormPosts.length)
      // var date = new Date(a[1].start);
      // console.log(a[1].altName);
      // var date1 = new Date(a[1].end);
      // console.log(date.getDay, date1);

      // console.log(
      //   "      watch1",
      //   this.eventDate(a[0].start),
      //   this.eventTime(a[0].start, a[0].end)
      // );
      //console.log("      watch", a[0].createDate);
    }
  }
};
</script>

<style >
</style>