<template>
  <div class="download-page">
    <img 
      :src="startup" 
      alt="">
  </div>
</template>

<script>
  import config from "~/config";
  export default {
    head: {
      title: "下载APP"
    },
    data() {
      return {
        startup: `${config.IMG_URL}startup.png`,
      }
    }
  };

</script>

<style lang="scss">
  @import "../assets/styles/mixin";

  .download-page {
    padding: 0;
  }

</style>
