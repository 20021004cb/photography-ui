<template>
    <headIndex></headIndex>
    <div class="infoDiv">
        <p>
            <font>
                <strong style=" font-size: 30px;">RELIABLE PHOTOGRAPHY STUDIO</strong>
            </font>
        </p>
        <span
            style="font-family: &quot;Times New Roman&quot; letter-spacing: 0.4pt; color: rgb(255, 255, 255); font-size: 19px;">commercial
            photography</span>
        <h1 style="margin-top: 10px;">XXX</h1>
    </div>
    <div class="topDiv">
        <img style="height: 400px;width: 100%;"
            src="http://hkwba5f82.pic17.websiteonline.cn/upload/templatefiles/bannerny.jpg" />
    </div>

    <div class="aboutContentDiv">
        <div class="caseTitle">
            <p class="company_name">ABOUT US</p>
            <h1 class="company_name">关于我们</h1>
            <p>光舞影绰皆为产品雕刻,铎语响彻助你一锤定音</p>
        </div>
        <div>
            <img class="aboutImg" v-on:mousemove="mouseOverHandler" v-on:mouseleave="mouseLeaveHandler"
                src="http://hkwba5f82.pic17.websiteonline.cn/upload/@@@231321312-1024x361.jpg" />
            <div id="imgMsg">
                <h4>上海零点好奇有限责任公司-商业广告摄影产品拍摄家电拍摄化妆品拍摄产品摄影上海产品摄影上海家电摄影商业摄影五金拍摄</h4>
                <p>产品摄影箱包拍摄工业产品拍摄手表拍摄卫浴拍摄酒类拍摄饮料拍摄数码拍摄</p>
            </div>
        </div>

        <div class="caseTitle">
            <p class="company_name">TEAM</p>
            <h1 class="company_name">公司摄影师成员</h1>
        </div>

        <div class="memberDiv" style="height: 700px;    margin-top: 55px;">
            <div class="memberDetailDiv" style=" width: 200px; height: 440px;  position: absolute;left: 20%; ">
                <img style="width: 200px; height: 440px;   margin-bottom: 20px;" src="@/assets/member/s.jpg" />
                <div style="color: white;text-align: center;height: 24px;width: 200px;"><b>宋浩然</b></div>
                <span style="color: white;word-wrap: break-word;width: 200px; height: 440px;">
                    曾工作于上海橡菲贸易有限公司，任产品研发中心负责人，全网电商皮衣第一品牌。后工作于上海阿里巴巴数据中心任事业部经理，上海地区阿里巴巴B2C平台TOP卖家视觉策划执行。
                    2015年-至今，创始新媒体软时尚公众号，细分领域粉丝人群7W。
                </span>
            </div>
            <div class="memberDetailDiv" style=" width: 200px; height: 440px;  position: absolute;left: 35%; ">
                <div style="color: white;text-align: center;height: 24px;width: 200px;"><b>暖老师</b></div>
                <span style="color: white;word-wrap: break-word;width: 200px; height: 440px;">
                    曾工作于上海橡菲贸易有限公司，任产品研发中心负责人，全网电商皮衣第一品牌。后工作于上海阿里巴巴数据中心任事业部经理，上海地区阿里巴巴B2C平台TOP卖家视觉策划执行。
                    2015年-至今，创始新媒体软时尚公众号，细分领域粉丝人群7W。
                </span>
                <img style="width: 200px; height: 440px;   margin-bottom: 20px;" src="@/assets/member/nuan.jpg" />
            </div>
            <div class="memberDetailDiv" style=" width: 200px; height: 440px;  position: absolute;left: 52%; ">
                <img style="width: 200px; height: 440px;   margin-bottom: 20px;" src="@/assets/member/tzb.jpg" />
                <div style="color: white;text-align: center;height: 24px;width: 200px;"><b>特种兵</b></div>
                <span style="color: white;word-wrap: break-word;width: 200px; height: 440px;">
                    曾工作于上海橡菲贸易有限公司，任产品研发中心负责人，全网电商皮衣第一品牌。后工作于上海阿里巴巴数据中心任事业部经理，上海地区阿里巴巴B2C平台TOP卖家视觉策划执行。
                    2015年-至今，创始新媒体软时尚公众号，细分领域粉丝人群7W。
                </span>
            </div>
            <div class="memberDetailDiv" style=" width: 200px; height: 440px;  position: absolute;left: 70%; ">
                <div style="color: white;text-align: center;height: 24px;width: 200px;"><b>毕</b></div>
                <span style="color: white;word-wrap: break-word;width: 200px; height: 440px;">
                    曾工作于上海橡菲贸易有限公司，任产品研发中心负责人，全网电商皮衣第一品牌。后工作于上海阿里巴巴数据中心任事业部经理，上海地区阿里巴巴B2C平台TOP卖家视觉策划执行。
                    2015年-至今，创始新媒体软时尚公众号，细分领域粉丝人群7W。
                </span>
                <img style="width: 200px; height: 440px;   margin-bottom: 20px;"
                    src="http://hkwba5f82.pic17.websiteonline.cn/upload/2.jpg" />

            </div>
        </div>


        <div class="caseTitle">
            <p class="company_name">EQUIPMENT</p>
            <h1 class="company_name">设备器材</h1>
        </div>

        <div class="caseContent">
            <!--照片-->
            <div id="image">
                <template v-for="item in photoArray">
                    <div style="float: left;">
                        <img :src="item.url" alt="" @click="getOnclick" :data-original="`${item}`"
                            style="float: left; width: 619px;     height: 400px; margin-bottom: 20px;" />
                        <span style="color: white;display: block;margin-bottom: 20px;">{{ item.msg }}</span>
                    </div>
                </template>
            </div>
        </div>

        <div style="clear:both"></div>
    </div>

    <!--联系我们-->
    <bottomIndex></bottomIndex>

