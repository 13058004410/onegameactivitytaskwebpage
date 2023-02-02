<template>
  <div class="list-wrapper" ref="wrapper">
    <!-- <header>
      <div class="left"><Icon name="arrow-left" size="1.4rem" /></div>
      <div class="title"><span>赛事竞猜火热进行中</span></div>
      <div class="right"><Icon name="service-o" size="1.4rem" /></div>
    </header> -->
    <div class="scroll-main" ref="scroll">
      <div class="scroll-content">
        <div ref="listWrapper">
          <div class="bg-content">
            <VanImage
              width="100%"
              height="100%"
              v-if="imgSrc && info.match.ad != undefined"
              fit="fill"
              :src="imgSrc + info.match.ad"
            />
          </div>
          <div class="game-content">
            <div class="game-item">
              <p class="game-txt">
                参与竞猜并在热评区说出你的竞猜理由，就有机会获得100元现金
              </p>
              <p class="game-title" v-show="!showGuess">
                猜可能获胜的队伍后显示得票率
              </p>
              <div class="buts">
                <div
                  class="but-item"
                  v-for="(item, key) in info.guess"
                  :key="key"
                >
                  <div class="item" v-show="showGuess">
                    <p>{{ item.grade }}</p>
                    <div class="blue">
                      <i :style="{ width: item.grade }"></i>
                    </div>
                  </div>
                  <button
                    :class="{ active: activeInd == key }"
                    @click="clickBetBut(key, item.id)"
                  >
                    <span>{{ item.description }}</span>
                  </button>
                </div>
                <!-- <div class="but-item">
                  <div class="item">
                    <p>0%</p>
                    <div class="orange"><i></i></div>
                  </div>
                  <button><span>平</span></button>
                </div>
                <div class="but-item">
                  <div class="item">
                    <p>0%</p>
                    <div class="red"><i></i></div>
                  </div>
                  <button><span>客胜</span></button>
                </div> -->
                <!-- <button class="but-item"><span>平</span></button>
                <button class="but-item"><span>客胜</span></button> -->
              </div>
              <div class="game-nuxt" v-show="nextMatchTime != 0">
                <Icon name="clock-o" size="1rem" color="#F7B500" />{{
                  nextMatchTime
                }}后进入下一场赛事竞猜
              </div>
              <div class="game-start">
                <button @click="goToBet"><span>去投注赚一波</span></button>
              </div>
            </div>
          </div>
          <div class="comment">
            <div class="title">
              <span>球迷热评</span
              ><VanImage
                width="0.949495rem"
                fit="fill"
                :src="require('@/assets/img/quiz/hot.png')"
              />
            </div>
            <div class="comment-list">
              <div
                class="item"
                v-for="(item, key) in renderCommentsData"
                :key="key"
              >
                <div class="icon">
                  <div>
                    <VanImage
                      width="1.749070rem"
                      class="icon-img"
                      radius="0.2rem"
                      height="1.749070rem"
                      fit="cover"
                      :src="
                        require(`@/assets/img/quiz/avatar_${item.random}.png`)
                      "
                    />
                    <span class="name">{{ item.nickname }}</span>
                    <!-- <VanImage
                      width="2.798513rem"
                      class="member"
                      height="0.999469rem"
                      fit="cover"
                      src="https://img.yzcdn.cn/vant/cat.jpeg"
                    /> -->
                  </div>
                  <div
                    :class="{ active: item.current_like }"
                    @click="clickLike(item.id, key)"
                  >
                    <Icon name="good-job-o" size="1.2rem" />
                    <span class="like">{{ item.like }}</span>
                  </div>
                </div>
                <p class="comment-txt">
                  {{ item.content }}
                </p>
              </div>
              <!-- <div class="item">
                <div class="icon">
                  <div>
                    <VanImage
                      width="1.749070rem"
                      class="icon-img"
                      radius="0.2rem"
                      height="1.749070rem"
                      fit="cover"
                      src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                    <span class="name">C罗1号</span>
                    <VanImage
                      width="2.798513rem"
                      class="member"
                      height="0.999469rem"
                      fit="cover"
                      src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                  </div>
                  <div>
                    <Icon name="good-job-o" size="1.2rem" />
                    <span class="like">325</span>
                  </div>
                </div>
                <p class="comment-txt">
                  这场100%皇马胜，不信你们等着瞧，我先买2000块皇马，你们自己看着办
                </p>
              </div> -->
            </div>
          </div>
        </div>
        <div class="pullup-wrapper">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <span>{{ pullUp }}</span>
          </div>
          <div class="after-trigger" v-else>
            <Loading type="spinner" size="1rem" color="#909399" /> 加载中...
          </div>
        </div>
      </div>
      <div ref="pulldown" class="pulldown-wrapper" :style="pullDownStyle">
        <div class="before-trigger" v-if="beforePullDown">
          <Icon name="down" size="1rem" ref="arrow" color="#909399" />
          {{ pullDownText }}
        </div>
        <div class="after-trigger" v-else>
          <Loading type="spinner" size="1rem" color="#909399" /> 加载中...
        </div>
      </div>
    </div>
    <footer>
      <Field
        v-model="msg"
        center
        rows="1"
        placeholder="我的热评…"
        type="textarea"
        :autosize="{ maxHeight: 100 }"
        class="text-input"
      >
      </Field>
      <VanButton size="small" type="primary" class="send" @click="send"
        >发表</VanButton
      >
    </footer>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import axios from "axios";
