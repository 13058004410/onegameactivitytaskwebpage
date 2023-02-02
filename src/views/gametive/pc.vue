<template>
  <div class="content" ref="main">
      <div :class="[{'guess-content2': data.length == 2 && tab},'guess-content']">
          <div class="tab-list">
              <div :class="[tab? 'tab-one':'tab-one-click']" @click="changeTab(true)"></div>
              <div :class="[tab? 'tab-two':'tab-two-click']" @click="changeTab(false)"></div>
          </div>
          <div class="datanone-main" v-if="(data.length == 0 && tab)"></div>
          <div class="recordnone-main" v-if="(record.length == 0 && !tab)"></div>
          <div class="before-list" v-if="tab && data.length !== 0" v-for="(item, index) in data" :key="index">
            <div class="white-line" v-if="index == 1"></div>
            <div class="main-title" v-if="index == 0 && data.length == 2">竞猜赛事一</div>
            <div class="main-title" v-if="index == 1 && data.length == 2">竞猜赛事二</div>
            <div class="guess-time" v-if="item">本场赛事竞猜时间截至：{{item.end_time}}</div>
            <div class="guess-team">
                <div class="home-team">
                    <div class="home-img"><img :src="imgSrc + item.home_logo" alt=""></div>
                    <p class="team-name">{{item.home_team}}</p>
                </div>
                <div class="vs">
                    <div class="img"></div>
                    <p class="name">{{item.league_name}}</p>   
                    <p class="time">{{item.match_time}}</p>
                </div>
                <div class="away-team">
                    <div class="away-img"><img :src="imgSrc + item.away_logo" alt=""></div>
                    <p class="team-name">{{item.away_team}}</p>
                </div>
            </div>
            <div class="guess-ques" v-for="(ques, i) in item.problem" :key="i">
                <p>{{i + 1}}.{{ques.title}}</p>
                <div class="answer-group">
                    <span :class="[{acive: tabActive == num && idActive == index*2 + i}, 
                    {acive1: tabActive1 == num && idActive1 == index*2 + i}, {acive2: tabActive2 == num && idActive2 == index*2 + i}, 
                    {acive3: tabActive3 == num && idActive3 == index*2 + i}, 'answer-item']" 
                    v-for="(options, key, num) in ques.option" :key="num"
                    @click="activeClick(num, i, index, ques, key)">{{key}}.{{options}}</span>
                </div>
            </div>
            <div class="submit" @click="submit(item, index)"></div>
          </div>

          <div class="after-list" v-if="!tab && record.length !== 0">
              <List
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                :error.sync="error"
                error-text="请求失败，点击重新加载"
                @load="onLoad"
                class="record"
              >
                <div class="record-list" v-for="(recordItem, recordIndex) in record" :key = "recordIndex">
                  <div class="record-time">
                    <div class="time">提交时间：{{recordItem.created_at}}</div>
                    <div :class="[{prizeno:recordItem.status == -1},{prizeget:recordItem.status == 2},'prize']">
                      {{prizeName(recordItem.status)}}
                    </div>
                  </div>
                  <div class="ques-content">
                    <div class="record-team">
                      <span class="home-team">{{recordItem.match.home_team}}</span>
                      <span class="vs">VS</span>
                      <span class="away-team">{{recordItem.match.away_team}}</span>
                    </div>
                    <div class="record-ques" v-for="(quesItem, quesIndex) in recordItem.problem" :key = "quesIndex">
                      <p>{{quesIndex + 1}}.{{quesItem.title}}</p>
                      <span class="record-answer">{{keyArrCount(recordItem, quesIndex)}}.{{quesItem.option[keyArrCount(recordItem, quesIndex)]}}</span>
                    </div>
                  </div>
                </div>
              </List>
          </div>
      </div>
      <div class="active-content">
          <div class="active-title"></div>
          <div class="active-word">关注ONE体育赞助赛事，场场瓜分现金红包！指定比赛开赛日前3日每累计有效投注额2888CNY/413USDT，即可参与1场指定赛事竞猜。猜中每场2个问题，即可参与平分奖池，奖池红利需完成1倍体育厅流水即可取款！每一场竞猜奖池基础红利为5000CNY，比赛每增加 1 个进球奖池红利+1000 CNY。</div>
          <div class="active-title2"></div>
          <div class="active-team">
            <span>{{homeText}}</span> VS <span>{{awayText}}</span>
          </div>
          <div class="active-swiper">
            <div class="arrow-prev" @click="prevTap()"></div>
            <van-swipe ref="swiper" @change="onChange" :loop="false" :initial-swipe="swipeIndex">
              <van-swipe-item v-for="(item, index) in honorList" :key="index" @click="swiperClick(index)">
                <img
                :src="imgSrc + item.answer_img"
                class="img"
                />
              </van-swipe-item>
              <template #indicator>
              <div class="custom-indicator">{{ current + 1 }}/{{honorList.length}}</div>
             </template>
            </van-swipe>
            <div class="arrow-next" @click="nextTap()"></div>
            <BigImg
            v-if="showImg"
            @clickit="viewImg"
            :bigimgSrc="bigimgSrc"
          ></BigImg>
          </div>
          <div class="active-title3"></div>
          <div class="prize-list">
            <div class="mgt20">
              <span>会员账号</span>
              <span>竞猜赛事</span>
              <span>红利</span>
          </div>
          <div id="box">
            <div id="con1" ref="con1" :class="[{anim:animate==true}, 'table-body']">
                <div class="table-tr" v-for="(item, index) in arr" :key="index" v-if="tableDisplay(item)">
                  <span>{{item.loginname}}</span>
                  <span>{{item.match_team}}</span>
                  <span>￥{{item.prize}}</span>
                </div>
            </div>
          </div>
        </div>
        <div class="prize-word">注意事项：   
