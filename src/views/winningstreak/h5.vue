<template>
  <div class="winningstreak-page-h5">
    <van-image width="100%" :src="require('./img/H5/banner.jpg')" />
    <van-image
      width="141px"
      height="40px"
      :src="require('./img/H5/enter-button.png')"
      style="margin-top: -18px"
      class="enter-button"
      @click="openAG"
    />
    <!-- 01活动内容 -->
    <div class="activities-title-one">
      <van-image
        width="131px"
        height="25px"
        :src="require('./img/H5/title-1.png')"
      />
      <p>
        连赢争霸，王者属谁，ONE游戏联合旗舰厅隆重推出-百家乐连赢争霸赛，连赢争霸您就是王者。
      </p>
      <h4>第一重：连赢送好礼</h4>
    </div>
    <!-- 连赢送好礼 -->
    <div class="activities-content-one">
      <van-image
        width="139px"
        height="32px"
        :src="require('./img/H5/content-title-1.png')"
      />
      <table>
        <!-- 第一组 -->
        <tr>
          <th>连赢局数</th>
          <th>最低单笔投注</th>
          <th>奖金</th>
        </tr>
        <tr>
          <td rowspan="4" class="colorad692b">连赢6-8局</td>
          <td>3USDT/21CNY</td>
          <td>2USDT/12CNY</td>
        </tr>
        <tr>
          <td>29USDT/200CNY</td>
          <td>13USDT/88CNY</td>
        </tr>
        <tr>
          <td>72USDT/500CNY</td>
          <td>56USDT/388CNY</td>
        </tr>
        <tr>
          <td>143USDT/1000CNY</td>
          <td>84USDT/588CNY</td>
        </tr>
        <!-- 第二组 -->
        <tr>
          <td rowspan="4" class="colorad692b">连赢9-11局</td>
          <td>3USDT/21CNY</td>
          <td>9USDT/58CNY</td>
        </tr>
        <tr>
          <td>29USDT/200CNY</td>
          <td>27USDT/188CNY</td>
        </tr>
        <tr>
          <td>72USDT/500CNY</td>
          <td>127USDT/888CNY</td>
        </tr>
        <tr>
          <td>143USDT/1000CNY</td>
          <td>184USDT/1288CNY</td>
        </tr>
        <!-- 第三组 -->
        <tr>
          <td rowspan="4" class="colorad692b">连赢12局及以上</td>
          <td>3USDT/21CNY</td>
          <td>16USDT/108CNY</td>
        </tr>
        <tr>
          <td>29USDT/200CNY</td>
          <td>99USDT/688CNY</td>
        </tr>
        <tr>
          <td>72USDT/500CNY</td>
          <td>270USDT/1888CNY</td>
        </tr>
        <tr>
          <td>143USDT/1000CNY</td>
          <td>556USDT/3888CNY</td>
        </tr>
      </table>
    </div>
    <!-- 连赢争霸赛 -->
    <div class="activities-content-two">
      <van-image
        width="139px"
        height="32px"
        :src="require('./img/H5/content-title-2.png')"
      />
      <h4>第二重：连赢争霸赛</h4>
      <p>
        旗舰厅会员单笔投注≥500CNY/72USDT，
        且连赢局数≥8局，即可入围第二重榜单，获取相应争霸排名奖励。
      </p>
      <van-image
        width="319px"
        height="290px"
        :src="require('./img/H5/zbs_pic_h5.png')"
      />
    </div>

    <!-- 02活动规则 -->
    <div class="activities-title-two">
      <van-image
        width="131px"
        height="25px"
        :src="require('./img/H5/title-2.png')"
      />
      <p>1. ONE游戏全体会员都可参与，进入AG旗舰厅即可参与，无需报名；</p>
      <p>
        2.
        本活动仅限旗舰厅“庄”“闲”“庄免佣”玩法，连环百家乐/多台百家乐不参与此活动，若玩家有投注该玩法或其他玩法，不中断连赢局数；
      </p>
      <p>
        3.
        投注庄闲玩法，开牌结果为和，不中断连赢，对冲投注则连赢中断，且追究相应违规责任，连赢局数隔日不清零；
      </p>
      <p>
        4.
        连赢争霸赛按最高排名派奖，连赢送好礼奖金<i>无需流水</i>，连赢争霸赛奖金需完成<i>3倍流水</i>，仅限真人厅；
      </p>
      <p>
        5.
        连赢送好礼与连赢争霸赛不冲突，可同时享有，连赢好礼奖金完成连赢后系统自动派发到账(连赢局数若不中断，将不计算连赢且不派彩)，连赢争霸奖金于活动结束后48小时内派发到账；
      </p>
      <p>
        6.
        本活动中连赢送好礼会员达成连赢后，根据用户连赢记录中，单笔最低投注额划分其对应投注分档（如：会员A连赢12局，1-11局每局下注1000CNY，第12局下注500CNY，那么会员此次连赢划分为500CNY的投注分档，会员可领取1888CNY连赢奖金）；
      </p>
      <p>
        7.
        本活动中，<i>连赢8局及以上</i>且单笔投注额大于等于<i>500CNY/72USDT</i>，即可进入连赢争霸赛排行榜；
      </p>
      <p>
        8.
        本活动连赢争霸赛排名按照连赢局数、连赢记录中的投注额度、连赢记录中最后一局投注时间，决定总排名先后，杜绝同名次情况；
      </p>
      <p>
        9.
        同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号。如有会员有任何违规，我们将保留无限期审核扣回红利及所产生利润的权利；
      </p>
      <p>
        10.
        会员参加任何优惠活动则被视为认可并同意遵守这些规则以及ONE游戏的有关规定，愿意受其约束，最终解释权归ONE游戏所有。
      </p>
    </div>
  </div>
