<template>
  <div id="star-container">
    <div id="progressline"></div>
    <div id="star">
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
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import ProgressBar from "progressbar.js";

onMounted(() => {
  gsap.to("#star", {
    rotation: 360,
    duration: 2,
    repeat: -1,
    ease: "linear",
  });

  var line = new ProgressBar.Line("#progressline", {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 2000,
    color: '#E5D4ED',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '100%' },
  });
  line.animate(1);
});
</script>

<style scoped>
#star-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #000 0%, #050517 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

#progressline {
  margin-top: 20px;
  background-color: #141619;
  width: 200px; 
  height: 4px; 
}

#star {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  display: inline-block;
  width: 50px;
  height: 50px;
}
</style>
