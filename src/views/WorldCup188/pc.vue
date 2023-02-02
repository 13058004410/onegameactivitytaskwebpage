<template>
  <div class="WorldCup188-page-pc" :class="{showTab1: showTab === 1, showTab2: showTab === 2, showTab3: showTab === 3, showTab4: showTab === 4}">
    <van-image
      width="564px"
      height="258px"
      :src="require('./img/PC/logo.png')"
      style="margin-top: 100px"
    />
    <div class="banner"></div>
    <div class="tabBox">
      <div class="tab tab1"><span v-show="showTab !== 1" @click="showTab = 1">百万红包雨</span></div>
      <div class="tab tab2"><span v-show="showTab !== 2" @click="showTab = 2">天梯赏金赛</span></div>
      <div class="tab tab3"><span v-show="showTab !== 3" @click="showTab = 3">开箱送豪礼</span></div>
      <div class="tab tab4"><span v-show="showTab !== 4" @click="showTab = 4">签到分百万</span></div>
    </div>
    <div class="event-detail">
      <div class="title">
        <van-image
          width="288px"
          height="72px"
          :src="require('./img/PC/activity details-tit.png')"
        />
      </div>
      <div class="content"  v-show="showTab === 1">
        <div class="row">
          <span class="key">
            活动名称：
          </span>
          <span class="value">
            世界杯红包雨 瓜分百万彩金
          </span>
        </div>
        <div class="row">
          <span class="key">
            活动对象：
          </span>
          <span class="value">
            全体会员
          </span>
        </div>
        <div class="row">
          <span class="key">
            适用平台：
          </span>
          <span class="value">
            188体育(新)
          </span>
        </div>
        <div class="row">
          <span class="key">
            活动时间：
          </span>
          <span class="value">
            2022年11月21日00:00:00 起 至 2022年12月19日23:59:59 止
          </span>
        </div>
        <div class="row">
          <span class="key">
            活动内容：
          </span>
          <span class="value">
            为了让会员能够畅享世界杯，世界杯比赛期间，从开幕战到决赛，188体育(新)每场比赛进球后就会发一波红包雨，会员可以在看直播的同时抢百万现金红包，每场赛事最多发送 3 次，最高可得2022元。另外，单场礼物达到1000，主播将发送价值1000元的锦鲤红包，送礼会员可参与抢夺，且只有一个送礼会员可获得。
          </span>
        </div>
      </div>
      <div class="content"  v-show="showTab === 2">
        <div class="row">
          <span class="key">
            活动名称：
          </span>
          <span class="value">
            全民竞猜谁争锋 天梯榜上论英雄
          </span>
        </div>
        <div class="row">
          <span class="key">
            活动对象：
          </span>
          <span class="value">
            全体会员
          </span>
        </div>
        <div class="row">
          <span class="key">
            适用平台：
          </span>
          <span class="value">
            188体育(新)
          </span>
        </div>
        <div class="row">
          <span class="key">
            活动时间：
          </span>
          <span class="value">
            2022年11月21日00:00:00 起 至 2022年12月19日23:59:59 止
          </span>
        </div>
        <div class="row">
          <span class="key">
            活动内容：
          </span>
          <span class="value">
            在世界杯活动期间，根据188体育(新)会员有效投注额和竞猜输赢进行排名，有效投注额越高，巨额奖金越高越丰厚，获得冠军者可获得100万奖金，获得亚军者可获得88万奖金，获得季军者可获得58万奖金哦！
          </span>
        </div>
      </div>
      <div class="content"  v-show="showTab === 3">
        <div class="row">
          <span class="key">
            活动名称：
          </span>
          <span class="value">
            每日任务开宝箱 现金大奖送不停
          </span>
        </div>
        <div class="row">
          <span class="key">
            活动对象：
          </span>
          <span class="value">
            全体会员
          </span>
        </div>
        <div class="row">
          <span class="key">
            适用平台：
          </span>
          <span class="value">
            188体育(新)
          </span>
        </div>
        <div class="row">
          <span class="key">
            活动时间：
          </span>
          <span class="value">
            2022年11月21日00:00:00 起 至 2022年12月19日23:59:59 止
          </span>
        </div>
        <div class="row">
          <span class="key">
            活动内容：
          </span>
          <span class="value">
            世界杯期间，会员完成每日任务可获得一定的积分值，积分值达到对应宝箱的积分可打开宝箱，每个宝箱100%中奖，让您的奖金收获不停刺激不断，最高可得880000元。
          </span>
        </div>
      </div>
      <div class="content"  v-show="showTab === 4">
        <div class="row">
          <span class="key">
            活动名称：
          </span>
          <span class="value">
            世界杯打卡签到 瓜分百万彩金
          </span>
        </div>
        <div class="row">
          <span class="key">
            活动对象：
          </span>
          <span class="value">
            全体会员
          </span>
        </div>
        <div class="row">
          <span class="key">
            适用平台：
          </span>
          <span class="value">
            188体育(新)
          </span>
        </div>
        <div class="row">
          <span class="key">
            活动时间：
          </span>
          <span class="value">
            2022年11月21日00:00:00 起 至 2022年12月19日23:59:59 止
          </span>
        </div>
        <div class="row">
          <span class="key">
            活动内容：
          </span>
          <span class="value">
            世界杯活动期间，会员每日的有效投注额满足活动要求，即可在签到页进行签到，世界杯结束后，完成满签后的会员可瓜分百万彩金。
          </span>
        </div>
      </div>
    </div>
    <div class="reward-condition" v-show="showTab === 2 || showTab === 3">
      <div class="title">
        <van-image
          width="288px"
          height="72px"
          :src="require('./img/PC/Reward conditions-tit.png')"
        />
      </div>
      <div class="table"  v-show="showTab === 2">
        <div class="tr head">
          <span class="th">排名</span>
          <span class="th">领奖条件</span>
          <span class="th">奖励金额</span>
        </div>
        <div class="tr">
          <span class="td">第1名</span>
          <span class="td">有效投注额≥ 3000万</span>
          <span class="td">1,000,000</span>
        </div>
        <div class="tr">
          <span class="td">第2名</span>
          <span class="td">有效投注额≥ 2600万</span>
          <span class="td">880,000</span>
        </div>
        <div class="tr">
          <span class="td">第3名</span>
          <span class="td">有效投注额≥ 2200万</span>
          <span class="td">580,000</span>
        </div>
        <div class="tr">
          <span class="td">第4名</span>
          <span class="td">有效投注额≥ 1800万</span>
          <span class="td">280,000</span>
        </div>
        <div class="tr">
          <span class="td">第5名</span>
          <span class="td">有效投注额≥ 1400万</span>
          <span class="td">100,000</span>
        </div>
        <div class="tr">
          <span class="td">第6名</span>
          <span class="td">有效投注额≥ 1200万</span>
          <span class="td">80,000</span>
        </div>
        <div class="tr">
          <span class="td">第7名</span>
          <span class="td">有效投注额≥ 1000万</span>
          <span class="td">50,000</span>
        </div>
        <div class="tr">
          <span class="td">第8名</span>
          <span class="td">有效投注额≥ 800万</span>
          <span class="td">10,000</span>
        </div>
        <div class="tr">
          <span class="td">第9-20名</span>
          <span class="td">有效投注额≥ 600万</span>
          <span class="td">6,000</span>
        </div>
        <div class="tr">
          <span class="td">第21-50名</span>
          <span class="td">有效投注额≥ 400万</span>
          <span class="td">1,888</span>
        </div>
        <div class="tr">
          <span class="td">第51-100名</span>
          <span class="td">有效投注额≥ 300万</span>
          <span class="td">666</span>
        </div>
      </div>
      <div class="table"  v-show="showTab === 3">
        <div class="tr head">
          <span class="th">宝箱</span>
          <span class="th">所需积分</span>
          <span class="th">奖励金额</span>
        </div>
        <div class="tr">
          <span class="td">每日宝箱</span>
          <span class="td">60</span>
          <span class="td">1,000,000</span>
        </div>
        <div class="tr">
          <span class="td">黄金宝箱</span>
          <span class="td">600</span>
          <span class="td">880,000</span>
        </div>
        <div class="tr">
          <span class="td">钻石宝箱</span>
          <span class="td">900</span>
          <span class="td">580,000</span>
        </div>
        <div class="tr">
          <span class="td">王者宝箱</span>
          <span class="td">1000</span>
          <span class="td">280,000</span>
        </div>
        <div class="tr">
          <span class="td">荣耀宝箱</span>
          <span class="td">1200</span>
          <span class="td">1,288、5,888、12,888、168,000、880,000</span>
        </div>
      </div>
    </div>
    <div class="event-rules">
      <div class="title">
        <van-image
          width="288px"
          height="72px"
          :src="require('./img/PC/rule of activity-tit.png')"
        />
      </div>
      <div class="content"  v-show="showTab === 1">
        <div class="row">
          <span>
            1、本次活动仅限在APP 和H5参加，PC端无法参与此次活动; 
          </span>
        </div>
        <div class="row">
          <span>
            2、会员领取红包后，系统自动将领取的金额追加到会员的账户中;  
          </span>
        </div>
        <div class="row">
          <span>
            3、本活动所获红包彩金需要在188体育(新)完成1倍流水即可提款;  
          </span>
        </div>
        <div class="row">
          <span>
            4、任何会员或团体以不正常的方式进行的投注或套取活动优惠，平台方保留在不通知的情况下冻结或关闭相关账户的权利，并不退还款项，且会员会被列入黑名单; 
          </span>
        </div>
        <div class="row">
          <span>
            5、为避免文字理解差异，188体育(新)保留本活动最终解释权。 
          </span>
        </div>
      </div>
      <div class="content"  v-show="showTab === 2">
        <div class="row">
          <span>
            1、世界杯天梯榜将根据会员在活动期间的天梯段位进行排名，若会员出现段位同星数时，将根据会员本期榜单的胜率越高者越靠前，如果胜率一致则按照会员的段位升级时间排名;
          </span>
        </div>
        <div class="row">
          <span>
            2、世界杯期间，天梯榜只统计欧赔≥1.70或亚赔≥0.70且每注金额≥1000的注单;
          </span>
        </div>
        <div class="row">
          <span>
            3、赛季注单数量≥20笔才能开启段位且上榜，上榜后，根据会员所获得的段位以及星数进行排名，每注单赢/半赢一场星数+1，段位将在新赛季会被重置;
          </span>
        </div>
        <div class="row">
          <span>
            4、彩金奖励将在世界杯结束后48小时内系统自动派发至账户，无需申请，所获彩金不可取消;
          </span>
        </div>
        <div class="row">
          <span>
            5、本活动所获彩金需在平台完成1倍流水即可提款;
          </span>
        </div>
        <div class="row">
          <span>
            6、本活动仅对已结算并产生输赢结果的单注投注进行计算。任何走盘、取消、提前结算、以及同一场赛事中同时投注对冲盘口的注单等情况将不计算在有效投注。任何赔率低于欧洲盘1.70或香港盘0.70水位的投注，将不计算在有效投注额内;
          </span>
        </div>
        <div class="row">
          <span>
            7、任何会员或团体以不正常的方式进行的投注或套取活动优惠，平台方保留在不通知的情况下冻结或关闭相关账户的权利，并不退还款项，且会员会被列入黑名单;
          </span>
        </div>
        <div class="row">
          <span>
            8、为避免文字理解差异，188体育(新)保留本活动最终解释权。
          </span>
        </div>
      </div>
      <div class="content"  v-show="showTab === 3">
        <div class="row">
          <span>
            1、本次活动仅限在APP 和H5参加，PC端无法参与此次活动;
          </span>
        </div>
        <div class="row">
          <span>
            2、会员达成指定任务即可获得一定的积分值，积分值达到对应宝箱的积分可打开宝箱，打开宝箱可随机获得宝箱内的物品;
          </span>
        </div>
        <div class="row">
          <span>
            3、每日在本平台投注一笔有效注单，即视为投注1天;
          </span>
        </div>
        <div class="row">
          <span>
            4、单笔注单需投注≥10元，且赔率不低于欧洲盘1.70或香港盘0.70水位的投注，视为完成任务条件;
          </span>
        </div>
        <div class="row">
          <span>
            5、日常任务数据在次日将自动清零重新计算，请会员每日提前30分钟完成任务并领取积分，避免因数据延迟领取失败;
          </span>
        </div>
        <div class="row">
          <span>
            6、小组赛任务将在小组赛结束后关闭，请会员在小组赛结束前提前30分钟完领取积分值，避免因数据延迟领取失败;
          </span>
        </div>
        <div class="row">
          <span>
            7、淘汰赛任务将在小组赛结束后开启，世界杯赛事结束后关闭，请会员在世界杯结束前提前30分钟完领取积分值，避免因数据延迟领取失败;
          </span>
        </div>
        <div class="row">
          <span>
            8、本活动仅对已结算并产生输赢结果的单注投注进行计算。任何走盘、取消、提前结算、以及同一场赛事中同时投注对冲盘口的注单等情况将不计算在有效投注。任何赔率低于欧洲盘1.70或香港盘0.70水位的投注，将不计算在有效投注额内(不包含串关注单);
          </span>
        </div>
        <div class="row">
          <span>
            9、任何会员或团体以不正常的方式进行的投注或套取活动优惠，平台方保留在不通知的情况下冻结或关闭相关账户的权利，并不退还款项，且会员会被列入黑名单;
          </span>
        </div>
        <div class="row">
          <span>
            10、为避免文字理解差异，188体育(新)保留本活动最终解释权。
          </span>
        </div>
      </div>
      <div class="content"  v-show="showTab === 4">
        <div class="row">
          <span>
            1、本次活动仅限在APP 和H5参加，PC端无法参与此次活动; 
          </span>
        </div>
        <div class="row">
          <span>
            2、活动期间，会员当日累计有效投注额≥1000元，即可进行签到;
          </span>
        </div>
        <div class="row">
          <span>
            3、会员满足签到金额后，需要到活动页面点击今日签到才算签到成功，未进入页面签到，则到第二日视为无效;
          </span>
        </div>
        <div class="row">
          <span>
            4、会员存在漏签时，若当日累计有效投注额≥3000元，即可选择您要补签的日期在活动页面进行补签，未进入页面补签，则到第二日视为无效;
          </span>
        </div>
        <div class="row">
          <span>
            5、活动期间，若会员完成全部签到，则可获得瓜分百万彩金的大奖资格，所获彩金将在48小时内发放到您的账户中;
          </span>
        </div>
        <div class="row">
          <span>
            6、本活动所获彩金需在本平台完成3倍流水即可提款;
          </span>
        </div>
        <div class="row">
          <span>
            7、本活动仅对已结算并产生输赢结果的单注投注进行计算。任何走盘、取消、提前结算、以及同一场赛事中同时投注对冲盘口的注单等情况将不计算在有效投注。任何赔率低于欧洲盘1.70或香港盘0.70水位的投注，将不计算在有效投注额内;
          </span>
        </div>
        <div class="row">
          <span>
            8、任何会员或团体以不正常的方式进行的投注或套取活动优惠，平台方保留在不通知的情况下冻结或关闭相关账户的权利，并不退还款项，且会员会被列入黑名单;
          </span>
        </div>
        <div class="row">
          <span>
            9、为避免文字理解差异，188体育(新)保留本活动最终解释权。
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Copy entry method from kingofbattles
 * original Author： Unique
 * Copy time：2022-8-5
 */
