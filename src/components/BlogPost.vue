<template>
    <article>
        <hr/>
        <router-link :to="{name: 'post', params: {postId: post.id}}"><h1>{{ post.title.rendered }}</h1></router-link>
        <h4>{{ post.date.substring(0,10) }}</h4>
        <p v-if="post.content.rendered.length > 300">{{ post.content.rendered.substring(0, 300) + ". . ." }}</p>
        <p v-else>{{ post.content.rendered }}</p>
        <router-link :to="{name: 'post', params: {postId: post.slug}}" v-if="post.content.rendered.length > 300" href="#">read more</router-link>
    </article>
</template>

<script>
export default {
  name: 'home',
  props: {
    Header,
    Footer,
  },
  data() {
    return {
      posts: null,
      page: 1,
    }
  },
  methods: {
    changePage(pageNo) {
      this.page = pageNo
    }
  },
  mounted() {
    axios.get('http://localhost:8080/wordpress/wp-json/wp/v2/posts?per_page=5&page=' + this.page)
      .then(res => (this.posts = res.data))
  }
}
</script>

<style scoped>
  article {
    margin: 24px auto 80px;
  }
  article hr {
    width: 64px;
    border: 1px solid #ccc;
    margin: 0;
  }
  article h1 {
    color: rgb(31, 120, 204);
  }
  router-link {
    text-decoration: none;
  }
  h1:hover {
    color: rgb(22, 84, 143);
  }
  h4 {
    font-size: 16px;
    font-weight: lighter;
  }
  .blockin {
    border: 1px solid black;
    padding: 20px;
    margin: 24px auto;
  }
  .post {
    border-bottom: 1px solid black;
    margin: 24px auto;
    padding-bottom: 16px;
  }
  .older-link {
    float: left;
  }
  .newer-link {
    float: right;
  }
  .about {
    padding: 16px;
    background-color: #eee;
    border: 2px solid red;
    margin: 24px auto;
  }
  .subscribe {
    padding: 16px;
    background-color: aquamarine;
  }
  .subscribe input {
    display: inline;
  }
  .subscribe input[type="mail"] {
    width: 70%;
    margin-right: 16px;
  }
  .subscribe input[type="submit"] {
    width: 25%;
  }
</style>