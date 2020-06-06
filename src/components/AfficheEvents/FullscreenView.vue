<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }"></template>
    <div :style="styleObject" :key="uniqKey">></div>
    <div class="bg-text">
      <v-fab-transition>
        <v-btn
          absolute
          dark
          fab
          top
          left
          style="margin-top: 45px; margin-left: 5px;"
          color="grey lighten-5"
          class="black--text"
          @click="dialog = false"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-fab-transition>
      <div :style="{marginTop: cartMargin}" id="content">
        <div v-if="$vuetify.breakpoint.mdAndUp">
          <h1 class="display-2 font-weight-bold">{{eventdata.titlePart2}}</h1>
          <h1 class="title mt-8 mb-8">{{eventdata.shortDescription}}</h1>
        </div>

        <div v-if="$vuetify.breakpoint.smAndDown">
          <h1 class="display-1 font-weight-bold">{{eventdata.titlePart2}}</h1>
          <h1 class="subtitle-1 mt-4 mb-4">{{eventdata.shortDescription}}</h1>
        </div>

        <div
          :style="{width: cartWidth, maxWidth: '1200px'}"
          class="mt-7 d-inline-flex justify-center"
        >
          <div>
            <div class="d-flex justify-space-between mb-8">
              <v-chip class="text-left" color="deep-purple" label text-color="white">
                <!--color="deep-purple" color="#0b4065" #044d7f-->
                <v-icon left>mdi-bookmark-multiple-outline</v-icon>
                {{eventdata.titlePart1}}
              </v-chip>
              <h3 class="text-left" style="font-size: 18px;">
                <v-icon class="pr-1" color="white" v-if="eventdata.eventTime">mdi-clock-outline</v-icon>
                {{eventdata.eventTime}}
                <v-icon class="pr-1 ml-5" color="white">mdi-calendar-month</v-icon>
                {{eventdata.eventDate}}
              </h3>
            </div>
            <div
              class="mb-7"
              style="line-height: 1.8; background-color: rgba(0,0,0, 0.2); border-radius: 10px; padding: 15px 25px 10px 25px; "
            >
              <p
                class="text-justify body-1"
                v-for="(item, i) in splitPrg(eventdata.descriptionText)"
              >{{item}}</p>
              <v-chip-group column active-class="deep-purple accent-4 white--text ">
                <v-chip color="light-gray" v-for="(tag, i) in eventdata.tags" :key="i">
                  <v-avatar left>
                    <v-icon>mdi-tag-text-outline</v-icon>
                  </v-avatar>
                  {{tag}}
                </v-chip>
              </v-chip-group>
            </div>

            <div class="d-flex justify-space-between mb-8">
              <v-list-item @click>
                <v-avatar color="orange lighten-1" size="50" class="mr-3">
                  <span class="white--text headline">{{eventdata.index}}</span>
                </v-avatar>
                <v-list-item-content class="white--text">
                  <v-list-item-title class="subtitle-1">{{eventdata.name}}</v-list-item-title>
                  <v-list-item-subtitle class="white--text">{{eventdata.address}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <div style="min-width: 240px">
                <share-event />
                <v-list-item-subtitle class="white--text font-weight-light">поделиться в соц. сетях</v-list-item-subtitle>
              </div>
            </div>

            <div class="mt-5" v-if="eventdata.eventTime">
              <v-btn
                x-large
                color="red"
                class="font-weight-bold"
                dark
                @click="showEventInviteTimer"
              >Записатся на мероприятие</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-dialog>
</template>


<script>
import ShareEvent from "./ShareEvent";

export default {
  components: {
    ShareEvent
  },
  data() {
    return {
      dialog: false,
      eventdata: {},
      styleObject: {
        color: "red",
        fontSize: "13px",
        backgroundImage: `url(${this.getImgPath})`,
        filter: "blur(8px)",
        "-webkit-filter": "blur(8px)",
        height: "100%",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-size": "cover"
      },
      uniqKey: 0
    };
  },
  methods: {
    forceRerender() {
      this.styleObject.backgroundImage = `url(${this.getImgPath()})`; //new image
      this.uniqKey += 1;
    },
    getImgPath() {
      //console.log(this.eventdata.imagePath);
      if (this.eventdata.imagePath) return this.eventdata.imagePath;
      return require("@/assets/libfr.png");
    },
    showDialog(viewData) {
      this.eventdata = viewData;
      this.forceRerender();
      this.dialog = true;
    },
    splitPrg(st) {
      if (!st) return st;
      let arr = String(st).split(/[.|!|?]\s/);
      let cnt = Math.floor(arr.length / 2);
      if (arr.length == 3) cnt = 2;
      let f = arr.slice(0, cnt).reduce((sum, item) => sum + item.length, 0);
      //      console.log(f + cnt)
      return [st.slice(0, f + cnt + 1), st.slice(f + cnt + 1)];
    },
    showEventInviteTimer() {
      this.$emit("showEventInvite", this.eventdata);
    }
  },
  computed: {
    cartWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100%";
        case "sm":
          return "100%";
        case "md":
          return "90%";
        case "lg":
          return "70%";
        case "xl":
          return "70%";
      }
    },
    cartMargin() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "40px";
        case "sm":
          return "50px;";
        case "md":
          return "70px;";
        case "lg":
          return "90px";
        case "xl":
          return "120px";
      }
    }
  }
};
</script>

<style scoped>
.object {
  width: 100%;
  height: 100%;

  background-image: url("https://www.whats-on-netflix.com/wp-content/uploads/2020/04/new-netflix-original-movies-march-2020.png");
  filter: blur(8px);
  -webkit-filter: blur(8px);
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -100;
}

.bg-image {
  /* The image used */

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Position text in the middle of the page/image */
.bg-text {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #111;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 20px;
  text-align: center;
}
</style>