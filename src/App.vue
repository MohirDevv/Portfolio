<template>
  <Header />
  <Entrance />
  <Skills />
  <About/>
  <Projects/>
</template>

<script>
import Header from "./components/Header.vue";
import Entrance from "./components/Entrance.vue";
import Skills from "./components/Skills.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Entrance,
    Skills,
    About,
    Projects
},
};
</script>

<style scoped>
</style>
