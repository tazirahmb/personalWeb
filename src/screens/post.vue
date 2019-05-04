<template>
  <div>
    <Header/>
    <div class="title">
      <svg width="50%" height="200" class=" animated fadeIn">
        <defs>
          <filter id="f1" x="0" y="0">
            <feGaussianBlur in="sourceGraphic" stdDeviation="3"/>
          </filter>
        </defs>
        <circle cx="30" cy="100" r="10" fill="rgba(31, 120, 204, .2)" filter="url(#f1)" />
        <circle cx="70" cy="85" r="15" fill="rgba(31, 120, 204, .25)" filter="url(#f1)" />
        <circle cx="120" cy="70" r="25" fill="rgba(31, 120, 204, .25)" filter="url(#f1)" />
        <circle cx="170" cy="50" r="20" fill="rgba(31, 120, 204, .2)" filter="url(#f1)" />

        <circle cx="50" cy="140" r="20" fill="rgba(31, 120, 204, .25)" filter="url(#f1)" />
        <circle cx="100" cy="125" r="25" fill="rgba(31, 120, 204, .2)" filter="url(#f1)" />
        <circle cx="150" cy="110" r="15" fill="rgba(31, 120, 204, .2)" filter="url(#f1)" />
        <circle cx="190" cy="90" r="10" fill="rgba(31, 120, 204, .25)" filter="url(#f1)" />

        <circle cx="75" cy="50" r="15" fill="rgba(31, 120, 204, .2)" filter="url(#f1)" />
        <circle cx="80" cy="175" r="20" fill="rgba(31, 120, 204, .25)" filter="url(#f1)" />

      </svg>
      <h1 class="animated fadeIn" v-html="posts.title.rendered"></h1>
      <h4 class="animated fadeIn">{{ posts.date.substring(0,10) }}</h4>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <article class="col-lg-9">
          <p class="animated fadeIn" v-html="posts.content.rendered"></p>
          <vue-disqus shortname="Zroku" :identifier="posts.id" url="https://zroku.my.id"></vue-disqus>
          <subscribe/>
        </article>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Subscribe from "../components/subscribe.vue";

// import Loading from '../components/Loading.vue'
// import NotFound from '../components/NotFound.vue'
import axios from "axios";

export default {
	name: "post",
	components: {
		Header,
		Footer,
		Subscribe
	},
	props: {
		postData: Object
	},
	data() {
		return {
			posts: null
		};
	},
	created() {
		window.scrollTo(0,0);
		if(this.postData) {
			this.posts = this.postData;
			// this.isLoading = false
		}
		else {
			this.getPost(this.$attrs.postSlug);
		} 
	},
	methods: {
		getPost(postId) {
			this.isLoading = true;
			axios.get(`https://bloghosting.000webhostapp.com/wp-json/wp/v2/posts?slug=${postId}`)
				.then(res => {
					if(res.data.length == 0) {alert("Post not found"); this.$router.push("/");}
					else {this.posts = res.data[0];}
				});
		}
	}
};
</script>

<style scoped>
  .title {
    width: 100%;
    height: 350px;
    margin-top: -24px;
  }
  .title > * {
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .title svg {
    z-index: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -125%);
  }
  .title h4 {
    animation-delay: 0.2s;
  }
  
  article > p {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--lightGray);
    margin-bottom: 60px;
    animation-delay: 0.2s;
  }

  @media only screen and (min-width: 600px) {
    .title h1 {
      font-size: 56px;
      line-height: 48px;
    }
    p {
      font-size: 20px;
      line-height: 1.75em;
    }
  }
</style>
