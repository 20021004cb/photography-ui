import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue/es';
import 'ant-design-vue/dist/reset.css';
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import router,{setupRouter} from "@/router";

const app = createApp(App);
app.use(Antd);
app.use(VueVideoPlayer);
// 挂载路由
setupRouter(app)
// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'))