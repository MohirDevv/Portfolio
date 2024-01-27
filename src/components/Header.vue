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
        @click="scrollToElement('home')"
      >
        Home
      </p>
      <p
        class="text-[20px] font-medium cursor-pointer transition-all hover:text-lightGreen"
        @click="scrollToElement('about')"
      >
        About
      </p>
      <p
        class="text-[20px] font-medium cursor-pointer transition-all hover:text-lightGreen"
        @click="scrollToElement('projects')"
      >
        Projects
      </p>
      <p
        class="text-[20px] font-medium cursor-pointer transition-all hover:text-lightGreen"
        @click="scrollToElement('contacts')"
      >
        Contacts
      </p>
    </div>
    <div class="mobileMenu flex items-center md:hidden">
      <i
        class="fas fa-bars text-[20px] text-semiBlack cursor-pointer transition-all hover:text-lightGreen"
        @click="toggleMobileMenu"
      ></i>
    </div>
    <transition name="slide-down">
      <div
        :class="{ 'mobile-menu': true, 'mobile-menu-active': isMobileMenuOpen }"
      >
        <p
          class="text-[20px] font-medium cursor-pointer transition-all hover:text-lightGreen"
          @click="scrollToElement('home')"
        >
          Home
        </p>
        <p
          class="text-[20px] font-medium cursor-pointer transition-all hover:text-lightGreen"
          @click="scrollToElement('about')"
        >
          About
        </p>
        <p
          class="text-[20px] font-medium cursor-pointer transition-all hover:text-lightGreen"
          @click="scrollToElement('projects')"
        >
          Projects
        </p>
        <p
          class="text-[20px] font-medium cursor-pointer transition-all hover:text-lightGreen"
          @click="scrollToElement('contacts')"
        >
          Contacts
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    scrollToElement(elementId) {
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        this.isMobileMenuOpen = false;
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<style scoped>
.container {
  box-shadow: 0 20px 15px rgba(0, 0, 0, 0.09);
  position: fixed;
  top: 0;
  z-index: 100;
  background: #fff;
}
.mobile-menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  right: 0;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 100%;
  z-index: 99;
  transition: transform 0.3s ease-in-out;
  transform: translateY(-100%);
}

.mobile-menu-active {
  transform: translateY(68px);
}
</style>
