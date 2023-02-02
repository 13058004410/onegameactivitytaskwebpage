<template>
  <div class="container">
    <div class="banner_img">
      <!-- <img :src="require('@/assets/img/CallFriends/h5/h5_bg.jpg')" alt=""> -->
      <div class="banner_text">
        <p>活动时间：活动上线-12.31</p>
        <p>活动内容</p>
      </div>
    </div>
    <div class="main">
      <div class="des">
        老会员介绍朋友注册成为ONE会员，被推荐人存款进行游戏,并达成晋级条件，即可获得好友推荐奖金，投注越多奖金越高，推荐人及被推荐人皆可获得奖金。
      </div>
      <img
        class="des-img"
        :src="require('@/assets/img/CallFriends/h5/h5_table.jpg')"
        alt=""
      />
      <div class="rule">
        <div>晋级条件请参考：<i @click="modelShow = true">会员晋级办法【点击展示】</i></div>
        <div>
          奖金领取办法：<span>被推荐人达成条件后，推荐人向客服申请即可。</span>
        </div>
      </div>
      <div class="btn" @click="jumpKefuNative">
        <img
          :src="require('@/assets/img/CallFriends/h5/btn_hphy1.png')"
          alt=""
        />
      </div>
      <div class="recommend">
        <p>—【如何推荐好友注册并一同享受优惠】—</p>
        <p>
          被推荐人完成新用户注册后，推荐人与被推荐人同时联系在线客服，确认好友推荐关系即可。
        </p>
      </div>
    </div>
    <div class="activity_desc">
      <div>活动规则</div>
      <p>
        1.
        与网站现有会员或者本次被推荐会员同姓名、同电话、同银行卡号、同IP地址均不可享受该优惠；
      </p>
      <p>
        2.
        可推荐多位朋友注册，需在朋友注册的7天内通知客服，奖金5倍流水即可提款，可与网站其他优惠同时享受；
      </p>
      <p>
        3.
        推荐人及被推荐人均需填写有效的联系方式，供客服联系本人核实，任何一方无法联系均不予审核通过，被推荐人注册时间需迟于推荐人，被推荐人只容许有一个推荐人；
      </p>
      <p>
        4.
        同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利；
      </p>
      <p>
        5.
        会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。
      </p>
    </div>
    <div class="model" v-show="modelShow" @click.self="modelShow = false">
      <div>
        <h3>会员晋级办法</h3>
        <table>
          <thead>
            <tr>
              <td>VIP等级</td>
              <td>累计有效流水</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>VIP1</td>
              <td>＜3千 / 429USDT</td>
            </tr>
            <tr>
              <td>VIP2</td>
              <td>3千 / 429USDT</td>
            </tr>
            <tr>
              <td>VIP3</td>
              <td>1.8万 / 2572USDT</td>
            </tr>
            <tr>
              <td>VIP4</td>
              <td>10万 / 14286USDT</td>
            </tr>
            <tr>
              <td>VIP5</td>
              <td>80万 / 114286USDT</td>
            </tr>
            <tr>
              <td>VIP6</td>
              <td>400万 / 571429USDT</td>
            </tr>
            <tr>
              <td>VIP7</td>
              <td>1500万 / 2142858USDT</td>
            </tr>
          </tbody>
        </table>
        <button @click.self="modelShow = false">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      modelShow: false,
    }
  },
  methods: {
    jumpKefuNative() {
      window.location = "nbapp://openServicePage?data={}";
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/normaliz.scss";
@import "@/assets/css/screen750.scss";
</style>
<style lang="scss" scoped>
@import "./h5.scss";
</style>