<template>
  <!-- ONE 众瞩目 首存红利40% -->
  <div class="dividend"
       @touchmove.prevent>
    <div class="view">
      <Scrapper class="scroll"
                ref="view">
        <div class="top">
          <img src="../assets/img/dividend/top.png" />
        </div>
        <div class="main">
          <h3>
            <img src="../assets/img/dividend/h1.png" />
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
            <img src="../assets/img/dividend/h2.png" />
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
            <img src="../assets/img/dividend/h3.png" />
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
            <img src="../assets/img/dividend/h4.png" />
            <button @click="receive"
                    class="click ripple"></button>
            <p>(24小时到账哦)</p>
          </h3>
        </div>
        <div class="main">
          <h3>
            <img src="../assets/img/dividend/h5.png" />
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
                    <i style="color:red;font-weight:600">不与其他任何优惠共享</i>（包含迎新大礼包优惠活动）
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
      <div v-if="alert"
           class="alertBox">
        <div class="alert">
          <h4>{{ Msg }}</h4>
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
import '@/assets/css/dividend.scss'
import { getQueryVariable, rando, reverseStrings } from '../assets/js/tools'
import Loading from '@/component/Loading'
import Scrapper from '@/component/Scrapper'
import axios from 'axios'
import md5 from 'js-md5'
let Base64 = require('js-base64').Base64
export default {
  data () {
    return {
      alert: false,
      Msg: '',
      start_time: '',
      end_time: '',
      minAmount: '', //申请最小金额
      giftRatio: '', //红利百分百
      maxAmount: '', //红利上线
      bettingLimit: '', //流水倍数
      isLoading: true,
      url: 'https://os666168.com',
      // url: "http://uatc08-mobile.bawinx.com"
    }
  },
  methods: {
    receive () {
      let that = this
      this.isLoading = true
      let ticket = getQueryVariable('ticket')
      let loginName = getQueryVariable('loginName')
      let timestamp = Date.parse(new Date())
      let qid = md5(timestamp + rando(6))
      let appId = '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn'
      let v = '1.0.0'
      let data = {
        productId: 'a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi',
      }
      let a = JSON.stringify(data)
      let sign = md5(reverseStrings(a) + qid + appId + v)
      axios
        .post(`${this.url}/_glaxy_e1s2e8_/webToken`, data, {
          headers: {
            qid: qid,
            appId: '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn',
            v: '1.0.0',
            sign,
          },
        })
        .then((response) => {
          let webToken = JSON.parse(Base64.decode(response.data.body.info))
          let data = {
            productId: 'a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi',
            ticket: ticket,
            loginName: loginName,
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
                SrcAppId: '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn',
              },
            })
            .then((response) => {
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
                productId: 'a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi',
                activityId: 3,
              }
              axios
                .post(
                  `${this.url}/_glaxy_e1s2e8_/_extra_/activity/firstDeposit`,
                  data1,
                  {
                    headers: {
                      qid: qid,
                      appId: '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn',
                      v: '1.0.0',
                      timestamp: timestamp,
                      platform: platform,
                      token: token,
                      domainName: 'os666168.com',
                      deviceId: info.deviceId,
                    },
                  }
                )
                .then((res) => {
                  that.isLoading = false
                  if (res.data.head.errMsg) {
                    that.Msg = res.data.head.errMsg
                    that.alert = true
                  }
                  // alert(response.data.head.errMsg)
                })
                .catch((err) => {
                  that.isLoading = false
                  if (err.res.data.head.errMsg) {
                    that.alert = true
                    that.Msg = err.res.data.head.errMsg
                  }
                  // console.log(err.res.data.head.errMsg)
                })
            })
        })
    },
    close () {
      this.alert = false
    },
  },
  mounted () {
    let that = this
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
      activityId: 3,
    }
    axios
      .post(`${this.url}/_glaxy_e1s2e8_/_extra_/activity/info`, data, {
        headers: {
          qid: qid,
          appId: '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn',
          v: '1.0.0',
          timestamp: timestamp,
          platform: platform,
          // token:token,
          domainName: 'm.onesports.app',
          deviceId: '11231231',
        },
      })
      .then((response) => {
        this.start_time = response.data.body.start_time.split(' ')[0].split('-')
        this.end_time = response.data.body.end_time.split(' ')[0].split('-')
        this.minAmount = response.data.body.condition.minAmount
        this.giftRatio = response.data.body.condition.giftRatio
        this.maxAmount = response.data.body.condition.maxAmount
        this.bettingLimit = response.data.body.condition.bettingLimit
        that.isLoading = false
      })
      .catch((error) => {
        that.isLoading = false
        console.log(error)
        if (error.response) {
          that.alert = true
          that.Msg = error.response.data.head.errMsg
        }
      })
  },
  components: {
    Scrapper,
    Loading,
  },
}
</script>
