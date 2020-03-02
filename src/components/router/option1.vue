<template>
  <div>
    <div class="skeletion">
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
            <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />Technical testing 2015-09-01
          </a-timeline-item>
          <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
        </a-timeline>
      </div>
      <div class="empytdiv">
        <a-empty
          image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        >
          <span slot="description">
            Customize
            <a href="#API">Description</a>
          </span>
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
        <a-button type="primary" @click="showDrawer">Open</a-button>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      placement: "left"
    };
  },
  methods: {
    success() {
      this.$message.success("This is a message of success");
    },
    error() {
      this.$message.error("This is a message of error");
    },
    warning() {
      this.$message.warning("This is message of warning");
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
        message: "Notification Title",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        onClick: () => {
          console.log("Notification Clicked!");
        }
      });
    }
  }
};
</script>

<style>
</style>