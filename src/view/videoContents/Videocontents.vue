<template>
  <headIndex></headIndex>
  <div style="width: 100%;height: auto;background-color: black;padding-top: 30px;padding-bottom: 30px;">
    <div class="imgDiv" id="image">
      <!-- <video ref="videoPlayer" class="video-js" style="height: 316px; width: 619px; object-fit: cover"></video> -->
      <template v-for="(item, index) in photoArray">
        <div style="float: left;">
          <img :src="item.imgUrl" alt="" @click="getOnclick(item)"
            style="float: left; width: 619px;  margin-bottom: 20px;" v-if="!item.visible" />

          <video :id="item.id" class="video-js" v-if="item.visible" style="object-fit: cover;float:left" :style="vidoeStyle"></video>
          <span style="color: white;display: block;margin-bottom: 20px;">{{ item.msg }}</span>
        </div>
      </template>
    </div>
    <div style="clear: both"></div>
  </div>
  <!--联系我们-->
  <bottomIndex></bottomIndex>
</template>
<script lang="ts">
import { onMounted, onUnmounted, ref, defineComponent, reactive, toRefs, nextTick } from "vue";
import headIndex from "@/view/head/index.vue"
import bottomIndex from "@/view/bottom/bottomIndex.vue"
import 'viewerjs/dist/viewer.css'
import videojs from "video.js";
import "video.js/dist/video-js.css";


export default defineComponent({
  name: "HelloWorld",
  components: { headIndex, bottomIndex },
  setup() {
    const videoPlayer = ref < any > (null);
    const myPlayer = ref < any > (null);
    let hideTaskTimeout: any;
    const vidoeStyle = ref({
       width:'',
       height:''
    });

    const videoClickUrl = ref('')
    const photoShowList = reactive({
      photoArray: <any>[]
    })
        function addPhotoList(obj:any) {
          photoShowList.photoArray.push(obj)
        }
        addPhotoList({videoUrl: require("@/assets/mp4/kouhong.mp4"), imgUrl: require("@/assets/mp4/kh.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "kh1", visible: false })
        addPhotoList({videoUrl: require("@/assets/mp4/kouhong.mp4"), imgUrl: require("@/assets/mp4/kh.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "kh2", visible: false })
        addPhotoList({videoUrl: require("@/assets/mp4/kouhong.mp4"), imgUrl: require("@/assets/mp4/kh.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "kh3", visible: false })
        addPhotoList({videoUrl: require("@/assets/mp4/kouhong.mp4"), imgUrl: require("@/assets/mp4/kh.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "kh4", visible: false })
        addPhotoList({videoUrl: require("@/assets/mp4/kouhong.mp4"), imgUrl: require("@/assets/mp4/kh.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "kh5", visible: false })
        addPhotoList({videoUrl: require("@/assets/mp4/kouhong.mp4"), imgUrl: require("@/assets/mp4/kh.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "kh6", visible: false })

    const getOnclick = (item:any) => {

           vidoeStyle.value.width='619px'
           vidoeStyle.value.height='264px'

           item.visible = true;
        // 确保DOM完全加载后执行
        hideTaskTimeout = window.setTimeout(() => {
          showVideo(item)
        },1000)
    };

    const showVideo = (item:any) => {
          myPlayer.value = videojs(
            item.id,
            {
              controls: true,
              sources: [
                {
                  src: item.videoUrl,
                  type: "video/mp4",
                },
              ],
              controlBar: {
                remainingTimeDisplay: {
                  displayNegative: false,
                },
              },
              playbackRates: [0.5, 1, 1.5, 2],
              autoplay: true
            },
            () => {
              myPlayer.value.log("play.....");
            }
          );
             // 当全屏变化时的事件监听
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        console.log('退出全屏');
           vidoeStyle.value.width='619px'
           vidoeStyle.value.height='264px'
      } else {
          console.log('进入全屏');
          vidoeStyle.value.width='100%'
          vidoeStyle.value.height='100%'
      }
    });
    }

    onMounted(() => {

        })

    onUnmounted(() => {
      if (myPlayer.value) {
          myPlayer.value.dispose();
      }
        clearTimeout(hideTaskTimeout)
    });
        return {
          videoPlayer,
      ...toRefs(photoShowList),
        getOnclick,
        videoClickUrl,
        hideTaskTimeout,
        vidoeStyle
    }
  }
})
</script>
<style scoped>
.imgDiv {
  float: left;
  margin-top: 30px;
}
</style>