export default {
  data() {
    return {
      showTab: 1
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/normaliz.scss";

.WorldCup188-page-pc {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 100px;

  .banner {
    width: 1300px;
    height: 590px;
    background-size: 100% 100%;
    margin-top: 60px;
  }

  .tabBox {
    width: 1300px;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    .tab {
      width: 300px;
      height: 114px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-family: PingFang SC;
      font-size: 42px;
      font-weight: 600;
      background-image: url(./img/PC/tab-btn.png);
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
  .event-detail, .event-rules, .reward-condition {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      margin-top: 72px;
      display: flex;
      width: 585px;
      height: 96px;
      align-items: center;
      justify-content: center;
      background-size: 100% 100%;
      margin-bottom: 30px;
    }
    .content {
      width: 1300px;
      font-family: PingFang SC;
      font-size: 36px;
      color: #FFFFFF;
      line-height: 56px;
      font-weight: 500;
      .row {
        margin-bottom: 10px;
        display: flex;
        .key {
          opacity: 0.66;
          width: 180px;
        }
        .value {
          width: 1120px;
        }
      }
    }

    .table {
      width: 1300px;
      .tr {
        height: 80px;
        display: flex;
        font-size: 28px;
        text-align: center;
        font-family: PingFang SC;
        color: #fff;
        letter-spacing: 1.4px;
        line-height: 80px;
        font-weight: 500;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        &.head {
          border: 1px solid #fff;
          border-radius: 8px 8px 0px 0px;
          font-weight: 600;
        }
        .td {
          border-right: 1px solid #fff;
        }
      }
    }
  }

  &.showTab1 {
    background-image: url(./img/PC/bg1.jpg);
    .banner {
      background-image: url(./img/PC/banner1.jpg);
    }

    .tabBox {
      .tab1 {
        background-image: url(./img/PC/tab1-btn-pre.png);
        cursor: initial;
      }
    }

    .event-detail, .event-rules, .reward-condition {
      .title {
        background-image: url(./img/PC/title1-bg.png);
      }
    }
  }

  &.showTab2 {
    background-image: url(./img/PC/bg2.jpg);
    .banner {
      background-image: url(./img/PC/banner2.jpg);
    }

    .tabBox {
      .tab2 {
        background-image: url(./img/PC/tab2-btn-pre.png);
        cursor: initial;
      }
    }

    .event-detail, .event-rules, .reward-condition {
      .title {
        background-image: url(./img/PC/title2-bg.png);
      }

      .table {
        .tr {
          &.head {
            background: #1E309D;
          }
          span:nth-child(1) {
            width: 400px;
          }
          span:nth-child(2) {
            width: 500px;
          }
          span:nth-child(3) {
            width: 400px;
          }
        }
      }
    }
  }

  &.showTab3 {
    background-image: url(./img/PC/bg3.jpg);
    .banner {
      background-image: url(./img/PC/banner3.jpg);
    }

    .tabBox {
      .tab3 {
        background-image: url(./img/PC/tab3-btn-pre.png);
        cursor: initial;
      }
    }

    .event-detail, .event-rules, .reward-condition {
      .title {
        background-image: url(./img/PC/title3-bg.png);
      }

      .table {
        .tr {
          &.head {
            background: #9B1DE9;
          }
          span:nth-child(1) {
            width: 256px;
          }
          span:nth-child(2) {
            width: 352px;
          }
          span:nth-child(3) {
            width: 692px;
          }
        }
      }
    }
  }

  &.showTab4 {
    background-image: url(./img/PC/bg4.jpg);
    .banner {
      background-image: url(./img/PC/banner4.jpg);
    }

    .tabBox {
      .tab4 {
        background-image: url(./img/PC/tab4-btn-pre.png);
        cursor: initial;
      }
    }

    .event-detail, .event-rules, .reward-condition {
      .title {
        background-image: url(./img/PC/title4-bg.png);
      }
    }
  }
}

</style>