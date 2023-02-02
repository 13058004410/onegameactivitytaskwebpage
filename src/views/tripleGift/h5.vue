<template>
  <div class="triple-gift-h5">
    <!-- banner -->
    <van-image width="100%" :src="require('./img/H5/banner.jpg')" />
    <!-- 活动内容 -->
    <div class="activities-view">
      <p class="intro">ONE游戏会员获得自己的独有推荐链接后，分享自己的推荐链接给需要推荐的好友，被推荐的好友一定要通过你的好友推荐链接注册才能参与（如果通过任意其他链接注册的账户不可更改被推荐归属）</p>
      <div class="btn-wrap">
        <van-image width="40%" :src="require('./img/H5/djsclj_btn_h5.png')" @click="clickEvent" />
        <div class="tab">
          <van-image class="tab-item" :class="{active: activeTab === 1}" width="33.3%" :src="require('./img/H5/tjjjl_pre.png')" @click="changeActiveTab(1)" />
          <van-image class="tab-item" :class="{active: activeTab === 2}" width="33.3%" :src="require('./img/H5/tjzcl_pre.png')" @click="changeActiveTab(2)" />
          <van-image class="tab-item" :class="{active: activeTab === 3}" width="33.4%" :src="require('./img/H5/xmjj_pre.png')" @click="changeActiveTab(3)" />
        </div>
      </div>
    </div>
    <!-- 活动细节 -->
    <div class="detail-view">
      <!-- 推荐晋级礼 -->
      <div v-show="activeTab === 1" class="tab-content tab1">
        <van-image width="43.4vw" :src="require('./img/H5/jjl_tit_h5.png')" />
        <van-image class="btn" width="34.4vw" :src="require('./img/H5/lqjjl_btn_h5.png')" @click="queryAllCustomerPrize('J4Vpx6JJeZ')" />
        <div class="table">
          <span class="title">第一重礼-推荐晋级礼</span>
          <table>
            <tr>
              <th>被推荐人<br/>达成晋级</th>
              <th>被推荐人礼金</th>
              <th>推荐人礼金</th>
              <th>流水</th>
            </tr>
            <tr>
              <td>VIP1</td>
              <td>8</td>
              <td>8</td>
              <td>1倍</td>
            </tr>
            <tr>
              <td>VIP2</td>
              <td>28</td>
              <td>28</td>
              <td>1倍</td>
            </tr>
            <tr>
              <td>VIP3</td>
              <td>58</td>
              <td>58</td>
              <td>1倍</td>
            </tr>
            <tr>
              <td>VIP4</td>
              <td>188</td>
              <td>188</td>
              <td>1倍</td>
            </tr>
            <tr>
              <td>VIP5</td>
              <td>288</td>
              <td>288</td>
              <td>1倍</td>
            </tr>
            <tr>
              <td>VIP6</td>
              <td>588</td>
              <td>588</td>
              <td>1倍</td>
            </tr>
            <tr>
              <td>VIP7</td>
              <td>888</td>
              <td>888</td>
              <td>1倍</td>
            </tr>
          </table>
        </div>
        <div class="list">
          <p>1. ONE游戏会员推荐的好友每一次VIP晋级，推荐人与被推荐人都可获得晋级推荐礼金。被推荐人晋级且完善账户信息，推荐礼金于次日等级完成晋升后系统自动派发到账；</p>
          <p>2. 推荐晋级礼金需完成<span class="gold">1倍流水</span>，不限场馆；</p>
          <p>3. 被推荐人达成条件后，系统自动派发；</p>
          <p>4. 推荐人与被推荐人必须为不同身份的真实会员，推荐人VIP等级必须≥VIP1且完善个人信息，同一手机号、姓名、银行卡号、IP地址、同一设备，都会被判定同一会员。推荐人及被推荐人均须填写有效的联系方式，供客服电话联系本人核实，任何一方无法联系均不予审核通过。凡使用任何违规手段恶意套取优惠，我司将保留无限期审核扣回红利及所产生利润的权利；</p>
          <p>5. 推荐人或被推荐人在任何时候成为代理账户将视为自动放弃参与本活动；</p>
          <p>6. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
        </div>
      </div>
      <!-- 推荐周存礼 -->
      <div v-show="activeTab === 2" class="tab-content tab2">
        <van-image width="54vw" :src="require('./img/H5/zcl_tit_h5.png')" />
        <van-image class="btn" width="34.4vw" :src="require('./img/H5/lqzcl_btn_h5.png')" @click="queryAllCustomerPrize('TMbZpp25e9')" />
        <div class="table">
          <span class="title">第二重-推荐周存礼</span>
          <table>
            <tr>
              <th>被推荐人<br/>周累计存款</th>
              <th>推荐人与被推荐人<br/>领取周存加奖</th>
              <th>加奖上限</th>
            </tr>
            <tr>
              <td>≥10000CNY</td>
              <td rowspan="7" class="big">0.5%</td>
              <td>88CNY</td>
            </tr>
            <tr>
              <td>≥30000CNY</td>
              <td>188CNY</td>
            </tr>
            <tr>
              <td>≥50000CNY</td>
              <td>388CNY</td>
            </tr>
            <tr>
              <td>≥100000CNY</td>
              <td>888CNY</td>
            </tr>
            <tr>
              <td>≥300000CNY</td>
              <td>1888CNY</td>
            </tr>
            <tr>
              <td>≥500000CNY</td>
              <td>3888CNY</td>
            </tr>
            <tr>
              <td>≥800000CNY</td>
              <td>5888CNY</td>
            </tr>
          </table>
        </div>
        <div class="list">
          <p>1. 活动期间，被推荐人周累计存款满足活动条件，推荐人和被推荐人均可获得周累计存款金额<span class="gold">0.5%</span>的周存礼。活动存款计算自然周。周存加奖次周一16：00之前系统自动派发到账。被推荐人周累计存款“CNY主账户与USDT子账户”累积计算（USDT=1:7），加奖彩金户与USDT子账户”累积计算（USDT=1:7），加奖彩金</p>
          <p>2. 推荐周存礼金需完成<span class="gold">3倍流水</span>，不限场馆；</p>
          <p>3. 被推荐人达成条件后，系统自动派发；</p>
          <p>4. 推荐人与被推荐人必须为不同身份的真实会员，推荐人VIP等级必须≥VIP1，同一手机号、姓名、银行卡号、IP地址、同一设备，都会被判定同一会员。推荐人及被推荐人均须填写有效的联系方式，供客服电话联系本人核实，任何一方无法联系均不予审核通过。凡使用任何违规手段恶意套取优惠，我司将保留无限期审核扣回红利及所产生利润的权利；</p>
          <p>5. 推荐人或被推荐人在任何时候成为代理账户将视为自动放弃参与本活动；</p>
          <p>6. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
        </div>
      </div>
      <!-- 推荐洗码加奖 -->
      <div v-show="activeTab === 3" class="tab-content tab3">
        <van-image width="39vw" :src="require('./img/H5/tjxmjj_tit_h5.png')" />
        <van-image class="btn" width="34.4vw" :src="require('./img/H5/lqxmjj_btn_h5.png')" @click="queryAllCustomerPrize('m8beZQfGZU')" />
        <div class="table">
          <span class="title">第三重-洗码加奖无上限</span>
          <table>
            <tr>
              <th>被推荐人周累计洗码投注额</th>
              <th>推荐人周洗码加奖比例</th>
            </tr>
            <tr>
              <td>5万-100万(包含5万，不包含100万)</td>
              <td>0.1%</td>
            </tr>
            <tr>
              <td>100万及以上</td>
              <td>0.12%</td>
            </tr>
          </table>
        </div>
        <div class="list">
          <p>1. 被推荐人满足活动条件，推荐人可根据被推荐人的周累计有效投注额获得相应比例的周洗码加奖。主子账户洗码投注额累积计算（USDT=1:7），洗码加奖统一派发到CNY主账户；</p>
          <p>2. 周洗码加奖次周一16:00前由系统自动派发到账；</p>
          <p>3. 周洗码加奖<span class="gold">无需任何流水</span>，可直接提款；</p>
          <p>4. 推荐人与被推荐人必须为不同身份的真实会员，推荐人VIP等级必须≥VIP1，同一手机号、姓名、银行卡号、IP地址、同一设备，都会被判定同一会员。推荐人及被推荐人均须填写有效的联系方式，供客服电话联系本人核实，任何一方无法联系均不予审核通过。凡使用任何违规手段恶意套取优惠，我司将保留无限期审核扣回红利及所产生利润的权利；</p>
          <p>5. 推荐人或被推荐人在任何时候成为代理账户将视为自动放弃参与本活动；</p>
          <p>6. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { rando, reverseStrings } from '../../assets/js/tools'
