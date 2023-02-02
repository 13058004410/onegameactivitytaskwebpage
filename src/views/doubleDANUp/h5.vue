<template>
  <!-- ONE 众瞩目 首存红利40% -->
  <div class="app-view">
    <div class="title-nr"></div>
    <div class="nr-item">
        <p><span>活动期间（12月25日-01月03日）</span>ONE体育新老会员完成每日签到即可领取。</p>
    </div>
    <div class="table-title">
        <div>签到天数</div>
        <div>当日累计存款</div>
        <div>签到红利</div>
        <div>流水</div>
    </div>
    <table>
        <tbody>
        <tr>
            <td>第1天</td>
            <td>≥500CNY<br>/72USDT</td>
            <td>18CNY <br>/3USDT</td>
            <td>3倍</td>
        </tr>
        <tr>
            <td>第2天</td>
            <td>≥1000CNY <br>/142USDT </td>
            <td>58CNY <br>/8USDT</td>
            <td>3倍</td>
        </tr>
        <tr>
            <td>第3天</td>
            <td>≥1000CNY <br>/142USDT</td>
            <td>58CNY <br>/8USDT</td>
            <td>3倍</td>
        </tr>
        <tr>
            <td>第4天</td>
            <td>≥2000CNY <br>/285USDT</td>
            <td>88CNY <br>/12USDT</td>
            <td>3倍</td>
        </tr>
        <tr>
            <td>第5天</td>
            <td>≥2000CNY <br>/285USDT</td>
            <td>88CNY <br>/12USDT</td>
            <td>3倍</td>
        </tr>
        <tr>
            <td>第6天</td>
            <td>≥2000CNY <br>/285USDT</td>
            <td>88CNY <br>/12USDT</td>
            <td>3倍</td>
        </tr>
        <tr>
            <td>第7天</td>
            <td>≥5000CNY <br>/714USDT</td>
            <td>238CNY <br>/34USDT</td>
            <td>3倍</td>
        </tr>
        <tr>
            <td>第8天</td>
            <td>≥5000CNY <br>/714USDT</td>
            <td>238CNY <br>/34USDT</td>
            <td>3倍</td>
        </tr>
        <tr>
            <td>第9天</td>
            <td>≥5000CNY <br>/714USDT</td>
            <td>238CNY <br>/34USDT</td>
            <td>3倍</td>
        </tr>
        <tr>
            <td>第10天</td>
            <td>≥8888CNY <br>/1270USDT</td>
            <td>388CNY <br>/55USDT</td>
            <td>3倍</td>
        </tr>
        <tr>
            <td colspan="2">完成连续签到10天</td>
            <td>888CNY <br>/126USDT</td>
            <td>3倍</td>
        </tr>
        </tbody>
    </table>
    <div class="example">
      <p>
        注：当日完成签到条件后，联系在线客服领取。过时视为自动放弃。
      </p>
    </div>
    <!-- <div class="btn" @click="jumpKefuNative"></div> -->
     <div class="title-gz"></div>
     <div class="gz-item">
         <p>1.活动期间（12月25日-1月03日）ONE体育新老会员可根据活动要求完成每日签到存款即可领取每日签到红利，最高<span>388CNY/55USDT</span>。完成连续签到
         <span>10天</span>即可额外领取<span>888CNY/126USDT</span>红利，如会员连续签到中途中断，依然可以参与下一日的签到，但无法领取最终完成10天签到额外红利。例：会员A连续签到3天
         后，第4天没有完成签到条件，那么会员A无法领取第4天的签到奖励，但是会员A依然可以参与第5天和后续的签到，但是无法参与领取最终签到10天的红利了。
         </p>
         <p>2.活动红利需完成<span>3倍流水</span>，限体育场馆。</p>
         <p>3.有效投注额仅计算已结算并产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关、提前兑现，将不计算在有效流水内。</p>
         <p>4.本活动与洗码优惠共享，不与其存送优惠共享。例：会员A当日存款1000CNY，此笔存款参与其他存送类优惠，那么此笔1000CNY存款不计算为签到存款。</p>
         <p>5.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育会员账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
         <p>6.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
     </div>
  </div>
