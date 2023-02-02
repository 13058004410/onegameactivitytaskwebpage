<template>
  <div class="main" ref="main">
    <!-- <div class="t1"></div> -->
    <div class="content">
      <div class="t1"></div>
      <div class="t1-item">
        <p>ONE体育新老会员每周可参与一次周存送活动，每月可领取彩金最高<span>2752CNY/392USDT</span>!</p>
      </div>
      <div class="table-title">
        <div>单笔存款</div>
        <div>红利</div>
        <div>流水要求</div>
    </div>
      <table>
        <tbody>
        <tr>
            <td>≥500CNY/72USDT
            </td>
            <td>≥68CNY/10USDT
               
            </td>
            <td>(本金+彩金)*2倍
            </td>
        </tr>
        <tr>
            <td>≥2000CNY/286USDT
            </td>
            <td>≥188CNY/27USDT
            </td>
            <td>(本金+彩金)*2倍
            </td>
        </tr>
        <tr>
            <td>≥5000CNY/715USDT
            </td>
            <td>≥388CNY/55USDT
            </td>
            <td>(本金+彩金)*2倍
            </td>
        </tr>
        <tr>
            <td>≥10000CNY/1429USDT
            </td>
            <td>≥688CNY/98USDT
            </td>
            <td>(本金+彩金)*2倍
            </td>
        </tr>
        </tbody>
       
    </table>
      <div class="btn" @click="openPCHandle('openService')"></div>
      <div class="t2"></div>
      <div class="sub">
        <p>1.上周体育有效投注<span>≥5000CNY/715USDT</span>且不包括任何优惠红利投注产生的有效投注。</p>
        <p>2.例如：第一周周存送（彩金+本金）<span>*2</span>的投注流水不视为本周“有效投注流水<span>≥5000CNY/715USDT</span>”的申请条件。</p>
        <p>3.有效投注额仅计算已结算并产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关、提前兑现，将不计算在有效流水内。</p>
        <p>4.彩金申请：请在充值后投注前，联系在线客服进行申请红利。</p>
        <p>5.申请资格：此活动新老会员每周可申请一次，仅限存款后投注前申请，优惠彩金未到账前请勿进行投注。上周体育有效投注流水不包括任何优惠红利投注产生的流水。此活动红利不得与其它优惠同时使用。</p>
        <p>6.本活动与洗码优惠共享，不与其他任意优惠共享。</p>
        <p>7.活动红利需完成（本金+彩金）<span>*2倍</span>的有效流水，仅限体育厅。</p>
        <p>8.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>9. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
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
html {
  font-size: 4.995222222vw;

  @media screen and (max-width: 1200px) {
    font-size: 59.9422423px;
    body {
      min-width: 1200px;
      margin: 0 auto;
    }
  }
}
html,
body {
  height: auto;
}
</style>
<style lang="scss" scoped>
$count: 79.9422423;
* {
  box-sizing: border-box;
}
.main {
  background: #E7ECF7 url("../../assets/img/continuation/BG_PC.jpg") no-repeat;
  background-size: contain;
  padding-top: 600 / $count + rem;
  padding-bottom: 50 / $count + rem;
}
.content {
  background: url("../../assets/img/continuation/hdnr_bg_pc.png") no-repeat;
  background-size: cover;
  width: 1220 / $count + rem;
  height: 1410 / $count + rem;
  margin: auto;
  padding: 35 / $count + rem 50 / $count + rem;
}
.t1 {
  background: url("../../assets/img/continuation/hdnr_tit_pc.png") no-repeat;
  background-size: cover;
  width: 194 / $count + rem;
  height: 100 / $count + rem;
  margin:0 auto 50px;
}
.t1-item {
  font-size: 20px;
  color: #444B52;
  text-align: center;
  margin: 25px 0;
  // font-weight: 600;
  span {
    color: #F0B50A ;
  }
}
 .table-title {
        width:1100/$count + rem ;
        height: 68/$count + rem;
        background: #7984A8;
        color: #FFFFFF;
        font-size: 20px;
        border-radius: 8px 8px 0 0;
        margin: 15px auto 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
 table {
        width: 1100/$count + rem;
        height: 275/$count + rem;
        margin: 0 auto;
    td {
        background: #F5F9FA ;
        border: 1px solid #7984A8;
        width: 380/$count + rem;
        height: 60/$count + rem;
        text-align: center;
        font-size: 20/$count + rem;
        color: #63676c;
      }
    }
.btn {
  width: 216/$count + rem;
  height: 64/$count + rem;
  background: url('../../assets/img/continuation/lq_btn_pc.png') no-repeat;
  background-size: cover;
  margin: 50px auto;
}
.t2 {
  background: url("../../assets/img/continuation/hdgz_tit_pc.png") no-repeat;
  background-size: cover;
  width: 194 / $count + rem;
  height: 100 / $count + rem;
  margin: auto;
  margin-top: 30 / $count + rem;
}
.sub {
  margin-top: 30 / $count + rem;
  font-size: 20 / $count + rem;
  color: #444b52;
  letter-spacing: 0;
  line-height: 36 / $count + rem;
  span {
    color: #DDAA15;
  }
}
</style>