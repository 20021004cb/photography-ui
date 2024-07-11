import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import {App} from "vue";

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'View',
        component: () => import('@/view/HelloWorld.vue'),
    },
    {
        path: "/PhotoContents",
        name: "PhotoContents",
        component: () =>import("@/view/photoContents/PhotoContents.vue"),
    },
    {
        path: "/VideoContents",
        name: "VideoContents",
        component: () =>import("@/view/videoContents/Videocontents.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () =>import("@/view/about/about.vue"),
    }
]
const router = createRouter({
    // process.env.BASE_URL
    history: createWebHashHistory(''),
    routes
})

export function setupRouter(app: App) {
    app.use(router)
}
export default router