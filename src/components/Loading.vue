<template>
  <div v-if="isLoading">
    <img src="@/assets/logo.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
      position: fixed;
      z-index: 2;
      background-color: rgb(209, 233, 255);
      width: 100%;
      height: 100%;
  }
  img {
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
