<template>
  <div>
    <v-form>
      <v-subheader
        :class="{'display-1 font-weight-light': $vuetify.breakpoint.mdAndUp, 'headline font-weight-light mb-5': $vuetify.breakpoint.xsOnly}"
      >Ближайщие события в библиотеках</v-subheader>
      <v-container class="mb-3" v-if="$vuetify.breakpoint.mdAndUp">
        <div class="d-flex">
          <v-text-field
            v-model="searchRequest"
            label="Библиотека, название мероприятия, адрес"
            @keyup.enter="sendRequest"
            outlined
            clearable
            class="mr-2"
          ></v-text-field>
          <v-btn x-large dark color="primary" @click="sendRequest">Найти</v-btn>
        </div>
        <div class="d-flex d-flex justify-space-around flex-wrap mt-0">
          <tags-selector
            class="tags-selector mt-2"
            :captions="captionPlaces"
            :dataArr="getPlacesList"
            data-cont="name"
            tagsColor="#111c3b"
            iconTag="mdi-checkbox-marked-circle"
            titleIcon="mdi-map"
          />
          <tags-selector
            class="tags-selector mt-2"
            :captions="captionEvensType"
            :dataArr="getPostCategory"
            data-cont="tags"
            tagsColor="#cf84b7"
            iconTag="mdi-tag-text-outline"
            titleIcon="mdi-tag-multiple-outline"
          />
        </div>
      </v-container>
      <v-container v-else class="mb-3" style="padding: 0px">
        <div >
          <v-text-field
            v-model="searchRequest"
            label="Библиотека, название мероприятия, адрес"
            @keyup.enter="sendRequest"
            outlined
            clearable
            dense            
          ></v-text-field>
          <v-btn  dark color="primary" @click="sendRequest">Найти</v-btn>
        </div>
        <div class="d-flex d-flex justify-space-around flex-wrap mt-0">
          <tags-selector
            class="mt-2"
            :captions="captionPlaces"
            :dataArr="getPlacesList"
            data-cont="name"
            tagsColor="#111c3b"
            iconTag="mdi-checkbox-marked-circle"
            titleIcon="mdi-map"
          />
          <tags-selector
            class="mt-2"
            :captions="captionEvensType"
            :dataArr="getPostCategory"
            data-cont="tags"
            tagsColor="#cf84b7"
            iconTag="mdi-tag-text-outline"
            titleIcon="mdi-tag-multiple-outline"            
          />
        </div>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import TagsSelector from "./TagsSelector";

export default {
  components: {
    TagsSelector
  },
  data() {
    return {
      searchRequest: "",
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
    };
  },
  methods: {
    ...mapMutations("CultureEvents", ["updateSearchRequest"]),
    sendRequest() {
      this.updateSearchRequest({ value: this.searchRequest });
      //console.log(this.searchRequest)
      this.searchRequest = "";
    }
  },
  computed: {
    ...mapGetters("CultureEvents", ["getPlacesList"]),
    ...mapGetters("CultureEvents", ["getPostCategory"])
  }
};
</script>

<style >
.tags-selector {
  min-width: 500px;
}
</style>