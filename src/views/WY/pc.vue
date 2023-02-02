<template>
  <div class="container" ref="main">
    <div class="body">
      <div class="title_1"></div>
      <div class="title_t_1">2021年05月01日至2021年05月07日</div>
      <div class="title_2"></div>
      <div class="title_sub">
        <!-- <div class="icon">◈</div> -->
        <div class="icon_t">五一黄金周在ONE，奖金送不停</div>
        <div class="icon_t2">
          活动期间，ONE会员凡<span>当日充值≥100/15usdt</span>或<span>当日有效投注额≥1000/143usdt</span>，可领取<span>8元/1usdt</span>奖金，同时达标可重复领取，如连续7天达标其中之一条件，可额外领取<span>18元/3usdt</span>奖金，联系在线客服即可领取。
        </div>
      </div>
      <div class="table">
        <div class="thead">
          <div>条件</div>
          <div>奖金</div>
          <div>流水</div>
        </div>
        <div class="tbody">
          <div>
            <div>
              <span>当日累计充值≥100/15usdt</span>
            </div>
            <div>
              <span>8元/1usdt</span>
            </div>
            <div>
              <span>3倍</span>
            </div>
          </div>
          <div>
            <div>
              <span>当日有效投注额≥1000/143usdt</span>
            </div>
            <div>
              <span>8元/1usdt</span>
            </div>
            <div>
              <span>3倍</span>
            </div>
          </div>
          <div>
            <div>
              <span>连续7天达标以上条件之一</span>
            </div>
            <div>
              <span>18元/3usdt</span>
            </div>
            <div>
              <span>3倍</span>
            </div>
          </div>
        </div>
      </div>
      <div class="sub">
        例：会员在活动期间连续7天满足达标条件，则可累计获得（8+8）*7+18=130元彩金。
      </div>
      <div class="btn" @click="jumpKefuNative">
        <img :src="require('@/assets/img/WY/lxkf_btn.png')" alt />
      </div>
      <div class="title_3"></div>
      <div class="sub2">
        <p>1.本活动与其他优惠活动不共享。</p>
        <p>2.有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关，将不计算在有效流水内。</p>
        <p>3.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>4.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    this.openPCHandle("reloadPageSize", {
      height: this.$refs.main.clientHeight
    });
  },
  methods: {
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data
      };
      window.parent.postMessage(info, "*");
    },
    jumpKefuNative() {
      this.openPCHandle("openService");
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/normaliz.scss";
html {
  font-size: 4.995222222vw;

  @media screen and (max-width: 1200px) {
    font-size: 59.9422423px;
    body {
      min-width: 1200px;
      margin: 0 auto;
    }
  }
}
html,
body {
  height: auto;
}
</style>
<style lang="scss" scoped>
@import "./pc.scss";
</style>