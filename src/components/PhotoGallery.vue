<template>
  <div>
    <v-container no-gutters v-if="getTwoPhoto">
      <v-row no-gutters class="photoglr">
        <v-col cols="5" v-for="(photo, i) in getTwoPhoto" :key="i">
          <v-img :src="photo.thumb" @click="openGallery(i)" class="mr-1" height="100%"></v-img>
        </v-col>

        <v-col cols="2" v-if="getOtherPhoto">
          <v-img :src="getOtherPhoto.photo.thumb" @click="openGallery(3)" width="200" height="100%">
            <div
              style="background-color:rgba(51,51,51,.8); height: 100%; color: white; justify-content: center;   position: relative ;  align-items: center; text-align: center; "
            >
              <p style="position: absolute; top: 45%; width: 100%">ещё {{getOtherPhoto.cnt}} фото</p>
            </div>
          </v-img>
        </v-col>
      </v-row>
      <LightBox ref="Lightbox" :showLightBox="false" :media="getAllPhoto" showThumbs showCaption></LightBox>
    </v-container>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import LightBox from "vue-image-lightbox";

export default {
  components: {
    LightBox
  },
   data: () => ({
    sh: false,
     images: [
            {
                src: 'images/image001.jpg',
                description: 'Sunken dreams II. by Arbebuk',
            },
            {
                src: 'images/image002.jpg',
                description: 'Tunnel View Sunrise by Porbital',
            }
        ],
    media: [

  {
    thumb: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    src: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    caption: '<h4>Elephant</h4>',
  },
  {
    thumb: 'https://i-kinhdoanh.vnecdn.net/2018/06/18/1-1529296929_680x0.jpg',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/F-15_vertical_deploy.jpg/390px-F-15_vertical_deploy.jpg',
    caption: '<h4>Messi</h4>',
  },
  {
    thumb: 'https://i-thethao.vnecdn.net/2018/05/27/775162441-MR-2031-8E033EFCEBB928DC12A2A0AA3CEC4C33-21885-1527376486_680x0.jpg',
    src: 'https://i-thethao.vnecdn.net/2018/05/27/775162441-MR-2031-8E033EFCEBB928DC12A2A0AA3CEC4C33-21885-1527376486_680x0.jpg',
    caption: '<h4>Bale and Marcelo</h4>',
  },
  {
    thumb: 'https://i-thethao.vnecdn.net/2018/05/27/Screen-Shot-2018-05-27-at-7-1527379562_680x0.png',
    src: 'https://i-thethao.vnecdn.net/2018/05/27/Screen-Shot-2018-05-27-at-7-1527379562_680x0.png',
    caption: '<h4>Madrid crowd</h4>',
  },
  {
    thumb: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0DG-1527379049_680x0.jpg',
    src: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0DG-1527379049_680x0.jpg',
    caption: '<h4>Zidane</h4>',
  },
  {
    thumb: 'https://i-thethao.vnecdn.net/2018/05/27/Screen-Shot-2018-05-27-at-7-1527379346_680x0.png',
    src: 'https://i-thethao.vnecdn.net/2018/05/27/Screen-Shot-2018-05-27-at-7-1527379346_680x0.png',
    caption: '<h4>Bale kissed the cup</h4>',
  },
  {
    thumb: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9SR-1527378710_680x0.jpg',
    src: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9SR-1527378710_680x0.jpg',
    caption: '<h4>Ronaldo showed off</h4>',
  },
  {
    thumb: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9PD-1527378584_680x0.jpg',
    src: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9PD-1527378584_680x0.jpg',
    caption: '<h4>Benzema and Varane</h4>',
  },
  {
    thumb: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E01C-1527378364_680x0.jpg',
    src: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E01C-1527378364_680x0.jpg',
    caption: '<h4>Nacho</h4>',
  },
  {
    thumb: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9DX-1527378233_680x0.jpg',
    src: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D9DX-1527378233_680x0.jpg',
    caption: '<h4>Ramos</h4>',
  },
  {
    thumb: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D921-1527377928_680x0.jpg',
    src: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D921-1527377928_680x0.jpg',
    caption: '<h4>Ceremony</h4>',
  },
  {
    thumb: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D8R8-1527377973_680x0.jpg',
    src: 'https://i-thethao.vnecdn.net/2018/05/27/000-15D8R8-1527377973_680x0.jpg',
    caption: '<h4>Champion</h4>',
  },
  {
    thumb: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0FA-1527377507_680x0.jpg',
    src: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0FA-1527377507_680x0.jpg',
    caption: '<h4>Kiss</h4>',
  },
]
    //
  }),
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
</style>
