import { createRouter, createWebHistory } from 'vue-router';
import Features from './components/Features.vue';
import Projects from './components/Projects.vue';
import BlogPage from '@/components/BlogPage.vue';
import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
const routes = [
  {path: '/features', component: Features },
  { path: '/projects', component: Projects },  
  { path: '/', component: HomePage },
  { path: '/blog', component: BlogPage },
  { path: '/sobre', component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;