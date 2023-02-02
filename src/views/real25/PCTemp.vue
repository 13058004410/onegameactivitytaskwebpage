<template>
  <div class="app-view" ref="main">
    <div class="app-banner">
      <img src="../../assets/img/real25/pcbanner.jpg" alt />
    </div>
    <div class="box-time">活动时间：6.1-7.31</div>
    <div class="box-title text-yellow">活动厅方：AG国际厅</div>
    <div class="box-content">
      <div class="text-yellow">活动内容：</div>
      <div class="box-text">活动期间，ONE会员凡存款100以上，即可申请领取25%的红利，单笔最高优惠1000元，24倍流水可提。每位会员每日仅限领取1次此优惠。</div>
      <div class="box-table">
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
      <div class="btn-submit" @click="openPCHandle('openService')"></div>
      <div
        class="box-tips"
      >注：领取红利之后需完成流水要求方可领取下一次红利；当账户余额不足10元时，自动解锁流水要求。例：存款金额=500，红利500*25%=125，流水要求=（500+125）*24=15000</div>
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
  mounted () {
    const that = this
    setTimeout(() => {
      let info = {
        message: "reloadPageSize",
        height: that.$refs.main.clientHeight,
      }
      window.parent.postMessage(info, "*")
    }, 0)
  },
  methods: {
    openPCHandle (msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      }
      window.parent.postMessage(info, "*")
    }
  }
}

</script>

<style lang="scss">
@import '@/assets/css/normaliz.scss';
</style>
<style lang="scss" scoped>
.app-view {
  min-width: 1200px;
  margin: 0 auto;
  color: #fff;
  text-align: center;
  background-color: #000;
  img {
    width: 100%;
  }
}
.text-yellow {
  font-size: 32px;
  color: #fdee80;
}
.box-time {
  font-size: 24px;
}
.box-title {
  margin-top: 34px;
}
.box-content {
  width: 1000px;
  margin: 48px auto 0;
  padding: 40px 0 48px;
  border-top: 1px solid #333;
  .box-text {
    margin-top: 20px;
    font-size: 24px;
    color: #ffffff;
    text-align: center;
    line-height: 32px;
    font-weight: 600;
  }
  .box-table {
    table {
      margin-top: 40px;
      width: 100%;
      line-height: 50px;
    }
    thead {
      tr {
        background-color: #3e1a1a;
        th {
          font-weight: normal;
        }
      }
    }
    tbody {
      tr {
        background-color: #290000;
      }
    }
  }
  .btn-submit {
    width: 287px;
    height: 56px;
    margin: 60px auto 0;
    background: url('../../assets/img/real25/btn-submit.png') no-repeat 0 0;
    background-size: cover;
  }
  .box-tips {
    margin-top: 30px;
    font-size: 18px;
    color: #ffffff;
    line-height: 31px;
  }
}
.box-rule {
  text-align: left;
  background-color: #290000;
  .box-rule-text {
    margin: 0 auto;
    width: 1000px;
    padding: 38px 0;
    h4 {
      padding-bottom: 16px;
      font-size: 24px;
    }
    p {
      font-size: 18px;
      color: #dadada;
      line-height: 36px;
    }
  }
}
</style>