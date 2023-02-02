<template>
  <div class="container">
    <div class="head">
      <div><i></i><span>协议的区别</span></div>
    </div>
    <div class="mgt30 xy-row">
      <div class="row">
        <p class="title">ERC20</p>
        <p class="sub">基于以太坊网络协议</p>
        <p class="txt">
          以太坊发行自己的原生代币及其他代币但成千上万种代币的规则都不一样，这对后期市场发展非常不利，所以代币发行者做了一个只能合约标准，也就是ERC20。
        </p>
      </div>
      <div class="row">
        <p class="title">TRC20</p>
        <p class="sub">基于波场网络协议</p>
        <p class="txt">
          TRC20的提币手续费为0，这意味着用户可以享受免手续费的交易交易所提币服务。同时，波场网络的TPS能够达到上千级别，可以实现交易秒级确认。
        </p>
      </div>
      <div class="row">
        <p class="title">Omni</p>
        <p class="sub">基于比特币网络协议</p>
        <p class="txt">
          最老牌的协议，Omni-USDT与比特币网络的链上，黑客攻击的成本很高，所以资产相对安全性较高，很多大宗交易都会倾向于采用Omni-USDT。
        </p>
      </div>
    </div>
    <img
      class="w100 mgt40"
      src="../../assets/img/usdt/agreementDiff/xynr.png"
    />
    <img
      class="w100 mgt30"
      src="../../assets/img/usdt/agreementDiff/xnxybg.png"
    />
    <img
      class="w100 mgt40"
      src="../../assets/img/usdt/agreementDiff/xyxz.png"
    />
    <p class="mgt30 xz-sub">
      三种协议对应的USDT地址不互通，进行转账，充值等操作时，应仔细核对正确地址
    </p>
    <div class="xz-row mgt30">
      <div class="itme">
        <p>大额交易推荐</p>
        <p>OMNI-USDT，手续费相对较贵、速度也相对较慢，但是资金最为安全。</p>
      </div>
      <div class="itme">
        <p>中等额度推荐</p>
        <p>ERC20-USDT，手续费和速度都介于中间值。</p>
      </div>
      <div class="itme">
        <p>小额交易推荐</p>
        <p>TRC-USDT，零转账费，秒级到账。</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/css/normaliz.scss";
</style>
<style lang="scss" scoped>
.container {
  padding: 0 30px;
  padding-bottom: 50px;
}
.w100 {
  width: 100%;
}
.mgt40 {
  margin-top: 30px;
}
.mgt30 {
  margin-top: 30px;
}
.xy-row {
  display: flex;
  justify-content: space-between;
  .row {
    width: 306px;
    height: 222px;
    background: url("../../assets/img/usdt/agreementDiff/ys_bg.png") no-repeat
      center;
    background-size: contain;
    padding: 20px 30px;
    box-sizing: border-box;
    letter-spacing: 0;

    .title {
      font-size: 24px;
      color: #3a414c;
    }
    .sub {
      font-size: 12px;
      color: #9ca9b7;
      margin: 2px 0 8px 0;
    }
    .txt {
      font-size: 14px;
      color: #818ea7;
      line-height: 24px;
    }
  }
}
.head {
  height: 98px;
  display: flex;
  > div {
    flex: none;
    display: flex;
    align-items: center;
    > i {
      display: inline-block;
      width: 10px;
      height: 18px;
      background: url("../../assets/img/usdt/fh_icon.png") no-repeat center;
      background-size: cover;
    }
    > span {
      margin-left: 20px;
      font-size: 24px;
      color: #3a414c;
      letter-spacing: 0;
    }
  }
}
.xz-sub {
  font-size: 16px;
  color: #818ea7;
  letter-spacing: 0;
  text-align: center;
}
.xz-row {
  display: flex;
  justify-content: space-between;
  > div {
    width: 306px;
    height: 135px;
    padding: 29px 26px 0 26px;
    background: url("../../assets/img/usdt/agreementDiff/js_bg.png") no-repeat
      center;
    background-size: contain;
    box-sizing: border-box;
    letter-spacing: 0;

    > p:nth-child(1) {
      margin-bottom: 7px;
      font-size: 20px;
      color: #3a414c;
    }
    > p:nth-child(2) {
      font-size: 14px;
      color: #818ea7;
      line-height: 20px;
    }
  }
}
</style>