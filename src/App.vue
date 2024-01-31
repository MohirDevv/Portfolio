<template>
  <Header />
  <Entrance />
  <Skills />
  <About />
  <Projects />
  <Contacts />
  <Footer />
</template>

<script>
import AOS from "aos";
import Header from "./components/Header.vue";
import Entrance from "./components/Entrance.vue";
import Skills from "./components/Skills.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contacts from "./components/Contacts.vue";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Entrance,
    Skills,
    About,
    Projects,
    Contacts,
    Footer,
  },
  mounted() {
    AOS.init();
    console.log("Hello Console");
  },
};
</script>

<style scoped></style>
