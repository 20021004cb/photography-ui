<template>
     <headIndex></headIndex>
    <!--顶部图片-->
    <div style="width: 100%;height: auto;background-color: black;padding-top: 30px;">
        <div class="imgDiv">
            <img src="http://hkwba5f82.pic17.websiteonline.cn/upload/xio1.jpg"/>
        </div>
        <div class="imgDiv">
            <img src="http://hkwba5f82.pic17.websiteonline.cn/upload/IMG_1465.JPG"/>
        </div>
        <div class="imgDiv">
            <img src="http://hkwba5f82.pic17.websiteonline.cn/upload/KV3_runz.jpg"/>
        </div>
        <div class="imgDiv">
            <img src="http://hkwba5f82.pic17.websiteonline.cn/upload/pj9g.jpg"/>
        </div>
        <div class="imgDiv">
            <img src="http://hkwba5f82.pic17.websiteonline.cn/upload/mna0.jpg"/>
        </div>
        <div class="imgDiv">
            <img src="http://hkwba5f82.pic17.websiteonline.cn/upload/8iqo.jpg"/>
        </div>
        <div class="imgDiv">
            <img src="	http://hkwba5f82.pic17.websiteonline.cn/upload/qoos.jpg"/>
        </div>
        <div class="imgDiv">
            <img src="http://hkwba5f82.pic17.websiteonline.cn/upload/jgcp.jpg"/>
        </div>
        <div class="imgDiv">
            <img src="http://hkwba5f82.pic17.websiteonline.cn/upload/5i1j.jpg"/>
        </div>
        <div class="clear"></div> 
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import headIndex from "@/view/head/index.vue"

export default defineComponent({
    name: "PhotoContents",
  components: {headIndex},
  setup() {
        
    },
})
</script>
<style scoped>
.imgDiv{
    float: left;
    margin-top: 30px;
    margin-left: 20px;
}
.clear{ clear:both} 
</style>
