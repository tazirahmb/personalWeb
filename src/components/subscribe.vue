<template>
    <section>
        <!-- <svg width="750" height="300">
          <defs>
            <filter id="f1" x="0" y="0">
              <feGaussianBlur in="sourceGraphic" stdDeviation="3"/>
            </filter>
          </defs>
          <circle cx="80" cy="200" r="40" fill="rgba(31, 120, 204, .3)" filter="url(#f1)" />
          <circle cx="150" cy="125" r="30" fill="rgba(31, 120, 204, .2)" filter="url(#f1)" />
          <circle cx="225" cy="25" r="20" fill="rgba(31, 120, 204, .5)" filter="url(#f1)" />
          <circle cx="0" cy="0" r="200" fill="rgba(31, 120, 204, .1)" filter="url(#f1)" />
        </svg> -->
        <h1>Want to discuss something?</h1>
        <h4>email me at <a href="mailto:zroku@outlook.com">zroku@outlook.com</a></h4>
    </section>
</template>

<script>

export default {
  name: 'Subscribe',
}
</script>

<style scoped>
  section {
    padding: 56px;
    width: 100%;
    background-color: rgba(31, 120, 204, .1);
    margin: 24px auto;
    color: #2c3e50;
  }
  h1, h4 {
    text-align: center;
  }
  h1 {
    color: #2c3e50;
    margin-bottom: 1.5em;
  }
  /* svg {
    position: absolute;
    top: 24px;
    left: 16px;
    z-index: 0;
  } */
</style>