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
        <h1 style="margin-top: 10px;">上海零点好奇有限责任公司</h1>
    </div>
    <div class="topDiv">
        <img style="height: 500px;width: 100%;"
            src="@/assets/about/about.jpg" />
    </div>

    <div class="aboutContentDiv">
        <div class="caseTitle">
            <p class="company_name">ABOUT US</p>
            <h1 class="company_name">关于我们</h1>
            <p>在零点时刻揭开奇迹，上海零点好奇影视</p>
        </div>
        <div>
            <img class="aboutImg" v-on:mousemove="mouseOverHandler" v-on:mouseleave="mouseLeaveHandler"
                src="http://hkwba5f82.pic17.websiteonline.cn/upload/@@@231321312-1024x361.jpg" />
            <div id="imgMsg">
                <h4>上海零点好奇有限责任公司-商业广告摄影、产品拍摄、家电拍摄、化妆品拍摄、商业摄影、五金拍摄</h4>
                <p>箱包拍摄、工业产品拍摄、手表拍摄、卫浴拍摄、酒类拍摄、饮料拍摄、数码拍摄等</p>
            </div>
        </div>

        <div class="caseTitle">
            <p class="company_name">TEAM</p>
            <h1 class="company_name">公司摄影师成员</h1>
        </div>

        <div class="memberDiv" style="height: 1100px;  margin-top: 55px;">
            <div class="memberDetailDiv" style=" width: 13%; height: 13%;  position: absolute;left: 15%; ">
                <img style="width: 100%; height: 100%;   margin-bottom: 20px;" src="@/assets/about/song.jpg" />
                <div style="color: white;text-align: center;font-weight: 500;font-size: 25px;height: 35px;"><b>陈小然</b></div>
                <span style="color: white;word-wrap: break-word;font-size:20px">
                    一名对摄影充满无限热情的创作者。我热爱用镜头捕捉生活中的每一个精彩瞬间，无论是壮丽的自然风光，还是人物的细腻情感，都能让我心动不已。在过去的[X]年里，我游历了许多美丽的地方，积累了丰富的拍摄经验。我擅长运用光影和色彩，为每一张照片赋予独特的灵魂，让观众能够感受到画面背后的故事。我相信，摄影不仅仅是记录，更是一种表达，一种能够触动人心的艺术形式。期待能通过我的镜头，为您展现一个别样的世界！
                </span>
            </div>
            <div class="memberDetailDiv" style=" width: 13%; height: 13%; position: absolute;left: 35%; ">
                <div style="color: white;text-align: center;font-weight: 500;font-size: 25px;height: 35px;"><b>暖暖</b></div>
                <span style="color: white;word-wrap: break-word;font-size:20px">
                   摄影对我来说，就像是一扇通往无限可能的窗户。从按下快门的那一刻起，我便开始了一场与时间和空间的对话。我专注于人像摄影，善于捕捉人物最真实、最动人的瞬间，展现他们的个性与魅力。我注重细节，追求完美的构图和独特的视角，以确保每一次拍摄都是一次独特的创作。无论是时尚的大片还是温馨的家庭写真，我都能以专业的技术和敏锐的洞察力，为您留下珍贵的回忆。选择我作为您的摄影师，让我们一起用影像书写属于您的精彩篇章！
                </span>
                <img style="width: 100%; height: 100%;  margin-bottom: 20px;" src="@/assets/about/nuan.jpg" />
            </div>
            <div class="memberDetailDiv" style=" width: 13%; height: 13%;  position: absolute;left: 52%; ">
                <img style="width: 100%; height: 100%;  margin-bottom: 20px;" src="@/assets/about/tzb.jpg" />
                <div style="color: white;text-align: center;font-weight: 500;font-size: 25px;height: 35px;"><b>特种兵</b></div>
                <span style="color: white;word-wrap: break-word;font-size:20px">
                    是一位痴迷于摄影的探索者。我对摄影的热爱源于对生活中美好事物的敏锐感知。我擅长风景摄影，喜欢追逐日出日落的绚烂色彩，沉醉于山川湖泊的宁静壮美。我善于运用不同的拍摄技巧和后期处理方法，将大自然的魅力展现得淋漓尽致。同时，我也热衷于街头摄影，捕捉城市中那些稍纵即逝的瞬间，展现生活的百态。我相信，每一张照片都是时光的标本，记录着那一刻的永恒。让我用镜头为您定格那些珍贵的瞬间，留下难忘的影像记忆。
                </span>
            </div>
            <div class="memberDetailDiv" style=" width: 13%; height: 13%;  position: absolute;left: 70%; ">
                <div style="color: white;text-align: center;font-weight: 500;font-size: 25px;height: 35px;"><b>毕</b></div>
                <span style="color: white;word-wrap: break-word;font-size:20px">
                   摄影是我生命中不可或缺的一部分，它是我表达自我、分享美的方式。我在摄影领域已经深耕了[X]年，积累了丰富的实战经验和独特的艺术见解。我不仅擅长传统的摄影手法，还勇于尝试创新的拍摄技术和理念。无论是商业摄影还是艺术摄影，我都能精准把握客户需求，用镜头语言传达出最深刻的内涵。我热衷于挑战自我，不断突破摄影的边界，为每一个项目带来全新的视觉体验。期待与您携手，共同创造令人惊叹的视觉盛宴！
                </span>
                <img style="width: 100%; height: 100%;   margin-bottom: 20px;"
                    src="@/assets/about/bi.jpg" />

            </div>
        </div>


        <div class="caseTitle">
            <p class="company_name">EQUIPMENT</p>
            <h1 class="company_name">工作花絮</h1>
        </div>

        <div class="caseContent" style="clear:both"> 
            <!--照片-->
            <div id="image">
                <template v-for="item in photoArray" :key="item">
                    <div style="float: left;width:33%">
                        <img :src="item.url" alt="" @click="getOnclick" :data-original="`${item}`"
                            style=" width: 100%;height: 600px; margin-bottom: 20px;" />
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
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

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

                addPhotoList({url:require("@/assets/about/hx.jpg")})
                addPhotoList({url:require("@/assets/about/hx1.jpg")})
                addPhotoList({url:require("@/assets/about/hx2.jpg")})
                addPhotoList({url:require("@/assets/about/hx3.jpg")})
                 addPhotoList({url:require("@/assets/about/hx4.jpg")})
                addPhotoList({url:require("@/assets/about/hx5.jpg")})
                addPhotoList({url:require("@/assets/about/hx6.jpg")})
                addPhotoList({url:require("@/assets/about/hx7.jpg")})
                 addPhotoList({url:require("@/assets/about/hx8.jpg")})
                addPhotoList({url:require("@/assets/about/hx9.jpg")})
                addPhotoList({url:require("@/assets/about/hx10.jpg")})
                addPhotoList({url:require("@/assets/about/hx11.jpg")})
                 addPhotoList({url:require("@/assets/about/hx12.jpg")})
                addPhotoList({url:require("@/assets/about/hx13.jpg")})
                addPhotoList({url:require("@/assets/about/hx14.jpg")})
                addPhotoList({url:require("@/assets/about/hx15.jpg")})
                addPhotoList({url:require("@/assets/about/hx16.jpg")})
                addPhotoList({url:require("@/assets/about/hx17.jpg")})

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
    top: 450px;
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
    top: 10%;
    left: 20%;
    color: white;
    text-align: left;
}
</style>