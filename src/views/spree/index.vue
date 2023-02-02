<template>
  <div class="container" ref="main">
    <div class="img">
      <div></div>
      <div></div>
    </div>
    <div class="description">
      <div>
        新用户注册<span>首存500送168</span>，在体育
        平台仅需<span>3倍</span>有效投注即可提款，用户
        须首次存款且不低于<span>500</span>元方可进行领 取礼包一的优惠活动。
        <div class="but" @click="clickRecharge">
          <div></div>
        </div>
      </div>
      <div>
        新用户首次投注体育/电竞赔率≥0.7/ 1.7的任意赛前盘口，若注单结果为输，则可<span>100%</span>退还本金，最高可
        达<span>200元/29usdt</span>，彩金<span>3</span>倍流水可提款。
        <div class="but" @click="clickReceive">
          <div></div>
        </div>
      </div>
    </div>
    <div class="details">
      <div>
        <p>1. 玩家完善手机号码、姓名和银行卡后才能联系客服申请。</p>
        <p>2. 用户必须首次存款不低于<span>500元</span>方可享受礼包一或礼包二优惠，礼包一优惠需在体育平台达到本金与彩金之和的<span>3倍</span>有效投注才能提款。</p>
        <p>
          3.
          任何双边投注及任何赔率低于欧洲盘1.50/香港盘0.50的投注及使用“提前兑现”功能的投注项将不计算在有效投注内。
        </p>
        <p>
          4.
          礼包一必须在体育平台没有过下注记录之前申请，否则将视为无效。滚球、串关、提前结算注单不在礼包二享受优惠的范围内。礼包一和礼包二只能选择一个，不能共享，本活动与【返水优惠】活动共享，与其他优惠活动不共享。
        </p>
        <p>
          5.
          此优惠适用于只拥有一个ONE体育账户的玩家，相同的姓名、电话号码、地址、邮箱、IP、相同的银行信息也只可以享受一次。
        </p>
        <p>6. 若发现套利、对赌和不诚实获取盈利之行为的会员将被取消优惠资格。</p>
        <p>
          7.
          本网站欢迎所有玩家参加活动，对于各种非正常投注，如正反投注等行为，一经发现将取消优惠自资格，并保留进一步处理的权利。
        </p>
        <p>
          8.
          会员参加任何优惠活动则被视为认可并同意遵守这些规则以及ONE体育的有关规定，愿意受其约束，最终解释权归ONE体育所有。
        </p>
        <!-- <p>9. 本APP的赛事直播功能只供观看赛事，不作为结算依据。</p> -->
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
  methods: {
    clickRecharge() {
      let info = {
        message: "openRecharge",
      };
      window.parent.postMessage(info, "*");
    },
    clickReceive() {
      let info = {
        message: "openService",
      };
      window.parent.postMessage(info, "*");
    },
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
$count: 49.9712;
.container {
  margin: auto;
  background: #EBE7DD url("../../assets/img/spree/BG.jpg") no-repeat;
  width: 100%;
  background-size: contain;
  padding-bottom: 50 / $count + rem;
}
.img {
  display: flex;
  justify-content: center;
  padding-top: 350 / $count + rem;
  > :nth-child(1) {
    background: url("../../assets/img/spree/dlb1.png") center no-repeat;
    background-size: cover;
    width: 281.5 / $count + rem;
    height: 240 / $count + rem;
    margin-right: 88.5 / $count + rem;
  }
  > :nth-child(2) {
    background: url("../../assets/img/spree/dlb2.png") center no-repeat;
    background-size: cover;
    width: 290 / $count + rem;
    height: 240 / $count + rem;
  }
}
.description {
  display: flex;
  justify-content: center;
  margin-top: 20 / $count + rem;
  > div {
    width: 230.5 / $count + rem;
    height: 123 / $count + rem;
    box-sizing: border-box;

    font-family: PingFangSC-Regular;
    font-size: 12 / $count + rem;
    color: #444b52;
    letter-spacing: 0;
    line-height: 20 / $count + rem;
    > span {
      color: #c28b49;
    }
    > .but {
      margin-top: 11 / $count + rem;
      > div {
        width: 137 / $count + rem;
        height: 32 / $count + rem;
        margin: auto;
      }
    }
  }
  > :nth-child(1) {
    background: url("../../assets/img/spree/lbnr1.png") center no-repeat;
    background-size: cover;
    margin-right: 129 / $count + rem;
    padding: 15 / $count + rem 13.5 / $count + rem 24 / $count + rem 15 / $count + rem;
    .but {
      > div {
        background: url("../../assets/img/spree/cz_btn.png") center no-repeat;
        background-size: cover;
      }
    }
  }
  > :nth-child(2) {
    background: url("../../assets/img/spree/lbnr2.png") center no-repeat;
    background-size: cover;
    padding: 15 / $count + rem 14 / $count + rem 24 / $count + rem 8.5 / $count + rem;
    .but {
      > div {
        background: url("../../assets/img/spree/lq_btn.png") center no-repeat;
        background-size: cover;
      }
    }
  }
}
.details {
  margin-top: 49.5 / $count + rem;

  > div {
    width: 650 / $count + rem;
    height: 362 / $count + rem;
    background: url("../../assets/img/spree/hdsm.png") center no-repeat;
    background-size: cover;
    margin: auto;
    padding: 80 / $count + rem 40 / $count + rem 30 / $count + rem 50 / $count + rem;
    box-sizing: border-box;

    font-family: PingFangSC-Medium;
    font-size: 12 / $count + rem;
    color: #444b52;
    letter-spacing: 0;
    line-height: 16 / $count + rem;

    > p > span {
      color: #c28b49;
    }
  }
}
</style>