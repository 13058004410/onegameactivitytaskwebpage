<template>
  <!-- 注册送 -->
  <div class="app-wrapper"
       @touchmove.prevent>
    <div class="app-view">
      <Scrapper class="app-scroll"
                ref="view">
        <div class="scroll-wrapper">
          <!-- bg -->
          <div class="app-bg app-img">
            <img src="../../assets/img/registrationGift/bg-register.png"
                 alt="" />
          </div>
          <!-- page -->
          <div class="app-page">
            <div class="page-title page-title1">
              <img src="../../assets/img/registrationGift/title1.png" alt="">
            </div>
            <div class="box-time vivify fadeIn">
              2020年10月30日起
            </div>
            <div class="page-title page-title2">
              <img src="../../assets/img/registrationGift/title2.png" alt="">
            </div>
            <div class="box-content">
              <ul>
                <li class="vivify driveInRight">
                  <span class="icon-point icon-point1"></span>
                  <div>
                    <p>注册后完善真实信息，获取礼金!</p>
                    <p class="txt-yellow">20元/3USDT</p>
                  </div>
                </li>
                <li class="vivify driveInLeft">
                  <span class="icon-point icon-point2"></span>
                  <div>
                    <p>完成一倍有效投注即可提，上限</p>
                    <p class="txt-yellow">180元/25USDT</p>
                  </div>
                </li>
                <li class="vivify driveInRight">
                  <span class="icon-point icon-point3"></span>
                  <div>
                    <p>最低提款</p>
                    <p class="txt-yellow">100元/15USDT</p>
                  </div>
                </li>
                <li class="vivify driveInLeft">
                  <span class="icon-point icon-point4"></span>
                  <div>
                    <p>此优惠活动与<span class="txt-yellow">（洗码）</span>共享，与其他活动不共享，最终解释权归ONE体育所有。</p>
                  </div>
                </li>
                <li class="vivify driveInRight">
                  <span class="icon-point icon-point5"></span>
                  <div>
                    <p>同一手机号、姓名、银行卡、IP仅限参加此活动一次。如有违规，将保留扣回红利及营利利润权力。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Scrapper>
    </div>
  </div>
</template>
<script>
import './index.scss'
import Scrapper from '@/component/Scrapper'

export default {
  components: {
    Scrapper,
  },
}
</script>
<style lang="scss">
* {
  touch-action: pan-y;
}
</style>