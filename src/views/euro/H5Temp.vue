<template>
  <div class="app-view">
    <div class="box-item">
      <div class="box-title vivify fadeInLeft">
        <img src="../../assets/img/euro/hdsj_H5.png" alt />
      </div>
      <div class="box-content vivify fadeIn">
        <p>2021年6月12日至2021年7月12日</p>
      </div>
    </div>
    <div class="box-item">
      <div class="box-title vivify fadeInLeft delay-100">
        <img src="../../assets/img/euro/hdtf_h5.png" alt />
      </div>
      <div class="box-content vivify fadeIn">
        <p>BTI体育厅、沙巴体育厅</p>
      </div>
    </div>
    <div class="box-item">
      <div class="box-title vivify fadeInLeft delay-200">
        <img src="../../assets/img/euro/hdnr_h5.png" alt />
      </div>
      <div class="box-content vivify fadeIn">
        <p>欧洲杯活动期间，ONE会员凡当日有效投注额≥1000/5000/10000，即可领取对应奖金。（限当日领取）联系客服即可申请</p>
        <div class="box-table">
          <table>
            <thead>
              <tr>
                <th>条件</th>
                <th>奖金</th>
                <th>流水</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>当日有效投注额</div>
                  <div>≥1000/143usdt</div>
                </td>
                <td>18元/3usdt</td>
                <td>3</td>
              </tr>
              <tr>
                <td>
                  <div>当日有效投注额</div>
                  <div>≥5000/715usdt</div>
                </td>
                <td>58元/9usdt</td>
                <td>3</td>
              </tr>
              <tr>
                <td>
                  <div>当日有效投注额</div>
                  <div>≥10000/1429usdt</div>
                </td>
                <td>88元/13usdt</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="btn-submit" @click="jumpKefuNative"></div>
      </div>
    </div>
    <div class="box-item">
      <div class="box-title vivify fadeInLeft delay-300">
        <img src="../../assets/img/euro/hdgz_h5.png" alt />
      </div>
      <div class="box-content box-rule vivify fadeIn">
        <p>1.本活动及彩金仅限BTI体育厅和沙巴体育厅。</p>
        <p>2.本活动与洗码共享，与其他优惠活动不共享。</p>
        <p>3.有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关，将不计算在有效流水内。</p>
        <p>4.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>5.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () { },
  methods: {
    jumpKefuNative () {
      window.location = "nbapp://openServicePage?data={}"
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/normaliz.scss';
</style>
<style lang="scss" scoped>
.app-view {
  padding-bottom: 40px;
  width: 100%;
  background: url('../../assets/img/euro/BG_H5.jpg') no-repeat #f5f9fa 0 0;
  background-size: 100% auto;
  -webkit-tap-height-color: transprent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
  img {
    width: 100%;
  }
}
.box-item {
  padding: 30px 20px 0;
  .box-title {
    margin-bottom: 10px;
    width: 112px;
    height: 25px;
  }
  .box-content {
    font-size: 14px;
    color: #7984a8;
    font-weight: 500;
    line-height: 20px;
    .box-table {
      margin-top: 10px;
      table {
        width: 100%;
        text-align: center;
        border-collapse: collapse;
        thead {
          tr {
            height: 40px;
            background-color: #7984a8;
            th {
              font-weight: normal;
              color: #fff;
              font-size: 14px;
              &:nth-last-of-type(1) {
                border-top-right-radius: 10px;
              }
              &:nth-of-type(1) {
                border-top-left-radius: 10px;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              font-size: 13px;
              height: 56px;
              line-height: 18px;
              border: 1px solid #d9dee7;
            }
          }
        }
      }
    }
    .btn-submit {
      margin: 20px auto 0;
      width: 140px;
      height: 40px;
      background: url('../../assets/img/euro/lq_btn_h5.png') no-repeat 0 0;
      background-size: cover;
    }
    &.box-rule {
      p {
        margin-top: 4px;
      }
    }
  }
  &:nth-of-type(1) {
    padding-top: 90px;
  }
}
</style>