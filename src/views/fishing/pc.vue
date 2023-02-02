<template>
  <div class="container" ref="main">
    <div class="box">
      <div class="jump" @click="openPCHandle('openService')"></div>
      <p class="title mgt34">活动一：弹药充沛 每日充值送25%</p>
      <table class="mgt24">
        <thead>
          <tr>
            <td>充值金额</td>
            <td>红利</td>
            <td>每日限额</td>
            <td>流水倍数</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>≥100/15usdt</td>
            <td>25%</td>
            <td>2000/286usdt</td>
            <td>(本金+彩金)*20倍</td>
          </tr>
        </tbody>
      </table>
      <div class="txt3 mgt24">
        <p>例：充值金额=2000，红利=2000*25%=500，流水要求=（2000+500）*20=50000</p>
        <p>注：本活动的每一笔红利都需要在存款后投注前进行申请，领取每日充值红利之后需完成流水要求方可领取下一次日存红利；当账户余额不足10元时，自动解锁流水要求。</p>
        <p>注：本活动仅限AG捕鱼王，与其他充值活动不共享。</p>
      </div>
      <p class="title mgt56">活动二：飞龙在天 发发发</p>
      <p class="txt2 mgt17">玩家在≥1倍场打下金龙，即可凭记录截图联系在线客服，领取对应倍场最高达3888奖金，助您飞龙在天发发发！</p>
      <table class="mgt20">
        <thead>
          <tr>
            <td>倍场</td>
            <td>条件</td>
            <td>奖金</td>
            <td>流水倍数</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1-5倍</td>
            <td>打下金龙</td>
            <td>888/127usdt</td>
            <td>20</td>
          </tr>
          <tr>
            <td>10-50倍</td>
            <td>打下金龙</td>
            <td>1888/270usdt</td>
            <td>20</td>
          </tr>
          <tr>
            <td>100倍</td>
            <td>打下金龙</td>
            <td>3888/556usdt</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
      <p class="title mgt56">活动三：谁是最强捕鱼王？</p>
      <p class="txt2 mgt17">月末我们会根据AG捕鱼王当月有效投注额排行，选出ONE里挑一最强捕鱼王，并派发最高1888奖金。奖金于次月3日18：00前进行派发。</p>
      <table class="mgt20">
        <thead>
          <tr>
            <td>排名</td>
            <td>上榜条件</td>
            <td>奖金</td>
            <td>流水倍数</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TOP1</td>
            <td>有效投注额≥30万</td>
            <td>1888/270usdt</td>
            <td>20</td>
          </tr>
          <tr>
            <td>TOP2</td>
            <td>有效投注额≥20万</td>
            <td>1288/184usdt</td>
            <td>20</td>
          </tr>
          <tr>
            <td>TOP3</td>
            <td>有效投注额≥15万</td>
            <td>888/127usdt</td>
            <td>20</td>
          </tr>
          <tr>
            <td>TOP4-10</td>
            <td>有效投注额≥10万</td>
            <td>666/96usdt</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
      <div class="txt1 mgt120">活动规则</div>
      <div class="txt3 mgt17">
        <p>1.本活动内容仅限AG捕鱼王。</p>
        <p>2.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>3.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    let info = {
      message: "reloadPageSize",
      height: this.$refs.main.clientHeight,
    }
    window.parent.postMessage(info, "*")
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
};
</script>
<style lang="scss">
@import '@/assets/css/normaliz.scss';
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
body {
  background: #151336;
}
</style>
<style lang="scss" scoped>
@import './pc.scss';
</style>