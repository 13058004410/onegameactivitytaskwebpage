<template>
  <div class="weekly-gift-pc">
    <van-image width="100%" :src="require('./img/PC/banner_PC.jpg')" />
    <div class="content-view">
      <van-image
        width="194px"
        height="100px"
        :src="require('./img/PC/hdnr_tit.png')"
        style="margin-bottom: 20px"
      />
      <!-- 活动内容 -->
      <div class="gift">
        <dl>
          <dt>
            <span>周有效投注</span>
            <span>彩金</span>
            <span>流水要求</span>
          </dt>
          <dd class="rowspan">
            <span>3888CNY/556USDT</span>
            <span>38CNY/6USDT</span>
            <span></span>
          </dd>
          <dd class="rowspan">
            <span>6888CNY/984USDT</span>
            <span>68CNY/10USDT</span>
            <span></span>
          </dd>
          <dd class="rowspan">
            <span>12888CNY/1842USDT</span>
            <span>128CNY/19USDT</span>
            <span></span>
          </dd>
          <dd class="rowspan">
            <span>38888CNY/5556USDT</span>
            <span>288CNY/42USDT</span>
            <span class="big">1倍水</span>
          </dd>
          <dd class="rowspan">
            <span>68888CNY/9842USDT</span>
            <span>388CNY/56USDT</span>
            <span></span>
          </dd>
          <dd class="rowspan">
            <span>188888CNY/26984USDT</span>
            <span>1288CNY/184USDT</span>
            <span></span>
          </dd>
          <dd class="rowspan">
            <span>288888CNY/41270USDT</span>
            <span>2888CNY/413USDT</span>
            <span></span>
          </dd>
        </dl>
        <van-image
          width="194px"
          height="100px"
          :src="require('./img/PC/hdgz_tit_pc.png')"
          style="margin-bottom: 20px; margin-top: 20px"
        />

        <p>1. 会员于所有体育场馆投注参与，有效投注额计算周期：每周一00:00至周日23:59（北京时间）。</p>
        <p>2. 满足活动条件的会员，在次周一至周三联系在线客服申请领取，逾期视为自动放弃。</p>
        <p>3. 本活动可与洗码优惠共享，不与其他活动共享有效投注额，活动彩金需完成<span class="gold">1倍流水</span>，限体育场馆。</p>
        <p>4. 本活动有效投注额仅计算已结算并产生输赢结果的注单，任何走盘、串关、特殊投注、取消的赛事将不计算在有效投注。任何低于欧洲盘1.50或香港盘0.50赔率的投注、注单提前兑现以及在同一赛事中同时投注对冲盘口，将不计算在投注额内。</p>
        <p>5. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>6. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/normaliz.scss";
.weekly-gift-pc {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: #e9e0d7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 60px;
  font-family: PingFang SC;

  .content-view {
    width: 1300px;
    min-height: 1046px;
    background-image: url("./img/PC/bg.png");
    background-size: 100% 100%;
    display: flex;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 30px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 70px 100px 70px 100px;

    .gift {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    .title {
      font-size: 20px;
      color: #444B52 ;
    }

    dl {
      width: 100%;
      border: 1px solid rgba(203, 162, 117, 1);
      border-radius: 8px;
      overflow: hidden;

      dt {
        width: 100%;
        background: #d0a881;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          flex: 1;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #ffffff;
          font-weight: 600;
        }
        span:nth-child(3) {
          flex: 0.8;
        }
      }

      dd {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        span {
          flex: 1;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #63676c;
          border-right: 1px solid #cba275;
          border-bottom: 1px solid rgba(203, 162, 117, 1);
        }
        &.rowspan {
          span:nth-child(3) {
            border-bottom: none;
            flex: 0.8;
          }
        }
      }
    }

    p {
      font-size: 20px;
      color: #444b52;
      line-height: 36px;
      margin-top: 5px;
      margin-bottom: 5px;
      width: 100%;
      text-align: left;

      & > span {
        color: #ad692b;
      }
    }
  }

  .w-100 {
    width: 100%;
  }

  .big {
    font-size: 36px!important;
  }
}
</style>