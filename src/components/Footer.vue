<template>
  <footer class="footer">
    <div class="container">
      <p>Sameer Chawla &copy; {{ currentYear }}</p>
      <a href="https://github.com/sameerCOfficial" target="_blank">
        <img class="github" src="/gh.png" alt="Github" width="30" />
      </a>
      <a href="https://www.linkedin.com/in/sameer-chawla01/" target="_blank">
        <img class="linkedin" src="/ln.png" alt="LinkedIn" width="30" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: transparent !important;
  padding: 2vh;
  text-align: center;
}

.github {
  margin-right: 0.5rem;
}
</style>
