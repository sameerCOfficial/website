<template>
    <div>
      <div class="loading-screen" v-if="showLoadingScreen">
        <div class="loading-content">
          <Loading></Loading>
        </div>
      </div>
  
      <div class="main-content" v-if="!showLoadingScreen">
        <div class="content-wrapper" id="home">
          <NavBar></NavBar>
          <div class="name" id="name" ref="nameRef">
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
          <Footer></Footer>
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
import Footer from '../components/Footer.vue';

gsap.registerPlugin(ScrollTrigger);

const showLoadingScreen = ref(true);
const nameRef = ref(null);
const starRef = ref(null);
const projectsRef = ref(null);
const starTwoRef = ref(null);
const skillsRef = ref(null);

// Check local storage for 'hasVisited'
const hasVisited = localStorage.getItem('hasVisited');

onMounted(() => {
  if (!hasVisited) {
    // If not visited before, show loading screen
    setTimeout(() => {
      showLoadingScreen.value = false;
      localStorage.setItem('hasVisited', 'true');

      // GSAP animations
      nextTick(() => {
        if (nameRef.value && starRef.value && projectsRef.value && starTwoRef.value && skillsRef.value) {
          // Animation for starRef (star-cursor)
          gsap.timeline({
            scrollTrigger: {
              trigger: projectsRef.value,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
            },
          })
          .fromTo(".projects", { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
          .to(nameRef.value, { opacity: 0 });

          gsap.fromTo(starRef.value, 
          { y: 0, opacity: 1, rotate: 0 }, 
          { 
            y: 350, 
            opacity: 0, 
            rotate: 360,
            duration: 2, 
            ease: 'power1.inOut', 
            scrollTrigger: {
              trigger: projectsRef.value,
              start: 'top 75%', 
              end: 'top 30%',  
              scrub: true,
            },
          });

          gsap.timeline({
            scrollTrigger: {
              trigger: skillsRef.value,
              start: 'top 80%',
              end: 'top 10%',
              scrub: true,
            },
          })
          .fromTo(starRef.value, { y: 0, opacity: 1}, { y: 350, opacity: 0 })
          .fromTo(".skills", { y: 30, opacity: 0 }, { y: 0, opacity: 1 });

          // Animation for starTwoRef (star-two)
          gsap.to([starTwoRef.value], {
            rotation: "+=360",
            duration: 2,
            repeat: -1,
            ease: 'linear',
          });
        }
      });
    }, 3000);
  } else {
    // If already visited, directly hide loading screen and run animations
    showLoadingScreen.value = false;

    nextTick(() => {
      if (nameRef.value && starRef.value && projectsRef.value && starTwoRef.value && skillsRef.value) {
        // GSAP animations
        gsap.timeline({
          scrollTrigger: {
            trigger: projectsRef.value,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        })
        .fromTo(".projects", { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
        .to(nameRef.value, { opacity: 0 });

        gsap.fromTo(starRef.value, 
        { y: 0, opacity: 1, rotate: 0 }, 
        { 
          y: 350, 
          opacity: 0, 
          rotate: 360,
          duration: 2, 
          ease: 'power1.inOut', 
          scrollTrigger: {
            trigger: projectsRef.value,
            start: 'top 75%', 
            end: 'top 30%',  
            scrub: true,
          },
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: skillsRef.value,
            start: 'top 80%',
            end: 'top 10%',
            scrub: true,
          },
        })
        .fromTo(starRef.value, { y: 0, opacity: 1}, { y: 350, opacity: 0 })
        .fromTo(".skills", { y: 30, opacity: 0 }, { y: 0, opacity: 1 });

        // Animation for starTwoRef (star-two)
        gsap.to([starTwoRef.value], {
          rotation: "+=360",
          duration: 2,
          repeat: -1,
          ease: 'linear',
        });
      }
    });
  }
});
</script>
  
  <style scoped>

  .skills{
    margin-bottom:15vh;
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
    margin-top: 20vh;
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
  