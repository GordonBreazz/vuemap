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
                    <v-col
                      v-for="(item, index) in this.$store.getters.getFeaturesImages"
                      :key="index"
                    >
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
              >
              
              
              
              </div>
                    <v-container>
                      <v-row no-gutters>
                        <v-col cols="5"> 
                          <v-img src="https://picsum.photos/510/300?random" class="mr-1"></v-img>
                        </v-col>
                        <v-col cols="5">
                          <v-img src="https://picsum.photos/510/300?random" class="mr-1"></v-img>
                        </v-col>
                        <v-col cols="2">
                          <v-img
                            src="https://picsum.photos/510/300?random"
                            width="200"
                            height="100%"
                          
                          ><div style="background-color:rgba(51,51,51,.8); height: 100%; color: white; justify-content: center;   position: relative ;  align-items: center; text-align: center; ">
                            <p style="position: absolute; top: 45%; width: 100%">6 фото</p>
                            </div></v-img>
                        </v-col>
                      </v-row>
                    </v-container>



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


</style>

<style scoped>
  .bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }

  .repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
                        rgba(255,0,0,.25),
                        rgba(255,0,0,.25) 5px,
                        rgba(0,0,255,.25) 5px,
                        rgba(0,0,255,.25) 10px
                      );
  }
</style>

