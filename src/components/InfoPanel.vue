<template>
  <div>
    <v-card outlined v-show="this.$store.state.showInfoPanel" class="mt-3" id="element500">
      <v-card-title primary-title>
        <div>
          <h3 class="headline">{{this.$store.getters.getCaption}}</h3>
          <div></div>
        </div>
        <v-btn @click="hidePanel" absolute dark fab top right color="red">
          <v-icon dark>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle
        style="text-align: left"
      >{{ this.$store.state.currentLocation.district + ' район ' + this.$store.state.currentLocation.address }}</v-card-subtitle>
      <v-card-text>
        <component v-bind:is="currentComponent"></component>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import f1 from "../components/f1";
import f2 from "../components/f2";
import f3 from "../components/f3";
import f4 from "../components/f4";
import f5 from "../components/f5";
import f6 from "../components/f6";
import f9 from "../components/f9";
import f10 from "../components/f10";
import f12 from "../components/f12";
import f13 from "../components/f13";
import f15 from "../components/f15";
import f16 from "../components/f16";
import f17 from "../components/f17";
import f18 from "../components/f18";
import f19 from "../components/f19";
import f20 from "../components/f20";
import f21 from "../components/f21";
import f24 from "../components/f24";
import f25 from "../components/f25";

export default {
  components: {
    f1,
    f2,
    f3,
    f4,
    f5,
    f6,
    f9,
    f10,
    f12,
    f13,
    f15,
    f16,
    f17,
    f18,
    f19,
    f20,
    f21,
    f24,
    f25
  },
  props: ['filial'],
  computed: {
    currentComponent: function() {
      if (this.filial == 0)  return "f1"
      return "f" + this.filial
    }
  },
  data() {
    return {};
  },
  methods: {
    hidePanel() {
      //this.$scrollTo("body");
      this.$vuetify.goTo("#requestpanel", { offset: 0 });
      //this.showInfo = false;
      let gl = this;
      setTimeout(function() {
        //if (gl.map.balloon) gl.map.balloon.close();
        gl.$store.commit("hideInfoPanel");
      }, 500);
    }
  }
};
</script>

<style>
</style>