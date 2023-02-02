<template>
  <div class="container" ref="main">
    <div class="body">
      <!-- <div class="title_1"></div>
      <div class="title_t_1">2021年3月10日至2021年12月31日</div> -->
      <div class="title_2"></div>
      <div class="table">
        <div class="thead">
          <div>关卡</div>
          <div>当日累计存款</div>
          <div>礼金</div>
          <div>累计礼金</div>
        </div>
        <div class="tbody">
          <div>
            <div><span>第1关</span></div>
            <div><span>≥1000CNY/143USDT</span></div>
            <div><span>7CNY/1USDT</span></div>
            <div><span>7CNY/1USDT</span></div>
          </div>
          <div>
            <div><span>第2关</span></div>
            <div><span>≥5000CNY/715USDT</span></div>
            <div><span>28CNY/4USDT</span></div>
            <div><span>35CNY/5USDT</span></div>
          </div>
          <div>
            <div><span>第3关</span></div>
            <div><span>≥10000CNY/1429USDT</span></div>
            <div><span>58CNY/8USDT</span></div>
            <div><span>93CNY/13USDT</span></div>
          </div>
          <div>
            <div><span>第4关</span></div>
            <div><span>≥30000CNY/4286USDT</span></div>
            <div><span>88CNY/12USDT</span></div>
            <div><span>181CNY/25USDT</span></div>
          </div>
          <div>
            <div><span>第5关</span></div>
            <div><span>≥50000CNY/7143USDT</span></div>
            <div><span>188CNY/27USDT</span></div>
            <div><span>369CNY/52USDT</span></div>
          </div>
          <div>
            <div><span>第6关</span></div>
            <div><span>≥100000CNY/14286USDT</span></div>
            <div><span>388CNY/56USDT</span></div>
            <div><span>757CNY/108USDT</span></div>
          </div>
          <div>
            <div><span>第7关</span></div>
            <div><span>≥250000CNY/35714USDT</span></div>
            <div><span>888CNY/127USDT</span></div>
            <div><span>1645CNY/235USDT</span></div>
          </div>
          <div>
            <div><span>第8关</span></div>
            <div><span>≥500000CNY/71429USDT</span></div>
            <div><span>1888CNY/270USDT</span></div>
            <div><span>3533CNY/505USDT</span></div>
          </div>
          <div>
            <div><span>第9关</span></div>
            <div><span>≥1000000CNY/142857USDT</span></div>
            <div><span>3888CNY/556USDT</span></div>
            <div><span>7421CNY/1061USDT</span></div>
          </div>
        </div>
      </div>
      <div class="title_3"></div>
      <div class="sub2">
        <p>
          1. 会员每日累计存款金额达到关卡门槛要求，即可获得相应的闯关礼金，每一个关卡礼金每日只可领取一次。会员可一次性申请多个关卡礼金。如：会员A一次存款100000CNY，会员A即可一次性申请领取1至6关礼金。活动按照北京时间00:00:00~23:59:59计算。当日闯关礼金请当日领取，逾期视为自动放弃。
        </p>
        <p>
          2. 当日闯关需完成<span>3倍流水</span>，不限场馆。
        </p>
        <p>
          3. 本活动与洗码优惠共享，与其他任意活动共享存款条件。
        </p>
        <p>
          4. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号。如有会员有任何违规，我们将保留无限期审核扣回红利及所产生利润的权利。
        </p>
        <p>
          5. 会员参加任何优惠活动则被视为认可并同意遵守这些规则以及ONE体育娱乐的有关规定，愿意受其约束，最终解释权归ONE体育所有。
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