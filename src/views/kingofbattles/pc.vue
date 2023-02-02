<template>
  <div class="app-views" ref="main">
      <div class="banner"></div>
      <div class="views-title"></div>
      <div class="title-info">
          <div class="title-info1">
              <p>百战称王大赛</p>
          </div>
          <div class="title-info2">
              <p>到开赛时间，报名人数>=最低开赛人数（即开赛）。报名人数上限：20000名。</p>
              <p>若到开赛时间，报名人数&gt;最低开赛人数，比赛将自动取消并退还用户报名费用 (该比赛用户使用门票报名，则退还门票；使用现金报名，则退还现金）。</p>
          </div>
      </div>
      <div class="btn" @click="openAG"></div> 
      <div class="title-details"></div>
      <div class="title-details1">
          <p>百战称王·场场万元大奖·等你来赢！</p>
      </div>
      <div class="content">
          <div class="content1"></div>
          <div class="content2"></div>
      </div>
      <div class="Terms-title"></div>
      <div class="Terms-info">
           <p><span>1</span>&nbsp;&nbsp;“百战称王”大赛每日2场，16点及20点比赛。</p>
           <p><span>2</span>&nbsp;&nbsp;&nbsp;所有旗舰厅真钱会员均可参加。适用于PC，安卓，IOS，HTML5版。</p>
           <p><span>3</span>&nbsp;&nbsp;&nbsp;关于旗舰厅“百战称王”大赛的送票时间段，门票用途规则，请仔细阅读本比赛专题，旗舰厅不承担因玩家未仔细阅读造成的损失。</p>
           <p><span>4</span>&nbsp;&nbsp;&nbsp;为保证比赛返利及广大新老会员，每个会员限同一个账户（同一台电脑/手机，同一个住址和同一个ip地址）参与，切任何非法手段包括<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但不限于对冲，单边，合谋作弊等，将取消领奖资格，严重舞弊者旗舰厅有权在不事先通知的情况下作封号处理或扣除相关获利。</p>
           <p><span>5</span>&nbsp;&nbsp;&nbsp;因不可抗拒因素造成比赛中断，将取消该比赛；受此影响而取消时将全额退还真钱报名玩家的报名费用。正常开始至结束的比赛，开赛<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;后不可退赛，不返还门票或真钱报名费。</p>
           <p><span>6</span>&nbsp;&nbsp;“百战称王”大赛的奖金将在比赛结束后系统自动派发，比赛结束后请稍加等待。</p>
           <p><span>7</span>&nbsp;&nbsp;&nbsp;比赛时间为北京时间，百家乐大赛报表中的时间为美国东部时间（北京时间-12小时）。</p>
           <p><span>8</span>&nbsp;&nbsp;&nbsp;会员参加旗舰厅“百战称王”大赛，即视为同意本比赛条款。</p>
           <p><span>9</span>&nbsp;&nbsp;&nbsp;旗舰厅对赛事运营过程中出现的调整与变化及临时关闭保留最终解释权。</p>
      </div>
  </div>
</template>

<script>
import {  Dialog } from "vant";
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
        // this.$loading.show({
        // text: "Loading",
        // })
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
        //     this.openPCHandle("openRecharge");
        // },
        openAG() {
            this.openPCHandle("openGameAGQJ");  //openGameAGQJ
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
        // toJoin() {
        //     if (!this.loginStatus) {
        //         Dialog.confirm({
        //         message: "您还没登录哦，\n请登陆后再进行操作吧！",
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
        //         console.log("asggggggggg");
        //         this.openAG()
        //     }    
        // }
    }
}
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
</style>
<style lang="scss">
@import "@/assets/css/normaliz.scss";
</style>
<style lang="scss" scoped>
$count: 95;
.app-views {
    background: #0f1022;
    padding-bottom: 15px;
 .banner {
     height: 520/$count + rem;
     background: url('../../assets/img/kingofbattles/PCbanner.jpg') no-repeat;
     background-size: 100% 100%;
 }
 .views-title {
     width: 326/$count + rem;
     height: 127/$count+ rem;
     background: url('../../assets/img/kingofbattles/bsjjpc.png') no-repeat;
     background-size: 100% 100%;
     margin: 15px auto;
 }
 .title-info {
     width: 970/$count + rem;
     height: 228/$count + rem;
     margin: 0 auto;
     .title-info1 {
        width: 163/$count + rem;
        height: 39/$count + rem;
        background: #57E0FF;
        
         p {
            font-size: 22/$count + rem;
            color: #102F60;
            font-weight: 700;
            line-height: 39/$count + rem;
            text-align: center;
         }
     }
      .title-info2 {
         p {
            font-size: 20px;
            color: #FFFFFF;
            letter-spacing: 0;
            font-weight: 400;
            margin: 20px 0;
            text-align: left;
         }
     }
 }
 .btn {
     width: 334/$count + rem;
     height: 57/$count + rem;
     background: url("../../assets/img/kingofbattles/ljcypc.png") no-repeat;
     background-size: 100% 100%;
     margin: 50px auto 100px;
 }
 .title-details {
     width: 326/$count + rem;
     height: 127/$count + rem;
     background: url('../../assets/img/kingofbattles/bsxqpc.png') no-repeat;
     background-size: 100% 100%;
     margin: 130px auto 15px;
 }
 .title-details1 {
     font-size: 22px;
     color: #FFFFFF;
     text-align: center;
     margin: 15px auto;
 }
 .content {
    width: 1106/$count + rem;
    height: 1393/$count + rem;
    margin: 80px auto;
    background: url("../../assets/img/kingofbattles/bgpc.png") no-repeat;
    background-size: 100% 100%;
 }
 .Terms-title {
    width: 326/$count + rem;
    height: 127/$count + rem;
    background: url('../../assets/img/kingofbattles/bstkpc.png') no-repeat;
    background-size: 100% 100%;
    margin: 15px auto;
 }
 .Terms-info {
    width: 1226/$count + rem;
    font-size: 20px;
    color: #FFFFFF;
    margin: 15px auto;
    p {
        margin-top: 20px;
    }
    span {
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #161d53;
        text-align: center;
        line-height: 24px;
    }
 }
}
</style>