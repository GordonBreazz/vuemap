<template>
  <div>
    <v-list-group value="true" v-for="(item, i) in getSubMenu" :key="i + 900" :value="false">
      <template v-slot:activator>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </template>
      <menu-list :menuItems="item.groups" />
    </v-list-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MenuList from "@/components/menu/MenuList"

export default {
  components: {
    MenuList
  },
  computed: mapGetters("MainMenu",["getSubMenu"])
}
</script>

<style></style>
