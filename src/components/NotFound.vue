<template>
  <transition name="fade" mode="out-in">
    <div v-if="isNotFound" id="notFound">
      <div class="placebo">
        <h1>post not found</h1>
        <router-link to="/">Kembali ke halaman awal</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NotFound',
  props: {
    isNotFound: {
      type: Boolean,
      default: true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #notFound {
      position: fixed;
      z-index: 2;
      background-color: #f8f8f8;
      width: 100%;
      height: 100%;
  }
  .placebo {
    position: relative;
    top: 50%;
  }
</style>
