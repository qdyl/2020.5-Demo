<template>
  <section class="jobSearch-wrap">
    <!-- 头部导航 -->
    <van-nav-bar title="职位搜索" @click-left="onClickLeft" left-text left-arrow />
    <!-- 搜索框 -->
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <!-- 历史搜索 -->
    <!-- <section class="commonSearch">
      <div class="searchType">
        历史搜索
        <span class="right-text" @click="onClickClear">清除搜索</span>
      </div>
      <ul class="searchList">
        <li class="list-item" v-for="(item,i) in searchList_history.list" :id="searchList_history.id" :key="i" @click="onClickCheckItem(1)">{{item}}</li>
      </ul>
    </section>-->
    <!-- 热门搜索 -->
    <!-- <section class="commonSearch">
      <div class="searchType">热门搜索</div>
      <ul class="searchList">
        <li class="list-item" v-for="(item,i) in searchList_hot.list" :id="searchList_hot.id" :key="i" @click="onClickCheckItem(searchList_hot['id'])">{{item}}</li>
      </ul>
    </section>-->
    <!-- 历史搜索、热门搜索 -->
    <section class="commonSearch" v-for="item in totalList" :Key="item.id">
      <div class="searchType">
        {{item.type}}
        <span
          class="right-text"
          v-if="item.showClear"
          @click="onClickClear(item['id'])"
        >清除搜索</span>
      </div>
      <ul class="searchList">
        <li
          class="list-item"
          v-for="(sub) in item.list"
          :key="sub"
          @click="onClickCheckItem(sub,item.id)"
        >{{sub}}</li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  name: "jobSearch",
  data() {
    return {
      value: "",
      totalList: [
        { id: 10, type: "历史搜索", showClear: true, list: ["运维人员","测试人员","秘书","运输员","快递员","配送员"] },
        {
          id: 11,
          type: "热门搜索",
          showClear: false,
          list: [
            "财务经理",
            "设计师",
            "销售",
            "会计",
            "行政专员",
            "保洁员",
            "洗碗工"
          ]
        }
      ]
    };
  },
  created() {
    this.compuTotalList(5,8);
  },
  computed: {
    
  },
  methods: {
    // 数据的处理
    compuTotalList(n1,n2) {
      this.totalList.map(item => {
        if (item.id === 10) {
          item.list = item.list.slice(0, n1);
        } else if (item.id === 11) {
          item.list = item.list.slice(0, n2);
        }
      });
    },
    onClickLeft() {
      this.$router.push({
        path: "/"
      });
    },
    onSearch() {},
    // 清除历史
    onClickClear(id) {
      this.totalList.filter(item => item.id === id)[0].list = [];
    },
    // 点选
    onClickCheckItem(subValue, id) {
        // debugger
      if(this.value !== subValue){
        this.value = subValue;
      }
      if (id === 11) {
        let oldHistoryList = this.totalList.filter(item => item.id === 10)[0].list;
        let histotyLiST = oldHistoryList;
        if (histotyLiST.indexOf(subValue) === -1) {
          histotyLiST.unshift(subValue);
        }
        // Todo： 这里为啥不能使用 oldHistoryList替换呢。
        this.totalList.filter(item => item.id === 10)[0].list = histotyLiST;
        this.compuTotalList(5,8)
      }
    }
  }
};
</script>

<style scoped lang="less">
@deep: ~">>>";
.jobSearch-wrap {
  background-color: #f2f2f2;
  min-height: 100vh;
  .van-nav-bar {
    color: #fff;
    background-color: #31c2bd;
  }
  div @{deep} .van-nav-bar__title {
    color: #fff !important;
  }

  div @{deep} .van-nav-bar .van-icon {
    color: #fff !important;
  }

  @{deep} {
    .van-search {
      background-color: #f2f2f2;
      padding-bottom: 18px;
    }
    .van-search__content {
      background-color: #fff;
      border-radius: 30px;
      padding: 0 8px;
    }
    .van-search .van-cell {
      background-color: #fff;
      border-radius: 8px;
    }
    .van-search__action {
      margin: 0 10px;
      padding: 0 10px;
      background-color: #31c2bd;
      color: #fff;
      border-radius: 5px;
    }
    .van-nav-bar .van-icon{
        color: #fff;
    }
  }
  //   搜索
  .commonSearch {
    margin-bottom: 20px;
    min-height: 100px;
    font-size: 13px;
    padding: 8px 10px;
    background-color: #fff;
    .searchType {
      margin-bottom: 10px;
    }
    .right-text {
      margin-top: -4px;
      float: right;
      background-color: #f2f2f2;
      padding: 5px 6px;
    }
    .searchList {
      display: flex;
      flex-wrap: wrap;
      .list-item {
        flex: 0 0 calc(25% - 8px);
        margin: 4px 4px;
        text-align: center;
        background-color: #f2f2f2;
        padding: 4px 0px;
        border-radius: 4px;
      }
    }
  }
}
</style>