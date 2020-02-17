<template>
  <div class="home">
    <UUMap ref="foo"></UUMap>
    <button @click="showPanel" id="button100500" style="display: none">Все библиотеки на карте</button>
    <button @click="goToAll" id="button100600" style="display: none">Все библиотеки на карте</button>
  </div>
</template>

<script>
import UUMap from "../components/UUMap";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    UUMap
  },
  methods: {
    goToAll() {
      this.$refs.foo.goToAll();
    },
    showPanel() {
      this.$refs.foo.showPanel();
    }    
  }
};
</script>

