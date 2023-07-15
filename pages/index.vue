<template>
    <div>
        <SectionsHero id="hero" v-animate-on-scroll />

        <SectionsAbout id="about" v-animate-on-scroll />

        <SectionsJobs id="jobs" v-animate-on-scroll />

        <SectionsProjects id="works" v-animate-on-scroll :posts="posts" />

        <SectionsContact id="contact" v-animate-on-scroll />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: true,
        };
    },
    scrollToTop: true,
    async asyncData(context) {
    let tempPosts = await context.$axios.$get('/projects.json');
    
    let tempAboutPage = await context.app.$storyapi.get(
        "cdn/stories/about/about",
        {
            version: "draft",
        }
    );
    return {
        aboutPage: {
            title: tempAboutPage.data.story.content.title,
            content: tempAboutPage.data.story.content.content,
        },

        posts: tempPosts.map((el) => {
            return {
                id: el.id,
                order: parseInt(el.order) % 2,
                title: el.title,
                githubUrl: el.githubUrl,
                demoLink: el.demoLink,
                previewTexts: el.previewTexts,
                thumbnailUrl: el.thumbnailUrl,
                tags: el.tags,
            };
        }),
    };
},

    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 3000);
    },
    methods: {
        refresh() {
            location.reload(true);
        },
    },
};
</script>

<style>
</style>