import axios from 'axios'
import { Toast } from "vant"
import md5 from 'js-md5'
export default {
  data () {
    return {
      // tab 状态
      activeTab: 1,
      // 邀请链接
      inviteLink: '',
      // app 回传 rfCode
      rfCode: '',
      loginName: '',
      isH5: true
    }
  },
  methods: {
    clickEvent (val) {
      console.log(this.inviteLink)
      if (this.inviteLink) {
        this.$copyText(this.inviteLink).then(function (e) {
          Toast("复制成功")
          console.log(e)
        }, function (e) {
          Toast("复制失败")
          console.log(e)
        })
      } else if (this.rfCode) {
        this.$copyText(`https://onesports.app/login?customerId=${this.rfCode}`).then(function (e) {
          Toast("复制成功")
          console.log(e)
        }, function (e) {
          Toast("复制失败")
          console.log(e)
        })
      } else {
        Toast("邀请链接生成失败, 请先登入！")
        if ( this.isH5 ) {
          window.location.href = 'https://onesports.app/login';
        } else {
          window.location = "nbapp://openLoginPage?data={}";
        }
        
      }
      
    },
    changeActiveTab (val) {
      this.activeTab = val
    },
    async queryAllCustomerPrize (code) {
      console.log(code);

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
        loginName: this.loginName,
        activityCode: '8lBSDXDC2cT',
        allAccountFlag: '1',
        prizeCode: code,
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
      await axios.post(this.$api.tripleGift.queryAllCustomerPrize, sendData, {
        headers: {
          qid,
          appId,
          v,
          timestamp,
          sign,
          token: h5Token.token,
          platform,
          domainName,
          deviceId
        },
      })
      .then((res) => {
        console.log(res)
        if (res.status !== 200 || res.data.head.errCode !== 200) {
          Toast("查询失败")
          return
        }
        if (res.data.body.data.length === 0) {
          Toast("查无得奖记录")
          return
        }
      })
    },
    // jumpKefuNative () {
    //   if ( this.isH5 ) {
    //     window.parent.postMessage({ message: "openService" }, "*")
    //   } else {
    //     window.location = 'nbapp://openServicePage?data={}'
    //   }
    // },
    reverseStrings(strs) {
      return strs.split("").sort().reverse().join("");
    },
    // 接收邀请链接
    receiveMessage (event) {
      console.log( 'inviteLink', event )
      this.inviteLink = event.data.inviteLink || ''
      this.loginName = event.data.loginName || ''
    },
    loadRfCode (data) {
      console.log(data);
      let json = JSON.parse(data);
      this.rfCode = json.rfCode || ''
      this.isH5 = false
    },
    loadTicket (data) {
      console.log(data);
      let json = JSON.parse(data);
      this.loginName = json.loginName || ''
      this.isH5 = false
    },
  },
  created () {
    this.$loading.show({
      text: "Loading",
    });
    window.loadRfCode = this.loadRfCode;
    window.loadTicket = this.loadTicket;
    setTimeout(() => {
      window.location = "nbapp://getRfCode?data={}";
    }, 500);
    setTimeout(() => {
      window.location = "nbapp://getTicket?data={}";
    }, 600);
    setTimeout(() => {
      this.$loading.hide();
    }, 700);
  },
  mounted () {
    window.addEventListener("message", this.receiveMessage)
  },
  destroyed() {
    window.removeEventListener("message", this.receiveMessage)
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/normaliz.scss";
.triple-gift-h5 {
  width: 100vw;
  min-height: 100vh;
  background: #FCF5F3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 60px;
  font-family: PingFang SC;
  font-weight: 500;

  .activities-view {
    box-sizing: border-box;
    width: 100%;
    padding: 0 20px;
    margin-top: -30px;
    z-index: 1;

    .intro {
      font-size: 3.73vw;
      color: #444B52;
    }

    .btn-wrap {
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .tab {
        margin-top: 15px;
        width: 100%;
        background-image: url("./img/H5/tab_bg.png");
        background-position: 0 0;
        background-size: 100%;
        display: flex;

        .tab-item {
          opacity: 0;

          &.active {
            opacity: 1;
          }
        }
      }
    }
  }

  .detail-view {
    box-sizing: border-box;
    width: 100%;

    .tab-content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .btn {
        margin-top: 15px;
      }

      .table {
        width: 100%;
        margin-top: 15px;
        .title {
          color: #444B52;
          font-size: 3.73vw;
          padding: 0 20px;
        }
        table {
          border-collapse: separate;
          margin-top: 10px;
          width: 100%;
          
          th {
            color: #fff;
            background-color: #D0A881;
            font-size: 3.2vw;
            height: 11.73vw;
            border-right: none;
          }
          td {
            &.big {
              font-size: 4.8vw;
            }
            color: #63676C;
            font-size: 3.2vw;
            height: 11.73vw;
            text-align: center;
            &:nth-child(1) {
              border-right: 1px solid rgba(203, 162, 117, 0.44);
              border-bottom: 1px solid rgba(203, 162, 117, 0.44);
            }
            &:nth-child(2) {
              border-right: 1px solid rgba(203, 162, 117, 0.44);
              border-bottom: 1px solid rgba(203, 162, 117, 0.44);
            }
            &:nth-child(3) {
              border-right: 1px solid rgba(203, 162, 117, 0.44);
              border-bottom: 1px solid rgba(203, 162, 117, 0.44);
            }
            &:nth-child(4) {
              border-bottom: 1px solid rgba(203, 162, 117, 0.44);
            }
          }
        }
      }

      &.tab1 {
        th {
          &:nth-child(1) {
            width: 25%;
          }
          &:nth-child(2) {
            width: 29%;
          }
          &:nth-child(3) {
            width: 29%;
          }
          &:nth-child(4) {
            width: 17%;
          }
        }
      }

      &.tab3 {
        th {
          &:nth-child(1) {
            width: 60%;
          }
          &:nth-child(2) {
            width: 40%;
          }
        }
      }

      .list {
        padding: 10px 20px;
        font-size: 3.73vw;
        color: #444B52;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        p {
          margin-bottom: 10px;
          line-height: 5.33vw;
        }
      }
    }
  }

  .gold {
    color: #AD692B;
  }
}
</style>