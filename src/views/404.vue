<template>
  <v-card
    class="mx-auto d-flex align-center justify-center"
    color="red"
    dark
    max-width="100%"
    height="80vh"
  >
    <div>
      <p class="title font-weight-light">Информация не найдена или запрощеная вами страница не существует!</p>

      <div class="font-weight-black" style="font-size:150pt">404</div>

      <v-btn
        class="ma-2"
        outlined
        color="white"
        @click="$router.push('/')"
      >Вернутся на главную страницу</v-btn>

    </div>
    
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
</style>