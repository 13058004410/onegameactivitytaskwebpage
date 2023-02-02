<template>
  <div class="container">
    <div style="height: 2rem"/>
    <van-image
        width="14.6875rem"
        height="2.5rem"
        :src="require('./img/h5/hdnr_tit_h5.png')"
        alt="hdnrTitle"
        class="image"
    />
    <p>
      ONE游戏不定期指定世界杯赛事作为活动指定赛事，投注指定赛事有效投注额且赛事事件积分满足活动要求，不论注单输赢都可获得奖励。
    </p>
    <div class="schedule">
      <div class="schedule-content">
        <div class="team">
          <div class="team-flag">
            <van-image
                width="2rem"
                height="2rem"
                :src="gameInfo.home_team_flag"
            />
          </div>
          <span>{{gameInfo.home_team_name}}</span>
        </div>
        <div class="schedule-time">
          <span>{{gameInfo.league_name}}</span>
          <span>VS</span>
          <span>{{gameInfo.start_time ? gameInfo.start_time.split(' ')[0] : ''}} {{gameInfo.format_time}}</span>
        </div>
        <div class="team">
          <div class="team-flag">
            <van-image
                width="2rem"
                height="2rem"
                :src="gameInfo.away_team_flag"
            />
          </div>
          <span>{{gameInfo.away_team_name}}</span>
        </div>
      </div>
      <van-image
          width="8.5rem"
          height="2rem"
          :src="require('./img/h5/lq_btn_H5.png')"
          alt="btn"
          class="image"
          @click="jumpKefuNative"
      />
    </div>
    <table>
      <tr>
        <th>活动赛事日期</th>
        <th colspan="2">活动赛事</th>
        <th>事件积分</th>
      </tr>
      <tr class="gameList" v-for="(item, index) in gameList" :key="index" v-show="index < 4">
        <td>{{item.match_time}}</td>
        <td>{{item.home_team_name}}</td>
        <td>{{item.away_team_name}}</td>
        <td>{{item.integral}}</td>
      </tr>
    </table>
    <table style="margin-bottom: 0.625rem">
      <tr>
        <th style="width: 23%">赛事<br/>有效投注额</th>
        <th>事件积分</th>
        <th>总分<br/>≥15分</th>
        <th>总分<br/>≥25分</th>
        <th>总分<br/>≥35分</th>
      </tr>
      <tr>
        <td>≥500CNY/<br/>72USDT</td>
        <td rowspan="6">角球+1<br/><br/>黄牌+1<br/><br/>进球+2<br/><br/>红牌+2</td>
        <td>7CNY/<br/>1USDT</td>
        <td>14CNY/<br/>2USDT</td>
        <td>28CNY/<br/>4USDT</td>
      </tr>
      <tr>
        <td>≥1000CNY/<br/>143USDT</td>
        <td>38CNY/<br/>5USDT</td>
        <td>58CNY/<br/>8USDT</td>
        <td>88CNY/<br/>13USDT</td>
      </tr>
      <tr>
        <td>≥3000CNY/<br/>429USDT</td>
        <td>98CNY/<br/>14USDT</td>
        <td>118CNY/<br/>17USDT</td>
        <td>158CNY/<br/>23USDT</td>
      </tr>
      <tr>
        <td>≥10000CNY/<br/>1429USDT</td>
        <td>188CNY/<br/>27USDT</td>
        <td>288CNY/<br/>42USDT</td>
        <td>388CNY/<br/>56USDT</td>
      </tr>
      <tr>
        <td>≥20000CNY/<br/>2858USDT</td>
        <td>488CNY/<br/>70USDT</td>
        <td>588CNY/<br/>84USDT</td>
        <td>688CNY/<br/>98USDT</td>
      </tr>
      <tr>
        <td>≥50000CNY/<br/>7143USDT</td>
        <td>788CNY/<br/>113USDT</td>
        <td>888CNY/<br/>127USDT</td>
        <td>1088CNY/<br/>156USDT</td>
      </tr>
    </table>
    <p>
      注：如同一名球员在同一场比赛中获得两张黄牌由两黄变一红红牌罚下，那么计算为1张黄牌，1张红牌，总计3分。
    </p>
    <van-image
        width="14.6875rem"
        height="2.5rem"
        :src="require('./img/h5/hdgz_tit_h5.png')"
        alt="hdgzTitle"
        class="image"
    />
    <div class="content">
      <p>1. 会员投注活动指定赛事初盘（开赛前盘口）独赢、让球、大小、单双四个盘口的半场或全场，任何走盘、提前兑换、取消的赛事、对冲投注、串关投注、其他特殊盘口，赔率低于欧洲盘 1.70、香港盘 0.70 的注单一律不予计算。</p>
      <p>2. 赛事结束后会在24小时内公布赛事事件积分，满足活动条件的会员即可联系在线客服领取事件彩金。每位会员每场赛事加奖只可领取一次。</p>
      <p>3. 活动彩金需完成3倍流水，仅限体育场馆。本活动与洗码优惠共享，不与其他任意活动共享有效投注。</p>
      <p>4. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
      <p>5. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
    </div>
  </div>
