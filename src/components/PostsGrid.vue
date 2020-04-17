<template>
  <div>
      Здесь будут посты
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {}
  },
  methods: {    
      ...mapActions("CultureEvents",["fetchPosts"])
  },
  async mounted() {      
      this.fetchPosts()
  },
  computed: {
    ...mapState("CultureEvents",["posts"]), 
  },
  watch: {
    posts(a) {
      console.log('      watch',a)}

  }
};
</script>

<style >
</style>