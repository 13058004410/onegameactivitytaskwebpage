<template>
  <div class="container" ref="main">
    <!-- 大横幅 -->
    <div class="banner">
      <div class="img-tittle">
          <img src="../../assets/img/newYearRedEnvelope/hdnr_tit_h5.png" alt="">
        </div>
    </div>
    <!-- 下方详细内容 -->
    <div class="content">
      
      <!-- 上面活动内容 -->
      <div class="activityContent">
        <!-- 上面大红包 -->
        <div class="bigRedEnvelope" @click="openRedBag">
          <img src="../../assets/img/newYearRedEnvelope/hanging window_pc.png" alt="">
          <p>你当前共有<span class="special-text">&nbsp;{{ totalCount }}&nbsp;</span>次机会</p>
        </div>
        <!-- 中奖啦 -->
        <div class="winning" ref="winning" v-if="isOpen === true" @click="closeRedBag">
          <img src="../../assets/img/newYearRedEnvelope/8_pc.png" alt="" v-if=" prizeAmount === 8 ">
          <img src="../../assets/img/newYearRedEnvelope/88_pc.png" alt="" v-else-if=" prizeAmount === 88 ">
          <img src="../../assets/img/newYearRedEnvelope/888_pc.png" alt="" v-else-if=" prizeAmount === 888 ">
        </div>
        <!-- 上面列表 -->
        <div class="list-title">
          <div>单日累计存款</div><div>开启红包次数</div>
        </div>
        <ul class="list">
          <li><span>1000CNY</span><span>1</span></li>
          <li><span>3000CNY</span><span>1</span></li>
          <li><span>5000CNY</span><span>2</span></li>
          <li><span>10000CNY</span><span>2</span></li>
          <li><span>30000CNY</span><span>3</span></li>
          <li><span>50000CNY</span><span>5</span></li>
          <li><span>100000CNY</span><span>6</span></li>
          <li><span>200000CNY</span><span>10</span></li>
        </ul>
        <!-- 下面列表 -->
        <div class="list-title">
          <div>新年红包</div><div>流水倍数</div>
        </div>
        <ul class="list">
          <li><span>8CNY</span><span>1倍</span></li>
          <li><span>88CNY</span><span>1倍</span></li>
          <li><span>888CNY</span><span>1倍</span></li>
          <li><span>8888CNY</span><span>1倍</span></li>
        </ul>
      </div>
      <!-- 下面活动规则 -->
      <div class="activityRules">
        <div class="img-tittle">
          <img src="../../assets/img/newYearRedEnvelope/hdgz_tit_h5.png" alt="">
        </div>
        <div class="text">
          <p>1. 活动期间（1月21日-1月27日）ONE游戏新老会员满足条件（累计存款）即可获得开启红包机会。每达成一档即可获得相应的开启次数，单日累计最高可获得30次开启红包的机会。红包开启机会仅当日有效，如当日未使用将清零，不累计到次日。</p>
          <p>2. 累计存款统一以CNY为计算单位，USDT账户的USDT存款以1USDT=7CNY换算成CNY计算。</p>
          <p>3. 本活动与洗码优惠共享。红包礼金需完成<span class="special-text">1倍流水</span>，不限场馆。</p>
          <p>4. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
          <p>5. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from "js-md5";
import { UA } from '@/util/ua';
import { mapActions, mapMutations, mapState } from "vuex";
import {
  getTodayDate,
  getYestodayDate,
  getQueryVariable,
  rando,
  reverseStrings,
  toLogin,
  getCurDate,
  getWeekStartDate,
  getWeekEndDate,
  getLastWeekStartDate,
  getLastWeekEndDate,
} from "../../assets/js/tools";

