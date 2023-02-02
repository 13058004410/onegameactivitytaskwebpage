<template>
  <div class="content">
    <div class="guess-time">
      <p>{{timeschinese}}</p>
      <span>{{ formatDate() }} </span>
    </div>
    <div class="guess">
      <div class="title">
        <div :class="{ active: active == 1 }" @click="active = 1">
          <span>赛事竞猜</span>
        </div>
        <div :class="{ active: active == 2 }" @click="active = 2">
          <span>我的竞猜</span>
        </div>
      </div>
      <div class="score" v-show="active == 1">
        <div v-if="!lodaInfo" class="count login">
          您当前未登录，请<i @click="toLogin">登录</i>后查看
        </div>
        <div v-else class="count" :class="{usdt: data.accountType == 'USDT'}">
          剩余竞猜次数：{{ data.left_count }}
        </div>
        <div class="game">
          <div>
            <div class="team_logo">
              <VanImage
              :width="46 / 16 + 'rem'"
              :height="45 / 16 + 'rem'"
              fit="fill"
              :src="imgSrc + data.home_flag"
              class="img"
            />
            </div>
            <div>
              <p>{{ data.home_team }}</p>
            </div>
          </div>
          <div class="mide">
            <span v-if="data.end_time">{{
              data.match_time.substring(0, data.end_time.length - 3)
            }}</span>
            <p>VS</p>
          </div>
          <div>
            <div class="team_logo">
              <VanImage
              :width="46 / 16 + 'rem'"
              :height="45 / 16 + 'rem'"
              round
              fit="fill"
              class="img"
              :src="imgSrc + data.away_flag"
            />
            </div>
            
            <div>
              <p>{{ data.away_team }}</p>
            </div>
          </div>
        </div>
        <div class="inputs">
          <div v-if="this.data.sport_id===1"> 
            <div v-if="showItem(this.data.guess_group,'1')">
               <Button :color="ischoose==='1'?'#C0981D':''"  @click="chooseWin('1')"  size='small'>{{data.guess_group_des['1']}} <span>{{data.home_odds}}</span></Button>
            </div>
            <div v-if="showItem(this.data.guess_group,'2')">
               <Button :color="ischoose==='2'?'#C0981D':''"  @click="chooseWin('2')"  size='small'>{{data.guess_group_des['2']}} <span>{{ data.tie_odds}}</span></Button>
            </div>
            <div v-if="showItem(this.data.guess_group,'3')">
               <Button :color="ischoose==='3'?'#C0981D':''"  @click="chooseWin('3')"  size='small'>{{data.guess_group_des['3']}} <span>{{data.away_odds}}</span></Button>
            </div>
            </div>
          <div v-else class="basktball">
            <div v-if="showItem(this.data.guess_group,'1')">
                <Button :color="ischoose==='1'?'#C0981D':''"  @click="chooseWin('1')" size='small'>{{data.guess_group_des['1']}}  <span>{{data.home_odds}}</span></Button>
            </div>
            <div v-if="showItem(this.data.guess_group,'3')">
                <Button :color="ischoose==='3'?'#C0981D':''"  @click="chooseWin('3')"  size='small'>{{data.guess_group_des['3']}}  <span>{{data.away_odds}}</span></Button>
            </div>
          </div>
          <!-- <div>
            <Field
              v-model="awayScore1"
              placeholder="-"
              :center="true"
              input-align="center"
              class="txt"
              type="digit"
              maxlength="3"
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
            />
          </div> -->
        </div>
        <!-- <p class="sub">
          例如：队伍1填 90~92 队伍2填 100~100。则您的竞猜组合为 90:100,
          91:100，92:100 。一共3种组合，投注3种组合会消耗您3次竞猜次数。
        </p> -->
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
            ref="listBody"
          >
            <div class="row" v-for="(item, key) in guessList" :key="key">
              <div class="title">
                <span>提交时间：{{ item.create_time }}</span>
                <div class="right">
                  <div>
                    <span :class="'color'+item.is_win">{{item.is_win|filterWin}}</span>
                  </div>
                </div>
              </div>
              <div class="quiz">
                <div class="row">
                  <div class="quiz-title">
                    <div>
                      <span>{{ item.home_team }} VS {{ item.away_team }}</span>
                    </div>
                  </div>
                  <div class="score-row">
                    <div v-if="item.sport_id === 1">
                      <span v-if=" item.guess_type === 1">{{item.guess_group_des['1']}} {{ item.home_odds}}</span>
                      <span v-else-if=" item.guess_type === 2">{{item.guess_group_des['2']}} {{ item.tie_odds}}</span>
                      <span v-else-if=" item.guess_type === 3">{{item.guess_group_des['3']}} {{ item.away_odds}}</span>
                    </div>
                    <div v-else>
                      <span v-if=" item.guess_type === 1">{{item.guess_group_des['1']}}  {{ item.home_odds}}</span>
                      <span v-else-if=" item.guess_type === 3">{{item.guess_group_des['3']}}  {{ item.away_odds}}</span>
                    
                    </div>
                  </div>
                </div>
                <div v-if='item.is_win===2' class="goone" @click="goOne">
                  <!-- <a href="https://www.coinhui.net/">立即注册</a> -->
                  <img src="../../assets/img/LookBall/one_btn.png" alt="">
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
    <div class="ac-content">
      <div>
        活动期间看个球用户在指定赛事开赛前24小时内在ONE体育存款<span>≥300CNY/43USDT</span>即可参与竞猜活动。中奖即可领取<span>108元</span>
        竞猜红利，需完成<span>5倍</span>流水即可出款，仅限体育场馆。
       </div>
    </div>
    <div class="ac-rule">
      <div>
        <p>
          1.
          参与竞彩会员必须是注册在看个球渠道的会员，在当期赛事开赛前24小时内在ONE体育存款<span>≥300CNY/43USDT</span>即可参与竞猜活动。
        </p>
        <br />
        <p>
          2.
          竞猜红利在赛事完结后24小时内系统自动派发到账，红利需完成<span>5倍</span>流水即可出款，仅限体育场馆。
        </p>
        <br />
        <p>
          3.
          本活动与洗码优惠共享，不与其他任意活动共享存款条件与投注流水。
        </p>
        <br />
        <p>
          4.
          同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育会员账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。
        </p>
        <br />
        <p>
          5.
          会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。
        </p>
      </div>
    </div>
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
        <div class="close">
          <Icon
            @click="show2 = false"
            name="close"
            :size="29 / 16 + 'rem'"
            color="#969186"
          />
        </div>
      </div>
    </Overlay>
    
    <Overlay :show="showLongUP" :lock-scroll="false">
      <div class="logins">
        <div class="body">
          <div><VanImage @click="closeX" height='15' width='15' class-prefix :src="require('../../assets/img/LookBall/gb_icon.png')"/></div>
          <div>
            <a v-show="haveName" :class="{choose:!usePhone}" href="javascript:void(0)" @click="changePhone('phone')">验证码登陆</a>
            <a v-show="haveName" :class="{choose:usePhone}" href="javascript:void(0)" @click="changePhone('code')">手机号登陆</a>
            <a v-show="!haveName" href="javascript:void(0)">注册</a>
          </div>
          <div v-if="haveName">
              <Form>  
              <Field
                v-model="login.phoneNumber"
                placeholder="请输入手机号"
                :center="true"
                input-align="left"
                maxlength='11'
                class="txt"
                type="tel"
                @blur="checkphone"
                require
                :error-message="errM.phoneNumber"
              >
              <VanImage height='18' width='13' :src="require('../../assets/img/LookBall/sj_icon.png')" slot='left-icon' />
              </field>
              <Field
                v-model="login.Vcode"
                placeholder="请输入验证码"
                :center="true"
                input-align="left"
                class="txt"
                type="number"
                require
                :error-message="errM.Vcode"
                @blur="checkVcode"
                v-if="usePhone"
              >
              <VanImage height='18' width='16' class-prefix :src="require('../../assets/img/LookBall/yzm_icon.png')" slot='left-icon' />
              <span slot='right-icon' @click="getCode(2)">{{codes}}</span>
              </field>
              <Field
                v-model="login.pwd"
                placeholder="请输入密码"
                :center="true"
                input-align="left"
                class="txt"
                type="password"
                require
                @blur="checkpassword"
                :error-message="errM.pwd"
                v-if="!usePhone"
              >
              <VanImage height='18' width='16' class-prefix :src="require('../../assets/img/LookBall/mm_icon.png')" slot='left-icon' />
              </field>
            </Form>
          </div>
          <div v-if="!haveName">
            <Form>
                <Field
                  v-model="login.phoneNumber"
                  placeholder="请输入手机号"
                  maxlength='11'
                  :center="true"
                  input-align="left"
                  class="txt"
                  type="tel"
                  require
                  @blur="checkphone"
                  :error-message="errM.phoneNumber"
                >
                <VanImage height='18' width='13' :src="require('../../assets/img/LookBall/sj_icon.png')" slot='left-icon' />
                </field>
                <Field
                  v-model="login.pwd"
                  placeholder="请输入密码"
                  :center="true"
                  input-align="left"
                  class="txt"
                  type="password"
                require
                @blur="checkpassword"
                :error-message="errM.pwd"
                >
                <VanImage height='18' width='16' class-prefix :src="require('../../assets/img/LookBall/mm_icon.png')" slot='left-icon' />
                </field>
                <Field
                  v-model="login.Vcode"
                  placeholder="请输入验证码"
                  :center="true"
                  input-align="left"
                  class="txt"
                  type="number"
                  require
                  :error-message="errM.Vcode"
                  @blur="checkVcode"
                >
                <VanImage height='18' width='16' class-prefix :src="require('../../assets/img/LookBall/yzm_icon.png')" slot='left-icon' />
                <span slot='right-icon' @click="getCode(1)">{{codes}}</span>
                </field>
            </Form>
          </div>
          <div>
            <Button v-if="haveName" @click="toLoging" size='small'>登录</Button>
            <Button v-else @click="toRegist" size='small'>注册</Button>
          </div>
          <div>
            <p v-if="haveName">暂无账号？<span @click="goRegist">去注册</span></p>
            <p v-else>有账号 <span @click="goLoging">去登录</span></p>
          </div>
        </div>
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
  Button,
  Form
} from "vant";
import md5 from "js-md5";
import { rando, getRandom, formatDate ,reverseStrings} from "@/assets/js/tools";
import appConfig from "@/config/config";
import { mapActions, mapMutations } from "vuex";
import axios from "axios";
import Vue from 'vue'
import ba from 'vue-ba'
Vue.use(ba, '80cb366b41d19eea1ff095640591491a' )
export default {
  components: {
    VanImage,
    Field,
    Dialog,
    Empty,
    Overlay,
    Icon,
    List,
    Button,
    Form
  },
  data() {
    return {
      active: 1,
      imgSrc: "",
      data: {},
      guessList: [],
      show2: false,
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
      showLongUP: false,
      login:{
        phoneNumber:'',
        pwd:'',
        Vcode:''
      },
      errM:{
        phoneNumber:'',
        pwd:'',
        Vcode:''
      },
      haveName: true,
      usePhone: false,
      setTime: null,
      codes: '获取验证码',
      ischoose:'1',
      codeid:'',
      webToken:'',
      timeschinese:'本场竞猜时间:'
    };
  },
  computed: {
    h5TokenStore() {
      return this.$store.state.h5Token;
    }
  },
  watch: {
    h5TokenStore: async function () {
      this.$loading.show({
        text: "Loading",
      });

      let { data, message: msg } = await this.getNBAGuessInfo();
      if (msg) {
        Toast(msg);
      } else {
        this.page = 1;
        this.finished = false;
        this.onLoad();
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
    active:function(val) {
      console.log(val)
      if (val === 1) {
        this.getdatas();
      } else{
        if (this.isLogin()) {
        // this.active =1
        this.showLongUP = true
        return
        }
        this.gethistorylist()
      }
    }
  },
  async created() {
    window.loadTicket = this.loadTicket;

    this.$loading.show({
      text: "Loading",
    });
    let { imgSrc, message } = await this.getBootstrap();
    if (message) {
      Toast(message);
    } else {
      this.receive()
      let { data = {}, message: msg } = await this.getNBAGuessInfo();

      if (msg) {
        this.timeschinese=msg
      } else {
        if (sessionStorage.getItem('myphone')) {
          this.gethistorylist()
        this.lodaInfo = true;
          }
        this.imgSrc = imgSrc;
        this.data = data;
      }
    }

    this.$loading.hide();
  },
  methods: {
    ...mapActions(["AWebToken", "AH5Token"]),
    ...mapMutations({
      setAppinfoTickt: "SET_APPINFO_TICKET",
      setAppinfoLoginName: "SET_APPINFO_LOGINNAME",
    }),
    formatDate() {
      if(this.data){
        if (this.data.start_time && this.data.end_time) {
        let time1 = this.data.start_time.replace(/-/g, "/");
        let time2 = this.data.end_time.replace(/-/g, "/");
        time1 = time1.substring(0, time1.length - 3);
        time2 = time2.substring(0, time2.length - 3);
        return time1 + " ~ " + time2;
        } else {
          return "0000-00-00 00:00 ~ 0000-00-00 00:00";
        }
      } 
    },
    showItem(data=0,idx=0){
      console.log(data)
      if (data === 0) {return}
      let datas = data.indexOf(idx)!= -1
      console.log(datas)
      if(datas){
        return true
      } else{return false}
    },
    async getdatas() {
      let { data, message: msg } = await this.getNBAGuessInfo();
      if (msg) {
        Toast(msg);
      } else {
        this.data = data;
      }
    },
    async gethistorylist(){
       this.page = 1;
        this.finished = false;
        this.loading = true;
        let {data: list = [],message: errMsg,} = await this.getMatchGuessList();
        console.log('00')
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
          this.guessList = list;
        }
    },
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
    async onLoad() {
      // this.loading = true;
      // let { data = [], message } = await this.getMatchGuessList();
      // console.log('onLoad')
      // if (message) {
      //   this.error = true;
      //   this.loading = false;
      //   return;
      // }
      // this.page += 1;

      // if (data.length < 10) {
      //   this.finished = true;
      // }
      // this.guessList = [...this.guessList, ...data];
      this.loading = false;
    },
    submitScore() {
      console.log(new Date(this.data.start_time.replace(/-/g, "/")).getTime())
      console.log(new Date().getTime())
      console.log(new Date(this.data.end_time.replace(/-/g, "/")).getTime())
      if (!this.data.start_time) {
        this.timeschinese='此活动暂未开放'
        Toast("此活动暂未开放");
        return;
      }

      let start_time = new Date(this.data.start_time.replace(/-/g, "/")).getTime()
      let nowtime = new Date().getTime()
      let end_time = new Date(this.data.end_time.replace(/-/g, "/")).getTime()
      if (!(nowtime>start_time)&&!(nowtime<end_time)) {
        Toast("活动已结束");
        return;
      }
      console.log(this.isLogin())
      if (this.isLogin()) {
        this.showLongUP = true
        return;
      }

      if (this.data.left_count < 1) {
        Toast(`您当天的竞猜次数已用完了哦，\n请明天再来吧~`);
        return;
      }
      this.bet()
    },
    bet() {

      this.$loading.show({
        text: "Loading",
      });

      let h5Token = this.$store.state.h5Token;

      let sendData = {
        productId: this.$store.state.appInfo.productId,
        phone:sessionStorage.getItem('myphone'),
        guessType:this.ischoose,
        loginName:sessionStorage.getItem('loginName')
      };
      console.log(sendData)
      if (h5Token.token != undefined) {
        sendData.loginName = this.$store.state.appInfo.loginName;
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
        .post(this.$api.lookBall.matchGuessAdd, sendData, {
          headers,
        })
        .then(async (data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            if(head.errMsg == "-缺少参数-") {
              Toast('登录状态过期 请重新登陆');
              this.lodaInfo = false;
              this.showLongUP = true
              return
            }
            Toast(head.errMsg);
            this.timeschinese='本场竞猜时间:'
            this.getdatas();
            this.gethistorylist();
          } else {            
          // this.timeschinese=errMsg
            Toast(errMsg);
          }
        })
        .catch((err) => {
          this.timeschinese='此活动暂未开放'
          Toast("此活动暂未开放");
        })
        .finally(() => {
          this.$loading.hide();
        });
    },
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
      console.log(webToken.toke +'n00')
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
      let that = this
      let h5Token = this.$store.state.h5Token;
      let myphone = sessionStorage.getItem('myphone')
      console.log(myphone + 'pp')
      let sendData = {
        phone: myphone,
      };
      if (h5Token.token != undefined) {
        sendData.loginName = this.$store.state.appInfo.loginName;
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
        .post(this.$api.lookBall.matchGuessInfo, sendData, {//查询对决信息
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            if (!body) {
              
            return { message: head.errMsg };
            } else {

            return { data: body };
            }
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
      
      let myphone = sessionStorage.getItem('myphone')
      let sendData = {
        phone: myphone
      };
      if (h5Token.token != undefined) {
        sendData.loginName = this.$store.state.appInfo.loginName;
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
        .post(this.$api.lookBall.matchGuessList, sendData, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            return { data: body };
          } else {
            if(head.errMsg == "缺少参数") {
              Toast('登录状态过期 请重新登陆');
              this.lodaInfo = false;
              this.showLongUP = true
              return
            }
            return { message: head.errMsg };
          }
        })
        .catch((err) => {
          return { message: "获取数据失败" };
        });
    },
    toLogin() {
      // window.location = "nbapp://openLoginPage?data={}";
      this.showLongUP = true
    },
    isLogin() {
      return sessionStorage.getItem('myphone') == undefined;
    },
    reverseStrings(strs) {
      return strs.split("").sort().reverse().join("");
    },
    closeX() {
      this.showLongUP = false
    },
    goLoging() {//去登录
    console.log('去登录')
    this.haveName = true
    this.usePhone = true
    this.refresh()
    this.cleans()
      // haveName: false,
      // usePhone: false
    },
    goRegist() {//去注册
    console.log('去注册')
    this.haveName = false
    this.refresh()
    this.cleans()
    },
    toLoging() {//登录
    // .login.phoneNumber
    console.log(this.usePhone + '用什么登录')
    if (!this.usePhone) {
    if (!this.login.phoneNumber) {
        this.errM.phoneNumber = '您还没有输入手机号哦！'
        return false
      } else if (!this.login.pwd) {
        if (!this.login.pwd) {
        this.errM.pwd = '您还没有输入密码哦！'
        return false
        }
      }
        this.logins()
    } else{
      if (!this.login.phoneNumber) {
          this.errM.phoneNumber = '您还没有输入手机号哦！'
          return false
        } else if (!this.login.Vcode) {
          if (!this.login.Vcode) {
          this.errM.Vcode = '您还没有输入验证码哦！'
          return false
          }
        }
       this.loginByMobileEx()
    }
    console.log('登录')
  
    },
    toRegist() {//注册
    console.log('注册')
    if (!this.login.phoneNumber) {
        this.errM.phoneNumber = '您还没有输入手机号哦！'
        return false
      } else if (!this.login.pwd) {
        if (!this.login.pwd) {
        this.errM.pwd = '您还没有输入密码哦！'
        return false
        }
      }else if (!this.login.Vcode) {
          if (!this.login.Vcode) {
          this.errM.Vcode = '您还没有输入验证码哦！'
          return false
          }
        }
 
    this.createAccountByMobileNo()
    },
    changePhone(name) {//手机登录&密码登录
    if (name === 'phone') {this.usePhone = true} else {this.usePhone = false}
    
    },
    getCode (data) {
      let trues = this.checkphone()
      console.log(this.$encrypt(1))
      console.log(trues)
     if (trues&&this.setTime === null) {
        this.sendCode(data)
     } else {
       console.log('验证码已发送')
      //  this.cleans()
      //  this.timeCode()
     }
    },
    timeCode () {
      let that = this
      let times = 60000
      that.setTime = setInterval(() => {
        if (times >= 1000) {
          times -= 1000
          that.codes = times/1000
           console.log(times)
        } else{
          that.cleans()
        }
        
      },1000)
      
    },
    cleans() {
      let that = this
      clearInterval(that.setTime)
      that.setTime = null
      that.codes = '获取验证码'
    },
    chooseWin (n) {
      this.ischoose = n
    },
    createAccountByMobileNo(){//手机注册提交
      let that = this
      let productId = this.$store.state.appInfo.productId;
      // let data  = {
      //   'smsCode':that.login.Vcode.trim(),
      //   'messageId':that.codeid,
      //   'productId':productId,
      //   'password':that.$encrypt(that.login.pwd.trim()),
      //   'channel':'看个球竞猜'
      // }
      let h5Token = this.webToken;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(data);
      let domainName = this.$store.state.appInfo.domainName;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = !isAndroid ? 2 : 1;
      let str = this.reverseStrings(sendDataString) + qid + appId + v;
      str +=
        h5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      let sign = md5(str);
      let parentid='1001224405'
      // console.log('999')
      let headers = {
        qid,
        appId,
        v,
        platform,
        sign,
        domainName,
        timestamp,
        deviceId: this.$store.state.appInfo.deviceId,
        token:h5Token,
        parentid
      };
      if (h5Token.token != undefined) {
        headers.token = h5Token.token;
        headers.deviceId = h5Token.deviceId;
      }
      // console.log('999'+ JSON.stringify(headers))
      axios
        .post(this.$api.lookBall.createAccountByMobileNo, data, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == '0000') {
            that.goLoging()
            Toast('注册成功');
          } else {
            Toast(head.errMsg);
          }
        })
        .catch((err) => {
          Toast('注册失败');
        });
    },
    loginByMobileEx(){
      let that = this
      let productId = this.$store.state.appInfo.productId;
      let data  = {
        'messageId':that.codeid,
        'smsCode':that.login.Vcode.trim(),
        productId:productId,
      }
      let h5Token = this.webToken;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(data);
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
        deviceId: this.$store.state.appInfo.deviceId,
        token:h5Token
      };
      if (h5Token.token != undefined) {
        headers.token = h5Token.token;
        headers.deviceId = h5Token.deviceId;
      }
      axios
        .post(this.$api.lookBall.loginByMobileEx, data, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == '0000') {
            if (data.data.body.loginName) {
            sessionStorage.setItem('myphone',that.login.phoneNumber)
            sessionStorage.setItem('loginName',data.data.body.loginName)
            that.getdatas()
            this.gethistorylist()
            that.lodaInfo = true;
            that.refresh()
            that.closeX()
            Toast('登录成功');
            } else {
            Toast('登录失败，请去App修改用户名');
            }
          } else {
            sessionStorage.removeItem('myphone')
            sessionStorage.removeItem('loginName')
             Toast(head.errMsg);
          }
        })
        .catch((err) => {
            sessionStorage.removeItem('myphone')
            sessionStorage.removeItem('loginName')
             Toast('登录失败');
        });
    },
    logins(){
      let that = this
      let productId = this.$store.state.appInfo.productId;
      let data  = {
        'mobileNo':that.$encrypt(that.login.phoneNumber),
        'password':that.$encrypt(that.login.pwd),
        'productId':productId,
        'loginType':'1'
      }
      // let h5Token = this.$store.state.h5Token;
      let h5Token = this.webToken;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(data);
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
        deviceId: this.$store.state.appInfo.deviceId,
        token:h5Token
      };
      if (h5Token.token != undefined) {
        headers.token = h5Token.token;
        headers.deviceId = h5Token.deviceId;
      }
      axios
        .post(this.$api.lookBall.login, data, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == '0000') { 
            if (data.data.body.loginName) {
              sessionStorage.setItem('myphone',that.login.phoneNumber)
              sessionStorage.setItem('loginName',data.data.body.loginName)
              that.getdatas()
              this.gethistorylist()
              that.lodaInfo = true;
              that.refresh()
              that.closeX()
              Toast('登录成功');
            } else {
              Toast('登录失败，请去App修改用户名');
            }
          } else {
            sessionStorage.removeItem('myphone')
            sessionStorage.removeItem('loginName')
             Toast(head.errMsg);
          }
        })
        .catch((err) => {
          console.log('999')
            sessionStorage.removeItem('myphone')
            sessionStorage.removeItem('loginName')
           Toast('登录失败');
        });
    },
    sendCode(n){
      let that = this
      let productId = this.$store.state.appInfo.productId;
      let data  = {
        mobileNo:that.$encrypt(that.login.phoneNumber),
        productId:productId,
        use:n
      }
      let h5Token = this.webToken;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let sendDataString = JSON.stringify(data);
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
        deviceId: this.$store.state.appInfo.deviceId,
        token:h5Token
      };
      if (h5Token.token != undefined) {
        headers.token = h5Token.token;
        headers.deviceId = h5Token.deviceId;
      }
      axios
        .post(this.$api.lookBall.sendCode, data, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == '0000') {
            that.codeid = body.messageId
             this.timeCode()
            Toast('验证码发送成功');
          } else {
          Toast('验证码发送失败');
          }
        })
        .catch((err) => {
          Toast('验证码发送失败');
        });
    },
    checkphone() {
      console.log('手机规则校验')
      let reg = /^1[0-9]{10}$/;
      if (!this.login.phoneNumber) {
        this.errM.phoneNumber = '您还没有输入手机号哦！'
        return false
      } else if (!reg.test(this.login.phoneNumber)) {
        this.errM.phoneNumber = '手机号输入有误!'
        return false
      } else{
        this.errM.phoneNumber = ''
        return true
      }
      
    },
    checkpassword() {
      console.log('手机规则校验')
      let reg = /(?=.*[0-9])(?=.*[a-zA-Z]).{8,16}/;
      if (!this.login.pwd) {
        this.errM.pwd = '您还没有输入密码哦！'
        return false
      } else if (!reg.test(this.login.pwd)) {
        this.errM.pwd = '密码必须是8-16位的数字，字符组合'
        return false
      } else{
        this.errM.pwd = ''
        return true
      }
      
    },
    checkVcode () {
      if (!this.login.Vcode) {
        // this.errM.Vcode = '您还没有输入验证码哦！'
         this.errM.Vcode = ''
        return false
      } else{
        this.errM.Vcode = ''
        return true
      }
    },
    refresh() {
      this.login.phoneNumber = ''
      this.login.pwd = ''
      this.login.Vcode = ''
      this.errM.phoneNumber = ''
      this.errM.pwd = ''
      this.errM.Vcode = ''
    },
    receive () {
      let that = this
      let timestamp = Date.parse(new Date())
      let qid = md5(timestamp + rando(6))
      let appId = this.$store.state.appInfo.appId;
      let v = this.$store.state.appInfo.v;
      let productId = this.$store.state.appInfo.productId;
      let data = {
        productId: productId,
      }
      let a = JSON.stringify(data)
      let sign = md5(reverseStrings(a) + qid + appId + v)
      axios
        .post(this.$api.global.webToken, data, {
          headers: {
            qid: qid,
            appId: appId,
            v: v,
            sign,
          },
        })
        .then((response) => {
          that.webToken = JSON.parse(Base64.decode(response.data.body.info))
        })
    },
    goOne () {
      console.log('前往one体育')
       // 安卓端跳转
        let urls = 'oneSport://'
        var iFrame;
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        console.log("isAndroid", isAndroid, isiOS);
        if (isAndroid) {
            //安卓终端使用iframe
            iFrame = document.createElement("iframe");
            iFrame.setAttribute("src", urls);
            iFrame.setAttribute("style", "display:none;");
            iFrame.setAttribute("height", "0px");
            iFrame.setAttribute("width", "0px");
            iFrame.setAttribute("frameborder", "0");
            document.body.appendChild(iFrame);
            // 发起请求后这个 iFrame 就没用了，所以把它从 dom 上移除掉
            iFrame.parentNode.removeChild(iFrame);
            iFrame = null;
            // 如果用户没有安装APP，则提示用户去安装APP
            setTimeout(() => {
                window.location.href = "https://official.onesports.app"; // 这里可以自行写一个延时关闭的弹窗，也可以跳转至app下载地址
            }, 2000);
        } else if (isiOS) {
            //iOS终端直接页面跳转
            window.location.href = urls;
            // 如果用户没有安装APP，则提示用户去安装APP
            setTimeout(() => {
                window.location.href = "https://official.onesports.app"; // 这里可以自行写一个延时关闭的弹窗，也可以跳转至app下载地址
            }, 2000);
        } else {
            window.location.href = urls;
        }
    }
  },
  filters:{
    filterWin (n) {
      switch (n){
        case 1: return '待开奖'; break;
        case 2: return '已中奖'; break;
        case 3: return '未中奖'; break;
        default: return '待开奖'; break;
      }

    }
  }
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
.van-field__left-icon{
  margin-right: 15/16 + rem;
}
.txt {
  .van-field__control {
    font-size: 12px;
    color: #363636;
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