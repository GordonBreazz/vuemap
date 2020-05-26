e to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.

<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      
    </template>
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
      <h1 style="margin-top: 200px" class="display-2 font-weight-light "> {{eventdata.titlePart2}}</h1>
      <h3 class="subtitle-1	 mt-5"> {{eventdata.shortDescription}}</h3>
    

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
      console.log( this.eventdata.imagePath)
      if (this.eventdata.imagePath) return this.eventdata.imagePath;
      return require("@/assets/libfr.png");
    },
    showDialog(viewData){
      this.eventdata = viewData
      this.forceRerender()
      this.dialog = true
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