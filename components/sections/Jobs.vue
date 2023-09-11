<template>
    <section class="max-w-[700px]">
        <h2 class="numberedHeading">Where I've Experienced</h2>
        <div class="flex min-h-[450px] sm:min-h-[300px]">
            <div class="flex flex-col relative w-max p-0 m-0 list-none">
                <button @click="actvieTabId = 0">ELEKTROMARKETIM </button>
               
                <span
                    class="highLight"
                    :style="{
                        transform:
                            'translateY(calc(' + actvieTabId * 42 + 'px))',
                    }"
                ></span>
            </div>
            <div class="inner">
                <transition name="fade">
                    <div id="0" v-if="actvieTabId === 0" class="absolute">
                        <h3>Frontend Developer</h3>
                        <p>08-2022 - 06-2023</p>
                        <div>
                            <ul>
                                <li>
                                    Search Engine Optimization (SEO)
                                </li>
                                <li>Vue.js</li>
                                <li>Nuxt.js </li>
                                <li>
                                     JavaScript
                                </li>
                                <li>
                                    BEM
                                </li>
                            </ul>
                        </div>
                    </div>
                </transition>
            
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            actvieTabId: 0,
            tabContent: [
                {
                    title: "Student @National Changhua Education University",
                    period: "May 2012 - June 2015",
                    headlines: [
                        "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim",
                        "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim",
                        "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim",
                    ],
                },
                {
                    title: "Student @National Center University",
                    period: "May 2015 - June 2019",
                    headlines: [
                        "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim",
                        "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim",
                        "Amet consectetur adipisicing elit. Iureeligendi nesciunt enim",
                    ],
                },
            ],
            temp: "red",
        };
    },
    transition: {
        name: "fade",
    },
};
</script>

<style lang="scss" scoped>
li {
    @apply relative mb-[10px] pl-5 font-mono text-bcSm;
    &:before {
        content: "▹";
        @apply absolute left-0 text-bcColor text-bcSm leading-3 overflow-hidden;
    }
}

.fade-enter-active {
    @apply transition-all duration-1000;
}
.fade-leave-active {
    @apply transition-all duration-500;
}
.fade-enter,
.fade-leave-active {
    @apply opacity-0;
}

button {
    @apply font-mono items-center w-full h-bcTabHeight px-2 sm:px-5 pt-0 pb-[2px] bg-transparent
    border-l-2 border-solid border-bcLightestNavy focus:outline-none 
    text-bcXl text-left whitespace-nowrap hover:bg-bcLightNavy focus:bg-bcLightNavy
    hover:text-bcColor focus:text-bcColor transition duration-500 ease-in-out;
}
.highLight {
    @apply absolute top-0 left-0 w-[2px] h-bcTabHeight rounded bg-bcColor transition-all delay-100;
}
.content {
    @apply relative w-full h-auto py-[10px] px-1;
    h3 {
        @apply mb-[2px] text-bcXl font-medium	leading-tight md:text-bcXxl;
    }
    p {
        @apply mb-6 text-bcLightSlate font-mono text-xs;
    }
}
.inner {
    @apply w-full relative h-auto py-[10px] px-1 ml-2 sm:ml-5;
    h3 {
        @apply mb-[2px] text-bcXl font-medium leading-tight md:text-bcXxl;
    }
    p {
        @apply mb-6 text-bcLightSlate font-mono text-xs;
    }
}
</style>
