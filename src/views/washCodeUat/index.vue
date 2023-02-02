<template>
  <!-- 洗码优惠 -->
  <div class="app-wrapper"
       @touchmove.prevent>
    <div class="app-view">
      <Scrapper class="app-scroll"
                ref="view">
        <div class="scroll-wrapper">
          <!-- bg -->
          <div class="app-bg app-img">
            <img src="../../assets/img/washCode/bg-main.png"
                 alt="" />
          </div>
          <!-- page -->
          <div class="app-page">
            <div class="page-wrapper">
              <div class="app-logo vivify popInTop">
                <img src="../../assets/img/washCode/logo.png"
                     alt="" />
              </div>
              <div class="txt-title txt-title1 vivify driveInRight">
                <img src="../../assets/img/washCode/txt-title1.png"
                     alt="" />
              </div>
              <div class="txt-title txt-title2 vivify driveInLeft">
                <img src="../../assets/img/washCode/txt-title2.png"
                     alt="" />
              </div>
              <!-- Box1 -->
              <div class="box-wrapper box-wrapper1 vivify driveInBottom">
                <div class="box-title"></div>
                <div class="box-content">
                  <div class="box-tab">
                    <div class="tab-head">
                      <div v-for="(item, index) in tabTitle"
                           :key="index"
                           :class="activeIndex === index ? 'active' : ''"
                           @click="tabChange(index)">
                        {{ item.title }}
                      </div>
                    </div>
                    <div class="tab-body">
                      <div class="tab-content vivify fadeInRight duration-200"
                           v-for="(item, index) in tabContent"
                           :key="index"
                           :class="activeIndex === index ? 'active' : ''">
                        <div class="tab-list">结算周期：{{ `${item.beginDate} - ${item.endDate}` }}</div>
                        <div class="tab-list">
                          洗码下注额：{{ item.betCount }}
                          <span class="btn-list"
                                @click="openModal(activeIndex)">（查看每日下注金额）</span>
                        </div>
                        <div class="tab-list">
                          洗码礼金：{{ item.giftCount }}
                          <span class="wash-status"
                                :class="
                            item.status === 1 ? 'status-no' : 'status-yes'
                          ">{{ item.status === 1 ? '待派发' : '已派发' }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Box2 -->
              <div class="box-wrapper box-wrapper2 vivify driveInBottom delay-300">
                <div class="box-title"></div>
                <div class="clearbox"></div>
                <div class="box-content">
                  <div class="rule-title">规则说明：</div>
                  <ul>
                    <li>
                      <span class="point">·</span>
                      <p>
                        洗码礼金≧￥1可派发至会员帐户，洗码礼金无上限，可随时申请提款；
                      </p>
                    </li>
                    <li>
                      <span class="point">·</span>
                      <p>
                        体育投注洗码有效投注额，统计周期为北京时间每周一的00:00至周日23:59，ONE体育各厅皆独立计算有效投注额；
                      </p>
                    </li>
                    <li>
                      <span class="point">·</span>
                      <p>
                        系统自动添加周洗码时间为：每周一17:00之前结算完毕并添加上周对应会员VIP等级洗码礼金到游戏帐号；
                      </p>
                    </li>
                    <li>
                      <span class="point">·</span>
                      <p>
                        有效投注是指有输赢结果的投注额累积，所有退还本金的投注或无风险的投注皆不能计算为有效投注，体育厅中对打投注、欧洲赔率≦1.5及取消赛事注单皆不计算有效投注。以诈欺手段获得码，将会永久冻结账号且没收所有资金；
                      </p>
                    </li>
                    <li>
                      <span class="point">·</span>
                      <p>本优惠自2020年1月份开始执行；</p>
                    </li>
                  </ul>
                </div>
                <div class="box-content">
                  <div class="rule-title">其他说明：</div>
                  <div class="rule-content">
                    <div class="rule-tips">
                      会员等级:可参考我【个人中心】→【游戏帐号】→【VIP等级】
                    </div>
                    <table class="rule-table">
                      <thead>
                        <tr>
                          <th>VIP等级</th>
                          <th>VIP1</th>
                          <th>VIP2</th>
                          <th>VIP3</th>
                          <th>VIP4</th>
                          <th>VIP5</th>
                          <th>VIP6</th>
                          <th>VIP7</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>洗码比例</td>
                          <td>0.40%</td>
                          <td>0.45%</td>
                          <td>0.50%</td>
                          <td>0.60%</td>
                          <td>0.70%</td>
                          <td>0.80%</td>
                          <td>0.90%</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="rule-table-img">
                      <img src="../../assets/img/washCode/table.png"
                           alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Scrapper>
    </div>
    <!-- Modal -->
    <div class="modal-wrapper"
         v-if="showModal">
      <div class="modal-main">
        <div class="modal-box vivify fadeInTop duration-300">
          <div class="modal-head">
            {{tabTitle[activeIndex].title}}每日下注金额
            <span class="btn-close"
                  @click="closeModal"></span>
          </div>
          <div class="modal-body">
            <div class="modal-table">
              <div class="table-head">
                <div class="table-item">
                  <div class="left-item">
                    <span class="icon-date"></span>
                    <span>下注日期</span>
                  </div>
                  <div class="right-item">
                    <span class="icon-count"></span>
                    <span>下注金额</span>
                  </div>
                </div>
              </div>
              <div class="table-body">
                <div class="table-item"
                     v-for="(item, index) in washCodeList"
                     :key="index">
                  <div class="left-item">
                    <span>{{item.time}}</span>
                  </div>
                  <div class="right-item">
                    <span>¥{{item.amount.toFixed(2)}}</span>
                  </div>
                </div>
              </div>
              <div class="table-foot">
                <div class="table-item">
                  <div class="left-item">
                    <span>总计</span>
                  </div>
                  <div class="right-item">
                    <span>¥{{totleAmount.toFixed(2)}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './index.scss'
import { getQueryVariable, rando, reverseStrings, toLogin, getLastWeekStartDate, getLastWeekEndDate } from '../../assets/js/tools'
import { mapActions } from 'vuex'
import Scrapper from '@/component/Scrapper'
import axios from 'axios'
import md5 from 'js-md5'
let Base64 = require('js-base64').Base64
export default {
  components: {
    Scrapper,
  },
  data () {
    return {
      showModal: false,
      activeIndex: 0,
      tabTitle: [
        {
          title: '上一周',
        },
        {
          title: '本周',
        },
      ],
      tabContent: [
        {
          beginDate: getLastWeekStartDate(),
          endDate: getLastWeekEndDate(),
          betCount: '0.00',
          giftCount: '0.00',
          status: 0,
        },
        {
          beginDate: '2020.01.01',
          endDate: '2020.01.07',
          betCount: '0.00',
          giftCount: '0.00',
          status: 1,
        },
      ],
      washCodeList: [],
      totleAmount: 0.00
    }
  },
  computed: {
    h5TokenStore () {
      return this.$store.state.h5Token
    }
  },
  created () {
    let that = this
    that.$loading.show({
      text: 'Loading'
    })
    that.AH5Token()
    let loginNameStore = getQueryVariable('loginName')
    // this.$toastMessage({message: '登录名：' + loginNameStore})
    console.log('登录名：', loginNameStore)

    if (!loginNameStore) {
      toLogin()
      setTimeout(() => {
        that.$loading.hide()
      }, 1000)
    } else {
      console.log('Logined')
    }
  },
  methods: {
    ...mapActions(['AWebToken', 'AH5Token']),
    // 获取上一周洗码优惠接口
    async getWashCodeInfoPre () {
      let productId = this.$store.state.appInfo.productId
      let loginName = this.$store.state.appInfo.loginName

      let v = this.$store.state.appInfo.v
      let timestamp = Date.parse(new Date())
      let qid = md5(timestamp + rando(6))
      let u = navigator.userAgent
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
      let platform = 1
      if (!isAndroid) {
        platform = 2
      }
      let h5Token = this.$store.state.h5Token
      let domainName = this.$store.state.appInfo.domainName
      let deviceId = this.$store.state.appInfo.deviceId
      let appId = this.$store.state.appInfo.appId
      let sendData = {
        loginName,
        productId
      }
      let sendDataString = JSON.stringify(sendData)
      let sign = md5(
        reverseStrings(sendDataString) +
        qid +
        appId +
        v +
        h5Token.token +
        h5Token.u2token
      )
      await axios
        .post(this.$api.washCode.userBetList, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            // sign,
            token: h5Token.token,
            platform,
            domainName,
            deviceId
          },
        })
        .then((res) => {
          console.log('上周洗码数据', res)
          // let betCountRes = res.data.body.data ? res.data.body.data[0].amount : '0.00'
          // let rateRes = res.data.body.data ? res.data.body.data[0].rate : '1'
          // let giftCountRes = (parseFloat(betCountRes) * parseFloat(rateRes)).toFixed(2)
          let betCountRes = res.data.body.extra.sumBetAmount || '0.00'
          let giftCountRes = res.data.body.extra.sumAmount || '0.00'
          this.tabContent[0].betCount = betCountRes
          this.tabContent[0].giftCount = giftCountRes
        })
    },
    // 获取本周洗码优惠接口
    async getWashCodeInfo () {
      // await this.AH5Token()
      let cycleType = 0
      let productId = this.$store.state.appInfo.productId
      let loginName = this.$store.state.appInfo.loginName

      let v = this.$store.state.appInfo.v
      let timestamp = Date.parse(new Date())
      let qid = md5(timestamp + rando(6))
      let appId = this.$store.state.appInfo.appId
      let h5Token = this.$store.state.h5Token
      let sendData = {
        cycleType,
        productId,
        loginName,
      }
      let sendDataString = JSON.stringify(sendData)
      let sign = md5(
        reverseStrings(sendDataString) +
        qid +
        appId +
        v +
        h5Token.token +
        h5Token.u2token
      )
      await axios
        .post(this.$api.washCode.calcAmountV2, sendData, {
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
          console.log('本周洗码数据', res)
          this.tabContent[1].beginDate = res.data.body.xmBeginDate.split(' ')[0]
          this.tabContent[1].endDate = res.data.body.xmEndDate.split(' ')[0]
          this.tabContent[1].betCount = res.data.body.totalBetAmount.toFixed(2)
          this.tabContent[1].giftCount = res.data.body.totalXmAmount.toFixed(2)
        })
    },
    // 获取用户周洗码汇总统计列表
    async getWashCodeList (type) {
      let productId = this.$store.state.appInfo.productId
      let loginName = this.$store.state.appInfo.loginName

      let v = this.$store.state.appInfo.v
      let timestamp = Date.parse(new Date())
      let qid = md5(timestamp + rando(6))
      let u = navigator.userAgent
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
      let platform = 1
      if (!isAndroid) {
        platform = 2
      }
      let h5Token = this.$store.state.h5Token
      let domainName = this.$store.state.appInfo.domainName
      let deviceId = this.$store.state.appInfo.deviceId
      let appId = this.$store.state.appInfo.appId
      let sendData = {
        loginName,
        productId,
        type
      }
      let sendDataString = JSON.stringify(sendData)
      let sign = md5(
        reverseStrings(sendDataString) +
        qid +
        appId +
        v +
        h5Token.token +
        h5Token.u2token
      )
      await axios
        .post(this.$api.washCode.userBetRecord, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            // sign,
            token: h5Token.token,
            platform,
            domainName,
            deviceId
          },
        })
        .then((res) => {
          console.log(`获取列表${type}`, res.data)
          let that = this
          that.totleAmount = 0
          if (res.data.head.errCode === 200) {
            that.washCodeList = res.data.body
            for (let list of that.washCodeList) {
              that.totleAmount += list.amount
            }
          } else {
            that.$toastMessage({ message: res.data.head.errMsg, time: 3000 })
          }
        })
    },
    // 切换
    tabChange (index) {
      this.activeIndex = index
    },
    // 弹出弹窗
    openModal (index) {
      let that = this
      let type
      index === 0 ? type = 2 : type = 1
      let h5Token = sessionStorage.getItem('token')
      if (h5Token) {
        that.getWashCodeList(type)
        setTimeout(() => {
          that.showModal = true
        }, 500)
      }
    },
    // 关闭弹窗
    closeModal () {
      this.showModal = false
    },
  },
  watch: {
    'h5TokenStore': function () {
      let that = this
      that.$loading.hide()
      that.getWashCodeInfoPre()
      that.getWashCodeInfo()
    }
  }
}
</script>
<style lang="scss">
* {
  touch-action: pan-y;
}
</style>