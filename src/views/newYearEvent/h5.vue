<template>
  <div  class="container">
    <p class="start_t">活动时间：2.9～2.11</p>
    <p class="sub">过去一年，感恩有你，为回馈新老会员厚爱，ONE全体会员凡在2.9-2.11上线并有任意一笔≥100元/15usdt充值，即可联系在线客服领取ONE除夕红包一份，祝您新年发财，ONE上加旺。</p>
    <div class="ljlq"><button @click="jumpKefuNative">领取红包</button></div>
    <div class="table">
      <div class="t_h">
        <div>会员星级</div>
        <div>除夕红包</div>
        <div>红包流水</div>
      </div>
      <div class="t_b">
        <div>
          <div>VIP1</div>
          <div>58/9usdt</div>
          <div>5倍</div>
        </div>
        <div>
          <div>VIP2</div>
          <div>68/10usdt</div>
          <div>5倍</div>
        </div>
        <div>
          <div>VIP3</div>
          <div>88/13usdt</div>
          <div>5倍</div>
        </div>
        <div>
          <div>VIP4</div>
          <div>188/27usdt</div>
          <div>5倍</div>
        </div>
        <div>
          <div>VIP5</div>
          <div>588/84usdt</div>
          <div>5倍</div>
        </div>
        <div>
          <div>VIP6</div>
          <div>888/127usdt</div>
          <div>5倍</div>
        </div>
        <div>
          <div>VIP7</div>
          <div>1888/270usdt</div>
          <div>5倍</div>
        </div>
      </div>
    </div>
    <h1 class="hdgz">活动规则</h1>
    <div class="hdgz_b">
      <div>
        <span>1.</span>
        <p>
          有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关，将不计算在有效流水内。
        </p>
      </div>
      <div>
        <span>2.</span>
        <p>
          同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。
        </p>
      </div>
      <div>
        <span>3.</span>
        <p>
          会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。
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
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/screen750.scss";
@import "@/assets/css/normaliz.scss";
</style>
<style lang="scss" scoped>
@import "./h5.scss";
</style>