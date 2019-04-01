<template>
  <footer>
    <div class="container">
      <q><em>Hidup mungkin rumit, namun bahagia sederhana</em></q>
      <span>&copy; Z R O K U, 2019</span>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'footer',
}
</script>

<style scoped>
  footer {
    margin-top: 48px;
    height: 30px;
    border-top: 1px solid rgba(0, 0, 20, .2);  
  }
  q, span {
    margin: 16px auto;
  }
  q {
    float: left;
  }
  span {
    float: right;
  }
  @media only screen and (orientation: portrait) {
    q, span {
      clear: both;
      text-align: center;
    }
  }
</style>