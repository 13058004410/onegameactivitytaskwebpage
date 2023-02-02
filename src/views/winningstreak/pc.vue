<template>
  <div class="winningstreak-page-pc">
    <van-image width="100%" :src="require('./img/PC/banner.jpg')" />
    <van-image
      width="248px"
      height="70px"
      :src="require('./img/PC/enter-button.png')"
      class="enter-button-img"
      @click="openAG"
    />
    <div class="content-view">
      <van-image
        width="194px"
        height="100px"
        :src="require('./img/PC/title-1.png')"
        style="margin-bottom: 6px"
      />
      <h2>
        连赢争霸，王者属谁，ONE游戏联合旗舰厅隆重推出-百家乐连赢争霸赛，连赢争霸您就是王者。
      </h2>
      <van-image
        width="267px"
        height="83px"
        :src="require('./img/PC/content-title-1.png')"
        style="margin-top: 40px"
      />
      <h3>第一重：连赢送好礼</h3>
      <div class="table-view">
        <dl>
          <div class="title-view">
            <dt>连赢局数</dt>
            <dt>最低单笔投注</dt>
            <dt>奖金</dt>
          </div>
          <div class="body-view">
            <dd>
              <p>连赢6-8局</p>
            </dd>
            <dd>
              <span>3USDT/21CNY</span>
              <span>29USDT/200CNY</span>
              <span>72USDT/500CNY</span>
              <span>143USDT/1000CNY</span>
            </dd>
            <dd>
              <strong>2USDT/12CNY</strong>
              <strong>13USDT/88CNY</strong>
              <strong>56USDT/388CNY</strong>
              <strong>84USDT/588CNY</strong>
            </dd>
          </div>
        </dl>
        <dl>
          <div class="title-view">
            <dt>连赢局数</dt>
            <dt>最低单笔投注</dt>
            <dt>奖金</dt>
          </div>
          <div class="body-view">
            <dd>
              <p>连赢9-11局</p>
            </dd>
            <dd>
              <span>3USDT/21CNY</span>
              <span>29USDT/200CNY</span>
              <span>72USDT/500CNY</span>
              <span>143USDT/1000CNY</span>
            </dd>
            <dd>
              <strong>9USDT/58CNY</strong>
              <strong>27USDT/188CNY</strong>
              <strong>127USDT/888CNY</strong>
              <strong>184USDT/1288CNY</strong>
            </dd>
          </div>
        </dl>
        <dl>
          <div class="title-view">
            <dt>连赢局数</dt>
            <dt>最低单笔投注</dt>
            <dt>奖金</dt>
          </div>
          <div class="body-view">
            <dd>
              <p>连赢12局及以上</p>
            </dd>
            <dd>
              <span>3USDT/21CNY</span>
              <span>29USDT/200CNY</span>
              <span>72USDT/500CNY</span>
              <span>143USDT/1000CNY</span>
            </dd>
            <dd>
              <strong>16USDT/108CNY</strong>
              <strong>99USDT/688CNY</strong>
              <strong>270USDT/1888CNY</strong>
              <strong>556USDT/3888CNY</strong>
            </dd>
          </div>
        </dl>
      </div>
      <van-image
        width="331px"
        height="83px"
        :src="require('./img/PC/content-title-2.png')"
        style="margin-top: 40px"
      />
      <h3>第二重：连赢争霸赛</h3>
      <h4>
        旗舰厅会员单笔投注≥500CNY/72USDT，且连赢局数≥8局，即可入围第二重榜单，获取相应争霸排名奖励。
      </h4>
      <van-image
        width="960px"
        height="277px"
        :src="require('./img/PC/zbs_pic_pc.png')"
        style="margin-top: 40px"
      />

      <!-- 02活动规则 -->
      <div class="activities-title-two">
        <van-image
          width="194px"
          height="100px"
          :src="require('./img/PC/title-2.png')"
          style="margin-top: 20px; margin-bottom: 10px"
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
  </div>
</template>

<script>
/**
 * Copy entry method from kingofbattles
 * original Author： Unique
 * Copy time：2022-8-5
 */
