e to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.

<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
    </template>
    <div :style="styleObject"></div>
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
      <h1>1211212</h1>
      {{eventdata.imagePath}}
      <div>
    <p class="text-left">Left aligned text on all viewport sizes.</p>
    <p class="text-center">Center aligned text on all viewport sizes.</p>
    <p class="text-right">Right aligned text on all viewport sizes.</p>

    <p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
    <p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
    <p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
    <p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
  </div>

 <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-toolbar color="white" flat>
          <v-btn icon light>
            <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
          </v-btn>

          <v-toolbar-title class="grey--text text--darken-4">Albums</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon light>
            <v-icon color="grey darken-2">mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>

        <v-subheader>May</v-subheader>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 6"
              :key="i"
              cols="4"
            >
              <img
                :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`"
                alt="lorem"
                class="image"
                height="100%"
                width="100%"
              >
            </v-col>
          </v-row>
        </v-container>

        <v-subheader>June</v-subheader>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 6"
              :key="i"
              cols="4"
            >
              <img
                :src="`https://randomuser.me/api/portraits/women/${i + 5}.jpg`"
                alt="lorem"
                class="image"
                height="100%"
                width="100%"
              >
            </v-col>
          </v-row>
        </v-container>

        <v-footer class="mt-12"></v-footer>
      </v-card>
    </v-col>
  </v-row>

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
        fontSize: "13px"
      }
    };
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