<template>
    <yandex-map 
        :coords = "coords" 
        :zoom = "mzoom" 
        :controls = "controls"
        @map-was-initialized="initHandler"
        :options="{ 
          suppressMapOpenBlock: true,
          autoFitToViewport: 'always'
        }"        
        map-type = "map"
        show-all-markers = "true">
         <ymap-marker
            v-for="(location, index) in placemarks"
              :key="index"
              :marker-id="index"
              marker-type="placemark"
              :icon = "markerIcon(location.title)"
              :coords="location.coords"  
              @click="onClick(location.coords)"            
              cluster-name="1"
              :callbacks="{ click: getDataPoint }"                      
         ></ymap-marker>
    </yandex-map>
</template>

<script>
import places from '../data/places.js'

//console.log(places.placemarks[5].title)

export default {
  components: {},
  data() {
    return {
      map: {},
      coords: [ 51.834464, 107.584574],
      currentCoords: [51.825683, 107.58439],
      coords2: [51.74677212790084, 107.6959137288361],
      placemarks: places.placemarks, 
      mzoom: 12,
      controls: ["zoomControl"],
      markerIcon: (title) => ({
        layout: 'default#imageWithContent',
        imageHref: 'http://cbs-uu.ru//images/assets/pins-maps-library.png',
        imageSize: [50, 50],
        imageOffset: [0, 0],
        content: title,
        contentOffset: [-25, 55],
        contentLayout: '<div style="border-radius: 8px; background-color: rgba(117, 190, 218, 0);  width: 100px; color: red; font-weight: bold;">$[properties.iconContent]</div>'
      })
    };
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Hi, everyone!</h1>
        <p>I am here: ${this.coords}</p>
        <img src="http://via.placeholder.com/350x150">
      `
    }
  },
  methods: {
    onClick(e) {
       //this.currentCoords = e.get('coords');             
      this.map.setCenter(e, 18, {checkZoomRange: true })
      this.map.panTo(this.currentCoords)
    },
    getDataCluster(obj) {
      const clust = this.map.geoObjects.get(0);
      this.map.setBounds(clust.getBounds());
      this.$emit("set-coords", obj.get("coords"));
      this.$emit("get-data-point", obj.get("coords").join());
    },
    getDataPoint(obj) {
      const coords = obj.get("coords");
      console.log('qqq')
      //this.$emit("set-coords", coords);
      //this.$bus.$emit("get-data-point", coords.join());
      this.map.setCenter(coords, FOCUS_ZOOM, {checkZoomRange: true })
    },
    initHandler(obj) {
      this.map = obj;
      console.log(obj)
      
    }
  }
};
</script>

<style scoped>
.ymap-container {
  height: 100%;
}

.cluster-icon {
  background: lime;
  color: tomato;
}
</style>

