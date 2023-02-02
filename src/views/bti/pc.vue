<template>
  <div class="container" ref="main">
    <img :src="require('@/assets/img/bti/bg.jpg')" class="head_bg" alt="" />
    <p class="start_time">活动时间：2.1-4.5</p>
    <div class="b_main">
      <h1 class="head_t mgt15">活动一、周送58</h1>
      <div class="main_r">
        <div class="r_l">
          <p class="txt_1 mgt15">
            活动期间，BTI厅当周有效投注额达3888，即赠送BTI厅58元免费投注机会一次。
          </p>
          <div class="table mgt20">
            <div class="t_head">
              <div>达标资格</div>
              <div>免费投注机会</div>
            </div>
            <div class="t_body">
              <div>
                <div>BTI厅当周有效额≥3888</div>
                <div>58元</div>
              </div>
            </div>
          </div>
          <p class="txt_1 mgt20">
            免费投注机会仅限单注一次性使用，不可用于串关投注；注单结算后会员可提取盈利部分，不包括免费投注机会本金:
          </p>
          <div class="table mgt30">
            <div class="t_head">
              <div>注单结果</div>
              <div>可提盈利</div>
            </div>
            <div class="t_body">
              <div>
                <div>赢/赢半</div>
                <div>赔率结算-本金</div>
              </div>
              <div>
                <div>走水/取消</div>
                <div>返还免费投注机会</div>
              </div>
              <div>
                <div>输/输半</div>
                <div>0</div>
              </div>
            </div>
          </div>
        </div>
        <div class="r_r">
          <p class="txt_2">BTI厅免费投注机会使用示例图</p>
          <div class="app_bg mgt20">
            <img :src="require('@/assets/img/bti/1.jpg')" alt="" />
          </div>
        </div>
      </div>
      <p class="txt_y mgt15">
        注：免费投注机会于次周下午15：00前派发至BTI厅，72小时内须使用，否则将自动失效。<br />
        例：玩家A于2月1日～2月˙7日BTI厅达标3888有效投注额，则会在2月8日下午15：00派发58元免费投注机会，玩家A须于派发时间起72小时内使用免费投注机会进行投注。 
      </p>
    </div>
    <div class="line mgt52"></div>
    <div class="b_main mgt40">
      <h1 class="head_t">活动二、签到再送108</h1>
      <p class="txt_1 mgt15">
        当周BTI厅有效投注额达3888，则计为签到一周；周一到周日累计签到满一周，再赠送BTI厅108元免费投注机会一次。
      </p>
      <div class="table mgt20">
        <div class="t_head">
          <div>达标资格</div>
          <div>免费投注机会</div>
        </div>
        <div class="t_body">
          <div>
            <div>每周有效有投注额≥3888，連续达成四周签到</div>
            <div>108元</div>
          </div>
        </div>
      </div>
      <p class="txt_y mgt34">
        例：玩家B于3月1日（星期一）到28日（星期日）连续四周BTI厅达标3888有效投注额，则会于3月29日（星期一）下午15：00前派发上周的58元免费投注机会，以及四周累计签到达标的108元免费投注机会。
      </p>
    </div>
    <div class="foot mgt50">
      <div class="foot_t">活动规则</div>
      <div class="foot_b">

        <div>
          <span>1. </span>
          <p>
            有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关，将不计算在有效流水内。
          </p>
        </div>
        <div>
          <span>2. </span>
          <p>
            同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。
          </p>
        </div>
        <div>
          <span>3. </span>
          <p>
            会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$refs.main.clientHeight);
    this.openPCHandle("reloadPageSize", {
      height: this.$refs.main.clientHeight,
    });
  },
  methods:{
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      };
      window.parent.postMessage(info, "*");
    },
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
* {
  box-sizing: border-box;
}
</style>
<style lang="scss" scoped>
@import "./pc.scss";
</style>