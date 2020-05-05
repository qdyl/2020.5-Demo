<template>
  <section class="jobList-wrap">
    <ul class="jobList">
      <li class="job-item-li" v-for="item in jobList" :key="item.id" @click="fnClickToJobDetail(item.id)">
        <div class="job-item">
          <div class="jobName">
            <strong class="name">{{item.name}}</strong>
            <small class="status">{{item.status}}</small>
            <span class="salary">{{item.salary}}</span>
          </div>
          <div class="jobType">
            <span>{{item.qualify}} | </span>
            <span>{{item.jobTime}} | </span>
            <span>{{item.Recruitment}}人</span>
          </div>
          <div class="jobLocation">
            <span>{{item.location}}</span>
            <span class="jobSumit">申请</span>
          </div>
          <div class="company">
            <img class="companyLogo" :src="item.companyLogo" alt />
            <div class="companyAds">
              <div class="companyName">{{item.companyName}}</div>
              <span class="company-ad" v-for="sub in item.companyAdvantge" :key="sub">{{sub}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      jobList: [
        {
          id:11,
          name: "生产操作工",
          status: "急聘",
          salary: "2500/月",
          qualify: "不限",
          jobTime: "全职/兼职",
          Recruitment: 2,
          location: "长沙市岳麓区",
          submit: "申请",
          companyLogo:
            "http://img3.imgtn.bdimg.com/it/u=3249997724,598505941&fm=26&gp=0.jpg",
          companyName: "湖南博云汽车制动材料有限公司",
          companyAdvantge: ["工作服", "包住", "节日福利", "全勤奖"]
        },
        {
          id:12,
          name: "工艺员",
          status: "急聘",
          salary: "面议",
          qualify: "不限",
          jobTime: "全职",
          Recruitment: 20,
          location: "冷水滩区",
          submit: "申请",
          companyLogo:
            "http://img2.imgtn.bdimg.com/it/u=3537800136,3377867604&fm=26&gp=0.jpg",
          companyName: "湖南三湘电缆责任有限公司",
          companyAdvantge: ["工作服", "包住", "节日福利", "全勤奖"]
        },
        {
          id:13,
          name: "工艺员",
          status: "急聘",
          salary: "面议",
          qualify: "不限",
          jobTime: "全职",
          Recruitment: 1,
          location: "冷水滩区",
          submit: "申请",
          companyLogo:
            "http://img4.imgtn.bdimg.com/it/u=2884413137,1287079259&fm=26&gp=0.jpg",
          companyName: "湖南三湘电缆责任有限公司",
          companyAdvantge: ["工作服", "探亲假", "包住", "包吃"]
        },
        {
          id:14,
          name: "中职数学教师",
          status: "急聘",
          salary: "面议",
          qualify: "不限",
          jobTime: "全职/兼职均可",
          Recruitment: 3,
          location: "冷水滩区",
          submit: "申请",
          companyLogo:
            "http://img1.imgtn.bdimg.com/it/u=2579420046,4035216119&fm=26&gp=0.jpg",
          companyName: "永州铁航职业技术学院",
          companyAdvantge: ["工作服", "出国机会", "寒暑假", "包吃"]
        },
        {
          id:15,
          name: "研发工程师",
          status: "急聘",
          salary: "6000-9000元/月",
          qualify: "不限",
          jobTime: "全职",
          Recruitment: 5,
          location: "冷水滩区",
          submit: "申请",
          companyLogo:
            "http://img0.imgtn.bdimg.com/it/u=2914506805,2233617267&fm=26&gp=0.jpg",
          companyName: "湖南和广生物科技有限公司",
          companyAdvantge: ["工作服", "出国机会", "寒暑假", "包吃"]
        }
      ],
      isEnterJobDetail:true,
    };
  },
  methods:{
    fnClickToJobDetail(id){
      console.log('测试')
      if(this.isEnterJobDetail){
        this.$router.push({
          path:'/jobDetail',
          query:{id:id}
        })
      }
    }
  }
};
</script>

<style scoped lang="less">
.jobList-wrap {
    padding-top: 90px;
  font-size: 13px;
  text-align: left;
  .job-item-li {
    border-bottom: 4px solid #F8F8F8;
  }
  .job-item {
    padding: 10px;
    margin-bottom: 10px;
  }
  .jobName {
    .status {
        margin-left: 5px;
        padding: 2px 4px;
        background-color: red;
        color: white;
        border-radius: 2px;
    }
    .salary {
      float: right;
    }
  }
  .jobType {
    margin: 5px 0;
    font-size: 12px;
  }
  .jobLocation {
    padding-bottom: 8px;
    border-bottom: 1px solid #FBFBFB;
    font-size: 12px;
    .jobSumit {
        margin-top: -5px;
      float: right;
      border: 1px solid #6AD3CF;
      padding: 2px 8px;
      border-radius: 2px;
      color: #31C2BD;
    }
  }
  .company {
    margin-top: 8px;
    font-size: 12px;
    .companyLogo {
      vertical-align: top;
      width: 36px;
      height: 36px;
    }
    .companyAds {
      margin-top: 4px;
      width: calc(100% - 50px);
      display: inline-block;
      .company-ad {
        margin-right: 4px;
        padding: 2px 4px;
        background-color: #E9F8FF;
        border-radius: 3px;
        color: #7C97A4;
      }
    }
  }
}
</style>