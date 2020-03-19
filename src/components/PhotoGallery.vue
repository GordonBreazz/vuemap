<template>
  <div>
    <v-container no-gutters>
      <v-row no-gutters class="photoglr">
        <v-col cols="5">
          <v-img src="https://picsum.photos/510/300?random" @click="art" class="mr-1"></v-img>
        </v-col>
        <v-col cols="5">
          <v-img src="https://picsum.photos/510/300?random" @click="art" class="mr-1"></v-img>
        </v-col>
        <v-col cols="2">
          <v-img src="https://picsum.photos/510/300?random" @click="art" width="200" height="100%">
            <div
              style="background-color:rgba(51,51,51,.8); height: 100%; color: white; justify-content: center;   position: relative ;  align-items: center; text-align: center; "
            >
              <p style="position: absolute; top: 45%; width: 100%">ещё 6 фото</p>
            </div>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    art() {
      alert("ok");
    }
  }
};
</script>

<style>
.photoglr{
  cursor: pointer;
}


</style>
