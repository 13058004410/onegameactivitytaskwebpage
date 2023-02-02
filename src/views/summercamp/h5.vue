<template>
  <!-- ONE 众瞩目 首存红利40% -->
  <div class="app-view">
    <div class="title-nr"></div>
    <div class="nr-item">
        <p>ONE体育学堂夏令营开启了，ONE体育新老会员（2星级及以上）可报名加入ONE体育学堂夏令营，报名入学后即可联系学堂教导主任领取<span>开学礼金88元</span></p>
    </div>
    <div class="table-title">
        <div>活动条件</div>
        <div>开学礼金</div>
        <div>流水要求</div>
    </div>
      <table class="table1">
        <tbody>
        <tr>
            <td>加入ONE体育夏令营
            </td>
            <td>88CNY
               
            </td>
            <td><span>1倍水</span>
            </td>
        </tr>
        </tbody>
       
    </table>
    <div class="title-nr1"></div>
    <div class="table-title">
        <div>神秘活动</div>
        <div>最高礼金</div>
    </div>
      <table>
        <tbody>
        <tr>
            <td>VIPXXX
            </td>
            <td>3888
               
            </td>
        </tr>
        <tr>
            <td>VIPXXX
            </td>
            <td>20000
               
            </td>
        </tr>
        <tr>
            <td>VIPXXX
            </td>
            <td>???
               
            </td>
        </tr>
        <tr>
            <td>VIPXXX
            </td>
            <td>???
               
            </td>
        </tr>
        </tbody>
       
    </table>
    <div class="nr-item2">
        <p>注：各类神秘活动仅限夏令营学员专享</p>
    </div>
    
    <div class="title-nr2"></div>
    <div class="nr-item">
        <p><span>下载下方聊天 ，注册账户之后对应的搜索学堂账户，即可申请入学</span></p>
    </div>
      <div class="nr-item1">
        <p>如有疑问可联系ONE体育在线客服咨询相关入学事宜</p>
      </div>
    <div class="table-title">
        <div>软件名称</div>
        <div>学堂账户</div>
        <div>下载地址</div>
    </div>
      <table class="table1">
        <tbody>
        <tr>
            <td>
              <img src="../../assets/img/summercamp/talk_icon_h5.png" alt="">
              TalkTalk</td>
            <td>one188</td>
            <td><span><a
        class="button"
        v-clipboard:copy="downloadUrl"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        >点击复制</a></span></td>
        </tr>
        </tbody>
       
    </table>
    <!-- <div class="btn" @click="jumpKefuNative"></div> -->
     <div class="title-gz"></div>
     <div class="gz-item">
        <p>1.开学礼金需完成<span>1倍流水</span>即可，不限场馆；</p>
        <p>2.本活动与洗码优惠共享，不与其他任意优惠共享流水条件；</p>
        <p>3.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育会员账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利；</p>
        <p>4.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
     </div>
  </div>
</template>
<script>
import { Toast } from "vant"
import { mapActions, mapMutations } from "vuex";
import { UA } from '@/util/ua'
export default {
    components: {
    },
    data() {
        return {
        downloadUrl: "https://tt456.app/",
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
    
    // 复制功能
    copyUrl() {
      var Url2 = this.downloadUrl;
      var oInput = document.createElement("input");
      oInput.value = Url2;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = "oInput";
      oInput.style.display = "none";
      Toast("复制成功")
    },
    //复制成功的回调
    onCopy(e) {
      Toast("复制成功")
    },
    //复制失败的回调
    onError(e) {
      Toast("复制失败")
    },
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
    background: #F5F9FA url("../../assets/img/summercamp/BG_H5.jpg") no-repeat 0 0;
    background-size: contain;
    padding-top: (420/16) + rem;
  background-color: #E2EBDE;
    p {
        font-size: 14px;
        color: #575F58;
        }
    span {
        color: #FF4B08;
    }
    }
    .title-nr {
      background: url("../../assets/img/summercamp/hdnr_tit_h5.png") no-repeat 0 0;
      background-size: cover;
      width: (115/16) + rem;
      height: (25/16) + rem;
      margin-left: (25/16) + rem;
      margin-bottom: (12/16) + rem;
    }
    .title-nr1 {
      background: url("../../assets/img/summercamp/gdxlyhd_tit_h5.png") no-repeat 0 0;
      background-size: 100%;
      width: (195/16) + rem;
      height: (32/16) + rem;
    //   margin-left: (25/16) + rem;
        margin: 0 auto;
      margin-bottom: (12/16) + rem;
      margin-top: 20px;
    }
    .title-nr2 {
      background: url("../../assets/img/summercamp/rxfs_tit_h5.png") no-repeat 0 0;
      background-size: cover;
      width: (127/16) + rem;
      height: (32/16) + rem;
    //   margin-left: (25/16) + rem;
    margin: 0 auto;
      margin-bottom: (12/16) + rem;
    }
    .nr-item {
        width: 325/16 + rem;
        height: 50/16 + rem;
        margin: 0 auto;
    }
    .nr-item1 {
        width: 325/16 + rem;
        // height: 40/16 + rem;
        margin: 0 auto;
        color: #575F58;
    }
    .nr-item2 {
        width: 325/16 + rem;
        height: 40/16 + rem;
        margin: 0 auto;
        color: #575F58;
        p{
        margin-top: 10px;
        }
    }
    .table-title {
        width:335.42/16 + rem ;
        height: 40/16 + rem;
        background: #75A571;
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
        border: 1px solid #75A571;
        width: 114.42/16 + rem;
        height: 53/16 + rem;
        text-align: center;
        font-size: 13px;
        color: #575F58;
        img{
            width: 18px;
            vertical-align: middle;
        }
      }
    }
    .btn {
        width: 141/16 + rem;
        height: 40/16 + rem;
        background: url('../../assets/img/summercamp/lq_btn_h5.png') no-repeat;
        background-size: cover;
        margin: 20px auto;
    }
    .title-gz {
      background: url("../../assets/img/summercamp/hdgz_tit_h5.png") no-repeat 0 0;
      background-size: cover;
      width: (115/16) + rem;
      height: (25/16) + rem;
      margin-left: (25/16) + rem;
      margin-bottom: (12/16) + rem;
      margin-top: 20px;
    }
    .gz-item {
        width: 335/16 + rem;
        // height: 600/16 + rem ;
        margin: 0 auto;
        line-height: 22px;
  background-color: #E2EBDE;
        padding-bottom: 20px;
        p {
            padding: 3px 0;
        }
    }
</style>