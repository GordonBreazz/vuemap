<template>
  <v-navigation-drawer
    clipped
    app
    right
    class="text-left grey lighten-5"
    v-model="drawer"
    disable-resize-watcher
    :mini-variant="false"
  >
    <v-subheader>МЕНЮ</v-subheader>
    <v-divider></v-divider>

    <flat-menu-list />
  </v-navigation-drawer>
</template>
<script>
import FlatMenuList from "../components/menu/FlatMenuList";
import NestedMenuList from "../components/menu/NestedMenuList";
export default {
  components: {
    FlatMenuList,
    NestedMenuList
  },
  data() {
    return {};
  },
  computed: {
    drawer: {
      get() {
        return this.$store.getters.getDrawer;
      },
      set(val) {
        this.$store.commit("toggleDrawer", val);
      }
    }
  }
};
</script>