<template>
	<div class="winningstreak-page-h5">
		<van-image width="100%" :src="require('./img/H5/banner_h5.jpg')" />
		<!-- 进入旗舰厅按钮 -->
		<div class="btn">
			<button class="enter-button" @click="openAG">
			<img src="./img/H5/btn_h5.png" style="margin:0 auto;display:block"/>
		</button>
		</div>
		<!-- <van-image
				width="141px"
				height="40px"
				:src="require('./img/H5/btn_h5.png')"
				class="enter-button"
				@click="openAG"
		/> -->
		<div class="actContent">
			<img src="./img/H5/hdnr_tit_h5.png" alt="">
			<!-- <van-image
				:src="require('./img/H5/hdnr_tit_h5.png')"
				fit="cover"
				width="35.5%"
				float="left"
			/> -->
			<p>
				连赢争霸，王者属谁，ONE游戏联合旗舰厅隆重推出-百家乐连赢争霸赛，连赢争霸您就是王者。
			</p>
			<p>
				第一重：连赢送好礼
			</p>
		</div>
		<div class="winGift">
			<img src="./img/H5/ycl_tit_h5.png" alt="">
		</div>
		<!-- 连赢送好礼 -->
		<div class="activities-content-one">
      <table>
        <!-- 第一组 -->
        <tr>
          <th>连赢局数</th>
          <th>最低单笔投注</th>
          <th>奖金</th>
        </tr>
        <tr>
          <td rowspan="4" class="colorad692b">连赢6-8局</td>
          <td>3USDT/21CNY</td>
          <td>2USDT/12CNY</td>
        </tr>
        <tr>
          <td>29USDT/200CNY</td>
          <td>13USDT/88CNY</td>
        </tr>
        <tr>
          <td>72USDT/500CNY</td>
          <td>56USDT/388CNY</td>
        </tr>
        <tr>
          <td>143USDT/1000CNY</td>
          <td>84USDT/588CNY</td>
        </tr>
        <!-- 第二组 -->
        <tr>
          <td rowspan="4" class="colorad692b">连赢9-11局</td>
          <td>3USDT/21CNY</td>
          <td>9USDT/58CNY</td>
        </tr>
        <tr>
          <td>29USDT/200CNY</td>
          <td>27USDT/188CNY</td>
        </tr>
        <tr>
          <td>72USDT/500CNY</td>
          <td>127USDT/888CNY</td>
        </tr>
        <tr>
          <td>143USDT/1000CNY</td>
          <td>184USDT/1288CNY</td>
        </tr>
        <!-- 第三组 -->
        <tr>
          <td rowspan="4" class="colorad692b">连赢12局及以上</td>
          <td>3USDT/21CNY</td>
          <td>16USDT/108CNY</td>
        </tr>
        <tr>
          <td>29USDT/200CNY</td>
          <td>99USDT/688CNY</td>
        </tr>
        <tr>
          <td>72USDT/500CNY</td>
          <td>270USDT/1888CNY</td>
        </tr>
        <tr>
          <td>143USDT/1000CNY</td>
          <td>556USDT/3888CNY</td>
        </tr>
      </table>
    </div>
		<!-- 连赢争霸赛标题 -->
		<div class="winFightMatch">
			<img src="./img/H5/content-title-2.png" alt="">
		</div>
		<!-- 连赢争霸赛文字-->
		<div class="winFightMatchContent">
			<p>
				第二重：连赢争霸赛
			</p>
			<p>
				旗舰厅会员单笔投注≥500CNY/72USDT， 且连赢局数≥8局，即可入围第二重榜单，获取相应争霸排名奖励。
			</p>
		</div>
		<!-- 连赢争霸赛图片 -->
		<div class="winFightMatchPic">
			<img src="./img/H5/zbs_pic_h5.png" alt="">
		</div>
		<!-- 活动规则 -->
		<div class="actRules">
			<img src="./img/H5/title-2.png" alt="">
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
				4. 连赢争霸赛按最高排名派奖，连赢送好礼奖金无需流水，连赢争霸赛奖金需完成，仅限真人厅；
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
</template>

