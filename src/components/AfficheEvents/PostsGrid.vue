<template>
  <div>
    <v-chip
      v-if="this.postSearchRequest.length > 0 "
      @click="clearSearchRequest"
      @click:close="clearSearchRequest"
      class="ma-2"
      close
      color="primary"
      label
      text-color="white"
    >
      <v-icon left>mdi-card-search-outline</v-icon>
      {{searchMessage()}}
    </v-chip>
    <v-container class="mt-0" id="card-table">
      <v-row>
        <v-col v-for="(item, i) in paginator" :key="i">
          <post-cart :eventdata="item" :colCard="getNormPosts.length" @showDetailView="detailView" />
        </v-col>
      </v-row>
    </v-container>

    <div class="text-center" v-if="pageCount > 0">
      <v-pagination
        v-on:input="next"
        v-model="currentPage"
        :length="pageCount"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>

    <event-detail ref="eventbar" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
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
      currentPage: 1,
      //postPerPage: 6
    };
  },
  methods: {
    ...mapActions("CultureEvents", ["fetchPosts"]),
    ...mapMutations("CultureEvents", ["updateSearchRequest"]),
    detailView(itm) {
      this.$refs.eventbar.sheet = true;
      this.$refs.eventbar.eventdata = itm;
    },
    next() {
      setTimeout(() => {
        this.$vuetify.goTo("#card-table", { offset: 0 });
      }, 1);
    },
    clearSearchRequest() {
      this.updateSearchRequest({ value: "" });
    }, 
    searchMessage(){
      if (this.filteredPosts.length > 0)
        return `Найдено ${this.filteredPosts.length} соб. для запроса "${this.postSearchRequest}`
      return 'Ничего не найдено'  
    }
  },
  async mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState("CultureEvents", ["postSearchRequest"]),
    ...mapGetters("CultureEvents", ["getNormPosts"]),
    filteredPosts() {
      if (this.getNormPosts.length == 0) return this.getNormPosts;

      // if (this.getNormPosts.length > 0)
      //   console.log(this.getNormPosts[0].allText);

      //console.log(this.postSearchRequest);

      if (!this.postSearchRequest) return this.getNormPosts;

      if (this.postSearchRequest.trim() == "") return this.getNormPosts;

      let result = this.getNormPosts.filter(post => {
        return post.allText
          .toLowerCase()
          .includes(this.postSearchRequest.toLowerCase());
      });

      // if (result.length == 0) {
      //   return this.getNormPosts;
      // }

      return result;
    },
    paginator() {
      let position = (this.currentPage - 1) * this.postPerPage;
      console.log("QQQ", this.currentPage, position);
      if (this.currentPage > 1)
        return this.filteredPosts.slice(position, position + this.postPerPage);
      return this.filteredPosts.slice(0, this.postPerPage);
    },
    pageCount() {
      return Math.ceil(this.filteredPosts.length / this.postPerPage);
    },
    postPerPage() {
      let result = 6;
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 1;
        case "sm":
          return result;
        case "md":
          return result;
        case "lg":
          return result;
        case "xl":
          return result;
      }
    }
  }
};
</script>

<style >
</style>