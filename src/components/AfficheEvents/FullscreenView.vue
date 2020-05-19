e to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.

<template>

    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
           <div class="object">
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
       1315645646666666666666666
</div>
    </v-dialog>

</template>


<script>

export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  }
};
</script>

<style scoped>
.v-image__image {
  background-size: 100% 100%;
}
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
  z-index: -100  
}
</style>