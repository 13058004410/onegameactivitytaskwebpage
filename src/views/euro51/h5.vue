<template>
  <div class="app-view">
    <div class="box-banner">
      <img src="../../assets/img/euro51/ozb_bannerh5.jpg" alt />
    </div>
    <div class="box-info">
      <div class="box-title">
        <i></i>
        <span>活动内容</span>
        <i></i>
      </div>
      <div class="box-cont">欧洲杯期间，51竞彩会员首次存款，可向在线客服申请领取51元的红包，红包需足额购彩才可提款。</div>
      <div class="btn-sure" @click="jumpKefuNative"></div>
    </div>
    <div class="box-rule">
      <div class="box-title">
        <i></i>
        <span>活动规则</span>
        <i></i>
      </div>
      <div class="box-cont">
        <p>1.会员请在活动期间首次存款的48小时之内找在线客服领取，逾期作弃权处理。</p>
        <p>2.红包数量为2000个，先到先得，送完即止。</p>
        <p>3.同一手机号、姓名、IP地址等信息仅可注册一个51竞彩账号，如发现羊毛党，51竞彩将保留无限期审核扣回红包及所产生利润的权利。</p>
        <p>4.会员参加任何活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归51竞彩所有。</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant"
import md5 from "js-md5"
import { rando } from "@/assets/js/tools"
import appConfig from "@/config/config"
import axios from "axios"
import { mapActions } from "vuex"
import { openUrl } from '@/util/util'
export default {
  data () {
    return {
      isToken: ''
    }
  },
  created () {
    this.getJcToken()
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
    jumpKefuNative () {
      window.location = 'nbapp://openServicePage?data={}'
    },
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
    getJcToken () {
      let productId = 'a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi'
      let v = (v = this.$store.state.appInfo.v)
      let timestamp = Date.parse(new Date())
      let qid = md5(Date.now() + this.randomFn())
      let appId = 'eKGABC1F9i0NSiGvnvCWfzmeFdMMxPjE'
      let sendData = {
        productId: productId,
      }
      let sign = this.sortString(JSON.stringify(sendData)) + qid + appId + v + ""

      return axios.post('https://onecaipiao.com/_glaxy_e1s2e8_/webToken', sendData, {
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
          if (res.data.head.errCode == '0000') {
            this.isToken = res.data.body.info
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getService () {
      let productId = this.$store.state.appInfo.productId
      let v = (v = this.$store.state.appInfo.v)
      let timestamp = Date.parse(new Date())
      let qid = md5(timestamp + rando(6))
      let appId = 'eKGABC1F9i0NSiGvnvCWfzmeFdMMxPjE'
      let u = navigator.userAgent
      let platform = 4
      let webToken = this.isToken
      let extraPath = "/jc/customerService"
      let extraStr = `${appId}.${platform}.${qid}.${timestamp}${webToken ? "." + webToken : ""
        }.${v}.${extraPath}`
      let extraSalt = appConfig.salt
      const extraSign = md5(md5(extraStr) + extraSalt) // 产品网关签名
      console.log(webToken + 'n001111111')
      console.log("extraStr", extraStr)
      let sendData = {
        // app_type: 1,
        productId: productId,
      }
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
            openUrl(res.data.body.clientUrl)
          } else {
            return Toast(res.data.body.errMsg)
          }
        })
        .catch((err) => {
          return Toast("获取客服链接失败")
        })
    },
  }
};
</script>
<style lang="scss">
@import '@/assets/css/normaliz.scss';
</style>
<style lang="scss" scoped>
.box-banner {
  img {
    width: 100%;
  }
}
.box-info {
  margin-top: 5px;
  text-align: center;
  padding: 0 20px;
  .box-title {
    padding-top: 24px;
    font-size: 16px;
    color: #029fba;
    line-height: 32px;
    font-weight: 600;
    border-top: 1px solid #8f8b8c;
    i,
    span {
      display: inline-block;
      vertical-align: middle;
    }
    i {
      margin: 0 6px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #029fba;
    }
  }
  .box-cont {
    margin-top: 8px;
    font-size: 13px;
    line-height: 20px;
    color: #8f8b8c;
    font-weight: 600;
  }
}
.box-rule {
  padding: 24px 17px 30px;
  color: #ffffff;
  background-color: #029fba;
  .box-title {
    font-size: 18px;
    text-align: center;
    i,
    span {
      display: inline-block;
      vertical-align: middle;
    }
    i {
      margin: 0 6px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #fff;
    }
  }
  .box-cont {
    margin-top: 15px;
    font-size: 13px;
    line-height: 24px;
  }
}
.btn-sure {
  margin: 20px auto;
  width: 175px;
  height: 34px;
  background: url('../../assets/img/euro51/pc_btn.png') no-repeat 0 0;
  background-size: cover;
}
</style>