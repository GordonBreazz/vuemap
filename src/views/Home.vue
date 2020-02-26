<template>
  <div class="home">
    <RequastPanel id="requestpanel" />
    <main-map ref="foo" id="mainmap" />    
    <detail-panel id="infopanel" :filial="toFilial" v-on:showPanViewer="panaView"/>
    <button @click="showPanel" id="button100500" style="display: none">Подробнее</button>
    <button @click="goToAll" id="button100600" style="display: none">Все библиотеки на карте</button>
    <button @click="panaView" id="button100700" style="display: none">Панорама на весь экран</button>
    <pana-viewer :toUrl="toUrl" ref="bar" />
  </div>
</template>

<script>
//<info-panel id="infopanel" />
//<detail-panel id="infopanel" />
import MainMap from "../components/MainMap";
import PanaViewer from "../components/PanaViewer";
import RequastPanel from "../components/RequastPanel";
import InfoPanel from "../components/InfoPanel";
import DetailPanel from "../components/DetailPanel";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    RequastPanel,
    InfoPanel,
    MainMap,
    PanaViewer,
    DetailPanel
  },
  computed: {
    toUrl() {
      return this.$store.getters.getPanaUrl;
    },
    toFilial(){
      return this.$store.getters.getCurrentLocationId;
    }
  },
  methods: {
    goToAll() {
      this.$refs.foo.goToAll();
    },
    showPanel() {
      this.$refs.foo.showPanel();
    },
    panaView() {
      this.$refs.bar.panarama = false;
      this.$refs.bar.sheet = true;
      setTimeout(() => {
        this.$refs.bar.panarama = true;
      }, 1000);
    }
  }
};
</script>

