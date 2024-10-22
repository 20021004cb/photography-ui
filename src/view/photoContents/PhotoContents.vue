<template>
    <headIndex></headIndex>
    <!--顶部图片-->
    <div style="width: 100%;height: auto;background-color: black;padding-top: 30px;padding-bottom: 30px;">
        <div class="imgDiv" id="image">
            <img style="margin: 10px;" :src="item.url" @click="getOnclick" :data-original="`${item}`" v-for="item in photoArray" :key="item" :style="item.style"/>
        </div>
        <div class="clear"></div>
    </div>
    <!--联系我们-->
    <bottomIndex></bottomIndex>
</template>
<script>
import { defineComponent,reactive,toRefs } from 'vue'
import headIndex from "@/view/head/index.vue"
import bottomIndex from "@/view/bottom/bottomIndex.vue"
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

export default defineComponent({
    name: "PhotoContents",
    components: { headIndex, bottomIndex },
    setup() {
    const photoShowList = reactive({
      photoArray: []
    })
    function addPhotoList(obj) {
      photoShowList.photoArray.push(obj)
    }
    addPhotoList({ url: require("@/assets/photoContents/photo1.jpg"), style: "width:20%;height:600px" })
    addPhotoList({ url: require("@/assets/photoContents/photo2.jpg"), style: "width:45%;height:600px" })
    addPhotoList({ url: require("@/assets/photoContents/photo3.jpg"), style: "width:30%;height:600px" })
    //addPhotoList({ url: require("@/assets/photoContents/photo4.jpg"), style: "width:16%;height:550px" })
   // addPhotoList({ url: require("@/assets/photoContents/photo5.jpg"), style: "width:15%;height:550px" })
    // addPhotoList({ url: require("@/assets/photoContents/photo6.jpg"), style: "width:364px;height:650px" })
    // addPhotoList({ url: require("@/assets/photoContents/photo7.jpg"), style: "width:16%;height:550px" })
    // addPhotoList({ url: require("@/assets/index/hzp.jpg"), style: "width:15%;height:550px" })
    // addPhotoList({ url: require("@/assets/index/hzp2.jpg"), style: "width:15%;height:550px" })
    // addPhotoList({ url: require("@/assets/photoContents/photo8.jpg"), style: "width:16%;height:550px" })
    // addPhotoList({ url: require("@/assets/photoContents/photo9.jpg"), style: "width:32%;height:400px" })
    // addPhotoList({ url: require("@/assets/photoContents/photo10.jpg"), style: "width:32%;height:400px" })
    // addPhotoList({ url: require("@/assets/photoContents/photo11.jpg"), style: "width:31%;height:400px" })
    // addPhotoList({ url: require("@/assets/photoContents/photo12.jpg"), style: "width:50%;height:1200px" })
    // addPhotoList({ url: require("@/assets/photoContents/photo14.jpg"), style: "width:46%;height:1200px" })
  //  addPhotoList({ url: require("@/assets/photoContents/photo13.jpg"), style: "width:32%;height:700px" })
    // addPhotoList({ url: require("@/assets/photoContents/photo15.jpg"), style: "width:30%;height:600px" })
    // addPhotoList({ url: require("@/assets/photoContents/photo19.jpg"), style: "width:32%;height:600px" })
    // addPhotoList({ url: require("@/assets/photoContents/photo17.jpg"), style: "width:33%;height:600px" })
    //addPhotoList({ url: require("@/assets/photoContents/photo18.jpg"), style: "width:30%;height:600px" })
   // addPhotoList({ url: require("@/assets/photoContents/photo19.jpg"), style: "width:40%;height:600px" })

        const getOnclick = () => {
            const viewer = new Viewer(document.getElementById('image'), {
                show: function () {
                    viewer.update();
                },
                // 相关配置项,详情见下面
            });
        };
        return {
            ...toRefs(photoShowList),
            getOnclick
        }
    },
})
</script>
<style scoped>
.imgDiv {
    float: left;
    margin-top: 30px;
}

.clear {
    clear: both
}
</style>
