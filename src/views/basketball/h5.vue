<template>
  <div class="app-view">
    <div class="box-banner"></div>
    <div class="box-info">
      <div class="box-title"></div>
      <div class="box-cont">
        活动期间，投注指定篮球赛事，满足相应活动条件即可获得相应活动彩金。符合条件会员在赛事完结后24小时内需主动联系在线客服申请，过时视为自动放弃。优惠需完成1倍流水，仅限沙巴与BTI场馆。
      </div>
      <div v-if="isshow">
        <div class="btn-sure"></div>
        <div class="play-time">
            <span>赛事投注时间：</span>
            <span v-if="data.start_time">{{data.start_time.substring(0,16)}} ~ {{data.end_time.substring(0,16)}}</span>
        </div>
        <div class="play">
          <div class="game-team">
            <div class="game-team-item">
              <div><img :src="imgSrc + data.home_flag" alt=""></div>
              <p>{{data.home_team}}</p>
            </div>
            <div class="game-team-middle">
              <p>{{data.league_name}}</p>
              <p>{{data.match_time}}</p>
              <p class="battle">VS</p>
            </div>
            <div class="game-team-item1">
              <div><img :src="imgSrc + data.away_flag" alt=""></div>
              <p>{{data.away_team}}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="no-data">
        <img src="../../assets/img/football/h5/qslogo.png" alt="">
      </div>
      <div class="box-table">
        <table>
          <!-- <thead>
                  <tr>指定赛事三分球进球数</tr>
              </thead> -->
          <tbody>
            <tr>
              <th rowspan="2">指定赛事3分球进球数</th>
              <th colspan="3">指定赛事投注</th>
            </tr>
            <tr>
              <td>
                ≥1000CNY <br />
                /143USDT
              </td>

              <td>
                ≥3000CNY <br />
                /429UST
              </td>
              <td>
                ≥5000CNY <br />
                /715USDT
              </td>
            </tr>
            <tr>
              <td>≥25</td>
              <td>
                28CNY <br />
                /4USDT
              </td>

              <td>
                88CNY <br />
                /12USDT
              </td>
              <td>
                128CNY <br />
                /18USDT
              </td>
            </tr>
            <tr>
              <td>≥35</td>
              <td>
                38CNY <br />
                /5USDT
              </td>

              <td>
                128CNY <br />
                /18USDT
              </td>
              <td>
                188CNY <br />
                /26USDT
              </td>
            </tr>
            <tr>
              <td>≥40</td>
              <td>
                58CNY <br />
                /8USDT
              </td>

              <td>
                188CNY <br />
                /26USDT
              </td>
              <td>
                288CNY <br />
                /41USDT
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
      <div class="box-example">
        <p>
          例：会员A在沙巴体育投注指定赛事湖人VS火箭早盘盘口，且单场累积投注金额5000元，
          全场比赛结束假设双方三分球进球数为38颗，无论注单输赢会员A皆可获得188元活动彩金。
        </p>
      </div>
      <div class="btn-kef" @click="jumpKefuNative"></div>
      <div class="box-title"></div>
    </div>
    <div class="box-rule">
      <div class="box-cont">
        <p>
          1.以上投注额仅限早盘的独赢，让分，大小，单双四个盘口的全场与小节。任何低于欧洲盘1.7或香港盘0.7水位的投注、注单提前兑现以及在同一赛事中同时投注对冲盘口，将不计算在投注额内；且仅对已结算并产生输赢结果的投注额进行计算，任何走盘、串关、特殊投注、取消的赛事将不计算在此投注。
        </p>
        <p>2.三分进球数计算两队全场最终三分进球数总和（包含加时赛）。</p>
        <p>3.此活动计算单场赛事沙巴体育+BTI体育符合要求的累计投注额。</p>
        <p>
          4.本活动及彩金仅限BTI体育厅和沙巴体育厅，仅需一倍体育场馆流水即可提款。
        </p>
        <p>5.本活动与洗码优惠共享，不与其他任意优惠活动共享。</p>
        <p>
          6.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。
        </p>
        <p>
          7.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。
        </p>
      </div>
    </div>
    <popups v-if="ispopups" @closeDialog="closeDialog"/>
  </div>
</template>

