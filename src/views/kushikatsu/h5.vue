<template>
  <div class="container">
    <div class="bg">
     <div class="activict">
         <img class="activic-title" src="../../assets/img/kushikatsu/h5/hdsj_title_h5.png" alt="">
         <p class="time">2021年6月04日至2021年7月31日</p>
         <img class="activic-title" src="../../assets/img/kushikatsu/h5/hdnr_title_h5.png" alt="">
         <p>玩家投注体育竞彩任意串关（其中至少一场赔率 <span>≥1.7</span>）且过关成功，即可申请中奖金额<span>*5%</span>的额外奖金，当天上限<span>5000CNY</span>。奖金无需流水可直接提款。联系客服即可领取</p>
         <div class="info">
         <img src="../../assets/img/kushikatsu/h5/biaoge_h5.png" alt="">
         </div>
         <div class="service-btn" @click="jumpKefuNative">
         </div>
         <img class="activic-title" src="../../assets/img/kushikatsu/h5/hdgz_title_h5.png" alt="">
         <p>1.活动彩金无需流水即可提款，仅限竞彩厅 ;</p>
         <p>2.符合条件的会员请在注单结算后48小时内，将用户名、注单截图提交给在线客服进行领取 ；</p>
         <p>3.串关中必须至少一场赔率≥1.7 ;</p>
         <p>4.最终解释权归活动方所有</p>
     </div>
    </div>
  </div>
</template>
<script>
import {Toast} from "vant";
import md5 from "js-md5";
import { rando} from "@/assets/js/tools";
import appConfig from "@/config/config";
import axios from "axios";
export default {
  methods: {
    jumpKefuNative () {
      window.location = 'nbapp://openServicePage?data={}'
    },
    //  getBootstrap() {
    //   let productId = this.$store.state.appInfo.productId;
    //   let v = (v = this.$store.state.appInfo.v);
    //   let timestamp = Date.parse(new Date());
    //   let qid = md5(timestamp + rando(6));
    //   let appId = this.$store.state.appInfo.appId;
    //   let u = navigator.userAgent;
    //   let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
    //   let platform = !isAndroid ? 2 : 1;
    //   let webToken = this.$store.state.webToken;
    //   let extraPath = "/bootstrap";
    //   let extraStr = `${appId}.${platform}.${qid}.${timestamp}${
    //     webToken ? "." + webToken.token : ""
    //   }.${v}.${extraPath}`;
    //   let extraSalt = appConfig.salt;
    //   let extraSign = md5(md5(extraStr) + extraSalt); // 产品网关签名
    //   console.log(webToken.toke +'n00')
    //   console.log("extraStr", extraStr);
    //   let sendData = {
    //     app_type: 1,
    //     productId: productId,
    //   };
    //   return axios
    //     .post(this.$api.global.ttkefuUrl, sendData, {
    //       headers: {
    //         qid,
    //         appid: appId,
    //         v,
    //         timestamp,
    //         platform,
    //         sign: extraSign,
    //         token: webToken.token,
    //       },
    //     })
    //     .then((res) => {
    //       if (res.data.head.errCode === 200) {
    //         console.log(res.data.body.clientUrl)
    //         console.log(res.data.head)
    //         let a = document.createElement('a')
    //         a.target="_Blank"
    //         a.href = res.data.body.clientUrl
    //         a.click()
    //       } else {
    //         return Toast(res.data.body.errMsg);
    //       }
    //     })
    //     .catch((err) => {
    //       return Toast("获取客服链接失败");
    //     });
    // },
  }
  
};
</script>
<style lang="scss">
@import '@/assets/css/screen750.scss';
@import '@/assets/css/normaliz.scss';

</style>
<style lang="scss" scoped>
@import './h5.scss';
</style>