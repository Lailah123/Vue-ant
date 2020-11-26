<template>
  <div class="table">
    <!-- <div class="loading" v-if="data.length == 0">
      <a-spin size="large" :delay="delayTime" tip="loading..."/>
    </div>-->
    <div class="main-table">
      <a-table
        :columns="columns"
        :dataSource="data"
        :loading="loading"
        :pagination=false
        :rowKey="record => record.id"
      >
        <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
        <span slot="customTitle">
          <a-icon type="smile-o" />Name
        </span>
        <!-- <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :color="tag==='loser' ? 'volcano' : (tag.length > 5 ? 'geekblue' : 'green')"
          :key="tag"
        >{{tag.toUpperCase()}}</a-tag>
        </span>-->
        <span slot="action" slot-scope="text,record">
          <a-button type="primary" ghost>Edit</a-button>
          <a-button type="danger" ghost v-on:click="deleteRow(record)">Delete</a-button>
        </span>
      </a-table>
    </div>
    <div class="page">
      <a-pagination
        showSizeChanger
        :defaultCurrent="1"
        :total="total"
      />
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "username",
    dataIndex: "username",
    key: "username"
  },
  {
    title: "password",
    dataIndex: "password",
    key: "password"
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [];

let total = 0;
export default {
  data() {
    return {
      delayTime: 300,
      loading: true,
      data,
      columns,
      total
    };
  },
  mounted: function() {
    this.getTotal();
    this.getPage();
  },
  methods: {
    deleteRow(value) {
      console.log(value);
      let $this = this;
      this.$axios
        .post("/api/v1/redis/deleteUser", { id: value.id })
        .then(() => {
          // $this.$message({
          //   message: "删除成功！",
          //   type: "success",
          //   duration: "1000"
          // }),
          $this.getPage();
        });
    },
    getPage() {
      let _this = this;
      console.log(this.pageSize);
      
      this.loading = true;
      this.$axios
        .post("/api/v1/redis/queryByPage", {
          // pageSize: this.pageSize,
          // currectPage: this.currentPage
          pageSize: 10,
          currectPage: 1
        })
        .then(res => ((_this.data = res.data), (_this.loading = false)));
    },
    getTotal(){
      console.log("getTotal");
      
      let _this = this;
      this.$axios.post("/api/v1/redis/queryCount",{})
      .then(res => (_this.total = res.data,console.log(res)));
    }
  }
};
</script>

<style>
.table{
  margin: 50px;
}
.main-table {
  /* margin: 50px; */
}
.loading .ant-spin-spinning {
  display: block;
}
.loading {
  margin: 200px auto;
}
.page{
  float: right;
  padding: 24px 0;
}
</style>