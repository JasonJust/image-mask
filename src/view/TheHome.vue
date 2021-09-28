<template>
  <div class="the-home-container">
    <img src="../assets/images/hot2.png" class="image-style">
    <div class="image-mask"></div>
  </div>
</template>

<script>
export default {
  name: 'TheHome',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
  .the-home-container {
    .image-style {
      width: 600px;
      height: 400px;
    }

    .image-mask {
      width: 100px;
      height: 100px;
      background: rgba(0, 0, 0, 0.2);
    }
  }
</style>
