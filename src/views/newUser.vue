<template>
  <!-- 迎新大礼包首存好礼&首单包赔 -->
  <div class="newUser"
       @touchmove.prevent>
    <div class="view">
      <Scrapper class="scroll"
                ref="view">
        <div class="top">
          <img src="../assets/img/newUser/banner_h5.jpg" />
        </div>
        <div class="main">
          <div class="main-content">
            <div class="gift1"></div>
            <div class="gift1-info">
              <p>
                新用户注册首存<span>500送168</span>，在体育平台仅需3倍有效投注即可提款，用户须首次存款且不低于<span>500元</span>方可进行领取礼包一的优惠活动。
              </p>
            </div>
            <!-- 充值 -->
            <div class="ripple" @click="jump"></div>
             <div class="gift1 gift2"></div>
            <div class="gift1-info">
              <p>
                新用户首次投注体育/电竞赔率≥0.7/1.7的任意赛前盘口，若注单结果为输，则可<span>100%</span>退还本金，最高可达<span>200元/29usdt</span>，彩金3倍流水可提款。
              </p>
            </div>
            <!-- 领取 -->
            <div class="ripple ripplelq" @click="jumpKefuNative"></div>
            <div class="gift1 rulue"></div>
            <div class="rulue-info">
              <p>1. 玩家完善手机号码、姓名和银行卡后才能联系客服申请。</p>
              <p>2. 用户必须首次存款不低于<span>500元</span>方可享受礼包一或礼包二优惠，礼包一优惠需在体育平台达到本金与彩金之和的<span>3倍</span>有效投注才能提款。</p>
              <p>3.任何双边投注及任何赔率低于欧洲盘1.50/香港盘0.50的投注及使用“提前兑现”功能的投注项将不计算在有效投注内。</p>
              <p>4. 礼包一必须在体育平台没有过下注记录之前申请，否则将视为无效。滚球、串关、提前结算注单不在礼包二享受优惠的范围内。礼包一和礼包二只能选择一个，不能共享，本活动与【返水优惠】活动共享，与其他优惠活动不共享。</p>
              <p>5. 此优惠适用于只拥有一个ONE体育账户的玩家，相同的姓名、电话号码、地址、邮箱、IP、相同的银行信息也只可以享受一次。</p>
              <p>6. 若发现套利、对赌和不诚实获取盈利之行为的会员将被取消优惠资格。</p>
              <p>7. 本网站欢迎所有玩家参加活动，对于各种非正常投注，如正反投注等行为，一经发现将取消优惠自资格，并保留进一步处理的权利。</p>
              <p>8. 会员参加任何优惠活动则被视为认可并同意遵守这些规则以及ONE体育的有关规定，愿意受其约束，最终解释权归ONE体育所有。</p>
              <!-- <p>9. 本APP的赛事直播功能只供观看赛事，不作为结算依据。</p> -->
            </div>
          </div>
        </div>
      </Scrapper>
      <div v-if="alert"
           class="alertBox">
        <div class="alert">
          <h3>{{Msg}}</h3>
          <a @click="close">确定</a>
        </div>
      </div>
      <transition name="fade">
        <loading v-if="isLoading"></loading>
      </transition>
    </div>
  </div>
