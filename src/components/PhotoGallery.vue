<template>
  <div>
    <v-list-item-subtitle>Фото библиотеки</v-list-item-subtitle>
    <v-container no-gutters v-if="getTwoPhoto">
      <v-row no-gutters class="photoglr">

        <v-col cols="5" v-for="(photo, i) in getTwoPhoto" :key="i">
          <v-img :src="photo.thumb" @click="openGallery(i)" class="mr-1" height="270px"></v-img>
        </v-col>

        <v-col cols="2" v-if="getOtherPhoto">
           
          <v-img :src="getOtherPhoto.photo.thumb" @click="openGallery(2)" width="200" height="100%">
            <div class="gallery-conteneir-element">
              <p>ещё {{getOtherPhoto.cnt}} фото</p>
            </div>
          </v-img>
        </v-col>
        
      </v-row>
      <LightBox ref="Lightbox" :showLightBox="false" :media="getAllPhoto" showThumbs showCaption></LightBox>
    </v-container>    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LightBox from "vue-image-lightbox";

export default {
  components: {
    LightBox
  },  
  computed: {
    ...mapGetters(["getTwoPhoto", "getOtherPhoto", "getAllPhoto"])
  },
  methods: {
    openGallery(index) {            
      this.$refs.Lightbox.showImage(index)
    }
  }
};
</script>

<style>
.photoglr {
  cursor: pointer;
}

.gallery-conteneir-element {
  background-color:rgba(51,51,51,.8); 
  height: 100%; 
  color: white; 
  justify-content: center;
  position: relative;
  align-items: center;
  text-align: center;
}

.gallery-conteneir-element p{
  position: absolute; top: 45%; width: 100%
}  

</style>
