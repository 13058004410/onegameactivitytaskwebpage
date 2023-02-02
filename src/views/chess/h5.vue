<template>
  <div class="container">
    <div style="height: 2rem"/>
    <van-image
        width="8.3125rem"
        height="1.5625rem"
        :src="require('./img/h5/hdnr_tit_h5.png')"
        alt="hdnrTitle"
        class="image"
    />

    <div class="table">
      <table>
        <tr>
          <th class="title">首存</th>
          <th>≥100CNY</th>
        </tr>
        <tr>
          <th class="title">彩金比例</th>
          <th>25%</th>
        </tr>
        <tr>
          <th class="title">彩金上限</th>
          <th>588CNY</th>
        </tr>
        <tr>
          <th class="title">流水要求</th>
          <th>（本金+彩金）*12</th>
        </tr>
      </table>
    </div>

    <van-image
        width="8.3125rem"
        height="1.5625rem"
        :src="require('./img/h5/hdgz_tit_h5.png')"
        alt="hdnrTitle"
        class="image"
    />

    <div class="content">
      <p>1. 会员账户首次存款满足首存条件即可领取棋牌首存彩金，首存之后投注前联系在线客服领取。每位会员仅限参与一次棋牌首存。</p>
      <p>2. 本活动不与其他活动共享（除特殊说明以外），活动需完成
        <span class="special-color">（本金+彩金）*12倍流水</span>
        ，本金超出部分完成
        <span class="special-color">1倍水</span>
        即可，限棋牌场馆。
      </p>
      <p>3. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号。如有会员有任何违规行为，我们将保留无限期审核扣回红利及所产生利润的权利。
      <p>4. 会员参加任何优惠活动则被视为认可并同意遵守这些规则以及ONE游戏的有关规定，愿意受其约束，最终解释权归ONE游戏所有。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChessH5"
}
</script>

<style lang="scss">
@import "@/assets/css/normaliz.scss";
@import "@/assets/css/screen750.scss";
</style>

<style lang="scss" scoped>
.container {
  background-image: url("./img/h5/sc_banner_h5.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0 0;
  padding-top: 25rem;
  background-color: #FCF5F3;
}

.image {
  margin: 1.25rem auto 1rem 1.25rem;
  display: block;
}

.table {
  margin-top: 1rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;

  table {
    width: 100%;
    border-style: hidden;
    border-radius: 4px;
    box-shadow: 0 0 0 1px rgba(203,162,117,1);

    .title {
      color: #FFFFFF;
      background: #D0A881;
    }

    tr {
      height: 2.375rem;

      th {
        font-size: 12px;
        color: #63676C;
        letter-spacing: 0;
        text-align: center;
        font-weight: 600;
        border: 1px solid rgba(203,162,117,1);
      }
    }
  }
}

.content {
  padding-bottom: 2.5rem;

  p {
    font-size: 14px;
    color: #444B52;
    letter-spacing: 0;
    font-weight: 500;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    margin-bottom: 0.625rem;
  }

  .special-color {
    color: #AA651A;
  }
}
</style>
