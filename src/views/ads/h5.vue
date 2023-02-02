<template>
  <div id="my-app-view" ref="main">
    <!-- <div v-html="data" v-lazy-container="{selector: 'img'}"></div> -->
    <div v-html="data"></div>
  </div>
</template>

<script>
import {
  Icon,
  Dialog,
  Field,
  Empty,
  Overlay,
  List,
  Toast,
  Button,
  Form
} from "vant"
import md5 from "js-md5"
import { rando, getRandom, formatDate, reverseStrings } from "@/assets/js/tools"
import appConfig from "@/config/config"
import { mapActions, mapMutations } from "vuex"
import axios from "axios"
export default {
  data () {
    return {
      data: ''
    }
  },
  mounted () {
    const that = this
    setInterval(() => {
      let iframeH = Math.max(that.$refs.main.clientHeight, that.$refs.main.scrollHeight)
      that.openPCHandle("reloadPageSize", {
        height: iframeH,
      })
    }, 100)
  },
  created () {
    let id = this.geturlprram('id')
    this.discountView(id)
  },
  methods: {
    ...mapActions(["AWebToken", "AH5Token"]),
    ...mapMutations({
      setAppinfoTickt: "SET_APPINFO_TICKET",
      setAppinfoLoginName: "SET_APPINFO_LOGINNAME",
    }),
    openPCHandle (msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      }
      window.parent.postMessage(info, "*")
    },
    geturlprram (name) {
      let url = window.location.href
      let params = url.substr(url.lastIndexOf('?') + 1).split('&')
      for (let i = 0; i < params.length; i++) {
        let param = params[i]
        let key = param.split('=')[0]
        let value = param.split('=')[1]
        if (key === name) {
          return value
        }
      }
    },
    discountView (id) {
      let sendData = {
        id: id
      }

      let timestamp = Date.parse(new Date())
      let qid = md5(timestamp + rando(6))
      let appId = this.$store.state.appInfo.appId;;
      let v = this.$store.state.appInfo.v
      let sendDataString = JSON.stringify(sendData)
      let domainName = this.$store.state.appInfo.domainName
      let u = navigator.userAgent
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1
      let platform = !isAndroid ? 2 : 1
      let str = this.reverseStrings(sendDataString) + qid + appId + v
      let sign = md5(str)
      let headers = {
        qid,
        appId,
        v,
        platform,
        sign,
        domainName,
        timestamp,
      }
      axios.post(this.$api.ads.discountView, sendData, {
        headers,
      })
        .then((data) => {
          let { head, body } = data.data
          if (head.errCode == 200) {
            // this.data = body.discount.view.replace(/src/g, 'data-src')
            this.data = body.discount.view
          } else {
          }
        })
        .catch((err) => {
          Toast("地址不对")
        })
    },
    reverseStrings (strs) {
      return strs.split("").sort().reverse().join("")
    },
    jumpKefuNative () {
      window.location = "nbapp://openServicePage?data={}"
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/normaliz.scss';
#my-app-view {
  width: 100%;
  div {
    width: 100%;
    // img{width: 100%;}
  }
}
</style>
<style lang="scss" scoped>
#my-app-view {
  width: 100%;
  div {
    width: 100%;
    // img{width: 100%;}
  }
}
</style>