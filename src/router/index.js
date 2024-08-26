import { createRouter, createWebHistory } from 'vue-router';
import AppHomePage from '../views/Home.vue';
import JSDTimerPage from '../views/JSDTimerPage.vue';
import SERTSocialPage from '../views/SERTSocialPage.vue';
import SertGPTPage from '../views/SertGPTPage.vue';

const router = createRouter({
  history: createWebHistory(), 
  routes: [
    { path: '/', component: AppHomePage },
    { path: '/jsdtimer', component: JSDTimerPage },
    { path: '/sertsocial', component: SERTSocialPage },
    { path: '/sertgpt', component: SertGPTPage }
  ]
});

export default router;
