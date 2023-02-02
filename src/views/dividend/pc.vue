<template>
  <div class="main" ref="main">
    <!-- <div class="t1"></div> -->
    <div class="content">
      <div class="t1"></div>
      <div class="table">
        <div>
          <span>平台</span>
          <span>申请金额</span>
          <span>红利百分比</span>
          <span>红利上限</span>
          <span>流水倍数</span>
        </div>
        <div>
          <span>ONE体育</span>
          <span>≥{{ minAmount }}/{{minAmountUsdt}}USDT</span>
          <span>{{ giftRatio }}%</span>
          <span>{{ maxAmount }}/{{maxAmountUsdt}}USDT</span>
          <span>{{ bettingLimit }}</span>
        </div>
      </div>
      <!-- <div class="t2"></div>
      <p class="time">
        {{ start_time[0] }}年{{ start_time[1] }}月{{ start_time[2] }}日至{{
          end_time[0]
        }}年{{ end_time[1] }}月{{ end_time[2] }}日
      </p> -->
      <div class="t3"></div>
      <p class="sqfs-t">
        首次存款指第一笔投注前的合计存款金额。首存优惠需要在首次存款后投注前进行申请。存款后前往优惠活动页面，核对金额无误后点击领取立即参与即可。
      </p>
      <div class="lq-but" @click="receive"></div>
      <div class="t4"></div>
      <div class="sub">
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
          4.有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关、提前兑现将，将不计算在有效流水内，流水要求不<span>限制下注厅方</span>。
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
  </div>
