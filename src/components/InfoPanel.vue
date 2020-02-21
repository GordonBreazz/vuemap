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
        <f1 v-show="this.$store.state.filials[1]"></f1>
        <f2 v-show="this.$store.state.filials[2]"></f2>
        <f3 v-show="this.$store.state.filials[3]"></f3>
        <f4 v-show="this.$store.state.filials[4]"></f4>
        <f5 v-show="this.$store.state.filials[5]"></f5>
        <f6 v-show="this.$store.state.filials[6]"></f6>
        <f9 v-show="this.$store.state.filials[9]"></f9>
        <f10 v-show="this.$store.state.filials[10]"></f10>
        <f12 v-show="this.$store.state.filials[12]"></f12>
        <f13 v-show="this.$store.state.filials[13]"></f13>
        <f15 v-show="this.$store.state.filials[15]"></f15>
        <f16 v-show="this.$store.state.filials[16]"></f16>
        <f17 v-show="this.$store.state.filials[17]"></f17>
        <f18 v-show="this.$store.state.filials[18]"></f18>
        <f19 v-show="this.$store.state.filials[19]"></f19>
        <f20 v-show="this.$store.state.filials[20]"></f20>
        <f21 v-show="this.$store.state.filials[21]"></f21>
        <f24 v-show="this.$store.state.filials[24]"></f24>
        <f25 v-show="this.$store.state.filials[25]"></f25>
      </v-card-text>
    </v-card>
    <div id="anchor"></div>
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
  data() {
    return {};
  },
  methods: {
    hidePanel() {
      this.$scrollTo("body");
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