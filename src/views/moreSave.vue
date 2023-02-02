<template>
  <!-- 再存再送 -->
  <div class="box-wrapper">
    <div class="ac-content-box">
      <div class="title-bg"></div>
      <p>
        活动资格：One体育VIP1用户以上，且完善个人资料并绑定银行卡信息，一个账号仅限一次。
      </p>
      <div></div>
      <div @click="jumpKefuNative"></div>
    </div>
    <div class="ac-content-g">
      <div class="title-bg"></div>
      <div>
        <p>
          1、存款成功且未下注之前，联系在线客服申请优惠彩金，彩金会在5-10分钟到账，彩金未到账之前不可游戏。有效投注额达到【<span
            >（本金+ 红利）x5倍流水</span
          >】即可提款。 例如：会员存款200元，则需要有效投注（200+38）x
          5=1190的投注额即可申请提款。
        </p>

        <p>
          2、何双边投注及任何赔率低于欧洲盘1.50/香港盘0.50的注以及使用“提前兑现”功能的投注项将不计算在有效投注内。
        </p>

        <p>3、本活动与【返水优惠】共享，与其他优惠活动<span>不共享</span>。</p>

        <p>
          4、此优惠适用于只拥有一个ONE体育账户的玩家，相同姓名、电话号码、地址、邮箱、IP都只可以享受一次。
        </p>

        <p>5、ONE体育APP赛事直播提供比赛视频观看，不作为最终注单结算依据。</p>

        <p>
          6、本网站欢迎所有正常玩家参加活动，对于各种非正常投注，如正反投等行为，一经发现将取消优惠资格，并保留进一步处理的权利；若发现套利、对赌和不诚实获取盈利之行为的会员将被取消优惠资格
        </p>

        <p>
          7、会员参加任何优惠活动则被视为认可并同意遵守这些规则以及ONE体育的有关规定，愿意受其约束，最终解释权归ONE体育所有。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    jumpKefuNative () {
      window.location = 'nbapp://openServicePage?data={}'
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/css/moreSave.scss";
@import "@/assets/css/normaliz.scss";
@import "@/assets/css/screen750.scss";
</style>