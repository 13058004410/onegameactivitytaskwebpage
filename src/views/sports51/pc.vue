<template>
  <div class="container" ref="main">
    <div class="body">
      <!-- <div class="title_1"></div>
      <div class="title_t_1">2021年3月10日至2021年12月31日</div> -->
      <div class="title_2"></div>
      <div class="sub">
      5月1日 至 5月7日，会员在体育类游戏中每产生<span>1000元有效投注额</span>即可获得<span>5元礼金</span>，且每日累计有效投注额可获得相应档位礼金，档位礼金与基础礼金可以共享。<span>(注：USDT按1:7自动换算)</span>
      </div>
     <div class="table">
        <div class="thead">
          <div>活动档位</div>
          <div>体育累计有效投注额</div>
          <div>档位礼金</div>
          <div>基础礼金</div>
        </div>
        <div class="tbody">
          <div>
            <div><span>第一档</span></div>
            <div>3000CNY</div>
            <div>18CNY</div>
            <div>15CNY</div>
          </div>
          <div>
            <div><span>第二档</span></div>
            <div>10000CNY</div>
            <div>38CNY</div>
            <div>50CNY</div>
          </div>
          <div>
            <div><span>第三档</span></div>
            <div>30000CNY</div>
            <div>128CNY</div>
            <div>150CNY</div>
          </div>
          <div>
            <div><span>第四档</span></div>
            <div>80000CNY</div>
            <div>358CNY</div>
            <div>400CNY</div>
          </div>
          <div>
            <div><span>第五档</span></div>
            <div>150000CNY</div>
            <div>588CNY</div>
            <div>750CNY</div>
          </div>
          <div>
            <div><span>第六档</span></div>
            <div>300000CNY</div>
            <div>1288CNY</div>
            <div>1500CNY</div>
          </div>
        </div>
      </div>
      
    <div class="sub">
     例:会员A，5月1日在体育类游戏累计有效投注额为58365，会员A即可获得(58000/1000)*5=290元流水礼金和第三档的128元礼金，总计418元礼金。每位会员每日只可领取一档奖励，取满足的最高条件档位派发。
     </div>
      <div class="title_3"></div>
      <div class="sub2">
        <p>
          1. 活动期间会员当日满足活动累计有效投注档位即可获得相应档位及基础投注礼金。满足活动条件后请在次日24小时内联系在线客服申请，逾期视为自动放弃。
        </p>
        <p>
          2. 有效投注额仅计算已结算并产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率低于欧洲盘1.5或港盘0.5的注单、连串过关、提前兑现，将不计算在有效投注额内。
        </p>
        <p>
          3. 本活动礼金需完成<span>3倍流水</span>，限体育场馆。
        </p>
        <p>
          4. 本活动与洗码优惠共享，不与其他任意同场馆限制的有效投注类活动共享。
        </p>
        <p>
          5. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号。如有会员有任何违规行为，我们将保留无限期审核扣回红利及所产生利润的权利。
        </p>
        <p>
          6. 会员参加任何优惠活动则被视为认可并同意遵守这些规则以及ONE体育的有关规定，愿意受其约束，最终解释权归ONE体育所有。
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