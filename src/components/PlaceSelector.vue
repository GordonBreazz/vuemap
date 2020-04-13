<template>
  <div>
    <v-form>
      <v-subheader class="display-1 font-weight-light">Ближайщие события в библиотеках</v-subheader>
      <v-container class="mb-3">
        <div class="d-flex">
          <v-text-field
            label="Библиотека, остановка общественного транспорта, район"
            outlined
            class="mr-2"
          ></v-text-field>
          <v-btn x-large dark color="primary">Найти</v-btn>
        </div>
        <v-select
          prepend-icon="mdi-map"
          v-model="e7"
          :items="getPlacesList"
          label="Выбор библиотеки"
          multiple
          chips
          hint="События какой библиотеки вас интересуют?"
          persistent-hint
        >
          <template v-slot:selection="{ item}">
            <v-chip class="ma-2" close color="teal" text-color="white" @click:close="close(item)">
              <v-avatar left>
                <v-icon>mdi-checkbox-marked-circle</v-icon>
              </v-avatar>
              {{item}}
            </v-chip>
          </template>
        </v-select>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      e7: [],
      states: [
        "Во всех",  
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia"
      ]
    };
  },
  methods: {
    close(t) {        
      this.e7 = this.e7.filter((item) => item != t)      
    }
  }
,
  computed: {
    ...mapGetters(["getPlacesList"])
  }  
};
</script>

<style>
</style>