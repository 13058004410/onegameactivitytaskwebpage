<template>
  <div class="content">
    <div class="match-list">
        <div class="list-title">
            <div :class="[tab? 'title-one':'title-one-click']" @click="changeTab(true)">赛事竞猜</div>
            <div :class="[tab? 'title-two':'title-two-click']" @click="changeTab(false)">我的竞猜</div>
        </div>
        <div class="datanone-main" v-if="(data.length == 0 && tab)"></div>
        <div class="recordnone-main" v-if="(record.length == 0 && !tab)"></div>
        <div class="list-main" v-if="tab && data.length !== 0" v-for="(item, index) in data" :key="index">
            <div class="white-line" v-if="index == 1"></div>
            <div class="main-title" v-if="index == 0 && data.length == 2">竞猜赛事一</div>
            <div class="main-title" v-if="index == 1 && data.length == 2">竞猜赛事二</div>
            <div class="main-time">
              <p>本场赛事竞猜时间截至:{{data[index].end_time}}</p>
          </div>
            <div class="main-img">
                <div>
                    <VanImage
                    :width="46 / 16 + 'rem'"
                    :height="46 / 16 + 'rem'"
                    round
                    fit="fill"
                    :src="imgSrc + item.home_logo"
                    class="img"
                    />
                    <div class="team-name">
                    <p>{{item.home_team}}</p>
                    </div>
                </div>
                <div class="mide">
                    <p class="team-match">{{item.league_name}}</p>
                    <span>VS</span>
                    <p class="team-time">{{item.match_time}}</p>
                </div>
                <div>
                    <VanImage
                    :width="46 / 16 + 'rem'"
                    :height="45 / 16 + 'rem'"
                    round
                    fit="fill"
                    :src="imgSrc + item.away_logo"
                    class="img"
                    />
                    <div class="team-name">
                    <p>{{item.away_team}}</p>
                    </div>
                </div>
            </div>
            <div class="main-ques" v-for="(ques, i) in item.problem" :key="i">
                <span class="ques-title">{{i + 1}}.{{ques.title}}</span>
                <div class="ques-list">
                    <div :class="[{acive: tabActive == num && idActive == index*2 + i}, 
                    {acive1: tabActive1 == num && idActive1 == index*2 + i}, 
                    {acive2: tabActive2 == num && idActive2 == index*2 + i}, 
                    {acive3: tabActive3 == num && idActive3 == index*2 + i}, 'ques-item']" 
                    v-for="(options, key, num) in ques.option" :key="num"
                    @click="activeClick(num, i, index, ques, key)"><span>{{key}}.{{options}}</span></div>
                </div>
            </div>
            <div class="ques-submit" @click="submit(item, index)"></div>
        </div>
        
        <div class="record-main" v-if="!tab && record.length !== 0">
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
                {{prizeName(recordItem.status)}}</div>
            </div>
            <div class="ques-content">
              <div class="record-team">
                <span class="home-team">{{recordItem.match.home_team}}</span>
                <span class="vs">VS</span>
                <span class="away-team">{{recordItem.match.away_team}}</span>
              </div>
              <div class="record-ques" v-for="(quesItem, quesIndex) in recordItem.problem" :key = "quesIndex">
                <span class="record-ques-item">{{quesIndex + 1}}.{{quesItem.title}}</span>
                <span class="record-answer">{{keyArrCount(recordItem, quesIndex)}}.{{quesItem.option[keyArrCount(recordItem, quesIndex)]}}</span>
              </div>
            </div>
          </div>
          </List>
        </div>
    </div>
    
    <div class="active-content">
        <div class="active-title"></div>
        <div class="active-word">
            <p>关注ONE体育赞助赛事，场场瓜分现金红包！指定比赛开赛日前3日每累计有效投注额 <span class="orange">2888CNY/413USDT</span>，即可参与1场指定赛事竞猜。猜中每场2个问题，即可参与平分奖池，奖池红利需完成1倍体育厅流水即可取款！每一场竞猜奖池基础红利为<span class="orange">5000CNY</span>
            ，比赛每增加 1 个进球奖池红利<span class="orange">+1000 CNY</span>。
            </p>
        </div>
    </div>
    <div class="lunbo-centent">
        <div class="lunbo-title"></div>
        <div class="lunbo-team">
            <span>{{homeText}}</span> VS <span>{{awayText}}</span>
          </div>
        <div class="lunbo-swiper">
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
        </div>   
        <BigImg
        v-if="showImg"
        @clickit="viewImg"
        :bigimgSrc="bigimgSrc"
      ></BigImg>   
    </div>
    
    <div class="prize-content">
        <div class="prize-title"></div>
        <div class="prize-list">
          <div class="mgt20">
              <span>会员账号</span>
              <span>竞猜赛事</span>
              <span>红利</span>
          </div>
          <div id="box">
            <div id="con1" ref="con1" :class="[{anim:animate==true}, 'table-body']">
                <div class="table-tr" v-for="(item, index) in arr" :key="index">
                  <span>{{item.loginname}}</span>
                  <span>{{item.match_team}}</span>
                  <span>￥{{item.prize}}</span>
                </div>
            </div> 
          </div>
        </div>
        <div class="prize-word">
          <p>注意事项：指定比赛开赛日前3日内每累计<span class="orange">2888CNY/413USDT</span>体育厅有效投注额可参与一场比赛竞猜，已参与过活动的有效投注额不可重复参与活动。例：第一场指定赛事8月15日凌晨04:00阿拉维斯VS皇家马德里，第二场指定赛事8月15日23:30维戈塞尔塔VS马德里竞技。</p>
          <p>ONE体育会员A，在8月12日至8月14日三日累计有效投注额为5000元，会员A只可参与第一场竞猜活动，不满足参与第二场竞猜活动条件。</p>
        </div>
        <div class="rules-content">
          <div class="rules-title"></div>
          <div class="rules-word">
              <p>1.本活动参与前置有效投注额只计算指定赛事开赛日<span class="orange">前3日内</span>体育厅的累计有效投注，其它游戏厅一律不计算。每一期的竞猜答案会在赛事结束后的<span class="orange">24小时</span>内公布，且系统会在公布答案后自动派发红利。中奖红利统一派发CNY到中奖会员CNY账户中。<span class="orange">注：活动答案以ONE体育公布的截图为准。</span></p>
              <p>2.如出现不可预见的原因，指定竞猜赛事在开始竞猜后突发改期、取消等情况，则无法保留该次赛事参与会员的竞猜结果。</p>
              <p>3.本活动与洗码优惠及其他任意存送活动共享。</p>
              <p>4.本活动红利需完成<span class="orange">1倍</span>流水即可出款，仅限体育厅。</p>
              <p>5.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
              <p>6.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
          </div>
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
import { UA } from '@/util/ua'
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
    honor:{},
    honorList:[],
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
    website: false,
    flag: true,
    ticketApp: false
    }
  },
  computed: {
    h5TokenStore() {
      return this.$store.state.h5Token;
    }
  },
  mounted () {

  },
  watch: {
    h5TokenStore: async function () {
      this.$loading.show({
        text: "Loading",
      });
      let { data, message: msg } = await this.gameGuessList();
      if (msg) {
        Toast(msg);
      } else {
        this.page = 1;
        this.finished = false;
        this.onLoad();
        this.data = data;
      }
      this.$loading.hide();
    },
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
      let { data = [], message: msg } = await this.gameGuessList();
      if(msg) {
      // Toast(msg)
      } else {

      }
      this.imgSrc = imgSrc
      this.data = data
      if(this.data == 0){
        Dialog.alert({
          message: '暂无活动赛事，敬请期待！',
          confirmButtonText: "我知道了"
        }).then(() => {
          // on close
        });
      }
    }
    let { data2 = [], message: msg1 } = await this.gameGuessHis();
    if(msg1) {
    // Toast(msg1)
    }else {
      this.honor = data2
      this.honorList = data2.data
      if(this.honorList[0]){
        this.onChange(0)
      }
    }
    let { data = [], message: msg2 } = await this.gameGuessPrize()
    if(msg2) {
      // Toast(msg2)
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
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      }
      window.parent.postMessage(info, "*");
    },
    submit(item, index){
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
      // if (
      //   new Date().getTime() >
      //   new Date(this.data[index].end_time.replace(/-/g, "/")).getTime()
      // ) {
      //   Toast("活动已结束");
      //   return;
      // }
      if(index == 0) {
        if(Object.keys(this.selecteds1).length < 2 ) {
          Toast('请选择所有问题的答案')
          return
        }
      }
      if(index == 1) {
        if(Object.keys(this.selecteds2).length < 2 ) {
          Toast('请选择所有问题的答案')
          return
        }
      }
      this.bet(item, index)
    },
    tobet(){
      if(this.website){
        this.openPCHandle("openIndex");
      }else {
        window.location = 'nbapp://finishPage?data={}'
      }
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
      this.website = true
      this.loginStatus = data.loginStatus;
      this.token = data.token;
      this.loginName = data.loginName;
      this.u2token = data.u2token;
    },
    async bet(item, index) {
      this.$loading.show({
      text: "Loading",
      });
      let { data = [], message: msg } = await this.gameGuessApply(item, index);
      if(msg) {
        if(typeof(msg) == 'object'){
          Dialog.confirm({
          message: msg.info,
          confirmButtonText: "去投注",
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
          Toast(msg)
        } 
      }else{
        Toast('提交成功，祝您好运哦！')
        this.finished = false;
        this.page = 1;
        let { data1 = [], message: msg3 } = await this.gameGuessQuiz()
          if(msg3) {
            Toast(msg3)
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
    changeTab(e){
      if(this.tab == true && this.isLogin() && !this.loginStatus) {
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
        return
      }
      this.tab = e
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
      // if (data1.data.length < 20) {
      //   this.finished = true; 
      // }
      this.record = [...this.record, ...data1.data];
      if (this.record.length == data1.total) {
        this.finished = true; 
      }
      this.loading = false;
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
      con1.style.marginTop = '-40px'
      this.animate = !this.animate
      var that = this // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
      setTimeout(function () {
        that.arr.push(that.arr[0])
        that.arr.shift()
        con1.style.marginTop = '0px'
        that.animate = !that.animate // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
      }, 500)
    },
    isLogin() {
      return this.$store.state.h5Token.token == undefined;
    },
    toLogin() {  
      if(this.website){
        this.openPCHandle("openRecharge");
      }else {
        window.location = "nbapp://openLoginPage?data={}";
      }
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
    gameGuessList() { //活动列表
      let h5Token = this.$store.state.h5Token;
      let sendData = {
        productId: this.$store.state.appInfo.productId,
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
      let h5Token = this.$store.state.h5Token;
      let sendData = {
        page: this.hispage,
        pagesize: this.hispagesize
      };
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
      // if (h5Token.token != undefined) {
      //   headers.token = h5Token.token;
      //   headers.deviceId = h5Token.deviceId;
      // }
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
      let h5Token = this.$store.state.h5Token;
      let sendData = {
        page: this.pripage,
        pagesize: this.pripagesize
      };
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
      let h5Token = this.$store.state.h5Token;
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
      if (h5Token.token != undefined) {
        sendData.loginName = this.$store.state.appInfo.loginName;
        sendData.page = 1;
        sendData.pagesize = 20;
      }
      if (this.loginStatus) {
        sendData.loginName = this.loginName;
        sendData.page = 1;
        sendData.pagesize = 20;
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
@import "@/assets/css/screen750.scss";
@import "@/assets/css/normaliz.scss";
body {
  overflow: hidden;
  font-family: PingFangSC-Medium;
  color: #7984A8;
  font-weight: 500;
}
body > div:first-child {
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
}
.white-line {
    height: (10/16) + rem;
    background: #fff;
    margin-bottom: (20/16) + rem;
}
.lunbo-swiper {
  .van-swipe {
    width: (285/16) + rem;
    height: (140/16) + rem;
    margin: 0 auto;
  }
  .van-swipe__track {
    width: (285/16) + rem;
    height: (140/16) + rem;
    margin: 0 auto;
  }
  .arrow-prev {
    width: (30/16) + rem;
    height: (30/16) + rem;
    background: url(../../assets/img/gametive/lelf_h5.png);
    background-size: 100%;
    position: relative;
    left: (6/16) + rem;
  }
  .arrow-next {
    width: (30/16) + rem;
    height: (30/16) + rem;
    background: url(../../assets/img/gametive/right_h5.png);
    background-size: 100%;
    position: relative;
    right: (6/16) + rem;
  }
  .van-swipe__indicators {
    display: none;
  }
}
.lunbo-centent {
  position: relative;
}
.anim {
  transition: all 0.5s;
}
.van-dialog__message {
  font-size: (16/16) + rem;
  color: #333333;
  text-align: center;
  font-weight: normal;
}
.van-swipe-item {
  .img{
    width: (285/16) + rem;
    height: (140/16) + rem;
  }
}
.van-dialog{
    font-weight: normal;
}
.van-button__text {
    font-size: 18px;
    color: #7984A8;
    font-weight: 500;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.orange{
  color: #f7a722;
}
</style>
<style lang="scss" scoped>
@import "./h5.scss";
</style>