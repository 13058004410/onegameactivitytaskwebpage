<template>
  <div class="container">
    <img :src="require('@/assets/img/one/BG_H5.jpg')" class="bg" />
    <div class="box">
      <img :src="require('@/assets/img/one/hdsj.png')" class="bg-t" />
      <p class="txt-1 mgt-12">2021年4月8日至2021年4月11日</p>
      <img class="bg-t2 mgt-30" :src="require('@/assets/img/one/hdnr.png')" />
      <p class="txt-2 mgt-12">ONE众焦点战赛事：</p>
      <table class="mgt-12">
        <thead>
          <tr>
            <td>时间</td>
            <td>联赛</td>
            <td>赛事</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4月11日 3：00</td>
            <td>西甲</td>
            <td>皇家马德里VS巴塞罗那</td>
          </tr>
          <tr>
            <td>4月11日 8：30</td>
            <td>NBA</td>
            <td>篮网VS湖人</td>
          </tr>
        </tbody>
      </table>
      <p class="txt-1 mgt-12">活动指定厅方：BTI厅</p>
      <p class="txt-3 mgt-20">◈ 活动一：</p>
      <p class="txt-1 mgt-10">
        ONE会员投注ONE众焦点战赛事的任意赔率≥0.5/1.5盘口，且单场赛事（不含串关）总净盈利≥500元，则可联系在线客服领取最高<span
          class="y"
          >1088奖金</span
        >，仅需<span class="y">五倍流水</span>出款。奖金于次日18：00前派发。
      </p>
      <table class="mgt-10">
        <thead>
          <tr>
            <td>总净盈利</td>
            <td>奖金</td>
            <td>流水倍数</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>≥500/72usdt</td>
            <td>18/3usdt</td>
            <td>5倍</td>
          </tr>
          <tr>
            <td>≥1000/143usdt</td>
            <td>38/6usdt</td>
            <td>5倍</td>
          </tr>
          <tr>
            <td>≥5000/715usdt</td>
            <td>108/16usdt</td>
            <td>5倍</td>
          </tr>
          <tr>
            <td>≥10000/1429usdt</td>
            <td>188/27usdt</td>
            <td>5倍</td>
          </tr>
          <tr>
            <td>≥50000/7143usdt</td>
            <td>588/84usdt</td>
            <td>5倍</td>
          </tr>
          <tr>
            <td>≥100000/14286usdt</td>
            <td>1088/156usdt</td>
            <td>5倍</td>
          </tr>
        </tbody>
      </table>
      <p class="txt-1 mgt-10">
        例：
        会员在（皇马VS巴萨）赛前让分盘盈利1000元，在滚球大小盘输400元，则该场总盈利为1000-400=600元，则赛后可联系在线客服领取18元；会员又在（篮网VS湖人）赛前胜负盘盈利6000元，在滚球让分盘输1000元，则该场总盈利6000-1000=5000元，则赛后可联系在线客服领取108元，本活动所获奖金一共为18+108=126元。
      </p>
      <div class="jump mgt-20"><button @click="jumpKefuNative"></button></div>
      <p class="txt-3 mgt-30">◈ 活动二：</p>
      <p class="txt-1 mgt-10">
        活动结束后，<span class="y">两场赛事总有效投注额≥20000</span
        >的会员，将派发<span class="y">188奖金，五倍流水</span
        >出款。奖金会在4月13日18：00前派发。
      </p>
      <table class="mgt-10">
        <thead>
          <tr>
            <td>总有效投注额</td>
            <td>奖金</td>
            <td>流水倍数</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>≥20000/2858usdt</td>
            <td>188/27usdt</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
      <img class="bg-t3 mgt-30" :src="require('@/assets/img/one/hdgz.png')" />
      <div class="txt-1 mgt-12">
        <p>1.本活动仅限BTI厅。</p>
        <p>
          2.有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关，将不计算在有效流水内。
        </p>
        <p>
          3.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。
        </p>
        <p>
          4.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    jumpKefuNative () {
      window.location = 'nbapp://openServicePage?data={}'
    },
  }
};
</script>
<style lang="scss">
@import "@/assets/css/screen750.scss";
@import "@/assets/css/normaliz.scss";
body {
  background: #f5f9fa;
}
</style>
<style lang="scss" scoped>
@import "./h5.scss";
</style>