<template>
  <div class="qus">
    <div class="cells">
      <div class="tittle"><img src="@/assets/img/vip/tittle.png" alt=""></div>
      <div class="table"><img src="../../assets/img/vip/table.png" alt=""></div>
      <div class="tittle3"><img src="@/assets/img//vip/tittle3.png" alt=""></div>
      <div class="content">
        <p>1.当周累计有效流水达到相应VIP等级要求，即可在次日24点前晋级相应VIP等级。</p>
        <p>2.晋级礼金在达到该会员级别后系统自动派发，每个等级的晋级礼金，每位会员仅能获得1次。（晋级礼金1倍流水即可提款）</p>
        <p>3.VIP4及以上等级会员可享受生日礼金，可在生日前后三天联系在线客服领取，逾期视为自动放弃。（生日礼金1倍流水即可提款）</p>
        <p>4.月度红包：当月累积有效投注额满足相应VIP等级要求，即可在次月1-5日联系在线客服领取月度红包，3倍流水且不限场馆。逾期视为自动放弃。注：需同时满足VIP等级与相应等级月累积有效投注额，VIP等级以领取当日等级为准。（USDT按1：7换算为CNY）。</p>
        <p>5.仅计算输赢结果注单，任何走盘、取消的赛事、对冲、赔率（欧洲盘）{{data}}的注单奖不计算在内，有效流水将享受对应VIP等级的返水。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qus',
  components: {
  },
  data () {
    return {
      title: '',
      data: '<1.5'
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "../../assets/css/normaliz.scss";
</style>
<style lang="scss" scoped>
.qus{
  width: 100%;
  text-align: center;
  padding: 0 0 30px 0;
  >.cells{
    background-image: url('../../assets/img/vip/banner.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    padding-top: (260/16) + rem;
    >.tittle{
      img{width: (168/16) + rem;}
    }
    >.tittle3{
      padding-top: (24/16) + rem;
      img{width: (92/16) + rem;}
    }
    >.table{
      padding: 0 (15/16) + rem;
      padding-top: (16/16) + rem;
      img{width: 100%;}
    }
    >.content{
      padding: 0 15px;
      padding-top: 16px;
      text-align: left;
      >p{
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #606266;
        letter-spacing: 0;
        line-height: 24px;
        padding: 5px 0;
      }
    }
  }
}
</style>
