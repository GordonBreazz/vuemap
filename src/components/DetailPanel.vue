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
          <h3 class=" display-1 font-weight-light" >{{currentLocation.fullTitle}}</h3>
          <h3 class="headline font-weight-light pt-1 pb-1" v-if="getCaption">( {{getCaption}} )</h3>
        </div>
        <div class="font-weight-REGULAR   display-4 v-btn--absolute v-btn--right d-none d-md-flex d-lg-flex d-xl-flex sing-number" >
          <span style="color: #F44336" >#</span>{{currentLocation.id == 25 ? 'KNIGA&FORUM' : currentLocation.id }}
         </div> 
        <v-btn @click="hidePanel" absolute dark fab top right color="red">
          <v-icon dark>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle
        class="text-left"
      >{{ currentLocation.district + ' район ' + currentLocation.address }}. Сейчас {{getWorkStatus.status}}. {{getWorkStatus.message}}</v-card-subtitle>      
      <v-card-text>
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" md="6">

              <div class="mb-3 current-text" v-html="d3 + currentLocation.text"></div>
              <Photo-Gallery />
              <v-list-item-subtitle v-if="currentLocation.video">Видео</v-list-item-subtitle>
              <div style="padding: 10px" v-html="currentLocation.video"></div>
            </v-col>
            <v-col cols="12" md="6">
              <v-container>
                <v-row no-gutters>
                  <v-col cols="12" lg="6" >                 
                    <FeaturesList />
                  </v-col>
                  <v-col cols="12" lg="6">
                    <ContactsList />
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click="showPanViewer" large color="pink" dark>
          <v-icon dark class="mr-2">mdi-arrow-decision-outline</v-icon>3D тур по библиотеке
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

import ContactsList from "../components/ContactsList";
import FeaturesList from "../components/FeaturesList";
import PhotoGallery from "../components/PhotoGallery";

export default {
  components: {
    ContactsList,
    FeaturesList,
    PhotoGallery
  },
  props: ["filial"],
  data() {
    return {    
      d3: `<div style="text-align: center; float: right;"><img title="3D Тур по библиотеке" 
            style="cursor: pointer; width: 170px; padding-left: 10px; " alt="" 
            src="${require('../assets/images/360-pana.jpg')}"
            onclick="javascript:document.querySelector('#button100700').click()">
            <p style="font-size: 8pt; color: gray; margin-bottom: 0px;">3D тур по библиотекe</p> </div>`
    };
  },
  methods: {
    showPanViewer() {
      this.$emit("showPanViewer");
    },
    hidePanel() {
      this.$vuetify.goTo("#requestpanel", { offset: 0 });
      //this.showInfo = false;
      let gl = this;
      setTimeout(function() {
        //if (gl.map.balloon) gl.map.balloon.close();
        gl.$store.commit("hideInfoPanel");
      }, 500);
    }
  },
  computed: {
    ...mapState(["currentLocation"]),
    ...mapGetters(["getFeaturesImages", "getCaption", "getWorkStatus"]),
     
    orderColumns() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "1";
        case "sm":
          return "1";
        case "md":
          return "1";
        case "lg":
          return "2";
        case "xl":
          return "2";
      }
    }
  
  }
};
</script>

<style>
#more-photo {
  -ms-flex-align: center;
  align-items: center;
  background: rgba(51, 51, 51, 0.8);
  color: white;
  cursor: pointer;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  width: 20%;
  opacity: 0.1;
}

.sing-number {
  margin-right: 60px; 
  margin-top: 30px; 
  z-index: 0
}

.current-text {
  text-align: justify; 
  color: #454545
}

.photoglr {
  cursor: pointer;
}
</style>



