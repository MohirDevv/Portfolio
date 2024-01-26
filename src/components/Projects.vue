<template>
  <div class="container px-[20px] flex items-center justify-center flex-col">
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
          class="card flex flex-col bg-cardBg px-[15px] md:px-[25px] py-[12px] md:py-[18px] rounded-md transition-all"
        >
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
                  >https://wordle.uz/</a
                >
                <br>
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
      </div>
      <div class="nreal"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReal: true,
      isntReal: false,
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
</style>
