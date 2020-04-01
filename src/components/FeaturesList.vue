<template>
  <v-list one-line dense>
    <v-list-item @click>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-bookshelf</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-subtitle>Тип библиотеки</v-list-item-subtitle>
        <v-list-item-title class="mt-1">{{libraryType}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider inset></v-divider>

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
        <v-icon color="indigo">mdi-desk</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle class="mb-2">Отделы библиотекки</v-list-item-subtitle>
        <v-list-item-title> <ul v-for="item in structure" v-bind:key="item.id">
          <li>{{ item }}</li>
          </ul>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider inset></v-divider>

    <v-list-item>
      <v-list-item-icon>
        <v-icon color="indigo">mdi-account-supervisor</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-subtitle class="mb-2">Объединения и клубы</v-list-item-subtitle>
        <v-list-item-title> <ul v-for="item in clubs" v-bind:key="item.id">
          <li>{{ item }}</li>
          </ul>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>    
  </v-list>
</template>
<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

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
    ],
  }),
  methods: {
    isActive(day) {
      if (this.todayWork)
        if (day == this.todayWork.getDay()) return true
      return false
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
        clubs: state => state.currentLocation.clubs
      }),
    ...mapGetters(['getTimetable']),
    timeTable() {
      let arr = this.getTimetable
      //console.log('AAA', arr)
      for (let i = 0; i<7; i++) {
        let j = this.days[i].id
        if (arr[j].dayoff) this.days[i].timeOfDay = 'Выходной'
          else this.days[i].timeOfDay = `c ${arr[j].openTime}:00 до ${arr[j].closeTime}:00`
      }
      return this.days
    }         
  }
}
</script>

<style scoped>
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