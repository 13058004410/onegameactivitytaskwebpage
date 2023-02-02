<template>
<div>
  <div class="about">
    <div>
      <img class="logo" src="../../assets/img/Lottery/oneJc_logo1.png" />
      <p class="appName">{{ appTitle }}</p>
      <p class="litterTitle">最安全便捷的竞彩平台</p>
      <p class="version">v{{ appVersion }}</p>
    </div>
    <div class="aboutUs">
      <p>51竞彩是一家依托于实体彩票店的技术服务平台，以”用户为先，信誉为本“的宗旨为广大体彩用户提供最优越的在线购彩体验，致力于向每一个玩家提供安全、透明、方便、快捷的购彩环境。</p>
      <p>作为业内顶尖的的服务平台，51竞彩向您提供完整的竞彩赛事和盘口，最前沿的赛事情报资讯和赛前分析，实时比分，助你实时掌握赛事讯息，抢占投注先机。
      </p>
    </div>
  </div>
    <div class="appLink">
      <div class="link">
        <p>APP下载地址</p>
        <p class="url" id="url">{{ downloadUrl }}</p>
      </div>
      <a
        class="button"
        v-clipboard:copy="downloadUrl"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        >复制链接</a
      >
    </div>

</div>
</template>
<script>
import { mapActions } from "vuex";
import { getQueryVariable, rando, reverseStrings } from "../../assets/js/tools";
import appConfig from "@/config/config";
import axios from "axios";
import md5 from "js-md5";
export default {
  data() {
    return {
      appTitle: "51竞彩",
      downloadUrl: "https://onesportsjc.com",
      appVersion: "1.0.0",
    };
  },
  computed: {
    appInfo() {
      return this.$store.state.appInfo;
    },
    webTokenStore() {
      return this.$store.state.webToken;
    },
  },
  created() {
    this.downloadUrl=localStorage.getItem('downloadUrl')
    let that = this;
    that.$loading.show({
      text: "Loading",
    });
    that.AWebToken();
    setTimeout(() => {
      that.$loading.hide();
    }, 1000);
    that.getAppVersion();
  },
  watch: {
    webTokenStore: function () {
      let that = this;
      that.$loading.hide();
      that.getBootstrap();
    },
  },
  methods: {
    ...mapActions(["AWebToken", "AH5Token"]),
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
      this.$toastMessage({ message: "复制成功", time: 2000 });
    },
    //复制成功的回调
    onCopy(e) {
      this.$toastMessage({ message: "复制成功", time: 2000 });
    },
    //复制失败的回调
    onError(e) {
      this.$toastMessage({ message: "复制失败", time: 2000 });
    },
    // 请求about接口
    async getAboutData() {
      let productId = this.$store.state.appInfo.productId;
      let loginName = this.$store.state.appInfo.loginName;

      let v = this.$store.state.appInfo.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = this.$store.state.appInfo.appId;
      let h5Token = this.$store.state.h5Token;
      let sendData = {
        productId: productId,
        loginName: loginName,
      };
      let sendDataString = JSON.stringify(sendData);
      let sign = md5(
        reverseStrings(sendDataString) +
          qid +
          appId +
          v +
          h5Token.token +
          h5Token.u2token
      );
      await axios
        .post(this.$api.global.about, sendData, {
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
          let that = this;
          let errCode = res.data.head.errCode;
          if (errCode === 200) {
            console.log("成功", body);
            this.downloadUrl = body.about_url || "onesports.app";
          } else {
            this.$toastMessage({ message: res.data.head.errMsg });
          }
        });
    },
    // 请求bootstrap接口
    async getBootstrap() {
      let productId = this.$store.state.appInfo.productId;
     let sendData = {
        productId: productId,
      };
      let v = appConfig.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = appConfig.appId;
      let platform = appConfig.platform;
      let webToken = this.$store.state.webToken;
      let extraPath = "/jc/bootstrap";
      let extraStr = `${appId}.${platform}.${qid}.${timestamp}${
        webToken ? "." + webToken.token : ""
      }.${v}.${extraPath}`;
      let extraSalt = appConfig.salt;
      let extraSign = md5(md5(extraStr) + extraSalt); // 产品网关签名
      console.log("extraStr", extraStr);
 
      await axios
        .post(this.$api.global.jcbootstrap, sendData, {
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
          let that = this;
          let errCode = res.data.head.errCode;
          if (errCode === 200) {
            let { head, body } = res.data;
            that.downloadUrl =
              body.app_download_url || "https://onesportsjc.com";
              localStorage.setItem('downloadUrl',body.app_download_url)
          } else {
            this.$toastMessage({ message: res.data.head.errMsg });
          }
        });
    },
    // 获取版本号
    getAppVersion() {
      let appVersion = getQueryVariable("appVersion") || "1.0.0";
      this.appVersion = appVersion;
    },
  },
};
</script>
<style lang="scss">
@import "../../assets/css/normaliz.scss";
</style>
<style lang="scss" scoped>
html {
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  font-size: 14px;
  color: #303133;
  background: #fff;
}
.about {
  margin: auto;
  width: 100%;
  min-width: 320px;
  max-width: 750px;
  text-align: center;
  padding-top: 40px;
}

.logo {
  height: 68px;
  width: 68px;
}

.appName {
  font-size: 18px;
  font-weight: bold;
  margin-top: 18px;
  margin-bottom: 5px;
}

.version {
  font-size: 12px;
  color: #c0c4cc;
}

.litterTitle {
  font-size: 13px;
  color: #606266;
  margin: 5px 0;
}
.aboutUs {
  text-align: left;
  margin: 25px;
  line-height: 24px;
  padding-bottom: 10px;
  font-size: 13px;
}

.aboutUs p {
  margin-bottom: 10px;
  color: #606266;
}

.appLink {
  position: fixed;
  width: 100%;
  bottom: 0px;
  // margin: 0 25px;
  // border-top: 0.5px solid #f0f1f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  background: #f6f8fa;
}

.link {
  padding: 10px 0;
  text-align: left;
  padding-left: 25px;
}

.link p {
  font-size: 12px;
  color: #606266;
}

.link .url {
  font-size: 14px;
  font-weight: bold;
  color: #303133;
}

.button {
  background: #ffffff;
  border-radius: 16px;
  color: #606266;
  padding: 7px 16px;
  font-size: 14px;
  margin-right: 20px;
}
</style>