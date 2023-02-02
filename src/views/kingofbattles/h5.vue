<template>
  <div class="app-views">
      <div class="banner"></div>
      <div class="views-title"></div>
      <div class="title-info">
          <div class="title-info1">
              <p>百战称王大赛</p>
          </div>
          <div class="title-info2">
              <p>
                  到开赛时间，报名人数>=最低开赛人数（即开赛）。报名人数上限: 2000名。
              </p>
              <p>
                  若到开赛时间，报名人数&gt;最低开赛人数，比赛将自动取消并退还用户报名费用（该比赛用户使用门票报名，则退还门票；使用现金报名，则退还现金）。
              </p>
              <!-- <p>报名，则退还现金）。</p> -->
          </div>
      </div>
      <div class="btn" @click="openAG"></div> 
      <div class="title-details"></div>
      <div class="title-details1">
          <p>百战称王·场场万元大奖·等你来赢！</p>
      </div>
      <div class="content"></div>
      <div class="Terms-title"></div>
      <div class="Terms-info">
          <p>1，“百战称王”大赛每日2场，16点及20点比赛。</p>
          <p>2，所有旗舰厅真钱会员均可参加。适用于PC，安卓，IOS，HTML5版。</p>
          <p>3，关于旗舰厅“百战称王”大赛的送票时间段，门票用途规则，请仔细阅读本比赛专题，旗舰厅不承担因玩家未仔细阅读造成的损失。</p>
          <p>4，为保证比赛返利及广大新老会员，每个会员限同一个账户（同一台电脑/手机，同一个住址和同一个ip地址）参与，切任何非法手段
            包括但不限于对冲，单边，合谋作弊等，将取消领奖资格，严重舞弊者旗舰厅有权在不事先通知的情况下作封号处理或扣除相关获利。</p>
          <p>5，因不可抗拒因素造成比赛中断，将取消该比赛；受此影响而取消时将全额退还真钱报名玩家的报名费用。正常开始至结束的比赛，开
           <br> 赛后不可退赛，不返还门票或真钱报名费。</p>
          <p>6，“百战称王”大赛的奖金将在比赛结束后系统自动派发，比赛结束后请稍加等待。</p>
          <p>7，比赛时间为北京时间，百家乐大赛报表中的时间为美国东部时间（北京时间-12小时）。</p>
          <p>8，会员参加旗舰厅“百战称王”大赛，即视为同意本比赛条款。</p>
          <p>9，旗舰厅对赛事运营过程中出现的调整与变化及临时关闭保留最终解释权。</p>
      </div>
  </div>
</template>

<script>
import {  Dialog } from "vant";
import { UA } from '@/util/ua';
import { mapActions, mapMutations } from "vuex";
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
        isLogin() {
            return this.$store.state.h5Token.token == undefined;
        },
        // toLogin() {  
        //     if(this.website){
        //         this.openPCHandle("openRecharge");
        //     }else {
        //         window.location = "nbapp://openLoginPage?data={}";
        //     }
        // },
        openAG() {
            if(this.website) {
                this.openPCHandle("openGameAGQJ")  //openGameAGQJ
            } else {
               window.location = "nbapp://openGameAGQJ?data={}";
            }
        },
        // toJoin() {
        //     if (this.isLogin() && !this.loginStatus) {
        //         Dialog.confirm({
        //         message: "您还没登录哦，\n请登录后再进行操作吧！",
        //         confirmButtonText: "去登录",
        //         confirmButtonColor: "#576B95",
        //         })
        //         .then(() => {
        //         this.toLogin();
        //         })
        //         .catch(() => {
        //         });
        //         return;
        //     } else {
        //         this.openAG()
        //     }   
        // }
    }
}
</script>
<style lang="scss">
@import "@/assets/css/screen750.scss";
@import "@/assets/css/normaliz.scss";
</style>
<style lang="scss" scoped>
.app-views {
    background: #0f1022;
    padding-bottom: 15px;
 .banner {
     width: 100%;
     height: 285/16 + rem;
     background: url('../../assets/img/kingofbattles/H5banner.jpg') no-repeat;
     background-size: cover;
 }
 .views-title {
     width: 152/16 + rem;
     height: 58/16 + rem;
     background: url('../../assets/img/kingofbattles/bsjjh5.png') no-repeat;
     background-size: cover;
     margin: 15px auto;
 }
 .title-info {
     width: 331/16 + rem;
     height: 193/16 + rem;
     background: url('../../assets/img/kingofbattles/bzcwbg.png') no-repeat;
     background-size: 100% 100%;
     margin: 0 auto;
     .title-info1 {
        width: 92/16 + rem;
        height: 21/16 + rem;
        margin: 0 auto;
        padding-top: 8px;
        p {
            font-family: PingFangSC-Regular;
            font-size: 15px;
            color: #FCD380;
            line-height: 21px;
            
        }
     }
     .title-info2 {
         width: 253/16 + rem;
         height: 126/16 + rem;
         margin: 15px auto;
         p {
             font-size: 13px;
             color: #FFFFFF;
             text-align: center;
         }
         p:first-child {
             margin-bottom: 20px;
         }
         
     }
 }
 .btn {
     width: 194/16 + rem;
     height: 33/16 + rem;
     background: url("../../assets/img/kingofbattles/anH5.png") no-repeat;
     background-size: 100% 100%;
     margin: 30px auto;
 }
 .title-details {
     width: 152px;
     height: 58px;
     background: url('../../assets/img/kingofbattles/bsxqh5.png') no-repeat;
     background-size: cover;
     margin: 0 auto;
 }
 .title-details1 {
     font-size: 15px;
     color: #FFFFFF;
     text-align: center;
     margin: 15px auto;
 }
 .content {
    height: 472/16 + rem;
    background: url('../../assets/img/kingofbattles/bgH5.png') no-repeat;
    background-size: cover;
    margin: 15px auto;
 }
 .Terms-title {
    width: 152px;
    height: 58px;
    background: url('../../assets/img/kingofbattles/bstkh5.png') no-repeat;
    background-size: cover;
    margin: 15px auto;
 }
 .Terms-info {
    width: 324/16 + rem;
    font-size: 13px;
    color: #FFFFFF;
    margin: 15px auto;
    line-height: 20px;
    p {
        margin-top: 15px;

    }
 }
}
</style>