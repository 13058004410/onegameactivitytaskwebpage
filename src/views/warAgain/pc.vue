<template>
  <div class="container">
    <van-image width="100%" :src="require('./img/pc/banner_PC.jpg')" />
    <div class="main">
      <van-image
            width="29.375rem"
            height="5.125rem"
            :src="require('./img/pc/hdnr_tit_pc.png')"
            alt="hdnrTitle"
            class="image"
            style="margin-top: 0"
        />
      <p>
        ONE游戏不定期指定世界杯赛事作为活动指定赛事，投注指定赛事有效投注额且赛事事件积分满足活动要求，不论注单输赢都可获得奖励。
      </p>
      <div class="schedule">
        <div class="schedule-content">
          <div class="team">
            <div class="team-flag">
              <van-image
                  width="5.625rem"
                  height="5.625rem"
                  :src="gameInfo.home_team_flag"
              />
            </div>
            <span>{{gameInfo.home_team_name}}</span>
          </div>
          <div class="schedule-time">
            <van-image
                width="7.375rem"
                height="5.625rem"
                :src="require('./img/pc/VS.png')"
            />
            <span>{{gameInfo.league_name}}</span>
            <span>{{gameInfo.start_time}}</span>
          </div>
          <div class="team">
            <div class="team-flag">
              <van-image
                  width="5.625rem"
                  height="5.625rem"
                  :src="gameInfo.away_team_flag"
              />
            </div>
            <span>{{gameInfo.away_team_name}}</span>
          </div>
        </div>
        <van-image
            width="17.125rem"
            height="4rem"
            :src="require('./img/pc/lq_btn_PC.png')"
            alt="btn"
            class="image"
            style="margin-bottom: 1.25rem"
            @click="jumpKefuNative"
        />
      </div>
      <table>
        <tr>
          <th>活动赛事日期</th>
          <th colspan="2">活动赛事</th>
          <th>事件积分</th>
        </tr>
        <tr v-for="(item ,index) in gameList" :key="index" v-show="index < 4">
          <td>{{item.match_time}}</td>
          <td>{{item.home_team_name}}</td>
          <td>{{item.away_team_name}}</td>
          <td>{{item.integral}}</td>
        </tr>
      </table>
      <table style="margin-bottom: 0.625rem">
        <tr>
          <th style="width: 22%">赛事有效投注额</th>
          <th style="width: 5%">事件积分</th>
          <th>总分≥15分</th>
          <th>总分≥25分</th>
          <th>总分≥35分</th>
        </tr>
        <tr>
          <td>≥500CNY/72USDT</td>
          <td rowspan="6" class="rate">角球+1<br/><br/>黄牌+1<br/><br/>进球+2<br/><br/>红牌+2</td>
          <td>7CNY/1USDT</td>
          <td>14CNY/2USDT</td>
          <td>28CNY/4USDT</td>
        </tr>
        <tr>
          <td>≥1000CNY/143USDT</td>
          <td>38CNY/5USDT</td>
          <td>58CNY/8USDT</td>
          <td>88CNY/13USDT</td>
        </tr>
        <tr>
          <td>≥3000CNY/429USDT</td>
          <td>98CNY/14USDT</td>
          <td>118CNY/17USDT</td>
          <td>158CNY/23USDT</td>
        </tr>
        <tr>
          <td>≥10000CNY/1429USDT</td>
          <td>188CNY/27USDT</td>
          <td>288CNY/42USDT</td>
          <td>388CNY/56USDT</td>
        </tr>
        <tr>
          <td>≥20000CNY/2858USDT</td>
          <td>488CNY/70USDT</td>
          <td>588CNY/84USDT</td>
          <td>688CNY/98USDT</td>
        </tr>
        <tr>
          <td>≥50000CNY/7143USDT</td>
          <td>788CNY/113USDT</td>
          <td>888CNY/127USDT</td>
          <td>1088CNY/156USDT</td>
        </tr>
      </table>
      <p>
        注：如同一名球员在同一场比赛中获得两张黄牌由两黄变一红红牌罚下，那么计算为1张黄牌，1张红牌，总计3分。
      </p>
      <van-image
          width="29.375rem"
          height="5.125rem"
          :src="require('./img/pc/hdgz_tit_pc.png')"
          alt="hdgzTitle"
          class="image"
      />
      <div class="content">
        <p>1. 会员投注活动指定赛事初盘（开赛前盘口）独赢、让球、大小、单双四个盘口的半场或全场，任何走盘、提前兑换、取消的赛事、对冲投注、串关投注、其他特殊盘口，赔率低于欧洲盘 1.70、香港盘 0.70 的注单一律不予计算。</p>
        <p>2. 赛事结束后会在24小时内公布赛事事件积分，满足活动条件的会员即可联系在线客服领取事件彩金。每位会员每场赛事加奖只可领取一次。</p>
        <p>3. 活动彩金需完成<span>3倍流水</span>，仅限体育场馆。本活动与洗码优惠共享，不与其他任意活动共享有效投注。</p>
        <p>4. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>5. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
      </div>
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
        activityId: process.env.NODE_ENV === "production" ? 54 : 102, // uat:116 正式区:54
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
    }
  },
  async created () {
    this.newInfo()
    this.fifaEventIntegral()
  }
}
</script>

<style lang="scss">
@import "@/assets/css/normaliz.scss";
</style>

<style lang="scss" scoped>
.container {
  background-image: url("./img/pc/bg_PC.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-bottom: 8.75rem;

  p {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    color: #444B52;
    line-height: 2.25rem;
  }
}

.main {
  background-image: url("./img/pc/nr_bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem 6.25rem 3.75rem;
  box-sizing: border-box;
}

.image {
  margin: 2.5rem auto 1.25rem;
  display: block;
}

table {
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1.875rem;
  border-style: hidden;
  border-radius: 8px;
  box-shadow: 0 0 0 1px #89153F;

  tr {
    height: 4.25rem;

    th {
      background-color: #89153F ;
      font-weight: 600;
      color: #FFFFFF;
    }

    th:first-child{
      border-top-left-radius: 8px;
    }

    th:last-child{
      border-top-right-radius: 8px;
    }

    td {
      border: 1px solid #89153F;
      font-weight: 500;
      color: #63676C;
      letter-spacing: 1px;
      margin: -1px;
    }

    th, td {
      width: 15%;
      text-align: center;
      font-size: 20px;
    }

    .rate {
      font-size: 24px;
      letter-spacing: 0;
    }
  }
}

.schedule {
  margin-top: 0.5rem;

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
      color: #424B53;
      letter-spacing: 0;
      font-size: 26px;
      font-weight: 500;

      &-flag {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 10rem;
        height: 9rem;
        background-image: url("./img/pc/dwk.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 50%;
        margin-bottom: 0.625rem;
      }
    }
  }

  &-time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 5.75rem;
    margin-right: 5.75rem;
    font-weight: 500;

    :nth-child(2) {
      font-size: 24px;
      margin-top: 1.25rem;
      margin-bottom: 0.25rem;
    }
    :nth-child(3) {
      font-size: 20px;
    }
  }
}

.content {
  span {
    color: #89153F;
  }
}
</style>


