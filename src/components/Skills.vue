<template>
  <div
    class="container flex items-center justify-center flex-col gap-6 xl:gap-[50px] py-[50px]"
  >
    <div
      class="techStack flex items-center justify-center flex-col xl:flex-row gap-[15px] xl:gap-[40px] overflow-hidden"
    >
      <h2
        class="text-semiBlack text-[18px] border-b-2 border-lightGray xl:text-[24px] xl:border-b-0 xl:border-r-2 xl:pr-[8px]"  data-aos="fade-up"
      >
        Tech Stack
      </h2>
      <div
        class="technologies flex items-center justify-center flex-wrap gap-[30px]"
      >
        <div class="1pair flex gap-2 overflow-hidden">
          <img
            src="../../public/icons/html5-bagde.svg"
            class="w-[40px] h-[40px]"
            alt="#"
            data-aos="fade-up"
          />
          <img
            src="../../public/icons/css3-badge.svg"
            class="w-[40px] h-[40px]"
            alt="#"
            data-aos="fade-down"
          />
        </div>
        <div class="2pair flex gap-2 overflow-hidden">
          <img
            src="../../public/icons/javascript.svg"
            class="w-[40px] h-[40px]"
            alt="#"
            data-aos="fade-up"
          />
          <img
            src="../../public/icons/bootstrap.svg"
            class="w-[40px] h-[40px]"
            alt="#"
            data-aos="fade-down"
          />
        </div>
        <div class="3pair flex items-center justify-center gap-2 overflow-hidden">
          <img
            src="../../public/icons/vue.svg"
            class="w-[40px] h-[30px]"
            alt="#"
            data-aos="fade-up"
          />
          <img
            src="../../public/icons/vite-badge.svg"
            class="w-[40px] h-[40px]"
            alt="#"
            data-aos="fade-down"
          />
        </div>
        <div class="4pair flex gap-2 overflow-hidden">
          <img
            src="../../public/icons/sass.svg"
            class="w-[40px] h-[40px]"
            alt="#"
            data-aos="fade-up"
          />
          <img
            src="../../public/icons/tailwindcss.svg"
            class="w-[40px] h-[40px]"
            alt="#"
            data-aos="fade-down"
          />
        </div>
      </div>
    </div>
    <div
      class="inProgress flex items-center justify-center flex-col gap-[15px] xl:gap-[40px] xl:flex-row"
    >
      <h2
        class="text-semiBlack text-[18px] border-b-2 border-lightGray xl:text-[24px] xl:border-b-0 xl:border-r-2 xl:pr-[8px]" data-aos="fade-right"
      >
        In Progress🤖
      </h2>
      <div
        class="technologies2 flex items-center justify-center flex-wrap gap-[30px]"
      >
        <div class="1pair flex items-center justify-center gap-5">
          <img
            src="../../public/icons/nuxt.svg"
            class="w-[40px] h-[40px]"
            alt="#"
            data-aos="fade-right"
          />
          <img
            src="../../public/icons/typescript.svg"
            class="w-[40px] h-[40px]"
            alt="#"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
