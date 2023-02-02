<template>
  <div class="container">
    <div class="title_1"></div>
    <div class="title_t_1">活动上线至2021年4月30日</div>
    <div class="title_12"></div>
    <div class="title_t_12">IM电竞</div>
    <div class="title_2"></div>
    <div class="title_sub">
      <!-- <div class="icon">◈</div> -->
      <div class="icon_t">◈ 活动一：首单包赔100%</div>
    </div>
    <div class="sub">
      活动期间，首单投注
      <span>IM电竞</span>任意赛事赔率
      <span>≥1.75</span>的任意盘口，负盈利
      <span>100元</span>以上可获得
      <span>100%</span>全额返还，最高
      <span>200元</span>，联系客服即可申请。
    </div>
    <div class="title_tab"></div>
    <div class="btn" @click="jumpKefuNative">
      <img :src="require('@/assets/img/LPL/lxkf_btn.png')" alt />
    </div>
    <div class="title_sub">
      <div class="icon">◈</div>
      <div class="icon_t">活动二：一血一塔一龙 额外奖励5%</div>
    </div>
    <div class="sub2">
      活动期间，注单金额≥100，投注
      <span>英雄联盟赛事赔率≥1.75</span>的
      <span>首杀首塔首小龙</span>盘口且注单为赢，可获得
      <span>盈利*5%</span>的额外加奖，最高
      <span>500元</span>，
      <span>3倍流水</span>即可出款，联系客服即可领取。
    </div>
    <div class="title_tab2"></div>
    <div class="btn btn3" @click="jumpKefuNative">
      <img :src="require('@/assets/img/LPL/lxkf_btn.png')" alt />
    </div>
    <div class="title_3"></div>
    <div class="sub2">
      <p>1.本活动内容仅限IM电竞。</p>
      <p>2.有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关，将不计算在有效流水内。</p>
      <p>3.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权力。</p>
      <p>4.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
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