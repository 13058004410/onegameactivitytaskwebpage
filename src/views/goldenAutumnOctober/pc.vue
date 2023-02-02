<template>
  <div class="golden-autumn-october-pc">
    <van-image width="100%" :src="require('./img/PC/banner.jpg')" />
    <div class="content-view">
      <van-image
        width="194px"
        height="100px"
        :src="require('./img/PC/hdnr_tit.png')"
        style="margin-bottom: 20px"
      />
      <dl>
        <dt>
          <span>单笔存款</span>
          <span>单次礼金</span>
          <span>总计礼金</span>
          <span>流水要求</span>
        </dt>
        <dd>
          <span>5000CNY/720USDT</span>
          <span>500CNY/72USDT</span>
          <span>5000CNY/720USDT</span>
          <span>1倍</span>
        </dd>
      </dl>

      <van-image
        width="194px"
        height="100px"
        :src="require('./img/PC/hdgz_tit.png')"
        style="margin-bottom: 20px; margin-top: 40px"
      />

      <p>
        1.
        活动期间（10月01日-10月31日）所有新老会员单笔存款满足活动条件即可参与此活动，联系在线客服领取礼金；<span>存5000CNY/720USDT送5000CNY/720USDT</span>,礼金分十日领取，参与活动的存款当日即可领取第一次礼金，领取下一次礼金前须<span>存款≥500CNY/72USDT</span>，投注≥3笔体育注单并<span>完成≥5000CNY/720USDT的体育有效流水</span>；
      </p>
      <p>2. 奖金需完成<span>1倍流水</span>即可，不限场馆；</p>
      <p>
        3.
        本活动每位会员限参与一次。奖金日未联系在线客服领取奖金，将视为逾期无效自动放弃当笔礼金。每次礼金日的领取条件为独立计算，若中断领取，在下个礼金日之前完成该次条件即可继续领取。领取下一次礼金时需满足的条件：上一笔礼金日后当笔礼金日前满足存款≥500CNY/72USDT，投注≥3笔体育注单并完成≥5000CNY/720USDT的体育有效流水；
      </p>
      <p>4. 本活动与洗码优惠共享，不与其他任意活动共享存款条件与投注流水；</p>
      <p>
        5.
        同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号。如有会员有任何违规行为，我们将保留无限期审核扣回红利及所产生利润的权利；
      </p>
      <p>
        6.
        会员参加任何优惠活动则被视为认可并同意遵守这些规则以及ONE游戏的有关规定，愿意受其约束，最终解释权归ONE游戏所有。
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/normaliz.scss";
.golden-autumn-october-pc {
  width: 100vw;
  min-height: 100vh;
  background: #e9e0d7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 60px;

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

          &:last-child {
            border: none;
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
}
</style>