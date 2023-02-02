<template>
  <div class="container">
    <img class="tit_1 mgh20" :src="require('@/assets/img/everyDayOne/h5/hdsj_tit.png')" alt />
    <p class="start_t mgh20">2021年2月1日至2021年7月31日</p>
    <img class="tit_2 mgh20" :src="require('@/assets/img/everyDayOne/h5/hdnr_tit.png')" alt />
    <div class="table">
      <div class="t_h">
        <div>日存金额</div>
        <div>红利率</div>
        <div>日红利限额</div>
        <div>流水倍数</div>
      </div>
      <div class="t_b">
        <div>≥100/15USDT</div>
        <div>20%</div>
        <div>1000/143USDT</div>
        <div>12</div>
      </div>
    </div>
    <p class="hdnr_t mgh20">
      注：领取日存红利之后需完成流水要求方可领取下一次日存红利；当账户余额不足10元时，自动解锁流水要求。
      <br />例：日存金额=500，红利500*20%=100，流水要求=（500+100）*12=7200
    </p>
    <div class="ljlq">
      <button @click="jumpKefuNative"></button>
    </div>
    <img class="tit_3 mgh20" :src="require('@/assets/img/everyDayOne/h5/hdgz_tit.png')" alt />
    <div class="hdgz_t mgh20">
      <p>
        1.彩金有效流水计算
        <span class="r">不包含(沙巴厅/ONE体育厅)</span>投注额。本活动共享洗码活动不共享其他优惠活动。
      </p>
      <p>2.有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关，将不计算在有效流水内。</p>
      <p>3.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
      <p>4.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    jumpKefuNative () {
      window.location = 'nbapp://openServicePage?data={}'
    }
  }
};
</script>
<style lang="scss">
@import '@/assets/css/normaliz.scss';
@import '@/assets/css/screen750.scss';
</style>
<style lang="scss" scoped>
@import './h5.scss';
</style>