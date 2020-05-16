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
import { mapMutations } from "vuex";
export default {
  name: "TagsSelector",
  props: ["captions", "dataArr", "tagsColor", "iconTag", "titleIcon", "dataCont"],
  data() {
    return {
      selectedArr: []
    };
  },
  methods: {
    ...mapMutations("CultureEvents", ["updateFilter"]),    
    close(t) {
      this.selectedArr = this.selectedArr.filter(item => item != t);
    }
  },
  computed: {
  },
  watch: {
    selectedArr(a) {          
      if (a.length > 0) {
        //console.log(this.dataCont, a);
        this.updateFilter({k: this.dataCont, v: a})
      }  
    }
  }
};
</script>

<style >
.v-list-item__content {
  text-align: left;
}
</style>