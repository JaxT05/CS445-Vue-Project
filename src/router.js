import { createWebHistory, createRouter } from 'vue-router';

import HomeView from './pages/HomePage.vue';
import ProfileView from './pages/AboutPage.vue';
import GalleryView from './pages/GalleryPage.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: ProfileView },
    { path: '/hello', component: HelloWorld },
    {path: '/gallery', component: GalleryView}
]

const router = createRouter ({
    history: createWebHistory(),
    routes
})

export default router;