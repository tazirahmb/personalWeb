<template>
  <footer>
    <div class="container">
      <q><em>Hidup mungkin rumit, namun bahagia sederhana</em></q>
      <p>&copy; Z R O K U, 2019</p>
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
    box-shadow: 0 -2px 6px rgba(0, 0, 0, .1);
  }
  q, p {
    margin: 1em auto;
    display: inline-block;
  }
  p {
    float: right;
  }
  @media only screen and (orientation: portrait) {
    q, p {
      text-align: center;
    }
    p {
      margin-top: 1em;
      float: none;
    }
  }
</style>