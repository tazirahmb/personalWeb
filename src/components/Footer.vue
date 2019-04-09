<template>
  <footer>
    <div class="container">
      <q><em>Hidup mungkin rumit, namun bahagia sederhana</em></q>
      <span><p>&copy; Z R O K U, 2019</p></span>
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
    border-top: 1px solid rgba(0, 0, 20, .2);  
  }
  q, span {
    margin: 1em auto;
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
    span {
      float: none;
    }
  }
</style>