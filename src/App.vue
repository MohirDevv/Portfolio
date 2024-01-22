<template>
  <Header />
  <Entrance />
  <Skills />
</template>

<script>
import Header from "./components/Header.vue";
import Entrance from "./components/Entrance.vue";
import Skills from "./components/Skills.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Entrance,
    Skills,
  },
};
</script>

<style scoped></style>
