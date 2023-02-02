<template>
  <div class="triple-gift-h5">
    <!-- banner -->
    <van-image width="100%" :src="require('./img/H5/banner.jpg')" />
    <!-- 活动内容 -->
    <div class="detail-view">
      <div class="tab-content">
        <van-image
          class="titleImg"
          width="133px"
          height="25px"
          :src="require('./img/H5/hdnr_tit_h5.png')"
        />
        <div class="table">
          <table>
            <tr>
              <th>周有效投注</th>
              <th>彩金</th>
              <th>流水要求</th>
            </tr>
            <tr>
              <td>3888CNY/556USDT</td>
              <td>38CNY/6USDT</td>
              <td rowspan="7">1倍水</td>
            </tr>
            <tr>
              <td>6888CNY/984USDT</td>
              <td>68CNY/10USDT</td>
            </tr>
            <tr>
              <td>12888CNY/1842USDT</td>
              <td>128CNY/19USDT</td>
            </tr>
            <tr>
              <td>38888CNY/5556USDT</td>
              <td>288CNY/42USDT</td>
            </tr>
            <tr>
              <td>68888CNY/9842USDT</td>
              <td>388CNY/56USDT</td>
            </tr>
            <tr>
              <td>188888CNY/26984USDT</td>
              <td>1288CNY/184USDT</td>
            </tr>
            <tr>
              <td>288888CNY/41270USDT</td>
              <td>2888CNY/413USDT</td>
            </tr>
          </table>
        </div>
        <van-image
          class="titleImg"
          width="133px"
          height="25px"
          :src="require('./img/H5/hdgz_tit_h5.png')"
        />
        <div class="list">
          <p>1. 会员于所有体育场馆投注参与，有效投注额计算周期：每周一00:00至周日23:59（北京时间）。</p>
          <p>2. 满足活动条件的会员，在次周一至周三联系在线客服申请领取，逾期视为自动放弃。</p>
          <p>3. 本活动可与洗码优惠共享，不与其他活动共享有效投注额，活动彩金需完成<span class="glod">1倍流水</span>，限体育场馆。</p>
          <p>4. 本活动有效投注额仅计算已结算并产生输赢结果的注单，任何走盘、串关、特殊投注、取消的赛事将不计算在有效投注。任何低于欧洲盘1.50或香港盘0.50赔率的投注、注单提前兑现以及在同一赛事中同时投注对冲盘口，将不计算在投注额内。</p>
          <p>5. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
          <p>6. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";
import { rando } from "@/assets/js/tools";
import axios from "axios";
export default {
  data () {
    return {}
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/normaliz.scss";
.triple-gift-h5 {
  width: 100vw;
  min-height: 100vh;
  background: #FCF5F3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 60px;
  font-family: PingFang SC;
  font-weight: 500;

  .activities-view {
    box-sizing: border-box;
    width: 100%;
    padding: 0 20px;
    margin-top: -30px;
    z-index: 1;

    .intro {
      font-size: 3.73vw;
      color: #444B52;
    }
  }

  .detail-view {
    box-sizing: border-box;
    width: 100%;

    .tab-content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      
      .table {
        width: 100%;
        margin-top: 15px;
        table {
          border-collapse: separate;
          margin-top: 10px;
          width: 100%;
          
          th {
            color: #fff;
            background-color: #D0A881;
            font-size: 3.2vw;
            height: 11.73vw;
            border-right: none;
            &:nth-child(1) {
              width: 40%;
            }
            &:nth-child(2) {
              width: 35%;
            }
            &:nth-child(3) {
              width: 25%;
            }
          }
          td {
            color: #63676C;
            font-size: 3.2vw;
            height: 11.73vw;
            text-align: center;
            &:nth-child(1) {
              border-right: 1px solid rgba(203, 162, 117, 0.44);
              border-bottom: 1px solid rgba(203, 162, 117, 0.44);
            }
            &:nth-child(2) {
              border-right: 1px solid rgba(203, 162, 117, 0.44);
              border-bottom: 1px solid rgba(203, 162, 117, 0.44);
            }
            &:nth-child(3) {
              border-right: 1px solid rgba(203, 162, 117, 0.44);
              border-bottom: 1px solid rgba(203, 162, 117, 0.44);
            }
            &:nth-child(4) {
              border-bottom: 1px solid rgba(203, 162, 117, 0.44);
            }
          }
        }
      }

      .list {
        padding: 12px 20px;
        font-size: 3.73vw;
        color: #444B52;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        p {
          margin-bottom: 10px;
          line-height: 5.33vw;
        }
      }
    }
  }

  .gold {
    color: #AD692B;
  }

  .titleImg {
    margin-top: 20px;
    align-self: flex-start;
    margin-left: 20px;
  }
}
</style>