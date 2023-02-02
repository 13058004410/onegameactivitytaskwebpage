<template>
  <div class="container">
    <van-image width="100%" :src="require('./img/pc/banner_PC.jpg')" />
    <div class="main">
      <van-image
          width="12.125rem"
          height="6.25rem"
          :src="require('./img/pc/hdnr_tit_pc.png')"
          alt="hdnrTitle"
          class="image"
      />

      <p>第一重：每日存送</p>

      <table>
        <tr>
          <th>档位</th>
          <th>当日单笔存款</th>
          <th>彩金</th>
          <th>流水要求</th>
        </tr>
        <tr>
          <td>一档</td>
          <td>≥200CNY</td>
          <td>18CNY</td>
          <td>（本+彩）*8</td>
        </tr>
        <tr>
          <td>二档</td>
          <td>≥500CNY</td>
          <td>58CNY</td>
          <td>（本+彩）*8</td>
        </tr>
        <tr>
          <td>三档</td>
          <td>≥2000CNY</td>
          <td>188CNY</td>
          <td>（本+彩）*8</td>
        </tr>
        <tr>
          <td>四档</td>
          <td>≥5000CNY</td>
          <td>288CNY</td>
          <td>（本+彩）*8</td>
        </tr>
        <tr>
          <td>五档</td>
          <td>≥20000CNY</td>
          <td>588CNY</td>
          <td>（本+彩）*8</td>
        </tr>
      </table>

      <p style="margin-top: 1.25rem">第二重：救援金</p>

      <table>
        <tr>
          <th>档位</th>
          <th>救援比例</th>
          <th>救援金上限</th>
          <th>流水要求</th>
        </tr>
        <tr>
          <td>一档</td>
          <td rowspan="5">50%</td>
          <td>38CNY</td>
          <td>彩金8倍</td>
        </tr>
        <tr>
          <td>二档</td>
          <td>88CNY</td>
          <td>彩金8倍</td>
        </tr>
        <tr>
          <td>三档</td>
          <td>288CNY</td>
          <td>彩金8倍</td>
        </tr>
        <tr>
          <td>四档</td>
          <td>588CNY</td>
          <td>彩金8倍</td>
        </tr>
        <tr>
          <td>五档</td>
          <td>1888CNY</td>
          <td>彩金8倍</td>
        </tr>
      </table>

      <van-image
          width="12.125rem"
          height="6.25rem"
          :src="require('./img/pc/hdgz_tit_pc.png')"
          alt="hdnrTitle"
          class="image"
      />

      <div class="content">
        <p>1. 第一重活动申请：存款后投注前联系在线客服申请，每日领取请一次。</p>
        <p>2. 第二重活动申请：当天成功参与过第一重活动一任意档位，即可于次日联系在线客服领取对应档位第二重活动。每日领取请一次。</p>
        <p>3. 救援金活动根据棋牌场馆净负盈利计算，单日棋牌场馆净负盈利=单日棋牌场馆总输赢－单日棋牌总彩金。</p>
        <p>4. 未参与过第一重活动或未产生净负盈利不可以参与第二重活动；第二重活动可参加档位与第一重活动一致。</p>
        <p>5. 第一重活动需完成
          <span class="special-color">（本金+彩金）*8倍流水</span>
          ，超出部分本金1倍流水；第二重活动需完成金彩金
          <span class="special-color">8倍流水</span>
          ，限棋牌场馆。
        </p>
        <p>6. 本活动不与其他活动共享（除特殊说明以外）。</p>
        <p>7. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>8. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DoubleChessPC"
}
</script>

<style lang="scss">
@import "@/assets/css/normaliz.scss";
</style>

<style lang="scss" scoped>
.container {
  background-color: #EAE0D5;
  padding-bottom: 6.25rem;

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
}

.image {
  margin: 2.5rem auto 1.25rem;
  display: block;
}

.main {
  background-image: url("./img/pc/nr_bg.png");
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
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(203, 162, 117, 1);

  tr {
    height: 4.25rem;

    th {
      color: #FFFFFF;
      background: #D0A881;
    }

    td {
      color: #63676C;
      border: 1px solid rgba(203, 162, 117, 1);
    }

    th, td {
      width: 25%;
      font-size: 20px;
      letter-spacing: 1px;
      text-align: center;
      font-weight: 500;
    }

    th:first-child{
      border-top-left-radius: 8px;
    }

    th:last-child{
      border-top-right-radius: 8px;
    }
  }
}

.content {
  padding-bottom: 2.5rem;

  .special-color {
    color: #AA651A;
  }
}
</style>
