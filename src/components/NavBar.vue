<template>
  <nav class="navbar is-fixed-top has-text-white is-size-5">
    <div class="navbar-brand">
      <a class="navbar-item" @click.prevent="scrollToSection('home')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="50"
          height="50"
        >
          <path
            d="M16 8L23.5 12L16 16L12 23.5L8 16L0.5 12L8 8L12 0.5L16 8ZM19.25 12L14.5217 9.47826L12 4.75L9.47826 9.47826L4.75 12L9.47826 14.5217L12 19.25L14.5217 14.5217L19.25 12Z"
          ></path>
        </svg>
      </a>
      <a
        role="button"
        class="navbar-burger burger has-text-white"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleNavbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div :class="{'navbar-menu': true, 'is-active': navbarActive}">
      <div class="navbar-end is-size-4">
        <a class="navbar-item" href="/#projects" @click.prevent="scrollToSection('projects')">
          Projects
        </a>
        <a class="navbar-item" href="/#skills" @click.prevent="scrollToSection('skills')">
          Skills
        </a>
        <a class="navbar-item" href="resume.pdf" target="_blank">
          CV
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const navbarActive = ref(false);

const toggleNavbar = () => {
  navbarActive.value = !navbarActive.value;
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.navbar {
  background-color: transparent !important;
  padding: 2vh;
}
</style>
