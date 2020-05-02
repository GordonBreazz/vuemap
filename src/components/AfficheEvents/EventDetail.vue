<template>
  <v-bottom-sheet v-model="sheet" max-width="90%" inset>
    <v-sheet class="information-window-v-sheet">
      <v-card class="information-window-v-card">
        <div v-if="!panarama">
          <v-card-text class="headline font-weight-bold">
            <v-icon large left>mdi-arrow-decision-outline</v-icon>
            <span class=" font-weight-light">События</span>
          </v-card-text>

          <div width="100%" style="position: relative; height:100vh">
            <v-progress-circular
              mt-5
              size="150"
              width="7"
              color="primary"
              style="position: absolute; top: 25%;"
              indeterminate
              v-if="!panarama"
            ></v-progress-circular>
          </div>
        </div>
13132
      </v-card>
    </v-sheet>
  </v-bottom-sheet>
</template>
<script>
export default {
  data: () => ({
    sheet: false,
    panarama: false
  }),
}
</script>

<style>

</style>