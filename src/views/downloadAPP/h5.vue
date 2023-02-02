<template>
  <div class="download-app-h5">
    <!-- banner -->
    <van-image width="100%" :src="require('./img/H5/banner.jpg')" />
    <!-- 活动内容 -->
    <div class="activities-view">
      <van-image
        width="133px"
        height="25px"
        :src="require('./img/H5/hdnr_tit.png')"
      />
      <dl>
        <dt>
          <span>活动条件</span>
          <span>免费礼金</span>
          <span>流水要求</span>
        </dt>
        <dd>
          <span>下载并安装APP</span>
          <span>8CNY</span>
          <span>1倍</span>
        </dd>
      </dl>
    </div>
    <!-- 活动规则 -->
    <div class="rules-view">
      <van-image
        width="133px"
        height="25px"
        :src="require('./img/H5/hdgz_tit.png')"
      />
      <p>
        1. ONE游戏会员，首次下载APP并登录，即可联系在线客服领取免费彩金。注：领取免费礼金会员账户需完成资料绑定，姓名/手机号/银行卡。
      </p>
      <p>2. 活动彩金需完成<span>1倍流水</span>，不限场馆；</p>
      <p>
        3. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。
      </p>
      <p>4. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/normaliz.scss";
.download-app-h5 {
  width: 100vw;
  min-height: 100vh;
  background: #fcf5f3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 40px;

  .activities-view {
    box-sizing: border-box;
    width: 100%;
    padding: 0 20px;

    dl {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid rgba(203, 162, 117, 0.44);
      border-radius: 4px;
      overflow: hidden;

      dt {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #cba275;

        span {
          flex: 1;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: #ffffff;
          border-bottom: 1px solid rgba(203, 162, 117, 1);

          &:last-child {
            border: none;
          }
        }
      }

      dd {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 38px;
          font-size: 12px;
          color: #63676c;
          border-right: 1px solid rgba(203, 162, 117, 1);

          &:last-child {
            border: none;
          }
        }
      }
    }
  }

  .rules-view {
    box-sizing: border-box;
    width: 100%;
    padding: 0 20px;
    margin-top: 16px;

    p {
      line-height: 23px;
      font-size: 14px;
      color: #444b52;
      letter-spacing: 0;
      margin-top: 10px;
      margin-bottom: 10px;

      & > span {
        color: #ad692b;
      }
    }
  }
}
</style>