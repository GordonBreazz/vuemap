<template>
  <div>
      Здесь будут посты
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {}
  },
  methods: {    
      ...mapActions(["CultureEvents/fetchPosts"]),
  },
  async mounted() {
      this.fetchPosts
      console.log(this.posts)

  },
  computed: {
    ...mapState(['CultureEvents/posts'])    
  }
};
</script>

<style >
</style>