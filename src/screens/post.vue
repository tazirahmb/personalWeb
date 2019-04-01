<template>
  <div>
    <loading v-bind:isLoading="isLoading"/>
    <Header/>
    <div class="title">
      <svg width="50%" height="200">
        <defs>
          <filter id="f1" x="0" y="0">
            <feGaussianBlur in="sourceGraphic" stdDeviation="3"/>
          </filter>
        </defs>
        <!-- <rect width="500" height="200" fill="rgba(255,0,0,.3)"/> -->
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

        <!-- <rect width="10" height="75" x="310" y="115" fill="rgba(31, 120, 204, .25)"/>
        <rect width="10" height="50" x="330" y="115" fill="rgba(31, 120, 204, .25)"/>
        <rect width="10" height="25" x="350" y="115" fill="rgba(31, 120, 204, .25)"/> -->
      </svg>
      <h1 v-html="posts.title.rendered"></h1>
      <h4>{{ posts.date.substring(0,10) }}</h4>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <p class="content" v-html="posts.content.rendered"></p>
          <!-- <section class="comments" v-if="comments.length !== 0">
            <h2>{{ comments.length }} Comments</h2>
            <content v-for="comment in comments" :key="comment.id">
              <hr/>
              <a :href="comment.author_url" v-if="comment.author_url !== '' "><h3>{{ comment.author_name }}</h3></a>
              <h3 v-else>{{ comment.author_name }}</h3>
              <p v-html="comment.content.rendered"></p>
            </content>
          </section>
          <h2 class="noComment" v-else>Still no comments...</h2>
          <section class="reply">
            <hr/>
            <h2>Write your comment</h2>
            <label for="name">Name*</label>
            <input type="text" name="name" id="name" placeholder="name">
            <label for="name">Email*</label>
            <input type="mail" name="Email" id="email" placeholder="E-mail">
            <label for="name">website</label>
            <input type="url" name="web" id="web" placeholder="website">
            <label for="reply">Reply*</label>
            <textarea name="reply" id="reply" cols="30" rows="10"></textarea>
            <input type="button" value="submit">
            <hr/>
          </section> -->
          <subscribe/>
        </div>
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
  name: 'post',
  components: {
    Header,
    Footer,
    Subscribe,
    Loading
  },
  props: {
    postData: Object,
  },
  data() {
    return {
      posts: null,
      loadFromRest: false,
      isLoading: true,
      // comments: null,
      hostUrl: 'https://bloghosting.000webhostapp.com',
      // hostUrl: 'http://localhost:8080/wordpress',
    }
  },
  created() {
    window.scrollTo(0,0)
    if(this.postData) {
      this.posts = this.postData
    }
    if(this.posts == null) {
      this.getPost(this.$attrs.postSlug)
      this.loadFromRest = true
    } else {
      this.isLoading = false
    }
    // this.getComments(this.id)
  },
  methods: {
    getPost(postId) {
      axios.get(`${this.hostUrl}/wp-json/wp/v2/posts?slug=${postId}`)
        .then(res => {this.posts = res.data[0]; this.isLoading = false})
    },
    // getComments(postId) {
    //   axios.get(`${this.hostUrl}/wp-json/wp/v2/comments?post=${postId}`)
    //     .then(res => (this.comments = res.data.reverse()))
    // }, 
    // postComments(postId, name, email, web, reply) {
    //   axios.post(`http://localhost:8080/wordpress/wp-json/wp/v2/comments`, {
    //     post: postId,
    //     author_name: name,
    //     author_email: email,
    //     author_url: web,
    //     content: reply,
    //   })
    //   .then((res) => {
    //     alert("comment posted")
    //     this.getComments(postId)
    //   })
    //   .catch((err) => {
    //   alert(err);
    // })
    // }
  }
}
</script>

<style scoped>
  .title {
    width: 100%;
    height: 350px;
    margin-top: -24px;
  }
  .title svg {
    z-index: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -125%);
  }
  .title > * {
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .content {
    padding-bottom: 40px;
    border-bottom: 1px solid #CCC;
    margin-bottom: 60px;
  }
  .comment {
    margin-top: 16px;
  }
  .comments hr {
    border: 1px solid #999;
    width: 20px;
    margin: 16px 32px 8px;
  }
  .comments h3, .comments p {
    padding: 0 32px;
  }
  .comments h3 {
    font-size: 18px;
    font-weight: bold;
  }
  .comments p {
    font-size: 16px;
    margin-bottom: 32px;
  }
  .noComment {
    color: #999;
    text-align: center;
    font-size: 24px;
  }
  .reply label, .reply input, .reply textarea {
    display: block;
    width: 100%;
    /* margin: 0 32px; */
  }
  .reply hr:first-child {
    border: 1px solid #CCC;
    margin: 48px 0;
  }
  @media only screen and (min-width: 600px) {
      .title h1 {
      font-size: 56px;
      line-height: 48px;
    }
    .title h4 {
      font-size: 18px;
    }
    p {
      font-size: 20px;
      line-height: 1.75em;    
    }
  }
</style>