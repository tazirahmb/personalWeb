<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Quattrocento+Sans');
@import url('https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei');

:root {
  --primaryLight: rgb(31, 120, 204);
  --primaryDark: rgb(22, 84, 143);
  --fontColor: #2c3e50;
  --lightGray: #CCC;
}

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Quattrocento Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8f8f8;
  color: var(--fontColor);
  font-size: 16px;
}

body h1 {
  font-size: 40px;
  font-family: 'ZCOOL XiaoWei', serif;
  color: var(--primaryLight);
}

body h2 {
  font-size: 32px;
  color: var(--primaryLight);
  font-weight: bold;
}

body h2 {
  font-size: 24px;
  font-weight: bold;
}

body h4 {
  font-size: 14px;
  font-weight: lighter;
  line-height: 0px;
}

body h5 {
  font-size: 12px;
  font-weight: lighter;
  line-height: 0px;
}

body h6 {
  font-size: 10px;
  font-weight: lighter;
  line-height: 0px;
}

blockquote {
  padding-left: 32px;
  border-left: 2px solid var(--primaryLight);
  font-style: italic;
  font-weight: bold;
}
blockquote div {
  margin: 16px 0;
}
img {
  max-width: 100%;
  height: auto;
  margin: 24px auto;
  display: block;
}

.fade-enter-active, .fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
