<template>
  <div class="container">
    <div class="activity_desc">
      <div>玩法规则</div>
      <p class="fir">为方便用户投注，竞猜篮球赛事对阵：客队在前主队在后。</p>
      <table>
        <thead>
          <tr>
            <th>玩法</th>
            <th>玩法说明</th>
            <th>过关方式</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(n,idx) in data" :key="idx">
            <td v-for="x in n" :key="x" v-html="x"></td>
          </tr>
        </tbody>
      </table>
      <div>说明</div>
      <p>全场：全场比赛（含加时时间）</p>
      <p>让分：+2.5是主队接受客队让分2.5分-2.5是主队让2.5分给客队。</p>
      <div>无效赛事处理</div>
      <p>由于比赛取消、延期等原因，导致某场比赛认定为无效场次时，该场比赛的所有单场固定奖金投注按退票处理。过关投注中对该场比赛所有选择均视为无效，固定奖金按在原投注时刻去该场比赛后的投注组合对应的固定奖金计算。</p>
      <div>奖金计算方法</div>
      <p>2014年10月21日起，竞猜篮球大小分、胜负、让分胜负单关浮动奖金暂停销售，胜分差单关固定奖金任然销售。</p>
      <p>中奖奖金=2元x(所选场次对应的出票奖金)x倍数</p>
      <p>单注奖金最高额如下：</p>
      <p>单关：单注最高限额10万</p>
      <p>2-3关：单注最高限额20万</p>
      <p>4-5关：单注最高限额50万</p>
      <p>6关以上：单注最高限额100万</p>
      <div>扣税说明</div>
      <p>根据彩票管理机构的相关规定，中奖彩票单注奖金超过1万元时，中奖人需要缴纳奖金的20%作为个人偶然所得税；税金由彩票中心代扣代缴。</p>
      <p>选择倍投投注时，只要开奖后单注奖金不超过1万元，就算翻倍后奖金超过1万元，也无须缴纳个人偶然所得税。</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      data:[
        ['胜负','对主队的主胜、客胜结果进行投注','最高8关<br/>单关固定'],
        ['让球<br/>胜负','对主队让分后的主胜、客胜结果进行投注','最高8关<br/>单关固定'],
        ['胜分差','对赛事的两队的分差进行投注，共12个投注选项','最高4关<br/>单关固定'],
        ['大小分','对赛事双方的得分总数与预设总分数的大小关系进行投注','最高8关<br/>单关固定'],
        ['混合过关','可混合竞猜胜负、让分胜负、胜分差、大小分玩法','根据投注<br/>玩法而定'],
      ]
    }
  },
  methods: {
    jumpKefuNative() {
      window.location = "nbapp://openServicePage?data={}";
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/normaliz.scss";
@import "@/assets/css/screen750.scss";
</style>
<style lang="scss" scoped>
@import "./bt.scss";
</style>