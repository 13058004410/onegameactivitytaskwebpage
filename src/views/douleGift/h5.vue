<template>
  <!-- ONE 众瞩目 首存红利40% -->
  <div class="app-view">
    <div class="title-nr"></div>
    <div class="deposit">
      <div class="single ">单笔存款</div>
      <div class="single-num">5000CNY/720USDT</div>
    </div>
    <div class="deposit">
      <div class="single ">单次礼金</div>
      <div class="single-num">500CNY/72USDT</div>
    </div>
    <div class="deposit">
      <div class="single ">总计礼金</div>
      <div class="single-num">5000CNY/720USDT</div>
    </div>
    <div class="deposit">
      <div class="single ">流水要求</div>
      <div class="single-num">1倍水</div>
    </div>
    <div class="title-gz"></div>
    <div class="gz-item">
      <p>
        1.虎年活动期间（1月31日-2月28日）所有新老会员单笔存款满足活动条件即可参与此活动，联系在线客服领取礼金；<span>存5000CNY/720USDT送5000CNY/</span><br>
        <span>720USDT,</span> 礼金分十日领取，参与活动的存款当日即可领取第一次礼金，领取下一次礼金前须存款≥500CNY/72USDT，投注≥3笔体育注单并完成≥5000CNY/720USDT的体育有效流水。
      <p>2.奖金需完成<span>1倍流水</span>即可，不限场馆。</p>
      <p>3.本活动每位会员限参与一次。奖金日未联系在线客服领取奖金，将视为逾期无效自动放弃当笔礼金。每次礼金日的领取条件为独立计算，若中断领取，在下个礼金日之前完成该次条件即可继续领取。领取下一次礼金时需满足的条件：上一笔礼金日后当笔礼金日前满足存款≥500CNY/72USDT，投注≥3笔体育注单并完成≥5000CNY/720USDT的体育有效流水。</p>
      <p>4.本活动与洗码优惠共享，不与其他任意活动共享存款条件与投注流水。</p>
      <p>5.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号。如有会员有任何违规行为，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
      <p>6.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
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
  background: #f3eadf url("../../assets/img/newYearTiger/hnlj_banner_h5.jpg")
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
  margin-bottom: (12/16) + rem;
}
.deposit {
  width: (322/16) +rem;
  margin: 0 auto;
  display: flex;
  text-align: center;
  line-height: (33/16) +rem;
  font-size: (12/16) +rem;
  color: #FFFFFF;
  border-bottom: 1px solid #EDDACA ;
  .single {
    width: (80/16) +rem;
    height: (33/16) + rem;
    background-color: #aa8f71;
  }
  .single-num {
    width: (256/16) +rem;
    height: (33/16) +rem;
    background-color: #caaa8e;
  }
}
.nr-item {
  width: 325/16 + rem;
  height: 40/16 + rem;
  margin: 0 auto;
}
.title-gz {
  background: url("../../assets/img/newYearTiger/hdgz_h5.png") no-repeat 0 0;
  background-size: cover;
  width: (112/16) + rem;
  height: (29/16) + rem;
  margin-left: (25/16) + rem;
  margin-bottom: (12/16) + rem;
  margin-top: (15/16) + rem;
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
    color:#E42121;
    font-weight: 600;
  }
}
</style>