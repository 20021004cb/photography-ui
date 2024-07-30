<template>
  <headIndex></headIndex>
  <div class="infoDiv">
    <!-- <h1>PERSONAL PHOTOGRAPHER</h1> -->
    <h2 class="company_name" style="
        font-family: KaiTi_GB2312;
        color: rgb(255, 255, 255);
        font-size: 42px;
      ">
      宋浩然
    </h2>
    <p class="company_name" style="font-family: 微软雅黑; font-size: 14px">
      --联系电话：17502181757
    </p>
    <p class="company_name" style="font-family: 微软雅黑; font-size: 14px">
      --微信QQ：17502181757,2649702175
    </p>
  </div>
  <!-- <a-carousel autoplay>
    <div>
      <img class="myImage" src="http://hkwba5f82.pic17.websiteonline.cn/upload/91ck.jpg" />
    </div>
    <div>
      <img src="http://hkwba5f82.pic17.websiteonline.cn/upload/IMG_1818.JPG" />
    </div>
    <div>
      <img src="http://hkwba5f82.pic17.websiteonline.cn/upload/dfe3.jpg" />
    </div>
    <div>
      <img src="http://hkwba5f82.pic17.websiteonline.cn/upload/1_15_003.jpg" />
    </div>
  </a-carousel> -->

  <!--视频-->
  <div class="caseVideo">
    <!-- <div class="caseTitle">
        <p>CAMERA GAGS CASE</p>
        <h1>摄像花絮</h1>
        <a href="">
          <span class="caseTitle-a-span">点击查看 所有案例分类</span>
        </a>
      </div> -->
    <video ref="videoPlayer" @click="clickVideo" class="video-js"
      style="height: 100%; width: 100%; object-fit: cover"></video>
  </div>

  <!--视频作品集-->
  <div class="videoShowDiv">
    <!-- <div style="color: white; margin-top: 35px">
        <h1 style="
            font-size: 45px;
            text-align: center;
            font-family: cormorantgaramond-semibold, cormorantgaramond,
              cormorant garamond, serif;
          ">
          DISCOVER
        </h1>
        <p style="
            font-size: 12px;
            color: inherit;
            line-height: 1.5em;
            text-align: center;
          ">
          my collection of edited works and other exclusive content
        </p>
      </div> -->

    <div class="VideoBigDiv">


      <!--详情展示三个-->
      <div class="oneVideoShowDiv">
        <img
          src="https://static.wixstatic.com/media/b6108b_100e790ff2674c1b8b6ca18b85f5a13b~mv2.jpg/v1/fill/w_312,h_183,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/ALL%20A1-2_edited.jpg" />
        <span>标题</span>
      </div>
      <div class="twoVideoShowDiv">
        <img
          src="https://static.wixstatic.com/media/b6108b_4057e259eac04ba8a3ad510b02c55a86~mv2.jpeg/v1/crop/x_17,y_68,w_3199,h_1834/fill/w_374,h_216,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/Screenshot%202024-06-28%20at%2014_14_39.jpeg" />
        <span>标题</span>
      </div>
      <div class="threeVideoShowDiv">
        <img
          src="https://static.wixstatic.com/media/b6108b_3a93f0e7cc4c4f9d8b680b3cdfed309f~mv2.jpg/v1/fill/w_312,h_183,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/EYE%20-%20iPhone.jpg" />
        <span>标题</span>
      </div>
    </div>
  </div>

  <!--案例展示-->
  <div class="caseDiv">
    <div class="caseTitle">
      <p>PHOTO CASE</p>
      <h1>摄影案例展示</h1>
      <a href="">
        <span class="caseTitle-a-span"><router-link to="/PhotoContents" class="custom-link">点击查看
            所有案例分类</router-link></span>
      </a>
    </div>
    <div class="caseContent">
      <div style="margin-bottom: 20px;">
        <img src="@/assets/index/food.png" style="width: 42px;height: 42px;" />
        <span style=" color: white; font-size: 25px;margin-left: 20px;position: relative;bottom: -12px;font-weight: 500; ">菜品系列</span>
      </div>
          <!--照片-->
      <div id="image">
        <template v-for="item in photoArray">
          <div class="imageDiv">
            <img :src="item.url" alt="" @click="getOnclick" :data-original="`${item}`"
              style="width: 619px;  margin-bottom: 20px;" />
            <span style="color: white;display: block;margin-bottom: 20px;">{{ item.msg }}</span>
          </div>
        </template>
      </div>
      <div style="padding-top: 30px;padding-bottom: 20px;clear:both">
        <img src="@/assets/index/people.png" style="width: 42px;height: 42px;" />
        <span style=" color: white; font-size: 25px;margin-left: 20px;position: relative; bottom: -12px;font-weight: 500;">人像系列</span>
      </div>
      <!--照片-->
      <div id="image">
        <template v-for="item in peopleArray">
          <div class="imageDiv">
            <img :src="item.url" alt="" @click="getOnclick" :data-original="`${item}`"
              style="width: 619px;  margin-bottom: 20px;" />
            <span style="color: white;display: block;margin-bottom: 20px;">{{ item.msg }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
  <div style="clear:both"></div>
  <!--合作伙伴 -->
  <div class="partnerDiv">
    <div class="caseTitle" style="height: 150px;">
      <p class="company_name">COOPERATIVE PARTNER</p>
      <h1 class="company_name">合作伙伴</h1>
    </div>
    <div class="aaa">
      <div class="box">
        <ul class="ulDomUl" ref="ulDom" @mouseenter="pause" @mouseleave="resume">
          <li class="ulDomLi">
            <img src="@/assets/partner/bydlogo.png" />
            <img src="@/assets/partner/zfb.png" />
            <img src="@/assets/partner/aodi.png" />
            <img src="@/assets/partner/benchi.png" />
            <img src="@/assets/bsj.png" />
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!--联系我们-->
  <bottomIndex></bottomIndex>

</template>
<script>
import { onMounted, onUnmounted, ref, defineComponent, reactive, toRefs } from "vue";
import videojs from "video.js";
import "@/css/video-js-index.css";
import headIndex from "@/view/head/index.vue"
import bottomIndex from "@/view/bottom/bottomIndex.vue"
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

export default defineComponent({
  name: "HelloWorld",
  components: { headIndex, bottomIndex },
  setup() {

    const videoPlayer = ref(null);
    const myPlayer = ref(null);

    const ulDom = ref(null);
    let animationId = null;
    let isPaused = false;
    //菜品系列
    const photoShowList = reactive({
      photoArray: []
    })
    function addPhotoList(obj) {
      photoShowList.photoArray.push(obj)
    }
    addPhotoList({ url: require("@/assets/index/food1.jpg"), msg: "SONY A7-M4 LAUNCH FILM" })
    addPhotoList({ url: require("@/assets/index/food2.jpg"), msg: "SONY A7-M4 LAUNCH FILM" })
    addPhotoList({ url: require("@/assets/index/food3.jpg"), msg: "SONY A7-M4 LAUNCH FILM" })
    addPhotoList({ url: require("@/assets/index/food4.jpg"), msg: "SONY A7-M4 LAUNCH FILM" })
    addPhotoList({ url: require("@/assets/index/food5.jpg"), msg: "SONY A7-M4 LAUNCH FILM" })
    addPhotoList({ url: require("@/assets/index/food6.jpg"), msg: "SONY A7-M4 LAUNCH FILM" })

    //人像系列
    const peopleShowList = reactive({
      peopleArray: []
    })
    function addPeopleList(obj) {
      peopleShowList.peopleArray.push(obj)
    }
    addPeopleList({ url: require("@/assets/photoContents/photo2.jpg"), msg: "SONY A7-M4 LAUNCH FILM" })
    addPeopleList({ url: require("@/assets/index/people1.jpg"), msg: "SONY A7-M4 LAUNCH FILM" })
    addPeopleList({ url: require("@/assets/index/people2.jpg"), msg: "SONY A7-M4 LAUNCH FILM" })
    addPeopleList({ url: require("@/assets/index/people3.png"), msg: "SONY A7-M4 LAUNCH FILM" })
    addPeopleList({ url: require("@/assets/index/people4.jpg"), msg: "SONY A7-M4 LAUNCH FILM" })
    addPeopleList({ url: require("@/assets/index/people5.jpg"), msg: "SONY A7-M4 LAUNCH FILM" })

    const getOnclick = () => {
      const viewer = new Viewer(document.getElementById('image'), {
        show: function () {
          viewer.update();
        },
        // 相关配置项,详情见下面
      });
    };

    const clickVideo = () => {
      console.log(111)
    }

    const pause = () => {
      cancelAnimationFrame(animationId);
      isPaused = true;
    };

    const resume = () => {
      if (!isPaused) return;
      animationId = requestAnimationFrame(animation);
      isPaused = false;
    };
    let position = 0;
    const animation = () => {
      const ulWidth = ulDom.value.offsetWidth;
      const animate = () => {
        position -= 1;
        if (position <= -(ulWidth / 2)) {
          position = 0;
        }
        ulDom.value.style.transform = 'translateX(' + position + 'px)';
        animationId = requestAnimationFrame(animate);
      };
      animate();
    };

    onMounted(() => {
      animation();
      myPlayer.value = videojs(
        videoPlayer.value,
        {
          controls: true,
          sources: [
            {
              //src: require("@/assets/mp4/kouhong.mp4"),
              src: "https://video.wixstatic.com/video/b6108b_7e9ce484f7784fdcaccb7335e7390e97/1080p/mp4/file.mp4",
              type: "video/mp4",
            },
          ],
          controlBar: {
            remainingTimeDisplay: {
              displayNegative: false,
            },
          },
          playbackRates: [0.5, 1, 1.5, 2],
          autoplay: "muted",
          loop: "true",
          preload: "auto"
        },
        () => {
          myPlayer.value.log("play.....");
        }
      );

    });

    onUnmounted(() => {
      if (myPlayer.value) {
        myPlayer.value.dispose();
      }
    });
    return {
      videoPlayer,
      ulDom,
      pause,
      resume,
      animation,
      getOnclick,
      ...toRefs(photoShowList),
        ...toRefs(peopleShowList),
      clickVideo
    };
  },
});
</script>
<style scoped>
.imageDiv {
  float: left;
  width: 33%;
  max-width: 619px;
  /* 最大宽度限制 */
}

.VideoBigDiv {
  position: relative;
  width: 800px;
  height: 425px;
  margin: auto
}

.custom-link {
  text-decoration: none;
  color: white;
}

.aaa {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
}

.box {
  width: 1050px;
  height: 150px;
  overflow: hidden;
}

.ulDomUl {
  width: 200%;
  height: 100%;

  &>li {
    width: 1050px;
    height: 100%;
    float: left;
    list-style: none;
    display: flex;

    &>img {
      /* width: 20%;
      height: 20%; */
      margin-right: 70px;
    }
  }
}

.twoVideoShowDiv {
  color: white;
  background-color: rgb(14 35 45);
  width: 374px;
  height: 529px;
  position: absolute;
  margin-left: 200px;
  margin-top: -120px;
  z-index: 2;
}

.oneVideoShowDiv {
  color: white;
  background-color: rgb(14 35 45);
  width: 312px;
  height: 421px;
  position: absolute;
  margin-top: -70px;
}

.threeVideoShowDiv {
  color: white;
  background-color: rgb(14 35 45);
  width: 312px;
  height: 421px;
  position: absolute;
  margin-left: 485px;
  margin-top: -70px;
}

.threeVideoShowDiv:hover {
  z-index: 4;
  cursor: pointer;
  border: 1px solid #ffffff;
  box-shadow: 2px 2px 15px 10px rgba(255, 255, 255, 0.5);
}

.oneVideoShowDiv:hover {
  z-index: 4;
  cursor: pointer;
  border: 1px solid #ffffff;
  box-shadow: 2px 2px 15px 10px rgba(255, 255, 255, 0.5);
}

.twoVideoShowDiv:hover {
  cursor: pointer;
  border: 1px solid #ffffff;
  box-shadow: 2px 2px 15px 10px rgba(255, 255, 255, 0.5);
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 950px;
  background: black;
  overflow: hidden;
  float: left;
  z-index: 0;
  position: relative;
}

.ant-carousel :deep(.slick-slide img) {
  width: 100%;
  height: 100%;
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


.caseDiv {
  position: relative;
  height: auto;
  width: 100%;
  float: left;
  background-color: black;
  margin-bottom: 65px;
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

.caseTitle a {
  line-height: 40px;
  text-decoration: none;
  font-family: 微软雅黑;
}

.caseTitle-a-span {
  padding: 0px;
  color: rgb(255, 255, 255);
  font-family: SourceHanSerifCN-Regular;
  font-size: 21px;
  padding-bottom: 10px;
  border-bottom: 3px solid rgb(255, 255, 255);
}

.caseContent {
  width: 100%;
  position: relative;
  margin-top: 50px;
  height: auto;
  background-color: black;
}

.caseVideo {
  position: relative;
  height: 700px;
  width: 100%;
  background-color: black;
}

.videoShowDiv {
  position: relative;
  height: 500px;
  width: 100%;
  float: left;
  background-color: black;
}

.partnerDiv {
  color: white;
  position: relative;
  height: 350px;
  width: 100%;
  float: left;
  background-color: black;
}


.caseContentImg:hover {
  cursor: pointer;
  border: 1px solid #ffffff;
  box-shadow: 2px 2px 15px 10px rgba(255, 255, 255, 0.5);
}

/*定义一个名字为lefteaseinAnimate动画，实现从页面的左边淡入页面效果*/
@keyframes lefteaseinAnimate {
  0% {
    transform: translateX(-2000px);
    opacity: 0;
  }

  /*在0%时设置文字在想X轴-2000px位移处（左边），透明度为0，也就是看不见文字*/
  100% {
    transform: translateX(0px);
    opacity: 1;
  }

  /*在100%时设置文字在想X轴0px位移处，也就是原始布局的位置，透明度为1，也就是文字可以看见了*/
}

@-webkit-keyframes lefteaseinAnimate {
  0% {
    -webkit-transform: translateX(-2000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0px);
    opacity: 1;
  }
}

@-o-keyframes lefteaseinAnimate {
  0% {
    -webkit-transform: translateX(-2000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0px);
    opacity: 1;
  }
}

@-ms-keyframes lefteaseinAnimate {
  0% {
    -webkit-transform: translateX(-2000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0px);
    opacity: 1;
  }
}

@-moz-keyframes lefteaseinAnimate {
  0% {
    -webkit-transform: translateX(-2000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0px);
    opacity: 1;
  }
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
</style>
<!-- <style scoped lang="scss">
$x: 10;
/*  number of row */
$y: 10;
/*  number of columns */
$s: 0.8;
/* speed factor */

@for $i from 0 through ($x - 1) {
  @for $j from 0 through ($y - 1) {
    @property --c-#{$i}-#{$j} {
      syntax: "<number>";
      initial-value: 1;
      inherits: false;
    }
  }
}

@function transition($i, $j) {
  @return ($s*random())+s ($s*random())+s;
}

@mixin image() {
  $all_t: (
  );
$all_m: (
);

@for $i from 0 through ($x - 1) {
  @for $j from 0 through ($y - 1) {
    $all_t: append($all_t, --c-#{$i}-#{$j} transition($i, $j), comma);
    $all_m: append($all_m, linear-gradient(rgba(0, 0, 0, var(--c-#{$i}-#{$j})) 0 0) calc(#{$i}*100%/(#{$x} - 1)) calc(#{$j}*100%/(#{$y} - 1)), comma);
  }
}

transition: $all_t;
-webkit-mask: $all_m;
mask: $all_m;
}

img {
  @include image();
  -webkit-mask-size:calc(100%/#{$x}) calc(100%/#{$y});
  -webkit-mask-repeat: no-repeat;
  mask-size:calc(100%/#{$x}) calc(100%/#{$y});
  mask-repeat: no-repeat;
}

img:hover {
  @for $i from 0 through ($x - 1) {
    @for $j from 0 through ($y - 1) {
      --c-#{$i}-#{$j}: 0.7;
    }
  }
}
</style> -->