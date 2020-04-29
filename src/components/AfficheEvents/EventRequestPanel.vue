<template>
  <div>
    <v-form>
      <v-subheader class="display-1 font-weight-light">Ближайщие события в библиотеках</v-subheader>
      <v-container class="mb-3">
        <div class="d-flex">
          <v-text-field label="Библиотека, название мероприятия" outlined class="mr-2"></v-text-field>
          <v-btn x-large dark color="primary">Найти</v-btn>
        </div>
        <div  class="d-flex d-flex justify-space-around flex-wrap">
          <tags-selector style="min-width: 500px"  :captions="captionPlaces" :dataArr="getPlacesList" tagsColor="#111c3b" iconTag = "mdi-checkbox-marked-circle" titleIcon="mdi-map" />
          <tags-selector style="min-width: 500px" :captions="captionEvensType" :dataArr="getPlacesList" tagsColor="#cf84b7" iconTag = "mdi-tag-text-outline" titleIcon="mdi-tag-multiple-outline"/>
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
    ...mapGetters(["getPlacesList"])
  }
};
</script>

<style >
</style>