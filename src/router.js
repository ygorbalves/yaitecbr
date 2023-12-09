import { createRouter, createWebHistory } from 'vue-router';
import Features from './components/Features.vue';
import Projects from './components/Projects.vue';
import Blog from './components/Blog.vue';
import BlogLayout from './layouts/BlogLayout.vue';
import About from './components/About.vue';
import AboutLayout from './layouts/AboutLayout.vue';

const routes = [
  {path: '/features', component: Features },
  {path: '/projects',component: Projects},
  {path: '/blog',
    component: BlogLayout, // Use the BlogLayout as the layout for the /blog route
    children: [
      {
        path: '', // An empty path will correspond to /blog itself
        component: Blog // The component that contains your blog content
      }
    ]
  },
  {path: '/sobre',
    component: AboutLayout, // Use the BlogLayout as the layout for the /blog route
    children: [
      {
        path: '', // An empty path will correspond to /blog itself
        component: About // The component that contains your blog content
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;