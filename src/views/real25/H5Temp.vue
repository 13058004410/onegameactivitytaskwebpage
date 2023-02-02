<template>
  <div class="app-view">
    <div class="app-banner">
      <img src="../../assets/img/real25/m/H5banner.jpg" alt />
    </div>
    <div class="box-time vivify fadeInLeft">活动时间：6.1-7.31</div>
    <div class="box-title text-yellow vivify fadeInRight">活动厅方：AG国际厅</div>
    <div class="box-content">
      <div class="box-title vivify fadeIn delay-100">活动内容：</div>
      <div
        class="box-text vivify fadeIn delay-200"
      >活动期间，ONE会员凡存款100以上，即可申请领取25%的红利，单笔最高优惠1000元，24倍流水可提。每位会员每日仅限领取1次此优惠。</div>
      <div class="box-table vivify fadeIn delay-300">
        <table>
          <thead>
            <tr>
              <th>存款金额</th>
              <th>红利率</th>
              <th>单次红利限额</th>
              <th>流水倍数</th>
              <th>次数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>≥100/15usdt</td>
              <td>25%</td>
              <td>1000/144usdt</td>
              <td>24</td>
              <td>每日一次</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="btn-submit vivify fadeIn delay-400" @click="jumpKefuNative"></div>
      <div class="box-tips vivify fadeIn delay-500">注：领取红利之后需完成流水要求方可领取下一次红利；当账户余额不足10元时，自动解锁流水要求。</div>
      <div
        class="box-tips vivify fadeIn delay-600"
        style="margin-top: 4px"
      >例：存款金额=500，红利500*25%=125，流水要求=（500+125）*24=15000</div>
    </div>
    <div class="box-rule">
      <div class="box-rule-text">
        <h4>活动规则</h4>
        <p>1.本活动和彩金红利仅限AG真人视讯，可与洗码共享。</p>
        <p>2.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，ONE体育将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>3.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () { },
  methods: {
    jumpKefuNative () {
      window.location = "nbapp://openServicePage?data={}"
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/normaliz.scss';
</style>
<style lang="scss" scoped>
.app-view {
  margin: 0 auto;
  color: #fff;
  background-color: #000;
  -webkit-tap-height-color: transprent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  img {
    width: 100%;
  }
}
.box-time {
  text-align: center;
  font-size: 16px;
  line-height: 32px;
}
.box-title {
  text-align: center;
  &.text-yellow {
    font-size: 22px;
    color: #fce669;
    line-height: 32px;
  }
}
.box-content {
  padding: 12px 16px 22px;
  .box-text {
    margin-top: 2px;
    font-size: 13px;
    color: #ffffff;
    line-height: 25px;
  }
  .box-table {
    table {
      margin-top: 12px;
      width: 100%;
      text-align: center;
    }
    thead {
      tr {
        height: 40px;
        background-color: #3e1a1a;
        th {
          word-break: keep-all;
          white-space: nowrap;
          font-size: 13px;
          font-weight: normal;
        }
      }
    }
    tbody {
      tr {
        height: 50px;
        font-size: 12px;
        background-color: #290000;
      }
    }
  }
  .btn-submit {
    width: 172px;
    height: 32px;
    margin: 30px auto 20px;
    background: url('../../assets/img/real25/btn-submit.png') no-repeat 0 0;
    background-size: cover;
  }
  .box-tips {
    font-size: 13px;
    color: #d8d8d8;
    line-height: 20px;
  }
}
.box-rule {
  padding: 26px 16px;
  background-color: #290000;
  .box-rule-text {
    margin: 0 auto;
    h4 {
      text-align: center;
      padding-bottom: 24px;
      font-size: 18px;
      font-weight: 700;
    }
    p {
      font-size: 13px;
      color: #dadada;
      line-height: 24px;
    }
  }
}
</style>