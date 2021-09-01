<template>
  <div class="about-page">
    <v-parallax src="../assets/images/material2.jpg" height="350">
      <h2 class="display-2 font-weight-light mb-5">Добро пожаловать!</h2>

      <!--<h2 class="display-1 font-weight-light mb-5">-->
      <h2
        v-bind:class="{
          'subtitle-1 font-weight-light': $vuetify.breakpoint.xsOnly,
          'display-1 font-weight-light': $vuetify.breakpoint.mdAndUp,
        }"
      >
        Это БИБЛИОГОРОД - навигатор по библиотекам МАУ ЦБС
        <br />города Улан-Удэ
      </h2>
    </v-parallax>

    <h4 class="display-1 font-weight-light" style="margin-top: 80px">
      В Улан-Удэ 18 городских библиотек, в которых рады каждому
    </h4>

    <blockquote class="blockquote">
      <p>
        Здесь вы можете начать свое знакомство с возможностями, которые
        открывают для вас городские библиотеки МАУ ЦБС. Централизованная
        библиотечная система (МАУ ЦБС г. Улан-Удэ)
        <br />это сеть библиотек города Улан-Удэ, объединяющая Центральную
        городскую библиотеку и семнадцать библиотек-филиалов.
      </p>
    </blockquote>
    <v-container class="mt-10 mb-10">
      <v-row justify="center">
        <v-col cols="12" md="11">
          <v-parallax
            src="../assets/images/mapimage.jpg"
            style="background-color: #17334e"
            height="350"
            id="litmap"
          >
            <h2>С помощью интерактивной карты</h2>

            <h2 class="display-1 font-weight-black">
              Мы поможем Вам найти свою библиотеку
            </h2>
            <div class="my-2">
              <v-btn class="ma-2" large outlined color="white" @click="goMap"
                >Перейти к карте</v-btn
              >
            </div>
          </v-parallax>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="10" lg="6">
          <v-row class="text-left">
            <v-col cols="12">
              <h3
                class="display-1 font-weight-light"
                style="padding-left: 70px"
              >
                В библиотеках МАУ ЦБС г. Улан-Удэ
                <br />вы найдете
              </h3>
            </v-col>
            <v-col cols="12">
              <v-img
                src="../assets/images/libfr.jpg"
                title="На рисунке изображена Центральная городская библиотека им. Исая К. Калашникова"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="10" lg="6">
          <v-row class="text-left pl-3">
            <v-col cols="1" :style="iconUrl1"></v-col>
            <v-col cols="11" class="mb-10">
              <p>
                Большое разнообразие литературы, которую можно читать в зале или
                взять домой совершенно бесплатно. Библиотекари и библиографы
                помогут подобрать нужные издания. А через стационарный компьютер
                можно получить доступ к электронным базам данных (Электронная
                библиотека диссертаций, КонсультантПлюс, Гарант, Национальная
                электронная библиотека и многие другие).
              </p>
            </v-col>

            <v-col cols="1" :style="iconUrl2"></v-col>
            <v-col cols="11" class="mb-10">
              <p>
                Комфортное пространство с книгами, периодикой, компьютерами.
                Здесь можно работать, читать, отдыхать, слушать музыку, а также
                по предварительной договоренности провести мероприятие.
              </p>
            </v-col>

            <v-col cols="1" :style="iconUrl3"></v-col>
            <v-col cols="11" class="mb-10">
              <p>
                Множество самых разных культурных, просветительских и
                образовательных событий.
              </p>
            </v-col>

            <v-col cols="1" :style="iconUrl4"></v-col>
            <v-col cols="11">
              <p>
                Удобный график работы: взрослые библиотеки открыты со вторника
                по субботу 10:00 до 19:00, а в воскресенье — до 18:00. Время
                работы может меняться в зависимости от профиля библиотеки и
                территориального расположения. Смотрите подробное расписание
                библиотек на карте.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-10 mb-10">
      <v-row justify="center">
        <v-col 
          cols="12"
          md="11"
        >
          <h2>В наших библиотеках проводятся интереснейщие мероприятия</h2>

          <h2 class="display-1 font-weight-black">Не проходите мимо!</h2>
          <div class="my-2">
            <v-btn class="ma-2" large outlined color="white" @click="goMap"
              >Перейти к расписанию событий</v-btn
            >
          </div>
          <div style="width: 100%; height 500px;">
            <canvas id="canvas" ></canvas>
        
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-0">
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <h3 class="display-1 font-weight-light">
            МЫ В СОЦИАЛЬНЫХ СЕТЯХ, ПРИСОЕДИНЯЙСЯ!
          </h3>

          <v-spacer></v-spacer>

          <v-btn
            v-for="(item, index) in socnet"
            :key="index"
            class="mx-4"
            dark
            icon
            x-large
            color="blue-grey darken-3"
            @click="goSoc(item.link)"
            v-bind:title="item.hint"
          >
            <v-icon x-large>{{ item.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mt-0">
      <v-row justify="center">
        <v-col cols="12" lg="9">
          <v-img
            src="../assets/places/6.jpg"
            title="На рисунке изображена Площадь советов г. Улан-Удэ"
          ></v-img>
          <!--
          <v-carousel hide-delimiters cycle>
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
          </v-carousel>
          -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import { mapState } from "vuex";
import { gsap } from "gsap";

export default {
  data() {
    return {
      items: [
        {
          src: "../assets/places/4.jpg",
        },
        {
          src: "../assets/places/1.jpg",
        },
        {
          src: "../assets/places/2.jpg",
        },
        {
          src: "../assets/places/5.jpg",
        },
      ],
    };
  },
  computed: {
    ...mapState(["socnet"]),
    iconUrl1() {
      return (
        "background: no-repeat url(" +
        require("../assets/svg/1.svg") +
        "); background-size: 100% auto;"
      );
      // The path could be '../assets/img.png', etc., which depends on where your vue file is
    },
    iconUrl2() {
      return (
        "background: no-repeat url(" +
        require("../assets/svg/2.svg") +
        "); background-size: 100% auto;"
      );
      // The path could be '../assets/img.png', etc., which depends on where your vue file is
    },
    iconUrl3() {
      return (
        "background: no-repeat url(" +
        require("../assets/svg/3.svg") +
        "); background-size: 100% auto;"
      );
      // The path could be '../assets/img.png', etc., which depends on where your vue file is
    },
    iconUrl4() {
      return (
        "background: no-repeat url(" +
        require("../assets/svg/4.svg") +
        "); background-size: 100% auto;"
      );
      // The path could be '../assets/img.png', etc., which depends on where your vue file is
    },
  },
  methods: {
    goMap() {
      this.$router.push({ path: "/" });
    },
    goSoc(link) {
      window.open(link);
    },
  },
  mounted() {
    const config = {
      src: require("../assets/images/__open-peeps-sheet.png"),
      rows: 15,
      cols: 7,
    };

    // UTILS
    //console.log(config.src)
    const randomRange = (min, max) => min + Math.random() * (max - min);
    const randomIndex = (array) => randomRange(0, array.length) | 0;
    const removeFromArray = (array, i) => array.splice(i, 1)[0];
    const removeItemFromArray = (array, item) =>
      removeFromArray(array, array.indexOf(item));

    const removeRandomFromArray = (array) =>
      removeFromArray(array, randomIndex(array));

    const getRandomFromArray = (array) => array[randomIndex(array) | 0];

    // TWEEN FACTORIES

    const resetPeep = ({ stage, peep }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      // using an ease function to skew random to lower values to help hide that peeps have no legs
      const offsetY = 100 - 250 * gsap.parseEase("power2.in")(Math.random());
      const startY = stage.height - peep.height + offsetY;
      let startX;
      let endX;

      if (direction === 1) {
        startX = -peep.width;
        endX = stage.width;
        peep.scaleX = 1;
      } else {
        startX = stage.width + peep.width;
        endX = 0;
        peep.scaleX = -1;
      }

      peep.x = startX;
      peep.y = startY;
      peep.anchorY = startY;

      return {
        startX,
        startY,
        endX,
      };
    };

    const normalWalk = ({ peep, props }) => {
      const { startX, startY, endX } = props;

      const xDuration = 10;
      const yDuration = 0.25;

      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.5, 1.5));
      tl.to(
        peep,
        {
          duration: xDuration,
          x: endX,
          ease: "none",
        },
        0
      );
      tl.to(
        peep,
        {
          duration: yDuration,
          repeat: xDuration / yDuration,
          yoyo: true,
          y: startY - 10,
        },
        0
      );

      return tl;
    };

    const walks = [normalWalk];

    // CLASSES

    class Peep {
      constructor({ image, rect }) {
        this.image = image;
        this.setRect(rect);

        this.x = 0;
        this.y = 0;
        this.anchorY = 0;
        this.scaleX = 1;
        this.walk = null;
      }

      setRect(rect) {
        this.rect = rect;
        this.width = rect[2];
        this.height = rect[3];

        this.drawArgs = [this.image, ...rect, 0, 0, this.width, this.height];
      }

      render(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scaleX, 1);
        ctx.drawImage(...this.drawArgs);
        ctx.restore();
      }
    }

    // MAIN

    const img = document.createElement("img");
    img.onload = init;
    img.src = config.src;

    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    const stage = {
      width: 0,
      height: 0,
    };

    const allPeeps = [];
    const availablePeeps = [];
    const crowd = [];

    function init() {
      createPeeps();

      // resize also (re)populates the stage
      resize();

      gsap.ticker.add(render);
      window.addEventListener("resize", resize);
    }

    function createPeeps() {
      const { rows, cols } = config;
      const { naturalWidth: width, naturalHeight: height } = img;
      const total = rows * cols;
      const rectWidth = width / rows;
      const rectHeight = height / cols;

      for (let i = 0; i < total; i++) {
        allPeeps.push(
          new Peep({
            image: img,
            rect: [
              (i % rows) * rectWidth,
              ((i / rows) | 0) * rectHeight,
              rectWidth,
              rectHeight,
            ],
          })
        );
      }
    }

    function resize() {
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      canvas.width = stage.width * devicePixelRatio;
      canvas.height = stage.height * devicePixelRatio;

      crowd.forEach((peep) => {
        peep.walk.kill();
      });

      crowd.length = 0;
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);

      initCrowd();
    }

    function initCrowd() {
      while (availablePeeps.length) {
        // setting random tween progress spreads the peeps out
        addPeepToCrowd().walk.progress(Math.random());
      }
    }

    function addPeepToCrowd() {
      const peep = removeRandomFromArray(availablePeeps);
      const walk = getRandomFromArray(walks)({
        peep,
        props: resetPeep({
          peep,
          stage,
        }),
      }).eventCallback("onComplete", () => {
        removePeepFromCrowd(peep);
        addPeepToCrowd();
      });

      peep.walk = walk;

      crowd.push(peep);
      crowd.sort((a, b) => a.anchorY - b.anchorY);

      return peep;
    }

    function removePeepFromCrowd(peep) {
      removeItemFromArray(crowd, peep);
      availablePeeps.push(peep);
    }

    function render() {
      canvas.width = canvas.width;
      ctx.save();
      //ctx.scale(devicePixelRatio, devicePixelRatio);

      crowd.forEach((peep) => {
        peep.render(ctx);
      });

      ctx.restore();
    }
  },
};
</script>
<style>
.v-parallax__image-container {
  opacity: 1;
}
#litmap .v-parallax__image-container {
  opacity: 0.5;
}
#canvas {
  width: 100%;
  height: 600px;
  z-index: 0;

}
</style>