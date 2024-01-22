<template>
  <div class="container my-[50px] p-[10px] flex items-center justify-center flex-col gap-[30px]">
    <div class="entPhoto">
      <img
        src="../../public/images/main-photo.jpg"
        alt="#"
        class="mainPhoto w-[300px] h-[300px]"
      />
    </div>
    <div class="entText">
      <h1 class="text-[30px] text-semiBlack font-bold text-center">Front-End Vue Developer🫡</h1>
      <div class="info text-[18px] text-semiBlack font-medium text-center pt-[20px]">
        <p>Hi, I'm Mohir Bakhromov. A passionate Front-end Vue Developer based in Tashkent, Uzbekistan. 📍</p>
      </div>
    </div>
    <div class="links flex items-center justify-center gap-10">
      <a href="https://github.com/MohirDevv" target="_blank">
        <i class="fab fa-github text-[30px] transition-all text-semiBlack hover:text-lightGreen"></i>
      </a>
      <a href="https://www.linkedin.com/in/mohir-bahromov-4a11bb28a/" target="_blank">
      <i class="fab fa-linkedin text-[30px] transition-all text-semiBlack hover:text-lightGreen"></i>

      </a>
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
.mainPhoto {
  border-top-left-radius: 1rem 4rem;
  border-radius: 1rem 2rem 3rem 4rem/ 1rem 2rem 3rem 4rem;
  border: 3px solid #2d2e32;
  animation: morph 8s ease-in-out infinite;
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
}
</style>
