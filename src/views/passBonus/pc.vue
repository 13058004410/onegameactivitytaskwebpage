<template>
  <div class="weekly-gift-pc">
    <van-image width="100%" :src="require('./img/PC/banner_PC.jpg')" />
    <div class="content-view">
      <van-image
        width="194px"
        height="100px"
        :src="require('./img/PC/hdnr_tit.png')"
        style="margin-bottom: 20px"
      />
      <!-- 活动内容 -->
      <div class="gift">
        <dl>
          <dt>
            <span>关卡</span>
            <span>有效投注</span>
            <span>彩金</span>
            <span>闯关累积彩金</span>
          </dt>
          <dd class="rowspan">
            <span>第1关</span>
            <span>1000CNY/143USDT</span>
            <span>7CNY/1USDT</span>
            <span>7CNY/1USDT</span>
          </dd>
          <dd class="rowspan">
            <span>第2关</span>
            <span>3000CNY/429USDT</span>
            <span>12CNY/2USDT</span>
            <span>19CNY/3USDT</span>
          </dd>
          <dd class="rowspan">
            <span>第3关</span>
            <span>7000CNY/1000USDT</span>
            <span>24CNY/4USDT</span>
            <span>43CNY/7USDT</span>
          </dd>
          <dd class="rowspan">
            <span>第4关</span>
            <span>15000CNY/2143USDT</span>
            <span>56CNY/8USDT</span>
            <span>99CNY/15USDT</span>
          </dd>
          <dd class="rowspan">
            <span>第5关</span>
            <span>30000CNY/4286USDT</span>
            <span>106CNY/15USDT</span>
            <span>205CNY/30USDT</span>
          </dd>
          <dd class="rowspan">
            <span>第6关</span>
            <span>70000CNY/10000USDT</span>
            <span>196CNY/28USDT</span>
            <span>401CNY/58USDT</span>
          </dd>
          <dd class="rowspan">
            <span>第7关</span>
            <span>150000CNY/21429USDT</span>
            <span>368CNY/52USDT</span>
            <span>769CNY/110USDT</span>
          </dd>
          <dd class="rowspan">
            <span>第8关</span>
            <span>250000CNY/35715USDT</span>
            <span>518CNY/74USDT</span>
            <span>1287CNY/184USDT</span>
          </dd>
          <dd class="rowspan">
            <span>第9关</span>
            <span>500000CNY/71429USDT</span>
            <span>788CNY/113USDT</span>
            <span>2075CNY/297USDT</span>
          </dd>
          <dd class="rowspan">
            <span>第10关</span>
            <span>1000000CNY/142858USDT</span>
            <span>1614CNY/231USDT</span>
            <span>3689CNY/528USDT</span>
          </dd>
        </dl>
        <van-image
          width="194px"
          height="100px"
          :src="require('./img/PC/hdgz_tit_pc.png')"
          style="margin-bottom: 20px; margin-top: 20px"
        />

        <p>1.本活动仅限投注真人视讯场馆参与，若会员在不同真人视讯场馆分别投注，有效投注额将累积计算。有效投注额计算每日00:00至23:59。</p>
        <p>2. 满足相应关卡条件次日24小时内联系在线客服申请领取闯关彩金，逾期视为自动放弃，每位会员每日可领取一次。</p>
        <p>3. 本活动可与洗码优惠共享，不与其他活动共享有效投注额,彩金需1倍流水即可，限真人场馆。</p>
        <p>4. 本活动有效投注额仅计算已结算并产生输赢结果的注单，在同局游戏中双边投注，将不计算有效投注额。</p>
        <p>5. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>6. 会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE游戏所有。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/normaliz.scss";
.weekly-gift-pc {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: #e9e0d7;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 60px;
  font-family: PingFang SC;

  .content-view {
    width: 1300px;
    min-height: 1046px;
    background-image: url("./img/PC/bg.png");
    background-size: 100% 100%;
    display: flex;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 30px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 70px 100px 70px 100px;

    .gift {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    .title {
      font-size: 20px;
      color: #444B52 ;
    }

    dl {
      width: 100%;
      border: 1px solid rgba(203, 162, 117, 1);
      border-radius: 8px;
      overflow: hidden;

      dt {
        width: 100%;
        background: #d0a881;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          flex: 1;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #ffffff;
          font-weight: 600;
        }
        span:nth-child(1) {
          flex: 0.8;
        }
        span:nth-child(2) {
          flex: 1;
        }
        span:nth-child(3) {
          flex: 1;
        }
        span:nth-child(4) {
          flex: 0.8;
        }
      }

      dd {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        span {
          flex: 1;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #63676c;
          border-right: 1px solid #cba275;
          border-bottom: 1px solid rgba(203, 162, 117, 1);
        }
        &.rowspan {
          span:nth-child(1) {
            flex: 0.8;
          }
        }
        &.rowspan {
          span:nth-child(2) {
            flex: 1;
          }
        }
        &.rowspan {
          span:nth-child(3) {
            flex: 1;
          }
        }
        &.rowspan {
          span:nth-child(4) {
            flex: 0.8;
          }
        }
      }
    }

    p {
      font-size: 20px;
      color: #444b52;
      line-height: 36px;
      margin-top: 5px;
      margin-bottom: 5px;
      width: 100%;
      text-align: left;

      & > span {
        color: #ad692b;
      }
    }
  }

  .w-100 {
    width: 100%;
  }

  .big {
    font-size: 36px!important;
  }
}
</style>