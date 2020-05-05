<template>
  <section class="job-detail-wrap">
    <!-- 头部导航 -->
    <van-nav-bar title="职位详情" @click-left="onClickLeft" left-text left-arrow />
    <!-- 主体 -->
    <main class="job-detail-main">
      <!-- 职位概述 -->
      <div class="job-brief-info">
        <h3 class="job-tit">{{jobDesc.title}}</h3>
        <span class="salary">{{jobDesc.salary}}</span>
      </div>
      <!-- 区域、年限、专业 -->
      <div class="location-years-degree">
        <span class="lo-item location">{{jobDesc.location}}</span>
        <span class="lo-item year">{{jobDesc.workYears}}</span>
        <span class="lo-item degree">{{jobDesc.degree}}</span>
      </div>
       <!-- 人事介绍 -->
      <div class="job-company-desc">
        <img :src="jobDesc.hrInfo.logo" alt />
        <div class="job-company">
          <p class="company-name">{{jobDesc.hrInfo.name}}</p>
          <span>{{jobDesc.hrInfo.Financing}}</span>
          <span>{{jobDesc.hrInfo.peopleNum}}</span>
        </div>
        <i class="right-arrow"></i>
      </div>
      <!-- 职位详情 -->
      <div class="job-desc-list">
        <h3 class="job-desc-tit">职位详情</h3>
        <ul class>
          <li
            class="desc-item"
            v-for="(item,i) in jobDesc.jobDescList"
            :key="i"
          >{{`${i+1 }` +'、' + item}}</li>
        </ul>
        <div class="skills-list">
          <span class="skill-item" v-for="(item,i) in jobDesc.skills" :key="i">{{item}}</span>
        </div>
      </div>
      <!-- 公司介绍 -->
      <div class="job-company-desc">
        <img :src="jobDesc.companyDesc.logo" alt />
        <div class="job-company">
          <p class="company-name">{{jobDesc.companyDesc.name}}</p>
          <span>{{jobDesc.companyDesc.Financing}}</span>
          <span>{{jobDesc.companyDesc.peopleNum}}</span>
          <span class="server">{{jobDesc.companyDesc.server}}</span>
        </div>
        <i class="right-arrow"></i>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      jobId: "",
      jobDesc: {
        id: this.jobId,
        salary: "6-8K",
        title: "前端开发",
        location: "长沙",
        workYears: "1-3年",
        degree: "本科",
        hrInfo:{
            logo:"http://img4.imgtn.bdimg.com/it/u=2884413137,1287079259&fm=26&gp=0.jpg",
          name: "李经理",
          Financing: "萨斯顿的",
          peopleNum: "人事经理"
        },
        jobDescList: [
          "拥有良好的沟通能力",
          "根据产品要求设计和开发相关的功能",
          "负责H5页面的制作和小程序的开发",
          "与后端配合完成数据交互",
          "上级交代的其他事情"
        ],
        skills: ["html", "css", "js", "es6", "vue"],
        companyDesc: {
          logo:
            "http://img3.imgtn.bdimg.com/it/u=3249997724,598505941&fm=26&gp=0.jpg",
          name: "湖南XX科技有限公司",
          Financing: "未融资",
          peopleNum: "20-99",
          server: "运营上/增值服"
        }
      }
    };
  },
  created() {
    this.jobId = this.$route.query.id;
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style scoped lang="less">
@deep: ~">>>";
.job-detail-wrap {
  background-color: #fff;
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
    .van-nav-bar .van-icon {
      color: #fff;
    }
  }
}

.job-detail-main {
  padding: 15px 15px 0;
  .job-brief-info {
    overflow: hidden;
    .job-tit {
      float: left;
      width: calc(100% - 60px);
    }
    .salary {
      float: right;
      width: 60px;
      color: #3eaba8;
      line-height: 30px;
      text-align: right;
    }
  }
  .location-years-degree {
    font-size: 12px;
    .lo-item {
      padding-left: 15px;
      margin-right: 10px;
    }
  }
  .job-desc-list {
    margin-top: 15px;
    font-size: 13px;
        padding-top: 20px;
    border-top: 1px solid #eeeeee;
    .job-desc-tit {
      font-size: 15px;
      line-height: 36px;
    }
    .desc-item {
      line-height: 23px;
      color: #626262;
    }
  }
  .skills-list {
    margin-top: 8px;
    font-size: 12px;
    .skill-item {
      margin-right: 10px;
      padding: 2px 6px;
      border-radius: 2px;
      background-color: #f5f5f5;
      color: #7e7e7e;
    }
  }
  .job-company-desc {
      position: relative;
    font-size: 12px;
    display: flex;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #eeeeee;
    img {
      width: 50px;
      height: 50px;
    }
    .job-company {
      margin-left: 10px;
      line-height: 25px;
    }
    .company-name {
      font-size: 13px;
    }
    span {
      padding-right: 15px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 30%;
        right: 5px;
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #383838;
      }
      &:last-child {
        &::after {
          width: 0;
        }
      }
    }
    .right-arrow {
        position: absolute;
        right: 0;
        top: 52%;
      width: 7px;
      height: 7px;
      border-top: 1px solid #CACACA;
      border-right: 1px solid #CACACA;
      transform: rotate(45deg);
    }
  }
}
</style>