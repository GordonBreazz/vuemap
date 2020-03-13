<template>
  <div>
    <v-card
      outlined
      v-show="this.$store.state.showInfoPanel"
      class="mt-3 text-left"
      id="element500"
    >
      <v-card-title primary-title>
        <div>
          <h3 class="headline">{{this.$store.getters.getCaption}}</h3>
        </div>
        <v-btn @click="hidePanel" absolute dark fab top right color="red">
          <v-icon dark>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle
        style="text-align: left"
      >{{ this.$store.state.currentLocation.district + ' район ' + this.$store.state.currentLocation.address }}. Сейчас {{this.$store.getters.getWorkStatus.status}}. {{this.$store.getters.getWorkStatus.message}}</v-card-subtitle>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-row>
                <v-col cols="10">
                  <v-row>
                    <v-col v-for="(item, index) in this.$store.getters.getFeaturesImages" :key="index">
                      <v-img :src="item" width="40"></v-img>
                    </v-col>

                  </v-row>
                </v-col>
                <v-col cols="2">
                  <v-img :src="this.$store.getters.getFoundingYearImage" width="120"></v-img>
                </v-col>
              </v-row>
              <div
                style="text-align: justify; color: #454545;"
                v-html="this.$store.state.currentLocation.text"
              ></div>
            </v-col>
            <v-col cols="12" md="6">
              <v-container>
                <v-row no-gutters>
                  <v-col cols="12" lg="6">
                    <FeaturesList />
                  </v-col>
                  <v-col cols="12" lg="6">
                    <ContactDetailsList />
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col >
         <v-img src="https://picsum.photos/510/300?random" ></v-img>
              </v-col>
            <v-col >
         <v-img src="https://picsum.photos/510/300?random" ></v-img>
              </v-col>
            <v-col >
                
          
          
        >
         <v-img src="https://picsum.photos/510/300?random" width="200" height="100%" style></v-img>
              </v-col>
              </v-row>
              </v-container>

      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click="showPanViewer" large color="pink" dark outlined>
          <v-icon dark class="mr-2">mdi-arrow-decision-outline</v-icon>3D тур по библиотеке
        </v-btn>


                
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import ContactDetailsList from "../components/ContactDetailsList";
import FeaturesList from "../components/FeaturesList";

export default {
  components: {
    ContactDetailsList,
    FeaturesList
  },
  props: ["filial"],
  data() {
    return {};
  },
  methods: {
    showPanViewer() {
      console.log(this.$store.state.currentLocation);
      this.$emit("showPanViewer");
    },
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

