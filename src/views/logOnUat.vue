<template>
  <div class="logOn" @touchmove.prevent>
    <div class="view">
      <Scrapper class="scroll" ref="view">
        <div class="top">
          <img src="../assets/img/logOn/banner.png" />
        </div>
        <div class="contentBox">
          <h3>
            {{
              start_time
            }}起，会员在个人中心完成银行卡绑定，即可在本活动页面领取10元彩金。
          </h3>
          <!-- <h3 class="time">活动时间：2020年05月01日起</h3> -->
          <!-- <h3 class="fs">参与方式：联系在线客服领取</h3> -->
          <a class="receive" @click="receive">
            <img src="../assets/img/logOn/receive.png"
          /></a>
          <h6><img src="../assets/img/logOn/title.png" /></h6>
          <ul class="rule">
            <li>1、完成1倍流水即可提款，无需存款。</li>
            <li>2、最低提款金额100元</li>
            <li>3、注册彩金最高提款180元</li>
            <li>
              4、同一手机号、姓名、银行卡号、IP地址等信息仅可享受一次此优惠，如有违规会员，我们将保留无限期审核扣回红利及所产生的权利。
            </li>
            <li>
              5、参与优惠则视为认可并同意遵守活动规则，为避免文字理解差异，ONE电竞保留对此活动的最终解释权。
            </li>
          </ul>
        </div>
      </Scrapper>
      <div v-if="alert" class="alertBox">
        <div class="alert">
          <h3>{{ Msg }}</h3>
          <a @click="close">确定</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/logOn.scss";
import Scrapper from "@/component/Scrapper";
import axios from "axios";
import md5 from "js-md5";
let Base64 = require("js-base64").Base64;
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      alert: false,
      Msg: "",
      start_time: "",
      ticket: null,
      loginName: null,
    };
  },
  created() {
    window.loadTicket = this.loadTicket;
  },
  methods: {
    ...mapActions(["AWebToken", "AH5Token"]),
    ...mapMutations({
      setAppinfoTickt: "SET_APPINFO_TICKET",
      setAppinfoLoginName: "SET_APPINFO_LOGINNAME",
    }),
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
    isLogin() {
      return (
        this.$store.state.appInfo.ticket == "" ||
        this.$store.state.appInfo.loginName == ""
      );
    },
    receive() {
      // this.receive1()
      if (this.isLogin()) {
        this.toLogin();
        return;
      }
      let {
        ticket,
        loginName,
        appId,
        productId,
        deviceId,
        domainName,
        v,
      } = this.$store.state.appInfo;
      let h5Token = this.$store.state.h5Token;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + this.rando(6));
      // let appId = "5614IRCtfm1a7BJsC5VTH5yUw8efnhwn";
      // let v = "1.0.0";
      // let data = {
      //   productId: "a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi",
      // };
      // let a = JSON.stringify(data);
      // let sign = md5(this.reverseStrings(a) + qid + appId + v);
      // axios
      //   .post("http://uatc08-mobile.bawinx.com/_glaxy_e1s2e8_/webToken", data, {
      //     headers: {
      //       qid: qid,
      //       appId: "5614IRCtfm1a7BJsC5VTH5yUw8efnhwn",
      //       v: "1.0.0",
      //       sign,
      //     },
      //   })
      //   .then((response) => {
      //     let webToken = JSON.parse(Base64.decode(response.data.body.info));
      //     let data = {
      //       productId: "a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi",
      //       ticket: ticket,
      //       loginName: loginName,
      //     };
      //     let a = JSON.stringify(data);
      //     let sign1 = md5(
      //       this.reverseStrings(a) +
      //         qid +
      //         appId +
      //         v +
      //         webToken.token +
      //         webToken.u2token
      //     );
      //     axios
      //       .post(
      //         "http://uatc08-mobile.bawinx.com/_glaxy_e1s2e8_/getH5TokenByTempTicket",
      //         data,
      //         {
      //           headers: {
      //             qid: qid,
      //             appId: "5614IRCtfm1a7BJsC5VTH5yUw8efnhwn",
      //             v: "1.0.0",
      //             timestamp: timestamp,
      //             sign: sign1,
      //             token: webToken.token,
      //             SrcAppId: "5614IRCtfm1a7BJsC5VTH5yUw8efnhwn",
      //           },
      //         }
      //       )
      //       .then((response) => {
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      // let isIos = !!u.match(/\(i[^;]+(u;)? CPU.+Mac OS X/)
      let platform = 1;
      if (!isAndroid) {
        platform = 2;
      }

      let data1 = {
        loginName,
        productId,
        activityId: 1,
      };
      axios
        .post(this.$api.logOnUat.register, data1, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            platform,
            token: h5Token.token,
            domainName,
            deviceId,
          },
        })
        .then((response) => {
          console.log(response);
          this.alert = true;
          this.Msg = response.data.head.errMsg;
        })
        .catch((error) => {
          // console.log(error)
          this.alert = true;
          this.Msg = error.response.data.head.errMsg;
        });
      //     });
      // });
    },
    getQueryVariable(name) {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      let r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return decodeURIComponent(r[2]);
      }
      return null;
    },
    reverseStrings(strs) {
      return strs.split("").sort().reverse().join("");
    },
    close() {
      this.alert = false;
    },
    rando(m) {
      let num = "";
      for (let i = 0; i < m; i++) {
        let val = parseInt(Math.random() * 10, 10);
        if (i === 0 && val === 0) {
          i--;
          continue;
        }
        num += val;
      }
      return num;
    },
  },
  mounted() {
    let u = navigator.userAgent;
    let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
    // let isIos = !!u.match(/\(i[^;]+(u;)? CPU.+Mac OS X/)
    let platform = 1;
    if (!isAndroid) {
      platform = 2;
    }
    let timestamp = Date.parse(new Date());
    let qid = md5(timestamp + this.rando(6));
    let {appId,domainName,deviceId,v} = this.$store.state.appInfo
    let data = {
      activityId: 1,
    };
    axios
      .post(this.$api.logOnUat.info, data, {
        headers: {
          qid,
          appId,
          v,
          timestamp,
          platform,
          // token:token,
          domainName,
          deviceId,
        },
      })
      .then((response) => {
        this.start_time = response.data.body.start_time.split(" ")[0];
      });
  },
  components: {
    Scrapper,
  },
  computed: {},
};
</script>
