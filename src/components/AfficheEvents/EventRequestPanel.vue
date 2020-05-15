<template>
  <div>
    <v-form>
      <v-subheader class="display-1 font-weight-light">Ближайщие события в библиотеках</v-subheader>
      <v-container class="mb-3">
        <div class="d-flex">
          <v-text-field label="Библиотека, название мероприятия" outlined class="mr-2"></v-text-field>
          <v-btn x-large dark color="primary">Найти</v-btn>
        </div>
        <div  class="d-flex d-flex justify-space-around flex-wrap mt-0">
          <tags-selector class="tags-selector mt-2" :captions="captionPlaces" :dataArr="getPlacesList" tagsColor="#111c3b" iconTag = "mdi-checkbox-marked-circle" titleIcon="mdi-map" />
          <tags-selector class="tags-selector mt-2" :captions="captionEvensType" :dataArr="getPostCategory" tagsColor="#cf84b7" iconTag = "mdi-tag-text-outline" titleIcon="mdi-tag-multiple-outline"/>
        </div>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TagsSelector from "./TagsSelector";

export default {
  components: {
    TagsSelector
  },
  data() {
    return {
      captionPlaces: {
        allCategoryText: "События во всех библиотеках МАУ ЦБС г. Улан-Удэ",
        tagsCategoryText: "События в отдельных библиотеках",
        hintText: "События какой библиотеки вас интересуют?"
      },
      captionEvensType: {
        allCategoryText: "Все виды мероприятий",
        tagsCategoryText: "Определённые виды мероприятий",
        hintText: "Какие виды мероприятий вас интересуют?"
      }
    }
  },
  methods: {},
  computed: {
    ...mapGetters(["getPlacesList"]),
    ...mapGetters("CultureEvents", ["getPostCategory"])   
  }
};
</script>

<style >
.tags-selector{
  min-width: 500px;  
}
</style>