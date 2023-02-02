<template>
  <div class="app-view" ref="main">
      <div class="box">
        <div class="title_nr"></div>
        <div class="title_info">
          <p>
            活动期间每周指定赛事，ONE体育将指定焦点赛事，开放负利免单活动100%返还，活动指定赛事的赛前标准盘注单总负盈利
            可获得100%本金返还，最高588元/84USDT。<span>指定赛事开赛前24小时内存款500CNY/72USDT（含）及以上的会员参与，三倍流水</span>即可出款。
          </p>
        </div>
        <div class="title_team"></div>
        <div class="battle_team">
          <div class="team">
            <div><img :src="teamImg1" alt=""></div>
            <span>{{teamName1}}</span>
          </div>
          <div class="date">
            <img src="../../assets/ssss.png" alt="">
            <p>{{leagueName}}</p>
            <p>{{start_time}}</p>
          </div>
          <div class="team">
            <div><img :src="teamImg2" alt=""></div>
            <span>{{teamName2}}</span>
          </div>
        </div>
        <div class="btn-kf" @click="openPCHandle('openService')"></div>
        <div class="box_table">
          <table>
                  <tbody>
                  <tr>
                      <th>奖励等级</th>
                      <th>负盈利</th>
                      <th>最高返还霸王金</th>
                      <th>流水倍数</th>
                  </tr>
                  <tr>
                      <td>VIP1</td>
                      <td>≥58/8usdt</td>
                      <td>58/8usdt</td>
                      <td>3倍流水</td>
                  </tr>
                  <tr>
                      <td>VIP2</td>
                      <td>≥68/10usdt</td>
                      <td>68/10usdt</td>
                      <td>3倍流水</td>
                  </tr>
                  <tr>
                      <td>VIP3</td>
                      <td>≥88/13usdt</td>
                      <td>88/13usdt</td>
                      <td>3倍流水</td>
                  </tr>
                  <tr>
                      <td>VIP4</td>
                      <td>≥188/27usdt</td>
                      <td>188/27usdt</td>
                      <td>3倍流水</td>
                  </tr>
                  <tr>
                      <td>VIP5</td>
                      <td>≥288/42usdt</td>
                      <td>288/42usdt</td>
                      <td>3倍流水</td>
                  </tr>
                  <tr>
                      <td>VIP6</td>
                      <td>≥388/56usdt</td>
                      <td>388/56usdt</td>
                      <td>3倍流水</td>
                  </tr>
                  <tr>
                      <td>VIP7</td>
                      <td>≥588/84usdt</td>
                      <td>588/84usdt</td>
                      <td>3倍流水</td>
                  </tr>
                  </tbody>
              
          </table>
      </div>
      <div class="title_gz"></div>
      <div class="title_gz_item">
          <p>
              1.会员需绑定手机号码后在指定赛事开赛前24小时内累计负盈利达到对应等级要求以上即可获得参与资格，
              负利返还注单仅限指定<span>焦点赛事</span>。 <br>
              例：活动指定赛事为：4月8日【欧洲冠军杯】焦点赛事，在该赛事开赛前投注标准盘口的注单，整体合计
              结算结果为负利，将根据相应活动条件返还免单金额。
          </p>
              
          <p>
              2.以赛事当日北京时间下午16:00后系统等级为准，符合条件会员在赛事完结后24小时内需主动联系在线客
              服申请，过时视为自动放弃。优惠需完成<span>3倍流水</span>，仅限体育厅。
          </p>
          <p>3.本活动与【返水优惠】共享，不与其他任意活动共享存款条件与投注流水 。</p>
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
      isLoading: true,
      url: 'https://txyq8r.net'
      // url: "https://uatc08-mobile.onebet18.net"
    }
  },
  components: {
    Scrapper,
    Loading
  },
  
  methods: {
    openPCHandle (msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      }
      window.parent.postMessage(info, "*")
    },
    close () {
      this.alert = false
    }
  },
  mounted () {
    const that = this
    setInterval(() => {
      let iframeH = Math.max(that.$refs.main.clientHeight, that.$refs.main.scrollHeight)
      that.openPCHandle("reloadPageSize", {
        height: iframeH,
      })
    }, 0)
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
@import '@/assets/css/normaliz.scss';
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
</style>
<style lang="scss" scoped>
$count: 89.9422423;
.app-view {
    background: #1B1919 url('../../assets/img/overlord/BG_PC.jpg') no-repeat;
    background-size: contain ;
    padding: 0.1px;
        .box {
          // max-width: 1300px;
          width: 1300 / $count + rem;
          background: rgba(19,14,12,0.50);
          border: 4px solid #CBA85F;
          margin: 620 /$count + rem auto 40 /$count + rem;
           .title_nr {
             width: 424 / $count + rem;
             height: 72 / $count + rem ;
             background: url('../../assets/img/overlord/hdnr_tit_pc.png') no-repeat;
             background-size: cover;
             margin: 20 / $count + rem auto;
           }
           .title_info {
             width: 1095 /$count + rem;
             margin: 0 auto;
             font-size: 20 /$count + rem;
             color: #AE9E86;
             letter-spacing: 0;
             line-height: 35 /$count + rem;
             font-weight: 500;  
              span {
                color: #FFDB8E ;
              }
           }
           .title_team {
             width: 424 / $count + rem;
             height: 72 /$count + rem;
             background: url('../../assets/img/overlord/dzdw_tit_pc.png') no-repeat;
             background-size: cover;
             margin: 20 / $count + rem auto;
           }
          .battle_team {
            width: 850 /$count + rem;
            height: 250 /$count + rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-top: 20 / $count + rem;
              .team {
                width: 210 /$count + rem;
                height: 275 /$count + rem;;
                background: url('../../assets/img/overlord/dz_bg.png') no-repeat;
                background-size: cover;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                font-size: 26 /$count + rem;
                color: #AE9E86;
                span {
                  text-align: center;
                  font-size: 23 / $count + rem;
                  margin: 6px;
                }
                div {
                  width: 120 / $count + rem;
                  height: 120 / $count + rem;
                  margin: 0 auto;
                }
                img {
                  display: inline-block;
                  width: 100%;
                  height: 100%;
                  // width: auto;
                  // height: auto;
                }
              }
              .date {
                text-align: center;
                :last-child {
                  font-size: 20 /$count + rem;
                }
                img {
                  width: 118 / $count + rem;
                  height: 90 / $count + rem;
                }
                p {
                  font-size: 24 / $count + rem;
                  color: #FFDB8E;
                  margin: 10 / $count + rem 0;
                }
              }
          }
          .btn-kf {
            background: url('../../assets/img/overlord/ljlq_btn_pc.png') no-repeat;
            background-size: cover;
            width: 300 / $count + rem;
            height: 80 / $count + rem;
            margin: 30 / $count + rem auto;
          }
          .box_table {
            table {
            width: 1100 / $count + rem;
            margin: 0 auto;
            }
            
            td,th {
                height: 60 / $count + rem;
                text-align: center;
                border: 1px solid #937B4E;
                font-size: 20 / $count + rem;
                color:#FFFFFF ;
            }
            th {
                background-color:#E9D398 ;
                color: #3A2F15;
                border: 1px solid #E9D398;
            }
            td:first-child {
              color: #FFDB8E;
            }
           th:nth-child(3) {
             width: 30%;
           }
          }
          .title_gz {
             width: 424 / $count + rem;
             height: 72 / $count + rem;
             background: url('../../assets/img/overlord/hdgz_tit_pc.png') no-repeat;
             background-size: cover;
             margin: 30 / $count + rem auto;
          }
          .title_gz_item {
              width: 1100 / $count + rem;
              height: 500 / $count + rem;
              margin: 0 auto;
              padding-bottom: 20 / $count + rem;
              p {
                  font-size: 20 / $count + rem;
                  color: #AE9E86;
                  letter-spacing: 0.5px;
                  line-height: 35 / $count + rem;
                  font-weight: 500;
                  padding: 5 / $count + rem ;
              }
              span {
                  color: #FFDB8E;
              }
          }
        }
  }
  
 
</style>