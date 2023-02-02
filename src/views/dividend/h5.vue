<template>
  <!-- ONE 众瞩目 首存红利40% -->
  <div class="dividend">
    <div class="main-t"></div>
    <div class="title">
      <span>平台</span>
      <span>申请金额</span>
      <span>红利百分比</span>
      <span>红利上限</span>
      <span>流水倍数</span>
    </div>
    <div class="text">
      <span>ONE体育</span>
      <span>≥{{ minAmount }}/{{minAmountUsdt}}USDT</span>
      <span>{{ giftRatio }}%</span>
      <span>{{ maxAmount }}/{{maxAmountUsdt}}USDT</span>
      <span>{{ bettingLimit }}</span>
    </div>
    <div class="sub">
      <!-- <div class="t2"></div>
      <div class="sub-t2">
        <p>
          {{ start_time[0] }}年{{ start_time[1] }}月{{ start_time[2] }}日至{{
            end_time[0]
          }}年{{ end_time[1] }}月{{ end_time[2] }}日
        </p>
      </div> -->
      <div class="t3"></div>
      <div class="sub-t2">
        <p>
          首次存款指第一笔投注前的合计存款金额。首存优惠需要在首次存款后投注前进行申请。存款后前往优惠活动页面，核对金额无误后点击领取立即参与即可。
        </p>
      </div>
      <div class="ripple"><button @click="receive"></button></div>
      <div class="t4"></div>
      <div class="sub-t2">
        <p>
          1.每位新用户可申请1次40%奖金，有效投注额达到【<span>（本金+ 红利）x8倍流水</span>】即可提款。
        </p>
        <p>
          例如：会员存款100元，则需要有效投注（100+40）x
          8=1120的投注额即可申请提款。
        </p>
        <p>
          2.本活动仅和返水优惠共享，<span>不与其它任何优惠共享（包含迎新大礼包优惠活动）</span>。
        </p>
        <p>
          3.在申请此优惠前，请您先完善真实姓名、手机、邮箱等个人信息，该优惠活动成功申请后不能取消，如解除账户限制，需完成活动指定流水要求。
        </p>
        <p>
          4.有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关、提前兑现将，将不计算在有效流水内，流水要求<span>不限制下注厅方</span>。
        </p>
        <p>
          5.若发现有套利客户，对冲或不诚实获取盈利之行为，将取消其优惠资格。
        </p>
        <p>
          6.每位有效玩家、每一手机号码、电子邮箱、相同银行卡、每一个IP地址、每一台电脑者只能享受一次优惠，如发现有违规者我们将保留无限期审核扣回红利及所产生的利润权利。
        </p>
        <p>
          7.此活动遵循ONE体育一般规则与条款，愿意受其约束，最终解释权归ONE体育所有。
        </p>
      </div>
    </div>
    <!-- <div class="view">
      <Scrapper class="scroll" ref="view">
        <div class="top">
          <img src="../../assets/img/dividend/top.png" />
        </div>
        <div class="main">
          <h3>
            <img src="../../assets/img/dividend/h1.png" />
          </h3>
        </div>
        <div class="dividend-content">
          <div class="title">
            <span>平台</span>
            <span>申请金额</span>
            <span>红利百分比</span>
            <span>红利上限</span>
            <span>流水倍数</span>
          </div>
          <div class="text">
            <span>ONE体育</span>
            <span>≥{{ minAmount }}</span>
            <span>{{ giftRatio }}%</span>
            <span>{{ maxAmount }}</span>
            <span>{{ bettingLimit }}</span>
          </div>
        </div>
        <div class="main">
          <h3>
            <img src="../../assets/img/dividend/h2.png" />
          </h3>
        </div>
        <div class="dividend-content">
          <div class="text">
            <p>
              {{ start_time[0] }}年{{ start_time[1] }}月{{
                start_time[2]
              }}日至{{ end_time[0] }}年{{ end_time[1] }}月{{ end_time[2] }}日
            </p>
          </div>
        </div>
        <div class="main">
          <h3>
            <img src="../../assets/img/dividend/h3.png" />
          </h3>
        </div>
        <div class="dividend-content">
          <div class="text">
            <p>
              首次存款指第一笔投注之前的合计存款金额。首存优惠需要在首次存款后的7天内并且于首次提款前进行申请。存款前往优惠活动页面，核对金额无误后点击立即参与即可。
            </p>
          </div>
        </div>
        <div class="main first">
          <h3>
            <img src="../../assets/img/dividend/h4.png" />
            <button @click="receive" class="click ripple"></button>
            <p>(24小时到账哦)</p>
          </h3>
        </div>
        <div class="main">
          <h3>
            <img src="../../assets/img/dividend/h5.png" />
          </h3>
        </div>
        <div class="dividend-content">
          <div class="text">
            <div class="rule">
              <ul>
                <li>
                  <i>1、</i>
                  <p>
                    每位新用户可申请1次40%奖金，有效投注额达到【（本金+红利）×3倍流水】即可提款。例如：会员存款100元，则需要有效投注（100+40）×3=420的投注额即可申请提款。
                  </p>
                </li>
                <li>
                  <i>2、</i>
                  <p>
                    享受首次优惠后，如在达到规定优惠提款的投注额要求之前申请提款，则被视为放弃存送礼金及赢取的彩金，只能提取本金。
                  </p>
                </li>
                <li>
                  <i>3、</i>
                  <p>
                    本活动仅和返水优惠共享，
                    <i style="color: red; font-weight: 600"
                      >不与其他任何优惠共享</i
                    >（包含迎新大礼包优惠活动）
                  </p>
                </li>
                <li>
                  <i>4、</i>
                  <p>
                    在申请此优惠之前，请您完善真实姓名、手机、邮箱等个人信息，该优惠活动成功申请后不能取消，如解除账户限制，需完成活动指定流水要求。
                  </p>
                </li>
                <li>
                  <i>5、</i>
                  <p>
                    有效流水仅计算产生输赢结果的注单，任何走盘取消赛事，对冲、赔率
                    &lt; 1.5的注单、连串过关、提前兑现将，将不计算在有效流水内。
                  </p>
                </li>
                <li>
                  <i>6、</i>
                  <p>
                    若发现套利、对赌和不诚实获取盈利之行为的会员将被取消优惠资格。
                  </p>
                </li>
                <li>
                  <i>7、</i>
                  <p>
                    每位有效玩家、每一手机号码、电子邮箱、相同银行卡、每一个IP地址、每一台电脑者只能享受一次优惠，如发现有违规者我们将保留无限审核扣回红利及所产生的利润权利。
                  </p>
                </li>
                <li>
                  <i>8、</i>
                  <p>
                    此活动遵循ONE体育一般规则与条款，愿意受其约束，最终解释权归ONE体育所有。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Scrapper>
      <div v-if="alert" class="alertBox">
        <div class="alert">
          <h4>{{ Msg }}</h4>
          <a @click="close">确定</a>
        </div>
      </div>
    </div> -->
    <Overlay :show="alert">
      <div class="alert">
        <h4>{{ Msg }}</h4>
        <a @click="close">确定</a>
      </div>
    </Overlay>
  </div>
