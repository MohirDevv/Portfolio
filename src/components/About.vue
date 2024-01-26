<template>
  <div class="container py-[50px] mb-[15px] xl:py-[100px] px-[20px]">
    <div
      class="main-card flex items-center justify-center flex-col xl:flex-row gap-[50px] xl:gap-[145px]"
    >
      <div class="relative">
        <img
          src="../../public/images/meaningless-photo.jpg"
          class="rounded-lg"
          alt="#"
        />
        <img
          src="../../public/images/curved-text.png"
          class="curvedPng absolute rounded-full hidden xl:block"
          alt="#"
        />
        <p
          class="text-[100px] absolute bottom-[20px] right-[-24px] hidden xl:block"
        >
          🧑‍💻
        </p>
      </div>
      <div class="about-info max-w-[320px] xl:max-w-[360px]">
        <h1
          class="text-[24px] text-lightGreen font-semibold pb-[20px] text-center xl:text-left"
        >
          About Me
        </h1>
        <h2
          class="text-[30px] text-semiBlack font-bold pb-[20px] text-center xl:text-left"
        >
          Front-End Developer based in Tashkent, Uzbekistan📍
        </h2>
        <p class="text-[18px] text-pGray pb-[20px] text-center xl:text-left">
          Hi, my name is Mohir. My devotion is creating clear and smooth UI/UX
          for my users. Also i like developing games on js.
        </p>
        <p class="text-[18px] text-pGray text-center xl:text-left">
          My goal is to create innovative applications and make sure they work
          as they should.<br />
          (and become a Senior!)
        </p>
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

<style scoped>
.curvedPng {
  bottom: -50px;
  right: -100px;
  animation: rotate 9s linear infinite;
}

@keyframes rotate {
  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
</style>
