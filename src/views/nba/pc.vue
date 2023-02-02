<template>
  <div class="container" ref="main">
    <div class="start_t"><span>本场竞猜时间:{{formatDate}}</span></div>
    <div class="guess" :class="{record:active == 2}">
      <div class="title">
        <div :class="{ active: active == 1 }" @click="active = 1"></div>
        <div :class="{ active: active == 2 }" @click="active = 2"></div>
      </div>
      <div class="quiz" v-show="active == 1">
        <p class="wallet_status" v-if="loginStatus" :class="{usdt:usdt}">{{usdt?"USDT":"RMB"}}钱包剩余竞猜次数：{{ data.leftCount }}</p>
        <p class="login" v-else>您当前未登录，请<span @click="toLogin">登录</span>后查看</p>
        <div class="info">
          <div class="left">
            <div class="icon"><img :src="imgSrc + data.homeFlag" alt=""></div>
            <div class="name">{{ data.homeTeam }}</div>
            <div class="inputs">
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
          </div>
          <div class="medium">
            <p v-if="data.endTime">{{data.endTime.substring(0, data.endTime.length - 3)}}</p>
            <img :src="require('@/assets/img/nba/pc/VS.png')" alt="">
          </div>
          <div class="right">
            <div class="icon"><img :src="imgSrc + data.awayFlag" alt=""></div>
            <div class="name">{{ data.awayTeam }}</div>
            <div class="inputs">
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
        </div>
        <p class="sub">例如：队伍1填 90~92 队伍2填 100~100。则您的竞猜组合为 90:100, 91:100，92:100 。一共3种组合，投注3种组合会消耗您3次竞猜次数。</p>
        <div class="submit" @click="submitScore"></div>
      </div>
      <div class="guess_record" v-show="active == 2">
        <Empty
          class="custom-image"
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="暂无数据"
          v-if="finished && guessList.length < 1"
        />
        <List
          v-else
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
          @load="onLoad"
          class="list"
        >
          <div class="row" v-for="(item, key) in guessList" :key="key">
            <div>
              <div><span>提交时间：{{ item.created_at }}</span></div>
              <div>
                <span>竞猜数：<span class="y">{{ item.num }}</span></span>
                <span 
                  class="see_details" 
                  v-show="item.num > 1" 
                  @click="showGuessList(item)">查看详情</span>
              </div>
            </div>
            <div>
              <div><span>{{ item.home_team }}</span><span>{{ item.away_team }}</span></div>
              <div><span>{{ item.home_grade }}</span><span>{{ item.away_grade }}</span></div>
            </div>
          </div>
        </List>
      </div>
    </div>
    <div class="ac_rule">
      <div class="zjmd"><img :src="require('@/assets/img/nba/pc/zjmd_pc.png')" alt=""></div>
      <div class="winn_list">
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
          <!-- <div v-for="(item, key) in winningRecord" :key="key">
            <div>{{handleLoginName(item.loginname)}}</div>
            <div>
              <p>{{item.home_team}}VS{{item.away_team}}</p>
              <p>{{item.win_grade}}</p>
            </div>
            <div>{{item.prize}}</div>
            <div>{{(item.created_at||'').substr(5,11)}}</div>
          </div> -->
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
      </div>
      <div class="hdnr_t"><img :src="require('@/assets/img/nba/pc/zjnr_pc.png')" alt=""></div>
      <div class="hdnr"><p>为答谢广大客户的厚爱，同时迎接篮球盛事的到来，ONE体育每天将挑选一场NBA热门赛事，<span>在竞猜开启到截止时间内</span>每存款<span>500CNY/72USDT</span>可获得一次竞猜本场比赛比分的机会，猜中正确比分奖励彩金<span>8888CNY/1270USDT</span>，猜中两队胜负+分差，送彩金<span>88元/13USDT</span>。</p></div>
      <div class="hdnr_t"><img :src="require('@/assets/img/nba/pc/zjgz_pc.png')" alt=""></div>
      <div class="hdgz">
        <p>1. 本活动无需申请，符合资格的用户可在活动页面直接参与竞猜（存款计算当期赛事竞猜活动开启至结束时，比赛开始即停止竞猜）。</p>
        <p>2. 每一场的奖项不能兼得，系统将挑选最高的一项红利于竞猜赛事结束确认赛果后派发，每位会员每期最多可领取1笔中奖优惠。</p>
        <p>3. 所有红利将于赛事结束确认赛果后24小时内派发，活动红利需完成<span>5倍</span>流水，限体育厅。有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、欧洲赔率＜1.5的注单将不计算在有效流水内。</p>
        <p>4. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号且每期竞猜仅可享受一次。如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>5. 若发现套利、对赌和不诚实获取盈利之行为的会员将被取消优惠资格。</p>
        <p>6. 本网站欢迎所有正常玩家参加活动，对于各种非正常投注，如正反投等行为，一经发现将取消获奖资格，并保留进一步处理的权利。</p>
        <p>7. 若比赛因意外原因导致比赛延期，则竞猜奖励也会延时结算。若比赛因不可抗力或者其他异常原因未复赛，导致无赛果，将会取消本场比赛竞猜，竞猜次数不返还。</p>
        <p>8. 会员参加任何优惠活动则被视为认可并同意遵守这些规则以及ONE体育娱乐的有关规定，愿意受其约束，最终解释权归ONE体育所有。</p>
      </div>
    </div>
    <!-- 登录弹框 -->
    <div class="model" v-show="loginModel">
      <div class="model_btn">
        <div class="head">
          <Icon
            name="warning"
            class="warning"
            :size="20 / 59.9422423 + 'rem'"
            color="#eef2ff"
          />
          <span>提示</span>
          <Icon
            name="cross"
            class="close"
            :size="18 / 59.9422423 + 'rem'"
            color="#e3f0e7"
            @click="loginModel = false"
          />
        </div>
        <div class="content">
          <p>您还没登录哦，请登陆后再进行操作吧！</p>
          <div class="btn_box">
            <button @click="loginModel = false">取消</button>
            <button @click="toLogin">去登录</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 竞猜次数不够提示弹框 -->
    <div class="model" v-show="numberModel">
      <div class="model_btn">
        <div class="head">
          <Icon
            name="warning"
            class="warning"
            :size="20 / 59.9422423 + 'rem'"
            color="#eef2ff"
          />
          <span>提示</span>
          <Icon
            name="cross"
            class="close"
            :size="18 / 59.9422423 + 'rem'"
            color="#e3f0e7"
            @click="numberModel = false"
          />
        </div>
        <div class="content">
          <p>您的竞猜次数不够哦，马上去投注增加竞猜次数吧！</p>
          <div class="btn_box">
            <button @click="numberModel = false">取消</button>
            <button @click="numberModel = false">知道了</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 竞猜组合列表 -->
    <div class="model" v-show="numberList">
      <div class="number_list">
        <Icon
          name="cross"
          class="close"
          :size="18 / 59.9422423 + 'rem'"
          color="#b2c3df"
          @click="numberList = false"
        />
        <div class="t"><img :src="require('@/assets/img/nba/pc/jcbf_tit.png')" alt=""></div>
        <p class="txt">
            您当前的投注组合如下：需消耗<i>{{ show1Data.length }}</i
            >次机会
        </p>
        <p class="sub">注：已经自动为您过滤平局</p>
        <div class="table">
          <div class="t_head">
            <div>{{ data.homeTeam }}</div>
            <div>{{ data.awayTeam }}</div>
          </div>
          <div class="t_body">
            <div v-for="(item, key) in show1Data" :key="key">
              <div>{{ item[0] }}</div>
              <div>{{ item[1] }}</div>
            </div>
          </div>
        </div>
        <div class="but_box">
          <button @click="numberList = false">取消</button>
          <button @click="bet">确定提交</button>
        </div>
      </div>
    </div>
    <div class="model" v-show="numberList2">
      <div class="number_list">
        <Icon
          name="cross"
          class="close"
          :size="18 / 59.9422423 + 'rem'"
          color="#b2c3df"
          @click="numberList2 = false"
        />
        <div class="t"><img :src="require('@/assets/img/nba/pc/jcbf_tit.png')" alt=""></div>
        <div class="table">
          <div class="t_head">
            <div>{{ historicalDetails.home_team }}</div>
            <div>{{ historicalDetails.away_team }}</div>
          </div>
          <div class="t_body">
            <div
              class="row"
              v-for="(item, key) in historicalDetails.list"
              :key="key"
            >
              <div>{{ item[0] }}</div>
              <div>{{ item[1] }}</div>
            </div>
          </div>
        </div>
        <div class="but_box">
          <button @click="numberList2 = false">关闭</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Empty,
  Field,
  Icon,
  List,
} from "vant";
import {
  rando,
} from "@/assets/js/tools";
import appConfig from "@/config/config";
import md5 from "js-md5";
import axios from "axios";
export default {
  components:{
    Empty,
    Field,
    Icon,
    List,
  },
  data(){
    return {
      data: {},
      active: 1,
      usdt: false,
      homeScore1:"",
      homeScore2:"",
      awayScore1:"",
      awayScore2:"",
      loginModel:false,
      numberModel:false,
      loginStatus: false,
      numberList: false,
      numberList2:false,
      loading: false,
      finished: true,
      error: false,
      guessList:[],
      show1Data: [],
      historicalDetails: {},
      winningRecord: [],
      winningLoading: false,
      winningFinished: true,
      winningError: false,
      winningPage: 1,
      page: 1,
      pagesize: 10,
      imgSrc:"",
      token: "",
      loginName: "",
      u2token: "",
    }
  },
  mounted() {
    this.openPCHandle("reloadPageSize", {
      height: this.$refs.main.clientHeight,
    });
  },
  computed: {
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
    numberList2: function (val) {
      if (val == false) {
        this.historicalDetails = {};
      }
    },
  },
  async created() {
    window.addEventListener("message", this.onMessage);

    this.openPCHandle("sendDataIframe");
  },
  destroyed(){
    window.removeEventListener("message", this.onMessage)
  },
  methods: {
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
    onMessage(event){
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
    async loadTicket(data) {
      this.loginStatus = data.loginStatus;
      this.token = data.token;
      this.loginName = data.loginName;
      this.u2token = data.u2token;
      this.usdt = data.currency == "USDT" ? true : false;

      this.$loading.show({
        text: "Loading",
      });
      
      let { imgSrc, message } = await this.getBootstrap();
      if (message) {
        this.openPCHandle("openDialog", { msg: message });
      } else{
        let { data: res = {}, message: msg } = await this.getNBAGuessInfo();

        if (msg) {
          this.openPCHandle("openDialog", { msg: msg });
        } else {
          this.finished = false;
          this.loading = true;
          let {
            data: list = [],
            message: errMsg,
          } = await this.getMatchGuessList();

          if (errMsg) {
            this.openPCHandle("openDialog", { msg: errMsg });
            this.error = true;
            this.loading = false;
          } else {
            this.loading = false;
            if (list < 10) {
              this.finished = true;
            }
            
            this.winningFinished = false;
            this.winningLoading = true;
            let { winData = [], winErr } = await this.getMatchGuessWin();
            if(winErr){
              this.openPCHandle("openDialog", { msg: winErr });
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

          this.data = res;
        }

        this.imgSrc = imgSrc;
      }

      this.$loading.hide();
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
      let appId = "zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9";
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
    getMatchGuessList() {
      let sendData = {
        productId: this.$store.state.appInfo.productId,
      };
      
      if (this.loginStatus) {
        sendData.loginName = this.loginName;
        sendData.page = this.page;
        sendData.pagesize = this.pagesize;
      }

      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = "zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9";
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(sendData);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      str +=
        this.loginStatus ? `${this.token}${this.u2token}` : "";
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
    getNBAGuessInfo() {
      let sendData = {
        productId: this.$store.state.appInfo.productId,
      };

      if (this.loginStatus) {
        sendData.loginName = this.loginName;
      }

      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = "zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9";
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
      this.numberList2 = true;
    },
    async onLoad() {
      this.page += 1;
      this.loading = true;
      let { data = [], message } = await this.getMatchGuessList();
      if (message) {
        this.error = true;
        this.loading = false;
        return;
      }

      if (data.length < 10) {
        this.finished = true;
      }
      this.guessList = [...this.guessList, ...data];
      this.loading = false;
    },
    getBootstrap() {
      let productId = this.$store.state.appInfo.productId;
      let v = (v = this.$store.state.appInfo.v);
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = "zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9";
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      // let webToken = this.token;
      let extraPath = "/bootstrap";
      let extraStr = `${appId}.${platform}.${qid}.${timestamp}.${v}.${extraPath}`;
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
            // token: webToken.token,
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
    submitScore() {
      if (
        (this.homeScore1 == "" && this.homeScore2 == "") ||
        (this.awayScore1 == "" && this.awayScore2 == "")
      ) {
        this.openPCHandle("openDialog", { msg: "请输入比分" });
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
        this.openPCHandle("openDialog", { msg: "不可提交平局" });
        return;
      }

      if (
        new Date().getTime() >
        new Date(this.data.endTime.replace(/-/g, "/")).getTime()
      ) {
        this.openPCHandle("openDialog", { msg: "活动已结束" });
        return;
      }

      if (!this.loginStatus) {
        this.loginModel = true
        return;
      }

      if (this.data.leftCount < 1) {
        this.numberModel = true
        return;
      }

      this.$loading.show({
        text: "组合生成中...",
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
        this.$loading.hide();

        if (this.show1Data.length == 1) {
          this.bet();
          return;
        }

        this.numberList = true;
      });
    },
    bet() {
      if (this.data.leftCount < this.show1Data.length) {
        this.openPCHandle("openDialog", { msg: `超出剩余次数${this.show1Data.length - this.data.leftCount}次` });
        return;
      }

      this.$loading.show({
        text: "Loading",
      });

      let sendData = {
        productId: this.$store.state.appInfo.productId,
        homeScore: this.homeScore1 + "-" + this.homeScore2,
        awayScore: this.awayScore1 + "-" + this.awayScore2,
      };
      if (this.token != undefined) {
        sendData.loginName = this.loginName;
      }

      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = "zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9";
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(sendData);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      str +=
        this.token != undefined ? `${this.token}${this.u2token}` : "";
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
      if (this.token != undefined) {
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
            this.openPCHandle("openDialog", { msg: head.errMsg });
            this.homeScore1 = "";
            this.homeScore2 = "";
            this.awayScore1 = "";
            this.awayScore2 = "";
            this.numberList = false;
            let { data, message: msg } = await this.getNBAGuessInfo();

            if (msg) {
              this.openPCHandle("openDialog", { msg: msg });
              return
            } 

            this.loading = true;
            this.finished = false;
            this.page = 1;
            let {
              data: list = [],
              message: errMsg,
            } = await this.getMatchGuessList();

            if (errMsg) {
              this.openPCHandle("openDialog", { msg: errMsg });
              this.error = true;
              this.loading = false;

              return;
            }

            this.loading = false;
            if (list < 10) {
              this.finished = true;
            }
            this.page += 1;
            this.guessList = list;

            this.data = data;
            return
          }
            
          this.openPCHandle("openDialog", { msg: errMsg });
        })
        .catch((err) => {
          this.openPCHandle("openDialog", { msg: "获取数据失败" });
        })
        .finally(() => {
          this.$loading.hide();
        });
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
    reverseStrings(strs) {
      return strs.split("").sort().reverse().join("");
    },
    toLogin(){
      this.openPCHandle("openRecharge");
    },
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      };
      window.parent.postMessage(info, "*");
    },
  },
}
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
.txt {
  .van-field__control {
    color: #fff;
    font-size: 14/99.9422423 + rem;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 18/99.9422423 + rem;
  }
}
.custom-image .van-empty__image {
  width: 60/99.9422423 + rem;
  height: 60/99.9422423 + rem;
}
.inputs{
  .van-cell{
    background: rgba(238,218,194,0.10);
    border: 1px solid #EDD8BE;
    border-radius: 4/99.9422423 + rem;
    width:75/99.9422423 + rem;
    height:40/99.9422423 + rem;
    padding:0;
  }
  .van-field__control{
    font-size: 14/99.9422423 + rem;
    color: #8E949A;
    letter-spacing: 0;
  }
}
</style>
<style lang="scss" scoped>
@import "./pc.scss";
</style>