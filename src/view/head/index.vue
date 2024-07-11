<template>
 <div class="menuDiv">
    <ul>
      <li class="homePageLi"><router-link to="/" class="custom-link">首页</router-link>
      </li>
      <li class="photoPageLi"><router-link to="/PhotoContents" class="custom-link">照片案例</router-link>
      </li>
      <li><router-link to="/VideoContents" class="custom-link">视频案例</router-link></li>
      <li><router-link to="/about" class="custom-link">关于我们</router-link></li>
      <li><router-link to="/" class="custom-link">联系我们</router-link></li>
    </ul>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "index",
  setup() {

  }
})
</script>
<style scoped>

.menuDiv li {
  display: inline;
  color: white;
  font-size: 15px;
  padding-left: 100px;
}
.menuDiv {
  z-index: 2;
  float: left;
  position: absolute;
  top: 35px;
  right: 20%;
}
.photoPageLi:hover{
  cursor: pointer;
  color: rgb(224, 193, 193);
}

.custom-link{
  text-decoration: none;
  color: white;
}

.custom-link:hover{
  color: rgb(224, 193, 193);
}

</style>