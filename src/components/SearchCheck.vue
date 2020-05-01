<template>
  <section class="searchCheck">
    <!-- 搜索框 -->
    <van-search v-model="value" shape="round" background="#4fc08d" placeholder="搜索职位/公司" @click="fnClickSearch" />
    <!-- 点选 -->
    <ul class="checkBox">
      <li class="check-item">
        <span class="item-tit">区域</span>
      </li>
      <li class="check-item">岗位类别</li>
      <li class="check-item">薪资</li>
      <li class="check-item">更多</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    fnClickSearch() {
      console.log('点击了');
      this.$router.push({
        path:'/jobSearch',
      })
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
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    background-color: white;
    box-shadow: 0px 2px 4px #fbfbfb;
    
    .check-item {
      flex: auto;
      position: relative;
      text-align: center;
      &::before {
        position: absolute;
        right: 10%;
        top: 50%;
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 4px solid transparent;
        border-top-color: black;
      }
    }
  }
}

div /deep/ .van-field__control::placeholder {
  color: #e4e4e4 !important;
}
</style>