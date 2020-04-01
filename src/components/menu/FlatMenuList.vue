<template>
  <v-list dense>
    <nested-menu-list />
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
</template>>
<script>
import { mapState } from 'vuex'
import NestedMenuList from "@/components/menu/NestedMenuList";

export default {
  components: {
    NestedMenuList
  },
  computed:  mapState(["mainMenu"])
};
</script>