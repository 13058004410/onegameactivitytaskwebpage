<template>
  <div class="container">
    <div class="head">
      <div><i></i><span>充值教程</span></div>
    </div>
    <img class="w100 title-img" src="../../assets/img/usdt/rechargeTutorial/USDTczjc.png" />
    <img class="w100 mgt30" src="../../assets/img/usdt/rechargeTutorial/1.png" />
    <div class="mgt20 w100 imgs-row">
      <img src="../../assets/img/usdt/rechargeTutorial/2.png">
      <img src="../../assets/img/usdt/rechargeTutorial/3.png">
      <img src="../../assets/img/usdt/rechargeTutorial/4.png">
      <img src="../../assets/img/usdt/rechargeTutorial/5.png">
    </div>
    <div class="mgt20 w100 imgs-row">
      <img src="../../assets/img/usdt/rechargeTutorial/6.png">
      <img src="../../assets/img/usdt/rechargeTutorial/7.png">
      <img src="../../assets/img/usdt/rechargeTutorial/8.png">
      <img src="../../assets/img/usdt/rechargeTutorial/9.png">
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/css/normaliz.scss";
</style>
<style lang="scss" scoped>
.container {
  padding: 0 30px;
  padding-bottom: 50px;
}
.w100 {
  width: 100%;
}
.mgt20 {
  margin-top: 20px;
}
.mgt30 {
  margin-top: 30px;
}
.imgs-row{
  display: flex;
  >img{
    width: 25%;
  }
}
.head {
  height: 98px;
  display: flex;
  > div {
    flex: none;
    display: flex;
    align-items: center;
    > i {
      display: inline-block;
      width: 10px;
      height: 18px;
      background: url("../../assets/img/usdt/fh_icon.png") no-repeat center;
      background-size: cover;
    }
    > span {
      margin-left: 20px;
      font-size: 24px;
      color: #3a414c;
      letter-spacing: 0;
    }
  }
}
.title-img {
  margin-top: 7px;
}
</style>