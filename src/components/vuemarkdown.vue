<template>
    <div>
        <vue-markdown>{{ post }}</vue-markdown>
    </div>
</template>

<script>
// import post from './markfile/2017-10-29-100th-post-theme-remake.md'
import VueMarkdown from 'vue-markdown'

export default {
    name: 'Markdown',
    components: {
        VueMarkdown
    },
    // data() {
    //     return {
    //         // postingan: post
    //     }
    // },
    created() {
        this.getMarkDown();
    },
}
</script>