<script>
import { Dialog } from "vant";
import { UA } from "@/util/ua";
import { mapActions, mapMutations } from "vuex";
export default {
    components:{
        Dialog
    },
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
/* @import "@/assets/css/normaliz.scss"; */
.winningstreak-page-h5{
	border:1px solid black;
	position:relative;
	background:url('./img/H5/nr_bg.png');
	background-size:100% 100%;
	background-repeat:no-repeat;
	background-position:center;
 }
.winningstreak-page-h5 .van-image{ display:block;position:static;margin:0 auto; }
.winningstreak-page-h5 .btn{
	display: flex;
	justify-content: center;
}
.winningstreak-page-h5 .enter-button{
	padding:0;
	margin:-50px 0 20px 0;
	display:block;
	border-radius: 5%;
	border: none;
	cursor: pointer;
 }
.winningstreak-page-h5 .actContent{
	display: flex;
	justify-content: flex-start;
	flex-direction:column;
}
.winningstreak-page-h5 .actContent p{
	font-family: PingFangSC-Medium;
	font-size: 14px;
	color: #444B52;
	letter-spacing: 0;
	font-weight: 500;
}
.winningstreak-page-h5 .actContent img{
	width:35.5%;
}
.winningstreak-page-h5 .actContent p:nth-child(3){
	font-family: PingFangSC-Medium;
	font-size: 14px;
	color: #AD692B;
	letter-spacing: 0;
	font-weight: 500;
}
.winningstreak-page-h5 .winGift{
	width:100%;
	display: flex;
	justify-content: center;
	margin:20px 0 20px 0;
}
.winningstreak-page-h5 .winGift img{
	width:37.1%;
}
.activities-content-one table tr:nth-child(1){
	background: #D0A881;
	border: 1px solid rgba(203,162,117,1);
	border-radius: 0px;
	font-family: PingFangSC-Semibold;
	font-size: 14px;
	color: #FFFFFF;
	letter-spacing: 0;
	font-weight: 600;
	line-height: 40px;
}
.activities-content-one table{
	width:100%;
	border-collapse:collapse;
	font-family: PingFangSC-Semibold;
	font-size: 13px;
	color: #63676C;
	letter-spacing: 0;
	text-align: center;
	font-weight: 600;
}
.activities-content-one table td:last-child{
	color: #AD692B;
}
.activities-content-one table td{
	border:1px solid #CBA275;
	line-height: 50px;
	text-align: center;
}
.winningstreak-page-h5 .winFightMatch{
	width:100%;
	display: flex;
	justify-content: center;
}
.winningstreak-page-h5 .winFightMatch img{
	width:46.1%;
}
.winningstreak-page-h5 .winFightMatchContent p:nth-child(1){
	font-family: PingFangSC-Medium;
	font-size: 14px;
	color: #AD692B;
	letter-spacing: 0;
	font-weight: 500;
}
.winningstreak-page-h5 .winFightMatchContent p:nth-child(2){
	font-family: PingFangSC-Medium;
	font-size: 14px;
	color: #444B52;
	letter-spacing: 0;
	font-weight: 500;
}
.winningstreak-page-h5 .winFightMatchPic{
	display:flex;
	justify-content: center;
}
.winningstreak-page-h5 .winFightMatchPic img{
	width:85.1%;
}
.winningstreak-page-h5 .actRules{
	display: flex;
	flex-direction:column;
	justify-content: flex-end;
}
.winningstreak-page-h5 .actRules img{
	width:35.5%;
}
.winningstreak-page-h5 .actRules p{
	font-family: PingFangSC-Medium;
	font-size: 14px;
	color: #444B52;
	letter-spacing: 0;
	font-weight: 500;
}
.winningstreak-page-h5 .actContent, .winFightMatchContent, .actRules{
	padding:0 5.3% 0 5.3%;
}

</style>
