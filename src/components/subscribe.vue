<template>
    <section>
        <h1>Want to discuss something?</h1>
        <div class="socmed">
          <p>
            <i class="fas fa-envelope"></i><a href="mailto:zroku@outlook.com">zroku@outlook.com</a>
          </p>
          <p>
            <i class="fab fa-twitter"></i><a href="https://www.twitter.com/zroku_">@Zroku_</a>
          </p>
        </div>
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
  }
  .socmed {
    width: 100%;
    text-align: center;
  }
  h1 {
    color: var(--fontColor);
    margin-bottom: 1.5em;
  }
  p {
    display: inline-block;
    margin-right: 16px;
  }
  i {
    margin-right: 8px;
  }
  a {
    color: var(--fontColor);
  }
</style>