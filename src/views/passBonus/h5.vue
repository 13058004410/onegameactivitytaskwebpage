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
              <th>关卡</th>
              <th>有效投注</th>
              <th>彩金</th>
              <th>闯关累积彩金</th>
            </tr>
            <tr>
              <td>第1关</td>
              <td>1000CNY/<br/>143USDT</td>
              <td>7CNY/<br/>1USDT</td>
              <td>7CNY/<br/>1USDT</td>
            </tr>
            <tr>
              <td>第2关</td>
              <td>3000CNY/<br/>429USDT</td>
              <td>12CNY/<br/>2USDT</td>
              <td>19CNY/<br/>3USDT</td>
            </tr>
            <tr>
              <td>第3关</td>
              <td>7000CNY/<br/>1000USDT</td>
              <td>24CNY/<br/>4USDT</td>
              <td>43CNY/<br/>7USDT</td>
            </tr>
            <tr>
              <td>第4关</td>
              <td>15000CNY/<br/>2143USDT</td>
              <td>56CNY/<br/>8USDT</td>
              <td>99CNY/<br/>15USDT</td>
            </tr>
            <tr>
              <td>第5关</td>
              <td>30000CNY/<br/>4286USDT</td>
              <td>106CNY/<br/>15USDT</td>
              <td>205CNY/<br/>30USDT</td>
            </tr>
            <tr>
              <td>第6关</td>
              <td>70000CNY/<br/>10000USDT</td>
              <td>196CNY/<br/>28USDT</td>
              <td>401CNY/<br/>58USDT</td>
            </tr>
            <tr>
              <td>第7关</td>
              <td>150000CNY/<br/>21429USDT</td>
              <td>368CNY/<br/>52USDT</td>
              <td>769CNY/<br/>110USDT</td>
            </tr>
            <tr>
              <td>第8关</td>
              <td>250000CNY/<br/>35715USDT</td>
              <td>518CNY/<br/>74USDT</td>
              <td>1287CNY/<br/>184USDT</td>
            </tr>
            <tr>
              <td>第9关</td>
              <td>500000CNY/<br/>71429USDT</td>
              <td>788CNY/<br/>113USDT</td>
              <td>2075CNY/<br/>297USDT</td>
            </tr>
            <tr>
              <td>第10关</td>
              <td>1000000CNY/<br/>142858USDT</td>
              <td>1614CNY/<br/>231USDT</td>
              <td>3689CNY/<br/>528USDT</td>
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
          <p>1. 本活动仅限投注真人视讯场馆参与，若会员在不同真人视讯场馆分别投注，有效投注额将累积计算。有效投注额计算每日00:00至23:59。</p>
          <p>2. 满足相应关卡条件次日24小时内联系在线客服申请领取闯关彩金，逾期视为自动放弃，每位会员每日可领取一次。</p>
          <p>3. 本活动可与洗码优惠共享，不与其他活动共享有效投注额,彩金需1倍流水即可，限真人场馆。</p>
          <p>4. 本活动有效投注额仅计算已结算并产生输赢结果的注单，在同局游戏中双边投注，将不计算有效投注额。</p>
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
              width: 23%;
            }
            &:nth-child(2) {
              width: 27%;
            }
            &:nth-child(3) {
              width: 23%;
            }
            &:nth-child(4) {
              width: 27%;
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