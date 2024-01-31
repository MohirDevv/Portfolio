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
      <div class="real transition-all" v-if="isReal">
        <div
          class="card flex flex-col bg-cardBg px-[15px] md:px-[25px] py-[12px] md:py-[18px] rounded-md transition-all mb-[20px]"
          data-aos="flip-left">
          <h1 class="text-[20px] font-medium font-mono pb-[10px]">Wordle.uz</h1>
          <img
            src="../../public/images/wordle-main.jpg"
            class="md:max-w-[700px] rounded-sm"
            alt="#"
          />
          <div class="info pt-[7px] md:pt-[14px]">
            <div class="options flex items-center gap-1 md:gap-3">
              <div class="optionSk vue">
                <p class="text-[13px] md:text-[18px]">Vue.js</p>
              </div>
              <div class="optionSk js">
                <p class="text-[13px] md:text-[18px]">JS</p>
              </div>
              <div class="optionSk tailwind">
                <p class="text-[13px] md:text-[18px]">Tailwind</p>
              </div>
              <div class="optionSk vite">
                <p class="text-[13px] md:text-[18px]">Vite</p>
              </div>
              <div class="optionSk websocket">
                <p class="text-[13px] md:text-[18px]">Websocket</p>
              </div>
            </div>
            <div class="desc pt-[15px] text-semiBlack max-w-[700px]">
              <p class="md:text-[22px]">
                Wordle is a famous game in which you have to find a secret word
                in a few tries, and this is also my first serious project.
              </p>
              <p class="pt-[8px] md:pt-[14px] text-[18px] text-semiBlack">
                Check this out! <br />
                <a
                  href="https://wordle.uz/"
                  target="_blank"
                  class="text-[#0ea4e994] cursor-pointer text-[16px] md:text-[18px]"
                  >wordle.uz</a
                >
                <br />
                <a
                  href="https://t.me/wordleuzb_bot"
                  target="_blank"
                  class="text-[#0ea4e994] cursor-pointer text-[16px] md:text-[18px]"
                  >@WordleUzb_Bot</a
                >
              </p>
            </div>
          </div>
        </div>
        <div
          class="card flex flex-col bg-cardBg px-[15px] md:px-[25px] py-[12px] md:py-[18px] rounded-md transition-all mb-[20px]"
          data-aos="flip-right">
          <h1 class="text-[20px] font-medium font-mono pb-[10px]">
            Avtovoditel.uz
          </h1>
          <img
            src="../../public/images/Снимок экрана 2024-01-23 220138.png"
            class="md:max-w-[700px] rounded-sm"
            alt="#"
          />
          <div class="info pt-[7px] md:pt-[14px]">
            <div class="options flex items-center gap-1 md:gap-3">
              <div class="optionSk vue">
                <p class="text-[13px] md:text-[18px]">Vue.js</p>
              </div>
              <div class="optionSk js">
                <p class="text-[13px] md:text-[18px]">JS</p>
              </div>
              <div class="optionSk tailwind">
                <p class="text-[13px] md:text-[18px]">Tailwind</p>
              </div>
              <div class="optionSk vite">
                <p class="text-[13px] md:text-[18px]">Vite</p>
              </div>
              <div class="optionSk axios">
                <p class="text-[13px] md:text-[18px]">Axios</p>
              </div>
            </div>
            <div class="desc pt-[15px] text-semiBlack max-w-[700px]">
              <p class="md:text-[22px]">
                This is site that can help you to get license for any type of
                auto. Just simple Landing SPA project.
              </p>
              <p class="pt-[8px] md:pt-[14px] text-[18px] text-semiBlack">
                Check this out! <br />
                <a
                  href="https://avtovoditel.uz/"
                  target="_blank"
                  class="text-[#0ea4e994] cursor-pointer text-[16px] md:text-[18px]"
                  >avtovoditel.uz</a
                >
              </p>
            </div>
          </div>
        </div>
        <div
          class="card flex flex-col bg-cardBg px-[15px] md:px-[25px] py-[12px] md:py-[18px] rounded-md transition-all mb-[20px]"
          data-aos="flip-left">
          <h1 class="text-[20px] font-medium font-mono pb-[10px]">Book shop</h1>
          <img
            src="../../public/images/Снимок экрана 2024-01-23 220205.png"
            class="md:max-w-[700px] rounded-sm"
            alt="#"
          />
          <div class="info pt-[7px] md:pt-[14px]">
            <div class="options flex items-center gap-1 md:gap-3">
              <div class="optionSk vue">
                <p class="text-[13px] md:text-[18px]">Vue.js</p>
              </div>
              <div class="optionSk js">
                <p class="text-[13px] md:text-[18px]">JS</p>
              </div>
              <div class="optionSk tailwind">
                <p class="text-[13px] md:text-[18px]">Tailwind</p>
              </div>
              <div class="optionSk vite">
                <p class="text-[13px] md:text-[18px]">Vite</p>
              </div>
              <div class="optionSk axios">
                <p class="text-[13px] md:text-[18px]">Axios</p>
              </div>
              <div class="optionSk websocket">
                <p class="text-[13px] md:text-[18px]">Aos</p>
              </div>
            </div>
            <div class="desc pt-[15px] text-semiBlack max-w-[700px]">
              <p class="md:text-[22px]">
                This is site for selling books and individual courses. Nothing
                special, just simple Landing SPA.
              </p>
              <p class="pt-[8px] md:pt-[14px] text-[18px] text-semiBlack">
                Check this out! <br />
                <a
                  href="https://shaxnoza-siddiqova.uz"
                  target="_blank"
                  class="text-[#0ea4e994] cursor-pointer text-[16px] md:text-[18px]"
                  >shaxnoza-siddiqova.uz</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="nreal transition-all" v-if="isntReal">
        <div
          class="card flex flex-col bg-cardBg px-[15px] md:px-[25px] py-[12px] md:py-[18px] rounded-md transition-all mb-[20px]"
          data-aos="flip-left">
          <h1 class="text-[20px] font-medium font-mono pb-[10px]">
            Home State
          </h1>
          <img
            src="../../public/images/HomeState-prew.png"
            class="md:max-w-[700px] rounded-sm"
            alt="#"
          />
          <div class="info pt-[7px] md:pt-[14px]">
            <div class="options flex items-center gap-1 md:gap-3">
              <div class="optionSk html">
                <p class="text-[13px] md:text-[18px]">HTML</p>
              </div>
              <div class="optionSk css">
                <p class="text-[13px] md:text-[18px]">CSS</p>
              </div>
              <div class="optionSk vue">
                <p class="text-[13px] md:text-[18px]">GSAP</p>
              </div>
              <div class="optionSk js">
                <p class="text-[13px] md:text-[18px]">JS</p>
              </div>
              <div class="optionSk js">
                <p class="text-[13px] md:text-[18px]">Swiper.js</p>
              </div>
            </div>
            <div class="desc pt-[15px] text-semiBlack max-w-[700px]">
              <p class="md:text-[22px]">
                Simple resp site for selling/renting estate. Smooth animations,
                similiar patterns, there's nothing special.
              </p>
              <p class="pt-[8px] md:pt-[14px] text-[18px] text-semiBlack">
                Check this out! <br />
                <a
                  href="https://homestate-responsive.netlify.app/"
                  target="_blank"
                  class="text-[#0ea4e994] cursor-pointer text-[16px] md:text-[18px]"
                  >Home State</a
                >
              </p>
            </div>
          </div>
        </div>
        <div
          class="card flex flex-col bg-cardBg px-[15px] md:px-[25px] py-[12px] md:py-[18px] rounded-md transition-all mb-[20px]"
          data-aos="flip-right">
          <h1 class="text-[20px] font-medium font-mono pb-[10px]">
            Window sync.
          </h1>
          <img
            src="../../public/images/Снимок экрана 2024-01-23 215256.png"
            class="md:max-w-[700px] rounded-sm"
            alt="#"
          />
          <div class="info pt-[7px] md:pt-[14px]">
            <div class="options flex items-center gap-1 md:gap-3">
              <div class="optionSk html">
                <p class="text-[13px] md:text-[18px]">HTML</p>
              </div>
              <div class="optionSk css">
                <p class="text-[13px] md:text-[18px]">CSS</p>
              </div>
              <div class="optionSk js">
                <p class="text-[13px] md:text-[18px]">JS</p>
              </div>
              <div class="optionSk js">
                <p class="text-[13px] md:text-[18px]">Three.js</p>
              </div>
            </div>
            <div class="desc pt-[15px] text-semiBlack max-w-[700px]">
              <p class="md:text-[22px]">
                Very interesting project that sync. windows to fill 3d models,
                it also made by Three.js
              </p>
              <p class="pt-[8px] md:pt-[14px] text-[18px] text-semiBlack">
                Check this out! <br />
                <a
                  href="https://enchanting-mandazi-d1956f.netlify.app/"
                  target="_blank"
                  class="text-[#0ea4e994] cursor-pointer text-[16px] md:text-[18px]"
                  >Window sync.</a
                >
              </p>
            </div>
          </div>
        </div>
        <div
          class="card flex flex-col bg-cardBg px-[15px] md:px-[25px] py-[12px] md:py-[18px] rounded-md transition-all mb-[20px]"
          data-aos="flip-left">
          <h1 class="text-[20px] font-medium font-mono pb-[10px]">Camping</h1>
          <img
            src="../../public/images/Camping-prew.png"
            class="md:max-w-[700px] rounded-sm"
            alt="#"
          />
          <div class="info pt-[7px] md:pt-[14px]">
            <div class="options flex items-center gap-1 md:gap-3">
              <div class="optionSk html">
                <p class="text-[13px] md:text-[18px]">HTML</p>
              </div>
              <div class="optionSk css">
                <p class="text-[13px] md:text-[18px]">CSS</p>
              </div>
              <div class="optionSk js">
                <p class="text-[13px] md:text-[18px]">JS</p>
              </div>
            </div>
            <div class="desc pt-[15px] text-semiBlack max-w-[700px]">
              <p class="md:text-[22px]">
                A simple example of using parallax on a website.
              </p>
              <p class="pt-[8px] md:pt-[14px] text-[18px] text-semiBlack">
                Check this out! <br />
                <a
                  href="https://marvelous-travesseiro-707b4b.netlify.app/"
                  target="_blank"
                  class="text-[#0ea4e994] cursor-pointer text-[16px] md:text-[18px]"
                  >Camping Website</a
                >
              </p>
            </div>
          </div>
        </div>
        <div
          class="card flex flex-col bg-cardBg px-[15px] md:px-[25px] py-[12px] md:py-[18px] rounded-md transition-all mb-[20px]"
          v-if="!IsitAll" data-aos="flip-right"
        >
          <h1 class="text-[20px] font-medium font-mono pb-[10px]">Memory Game</h1>
          <img
            src="../../public/images/memory-prew.png"
            class="md:max-w-[700px] rounded-sm"
            alt="#"
          />
          <div class="info pt-[7px] md:pt-[14px]">
            <div class="options flex items-center gap-1 md:gap-3">
              <div class="optionSk html">
                <p class="text-[13px] md:text-[18px]">HTML</p>
              </div>
              <div class="optionSk css">
                <p class="text-[13px] md:text-[18px]">CSS</p>
              </div>
              <div class="optionSk js">
                <p class="text-[13px] md:text-[18px]">JS</p>
              </div>
            </div>
            <div class="desc pt-[15px] text-semiBlack max-w-[700px]">
              <p class="md:text-[22px]">
                Just a simple memory game.
              </p>
              <p class="pt-[8px] md:pt-[14px] text-[18px] text-semiBlack">
                Check this out! <br />
                <a
                  href="https://fluffy-toffee-9d1863.netlify.app/"
                  target="_blank"
                  class="text-[#0ea4e994] cursor-pointer text-[16px] md:text-[18px]"
                  >Memory Game</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="loadMore flex items-center justify-center" @click="loadMore" data-aos="fade-up">
          <p
            class="text-black flex items-center justify-center py-[5px] px-[10px] rounded-lg gap-1 bg-[#a1a1a1]"
          >
            See <p v-if="IsitAll">All</p> <p v-if="!IsitAll">Less</p>
            <i class="fas fa-chevron-down transition-all" id="arrow"></i>
          </p>
        </div>
      </div>
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
