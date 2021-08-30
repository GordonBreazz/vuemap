<template>
  <v-bottom-sheet v-model="sheet" inset>
    <v-sheet>
      <v-card :loading="loading" class="mx-auto" v-if="true">
        <v-card-actions class="mb-0 text-left" style="width: 100%; margin-left: 0px">
          <v-chip class="ma-2 text-left mt-3" color="deep-purple" label text-color="white">
            <!--color="deep-purple" color="#0b4065" #044d7f-->
            <v-icon left>mdi-bookmark-multiple-outline</v-icon>
            {{eventdata.titlePart1}}
          </v-chip>
        </v-card-actions>
        <h3 class="headline cart-title" style="color: #354288">{{eventdata.titlePart2 }}</h3>
        <div
          class="subtitle-1 mt-1 mb-0 pb-0 font-weight-regular"
          style="color: #5f6c7a"
        >{{eventdata.shortDescription | withoutPoint}}</div>

        <v-container v-if="true">
          <v-row no-gutters>
            <v-col cols="12" class="pl-3 pr-3">
              <v-row>
                <v-col cols="6" md="6" lg="6" xl="6" max-height="490" height="490">
                 
                    <v-img :src="eventdata.imagePath" class="photoglr" height="490" ></v-img>
                 
                </v-col>

                <v-col cols="6" md="6" lg="6" xl="6" max-height="500" height="500">                  
                 

                    <div style="min-height: 100px">


                      <v-card-text>
                        <v-row align="center" class="mx-0"></v-row>

                        <p class="text-justify" v-if="fullinfo">{{eventdata.descriptionText}}</p>
                        <p class="text-justify" v-else>{{eventdata.descriptionShort}}</p>
                      </v-card-text>
                    </div>
                    <v-divider class="mx-4"></v-divider>
                    <div class="d-flex justify-space-between" style="color: #5f6c7a">
                      <v-card-title class="mb-0 subtitle-1">
                        <v-icon class="pr-1">mdi-clock-outline</v-icon>
                        {{eventdata.eventTime}}
                      </v-card-title>

                      <v-card-title class="subtitle-1">
                        <v-icon class="pr-1">mdi-calendar-month</v-icon>
                        {{eventdata.eventDate}}
                      </v-card-title>
                    </div>
                    <v-list-item @click>
                      <v-avatar color="orange lighten-1" size="50" class="mr-3">
                        <span class="white--text headline">{{eventdata.index}}</span>
                      </v-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="subtitle-1">{{eventdata.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{eventdata.address}}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-card-text v-if="fullinfo">
                      <v-chip-group column active-class="deep-purple accent-4 white--text">
                        <v-chip
                          color="deep-purple lighten-3"
                          text-color="white"
                          v-for="(tag, i) in eventdata.tags"
                          :key="i"
                        >
                          <v-avatar left>
                            <v-icon>mdi-tag-text-outline</v-icon>
                          </v-avatar>
                          {{tag}}
                        </v-chip>
                      </v-chip-group>
                    </v-card-text>


                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-card class="information-window-v-card">
        <v-card-text class="headline font-weight-bold">
          <v-icon large left>mdi-arrow-decision-outline</v-icon>
          <span class="font-weight-light">События</span>
        </v-card-text>
        <div>
          <v-card :loading="loading" class="mx-auto my-12 mt-0" :max-width="cartWidth" v-if="false">
            <v-img height="250" :src="eventdata.imagePath" @click class="photoglr"></v-img>

            <v-card-actions class="mb-0 text-left" style="width: 100%; margin-left: 0px">
              <v-chip class="ma-2 text-left mt-3" color="deep-purple" label text-color="white">
                <!--color="deep-purple" color="#0b4065" #044d7f-->
                <v-icon left>mdi-bookmark-multiple-outline</v-icon>
                {{eventdata.titlePart1}}
              </v-chip>
            </v-card-actions>
            <div style="min-height: 235px">
              <v-card-text class="mt-2 mb-0 pb-0">
                <h3 class="headline cart-title" style="color: #354288">{{eventdata.titlePart2 }}</h3>
                <div
                  class="subtitle-1 mt-5 mb-0 pb-0 font-weight-regular"
                  style="color: #5f6c7a"
                >{{eventdata.shortDescription | withoutPoint}}</div>
              </v-card-text>

              <v-card-text>
                <v-row align="center" class="mx-0"></v-row>

                <p class="text-justify" v-if="fullinfo">{{eventdata.descriptionText}}</p>
                <p class="text-justify" v-else>{{eventdata.descriptionShort}}</p>
              </v-card-text>
            </div>
            <v-divider class="mx-4"></v-divider>
            <div class="d-flex justify-space-between" style="color: #5f6c7a">
              <v-card-title class="mb-0 subtitle-1">
                <v-icon class="pr-1">mdi-clock-outline</v-icon>
                {{eventdata.eventTime}}
              </v-card-title>

              <v-card-title class="subtitle-1">
                <v-icon class="pr-1">mdi-calendar-month</v-icon>
                {{eventdata.eventDate}}
              </v-card-title>
            </div>
            <v-list-item @click>
              <v-avatar color="orange lighten-1" size="50" class="mr-3">
                <span class="white--text headline">{{eventdata.index}}</span>
              </v-avatar>
              <v-list-item-content>
                <v-list-item-title class="subtitle-1">{{eventdata.name}}</v-list-item-title>
                <v-list-item-subtitle>{{eventdata.address}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-text v-if="fullinfo">
              <v-chip-group column active-class="deep-purple accent-4 white--text">
                <v-chip
                  color="deep-purple lighten-3"
                  text-color="white"
                  v-for="(tag, i) in eventdata.tags"
                  :key="i"
                >
                  <v-avatar left>
                    <v-icon>mdi-tag-text-outline</v-icon>
                  </v-avatar>
                  {{tag}}
                </v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </div>
      </v-card>
    </v-sheet>
  </v-bottom-sheet>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  data: () => ({
    sheet: false,
    loading: false,
    fullinfo: true,
    eventdata: {},
    items: [
      // {
      //   color: "#1F7087",
      //   src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
      //   title: "Supermodel",
      //   artist: "Foster the People"
      // },
      // {
      //   color: "#952175",
      //   src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
      //   title: "Halcyon Days",
      //   artist: "Ellie Goulding"
      // }
    ]
  }),
  computed: {
    getImagePath: function() {
      return this.imagesPath + this.eventdata.image.name;
    },
    cartWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100%";
        case "sm":
          return "100%";
        case "md":
          return "400";
        case "lg":
          return "500";
        case "xl":
          return "550";
      }
    },
    cartTextMinHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "0px";
        case "sm":
          return "250px";
        case "md":
          return "250px";
        case "lg":
          return "240px";
        case "xl":
          return "240px";
      }
    }
  },
  filters: {
    withoutPoint: value //=> value //.slice(0, -1)
  }
};
</script>

<style>
</style>