</template>
<script>
import {
  getQueryVariable,
  rando,
  reverseStrings,
  toLogin,
} from "@/assets/js/tools";
import { Toast } from "vant";
import axios from "axios";
import md5 from "js-md5";
let Base64 = require("js-base64").Base64;
export default {
  components: {},
  data() {
    return {
      Msg: "",
      // activityId: process.env.NODE_ENV === "production" ? 3 : 4, // uat:4 正式区:3
      start_time: "",
      end_time: "",
      minAmount: "0.00", //申请最小金额
      giftRatio: "1", //红利百分百
      maxAmount: "0.00", //红利上线
      bettingLimit: "3", //流水倍数
      loginStatus: false,
      token: "",
      loginName: "",
      u2token: "",
      minAmountUsdt: "0",
      maxAmountUsdt: "0",
    };
  },
  destroyed(){
    window.removeEventListener("message", this.onMessage)
  },
  async created() {
    window.addEventListener("message", this.onMessage);
    Toast.loading({
      duration: 0, // 持续展示 toast
      message: "Loading",
    });
    let info = {
      message: "sendDataIframe",
    };
    window.parent.postMessage(info, "*");
    this.getActivityInfo();
  },
  mounted() {
    let info = {
      message: "reloadPageSize",
      height: this.$refs.main.clientHeight,
    };
    window.parent.postMessage(info, "*");
  },
  methods: {
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
          console.log("活动信息", body);
          if (head.errCode === 200 && body != undefined) {
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
          Toast.clear();
        });
    },
    async receive() {
      if (!this.loginStatus) {
        this.openPCHandle("openRecharge");
        return;
      }
      let productId = this.$store.state.appInfo.productId;
      let loginName = this.loginName;
      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = 1;
      if (!isAndroid) {
        platform = 2;
      }
      let domainName = this.$store.state.appInfo.domainName;
      let deviceId = this.$store.state.appInfo.deviceId;
      let appId = this.$store.state.appInfo.appId;

      let sendData = {
        activityId: window.location.host == 'uatc08-sport.onebet68.net' ? 4 : 3 , // UAT：4，生产环境：3
        loginName,
        productId,
      };
      let sendDataString = JSON.stringify(sendData);
      let sign = md5(
        reverseStrings(sendDataString) +
          qid +
          appId +
          v +
          this.token +
          this.u2token
      );

      await axios
        .post(this.$api.dividend.firstDeposit, sendData, {
          headers: {
            qid,
            appId:"zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9",
            v,
            timestamp,
            // sign,
            token: this.token,
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
            this.openPCHandle("openDialog", { msg: head.errMsg });
          } else {
            this.openPCHandle("openDialog", { msg: "活动不存在" });
          }
        })
        .catch((err) => {
          console.log("领取err2", err);
        });
    },
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      };
      window.parent.postMessage(info, "*");
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/normaliz.scss";
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
html,
body {
  height: auto;
}
</style>
<style lang="scss" scoped>
$count: 79.9422423;
* {
  box-sizing: border-box;
}
.main {
  background: #E7ECF7 url("../../assets/img/dividend/pc_bg.png") no-repeat;
  background-size: contain;
  padding-top: 600 / $count + rem;
  padding-bottom: 50 / $count + rem;
}
.content {
  background: url("../../assets/img/dividend/pc_hdnr_bg.png") no-repeat;
  background-size: cover;
  width: 850 / $count + rem;
  height: 1026.5 / $count + rem;
  margin: auto;
  padding: 35 / $count + rem 50 / $count + rem;
}
.t1 {
  background: url("../../assets/img/dividend/pc_hdnr.png") no-repeat;
  background-size: cover;
  width: 97.5 / $count + rem;
  height: 50 / $count + rem;
  margin: auto;
}
.table {
  margin-top: 15 / $count + rem;
  width: 100%;

  // overflow: hidden;

  > div {
    height: 34.5 / $count + rem;
    display: flex;
    text-align: center;
    line-height: 34.5 / $count + rem;
    border: 1px solid #7984a8;
    > span {
      flex: 1;
    }
  }
  > div:nth-child(1) {
    color: #fff;
    font-size: 18 / $count + rem;
    background: #7984a8;
    border-radius: 4 / $count + rem 4 / $count + rem 0 0;
    > span:nth-child(2) {
      width: 180 / $count + rem;
      flex: none;
    }
    > span:nth-child(4) {
      width: 180 / $count + rem;
      flex: none;
    }
  }
  > div:nth-child(2) {
    font-size: 16 / $count + rem;
    color: #444b52;
    letter-spacing: 0;
    line-height: 36 / $count + rem;
    background: #fff;
    border-radius: 0 0 4 / $count + rem 4 / $count + rem;
    > span:not(:first-child) {
      border-left: 1px solid #444b52;
    }
    > span:nth-child(2) {
      width: 180 / $count + rem;
      flex: none;
    }
    > span:nth-child(4) {
      width: 180 / $count + rem;
      flex: none;
    }
  }
}
.t2 {
  background: url("../../assets/img/dividend/pc_hdsj.png") no-repeat;
  background-size: cover;
  margin-top: 30 / $count + rem;
  width: 94 / $count + rem;
  height: 50 / $count + rem;
  margin: auto;
  margin-top: 30 / $count + rem;
}
.time {
  font-size: 22 / $count + rem;
  color: #444b52;
  letter-spacing: 0;
  line-height: 30 / $count + rem;
  text-align: center;
  margin-top: 15 / $count + rem;
}
.t3 {
  background: url("../../assets/img/dividend/pc_sqfs.png") no-repeat;
  background-size: cover;
  width: 96 / $count + rem;
  height: 50 / $count + rem;
  margin: auto;
  margin-top: 30 / $count + rem;
}
.sqfs-t {
  font-size: 14 / $count + rem;
  color: #444b52;
  letter-spacing: 0;
  line-height: 30 / $count + rem;
  margin-top: 15 / $count + rem;
}
.lq-but {
  height: 32 / $count + rem;
  background: url("../../assets/img/dividend/pc_lq_btn.png") no-repeat;
  background-size: cover;
  width: 108 / $count + rem;
  height: 32 / $count + rem;
  border: none;
  margin: auto;
  margin-top: 15 / $count + rem;
}
.t4 {
  background: url("../../assets/img/dividend/pc_hdgz.png") no-repeat;
  background-size: cover;
  width: 120 / $count + rem;
  height: 70 / $count + rem;
  margin: auto;
  margin-top: 30 / $count + rem;
}
.sub {
  margin-top: 30 / $count + rem;
  font-size: 14 / $count + rem;
  color: #444b52;
  letter-spacing: 0;
  line-height: 30 / $count + rem;
  span {
    color: #f18d3e;
  }
}
</style>