import md5 from "js-md5";
import { Base64 } from "js-base64";
import appConfig from "@/config/config";
import { mapActions, mapMutations } from "vuex";
import { rando, getRandom } from "@/assets/js/tools";
import {
  Icon,
  Loading,
  Image as VanImage,
  Field,
  Button as VanButton,
} from "vant";
export default {
  components: {
    Icon,
    Loading,
    VanImage,
    Field,
    VanButton,
  },
  data() {
    return {
      msg: "",
      beforePullDown: true,
      isPullUpLoad: false,
      pullDownStyle: "",
      pullUpLoad: true,
      pullDownRefresh: {
        threshold: 50,
        probeType: 3,
      },
      arrowY: 0,
      sms: "",
      matchId: null,
      sportId: null,
      nickName: "",
      token: "",
      activeInd: null,
      info: {
        match: {},
        guess: [],
      },
      commentsData: [],
      imgSrc: "",
      isRealUser: 0,
      page: 1,
      pagesize: 10,
      pullUp: "上拉加载更多",
      listLoaded: false,
      showGuess: false,
      nextMatchTime: 0,
    };
  },
  computed: {
    pullDownText() {
      if (this.arrowY == 180) {
        return "释放刷新";
      }

      return "下拉刷新";
    },
    h5TokenStore() {
      return this.$store.state.h5Token;
    },
    renderCommentsData() {
      return this.commentsData.map((element) => {
        element.random = getRandom(1, 9);
        return element;
      });
    },
  },
  async created() {
    let { sport_id = 10, match_id = 39472580 } = this.$route.query;
    this.matchId = match_id;
    this.sportId = sport_id;
    //暴露方法给app使用
    window.loadTicket = this.loadTicket;
    // await this.getCommentList();
  },
  async mounted() {
    let heigth = this.getRect(this.$refs.pulldown).height;
    this.pullDownInitTop = -heigth;
    this.pullDownRefresh.stop = heigth + 20;
    this.$nextTick(() => {
      this.initScroll();
    });

    this.isPullUpLoad = true;
    await this.getBootstrap();
    this.page = 1;
    await this.getInitData(1);
  },
  methods: {
    ...mapActions(["AWebToken", "AH5Token"]),
    ...mapMutations({
      setAppinfoTickt: "SET_APPINFO_TICKET",
      setAppinfoLoginName: "SET_APPINFO_LOGINNAME",
    }),
    toLogin() {
      window.location = "nbapp://openLoginPage?data={}";
    },
    isLogin() {
      return this.$store.state.h5Token.token == undefined;
    },
    countdown(time) {
      let countTime = function () {
        var startTime = new Date();
        //				思路很简单,用设置的未来时间5月1号减去现在的时间,然后转换成天数,小时,分钟,秒数
        var num =
          new Date(time.replace(/-/g, "/")).getTime() - startTime.getTime();
        var day = parseInt(num / 1000 / 60 / 60 / 24);
        var hh = parseInt((num / 1000 / 60 / 60 / 24 - day) * 24);
        var mm = parseInt(((num / 1000 / 60 / 60 / 24 - day) * 24 - hh) * 60);
        var f = parseInt(num / (1000 * 60));
        var ss = parseInt(
          (((num / 1000 / 60 / 60 / 24 - day) * 24 - hh) * 60 - mm) * 60
        );
        // var ms = num % 1000;
        // console.log(day + "天" + hh + "小时" + mm + "分钟" + ss + "秒");

        return [f, ss];
      };

      let timeArr = countTime();
      if (timeArr[0] <= 0 && timeArr[1] <= 0) {
        this.nextMatchTime = 0;
        return;
      }
      if (timeArr[0] < 10) {
        this.nextMatchTime = `${
          timeArr[0] < 10 ? "0" + timeArr[0] : timeArr[0]
        }:${timeArr[1] < 10 ? "0" + timeArr[1] : timeArr[1]}`;
      }

      // console.log(
      //   day + "天" + hh + "小时" + mm + "分钟" + ss + "秒" + ms + "毫秒"
      // );
      let interval = setInterval(() => {
        let t = countTime();
        if (t[0] < 10) {
          this.nextMatchTime = `${t[0] < 10 ? "0" + t[0] : t[0]}:${
            t[1] < 10 ? "0" + t[1] : t[1]
          }`;
        }

        if (t[0] <= 0 && t[1] <= 0) {
          this.nextMatchTime = 0;
          clearInterval(interval);
          return;
        }
        // if (t[0] <= 0 && t[1] <= -1) {
        //   this.nextMatchTime = 0
        //   clearInterval(interval);
        // }
      }, 1000);
    },
    clickBetBut(key, id) {
      if (this.activeInd == null) {
        this.activeInd = key;
      } else {
        return;
      }
      let h5Token = this.$store.state.h5Token;

      let sendData = {
        productId: "a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi",
        matchId: this.matchId,
        sportId: this.sportId,
        betType: id,
        isRealUser: this.isRealUser,
      };
      if (h5Token.token != undefined) {
        sendData.loginName = this.$store.state.appInfo.loginName;
        sendData.nickName = this.nickName;
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
      str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
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
      return axios
        .post(this.$api.quiz.bet, sendData, {
          headers,
        })
        .then(async (data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            this.info.guess = body;
          }

          this.$toastMessage({ message: head.errMsg });
          this.showGuess = true;
        })
        .catch((err) => {
          this.activeInd = null;
          this.$toastMessage({ message: "竞猜失败" });
        });
    },
    //投注点击
    goToBet() {
      if (this.isLogin()) {
        this.toLogin();
        return;
      }
      window.location = `nbapp://openMatchInfo?data={"matchId":${this.matchId},"sportId":${this.sportId},"hName":"${this.info.match.home_name}","aName":"${this.info.match.away_name}"}`;
    },
    //发送评论
    send() {
      if (this.msg.length < 1) {
        this.$toastMessage({ message: "评论不能为空" });
        return;
      }
      let h5Token = this.$store.state.h5Token;

      let sendData = {
        productId: "a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi",
        matchId: this.matchId,
        sportId: this.sportId,
        isRealUser: this.isRealUser,
        parentId: 0,
        topId: 0,
        comment: this.msg,
      };
      if (h5Token.token != undefined) {
        sendData.loginName = this.$store.state.appInfo.loginName;
        sendData.nickName = this.nickName;
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
      str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
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
      return axios
        .post(this.$api.quiz.commentAdd, sendData, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            this.commentsData.unshift({
              content: this.msg,
              current_like: false,
              id: body.id,
              like: "0",
              loginname: "",
              nickname: body.nickname,
            });
            this.msg = "";
            this.$toastMessage({ message: head.errMsg });
            return { data: body };
          } else {
            this.$toastMessage({ message: head.errMsg });
            return { message: head.errMsg };
          }
        })
        .catch((err) => {
          this.$toastMessage({ message: "评论失败" });
          return { message: "评论失败" };
        });
    },
    reverseStrings(strs) {
      return strs.split("").sort().reverse().join("");
    },
    //获取初始化页面数据
    async getInitData(page) {
      let { data, message } = await this.getMatchGuide();
      if (message != undefined) {
        this.$toastMessage({ message: message });
        return;
      }
      this.info = data;

      this.countdown(data.match.next_match_open);

      let { data: list, message: msg } = await this.getCommentList(page);
      if (msg != undefined) {
        this.$toastMessage({ message: msg });
        return;
      }
      this.commentsData = list;
      if (list.length < this.pagesize) {
        this.listLoaded = true;
        this.isPullUpLoad = false;
        this.pullUp = "暂无更多数据";
      } else {
        this.scroll.finishPullUp();
      }
      this.scroll.finishPullDown();
    },
    clickLike(id, index) {
      let h5Token = this.$store.state.h5Token;

      let sendData = {
        productId: "a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi",
        commentId: id,
        sportId: this.sportId,
        isRealUser: this.isRealUser,
      };
      if (h5Token.token != undefined) {
        sendData.loginName = this.$store.state.appInfo.loginName;
        sendData.nickName = this.nickName;
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
      str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
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
      return axios
        .post(this.$api.quiz.commentLike, sendData, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            let item = this.commentsData[index];
            if (item.current_like) {
              item.like--;
            } else {
              item.like++;
            }
            item.current_like = !item.current_like;

            this.commentsData[index] = item;
            return { data: body };
          } else {
            this.$toastMessage({ message: head.errMsg });
            return { message: head.errMsg };
          }
        })
        .catch((err) => {
          this.$toastMessage({ message: "点赞失败" });
          return { message: "点赞失败" };
        });
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
            this.imgSrc = res.data.body.img_domains[0];
          } else {
            this.$toastMessage({ message: res.data.head.errMsg });
          }
        });
    },
    getMatchGuide() {
      let h5Token = this.$store.state.h5Token;

      let sendData = {
        productId: "a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi",
        matchId: this.matchId,
        sportId: this.sportId,
        isRealUser: this.isRealUser,
      };
      if (h5Token.token != undefined) {
        sendData.loginName = this.$store.state.appInfo.loginName;
        sendData.nickName = this.nickName;
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
      str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
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
      return axios
        .post(this.$api.quiz.matchGuide, sendData, {
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
    getCommentList(page) {
      let h5Token = this.$store.state.h5Token;

      let parameter = {
        productId: "a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi",
        // loginName
        // nickName
        matchId: this.matchId,
        sportId: this.sportId,
        isRealUser: this.isRealUser,
        page: page,
        pagesize: this.pagesize,
      };
      if (h5Token.token != undefined) {
        parameter.loginName = this.$store.state.appInfo.loginName;
        parameter.nickName = this.nickName;
      }
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(parameter);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
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
      return axios
        .post(this.$api.quiz.commentList, parameter, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            this.page += 1;
            return { data: body.comments };
          } else {
            return { message: head.errMsg };
          }
        })
        .catch((err) => {
          return { message: "获取数据失败" };
        });
    },
    //设置登录后的数据
    async loadTicket(obj) {
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
        return;
      }

      this.setAppinfoTickt(json.ticket);
      this.setAppinfoLoginName(json.loginName);
      this.nickName = json.nickName;
      this.$loading.show({
        text: "Loading",
      });
      if (Object.keys(this.$store.state.h5Token).length < 1) {
        await this.AH5Token();
      }
    },
    //初始化滚动条
    initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      if (this.$refs.listWrapper) {
        let height = this.getRect(this.$refs.scroll).height;
        this.$refs.listWrapper.style.minHeight = `${height + 1}px`;
      }
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true,
        probeType: 3,
        bounce: {
          top: true,
          bottom: true,
        },
        mouseWheel: true,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad,
      });
      // this.scroll.on("scroll", (pos) => {
      //   console.log(1);
      //   // this.$emit("scroll", pos);
      // });

      // this.scroll.on("beforeScrollStart", () => {
      //   console.log(1);
      //   // this.$emit("beforeScrollStart");
      // });

      this._initPullDownRefresh();
      this._initPullUpLoad();
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    autoPullDownRefresh() {
      this.scroll && this.scroll.autoPullDownRefresh();
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
    clickItem(e, item) {
      this.$emit("click", item);
    },
    destroy() {
      this.scroll.destroy();
    },
    //更新数据
    forceUpdate(dirty) {
      if (this.pullDownRefresh) {
        this._reboundPullDown().then(() => {
          this._afterPullDown();
        });
      } else if (this.pullUpLoad && this.isPullUpLoad) {
        this.isPullUpLoad = false;
        this.scroll.finishPullUp();
        this.pullUpDirty = dirty;
        this.refresh();
      } else {
        this.refresh();
      }
    },
    //初始化下拉刷新
    _initPullDownRefresh() {
      this.scroll.on("pullingDown", async () => {
        this.beforePullDown = false;
        this.page = 1;
        this.commentsData = [];
        this.isPullUpLoad = true;
        this.listLoaded = false;
        this.pullUp = "上拉加载更多";
        //下拉刷新
        this.isRebounding = true;
        await this.getInitData(this.page);
        // // this.scroll.finishPullUp();
        // // this.scroll.finishPullDown();
        this._afterPullDown();
      });

      let count = 180 / 50;
      let i = 0;

      this.scroll.on("scroll", (pos) => {
        if (this.beforePullDown) {
          this.arrowY = Math.min(180, i + pos.y * count);
          this.pullDownStyle = `top:${Math.min(
            pos.y + this.pullDownInitTop,
            10
          )}px`;
        } else {
          this.arrowY = 0;
        }
        if (this.isRebounding) {
          this.pullDownStyle = `top:${
            10 - (this.pullDownRefresh.stop - pos.y)
          }px`;
        }
      });
    },
    _initPullUpLoad() {
      this.scroll.on("pullingUp", async () => {
        if (this.commentsData.length < 1 || this.listLoaded) return;
        let { data, message } = await this.getCommentList(this.page);
        this.isPullUpLoad = true;
        if (message != undefined) {
          this.$toastMessage({ message });
        } else {
          this.commentsData = this.commentsData.concat(data);
          this.refresh();
          if (data.length < this.pagesize) {
            this.isPullUpLoad = false;
            this.listLoaded = true;
            this.pullUp = "暂无更多数据";
            return;
          }
        }

        this.scroll.finishPullUp();
      });
    },
    _reboundPullDown() {
      const { stopTime = 600 } = this.pullDownRefresh;
      return new Promise((resolve) => {
        setTimeout(() => {
          this.isRebounding = true;
          this.scroll.finishPullDown();
          resolve();
        }, stopTime);
      });
    },
    _afterPullDown() {
      this.pullDownStyle = `top:${this.pullDownInitTop}px`;
      this.beforePullDown = true;
      this.isRebounding = false;
      this.refresh();
    },

    getRect(el) {
      if (el instanceof window.SVGElement) {
        let rect = el.getBoundingClientRect();
        return {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        };
      } else {
        return {
          top: el.offsetTop,
          left: el.offsetLeft,
          width: el.offsetWidth,
          height: el.offsetHeight,
        };
      }
    },
  },
  watch: {
    arrowY(val) {
      if (!this.$refs.arrow) return;
      this.$refs.arrow.style.transform = `rotate(${val}deg)`;
    },
    h5TokenStore: async function () {
      this.isRealUser = 1;
      this.page = 1;
      await this.getInitData(1);
      this.$loading.hide();
      // let that = this;
      // this.$loading.hide();
      // // that.getHistoryList(1) // 查询洗码提案（本周）
      // // that.getHistoryList(2) // 查询洗码提案（上周）
      // that.getWashCodeInfoPre(1); // 获取本周洗码记录
      // that.getWashCodeInfoPre(2); // 获取上周洗码数据，记录
      // that.getWashCodeInfo(); // 获取本周洗码数据
    },
    // data() {
    //   setTimeout(() => {
    //     this.forceUpdate(true);
    //   }, this.refreshDelay);
    // },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/screen750.scss";
@import "@/assets/css/normaliz.scss";
html,
body,
body > div:first-child {
  height: 100%;
}
.toastMessageBox {
  z-index: 999;
}
.text-input {
  .van-cell__value {
    background: #f5f5f5;
    border-radius: 0.249867rem;
    padding: 0.312334rem 0.624668rem;
  }
}
</style>
<style lang="scss" scoped>
@import "./index.scss";
</style>