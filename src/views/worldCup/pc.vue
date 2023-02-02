<template>
  <div class="container">
    <div class="main">
      <van-image
            width="29.375rem"
            height="5.125rem"
            :src="require('./img/pc/hdnr_tit_pc.png')"
            alt="hdnrTitle"
            class="image"
        />
      <table>
        <tr>
          <th>世界杯冠军投注</th>
          <th>助力奖金</th>
          <th>冠军加奖</th>
          <th>加奖上限</th>
        </tr>
        <tr>
          <td>≥888CNY/127USDT</td>
          <td>58CNY/8USDT</td>
          <td rowspan="5" class="rate">10%</td>
          <td>188CNY/27USDT</td>
        </tr>
        <tr>
          <td>≥1888CNY/70USDT</td>
          <td>88CNY/13USDT</td>
          <td>288CNY/41USDT</td>
        </tr>
        <tr>
          <td>≥3588CNY/513USDT</td>
          <td>188CNY/27USDT</td>
          <td>388CNY/56USDT</td>
        </tr>
        <tr>
          <td>≥5688CNY/813USDT</td>
          <td>288CNY/41USDT</td>
          <td>688CNY/98USDT</td>
        </tr>
        <tr>
          <td>≥8188CNY/1170USDT</td>
          <td>388CNY/56USDT</td>
          <td>1288CNY/184USDT</td>
        </tr>
      </table>
      <table>
        <tr>
          <th>世界杯入围半决赛投注</th>
          <th>助力奖金</th>
          <th>四强加奖</th>
          <th>加奖上限</th>
        </tr>
        <tr>
          <td>≥888CNY/127USDT</td>
          <td>58CNY/8USDT</td>
          <td rowspan="5" class="rate">8%</td>
          <td>88CNY/13USDT</td>
        </tr>
        <tr>
          <td>≥1888CNY/270USDT</td>
          <td>88CNY/13USDT</td>
          <td>188CNY/27USDT</td>
        </tr>
        <tr>
          <td>≥3588CNY/513USDT</td>
          <td>188CNY/27USDT</td>
          <td>388CNY/56USDT</td>
        </tr>
        <tr>
          <td>≥5688CNY/813USDT</td>
          <td>288CNY/41USDT</td>
          <td>588CNY/84USDT</td>
        </tr>
        <tr>
          <td>≥8188CNY/1170USDT</td>
          <td>388CNY/56USDT</td>
          <td>888CNY/127USDT</td>
        </tr>
      </table>
      <table>
        <tr>
          <th>世界杯入围八强投注</th>
          <th>助力奖金</th>
          <th>八强加奖</th>
          <th>加奖上限</th>
        </tr>
        <tr>
          <td>≥888CNY/127USDT</td>
          <td>58CNY/8USDT</td>
          <td rowspan="5" class="rate">5%</td>
          <td>68CNY/10USDT</td>
        </tr>
        <tr>
          <td>≥1888CNY/270USDT</td>
          <td>88CNY/13USDT</td>
          <td>98CNY/14USDT</td>
        </tr>
        <tr>
          <td>≥3588CNY/513USDT</td>
          <td>188CNY/27USDT</td>
          <td>188CNY/27USDT</td>
        </tr>
        <tr>
          <td>≥5688CNY/813USDT</td>
          <td>288CNY/41USDT</td>
          <td>288CNY/41USDT</td>
        </tr>
        <tr>
          <td>≥8188CNY/1170USDT</td>
          <td>388CNY/56USDT</td>
          <td>588CNY/84USDT</td>
        </tr>
      </table>
      <van-image
          width="17.125rem"
          height="4rem"
          :src="require('./img/pc/lq_btn_PC.png')"
          alt="btn"
          class="image"
          style="margin-bottom: 0.625rem"
          @click="jumpKefuNative"
      />
      <van-image
          width="29.375rem"
          height="5.125rem"
          :src="require('./img/pc/hdgz_tit_pc.png')"
          alt="hdgzTitle"
          class="image"
      />
      <div class="content">
        <p>1. 活动期间，会员投注世界杯冠军玩法中的入围八强，入围半决赛（入围四强），世界杯冠军（投注哪支队伍获得冠军），单注注单满足相应活动条件即可申请领取世界杯助力奖金；如此注单最終结算为赢，可申请领取世界杯加奖奖金。例：会员 A投注巴西入围八强，投注10000CNY，会员A可领取助力奖金，如此注单最终结算为赢，会员A可申请领取世界杯加奖奖金。加奖根据注单净盈利计算。注：本活动每个入围项每位会员仅限参与一次，申请加奖注单与申请助力注单须为相同注单。</p>
        <p>2. 本活动参与截止时间为 11月20日（即 21日及之后投注的注单不可参与本活动），助力奖在投注成功后且符合活动条件即可联系在线客服领取；加奖需在注单结算后，符合活动条件即可联系在线客服申请领取。</p>
        <p>3. 本活动可与洗码优惠共享，不与其他活动共享，活动彩金需完成3倍流水，限体育场馆。</p>
        <p>4. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>5. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "worldCupPC",
  methods: {
    jumpKefuNative() {
      window.parent.postMessage({ message: "openService" }, "*")
      window.location = 'nbapp://openServicePage?data={}'
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/normaliz.scss";
</style>

<style lang="scss" scoped>
.container {
  background-image: url("./img/pc/BG_PC.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-top: 37.5rem;
  padding-bottom: 8.75rem;
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
  align-items: center;
  padding: 2.5rem 5.625rem 3.75rem;
}

.image {
  margin: 1.875rem auto 2.5rem;
  display: block;
}

table {
  width: 100%;
  margin-top: 1rem;
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
      margin: -1px;
    }

    th, td {
      width: 25%;
      text-align: center;
      font-size: 20px;
      letter-spacing: 0;
    }

    .rate {
      font-size: 32px;
      letter-spacing: 1.6px;
    }
  }
}

.content {
  p {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    color: #444B52;
    line-height: 2.25rem;
    margin-bottom: 0.625rem;
  }
}
</style>


