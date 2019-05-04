<template>
  <transition name="fade" mode="out-in">
    <div v-if="isLoading" id="loading">
      <div class="placebo">
        <!-- <img src="@/assets/logo.png" alt=""> -->
        <div class="bar">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
	name: "Loading",
	props: {
		isLoading: {
			type: Boolean,
			default: true,
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #loading {
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
  img {
    height: 200px;
    margin: auto;
    margin-top: -100px;
    vertical-align: middle;
  }
  .bar {
    z-index: 1;
    margin: auto;
    width: 200px;
    height: 15px;
    border-radius: 25px;
  }
  .bar div:first-child {
    position: absolute;
    width: 50px;
    height: 15px;
    border-radius: 25px;
    background-color: rgba(0, 0, 50, .3);
    animation: load1 0.6s ease-in-out infinite alternate-reverse;
  }
  .bar div:nth-child(2) {
    position: absolute;
    width: 100px;
    height: 15px;
    border-radius: 25px;
    background-color: rgba(0, 50, 100, .3);
    animation: load2 1s ease-in-out infinite alternate-reverse;
  }
  .bar div:last-child {
    position: absolute;
    width: 25px;
    height: 15px;
    border-radius: 25px;
    background-color: rgba(0, 50, 50, .3);
    animation: load3 0.435s ease-in-out infinite alternate-reverse;
  }

  @keyframes load1 {
    from {transform: translate(0,0)}
    to {transform: translate(150px,0)}
  }

  @keyframes load2 {
    from {transform: translate(0,0)}
    to {transform: translate(100px,0)}
  }

  @keyframes load3 {
    from {transform: translate(0,0)}
    to {transform: translate(175px,0)}
  }
</style>
