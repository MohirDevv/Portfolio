<template>
  <Header />
  <Entrance />
  <Skills />
  <About/>
</template>

<script>
import Header from "./components/Header.vue";
import Entrance from "./components/Entrance.vue";
import Skills from "./components/Skills.vue";
import About from "./components/About.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Entrance,
    Skills,
    About
},
};
</script>

<style scoped>
</style>
