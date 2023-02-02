<template>
  <div class="about">
    <div>
      <img class="logo" src="../../assets/logo.png" />
      <p class="appName">{{ appTitle }}</p>
      <p class="litterTitle">最安全便捷的游戏平台</p>
      <p class="version">v{{ appVersion }}</p>
    </div>

    <!-- <div class="typeAbout">
      <div class="type">
        <span class="title">188体育(新)</span>
        <span class="text">创新体育版面精准赛事数据</span>
      </div>

      <div class="type">
        <span class="title">沙巴体育</span>
        <span class="text">适合传统博彩玩家下注</span>
      </div>

      <div class="type">
        <span class="title">BTI体育</span>
        <span class="text">多元化的体育赛事投注</span>
      </div>

      <div class="type">
        <span class="title">ONE游戏</span>
        <span class="text">相对简单易懂易用，适合新老用户下注</span>
      </div>

      

      <div class="type">
        <span class="title">IM电竞</span>
        <span class="text">适合游戏玩家下注</span>
      </div>

      <div class="type">
        <span class="title">AG国际</span>
        <span class="text">真人捕鱼首选品牌</span>
      </div>

      <div class="type">
        <span class="title">AG旗舰</span>
        <span class="text">首创6张牌先发信誉名牌</span>
      </div>

      <div class="type">
        <span class="title">CQ9电子</span>
        <span class="text">百款游戏任君挑选</span>
      </div>
    </div> -->

    <div class="aboutUs">
      <p>
        ONE游戏有具有官方颁发的合法博彩牌照，并受其监管运营的线上博彩娱乐平台，致力于向每一个玩家提供公平、安全、透明的线上博彩环境。
      </p>
      <!-- <p>
        作为业内顶尖的以传统体育、真人视讯、捕鱼电游、电子竞技为主的线上博彩平台，ONE游戏向您提供具备齐全的盘口，最多元化的玩法；拥有业界最丰富的直播资源，全球赛事、精彩呈现，助您实时掌握赛事讯息，抢占投注先机。
        <br/>
        ONE游戏活动优惠力度，始终位居行业榜首；并具备最为专业的客户服务团队，24小时不间断向您提供最贴心的服务。
      </p>
      <p>
        ONE游戏追求向每一位玩家提供最卓越的线上博彩游戏体验，这个目标一贯如此，且矢志不移。
      </p>
      <p>—— ONE游戏团队</p> -->
    </div>
    <div class="zzhb"><img src="../../assets/img/about/zzhb.png" alt=""></div>
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
      appTitle: "ONE游戏",
      downloadUrl: "official.onesports.app",
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

      let v = appConfig.v;
      let timestamp = Date.parse(new Date());
      let qid = md5(timestamp + rando(6));
      let appId = appConfig.appId;
      let platform = appConfig.platform;
      let webToken = this.$store.state.webToken;
      let extraPath = "/bootstrap";
      let extraStr = `${appId}.${platform}.${qid}.${timestamp}${
        webToken ? "." + webToken.token : ""
      }.${v}.${extraPath}`;
      let extraSalt = appConfig.salt;
      let extraSign = md5(md5(extraStr) + extraSalt); // 产品网关签名
      console.log("extraStr", extraStr);
      let sendData = {
        app_type: 1,
        productId: productId,
      };
      await axios
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
          let that = this;
          let errCode = res.data.head.errCode;
          if (errCode === 200) {
            let { head, body } = res.data;
            that.downloadUrl =
              body.app_download_url || "official.onesports.app";
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
  padding: 40px 0 0 0;
  min-width: 320px;
  max-width: 750px;
  text-align: center;
  background: #F5F5F5;
}

.logo {
  height: 60px;
  width: 60px;
}

.appName {
  font-weight: bold;
  margin-top: 8px;
  // width: 71px;
  height: 25px;
  font-family: PingFangSC-Semibold;
  font-size: 18px;
  color: #303133;
  text-align: center;
  font-weight: 600;
}

.version {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #C0C4CC;
  text-align: center;
  font-weight: 400;
}

.litterTitle {
  font-size: 13px;
  color: #606266;
  margin: 5px 0;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #606266;
  text-align: center;
  font-weight: 400;
}

.typeAbout {
  text-align: left;
  margin: 5px 25px 10px 25px;
}

.type {
  min-height: 46px;
  border-bottom: 0.5px solid #ddd;
  display: flex;
  font-size: 14px;
}

.type .title {
  min-width: 60px;
  color: #303133;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: PingFangSC-Semibold;
  font-size: 13px;
  color: #303133;
  text-align: center;
  font-weight: 600;
}

.type .text {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 18px;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #303133;
  font-weight: 400;
}

.aboutUs {
  text-align: left;
  margin: 0px 25px 25px 25px;
  line-height: 24px;
  padding-bottom: 10px;
  font-size: 13px;
}

.aboutUs p {
  padding-top: 13px;
  font-family: PingFangSC-Regular;
  font-size: 10px;
  color: #606266;
  line-height: 20px;
  font-weight: 400;
  }

.appLink {
  padding: 0 25px;
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
}
.partner {
  margin-bottom: 16px;
  div:first-child {
    margin-bottom: 11px;
    height: 9px;
    > div:first-child {
      margin: 0 23px;
      height: 0.5px;
      background: #dddddd;
    }
    span {
      position: relative;
      font-size: 13px;
      color: #303133;
      text-align: center;
      top: -14px;
      background: #f5f5f5;
      display: inline-block;
      width: 100px;
    }
  }
  .img {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    // img:nth-child(1) {
    //   margin-right: 30px;
    // }
    // img:nth-child(2) {
    //   margin-right: 30px;
    // }
    img {
      height: 25px;
      margin: 0 17px;
    }
    .bti {
      position: relative;
      left: -33px;
    }
    .cq9 {
      position: relative;
      left: -15px;
    }
    .eight {
      position: relative;
      left: 10px;
    }
  }
}
.zzhb {
  width: 86%;
  height: 16%;
  margin:0 auto;
  margin-bottom: 30px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>