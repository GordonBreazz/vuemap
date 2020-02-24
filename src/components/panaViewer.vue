<template>
  <v-bottom-sheet v-model="sheet" max-width="90%" inset>
    <v-sheet class="information-window-v-sheet">
      <v-card class="information-window-v-card">
        <div v-if="!panarama">
          <v-card-text class="headline font-weight-bold">
            <v-icon large left>mdi-arrow-decision-outline</v-icon>
            <span class=" font-weight-light">3D тур по библиотеке</span>
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
        <iframe
          v-else
          frameborder="0"
          style="overflow:hidden; overflow-x:hidden; overflow-y:hidden; height:100%; width:100%; position:absolute; top:0px; left:0px; right:0px; bottom:0px"
          height="100%"
          width="100%"
          :src="toUrl"
        >Ваш браузер не поддерживает плавающие фреймы!</iframe>
      </v-card>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: "panaViewer",
  props: ["toUrl"],
  data: () => ({
    sheet: false,
    panarama: false
  }),
  mounted() {
  }
};
</script>

<style scoped>
.information-window-v-sheet {
  height: 80vh !important;
}
.information-window-v-card {
  height: 100% !important;
}
</style>