<template>
  <headIndex></headIndex>
  <div style="width: 100%;height: auto;background-color: black;padding-top: 30px;padding-bottom: 30px;">
    <div class="imgDiv" id="image">
      <!-- <video ref="videoPlayer" class="video-js" style="height: 316px; width: 619px; object-fit: cover"></video> -->
      <template v-for="item in photoArray" :key="item">
        <div style="float: left;width:32%;">
          <img :src="item.imgUrl" alt="" @click="getOnclick(item)"
            style=" width: 100%; height: 300px; margin-bottom: 20px;" v-if="!item.visible" />
           
          <video :id="item.id" class="video-js" v-if="item.visible" style="object-fit: cover; width: 100%; height: 300px; margin-bottom: 20px;" :style="vidoeStyle"></video>
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
        // addPhotoList({videoUrl: require("@/assets/videoContents/hanting.mp4"), imgUrl: require("@/assets/videoContents/hanting.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "hanting", visible: false })
        // addPhotoList({videoUrl: require("@/assets/mp4/kouhong.mp4"), imgUrl: require("@/assets/mp4/kh.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "kh3", visible: false })
        // addPhotoList({videoUrl: require("@/assets/videoContents/atelasi.mp4"), imgUrl: require("@/assets/videoContents/atelasi.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "atelasi", visible: false })
        // addPhotoList({videoUrl: require("@/assets/videoContents/baxi.mp4"), imgUrl: require("@/assets/videoContents/baxi.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "baxi", visible: false })
        // addPhotoList({videoUrl: require("@/assets/videoContents/car.mp4"), imgUrl: require("@/assets/videoContents/car.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "car", visible: false })
        // addPhotoList({videoUrl: require("@/assets/mp4/kouhong.mp4"), imgUrl: require("@/assets/mp4/kh.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "kh6", visible: false })
        addPhotoList({videoUrl: require("@/assets/videoContents/video1.mp4"), imgUrl: require("@/assets/videoContents/video1.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video1", visible: false })
        addPhotoList({videoUrl: require("@/assets/videoContents/video2.mp4"), imgUrl: require("@/assets/videoContents/video2.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video2", visible: false })
        addPhotoList({videoUrl: require("@/assets/videoContents/video3.mp4"), imgUrl: require("@/assets/videoContents/video3.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video3", visible: false })
        addPhotoList({videoUrl: require("@/assets/videoContents/video4.mp4"), imgUrl: require("@/assets/videoContents/video4.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video4", visible: false })
        addPhotoList({videoUrl: require("@/assets/videoContents/video5.mp4"), imgUrl: require("@/assets/videoContents/video5.png"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video5", visible: false })
//         addPhotoList({videoUrl: require("@/assets/videoContents/video6.mp4"), imgUrl: require("@/assets/videoContents/video6.jpg"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video6", visible: false })
//         addPhotoList({videoUrl: require("@/assets/videoContents/video7.mp4"), imgUrl: require("@/assets/videoContents/video7.jpg"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video7", visible: false })
//         addPhotoList({videoUrl: require("@/assets/videoContents/video8.mp4"), imgUrl: require("@/assets/videoContents/video8.jpg"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video8", visible: false })
//         addPhotoList({videoUrl: require("@/assets/videoContents/video9.mp4"), imgUrl: require("@/assets/videoContents/video9.jpg"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video9", visible: false })
//         addPhotoList({videoUrl: require("@/assets/videoContents/video10.mp4"), imgUrl: require("@/assets/videoContents/video10.jpg"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video10", visible: false })
//         addPhotoList({videoUrl: require("@/assets/videoContents/video11.mp4"), imgUrl: require("@/assets/videoContents/video11.jpg"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video11", visible: false })
//         addPhotoList({videoUrl: require("@/assets/videoContents/video12.mp4"), imgUrl: require("@/assets/videoContents/video12.jpg"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video12", visible: false })
// addPhotoList({videoUrl: require("@/assets/videoContents/video13.mp4"), imgUrl: require("@/assets/videoContents/video13.jpg"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video13", visible: false })
//         addPhotoList({videoUrl: require("@/assets/videoContents/video14.mp4"), imgUrl: require("@/assets/videoContents/video14.jpg"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video14", visible: false })
//         addPhotoList({videoUrl: require("@/assets/videoContents/video15.mp4"), imgUrl: require("@/assets/videoContents/video15.jpg"), msg: "SONY ZV-E1 LAUNCH FILM", id: "video15", visible: false })

    const getOnclick = (item:any) => {

           vidoeStyle.value.width='100%'
           vidoeStyle.value.height='300px'

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
          // vidoeStyle.value.width='600px'
          // vidoeStyle.value.height='300px'
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