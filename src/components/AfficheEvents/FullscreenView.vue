e to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.

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
      <div style="margin-top: 150px; ">
        <h1 class="display-3 font-weight-bold">{{eventdata.titlePart2}}</h1>

        <h1 class="title mt-8 mb-8">{{eventdata.shortDescription}}</h1>

        <div style="width: 70%; max-width: 1200px;" class="mt-7 d-inline-flex justify-center">
          <div >
            <div class="d-flex justify-space-between mb-8" >
                    <v-chip class="text-left" color="deep-purple" label text-color="white">
        <!--color="deep-purple" color="#0b4065" #044d7f-->
        <v-icon left>mdi-bookmark-multiple-outline</v-icon>
        {{eventdata.titlePart1}}
      </v-chip>
              <h3 class="text-left" style="font-size: 18px;">
                <v-icon class="pr-1" color="white">mdi-calendar-month</v-icon>
                {{eventdata.eventTime}} {{eventdata.eventDate}}
              </h3>


            </div>

            <p
              class="text-justify body-1"
              style="line-height: 1.8; letter-spacing: 20px; "
            >{{eventdata.descriptionText}}</p>
          </div>
          
        </div>
        
      </div>
    </div>
  </v-dialog>
</template>


<script>
export default {
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
      console.log(this.eventdata.imagePath);
      if (this.eventdata.imagePath) return this.eventdata.imagePath;
      return require("@/assets/libfr.png");
    },
    showDialog(viewData) {
      this.eventdata = viewData;
      this.forceRerender();
      this.dialog = true;
    }
  },
  computed: {}
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