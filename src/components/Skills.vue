<script setup>
let skills = [
  {
    title: "Frontend",
    description: "Proficiency in Desktop and Mobile app development. Experience with Vue(this site!), React & React Native",
    image: "frontend.png",
  },
  {
    title: "Backend",
    description: "Proficient in developing backends utilizing SQL databases such as PostgreSQL and MySQL, as well as NoSQL databases like MongoDB. Experienced in using Express.js for backend development.",
    image: "backend.png",
  },
];
</script>

<template>
  <div>
    <h1 id="skills-header" class="has-text-centered is-size-1">Skills</h1>
    <div class="skills">
      <div v-for="(skill, index) in skills" :key="index" class="skill-item">
        <h2 class="title is-size-3">{{ skill.title }}</h2>
          <img
            :src="`./${skill.image}`"
            alt="Project Image"
            class="skill-image"
          />
        <p>{{ skill.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#skills-header a {
  font-weight: 700;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.skill-item {
  margin: 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

.skill-image {
  height: auto;
  width: 20vh;
  margin-top: 1rem;
}

@media (min-width: 600px) {
  .skill-item {
    width: calc(50% - 2rem);
  }
}

@media (min-width: 900px) {
  .skill-item {
    width: calc(33.3333% - 2rem);
  }
}
</style>
