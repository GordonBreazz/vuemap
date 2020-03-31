<template>
  <div class="map-page">
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>

    <RequastPanel id="requestpanel" />
    <main-map ref="foo" id="mainmap" v-bind="$props" />
    <detail-panel id="infopanel" :filial="toFilial" v-on:showPanViewer="panaView" />

    <button @click="showPanel" id="button100500" style="display: none">Подробнее</button>
    <button @click="goToAll" id="button100600" style="display: none">Все библиотеки на карте</button>
    <button @click="panaView" id="button100700" style="display: none">Панорама на весь экран</button>
    <pana-viewer :toUrl="toUrl" ref="bar" />
  </div>
</template>

<script>
//<info-panel id="infopanel" />
//<detail-panel id="infopanel" />
//    <detail-panel id="infopanel" :filial="toFilial" v-on:showPanViewer="panaView"/>
import MainMap from "../components/MainMap";
import PanaViewer from "../components/PanaViewer";
import RequastPanel from "../components/RequastPanel";
import DetailPanel from "../components/DetailPanel";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    RequastPanel,
    MainMap,
    PanaViewer,
    DetailPanel
  },
  computed: {
    toUrl() {
      return this.$store.getters.getPanaUrl;
    },
    toFilial() {
      return this.$store.getters.getCurrentLocationId;
    },
    getPath() {
      return this.$store.getters.getPath;
    }

  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    fab() {},
    toTop() {
      //this.$vuetify.goTo(0);
      this.$vuetify.goTo("#infopanel", { offset: 30 });
    },
    goToAll() {
      this.$refs.foo.goToAll();
    },
    showPanel() {
     if (this.$store.state.pathMode && this.$router.currentRoute.path !== this.getPath) this.$router.push(this.getPath+'?q=baloon') 
       else  this.$refs.foo.showPanel();
    },
    panaView() {
      this.$refs.bar.panarama = false;
      this.$refs.bar.sheet = true;
      setTimeout(() => {
        this.$refs.bar.panarama = true;
      }, 1000);
    }
  },
  props: ["fId", "frm"]
};
</script>
<style>
.map-page {
  padding-top: 20px;
}
.v-parallax__image-container {
  opacity: 1;
}
#litmap .v-parallax__image-container {
  opacity: 0.5;
}
</style>
