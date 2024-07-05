<template>
  <div class="menuDiv">
    <ul>
      <li>首页</li>
      <li>最新作品</li>
      <li>关于我们</li>
      <li>案例详情</li>
      <li>联系我们</li>
    </ul>
  </div>
  <div class="infoDiv">
    <!-- <h1>PERSONAL PHOTOGRAPHER</h1> -->
    <h2 class="company_name" style=" font-family: KaiTi_GB2312; color: rgb(255, 255, 255);font-size: 42px;">宋浩然</h2>
    <p class="company_name" style="font-family: 微软雅黑;font-size: 14px;">--联系电话：17502181757</p>
    <p class="company_name" style="font-family: 微软雅黑;font-size: 14px;">--微信QQ：17502181757,2649702175</p>
  </div>
  <a-carousel autoplay>
    <div>
      <img class="myImage" src='http://localhost:8080/img/91ck.5beb0108.jpg' />
    </div>
    <div>
      <img src="http://hkwba5f82.pic17.websiteonline.cn/upload/IMG_1818.JPG" />
    </div>
    <div>
      <img src="http://hkwba5f82.pic17.websiteonline.cn/upload/dfe3.jpg" />
    </div>
    <div>
      <img src="http://hkwba5f82.pic17.websiteonline.cn/upload/1_15_003.jpg">
    </div>
  </a-carousel>
  <!--案例展示-->
  <div class="caseDiv">
    <div class="caseTitle">
      <p>PHOTO CASE</p>
      <h1> 摄影案例展示</h1>
      <a href="">
        <span class="caseTitle-a-span">点击查看 所有案例分类</span>
      </a>
    </div>
    <div class="caseContent">
      <!--照片-->
      <div style=" width: 370px;height: 330px;float: left;">
        <a></a>
        <img class="caseContentImg" src="http://hkwba5f82.pic17.websiteonline.cn/upload/home1_03_o0c4.jpg"
          style="width: 370px;height: 330px;transform: scale(1);" />
      </div>
      <div style="width: 770px;height: 330px;display: inline;margin-left: 55px;float: left;">
        <a></a>
        <img class="caseContentImg" src="http://hkwba5f82.pic17.websiteonline.cn/upload/home2_05.jpg"
          style=" width: 770px;height: 330px;transform: scale(1);" />
      </div>

      <div style="width: 370px;height: 690px;float: left;    margin-top: 35px;">
        <a></a>
        <img class="caseContentImg" src="http://hkwba5f82.pic17.websiteonline.cn/upload/home3_09_tvke.jpg"
          style=" width: 370px;height: 690px;transform: scale(1);" />
      </div>

      <div style="width: 370px;height: 330px;float: left; margin-top: 35px;margin-left: 55px;">
        <a></a>
        <img class="caseContentImg" src="http://hkwba5f82.pic17.websiteonline.cn/upload/home4_10.jpg"
          style=" width: 370px;height: 330px;transform: scale(1);" />
      </div>

      <div style="width: 370px;height: 330px;float: left; margin-top: 35px;margin-left: 55px;    margin-left: 30px;">
        <a></a>
        <img class="caseContentImg" src="http://hkwba5f82.pic17.websiteonline.cn/upload/home4_10_062l.jpg"
          style=" width: 370px;height: 330px;transform: scale(1);" />
      </div>

      <div style="width: 370px;height: 330px;float: left; margin-top: 35px;margin-left: 55px;">
        <a></a>
        <img class="caseContentImg" src="http://hkwba5f82.pic17.websiteonline.cn/upload/home1_03_9d8f.jpg"
          style=" width: 370px;height: 330px;transform: scale(1);" />
      </div>

      <div style="width: 370px;height: 330px;float: left; margin-top: 35px;margin-left: 55px;    margin-left: 30px;">
        <a></a>
        <img class="caseContentImg" src="http://hkwba5f82.pic17.websiteonline.cn/upload/home4_10_ef1i.jpg"
          style=" width: 370px;height: 330px;transform: scale(1);" />
      </div>
    </div>

    <!--视频-->
    <div class="caseVideo">
      <div class="caseTitle">
        <p>CAMERA GAGS CASE</p>
        <h1> 摄像花絮</h1>
        <a href="">
          <span class="caseTitle-a-span">点击查看 所有案例分类</span>
        </a>
      </div>
      <video ref="videoPlayer" class="video-js" style="  height: 100%; width: 100%; object-fit: cover;"></video>
    </div>

    <!--视频作品集-->
    <div class="videoShowDiv">
      <div style="color: white;">
        <h1
          style=" font-size: 45px;text-align: center;font-family: cormorantgaramond-semibold, cormorantgaramond, cormorant garamond, serif;">
          DISCOVER</h1>
        <p style="font-size: 12px;color: inherit; line-height: 1.5em; text-align: center;">my collection of edited works
          and other exclusive content</p>
      </div>

      <!--详情展示三个-->
      <div class="oneVideoShowDiv">
       <img src="https://static.wixstatic.com/media/b6108b_100e790ff2674c1b8b6ca18b85f5a13b~mv2.jpg/v1/fill/w_312,h_183,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/ALL%20A1-2_edited.jpg"/>
       <span>标题</span>
      </div>
      <div class="twoVideoShowDiv">
        <img src="https://static.wixstatic.com/media/b6108b_4057e259eac04ba8a3ad510b02c55a86~mv2.jpeg/v1/crop/x_17,y_68,w_3199,h_1834/fill/w_374,h_216,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/Screenshot%202024-06-28%20at%2014_14_39.jpeg"/>
        <span>标题</span>
      </div>
      <div class="threeVideoShowDiv">
        <img src="https://static.wixstatic.com/media/b6108b_3a93f0e7cc4c4f9d8b680b3cdfed309f~mv2.jpg/v1/fill/w_312,h_183,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/EYE%20-%20iPhone.jpg"/>
        <span>标题</span>
      </div>
    </div>
 
    <!--联系我们-->
    <div class="aboutDiv">
      <p style="margin-top: 100px;">联系我们---模块区域</p>
    </div>
  </div>