<script>
import { Toast, Image as VanImage } from "vant";
import md5 from "js-md5";
import { rando, formatDate } from "@/assets/js/tools";
import appConfig from "@/config/config";
import axios from "axios";
import { mapActions } from "vuex";
import { openUrl } from "@/util/util";
import popups from "../../component/Popups"
export default {
  data() {
    return {
      isToken: "",
      imgSrc: "",
      data: {},
      isshow: false,
      loading: false,
      ispopups: false
    };
  },
  components: {
    VanImage,
    popups
  },
  
  async created() {
    await this.getToken()
    window.loadTicket = this.loadTicket;
    this.$loading.show({
      text: "Loading",
    });
     this.getMatchUrl();
    let { imgSrc, message } = await this.getBootstrap();
    if (message) {
      Toast(message);
    } else {
      this.imgSrc = imgSrc[0];
    }
    this.$loading.hide();
  },
  methods: {
    closeDialog() {
      this.ispopups = false
      document.body.style.overflow=''
    },
    jumpKefuNative() {
      window.location = "nbapp://openServicePage?data={}";
    },
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      };
      window.parent.postMessage(info, "*");
    },
    sortString(str) {
      return str.split("").sort().reverse().join("");
    },
    // 获取token
    getToken(){
      let productId = 'a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi';
      let v = (v = this.$store.state.appInfo.v);
      let timestamp = Date.parse(new Date());
      let qid = md5(Date.now() + this.randomFn())
      let appId = '5614IRCtfm1a7BJsC5VTH5yUw8efnhwn';
       let sendData = {
        productId: productId,
      };
      let sign = this.sortString(JSON.stringify(sendData)) + qid + appId + v + ""

      return axios.post(this.$api.global.webToken,sendData,{
         headers: {
            qid,
            appid: appId,
            v,
            timestamp,
            sign: md5(sign),
            'domainName': document.domain
          },
      })
      .then((res) => {
         if(res.data.head.errCode == '0000'){
           this.isToken = res.data.body.info
         }
        })
        .catch((err) => {
          console.log(err)
        });
    },
    // 生成6位随机数
    randomFn() {
      var arr = "";
      for (var i = 0; i < 6; i++) {
        var num = Math.random() * 9;
        num = parseInt(num, 10);
        arr += num;
      }
      return arr;
    },
    // 获取联赛球队域名路径渲染
    getBootstrap() {
      let productId = this.$store.state.appInfo.productId;

      let v = (v = this.$store.state.appInfo.v);
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      // let platform = !isAndroid ? 2 : 1;
      let platform = 3;
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
    // 获取联赛信息
    getMatchUrl() {
      let productId = this.$store.state.appInfo.productId;
      let v = (v = this.$store.state.appInfo.v);
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
      // let platform = !isAndroid ? 2 : 1;
      let platform = 3;
      let webToken = this.isToken;
      let extraPath = "/activity/match3fInfo";
      let extraStr = `${appId}.${platform}.${qid}.${timestamp}${
        webToken ? "." + webToken.token : ""
      }.${v}.${extraPath}`;
      let extraSalt = appConfig.salt;
      let extraSign = md5(md5(extraStr) + extraSalt); // 产品网关签名
      console.log(webToken.toke + "n00123122333");
      console.log("extraStr", extraStr);
      let sendData = {
        sportId: 2,
        productId: productId,
      };
      return axios
        .post(this.$api.global.basketballUrl, sendData, {
          headers: {
            qid,
            appid: appId,
            v,
            timestamp,
            platform,
            sign: extraSign,
            token: this.isToken,
          },
        })
         .then((data) => {
          let { head, body } = data.data;
          // console.log(data.data);
          if (head.errCode == 200) {
            this.data = body;
            if(!body) {
              this.isshow = false
              this.ispopups = true
              document.body.style.overflow='hidden'
              return {message: head.errMsg}
            } else {
              this.isshow = true
              return {data:body}
            }
            console.log(this.data);
          } else {
            return { message: head.errMsg};
          }
        })
        .catch((err) => {
          return { message: "获取数据失败" };
        });
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/screen750.scss";
@import "@/assets/css/normaliz.scss";
</style>
<style lang="scss" scoped>
@import "./h5.scss";
</style>