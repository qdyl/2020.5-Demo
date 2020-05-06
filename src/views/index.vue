<template>
  <section class="index-wrap">
    <search-check></search-check>
     <div class="user-check-box" v-show="true">
      <div class="user-check-fill">
        <p class="hasChecked">已选择(1/1)</p>
        <ul class="checkedList" v-show="theCity">
          <li class="chekckItem">
            {{theCity}}
            <i class="close-icon"></i>
          </li>
        </ul>
      </div>

      <van-area
        title
        item-height="30"
        cancel-button-text="清除"
        confirm-button-text="确定"
        visible-item-count="10"
        :area-list="areaList"
        value="430100"
        :columns-placeholder="['请选择', '请选择', '请选择']"
        @confirm="fnClickConfirm"
        @cancel="showAraeBox = false"
        ref="areaBox"
      />
    </div>
    <job-list></job-list>
   
  </section>
</template>

<script>
import SearchCheck from "../components/SearchCheck";
import JobList from "../components/JobList";
import { areaList } from "../assets/area.js";

export default {
  components: {
    SearchCheck: SearchCheck,
    JobList: JobList
  },
  data() {
    return {
      areaList: {},
      showAraeBox: true,
      theCity: ""
    };
  },
  created() {
    this.areaList = areaList;
    // console.log('数据',areaList)
  },
  mounted() {
    this.$refs.areaBox.reset();
  },
  methods: {
    fnClickConfirm(e) {
      console.log("城市数据", e);
      console.log("选择的城市", e[1].name);
      this.theCity = e[1].name;
      this.showAraeBox = false;
    }
  },
  computed: {}
};
</script>

<style scoped lang="less">
@deep: ~">>>";
.user-check-box {
  font-size: 13px;
  padding-top: 90px;
  .user-check-fill {
    padding: 10px 15px;
    border-bottom: 1px solid #e2e2e2;
  }
  .hasChecked {
    margin: 8px 0;
  }
  .checkedList {
    overflow: hidden;
    .chekckItem {
      float: left;
      padding: 2px 8px;
      background-color: #e5f1ff;
      color: #3bc5c0;
      border-radius: 4px;
      line-height: 20px;
      font-size: 12px;
    }
    
    .close-icon {
      display: inline-block;
      position: relative;
      width: 3px;
      height: 3px;
      font-style: normal;
    }

    .close-icon::before,
    .close-icon::after {
      position: absolute;
      content: " ";
      background-color: #3bc5c0;
      top: -5px;
      right: 0px;
      width: 1px;
      height: 8px;
    }

    .close-icon::before {
      transform: rotate(45deg);
    }

    .close-icon::after {
      transform: rotate(-45deg);
    }
  }
}

// 城市下拉框的样式调整
div @{deep} {
  .van-picker__columns{
    // height: 400px!important;
  }
  .van-picker-column__item {
    // color: #666666;
  }
  .van-picker-column__item--selected {
    color: #4dcac6;
  }
  // 清除按钮、确定按钮样式
  .van-picker__toolbar{
    padding: 0 15px;
    height: 30px;
    line-height: 30px;
  }
  .van-picker__cancel{
    background-color: #E6E6E6;
    width: 100px;
    color: #666666;
      font-size: 13px;
      border-radius: 4px;
  }
  .van-picker__confirm{
    background-color: #31C2BD;
    width: calc(100% - 150px);
    color: #fff;
      font-size: 13px;
      border-radius: 4px;
  }
  // 清除按钮、确定按钮的定位调整
  .van-picker__toolbar{
    position: absolute;
    bottom: -40px;
    width: calc(100% - 30px);
  }
  
  // 城市下拉样式
  .van-picker-column__item{
    font-size: 13px;
    // height: 30px!important;
    // line-height: 30px!important;
  }
}
</style>