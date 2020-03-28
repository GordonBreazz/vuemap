<template>
  <v-list class="text-left" dense>
    <v-list-group sub-group v-for="(gp, h) in menuItems" :key="(h+1500)" v-model="gshow[h]">
      <template v-slot:activator>

        <v-list-item-content>
          
          <v-list-item-title class="text-weight">{{gp.name}}</v-list-item-title>
        </v-list-item-content>
                              <v-list-item-icon>
          <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
      </template>

      <v-list-item
        v-for="(itm, f) in gp.items"
        :key="(f+8000)"
        link
        :to="itm.link"
        @click="menuClick"
      >

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
    }
    },
    methods: {
      menuClick: function() {
        console.log('close menu');
        this.$emit('closemenuev');

      }
    },
    
};
</script>