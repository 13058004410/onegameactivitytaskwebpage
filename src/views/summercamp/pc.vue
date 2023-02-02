<template>
  <div class="main" ref="main">
    <!-- <div class="t1"></div> -->
    <div class="content">
      <div class="t1"></div>
      <div class="t1-item">
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
      <div class="t3"></div>
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
      <div class="t1-item">
        <p>注：各类神秘活动仅限夏令营学员专享</p>
      </div>
      <div class="t4"></div>
      <div class="t1-item">
        <p><span>下载下方聊天 ，注册账户之后对应的搜索学堂账户，即可申请入学</span></p>
      </div>
      <div class="t1-item">
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
            <td><span>
      <a
        class="button"
        v-clipboard:copy="downloadUrl"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        >点击复制</a></span></td>
        </tr>
        </tbody>
       
    </table>
      <div class="t2"></div>
      <div class="sub">
        <p>1.开学礼金需完成<span>1倍流水</span>即可，不限场馆；</p>
        <p>2.本活动与洗码优惠共享，不与其他任意优惠共享流水条件；</p>
        <p>3.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育会员账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利；</p>
        <p>4.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { Toast } from "vant"
import { getQueryVariable, rando, reverseStrings } from "../../assets/js/tools";
import appConfig from "@/config/config";
import axios from "axios";
import md5 from "js-md5";
export default {
  data () {
    return {
      downloadUrl: "https://tt456.app/",
    }
  },
  // 取消双滚动条
  mounted () {
    const that = this
    setInterval(() => {
      let iframeH = Math.max(that.$refs.main.clientHeight, that.$refs.main.scrollHeight)
      that.openPCHandle("reloadPageSize", {
        height: iframeH,
      })
    }, 0)
  },
  methods: {
    openPCHandle (msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      }
      window.parent.postMessage(info, "*")
    },
    
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
<style lang="scss" scoped>
$count: 79.9422423;
* {
  box-sizing: border-box;
}
.main {
  background: #E7ECF7 url("../../assets/img/summercamp/BG_PC.jpg") no-repeat;
  background-size: contain;
  padding-top: 480 / $count + rem;
  background-color: #E2EBDE;
  padding-bottom: 50 / $count + rem;
}
.content {
  background: url("../../assets/img/summercamp/hdnr_bg_pc.png") no-repeat;
  background-size: cover;
  width: 1300 / $count + rem;
  height: 1811 / $count + rem;
  margin: auto;
  padding: 35 / $count + rem 50 / $count + rem;
}
.t1 {
  background: url("../../assets/img/summercamp/hdnr_tit_PC.png") no-repeat;
  background-size: 100%;
  width: 194 / $count + rem;
  height: 100 / $count + rem;
  margin:0 auto 10px;
}
.t1-item {
  font-size: 20px;
  color: #444B52;
  text-align: left;
  margin: 25px 0;
  padding: 0 40px;
  // font-weight: 600;
  span {
    color: #FF4B08 ;
  }
}
 .table-title {
        width:1100/$count + rem ;
        height: 68/$count + rem;
        background: #75A571;
        color: #FFFFFF;
        font-size: 20px;
        border-radius: 8px 8px 0 0;
        margin: 15px auto 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
 table {
        width: 1100/$count + rem;
        height: 275/$count + rem;
        margin: 0 auto;
        &.table1{
          height: 75/$count + rem;
        }
    td {
        background: #F5F9FA ;
        border: 1px solid #7984A8;
        width: 380/$count + rem;
        height: 60/$count + rem;
        text-align: center;
        font-size: 20/$count + rem;
        color: #63676c;
        
.button {
  background: #ffffff;
  border-radius: 16px;
  color: #606266;
  padding: 7px 16px;
  font-size: 14px;
  margin-right: 20px;
}
        span{
          color: #FF4B08;
        }
        img{

          vertical-align: middle;
        }
      }
    }
.btn {
  width: 216/$count + rem;
  height: 64/$count + rem;
  background: url('../../assets/img/summercamp/lq_btn_pc.png') no-repeat;
  background-size: cover;
  margin: 50px auto;
}
.t2 {
  background: url("../../assets/img/summercamp/hdgz_tit_PC.png") no-repeat;
  background-size: cover;
  width: 194 / $count + rem;
  height: 100 / $count + rem;
  margin: auto;
  margin-top: 30 / $count + rem;
}
.t3 {
  background: url("../../assets/img/summercamp/gdxlyhd_tit_PC.png") no-repeat;
  background-size: 100%;
  width: 450 / $count + rem;
  height: 119 / $count + rem;
  margin: auto;
  margin-top: 30 / $count + rem;
}
.t4 {
  background: url("../../assets/img/summercamp/rxfs_tit_PC.png") no-repeat;
  background-size: 100%;
  width: 281 / $count + rem;
  height: 117 / $count + rem;
  margin: auto;
  margin-top: 30 / $count + rem;
}
.sub {
  margin-top: 30 / $count + rem;
  font-size: 20 / $count + rem;
  color: #444b52;
  letter-spacing: 0;
  line-height: 36 / $count + rem;
  span {
    color: #FF4B08;
  }
}
</style>