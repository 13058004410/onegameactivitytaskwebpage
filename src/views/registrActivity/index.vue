<template>
  <div ref="main">
    <div class="head-img"></div>
    <div class="txt">
      <div>
        <p class="title">活动规则</p>
        <div class="line"></div>
      </div>
      <div>
        <p>
          1.<span></span>注册后完善真实信息，即可获取礼金 <b>20元</b> 或<b>
            3USDT</b
          >。
        </p>
        <p>
          2.<span></span>完成一倍有效投注额即可提现，上限 <b>180元</b> 或
          <b>25USDT</b>
          ，最低提款额为 <b>100元</b> 或 <b>15USDT</b>。
        </p>
        <p>
          3.<span
          ></span
          >此优惠活动与（洗码）共享，与其他活动不共享，最终解释权归ONE体育所有。
        </p>
        <p>
          4.<span
          ></span
          >同一手机号、姓名、银行卡、IP仅限参加此活动一次，如有违规，将保留扣回红利及盈利利润的权利。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    let info = {
      message: "reloadPageSize",
      height: this.$refs.main.clientHeight,
    };
    window.parent.postMessage(info, "*");
  },
};
</script>
<style lang="scss">
@import "@/assets/css/normaliz.scss";
html {
  font-size: 4.2666666667vw;

  @media screen and (max-width: 1200px) {
    font-size: 51.2px;
    body {
      min-width: 1200px;
      margin: 0 auto;
    }
  }
}
html,body{
  height: auto;
}
</style>
<style lang="scss" scoped>
$count: 49.9712 * 2;
.head-img {
  height: 846 / $count + rem;
  background: url("../../assets/img/registrActivity/free20_bg.jpg") center
    no-repeat;
  background-size: cover;
  background-color: #ebeae5;
}
.txt {
  background: #ebeae5;
  margin-top: -20 / $count + rem;
  padding-bottom: 100 / $count + rem;
  > div {
    width: 1200px;
    margin: auto;

    .title {
      font-family: PingFangSC-Semibold;
      font-size: 44 / $count + rem;
      color: #303133;
      letter-spacing: 0;
      text-align: center;
      margin-bottom: 8 / $count + rem;
    }
    .line {
      width: 39 / $count + rem;
      height: 4 / $count + rem;
      background: #00b960;
      border-radius: 10 / $count + rem;
      margin: auto;
    }
  }
  > :nth-child(2) {
    width: 1200px;
    margin: auto;
    height: 240 / $count + rem;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 16 / $count + rem;
    margin-top: 47 / $count + rem;
    padding: 36 / $count + rem 47 / $count + rem;

    font-family: PingFangSC-Regular;
    font-size: 20 / $count + rem;
    color: #606266;
    letter-spacing: 0;
    line-height: 60 / $count + rem;
    white-space: pre-wrap;
    > p {
      > span {
        margin-right: 16 / $count + rem;
      }
      > b {
        color: #fd2f4a;
      }
    }
  }
}
</style>