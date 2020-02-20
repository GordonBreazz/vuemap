<template>
    <div>
      <v-form>
        <v-subheader class="display-1 font-weight-light">Поиск ближайщей библиотеки</v-subheader>
        <v-container class="mb-7">
          <div class="d-flex">
            <v-text-field
              label="Библиотека, остановка общественного транспорта, район"
              outlined
              class="mr-2"
            ></v-text-field>
            <v-btn x-large dark color="primary">Найти</v-btn>
          </div>
          <filter-panel/>
          <v-spacer></v-spacer>
        </v-container>
      </v-form>
    </div>  
</template>

<script>

import FilterPanel from "../components/FilterPanel";

export default {
  components: {
      FilterPanel
  },
}
</script>

<style>

</style>