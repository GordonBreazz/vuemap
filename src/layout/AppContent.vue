<template>

  <v-content class="grey lighten-5" >
    <v-container class="white" style="box-shadow: 0 0 10px rgba(0,0,0,0.1);" v-if="($route.name != 'SingIn')">
      <router-view></router-view>
    </v-container>
    <router-view v-else></router-view>
  </v-content>
</template>

<script>
export default {};
</script>

<style>
</style>