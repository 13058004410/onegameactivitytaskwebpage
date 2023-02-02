<template>
<div class="view">
  <div class="box">
      <div class="box-title">
          <img src="../../assets/img/nationalday/bllpcl.png" alt="">
          <p>献礼一：邀好友献礼</p>
          <img src="../../assets/img/nationalday/blrpcr.png" alt="">
      </div>
      <div class="info">
         <p>活动内容：活动期间（10-01至10-07日）ONE体育全体会员邀请好友注册并存款即可领取推荐红利，每邀请一位最高可获得888红利。</p> 
      </div>
      <table>
              <tbody>
                  <th colspan="3">邀请献礼</th>
                  <tr>
                      <th>
                          被推荐新用户首存金额
                      </th>
                      <th>推荐用户红利</th>
                      <th>流水要求</th>
                  </tr>
                  <tr>
                      <td>
                          ≥388CNY/56USDT
                      </td>
                      <td>38CNY</td>
                      <td>1倍</td>
                  </tr>
                  <tr>
                      <td>
                          ≥888CNY/127USDT
                      </td>
                      <td>88CNY</td>
                      <td>1倍</td>
                  </tr>
                  <tr>
                      <td>
                          ≥3888CNY/556USDT
                      </td>
                      <td>188CNY</td>
                      <td>1倍</td>
                  </tr>
                  <tr>
                      <td>
                          ≥8888CNY/1270USDT
                      </td>
                      <td>388CNY</td>
                      <td>1倍</td>
                  </tr>
                  <tr>
                      <td>
                          ≥18888CNY/2699USDT
                      </td>
                      <td>888CNY</td>
                      <td>1倍</td>
                  </tr>
              </tbody>
      </table>
      <div class="rule">
          <p>注：本活动所有会员皆可参与，邀请会员满足条件后联系在线客服领取邀请献礼。</p>
          <p>申请条件：推荐人需要提供被推荐人（邀请的好友）登入账户或者手机号、账户绑定姓名、注册时间，同时被推荐人必须完成账户各项资料绑定。</p>
      </div>
  </div>
  <div class="footer">
    <div class="footer-title">
        <p>活动规则:</p>
        <p>1.&nbsp;&nbsp;&nbsp;每邀请一位新用户注册并存款皆可获得一次被邀请用户对应首存金额的邀请献礼。</p>
        <p>2.&nbsp;&nbsp;&nbsp;被邀请注册的新用户需绑定真实姓名、手机号码、银行卡信息。</p>
        <p>3.&nbsp;&nbsp;&nbsp;活动红利需完成1倍流水，不限制厅次。</p>
        <p>4.&nbsp;&nbsp;&nbsp;被推荐人：同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>5.&nbsp;&nbsp;&nbsp;推荐人：同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
        <p>6.&nbsp;&nbsp;&nbsp;会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
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
        margin: 15px auto;
        th {
            border: 1px solid #000000; 
            height: 58.94px;
            background: #BA2F1F;     
            }
        tr th {
           background: #FD7304; 
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