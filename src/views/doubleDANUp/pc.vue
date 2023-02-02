<template>
  <div class="main" ref="main">
    <!-- <div class="t1"></div> -->
    <div class="content">
      <div class="t1"></div>
      <div class="t1-item">
        <p><span>活动期间（12月25日-01月03日）</span>ONE体育新老会员完成每日签到即可领取。</p>
      </div>
      <div class="table-title">
        <div>签到天数</div>
        <div>当日累计存款</div>
        <div>签到红利</div>
        <div>流水要求</div>
    </div>
      <table>
        <tbody>
        <tr>
            <td>第1天</td>
            <td>≥500CNY/72USDT</td>
            <td>18CNY/3USDT</td>
            <td>红利3倍水</td>
        </tr>
        <tr>
            <td>第2天</td>
            <td>≥1000CNY/142USDT </td>
            <td>58CNY/8USDT</td>
            <td>红利3倍水</td>
        </tr>
        <tr>
            <td>第3天</td>
            <td>≥1000CNY/142USDT</td>
            <td>58CNY/8USDT</td>
            <td>红利3倍水</td>
        </tr>
        <tr>
            <td>第4天</td>
            <td>≥2000CNY/285USDT</td>
            <td>88CNY/12USDT</td>
            <td>红利3倍水</td>
        </tr>
        <tr>
            <td>第5天</td>
            <td>≥2000CNY/285USDT</td>
            <td>88CNY/12USDT</td>
            <td>红利3倍水</td>
        </tr>
        <tr>
            <td>第6天</td>
            <td>≥2000CNY/285USDT</td>
            <td>88CNY/12USDT</td>
            <td>红利3倍水</td>
        </tr>
        <tr>
            <td>第7天</td>
            <td>≥5000CNY/714USDT</td>
            <td>238CNY/34USDT</td>
            <td>红利3倍水</td>
        </tr>
        <tr>
            <td>第8天</td>
            <td>≥5000CNY/714USDT</td>
            <td>238CNY/34USDT</td>
            <td>红利3倍水</td>
        </tr>
        <tr>
            <td>第9天</td>
            <td>≥5000CNY/714USDT</td>
            <td>238CNY/34USDT</td>
            <td>红利3倍水</td>
        </tr>
        <tr>
            <td>第10天</td>
            <td>≥8888CNY/1270USDT</td>
            <td>388CNY/55USDT</td>
            <td>红利3倍水</td>
        </tr>
        <tr>
            <td colspan="2">完成连续签到10天</td>
            <td>888CNY/126USDT</td>
            <td>红利3倍水</td>
        </tr>
        </tbody>
    </table>
    <div class="example">
      <p>
        注：当日完成签到条件后，联系在线客服领取。过时视为自动放弃。
      </p>
    </div>
      <!-- <div class="btn" @click="openPCHandle('openService')"></div> -->
      <div class="t2"></div>
      <div class="sub">
         <p>1.活动期间（12月25日-1月03日）ONE体育新老会员可根据活动要求完成每日签到存款即可领取每日签到红利，最高<span>388CNY/55USDT</span>。完成连续签到
         <span>10天</span>即可额外领取<span>888CNY/126USDT</span>红利，如会员连续签到中途中断，依然可以参与下一日的签到，但无法领取最终完成10天签到额外红利。例：会员A连续签到3天
         后，第4天没有完成签到条件，那么会员A无法领取第4天的签到奖励，但是会员A依然可以参与第5天和后续的签到，但是无法参与领取最终签到10天的红利了。
         </p>
         <p>2.活动红利需完成<span>3倍流水</span>，限体育场馆。</p>
         <p>3.有效投注额仅计算已结算并产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关、提前兑现，将不计算在有效流水内。</p>
         <p>4.本活动与洗码优惠共享，不与其存送优惠共享。例：会员A当日存款1000CNY，此笔存款参与其他存送类优惠，那么此笔1000CNY存款不计算为签到存款。</p>
         <p>5.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育会员账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
         <p>6.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
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
  background: #E7ECF7 url("../../assets/img/doubleDAN/ssq_banner_pc.jpg") no-repeat;
  background-size: contain;
  padding-top: 600 / $count + rem;
  padding-bottom: 50 / $count + rem;
}
.content {
  background: url("../../assets/img/doubleDAN/nr_bg.png") no-repeat;
  background-size: 100% 100%;
  width: 1300 / $count + rem;
  height: 1984 / $count + rem;
  margin: auto;
  padding: 35 / $count + rem 50 / $count + rem;
}
.t1 {
  background: url("../../assets/img/doubleDAN/hdnr.png") no-repeat;
  background-size: cover;
  width: 194 / $count + rem;
  height: 100 / $count + rem;
  margin:50px auto 30px;
}
.t1-item {
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #444B52;
  letter-spacing: 0;
  text-align: center;
  line-height: 36px;
  font-weight: 500;
  margin: 25px 0;
  // font-weight: 600;
  span {
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #F0B50A;
    letter-spacing: 0;
    text-align: center;
    line-height: 36px;
    font-weight: 600;
  }
}
 .table-title {
        width:1100/$count + rem ;
        height: 68/$count + rem;
        background: #7984A8;
        font-family: PingFangSC-Semibold;
        font-size: 20px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 600;
        border-radius: 8px 8px 0 0;
        margin: 15px auto 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        // >div{flex: 1;}
        // >div:nth-child(1){width:300/$count + rem ;}
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
        font-family: PingFangSC-Medium;
        color: #63676C;
        letter-spacing: 1px;
        text-align: center;
        font-weight: 500;
      }
    }
    .example{
      padding: 20/$count + rem 10/$count + rem;
      p{
        font-family: PingFangSC-Medium;
        font-size: 20px;
        color: #F0B50A;
        letter-spacing: 0;
        line-height: 36px;
        font-weight: 500;
      }
    }
// .btn {
//   width: 216/$count + rem;
//   height: 64/$count + rem;
//   background: url('../../assets/img/continuation/lq_btn_pc.png') no-repeat;
//   background-size: cover;
//   margin: 50px auto;
// }
.t2 {
  background: url("../../assets/img/doubleDAN/hdgz.png") no-repeat;
  background-size: cover;
  width: 194 / $count + rem;
  height: 100 / $count + rem;
  margin: auto;
  margin-top: 60 / $count + rem;
}
.sub {
  padding: 0 50px;
  margin-top: 30 / $count + rem;
  font-size: 20 / $count + rem;
  font-family: PingFangSC-Medium;
  color: #444B52;
  letter-spacing: 0;
  line-height: 36px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 36 / $count + rem;
  >p{
    padding: 5px 0px;
  }
  span {
    color: #DDAA15;
    letter-spacing: 0;
    line-height: 36px;
    font-weight: 500;
  }
}
</style>