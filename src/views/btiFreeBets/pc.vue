<template>
  <div class="bti-free-bets-pc">
    <van-image width="100%" :src="require('./img/PC/banner.jpg')" />
    <van-image
      width="248px"
      height="70px"
      :src="require('./img/PC/enter-button.png')"
      class="enter-button"
    />
    <div class="content-view">
      <van-image
        width="194px"
        height="100px"
        :src="require('./img/PC/hdnr_tit.png')"
        style="margin-bottom: 20px"
      />
      <p>
        会员在任意体育场馆满足单日有效投注即可在次日获得一次BTI场馆免费投注机会。此免费投注将以CNY形式发放在会员的BTI账户。
      </p>
      <dl>
        <div>
          <dt>单日体育场馆有效投注额</dt>
          <dt>免费投注</dt>
          <dt>可使用赛事</dt>
        </div>
        <div>
          <dd>≥3888CNY/556USDT</dd>
          <dd>38CNY</dd>
          <dd>足球、篮球</dd>
        </div>
      </dl>
      <p>
        注：使用免费投注获胜，会员将获得免费投注的盈利，不包括免费投注本金。<span>注单一经确认成立，不会以任何形式返还免费投注</span>。免费投注只可用于投注足球赛事与篮球赛事。
      </p>
      <dl>
        <div>
          <dt>免费投注注单</dt>
          <dt>可提盈利</dt>
        </div>
        <div>
          <dd>赢/赢半</dd>
          <dd>赔率结算-本金</dd>
        </div>
        <div>
          <dd>和局</dd>
          <dd>0</dd>
        </div>
        <div>
          <dd>输/输半</dd>
          <dd>0</dd>
        </div>
      </dl>
      <van-image
        width="194px"
        height="100px"
        :src="require('./img/PC/hdgz_tit.png')"
        style="margin-bottom: 20px; margin-top: 40px"
      />
      <p>
        1.会员在体育场馆单日体育有效投注<span>≥3888CNY/556USDT</span>即可在次日获得<span>38CNY免费投注</span>一次。免费投注由系统自动派发，无需申请。次日18:00之前派发到会员账，免费投注有效时间为24小时，在获得免费投注后24小时内不使用，免费投注将失效。有效投注额计算时间为当日北京时间00:00:00至23:59:59；
      </p>
      <p>
        2.
        免费投注为一次性投注，只能单独使用，不可以拆分使用，选定盘口后，再选择【免费投注】即可；
      </p>
      <p>
        3.
        免费投注只能投注赛事初盘（开赛前盘口），免费投注只能投注足球赛事或篮球赛事，其他任意体育赛事及虚拟足球、虚拟篮球、任何串关、双边投注、提前结算都不可以使用免费投注；
      </p>
      <p>
        4.
        前置有效投注额仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率小于欧洲盘1.5、香港盘0.5的注单、连串过关，将不计算在有效流水内；
      </p>
      <p>
        5.
        免费投注不与洗码优惠共享，不与其他任意指定赛事类活动共享（即免费投注不可参与指定赛事类活动）。免费投注所获盈利<span>无需流水</span>；
      </p>
      <p>
        6.
        同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号。如有会员有任何违规，我们将保留无限期审核扣回红利及所产生利润的权利；
      </p>
      <p>
        7.
        会员参加任何优惠活动则被视为认可并同意遵守这些规则以及ONE游戏的有关规定，愿意受其约束，最终解释权归ONE游戏所有。
      </p>
    </div>
  </div>
</template>

<script>
/**
 * Copy entry method from kingofbattles
 * original author： Unique
 * Copy time：2022-8-5
 */
import { Dialog } from "vant";
import { UA } from "@/util/ua";
import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      loginStatus: false,
      token: "",
      loginName: "",
      u2token: "",
      website: false,
      ticketApp: false,
    };
  },
  created() {
    let that = this;
    window.loadTicket = this.loadTicketApp;
    setTimeout(() => {
      if (!that.ticketApp && !that.website && UA() === 1) {
        window.location = "nbapp://getTicket?data={}";
      }
    }, 1000);
    window.addEventListener("message", this.onMessage);
    this.openPCHandle("sendDataIframe");
  },
  computed: {
    h5TokenStore() {
      return this.$store.state.h5Token;
    },
  },
  destroyed() {
    window.removeEventListener("message", this.onMessage);
  },
  methods: {
    ...mapActions(["AWebToken", "AH5Token"]),
    ...mapMutations({
      setAppinfoTickt: "SET_APPINFO_TICKET",
      setAppinfoLoginName: "SET_APPINFO_LOGINNAME",
    }),
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      };
      window.parent.postMessage(info, "*");
    },
    onMessage(event) {
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
      this.website = true;
      this.loginStatus = data.loginStatus;
      this.token = data.token;
      this.loginName = data.loginName;
      this.u2token = data.u2token;
    },
    async loadTicketApp(obj) {
      this.ticketApp = true;
      if (
        this.$store.state.appInfo.ticket != "" ||
        this.$store.state.appInfo.loginName != ""
      ) {
        return;
      }
      let json = null;
      try {
        json = JSON.parse(obj);
      } catch (error) {
        // alert("json 解析错误");
        console.log(error);
        return;
      }
      this.setAppinfoTickt(json.ticket);
      this.setAppinfoLoginName(json.loginName);
      // this.nickName = json.nickName;
      this.$loading.show({
        text: "Loading",
      });
      if (Object.keys(this.$store.state.h5Token).length < 1) {
        await this.AH5Token();
      }
      this.$loading.hide();
    },
    isLogin() {
      return this.$store.state.h5Token.token == undefined;
    },
    openBTI() {
      if (this.website) {
        this.openPCHandle("openGameBTI"); //openGameBTI
      } else {
        window.location = "nbapp://openGameBTI?data={}";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/normaliz.scss";
.bti-free-bets-pc {
  width: 100vw;
  min-height: 100vh;
  background-color: #efe2d9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 60px;
  position: relative;

  .content-view {
    width: 1300px;
    min-height: 100vh;
    background-image: url("./img/PC/bg.png");
    background-size: 100% 100%;
    display: flex;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 30px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 70px 100px 70px 100px;

    p {
      font-size: 20px;
      color: #444b52;
      line-height: 36px;
      margin-top: 5px;
      margin-bottom: 5px;
      width: 100%;
      text-align: left;

      & > span {
        color: #ad692b;
      }
    }

    dl {
      width: 100%;
      border-radius: 8px 8px 0px 0px;
      overflow: hidden;
      border: 1px solid rgba(203, 162, 117, 1);
      border-bottom: none;

      & > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(203, 162, 117, 0.6);
      }

      dt {
        font-size: 20px;
        color: #ffffff;
        background: #d0a881;
        flex: 1;
        height: 68px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      dd {
        box-sizing: content-box;
        flex: 1;
        height: 68px;
        font-size: 20px;
        color: #63676c;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid rgba(203, 162, 117, 0.6);

        &.maxHeight {
          min-height: 56px;
        }

        &:last-child {
          border-right: none;
        }
      }
    }
  }
}

.enter-button {
  position: absolute;
  left: 490px;
  top: 480px;
  animation-name: zoomIn;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
}

@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(0.9);
  }
  75% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
</style>