</template>
<script>
import {  Dialog } from "vant";
import { mapActions, mapMutations } from "vuex";
import { UA } from '@/util/ua'
export default {
    components: {
        Dialog
    },
    data() {
        return {
        loginStatus: false,
        token: "",
        loginName: "",
        u2token: "",
        website: false,
        ticketApp: false    
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
        // this.$loading.show({
        // text: "Loading",
        // })
    },
    computed: {
        h5TokenStore() {
            return this.$store.state.h5Token;
                }
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
        openPCHandle(msg, data = {}) {
            let info = {
                message: msg,
                ...data,
            }
            window.parent.postMessage(info, "*");
        },
        // isLogin() {
        //     return this.$store.state.h5Token.token == undefined;
        //     },
        // toLogin() {  
        //     if(this.website){
        //         this.openPCHandle("openRecharge");
        //     }else {
        //         window.location = "nbapp://openLoginPage?data={}";
        //     }
        // },
        
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
            // this.loginStatus = data.loginStatus;
            // this.token = data.token;
            // this.loginName = data.loginName;
            // this.u2token = data.u2token;
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
        jumpKefuNative() {
            if(this.website) {
                this.openPCHandle('openService')
            } else {
               window.location = "nbapp://openServicePage?data={}";
            }
        },
    }
}
</script>
<style lang="scss">
@import "@/assets/css/normaliz.scss";
@import "@/assets/css/screen750.scss";
</style>
<style lang="scss" scoped>
.app-view {
    * {
        box-sizing: border-box;
    }
    background: #F5F9FA url("../../assets/img/doubleDAN/ssq_banner_h5.jpg") no-repeat 0 0;
    background-size: contain;
    padding-top: (480/16) + rem;
    p {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #7984A8;
        letter-spacing: 0;
        line-height: 20px;
        font-weight: 500;
        }
    span {
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        color: #F0B50A;
        letter-spacing: 0;
        line-height: 20px;
        font-weight: 600;
        }
    }
    .title-nr {
      background: url("../../assets/img/doubleDAN/hdnr_h5.png") no-repeat 0 0;
      background-size: cover;
      width: (115/16) + rem;
      height: (25/16) + rem;
      margin-left: (25/16) + rem;
      margin-bottom: (12/16) + rem;
    }
    .nr-item {
        width: 325/16 + rem;
        height: 40/16 + rem;
        margin: 0 auto;
    }
    .table-title {
        width:375/16 + rem ;
        height: 56/16 + rem;
        text-align: center;
        background: #7984A8;
        color: #FFFFFF;
        font-size: 12px;
        // border-radius: 8px 8px 0 0;
        margin: 15px auto 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        // >div{flex: 1;}
        >div:nth-child(1){width:77/16 + rem ;}
        >div:nth-child(2){width:134/16 + rem ;}
        >div:nth-child(3){width:120/16 + rem ;}
        >div:nth-child(4){width:40/16 + rem ;}
    }
    table {
        width: 375/16 + rem;
        height: 50.39/16 + rem;
        margin: 0 auto;
    td {
        background: #F5F9FA ;
        border: 1px solid #7984A8;
        // width: 114.42/16 + rem;
        height: 55/16 + rem;
        font-family: PingFangSC-Semibold;
        font-size: 13px;
        color: #7984A8;
        letter-spacing: 0;
        text-align: center;
        font-weight: 600;
      }
      >tbody{
        >tr{
          >td:nth-child(1){
            border-left: 0px;
          }
          >td:nth-child(3){
           border-right: 0px;
          }
        }
      }
    }
    .example{
      padding: 20/16 + rem 10/16 + rem;
      p{
        font-family: PingFangSC-Medium;
        font-size: 14/16 + rem;
        color: #F0B50A;
        letter-spacing: 0;
        font-weight: 500;
      }
    }
    .btn {
        width: 141/16 + rem;
        height: 40/16 + rem;
        background: url('../../assets/img/continuation/lq_btn_h5.png') no-repeat;
        background-size: cover;
        margin: 20px auto;
    }
    .title-gz {
      background: url("../../assets/img/doubleDAN/hdgz_h5.png") no-repeat 0 0;
      background-size: cover;
      width: (115/16) + rem;
      height: (25/16) + rem;
      margin-top: (20/16) + rem;
      margin-left: (25/16) + rem;
      margin-bottom: (12/16) + rem;
    }
    .gz-item {
        width: 335/16 + rem;
        // height: 600/16 + rem ;
        margin: 0 auto;
        line-height: 22px;
        background-color: #f5f9fa;
        padding-bottom: 20px;
        p {
            padding: 5px 3px;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #7984A8;
            letter-spacing: 0;
            line-height: 20px;
            font-weight: 500;
            word-break: break-all;
            span{
              font-family: PingFangSC-Medium;
              font-size: 14px;
              color: #F0B50A;
              letter-spacing: 0;
              line-height: 20px;
              font-weight: 500;
            }
        }
    }
</style>