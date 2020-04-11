<template>
  <div>
    <v-btn
      v-for="(item, index) in mainMenu"
      :key="index"
      :[item.linkName]="item.link"
      target="(item.linkName==href) ? true : false"
      text
      class="hidden-xs-only"
    >
      <v-icon>{{item.icon}}</v-icon>
      <span class="mr-2 ml-2 hidden-sm-and-down">{{item.title}}</span>
    </v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState("Menu",["mainMenu"])
};
</script>