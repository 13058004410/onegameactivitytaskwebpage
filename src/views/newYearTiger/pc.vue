<template>
  <div class="main" ref="main">
    <!-- <div class="t1"></div> -->
    <div class="content">
      <div class="t1"></div>
      <div class="t1-item">
        <p>活动1：虎年体育红包</p>
      </div>
      <div class="table-title">
      <div class="table-title1">
        <p>体育周累计有效流水</p>
      </div>
      <div>红包</div>
      <div>流水要求</div>
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              ≥5000CNY/720USDT
            </td>
            <td>
              ≥88CNY /12USDT
            </td>
            <td>1倍水</td>
          </tr>
          <tr>
            <td>
              ≥50000CNY/7200USDT
            </td>
            <td>
              ≥588CNY/84USDT
            </td>
            <td>1倍水</td>
          </tr>
          <tr>
            <td>
              ≥200000CNY/28600USDT
            </td>
            <td>
              1288CNY/184USDT
            </td>
            <td>1倍水</td>
          </tr>
        </tbody>
      </table>
      <div class="t1-item">
        <p>活动2：虎年真人红包</p>
      </div>
       <div class="table-title">
      <div class="table-title1">
        <p>真人周累计有效流水</p>
      </div>
      <div>红包</div>
      <div>流水要求</div>
      </div>
      <table>
        <tbody>
          <tr>
            <td>≥30000CNY/4285USDT</td>
            <td>88CNY/12USDT</td>
            <td>1倍水</td>
          </tr>
          <tr>
            <td>≥300000CNY/42857USDT</td>
            <td>588CNY/84USDT</td>
            <td>1倍水</td>
          </tr>
          <tr>
            <td>≥800000CNY/112585USDT</td>
            <td>1288CNY/184USDT</td>
            <td>1倍水</td>
          </tr>
        </tbody>
      </table>
      <div class="t2"></div>
      <div class="sub">
        <p>1.虎年活动期间（1月31日-2月27日）所有新老会员满足活动条件（自然周满足相应场馆有效流水）即可联系在线客服领虎年红包。注：捕鱼类游戏流水不计算为真人有效流水。</p>
        <p>2.相应场馆红包需完成对应场馆<span>1倍流水</span>即可。</p>
        <p>3.本活动与洗码优惠共享，不与其他任意活动共享投注流水。</p>
        <p>4.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号。如有会员有任何违规行为，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>5.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
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
  background: #F7F0E5 url("../../assets/img/newYearTiger/hnhb_banner_pc.jpg") no-repeat;
  background-size: contain;
  padding-top: 600 / $count + rem;
  padding-bottom: 50 / $count + rem;
}
.content {
  background: url("../../assets/img/newYearTiger/nr_bg1.png") no-repeat;
  background-size: cover;
  width: 1350 / $count + rem;
  height: 1530 / $count + rem;
  margin: auto;
  padding: 35 / $count + rem 50 / $count + rem;
}
.t1 {
  background: url("../../assets/img/newYearTiger/hdnr.png") no-repeat;
  background-size: cover;
  width: 194 / $count + rem;
  height: 100 / $count + rem;
  margin:0 auto 50px;
}
.t1-item {
  font-size: 32 /$count + rem;
  color: #A54E49;
  letter-spacing: 0;
  font-weight: 700;
  margin-left: 75/$count + rem;
  margin-top: 20/$count + rem;
  }
 .table-title {
        width:1100/$count + rem ;
        height: 68/$count + rem;
        background: #caaa8e;
        color: #ffffff;
        font-size: 20px;
        border-radius: 8px 8px 0 0;
        margin: 15/$count + rem auto 0;
        display: flex;
        align-items: center;
         div {
        flex: 1;
        text-align: center;
      }
        .table-title1 {
        text-align: center;
        p {
          color: #ffffff;
        }
  }
    }
 table {
        width: 1100/$count + rem;
        height: 275/$count + rem;
        margin: 0 auto;
    td {
        border: 1px solid #CAAA8E;
        width: 380/$count + rem;
        height: 60/$count + rem;
        text-align: center;
        font-size: 20/$count + rem;
        color: #63676c;
      }
    }
.t2 {
  background: url("../../assets/img/newYearTiger/hdgz.png") no-repeat;
  background-size: cover;
  width: 194 / $count + rem;
  height: 100 / $count + rem;
  margin: auto;
  margin-top: 30 / $count + rem;
}
.sub {
  margin-left: 75/$count + rem;
  margin-top: 20/$count + rem;
  font-size: 20 / $count + rem;
  color: #444b52;
  letter-spacing: 0;
  line-height: 36 / $count + rem;
  span {
    color: #E42121;
  }
  p {
    margin-top: 5/$count + rem;
  }
}
</style>