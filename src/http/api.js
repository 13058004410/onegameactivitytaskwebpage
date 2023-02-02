import appConfig from '../config/config'
let apiUrl = appConfig.host
let apiUrl2 = appConfig.host2
 
export default {
  // webToken
  global: {
    webToken: `${apiUrl}/_glaxy_e1s2e8_/webToken`,
    getH5TokenByTempTicket: `${apiUrl}/_glaxy_e1s2e8_/getH5TokenByTempTicket`,
    bootstrap: `${apiUrl}/_glaxy_e1s2e8_/_extra_/bootstrap`, // bootstrap
    jcbootstrap: `${apiUrl}/_glaxy_e1s2e8_/_extra_/jc/bootstrap`, // bootstrap
    about: `${apiUrl}/_glaxy_e1s2e8_/_extra_/about`,
    ttkefuUrl:`${apiUrl}/_glaxy_e1s2e8_/_extra_/jc/customerService` , //51 jc kefu
    basketballUrl:`${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/match3fInfo` // 篮球/足球接口
  },
  //新年红包活动
  newYearRedEnvelope: {
    newDraw: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/newDraw`,  //抽奖接口
    qualified: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/qualified/query`  //查询机会使用情形
  },
  // 洗码活动
  washCode: {
    createRequest: `${apiUrl}/_glaxy_e1s2e8_/xm/createRequest`, // 创建洗码提案（领取洗码礼金）
    queryRequest: `${apiUrl}/_glaxy_e1s2e8_/xm/queryRequest`,// 查询洗码提案列表
    calcAmountV2: `${apiUrl}/_glaxy_e1s2e8_/xm/calcAmountV2`, // 本周洗码数据
    userBetList: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/userBetList`, // 上周洗码数据
    userBetRecord: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/userBetRecord`, // 用户周洗码汇总统计列表
  },
  // One众瞩目
  dividend: {
    activityInfo: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/info`, // 活动信息
    firstDeposit: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/firstDeposit`, // 领取
  },
  // 霸王餐
  overlord: {
    activityInfo: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/newInfo`, // 活动信息
  },
  //竞猜页
  quiz: {
    matchGuide: `${apiUrl}/_glaxy_e1s2e8_/_extra_/matchGuide/index`,
    commentList: `${apiUrl}/_glaxy_e1s2e8_/_extra_/matchGuide/commentList`,
    commentLike: `${apiUrl}/_glaxy_e1s2e8_/_extra_/matchGuide/commentLike`,
    commentAdd: `${apiUrl}/_glaxy_e1s2e8_/_extra_/matchGuide/commentAdd`,
    bet: `${apiUrl}/_glaxy_e1s2e8_/_extra_/matchGuide/bet`,
  },
  logOnUat: {
    register: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/register`,
    info: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/info`
  },
  //nba竞猜
  nab: {
    NBAGuessInfo: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/NBAGuessInfo`,
    matchGuessList: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/matchGuessList`,
    matchGuessAdd: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/matchGuessAdd`,
    matchGuessWin: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/matchGuessWin`,
  },
  //usdt笔笔存送
  saveGiveAway: {
    info: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/info`,
    usdtDepositGift: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/usdtDepositGift`
  },
  //看个球
  lookBall: {
    createAccountByMobileNo: `${apiUrl}/_glaxy_e1s2e8_/customer/createAccountByMobileNo`,//手机注册提交
    loginByMobileEx: `${apiUrl}/_glaxy_e1s2e8_/customer/loginByMobileNo`,//短信验证码登录
    login: `${apiUrl}/_glaxy_e1s2e8_/customer/login`,//手机号登录
    sendCode: `${apiUrl}/_glaxy_e1s2e8_/phone/sendCode`,//手机短信验证码
    importUser: `${apiUrl}/_glaxy_e1s2e8_/_extra_/importUser`,//批量用户导入
    matchGuessAdd: `${apiUrl}/_glaxy_e1s2e8_/_extra_/kq/matchGuessAdd`,//发起赛事竞猜
    matchGuessList: `${apiUrl}/_glaxy_e1s2e8_/_extra_/kq/matchGuessList`,//用户赛事竞猜历史
    matchGuessInfo: `${apiUrl}/_glaxy_e1s2e8_/_extra_/kq/matchGuessInfo`,//赛事竞猜页渲染数据
  },
  //富文本编辑
  ads: {
    discountView: `${apiUrl}/_glaxy_e1s2e8_/_extra_/ads/discountView`,
  },
  //品宣活动
  gametive: {
    gameGuessList: `${apiUrl}/_glaxy_e1s2e8_/_extra_/product/list`,  //活动列表
    gameGuessHis: `${apiUrl}/_glaxy_e1s2e8_/_extra_/product/history`, //历史活动记录
    gameGuessPrize: `${apiUrl}/_glaxy_e1s2e8_/_extra_/product/prize`, //中奖列表
    gameGuessQuiz: `${apiUrl}/_glaxy_e1s2e8_/_extra_/product/quiz`, //我的竞猜
    gameGuessApply: `${apiUrl}/_glaxy_e1s2e8_/_extra_/product/apply`, //提交用户竞猜接口
  },
  //三重好礼
  tripleGift: {
    queryAllCustomerPrize: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/queryAllCustomerPrize` //查询用户获奖纪录
  },
  //战火重燃
  warAgain: {
    newInfo: `${apiUrl}/_glaxy_e1s2e8_/_extra_/activity/newInfo`, //查询比赛资讯
    fifaEventIntegral: `${apiUrl}/_glaxy_e1s2e8_/_extra_/fifaEventIntegral`
  }
}
