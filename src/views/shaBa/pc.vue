<template>
  <div class="container" ref="main">
    <div class="body">
      <!-- <div class="title_1"></div>
      <div class="title_t_1">2021年3月10日至2021年12月31日</div> -->
      <div class="title_2"></div>
      <div class="title_sub">
        <div class="icon">◈</div>
        <div class="icon_t">失误一场 全额返还</div>
      </div>
      <div class="table">
        <div class="thead">
          <div>注单金额</div>
          <div>满足条件</div>
          <div>最高返还</div>
          <div>流水倍数</div>
        </div>
        <div class="tbody">
          <div>
            <div><span>≥200/29USDT</span></div>
            <div><span>单式串关≥5场（5串1)且只输一场</span></div>
            <div><span>2021/289USDT</span></div>
            <div><span>5倍</span></div>
          </div>
        </div>
      </div>
      <div class="title_sub">
        <div class="icon">◈</div>
        <div class="icon_t">过关成功 额外加奖8%</div>
      </div>
      <div class="table t2">
        <div class="thead">
          <div>注单金额</div>
          <div>满足条件</div>
          <div>额外加奖</div>
          <div>最高返还</div>
          <div>流水倍数</div>
        </div>
        <div class="tbody">
          <div>
            <div><span>≥200/29USDT</span></div>
            <div>
              <span>单式串关≥5场（5串1）<br />且成功过关</span>
            </div>
            <div>
              <span>盈利（不含本金）<i>*8%</i></span>
            </div>
            <div><span>2021/289USDT</span></div>
            <div><span>5</span></div>
          </div>
        </div>
      </div>
      <div class="sub">
        例：您投注单式串关5串1，投注金额2500元，每过关盘口赔率2.0，成功过关，您的盈利为77500元，ONE体育将额外加奖8%，最高2021元；若闯关失败，您的5串1里只有一场输，其他场次为赢/赢半/平局，ONE体育将返还您注单本金，最高2021元。
      </div>
      <div class="title_3"></div>
      <div class="sub2">
        <p>
          1.符合条件的会员请在注单结算后24小时内，将用户名、注单截图提交给在线客服进行领取。
        </p>
        <p>
          2.本活动不包含<span>复式串关</span>；单式串关中任一单场赔率低于0.7（亚洲盘）/1.70（欧洲盘）将不计算在活动内。
        </p>
        <p>
          3.本活动所用存款、流水不可与其他活动共享，存款参与本活动后存款与注单均无法参与其他活动。
        </p>
        <p>
          4.活动注单“沙巴体育”若投注选项内有延期、取消、提早结算及任何投注无效比赛注单将无法参与活动。
        </p>
        <p>
          5.有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关，将不计算在有效流水内。
        </p>
        <p>
          6.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。
        </p>
        <p>
          7.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.openPCHandle("reloadPageSize", {
      height: this.$refs.main.clientHeight,
    });
  },
  methods: {
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      };
      window.parent.postMessage(info, "*");
    },
  },
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