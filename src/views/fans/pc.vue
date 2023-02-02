<template>
  <div class="container" ref="main">
    <div class="bg"></div>
    <div class="txt">
      <div>
        <p class="title">活动规则</p>
        <div class="line"></div>
      </div>
      <div class="main">
        <div class="rule">
          <p>
            ONE体育会员投注活动期内，当周累计有效流水或负盈利达到指定数量，即可获得随机
            <span class="red">最高666元</span>
            铁粉激励金，该彩金仅需3倍流水即可提款。
          </p>
          <p>周计算有效时间为：北京时间周一 00:00:00 ~ 周日 23:59:59</p>
          <p>网站每周一拉去数据，于当天下午两点前派发。</p>
        </div>
        <div class="table">
          <div class="head">
            <div>奖励等级</div>
            <div>当周有效流水</div>
            <div>当周负盈利</div>
            <div>铁粉奖励金</div>
            <div>流水需求</div>
          </div>
          <div class="body">
            <div class="row">
              <div>VIP1</div>
              <div>3000</div>
              <div>1000</div>
              <div>36</div>
              <div>3倍</div>
            </div>
            <div class="row">
              <div>VIP2</div>
              <div>6000</div>
              <div>2000</div>
              <div>66</div>
              <div>3倍</div>
            </div>
            <div class="row">
              <div>VIP3</div>
              <div>10000</div>
              <div>3000</div>
              <div>166</div>
              <div>3倍</div>
            </div>
            <div class="row">
              <div>VIP4</div>
              <div>15000</div>
              <div>5000</div>
              <div>266</div>
              <div>3倍</div>
            </div>
            <div class="row">
              <div>VIP5</div>
              <div>25000</div>
              <div>8000</div>
              <div>366</div>
              <div>3倍</div>
            </div>
            <div class="row">
              <div>VIP6</div>
              <div>30000</div>
              <div>10000</div>
              <div>566</div>
              <div>3倍</div>
            </div>
            <div class="row">
              <div>VIP7</div>
              <div>35000</div>
              <div>12000</div>
              <div>666</div>
              <div>3倍</div>
            </div>
          </div>
        </div>
        <div>
          <p class="title">活动内容</p>
          <div class="line"></div>
        </div>
        <div class="activity-txt">
          <p>
            1.
            会员需绑定手机号码后再指定期间期间累计负盈利≥1000或以上即可获得参与资格。
          </p>
          <p>
            2.
            有效流水仅计算产生输赢的结果注单，任何走盘，取消赛事，对冲，赔率小于1.5的注单、连串过关、提前兑现奖不计算再有效流水内。
          </p>
          <p>
            3.
            以赛事当日背景时间下午16:00后系统等级为准（会员无需申请），满足申请条件的会员，系统会在48小时内进行派发，请注意查收。
          </p>
          <p>
            4. 本活动与【返水优惠】共享，<span class="red"
              >与其他优惠活动不共享</span
            >。
          </p>
          <p>
            5.
            同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号，如有违反会员，我们将保留无限期审核扣回红利及产生的利润的权利。
          </p>
          <p>
            6.
            会员参加任何活动规则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权ONE体育所有。
          </p>
        </div>
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
html,
body {
  height: auto;
}
</style>
<style lang="scss" scoped>
$count: 49.9712 * 2;
.bg {
  height: 840 / $count + rem;
  background-image: url("../../assets/img/fans/bg.jpg");
  background-size: cover;
}
.txt {
  margin-top: -17 / $count + rem;
  position: relative;
  background-color: #dfdfdf;
  > div {
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
      z-index: 10;
      position: relative;
    }
  }
  .rule {
    width: 1200 / $count + rem;
    font-size: 16 / $count + rem;
    color: #606266;
    letter-spacing: 0;
    line-height: 32 / $count + rem;
    margin: auto;
    margin-top: 21 / $count + rem;
  }
  .table {
    width: 1200 / $count + rem;
    margin: auto;
    background: #f6f8fa;
    border-radius: 12 / $count + rem;
    overflow: hidden;
    margin-top: 13 / $count + rem;
    margin-bottom: 29 / $count + rem;
    .head {
      display: flex;
      background: #f0efef;
      font-size: 14 / $count + rem;
      color: #606266;
      text-align: center;
      height: 41 / $count + rem;
      line-height: 41 / $count + rem;
      > div {
        flex: 1;
      }
    }
    .body {
      .row {
        height: 41 / $count + rem;
        display: flex;
        line-height: 41 / $count + rem;
        font-size: 14 / $count + rem;
        color: #606266;
        text-align: center;
        line-height: 41 / $count + rem;
        border-bottom: 1 / $count + rem solid rgba($color: #000000, $alpha: 0.1);
        > div {
          flex: 1;
          text-align: center;
        }
      }
      .row:last-child {
        border: none;
      }
    }
  }
  .activity-txt {
    width: 1200 / $count + rem;
    margin: auto;
    font-size: 16 / $count + rem;
    color: #606266;
    letter-spacing: 0;
    line-height: 36 / $count + rem;
    margin-top: 19 / $count + rem;
    padding-bottom: 50 / $count + rem;
  }
}
.red {
  font-size: 16 / $count + rem;
  color: #fe3750;
  letter-spacing: 0;
  line-height: 32 / $count + rem;
}
</style>