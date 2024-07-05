import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue/es';
import 'ant-design-vue/dist/reset.css';
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

const app = createApp(App);
app.use(Antd);
app.use(VueVideoPlayer);
app.mount('#app');