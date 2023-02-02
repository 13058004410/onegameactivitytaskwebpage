<template>
  <div class="app-view" ref="main">
    <div class="app-content">
      <div class="box-item">
        <div class="box-title">
          <img src="../../assets/img/euro/hdsj_pc.png" alt />
        </div>
        <div class="box-content">
          <p class="font28">2021年6月12日至2021年7月12日</p>
        </div>
      </div>
      <div class="box-item">
        <div class="box-title">
          <img src="../../assets/img/euro/hdtf_pc.png" alt />
        </div>
        <div class="box-content">
          <p class="font28">BTI体育厅、沙巴体育厅</p>
        </div>
      </div>
      <div class="box-item">
        <div class="box-title">
          <img src="../../assets/img/euro/hdnr_pc.png" alt />
        </div>
        <div class="box-content">
          <p>欧洲杯活动期间，ONE会员凡当日有效投注额≥1000/5000/10000，即可领取对应奖金。（限当日领取）联系客服即可申请</p>
          <div class="box-table">
            <table>
              <thead>
                <tr>
                  <th width="38%">条件</th>
                  <th width="38%">奖金</th>
                  <th width="24%">流水</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>当日有效投注额≥1000/143usdt</div>
                  </td>
                  <td>18元/3usdt</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    <div>当日有效投注额≥5000/715usdt</div>
                  </td>
                  <td>58元/9usdt</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>
                    <div>当日有效投注额≥10000/1429usdt</div>
                  </td>
                  <td>88元/13usdt</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="btn-submit" @click="openPCHandle('openService')"></div>
        </div>
      </div>
      <div class="box-item">
        <div class="box-title">
          <img src="../../assets/img/euro/hdgz_pc.png" alt />
        </div>
        <div class="box-content box-rule">
          <p>1.本活动及彩金仅限BTI体育厅和沙巴体育厅。</p>
          <p>2.本活动与洗码共享，与其他优惠活动不共享。</p>
          <p>3.有效流水仅计算产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关，将不计算在有效流水内。</p>
          <p>4.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
          <p>5.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
        </div>
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
  mounted () {
    const that = this
    setTimeout(() => {
      let info = {
        message: "reloadPageSize",
        height: that.$refs.main.clientHeight,
      }
      window.parent.postMessage(info, "*")
    }, 300)
  },
  methods: {
    openPCHandle (msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      }
      window.parent.postMessage(info, "*")
    }
  }
}

</script>

<style lang="scss">
@import '@/assets/css/normaliz.scss';
</style>
<style lang="scss" scoped>
.app-view {
  padding-bottom: 100px;
  min-width: 1200px;
  margin: 0 auto;
  width: 100%;
  background: url('../../assets/img/euro/BG_PC.jpg') no-repeat #f5f9fa 0 0;
  background-size: 100% auto;
  -webkit-tap-height-color: transprent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &::before {
    content: '';
    display: block;
    padding-top: 30.0417%;
  }
  img {
    width: 100%;
  }
  .app-content {
    padding: 70px 100px 80px;
    max-width: 1100px;
    min-width: 1000px;
    margin: 0 auto;
    background: url('../../assets/img/euro/hdnr_bg_pc.png') no-repeat 0 0;
    background-size: 100% 100%;
  }
}
.box-item {
  text-align: center;
  .box-title {
    margin: 50px auto 0;
    width: 194px;
    height: 100px;
  }
  .box-content {
    margin-top: 30px;
    p {
      text-align: left;
      font-size: 20px;
      color: #444b52;
      line-height: 36px;
      font-weight: 500;
      &.font28 {
        font-size: 28px;
        text-align: center;
      }
    }
    .box-table {
      margin-top: 20px;
      table {
        width: 100%;
        text-align: center;
        border-collapse: separate;
        border-spacing: 0;
        thead {
          tr {
            height: 68px;
            background-color: #7984a8;
            th {
              font-size: 20px;
              color: #ffffff;
              font-weight: 600;
              &:nth-of-type(1) {
                border-top-left-radius: 10px;
              }
              &:nth-of-type(3) {
                border-top-right-radius: 10px;
              }
            }
          }
        }
        tbody {
          border: 1px solid #d9dee7;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          tr {
            td {
              font-size: 20px;
              color: #63676c;
              height: 68px;
              line-height: 28px;
              border: 1px solid #d9dee7;
            }
            &:last-of-type {
              td {
                &:first-child {
                  border-bottom-left-radius: 10px;
                }
                &:last-child {
                  border-bottom-right-radius: 10px;
                }
              }
            }
          }
        }
      }
    }
    .btn-submit {
      margin: 50px auto 10px;
      width: 216px;
      height: 64px;
      background: url('../../assets/img/euro/lq_btn_pc.png') no-repeat 0 0;
      background-size: cover;
    }
  }
  &:first-of-type {
    .box-title {
      margin-top: 0;
    }
  }
}
</style>