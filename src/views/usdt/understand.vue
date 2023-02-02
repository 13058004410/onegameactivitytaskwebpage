<template>
  <div class="container">
    <div class="head">
      <div><i></i><span>了解USDT</span></div>
    </div>
    <img
      class="w100 mgt40"
      src="../../assets/img/usdt/understand/smsUSDT.png"
    />
    <div class="usdt-sub mgt30">
      <p>
        虚拟币是一种不具备实体形式的、仅以数字形式存在的货币，也称之为“数字货币”。
      </p>
      <p>
        其性质与实体货币相似，允许在互联网上即时、无地理限制转让，主流的数字货币如USDT（泰达币）、BTC（比特币）、ETH（以太坊）等。
      </p>
      <p>
        用户可以通过数字货币交易平台购买数字货币，在平台进行支付、兑换成人民币从而进行游戏。
      </p>
    </div>
    <img class="w100 mgt40" src="../../assets/img/usdt/understand/USDTYS.png" />
    <div class="ys-row mgt30">
      <div>
        <img src="../../assets/img/usdt/understand/jm_icon.png" />
        <div class="right">
          <p>高度加密</p>
          <p>
            与银行卡等传统交易方式相比，用户不需要给出自己的姓名或卡号即可完成虚拟币交易，避免敏感信息泄露
          </p>
        </div>
      </div>
      <div>
        <img src="../../assets/img/usdt/understand/ks_icon.png" />
        <div class="right">
          <p>交易快速</p>
          <p>
            虚拟币所采用的区块链技术具有去中心化特点，不需要清算中心机构来处理数据，交易时间大大缩短
          </p>
        </div>
      </div>
      <div>
        <img src="../../assets/img/usdt/understand/qzxh_icon.png" />
        <div class="right">
          <p>去中心化</p>
          <p>
            不由央行或当局发行，不受银行监管，用户可随心所欲的使用存放在自己数字钱包里的资金
          </p>
        </div>
      </div>
    </div>
    <img
      class="w100 mgt30"
      src="../../assets/img/usdt/understand/USDTTDBYS.png"
    />
    <div class="usdt-sub mgt40">
      <p>
        泰达币（Tether）也被称为USDT，其价值等同于美元，1USDT=
        1美元，改特点使USDT称为全球数字货币中规模最大，流通性最噶的稳定币，具有良好的保值性，也是网站所使用的主要币种。
      </p>
    </div>
    <div class="ys-row mgt30">
      <div>
        <img src="../../assets/img/usdt/understand/gbfx_icon.png" />
        <div class="right">
          <p>高度加密</p>
          <p>
            与银行卡等传统交易方式相比，用户不需要给出自己的姓名或卡号即可完成虚拟币交易，避免敏感信息泄露
          </p>
        </div>
      </div>
      <div>
        <img src="../../assets/img/usdt/understand/bjzg_icon.png" />
        <div class="right">
          <p>高度加密</p>
          <p>
            与银行卡等传统交易方式相比，用户不需要给出自己的姓名或卡号即可完成虚拟币交易，避免敏感信息泄露
          </p>
        </div>
      </div>
      <div>
        <img src="../../assets/img/usdt/understand/qzxh_icon2.png" />
        <div class="right">
          <p>高度加密</p>
          <p>
            与银行卡等传统交易方式相比，用户不需要给出自己的姓名或卡号即可完成虚拟币交易，避免敏感信息泄露
          </p>
        </div>
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
.usdt-sub {
  font-size: 14px;
  color: #818ea7;
  letter-spacing: 0;
  line-height: 28px;
}
.ys-row {
  display: flex;
  justify-content: space-between;
  > div {
    background: url("../../assets/img/usdt/agreementDiff/ys_bg.png") no-repeat
      center;
    background-size: contain;
    width: 306px;
    height: 202px;
    display: flex;
    padding: 30px 25px 32px 30px;
    box-sizing: border-box;
    > img {
      width: 66px;
      height: 66px;
      margin-right: 16px;
    }
    .right {
      margin-top: 6px;
      > :nth-child(1) {
        font-size: 20px;
        color: #3a414c;
        letter-spacing: 0;
        margin-bottom: 6px;
      }
      > :nth-child(2) {
        font-size: 14px;
        color: #818ea7;
        letter-spacing: 0;
        line-height: 24px;
      }
    }
  }
}
</style>