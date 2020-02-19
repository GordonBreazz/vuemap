<template>
  <v-bottom-sheet v-model="sheet" max-width="90%" inset>
    <v-sheet class="information-window-v-sheet">
      <v-card v-if="sheet" class="information-window-v-card">
        <iframe
          frameborder="0"
          style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px"
          height="100%"
          width="100%"
          :src="panaUrl"
        >Ваш браузер не поддерживает плавающие фреймы!</iframe>
      </v-card>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: "InformationWindow",
  data: () => ({
    sheet: false,

    panaUrl:'http://cbs-uu.ru/tours/f15/index.html'
  }),
  methods: {},
  created() {
   // let info100500 =  document.querySelector('#button100600').
  //  this.$Bus.$on("my-sample-event", (url) => {
      // Do something…
      //this.panaUrl = url
    //});
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