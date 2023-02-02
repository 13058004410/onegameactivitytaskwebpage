<template>
  <div class="container" ref="main">
    <div class="black center">
      <div class="w1200 mgt42">
        <p class="start-time">活动时间：活动上线－2021年5月31日</p>
        <div class="but mgt18"><img :src="require('@/assets/img/msi/pc_btn.png')" @click="clickReceive"></div>
        <img :src="require('@/assets/img/msi/pc_title1.png')" class="title1 mgt24">
        <div class="title2 green bold">
          首单包赔100%，投注MSI决赛再返50%
        </div>
        <p class="sub1 mgt24">活动期间，首单投注IM电竞任意赛事赔率≥1.75的任意盘口，负盈利100元以上可获得100%全额返还，最高200元；投注英雄联盟MSI季中邀请赛决赛系列赛BO5中赔率≥1.75的任意盘口，负盈利100元以上可获得50%返还，最高200元；若首单即投注英雄联盟MSI决赛系列赛BO5，以活动首单计算：<span class="line">联系客服即可申请</span></p>
        <img :src="require('@/assets/img/msi/pc_table1.jpg')" width="100%" class="mgt20 img1">
        <p class="sub2 padb44">例：会员首单投注王者荣耀赛事胜负盘输100，则可获得100元全额返还，后继续投注MSI决赛BO5一血输200，则可获得100元返还；若会员首单即投注MSI决赛BO5输200，则以活动首单计算，获得200元全额返还。</p>
      </div>
    </div>
    <div class="center">
      <div class="gray1">
        <div class="w1200">
          <div class="padt10">
            <img :src="require('@/assets/img/msi/pc_title2.png')" class="title1">
            <div class="title2 bold mgt24">
              MSI专享 参与即有奖 投注场次越多 奖励越丰厚
            </div>
            <p class="sub3 mgt16">MSI小组赛与对抗赛阶段（BO1），凡单场比赛有效投注≥100的场次≥1场，即可领取对应奖金，奖金可以累计领取，达标场次越多，领取奖金越多；<span class="line">联系客服即可申请</span></p>
          </div>
          <img :src="require('@/assets/img/msi/pc_table2.jpg')" width="100%" class="mgt20 img2">
          <div>
            <p class="sub3 gray padb50">例：会员在MSI小组赛和对抗赛（BO1）阶段，单场有效投注≥100的比赛场次达到1场，则可领取8元奖金，后续达到3场，又可领取18元奖金，若连续达到18场，则一共可以领取8+18+18+38+58=140元彩金。</p>
          </div>
        </div>
      </div>
      <div class="white">
        <div class="w1200">
          <div class="padt24 padh15 padb16">
            <img :src="require('@/assets/img/msi/pc_title3.png')" class="title1 padt20">
            <div class="title2 bold">
              一血一塔一龙 额外加奖5%
            </div>
            <p class="sub3 padt24">活动期间，注单金额≥100，投注英雄联盟赛事赔率≥1.75的首杀首塔首小龙盘口且注单为赢，可获得盈利*5%的额外加奖，最高500元，3倍流水即可出款，<span class="line">联系客服即可领取。</span></p>
          </div>
          <img :src="require('@/assets/img/msi/pc_table3.jpg')" width="100%" class="padb44 mgt20 white img3">
        </div>
      </div>
      <div class="black padt24">
        <div class="w1200">
          <img :src="require('@/assets/img/msi/pc_title4.png')" class="title1">
          <div class="title2 green bold">
            群雄逐鹿 问鼎MSI
          </div>
          <p class="sub1 padb20 mgt16">赛前投注英雄联盟MSI季中邀请赛决赛（时间：2021/5/23 21：00）系列赛BO5，系列赛里出现对应条件即可获取最高2820元奖励，3倍流水即可出款。<span class="line">联系客服即可申请，奖金于次日18：00前派发。</span></p>
          <img :src="require('@/assets/img/msi/pc_table4.jpg')" width="100%" class="padt20 img4">
          <div class="sub4 padb50">
            <p>
              例：会员在赛前投注MSI决赛系列赛BO5有效投注≥10000，在BO5里同时出现对线单杀、火龙魂、玲珑塔、选手超神、选手五杀，那么会员累计可以领取168+188+688+688+1088=2820彩金。
            </p>
            <p class="padb44">
              注：单个玩法不重复计算。例如，选手在第一场完成五杀，第二场又完成五杀，只计算一次。
            </p>
            <p>玩法说明</p>
            <p>对线单杀：系列赛游戏前10分钟出现对线单杀，1换1不计入内。</p>
            <p>火龙魂：系列赛中出现火龙魂。</p>
            <p>玲珑塔：系列赛中有队伍出现单场零小龙、零防御塔。</p>
            <p>选手超神：系列赛中有选手打出超神战绩。</p>
            <p>选手五杀：系列赛中有选手成功完成五杀。</p>
          </div>
        </div>
      </div>
      <div class="black2">
        <div class="w1200">
          <div class="sub4 padb62 white-f">
            <p class="title5 padb20">活动规则</p>
            <p>1.本活动内容仅限IM电竞。</p>
            <p>2.有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关，将不计算在有效流水内。</p>
            <p>3.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
            <p>4.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    let info = {
      message: "reloadPageSize",
      height: this.$refs.main.clientHeight,
    };
    window.parent.postMessage(info, "*");
  },
  methods:{
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      };
      window.parent.postMessage(info, "*");
    },
    clickReceive() {
      let info = {
        message: "openService",
      };
      window.parent.postMessage(info, "*");
    },
  }
};
</script>
<style lang="scss">
@import "@/assets/css/normaliz.scss";
html {
  font-size: 4.995222222vw;

  @media screen and (max-width: 1200px) {
    font-size: 59.9422423px;
    body {
      min-width: 1200px;
      margin: 0 auto;
    }
  }
}
</style>
<style lang="scss" scoped>
@import "./pc.scss";
</style>