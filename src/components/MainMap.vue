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
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {
      map: {},
      coords: [51.81008913374312, 107.60167337301641],
      //userPosition: [51.825683, 107.58439],
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
    showPanel() {
      this.$store.commit("showInfoPanel");
      this.$vuetify.goTo("#infopanel", {
        offset: 30 + Math.floor(Math.random() * 11)
      });
    },

    goToAll() {
      //if (this.$router.currentRoute.path !== '/') this.$router.replace('/')
      this.$vuetify.goTo("#requestpanel");
      if (this.map.balloon) this.map.balloon.close();
      this.map.setBounds(this.map.geoObjects.getBounds());
    },
    balloonTemplate(location) {
      //Создания балуна метки
      let frameSt = "";
      let buttonSt = "";
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
        frameSt = '<img style="width: 100%" src="' + location.photoSmall + '">';

      return `
        <h2 style="margin-top: 0px;">${location.fullTitle}</h2>
        <p style="margin-top: 8px; margin-bottom: 4px;"><i>Адрес:
        <b>${location.address}</b>
        <br><b>Сейчас ${this.getWorkStatus.status}.</b> ${this.getWorkStatus.message} </i></p>
        <div class="d-none d-md-flex d-lg-flex d-xl-flex">${frameSt}</div><div style="height: 10px;"></div>
        <button type="button" class="v-btn v-btn--contained  v-size--default  primary mb-1" onclick="javascript: document.querySelector('#button100500').click();">Подробнее</button> 
        <button type="button" class="v-btn v-btn--contained  v-size--default  light-blue white--text mb-1" onclick="javascript: document.querySelector('#button100600').click();">ВСЕ БИБЛИОТЕКИ </button>
        ${buttonSt}
        <p id="info100500" style="display: none"><${this.panaUrl}/p>

      `;
    },
    onClick(l) {
      this.$vuetify.goTo("#requestpanel", { offset: 0 });
      this.map.setCenter(l.coords, 19, { checkZoomRange: false });
      this.$store.commit("changeLocation", { newLocation: l });
    },
    getDataCluster(obj) {},
    getDataPoint(obj) {
      const coords = obj.get("coords");
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
        gt(); //goToAll
      });

      this.map.controls.add(btn, {
        float: "left",
        floatIndex: 100
      });
    }
  },
  computed: {
    ...mapState(["placemarks"]),
    ...mapGetters(["getWorkStatus"])
  },
  props: ["fId", "frm"],
  watch: {
    fId: function(newVal, oldVal) {
      if (newVal !== oldVal) {
        let result = this.placemarks.find(
          currentValue => currentValue.id == newVal
        );
        if (result) {
          if (!this.frm) {
            this.map.setCenter(result.coords, 19, { checkZoomRange: false });
          }
          this.$store.commit("changeLocation", { newLocation: result });
          this.showPanel();
        } else this.$router.push('/404/')//console.log("Нет такого филиала");
      }
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

