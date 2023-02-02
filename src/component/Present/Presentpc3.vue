<template>
<div class="view">
  <div class="box">
      <div class="box-title">
          <img src="../../assets/img/nationalday/bllpcl.png" alt="">
          <p>献礼三：每日首存献礼</p>
          <img src="../../assets/img/nationalday/blrpcr.png" alt="">
      </div>
      <div class="info">
         <p>活动内容：活动期间（10-01至10-07日）会员每日首笔存款可享受1%的存送红利。</p> 
      </div>
       <table>
              <tbody>
                  <tr>
                      <th>每日首笔存款</th>
                      <th>存送比例</th>
                      <th>最高红利上限</th>
                      <th>流水要求</th>
                  </tr>
                  <tr>
                      <td>
                          ≥300CNY/43USDT
                      </td>
                      <td>1%</td>
                      <td>无上限</td>
                      <td>1倍水</td>
                  </tr>
              </tbody>
      </table>
  </div>
  <div class="footer">
    <div class="footer-title">
        <p>活动规则:</p>
        <p>1.&nbsp;&nbsp;&nbsp;活动期间，会员每日首笔存款均可获得1%存送红利，存款完成之后投注之前联系在线客服领取。</p>
        <p>2.&nbsp;&nbsp;&nbsp;活动与洗码优惠共享，不与其他任意存送优惠共享。</p>
        <p>3.&nbsp;&nbsp;&nbsp;活动红利需完成1倍流水，不限厅次。</p>
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
        text-align: center;
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