<template>
  <div class="box-view">
    <div class="box">
        <div class="box-title">
            <img src="../../assets/img/nationalday/bllh5l.png" alt="">
            <p>献礼二：投注献礼</p>
            <img src="../../assets/img/nationalday/blrh5r.png" alt="">
        </div>
        <div class="box-info">
            活动内容：活动期间（10-01至10-07日）会员每日在体育厅和者电竞厅累计有效投注≥8888CNY/1269USDT即可领取红利。
        </div>
        <table>
                <tbody>
                    <tr>
                        <th>
                            每日累计<br>有效投注
                        </th>
                        <th>红利</th>
                        <th>流水要求</th>
                    </tr>
                    <tr>
                        <td>
                            ≥8888CNY<br>/1269USDT
                        </td>
                        <td>
                            128CNY<br>/18USDT
                        </td>
                        <td>1倍</td>
                    </tr>
                </tbody>
            </table>
        <div class="box-title">
            <img src="../../assets/img/nationalday/bllh5l.png" alt="">
            <p>活动规则</p>
            <img src="../../assets/img/nationalday/blrh5r.png" alt="">
        </div>
        <div class="box-rule1">
            <p>1.&nbsp;&nbsp;&nbsp;每日满足活动最低有效投注额要求后即可联系在线客服申请领取红利。活动要求有效投注额只计算体育厅与电竞厅的累计总和，其它场馆不予计算。</p>
            <p>2.	&nbsp;&nbsp;本活动与洗码优惠共享不予其它优惠共享。活动红利仅需1倍体育厅或电竞厅流水即可。</p>
            <p>3.	&nbsp;&nbsp;有效投注额仅计算已结算并产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关、提前兑现，将不计算在有效流水内。</p>
            <p>4.	&nbsp;&nbsp;同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
            <p>5.	&nbsp;&nbsp;会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
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
.box-view {
    width: 100%;
    height: 580/16 + rem;
    background: #FD341A 100%;
    .box {
    width: 362 / 16 + rem;
    height: 549/ 16 + rem;
    border-radius: 13 / 16 + rem;
    margin: 0 auto;
    font-size: 13px;
    color: #FFFFFF; 
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
          background: #FD341A;
          border: 1px solid #000000;
          width: 114.42/16 + rem;
          height: 52.7/16 + rem;
          text-align: center;
      }
      td {
          background: #FD7304;
          border: 1px solid #000000;
          width: 114.42/16 + rem;
          height: 30/16 + rem;
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
    .box-title1 {
        width: 200px;
        height: 200px;
        background-color: pink
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