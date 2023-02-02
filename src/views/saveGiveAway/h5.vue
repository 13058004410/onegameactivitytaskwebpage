<template>
  <div class="container">
    <img :src="require('@/assets/img/saveGiveAway/pc_bg.png')" class="bg" />
    <div class="content">
      <p class="sub">
        ONE体育会员至{{
          start_time
        }}起，使用<span>USDT存款</span>，笔笔存笔笔送，当日优惠赠送<span>{{
          promoRate || "-"
        }}</span
        >回馈，自然日计算为00:00:00~23:59:59，总礼金150万RMB送完为止。
      </p>
      <p class="status" :class="{ usdt: usdt }">
        当前为{{ usdt ? "USDT" : "RMB" }}钱包账户
      </p>
      <div class="table">
        <div class="row">
          <div>单笔存款</div>
          <div>{{ amountLimitUsdt || "-" }}</div>
          <div>{{ amountLimitRmb || "-" }}</div>
        </div>
        <div class="row">
          <div>优惠比例</div>
          <div>{{ promoRate || "-" }}</div>
          <div>{{ promoRate || "-" }}</div>
        </div>
        <div class="row">
          <div>单日优惠</div>
          <div>{{ maxAmount || "-" }}</div>
          <div>{{ maxAmount || "-" }}</div>
        </div>
        <div class="row">
          <div>取款要求</div>
          <div>{{ waterPower || "-" }}</div>
          <!-- <div>{{ waterPower || "-" }}</div> -->
        </div>
        <!-- <div class="row" v-show="false">
          <div>数字货币<br/>体育投注</div>
          <div>加码0.5%洗码最高<b> 888 </b><br/>需完成1倍流水</div>
        </div> -->
      </div>
      <div class="receive-but">
        <div @click="usdtDepositGift"></div>
      </div>
    </div>
    <div class="rule">
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
</template>
<script>
import {
  // getCurDate,
  // getWeekStartDate,
  // getLastWeekStartDate,
  // getLastWeekEndDate,
  rando,
  reverseStrings,
} from "../../assets/js/tools";
import axios from "axios";
import md5 from "js-md5";
import { Toast } from "vant";
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
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
  created() {
    window.loadTicket = this.loadTicket;
    this.getHistoryList();
  },
  methods: {
    ...mapActions(["AWebToken", "AH5Token"]),
    ...mapMutations({
      setAppinfoTickt: "SET_APPINFO_TICKET",
      setAppinfoLoginName: "SET_APPINFO_LOGINNAME",
    }),
    // 查询洗码提案列表
    async getHistoryList(type = 2) {
      let productId = this.$store.state.appInfo.productId;
      let loginName = this.$store.state.appInfo.loginName;

      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let sendData = {
        // beginDate,
        // endDate,
        productId,
        // loginName,
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
            Toast(errMsg);
          }
        });
    },
    async loadTicket(obj) {
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
        return;
      }

      this.usdt = json.loginName.substring(json.loginName.length - 4) == "usdt";

      this.setAppinfoTickt(json.ticket);
      this.setAppinfoLoginName(json.loginName);
      this.$loading.show({
        text: "Loading",
      });
      if (Object.keys(this.$store.state.h5Token).length < 1) {
        await this.AH5Token();
      }
      this.$loading.hide();
    },
    toLogin() {
      window.location = "nbapp://openLoginPage?data={}";
    },
    jumpKefuNative() {
      window.location = "nbapp://openServicePage?data={}";
    },
    isLogin() {
      return (
        this.$store.state.appInfo.ticket == "" ||
        this.$store.state.appInfo.loginName == ""
      );
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
          Toast("领取按钮5秒内只能响应1次");
          return;
        }
        this.clickTime = now;
      }

      this.$loading.show({
        text: "Loading",
      });

      let productId = this.$store.state.appInfo.productId;
      let loginName = this.$store.state.appInfo.loginName;

      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let h5Token = this.$store.state.h5Token;
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
          h5Token.token +
          h5Token.u2token
      );
      await axios
        .post(this.$api.saveGiveAway.usdtDepositGift, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            sign,
            token: h5Token.token,
          },
        })
        .then((res) => {
          console.log("领取洗码金额", res);
          let flag = res.data.head.errCode;
          Toast(res.data.head.errMsg);
          if (flag == 200 || flag == 201) {
            setTimeout(() => {
              this.jumpKefuNative();
            }, 2000);
          }
        })
        .finally(() => {
          this.$loading.hide();
        });
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/normaliz.scss";
@import "@/assets/css/screen750.scss";
</style>
<style lang="scss" scoped>
@import "./h5.scss";
</style>