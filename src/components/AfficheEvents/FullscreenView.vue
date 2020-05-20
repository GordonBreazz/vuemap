e to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.

<template>

    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
<div class="bg-image"></div>

<div class="bg-text">
  <h2>Blurred Background</h2>
  <h1 style="font-size:50px">I am John Doe</h1>
  <p>And I'm a Photographer</p>
        <v-btn
        class="font-weight-medium"
        color="deep-orange"
        
        @click="showEventInvite"
      >Записатся на мероприятие</v-btn>
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

#inspire img {
  height: 100%
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

.bg-image {
  /* The image used */
  background-image: url("https://www.w3schools.com/howto/photographer.jpg");
  
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
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 1;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}
</style>