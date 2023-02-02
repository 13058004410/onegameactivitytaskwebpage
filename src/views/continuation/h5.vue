<template>
  <!-- ONE 众瞩目 首存红利40% -->
  <div class="app-view">
    <div class="title-nr"></div>
    <div class="nr-item">
        <p>ONE体育新老会员每周可参与一次周存送活动，每月可领取彩金最高<span>2752CNY/392USDT</span>!</p>
    </div>
    <div class="table-title">
        <div>单笔存款</div>
        <div>红利</div>
        <div>流水要求</div>
    </div>
    <table>
        <tbody>
        <tr>
            <td>≥500CNY <br>
                /72USDT
            </td>
            <td>≥68CNY <br>
                /10USDT
            </td>
            <td>(本金+彩金) <br>
                *2倍
            </td>
        </tr>
        <tr>
            <td>≥2000CNY <br>
                /286USDT
            </td>
            <td>≥188CNY <br>
                /27USDT
            </td>
            <td>(本金+彩金) <br>
                *2倍
            </td>
        </tr>
        <tr>
            <td>≥5000CNY <br>
                /715USDT
            </td>
            <td>≥388CNY <br>
                /55USDT
            </td>
            <td>(本金+彩金) <br>
                *2倍
            </td>
        </tr>
        <tr>
            <td>≥10000CNY <br>
                /1429USDT
            </td>
            <td>≥688CNY <br>
                /98USDT
            </td>
            <td>(本金+彩金) <br>
                *2倍
            </td>
        </tr>
        </tbody>
       
    </table>
    <div class="btn" @click="jumpKefuNative"></div>
     <div class="title-gz"></div>
     <div class="gz-item">
         <p>1.上周体育有效投注<span>≥5000CNY/715USDT</span>且不包括任何优惠红利投注产生的有效投注。</p>
         <p>2.例如：第一周周存送（彩金+本金）<span>*2</span>的投注流水不视为本周“有效投注流水<span>≥5000CNY/715USDT</span>”的申</p>
         <p>3.有效投注额仅计算已结算并产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关、提前兑现，将不计算在有效流水内。</p>
         <p>4.彩金申请：请在充值后投注前，联系在线客服进行申请红利。</p>
         <p>5.申请资格：此活动新老会员每周可申请一次，仅限存款后投注前申请，优惠彩金未到账前请勿进行投注。上周体育有效投注流水不包括任何优惠红利投注产生的流水。
             此活动红利不得与其它优惠同时使用。</p>
         <p>6.本活动与洗码优惠共享，不与其他任意优惠共享。</p>
         <p>7.活动红利需完成（本金+彩金）<span>*2倍</span>的有效流水，仅限体育厅。</p>
         <p>8.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
         <p>9. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
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
    background: #F5F9FA url("../../assets/img/continuation/BG_H5.jpg") no-repeat 0 0;
    background-size: contain;
    padding-top: (520/16) + rem;
    p {
        font-size: 14px;
        color: #7984A8;
        }
    span {
        color: #F0B50A;
    }
    }
    .title-nr {
      background: url("../../assets/img/dividend/hdnr.png") no-repeat 0 0;
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
        width:335.42/16 + rem ;
        height: 40/16 + rem;
        background: #7984A8;
        color: #FFFFFF;
        font-size: 14px;
        border-radius: 8px 8px 0 0;
        margin: 15px auto 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    table {
        width: 335.42/16 + rem;
        height: 50.39/16 + rem;
        margin: 0 auto;
    td {
        background: #F5F9FA ;
        border: 1px solid #7984A8;
        width: 114.42/16 + rem;
        height: 53/16 + rem;
        text-align: center;
        font-size: 13px;
        color: #7984A8;
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
      background: url("../../assets/img/continuation/hdgz_tit_h5.png") no-repeat 0 0;
      background-size: cover;
      width: (115/16) + rem;
      height: (25/16) + rem;
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
            padding: 3px 0;
        }
    }
</style>