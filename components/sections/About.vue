<template>
    <section class="max-w-900 h-auto">
        <h2 class="numberedHeading">About Me</h2>
        <div class="block md:grid grid-flow-col grid-cols-5 grid-rows-1 gap-12">
            <div class="col-span-3">
                <div>
                    <p class="my-4">
                       I love interpreting data and transforming it into
                        useful information.
                    </p>
                    <p class="my-4">
                        My interest in web development began during 
                        my second year at university when I was exploring 
                        different fields to find the right fit. I was instantly
                        captivated by frontend development because it allowed me
                        to combine my passion for coding with my love for colors
                        and designs,then everything turns out to be bright and interesting ever since.
                    </p>
                    <p class="my-4">
                        
                        Now let me introduce you to the FrontendSimply community, which now connects over 24,000 members together. 
                        Allows me to share my coding projects, inspire fellow developers, and do mentorship sessions. 
                        Feel free to to join us now on <a style="text-decoration: underline;" href="https://www.instagram.com/frontendsimply/">frontendsimply</a>  
                    </p>
                    <p>
                        Here are technologies I've been working with recently:
                    </p>
                </div>
                <ul
                    class="
                        mt-5
                        overflow-hidden
                        list-none
                        grid grid-flow-col grid-cols-2 grid-rows-2
                        gap-y-0 gap-x-4 deneme
                    "
                >
                    <li
                        class="relative mb-[10px] pl-5 font-mono text-bcSm "
                        v-for="skill in skills"
                        :key="skill"
                    >
                        {{ skill }}
                    </li>
                </ul>
            </div>
            <div class="col-span-2 max-w-[300px] mt-6 mb-60 mx-auto">
                <div class="imgWrapper">
                    <img src="~/static/img/profile_image.png" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            skills: ["Js (ES6+)", "Vue 3", "Nuxt", "CSS3", "HTML5", "Pyhton", "React js", "Webpack", "Gulp", "Tailwind", "Git"], 
        };
    },
};
</script>

<style lang="scss" scoped>
p {
    @apply text-bcLg;
}
li:before {
    content: "▹";
    @apply absolute left-0 text-bcColor text-bcSm leading-3 overflow-hidden;
}

.imgWrapper {
    @apply block relative w-full rounded-xl bg-bcColor;
    &:hover,
    &:focus {
        @apply bg-transparent outline-none;

        &:after {
            @apply top-[15px] left-[15px];
        }

        img {
            filter: none;
        }
    }

    img {
        @apply relative rounded-xl transition-all z-50 inline-block;
        filter: grayscale(100%) contrast(1);
    }

    &:before,
    &:after {
        content: "";
        @apply block absolute w-full h-full rounded-xl transition-all;
    }

    &:before {
        @apply top-0 left-0 bg-bgColor z-50;
    }

    &:after {
        @apply border-2	border-solid border-bcColor top-[20px] left-[20px] z-0;
    }
}
@media screen and (max-width: 500px) {
 .deneme{
    display:flex;
    flex-direction:column;
 }
}
</style>