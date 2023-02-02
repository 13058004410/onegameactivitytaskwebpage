<template>
  <div class="download-app-pc">
    <van-image width="100%" :src="require('./img/PC/banner.jpg')" />
    <div class="content-view">
      <van-image
        width="194px"
        height="100px"
        :src="require('./img/PC/hdnr_tit.png')"
        style="margin-bottom: 20px"
      />
      <span class="tip">ONE游戏APP全新改版，提供更流畅，更舒心的致富之旅。</span>
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

      <van-image
        width="194px"
        height="100px"
        :src="require('./img/PC/hdgz_tit.png')"
        style="margin-bottom: 20px; margin-top: 40px"
      />

      <p>
        1. ONE游戏会员，首次下载APP并登录，即可联系在线客服领取免费彩金。注：领取免费礼金会员账户需完成资料绑定，姓名/手机号/银行卡。
      </p>
      <p>2. 活动彩金需完成<span>1倍流水</span>，不限场馆。</p>
      <p>
        3. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。
      </p>
      <p>
        4. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/normaliz.scss";
.download-app-pc {
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
    box-sizing: border-box;

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

  .tip {
    font-size: 20px;
    color: #444B52;
    text-align: center;
    line-height: 36px;
    font-weight: 500;
  }
}
</style>