<template>
    <headIndex></headIndex>
    <!--顶部图片-->
    <div style="width: 100%;height: auto;background-color: black;padding-top: 30px;padding-bottom: 30px;">
        <div class="imgDiv" id="image">
            <img style="margin: 10px;" :src="item.url" @click="getOnclick" :data-original="`${item}`" v-for="item in photoArray" :style="item.style"/>
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
    addPhotoList({ url: require("@/assets/photoContents/photo1.jpg"), style: "width:640px;height:823px" })
    addPhotoList({ url: require("@/assets/photoContents/photo2.jpg"), style: "width:1170px;height:823px" })
    addPhotoList({ url: require("@/assets/photoContents/photo3.jpg"), style: "width:1010px;height:609px" })
    addPhotoList({ url: require("@/assets/photoContents/photo4.jpg"), style: "width:390px;height:609px" })
    addPhotoList({ url: require("@/assets/photoContents/photo5.jpg"), style: "width:390px;height:609px" })
    // addPhotoList({ url: require("@/assets/photoContents/photo6.jpg"), style: "width:364px;height:650px" })
    addPhotoList({ url: require("@/assets/photoContents/photo7.jpg"), style: "width:364px;height:650px" })

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
