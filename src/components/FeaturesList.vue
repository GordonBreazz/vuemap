<template>
  <v-list one-line dense>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-clock-outline</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle class="mb-2">Режим работы</v-list-item-subtitle>
        <v-list-item-title
          class="schedule"
          v-for="item in timeTable"
          v-bind:key="item.id"
          :class="{ activeDay: isActive(item.id) }"
        >
          <div v-if="isActive(item.id)">{{ item.dayOfWeek }} (сегодня)</div>
          <div v-else>{{ item.dayOfWeek }}</div>
          <div>{{ item.timeOfDay }}</div>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-broom</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle>Санитарный день</v-list-item-subtitle>
        <v-list-item-title class="mt-1">Последняя пятница месяца</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider inset></v-divider>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-page-previous-outline</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle class="mb-2">В библиотеке вы найдёте</v-list-item-subtitle>
        <div class="d-flex flex-wrap align-center">
          <div
            v-for="(item, index) in getFeaturesImages"
            :key="index"
            class="mr-2 mb-2"
            v-show="item.type == 1"
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-img :src="getFeaturesImgPath(item.img)" width="35" v-on="on" class="photoglr"></v-img>
              </template>
              <span>{{item.title}}</span>
            </v-tooltip>
          </div>
        </div>

        <v-list-item-subtitle class="mb-2">Библиотека предоставляет</v-list-item-subtitle>
        <div class="d-flex flex-wrap align-center">
          <div
            v-for="(item, index) in getFeaturesImages"
            :key="index"
            class="mr-2 mb-2"
            v-show="item.type == 2"
          >
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-img :src="getFeaturesImgPath(item.img)" width="35" v-on="on" class="photoglr"></v-img>
              </template>
              <span>{{item.title}}</span>
            </v-tooltip>
          </div>
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-divider inset></v-divider>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-account-supervisor-circle</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle class="mb-2">Объединения и клубы работающие в библиотеке</v-list-item-subtitle>
        <v-list-item-title>
          <ul v-for="item in clubs" v-bind:key="item.id">
            <li>{{ item }}</li>
          </ul>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider inset></v-divider>

    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-human-male-child</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle class="mb-2">Для детей</v-list-item-subtitle>
        <v-list-item-title>
          <ul v-for="item in forChildren" v-bind:key="item">
            <li>{{ item }}</li>
          </ul>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider inset></v-divider>

    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-printer-check</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle class="mb-2">
          Копицентр
        </v-list-item-subtitle>

        <v-list-item-title>
          <ul v-for="item in copyCentre" v-bind:key="item">
            <li class="badge" title="Платные услуги (₽)">{{ item }}</li>
          </ul>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

       <v-divider inset></v-divider>
    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-web</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle class="mb-2">Электронные базы данных</v-list-item-subtitle>

        <v-list-item-title>
          <ul v-for="(item, index ) in ebd" :key="index">
            <li>
              <a :href="item.url" target="blank">{{ item.title }}</a>
            </li>
          </ul>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    todayWork: 0,
    // Шаблон отображения расписания
    days: [
      { id: 1, dayOfWeek: "Понедельник", timeOfDay: "Выходной" },
      { id: 2, dayOfWeek: "Вторник", timeOfDay: "c 10:00 до 19:00" },
      { id: 3, dayOfWeek: "Среда", timeOfDay: "c 10:00 до 19:00" },
      { id: 4, dayOfWeek: "Четверг", timeOfDay: "c 10:00 до 19:00" },
      { id: 5, dayOfWeek: "Пятница", timeOfDay: "c 10:00 до 19:00" },
      { id: 6, dayOfWeek: "Суббота", timeOfDay: "c 10:00 до 19:00" },
      { id: 0, dayOfWeek: "Воскресенье", timeOfDay: "c 10:00 до 19:00" }
    ]
  }),
  methods: {
    isActive(day) {
      if (this.todayWork) if (day == this.todayWork.getDay()) return true;
      return false;
    },
    getFeaturesImgPath(item) {
      return require(`../assets/features_lightgray/${item}`)
    }
  },
  mounted() {
    this.todayWork = new Date();
    //console.log(this.$vuetify.breakpoint);
  },
  computed: {
    ...mapState({
      libraryType: state => state.currentLocation.libraryType,
      structure: state => state.currentLocation.structure,
      clubs: state => state.currentLocation.clubs,
      foundingYear: state => state.currentLocation.foundingYear,
      forChildren: state => state.currentLocation.forChildren,
      copyCentre: state => state.currentLocation.copyCentre,
      services: state => state.currentLocation.services,
      ebd: state => state.ebd
    }),
    ...mapGetters([
      "getTimetable",
      "getFoundingYearImage",
      "getFeaturesImages"
    ]),
    timeTable() {
      let arr = this.getTimetable;
      //console.log('AAA', arr)
      for (let i = 0; i < 7; i++) {
        let j = this.days[i].id;
        if (arr[j].dayoff) this.days[i].timeOfDay = "Выходной";
        else
          this.days[
            i
          ].timeOfDay = `c ${arr[j].openTime}:00 до ${arr[j].closeTime}:00`;
      }
      return this.days;
    }
  }
};
</script>

<style scoped>

.badge:after {
  content: '₽';
  margin-left: 5px;
  padding-left: 0.35em;
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  vertical-align: baseline;
  background-color: #284ac7;
  border-radius: 50%;
  color: white;
  font-size: 0.9em;
  position: relative;
  top: 2px;
  background-size: cover;
}

.badge {
  white-space: nowrap;
}



.activeDay {
  background-color: rgb(223, 223, 223);
}
.schedule {
  display: -ms-flexbox;
  border-radius: 15px;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 3px 8px;
  font-size: smaller;
}
</style>