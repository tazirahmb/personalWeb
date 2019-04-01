<template>
  <div id="app">
    <router-view/>
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
}

#app {
  font-family: 'Quattrocento Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--fontColor);
  background-color: #FFFFF0;
  margin: 0;
}

h1 {
  font-family: 'ZCOOL XiaoWei', serif;
  color: rgb(31, 120, 204);
}

h4 {
  font-size: 14px;
  line-height: 12px;
  font-weight: lighter;
}

blockquote {
  padding-left: 32px;
  border-left: 2px solid rgb(31, 120, 204);
  font-style: italic;
  font-weight: bold;
}
blockquote div {
  margin: 16px 0;
}
img {
  margin: 24px auto;
  display: block;
}
</style>