</template>

<script>
/**
 * Copy entry method from kingofbattles
 * original author： Unique
 * Copy time：2022-8-5
 */
import { Dialog } from "vant";
import { UA } from "@/util/ua";
import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      loginStatus: false,
      token: "",
      loginName: "",
      u2token: "",
      website: false,
      ticketApp: false,
    };
  },
  created() {
    let that = this;
    window.loadTicket = this.loadTicketApp;
    setTimeout(() => {
      if (!that.ticketApp && !that.website && UA() === 1) {
        window.location = "nbapp://getTicket?data={}";
      }
    }, 1000);
    window.addEventListener("message", this.onMessage);
    this.openPCHandle("sendDataIframe");
  },
  computed: {
    h5TokenStore() {
      return this.$store.state.h5Token;
    },
  },
  destroyed() {
    window.removeEventListener("message", this.onMessage);
  },
  methods: {
    ...mapActions(["AWebToken", "AH5Token"]),
    ...mapMutations({
      setAppinfoTickt: "SET_APPINFO_TICKET",
      setAppinfoLoginName: "SET_APPINFO_LOGINNAME",
    }),
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      };
      window.parent.postMessage(info, "*");
    },
    onMessage(event) {
      let funcs = {
        loadTicket: this.loadTicket,
      };
      console.log("子iframe监听事件名字", event.data.message);
      let func = funcs[event.data.message];
      if (func) {
        func(event.data);
      } else {
        console.log("点击监听测试");
      }
    },
    loadTicket(data) {
      this.website = true;
      this.loginStatus = data.loginStatus;
      this.token = data.token;
      this.loginName = data.loginName;
      this.u2token = data.u2token;
    },
    async loadTicketApp(obj) {
      this.ticketApp = true;
      if (
        this.$store.state.appInfo.ticket != "" ||
        this.$store.state.appInfo.loginName != ""
      ) {
        return;
      }
      let json = null;
      try {
        json = JSON.parse(obj);
      } catch (error) {
        // alert("json 解析错误");
        console.log(error);
        return;
      }
      this.setAppinfoTickt(json.ticket);
      this.setAppinfoLoginName(json.loginName);
      // this.nickName = json.nickName;
      this.$loading.show({
        text: "Loading",
      });
      if (Object.keys(this.$store.state.h5Token).length < 1) {
        await this.AH5Token();
      }
      this.$loading.hide();
    },
    isLogin() {
      return this.$store.state.h5Token.token == undefined;
    },
    openAG() {
      if (this.website) {
        this.openPCHandle("openGameAGQJ"); //openGameAGQJ
      } else {
        window.location = "nbapp://openGameAGQJ?data={}";
        // this.$router.push( { path: '/winningstreak' } );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/normaliz.scss";
.winningstreak-page-h5 {
  width: 100vw;
  min-height: 100vh;
  background-color: #fcf4f1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 60px;

  .activities-title-one {
    width: 100vw;
    box-sizing: border-box;
    padding: 0 20px;
    margin-top: 30px;

    & > h4 {
      font-size: 14px;
      color: #ad692b;
      padding-top: 10px;
    }

    & > p {
      font-size: 15px;
      color: #444b52;
      line-height: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .activities-content-one {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;

    & > table {
      width: 100%;
      margin-top: 10px;

      tr {
        th {
          background-color: #d0a881;
          border-bottom: 1px solid #d0a881;
          border-top: 1px solid #d0a881;
          border-left: 1px solid #d0a881;
          height: 40px;
          color: #fff;
          font-weight: normal;
          font-size: 14px;
        }

        td {
          border: 1px solid rgba(203, 162, 117, 0.44);
          height: 40px;
          font-size: 12px;
          font-weight: normal;
          color: #63676c;
          text-align: center;

          &.colorad692b {
            color: #ad692b;
          }

          &:last-child {
            color: #ad692b;
          }
        }
      }
    }
  }

  .activities-content-two {
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;

    & > h4 {
      width: 100%;
      text-align: left;
      font-size: 14px;
      color: #ad692b;
      padding-top: 10px;
    }

    & > p {
      font-size: 15px;
      color: #444b52;
      line-height: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .activities-title-two {
    width: 100vw;
    box-sizing: border-box;
    padding: 0 20px;
    margin-top: 30px;

    p {
      font-size: 14px;
      color: #444b52;
      font-weight: 500;
      line-height: 22px;
      margin-top: 10px;

      & > i {
        color: #ad692b;
        font-style: normal;
      }
    }
  }
}

.enter-button {
  animation-name: zoomIn;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
}

@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(0.9);
  }
  75% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
</style>