<template>
    <pre style="word-wrap: break-word; white-space: pre-wrap; font-family: monospace; background-color: none;">
        {{ xmlParser }}
    </pre>
</template>

<script>
import axios from "axios";

export default {
	name: "Feed",
	data() {
		return{
			xmlParser: `<?xml version="1.0" encoding="UTF-8" ?>
                <rss version="2.0">
                <channel>
                <title>Zroku's Blog</title>
                <description>Blognya Zroku</description>
                <link>http://zroku.my.id</link>
                <lastBuildDate>${new Date()}</lastBuildDate>
                <pubDate>${new Date()}</pubDate>`
		};
	}, methods: {
		getPosts() {
			axios.get(`${process.env.VUE_APP_SECRET_URL}/wp-json/wp/v2/posts?per_page=25`)
				.then((res) => {
					res.data.forEach(post => {
						this.xmlParser += `\n<item>
                    <title>${post.title.rendered}</title>
                    <description>${post.excerpt.rendered}</description>
                    <link>http://zroku.my.id/post/${post.slug}</link>
                    <guid isPermaLink="false">http://zroku.my.id/post/${post.slug}</guid>
                    <pubDate>${post.date}</pubDate>
                    </item>\n`;
					});
					this.xmlParser += `</channel>
                    </rss>`;
				});
		},
	},
	created() {
		this.getPosts();
	}
};
</script>