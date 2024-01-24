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
    <div class="cards">
      <div class="real">
        
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
</style>
