<template>
  <v-navigation-drawer
    clipped="$vuetify.breakpoint.lgAndUp"
    app
    right
    class="text-left grey lighten-5"
    v-model="drawer"
  >
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Jane Smith</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list dense>
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
      items: [
        { title: "Афиша", icon: "mdi-book-open-page-variant" },
        { title: "Карта", icon: "mdi-map-marker-multiple-outline" },
        { title: "О проекте", icon: "mdi-bookmark-minus-outline" }
      ]
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