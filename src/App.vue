<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-sider>
        <Sider></Sider>
      </a-layout-sider>
      <a-layout>
        <a-layout-header></a-layout-header>
        <a-layout-content>
          <!-- <Content></Content> -->
          <router-view :str=str></router-view>
        </a-layout-content>
        <a-layout-footer>
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      placement: "left",
      //测试路由传参到组件
      str:"option2"
    };
  }
};
</script>

<style>
html {
  min-width: 1200px;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #fff;
  color: #000;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: #fff;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
.solid {
  height: 850px;
}
.skeletion {
  display: flex;
  padding: 32px;
  margin-top: 16px;
}
.skeletion .ant-skeleton {
  display: flex;
}
.ant-skeleton {
  padding: 16px;
}
.timeline {
  text-align: initial;
  padding: 16px 32px;
}
.buttondiv {
  padding: 0px 32px;
  line-height: 60px;
  display: flex;
}
.notify-btn {
  padding-left: 16px;
}
.ant-btn {
  margin-left: 10px;
}
.centerdiv {
  display: flex;
}
.empytdiv {
  width: 100%;
}
</style>
