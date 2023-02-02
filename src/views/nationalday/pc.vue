<template>
  <div class="app-view" ref="main">
    <div class="box-banner">
      <img src="../../assets/img/nationalday/pcbanner.jpg" alt="" />
    </div>
    <div class="box-info">
        <div class="box-title">
          <div class="title-info">
            <img src="../../assets/img/nationalday/toplpcl.png" alt="">
            <p>《邀请献礼》</p>
            <img src="../../assets/img/nationalday/toprpcr.png" alt="">
          </div>
          <p>活动时间：2021-10-01-2021-10-07</p>
        </div>
        <div class="tabs">
          <div @click="toggleTab('present1pc')" :class="currentTab == 'present1pc'? 'active1':'bg-image1'">
          </div>
          <div @click="toggleTab('present2pc')" :class="currentTab == 'present2pc'? 'active2':'bg-image2'">
          </div>
          <div @click="toggleTab('present3pc')" :class="currentTab == 'present3pc'? 'active3':'bg-image3'">
          </div>
        </div>
    </div>
    <div class="tab-item">
      <present2pc :is="currentTab" keep-alive></present2pc>
    </div>
  </div>
</template> 

<script>
import present1pc from '../../component/Present/Presentpc1.vue'
import present2pc from '../../component/Present/Presentpc2.vue'
import present3pc from '../../component/Present/Presentpc3.vue'
export default {
data () {
  return {
    currentTab:'present1pc', // 当前选中de献礼
    currentIndex: 0
  }
},
components: {
  present1pc,
  present2pc,
  present3pc
  
},
 // 取消双滚动条
  mounted () {
    const that = this
    setInterval(() => {
      let iframeH = Math.max(that.$refs.main.clientHeight, that.$refs.main.scrollHeight)
      that.openPCHandle("reloadPageSize", {
        height: iframeH,
      })
    }, 0)
  },
methods: {
  toggleTab(tab) {
   this.currentTab = tab; // tab 为当前触发标签页的组件名
  },
  openPCHandle (msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      }
      window.parent.postMessage(info, "*")
    },
 }
}
</script>
<style lang="scss">
@import "@/assets/css/normaliz.scss";
</style>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.app-view {
    min-width: 1200px;
    background: #fd341a;
    font-size: 18px;
    color: #FFFFFF;
    img {
      width: 100%;
    }
    .box-info {
      width: 100%;
      .box-title {
        width: 1000px;
        margin: 0 auto;
        img {
          width: 311px;
          height: 32px;
        }
        p {
          font-size: 20px;
          margin: 20px 0;
          text-align: center;
        }
        .title-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 32px;
        }
        }
      }
      .tabs {
        width: 1000px;
        height: 72px;
        display: flex;
        justify-content: space-around;
        margin: 60px auto;
        div {
          width: 248px;
          height: 78px;
        }
      }
    }
  .bg-image1{
    background:url('../../assets/img/nationalday/pcxl1_no.png') no-repeat;
    background-size: cover
  }
  .active1 {
    background:url('../../assets/img/nationalday/pcxl1_xz.png') no-repeat;
    background-size: cover
  }
  .bg-image2{
    background:url('../../assets/img/nationalday/pcxl2_no.png') no-repeat;
    background-size: cover
  }
  .active2 {
    background:url('../../assets/img/nationalday/pcxl2_xz.png') no-repeat;
    background-size: cover
  }
  .bg-image3{
     background:url('../../assets/img/nationalday/pcxl3_no.png') no-repeat;
    background-size: cover
  }
  .active3 {
    background:url('../../assets/img/nationalday/pcxl3_xz.png') no-repeat;
    background-size: cover
  }
  }
</style>