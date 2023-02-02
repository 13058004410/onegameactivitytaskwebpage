<template>
  <div class="container" ref="main">
    <div class="content_box">
      <img
        class="hdnr_t"
        :src="require('@/assets/img/saveGiveAway/pc/hdnr.png')"
        alt=""
      />
      <p class="hdnr">
        ONE体育会员至{{
          start_time
        }}起，使用<span>USDT存款</span>，笔笔存笔笔送，当日优惠赠送<span>{{
          promoRate || "-"
        }}</span
        >回馈，自然日计算为00:00:00~23:59:59，总礼金150万RMB送完为止。
      </p>
      <div class="money_state" :class="{ usdt: usdt }">
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <span>当前为{{ usdt ? "USDT" : "RMB" }}账户钱包</span>
        </div>
      </div>
      <div class="table">
        <div>
          <div>单笔存款</div>
          <div>{{ amountLimitUsdt || "-" }}</div>
          <div>{{ amountLimitRmb || "-" }}</div>
        </div>
        <div>
          <div>优惠比例</div>
          <div>{{ promoRate || "-" }}</div>
          <div>{{ promoRate || "-" }}</div>
        </div>
        <div>
          <div>单日优惠</div>
          <div>{{ maxAmount || "-" }}</div>
          <div>{{ maxAmount || "-" }}</div>
        </div>
        <div>
          <div>取款要求</div>
          <!-- <div>{{ waterPower || "-" }}</div> -->
          <div>{{ waterPower || "-" }}</div>
        </div>
        <!-- <div v-show="false">
          <div>数字货币体育投注</div>
          <div>加码0.5%洗码最高<b> 888 </b>，需完成1倍流水</div>
          <div></div>
        </div> -->
      </div>
      <div class="receive" @click="usdtDepositGift"></div>
      <img
        class="hdnr_t"
        :src="require('@/assets/img/saveGiveAway/pc/hdgz.png')"
        alt=""
      />
      <div class="hdgz_content">
        <p>
          1.
          活动期间，网站ONE体育会员使用USDT充值一笔存款完成后，均可于活动页点击领取优惠参加，存款当日24:00前领取优惠有效;
        </p>
        <p>
          2.
          优惠添加后，需<span>（存款+彩金）*3倍</span>有效流水即可取款，有效流水<span>不计算沙巴厅/ONE体育厅</span>投注额;
        </p>
        <p>3. 总礼金150万RMB送完截止，最终解释权归ONE体育所有;</p>
        <p>4. 本活动与【返水优惠】共享，与其它优惠活动不共享;</p>
      </div>
    </div>
  </div>
</template>
<script>
import { rando, reverseStrings } from "../../assets/js/tools";
import axios from "axios";
import md5 from "js-md5";
export default {
  data() {
    return {
      loginStatus: false,
      token: "",
      loginName: "",
      u2token: "",
      amountLimitUsdt: undefined,
      amountLimitRmb: undefined,
      promoRate: undefined,
      maxAmount: undefined,
      waterPower: undefined,
      start_time: "0000年00月00日",
      usdt: false,
      clickTime: null,
    };
  },
  mounted() {
    let info = {
      message: "reloadPageSize",
      height: this.$refs.main.clientHeight,
    };
    window.parent.postMessage(info, "*");
  },
  destroyed() {
    window.removeEventListener("message", this.onMessage);
  },
  async created() {
    window.addEventListener("message", this.onMessage);
    this.$loading.show({
      text: "Loading",
    });
    let info = {
      message: "sendDataIframe",
    };
    window.parent.postMessage(info, "*");
    this.getHistoryList();
  },
  methods: {
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
    // 查询数据
    async getHistoryList(type = 2) {
      let productId = this.$store.state.appInfo.productId;
      let loginName = this.loginName;

      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = "zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9";
      let sendData = {
        productId,
        identify: "UsdtDepositGift",
      };
      let sendDataString = JSON.stringify(sendData);
      let sign = md5(reverseStrings(sendDataString) + qid + appId + v);
      await axios
        .post(this.$api.saveGiveAway.info, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            sign,
          },
        })
        .then((res) => {
          console.log("查询洗码提案列表", res);
          let { head, body } = res.data;
          let { errCode, errMsg } = head;
          let { condition, start_time } = body;
          if (errCode == 200) {
            let timeStr = start_time.replace(/-/g, "/");
            let time = new Date(timeStr);
            let y = time.getFullYear();
            let m = time.getMonth() + 1;
            let d = time.getDate();
            m = m < 10 ? "0" + m : m;
            d = d < 10 ? "0" + d : d;

            this.start_time = `${y}年${m}月${d}日`;
            this.amountLimitUsdt = `≥${condition.amountLimitUsdt}USDT`;
            this.amountLimitRmb = `≥${condition.amountLimitRmb}RMB`;
            this.promoRate = `${condition.promoRate * 100}%`;
            this.maxAmount = `${condition.maxAmountRmb}¥/${condition.maxAmountUsdt}USDT`;
            this.waterPower = `（存款＋彩金）需${condition.waterPower}倍流水`;
          } else {
            this.openPCHandle("openDialog", { msg: errMsg });
          }
        })
        .finally(() => {
          this.$loading.hide();
        });
    },
    async usdtDepositGift() {
      if (this.isLogin()) {
        this.toLogin();
        return;
      }

      if (this.clickTime == null) {
        this.clickTime = new Date().getTime();
      } else {
        let now = new Date().getTime();
        let time = now - this.clickTime;

        if (time < 5000) {
          this.openPCHandle("openDialog", { msg: "领取按钮5秒内只能响应1次" });
          return;
        }
        this.clickTime = now;
      }

      this.$loading.show({
        text: "Loading",
      });

      let productId = this.$store.state.appInfo.productId;
      let loginName = this.loginName;

      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = "zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9";
      let sendData = {
        productId: productId,
        loginName: loginName,
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
        .post(this.$api.saveGiveAway.usdtDepositGift, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            sign,
            token: this.token,
          },
        })
        .then((res) => {
          console.log("领取洗码金额", res);
          let flag = res.data.head.errCode;
          this.openPCHandle("openDialog", { msg: res.data.head.errMsg });
          if (flag == 200 || flag == 201) {
            setTimeout(() => {
              this.openPCHandle("openService");
            }, 2000);
          }
        })
        .finally(() => {
          this.$loading.hide();
        });
    },
    toLogin() {
      this.openPCHandle("openRecharge");
    },
    isLogin() {
      return !this.loginStatus;
    },
    loadTicket(data) {
      this.loginStatus = data.loginStatus;
      this.token = data.token;
      this.loginName = data.loginName;
      this.u2token = data.u2token;
      this.usdt = data.currency == "USDT" ? true : false;
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
@import "./pc.scss";
</style>