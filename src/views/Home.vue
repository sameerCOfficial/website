<template>
    <div>
      <div class="loading-screen" v-if="showLoadingScreen">
        <div class="loading-content">
          <Loading></Loading>
        </div>
      </div>
  
      <div class="main-content" v-if="!showLoadingScreen">
        <div class="content-wrapper">
          <NavBar></NavBar>
          <div class="name" ref="nameRef">
            <Name></Name>
          </div>
          <div class="star-cursor" ref="starRef">
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
          </div>
          <div class="projects" id="projects" ref="projectsRef">
            <Projects></Projects>
          </div>
          <div class="star-two" ref="starTwoRef">
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
          </div>
          <div class="skills" id="skills" ref="skillsRef">
            <Skills></Skills>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import NavBar from '../components/NavBar.vue';
  import Loading from '../components/BGAnimation.vue';
  import Name from '../components/Name.vue';
  import Projects from '../components/Projects.vue';
  import Skills from '../components/Skills.vue';
  
  // Ensure gsap plugins are registered
  gsap.registerPlugin(ScrollTrigger);
  
  const showLoadingScreen = ref(true);
  const nameRef = ref(null);
  const starRef = ref(null);
  const projectsRef = ref(null);
  const starTwoRef = ref(null);
  const skillsRef = ref(null);
  
  onMounted(() => {
    setTimeout(async () => {
      showLoadingScreen.value = false;
  
      await nextTick();
  
      console.log('nameRef:', nameRef.value);
      console.log('starRef:', starRef.value);
      console.log('projectsRef:', projectsRef.value);
      console.log('starTwoRef:', starTwoRef.value);
      console.log('skillsRef:', skillsRef.value);
  
      if (nameRef.value && starRef.value && projectsRef.value && starTwoRef.value && skillsRef.value) {
        // Animation for starRef (star-cursor)
        gsap.timeline({
          scrollTrigger: {
            trigger: projectsRef.value,
            start: 'top 100%',
            end: 'top 10%',
            scrub: true,
          },
        })
        .fromTo(starRef.value, { y: 0, opacity: 1 }, { y: 350, opacity: 0 })
        .fromTo(".projects", { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
        .to(nameRef.value, { opacity: 0 });

        gsap.timeline({
          scrollTrigger: {
            trigger: skillsRef.value,
            start: 'top 100%',
            end: 'top 10%',
            scrub: true,
          },
        })
        .fromTo(starRef.value, { y: 0, opacity: 1 }, { y: 350, opacity: 0 })
        .fromTo(".skills", { y: 30, opacity: 0 }, { y: 0, opacity: 1 })

  
        // Continuous rotation for both stars
        gsap.to([starRef.value, starTwoRef.value], {
          rotation: "+=360",
          duration: 2,
          repeat: -1,
          ease: 'linear',
        });
      }
    }, 3000);
  });
  </script>
  
  <style scoped>

  .skills{
    margin-bottom:30vh;
  }
  .star-two {
    text-align: center;
    margin-top:40vh;
    margin-bottom:10vh;
  }
  
  .star-cursor {
    text-align: center;
    margin-top: 30vh;
  }
  
  .main-content {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .name {
    margin-top: 30vh;
    position: relative;
  }
  
  .projects {
    position: relative;
    margin-top: 40vh;
    padding: 2rem;
  }
  
  .loading-screen {
    position: fixed;
    animation: fadeOut 3s forwards;
  }
  
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
  </style>
  