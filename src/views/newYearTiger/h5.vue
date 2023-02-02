<template>
  <!-- ONE 众瞩目 首存红利40% -->
  <div class="app-view">
    <div class="title-nr"></div>
    <div class="tiger-gift">
      <p>活动1：虎年体育红包</p>
    </div>
    <div class="table-title">
      <div class="table-title1">
        <p>体育周</p>
        <p>累计有效流水</p>
      </div>
      <div>红包</div>
      <div>流水要求</div>
    </div>
    <table>
      <tbody>
        <tr>
          <td>
            ≥5000CNY <br />
            /720USDT
          </td>
          <td>
            ≥88CNY <br />
            /12USDT
          </td>
          <td>1倍水</td>
        </tr>
        <tr>
          <td>
            ≥50000CNY <br />
            /7200USDT
          </td>
          <td>
            ≥588CNY <br />
            /84USDT
          </td>
          <td>1倍水</td>
        </tr>
        <tr>
          <td>
            ≥200000CNY <br />
            /28600USDT
          </td>
          <td>
            1288CNY <br />
            /184USDT
          </td>
          <td>1倍水</td>
        </tr>
      </tbody>
    </table>
    <div class="tiger-gift">
      <p>活动2：虎年真人红包</p>
    </div>
     <div class="table-title">
      <div class="table-title1">
        <p>真人周</p>
        <p>累计有效流水</p>
      </div>
      <div>红包</div>
      <div>流水要求</div>
    </div>
     <table>
      <tbody>
        <tr>
          <td>
            ≥30000CNY<br />
            /4285USDT
          </td>
          <td>
            88CNY<br />
            /12USDT
          </td>
          <td>1倍水</td>
        </tr>
        <tr>
          <td>
            ≥300000CNY <br />
            /42857USDT
          </td>
          <td>
            588CNY <br />
            /84USDT
          </td>
          <td>1倍水</td>
        </tr>
        <tr>
          <td>
            ≥800000CNY <br />
            /112585USDT
          </td>
          <td>
            1288CNY<br />
            /184USDT
          </td>
          <td>1倍水</td>
        </tr>
      </tbody>
    </table>
    <div class="title-gz"></div>
    <div class="tiger-gift"></div>
    <div class="gz-item">
      <p>
        1.虎年活动期间（1月31日-2月27日）所有新老会员满足活动条件（自然周满足相应场馆有效流水）即可联系在线客服领虎年红包。注：捕鱼类游戏流水不计算为真人有效流水。
      </p>
      <p>
        2.相应场馆红包需完成对应场馆<span>1倍流水</span>即可。
      </p>
      <p>
        3.本活动与洗码优惠共享，不与其他任意活动共享投注流水。
      </p>
      <p>4.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号。如有会员有任何违规行为，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
      <p>
        5.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。
      </p>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
import { mapActions, mapMutations } from "vuex";
import { UA } from "@/util/ua";
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
  async created() {
    let that = this;
    window.loadTicket = this.loadTicketApp;
    setTimeout(() => {
      if (!that.ticketApp && !that.website && UA() === 1) {
        window.location = "nbapp://getTicket?data={}";
      }
    }, 1000);
    window.addEventListener("message", this.onMessage);
    this.openPCHandle("sendDataIframe");
    // this.$loading.show({
    // text: "Loading",
    // })
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
    // isLogin() {
    //     return this.$store.state.h5Token.token == undefined;
    //     },
    // toLogin() {
    //     if(this.website){
    //         this.openPCHandle("openRecharge");
    //     }else {
    //         window.location = "nbapp://openLoginPage?data={}";
    //     }
    // },

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
      // this.loginStatus = data.loginStatus;
      // this.token = data.token;
      // this.loginName = data.loginName;
      // this.u2token = data.u2token;
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
    jumpKefuNative() {
      if (this.website) {
        this.openPCHandle("openService");
      } else {
        window.location = "nbapp://openServicePage?data={}";
      }
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/normaliz.scss";
@import "@/assets/css/screen750.scss";
</style>
<style lang="scss" scoped>
.app-view {
  * {
    box-sizing: border-box;
  }
  background: #f3eadf url("../../assets/img/newYearTiger/hnhb_banner_h5.jpg")
    no-repeat 0 0;
  background-size: contain;
  padding-top: (450/16) + rem;
  p {
    font-size: 14px;
  }
  span {
    color: #f0b50a;
  }
}
.title-nr {
  background: url("../../assets/img/newYearTiger/hdnr_h5.png") no-repeat 0 0;
  background-size: cover;
  width: (112/16) + rem;
  height: (29/16) + rem;
  margin-left: (25/16) + rem;
  // margin-bottom: (12/16) + rem;
}
.tiger-gift {
  p {
    font-family: HYYakuHei-GEW;
    font-size: 18px;
    color: #b35650;
    letter-spacing: 0;
    font-weight: 700;
    margin: 20px 0 5px 25px;
  }
}
.nr-item {
  width: 325/16 + rem;
  height: 40/16 + rem;
  margin: 0 auto;
}
.table-title {
  width: 100%;
  height: 50/16 + rem;
  background: #caaa8e;
  color: #ffffff;
  font-size: 14px;
  margin: 15px auto 0;
  display: flex;
  align-items: center;
  div {
    flex: 1;
    text-align: center;
  }
  .table-title1 {
    text-align: center;
    p {
      color: #ffffff;
    }
  }
}
table {
  width: 100%;
  height: 50.39/16 + rem;
  // margin: 0 auto;
  td {
    border: 1px solid #caaa8e;
    width: 114.42/16 + rem;
    height: 53/16 + rem;
    text-align: center;
    font-size: 13px;
    color: #57595c;
  }
}
.title-gz {
  background: url("../../assets/img/newYearTiger/hdgz_h5.png") no-repeat 0 0;
  background-size: cover;
  width: (112/16) + rem;
  height: (29/16) + rem;
 margin: 25px 0 10px 25px;
}
.gz-item {
  width: 335/16 + rem;
  margin: 0 auto;
  line-height: 22px;
  padding-bottom: 20px;
  p {
    padding: 3px 0;
    color: #57595C;
  }
  span {
    color:#E42121 ;
  }
}
</style>