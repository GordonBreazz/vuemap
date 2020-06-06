<template>
  <div>
    <v-btn
      v-for="(item, index) in socnet"
      :key="index"
      class="mx-1"
      dark
      icon
      x-large
      color="white "
      @click="goSoc(item.link)"
      v-bind:title="item.hint"
    >
      <v-icon x-large>{{ item.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socnet: [
        {
          name: "facebook",
          icon: "mdi-facebook",
          link: "https://www.facebook.com/CBSUU",
          hint: "Наш Facebook"
        },
        {
          name: "vk",
          icon: "mdi-vk",
          link: "https://vk.com/ik_kalashnikov",
          hint: "Наша группа ВКонтакте"
        },
        {
          name: "youtube",
          icon: "mdi-youtube",
          link: "https://www.youtube.com/channel/UC3xc55v1C4hJmRp6UCLWeyQ",
          hint: "Наш канал на YouTube"
        },
        {
          name: "instagram",
          icon: "mdi-instagram",
          link: "https://www.instagram.com/cbs_kalashnikov/",
          hint: "Наш Instagram"
        }
      ]
    };
  },
  methods: {
    goSoc(link) {
      window.open(link);
    }
  }
};
</script>