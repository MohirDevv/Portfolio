<template>
  <div class="container px-[20px] flex items-center justify-center flex-col" id="projects">
    <h1 class="text-[28px] pb-[20px] text-semiBlack font-bold">Projects</h1>
    <div
      class="priceOption flex items-center justify-center gap-2 p-[3px] mb-[20px] bg-[#F3F3F3] rounded-lg"
    >
      <h2
        class="text-[13px] xl:text-[20px] cursor-pointer text-semiBlack"
        :class="isReal ? 'active' : 'deactivated'"
        @click="realToNreal"
      >
        Real Projects
      </h2>
      <h2
        class="deactivated text-[13px] xl:text-[20px] cursor-pointer text-semiBlack"
        :class="isntReal ? 'active' : 'deactivated'"
        @click="NrealToReal"
      >
        Pet Projects
      </h2>
    </div>
    <div class="cards transition-all mb-[50px]">
    <div v-if="isReal">
      <div
        v-for="(card, index) in realCards"
        :key="index"
        class="card flex flex-col bg-cardBg px-[15px] md:px-[25px] py-[12px] md:py-[18px] rounded-md transition-all mb-[20px]"
        :data-aos="index % 2 === 0 ? 'flip-left' : 'flip-right'"
      >
        <h1 class="text-[20px] font-medium font-mono pb-[10px]">{{ card.title }}</h1>
        <img
          :src="card.imageSrc"
          class="md:max-w-[700px] rounded-sm"
          alt="#"
        />
        <div class="info pt-[7px] md:pt-[14px]">
          <div class="options flex items-center gap-1 md:gap-3">
            <div
              v-for="(tech, idx) in card.technologies"
              :key="idx"
              :class="['optionSk', tech.class]"
            >
              <p class="text-[13px] md:text-[18px]">{{ tech.name }}</p>
            </div>
          </div>
          <div class="desc pt-[15px] text-semiBlack max-w-[700px]">
            <p class="md:text-[22px]">{{ card.description }}</p>
            <p class="pt-[8px] md:pt-[14px] text-[18px] text-semiBlack">
              Check this out! <br />
              <a
                :href="card.link"
                target="_blank"
                class="text-[#0ea4e994] cursor-pointer text-[16px] md:text-[18px]"
                >{{ card.linkText }}</a
              >
              <br v-if="card.botLink" />
              <a
                v-if="card.botLink"
                :href="card.botLink"
                target="_blank"
                class="text-[#0ea4e994] cursor-pointer text-[16px] md:text-[18px]"
                >{{ card.botLinkText }}</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
      <div class="nreal transition-all" v-if="isntReal">
        <div
        v-for="(card, index) in petCards"
        :key="index"
          class="card flex flex-col bg-cardBg px-[15px] md:px-[25px] py-[12px] md:py-[18px] rounded-md transition-all mb-[20px]"
          data-aos="flip-left">
          <h1 class="text-[20px] font-medium font-mono pb-[10px]">
            {{ card.title }}
          </h1>
          <img
            :src="card.imageSrc"
            class="md:max-w-[700px] rounded-sm"
            alt="#"
          />
          <div class="info pt-[7px] md:pt-[14px]">
            <div class="options flex items-center gap-1 md:gap-3">
            <div
              v-for="(tech, idx) in card.technologies"
              :key="idx"
              :class="['optionSk', tech.class]"
            >
              <p class="text-[13px] md:text-[18px]">{{ tech.name }}</p>
            </div>
          </div>
            <div class="desc pt-[15px] text-semiBlack max-w-[700px]">
              <p class="md:text-[22px]">
                {{ card.description }}
              </p>
              <p class="pt-[8px] md:pt-[14px] text-[18px] text-semiBlack">
                Check this out! <br />
                <a
                  :href="card.link"
                  target="_blank"
                  class="text-[#0ea4e994] cursor-pointer text-[16px] md:text-[18px]"
                  >{{ card.linkText }}</a
                >
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="loadMore flex items-center justify-center" @click="loadMore" data-aos="fade-up">
          <p
            class="text-black flex items-center justify-center py-[5px] px-[10px] rounded-lg gap-1 bg-[#a1a1a1]"
          >
            See <p v-if="IsitAll">All</p> <p v-if="!IsitAll">Less</p>
            <i class="fas fa-chevron-down transition-all" id="arrow"></i>
          </p>
        </div> -->
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isReal: true,
      isntReal: false,
      IsitAll: true,
      realCards: [
        {
          title: "Wordle.uz",
          imageSrc: "../../public/images/wordle-main.jpg",
          technologies: [
            { name: "Vue.js", class: "vue" },
            { name: "JS", class: "js" },
            { name: "Tailwind", class: "tailwind" },
            { name: "Vite", class: "vite" },
            { name: "Websocket", class: "websocket" }
          ],
          description:
            "Wordle is a famous game in which you have to find a secret word in a few tries, and this is also my first serious project.",
          link: "https://wordle.uz/",
          linkText: "wordle.uz",
          botLink: "https://t.me/wordleuzb_bot",
          botLinkText: "@WordleUzb_Bot"
        },
        {
          title: "Avtovoditel.uz",
          imageSrc: "../../public/images/Снимок экрана 2024-01-23 220138.png",
          technologies: [
            { name: "Vue.js", class: "vue" },
            { name: "JS", class: "js" },
            { name: "Tailwind", class: "tailwind" },
            { name: "Vite", class: "vite" },
            { name: "Axios", class: "axios" }
          ],
          description:
            "This is site that can help you to get license for any type of auto. Just simple Landing SPA project.",
          link: "https://avtovoditel.uz/",
          linkText: "avtovoditel.uz"
        },
        {
          title: "Abrtech.uz",
          imageSrc: "../../public/images/abr-prew.png",
          technologies: [
            { name: "HTML", class: "html" },
            { name: "BLADE", class: "html" },
            { name: "PHP", class: "axios" },
            { name: "CSS", class: "css" },
            { name: "Tailwind", class: "tailwind" },
            { name: "Vue.js", class: "vue" },
            { name: "i18n", class: "vue" },
            { name: "JS", class: "js" },
          ],
          description:
            "Quite an extensive project for Landing, has a lot of interactivity for users.",
          link: "https://abrtech.uz/",
          linkText: "abrtech.uz"
        },
        {
          title: "Book shop",
          imageSrc: "../../public/images/Снимок экрана 2024-01-23 220205.png",
          technologies: [
            { name: "Vue.js", class: "vue" },
            { name: "JS", class: "js" },
            { name: "Tailwind", class: "tailwind" },
            { name: "Vite", class: "vite" },
            { name: "Axios", class: "axios" },
            { name: "Aos", class: "websocket" }
          ],
          description:
            "This is site for selling books and individual courses. Nothing special, just simple Landing SPA.",
          link: "https://shaxnoza-siddiqova.uz",
          linkText: "shaxnoza-siddiqova.uz"
        }
      ],
      petCards: [
      {
          title: "Home State",
          imageSrc: "../../public/images/HomeState-prew.png",
          technologies: [
            { name: "HTML", class: "html"},
            { name: "CSS", class: "css" },
            { name: "GSAP", class: "vue" },
            { name: "JS", class: "js" },
            { name: "Swiper.js", class: "js" },
          ],
          description:
            `Simple resp site for selling/renting estate. Smooth animations,
                similiar patterns, there's nothing special.`,
          link: "https://homestate-responsive.netlify.app/",
          linkText: "Home State",
        },
        {
          title: "Window sync.",
          imageSrc: "../../public/images/Снимок экрана 2024-01-23 215256.png",
          technologies: [
            { name: "HTML", class: "html" },
            { name: "CSS", class: "css" },
            { name: "JS", class: "js" },
            { name: "Three.js", class: "js" }
          ],
          description:
            " Very interesting project that sync. windows to fill 3d models, it also made by Three.js ",
          link: "https://enchanting-mandazi-d1956f.netlify.app/",
          linkText: "Window sync."
        },
        {
          title: "Camping",
          imageSrc: "../../public/images/Camping-prew.png",
          technologies: [
          { name: "HTML", class: "html" },
            { name: "CSS", class: "css" },
            { name: "JS", class: "js" }
          ],
          description:
            "A simple example of using parallax on a website. ",
          link: "https://marvelous-travesseiro-707b4b.netlify.app/",
          linkText: "Camping Website"
        },
        {
          title: "Memory Game",
          imageSrc: "../../public/images/memory-prew.png",
          technologies: [
          { name: "HTML", class: "html" },
            { name: "CSS", class: "css" },
            { name: "JS", class: "js" }
          ],
          description:
            "Memory Game with specific game rules and great potential",
          link: "https://fluffy-toffee-9d1863.netlify.app/",
          linkText: "Memory Game"
        }
      ]
    };
  },
  methods: {
    realToNreal() {
      this.isReal = true;
      this.isntReal = false;
    },
    NrealToReal() {
      this.isReal = false;
      this.isntReal = true;
    },
    loadMore() {
      let arrow = document.getElementById("arrow")
      if(arrow.classList.contains("fa-chevron-down")) {
        arrow.classList.add("fa-chevron-up")
        arrow.classList.remove("fa-chevron-down")
      } else {
        arrow.classList.remove("fa-chevron-up")
        arrow.classList.add("fa-chevron-down")
      }
      this.IsitAll = !this.IsitAll
    },
  },
};
</script>

<style scoped>
.active {
  background: #ffffff;
  padding: 12px 24px;
  box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.04),
    0px 3px 8px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  text-align: center;
  color: #6aaa64;
  font-weight: 600;
  transition: 0.1s;
}

.deactivated {
  text-align: center;
  padding: 12px 24px;
  transition: 0.1s;
}

.optionSk {
  color: #ffffff;
  background: #ffffff;
  padding: 3px 6px;
  border-radius: 14px;
}

.vue {
  background: #41b883;
}

.js {
  color: black;
  background: #f0db4f;
}

.tailwind {
  background: #0ea5e9;
}

.vite {
  background: linear-gradient(-45deg, #bd34fe 40%, #47caff 60%);
}

.websocket {
  color: black;
}
.axios {
  color: #ffffff;
  background: #671ddf;
}

.html {
  background: #f06529;
}
.css {
  background: #2965f1;
}
</style>