</template>
<script>
import { onMounted, onUnmounted, ref, defineComponent } from "vue"
import videojs from "video.js"
import "video.js/dist/video-js.css"

export default defineComponent({
  name: "HelloWorld",
  components: {},
  setup() {
    const videoPlayer = ref(null)
    const myPlayer = ref(null)

    onMounted(() => {
      myPlayer.value = videojs(videoPlayer.value, {
        controls: true,
        sources: [
          {
            //src: require("@/assets/mp4/kouhong.mp4"),
            src:"https://video.wixstatic.com/video/b6108b_7e9ce484f7784fdcaccb7335e7390e97/1080p/mp4/file.mp4",
            type: 'video/mp4',
          }
        ],
        controlBar: {
          remainingTimeDisplay: {
            displayNegative: false
          }
        },
        playbackRates: [0.5, 1, 1.5, 2]
      }, () => {
        myPlayer.value.log("play.....")
      })
    })

    onUnmounted(() => {
      if (myPlayer.value) {
        myPlayer.value.dispose()
      }
    })
    return {
      videoPlayer
    };
  }
})


</script>
<style scoped>
.twoVideoShowDiv {
  color: white;
  background-color: rgb(14 35 45);
  display: inline;
  width: 374px;
  height: 529px;
  position: absolute;
  left: 30%;
  margin-left: 200px;
  z-index: 2;
}

.oneVideoShowDiv {
  color: white;
  background-color: rgb(14 35 45);
  display: inline;
  width: 312px;
  height: 421px;
  position: absolute;
  left: 18%;
  margin-left: 200px;
  margin-top: 50px;
}

.threeVideoShowDiv {
  color: white;
  background-color: rgb(14 35 45);
  display: inline;
  width: 312px;
  height: 421px;
  position: absolute;
  left: 45%;
  margin-left: 200px;
  margin-top: 50px;
}
.threeVideoShowDiv:hover{
  z-index: 4;
  cursor: pointer;
  border: 1px solid #ffffff;
  box-shadow: 2px 2px 15px 10px rgba(255, 255, 255, 0.5);
}
.oneVideoShowDiv:hover{
  z-index: 4;
  cursor: pointer;
  border: 1px solid #ffffff;
  box-shadow: 2px 2px 15px 10px rgba(255, 255, 255, 0.5);
}
.twoVideoShowDiv:hover{
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

.menuDiv {
  z-index: 2;
  float: left;
  position: absolute;
  top: 55px;
  right: 20%;
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

.menuDiv li {
  display: inline;
  color: white;
  font-size: 15px;
  padding-left: 100px;
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
  width: 1200px;
  position: relative;
  left: 20%;
  margin-top: 50px;
  height: 1200px;
  background-color: black
}

.caseVideo {
  position: relative;
  height: 700px;
  width: 100%;
  background-color: black
}

.videoShowDiv {
  position: relative;
  height: 670px;
  width: 100%;
  float: left;
  background-color: black;
}
.aboutDiv{
  color: white;
  position: relative;
  height: 200px;
  width: 100%;
  float: left;
  background-color: #2d322d;
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
