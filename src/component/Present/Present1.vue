<template>
  <div class="box-view">
    <div class="box">
      <div class="box-title">
        <img src="../../assets/img/nationalday/bllh5l.png" alt="">
        <p>献礼一：邀好友献礼</p>
        <img src="../../assets/img/nationalday/blrh5r.png" alt="">
      </div>
      <div class="box-info">
          活动内容：活动期间（10-01至10-07日）ONE体育全体会员邀请好友注册并存款即可领取推荐红利，每邀请一位最高可获得888红利。
      </div>
      <table>
              <tbody>
                  <th colspan="3">邀请献礼</th>
                  <tr>
                      <td>
                          被推荐新用户<br>首存金额
                      </td>
                      <td>推荐用户红利</td>
                      <td>流水要求</td>
                  </tr>
                  <tr>
                      <td>
                          ≥388CNY<br>/56USDT
                      </td>
                      <td>38CNY</td>
                      <td>1倍</td>
                  </tr>
                  <tr>
                      <td>
                          ≥888CNY<br>/127USDT
                      </td>
                      <td>88CNY</td>
                      <td>1倍</td>
                  </tr>
                  <tr>
                      <td>
                          ≥3888CNY<br>/556USDT
                      </td>
                      <td>188CNY</td>
                      <td>1倍</td>
                  </tr>
                  <tr>
                      <td>
                          ≥8888CNY<br>/1270USDT
                      </td>
                      <td>388CNY</td>
                      <td>1倍</td>
                  </tr>
                  <tr>
                      <td>
                          ≥18888CNY<br>2699USDT
                      </td>
                      <td>888CNY</td>
                      <td>1倍</td>
                  </tr>
              </tbody>
      </table>
      <div class="box-rule">
          <p>注：本活动所有会员皆可参与，邀请会员满足条件后联系在线客服领取邀请献礼</p>
          <p>申请条件：推荐人需要提供被推荐人（邀请的好友）登入账户或者手机号、账户绑定姓名、注册时间，同时被推荐人必须完成账户各项资料绑定。</p>
      </div>
      <div class="box-title">
        <img src="../../assets/img/nationalday/bllh5l.png" alt="">
        <p>活动规则</p>
        <img src="../../assets/img/nationalday/blrh5r.png" alt="">
      </div>
      <div class="box-rule1">
          <p>1.&nbsp;&nbsp;&nbsp;每邀请一位新用户注册并存款皆可获得一次被邀请用户对应首存金额的邀请献礼。</p>
          <p>2.	&nbsp;&nbsp;被邀请注册的新用户需绑定真实姓名、手机号码、银行卡信息。</p>
          <p>3.	&nbsp;&nbsp;活动红利需完成1倍流水，不限制厅次。</p>
          <p>4.	&nbsp;&nbsp;被推荐人：同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
          <p>5.	&nbsp;&nbsp;推荐人：同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
          <p>6.	&nbsp;&nbsp;会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss">
@import "@/assets/css/screen750.scss";
@import "@/assets/css/normaliz.scss";
</style>
<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
.box-view {
    width: 100%;
    height: 950/16 + rem;
    background: #FD341A 100%;
.box {
    width: 362 / 16 + rem;
    height: 920 / 16 + rem;
    border-radius: 13px;
    margin: 0 auto;
    font-size: 13px;
    color: #FFFFFF; 
    margin-bottom: 20px;
    background: #BA2F1F 100%;
    .box-title {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 44/16 + rem;
            height: 9/16 + rem;
        }
        p {
            padding: 10px;
        }
    }
    .box-info {
    width: 347/16 + rem;
    height: 58/16 + rem;
    line-height: 20px;
    margin: 0 auto;
    }
    table {
    width: 340.42/16 + rem;
    height: 30.39/16 + rem;
    margin: 15px auto;
      th {
         background: #FD341A ;
        border: 1px solid #000000; 
        height: 35.39/16 + rem;
      }
      td {
          background: #FD7304;
          border: 1px solid #000000;
          width: 114.42/16 + rem;
          height: 53/16 + rem;
          text-align: center;
      }
    }
    .box-rule {
    width: 340.42/16 + rem;
    margin: 0 auto 10px;
    p:first-child {
        margin-bottom: 20px;
    }
    }
    .box-rule1 {
        width: 339/16 + rem;
        height: 260/16 + rem;
        line-height: 20px;
        margin: 0 auto;
    }
    }
}
</style>