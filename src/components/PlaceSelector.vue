<template>
  <div >
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
          v-model="selectedPlaces"
          :items="getPlacesList"
          label="События в отдельных библиотеках"
          multiple
          chips
          hint="События какой библиотеки вас интересуют?"
          persistent-hint          
        > 
        <template v-slot:label v-if="selectedPlaces.length==0">
         <div style="color: black; ">События во всех библиотеках МАУ ЦБС г. Улан-Удэ</div>
        </template>  

          <template v-slot:selection="{item, index}">

            <v-chip class="ma-2" close color="teal" text-color="white" @click:close="close(item)" >
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
      selectedPlaces: []
    };
  },
  methods: {
    close(t) {        
      this.selectedPlaces = this.selectedPlaces.filter((item) => item != t)      
    }
  }
,
  computed: {
    ...mapGetters(["getPlacesList"])
  }  
};
</script>

<style scoped>
.v-select__selection {
    width: 100%;
    justify-content: left;
}
</style>