<template>
  <div class="world-cup-final-page">
    <img class="banner" src="./img/banner.jpg" alt="" />
    <div class="content-view">
      <div class="field-view">
        <van-field
          :border="false"
          left-icon="orders-o"
          v-model="login.phoneNumber"
          placeholder="请输入手机号"
          maxlength="11"
          :center="true"
          type="tel"
          require
          @blur="checkphone"
        />
        <van-field
          :border="false"
          left-icon="bag-o"
          :right-icon="isShowPwd ? 'closed-eye' : 'eye-o'"
          :type="isShowPwd ? 'password' : 'text'"
          @click-right-icon="isShowPwd = !isShowPwd"
          v-model="login.pwd"
          require
          @blur="checkpassword"
          placeholder="8-16位的字母和数字组合"
        />
        <van-field
          :border="false"
          left-icon="shield-o"
          v-model="login.Vcode"
          placeholder="请输入验证码"
          @blur="checkVcode"
          require
          type="number"
        >
          <template #button>
            <span @click="getCode(1)">{{ codes }}</span>
          </template>
        </van-field>
        <div
          @click="toRegist()"
          :class="[isCanLogin ? 'register-button' : 'register-disable']"
        >
          立即注册
        </div>
      </div>

      <div class="gift-bag-view">
        <img width="215px" height="40px" src="./img/lb1_tit_h5.png" />
        <p>
          新用户注册首存<i>500送168</i>，在体育平台仅需有效投注<i>3倍流水</i>即可提款。
        </p>
      </div>

      <div class="gift-bag-view">
        <img width="215px" height="40px" src="./img/lb2_tit_h5.png" />
        <p>
          新用户首次投注体育的任意赛前盘口，若注单结果为输，则可100%退还本金，最高可达<i>200元/29USDT3倍流水</i>可提款。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Icon,
  Dialog,
  Image as VanImage,
  Field,
  Empty,
  Overlay,
  List,
  Toast,
  Button,
  Form,
} from "vant";
import md5 from "js-md5";
import {
  rando,
  getRandom,
  formatDate,
  reverseStrings,
} from "@/assets/js/tools";
import appConfig from "@/config/config";
import { mapActions, mapMutations } from "vuex";
import axios from "axios";
import Vue from "vue";
import ba from "vue-ba";
Vue.use(ba, "80cb366b41d19eea1ff095640591491a");
export default {
  components: {
    VanImage,
    Field,
    Dialog,
    Empty,
    Overlay,
    Icon,
    List,
    Button,
    Form,
  },
  data() {
    return {
      active: 1,
      imgSrc: "",
      data: {},
      guessList: [],
      show2: false,
      historicalDetails: {},
      loading: false,
      finished: true,
      page: 1,
      pagesize: 10,
      error: false,
      down: true,
      scrollDown: 0,
      winningRecord: [],
      winningLoading: false,
      winningFinished: true,
      winningError: false,
      winningPage: 1,
      lodaInfo: false,
      showLongUP: false,
      login: {
        phoneNumber: "",
        pwd: "",
        Vcode: "",
      },
      errM: {
        phoneNumber: "",
        pwd: "",
        Vcode: "",
      },
      haveName: true,
      usePhone: false,
      setTime: null,
      codes: "获取验证码",
      ischoose: "1",
      codeid: "",
      webToken: "",
      timeschinese: "本场竞猜时间:",
      isShowPwd: true,
      isCanLogin: false,
    };
  },
  computed: {
    h5TokenStore() {
      return this.$store.state.h5Token;
    },
  },
  watch: {
    h5TokenStore: async function () {
      this.$loading.show({
        text: "Loading",
      });

      let { data, message: msg } = await this.getNBAGuessInfo();
      if (msg) {
        Toast(msg);
      } else {
        this.page = 1;
        this.finished = false;
        this.onLoad();
        this.data = data;
        this.lodaInfo = true;
        // }
      }

      this.$loading.hide();
    },
    guessList: function (val, preVal) {
      if (val.length > 0) {
        if (preVal.length == 0) {
          this.$refs.list.$el.onscroll = this.scroll;
        } else {
          this.down = true;
        }
      }
    },
    show2: function (val) {
      if (val == false) {
        this.historicalDetails = {};
      }
    },
    active: function (val) {
      console.log(val);
      if (val === 1) {
        this.getdatas();
      } else {
        if (this.isLogin()) {
          // this.active =1
          this.showLongUP = true;
          return;
        }
        this.gethistorylist();
      }
    },
  },
  async created() {
    window.loadTicket = this.loadTicket;

    this.$loading.show({
      text: "Loading",
    });
    let { imgSrc, message } = await this.getBootstrap();
    if (message) {
      Toast(message);
    } else {
      this.receive();
      let { data = {}, message: msg } = await this.getNBAGuessInfo();

      if (msg) {
        this.timeschinese = msg;
      } else {
        if (sessionStorage.getItem("myphone")) {
          this.gethistorylist();
          this.lodaInfo = true;
        }
        this.imgSrc = imgSrc;
        this.data = data;
      }
    }

    this.$loading.hide();
  },
  methods: {
    ...mapActions(["AWebToken", "AH5Token"]),
    ...mapMutations({
      setAppinfoTickt: "SET_APPINFO_TICKET",
      setAppinfoLoginName: "SET_APPINFO_LOGINNAME",
    }),
    formatDate() {
      if (this.data) {
        if (this.data.start_time && this.data.end_time) {
          let time1 = this.data.start_time.replace(/-/g, "/");
          let time2 = this.data.end_time.replace(/-/g, "/");
          time1 = time1.substring(0, time1.length - 3);
          time2 = time2.substring(0, time2.length - 3);
          return time1 + " ~ " + time2;
        } else {
          return "0000-00-00 00:00 ~ 0000-00-00 00:00";
        }
      }
    },
    showItem(data = 0, idx = 0) {
      console.log(data);
      if (data === 0) {
        return;
      }
      let datas = data.indexOf(idx) != -1;
      console.log(datas);
      if (datas) {
        return true;
      } else {
        return false;
      }
    },
    async getdatas() {
      let { data, message: msg } = await this.getNBAGuessInfo();
      if (msg) {
        Toast(msg);
      } else {
        this.data = data;
      }
    },
    async gethistorylist() {
      this.page = 1;
      this.finished = false;
      this.loading = true;
      let { data: list = [], message: errMsg } = await this.getMatchGuessList();
      console.log("00");
      if (errMsg) {
        Toast(errMsg);
        this.error = true;
        this.loading = false;
        return;
      } else {
        this.loading = false;
        if (list < 10) {
          this.finished = true;
        }
        this.guessList = list;
      }
    },
    handleLoginName(name = "") {
      let frist = name.substring(0, 3);
      let last = name.substr(-4);
      if (last == "usdt") {
        last = name.substr(-6);
      } else {
        last = name.substr(-2);
      }
      return frist + "***" + last;
    },
    async onLoadWinning() {
      this.winningPage += 1;
      this.winningLoading = true;
      let { winData = [], winErr } = await this.getMatchGuessWin();
      if (winErr) {
        this.winningError = true;
        this.winningLoading = false;
        return;
      }

      if (winData.length < 10) {
        this.winningFinished = true;
      }
      this.winningRecord = [...this.winningRecord, ...winData];
      this.winningLoading = false;
    },
    getMatchGuessWin() {
      let sendData = {
        productId: this.$store.state.appInfo.productId,
        page: this.winningPage,
        pagesize: this.pagesize,
      };

      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(sendData);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      let sign = md5(str);
      let headers = {
        qid,
        appId,
        v,
        platform,
        sign,
        domainName,
        timestamp,
      };
      return axios
        .post(this.$api.nab.matchGuessWin, sendData, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            return { winData: body };
          } else {
            return { winErr: head.errMsg };
          }
        })
        .catch((err) => {
          return { winErr: "获取数据失败" };
        });
    },
    gtouchstart() {
      this.down = false;
    },
    gtouchend() {
      if (this.scrollDown < 50) {
        this.down = false;
      } else {
        this.down = true;
      }
    },
    scroll() {
      let e = this.$refs.list.$el;
      this.scrollDown = e.scrollHeight - e.scrollTop - e.clientHeight;
      if (this.scrollDown < 100) {
        this.down = false;
      }
    },
    async onLoad() {
      // this.loading = true;
      // let { data = [], message } = await this.getMatchGuessList();
      // console.log('onLoad')
      // if (message) {
      //   this.error = true;
      //   this.loading = false;
      //   return;
      // }
      // this.page += 1;

      // if (data.length < 10) {
      //   this.finished = true;
      // }
      // this.guessList = [...this.guessList, ...data];
      this.loading = false;
    },
    submitScore() {
      console.log(new Date(this.data.start_time.replace(/-/g, "/")).getTime());
      console.log(new Date().getTime());
      console.log(new Date(this.data.end_time.replace(/-/g, "/")).getTime());
      if (!this.data.start_time) {
        this.timeschinese = "此活动暂未开放";
        Toast("此活动暂未开放");
        return;
      }

      let start_time = new Date(
        this.data.start_time.replace(/-/g, "/")
      ).getTime();
      let nowtime = new Date().getTime();
      let end_time = new Date(this.data.end_time.replace(/-/g, "/")).getTime();
      if (!(nowtime > start_time) && !(nowtime < end_time)) {
        Toast("活动已结束");
        return;
      }
      console.log(this.isLogin());
      if (this.isLogin()) {
        this.showLongUP = true;
        return;
      }

      if (this.data.left_count < 1) {
        Toast(`您当天的竞猜次数已用完了哦，\n请明天再来吧~`);
        return;
      }
      this.bet();
    },
    bet() {
      this.$loading.show({
        text: "Loading",
      });

      let h5Token = this.$store.state.h5Token;

      let sendData = {
        productId: this.$store.state.appInfo.productId,
        phone: sessionStorage.getItem("myphone"),
        guessType: this.ischoose,
        loginName: sessionStorage.getItem("loginName"),
      };
      console.log(sendData);
      if (h5Token.token != undefined) {
        sendData.loginName = this.$store.state.appInfo.loginName;
      }

      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(sendData);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      let sign = md5(str);
      let headers = {
        qid,
        appId,
        v,
        platform,
        sign,
        domainName,
        timestamp,
      };
      if (h5Token.token != undefined) {
        headers.token = h5Token.token;
        headers.deviceId = h5Token.deviceId;
      }
      return axios
        .post(this.$api.lookBall.matchGuessAdd, sendData, {
          headers,
        })
        .then(async (data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            if (head.errMsg == "-缺少参数-") {
              Toast("登录状态过期 请重新登陆");
              this.lodaInfo = false;
              this.showLongUP = true;
              return;
            }
            Toast(head.errMsg);
            this.timeschinese = "本场竞猜时间:";
            this.getdatas();
            this.gethistorylist();
          } else {
            // this.timeschinese=errMsg
            Toast(errMsg);
          }
        })
        .catch((err) => {
          this.timeschinese = "此活动暂未开放";
          Toast("此活动暂未开放");
        })
        .finally(() => {
          this.$loading.hide();
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
    getBootstrap() {
      let productId = this.$store.state.appInfo.productId;

      let v = (v = this.$store.state.appInfo.v);
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let webToken = this.$store.state.webToken;
      let extraPath = "/bootstrap";
      let extraStr = `${appId}.${platform}.${qid}.${timestamp}${
        webToken ? "." + webToken.token : ""
      }.${v}.${extraPath}`;
      let extraSalt = appConfig.salt;
      let extraSign = md5(md5(extraStr) + extraSalt); // 产品网关签名
      console.log(webToken.toke + "n00");
      console.log("extraStr", extraStr);
      let sendData = {
        app_type: 1,
        productId: productId,
      };
      return axios
        .post(this.$api.global.bootstrap, sendData, {
          headers: {
            qid,
            appid: appId,
            v,
            timestamp,
            platform,
            sign: extraSign,
            token: webToken.token,
          },
        })
        .then((res) => {
          if (res.data.head.errCode === 200) {
            let imgSrc = res.data.body.img_domains;

            return { imgSrc: imgSrc };
          } else {
            return { message: res.data.head.errMsg };
          }
        })
        .catch((err) => {
          return { message: "数据获取失败" };
        });
    },
    getNBAGuessInfo() {
      let that = this;
      let h5Token = this.$store.state.h5Token;
      let myphone = sessionStorage.getItem("myphone");
      console.log(myphone + "pp");
      let sendData = {
        phone: myphone,
      };
      if (h5Token.token != undefined) {
        sendData.loginName = this.$store.state.appInfo.loginName;
      }

      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(sendData);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      let sign = md5(str);
      let headers = {
        qid,
        appId,
        v,
        platform,
        sign,
        domainName,
        timestamp,
      };
      if (h5Token.token != undefined) {
        headers.token = h5Token.token;
        headers.deviceId = h5Token.deviceId;
      }
      return axios
        .post(this.$api.lookBall.matchGuessInfo, sendData, {
          //查询对决信息
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            if (!body) {
              return { message: head.errMsg };
            } else {
              return { data: body };
            }
          } else {
            return { message: head.errMsg };
          }
        })
        .catch((err) => {
          return { message: "获取数据失败" };
        });
    },
    getMatchGuessList() {
      let h5Token = this.$store.state.h5Token;

      let myphone = sessionStorage.getItem("myphone");
      let sendData = {
        phone: myphone,
      };
      if (h5Token.token != undefined) {
        sendData.loginName = this.$store.state.appInfo.loginName;
        sendData.page = this.page;
        sendData.pagesize = this.pagesize;
      }

      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(sendData);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      let sign = md5(str);
      let headers = {
        qid,
        appId,
        v,
        platform,
        sign,
        domainName,
        timestamp,
      };
      if (h5Token.token != undefined) {
        headers.token = h5Token.token;
        headers.deviceId = h5Token.deviceId;
      }
      return axios
        .post(this.$api.lookBall.matchGuessList, sendData, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            return { data: body };
          } else {
            if (head.errMsg == "缺少参数") {
              Toast("登录状态过期 请重新登陆");
              this.lodaInfo = false;
              this.showLongUP = true;
              return;
            }
            return { message: head.errMsg };
          }
        })
        .catch((err) => {
          return { message: "获取数据失败" };
        });
    },
    toLogin() {
      // window.location = "nbapp://openLoginPage?data={}";
      this.showLongUP = true;
    },
    isLogin() {
      return sessionStorage.getItem("myphone") == undefined;
    },
    reverseStrings(strs) {
      return strs.split("").sort().reverse().join("");
    },
    closeX() {
      this.showLongUP = false;
    },
    goLoging() {
      //去登录
      console.log("去登录");
      this.haveName = true;
      this.usePhone = true;
      this.refresh();
      this.cleans();
      // haveName: false,
      // usePhone: false
    },
    goRegist() {
      //去注册
      console.log("去注册");
      this.haveName = false;
      this.refresh();
      this.cleans();
    },
    toLoging() {
      //登录
      // .login.phoneNumber
      console.log(this.usePhone + "用什么登录");
      if (!this.usePhone) {
        if (!this.login.phoneNumber) {
          this.errM.phoneNumber = "您还没有输入手机号哦！";
          return false;
        } else if (!this.login.pwd) {
          if (!this.login.pwd) {
            this.errM.pwd = "您还没有输入密码哦！";
            return false;
          }
        }
        this.logins();
      } else {
        if (!this.login.phoneNumber) {
          this.errM.phoneNumber = "您还没有输入手机号哦！";
          return false;
        } else if (!this.login.Vcode) {
          if (!this.login.Vcode) {
            this.errM.Vcode = "您还没有输入验证码哦！";
            return false;
          }
        }
        this.loginByMobileEx();
      }
      console.log("登录");
    },
    toRegist() {
      //注册
      console.log("注册");
      if (!this.login.phoneNumber) {
        this.errM.phoneNumber = "您还没有输入手机号哦！";
        return false;
      } else if (!this.login.pwd) {
        if (!this.login.pwd) {
          this.errM.pwd = "您还没有输入密码哦！";
          return false;
        }
      } else if (!this.login.Vcode) {
        if (!this.login.Vcode) {
          this.errM.Vcode = "您还没有输入验证码哦！";
          return false;
        }
      }

      this.createAccountByMobileNo();
    },
    changePhone(name) {
      //手机登录&密码登录
      if (name === "phone") {
        this.usePhone = true;
      } else {
        this.usePhone = false;
      }
    },
    getCode(data) {
      let trues = this.checkphone();
      console.log(this.$encrypt(1));
      console.log(trues);
      if (trues && this.setTime === null) {
        this.sendCode(data);
      } else {
        console.log("验证码已发送");
        //  this.cleans()
        //  this.timeCode()
      }
    },
    timeCode() {
      let that = this;
      let times = 60000;
      that.setTime = setInterval(() => {
        if (times >= 1000) {
          times -= 1000;
          that.codes = times / 1000;
          console.log(times);
        } else {
          that.cleans();
        }
      }, 1000);
    },
    cleans() {
      let that = this;
      clearInterval(that.setTime);
      that.setTime = null;
      that.codes = "获取验证码";
    },
    chooseWin(n) {
      this.ischoose = n;
    },
    createAccountByMobileNo() {
      //手机注册提交
      let that = this;
      let productId = this.$store.state.appInfo.productId;
      let data = {
        smsCode: that.login.Vcode.trim(),
        messageId: that.codeid,
        productId: productId,
        password: that.$encrypt(that.login.pwd.trim()),
        channel: "看个球竞猜",
      };
      let h5Token = this.webToken;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(data);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      let sign = md5(str);
      let parentid = "1001224405";
      // console.log('999')
      let headers = {
        qid,
        appId,
        v,
        platform,
        sign,
        domainName,
        timestamp,
        deviceId: this.$store.state.appInfo.deviceId,
        token: h5Token,
        parentid,
      };
      if (h5Token.token != undefined) {
        headers.token = h5Token.token;
        headers.deviceId = h5Token.deviceId;
      }
      // console.log('999'+ JSON.stringify(headers))
      axios
        .post(this.$api.lookBall.createAccountByMobileNo, data, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == "0000") {
            that.goLoging();
            Toast("注册成功");
            window.location.href = "https://onegame.bet/login";
          } else {
            Toast(head.errMsg);
          }
        })
        .catch((err) => {
          Toast("注册失败");
        });
    },
    loginByMobileEx() {
      let that = this;
      let productId = this.$store.state.appInfo.productId;
      let data = {
        messageId: that.codeid,
        smsCode: that.login.Vcode.trim(),
        productId: productId,
      };
      let h5Token = this.webToken;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(data);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      let sign = md5(str);
      let headers = {
        qid,
        appId,
        v,
        platform,
        sign,
        domainName,
        timestamp,
        deviceId: this.$store.state.appInfo.deviceId,
        token: h5Token,
      };
      if (h5Token.token != undefined) {
        headers.token = h5Token.token;
        headers.deviceId = h5Token.deviceId;
      }
      axios
        .post(this.$api.lookBall.loginByMobileEx, data, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == "0000") {
            if (data.data.body.loginName) {
              sessionStorage.setItem("myphone", that.login.phoneNumber);
              sessionStorage.setItem("loginName", data.data.body.loginName);
              that.getdatas();
              this.gethistorylist();
              that.lodaInfo = true;
              that.refresh();
              that.closeX();
              Toast("登录成功");
            } else {
              Toast("登录失败，请去App修改用户名");
            }
          } else {
            sessionStorage.removeItem("myphone");
            sessionStorage.removeItem("loginName");
            Toast(head.errMsg);
          }
        })
        .catch((err) => {
          sessionStorage.removeItem("myphone");
          sessionStorage.removeItem("loginName");
          Toast("登录失败");
        });
    },
    logins() {
      let that = this;
      let productId = this.$store.state.appInfo.productId;
      let data = {
        mobileNo: that.$encrypt(that.login.phoneNumber),
        password: that.$encrypt(that.login.pwd),
        productId: productId,
        loginType: "1",
      };
      // let h5Token = this.$store.state.h5Token;
      let h5Token = this.webToken;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(data);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      let sign = md5(str);
      let headers = {
        qid,
        appId,
        v,
        platform,
        sign,
        domainName,
        timestamp,
        deviceId: this.$store.state.appInfo.deviceId,
        token: h5Token,
      };
      if (h5Token.token != undefined) {
        headers.token = h5Token.token;
        headers.deviceId = h5Token.deviceId;
      }
      axios
        .post(this.$api.lookBall.login, data, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == "0000") {
            if (data.data.body.loginName) {
              sessionStorage.setItem("myphone", that.login.phoneNumber);
              sessionStorage.setItem("loginName", data.data.body.loginName);
              that.getdatas();
              this.gethistorylist();
              that.lodaInfo = true;
              that.refresh();
              that.closeX();
              Toast("登录成功");
            } else {
              Toast("登录失败，请去App修改用户名");
            }
          } else {
            sessionStorage.removeItem("myphone");
            sessionStorage.removeItem("loginName");
            Toast(head.errMsg);
          }
        })
        .catch((err) => {
          console.log("999");
          sessionStorage.removeItem("myphone");
          sessionStorage.removeItem("loginName");
          Toast("登录失败");
        });
    },
    sendCode(n) {
      let that = this;
      let productId = this.$store.state.appInfo.productId;
      let data = {
        mobileNo: that.$encrypt(that.login.phoneNumber),
        productId: productId,
        use: n,
      };
      let h5Token = this.webToken;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(data);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      let sign = md5(str);
      let headers = {
        qid,
        appId,
        v,
        platform,
        sign,
        domainName,
        timestamp,
        deviceId: this.$store.state.appInfo.deviceId,
        token: h5Token,
      };
      if (h5Token.token != undefined) {
        headers.token = h5Token.token;
        headers.deviceId = h5Token.deviceId;
      }
      axios
        .post(this.$api.lookBall.sendCode, data, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == "0000") {
            that.codeid = body.messageId;
            this.timeCode();
            Toast("验证码发送成功");
          } else {
            Toast("验证码发送失败");
          }
        })
        .catch((err) => {
          Toast("验证码发送失败");
        });
    },
    checkphone() {
      console.log("手机规则校验");
      let reg = /^1[0-9]{10}$/;
      if (!this.login.phoneNumber) {
        this.isCanLogin = false;
         Toast("您还没有输入手机号哦！");
        this.errM.phoneNumber = "您还没有输入手机号哦！";
        return false;
      } else if (!reg.test(this.login.phoneNumber)) {
         this.isCanLogin = false;
         Toast("手机号输入有误!");
        this.errM.phoneNumber = "手机号输入有误!";
        return false;
      } else {
        this.isCanLogin = true;
        this.errM.phoneNumber = "";
        return true;
      }
    },
    checkpassword() {
      console.log("手机规则校验");
      let reg = /(?=.*[0-9])(?=.*[a-zA-Z]).{8,16}/;
      if (!this.login.pwd) {
        this.errM.pwd = "您还没有输入密码哦！";
        return false;
      } else if (!reg.test(this.login.pwd)) {
        this.errM.pwd = "密码必须是8-16位的数字，字符组合";
        return false;
      } else {
        this.errM.pwd = "";
        return true;
      }
    },
    checkVcode() {
      if (!this.login.Vcode) {
        // this.errM.Vcode = '您还没有输入验证码哦！'
        this.errM.Vcode = "";
        return false;
      } else {
        this.errM.Vcode = "";
        return true;
      }
    },
    refresh() {
      this.login.phoneNumber = "";
      this.login.pwd = "";
      this.login.Vcode = "";
      this.errM.phoneNumber = "";
      this.errM.pwd = "";
      this.errM.Vcode = "";
    },
    receive() {
      let that = this;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let productId = this.$store.state.appInfo.productId;
      let data = {
        productId: productId,
      };
      let a = JSON.stringify(data);
      let sign = md5(reverseStrings(a) + qid + appId + v);
      axios
        .post(this.$api.global.webToken, data, {
          headers: {
            qid: qid,
            appId: appId,
            v: v,
            sign,
          },
        })
        .then((response) => {
          that.webToken = JSON.parse(Base64.decode(response.data.body.info));
        });
    },
    goOne() {
      console.log("前往one体育");
      // 安卓端跳转
      let urls = "oneSport://";
      var iFrame;
      var u = navigator.userAgent;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      console.log("isAndroid", isAndroid, isiOS);
      if (isAndroid) {
        //安卓终端使用iframe
        iFrame = document.createElement("iframe");
        iFrame.setAttribute("src", urls);
        iFrame.setAttribute("style", "display:none;");
        iFrame.setAttribute("height", "0px");
        iFrame.setAttribute("width", "0px");
        iFrame.setAttribute("frameborder", "0");
        document.body.appendChild(iFrame);
        // 发起请求后这个 iFrame 就没用了，所以把它从 dom 上移除掉
        iFrame.parentNode.removeChild(iFrame);
        iFrame = null;
        // 如果用户没有安装APP，则提示用户去安装APP
        setTimeout(() => {
          window.location.href = "https://official.onesports.app"; // 这里可以自行写一个延时关闭的弹窗，也可以跳转至app下载地址
        }, 2000);
      } else if (isiOS) {
        //iOS终端直接页面跳转
        window.location.href = urls;
        // 如果用户没有安装APP，则提示用户去安装APP
        setTimeout(() => {
          window.location.href = "https://official.onesports.app"; // 这里可以自行写一个延时关闭的弹窗，也可以跳转至app下载地址
        }, 2000);
      } else {
        window.location.href = urls;
      }
    },
  },
  filters: {
    filterWin(n) {
      switch (n) {
        case 1:
          return "待开奖";
          break;
        case 2:
          return "已中奖";
          break;
        case 3:
          return "未中奖";
          break;
        default:
          return "待开奖";
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.world-cup-final-page {
  width: 100vw;
  height: calc(100vh + 200px);
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(140, 12, 64, 0.0001) 0%,
    #89153f 7.05%
  );

  .banner {
    width: 100vw;
    height: 500px;
  }

  .content-view {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    top: 480px;
    left: 0;
    z-index: 100;
    width: 100%;
    height: calc(100vh - 500px);
    background: linear-gradient(
      180deg,
      rgba(140, 12, 64, 0.0001) 0%,
      #89153f 7.05%
    );

    .field-view {
      width: 275px;
      padding-top: 15px;
      padding-bottom: 20px;

      /deep/.van-icon {
        color: #fff;
      }

      /deep/.van-cell {
        border-radius: 6px;
        background: rgba(0, 0, 0, 0.4);
        margin-bottom: 10px;
        height: 38px;
        display: flex;
        align-items: center;

        input {
          color: #fff;
          box-sizing: content-box;
          padding-left: 10px;
          font-size: 12px;
        }

        span {
          color: #fff;
          font-size: 13px;
          font-style: normal;
          padding-left: 10px;
        }
      }

      .register-button {
        margin-top: 18px;
        width: 100%;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, #cd505c 0%, #a82330 100%);
        border-radius: 6px;
        color: #ffffff;
        text-shadow: 0px 0.5px 0px rgba(0, 0, 0, 0.29);
        font-family: "BigruixianBlackGBV1.0";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
      }

      .register-disable {
         margin-top: 18px;
        width: 100%;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #cd505c;
        border-radius: 6px;
        color: #c9aaaa;
        text-shadow: 0px 0.5px 0px rgba(0, 0, 0, 0.29);
        font-family: "BigruixianBlackGBV1.0";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
      }
    }

    .gift-bag-view {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      box-sizing: border-box;
      padding: 0 30px;
      p {
        width: 100%;
        font-style: normal;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;

        i {
          font-style: normal;
          color: #f8cd87;
        }
      }
    }
  }
}
</style>