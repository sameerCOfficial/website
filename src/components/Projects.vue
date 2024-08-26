<script setup>
let projects = [
  {
    title: "JSDTimer",
    description: "A React Native-based timer application.",
    image: "jsdtimer.png",
    link: "https://github.com/JSDTimer/JSDTimer-app",
    route: "jsdtimer"
  },
  {
    title: "SERT Social",
    description: "A social media platform for networking.",
    image: "sertsocial.png",
    link: "https://github.com/SertHack/sertfrontend",
    route: "sertsocial"
  },
  {
    title: "SertGPT",
    description: "An AI-powered chatbot using GPT-3.",
    image: "sertgpt.png",
    link: "https://github.com/sameerCOfficial/hoya-hacks24",
    route: "sertgpt"
  }
];
</script>

<template>
  <div>
    <h1 id="project-header" class="has-text-centered is-size-1">Projects</h1>
    <transition name="fade">
      <div class="projects">
        <div v-for="(project, index) in projects" :key="index" class="project-item">
          <h2 class="title is-size-3">{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">
            <img :src="`./${project.image}`" alt="Project Image" class="project-image">
          </a>
          <RouterLink :to="`/${project.route}`" class="learn-more-button">Learn More</RouterLink>
        </div>
      </div>
    </transition>
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
  display: block;
}

.project-item {
  margin: 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  transition: opacity 0.5s, transform 0.5s;
}
.project-item:hover {
  opacity: 0.9;
  transform: scale(1.05);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.project-image {
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  position: relative;
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

.learn-more-button {
  display: inline-block;
  margin-top: 1rem;
  text-decoration: none;
  color: #007bff;
}
</style>
