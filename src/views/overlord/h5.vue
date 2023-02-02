<template>
  <div class="app-view">
    <div class="box">
        <div class="title_nr"></div>
        <div class="title_info">
            活动期间每周指定赛事，ONE体育将指定焦点赛事，
            开放负利免单活动100%返还,活动指定赛事的赛前标
            准盘注单总负盈利可获得100%本金返还,最高588元/
            84USDT。<br>
            <span>指定赛事开赛前24小时内存款500CNY/72USDT (含) 及以上的会员参与，三倍流水</span>即可出款。
        </div>
        <div class="title_team"></div>
        <div class="battle_team">
                <div class="team">
                  <div class="teamimg">
                    <img :src="teamImg1"/>
                  </div>
                  <span>{{teamName1}}</span>
                </div>
                <div class="date">
                  <p>{{leagueName}}</p>
                  <p>VS</p>
                  <p>{{start_time}}</p>
                </div>
                <div class="team">
                  <div class="teamimg">
                    <img :src="teamImg2" />
                  </div>
                  <span>{{teamName2}}</span>
                </div>
        </div>
        <div class="lq_btn" @click="jumpKefuNative"></div>
    </div>
    <div class="box_table">
        <table>
                <tbody>
                <tr>
                    <th>奖励等级</th>
                    <th>负盈利</th>
                    <th>最高返还霸王金</th>
                    <th>流水</th>
                </tr>
                <tr>
                    <td>VIP1</td>
                    <td>≥58/8usdt</td>
                    <td>58/8usdt</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>VIP2</td>
                    <td>≥68/10usdt</td>
                    <td>68/10usdt</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>VIP3</td>
                    <td>≥88/13usdt</td>
                    <td>88/13usdt</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>VIP4</td>
                    <td>≥188/27usdt</td>
                    <td>188/27usdt</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>VIP5</td>
                    <td>≥288/42usdt</td>
                    <td>288/42usdt</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>VIP6</td>
                    <td>≥388/56usdt</td>
                    <td>388/56usdt</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>VIP7</td>
                    <td>≥588/84usdt</td>
                    <td>588/84usdt</td>
                    <td>3</td>
                </tr>
                </tbody>
            
        </table>
    </div>
    <div class="title_gz"></div>
    <div class="title_gz_item">
        <p>
            1.会员需绑定手机号码后在指定赛事开赛前24小时内累计负盈利达到对应等级要求以上即可获得参与资格，
            负利返还注单仅限指定<span>焦点赛事。</span> <br>
            例：活动指定赛事为：4月8日【欧洲冠军杯】焦点赛事，在该赛事开赛前投注标准盘口的注单，整体合计
            结算结果为负利，将根据相应活动条件返还免单金额。
        </p>
        <p>
            2.以赛事当日北京时间下午16:00后系统等级为准，符合条件会员在赛事完结后24小时内需主动联系在线客
            服申请，过时视为自动放弃。优惠需完成<span>3倍流水</span>,仅限体育厅。
        </p>
        <p>3.本活动与【返水优惠】共享，不与其他任意活动共享存款条件与投注流水 。 </p>
        <p>
            4.有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关、提前兑现，将不计算在有效流水内。
        </p>
        <p>
            5.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。
        </p>
        <p>
            6.会员参加任何优惠活动则视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。
        </p>
    </div>
    <transition name="fade">
        <loading v-if="isLoading"></loading>
      </transition>
  </div>
</template>

<script>
import Scrapper from '@/component/Scrapper'
import Loading from '@/component/Loading'
import axios from 'axios'
import md5 from 'js-md5'
import { UA } from '@/util/ua';
let Base64 = require('js-base64').Base64
import { getQueryVariable, rando, reverseStrings } from '../../assets/js/tools'
export default {
  data () {
    return {
      teamImg1: '',
      teamName1: '',
      leagueName: '',
      date: '',
      time: '',
      teamImg2: '',
      teamName2: '',
      alert: false,
      Msg: '',
      start_time: '',
      end_time: '',
      website: false,
      isLoading: true,
      url: 'https://txyq8r.net',
      ticketApp: false 
      // url: "https://uatc08-mobile.onebet18.net"
    }
  },
  components: {
    Scrapper,
    Loading
  },
  async created() {
    let that = this
    console.log('我执行了')
    window.loadTicket = this.loadTicketApp;
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
       console.log("子iframe监听事件名字", event);
       let func = funcs[event.data.message];
       if (func) {
           func(event.data);
       } else {
           console.log("点击监听测试");
       }
      },
    loadTicket(data) {
      console.log('我执行了')
      this.website = true
      this.loginStatus = data.loginStatus;
      this.token = data.token;
      this.loginName = data.loginName;
      this.u2token = data.u2token;
      },
    async loadTicketApp(obj) {
      console.log('我执行了')
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
    // 跳转客服方法
    jumpKefuNative() {
       if(this.website) {
           this.openPCHandle('openService')
       } else {
          window.location = "nbapp://openServicePage?data={}";
       }
      },
    jump () {
      this.isLoading = true
      let ticket = getQueryVariable('ticket')
      let loginName = getQueryVariable('loginName')
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
              let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
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
                reverseStrings(a1) + qid + appId + v + info.token + info.u2token
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
                  this.isLoading = false
                  this.alert = true
                  this.Msg = error.response.data.head.errMsg
                  // alert(error.response.data.head.errMsg)
                })
            })
        })
    },
    close () {
      this.alert = false
    }
  },
  mounted () {
    let u = navigator.userAgent
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
    // let isIos = !!u.match(/\(i[^;]+(u;)? CPU.+Mac OS X/)
    let platform = 1
    if (!isAndroid) {
      platform = 2
    }
    let timestamp = Date.parse(new Date())
    let qid = md5(timestamp + rando(6))
    let appId = '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn'
    let v = '1.0.0'
    let data = {
      activityId: 4 // UAT：11，生产环境：4
    }
    axios
      .post(`${this.url}/_glaxy_e1s2e8_/_extra_/activity/newInfo`, data, {
        headers: {
          qid: qid,
          appId: '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn',
          v: '1.0.0',
          timestamp: timestamp,
          platform: platform,
          // token:token,
          domainName: 'os666168.com',
          deviceId: '11231231'
        }
      })
      .then(response => {
          
        //  this.start_time = response.data.body.start_time.split(' ')[0]
        let teamData = response.data.body.condition
        this.teamImg1 = teamData.home_team_flag
        this.teamName1 = teamData.home_team_name
        this.leagueName = teamData.league_name
        this.date = teamData.running
        this.time = teamData.format_time
        this.teamImg2 = teamData.away_team_flag
        this.teamName2 = teamData.away_team_name
        this.start_time = teamData.start_time
        console.log(this.start_time,5555555555555555);
        this.end_time = response.data.body.end_time.split(' ')[0].split('-')
        this.isLoading = false
      })
      .catch(error => {
        this.isLoading = false
        this.alert = true
        this.Msg = error.response.data.head.errMsg
        // alert(error.response.data.head.errMsg)
      })
  }
}
</script>
<style lang="scss">
@import "@/assets/css/screen750.scss";
@import "@/assets/css/normaliz.scss";
</style>
<style lang="scss" scoped>

