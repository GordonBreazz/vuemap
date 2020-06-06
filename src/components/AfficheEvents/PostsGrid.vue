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
      <v-icon left>mdi-magnify</v-icon>
      {{searchMessage()}}
    </v-chip>
    <v-container class="mt-0" id="card-table">
      <v-row>
        <v-col v-for="(item, i) in paginator" :key="i">
          <post-cart :eventdata="item" :colCard="getNormPosts.length" @showDetailView="detailView" @showDetailViewFullscreen="detailViewFullScreen" @showEventInvite="eventInviteView" />
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

    <event-invite ref="eventinvite" />
    <event-detail ref="eventbar" />
    <fullscreen-view ref="fullscreenview" @showEventInvite="eventInviteView"/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import PostCart from "./PostCard.vue";
import EventDetail from "./EventDetail";
import EventInvite from "./EventInvite.vue";
import FullscreenView from "./FullscreenView.vue";

export default {
  components: {
    PostCart,
    EventDetail,
    EventInvite,
    FullscreenView
  },
  data() {
    return {
      detail: false,
      currentPage: 1
      //postPerPage: 6
    };
  },
  methods: {
    ...mapMutations("CultureEvents", ["updateSearchRequest"]),
    detailView(itm) {
      this.$refs.eventbar.sheet = true;
      this.$refs.eventbar.eventdata = itm;
    },
    detailViewFullScreen(itm) {
      this.$refs.fullscreenview.showDialog(itm)
      //this.$refs.fullscreenview.dialog = true;
      //this.$refs.fullscreenview.eventdata = itm;
    },
    eventInviteView(itm) {
      this.$refs.eventinvite.dialog = true;
      this.$refs.eventinvite.eventdata = itm;
    },
    next() {
      setTimeout(() => {
        this.$vuetify.goTo("#card-table", { offset: 0 });
      }, 1);
    },
    clearSearchRequest() {
      this.updateSearchRequest({ value: "" });
    },
    searchMessage() {
      if (this.filteredPosts.length > 0)
        return `Найдено ${this.filteredPosts.length} соб. для запроса "${this.postSearchRequest}"`;
      return "Ничего не найдено";
    }
  },
  computed: {
    ...mapState("CultureEvents", ["postSearchRequest", "postsFilter"]),
    ...mapGetters("CultureEvents", ["getNormPosts"]),
    filteredPosts() {
      if (this.getNormPosts.length == 0) return this.getNormPosts;
      let result = this.getNormPosts;

      if (!!this.postsFilter["name"])
        if (this.postsFilter["name"].length > 0) {
          result = result.filter(post => {                      
            return this.postsFilter['name'].some( i => i.trim() ==  post.name.trim()) 
          });
        }

      if (!!this.postsFilter["tags"])
        if (this.postsFilter["tags"].length > 0) {
          result = result.filter(post => {                      
            return this.postsFilter['tags'].some( i => i.trim() ==  post.titlePart1.trim()) 
          });
        }

      // if (!!this.postsFilter["tags"])
      //   if (this.postsFilter["tags"].length > 0) {
      //     result = result.filter(post => {                      
      //       return this.postsFilter['tags'].some( i => {
      //         console.log('i:::::::::::::::::::::',i)
      //         return post.tags.some( j => {
      //           console.log('j:',j, j.trim() == i.trim()) 
      //           return j.trim() == i.trim()
      //           })
      //         }) 
      //     });
      //   }
      //console.log(this.postsFilter['tags'])

      if (String(this.postSearchRequest).trim() == "") return result;
      else
        result = result.filter(post => {
          return post.allText
            .toLowerCase()
            .includes(this.postSearchRequest.toLowerCase());
        });

      if (result.length != 0) this.currentPage = 1;

      return result;
    },
    paginator() {
      let position = (this.currentPage - 1) * this.postPerPage;
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