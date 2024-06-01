<template>
  <div class="container my-[50px] px-[20px] xl:px-[200px]" id="contacts">
    <h1 class="text-lightGreen font-semibold text-[24px]">Contact</h1>
    <h2 class="text-[22px] text-semiBlack md:text-[32px]">
      Don't be shy! Hit me up! 👇
    </h2>
    <div
      class="contactList flex items-center justify-evenly gap-3 xl:gap-8 pt-[20px]"
    >
      <div class="telegram flex items-center justify-center gap-2">
        <i class="fab fa-telegram text-[25px] text-semiBlack"></i>
        <div class="pr text-semiBlack">
          <a
            href="https://t.me/mbkhrmv"
            target="_blank"
            class="hover:text-lightGreen"
            >Telegram</a
          >
        </div>
      </div>
      <div class="telegram flex items-center justify-center gap-2">
        <i class="fab fa-discord text-[25px] text-semiBlack"></i>
        <div class="pr text-semiBlack hover:text-lightGreen">Discord</div>
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
