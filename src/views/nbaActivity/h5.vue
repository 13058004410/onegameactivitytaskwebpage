<template>
  <div class="content">
    <div class="activities"></div>
    <div class="ac-content">
      会员投注NBA篮球赛前盘口，如果比赛进入加时且注单结果为输，我们将为您送出一个<span>88元/13USDT</span>的安慰礼金，<span>3倍</span>有效流水可提款。
    </div>
    <div class="ac-rule"></div>
    <div class="rule-content">
      <p>1. 彩金有效流水计算<span class="r">不包含(沙巴厅/ONE体育厅)</span>投注额，本活动仅限于投注NBA篮球赛前盘口。</p>
      <br />
      <p>
        2.
        注单金额不低于<span>500元/72USDT</span>，且赔率不低于香港盘0.5（欧洲盘1.5）
      </p>
      <br />
      <p>
        3.
        此优惠适用于只拥有一个ONE体育账户的玩家，相同姓名、电话号码、地址、邮箱、IP每场比赛都只可以享受一次。
      </p>
      <br />
      <p>4. 奖金将于赛事结束后统一派发，投注流水不限厅。</p>
      <br />
      <p>5. 若发现套利、对赌和不诚实获取盈利之行为的会员将被取消优惠资格。</p>
      <br />
      <p>
        6.
        本网站欢迎所有正常玩家参加活动，对于各种非正常投注，如正反投等行为，一经发现将取消获奖资格，并保留进一步处理的权利。
      </p>
      <br />
      <p>
        7.
        会员参加任何优惠活动则被视为认可并同意遵守这些规则以及ONE体育娱乐的有关规定，愿意受其约束，最终解释权归ONE体育所有。
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/assets/css/screen750.scss";
@import "@/assets/css/normaliz.scss";
</style>
<style lang="scss" scoped>
$num: 16;
.content {
  background: url("../../assets/img/nba/bgAc.png") no-repeat;
  background-size: 100%;
  padding-top: 220/$num + rem;
  padding-bottom: 30/$num + rem;
}
.activities {
  background: url("../../assets/img/nba/hdnr.png") no-repeat;
  background-size: 100%;
  width: 263/$num + rem;
  height: 20/$num + rem;
  margin: auto;
}
.ac-content {
  background: rgba(43, 55, 87, 0.8);
  border: 1px solid #7889b3;
  padding: 20/$num + rem 15/$num + rem;
  width: 335/$num + rem;
  box-sizing: border-box;
  margin: auto;
  margin-top: 20/$num + rem;

  font-size: 14/$num + rem;
  color: #eff2fe;
  letter-spacing: 0;
  > span {
    font-family: PingFangSC-Semibold;
    font-size: 14/$num + rem;
    color: #dcbe65;
    letter-spacing: 0;
    line-height: 20/$num + rem;
    font-weight: 600;
  }
}
.ac-rule {
  background: url("../../assets/img/nba/hdgz.png") no-repeat;
  background-size: 100%;
  width: 263/$num + rem;
  height: 20/$num + rem;
  margin: auto;
  margin-top: 25/$num + rem;
}
.rule-content {
  background: rgba(43, 55, 87, 0.8);
  border: 1px solid #7889b3;
  padding: 20/$num + rem 15/$num + rem;
  width: 335/$num + rem;
  margin: auto;
  margin-top: 20/$num + rem;
  box-sizing: border-box;

  font-size: 14/$num + rem;
  color: #eff2fe;
  letter-spacing: 0;
  line-height: 18/$num + rem;
  span {
    font-family: PingFangSC-Semibold;
    font-size: 14/$num + rem;
    color: #dcbe65;
    letter-spacing: 0;
    line-height: 20/$num + rem;
    font-weight: 600;
  }
  .r{
    color: #f00;
  }
}
</style>