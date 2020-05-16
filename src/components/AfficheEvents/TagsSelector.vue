<template>
  <div>
    <v-select
      :prepend-icon="titleIcon"
      v-model="selectedArr"
      :items="dataArr"
      :label="captions.tagsCategoryText"
      multiple
      chips
      :hint="captions.hintText"
      persistent-hint
    >
      <template v-slot:label v-if="selectedArr.length==0">
        <div style="color: black; ">{{captions.allCategoryText}}</div>
      </template>

      <template v-slot:selection="{item, index}">
        <v-chip class="ma-2" close :color="tagsColor" text-color="white" @click:close="close(item)">
          <v-avatar left>
            <v-icon>{{iconTag}}</v-icon>
          </v-avatar>
          {{item}}
        </v-chip>
      </template>
    </v-select>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TagsSelector",
  props: ["captions", "dataArr", "tagsColor", "iconTag", "titleIcon"],
  data() {
    return {
      selectedArr: []
    };
  },
  methods: {
    close(t) {
      this.selectedArr = this.selectedArr.filter(item => item != t);
    }
  },
  computed: {
    ...mapState("CultureEvents", ["postsFilter"])
  },
  watch: {
    selectedArr(a) {
      // this.postsFilter = [...a]
      console.log(a);
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
.v-list-item__content {
  text-align: left;
}
</style>