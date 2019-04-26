<template>
    <header>
      <router-link to="/">
        <img src="@/assets/header.png" alt="">
      </router-link>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    notHomePage: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    height: 2%;
    width: 100%;
    padding-top: 8px;
    margin-bottom: 24px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, .1);
  }
  img {
    height: 25px;
    display: block;
    margin: 0 auto 8px;
  }
</style>