指定比赛开赛日前3日内每累计2888CNY/413USDT体育厅有效投注额可参与一场比赛竞猜，已参与过活动的有效投注额不可重复参与活动。例：第一场指定赛事8月15日凌晨04:00阿拉维斯VS皇家马德里，第二场指定赛事8月15日23:30维戈塞尔塔VS马德里竞技。<br>
ONE体育会员A，在8月12日至8月14日三日累计有效投注额为5000元，会员A只可参与第一场竞猜活动，不满足参与第二场竞猜活动条件。</div>
        <div class="prize-rule"></div>
        <div class="rule-word">
          1.本活动参与前置有效投注额只计算指定赛事开赛日前3日内体育厅的累计有效投注，其它游戏厅一律不计算。每一期的竞猜答案会在赛事结束后的24小时内公布，且系统会在公布答案后自动派发红利。中奖红利统一派发CNY到中奖会员CNY账户中。注：活动答案以ONE体育公布的截图为准。<br>
          2.如出现不可预见的原因，指定竞猜赛事在开始竞猜后突发改期、取消等情况，则无法保留该次赛事参与会员的竞猜结果。<br>
          3.本活动与洗码优惠及其他任意存送活动共享。<br>
          4.本活动红利需完成1倍流水即可出款，仅限体育厅。<br>
          5.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。<br>
          6.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。<br>
        </div>
      </div>    
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
  Swipe,
  SwipeItem
} from "vant";
import md5 from "js-md5";
import { rando, getRandom, formatDate } from "@/assets/js/tools";
import appConfig from "@/config/config";
import { mapActions, mapMutations } from "vuex";
import axios from "axios";
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import BigImg from './BigImg.vue'
export default {
  components: {
    VanImage,
    Field,
    Dialog,
    Empty,
    Overlay,
    Icon,
    List,
    Swiper,
    SwiperSlide,
    BigImg,
    Swipe,
    SwipeItem
  },
  data() {
    return {
      data:[],
      honorList:[],
      honor:{},
      record:[],
      showImg: false,
      imgSrc: '',
      bigimgSrc:'',
      arr: [],
      tab:true,
      loading: false,
      error: false,
      finished: false,
      hispage: 1,
      hispagesize: 10,
      pripage: 1,
      pripagesize: 20,
      tabActive: null,
      tabActive1: null,
      tabActive2: null,
      tabActive3: null,
      idActive: null,
      idActive1: null,
      idActive2: null,
      idActive3: null,
      selecteds1: {},
      selecteds2: {},
      animate: false,
      page: 1,
      pagesize: 20,
      homeText: '',
      awayText: '',
      swipeIndex:0,
      current:0,
      loginStatus: false,
      token: "",
      loginName: "",
      u2token: "",
      flag: true
    }
  },
  computed: {

  },
  watch: {
    arr: function() {
      if(this.flag){
        let length = 0;
        this.arr.forEach(element => {
          if(element.status == 1) {
            length++;
          }
        });
        if(length > 5) {
          setInterval(this.scroll, 1000)
        }
        this.flag = false
      }
    }
  },
  mounted () { 
    const that = this
    setInterval(() => {
      let iframeH = Math.max(that.$refs.main.clientHeight, that.$refs.main.scrollHeight)
      that.openPCHandle("reloadPageSize", {
        height: iframeH,
      })
    }, 0) 
  },
  async created() {
    window.addEventListener("message", this.onMessage);
    this.openPCHandle("sendDataIframe");
    this.$loading.show({
      text: "Loading",
    });
    let { imgSrc, message } = await this.getBootstrap();
    if (message) {
      this.openPCHandle("openDialog", { msg: message });
    } else {
      let { data = [], message: msg } = await this.gameGuessList();
      if(msg) {
      this.openPCHandle("openDialog", { msg: msg });
      } else {       
      }
      this.imgSrc = imgSrc
      this.data = data
      // if(this.data == 0){
      //   Dialog.alert({
      //     title:'提示',
      //     message: "暂无活动赛事，敬请期待！",
      //     confirmButtonText: "我知道了",
      //     theme: "round-button",
      //     confirmButtonColor: "#576B95",
      //   })
      //   .then(() => {
      //     // on confirm
      //   })
      //   .catch(() => {
      //     // on cancel
      //   });
      // }
    }
    let { data2 = [], message: msg1 } = await this.gameGuessHis();
    if(msg1) {
    // this.openPCHandle("openDialog", { msg: msg1 });
    }else {
      this.honorList = data2.data
      if(this.honorList[0]){
        this.onChange(0)
      }
    }
    let { data = [], message: msg2 } = await this.gameGuessPrize()
    if(msg2) {
      // this.openPCHandle("openDialog", { msg: msg2 });
    } else {
        this.arr = data.data
    }
    let { data1 = [], message: msg3 } = await this.gameGuessQuiz()
    if(msg3) {
      // Toast(msg3)
    } else {
        this.record = data1.data
        if (this.record.length == data1.total) {
        this.finished = true; 
        }else{
          this.page += 1;
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
    viewImg () {
      this.showImg = false
    },
    tableDisplay(item){
      if(item.status === 2) {
        return false
      }else {
        return true
      }
    },
    changeTab(e){
      if(this.tab == true && !this.loginStatus) {
        Dialog.confirm({
          title:'提示',
          message: "您还没登录哦，请登录后再进行操作吧！",
          confirmButtonText: "去登录",
          theme: "round-button",
          confirmButtonColor: "#576B95",
        })
        .then(() => {
          // on confirm
          this.toLogin();
        })
        .catch(() => {
          // on cancel
        });
        return
      }
      this.tab = e
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
    loadTicket(data) {
      this.loginStatus = data.loginStatus;
      this.token = data.token;
      this.loginName = data.loginName;
      this.u2token = data.u2token;
    },
    async onLoad() {
      this.loading = true;
      let { data1 = [], message } = await this.gameGuessQuiz();
      if (message) {
        this.error = true;
        this.loading = false;
        return;
      }
      this.page += 1;
      this.record = [...this.record, ...data1.data];
      if (this.record.length == data1.total) {
        this.finished = true; 
      }
      this.loading = false;
    },
    submit(item, index){
      if (!this.loginStatus) {
        Dialog.confirm({
          title:'提示',
          message: "您还没登录哦，请登录后再进行操作吧！",
          confirmButtonText: "去登录",
          theme: index? "round-button round-button-2":"round-button round-button-1",
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
      // if (
      //   new Date().getTime() >
      //   new Date(this.data[index].end_time.replace(/-/g, "/")).getTime()
      // ) {
      //   Toast("活动已结束");
      //   return;
      // }
      if(index == 0) {
        if(Object.keys(this.selecteds1).length < 2 ) {
          this.openPCHandle("openDialog", { msg: '请选择所有问题的答案' });
          return
        }
      }
      if(index == 1) {
        if(Object.keys(this.selecteds2).length < 2 ) {
          this.openPCHandle("openDialog", { msg: '请选择所有问题的答案' });
          return
        }
      }
      this.bet(item, index)
    },
    tobet(){
      this.openPCHandle("openIndex");
    },
    async bet(item, index) {
      this.$loading.show({
      text: "Loading",
      });
      let { data = [], message: msg } = await this.gameGuessApply(item, index);
      if(msg) {
        if(typeof(msg) == 'object'){
        Dialog.confirm({
          title:'提示',
          message: msg.info,
          confirmButtonText: "去投注",
          theme: index? "round-button round-button-2":"round-button round-button-1",
          confirmButtonColor: "#576B95",
        })
        .then(() => {
          // on confirm
          this.tobet();
        })
        .catch(() => {
          // on cancel
        });
        }else {
          this.openPCHandle("openDialog", { msg: msg });
        }
      }else{
        this.openPCHandle("openDialog", { msg: '提交成功，祝您好运哦！' });
        this.finished = false;
        this.page = 1;
        let { data1 = [], message: msg3 } = await this.gameGuessQuiz()
          if(msg3) {
            this.openPCHandle("openDialog", { msg: msg3});
          } else {
              this.record = data1.data
              if (this.record.length == data1.total) {
              this.finished = true; 
              }else{
                this.page += 1;
              }
          }
      }
      this.$loading.hide();
    },
    swiperClick(index) {
      this.showImg = true
      this.bigimgSrc = this.imgSrc + this.honorList[index].answer_img
    },
    reverseStrings(strs) {
      return strs.split("").sort().reverse().join("");
    },
    nextTap() {
      this.$refs.swiper.next()
    },
    prevTap() {
      this.$refs.swiper.prev()
    },
    async getHistory(){
      let { data2 = [], message: msg1 } = await this.gameGuessHis();
      if(msg1) {
      Toast(msg1)
      }else {
        this.honor = data2
        this.swipeIndex = (this.honorList.length - 1)
        this.honorList = [...this.honorList, ...data2.data] 
      }
    },
    onChange(index) {
      console.log(index)
      if((index - (this.honorList.length - 1)) == 0 && this.honorList.length !== this.honor.total){
        this.hispage +=1;
        this.getHistory()   
      }
      if(this.honorList[index]){
        this.$nextTick(() => {
          this.awayText = this.honorList[index].match.away_team
          this.homeText = this.honorList[index].match.home_team
        }) 
      } 
      this.current = index
    },
    scroll () {
      let con1 = this.$refs.con1
      con1.style.marginTop = '-0.41rem'
      this.animate = !this.animate
      var that = this // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
      setTimeout(function () {
        that.arr.push(that.arr[0])
        that.arr.shift()
        con1.style.marginTop = '0px'
        that.animate = !that.animate // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
      }, 500)
    },
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      }
      window.parent.postMessage(info, "*");
    },
    isLogin() {
      return this.$store.state.h5Token.token == undefined;
    },
    toLogin() {
      this.openPCHandle("openRecharge");
    },
    prizeName(status) {
      if(status === 1) {
        return "待开奖"
      }
      if(status === -1) {
        return "未中奖"
      }
      if(status === 2) {
        return "已中奖"
      }
    },
    keyArrCount(recordItem, quesIndex){
      let keyarr = Object.keys(recordItem.selecteds)
      return recordItem.selecteds[keyarr[quesIndex]]
    },
    activeClick(num, i, index, ques , key) {
      if(this.tabActive == num && this.idActive == index*2 + i) {
          this.tabActive = null
          this.idActive = null
          delete this.selecteds1[ques.id]
          return 
      }
      if(this.tabActive1 == num && this.idActive1 == index*2 + i) {
          this.tabActive1 = null
          this.idActive1 = null
          delete this.selecteds1[ques.id]
          return 
      }
      if(this.tabActive2 == num && this.idActive2 == index*2 + i) {
          this.tabActive2 = null
          this.idActive2 = null
          delete this.selecteds2[ques.id]
          return 
      }
      if(this.tabActive3 == num && this.idActive3 == index*2 + i) {
          this.tabActive3 = null
          this.idActive3 = null
          delete this.selecteds2[ques.id]
          return 
      }
      
      if(index == 0) {
        if(i == 0) {
          this.tabActive = num
          this.idActive = 0
          this.selecteds1[ques.id] = key
          console.log(this.tabActive, this.idActive, this.selecteds1,'1')
        }else{
          this.tabActive1 = num
          this.idActive1 = 1
          this.selecteds1[ques.id] = key
          console.log(this.tabActive1, this.idActive1, this.selecteds1,'2')
        }
      }else{
        if(i == 0) {
          this.tabActive2 = num
          this.idActive2 = 2
          this.selecteds2[ques.id] = key
          console.log(this.tabActive2, this.idActive2, this.selecteds2, '3')
        }else{
          this.tabActive3 = num
          this.idActive3 = 3
          this.selecteds2[ques.id] = key
          console.log(this.tabActive3, this.idActive3, this.selecteds2, '4')
        }
      }
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
    gameGuessList() { //活动列表
      let sendData = {
        productId: this.$store.state.appInfo.productId
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
        .post(this.$api.gametive.gameGuessList, sendData, {
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
    gameGuessHis() { //历史活动记录
      let sendData = {
        page: this.hispage,
        pagesize: this.hispagesize
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
        .post(this.$api.gametive.gameGuessHis, sendData, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            return { data2: body };
          } else {
            return { message: head.errMsg };
          }
        })
        .catch((err) => {
          return { message: "获取数据失败" };
        });
    },
    gameGuessPrize() { //中奖列表
      let sendData = {
        page: this.pripage,
        pagesize: this.pripagesize
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
        .post(this.$api.gametive.gameGuessPrize, sendData, {
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
    gameGuessQuiz() { //我的竞猜
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
        .post(this.$api.gametive.gameGuessQuiz, sendData, {
          headers,
        })
        .then((data) => {
          let { head, body } = data.data;
          if (head.errCode == 200) {
            return { data1: body };
          } else {
            return { message: head.errMsg };
          }
        })
        .catch((err) => {
          return { message: "获取数据失败" };
        });
    },
    gameGuessApply(item, index) { //提交用户竞猜接口
      let selecteds = {}
      if(index == 0){
        selecteds = this.selecteds1
      }else{
        selecteds = this.selecteds2
      }
      let sendData = {
        productId: this.$store.state.appInfo.productId,
        matchId: item.id,
        selecteds: selecteds
      };
      
      if (this.loginStatus) {
        sendData.loginName = this.loginName;
        sendData.page = 1;
        sendData.pagesize = 20;
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
        .post(this.$api.gametive.gameGuessApply, sendData, {
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
      
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/normaliz.scss";
$count: 99.9422423;
html {
  font-size: 4.995222222vw;
  @media screen and (max-width: 1200px) {
    font-size: 59.9422423px;
    body {
      min-width: 1200px;
      margin: 0 auto;
      font-family: PingFangSC-Medium;
    }
  }
}
.active-swiper {
    display: flex;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
  .van-swipe {
    width: 900/$count+rem;
    height: 434/$count+rem;
    margin: 0 auto;
    img {
      width: 900/$count+rem;
      height: 434/$count+rem;
    }
  }
  .van-swipe__track {
    width: 900/$count+rem;
    height: 434/$count+rem;
    margin: 0 auto;
  }
  .arrow-prev {
    width: 70/$count+rem;
    height: 70/$count+rem;
    background: url(../../assets/img/gametive/lelf.png);
    background-size: 100%;
    position: relative;
    left: 6/$count+rem;
    cursor: pointer;
  }
  .arrow-next {
    width: 70/$count+rem;
    height: 70/$count+rem;
    background: url(../../assets/img/gametive/right.png);
    background-size: 100%;
    position: relative;
    right: 6/$count+rem;
    cursor: pointer;
  }
  .van-swipe__indicators {
    display: none;
  }
}
.anim {
  transition: all 0.5s;
}
.datanone-main {
  width: 500/$count+rem;
  height: 500/$count+rem;
  margin: 0 auto;
  background-image: url("../../assets/img/gametive/qxt_h5.png");
  background-size: 100%;
}
.recordnone-main {
  width: 500/$count+rem;
  height: 500/$count+rem;
  margin: 0 auto;
  background-image: url("../../assets/img/gametive/wjl_pc.png");
  background-size: 100%;
}
.white-line{
  width: 1000/$count+rem;
  height: 20/$count+rem;
  background: #fff;
  margin: 0 auto;
}
.main-title {
    width: 458/$count+rem;
    height: 36/$count+rem;
    font-size: 36/$count+rem;
    color: #7984A8;
    letter-spacing: 0;
    text-align: center;
    line-height: 36/$count+rem;
    font-weight: bolder;
    margin: 0 auto;
    margin-top: 30/$count+rem;
}
.van-dialog {
    width: 440/$count+rem;
    height: 240/$count+rem;
    top: 13%;
    .van-dialog__header {
      padding-top: 0;
      background-image: linear-gradient(
      90deg
      , #5EC580 3%, #89D288 96%);
      line-height: 48/$count+rem;
      text-align: center;
      font-size: 20/$count+rem;
      color: #FFFFFF;
    }
}
.van-dialog--round-button{
    .van-dialog__message{
      width: 100%;
      margin: 0 auto;
      color: #323233;
      font-family: PingFangSC-Medium;
      color: #383333;
      letter-spacing: 0;
      font-weight: 500;
      font-size: 18/$count+rem;
      text-align: center;
      padding: 0;
      overflow: hidden;
      height: 120/$count+rem;
      line-height: 120/$count+rem;
    }
}
.van-dialog__footer {
    justify-content: center;
    position: relative;
    height: auto;
    padding: 8/$count+rem 24/$count+rem 16/$count+rem;
    .van-dialog__cancel {
          width: 140/$count+rem !important;
          height: 41/$count+rem;
          border: 1/$count+rem solid #DADADA;
          border-radius: 20.5/$count+rem;
          background: #fff;
          box-sizing: border-box;
          flex: none;
          margin-right: 28/$count+rem;
          color: #777778;
    }
    .van-dialog__confirm {
            color: white !important;
            border-color: #5ec580 !important;
            width: 140/$count+rem !important;
            height: 41/$count+rem;
            border: 1/$count+rem solid #DADADA;
            border-radius: 20.5/$count+rem;
            background: #fff;
            box-sizing: border-box;
            padding: 0;
            margin: 0;
            flex: none;
            background-image: linear-gradient(
        90deg
        , #89D288 4%, #89D288 95%) !important;
        &:before{
          border-color: #5ec580 !important;
        }
    }
}
.van-dialog__header {
    display: flex;
    justify-content: center;
  &::before{
      content: "";
      width: 20/$count+rem;
      height: 20/$count+rem;
      display: block;
      position: relative;
      top: 14/$count+rem;
      margin-right: 8/$count+rem;
      background: url("../../assets/img/gametive/ts_icon.png");
      background-size: 100%;
  }
}
.van-hairline--top{
  &::after{
      border-top-width: 0px !important;
  } 
}
.round-button-2 {
    top: 46% !important;
}
.round-button-1 {
    top: 28% !important;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
#loading-wrapper {
  justify-content: flex-start !important;
  .loading-juhua {
    top: 30%;
    position: relative;
  }
  .text {
    top: 30%;
    position: relative;
  }
}
</style>
<style lang="scss" scoped>
@import "./pc.scss";
</style>