</template>
<script>
import { getQueryVariable, rando, reverseStrings } from '../assets/js/tools'
import '@/assets/css/newUser.scss'
import Scrapper from '@/component/Scrapper'
import Loading from '@/component/Loading'
import { UA } from '@/util/ua'
import axios from 'axios'
import md5 from 'js-md5'
let Base64 = require('js-base64').Base64
import {  Dialog } from "vant";
import { mapActions, mapMutations } from "vuex";
export default {
  components: {
        Dialog
    },
  data () {
    return {
      loginStatus: false,
      token: "",
      loginName: "",
      u2token: "",
      website: false,  
      alert: false,
      Msg: '',
      isLoading: false,
      url: 'https://txyq8r.net',
      ticketApp: false
      // url: "http://uatc08-mobile.bawinx.com"
    }
  },
  computed: {
    h5TokenStore() {
      return this.$store.state.h5Token;
    }
  },
  async created() {
    let that = this 
    window.loadTicket = this.loadTicketApp
    setTimeout(() => {
      if(!that.ticketApp && !that.website && UA() === 1) {
        window.location = "nbapp://getTicket?data={}";  
      }
    }, 1000);
    window.addEventListener("message", this.onMessage);
    this.openPCHandle("sendDataIframe");
    // this.$loading.show({
    // text: "Loading",
    // })
  },
   destroyed(){
    window.removeEventListener("message", this.onMessage)
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
    loadTicket(data) {
      this.website = true
      this.loginStatus = data.loginStatus;
      this.token = data.token;
      this.loginName = data.loginName;
      this.u2token = data.u2token;
    },
    // 判断apptoken
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
    isLogin() {
      return this.$store.state.h5Token.token == undefined;
    },
    // 登录
    toLogin() {  
      if(this.website){
          this.openPCHandle("openRecharge");
      }else {
          window.location = "nbapp://openLoginPage?data={}";
      }
    },
    // 充值
    toRecharge() {
      if(this.website) {
        this.openPCHandle('openRecharge');
      }else {
        window.location = "nbapp://openRechargePage?data={}"
      }
    },
    jump () {
      if(this.isLogin() && !this.loginStatus) {
        Dialog.confirm({
          message:"您还没登录哦，\n请登录后再进行操作吧！",
          confirmButtonText: "去登录",
          confirmButtonColor: "#576B95",
        })
        .then(() => {
          this.toLogin();
        })
        .catch(() => {
        });
        return;
      } else {
        this.toRecharge()
      }
    },
    jumpKefuNative () {
      if(this.website){
        this.openPCHandle("openService");
      }else {
        window.location = 'nbapp://openServicePage?data={}';
      }
    },
    jumpKefu () {
      this.isLoading = true
      let ticket = getQueryVariable('ticket')
      let loginName = getQueryVariable('loginName')
      if (!loginName) {
        this.isLoading = false
        this.jump()
      } else {
        let timestamp = Date.parse(new Date())
        let qid = md5(timestamp + rando(6))
        let appId = '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn'
        let v = '1.0.0'
        let data = {
          productId: 'a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi'
        }
        let a = JSON.stringify(data)
        let sign = md5(reverseStrings(a) + qid + appId + v)
        axios
          .post(`${this.url}/_glaxy_e1s2e8_/webToken`, data, {
            headers: {
              qid: qid,
              appId: '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn',
              v: '1.0.0',
              sign
            }
          })
          .then(response => {
            let webToken = JSON.parse(Base64.decode(response.data.body.info))
            let data = {
              productId: 'a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi',
              ticket: ticket,
              loginName: loginName
            }
            let a = JSON.stringify(data)
            let sign1 = md5(
              reverseStrings(a) +
              qid +
              appId +
              v +
              webToken.token +
              webToken.u2token
            )
            axios
              .post(`${this.url}/_glaxy_e1s2e8_/getH5TokenByTempTicket`, data, {
                headers: {
                  qid: qid,
                  appId: '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn',
                  v: '1.0.0',
                  timestamp: timestamp,
                  sign: sign1,
                  token: webToken.token,
                  SrcAppId: '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn'
                }
              })
              .then(response => {
                let u = navigator.userAgent
                let isAndroid =
                  u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
                // let isIos = !!u.match(/\(i[^;]+(u;)? CPU.+Mac OS X/)
                let platform = 1
                if (!isAndroid) {
                  platform = 2
                }
                let info = JSON.parse(Base64.decode(response.data.body.info))
                if (info && info.token) {
                  sessionStorage.setItem('token', info.token)
                }
                let token = sessionStorage.getItem('token')
                let data1 = {
                  loginName: loginName,
                  productId: 'a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi'
                  // activityId :2
                }
                let a1 = JSON.stringify(data1)
                let sign2 = md5(
                  reverseStrings(a1) +
                  qid +
                  appId +
                  v +
                  info.token +
                  info.u2token
                )
                axios
                  .post(`${this.url}/_glaxy_e1s2e8_/liveChatAddress`, data1, {
                    headers: {
                      qid: qid,
                      appId: '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn',
                      v: '1.0.0',
                      deviceId: info.deviceId,
                      token: token,
                      sign: sign2
                    }
                  })
                  .then(response => {
                    // this.alert = trues
                    this.isLoading = false
                    window.location.href = response.data.body
                  })
                  .catch(error => {
                    this.alert = true
                    this.Msg = error.response.data.head.errMsg
                    // alert(error.response.data.head.errMsg)
                  })
              })
          })
      }
    },
    close () {
      this.alert = false
    }
  },
  components: {
    Scrapper,
    Loading
  }
}
</script>