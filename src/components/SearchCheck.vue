<template>
  <section class="searchCheck">
    <!-- 搜索框 -->
    <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="搜索职位/公司"
      @click="fnClickSearch"
    />
    <!-- 点选 -->
    <ul class="checkBox">
      <li class="check-item">
        <div class="item-div">
          <span class="item-tit">区域</span>
        </div>
      </li>
      <li class="check-item">
        <span class="item-tit">岗位类别</span>
      </li>
      <li class="check-item">
        <span class="item-tit">薪资</span>
      </li>
      <li class="check-item">
        <span class="item-tit">更多</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  prop:['city'],
  data() {
    return {
      value: ""
    };
  },
  methods: {
    fnClickSearch() {
      console.log("点击了");
      this.$router.push({
        path: "/jobSearch"
      });
    }
  }
};
</script>

<style scoped lang="less">
.searchCheck {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;
  .van-search {
  }
  .checkBox {
    padding: 10px 0;
    font-size: 12px;
    background-color: white;
    box-shadow: 0px 2px 4px #fbfbfb;
    overflow: hidden;
    .check-item {
      float: left;
      width: 25%;
      position: relative;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
    }
    .item-div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .item-tit {
      position: relative;
      padding: 0 10px;
      width: auto;
      white-space: nowrap;
      overflow: hidden;
      display: inline-block;
      text-overflow: ellipsis;
      &::before {
        position: absolute;
        right: 0px;
        top: 40%;
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 4px solid transparent;
        border-top-color: black;
      }
    }
    .item-tit-on {
      width: calc(100% - 20px)!important;
      &::before {
        right: 2px!important;
      }
    }
  }
}

div /deep/ .van-field__control::placeholder {
  color: #e4e4e4 !important;
}
</style>