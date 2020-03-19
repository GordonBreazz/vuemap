<template>
  <div>
    <v-card outlined>
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
    </v-card>
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
      controls: ["zoomControl", "typeSelector"],
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
  methods: {
    workStatus() {
      let today = new Date();
    },
    showPanel() {
      //      this.$store.state.showInfoPanel = true;
      this.$store.commit("showInfoPanel");
      // var anchor1 = this.$el.querySelector("#anchor");
      // console.log(anchor1)
      // anchor1.scrollTop = anchor1.scrollHeight;

      this.$vuetify.goTo("#infopanel", { offset: 30 });

      // let gl = this.$scrollTo;
      // setTimeout(function() {
      //   gl("#element500", { offset: -100 });
      // }, 0);
    },

    goToAll() {
      this.$vuetify.goTo("#requestpanel");
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
        location.id == 1 ||
        location.id == 2 ||
        location.id == 3 ||
        location.id == 4 ||
        location.id == 5 ||
        location.id == 6 ||
        location.id == 9 ||
        location.id == 10 ||
        location.id == 12 ||
        location.id == 13 ||
        location.id == 15 ||
        location.id == 16 ||
        location.id == 17 ||
        location.id == 19 ||
        location.id == 20 ||
        location.id == 21 ||
        location.id == 24
      ) {
        // this.panaUrl = `http://cbs-uu.ru/tours/f${location.id}/index.html`
        // this.$Bus.$emit('my-sample-event', this.panaUrl);
        frameSt =
          '<div style="margin-bottom:0px;"><div style="width: 400px; height: 250px;"><iframe src="http://cbs-uu.ru/tours/f' +
          location.id +
          '/index.html" width="100%" height="100%" align="left" loading="lazy">Ваш браузер не поддерживает плавающие фреймы!</iframe></div></div>';
        buttonSt = `
          <button  type="button" class="v-btn v-btn--absolute v-btn--contained v-btn--fab v-btn--right v-btn--round v-btn--top theme--dark v-size--small red accent-3 ml-3" style="margin-top:332px" onclick="javascript:document.querySelector('#button100700').click()">
            <span class="v-btn__content">
              <i aria-hidden="true" class="v-icon notranslate mdi mdi-arrow-expand-all theme--dark "></i>
            </span>
          </button>`;
      } else if (location.photoSmall)
        frameSt = '<img style="width: 100%" src="' + location.photoSmall + '">'; //'<div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="v-progress-circular v-progress-circular--indeterminate purple--text" style="height: 70px; width: 70px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="22.22222222222222 22.22222222222222 44.44444444444444 44.44444444444444" style="transform: rotate(0deg);"><circle fill="transparent" cx="44.44444444444444" cy="44.44444444444444" r="20" stroke-width="4.444444444444445" stroke-dasharray="125.664" stroke-dashoffset="125.66370614359172px" class="v-progress-circular__overlay"></circle></svg><div class="v-progress-circular__info"></div></div>'//

      return `
        <h2 style="margin-top: 0px;">${location.fullTitle}</h2>
        <p style="margin-top: 8px; margin-bottom: 4px;"><i>Адрес:
        <b>${location.address}</b>
        <br><b>Сейчас ${this.WorkStatus.status}.</b> ${this.WorkStatus.message} </i></p>
        ${frameSt}<div style="height: 10px;"></div>
        <button type="button" class="v-btn v-btn--contained  v-size--default  primary mb-1" onclick="javascript: document.querySelector('#button100500').click();">Подробнее</button> 
        <button type="button" class="v-btn v-btn--contained  v-size--default  light-blue white--text mb-1" onclick="javascript: document.querySelector('#button100600').click();">ВСЕ БИБЛИОТЕКИ </button>
        ${buttonSt}
        <p id="info100500" style="display: none"><${this.panaUrl}/p>

      `;
    },
    onClick(l) {
      this.$vuetify.goTo("#requestpanel", { offset: 0 });
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
      //this.$store.commit("chooseFilial", { id: l.id });

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
  },
  computed: {
    WorkStatus() {
      return this.$store.getters.getWorkStatus;
    }
  },
  props: ["fId"],
  watch: {
    fId: function(newVal, oldVal) {
      // watch it

      if (newVal !== oldVal) {
        let result = this.placemarks.find(
          currentValue => currentValue.id == newVal
        );
        if (result) {
          this.onClick(result)
          this.currentLocation = result;
          this.$store.commit("changeLocation", { newLocation: result });
           this.showPanel()
        } else console.log("Нет такого филиала");
      }
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
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

