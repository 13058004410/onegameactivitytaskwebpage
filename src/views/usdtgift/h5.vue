<template>
  <!-- usdt送不停 -->
  <div class="app-view">
      <div class="content">
           <div class="title-nr"></div>
            <div class="table-title">
                <div>周累计有效投注额</div>
                <div>投注礼金</div>
                <div>流水要求</div>
            </div>
            <table>
                <tbody>
                <tr>
                    <td>≥200000CNY
                    </td>
                    <td>58USDT
                    </td>
                    <td>1倍
                    </td>
                </tr>
                </tbody>
            
            </table>
            <p class="tabp">注：USDT有效投注额按1USDT=7CNY自动换算。</p>
           <div class="title-nr2"></div>
            <div class="table-title">
                <div>小金库首次提款</div>
                <div>提款礼金</div>
                <div>流水要求</div>
            </div>
            <table>
                <tbody>
                <tr>
                    <td>≥1000USDT
                    </td>
                    <td>58USDT
                    </td>
                    <td>3倍
                    </td>
                </tr>
                <tr>
                    <td>≥3000USDT
                    </td>
                    <td>128USDT
                    </td>
                    <td>3倍
                    </td>
                </tr>
                <tr>
                    <td>≥5000USDT
                    </td>
                    <td>238USDT
                    </td>
                    <td>3倍
                    </td>
                </tr>
                </tbody>
            
            </table>
            <p class="tabp">注：仅限首次使用小金库提款用户</p>
            <div class="title-gz"></div>
            <div class="gz-item">
                <p>1. 活动期间自然周满足活动条件的会员，ONE体育赠送<span>58USDT</span>至您的ONE体育USDT账户，无需申请，次周一系统自动赠送。</p>
                <p>2. ONE体育新老会员凡首次使用小金库进行提款的满足首次提款要求，即可联系在线客服申请提款礼金。注：仅限首次使用小金库提款。</p>
                <p>3. 投注礼金需完成<span>1倍流水</span>，提款礼金需完成<span>3倍流水</span>，不限场馆。</p>
                <p>4. 本活动与洗码优惠共享，与其他任意活动共享投注流水。</p>
                <p>5. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号。如有会员有任何违规行为，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
                <p>6. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
            </div>
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
        // let that = this
        // window.loadTicket = this.loadTicketApp;
        // setTimeout(() => {
        //     if(!that.ticketApp && !that.website && UA() === 1) {
        //     window.location = "nbapp://getTicket?data={}";  
        //     }
        // }, 1000);
        // window.addEventListener("message", this.onMessage);
        // this.openPCHandle("sendDataIframe");
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
    padding-bottom: 20px;
    * {
        box-sizing: border-box;
    }
    background: #FAF5F1 url("../../assets/img/usdtgift/BG_H5.jpg") no-repeat 0 0;
    background-size: contain;
    padding-top: (450/16) + rem;
    p {
        font-size: 14px;
        color: #7984A8;
        &.tabp{
        padding-left: (14/16) + rem;
        padding-top: 8px;
        font-size: 12px;
        color: #90672D;
        letter-spacing: 0.86px;
        font-weight: 500;
    }
        }
    span {
        color: #F0B50A;
    }
    .content{
        background: #F8F4EE;
        border: 1px solid rgba(203,175,141,1);
        border-radius: 8px;
        margin: 0 20px;
    }
    }
    .title-nr {
      background: url("../../assets/img/usdtgift/hdnr_tit_h5.png") no-repeat 0 0;
      background-size: cover;
      width: (87/16) + rem;
      height: (46/16) + rem;
      margin: auto;
      margin-bottom: (12/16) + rem;
    }
    .title-nr2 {
      background: url("../../assets/img/usdtgift/hd2_H5.png") no-repeat 0 0;
      background-size: cover;
      width: (87/16) + rem;
      height: (46/16) + rem;
      margin: auto;
      margin-bottom: (12/16) + rem;
    }
    .table-title {
        width:313/16 + rem ;
        height: 40/16 + rem;
        background: #D0A881;
        color: #FFFFFF;
        font-size: 14px;
        // border-radius: 8px 8px 0 0;
        margin: 15px auto 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    table {
        width: 313/16 + rem;
        height: 38/16 + rem;
        margin: 0 auto;
    td {
        background: #F8F4EE ;
        border: 1px solid rgba(203,162,117,1);
        width: 99.42/16 + rem;
        height: 38/16 + rem;
        text-align: center;
        font-size: 13px;
        color: #63676C;
      }
    td:nth-child(1) {
        width: 144.42/16 + rem;
      }
    }
    .btn {
        width: 141/16 + rem;
        height: 40/16 + rem;
        background: url('../../assets/img/usdtgift/hd2_H5.png') no-repeat;
        background-size: cover;
        margin: 20px auto;
    }
    .title-gz {
      background: url("../../assets/img/usdtgift/hdgz_tit_h5.png") no-repeat 0 0;
      background-size: cover;
      width: (87/16) + rem;
      height: (46/16) + rem;
    //   margin-left: (25/16) + rem;
      margin: 0 auto;
      margin-bottom: (12/16) + rem;
    }
    .gz-item {
        // width: 335/16 + rem;
        // height: 600/16 + rem ;
        margin: 0 auto;
        line-height: 22px;
        padding: 0px 15px 15px 20px;
        p {
            padding: 3px 0;
            color: #65676D;
            span{
            color: #90672D;
            }
        }
    }
</style>