<template>
  <div>
    <yandex-map
      :coords="coords"
      :zoom="mzoom"
      :controls="controls"
      @map-was-initialized="initHandler"
      :options="{ 
          suppressMapOpenBlock: true,
          autoFitToViewport: 'always'
        }"
      map-type="map"
    >
      <ymap-marker
        v-for="(location, index) in placemarks"
        :key="index"
        :marker-id="index"
        marker-type="placemark"
        :icon="markerIcon(location.title)"
        :coords="location.coords"
        @click="onClick(location)"
        cluster-name="1"
        :balloonTemplate="balloonTemplate(location)"
      ></ymap-marker>
    </yandex-map>
  </div>
</template>

<script>
import places from "../data/places.js";

export default {
  components: {},
  data() {
    return {
      map: {},
      coords: [51.81008913374312, 107.60167337301641],
      userPosition: [51.825683, 107.58439],
      currentCoords: [51.825683, 107.58439],
      coords2: [51.74677212790084, 107.6959137288361],
      placemarks: places.placemarks,
      mzoom: 12,
      controls: ["zoomControl"],
      markerIcon: (title, photoSmall) => ({
        layout: "default#imageWithContent",
        imageHref: "http://cbs-uu.ru//images/assets/pins-maps-library.png",
        imageSize: [50, 50],
        imageOffset: [0, 0],
        content: title,
        contentOffset: [-20, 55],
        hintContent: "Хинт метки",
        contentLayout:
          '<div style="padding:3px 0; border-radius: 3px; font-size: 9pt; background-color: rgba(117, 190, 218, 0.3);  width: 95px; color: red; font-weight: bold;">$[properties.iconContent]</div>'
      })
    };
  },
  computed: {},
  methods: {
    showPanel() {
      let a = document.body.scrollHeight + 100;
      this.$store.state.showInfoPanel = true;
      // var anchor1 = this.$el.querySelector("#anchor");
      // console.log(anchor1)
      // anchor1.scrollTop = anchor1.scrollHeight;
      let gl = this.$scrollTo;
      setTimeout(function() {
        gl("#element500", { offset: -100 });
      }, 0);
    },

    goToAll() {
      this.$scrollTo("#anchor");
      this.showInfo = false;
      if (this.map.balloon) this.map.balloon.close();
      this.map.setBounds(this.map.geoObjects.getBounds());
    },
    balloonTemplate(location) {
      //Создания балуна метки
      let frameSt = "";
      let buttonSt = "";
      // let info = ''
      // if (location.fullTitle != location.title) info = location.fullTitle
      if (
        location.id == 2 ||
        location.id == 3 ||
        location.id == 6 ||
        location.id == 9 ||
        location.id == 10 ||
        location.id == 12 ||
        location.id == 13 ||
        location.id == 15 ||
        location.id == 16 ||
        location.id == 19 ||
        location.id == 21 ||
        location.id == 24 ||
        location.id == 20
      ) {
        // this.panaUrl = `http://cbs-uu.ru/tours/f${location.id}/index.html`
        // this.$Bus.$emit('my-sample-event', this.panaUrl);
        frameSt =
          '<div style="margin-bottom:10px"><iframe src="http://cbs-uu.ru/tours/f' +
          location.id +
          '/index.html" width="400" height="250" align="left">Ваш браузер не поддерживает плавающие фреймы!</iframe></div><div style="height: 240px;"></div>';
        buttonSt = `
          <button  type="button" class="v-btn v-btn--absolute v-btn--contained v-btn--fab v-btn--right v-btn--round v-btn--top theme--dark v-size--small red accent-3 ml-3" style="margin-top:313px" onclick="javascript:document.querySelector('#button100700').click()">
            <span class="v-btn__content">
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-arrow-expand-all theme--dark "></i>
            </span>
          </button>`;
      } else if (location.photoSmall)
        frameSt = '<img style="width: 100%" src="' + location.photoSmall + '">';
      return `
        <h1>${location.fullTitle}</h1>
        <p style="margin-top: 10px; margin-bottom: 5px;"><i>Адрес библиотеки:
        <b>${location.address}</b></i></p>
        ${frameSt}<div style="height: 10px;"></div>
        <button type="button" class="v-btn v-btn--contained  v-size--default  primary mb-1" onclick="javascript: document.querySelector('#button100500').click();">Подробнее</button> 
        <button type="button" class="v-btn v-btn--contained  v-size--default  light-blue white--text mb-1" onclick="javascript: document.querySelector('#button100600').click();">ВСЕ БИБЛИОТЕКИ </button>
        ${buttonSt}
        <p id="info100500" style="display: none"><${this.panaUrl}/p>

      `;
    },
    onClick(l) {
      //console.log('1111111111111111', (tt.geoObjects.get(0)).properties.get('text'))

      // let sayHi = function() { tt.setCenter(e, 19, {checkZoomRange: true })}
      //this.currentCoords = e.get('coords');
      //this.map.panTo(e)
      // this.map.panTo(e).then(
      //   function (value) {
      //     tt.setZoom(19)
      //   }
      // )

      // setTimeout(sayHi, 1000);
      //this.hidePanel();

      this.map.setCenter(l.coords, 19, { checkZoomRange: false });
      this.currentLocation = l;
      this.$store.commit("changeLocation", { newLocation: l });
      this.$store.commit("chooseFilial", { newLocation: l });

      //this.showPanel();
    },
    getDataCluster(obj) {
      // const clust = this.map.geoObjects.get(0);
      // this.map.setBounds(clust.getBounds());
      // this.$emit("set-coords", obj.get("coords"));
      // this.$emit("get-data-point", obj.get("coords").join());
    },
    getDataPoint(obj) {
      const coords = obj.get("coords");
      //console.log('qqq')
      //this.$emit("set-coords", coords);
      //this.$bus.$emit("get-data-point", coords.join());
      //this.map.setCenter(coords, FOCUS_ZOOM, {checkZoomRange: true })
    },
    initHandler(obj) {
      this.map = obj;
      let gt = this.goToAll;
      const btn = new ymaps.control.Button({
        data: {
          // Зададим текст для кнопки.
          content: "Показать все библиотеки",
          title: "Уменьшает маштаб карты"
        },
        options: {
          maxWidth: [150]
        }
      });
      btn.options.set("size", "large");
      btn.events.add("press", function() {
        gt();
      });

      this.map.controls.add(btn, {
        float: "left",
        floatIndex: 100
      });

      // this.userPosition = ymaps.geolocation.get({ provider: "browser" });
      // console.log("userPosition", ymaps.geolocation);
      // this.userPosition.then(
      //   function(result) {
      //     // Добавление местоположения на карту.
      //     this.map.geoObjects.add(result.geoObjects);
      //   },
      //   function(err) {
      //     console.log("Ошибка: " + err);
      //   }
      // );
    }
  }
};
</script>

<style scoped>
.ymap-container {
  height: 600px;
  width: 100%;
}

.cluster-icon {
  background: lime;
  color: tomato;
}
</style>

