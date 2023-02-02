<template>
  <div class="container pdb50" ref="main">
    <div :class="[{'this-week-box': activeInd == 1}, {'un-login': !loginStatus}, 'item-box discount-box']" >
      <div class="img-t">
        <img :src="require('@/assets/img/washCode/xmyh_bt.png')" alt="" />
      </div>
      <div class="status-bg" :class="{ usdt: usdt }" v-if="loginStatus">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <p>当前为{{ usdt ? "USDT" : "RMB" }}账户钱包</p>
      </div>
      <div class="no-login" v-if="!loginStatus">
      </div>
      <div class="but-nav">
        <div
          v-for="(item, index) in tabTitle"
          :key="index"
          :class="{ active: activeInd === index }"
          @click="tabChange(index)"
        >
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div class="unlogin" v-if="!loginStatus">
        <div><img :src="require('@/assets/img/washCode/pc/wdl_icon_pc.png')" alt=""></div>
          <p>检测到您当前未登录，请<span @click="toLogin()">登录</span>后查看</p>
      </div>
      <div class="content_wrapper" v-if="loginStatus">
        <!-- 昨天-------------------------------------------------- -->
        <div class="last-week" v-if="activeInd == 0">
          <p>
            结算周期：{{
              `${tabContent[0].yesToday}`
            }}
          </p>
          <!-- <p>
            结算周期：{{
              `${tabContent[0].beginDate.split(" ")[0]} - ${
                tabContent[0].endDate.split(" ")[0]
              }`
            }}
          </p> -->
          <div class="flexItem">
            <div>
              <div>
                <span>当日洗码下注额</span>
                <span v-if="washCodeList.length>0">{{ currencySymbol }}{{ washCodeList[washCodeList.length-1].amount }}</span>
                <span v-else>{{ currencySymbol }}{{ 0.00 }}</span>
                <!-- <span>{{ currencySymbol }}{{ tabContent[0].betCount }}</span> -->
              </div>
            </div>
            <div>
              <div>
                <span>预计派发礼金</span>
                <span v-if="historyList.length>0">{{ currencySymbol }}{{ historyList[0].giftCount }}</span>
                <span v-else>{{ currencySymbol }}{{ 0.00 }}</span>
                <!-- <span>{{ currencySymbol }}{{ tabContent[0].giftCount }}</span> -->
              </div>
            </div>
            <div>
              <div>
                <span>派发状态</span>
                <!-- <span
                  >{{
                    tabContent[0].status === 1 ? "待派发" : "已领取"
                  }}礼金</span
                > -->
                <span
                  >{{
                    tabContent[0].status === 1 ? "待派发" : "已派发"
                  }}</span
                >
              </div>
            </div>
          </div>
          <div><span @click="openModal(0)"><img class="eachDayBetAmount" :src="require('@/assets/img/washCode_1/btn_pc.png')" alt=""></span></div>
        </div>
        <!-- 今天----------------------------------------------- -->
        <div class="this-week" v-else>
          <p>
            结算周期：{{
              `${tabContent[1].today}`
            }}
          </p>
          <div class="flexItem">
            <div>
              <div>
                <span>当日洗码下注额</span>
                <span v-if="washCodeList.length>0">{{ currencySymbol }}{{ washCodeList[washCodeList.length-1].amount }}</span>
                <span v-else>{{ currencySymbol }}{{ 0.00 }}</span>
                <!-- <span>{{ currencySymbol }}{{ tabContent[1].betCount }}</span> -->
              </div>
            </div>
            <div>
              <div>
                <span>预计派发礼金</span>
                <span v-if="historyList.length>0">{{ currencySymbol }}{{ historyList[0].amountGift }}</span>
                <span v-else>{{ currencySymbol }}{{ 0.00 }}</span>
                <!-- <span>{{ currencySymbol }}{{ tabContent[1].giftCount }}</span> -->
              </div>
            </div>
            <div>
              <div>
                <span>派发状态</span>
                <span
                  >{{
                    tabContent[1].status === 1 ? "待派发" : "已派发"
                  }}</span
                >
              </div>
            </div>
          </div>
          <!-- <div><span @click="openModal(1)">(查看每日下注金额)</span></div> -->
          <!-- <div class="receive">
            <button
              :class="[tabContent[1].giftCount > 1 ? 'active' : ' ']"
              @click="getCreateRequest"
            ></button>
          </div> -->
          <div><span @click="openModal(1)"><img class="eachDayBetAmount" :src="require('@/assets/img/washCode_1/btn_pc.png')" alt=""></span></div>
        </div>
      </div>
    </div>
    <div class="item-box collection-record-box mgt50" v-if="loginStatus">
      <div class="img-t">
        <img :src="require('@/assets/img/washCode/pc/lqjl.png')" alt="" />
      </div>
      <div class="record-box">
        <div class="head">
          <div>日期</div>
          <div>洗码下注记录</div>
          <div>洗码礼金</div>
          <div>领取状态</div>
        </div>
        <div class="body" :class="{ empty: historyList.length < 1 }">
          <div v-if="historyList.length < 1">
            <Empty
              class="custom-image"
              image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
              description="暂无记录"
            />
          </div>
          <div v-for="(item, index) in historyList" :key="index" v-else>
            <div>{{ `${item.date} ${item.time}` }}</div>
            <div>{{ currencySymbol }}{{ item.amountBet }}</div>
            <div>{{ currencySymbol }}{{ item.amountGift }}</div>
            <div>{{ item.flag !== 2 ? item.flagDesc : "已领取" }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item-box rule-box mgt50">
      <div class="img-t">
        <img :src="require('@/assets/img/washCode/pc/hdgz.png')" alt="" />
      </div>
      <div class="rule-body">
        <h5>规则说明：</h5>
        <div class="txt">
          <p>
            1. 洗码礼金{{
              usdt ? "≥1USDT" : "≥¥1"
            }}可派发至会员账户，洗码礼金无上限，可随时申请提款;
          </p>
          <p>
            2.
            体育投注洗码有效投注额，统计周期为北京时间前一天的0:00至今天的0:00，ONE体育各厅皆独立计算有效投注额；
          </p>
          <p>
            3.系统自动添加周洗码时间为：当日12:00之前结算完毕，并添加昨日对应会员VIP等级洗码礼金到会员账号；
          </p>
          <p>
            4.
            有效投注是指有输赢结果的投注额累积，所有退还本金的投注或无风险的投注皆不能结算为有效投注，体育厅中对打投注，欧洲赔率≤1.5及是取消赛事注单接不计算有效投注。以诈欺手段获得码，将会永久冻结账号且没收所有资金；
          </p>
          <p>5. 本优惠自2023年1月份开始执行；</p>
        </div>
        <h5>规则说明：</h5>
        <p>会员等级：可参考我【个人中心】→【游戏账号】→【VIP等级】</p>
        <p>为秉承公平公正的原则，电子游艺特惠游戏不享受洗码优惠，例如：各种桌面游戏、卡片游戏、视频扑克等</p>
        <div class="table"></div>
      </div>
    </div>
    <!-- Modal 每日下注额 -->
    <div class="modal-wrapper" v-if="showModal">
      <div class="modal-main">
        <div class="modal-box vivify fadeInTop duration-300">
          <div class="modal-head">
            {{ tabTitle[activeInd].title }}每日下注金额
            <Icon
              name="cross"
              :size="24 / 59.9422423 + 'rem'"
              @click="closeModal"
            />
          </div>
          <div class="modal-body">
            <div class="modal-table">
              <div class="table-head">
                <div class="table-item">
                  <div>
                    <Icon name="notes-o" :size="17 / 59.9422423 + 'rem'" />
                    <span>下注日期</span>
                  </div>
                  <div>
                    <Icon name="balance-o" :size="17 / 59.9422423 + 'rem'" />
                    <span>下注金额</span>
                  </div>
                </div>
              </div>
              <div class="table-body">
                <div
                  class="table-item"
                  v-for="(item, index) in washCodeList"
                  :key="index"
                >
                  <div class="left-item">
                    <span>{{ item.time }}</span>
                  </div>
                  <div class="right-item">
                    <span
                      >{{ currencySymbol }}{{ item.amount.toFixed(2) }}</span
                    >
                  </div>
                </div>
              </div>
              <div class="table-foot">
                <div class="table-item">
                  <div class="left-item">
                    <span>总计</span>
                  </div>
                  <div class="right-item">
                    <span
                      >{{ currencySymbol }}{{ totleAmount.toFixed(2) }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal 领取成功 -->
    <div class="modal-wrapper" v-if="showGetModal">
      <div class="modal-main">
        <div class="modal-box vivify box-gift">
          <div class="head">
            <Icon name="warning" :size="15 / 59.9422423 + 'rem'" />
            <span> 提示</span>
            <Icon
              name="cross"
              class="close"
              :size="18 / 59.9422423 + 'rem'"
              @click="showGetModal = false"
            />
          </div>
          <div class="modal-body">
            <p>恭喜您！领取成功~</p>
            <button @click="showGetModal = false">知道了</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getTodayDate,
  getYestodayDate,
  getCurDate,
  getWeekStartDate,
  getLastWeekStartDate,
  getLastWeekEndDate,
  rando,
  reverseStrings,
} from "../../assets/js/tools";
import axios from "axios";
import { mapActions, mapMutations, mapState } from "vuex";
import { Icon, Empty } from "vant";
import md5 from "js-md5";
let Base64 = require("js-base64").Base64;
export default {
  components: {
    Icon,
    Empty,
  },
  data() {
    return {
      // loginName:'',
      usdt: false,
      loginStatus: true,
      activeInd: 1,
      showModal: false,
      showGetModal: false,
      tabTitle: [
        {
          title: "昨天",
        },
        {
          title: "今天",
        },
      ], // 标题
      tabContent: [
        {
          yesToday: getYestodayDate(),
          today: getTodayDate(),
          beginDate: getLastWeekStartDate(),
          endDate: getLastWeekEndDate(),
          betCount: "0.00",
          giftCount: "0.00",
          status: 0,
        }, // 上周
        {
          yesToday: getYestodayDate(),
          today: getTodayDate(),
          beginDate: getWeekStartDate(),
          endDate: getCurDate(),
          betCount: "0.00",
          giftCount: "0.00",
          status: 1,
          xmList: [],
        }, // 本周
      ], // 内容
      // tabContent: [
      //   {
      //     beginDate: getLastWeekStartDate(),
      //     endDate: getLastWeekEndDate(),
      //     betCount: "0.00",
      //     giftCount: "0.00",
      //     status: 0,
      //   }, // 上周
      //   {
      //     beginDate: getWeekStartDate(),
      //     endDate: getCurDate(),
      //     betCount: "0.00",
      //     giftCount: "0.00",
      //     status: 1,
      //     xmList: [],
      //   }, // 本周
      // ], // 内容
      historyListCur: [], // 本周所有领取记录数组
      historyListPre: [], // 上周所有领取记录数组
      totleAmount: 0.0,
      washCodeList: [],
    };
  },
  computed: {
    // ...mapState(['appInfo']),
    h5TokenStore() {
      return this.$store.state.h5Token;
    },
    historyList() {
      if (this.activeInd === 0) {
        return this.historyListPre;
      } else {
        return this.historyListCur;
      }
    },
    noDataShow() {
      let flag = this.historyList.length > 0 ? false : true;
      return flag;
    },
    historyListShow() {
      let that = this;
      if (that.historyList.length > 0) {
        return that.historyList.slice(0, 2);
      } else {
        return [];
      }
    },
    currencySymbol() {
      if (this.usdt) {
        return "T";
      }
      return "¥";
    },
  },
  updated (){
    
  },
  mounted() {
    this.openPCHandle("reloadPageSize", {
      height: this.$refs.main.clientHeight,
    });
    setTimeout(() => {
      this.getCreateRequest();
      this.loadWashCodeList()
    }, 2000);
  },
  destroyed(){
    window.removeEventListener("message",this.onMessage)
  },
  created() {
    window.addEventListener("message", this.onMessage);
    this.openPCHandle("sendDataIframe");
  },
  methods: {
    ...mapActions(["AWebToken", "AH5Token"]),
    ...mapMutations({
      setAppinfoTickt: "SET_APPINFO_TICKET",
      setAppinfoLoginName: "SET_APPINFO_LOGINNAME",
    }),
    onMessage(event){
      console.log("子iframe监听事件名字", event);
      let funcs = {
        loadTicket: this.loadTicket,
      };
      // console.log("子iframe监听事件名字", event.data.message);
      let func = funcs[event.data.message];
      if (func) {
        func(event.data);
      } else {
        console.log("点击监听测试");
      }
    },
    loadWashCodeList() {
      if (this.isLogin()) {
        this.toLogin();
        return;
      }
      let that = this;
      if ( that.activeInd===0 ) {
        that.getWashCodeList(that.activeInd)
      } else {
        that.getWashCodeList(that.activeInd)
      }
    },
    // 查询洗码提案列表
    async getHistoryList(type = 2) {
      console.log('我被调用了')
      let productId = this.$store.state.appInfo.productId;
      let loginName = this.loginName;
      let beginDateTime =
        type === 2 ? getYestodayDate() : getTodayDate();  //type === 2是昨天
        // type === 2 ? getLastWeekStartDate() : getWeekStartDate();
      let beginDate = beginDateTime + " 00:00:00";
      let endDateTime = type === 2 ? getYestodayDate() : getTodayDate();
      // let endDateTime = type === 2 ? getLastWeekEndDate() : getCurDate();
      let endDate = 2 ? endDateTime + " 23:59:59" : endDateTime;
      
      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = "zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9";
      let sendData = {
        beginDate,
        endDate,
        productId,
        loginName,
      };
      let sendDataString = JSON.stringify(sendData);
      let sign = md5(
        reverseStrings(sendDataString) +
          qid +
          appId +
          v +
          this.token +
          this.u2token
      );
      return await axios
        .post(this.$api.washCode.queryRequest, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            sign,
            token: this.token,
          },
        })
        .then((res) => {
          console.log("查询洗码提案列表", res);
          let that = this;
          if (res.data.body) {
            if (res.data.body.data && res.data.body.data.length > 0) {
              let historyData = res.data.body.data;
              for (const item of historyData) {
                let list = {
                  date: item.createDate.split(" ")[0],
                  time: item.createDate.split(" ")[1],
                  amountGift: parseFloat(item.amount) || "0.00",
                  rate: parseFloat(item.rate) || 1,
                  amountBet: parseFloat(item.bettingAmount) || "0.00",
                  flag: item.flag,
                  flagDesc: item.flagDesc,
                };
                if (type === 2) {
                  that.historyListPre.push(list);
                } else {
                  that.historyListCur.push(list);
                }
              }
            }
          }
        });
    },
    // 获取上一周洗码优惠接口
    async getWashCodeInfoPre(type = 2) {
      let productId = this.$store.state.appInfo.productId;
      let loginName = this.loginName;

      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = 1;
      if (!isAndroid) {
        platform = 2;
      }
      let domainName = this.$store.state.appInfo.domainName;
      let deviceId = this.$store.state.appInfo.deviceId;
      let appId = "zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9";
      let sendData = {
        type,
        loginName,
        productId,
      };
      let sendDataString = JSON.stringify(sendData);
      let sign = md5(
        reverseStrings(sendDataString) +
          qid +
          appId +
          v +
          this.token +
          this.u2token
      );
      return await axios
        .post(this.$api.washCode.userBetList, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            // sign,
            token: this.token,
            platform,
            domainName,
            deviceId,
          },
        })
        .then((res) => {
          console.log("上周洗码数据", res);
          let that = this;
          // let betCountRes = res.data.body.data ? res.data.body.data[0].amount : '0.00'
          // let rateRes = res.data.body.data ? res.data.body.data[0].rate : '1'
          // let giftCountRes = (parseFloat(betCountRes) * parseFloat(rateRes)).toFixed(2)
          if (res.data.body) {
            if (type === 2) {
              let betCountRes = res.data.body.extra.sumBetAmount || "0.00";
              let giftCountRes = res.data.body.extra.sumAmount || "0.00";
              that.tabContent[0].betCount = parseFloat(betCountRes).toFixed(2);
              that.tabContent[0].giftCount = parseFloat(giftCountRes).toFixed(
                2
              );
            }
            if (res.data.body.data && res.data.body.data.length > 0) {
              let historyData = res.data.body.data;
              for (const item of historyData) {
                let list = {
                  date: item.createdDate.split(" ")[0],
                  time: item.createdDate.split(" ")[1],
                  amountGift: parseFloat(item.amount).toFixed(2) || "0.00",
                  rate: parseFloat(item.rate) || 1,
                  amountBet:
                    (
                      (parseFloat(item.amount) / parseFloat(item.rate)) *
                      100
                    ).toFixed(2) || "0.00",
                  flag: item.flag,
                  flagDesc: item.flag === "2" ? "已领取" : "流程中",
                };
                if (type === 2) {
                  that.historyListPre.push(list);
                } else {
                  that.historyListCur.push(list);
                }
              }
            }
          }
        });
    },
    // 获取本周洗码优惠接口
    async getWashCodeInfo() {
      let cycleType = 0;
      let productId = this.$store.state.appInfo.productId;
      let loginName = this.loginName;

      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = "zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9";
      let sendData = {
        cycleType,
        productId,
        loginName,
      };
      let sendDataString = JSON.stringify(sendData);
      let sign = md5(
        reverseStrings(sendDataString) +
          qid +
          appId +
          v +
          this.token +
          this.u2token
      );
      return await axios
        .post(this.$api.washCode.calcAmountV2, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            sign,
            token: this.token,
          },
        })
        .then((res) => {
          console.log("本周洗码数据", res);
          if (res.data.body) {
            console.log(res.data.body)
            this.tabContent[1].beginDate = res.data.body.xmBeginDate;
            this.tabContent[1].endDate = res.data.body.xmEndDate;
            this.tabContent[1].betCount = res.data.body.totalRemBetAmount.toFixed(
              2
            );
            this.tabContent[1].giftCount = res.data.body.totalXmAmount.toFixed(
              2
            );

            if (res.data.body.xmList.length > 0) {
              let xmList = res.data.body.xmList;
              for (const list of xmList) {
                if (list.xmAmount > 0) {
                  if (list.xmTypes.length > 0) {
                    for (const xmTypeItem of list.xmTypes) {
                      // if (xmTypeItem.xmType === "XM131") {
                        console.log("xmTypeItem", xmTypeItem);
                        this.tabContent[1].xmList.push(xmTypeItem);
                      // }
                    }
                  }
                }
              }
            }
          }
        });
    },
    // 获取用户周洗码汇总统计列表
    async getWashCodeList(type) {
      let productId = this.$store.state.appInfo.productId;
      let loginName = this.loginName;
      console.log(loginName)
      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = 1;
      if (!isAndroid) {
        platform = 2;
      }
      let domainName = this.$store.state.appInfo.domainName;
      let deviceId = this.$store.state.appInfo.deviceId;
      let appId = "zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9";
      let sendData = {
        loginName,
        productId,
        type,
      };
      let sendDataString = JSON.stringify(sendData);
      let sign = md5(
        reverseStrings(sendDataString) +
          qid +
          appId +
          v +
          this.token +
          this.u2token
      );
      return await axios
        .post(this.$api.washCode.userBetRecord, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            // sign,
            token: this.token,
            platform,
            domainName,
            deviceId,
          },
        })
        .then((res) => {
          console.log(`获取列表${type}`, res.data);
          let that = this;
          that.totleAmount = 0;
          if (res.data.head.errCode === 200) {
            that.washCodeList = res.data.body;
            for (let list of that.washCodeList) {
              that.totleAmount += list.amount;
            }
          } else {
            this.openPCHandle("openDialog", { msg: res.data.head.errMsg });
          }
        });
    },
    // 创建洗码提案（领取礼金）
    async getCreateRequest() {
      if (this.isLogin()) {
        this.toLogin();
        return;
      }
      // if (this.tabContent[1].giftCount < 1) {
      //   console.log("礼金小于1");
      //   return false;
      // }
      let productId = this.$store.state.appInfo.productId;
      let loginName = this.loginName;
      console.log(111111111111,this.loginName)
      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = "zJgHzc2qfyIQJ36dF7GzEzK5w9nrhtW9";
      let sendData = {
        isXm: 0, // 暂定为0
        productId: productId,
        xmBeginDate: this.tabContent[1].beginDate,
        xmEndDate: this.tabContent[1].endDate,
        xmRequests: this.tabContent[1].xmList,
        loginName: loginName,
      };
      let sendDataString = JSON.stringify(sendData);
      let sign = md5(
        reverseStrings(sendDataString) +
          qid +
          appId +
          v +
          this.token +
          this.u2token
      );
      return await axios
        .post(this.$api.washCode.createRequest, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            sign,
            token: this.token,
          },
        })
        .then((res) => {
          console.log("领取洗码金额", res);
          let that = this;
          let flag = res.data.head.errCode;
          if (flag === "0000") {
            console.log("成功");
            that.showGetModal = true;
            that.getHistoryList(1) // 查询洗码提案（本周）
            that.getHistoryList(2) // 查询洗码提案（上周）
            setTimeout(() => {
              location.reload(); // 重新加载当前页面
            }, 1200);
          } else {
            this.openPCHandle("openDialog", { msg: res.data.head.errMsg });
          }
        });
    },
    async loadTicket(data) {
      if (data.loginStatus) {
        this.loginStatus = data.loginStatus;
        this.token = data.token;
        this.loginName = data.loginName;
        this.u2token = data.u2token;
        this.usdt = data.currency == "USDT" ? true : false;

        this.$loading.show({
          text: "Loading",
        });
        await this.getHistoryList(1) // 查询洗码提案（本周） 今天
        await this.getHistoryList(2) // 查询洗码提案（上周） 昨天
        // await this.getWashCodeInfoPre(1); // 获取本周洗码记录
        // await this.getWashCodeInfoPre(2); // 获取上周洗码数据，记录
        // await this.getWashCodeInfo(); // 获取本周洗码数据
        this.$loading.hide();
      }
    },
    toLogin() {
      this.openPCHandle("openRecharge");
    },
    isLogin() {
      return !this.loginStatus;
    },
    // 切换
    tabChange(index) {
      this.activeInd = index;
      console.log(this.activeInd)
    },
    // 弹出弹窗（每日下注额）
    openModal(index) {
      if (this.isLogin()) {
        this.toLogin();
        return;
      }
      let that = this;
      let type;
      index === 0 ? (type = 2) : (type = 1);
      that.getWashCodeList(type);
      this.showModal = true;
    },
    // 关闭弹窗（每日下注额）
    closeModal() {
      this.showModal = false;
      this.totleAmount = 0.0;
      this.washCodeList = [];
    },
    // 弹出弹窗（领取记录）
    openHistoryModal() {
      this.showHistoryModal = true;
    },
    // 关闭弹窗（领取记录）
    closeHistoryModal() {
      this.showHistoryModal = false;
    },
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      };
      window.parent.postMessage(info, "*");
    },
  },
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
html,
body {
  height: auto;
}
.empty .custom-image .van-empty__image {
  width: 70/ 59.9422423 + rem;
  height: 60/ 59.9422423 + rem;
}
.empty .custom-image .van-empty__description {
  padding-left: 0;
  padding-right: 0;
}
</style>
<style lang="scss" scoped>
@import "./pc.scss";
</style>