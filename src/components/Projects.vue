<script setup>
let projects = [
  {
    title: "JSDTimer",
    description: "A React-based timer application.",
    image: "jsdtimer.png",
    link: "https://github.com/JSDTimer/JSDTimer-app"
  },
  {
    title: "SERT Social",
    description: "A social media platform for networking.",
    image: "sertsocial.png",
    link: "https://github.com/SertHack/sertfrontend"
  },
  {
    title: "SertGPT",
    description: "An AI-powered chatbot using GPT-3.",
    image: "sertgpt.png",
    link: "https://github.com/sameerCOfficial/hoya-hacks24"
  }
];
</script>

<template>
    <div>
    <h1 id="project-header" class="has-text-centered is-size-1">Projects</h1>
    <div class="projects">
      <div v-for="(project, index) in projects" :key="index" class="project-item">
        <h2 class="title is-size-3">{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">
          <img :src="`/${project.image}`" alt="Project Image" class="project-image">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#project-header a {
  font-weight: 700;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project-link {
    display:block;
}

.project-item {
  margin: 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

.project-image {
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  margin-top: 1rem;
}

/* Media Queries for Responsive Design */
@media (min-width: 600px) {
  .project-item {
    width: calc(50% - 2rem);
  }
}

@media (min-width: 900px) {
  .project-item {
    width: calc(33.3333% - 2rem);
  }
}
</style>