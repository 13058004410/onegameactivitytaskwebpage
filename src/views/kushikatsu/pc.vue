<template>
     <div class="bg" ref="main">
     <div class="activict">
         <img class="activic-title" src="../../assets/img/kushikatsu/pc/hdsj_title_pc.png" alt="">
         <p class="time">2021年6月04日至2021年7月31日</p>
         <img class="activic-title" src="../../assets/img/kushikatsu/pc/hdnr_title_pc.png" alt="">
         <p>玩家投注体育竞彩任意串关（其中至少一场赔率 <span>≥1.7</span>）且过关成功，即可申请中奖金额<span>*5%</span>的额外奖金，当天上限<span>5000CNY</span>。奖金无需流水可直接提款。联系客服即可领取</p>
         <div class="info">
         <img src="../../assets/img/kushikatsu/pc/biaoge_pc.png" alt="">
         </div>
         <div class="service-btn"  @click="getService">
         </div>
         <img class="activic-title" src="../../assets/img/kushikatsu/pc/hdgz_title_pc.png" alt="">
         <p>1.活动彩金无需流水即可提款，仅限竞彩厅 ;</p>
         <p>2.符合条件的会员请在注单结算后48小时内，将用户名、注单截图提交给在线客服进行领取 ；</p>
         <p>3.串关中必须至少一场赔率≥1.7 ;</p>
         <p>4.最终解释权归活动方所有 </p>
     </div>
    </div>
</template>
<script>
import {Toast} from "vant";
import md5 from "js-md5";
import { rando} from "@/assets/js/tools";
import appConfig from "@/config/config";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data(){
    return {
      isToken:''
    }
  },
  created(){
    this.getJcToken();
  },
  mounted () {
    let info = {
      message: "reloadPageSize",
      height: this.$refs.main.clientHeight,
    }
    window.parent.postMessage(info, "*")
    console.log(info)
  },
  methods: {
    openPCHandle (msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      }
      window.parent.postMessage(info, "*")
    },
    sortString (str) {
      return str.split('').sort().reverse().join('')
    },
    // 生成6位随机数
    randomFn () {
      var arr = ''
      for (var i = 0; i < 6; i++) {
        var num = Math.random() * 9
        num = parseInt(num, 10)
        arr += num
      }
      return arr
    },
    getJcToken(){
      let productId = 'a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi';
      let v = (v = this.$store.state.appInfo.v);
      let timestamp = Date.parse(new Date());
      let qid = md5(Date.now() + this.randomFn())
      let appId = 'eKGABC1F9i0NSiGvnvCWfzmeFdMMxPjE';
       let sendData = {
        productId: productId,
      };
      let sign = this.sortString(JSON.stringify(sendData)) + qid + appId + v + ""

      return axios.post('https://onecaipiao.com/_glaxy_e1s2e8_/webToken',sendData,{
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
     getService() {
      let productId = this.$store.state.appInfo.productId;
      let v = (v = this.$store.state.appInfo.v);
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = 'eKGABC1F9i0NSiGvnvCWfzmeFdMMxPjE';
      let u = navigator.userAgent;
      let platform = 4;
      let webToken = this.isToken;
      let extraPath = "/jc/customerService";
      let extraStr = `${appId}.${platform}.${qid}.${timestamp}${
        webToken ? "." + webToken : ""
      }.${v}.${extraPath}`;
      let extraSalt = appConfig.salt;
      const extraSign = md5(md5(extraStr) + extraSalt); // 产品网关签名
      console.log(webToken +'n001111111')
      console.log("extraStr", extraStr);
      let sendData = {
        // app_type: 1,
        productId: productId,
      };
      return axios
        .post(this.$api.global.ttkefuUrl, sendData, {
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
        .then((res) => {
          if (res.data.head.errCode === 200) {
            console.log(res.data.body.clientUrl)
            console.log(res.data.head)
            // window.location.href=res.data.body.clientUrl
            let temp =window.open("baout:blank", "", "fullscreen=1")
            temp.moveTo(0,0);
            temp.resizeTo(440, 800);
            temp.focus();
            temp.location = res.data.body.clientUrl
          } else {
            return Toast(res.data.body.errMsg);
          }
        })
        .catch((err) => {
          return Toast("获取客服链接失败");
        });
    },
  }
};
</script>
<style lang="scss">
@import '@/assets/css/normaliz.scss';
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
</style>
<style lang="scss" scoped>
@import './pc.scss';
</style>