import { Dialog } from "vant";
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
    };
  },
  mounted() {
    const that = this;
    setInterval(() => {
      let iframeH = Math.max(
        that.$refs.main.clientHeight,
        that.$refs.main.scrollHeight
      );
      that.openPCHandle("reloadPageSize", {
        height: iframeH,
      });
    }, 0);
  },
  async created() {
    window.addEventListener("message", this.onMessage);
    this.openPCHandle("sendDataIframe");
    // this.$loading.show({
    // text: "Loading",
    // })
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
    // isLogin() {
    //     return this.$store.state.h5Token.token == undefined;
    //     },
    // toLogin() {
    //     this.openPCHandle("openRecharge");
    // },
    openAG() {
      // this.openPCHandle("openGameAGQJ"); //openGameAGQJ
      if (this.website) {
        this.openPCHandle("openGameAGQJ"); //openGameAGQJ
      } else {
        // window.location = "nbapp://openGameAGQJ?data={}";
        this.$router.push( { path: '/winningstreak' } );
      }
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
      this.loginStatus = data.loginStatus;
      this.token = data.token;
      this.loginName = data.loginName;
      this.u2token = data.u2token;
    },
    // toJoin() {
    //     if (!this.loginStatus) {
    //         Dialog.confirm({
    //         message: "您还没登录哦，\n请登陆后再进行操作吧！",
    //         confirmButtonText: "去登录",
    //         confirmButtonColor: "#576B95",
    //         })
    //         .then(() => {
    //         this.toLogin();
    //         })
    //         .catch(() => {
    //         });
    //         return;
    //     } else {
    //         console.log("asggggggggg");
    //         this.openAG()
    //     }
    // }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/normaliz.scss";
.winningstreak-page-pc {
  width: 100vw;
  min-height: 100vh;
  background-color: #e9e0d7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 60px;
  position: relative;

  .enter-button-img {
    position: absolute;
    left: 490px;
    top: 490px;
  }

  .content-view {
    width: 1300px;
    min-height: 100vh;
    background-image: url("./img/PC/bg.png");
    background-size: 100% 100%;
    display: flex;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 30px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 70px 99px 70px 99px;

    h2 {
      font-size: 20px;
      color: #444b52;
      font-weight: 500;
      margin-top: 10px;
    }

    h3 {
      width: 100%;
      font-size: 20px;
      color: #ad692b;
      text-align: left;
      margin-top: 15px;
    }

    h4 {
      width: 100%;
      font-size: 20px;
      color: #444b52;
      text-align: left;
      margin-top: 15px;
    }

    .table-view {
      margin-top: 15px;
      width: 100%;
      border-top: 1px solid #cba275;
      border-right: 1px solid #cba275;
      border-radius: 12px 0px 0px 12px;
      overflow: hidden;

      dl {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;

        dt {
          height: 60px;
          width: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #ffffff;
          font-weight: 500;
          background-color: #d5ab8b;
          border-bottom: 1px solid #cba275;
          border-right: 1px solid #cba275;

          &:last-child {
            color: #84450d;
          }
        }

        .body-view {
          flex: 1;

          dd {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 60px;
            border-bottom: 1px solid #cba275;
            border-right: 1px solid #cba275;

            p {
              font-size: 22px;
              color: #ad692b;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              border-left: 1px solid #cba275;
            }

            span {
              font-size: 20px;
              color: #63676c;
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              border-left: 1px solid #cba275;
            }

            strong {
              font-size: 20px;
              color: #ad692b;
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              background-color: #e2d5c3;
              border-left: 1px solid #cba275;
            }
          }
        }
      }
    }

    .activities-title-two {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
      padding: 0 20px;
      margin-top: 30px;

      p {
        width: 100%;
        font-size: 20px;
        color: #444b52;
        font-weight: 400;
        line-height: 33px;
        margin-top: 14px;

        & > i {
          color: #ad692b;
          font-style: normal;
        }
      }
    }
  }
}

.enter-button-img {
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