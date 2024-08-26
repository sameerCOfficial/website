<template>
  <div>
    <div class="back-button">
      <BackButton></BackButton>
    </div>
    <div class="main-content">
      <div class="content-wrapper">
        <div class="project-container">
          <div class="project-item">
            <div class="project-title">
              <h2 class="title is-size-3">JSDTimer</h2>
              <img
                src="/jsdtimer.png"
                alt="Project Image"
                class="project-image"
              />
            </div>
          </div>
          <div class="description">
            <div class="section">
              <h3>Technologies</h3>
              <p>React Native, JavaScript</p>
            </div>
            <div class="section">
              <h3>Skills</h3>
              <p>Mobile Development, Front-End Development, Hooks, State Management</p>
            </div>
            <div class="section">
              <h3>Description</h3>
              <p>
                JSDTimer is a React Native-based Rubik's Cube timer application where everything is stored client-side. The app offers a simple and efficient way to track your solve times and improve your skills over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackButton from "../components/BackButton.vue";
</script>

<style scoped>
.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.project-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5vw;
}

.project-item {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

.back-button {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.project-image {
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
  margin-top: 1rem;
}

.description {
  width: 100%;
}

.section h3 {
  font-size: 1.25rem;
  border-bottom: 2px solid #ccc;
  padding-bottom: 0.25rem;
}

.section p {
  margin: 0;
  font-size: 1rem;
}

@media (min-width: 600px) {
  .project-container {
    flex-direction: row;
  }
  .project-item {
    width: calc(50% - 2rem);
  }
  .description {
    margin-left: 2rem;
  }
}

@media (max-width: 600px) {
  .project-container {
    flex-direction: column;
    margin: 0;
    width: calc(90% - 2rem);
  }
  .description {
    margin-top: 1rem;
    text-align: center;
  }
}
</style>
