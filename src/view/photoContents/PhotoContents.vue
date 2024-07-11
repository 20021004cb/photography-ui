<template>
    <headIndex></headIndex>
    <!--顶部图片-->
    <div style="width: 100%;height: auto;background-color: black;padding-top: 30px;padding-bottom: 30px;">
        <div class="imgDiv" id="image">
            <img :src="item" @click="getOnclick" :data-original="`${item}`" v-for="item in photoShowList" />
        </div>
        <div class="clear"></div>
    </div>
    <!--联系我们-->
    <bottomIndex></bottomIndex>
</template>
<script>
import { defineComponent,reactive } from 'vue'
import headIndex from "@/view/head/index.vue"
import bottomIndex from "@/view/bottom/bottomIndex.vue"
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

export default defineComponent({
    name: "PhotoContents",
    components: { headIndex, bottomIndex },
    setup() {
        const photoShowList = reactive([
            "http://hkwba5f82.pic17.websiteonline.cn/upload/xio1.jpg",
            "http://hkwba5f82.pic17.websiteonline.cn/upload/IMG_1465.JPG",
            "http://hkwba5f82.pic17.websiteonline.cn/upload/KV3_runz.jpg",
            "http://hkwba5f82.pic17.websiteonline.cn/upload/pj9g.jpg",
            "http://hkwba5f82.pic17.websiteonline.cn/upload/5i1j.jpg",
        ])
        const getOnclick = () => {
            const viewer = new Viewer(document.getElementById('image'), {
                show: function () {
                    viewer.update();
                },
                // 相关配置项,详情见下面
            });
        };
        return {
            photoShowList,
            getOnclick
        }
    },
})
</script>
<style scoped>
.imgDiv {
    float: left;
    margin-top: 30px;
    margin-left: 20px;
}

.clear {
    clear: both
}
</style>
