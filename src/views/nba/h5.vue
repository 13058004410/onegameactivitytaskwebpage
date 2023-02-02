<template>
  <div class="content">
    <div class="guess-time">
      <p></p>
      <span>{{ formatDate }} </span>
    </div>
    <div class="guess">
      <div class="title">
        <div class="left-icon" :class="{ active: active == 1 }" @click="active = 1">
          <span>比分竞猜</span>
        </div>
        <div class="right-icon" :class="{ active: active == 2 }" @click="active = 2">
          <span>我的竞猜</span>
        </div>
      </div>
      <div class="score" v-show="active == 1">
        <div v-if="!lodaInfo && !loginStatus" class="count login">
          您当前未登录，请<i @click="toLogin">登录</i>后查看
        </div>
        <div v-else class="count" :class="{usdt: data.accountType == 'USDT'}">
          {{ data.accountType }}钱包剩余竞猜次数：{{ data.leftCount }}
        </div>
        <div class="game">
          <div>
            <VanImage
              :width="46 / 16 + 'rem'"
              :height="45 / 16 + 'rem'"
              round
              fit="fill"
              :src="imgSrc + data.homeFlag"
              class="img"
            />
            <div>
              <p>{{ data.homeTeam }}</p>
            </div>
          </div>
          <div class="mide">
            <span v-if="data.endTime">{{
              data.endTime.substring(0, data.endTime.length - 3)
            }}</span>
            <p>VS</p>
          </div>
          <div>
            <VanImage
              :width="46 / 16 + 'rem'"
              :height="45 / 16 + 'rem'"
              round
              fit="fill"
              class="img"
              :src="imgSrc + data.awayFlag"
            />
            <div>
              <p>{{ data.awayTeam }}</p>
            </div>
          </div>
        </div>
        <div class="inputs">
          <div>
            <Field
              v-model="homeScore1"
              placeholder="-"
              :center="true"
              input-align="center"
              class="txt"
              type="digit"
              maxlength="3"
              :formatter="formatter"
              @blur="blurA1"
            />
            <span>~</span>
            <Field
              v-model="homeScore2"
              placeholder="-"
              :center="true"
              input-align="center"
              class="txt"
              type="digit"
              maxlength="3"
              :formatter="formatter"
              @blur="blurA2"
            />
          </div>
          <div>
            <Field
              v-model="awayScore1"
              placeholder="-"
              :center="true"
              input-align="center"
              class="txt"
              type="digit"
              maxlength="3"
              :formatter="formatter"
              @blur="blurB1"
            />
            <span>~</span>
            <Field
              v-model="awayScore2"
              placeholder="-"
              :center="true"
              input-align="center"
              class="txt"
              type="digit"
              maxlength="3"
              :formatter="formatter"
              @blur="blurB2"
            />
          </div>
        </div>
        <p class="sub">
          例如：队伍1填 90~92 队伍2填 100~100。则您的竞猜组合为 90:100, 91:100，92:100 。一共3种组合，投注3种组合会消耗您3次竞猜次数。
        </p>
        <div class="bet" @click="submitScore"></div>
      </div>
      <div class="quiz-list" v-show="active == 2">
        <Empty
          class="custom-image"
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="暂无数据"
          v-if="finished && guessList.length < 1"
        />
        <List
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
          v-else
          @load="onLoad"
          ref="list"
        >
          <div
            @touchstart="gtouchstart()"
            @touchend="gtouchend()"
            class="listBody"
            ref="listBody"
          >
            <div class="row" v-for="(item, key) in guessList" :key="key">
              <div class="title">
                <span>提交时间：{{ item.created_at }}</span>
                <div class="right">
                  <div>
                    竞猜数:<span>{{ item.num }}</span>
                  </div>
                  <button v-show="item.num > 1" @click="showGuessList(item)">
                    查看详情
                  </button>
                </div>
              </div>
              <div class="quiz">
                <div class="row">
                  <div class="quiz-title">
                    <div>
                      <span>{{ item.home_team }}</span>
                    </div>
                    <div>
                      <span>{{ item.away_team }}</span>
                    </div>
                  </div>
                  <div class="score-row">
                    <div>
                      <span>{{ item.home_grade }}</span>
                    </div>
                    <div>
                      <span>{{ item.away_grade }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <transition name="van-fade">
            <Icon
              name="arrow-down"
              class="down"
              v-show="down"
              size="2rem"
              color="#eef2ff"
            />
          </transition>
        </List>
      </div>
    </div>
    <div class="winn_list">
      <div class="winn_title"></div>
      <div class="t_h">
        <div>用户名</div>
        <div>竞猜比分</div>
        <div>中奖金额</div>
        <div>中奖时间</div>
      </div>
      <div class="empty" v-if="winningFinished && winningRecord.length < 1">
        <Empty
          class="custom-image"
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="暂无数据"
        />
      </div>
      <List
        v-else
        v-model="winningLoading"
        :finished="winningFinished"
        finished-text="没有更多了"
        :error.sync="winningError"
        error-text="请求失败，点击重新加载"
        @load="onLoadWinning"
        class="t_b"
      >
        <div v-for="(item, key) in winningRecord" :key="key">
          <div>{{handleLoginName(item.loginname)}}</div>
          <div>
            <p>{{item.home_team}}VS{{item.away_team}}</p>
            <p>{{item.win_grade}}</p>
          </div>
          <div>{{item.prize}}</div>
          <div>{{(item.created_at||'').substr(5,11)}}</div>
        </div>
      </List>
      <div class="down_icon">
        <Icon name="arrow-down" color="#756342"/>
        <Icon name="arrow-down" color="#756342"/>
      </div>
    </div>
    <div class="ac-content">
      <div class="ac-title"></div>
      <div class="ac-word">
        为答谢广大客户的厚爱，同时迎接篮球盛事的到来，ONE体育每天将挑选一场NBA热门赛事，
       <span class="brown">在竞猜开启到截止时间内</span>每存款<span class="brown">500CNY/72USDT</span>可获得一次竞猜本场比赛比分的机会，
        猜中正确比分奖励彩金<span class="brown">8888CNY/1270USDT</span>，猜中两队胜负+分差，送彩金<span class="brown">88元/13USDT</span>。  
      </div>
    </div>
    <div class="ac-rule">
      <div class="rule-title"></div>
      <div>
        <p>
          1. 本活动无需申请，符合资格的用户可在活动页面直接参与竞猜（存款计算当期赛事竞猜活动开启至结束时，比赛开始即停止竞猜）。
        </p>
        <br />
        <p>
          2. 每一场的奖项不能兼得，系统将挑选最高的一项红利于竞猜赛事结束确认赛果后派发，每位会员每期最多可领取1笔中奖优惠。
        </p>
        <br />
        <p>
          3. 所有红利将于赛事结束确认赛果后24小时内派发，活动红利需完成<span class="brown">5倍</span>流水，限体育厅。有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、欧洲赔率＜1.5的注单将不计算在有效流水内
        </p>
        <br />
        <p>
          4. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号且每期竞猜仅可享受一次。如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。
        </p>
        <br />
        <p>
          5. 若发现套利、对赌和不诚实获取盈利之行为的会员将被取消优惠资格。
        </p>
        <br />
        <p>6. 本网站欢迎所有正常玩家参加活动，对于各种非正常投注，如正反投等行为，一经发现将取消获奖资格，并保留进一步处理的权利。</p>
        <br />
        <p>
          7. 若比赛因意外原因导致比赛延期，则竞猜奖励也会延时结算。若比赛因不可抗力或者其他异常原因未复赛，导致无赛果，将会取消本场比赛竞猜，竞猜次数不返还。
        </p>
        <br />
        <p>
          8. 会员参加任何优惠活动则被视为认可并同意遵守这些规则以及ONE体育娱乐的有关规定，愿意受其约束，最终解释权归ONE体育所有。
        </p>
      </div>
    </div>
    <Overlay :show="show1" :lock-scroll="false">
      <div class="overlay1">
        <div class="body">
          <div class="t"></div>
          <p class="txt">
            您当前的投注组合如下：需消耗<i>{{ show1Data.length }}</i
            >次机会
          </p>
          <p class="sub">注：已经自动为您过滤平局</p>
          <div class="list">
            <div class="list-t">
              <div>
                <span>{{ data.homeTeam }}</span>
              </div>
              <div>
                <span>{{ data.awayTeam }}</span>
              </div>
            </div>
            <div class="list-r">
              <div class="row" v-for="(item, key) in show1Data" :key="key">
                <div>
                  <span>{{ item[0] }}</span>
                </div>
                <div>
                  <span>{{ item[1] }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="foot">
          <button @click="show1 = false">取消</button>
          <button @click="bet">确认提交</button>
        </div>
      </div>
    </Overlay>
    <Overlay :show="show2" :lock-scroll="false">
      <div class="overlay1">
        <div class="body">
          <div class="t"></div>
          <div class="list">
            <div class="list-t">
              <div>
                <span>{{ historicalDetails.home_team }}</span>
              </div>
              <div>
                <span>{{ historicalDetails.away_team }}</span>
              </div>
            </div>
            <div class="list-r">
              <div
                class="row"
                v-for="(item, key) in historicalDetails.list"
                :key="key"
              >
                <div>
                  <span>{{ item[0] }}</span>
                </div>
                <div>
                  <span>{{ item[1] }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="foot">
          <button @click="show2 = false">关闭</button>
        </div>
        <!-- <div class="close">
          <Icon
            @click="show2 = false"
            name="close"
            :size="29 / 16 + 'rem'"
            color="#969186"
          />
        </div> -->
      </div>
    </Overlay>
  </div>
</template>
<script>
import {
  Icon,
  Dialog,
  Image as VanImage,
  Field,
  Empty,
  Overlay,
  List,
  Toast,
} from "vant";
import md5 from "js-md5";
import { UA } from '@/util/ua'
import { rando, getRandom, formatDate } from "@/assets/js/tools";
import appConfig from "@/config/config";
import { mapActions, mapMutations } from "vuex";
import axios from "axios";
export default {
  components: {
    VanImage,
    Field,
    Dialog,
    Empty,
    Overlay,
    Icon,
    List,
  },
  data() {
    return {
      active: 1,
      imgSrc: "",
      data: {},
      guessList: [],
      homeScore1: "",
      homeScore2: "",
      awayScore1: "",
      awayScore2: "",
      show1: false,
      show2: false,
      show1Data: [],
      historicalDetails: {},
      loading: false,
      finished: true,
      page: 1,
      pagesize: 10,
      error: false,
      down: true,
      scrollDown: 0,
      winningRecord: [],
      winningLoading: false,
      winningFinished: true,
      winningError: false,
      winningPage: 1,
      lodaInfo: false,
      loginStatus: false,
      token: "",
      loginName: "",
      u2token: "",
      website: false,
      ticketApp: false
    };
  },
  computed: {
    h5TokenStore() {
      return this.$store.state.h5Token;
    },
    formatDate() {
      if (this.data.startTime && this.data.endTime) {
        let time1 = this.data.startTime.replace(/-/g, "/");
        let time2 = this.data.endTime.replace(/-/g, "/");
        time1 = time1.substring(0, time1.length - 3);
        time2 = time2.substring(0, time2.length - 3);
        return time1 + " ~ " + time2;
      } else {
        return "0000-00-00 00:00 ~ 0000-00-00 00:00";
      }
    },
  },
  watch: {
    h5TokenStore: async function () {
      this.$loading.show({
        text: "Loading",
      });

      let { data, message: msg } = await this.getNBAGuessInfo();
      console.log(msg + '999')
      if (msg) {
        Toast(msg);
      } else {
        this.page = 1;
        this.finished = false;
        this.onLoad();
        // let {
        //   data: list = [],
        //   message: errMsg,
        // } = await this.getMatchGuessList();

        // if (errMsg) {
        //   this.$toastMessage({ message: errMsg });
        //   this.error = true;
        // } else {
        //   this.loading = false;
        //   if (list < 10) {
        //     this.finished = true;
        //   }
        //   this.guessList = list;
        this.data = data;
        this.lodaInfo = true;
        // }
      }

      this.$loading.hide();
    },
    guessList: function (val, preVal) {
      if (val.length > 0) {
        if (preVal.length == 0) {
          this.$refs.list.$el.onscroll = this.scroll;
        } else {
          this.down = true;
        }
      }
    },
    show2: function (val) {
      if (val == false) {
        this.historicalDetails = {};
      }
    },
  },
  async created() {
    let that = this
    window.loadTicket = this.loadTicketApp;
    setTimeout(() => {
      if(!that.ticketApp && !that.website && UA() === 1) {
      window.location = "nbapp://getTicket?data={}";  
      }
    }, 1000);
    window.addEventListener("message", this.onMessage);
    this.openPCHandle("sendDataIframe");
    this.$loading.show({
      text: "Loading",
    });
    let { imgSrc, message } = await this.getBootstrap();
    if (message) {
      Toast(message);
    } else {
      let { data = {}, message: msg } = await this.getNBAGuessInfo();

      if (msg) {
        Toast(msg);
      } else {
        this.page = 1;
        this.finished = false;
        this.loading = true;
        let {
          data: list = [],
          message: errMsg,
        } = await this.getMatchGuessList();
        if (errMsg) {
          Toast(errMsg);
          this.error = true;
          this.loading = false;
          return;
        } else {
          this.loading = false;
          if (list < 10) {
            this.finished = true;
          }

          this.winningFinished = false;
          this.winningLoading = true;
          let { winData = [], winErr } = await this.getMatchGuessWin();
          if(winErr){
            Toast(winErr);
            this.winningError = true;
            this.winningLoading = false;
          } else {
            this.winningLoading = false;
            if (winData.length < 10) {
              this.winningFinished = true;
            }
            
            this.winningRecord = winData;
          }

          this.guessList = list;
        }

        this.imgSrc = imgSrc;
        this.data = data;
      }
    }

    this.$loading.hide();
  },
  destroyed(){
    window.removeEventListener("message", this.onMessage)
  },
  methods: {
    ...mapActions(["AWebToken", "AH5Token"]),
    ...mapMutations({
      setAppinfoTickt: "SET_APPINFO_TICKET",
      setAppinfoLoginName: "SET_APPINFO_LOGINNAME",
    }),
    handleLoginName(name = ""){
      let frist = name.substring(0,3)
      let last = name.substr(-4)
      if(last == "usdt"){
        last = name.substr(-6)
      } else {
        last = name.substr(-2)
      }
      return frist+"***"+last
    },
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      }
      window.parent.postMessage(info, "*");
    },
    onMessage(event){
      console.log('onMessageonMessageonMessageonMessageonMessage')
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
      this.website = true
      this.loginStatus = data.loginStatus;
      this.token = data.token;
      this.loginName = data.loginName;
      this.u2token = data.u2token;
    },
    async onLoadWinning(){
      this.winningPage += 1;
      this.winningLoading = true;
      let { winData = [], winErr } = await this.getMatchGuessWin();
      if (winErr) {
        this.winningError = true;
        this.winningLoading = false;
        return;
      }

      if (winData.length < 10) {
        this.winningFinished = true;
      }
      this.winningRecord = [...this.winningRecord, ...winData];
      this.winningLoading = false;
    },
    getMatchGuessWin() {
      let sendData = {
        productId: this.$store.state.appInfo.productId,
        page: this.winningPage,
        pagesize: this.pagesize,
      };

      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(sendData);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      let sign = md5(str);
      let headers = {
        qid,
        appId,
        v,
        platform,
        sign,
        domainName,
        timestamp,
      };
      return axios
        .post(this.$api.nab.matchGuessWin, sendData, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            return { winData: body };
          } else {
            return { winErr: head.errMsg };
          }
        })
        .catch((err) => {
          return { winErr: "获取数据失败" };
        });
    },
    gtouchstart() {
      this.down = false;
    },
    gtouchend() {
      if (this.scrollDown < 50) {
        this.down = false;
      } else {
        this.down = true;
      }
    },
    scroll() {
      let e = this.$refs.list.$el;
      this.scrollDown = e.scrollHeight - e.scrollTop - e.clientHeight;
      if (this.scrollDown < 100) {
        this.down = false;
      }
    },
    formatter(value) {
      if (parseInt(value) < 1) {
        return "";
      }
      if (parseInt(value) > 200) {
        return 200;
      }
      return value;
    },
    blurA1(e) {
      if (
        this.homeScore2 != "" &&
        parseInt(e.target.value) > parseInt(this.homeScore2)
      ) {
        let num = this.homeScore1;
        this.homeScore1 = this.homeScore2;
        this.homeScore2 = num;
      }
    },
    blurA2(e) {
      if (
        this.homeScore1 != "" &&
        parseInt(e.target.value) < parseInt(this.homeScore1)
      ) {
        let num = this.homeScore2;
        this.homeScore2 = this.homeScore1;
        this.homeScore1 = num;
      }
    },
    blurB1(e) {
      if (
        this.awayScore2 != "" &&
        parseInt(e.target.value) > parseInt(this.awayScore2)
      ) {
        let num = this.awayScore1;
        this.awayScore1 = this.awayScore2;
        this.awayScore2 = num;
      }
    },
    blurB2(e) {
      if (
        this.awayScore1 != "" &&
        parseInt(e.target.value) < parseInt(this.awayScore1)
      ) {
        let num = this.awayScore2;
        this.awayScore2 = this.awayScore1;
        this.awayScore1 = num;
      }
    },
    async onLoad() {
      this.loading = true;
      let { data = [], message } = await this.getMatchGuessList();
      if (message) {
        this.error = true;
        this.loading = false;
        return;
      }
      this.page += 1;

      if (data.length < 10) {
        this.finished = true;
      }
      this.guessList = [...this.guessList, ...data];
      this.loading = false;
    },
    submitScore() {
      if (
        (this.homeScore1 == "" && this.homeScore2 == "") ||
        (this.awayScore1 == "" && this.awayScore2 == "")
      ) {
        Toast("请输入比分");
        return;
      }

      if (this.homeScore1 != "" && this.homeScore2 == "") {
        this.homeScore2 = this.homeScore1;
      }

      if (this.homeScore2 != "" && this.homeScore1 == "") {
        this.homeScore1 = this.homeScore2;
      }

      if (this.awayScore1 != "" && this.awayScore2 == "") {
        this.awayScore2 = this.awayScore1;
      }

      if (this.awayScore2 != "" && this.awayScore1 == "") {
        this.awayScore1 = this.awayScore2;
      }

      if (
        this.homeScore1 == this.homeScore2 &&
        this.awayScore1 == this.awayScore2 &&
        this.homeScore1 == this.awayScore1
      ) {
        Toast("不可提交平局");
        return;
      }

      if (
        new Date().getTime() >
        new Date(this.data.endTime.replace(/-/g, "/")).getTime()
      ) {
        Toast("活动已结束");
        return;
      }

      if (this.isLogin() && !this.loginStatus) {
        Dialog.confirm({
          message: "您还没登录哦，\n请登陆后再进行操作吧！",
          confirmButtonText: "去登录",
          confirmButtonColor: "#576B95",
        })
          .then(() => {
            // on confirm
            this.toLogin();
          })
          .catch(() => {
            // on cancel
          });
        return;
      }

      if (this.data.leftCount < 1) {
        Dialog.confirm({
          message: "您的竞猜次数不够哦，\n马上去投注增加竞猜次数吧！",
          confirmButtonText: "知道了",
          confirmButtonColor: "#576B95",
        })
          .then(() => {
            
          })
          .catch(() => {
            // on cancel
          });
        return;
      }
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "组合生成中...",
      });
      setTimeout(() => {
        this.show1Data = [];
        for (
          let i = parseInt(this.homeScore1);
          i <= parseInt(this.homeScore2);
          i++
        ) {
          for (
            let k = parseInt(this.awayScore1);
            k <= parseInt(this.awayScore2);
            k++
          ) {
            if (i != k) {
              this.show1Data.push([i, k]);
            }
          }
        }
        toast.clear();

        if (this.show1Data.length == 1) {
          this.bet();
          return;
        }

        this.show1 = true;
      });
    },
    bet() {
      if (this.data.leftCount < this.show1Data.length) {
        Toast(`超出剩余次数${this.show1Data.length - this.data.leftCount}次`);
        return;
      }

      this.$loading.show({
        text: "Loading",
      });

      let h5Token = this.$store.state.h5Token;

      let sendData = {
        productId: this.$store.state.appInfo.productId,
        homeScore: this.homeScore1 + "-" + this.homeScore2,
        awayScore: this.awayScore1 + "-" + this.awayScore2,
      };
      if (h5Token.token != undefined) {
        sendData.loginName = this.$store.state.appInfo.loginName;
      }
      if (this.loginStatus) {
        sendData.loginName = this.loginName;
      }
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(sendData);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      if(this.loginStatus) {
        str +=
        this.loginStatus ? `${this.token}${this.u2token}` : "";
      }else {
        str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      }
      let sign = md5(str);
      let headers = {
        qid,
        appId,
        v,
        platform,
        sign,
        domainName,
        timestamp,
      };
      if (h5Token.token != undefined) {
        headers.token = h5Token.token;
        headers.deviceId = h5Token.deviceId;
      }
      if (this.loginStatus) {
        headers.token = this.token;
        headers.deviceId = appConfig.deviceId;
      }
      return axios
        .post(this.$api.nab.matchGuessAdd, sendData, {
          headers,
        })
        .then(async (data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            Toast(head.errMsg);
            this.homeScore1 = "";
            this.homeScore2 = "";
            this.awayScore1 = "";
            this.awayScore2 = "";
            this.show1 = false;
            let { data, message: msg } = await this.getNBAGuessInfo();

            if (msg) {
              Toast(msg);
            } else {
              this.loading = true;
              this.finished = false;
              this.page = 1;
              let {
                data: list = [],
                message: errMsg,
              } = await this.getMatchGuessList();

              if (errMsg) {
                Toast(errMsg);
                this.error = true;
                this.loading = false;

                return;
              } else {
                this.loading = false;
                if (list < 10) {
                  this.finished = true;
                }
                this.page += 1;
                this.guessList = list;
              }

              this.data = data;
            }
          } else {
            Toast(errMsg);
          }
        })
        .catch((err) => {
          Toast("获取数据失败");
        })
        .finally(() => {
          this.$loading.hide();
        });
    },
    showGuessList(item) {
      item.list = [];
      let i = item.home_grade;
      let i2 = item.home_grade;
      let arr = item.home_grade.split("-");
      if (arr.length > 1) {
        i = arr[0];
        i2 = arr[1];
      }

      let j = item.away_grade;
      let j2 = item.away_grade;
      let arr2 = item.away_grade.split("-");
      if (arr2.length > 1) {
        j = arr2[0];
        j2 = arr2[1];
      }
      for (let o = parseInt(i); o <= parseInt(i2); o++) {
        for (let p = parseInt(j); p <= parseInt(j2); p++) {
          if (o != p) {
            item.list.push([o, p]);
          }
        }
      }

      this.historicalDetails = item;
      this.show2 = true;
    },
    async loadTicketApp(obj) {
      this.ticketApp = true
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
    getBootstrap() {
      let productId = this.$store.state.appInfo.productId;

      let v = (v = this.$store.state.appInfo.v);
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let webToken = this.$store.state.webToken;
      let extraPath = "/bootstrap";
      let extraStr = `${appId}.${platform}.${qid}.${timestamp}${
        webToken ? "." + webToken.token : ""
      }.${v}.${extraPath}`;
      let extraSalt = appConfig.salt;
      let extraSign = md5(md5(extraStr) + extraSalt); // 产品网关签名
      console.log("extraStr", extraStr);
      let sendData = {
        app_type: 1,
        productId: productId,
      };
      return axios
        .post(this.$api.global.bootstrap, sendData, {
          headers: {
            qid,
            appid: appId,
            v,
            timestamp,
            platform,
            sign: extraSign,
            token: webToken.token,
          },
        })
        .then((res) => {
          if (res.data.head.errCode === 200) {
            let imgSrc = res.data.body.img_domains;

            return { imgSrc: imgSrc };
          } else {
            return { message: res.data.head.errMsg };
          }
        })
        .catch((err) => {
          return { message: "数据获取失败" };
        });
    },
    getNBAGuessInfo() {
      let h5Token = this.$store.state.h5Token;

      let sendData = {
        productId: this.$store.state.appInfo.productId,
      };
      if (h5Token.token != undefined) {
        sendData.loginName = this.$store.state.appInfo.loginName;
      }
      if (this.loginStatus) {
        sendData.loginName = this.loginName;
      }
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(sendData);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      if(this.loginStatus) {
        str +=
        this.loginStatus ? `${this.token}${this.u2token}` : "";
      }else {
        str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      }
      let sign = md5(str);
      let headers = {
        qid,
        appId,
        v,
        platform,
        sign,
        domainName,
        timestamp,
      };
      if (h5Token.token != undefined) {
        headers.token = h5Token.token;
        headers.deviceId = h5Token.deviceId;
      }
      if (this.loginStatus) {
        headers.token = this.token;
        headers.deviceId = appConfig.deviceId;
      }
      return axios
        .post(this.$api.nab.NBAGuessInfo, sendData, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            return { data: body };
          } else {
            return { message: head.errMsg };
          }
        })
        .catch((err) => {
          return { message: "获取数据失败" };
        });
    },
    getMatchGuessList() {
      let h5Token = this.$store.state.h5Token;

      let sendData = {
        productId: this.$store.state.appInfo.productId,
      };
      if (h5Token.token != undefined) {
        sendData.loginName = this.$store.state.appInfo.loginName;
        sendData.page = this.page;
        sendData.pagesize = this.pagesize;
      }
      if (this.loginStatus) {
        sendData.loginName = this.loginName;
        sendData.page = this.page;
        sendData.pagesize = this.pagesize;
      }
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(sendData);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      if(this.loginStatus) {
        str +=
        this.loginStatus ? `${this.token}${this.u2token}` : "";
      }else {
        str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      }
      let sign = md5(str);
      let headers = {
        qid,
        appId,
        v,
        platform,
        sign,
        domainName,
        timestamp,
      };
      if (h5Token.token != undefined) {
        headers.token = h5Token.token;
        headers.deviceId = h5Token.deviceId;
      }
      if (this.loginStatus) {
        headers.token = this.token;
        headers.deviceId = appConfig.deviceId;
      }
      return axios
        .post(this.$api.nab.matchGuessList, sendData, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            return { data: body };
          } else {
            return { message: head.errMsg };
          }
        })
        .catch((err) => {
          return { message: "获取数据失败" };
        });
    },
    toLogin() {
      if(this.website){
        this.openPCHandle("openRecharge");
      }else {
        window.location = "nbapp://openLoginPage?data={}";
      }
    },
    isLogin() {
      return this.$store.state.h5Token.token == undefined;
    },
    reverseStrings(strs) {
      return strs.split("").sort().reverse().join("");
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/screen750.scss";
@import "@/assets/css/normaliz.scss";
body {
  overflow: hidden;
}
body > div:first-child {
  height: 100%;
  overflow: auto;
}
.txt {
  .van-field__control {
    color: #65676D;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 18px;
  }
}
.custom-image .van-empty__image {
  width: (60/16) + rem;
  height: (60/16) + rem;
}
</style>
<style lang="scss" scoped>
@import "./h5.scss";
</style>