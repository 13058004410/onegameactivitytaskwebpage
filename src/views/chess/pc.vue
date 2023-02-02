<template>
  <div class="container">
    <van-image width="100%" :src="require('./img/pc/sc_banner_PC.jpg')" />
    <div class="main">
      <van-image
          width="12.125rem"
          height="5.125rem"
          :src="require('./img/pc/hdnr_tit_pc.png')"
          alt="hdnrTitle"
          class="image"
      />

      <table>
        <tr>
          <th>首存</th>
          <th>彩金比例</th>
          <th>彩金上限</th>
          <th>流水要求</th>
        </tr>
        <tr>
          <td>≥100CNY</td>
          <td>25%</td>
          <td>588CNY</td>
          <td>（本金+彩金）*12</td>
        </tr>
      </table>

      <van-image
          width="12.125rem"
          height="5.125rem"
          :src="require('./img/pc/hdgz_tit_pc.png')"
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
  </div>
</template>

<script>
export default {
  name: "ChessPc"
}
</script>

<style lang="scss">
@import "@/assets/css/normaliz.scss";
</style>

<style lang="scss" scoped>
.container {
  background-color: #EAE0D5;
  padding-bottom: 6.25rem;
}

.image {
  margin: 2.5rem auto 1.25rem;
  display: block;
}

.main {
  background-image: url("./img/pc/scnr_bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem 6.25rem 3.75rem;
  box-sizing: border-box;
}

table {
  width: 100%;
  border-style: hidden;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(203, 162, 117, 1);

  tr {
    height: 4.75rem;

    th {
      color: #FFFFFF;
      background: #D0A881;
    }

    td {
      color: #63676C;
      border: 1px solid rgba(203, 162, 117, 1);
    }

    th, td {
      font-size: 20px;
      letter-spacing: 1px;
      text-align: center;
      font-weight: 500;
    }
  }
}

.content {
  padding-bottom: 2.5rem;

  p {
    font-size: 20px;
    color: #444B52;
    letter-spacing: 0;
    line-height: 36px;
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
