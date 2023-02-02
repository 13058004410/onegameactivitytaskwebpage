<template>
  <div class="container">
    <van-image
        width="14.6875rem"
        height="2.5rem"
        :src="require('./img/h5/hdnr_tit_h5.png')"
        alt="hdnrTitle"
        class="image"
    />
    <table>
      <tr>
        <th>世界杯<br/>冠军投注</th>
        <th>助力奖金</th>
        <th>冠军加奖</th>
        <th>加奖上限</th>
      </tr>
      <tr>
        <td>≥888CNY/<br/>127USDT</td>
        <td>58CNY/<br/>8USDT</td>
        <td rowspan="5">10%</td>
        <td>188CNY/<br/>27USDT</td>
      </tr>
      <tr>
        <td>≥1888CNY/<br/>270USDT</td>
        <td>88CNY/<br/>13USDT</td>
        <td>288CNY/<br/>41USDT</td>
      </tr>
      <tr>
        <td>≥3588CNY/<br/>513USDT</td>
        <td>188CNY/<br/>27USDT</td>
        <td>388CNY/<br/>56USDT</td>
      </tr>
      <tr>
        <td>≥5688CNY/<br/>813USDT</td>
        <td>288CNY/<br/>41USDT</td>
        <td>688CNY/<br/>98USDT</td>
      </tr>
      <tr>
        <td>≥8188CNY/<br/>1170USDT</td>
        <td>388CNY/<br/>56USDT</td>
        <td>1288CNY/<br/>184USDT</td>
      </tr>
    </table>
    <table>
      <tr>
        <th>世界杯入围<br/>半决赛投注</th>
        <th>助力奖金</th>
        <th>四强加奖</th>
        <th>加奖上限</th>
      </tr>
      <tr>
        <td>≥888CNY/<br/>127USDT</td>
        <td>58CNY/<br/>8USDT</td>
        <td rowspan="5">8%</td>
        <td>188CNY/<br/>27USDT</td>
      </tr>
      <tr>
        <td>≥1888CNY/<br/>270USDT</td>
        <td>88CNY/<br/>13USDT</td>
        <td>188CNY/<br/>27USDT</td>
      </tr>
      <tr>
        <td>≥3588CNY/<br/>513USDT</td>
        <td>188CNY/<br/>27USDT</td>
        <td>388CNY/<br/>56USDT</td>
      </tr>
      <tr>
        <td>≥5688CNY/<br/>813USDT</td>
        <td>288CNY/<br/>41USDT</td>
        <td>588CNY/<br/>84USDT</td>
      </tr>
      <tr>
        <td>≥8188CNY/<br/>1170USDT</td>
        <td>388CNY/<br/>56USDT</td>
        <td>888CNY/<br/>127USDT</td>
      </tr>
    </table>
    <table>
      <tr>
        <th>世界杯入围<br/>八强投注</th>
        <th>助力奖金</th>
        <th>八强加奖</th>
        <th>加奖上限</th>
      </tr>
      <tr>
        <td>≥888CNY/<br/>127USDT</td>
        <td>58CNY/<br/>8USDT</td>
        <td rowspan="5">5%</td>
        <td>68CNY/<br/>10USDT</td>
      </tr>
      <tr>
        <td>≥1888CNY/<br/>270USDT</td>
        <td>88CNY/<br/>13USDT</td>
        <td>98CNY/<br/>14USDT</td>
      </tr>
      <tr>
        <td>≥3588CNY/<br/>513USDT</td>
        <td>188CNY/<br/>27USDT</td>
        <td>188CNY/<br/>27USDT</td>
      </tr>
      <tr>
        <td>≥5688CNY/<br/>813USDT</td>
        <td>288CNY/<br/>41USDT</td>
        <td>288CNY/<br/>41USDT</td>
      </tr>
      <tr>
        <td>≥8188CNY/<br/>1170USDT</td>
        <td>388CNY/<br/>56USDT</td>
        <td>588CNY/<br/>84USDT</td>
      </tr>
    </table>
    <van-image
        width="10.625rem"
        height="2.5rem"
        :src="require('./img/h5/lq_btn_H5.png')"
        alt="btn"
        class="image"
        @click="jumpKefuNative"
    />
    <van-image
        width="14.6875rem"
        height="2.5rem"
        :src="require('./img/h5/hdgz_tit_h5.png')"
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
</template>

<script>
export default {
  name: "worldCupH5",
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
@import "@/assets/css/screen750.scss";
</style>

<style lang="scss" scoped>
.container {
  background-image: url("./img/h5/banner_h5.png");
  background-color: #89153F;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0 0;
  padding-top: 25rem;
}

.image {
  margin: 1.25rem auto;
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
      border: 1px solid #FFFFFF;
    }

    th, td {
      width: 25%;
      text-align: center;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0;
      color: #FFFFFF;
    }
  }
}

.content {
  padding-bottom: 2.5rem;
  padding-right: 1.25rem;
  padding-left: 1.25rem;

  p {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0;
    color: #FFFFFF;
    margin-bottom: 0.625rem;
  }
}
</style>
