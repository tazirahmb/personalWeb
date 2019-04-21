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
        <div class="col-lg-9">
          <p class="content animated fadeIn" v-html="posts.content.rendered"></p>
          <!-- <section class="comments" v-if="comments !== null">
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
            <form action="">
              <label for="name">Name*</label>
              <input type="text" name="name" id="name" placeholder="name" required>
              <label for="name">Email*</label>
              <input type="mail" name="Email" id="email" placeholder="E-mail" required>
              <label for="name">website</label>
              <input type="url" name="web" id="web" placeholder="website">
              <label for="reply">Reply*</label>
              <textarea name="reply" id="reply" rows="10" required></textarea>
              <input type="submit" value="submit">
            </form>
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
// import Loading from '../components/Loading.vue'
// import NotFound from '../components/NotFound.vue'
import axios from 'axios'

export default {
  name: 'post',
  components: {
    Header,
    Footer,
    Subscribe,
  },
  props: {
    postData: Object,
  },
  data() {
    return {
      posts: null,
      // isLoading: true,
      // isNotFound: false,
      // comments: null,
      hostUrl: process.env.SECRET_URL,
    }
  },
  created() {
    window.scrollTo(0,0)
    if(this.postData) {
      this.posts = this.postData
      // this.getComments(this.posts.id)
      // this.isLoading = false
    }
    else {
      this.getPost(this.$attrs.postSlug)
    } 
  },
  methods: {
    getPost(postId) {
      this.isLoading = true
      axios.get(`${this.hostUrl}/wp-json/wp/v2/posts?slug=${postId}`)
        .then(res => {
          if(res.data.length == 0) {alert("Post not found"); this.$router.push('/');}
          else {this.posts = res.data[0]; /*this.getComments(res.data[0].id); this.isLoading = false*/}
        })
    },
    // getComments(postId) {
    //   axios.get(`${this.hostUrl}/wp-json/wp/v2/comments?post=${postId}`)
    //     .then(res => (this.comments = res.data.reverse()))
    // }, 
    // postComments(postId, name, email, web, reply) {
    //   axios.post(`${this.hostUrl}/wordpress/wp-json/wp/v2/comments`, {
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
  .title h4 {
    animation-delay: 0.2s;
  }
  .content {
    padding-bottom: 40px;
    border-bottom: 1px solid #CCC;
    margin-bottom: 60px;
    animation-delay: 0.2s;
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
    font-size: 24px;
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
  }
  .reply label {
    font-weight: bold;
  }
  .reply input, .reply textarea {
    margin-top: 8px;
    margin-bottom: 16px;
    padding: 8px;
    border: 1px solid #DDD;
    border-radius: 3px;
  }
  .reply input::placeholder {
    color: #CCC;
  }
  .reply input:focus, .reply textarea:focus {
    border: 1px solid var(--primaryLight);
  }
  .reply input[type=submit] {
    background-color: var(--primaryLight);
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .reply input[type=submit]:hover {
    background-color: var(--primaryDark);
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
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