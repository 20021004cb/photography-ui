<template>
<div class="aboutDiv">
      <div class="icons-list">
        <a-popover>
          <template #title>
            <p style="font-size: 20px; margin-left: 30px">17502181757</p>
          </template>
          <img src="@/assets/phone.png" />
        </a-popover>

        <a-popover>
          <template #content>
            <img
              src="@/assets/shx-wx.png"
              style="object-fit: cover; width: 200px"
            />
          </template>
          <img src="@/assets/email.png" />
        </a-popover>

        <a-popover>
          <template #content>
            <img
              src="@/assets/shx-wx.png"
              style="object-fit: cover; width: 200px"
            />
          </template>
          <img src="@/assets/wx.png" />
        </a-popover>
      </div>
      <div style="margin-top: 24px">
        <p>
          COPYRIGHT(©) 上海零点好奇影视有限公司
        </p>
        <p style="font-size: 12px;">沪ICP备2024096242号-1</p>
      </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "bottomIndex",
  setup() {

  }
})
</script>
<style scoped>

.aboutDiv {
  position: relative;
  height: 200px;
  width: 100%;
  float: left;
  background-color: #2d322d;
  color: rgb(136, 136, 136);
  font-family: 微软雅黑;
  font-size: 15px;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-weight: normal;
}

.icons-list {
  margin-top: 80px;
}
.icons-list img {
  width: 30px;
  margin-right: 20px;
}
</style>