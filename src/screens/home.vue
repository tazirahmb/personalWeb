<template>
  <div>
    <loading v-bind:isLoading="isLoading"/>
    <Header/>
    <div class="container">
      <main class="row justify-content-center">
        <div class="col-lg-9">
          <article v-for="post in posts" :key="post.id">
            <h4 class="animated fadeInUp">{{ post.date.substring(0,10) }}</h4>
            <router-link :to="{name: 'post', params: {postData: post, postSlug: post.slug}}">
              <h1 class="animated fadeInUp" v-html="post.title.rendered"></h1>
            </router-link>
            <hr/>
            <p class="post animated fadeInUp" v-html="post.excerpt.rendered"></p>
            <router-link class="animated fadeIn" :to="{name: 'post', params: {postData: post, postSlug: post.slug}}" href="#">read more</router-link>
          </article>
          <div class="page">
            <router-link :to="{ name: 'home', params: {page: pageNo + 1}}" v-if="pageNo !== parseInt(pageTotal)">&larr; older posts</router-link>
            <router-link :to="{ name: 'home', params: {page: pageNo - 1}}" v-if="pageNo !== 1">newer posts &rarr;</router-link>
          </div>
        </div>
      </main>
      <div class="row justify-content-center">
        <address class="col-lg-9">
          <subscribe/>
        </address>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Subscribe from '../components/subscribe.vue'
import Loading from '../components/Loading.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    Subscribe,
    Loading
  },
  data() {
    return {
      posts: null,
      pageNo: parseInt(this.$route.params.page),
      pageTotal: 0,
      isLoading: true,
    }
  },
  mounted() {
    axios.head(`${process.env.VUE_APP_SECRET_URL}/wp-json/wp/v2/posts?per_page=5`)
      .then(res => (this.pageTotal = res.headers['x-wp-totalpages']))
    this.getPosts(this.pageNo)
  }, methods: {
    getPosts(pageNumber) {
      this.isLoading = true
      axios.get(`${process.env.VUE_APP_SECRET_URL}/wp-json/wp/v2/posts?per_page=5&page=` + pageNumber)
        .then(res => {this.posts = res.data; this.isLoading = false})
    },
    scrollToTop() {
      window.scrollTo(0,0)
    }
  }, beforeRouteUpdate(to, from, next) {
    this.pageNo = to.params.page
    this.getPosts(this.pageNo)
    this.scrollToTop()
    next()
  }
}
</script>

<style scoped>
  article {
    margin: 24px auto 80px;
  }
  article hr {
    width: 64px;
    border: 1px solid var(--lightGray);
    margin: 0 0 16px;
  }

  .page {
    padding: 60px 0;
    text-align: center;
    margin: -60px auto 20px;
    border-bottom: 1px solid var(--lightGray);
  }
  .page a {
    border: 1px solid var(--lightGray);
    padding: 8px;
    margin: 0 16px;
  }
  .page a:hover {
    border: 1px solid var(--primaryLight);
  }
  
  a {
    color: #555;
    font-weight: bold;
  }
  a:hover {
    text-decoration: none;
  }
  
  a h1 {
    animation-delay: 0.2s;
    animation-duration: 0.75s;
  }
  a h1:hover {
    color: var(--primaryDark);
  }
  
  .post {
    animation-delay: 0.5s;
    animation-duration: 0.75s;
  }
</style>