export default {
  props: {
    userLoginInfo:{
      type:String,
      defualt:'121212'
    }
  },
  data() {
    return {
      loginName:'',
      isOpen:false,  //红包是否打开
      prizeAmount:null, //中奖红包金额
      newDraw:{},  //抽奖接口返回的数据
      totalCount:0,  //当前剩余机会
      yestoday:getYestodayDate(),
      today:getTodayDate(),
      loginStatus: false,
      token: "",
      u2token: "",
      website: false,
      ticketApp: false
    }
  },
  async created() {
    let that = this
    window.loadTicket = this.loadTicketApp;
    setTimeout(() => {
      window.location = "nbapp://getTicket?data={}";
    }, 1000);
    window.addEventListener("message", this.onMessage);
    this.openPCHandle("sendDataIframe");
    const _par = {
      token: this.token,
      loginName: this.loginName,
      u2token:this.u2token
    }
    that.qualifiedQuery(_par)
  },
  mounted() {
    // this.openPCHandle("reloadPageSize", {
    //   height: this.$refs.main.clientHeight,
    // });
    console.log(this.appInfo)
    console.log(this.userLoginInfo,111111111111)
  },
  destroyed(){
    window.removeEventListener("message",this.onMessage)
  },
  computed: {
    ...mapState(['appInfo']),
    loginValue() {
      return this.isLogin() && !this.loginStatus
    }
  },
  watch: {
    appInfo: function() {
      console.log(appInfo.loginName)
    },
    h5TokenStore: function () {
      let that = this;
      that.$loading.hide();
    }
  },
  methods: {
    ...mapActions(["AWebToken", "AH5Token"]),
    ...mapMutations({
      setAppinfoTickt: "SET_APPINFO_TICKET",
      setAppinfoLoginName: "SET_APPINFO_LOGINNAME",
    }),
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
        console.log('json 解析错误')
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
    //通过这个方法可以获取父组件传过来的数据，这里边就有包含loginName
    onMessage(event){
      let funcs = {
        loadTicket: this.loadTicket,
      };
      console.log("子iframe监听事件名字", event);
      let func = funcs[event.data.message];
      if (func) {
        func(event.data);
      } else {
        console.log("点击监听测试");
      }
    },
    async loadTicket(data) {
      console.log(data)
      if (data.loginStatus) {
        this.loginStatus = data.loginStatus;
        this.token = data.token;
        this.loginName = data.loginName;
        this.u2token = data.u2token;
        this.usdt = data.currency == "USDT" ? true : false;
        this.$loading.show({
          text: "Loading",
        });
        this.$loading.hide();
      }
    },
    toLogin() {
      if(this.website){
        this.openPCHandle("openRecharge");
      }else {
        window.location = "nbapp://openLoginPage?data={}";
      }
    },
    isLogin() {
      // return !this.loginStatus;
      return this.$store.state.h5Token.token == undefined;
    },
    //中奖后关闭模态框
    closeRedBag(){
      this.isOpen = false;
    },
    //点击红包抽奖
    openRedBag(){
      console.log('打开')
      // if(this.isOpen){
      //   this.$refs.winning.style.display = 'block'
      // }else{
      //   this.$refs.winning.style.display = 'none'
      // }
      if(this.loginName){
        this.chouJiang(this.loginName)
        this.isOpen = true;
      }else{
        console.log('未拿到loginName，请刷新页面')
      }
    },
    //查询机会使用情形
    async qualifiedQuery(data) {
      console.log(data)
      let that = this;
      let beginDate = this.today + " 00:00:00";
      let endDate = this.today + " 23:59:59";
      let loginName = data.loginName;
      let token = data.token;
      let u2token = data.u2token;
      let productId = this.$store.state.appInfo.productId;
      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let domainName = this.$store.state.appInfo.domainName;
      let deviceId = this.$store.state.appInfo.deviceId;
      let appId = "zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9";
      let data1 = {
        // productId: 'a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi'
        productId
      }
      let a = JSON.stringify(data1)
      let sign = md5(reverseStrings(a) + qid + appId + v)
      
      //获取token
      //   .post(that.$api.global.webToken, data1, {
      //     headers: {
      //       qid: qid,
      //       appId,
      //       v,
      //       sign
      //     }
      //   })
      //   .then((response) => {
      //     let webToken = JSON.parse(Base64.decode(response.data.body.info))
      //     if(response){
      //       console.log(webToken)
      //     }
        let activityCode = "BEL2fUF3vc"
        let sendData = {
          productId,
          activityCode,
          loginName,
          beginDate,
          endDate
        }
        let sendDataString = JSON.stringify(sendData);
        sign = md5(
          reverseStrings(sendDataString) +
            qid +
            appId +
            v +
            token +
            u2token
        )
        await axios
        .post(that.$api.newYearRedEnvelope.qualified, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            deviceId,
            domainName,
            sign,
            token,
          },
        }).then((res)=>{
          console.log(res.data.head)
          if(res.data.head.errCode === 200){
            if(res.data.body){
              console.log(res.data.body)
              this.totalCount = res.data.body.totalCount
            }
          }else{
            this.openPCHandle("openDialog", { msg: res.data.head.errMsg });
            this.closeRedBag()
          }
        })
      // })
    },
    //抽奖接口
    async chouJiang (data){
      let that = this;
      console.log(data)
      let loginName = data;
      let productId = this.$store.state.appInfo.productId;
      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let domainName = this.$store.state.appInfo.domainName;
      let deviceId = this.$store.state.appInfo.deviceId;
      let appId = "zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9";
      let sendData = {
        productId:productId,
        activityCode: "BEL2fUF3vc",
        loginName: loginName,
        drawCount: "1"
      }
      let sendDataString = JSON.stringify(sendData);
      let sign = md5(
        reverseStrings(sendDataString) +
          qid +
          appId +
          v +
          this.token +
          this.u2token
      );
      return await axios
        .post(that.$api.newYearRedEnvelope.newDraw, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            deviceId,
            domainName,
            sign,
            token: this.token,
          },
        }).then((res)=>{
          console.log(res.data.head)
          if(res.data.head.errCode === 200){
            if(res.data.body){
              console.log(res.data.body[0])
              this.newDraw = res.data.body[0]
              console.log(this.newDraw)
              this.prizeAmount = res.data.body[0].prizeAmount
              console.log(this.prizeAmount)
            }
          }else{
            this.openPCHandle("openDialog", { msg: res.data.head.errMsg });
            this.closeRedBag()
          }
        })
    },
    //向父组件发送数据
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      };
      window.parent.postMessage(info, "*");
    },
  }
}
</script>

<style lang="scss" scoped>
@import "./h5.scss";
* {
  touch-action: pan-y;
}
</style>