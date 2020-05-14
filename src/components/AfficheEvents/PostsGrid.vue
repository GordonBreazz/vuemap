<template>
  <div>
    <v-container class="mt-0">
      <v-row>
        <v-col v-for="(item, i) in posts" :key="i">
          <post-cart :eventdata="item" @showDetailView="detailView" />
        </v-col>
      </v-row>
    </v-container>

    <div class="text-center">
      <v-pagination  :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
    </div>

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
    };
  },
  methods: {
    ...mapActions("CultureEvents", ["fetchPosts"]),
    detailView(itm) {
      this.$refs.eventbar.sheet = true;
    }
  },
  async mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState("CultureEvents", ["posts"])
  },
  watch: {
    posts(a) {
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