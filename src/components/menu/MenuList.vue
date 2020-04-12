<template>
  <v-list class="text-left" dense>
    <v-list-group
      sub-group
      v-for="(gp, h) in menuItems"
      :key="(h+1500)"
      v-model="gshow[h]"
      @click="close()"
      prepend-icon="mdi-chevron-down"
      class="highlighted"
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title class="font-weight-medium">{{gp.name.toUpperCase()}}</v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item
        v-for="(itm, f) in gp.items"
        :key="(f+8000)"
        link
        :to="itm.link"
        @click="menuClick"
      >
        <v-list-item-icon>
          <v-icon>mdi-map-marker-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{itm.title}}</v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  name: "MenuList",
  props: ["menuItems"],
  data() {
    return {
      gshow: []
    };
  },
  methods: {
    menuClick: function() {
      this.$emit("closemenuev");
    },
    close() {
      this.gshow.forEach((item, i, arr) => (arr[i] = false));
    }
  },
  created() {
    this.menuItems.forEach((i, index) => (this.gshow[index] = false));
    this.prep11 = -1;
  },
  watch: {
    $route(to, from) {
      // обрабатываем изменение параметров маршрута...
      if (to.name == "Filials") {
        //console.log(this.menuItems);
        let tmp = this.menuItems.find(item =>
          item.ids.find(itm => itm == to.params.id)
        );

        if (tmp) {
          //console.log("найдено", tmp.idx);
          this.close();
          this.gshow[Number(tmp.idx)] = true;
          //console.log("обновляю");
          this.$forceUpdate();
        }
      }
    }
  }
};
</script>
