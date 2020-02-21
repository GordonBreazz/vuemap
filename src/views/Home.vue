<template>
  <div class="home">
    <RequastPanel />
    <main-map ref="foo" />
    <info-panel />
    <button @click="showPanel" id="button100500" style="display: none">Подробнее</button>
    <button @click="goToAll" id="button100600" style="display: none">Все библиотеки на карте</button>
    <button @click="panaView" id="button100700" style="display: none">Панорама на весь экран</button>
    <pana-viewer :toUrl="toUrl" ref="bar" />
  </div>
</template>

<script>
import MainMap from "../components/MainMap"
import PanaViewer from "../components/PanaViewer"
import RequastPanel from "../components/RequastPanel"
import InfoPanel from "../components/InfoPanel"
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    RequastPanel,
    InfoPanel,
    MainMap,
    PanaViewer,
  },
  computed: {
    toUrl() {
      return this.$store.getters.getPanaUrl;
    }
  },
  methods: {
    goToAll() {
      this.$refs.foo.goToAll();
    },
    showPanel() {
      this.$refs.foo.showPanel();
    },
    panaView(a) {
      this.$refs.bar.sheet = true;
    }
  }
};
</script>

