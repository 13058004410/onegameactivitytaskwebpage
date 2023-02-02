<template>
  <div class="container">
    <div class="bg">
      <div class="jump">
        <button @click="jumpKefuNative"></button>
      </div>
    </div>
    <div class="box">
      <p class="title">活动一：弹药充沛 每日充值送25%</p>
      <table class="mgt20">
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
            <td>
              <p>≥100/15</p>
              <p>usdt</p>
            </td>
            <td>25%</td>
            <td>
              <p>2000/286</p>
              <p>usdt</p>
            </td>
            <td>
              <p>(本金+彩金)</p>
              <p>*20倍</p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="mgt14 txt1">例：充值金额=2000，红利=2000*25%=500，流水要求=（2000+500）*20=50000</p>
      <p class="mgt6 txt1">注：本活动的每一笔红利都需要在存款后投注前进行申请，领取每日充值红利之后需完成流水要求方可领取下一次日存红利；当账户余额不足10元时，自动解锁流水要求。</p>
      <p class="mgt6 txt1">注：本活动仅限AG捕鱼王，与其他充值活动不共享。</p>
      <p class="title mgt20">活动二：飞龙在天 发发发</p>
      <p class="txt2 mgt10">玩家在≥1倍场打下金龙，即可凭记录截图联系在线客服，领取对应倍场最高达3888奖金，助您飞龙在天发发发！</p>
      <table class="mgt14">
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
      <p class="title mgt40">活动三：谁是最强捕鱼王？</p>
      <p class="txt2 mgt10">月末我们会根据AG捕鱼王当月有效投注额排行，选出ONE里挑一最强捕鱼王，并派发最高1888奖金。奖金于次月3日18：00前进行派发。</p>
      <table class="mgt14">
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
            <td>
              <p>有效投注额</p>
              <p>≥30万</p>
            </td>
            <td>
              <p>1888/270</p>
              <p>usdt</p>
            </td>
            <td>20</td>
          </tr>
          <tr>
            <td>TOP2</td>
            <td>
              <p>有效投注额</p>
              <p>≥20万</p>
            </td>
            <td>
              <p>1288/184</p>
              <p>usdt</p>
            </td>
            <td>20</td>
          </tr>
          <tr>
            <td>TOP3</td>
            <td>
              <p>有效投注额</p>
              <p>≥15万</p>
            </td>
            <td>
              <p>888/127</p>
              <p>usdt</p>
            </td>
            <td>20</td>
          </tr>
          <tr>
            <td>TOP4-10</td>
            <td>
              <p>有效投注额</p>
              <p>≥10万</p>
            </td>
            <td>
              <p>666/96</p>
              <p>usdt</p>
            </td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
      <p class="txt3 mgt60">活动规则</p>
      <p class="txt1 mgt14">1.本活动内容仅限AG捕鱼王。</p>
      <p class="txt1 mgt10">2.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
      <p class="txt1 mgt10">3.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
       website: false
    }
  },
  async created() {
      // window.loadTicket = this.loadTicketApp;
      window.addEventListener("message", this.onMessage);
      this.openPCHandle("sendDataIframe");
      // this.$loading.show({
      // text: "Loading",
      // })
    },
  destroyed(){
      window.removeEventListener("message", this.onMessage)
    },
  methods: {
    openPCHandle(msg, data = {}) {
            let info = {
                message: msg,
                ...data,
            }
            window.parent.postMessage(info, "*");
        },
     onMessage(event){
            let funcs = {
                loadTicket: this.loadTicket,
            };
            console.log("子iframe监听事件名字", event.data.message);
            let func = funcs[event.data.message];
            if (func) {
                func(event.data);
            } else {
                console.log("点击监听测试");
            }
        },
     loadTicket(data) {
            this.website = true
        },        
    jumpKefuNative() {
            if(this.website) {
                this.openPCHandle('openService')
            } else {
               window.location = "nbapp://openServicePage?data={}";
            }
        },
  }
};
</script>
<style lang="scss">
@import '@/assets/css/screen750.scss';
@import '@/assets/css/normaliz.scss';
body {
  background: #151336;
}
</style>
<style lang="scss" scoped>
@import './h5.scss';
</style>