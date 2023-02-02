<template>
  <div class="main" ref="main">
    <!-- <div class="t1"></div> -->
    <div class="content">
      <div class="t1"></div>
      <div class="table-title">
        <div>周累计有效投注额</div>
        <div>投注礼金</div>
        <div>流水要求</div>
      </div>
      <table>
        <tbody>
        <tr>
            <td>≥200000CNY
            </td>
            <td>58USDT
            </td>
            <td>1倍
            </td>
        </tr>
        </tbody>
      </table>
      <p class="tabp">注：USDT有效投注额按1USDT=7CNY自动换算。</p>
      <div class="t1s"></div>
      <div class="table-title">
          <div>小金库首次提款</div>
          <div>提款礼金</div>
          <div>流水要求</div>
      </div>
      <table>
        <tbody>
          <tr>
              <td>≥1000USDT
              </td>
              <td>58USDT
              </td>
              <td>3倍
              </td>
          </tr>
          <tr>
              <td>≥3000USDT
              </td>
              <td>128USDT
              </td>
              <td>3倍
              </td>
          </tr>
          <tr>
              <td>≥5000USDT
              </td>
              <td>238USDT
              </td>
              <td>3倍
              </td>
          </tr>
          </tbody>
      </table>
      <p class="tabp">注：仅限首次使用小金库提款用户</p>
      <div class="t2"></div>
      <div class="sub">
        <p>1. 活动期间自然周满足活动条件的会员，ONE体育赠送<span>58USDT</span>至您的ONE体育USDT账户，无需申请，次周一系统自动赠送。</p>
        <p>2. ONE体育新老会员凡首次使用小金库进行提款的满足首次提款要求，即可联系在线客服申请提款礼金。注：仅限首次使用小金库提款。</p>
        <p>3. 投注礼金需完成<span>1倍流水</span>，提款礼金需完成<span>3倍流水</span>，不限场馆。</p>
        <p>4. 本活动与洗码优惠共享，与其他任意活动共享投注流水。</p>
        <p>5. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号。如有会员有任何违规行为，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>6. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
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
  background: #FCF0EA url("../../assets/img/usdtgift/BG_PC.jpg") no-repeat;
  background-size: contain;
  padding-top: 520 / $count + rem;
  padding-bottom: 50 / $count + rem;
}
.content {
  background: url("../../assets/img/usdtgift/hdnr_bg_pc.png") no-repeat;
  background-size: cover;
  width: 1300 / $count + rem;
  height: 1546 / $count + rem;
  margin: auto;
  padding: 35 / $count + rem 50 / $count + rem;
  .tabp{
    padding-left: (50/$count) + rem;
    padding-top: 8px;
    font-size: 20px;
    color: #90672D;
    letter-spacing: 0;
    line-height: 36px;
    font-weight: 500;
  }
}
.t1 {
  background: url("../../assets/img/usdtgift/hdnr_tit_pc.png") no-repeat;
  background-size: cover;
  width: 214 / $count + rem;
  height: 110 / $count + rem;
  margin:70px auto 50px;

}
.t1s {
  background: url("../../assets/img/usdtgift/hd2_H5.png") no-repeat;
  background-size: cover;
  width: 214 / $count + rem;
  height: 110 / $count + rem;
  margin:70px auto 50px;

}
 .table-title {
        width:1100/$count + rem ;
        height: 68/$count + rem;
        background: #D0A881;
        color: #FFFFFF;
        font-size: 20px;
        border-radius: 8px 8px 0 0;
        margin: 15px auto 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        >div{
          flex: 1;
          text-align: center;
        }
    }
 table {
        width: 1100/$count + rem;
        border-radius: 8px;
        // height: 275/$count + rem;
        margin: 0 auto;
    td {
        background: #F5F9FA ;
        border: 1px solid #CBA275;
        width: 380/$count + rem;
        height: 73/$count + rem;
        text-align: center;
        font-size: 20/$count + rem;
        color: #63676C;
        letter-spacing: 1px;
        text-align: center;
        font-weight: 500;
      }
    }
.btn {
  width: 216/$count + rem;
  height: 64/$count + rem;
  background: url('../../assets/img/usdtgift/lq_btn_pc.png') no-repeat;
  background-size: cover;
  margin: 50px auto;
}
.t2 {
  background: url("../../assets/img/usdtgift/hdgz_tit_pc.png") no-repeat;
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
  p{
  padding-top: 5px;
  }
  span {
    color: #90672d;
  }
}
</style>