</template>
<script lang="ts">
import { defineComponent, onMounted, reactive ,toRefs} from "vue";
import headIndex from "@/view/head/index.vue"
import bottomIndex from "@/view/bottom/bottomIndex.vue"
export default defineComponent({
    name: "HelloWorld",
    components: { headIndex, bottomIndex },
    setup() {
        const mouseOverHandler = () => {
            const imgMsg = document.getElementById("imgMsg");
            if (imgMsg)
                imgMsg.style.display = "block"
        }
        const mouseLeaveHandler = () => {
            const imgMsg = document.getElementById("imgMsg");
            if (imgMsg)
                imgMsg.style.display = "none"
        }

        const photoShowList = reactive({
            photoArray: <any>[]
    })
                function addPhotoList(obj:any){
                    photoShowList.photoArray.push(obj)
                }

                addPhotoList({url:require("@/assets/sb.jpg"),msg:"SONY ZV-E1 LAUNCH FILM"})
                addPhotoList({url:require("@/assets/sb.jpg"),msg:"SONY ZV-E1 LAUNCH FILM"})
                addPhotoList({url:require("@/assets/sb.jpg"),msg:"SONY ZV-E1 LAUNCH FILM"})
                addPhotoList({url:require("@/assets/sb.jpg"),msg:"SONY ZV-E1 LAUNCH FILM"})
                addPhotoList({url:require("@/assets/sb.jpg"),msg:"SONY ZV-E1 LAUNCH FILM"})
                addPhotoList({url:require("@/assets/sb.jpg"),msg:"SONY ZV-E1 LAUNCH FILM"})

    const getOnclick = () => {
        const image = document.getElementById('image');
                if(image){
                    const viewer = new Viewer(image, {
                    show: function () {
                    viewer.update();
        }
      });
                }
                
    };


        onMounted(() => {

                })
                return{
                    mouseOverHandler,
                    mouseLeaveHandler,
                    getOnclick,
                    ...toRefs(photoShowList)
                }
    }
})
</script>
<style scoped>
.caseContent {
    width: 100%;
    position: relative;
    margin-top: 50px;
    height: auto;
    background-color: black;
}

.caseContentImg:hover {
    cursor: pointer;
    border: 1px solid #ffffff;
    box-shadow: 2px 2px 15px 10px rgba(255, 255, 255, 0.5);
}

#imgMsg {
    position: absolute;
    background-color: #00000085;
    /* display: none; */
    height: 128px;
    overflow: hidden;
    display: inline;
    z-index: 4;
    width: 90%;
    left: 5%;
    top: 433px;
    color: white;
    padding-top: 45px;
}

.aboutImg {
    height: 435px;
    width: 1100px;
}

.aboutImg:hover {
    cursor: pointer;
}

.company_name {
    animation: lefteaseinAnimate 1s ease 1;
    /*调用已定义好的动画lefteaseinAnimate，全程运行时间1S，进入的速度曲线为ease，只播放一次*/
    -webkit-animation: lefteaseinAnimate 1s ease 1;
    -ms-animation: lefteaseinAnimate 1s ease 1;
    -o-animation: lefteaseinAnimate 1s ease 1;
    -moz-animation: lefteaseinAnimate 1s ease 1;

    /*规定动画的最后状态为结束状态*/
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    -ms-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
}

.caseTitle {
    margin-top: 50px;
}

.caseTitle p {
    color: rgb(255, 255, 255);
    font-size: 14px;
    letter-spacing: 6px;
    text-transform: uppercase;
}

.caseTitle h1 {
    letter-spacing: 5px;
    color: rgb(255, 251, 251);
    font-family: 微软雅黑;
    font-size: 40px;
    letter-spacing: 0px;
}

.aboutContentDiv {
    background-color: black;
    position: relative;
    width: 100%;
    height: auto;
}

.topDiv {
    height: 400px;
}

.infoDiv {
    z-index: 2;
    float: left;
    position: absolute;
    top: 20%;
    left: 20%;
    color: white;
    text-align: left;
}
</style>