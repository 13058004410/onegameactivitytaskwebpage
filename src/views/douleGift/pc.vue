<template>
  <div class="main" ref="main">
    <!-- <div class="t1"></div> -->
    <div class="content">
      <div class="t1"></div>
      <div class="table-title">
        <div>单笔存款</div>
        <div>单次礼金</div>
        <div>总计礼金</div>
        <div>流水要求</div>
      </div>
      <table>
        <tbody>
          <tr>
            <td>5000CNY/720USDT</td>
            <td>500CNY/72USDT</td>
            <td>5000CNY/720USDT</td>
            <td>1倍水</td>
          </tr>
        </tbody>
      </table>
    <div class="t2"></div>
    <div class="sub">
       <p>
        1.虎年活动期间（1月31日-2月28日）所有新老会员单笔存款满足活动条件即可参与此活动，联系在线客服领取礼金；<span>存5000CNY/720USDT送5000CNY/720USDT</span>
        ,礼金分十日领取，参与活动的存款当日即可领取第一次礼金，领取下一次礼金前须存款≥500CNY/72USDT，投注≥3笔体育注单并完成≥5000CNY/720USDT的体育有效流水。
      <p>2.奖金需完成<span>1倍流水</span>即可，不限场馆。</p>
      <p>3.本活动每位会员限参与一次。奖金日未联系在线客服领取奖金，将视为逾期无效自动放弃当笔礼金。每次礼金日的领取条件为独立计算，若中断领取，在下个礼金日之前完成该次条件即可继续领取。领取下一次礼金时需满足的条件：上一笔礼金日后当笔礼金日前满足存款≥500CNY/72USDT，投注≥3笔体育注单并完成≥5000CNY/720USDT的体育有效流水。</p>
      <p>4.本活动与洗码优惠共享，不与其他任意活动共享存款条件与投注流水。</p>
      <p>5.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号。如有会员有任何违规行为，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
      <p>6.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  // 取消双滚动条
  mounted() {
    const that = this;
    setInterval(() => {
      let iframeH = Math.max(
        that.$refs.main.clientHeight,
        that.$refs.main.scrollHeight
      );
      that.openPCHandle("reloadPageSize", {
        height: iframeH,
      });
    }, 0);
  },
  methods: {
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      };
      window.parent.postMessage(info, "*");
    },
  },
};
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
  background: #f7f0e5 url("../../assets/img/newYearTiger/hnlj_banner_pc.jpg")
    no-repeat;
  background-size: contain;
  padding-top: 600 / $count + rem;
  padding-bottom: 50 / $count + rem;
}
.content {
  background: url("../../assets/img/newYearTiger/nr_bg.png") no-repeat;
  background-size: cover;
  width: 1300 / $count + rem;
  height: 1079/ $count + rem;
  margin: auto;
  padding: 35 / $count + rem 50 / $count + rem;
}
.t1 {
  background: url("../../assets/img/newYearTiger/hdnr.png") no-repeat;
  background-size: cover;
  width: 194 / $count + rem;
  height: 100 / $count + rem;
  margin: 0 auto 50px;
}

.table-title {
  width: 1100 / $count + rem;
  height: 68 / $count + rem;
  background: #caaa8e;
  color: #ffffff;
  font-size: 20px;
  border-radius: 8px 8px 0 0;
  margin: 15 / $count + rem auto 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .table-title1 {
    text-align: center;
    p {
      color: #ffffff;
    }
  }
}
table {
  width: 1100 / $count + rem;
  height: 76 / $count + rem;
  margin: 0 auto;
  td {
    border: 1px solid #caaa8e;
    width: 280 / $count + rem;
    height: 60 / $count + rem;
    text-align: center;
    font-size: 20 / $count + rem;
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
  margin-left: 50 / $count + rem;
  margin-top: 20 / $count + rem;
  font-size: 20 / $count + rem;
  color: #444b52;
  letter-spacing: 0;
  line-height: 36 / $count + rem;
  span {
    color: #e42121;
  }
  p {
      
    margin-top: 5 / $count + rem;
  }
}
</style>