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

    <v-list dense>
      <v-subheader>МЕНЮ</v-subheader>
    
      
      <v-divider></v-divider>

      <v-list-item
        v-for="(item, index) in mainMenu"
        :key="index"
        :[item.linkName]="item.link"
        target="(item.linkName==href) ? true : false"
        text
        class="hidden-xs-and-down"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    mainMenu(){
      return this.$store.getters.getMenu

    },
    drawer: {
      get() {
        // console.log('okkkk11:', this.$store.getters.getDrawer)
        return this.$store.getters.getDrawer;
      },
      set(val) {
        //  console.log('okkkk',val)
        this.$store.commit("toggleDrawer", val);
      }
    }
  }
};
</script>