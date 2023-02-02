<template>
<div class="view">
  <div class="box">
      <div class="box-title">
          <img src="../../assets/img/nationalday/bllpcl.png" alt="">
          <p>献礼二：投注献礼</p>
          <img src="../../assets/img/nationalday/blrpcr.png" alt="">
      </div>
      <div class="info">
         <p>活动内容：活动期间（10-01至10-07日）会员每日在体育厅和者电竞厅累计有效投注≥8888CNY/1269USDT即可领取红利。</p> 
      </div>
       <table>
              <tbody>
                  <tr>
                      <th>每日累计有效投注</th>
                      <th>红利</th>
                      <th>流水要求</th>
                  </tr>
                  <tr>
                      <td>
                          ≥8888CNY/1269USDT
                      </td>
                      <td>128CNY/18USTD</td>
                      <td>1倍</td>
                  </tr>
              </tbody>
      </table>
  </div>
  <div class="footer">
    <div class="footer-title">
        <p>活动规则:</p>
        <p>1.&nbsp;&nbsp;&nbsp;每日满足活动最低有效投注额要求后即可联系在线客服申请领取红利。活动要求有效投注额只计算体育厅与电竞厅的累计总和，其它场馆不予计算。</p>
        <p>2.&nbsp;&nbsp;&nbsp;本活动与洗码优惠共享不予其它优惠共享。活动红利仅需1倍体育厅或电竞厅流水即可。</p>
        <p>3.&nbsp;&nbsp;&nbsp;有效投注额仅计算已结算并产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关、提前兑现，将不计算在有效流水内。</p>
        <p>4.&nbsp;&nbsp;&nbsp;同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>5.&nbsp;&nbsp;&nbsp;会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
    </div>
  </div>
</div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.view {
    .box {
    width: 1000px;
    font-size: 20px;
    color: #FFFFFF;
   margin: 0 auto;
    .box-title {
        width: 100%;
        height: 69px;
        background: #BA2F1F;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        p {
            padding: 0 15px;
        }
        img {
            width: 69px;
        }
    }
    .info {
        line-height: 32px;
    }
     table {
        width: 1000px;
        height: 58.94px;
        margin: 30px auto;
        th {
            border: 1px solid #000000; 
            height: 58.94px;
            background: #BA2F1F;     
            }
        td {
            width: 335px;
            height: 59.24px;
            background: #FD7304;
            text-align: center;
            border: 1px solid #000000;
            font-size: 16px;
            }
    }
    .rule {
        font-size: 18px;
        margin-bottom: 50px;
      p:first-child {
          margin: 20px 0;
      }  
    }
    }
    .footer {
        width: 100%;
        background: #BA2F1F 100%;
        line-height: 29px;
        .footer-title {
            width: 922px;
            margin: 0 auto;
            padding: 20px;
        }
        p:first-child {
            font-size: 20px;
            margin-bottom: 20px;
        }
    }
    }

</style>