<template>
 <div class="menuDiv">
    <ul>
      <li class="homePageLi"><router-link to="/" class="custom-link">首页</router-link>
      </li>
      <li class="photoPageLi"><router-link to="/PhotoContents" class="custom-link">照片案例</router-link>
      </li>
      <li><router-link to="/" class="custom-link">视频案例</router-link></li>
      <li><router-link to="/" class="custom-link">关于我们</router-link></li>
      <li><router-link to="/" class="custom-link">联系我们</router-link></li>
    </ul>
  </div>
</template>
<script>

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
  color: rgb(230, 229, 229);
}

.custom-link{
  text-decoration: none;
  color: white;
}

.custom-link:hover{
  color: rgb(0, 0, 0);
}

</style>