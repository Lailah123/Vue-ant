<template>
  <div>
    <!-- <div class="loading" v-if="data.length == 0">
      <a-spin size="large" :delay="delayTime" tip="loading..."/>
    </div>-->
    <div class="main-table">
      <a-table
        :columns="columns"
        :dataSource="data"
        :loading="loading"
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
  </div>
</template>
<script>
const columns = [
  // {
  //   dataIndex: "name",
  //   key: "name",
  //   slots: { title: "customTitle" },
  //   scopedSlots: { customRender: "name" }
  // },
  // {
  //   title: "Age",
  //   dataIndex: "age",
  //   key: "age"
  // },
  // {
  //   title: "Address",
  //   dataIndex: "address",
  //   key: "address"
  // },
  // {
  //   title: "Tags",
  //   key: "tags",
  //   dataIndex: "tags",
  //   scopedSlots: { customRender: "tags" }
  // },
  // {
  //   title: "Action",
  //   key: "action",
  //   scopedSlots: { customRender: "action" }
  // }
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

const data = [
  // {
  //   key: "1",
  //   name: "John Brown",
  //   age: 32,
  //   address: "New York No. 1 Lake Park",
  //   tags: ["nice", "developer"]
  // },
  // {
  //   key: "2",
  //   name: "Jim Green",
  //   age: 42,
  //   address: "London No. 1 Lake Park",
  //   tags: ["loser"]
  // },
  // {
  //   key: "3",
  //   name: "Joe Black",
  //   age: 32,
  //   address: "Sidney No. 1 Lake Park",
  //   tags: ["cool", "teacher"]
  // }
];

export default {
  data() {
    return {
      delayTime: 300,
      loading: true,
      data,
      columns
    };
  },
  mounted: function() {
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
      this.loading = true;
      this.$axios
        .post("/api/v1/redis/queryByPage", {
          // pageSize: this.pageSize,
          // currectPage: this.currentPage
          pageSize: 10,
          currectPage: 1
        })
        .then(res => (
          _this.data = res.data,
          _this.loading = false
          
          ));
    }
  }
};
</script>

<style>
.main-table {
  margin: 50px;
}
.loading .ant-spin-spinning {
  display: block;
}
.loading {
  margin: 200px auto;
}
</style>