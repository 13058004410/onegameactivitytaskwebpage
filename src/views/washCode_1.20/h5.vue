<template>
  <!-- 洗码优惠 -->
  <div class="app-wrapper">
    <h1>washCode_1.20</h1>
    <div class="app-view">
      <Scrapper class="app-scroll" ref="view">
        <div class="scroll-wrapper">
          <div class="app-bg app-img" :class="[loginValue?'app-img-unlogin':'']">
            <img :src="require('@/assets/img/washCode/bg-main.png')" alt="" />
          </div>
          <div class="app-page">
            <div class="page-wrapper">
              <div class="app-logo vivify popInTop">
                <img
                  :src="require('@/assets/img/washCode/biaoti.png')"
                  alt=""
                />
              </div>
              <div class="txt-title txt-title1 vivify driveInRight">
                <img :src="require('@/assets/img/washCode/renwu.png')" alt="" />
              </div>
              <div
                class="txt-title txt-title2 vivify driveInLeft"
                :class="{ 'body-pre': activeIndex === 0 }"
              >
                <div>
                  <img
                    :src="require('@/assets/img/washCode/xmyh_bt.png')"
                    class="logo-t"
                    alt=""
                  />
                </div>
                  <div class="content_wrapper" v-if="!loginValue">
                    <div class="status status-bg" :class="{ usdt: usdt }">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <p>当前为{{ usdt ? "USDT" : "RMB" }}账户钱包</p>
                    </div>
                  </div>
                  <div class="content" :class="[loginValue?'content-unlogin':'']">
                    <div class="buts-container">
                      <button
                        v-for="(item, index) in tabTitle"
                        :key="index"
                        :class="{ active: activeIndex === index }"
                        @click="tabChange(index)"
                      >
                        {{ item.title }}
                      </button>
                    </div>
                  </div>
                  <div class="unlogin" v-if="loginValue">
                    <div><img :src="require('@/assets/img/washCode/wdl_icon_h5.png')" alt=""></div>
                     <p>检测到您当前未登录，请<span @click="toLogin()">登录</span>后查看</p>
                  </div>
                  <div class="content_wrapper" v-if="!loginValue">
                    <div class="body" v-show="activeIndex === 0">
                      <p class="settlement-time">
                        结算周期：{{
                          `${tabContent[0].beginDate.split(" ")[0]} - ${
                            tabContent[0].endDate.split(" ")[0]
                          }`
                        }}
                      </p>
                      <div>
                        <div>
                          <div>
                            <span>洗码下注额</span>
                            <span
                              >{{ currencySymbol
                              }}{{ tabContent[0].betCount }}</span
                            >
                          </div>
                        </div>
                        <div>
                          <div>
                            <span
                              >{{
                                tabContent[0].status === 1 ? "待派发" : "已领取"
                              }}礼金</span
                            >
                            <span
                              >{{ currencySymbol
                              }}{{ tabContent[0].giftCount }}</span
                            >
                          </div>
                        </div>
                      </div>
                      <div>
                        <span @click="openModal(0)">(查看每日下注金额)</span>
                      </div>
                    </div>
                    <div class="body" v-show="activeIndex === 1">
                      <p class="settlement-time">
                        结算周期：{{
                          `${tabContent[1].beginDate.split(" ")[0]} - ${
                            tabContent[1].endDate.split(" ")[0]
                          }`
                        }}
                      </p>
                      <div>
                        <div>
                          <div>
                            <span>洗码下注额</span>
                            <span
                              >{{ currencySymbol
                              }}{{ tabContent[1].betCount }}</span
                            >
                          </div>
                        </div>
                        <div>
                          <div>
                            <span
                              >{{
                                tabContent[1].status === 1 ? "待派发" : "已领取"
                              }}礼金</span
                            >
                            <span
                              >{{ currencySymbol
                              }}{{ tabContent[1].giftCount }}</span
                            >
                          </div>
                        </div>
                      </div>
                      <div>
                        <span @click="openModal(1)">(查看每日下注金额)</span>
                      </div>
                      <button
                        :class="[tabContent[1].giftCount > 1 ? 'active' : ' ']"
                        @click="getCreateRequest"
                      ></button>
                    </div>
                  </div>
              </div>

              <!-- <div class="box-wrapper box-wrapper1 vivify driveInBottom">
                <div class="box-title"><span></span></div>
                <div class="box-content">
                  <div class="box-tab">
                    <div class="tab-head">
                      <div
                        v-for="(item, index) in tabTitle"
                        :key="index"
                        :class="activeIndex === index ? 'active' : ''"
                        @click="tabChange(index)"
                      >
                        {{ item.title }}
                      </div>
                    </div>
                    <div class="tab-body">
                      <div
                        class="tab-content vivify fadeInRight duration-200"
                        v-for="(item, index) in tabContent"
                        :key="index"
                        :class="activeIndex === index ? 'active' : ''"
                      >
                        <div class="tab-top">
                          结算周期：{{
                            `${item.beginDate.split(" ")[0]} ~ ${
                              item.endDate.split(" ")[0]
                            }`
                          }}
                        </div>
                        <div class="border-1px"></div>
                        <div class="tab-middle">
                          <div class="middle-item">
                            <p>洗码下注额</p>
                            <p class="font22">￥{{ item.betCount }}</p>
                          </div>
                          <div class="middle-item">
                            <p>
                              {{ item.status === 1 ? "待派发" : "已领取" }}礼金
                            </p>
                            <p class="font22 txt-black">
                              ￥{{ item.giftCount }}
                            </p>
                          </div>
                        </div>
                        <div class="tab-list">
                          <div class="btn-list" @click="openModal(activeIndex)">
                            （查看每日下注金额）
                          </div>
                          <div
                            class="font16 btn-receive"
                            :class="[item.giftCount > 1 ? 'active' : ' ']"
                            v-show="activeIndex === 1"
                            @click="getCreateRequest"
                          >
                            立即自助领取
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->

              <div class="collection-record driveInBottom" v-if="!loginValue">
                <div class="bg-t"></div>
                <table>
                  <thead>
                    <tr>
                      <td>日期</td>
                      <td>洗码下注记录</td>
                      <td>洗码礼金</td>
                      <td>领取状态</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in historyListShow" :key="index">
                      <td>{{ item.date }} {{ item.time }}</td>
                      <td>{{ currencySymbol }}{{ item.amountBet }}</td>
                      <td>{{ currencySymbol }}{{ item.amountGift }}</td>
                      <td
                        :class="[item.flag === 2 ? 'status-yes' : 'status-no']"
                      >
                        {{ item.flag !== 2 ? item.flagDesc : "已领取" }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="empty" v-show="noDataShow">
                  <Empty
                    class="custom-image"
                    image="https://img.yzcdn.cn/vant/custom-empty-image.png"
                    description="暂无记录"
                  />
                </div>

                <p class="see-more" v-show="!noDataShow">
                  <span @click="openHistoryModal">查看更多 >></span>
                </p>
                <!-- <div class="box-title"><span></span></div>
                <div class="box-content">
                  <div class="history-table">
                    <table>
                      <thead>
                        <tr>
                          <th>日期</th>
                          <th>洗码下注金额</th>
                          <th>洗码礼金</th>
                          <th>领取状态</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in historyListShow"
                          :key="index"
                        >
                          <td>
                            <p>{{ item.date }}</p>
                            <p>{{ item.time }}</p>
                          </td>
                          <td>￥{{ item.amountBet }}</td>
                          <td>￥{{ item.amountGift }}</td>
                          <td>
                            <span
                              class="btn-status"
                              :class="[
                                item.flag === 2 ? 'status-yes' : 'status-no',
                              ]"
                              >{{
                                item.flag !== 2 ? item.flagDesc : "已领取"
                              }}</span
                            >
                          </td>
                        </tr>
                        <tr v-show="noDataShow">
                          <td colspan="4" style="border: none">暂无记录</td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      class="btn-more"
                      @click="openHistoryModal"
                    >
                      查看更多>>
                    </div>
                  </div>
                </div> -->
              </div>

              <!-- <div class="box-wrapper box-wrapper2 vivify driveInBottom">
                <div class="box-title"><span></span></div>
                <div class="box-content">
                  <div class="history-table">
                    <table>
                      <thead>
                        <tr>
                          <th>日期</th>
                          <th>洗码下注金额</th>
                          <th>洗码礼金</th>
                          <th>领取状态</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in historyListShow"
                          :key="index"
                        >
                          <td>
                            <p>{{ item.date }}</p>
                            <p>{{ item.time }}</p>
                          </td>
                          <td>￥{{ item.amountBet }}</td>
                          <td>￥{{ item.amountGift }}</td>
                          <td>
                            <span
                              class="btn-status"
                              :class="[
                                item.flag === 2 ? 'status-yes' : 'status-no',
                              ]"
                              >{{
                                item.flag !== 2 ? item.flagDesc : "已领取"
                              }}</span
                            >
                          </td>
                        </tr>
                        <tr v-show="noDataShow">
                          <td colspan="4" style="border: none">暂无记录</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="btn-more" @click="openHistoryModal">
                      查看更多>>
                    </div>
                  </div>
                </div>
              </div> -->
              <div
                class="box-wrapper box-wrapper3 vivify driveInBottom delay-300"
              >
                <div class="box-title"></div>
                <div class="box-content">
                  <div class="rule-title">规则说明：</div>
                  <ul>
                    <li>
                      <p>
                        1. 洗码礼金{{
                          usdt ? "≥1USDT" : "≥¥1"
                        }}可派发至会员账户，洗码礼金无上限，可随时申请提款;
                      </p>
                    </li>
                    <li>
                      <p>
                        2.
                        体育投注洗码有效投注额，统计周期为北京时间每周一的0:00至周日23:59，ONE体育各厅皆独立计算有效投注额；
                      </p>
                    </li>
                    <li>
                      <p>
                        3.系统自动添加周洗码时间为：每周一17:00之前结算完毕并添加上周对应会员VIP等级洗码礼金到游戏账号；
                      </p>
                    </li>
                    <li>
                      <p>
                        4.
                        有效投注是指有输赢结果的投注额累积，所有退还本金的投注或无风险的投注皆不能结算为有效投注，体育厅中对打投注，欧洲赔率≤1.5及是取消赛事注单接不计算有效投注。以诈欺手段获得码，将会永久冻结账号且没收所有资金；
                      </p>
                    </li>
                    <li>
                      <p>5. 本优惠自2020年1月份开始执行；</p>
                    </li>
                  </ul>
                </div>
                <div class="sub-box">
                  <div class="sub-title">其他说明：</div>
                  <div class="rule-content">
                    <div class="rule-tips">
                      会员等级:可参考我【个人中心】→【游戏帐号】→【VIP等级】
                    </div>
                    <div class="rule-table-img">
                      <img src="../../assets/img/washCode/biaoge_h5@2x.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Scrapper>
    </div>
    <!-- Modal 每日下注额 -->
    <div class="modal-wrapper" v-if="showModal">
      <div class="modal-main">
        <div class="modal-box vivify fadeInTop duration-300">
          <div class="modal-head">
            {{ tabTitle[activeIndex].title }}每日下注金额
            <Icon name="cross" :size="24 / 16 + 'rem'" @click="closeModal" />
          </div>
          <div class="modal-body">
            <div class="modal-table">
              <div class="table-head">
                <div class="table-item">
                  <div>
                    <Icon name="notes-o" :size="17 / 16 + 'rem'" />
                    <span>下注日期</span>
                  </div>
                  <div>
                    <Icon name="balance-o" :size="17 / 16 + 'rem'" />
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
    <!-- Modal 领取记录 -->
    <div class="modal-wrapper" v-if="showHistoryModal">
      <div class="modal-main">
        <div class="modal-box vivify fadeInTop duration-300 record">
          <div class="modal-head">
            <span>领取记录</span>
            <Icon
              name="cross"
              :size="24 / 16 + 'rem'"
              @click="closeHistoryModal"
            />
          </div>
          <div class="modal-body">
            <div class="modal-ul">
              <!-- <List
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                error-text="请求失败，点击重新加载"
                :error.sync="error"
              > -->
              <ul>
                <li
                  class="list-item"
                  v-for="(item, index) in historyList"
                  :key="index"
                >
                  <div class="item-date">
                    {{ `${item.date} ${item.time}` }}
                  </div>
                  <div class="item-cont">
                    <div>
                      <div class="money">
                        <div :class="{ usdt: usdt }"></div>
                        <p>
                          洗码下注金额：{{ currencySymbol }}{{ item.amountBet }}
                        </p>
                      </div>
                      <p class="info-gift">
                        洗码礼金：{{ currencySymbol }}{{ item.amountGift }}
                      </p>
                    </div>
                    <div>
                      <span
                        :class="[item.flag === 2 ? 'status-yes' : 'status-no']"
                        >{{ item.flag !== 2 ? item.flagDesc : "已领取" }}</span
                      >
                    </div>
                  </div>
                </li>
              </ul>
              <!-- </List> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="modal-wrapper" v-if="showHistoryModal">
      <div class="modal-main">
        <div class="modal-box vivify fadeInTop duration-300" style="width: 90%">
          <div class="modal-head">
            领取记录
            <span class="btn-close" @click="closeHistoryModal"></span>
          </div>
          <div class="modal-body">
            <div class="modal-ul">
              <ul>
                <li
                  class="list-item"
                  v-for="(item, index) in historyList"
                  :key="index"
                >
                  <div class="item-date">{{ `${item.date} ${item.time}` }}</div>
                  <div class="item-cont">
                    <div class="icon-money"></div>
                    <div class="item-info">
                      <p>洗码下注金额：￥{{ item.amountBet }}</p>
                      <p class="info-gift">
                        洗码礼金：￥{{ item.amountGift }}
                        <span
                          class="btn-status"
                          :class="[
                            item.flag === 2 ? 'status-yes' : 'status-no',
                          ]"
                          >{{
                            item.flag !== 2 ? item.flagDesc : "已领取"
                          }}</span
                        >
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Modal 领取成功 -->
    <div class="modal-wrapper" v-if="showGetModal">
      <div class="modal-main">
        <div class="modal-box vivify fadeInTop duration-300 box-gift">
          <div class="modal-body">
            <div class="box-gift">
              <div class="box-banner">
                <img src="../../assets/img/washCode/tips-banner.png" alt="" />
              </div>
              <h4 class="txt-blue">恭喜你</h4>
              <div class="txt-blue txt-tips">领取成功</div>
              <div class="btn-close-tips" @click="showGetModal = false">
                我知道了
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./h5.scss";
import {
  getQueryVariable,
  rando,
  reverseStrings,
  toLogin,
  getCurDate,
  getWeekStartDate,
  getWeekEndDate,
  getLastWeekStartDate,
  getLastWeekEndDate,
} from "../../assets/js/tools";
import { mapActions, mapMutations } from "vuex";
import Scrapper from "@/component/Scrapper";
import axios from "axios";
import md5 from "js-md5";
import { UA } from '@/util/ua';
let Base64 = require("js-base64").Base64;
import { Empty, Icon, List } from "vant";
export default {
  components: {
    Scrapper,
    Empty,
    Icon,
    List,
  },
  data() {
    return {
      showModal: false, // 每日下注金额弹框开关
      showHistoryModal: false, // 更多历史弹框开关
      showGetModal: false, // 领取成功弹框开关
      activeIndex: 1, // 上周/本周 切换下标
      tabTitle: [
        {
          title: "上一周",
        },
        {
          title: "本周",
        },
      ], // 标题
      tabContent: [
        {
          beginDate: getYestodayDate(),
          endDate: getYestodayDate(),
          betCount: "0.00",
          giftCount: "0.00",
          status: 0,
        }, // 上周
        {
          beginDate: getWeekStartDate(),
          endDate: getCurDate(),
          betCount: "0.00",
          giftCount: "0.00",
          status: 1,
          xmList: [],
        }, // 本周
      ], // 内容
      washCodeList: [],
      totleAmount: 0.0,
      historyListCur: [], // 本周所有领取记录数组
      historyListPre: [], // 上周所有领取记录数组
      loading: false,
      finished: false,
      error: false,
      usdt: false,
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
      // return this.$store.state.h5Token;
      let h5Token = this.$store.state.h5Token;
      let loginName = this.loginName;
      let obj ={
        loginName,
        h5Token
      }
      return obj;
    },
    historyList() {
      if (this.activeIndex === 0) {
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
    loginValue() {
      return this.isLogin() && !this.loginStatus
    }
  },
  created() {
    let that = this
    window.loadTicket = this.loadTicketApp;
    setTimeout(() => {
      if(!that.ticketApp && !that.website && UA() === 1) {
          window.location = "nbapp://getTicket?data={}";  
      }
    }, 1000);
    window.addEventListener("message", this.onMessage);
    this.openPCHandle("sendDataIframe");
    // let that = this
    // that.$loading.show({
    //   text: 'Loading'
    // })
    // that.AH5Token()
    // let loginNameStore = getQueryVariable('loginName')
    // // this.$toastMessage({message: '登录名：' + loginNameStore})
    // console.log('登录名：', loginNameStore)

    // if (!loginNameStore) {
    //   toLogin()
    //   setTimeout(() => {
    //     that.$loading.hide()
    //   }, 1000)
    // } else {
    //   console.log('Logined')
    // }
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
    onLoad() {
      console.log(1);
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
    async loadTicket(data) {
      this.website = true
      if (data.loginStatus) {
        this.loginStatus = data.loginStatus;
        this.token = data.token;
        this.loginName = data.loginName;
        this.u2token = data.u2token;
        this.usdt = data.loginName.substring(data.loginName.length - 4) == "usdt";
        this.$loading.show({
          text: "Loading",
        });
        await this.getWashCodeInfoPre(1); // 获取本周洗码记录
        await this.getWashCodeInfoPre(2); // 获取上周洗码数据，记录
        await this.getWashCodeInfo(); // 获取本周洗码数据
        this.$loading.hide();
      }
    },
    // 查询洗码提案列表
    async getHistoryList(type = 2) {
      let ish5Token = this.$store.state.h5Token;
      let productId = this.$store.state.appInfo.productId;
      let loginName
      if (ish5Token.token != undefined) {
        loginName = this.$store.state.appInfo.loginName;
      }
      if (this.loginStatus) {
        loginName = this.loginName;
      }
      let beginDateTime =
        type === 2 ? getLastWeekStartDate() : getWeekStartDate();
      let beginDate = beginDateTime + " 00:00:00";
      let endDateTime = type === 2 ? getLastWeekEndDate() : getCurDate();
      let endDate = 2 ? endDateTime + " 23:59:59" : endDateTime;

      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let h5Token
      if(this.loginStatus) {
        h5Token = {token:`${this.token}`}
      }else {
        h5Token = this.$store.state.h5Token;
      }
      let sendData = {
        beginDate,
        endDate,
        productId,
        loginName,
      };
      let sendDataString = JSON.stringify(sendData);
      let str = reverseStrings(sendDataString) + qid + appId + v;
      if(this.loginStatus) {
        str +=
        this.loginStatus ? `${this.token}${this.u2token}` : "";
      }else {
        str +=
        ish5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      }
      let sign = md5(str);
      await axios
        .post(this.$api.washCode.queryRequest, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            sign,
            token: h5Token.token,
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
      let ish5Token = this.$store.state.h5Token;
      let productId = this.$store.state.appInfo.productId;
      let loginName
      if (ish5Token.token != undefined) {
        loginName = this.$store.state.appInfo.loginName;
      }
      if (this.loginStatus) {
        loginName = this.loginName;
      }

      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = 1;
      if (!isAndroid) {
        platform = 2;
      }
      let h5Token
      if(this.loginStatus) {
        h5Token = {token:`${this.token}`}
      }else {
        h5Token = this.$store.state.h5Token;
      }
      let domainName = this.$store.state.appInfo.domainName;
      let deviceId = this.$store.state.appInfo.deviceId;
      let appId = this.$store.state.appInfo.appId;
      let sendData = {
        type,
        loginName,
        productId,
      };
      let sendDataString = JSON.stringify(sendData);
      let str = reverseStrings(sendDataString) + qid + appId + v;
      if(this.loginStatus) {
        str +=
        this.loginStatus ? `${this.token}${this.u2token}` : "";
      }else {
        str +=
        ish5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      }
      let sign = md5(str);
      await axios
        .post(this.$api.washCode.userBetList, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            // sign,
            token: h5Token.token,
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
      // await this.AH5Token()
      let ish5Token = this.$store.state.h5Token;
      let cycleType = 0;
      let productId = this.$store.state.appInfo.productId;
      let loginName
      if (ish5Token.token != undefined) {
        loginName = this.$store.state.appInfo.loginName;
      }
      if (this.loginStatus) {
        loginName = this.loginName;
      }
      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let h5Token
      if(this.loginStatus) {
        h5Token = {token:`${this.token}`}
      }else {
        h5Token = this.$store.state.h5Token;
      }
      let sendData = {
        cycleType,
        productId,
        loginName,
      };
      let sendDataString = JSON.stringify(sendData);
      let str = reverseStrings(sendDataString) + qid + appId + v;
      if(this.loginStatus) {
        str +=
        this.loginStatus ? `${this.token}${this.u2token}` : "";
      }else {
        str +=
        ish5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      }
      let sign = md5(str);
      await axios
        .post(this.$api.washCode.calcAmountV2, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            sign,
            token: h5Token.token,
          },
        })
        .then((res) => {
          console.log("本周洗码数据", res);
          if (res.data.body) {
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
      let ish5Token = this.$store.state.h5Token;
      let productId = this.$store.state.appInfo.productId;
      let loginName
      if (ish5Token.token != undefined) {
        loginName = this.$store.state.appInfo.loginName;
      }
      if (this.loginStatus) {
        loginName = this.loginName;
      }
      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      let platform = 1;
      if (!isAndroid) {
        platform = 2;
      }
      let h5Token
      if(this.loginStatus) {
        h5Token = {token:`${this.token}`}
      }else {
        h5Token = this.$store.state.h5Token;
      }
      let domainName = this.$store.state.appInfo.domainName;
      let deviceId = this.$store.state.appInfo.deviceId;
      let appId = this.$store.state.appInfo.appId;
      let sendData = {
        loginName,
        productId,
        type,
      };
      let sendDataString = JSON.stringify(sendData);
      let str = reverseStrings(sendDataString) + qid + appId + v;
      if(this.loginStatus) {
        str +=
        this.loginStatus ? `${this.token}${this.u2token}` : "";
      }else {
        str +=
        ish5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      }
      let sign = md5(str);
      await axios
        .post(this.$api.washCode.userBetRecord, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            // sign,
            token: h5Token.token,
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
            that.$toastMessage({ message: res.data.head.errMsg, time: 3000 });
          }
        });
    },
    // 创建洗码提案（领取礼金）
    async getCreateRequest() {
      let ish5Token = this.$store.state.h5Token;
      if (this.isLogin() && !this.loginStatus) {
        this.toLogin();
        return;
      }

      if (this.tabContent[1].giftCount < 1) {
        console.log("礼金小于1");
        return false;
      }
      let productId = this.$store.state.appInfo.productId;
      let loginName
      if (ish5Token.token != undefined) {
        loginName = this.$store.state.appInfo.loginName;
      }
      if (this.loginStatus) {
        loginName = this.loginName;
      }
      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let h5Token
      if(this.loginStatus) {
        h5Token = {token:`${this.token}`}
      }else {
        h5Token = this.$store.state.h5Token;
      }
      let sendData = {
        isXm: 0, // 暂定为0
        productId: productId,
        xmBeginDate: this.tabContent[1].beginDate,
        xmEndDate: this.tabContent[1].endDate,
        xmRequests: this.tabContent[1].xmList,
        loginName: loginName,
      };
      let sendDataString = JSON.stringify(sendData);
      let str = reverseStrings(sendDataString) + qid + appId + v;
      if(this.loginStatus) {
        str +=
        this.loginStatus ? `${this.token}${this.u2token}` : "";
      }else {
        str +=
        ish5Token.token != undefined ? `${h5Token.token}${h5Token.u2token}` : "";
      }
      let sign = md5(str);
      await axios
        .post(this.$api.washCode.createRequest, sendData, {
          headers: {
            qid,
            appId,
            v,
            timestamp,
            sign,
            token: h5Token.token,
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
            this.$toastMessage({ message: res.data.head.errMsg });
          }
        });
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
        return;
      }

      this.usdt = json.loginName.substring(json.loginName.length - 4) == "usdt";

      this.setAppinfoTickt(json.ticket);
      this.setAppinfoLoginName(json.loginName);
      this.$loading.show({
        text: "Loading",
      });
      if (Object.keys(this.$store.state.h5Token).length < 1) {
        await this.AH5Token();
      }
      this.$loading.hide();
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
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      }
      window.parent.postMessage(info, "*");
    },
    // 切换
    tabChange(index) {
      this.activeIndex = index;
    },
    // 弹出弹窗（每日下注额）
    openModal(index) {
      if (this.isLogin() && !this.loginStatus) {
        this.toLogin();
        return;
      }
      let that = this;
      let type;
      index === 0 ? (type = 2) : (type = 1);
      if(that.website && that.loginName) {
        that.getWashCodeList(type);
        that.showModal = true;
      }else {
        let h5Token = sessionStorage.getItem("token");
        if (h5Token && that.loginName) {
          console.log(h5Token)
          that.getWashCodeList(type);
          setTimeout(() => {
            that.showModal = true;
          }, 500);
        }
      }  
    },
    // 关闭弹窗（每日下注额）
    closeModal() {
      this.showModal = false;
    },
    // 弹出弹窗（领取记录）
    openHistoryModal() {
      this.showHistoryModal = true;
    },
    // 关闭弹窗（领取记录）
    closeHistoryModal() {
      this.showHistoryModal = false;
    },
  },
  watch: {
    h5TokenStore: {
      // that.$loading.hide();
      // // that.getHistoryList(1) // 查询洗码提案（本周）
      // // that.getHistoryList(2) // 查询洗码提案（上周）
      // that.getWashCodeInfoPre(1); // 获取本周洗码记录
      // that.getWashCodeInfoPre(2); // 获取上周洗码数据，记录
      // that.getWashCodeInfo(); // 获取本周洗码数据
      handler(newValue){
        let that = this;
        console.log(newValue,11111)
        if( newValue.h5Token && newValue.loginName ){
          that.$loading.hide();
          // that.getWashCodeInfoPre(1); // 获取本周洗码记录
          // that.getWashCodeInfoPre(2); // 获取上周洗码数据，记录
          that.getWashCodeInfo(); // 获取本周洗码数据
          that.getCreateRequest() //创建洗码提案
        }
      },
      deep:true
    }
  },
};
</script>
<style lang="scss">
* {
  touch-action: pan-y;
}
</style>
