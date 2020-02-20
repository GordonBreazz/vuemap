<template>
  <div class="home">
    <UUMap ref="foo"></UUMap>
    <button @click="showPanel" id="button100500" style="display: none">Подробнее</button>
    <button @click="goToAll" id="button100600" style="display: none">Все библиотеки на карте</button>
    <button @click="panaView" id="button100700" style="display: none">Панорама на весь экран</button>    
    <panaViewer ref="bar" ></panaViewer>
  </div>
</template>

<script>
import UUMap from "../components/UUMap";
import panaViewer from "../components/panaViewer";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    UUMap,
    panaViewer
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
    }, 

  }
};
</script>