</template>
<script>
import {
  getQueryVariable,
  rando,
  reverseStrings,
  toLogin,
} from "@/assets/js/tools";
import { Overlay, Dialog } from "vant";
import { mapActions, mapMutations } from "vuex";
import axios from "axios";
import md5 from "js-md5";
import { UA } from '@/util/ua'
let Base64 = require("js-base64").Base64;
export default {
  components: {
    Overlay,
    Dialog
  },
  data() {
    return {
      alert: false,
      Msg: "",
      // activityId: process.env.NODE_ENV === "production" ? 3 : 4, // uat:4 正式区:3
      start_time: "",
      end_time: "",
      minAmount: "0.00", //申请最小金额
      giftRatio: "1", //红利百分百
      maxAmount: "0.00", //红利上线
      bettingLimit: "3", //流水倍数
      minAmountUsdt: "0",
      maxAmountUsdt: "0",
      loginStatus: false,
      token: "",
      loginName: "",
      u2token: "",
      website:false,
      ticketApp: false
    };
  },
  computed: {
    h5TokenStore() {
      return this.$store.state.h5Token;
    },
    appInfo() {
      return this.$store.state.appInfo;
    },
  },
  destroyed(){
    window.removeEventListener("message", this.onMessage)
  },
  async created() {
    // this.$loading.hide()
    let that = this
    window.loadTicket = this.loadTicketApp;
    setTimeout(() => {
        if(!that.ticketApp && !that.website && UA() === 1) {
        window.location = "nbapp://getTicket?data={}";  
        }
    }, 1000);
    window.addEventListener("message", this.onMessage);
    this.openPCHandle("sendDataIframe");
    this.$loading.show({
      text: "Loading",
    });
    this.getActivityInfo();
    // this.AH5Token()
    // let loginNameStore = getQueryVariable('loginName')
    // this.$toastMessage({message: '登录名：' + loginNameStore})

    // if (!loginNameStore) {
    //   toLogin()
    //   setTimeout(() => {
    //     // that.$loading.hide()
    //   }, 1000)
    // } else {
    //   console.log('Logined')
    // }
  },
  
  mounted() {},
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
    async loadTicketApp(obj) {
      this.ticketApp = true
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
    loadTicket(data) { // h5登录信息都是从移动端那边传过来存在data里面
      this.website = true
      this.loginStatus = data.loginStatus;
      this.token = data.token;
      this.loginName = data.loginName;
      this.u2token = data.u2token;
    },  
    async getActivityInfo() {
      let productId = this.$store.state.appInfo.productId;
      let loginName = this.$store.state.appInfo.loginName;

      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = 1;
      if (!isAndroid) {
        platform = 2;
      }
      let h5Token = this.$store.state.h5Token;
      let domainName = this.$store.state.appInfo.domainName;
      let deviceId = this.$store.state.appInfo.deviceId;
      let appId = this.$store.state.appInfo.appId;

      let sendData = {
        loginName,
        productId,
        activityId: window.location.host == 'uatc08-sport.onebet68.net' ? 4 : 3 , // UAT：4，生产环境：3
      };
      let sendDataString = JSON.stringify(sendData);
      let sign = md5(
        reverseStrings(sendDataString) +
          qid +
          appId +
          v +
          h5Token.token +
          h5Token.u2token
      );
      await axios
        .post(this.$api.dividend.activityInfo, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            // sign,
            token: h5Token.token,
            platform,
            domainName,
            deviceId,
          },
        })
        .then((res) => {
          let { head, body } = res.data;
          this.$loading.hide();
          console.log("活动信息", body);
          if (head.errCode === 200) {
            this.start_time = body.start_time.split(" ")[0].split("-");
            this.end_time = body.end_time.split(" ")[0].split("-");
            this.minAmount = body.condition.minAmount || "0.00";
            this.giftRatio = body.condition.giftRatio || "1";
            this.maxAmount = body.condition.maxAmount || "0.00";
            this.bettingLimit = body.condition.bettingLimit || "3";
            this.minAmountUsdt = body.condition.minAmountUsdt || "0";
            this.maxAmountUsdt = body.condition.maxAmountUsdt || "0";
          }
        })
        .finally(() => {
          this.$loading.hide();
        });
    },
    toLogin() {
      if(this.website) {
        this.openPCHandle("openRecharge");
      } else {
        window.location = "nbapp://openLoginPage?data={}";
      }
    },
    isLogin() {
      return this.$store.state.h5Token.token == undefined;
    },
    async receive() {
      if (this.isLogin() && !this.loginStatus) {
         Dialog.confirm({
          message: "您还没登录哦，\n请登录后再进行操作吧！",
          confirmButtonText: "去登录",
          confirmButtonColor: "#576B95",
        })
        .then(() => {
          this.toLogin();
        })
        .catch(() => {
        });
        return;
      }
      this.$loading.show()
      let ish5Token = this.$store.state.h5Token; // 判断apph5token
      let productId = this.$store.state.appInfo.productId;
      // let loginName = this.$store.state.appInfo.loginName;
      let loginName
      if (ish5Token.token != undefined) {
         loginName = this.$store.state.appInfo.loginName;
      } // app
      if (this.loginStatus) {
         loginName = this.loginName;
      } // h5
      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = 1;
      if (!isAndroid) {
        platform = 2;
      }
      let h5Token
      if(this.loginStatus) {
        h5Token = {token:`${this.token}`} // 拿到移动端token
      }else {
        h5Token = this.$store.state.h5Token;
      } // 拿到apptoken
      let domainName = this.$store.state.appInfo.domainName;
      let deviceId = this.$store.state.appInfo.deviceId;
      let appId = this.$store.state.appInfo.appId;

      let sendData = {
        activityId: window.location.host == 'uatc08-sport.onebet68.net' ? 4 : 3,
        loginName,
        productId,
      };
      let sendDataString = JSON.stringify(sendData);
      let str = reverseStrings(sendDataString) + qid + appId + v;
      if(this.loginStatus) {// h5
        str +=
        this.loginStatus ? `${this.token}${this.u2token}` : "";
      }else { // app
        str +=
        ish5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      }
      let sign = md5(str);
      await axios
        .post(this.$api.dividend.firstDeposit, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            // sign,
            token: h5Token.token,
            platform,
            domainName,
            deviceId,
          },
        })
        .then((res) => {
          this.$loading.hide();
          console.log("领取res", res);
          if (res) {
            let { head, body } = res.data;
            this.Msg = head.errMsg;
            this.alert = true;
          } else {
            this.Msg = "活动不存在";
            this.alert = true;
          }
        })
        .catch((err) => {
          console.log("领取err2", err);
        });
    },
    close() {
      this.alert = false;
    },
  },
  watch: {
    // 'h5TokenStore': function () {
    //   this.$loading.hide()
    //   this.getActivityInfo()
    // }
  },
};
</script>
<style lang="scss">
@import "@/assets/css/dividend.scss";
@import "@/assets/css/normaliz.scss";
@import "@/assets/css/screen750.scss";
</style>