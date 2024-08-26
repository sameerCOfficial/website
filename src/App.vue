<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.route-enter-from, .route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.route-leave-active {
  transition: all 0.5s ease-in;
}
</style>
