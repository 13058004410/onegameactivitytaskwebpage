<template>
  <div class="box-view">
    <div class="box">
        <div class="box-title">
            <img src="../../assets/img/nationalday/bllh5l.png" alt="">
            <p>献礼三：每日首存献礼</p>
            <img src="../../assets/img/nationalday/blrh5r.png" alt="">
        </div>
        <div class="box-info">
            活动内容：活动期间（10-01至10-07日）会员每日首笔存款可享受1%的存送红利。
        </div>
        <table>
                <tbody>
                    <tr>
                        <th>
                            每日首笔<br>存款
                        </th>
                        <th>存送比例</th>
                        <th>最高红利上限</th>
                        <th>流水要求</th>
                    </tr>
                    <tr>
                        <td>
                            ≥300CNY<br>/43USDT
                        </td>
                        <td>
                            1%
                        </td>
                        <td>无上限</td>
                        <td>1倍水</td>
                    </tr>
                </tbody>
            </table>
        <div class="box-title">
            <img src="../../assets/img/nationalday/bllh5l.png" alt="">
            <p>活动规则</p>
            <img src="../../assets/img/nationalday/blrh5r.png" alt="">
        </div>
        <div class="box-rule1">
            <p>1.&nbsp;&nbsp;&nbsp;活动期间，会员每日首笔存款均可获得1%存送红利，存款完成之后投注之前联系在线客服领取。</p>
            <p>2.	&nbsp;&nbsp;活动与洗码优惠共享，不与其他任意存送优惠共享。</p>
            <p>3.	&nbsp;&nbsp;活动红利需完成1倍流水，不限厅次。</p>
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
    height: 510/16 + rem;
    background: #FD341A 100%;
    .box {
    width: 362 / 16 + rem;
    height: 450/ 16 + rem;
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
    margin: 0 auto 10px;
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
        margin: 5px auto;
    }
}
}

</style>