<template>
  <div>
    <div class="container">
      <div class="title_time">活动时间：活动上线-5/15 23:59</div>
      <div class="title_sub">
        <!-- <div class="icon">◈</div> -->
        <div class="icon_t">ONE众焦点战赛事 （活动指定厅方：BTI厅）</div>
      </div>

      <div class="table">
        <div class="thead">
          <div class="div1">时间</div>
          <div>联赛</div>
          <div>赛事</div>
        </div>
        <div class="tbody">
          <div class="body1">
            <div class="div1">
              <span>5/14 03:15</span>
            </div>
            <div>
              <span>英超</span>
            </div>
            <div>
              <span>曼联VS利物浦</span>
            </div>
          </div>
        </div>
      </div>
      <div class="btn" @click="jumpKefuNative">
        <img :src="require('@/assets/img/PremierLeague/h5/h5_btn.png')" alt />
      </div>
      <div class="title_sub">
        <!-- <div class="icon">◈</div> -->
        <div class="icon_ts">活动一</div>
        <div class="icon_t2">
          ONE会员投注ONE众焦点战赛事的任意赔率≥0.5/1.5盘口，且单场赛事（不含串关）总净盈利≥100元，则可联系在线客服领取
          <span>最高1088奖金</span>，仅需
          <span>3倍流水</span>出款。奖金于次日18：00前派发。
        </div>
      </div>
      <div class="table">
        <div class="thead">
          <div>总净盈利</div>
          <div>奖金</div>
          <div>流水倍数</div>
        </div>
        <div class="tbody">
          <div v-for="(x,n) in data" :key="n">
            <div v-for="(y,idx) in x" :key="idx">
              <span>{{y}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="sub">例：会员在赛前让分盘盈利1000元，在滚球大小盘输400元，则该场总盈利为1000-400=600元，则赛后可联系在线客服领取18元。</div>
     <hr class="lines"/>
      <div class="title_sub">
        <!-- <div class="icon">◈</div> -->
        <div class="icon_ts">活动二</div>
        <div class="icon_t2">
          活动结束后，赛事总
          <span>有效投注额≥1000</span>的会员，将获得额外奖金，最高
          <span>188元</span>，
          <span>5倍流水</span>出款，联系客服即可领取，奖金会在5月15日18：00前派发。
        </div>
      </div>
      <div class="table">
        <div class="thead">
          <div>总有效投注额</div>
          <div>奖金</div>
          <div>流水倍数</div>
        </div>
        <div class="tbody">
          <div v-for="(x,n) in data2" :key="n">
            <div v-for="(y,idx) in x" :key="idx">
              <span>{{y}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="bodys">
        <div class="head">活动规则</div>
        <div class="sub2">
          <p>1.本活动仅限BTI厅。</p>
          <p>2.有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关，将不计算在有效流水内。</p>
          <p>3.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
          <p>4.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        ["≥100/15usdt", "8/1usdt", "3"],
        ["≥500/72usdt", "18/3usdt", "3"],
        ["≥1000/143usdt", "38/6usdt", "3"],
        ["≥5000/715usdt", "108/16usdt", "3"],
        ["≥10000/1429usdt", "188/27usdt", "3"],
        ["≥50000/7143usdt", "588/84usdt", "3"],
        ["≥100000/14286usdt", "1088/156usdt", "3"]
      ],
      data2: [
        ["≥1000/143usdt", "18/3usdt", "5"],
        ["≥5000/715usdt", "88/13usdt", "5"],
        ["≥10000/1429usdt", "188/27usdt", "5"]
      ]
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