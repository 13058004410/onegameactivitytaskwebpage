<template>
  <div class="winningstreak-page-pc">

    <!-- banner图片 -->
    <div class="banner">
      <img src="./img/PC/banner.jpg" alt="">
    </div>
    <!-- 大按钮 -->
    <div class="btn">
			<button class="enter-button" @click="openAG">
			  <img src="./img/PC/enter-button.png" style="margin:0 auto;display:block"/>
		  </button>
		</div>
    <!-- 下边一大块活动 -->
    <div class="activity">
      <table></table>
      <!-- 活动内容 -->
      <div class="centerPic">
        <img src="./img/PC/title-1.png" alt="" style="width:10.1%;">
      </div>
      <!-- 文字 -->
      <div class="singleLineText">
        <p style="text-align:center">
          连赢争霸，王者属谁，ONE游戏联合旗舰厅隆重推出-百家乐连赢争霸赛，连赢争霸您就是王者。
        </p>
      </div>
      <!-- 连赢送好礼 -->
      <div class="centerPic">
        <img src="./img/PC/content-title-1.png" alt="" style="width:13.9%;">
      </div>
      <!-- 文字 -->
      <div class="singleLineText">
        <p class="goldenText">
          第一重：连赢送好礼
        </p>
      </div>
      <!-- 表格图片 -->
      <div class="centerPic centerBig">
        <img src="./img/PC/biaoge.png" alt="" style="width:57.3%;">
      </div>
      <!-- 连赢争霸赛 -->
      <div class="centerPic">
        <img src="./img/PC/content-title-2.png" alt="" style="width:17.2%;">
      </div>
      <!-- 文字 -->
      <div class="singleLineText">
        <p class="goldenText">
          第二重：连赢争霸赛
        </p>
        <p>
          旗舰厅会员单笔投注≥500CNY/72USDT， 且连赢局数≥8局，即可入围第二重榜单，获取相应争霸排名奖励。
        </p>
      </div>
      <!-- 奖杯图片 -->
      <div class="centerPic">
        <img src="./img/PC/zbs_pic_pc.png" alt="" style="width:50%;">
      </div>
      <!-- 活动内容 -->
      <div class="centerPic">
        <img src="./img/PC/title-2.png" alt="" style="width:10.1%;">
      </div>
      <!-- 文字 -->
      <div class="singleLineText">
        <p>
          1. ONE游戏全体会员都可参与，进入AG旗舰厅即可参与，无需报名；
        </p>
        <p>
          2. 本活动仅限旗舰厅“庄”“闲”“庄免佣”玩法，连环百家乐/多台百家乐不参与此活动，若玩家有投注该玩法或其他玩法，不中断连赢局数；
        </p>
        <p>
          3. 投注庄闲玩法，开牌结果为和，不中断连赢，对冲投注则连赢中断，且追究相应违规责任，连赢局数隔日不清零；
        </p>
        <p>
          4. 连赢争霸赛按最高排名派奖，连赢送好礼奖金无需流水，连赢争霸赛奖金需完成3倍流水，仅限真人厅；
        </p>
        <p>
          5. 连赢送好礼与连赢争霸赛不冲突，可同时享有，连赢好礼奖金完成连赢后系统自动派发到账(连赢局数若不中断，将不计算连赢且不派彩)，连赢争霸奖金于活动结束后48小时内派发到账；
        </p>
        <p>
          6. 本活动中连赢送好礼会员达成连赢后，根据用户连赢记录中，单笔最低投注额划分其对应投注分档（如：会员A连赢12局，1-11局每局下注1000CNY，第12局下注500CNY，那么会员此次连赢划分为500CNY的投注分档，会员可领取1888CNY连赢奖金）；
        </p>
        <p>
          7. 本活动中，连赢8局及以上且单笔投注额大于等于500CNY/72USDT，即可进入连赢争霸赛排行榜；
        </p>
        <p>
          8. 本活动连赢争霸赛排名按照连赢局数、连赢记录中的投注额度、连赢记录中最后一局投注时间，决定总排名先后，杜绝同名次情况；
        </p>
        <p>
          9. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号。如有会员有任何违规，我们将保留无限期审核扣回红利及所产生利润的权利；
        </p>
        <p>
          10. 会员参加任何优惠活动则被视为认可并同意遵守这些规则以及ONE游戏的有关规定，愿意受其约束，最终解释权归ONE游戏所有。
        </p>
      </div>
    </div>
    <!-- 页脚 -->
    <!-- <div class="footer">
      <div class="ads">

      </div>
      <div class="copyRights">

      </div>
    </div> -->

  </div>
</template>

<script>
export default {
  methods:{
    openAG(){
      if (this.website) {
        this.openPCHandle("openGameAGQJ"); //openGameAGQJ
      } else {
        window.location = "nbapp://openGameAGQJ?data={}";
        // this.$router.push( { path: '/winningstreak' } );
      }
    }
  }
}
</script>

<style scoped>
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
  .winningstreak-page-pc{
    border:1px solid black;
    background:#E9E0D7 100%
  }
  .winningstreak-page-pc .banner img{
    width:100%;
  }
  .winningstreak-page-pc .btn{
    display: flex;
    justify-content: center;
    margin-top:-5%;
  }
  .winningstreak-page-pc .btn .enter-button{
    width:12.9%;
    padding:0;
    display:block;
    border-radius: 5%;
    border: none;
    cursor: pointer;
    margin-left:-40%;
  }
  .winningstreak-page-pc .btn .enter-button img{
    width:100%;
  }
  .winningstreak-page-pc .activity{
    margin:3% 0;
    padding:2.2% 0;
    background:url('./img/PC/bg.png') no-repeat;
    background-position:center;
    background-size :67.7% 100%;
    overflow:Hidden;
  }
  .winningstreak-page-pc .activity .singleLineText{
    font-family: PingFangSC-Medium;
    font-size: 20px;
    color: #444B52;
    letter-spacing: 0;
    text-align: center;
    line-height: 36px;
    font-weight: 500;
  }
  .winningstreak-page-pc .activity .centerPic{
    display: flex;
    justify-content: center;
    margin:0 0;
  }
  .winningstreak-page-pc .activity .goldenText{
    font-family: PingFangSC-Medium;
    font-size: 20px;
    color: #AD692B !important;
    letter-spacing: 0;
    line-height: 36px;
    font-weight: 500;
    padding-left:28%;
    text-align: left !important;
  }
  .winningstreak-page-pc .activity .singleLineText p{
    text-align: left;
    font-family: PingFangSC-Medium;
    font-size: 20px;
    color: #444B52;
    letter-spacing: 0;
    line-height: 36px;
    font-weight: 500;
    padding-left:22%;
    padding-right:20%;
  }
  .winningstreak-page-pc .footer{
    background:#989A9C;
    width:100%;
    height:331px;
  }
  .winningstreak-page-pc .footer .copyRights{
    background:#191919;
    width:100%;
    height:25%;
  }
  .winningstreak-page-pc .footer .ads{
    background:#989A9C;
    width:100%;
    height:75%;
  }


</style>