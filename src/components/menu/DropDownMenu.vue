<template>
<div>
    <v-menu offset-y v-for="(item, i) in getSubMenu" :key="(i+900)" :close-on-content-click="false" v-model="mshow">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on" class="hidden-xs-only">
          <v-icon>{{item.icon}}</v-icon>
          <span class="mr-2 ml-2 hidden-sm-and-down">{{item.title}}</span>
        </v-btn>
      </template>
     <menu-list :menuItems="item.groups"  v-on:closemenuev="closeMenu" />    
    </v-menu>   
  </div>    
</template>>
<script>
import { mapGetters } from "vuex";
import MenuList from "@/components/menu/MenuList";

export default {
  components: {
    MenuList
  },
  data() {
    return {
      mshow: false

    };
  },
  methods: {
    closeMenu(){
      //console.log('я услышал')
      this.mshow=false; 
    }
  },
  computed: mapGetters(["getSubMenu"])    
}
</script>>
