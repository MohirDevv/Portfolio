<template>
  <div
    class="container px-[20px] py-[15px] md:px-[50px] md:py-[15px] flex items-center justify-between"
  >
    <h1
      class="text-[26px] font-bold text-semiBlack cursor-pointer flex items-center justify-center font-mono"
    >
      Mohir.
      <p class="text-lightGreen font-mono text-[25px] font-bold">dev</p>
    </h1>
    <div class="menu gap-5 text-semiBlack hidden md:flex">
      <p
        class="text-[20px] font-medium cursor-pointer transition-all hover:text-lightGreen"
      >
        Home
      </p>
      <p
        class="text-[20px] font-medium cursor-pointer transition-all hover:text-lightGreen"
      >
        About
      </p>
      <p
        class="text-[20px] font-medium cursor-pointer transition-all hover:text-lightGreen"
      >
        Projects
      </p>
      <p
        class="text-[20px] font-medium cursor-pointer transition-all hover:text-lightGreen"
      >
        Contacts
      </p>
    </div>
    <div class="mobileMenu flex items-center md:hidden">
      <i
        class="fas fa-bars text-[20px] text-semiBlack cursor-pointer transition-all hover:text-lightGreen"
      ></i>
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
.container {
  box-shadow: 0 20px 15px rgba(0, 0, 0, 0.09);
}
</style>
