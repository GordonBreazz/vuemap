<template>
  <v-footer    
    
    padless
  >
    <v-card
      class="flex"
      flat
      tile
      color="blue darken-4 mt-3"
    >
   

      <v-card-text class="py-2 white--text text-center" > 
        {{ new Date().getFullYear() }} <strong>  © МАУ «Централизованная библиотечная система г. Улан-Удэ»</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    }),
  }
</script>
