<template>
  <div class="app-view">
    <div class="box-banner"></div>
    <div class="box-info">
      <div class="info-title">
        <p>《邀请献礼》</p>
        <p>活动时间：2021-10-01-2021-10-07</p>
      </div>
      <div class="tabs">
        <div @click="toggleTab('present1')" :class="currentTab == 'present1'? 'active1':'bg-image1'">
          <!-- <img src="../../assets/img/nationalday/H5hd1_xz.png" alt=""> -->
        </div>
        <div @click="toggleTab('present2')" :class="currentTab == 'present2'? 'active2':'bg-image2'">
          <!-- <img src="../../assets/img/nationalday/H5hd2_no.png" alt=""> -->
        </div>
        <div @click="toggleTab('present3')" :class="currentTab == 'present3'? 'active3':'bg-image3'">
          <!-- <img src="../../assets/img/nationalday/H5hd3_no.png" alt=""> -->
        </div>
      </div>
      <div class="tab-item">
          <present1 :is="currentTab" keep-alive></present1>
        </div>
      </div>
  </div>
</template> 

<script>
import present1 from '../../component/Present/Present1'
import present2 from '../../component/Present/Present2'
import present3 from '../../component/Present/Present3'
export default {
data () {
  return {
    currentTab:'present1', // 当前选中de献礼
    currentIndex: 0
  }
},
components: {
  present1,
  present2,
  present3
},
methods: {
  toggleTab(tab) {
   this.currentTab = tab; // tab 为当前触发标签页的组件名
  }
 }
}
</script>
<style lang="scss">
@import "@/assets/css/screen750.scss";
@import "@/assets/css/normaliz.scss";
</style>
<style lang="scss" scoped>
.app-view {
  .box-banner {
    width: 100%;
    height: 400 / 16 + rem;
    background: url('../../assets/img/nationalday/H5banner.jpg') no-repeat;
    background-size: cover;
  }  
  .box-info {
    width: 100%;
    background-color: #FD341A;
    .info-title {
      width: 100%;
      font-size: 13 / 16 + rem;
      color: #FFFFFF;
      text-align: center;
      padding-top: 20px;
        p:first-child {
          font-size: 20 /16 + rem;
          padding-bottom: 5px;
        }
    }
  } 
  .tabs{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 45/ 16 + rem;
    margin: 18px auto;
     div {
      width: 110 / 16 + rem;
      height: 100%; 
      img {
        width: 100%;
        height: 100%;
      }
      }
  }
  .bg-image1{
    // width: 80px;
    // height: 30px;
    background:url('../../assets/img/nationalday/H5hd1_no.png') no-repeat;
    background-size: cover
  }
  .active1 {
    // width: 80px;
    // height: 30px;
    background:url('../../assets/img/nationalday/H5hd1_xz.png') no-repeat;
    background-size: cover
  }
  .bg-image2{
    // width: 80px;
    // height: 30px;
    background:url('../../assets/img/nationalday/H5hd2_no.png') no-repeat;
    background-size: cover
  }
  .active2 {
    // width: 80px;
    // height: 30px;
    background:url('../../assets/img/nationalday/H5hd2_xz.png') no-repeat;
    background-size: cover
  }
  .bg-image3{
    // width: 80px;
    // height: 30px;
     background:url('../../assets/img/nationalday/H5hd3_no.png') no-repeat;
    background-size: cover
  }
  .active3 {
    // width: 80px;
    // height: 30px;
    background:url('../../assets/img/nationalday/H5hd3_xz.png') no-repeat;
    background-size: cover
  }
}
</style>