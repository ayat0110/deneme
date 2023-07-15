<template>
    <section class="max-w-[1000px] transition-all">
        <h2 class="numberedHeading">Things I've Built</h2>
        <ul>
            <Project
                v-for="post in projects"
                :key="post.id"
                :order="post.order"
                :title="post.title"
                :githubUrl="post.githubUrl"
                :demoLink="post.demoLink"
                :previewTexts="post.previewTexts"
                :thumbnailUrl="post.thumbnailUrl"
                :tags="post.tags"
            />
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
    "id": "project-1",
    "order": 0,
    "title": "NFT and Digital Art Trading Marketplace",
    "githubUrl": "https://github.com/ayat0110/NFT-and-Digital-Art-Trading-Marketplace",
    "demoLink": "https://spotify-clone-frontendsimply.netlify.app/",
    "previewTexts": [{
      "point1": "Designed and developed an efficient, user-friendly trading platform utilizing modern web technologies, with a focus on responsive design and real-time functionality. The platform integrates dynamic, reusable UI components and a Stripe API checkout option."
    }],
    "thumbnailUrl":require("/static/img/first-project.png"),
    "tags": ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Stripe API"]
  },
  {
    "id": "project-2",
    "order": 1,
    "title": "Interactive Analytics Dashboard System",
    "githubUrl": "https://github.com/ayat0110/Interactive-Analytics-Dashboard-System",
    "demoLink": "https://project-2.example.com",
    "previewTexts": [{
      "point1": "Built a comprehensive, aesthetically pleasing administrative dashboard using React and Tailwind CSS. The project exemplifies crafting complex UIs, adhering to best practices for accessibility, user experience, and performance in real-world applications."
    }],
    "thumbnailUrl": require("/static/img/second-project.png"),
    "tags": ["React", "Tailwind CSS", "react-apexcharts","postcss","Vite","webpack"]
  },
    {
      "id": "project-3",
      "order": 1,
      "title": "Real-Time Messaging Application",
      "githubUrl": "https://github.com/ayat0110/Real-Time-Messaging-Application",
      "demoLink": "https://project-2.example.com",
      "previewTexts": [{
        "point1": "Engineered a dynamic, real-time messaging application, demonstrating complex application architecture.The project involved creating a user-friendly chat interface, managing user authentication, and developing message sending/receiving functionality."
      }],
      "thumbnailUrl": require("/static/img/third-project.png"),
      "tags": [" Vite", "Vue 3 Composition API", "Tailwind CSS", "Google Auth, Node.js","Firebase"]
    }
            ]   
        };
    }
};
</script>

<style lang="scss" scoped>
a {
    @apply hover:text-bcColor;
}
</style>