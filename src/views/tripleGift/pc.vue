<template>
  <div class="triple-gift-pc">
    <van-image width="100%" :src="require('./img/PC/banner_PC.jpg')" />
    <div class="content-view">
      <van-image
        width="194px"
        height="100px"
        :src="require('./img/PC/hdnr_tit.png')"
        style="margin-bottom: 20px"
      />
      <p>ONE游戏会员获得自己的独有推荐链接后，分享自己的推荐链接给需要推荐的好友，被推荐的好友一定要通过你的好友推荐链接注册才能参与（如果通过任意其他链接注册的账户不可更改被推荐归属）</p>
      <van-image
        width="233px"
        height="49px"
        :src="require('./img/PC/djgx_btn.png')"
        style="margin-bottom: 20px; margin-top: 20px"
        @click="clickEvent"
      />
      <!-- 第一重 -->
      <div class="gift" ref="gift1">
        <van-image
          width="313px"
          height="60px"
          :src="require('./img/PC/jjl_tit_pc.png')"
          style="margin-bottom: 10px"
        />
        <div class="w-100">
          <span class="title">第一重礼-推荐晋级礼</span>
        </div>
        
        <dl>
          <dt>
            <span>被推荐人达成晋级</span>
            <span>被推荐人礼金</span>
            <span>推荐人礼金</span>
            <span>流水要求</span>
          </dt>
          <dd>
            <span>VIP1</span>
            <span>8</span>
            <span>8</span>
            <span>1倍</span>
          </dd>
          <dd>
            <span>VIP2</span>
            <span>28</span>
            <span>28</span>
            <span>1倍</span>
          </dd>
          <dd>
            <span>VIP3</span>
            <span>58</span>
            <span>58</span>
            <span>1倍</span>
          </dd>
          <dd>
            <span>VIP4</span>
            <span>188</span>
            <span>188</span>
            <span>1倍</span>
          </dd>
          <dd>
            <span>VIP5</span>
            <span>288</span>
            <span>288</span>
            <span>1倍</span>
          </dd>
          <dd>
            <span>VIP6</span>
            <span>588</span>
            <span>588</span>
            <span>1倍</span>
          </dd>
          <dd>
            <span>VIP7</span>
            <span>888</span>
            <span>888</span>
            <span>1倍</span>
          </dd>
        </dl>

        <van-image
          width="214px"
          height="66px"
          :src="require('./img/PC/lqjjl_btn.png')"
          style="margin-bottom: 30px; margin-top: 20px"
          @click="queryAllCustomerPrize('J4Vpx6JJeZ')"
        />

        <p>1. ONE游戏会员推荐的好友每一次VIP晋级，推荐人与被推荐人都可获得晋级推荐礼金。被推荐人晋级且完善账户信息，推荐礼金于次日等级完成晋升后系统自动派发到账；</p>
        <p>2. 推荐晋级礼金需完成<span class="gold">1倍流水</span>，不限场馆；</p>
        <p>3. 被推荐人达成条件后，系统自动派发；</p>
        <p>4. 推荐人与被推荐人必须为不同身份的真实会员，推荐人VIP等级必须≥VIP1且完善个人信息，同一手机号、姓名、银行卡号、IP地址、同一设备，都会被判定同一会员。推荐人及被推荐人均须填写有效的联系方式，供客服电话联系本人核实，任何一方无法联系均不予审核通过。凡使用任何违规手段恶意套取优惠，我司将保留无限期审核扣回红利及所产生利润的权利；</p>
        <p>5. 推荐人或被推荐人在任何时候成为代理账户将视为自动放弃参与本活动；</p>
        <p>6. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
      </div>
      <!-- 第二重 -->
      <div class="gift" ref="gift2">
        <van-image
          width="391px"
          height="60px"
          :src="require('./img/PC/zcl_tit_pc.png')"
          style="margin-bottom: 10px; margin-top: 30px"
        />
        <div class="w-100">
          <span class="title">第二重-推荐周存礼</span>
        </div>
        
        <dl>
          <dt>
            <span>被推荐人周累计存款</span>
            <span>推荐人与被推荐人领取周存加奖</span>
            <span>加奖上限</span>
          </dt>
          <dd class="rowspan">
            <span>≥10000CNY</span>
            <span></span>
            <span>88CNY</span>
          </dd>
          <dd class="rowspan">
            <span>≥30000CNY</span>
            <span></span>
            <span>188CNY</span>
          </dd>
          <dd class="rowspan">
            <span>≥50000CNY</span>
            <span></span>
            <span>388CNY</span>
          </dd>
          <dd class="rowspan">
            <span>≥100000CNY</span>
            <span class="big">0.5%</span>
            <span>888CNY</span>
          </dd>
          <dd class="rowspan">
            <span>≥300000CNY</span>
            <span></span>
            <span>1888CNY</span>
          </dd>
          <dd class="rowspan">
            <span>≥500000CNY</span>
            <span></span>
            <span>3888CNY</span>
          </dd>
          <dd class="rowspan">
            <span>≥800000CNY</span>
            <span></span>
            <span>5888CNY</span>
          </dd>
        </dl>

        <van-image
          width="214px"
          height="66px"
          :src="require('./img/PC/lqzcl_btn.png')"
          style="margin-bottom: 30px; margin-top: 20px"
          @click="queryAllCustomerPrize('TMbZpp25e9')"
        />

        <p>1. 活动期间，被推荐人周累计存款满足活动条件，推荐人和被推荐人均可获得周累计存款金额<span class="gold">0.5%</span>的周存礼。活动存款计算自然周。周存加奖次周一16：00之前系统自动派发到账。被推荐人周累计存款“CNY主账户与USDT子账户”累积计算（USDT=1:7），加奖彩金户与USDT子账户”累积计算（USDT=1:7），加奖彩金</p>
        <p>2. 推荐周存礼金需完成<span class="gold">3倍流水</span>，不限场馆；</p>
        <p>3. 被推荐人达成条件后，系统自动派发；</p>
        <p>4. 推荐人与被推荐人必须为不同身份的真实会员，推荐人VIP等级必须≥VIP1，同一手机号、姓名、银行卡号、IP地址、同一设备，都会被判定同一会员。推荐人及被推荐人均须填写有效的联系方式，供客服电话联系本人核实，任何一方无法联系均不予审核通过。凡使用任何违规手段恶意套取优惠，我司将保留无限期审核扣回红利及所产生利润的权利；</p>
        <p>5. 推荐人或被推荐人在任何时候成为代理账户将视为自动放弃参与本活动；</p>
        <p>6. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
      </div>
      <!-- 第三重 -->
      <div class="gift" ref="gift3">
        <van-image
          width="282px"
          height="63px"
          :src="require('./img/PC/tjxmjj_tit_pc.png')"
          style="margin-bottom: 10px; margin-top: 30px"
        />
        <div class="w-100">
          <span class="title">第三重-洗码加奖无上限</span>
        </div>
        
        <dl>
          <dt>
            <span>被推荐人周累计洗码投注额</span>
            <span>推荐人周洗码加奖比例</span>
          </dt>
          <dd>
            <span>5万-100万（包含5万，不包含100万）</span>
            <span>0.1%</span>
          </dd>
          <dd>
            <span>100万及以上</span>
            <span>0.12%</span>
          </dd>
        </dl>

        <van-image
          width="214px"
          height="66px"
          :src="require('./img/PC/lqxmjj_btn.png')"
          style="margin-bottom: 30px; margin-top: 20px"
          @click="queryAllCustomerPrize('m8beZQfGZU')"
        />

        <p>1. 被推荐人满足活动条件，推荐人可根据被推荐人的周累计有效投注额获得相应比例的周洗码加奖。主子账户洗码投注额累积计算（USDT=1:7），洗码加奖统一派发到CNY主账户；</p>
        <p>2. 周洗码加奖次周一16:00前由系统自动派发到账；</p>
        <p>3. 周洗码加奖<span class="gold">无需任何流水</span>，可直接提款；</p>
        <p>4. 推荐人与被推荐人必须为不同身份的真实会员，推荐人VIP等级必须≥VIP1，同一手机号、姓名、银行卡号、IP地址、同一设备，都会被判定同一会员。推荐人及被推荐人均须填写有效的联系方式，供客服电话联系本人核实，任何一方无法联系均不予审核通过。凡使用任何违规手段恶意套取优惠，我司将保留无限期审核扣回红利及所产生利润的权利；</p>
        <p>5. 推荐人或被推荐人在任何时候成为代理账户将视为自动放弃参与本活动；</p>
        <p>6. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
      </div>
    </div>
    <!-- 导览标签 -->
    <div class="tag">
      <div class="tag-item" :class="{active: activeTab === 1}" @click="scrollTo(1)">
        <van-image
          width="148px"
          height="30px"
          :src="require('./img/PC/推荐晋级礼.png')"
        />
      </div>
      <div class="tag-item" :class="{active: activeTab === 2}" @click="scrollTo(2)">
        <van-image
          width="148px"
          height="30px"
          :src="require('./img/PC/推荐周存礼.png')"
        />
      </div>
      <div class="tag-item" :class="{active: activeTab === 3}" @click="scrollTo(3)">
        <van-image
          width="177px"
          height="30px"
          :src="require('./img/PC/推荐洗码加奖.png')"
        />
      </div>
      <div class="tag-item" @click="scrollTo(0)">
        <van-image
          width="118px"
          height="30px"
          :src="require('./img/PC/返回顶部.png')"
        />
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
      activeTab: 0,
      // 邀请链接
      inviteLink: '',
      loginName: ''
    }
  },
  methods: {
    clickEvent (val) {
      console.log(this.inviteLink)
      if (!this.inviteLink) {
        this.$toast( '请确认是否已登入' )
        return
      }
      this.$copyText(this.inviteLink).then(function (e) {
        Toast("复制成功")
        console.log(e)
      }, function (e) {
        Toast("复制失败")
        console.log(e)
      })
    },
    // 卷动按钮
    scrollTo (val) {
      const target = [
        0,
        this.$refs.gift1.offsetTop,
        this.$refs.gift2.offsetTop,
        this.$refs.gift3.offsetTop
      ]
      window.scrollTo(0, target[val])
    },
    handleScrool () {
      let gift1Top = this.$refs.gift1.offsetTop
      let gift2Top = this.$refs.gift2.offsetTop
      let gift3Top = this.$refs.gift3.offsetTop
      if (window.scrollY > gift3Top - 250) {
        this.activeTab = 3
      } else if (window.scrollY > gift2Top - 250) {
        this.activeTab = 2
      } else if (window.scrollY > gift1Top - 250) {
        this.activeTab = 1
      } else {
        this.activeTab = 0
      }
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
    //   window.parent.postMessage({ message: "openService" }, "*")
    // },
    // reverseStrings(strs) {
    //   return strs.split("").sort().reverse().join("");
    // },
    // 接收邀请链接
    receiveMessage (event) {
      console.log( 'inviteLink', event )
      this.inviteLink = event.data.inviteLink || ''
      this.loginName = event.data.loginName || ''
    }
  },
  created () {
    this.$loading.show({
      text: "Loading",
    });
    setTimeout(() => {
      this.$loading.hide();
    }, 500);
    window.addEventListener('scroll', this.handleScrool)
  },
  mounted () {
    window.addEventListener("message", this.receiveMessage)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScrool)
    window.removeEventListener("message", this.receiveMessage)
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/normaliz.scss";
.triple-gift-pc {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: #e9e0d7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 60px;
  font-family: PingFang SC;

  .content-view {
    width: 1300px;
    min-height: 1046px;
    background-image: url("./img/PC/bg.png");
    background-size: 100% 100%;
    display: flex;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 30px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 70px 100px 70px 100px;

    .gift {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    .title {
      font-size: 20px;
      color: #444B52 ;
    }

    dl {
      width: 100%;
      border: 1px solid rgba(203, 162, 117, 1);
      border-radius: 8px;
      overflow: hidden;

      dt {
        width: 100%;
        background: #d0a881;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          flex: 1;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #ffffff;
          font-weight: 600;
        }
      }

      dd {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        span {
          flex: 1;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #63676c;
          border-right: 1px solid #cba275;
          border-bottom: 1px solid rgba(203, 162, 117, 1);
        }
        &.rowspan {
          span:nth-child(2) {
            border-bottom: none
          }
        }
      }
    }

    p {
      font-size: 20px;
      color: #444b52;
      line-height: 36px;
      margin-top: 5px;
      margin-bottom: 5px;
      width: 100%;
      text-align: left;

      & > span {
        color: #ad692b;
      }
    }
  }

  .w-100 {
    width: 100%;
  }

  .big {
    font-size: 36px!important;
  }

  .tag {
    position: sticky;
    left: 87%;
    bottom: 5%;
    background-image: url("./img/PC/dl_bg.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 217px;
    height: 330px;

    .tag-item {
      width: 217px;
      height: 53px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:nth-child(1) {
        margin-top: 20px;
      }
      &.active {
        background-image: linear-gradient(180deg, #FFCB98 1%, #D0A881 97%);
      }
    }
  }
}
</style>