<template>
  <div>
    <v-list-group value="true" v-for="(item, i) in subMenu" :key="(i+900)">
      <template v-slot:activator>
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item-content>
      </template>
      <menu-list :menuItems="item.groups" />
    </v-list-group>
  </div>
</template>

<script>
import MenuList from "../components/MenuList";
export default {
  components: {
    MenuList
  },
  computed: {
    subMenu() {
      return this.$store.getters.getSubMenu;
    }
  }
};
</script>

<style>
</style>