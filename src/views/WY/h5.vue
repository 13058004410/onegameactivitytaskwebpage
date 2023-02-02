<template>
  <div class="container">
    <div class="borders">
       <div class="title_1"></div>
    <div class="title_t_1">5月1日至5月7日</div>
    <div class="title_2"></div>
    <div class="title_sub">
      <!-- <div class="icon">◈</div> -->
      <div class="icon_t">五一黄金周在ONE，奖金送不停</div>
    </div>
    <div class="sub2">
      活动期间，ONE会员凡<span>当日充值≥100/15usdt</span>或<span>当日有效投注额≥1000/143usdt</span>，可领取<span>8元/1usdt</span>奖金，同时达标可重复领取，如连续7天达标其中之一条件，可额外领取<span>18元/3usdt</span>奖金，联系在线客服即可领取。
    </div>
    <div class="title_tab"></div>
    <div class="sub">
      例：会员在活动期间连续7天满足达标条件，则可累计获得（8+8）*7+18=130元彩金。
    </div>
    <div class="btn" @click="jumpKefuNative">
      <img :src="require('@/assets/img/WY/h5/lxkf_btn_h5.png')" alt />
    </div>
    <div class="title_3"></div>
    <div class="sub2">
        <p>1.本活动与其他优惠活动不共享。</p>
        <p>2.有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关，将不计算在有效流水内。</p>
        <p>3.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>4.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p> </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
    jumpKefuNative() {
      // console.log(3333)
      window.location = "nbapp://openServicePage?data={}";
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/normaliz.scss";
@import "@/assets/css/screen750.scss";
</style>
<style lang="scss" scoped>
@import "./h5.scss";
</style>