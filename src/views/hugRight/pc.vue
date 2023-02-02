<template>
  <div ref="main" class="container">
    <img :src="require('@/assets/img/hugRight/pc/bg.jpg')" class="bg" alt="" />
    <div class="content mg">
      <p class="ac-time">活动时间：1月24日起至－2月10日</p>
      <h1 class="ac-title">活动一</h1>
      <p class="txt">
        号外，号外！ONE体育签约西甲双雄！将全程赞助西甲20/21赛季皇马/巴萨客场比赛，届时放出场边广告，敬请留意！特此活动以回馈广大新老会员！
      </p>
      <table>
        <thead>
          <tr>
            <td width="25%">充值金额</td>
            <td width="50%">奖金及奖品</td>
            <td width="25%">流水需求</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11888元/1700usdt</td>
            <td>皇马/巴萨（主/客场2选1）球衣或888/127/usdt</td>
            <td>3倍</td>
          </tr>
          <tr>
            <td>18888/2700usdt</td>
            <td>本泽马新款战靴adidas X 20.1或1288/185usdt</td>
            <td>3倍</td>
          </tr>
        </tbody>
      </table>
      <p class="txt-y">
        注： <br />
        1.每个玩家仅限参与一次，与其他存送优惠不共享。<br />
        2.球衣球鞋数量有限，发完即止，建议事先咨询在线客服。
      </p>
    </div>
    <div class="line"></div>
    <div class="content">
      <h1 class="ac-title mt24">活动二</h1>
      <p class="txt2">
        凡one体育老玩家（≥vip2）复制ONE体育链接<span>（图1）</span>并配图<span>（图2）</span>转发至朋友圈并评论“<span>赞助豪门皇家马德里、巴塞罗那，体育、电竞竞猜就在ONE体育（复制链接用其他浏览器打开）</span>”，朋友圈显示时间超过两天，并集齐8个赞<span>（图3）</span>，即可凭截图找在线客服领取58元彩金，3倍流水出款，每个玩家仅限参与一次。
      </p>
      <div class="img-box">
        <div class="img-1">
          <img
            :src="require('@/assets/img/hugRight/h5/1.jpg')"
            class="img1"
            alt=""
          />
          <p>凡one体育老玩家（≥vip2）<br />复制ONE体育链接</p>
        </div>
        <div class="right">
          <Icon name="down" />
        </div>
        <div class="img-2">
          <img
            :src="require('@/assets/img/hugRight/h5/bg.jpg')"
            class="img1"
            alt=""
          />
          <p>
            配图转发至朋友圈并评论“赞助豪门皇家马德里、巴塞罗那，体育、电竞竞猜就在ONE体育（复制链接用其他浏览器打开）”，朋友圈显示时间超过两
            天，并集齐8个赞
          </p>
        </div>
        <div class="right">
          <Icon name="down" />
        </div>
        <div class="img-3">
          <img
            :src="require('@/assets/img/hugRight/h5/3.jpg')"
            class="img1"
            alt=""
          />
          <p>
            即可凭截图找在线客服领取58元彩金，3倍流水出款，每个玩家仅限参与一次。
          </p>
        </div>
      </div>
      <div class="save">
        <button @click="saveImgs">下载图片到手机</button>
      </div>
    </div>
    <div class="line"></div>
    <div class="content">
      <h1 class="ac-title mt24">活动三</h1>
      <p class="txt4">
        凡one体育老玩家（≥vip2）所推荐<span>新注册用户</span>，即可领取18元彩金，3倍流水出款，与官网活动<span>注册送20共享</span>；<br />
        被推荐新注册用户并可享受<span>首存</span>1000/143usdt送188/27usdt特权，3倍流水出款，与其他存送优惠不共享。<br />
        <span>注：参与活动需双方同时进线找在线客服领取。</span>
      </p>
      <div class="content-f">
        <h2>活动内容</h2>
        <div>
          <span>1.</span>
          活动期间，满足充值达标条件的会员，可联系在线客服，选择奖金或奖品，提供有效寄送地址和联系方式；彩金会在24小时内进行派发；实物奖品会在15日内发货，请注意查收。
        </div>
        <div>
          <span>2.</span>
          有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关、提前兑现，将不计算在有效流水内。
        </div>
        <div>
          <span>3.</span>
          同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。
        </div>
        <div>
          <span>4.</span>
          会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
export default {
  components: {
    Icon,
  },
  mounted() {
    let info = {
      message: "reloadPageSize",
      height: this.$refs.main.clientHeight,
    };
    window.parent.postMessage(info, "*");
  },
  methods: {
    async saveImgs() {
      let imgs = [
        require('@/assets/img/hugRight/h5/bg.jpg'),
      ]
      for(let item of imgs){
        this.saveImg(item)
      }
    },
    saveImg(Url) {
      var blob = new Blob([""], { type: "application/octet-stream" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = Url;
      a.download = Url.replace(/(.*\/)*([^.]+.*)/gi, "$2").split("?")[0];
      var e = document.createEvent("MouseEvents");
      e.initMouseEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      a.dispatchEvent(e);
      URL.revokeObjectURL(url);
    },
  },
};
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
@import "./pc.scss";
</style>