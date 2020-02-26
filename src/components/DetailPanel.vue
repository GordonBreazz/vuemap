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
          <div></div>
        </div>
        <v-btn @click="hidePanel" absolute dark fab top right color="red">
          <v-icon dark>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle
        style="text-align: left"
      >{{ this.$store.state.currentLocation.district + ' район ' + this.$store.state.currentLocation.address }}
      
      
      </v-card-subtitle>
      <v-card-text>
        <v-row no-gutters>
          <v-col>
            <div
              style="text-align: justify; color: #454545;"
              v-html="this.$store.state.currentLocation.text"
            ></div>
          </v-col>
          <v-col>
            <v-row no-gutters>
              <v-col></v-col>
              <v-col>

                <v-list one-line>
                  <v-list-item @click>
                    <v-list-item-icon>
                      <v-icon color="indigo" >mdi-phone</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-subtitle>Телефон библиотеки</v-list-item-subtitle>
                      <v-list-item-title class="mt-1 pl-1">{{this.$store.state.currentLocation.phone}}</v-list-item-title>
                    
                    </v-list-item-content>


                  </v-list-item>

 

                  <v-divider inset></v-divider>

                  <v-list-item @click>
                    <v-list-item-icon>
                      <v-icon color="indigo">mdi-email</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-subtitle>E-mail библиотеки</v-list-item-subtitle>
                      <v-list-item-title class="mt-1 pl-2">{{(this.$store.state.currentLocation.email).toUpperCase()}}</v-list-item-title>
                      
                    </v-list-item-content>
                  </v-list-item>

       

                  <v-divider inset></v-divider>

                  <v-list-item @click>
                    <v-list-item-icon>
                      <v-icon color="indigo">mdi-map-marker</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-subtitle class="mt-1 pl-2">Район: {{this.$store.state.currentLocation.district}}</v-list-item-subtitle>
                      <v-list-item-subtitle class="mt-1 pl-2">Микрорайон: {{this.$store.state.currentLocation.microdistrict}}</v-list-item-subtitle>
                      <v-list-item-subtitle class="mt-1 pl-2">Адрес</v-list-item-subtitle>
                      <v-list-item-title class="mt-1 pl-2"> {{this.$store.state.currentLocation.address}}</v-list-item-title>
                      
                      
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                                <h4 style="text-align: center;"> Оцените библиотеку</h4>

      <div class="text-center ">
        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
        ></v-rating>
      </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
       <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click="showPanViewer" large color="pink" dark>
          <v-icon dark class="mr-2">mdi-arrow-decision-outline</v-icon>3D тур по библиотеке
        </v-btn>
        <v-btn @click large color="success" dark class="mr-2 ml-2">
          <v-icon dark class="mr-2">mdi-arrow-decision-outline</v-icon>Предстаящие события
        </v-btn>
        <v-btn @click large color="success" dark>
          <v-icon dark class="mr-2">mdi-arrow-decision-outline</v-icon>Новости библиотеки
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  components: {},
  props: ["filial"],
  data() {
    return {};
  },
  methods: {
    showPanViewer() {
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