</template>

<script>
import { rando, reverseStrings } from '../../assets/js/tools'
import axios from 'axios'
import md5 from 'js-md5'
export default {
  name: "warAgain",
  data() {
    return {
      gameInfo: {},
      gameList: []
    }
  },
  methods: {
    async newInfo () {

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
        activityId: process.env.NODE_ENV === "production" ? 54 : 102, // uat:116 正式区:3
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
      await axios.post(this.$api.warAgain.newInfo, sendData, {
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
      }).then((res) => {
        console.log(res.data.body.condition)
        this.gameInfo = res.data.body.condition
      })
    },
    async fifaEventIntegral () {

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
      let sendData = {}
      let sendDataString = JSON.stringify(sendData)
      let sign = md5(
        reverseStrings(sendDataString) +
        qid +
        appId +
        v +
        h5Token.token +
        h5Token.u2token
      )
      await axios.post(this.$api.warAgain.fifaEventIntegral, sendData, {
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
      }).then((res) => {
        console.log(res.data.body)
        this.gameList = res.data.body
      })
    },
    jumpKefuNative() {
      window.parent.postMessage({ message: "openService" }, "*")
      window.location = 'nbapp://openServicePage?data={}'
    },
  },
  async created () {
    this.newInfo()
    this.fifaEventIntegral()
  }
}
</script>

<style lang="scss">
@import "@/assets/css/normaliz.scss";
@import "@/assets/css/screen750.scss";
</style>

<style lang="scss" scoped>
.container {
  background-image: url("./img/h5/banner_h5.png");
  background-color: #8C0C40;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0 0;
  padding-top: 25rem;

  p {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    color: #FFFFFF;
    margin-bottom: 0.625rem;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }
}

.image {
  margin: 1.25rem auto 1rem;
  display: block;
}

table {
  width: 100%;
  margin-top: 1rem;

  tr {
    height: 3.375rem;

    th {
      background-color: #6C0731;
    }

    td {
      border: 1px solid rgba(255, 255, 255, 0.36);
    }

    th, td {
      width: 15%;
      text-align: center;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0;
      color: #FFFFFF;
    }
  }
}

.schedule {
  background-color: #FFFFFF;
  border: 1px solid rgba(239,213,198,1);
  border-radius: 0.5rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  color: #800B32;

  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.25rem 2.5rem 0;

    .team {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: 600;

      &-flag {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 46px;
        height: 46px;
        background: #FFFFFF;
        border: 1px solid rgba(239,205,205,1);
        border-radius: 50%;
        margin-bottom: 0.3125rem;
      }
    }
  }

  &-time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 1.125rem;
    margin-right: 1.125rem;
    font-weight: 500;

    :nth-child(1) {
      font-size: 14px;
    }
    :nth-child(2) {
      font-size: 20px;
      font-weight: 600;
      display: inline-block;
      height: 1.75rem;
    }
    :nth-child(3) {
      font-size: 12px;
    }
  }
}

.content {
  padding-bottom: 2.5rem;
}

.gameList {
  td {
    width: 23.3%;
  }
  td:nth-child(1) {
    width: 30%;
  }
}
</style>
