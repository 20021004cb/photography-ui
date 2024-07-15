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
        require("@/assets/xio1.jpg"),
        require("@/assets/2.jpg"),
        require("@/assets/3.jpg"),
        require("@/assets/4j.jpg"),
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
