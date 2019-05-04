<template>
    <div>
        <VueShowdown :markdown="post"/>
        <VueShowdown markdown="# head1" />
        <VueShowdown markdown="## head2" />
        <VueShowdown markdown="### head3" />
        <VueShowdown markdown="#### head4" />
        <VueShowdown markdown="##### head5" />
        <VueShowdown markdown="###### head6" />
    </div>
</template>

<script>
// import post from './markfile/2017-10-29-100th-post-theme-remake.md'

export default {
	name: "Markdown",
	data() {
		return {
			post: "test",
		};
	},
	created() {
		/* eslint-disable */
        this.$http.get('https://gist.githubusercontent.com/rt2zz/e0a1d6ab2682d2c47746950b84c0b6ee/raw/83b8b4814c3417111b9b9bef86a552608506603e/markdown-sample.md')
            .then(res => {
                console.log(res.body);
            })
    },
}
</script>