.app-view {
        // height: (1790/16) + rem;
        background: #1B1919 url("../../assets/img/overlord/BG_H5.jpg") no-repeat;
        background-size: contain;
        overflow: hidden;
    .box {
        width: (350/16) + rem;
        height: (450/16) + rem;
        margin: auto;
        margin-top: (450/16) + rem;
        .title_nr {
            width: 187px;
            height: 30px;
            background: url("../../assets/img/overlord/hdnr_tit_h5.png") no-repeat;
            background-size: cover;
            margin: 0 auto;
        }
        .title_info {
            width: 325px;
            height: 120px;
            margin: 20px auto;
            font-size: 13px;
            color: #AE9E86;
            letter-spacing: 0.8px;
            line-height: 20px;
            font-weight: 500; 
            span {
              color: #FFDB8E;
            }
        }
        .title_team {
            width: 187px;
            height: 30px;
            background: url("../../assets/img/overlord/dzdw_tit_h5.png") no-repeat;
            background-size: cover;
            margin: 0 auto;
        }
        
        .battle_team {
            width: 335px;
            height: 127px;
            font-size: 14px;
            color: #FFDB8E;
            background: url('../../assets/img/overlord/dz_bg_h5.png') no-repeat;
            background-size: cover;
            margin: 20px auto;
            letter-spacing: 0.5px;
            // overflow: hidden;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .team {
              display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                span {
                  text-align: center;
                }
                img {
                width: auto;
                height: auto;
                width: 90%;
                height: 90%;
                }
            }
            .date {
                text-align: center;
                :nth-child(2) {
                    font-weight: 600;
                    font-size: 20px;
                }
                :last-child {
                    font-size: 12px;
                }
                p {
                    padding-top: 5px;
                }
            }
            .team {
                display: flex;
                justify-content: center;
                align-items: center;
                .teamimg {
                margin-bottom: 10px;
                background: url("../../assets/img/football/pc/logobg.png") no-repeat;
                background-size: 100% 100%;
                overflow: hidden;
                border-radius: 50%;
                width: 60px;
                height: 60px;
                text-align: center;
                img {
                  width: 75%;
                  height: 75%;
                  margin-top: 6px;
                }
            }
        }
            }
            
        .lq_btn {
            width: 150px;
            height: 40px;
            background: url('../../assets/img/overlord/lq_btn_h5.png') no-repeat;
            background-size: cover;   
            margin: 0 auto;  
        }
    }
    .box_table {
        width: 99%;
        margin: 0 auto;
            td,th {
                width: (100/16) + rem;
                height: (38/16) + rem;
                text-align: center;
                border: 1px solid #937B4E;
                font-size: (12/16) + rem;
                color:#FFFFFF ;
            }
            th {
                background-color:#E9D398 ;
                color: #3A2F15;
                border: 1px solid #E9D398;
            }
            td:first-child {
                color: #FFDB8E;
                width: 25%;
            }
            td:last-child {
                width: 15%;
            }
            
            
    }
    .title_gz {
        width: 187px;
        height: 30px;
        background: url("../../assets/img/overlord/hdgz_tit_h5.png") no-repeat;
        background-size: cover;
        margin: 20px auto;
    }
    .title_gz_item {
        width: 330px;
        height: 500px;
        margin: 0 auto;
        p {
            font-size: 14px;
            color: #AE9E86;
            letter-spacing: 0.5px;
            line-height: 19px;
            font-weight: 500;
            padding: 5px;
        }
        span {
            color: #FFDB8E;
        }
    }
    
}
    

  
  
</style>