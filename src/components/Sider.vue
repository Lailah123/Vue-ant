<template>
  <a-affix>
    <div class="solid">
      <a-menu
        @click="handleClick"
        style="width: 200px"
        :defaultSelectedKeys="['1']"
        :openKeys.sync="openKeys"
        mode="inline"
      >
        <a-sub-menu key="sub1" @titleClick="titleClick">
          <span slot="title">
            <a-icon type="mail" />
            <span>Navigation One</span>
          </span>
          <a-menu-item-group key="g1">
            <template slot="title">
              <a-icon type="qq" />
              <span>Item 1</span>
            </template>
            <a-menu-item key="1" str="option1">
              <router-link to="/option1">Option 1</router-link>
            </a-menu-item>
            <a-menu-item key="2" str="option2">
              <router-link to="/option2" str="option2">Option 2</router-link>
            </a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group key="g2" title="Item 2">
            <a-menu-item key="3">
              <router-link to="/option3">Option 3</router-link>
            </a-menu-item>
            <a-menu-item key="4">
              <router-link to="/option4">Option 4</router-link>
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu key="sub2" @titleClick="titleClick">
          <span slot="title">
            <a-icon type="appstore" />
            <span>Navigation Two</span>
          </span>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="sub4">
          <span slot="title">
            <a-icon type="setting" />
            <span>Navigation Three</span>
          </span>
          <a-menu-item key="9">Option 9</a-menu-item>
          <a-menu-item key="10">Option 10</a-menu-item>
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </a-affix>
</template>

<script>
export default {
  data() {
    return {
      current: ["mail"],
      openKeys: ["sub1"]
    };
  },
  methods: {
    handleClick(e) {
      console.log("click", e);
    },
    titleClick(e) {
      console.log("titleClick", e);
    }
  },
  watch: {
    openKeys(val) {
      console.log("openKeys", val);
    }
  }
};
</script>

<style>
</style>