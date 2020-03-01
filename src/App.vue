<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-sider>
        <div class="solid">
          <a-menu
            @click="handleClick"
            style="width: 200px"
            :defaultSelectedKeys="['1']"
            :openKeys.sync="openKeys"
            mode="inline"
          >
            <a-sub-menu key="sub1" @titleClick="titleClick">
              <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
              <a-menu-item-group key="g1">
                <template slot="title"
                  ><a-icon type="qq" /><span>Item 1</span></template
                >
                <a-menu-item key="1">Option 1</a-menu-item>
                <a-menu-item key="2">Option 2</a-menu-item>
              </a-menu-item-group>
              <a-menu-item-group key="g2" title="Item 2">
                <a-menu-item key="3">Option 3</a-menu-item>
                <a-menu-item key="4">Option 4</a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
            <a-sub-menu key="sub2" @titleClick="titleClick">
              <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
              <a-menu-item key="5">Option 5</a-menu-item>
              <a-menu-item key="6">Option 6</a-menu-item>
              <a-sub-menu key="sub3" title="Submenu">
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
              </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="sub4">
              <span slot="title"><a-icon type="setting" /><span>Navigation Three</span></span>
              <a-menu-item key="9">Option 9</a-menu-item>
              <a-menu-item key="10">Option 10</a-menu-item>
              <a-menu-item key="11">Option 11</a-menu-item>
              <a-menu-item key="12">Option 12</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>

        </a-layout-header>
        <a-layout-content>
          <div class="skeletion">
            <!-- <a-skeleton avatar :paragraph="{rows: 4}" />
            <a-skeleton avatar :paragraph="{rows: 4}" />
            <a-skeleton avatar :paragraph="{rows: 4}" />
            <a-skeleton avatar :paragraph="{rows: 4}" /> -->
            <a-skeleton active />
            <a-skeleton active />
            <a-skeleton active />
            <a-skeleton active />
          </div>
          <a-divider orientation="right">Right Text</a-divider>
          <div class="centerdiv">
            <div class="timeline">
              <a-timeline>
                <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
                <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
                <a-timeline-item color="red">
                  <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
                  Technical testing 2015-09-01
                </a-timeline-item>
                <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
              </a-timeline>
            </div>
            <div class="empytdiv">
              <a-empty
                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
              >
                <span slot="description"> Customize <a href="#API">Description</a> </span>
                <a-button type="primary">Create Now</a-button>
              </a-empty>
            </div>
          </div>
            <div class="buttondiv">
              <div class="notify-btn">
                <a-button @click="success">Success</a-button>
                <a-button @click="error">Error</a-button>
                <a-button @click="warning">Warning</a-button>
              </div>
              <div class="notify-btn">
                <a-radio-group style="margin-right: 8px" :defaultValue="placement" @change="onChange">
                  <a-radio value="top">top</a-radio>
                  <a-radio value="right">right</a-radio>
                  <a-radio value="bottom">bottom</a-radio>
                  <a-radio value="left">left</a-radio>
                </a-radio-group>
                <a-button type="primary" @click="showDrawer">
                  Open
                </a-button>
                <a-drawer
                  title="Basic Drawer"
                  :placement="placement"
                  :closable="false"
                  @close="onClose"
                  :visible="visible"
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </a-drawer>
              </div>
              <div>
                <a-button type="primary" @click="openNotification">Open the notification box</a-button>
              </div>
            </div>
        </a-layout-content>
        <a-layout-footer>

        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        current: ['mail'],
        openKeys: ['sub1'],
        visible: false,
        placement: 'left',
      };
    },
    methods: {
      handleClick(e) {
        console.log('click', e);
      },
      titleClick(e) {
        console.log('titleClick', e);
      },
    
      success() {
        this.$message.success('This is a message of success');
      },
      error() {
        this.$message.error('This is a message of error');
      },
      warning() {
        this.$message.warning('This is message of warning');
      },

      showDrawer() {
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
      onChange(e) {
        this.placement = e.target.value;
      },

      openNotification() {
        this.$notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      },
      
    },
    watch: {
      openKeys(val) {
        console.log('openKeys', val);
      },
    },
  };
</script>

<style>
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
  .solid{
    height: 850px;
  }
  .skeletion{
    display: flex;
    padding: 32px;
    margin-top: 16px;
  }
  .ant-skeleton{
    padding: 16px;
  }
  .timeline{
    text-align: initial;
    padding: 16px 32px;
  }
  .buttondiv{
    padding: 0px 32px;
    line-height: 60px;
    display: flex;
  }
  .notify-btn{
    padding-left: 16px;
  }
  .ant-btn{
    margin-left: 10px;
  }
  .centerdiv{
    display: flex;
  }
  .empytdiv{
    width: 100%;
  }
</style>
