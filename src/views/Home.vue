<template>
  <div class="home">  
    <UUMap ref="foo"></UUMap>
    <button @click="goToAll" id="button100500" style="display: none">Все библиотеки на карте</button> 
  </div>
</template>

<script>
import UUMap from '../components/UUMap'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    UUMap
  },
  methods: {
    goToAll(){
      this.$refs.foo.goToAll();
    }
  }
}
</script>

