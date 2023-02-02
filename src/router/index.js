import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const _import = file => () => import('@/views/' + file)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/about',
    },
    {
      name: 'about',
      path: '/about',
      components: {
        default: _import("about")
      }
    },
    // 迎新大礼包
    {
      name: 'newUser',
      path: '/newUser',
      components: {
        default: _import("newUser")
      }
    },
    // ONE众瞩目首存红利40%
    {
      name: 'dividend',
      path: '/dividend',
      redirect: "/dividend/h5",
      components: {
        default: _import('dividend/index')
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("dividend/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("dividend/pc")
          },
        },
      ]
    },
    // ONE中选一 霸王餐
    {
      name: 'overlord',
      path: '/overlord',
      redirect: "overlord/h5",
      components: {
        default: _import('overlord/index')
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("overlord/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("overlord/pc")
          },
        },
      ]
    },
    {
      name: 'fans',
      path: '/fans',
      redirect: "/fans/h5",
      components: {
        default: _import('fans/index')
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("fans/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("fans/pc")
          },
        },
      ]
    },
    {
      name: 'moreSave',
      path: '/moreSave',
      components: {
        default: _import('moreSave')
      }
    },
    // {
    //   // 洗码活动
    //   name: 'washCode_1',
    //   path: '/washCode_1',
    //   redirect: "/washCode_1/h5",
    //   components: {
    //     default: _import('washCode_1.12')
    //   },
    //   children: [
    //     {
    //       path: "h5",
    //       components: {
    //         default: _import("washCode_1.12/h5")
    //       },
    //     },
    //     {
    //       path: "pc",
    //       components: {
    //         default: _import("washCode_1.12/pc")
    //       },
    //     },
    //   ]
    // },
    {
      // 洗码活动_新增
      name: 'washCode',
      path: '/washCode',
      redirect: "/washCode/h5",
      components: {
        default: _import('washCode')
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("washCode/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("washCode/pc")
          },
        },
      ]
    },
    {
      // 洗码活动_新增
      name: 'washCode_1.20',
      path: '/washCode_1.20',
      redirect: "/washCode_1.20/h5",
      components: {
        default: _import('washCode_1.32')
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("washCode_1.32/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("washCode_1.32/pc")
          },
        },
      ]
    },
    {
      name: 'registrationGift',
      path: '/registrationGift',
      components: {
        default: _import('registrationGift/index')
      }
    },
    {
      name: 'firstSaveUat',
      path: '/firstSaveUat',
      components: {
        default: _import("firstSaveUat")
      }
    },
    {
      name: 'logOnUat',
      path: '/logOnUat',
      components: {
        default: _import('logOnUat')
      }
    },
    {
      name: 'quiz',
      path: "/quiz",
      components: {
        default: _import('quiz/index')
      }
    },
    {
      name: 'nba',
      path: "/nba",
      redirect: "/nba/h5",
      components: {
        default: _import('nba/index')
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("nba/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("nba/pc")
          },
        },
      ]
    },
    {
      name: "nbaActivity",
      path: "/nbaActivity",
      redirect: "/nbaActivity/h5",
      components: {
        default: _import("nbaActivity/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("nbaActivity/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("nbaActivity/pc")
          },
        },
      ]
    },
    {
      name: "registrActivity",
      path: "/registrActivity",
      components: {
        default: _import("registrActivity/index")
      }
    },
    {
      name: "spree",
      path: "/spree",
      components: {
        default: _import("spree/index")
      }
    },
    // usdt说明页
    {
      name: "usdt",
      path: "/usdt",
      redirect: "/usdt/h5",
      components: {
        default: _import("usdt/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("usdt/h5")
          },
        },
        {
          path: "rechargeTutorial",
          components: {
            default: _import("usdt/rechargeTutorial")
          },
        },
        {
          path: "agreementDiff",
          components: {
            default: _import("usdt/agreementDiff")
          },
        },
        {
          path: "understand",
          components: {
            default: _import("usdt/understand")
          },
        },
      ]
    },
    // usdt 笔笔存送
    {
      name: "saveGiveAway",
      path: "/saveGiveAway",
      redirect: "/saveGiveAway/h5",
      components: {
        default: _import("saveGiveAway/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("saveGiveAway/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("saveGiveAway/pc")
          },
        },
      ]
    },
    // 左拥皇马 又抱巴萨
    {
      name: "hugRight",
      path: "/hugRight",
      redirect: "/hugRight/h5",
      components: {
        default: _import("hugRight/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("hugRight/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("hugRight/pc")
          },
        },
      ]
    },
    {
      name: "bti",
      path: "/bti",
      redirect: "/bti/h5",
      components: {
        default: _import("bti/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("bti/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("bti/pc")
          },
        },
      ]
    },
    //天天在ONE
    {
      name: "everyDayOne",
      path: "/everyDayOne",
      redirect: "/everyDayOne/h5",
      components: {
        default: _import("everyDayOne/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("everyDayOne/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("everyDayOne/pc")
          },
        },
      ]
    },
    //新年红包活动
    {
      name: "newYearRedEnvelope",
      path: "/newYearRedEnvelope",
      redirect: "/newYearRedEnvelope/h5",
      components: {
        default: _import("newYearRedEnvelope/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("newYearRedEnvelope/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("newYearRedEnvelope/pc")
          },
        },
      ]
    },
    //新年活动
    {
      name: "newYearEvent",
      path: "/newYearEvent",
      redirect: "/newYearEvent/h5",
      components: {
        default: _import("newYearEvent/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("newYearEvent/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("newYearEvent/pc")
          },
        },
      ]
    },
    //沙巴体育活动
    {
      name: "shaBa",
      path: "/shaBa",
      redirect: "/shaBa/h5",
      components: {
        default: _import("shaBa/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("shaBa/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("shaBa/pc")
          },
        },
      ]
    },
    // 呼朋唤友活动
    {
      name: "CallFriends",
      path: "/CallFriends",
      redirect: "/CallFriends/h5",
      components: {
        default: _import("CallFriends/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("CallFriends/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("CallFriends/pc")
          },
        },
      ]
    },
    // one众焦点zhan
    {
      name: "one",
      path: "/one",
      redirect: "/one/h5",
      components: {
        default: _import("one/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("one/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("one/pc")
          },
        },
      ]
    },
    // 打鱼在one
    {
      name: "fishing",
      path: "/fishing",
      redirect: "/fishing/h5",
      components: {
        default: _import("fishing/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("fishing/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("fishing/pc")
          },
        },
      ]
    },
    //电竞狂欢
    {
      name: "LPL",
      path: "/LPL",
      redirect: "/LPL/h5",
      components: {
        default: _import("LPL/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("LPL/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("LPL/pc")
          },
        },
      ]
    },
    // 竞彩玩法介绍
    {
      name: "Lottery",
      path: "/Lottery",
      redirect: "/Lottery/fb",
      components: {
        default: _import("Lottery/index")
      },
      children: [
        {
          path: "fb",
          components: {
            default: _import("Lottery/fb")
          },
        },
        {
          path: "bt",
          components: {
            default: _import("Lottery/bt")
          },
        },
        {
          path: "about",
          components: {
            default: _import("Lottery/about")
          },
        },
        {
          path: "service",
          components: {
            default: _import("Lottery/service")
          },
        },
        {
          path: "privacy",
          components: {
            default: _import("Lottery/privacy")
          },
        },
      ]
    },
    // 看个球
    {
      name: "LookBall",
      path: "/LookBall",
      redirect: "/LookBall/h5",
      components: {
        default: _import("LookBall/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("LookBall/h5")
          },
        },
      ]
    },
    //黄金周上ONE
    {
      name: "WY",
      path: "/WY",
      redirect: "/WY/h5",
      components: {
        default: _import("WY/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("WY/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("WY/pc")
          },
        },
      ]
    },
    //电竞狂欢
    {
      name: "PremierLeague",
      path: "/PremierLeague",
      redirect: "/PremierLeague/h5",
      components: {
        default: _import("PremierLeague/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("PremierLeague/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("PremierLeague/pc")
          },
        },
      ]
    },
    // 电竞狂欢第二季   竞逐msi
    {
      name: "msi",
      path: "/msi",
      redirect: "/msi/h5",
      components: {
        default: _import("msi/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("msi/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("msi/pc")
          },
        },
      ]
    },
    // 真人25活动
    {
      name: "real25",
      path: "/real25",
      redirect: "/real25/h5",
      components: {
        default: _import("real25/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("real25/H5Temp")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("real25/PCTemp")
          },
        },
      ]
    },
    // 欧洲杯全程ONE
    {
      name: "euro",
      path: "/euro",
      redirect: "/euro/h5",
      components: {
        default: _import("euro/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("euro/H5Temp")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("euro/PCTemp")
          },
        },
      ]
    },
    // 富文本
    {
      name: "ads",
      path: "/ads",
      redirect: "/ads/discount",
      components: {
        default: _import("ads/index")
      },
      children: [
        {
          path: "discount",
          components: {
            default: _import("ads/h5")
          },
        }
      ]
    },
    // 富文本
    {
      name: "vip",
      path: "/vip",
      redirect: "/vip/vip",
      components: {
        default: _import("Vip/Index")
      },
      children: [
        {
          path: "vip",
          components: {
            default: _import("Vip/Vip")
          },
        }
      ]
    },
    // 串关百万加奖
    {
      name: "kushikatsu",
      path: "/kushikatsu",
      redirect: "/kushikatsu/h5",
      components: {
        default: _import("kushikatsu/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("kushikatsu/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("kushikatsu/pc")
          },
        },
      ]
    },
    // 欧洲杯 51竞彩
    {
      name: "euro51",
      path: "/euro51",
      redirect: "/euro51/h5",
      components: {
        default: _import("euro51/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("euro51/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("euro51/pc")
          },
        },
      ]
    },
    // 篮球三分赛
    {
      name: "basketball",
      path: "/basketball",
      redirect: "/basketball/h5",
      components: {
        default: _import("basketball/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("basketball/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("basketball/pc")
          },
        },
      ]
    },
    // 足球进球送豪礼
    {
      name: "football",
      path: "/football",
      redirect: "/football/h5",
      components: {
        default: _import("football/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("football/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("football/pc")
          },
        },
      ]
    },
    // 品宣赛事赞助活动
    {
      name: "gametive",
      path: "/gametive",
      redirect: "/gametive/h5",
      components: {
         default: _import("gametive/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("gametive/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("gametive/pc")
          },
        },
      ]
    },
    // 中秋活动
    {
      name: "Autumn",
      path: "/Autumn",
      redirect: "/Autumn/h5",
      components: {
         default: _import("Autumn/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("Autumn/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("Autumn/pc")
          },
        },
      ]
    },
    // 十一活动
    {
      name: "nationalday",
      path: "/nationalday",
      redirect: "/nationalday/h5",
      components: {
        default: _import("nationalday/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("nationalday/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("nationalday/pc")
          },
        },
      ]
    },
    // 每周续存
    {
      name: "continuation",
      path: "/continuation",
      redirect: "/continuation/h5",
      components: {
        default: _import("continuation/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("continuation/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("continuation/pc")
          },
        },
      ]
    },
    // 夏令营
    {
      name: "summercamp",
      path: "/summercamp",
      redirect: "/summercamp/h5",
      components: {
        default: _import("summercamp/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("summercamp/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("summercamp/pc")
          },
        },
      ]
    },
    // usdt送不停
    {
      name: "usdtgift",
      path: "/usdtgift",
      redirect: "/usdtgift/h5",
      components: {
        default: _import("usdtgift/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("usdtgift/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("usdtgift/pc")
          },
        },
      ]
    },
    // 天天好礼送不停
    {
      name: "everyDayGift",
      path: "/everyDayGift",
      redirect: "/everyDayGift/h5",
      components: {
        default: _import("everyDayGift/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("everyDayGift/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("everyDayGift/pc")
          },
        },
      ]
    },
    // 51真人
    {
      name: "real51",
      path: "/real51",
      redirect: "/real51/h5",
      components: {
        default: _import("real51/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("real51/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("real51/pc")
          },
        },
      ]
    },
    // 51体育
    {
      name: "sports51",
      path: "/sports51",
      redirect: "/sports51/h5",
      components: {
        default: _import("sports51/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("sports51/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("sports51/pc")
          },
        },
      ]
    },
    {
      name: "kingofbattles",
      path: "/kingofbattles",
      redirect: "/kingofbattles/h5",
      components: {
        default: _import("kingofbattles/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("kingofbattles/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("kingofbattles/pc")
          },
        },
      ]
    },
    // 双DAN你投注
    {
      name: "doubleDANSet",
      path: "/doubleDANSet",
      redirect: "/doubleDANSet/h5",
      components: {
        default: _import("doubleDANSet/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("doubleDANSet/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("doubleDANSet/pc")
          },
        },
      ]
    },
    // 双DAN你上上签
    {
      name: "doubleDANUp",
      path: "/doubleDANUp",
      redirect: "/doubleDANUp/h5",
      components: {
        default: _import("doubleDANUp/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("doubleDANUp/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("doubleDANUp/pc")
          },
        },
      ]
    },
    // 双DAN你投注
    {
      name: "doubleDANFirst",
      path: "/doubleDANFirst",
      redirect: "/doubleDANFirst/h5",
      components: {
        default: _import("doubleDANFirst/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("doubleDANFirst/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("doubleDANFirst/pc")
          },
        },
      ]
    },
     // 虎年红包
     {
      name: "newYearTiger",
      path: "/newYearTiger",
      redirect: "/newYearTiger/h5",
      components: {
         default: _import("newYearTiger/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("newYearTiger/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("newYearTiger/pc")
          },
        },
      ]
    },
     // 虎年礼金翻倍
     {
      name: "douleGift",
      path: "/douleGift",
      redirect: "/douleGift/h5",
      components: {
         default: _import("douleGift/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("douleGift/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("douleGift/pc")
          },
        },
      ]
    },

    // AG旗舰厅百家乐连赢活动
    {
      name: "winningstreak",
      path: "/winningstreak",
      redirect: "/winningstreak/h5",
      components: {
         default: _import("winningstreak/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("winningstreak/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("winningstreak/pc")
          },
        },
      ]
    },
    // AG旗舰厅百家乐连赢活动2
    {
      name: "winningstreak2",
      path: "/winningstreak2",
      redirect: "/winningstreak2/h5",
      components: {
         default: _import("winningstreak2/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("winningstreak2/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("winningstreak2/pc")
          },
        },
      ]
    },
     // BTI免费投注活动
     {
      name: "btiFreeBets",
      path: "/btiFreeBets",
      redirect: "/btiFreeBets/h5",
      components: {
         default: _import("btiFreeBets/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("btiFreeBets/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("btiFreeBets/pc")
          },
        },
      ]
    },
    // 金秋十月 礼金送不停活动
    {
      name: "goldenAutumnOctober",
      path: "/goldenAutumnOctober",
      redirect: "/goldenAutumnOctober/h5",
      components: {
         default: _import("goldenAutumnOctober/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("goldenAutumnOctober/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("goldenAutumnOctober/pc")
          },
        },
      ]
    },
    // 呼朋唤友三重礼活动
    {
      name: "tripleGift",
      path: "/tripleGift",
      redirect: "/tripleGift/h5",
      components: {
        default: _import("tripleGift/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("tripleGift/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("tripleGift/pc")
          },
        },
      ]
    },
    // 体育投注周周送
    {
     name: "weeklyGift",
     path: "/weeklyGift",
     redirect: "/weeklyGift/h5",
     components: {
        default: _import("weeklyGift/index")
     },
     children: [
       {
         path: "h5",
         components: {
           default: _import("weeklyGift/h5")
         },
       },
       {
         path: "pc",
         components: {
           default: _import("weeklyGift/pc")
         },
       },
     ]
    },
    // 真人闯关彩金不断
    {
     name: "passBonus",
     path: "/passBonus",
     redirect: "/passBonus/h5",
     components: {
        default: _import("passBonus/index")
     },
     children: [
       {
         path: "h5",
         components: {
           default: _import("passBonus/h5")
         },
       },
       {
         path: "pc",
         components: {
           default: _import("passBonus/pc")
         },
       },
     ]
    },
    // 世界杯雙重禮
    {
      name: "worldCup",
      path: "/worldCup",
      redirect: "/worldCup/h5",
      components: {
        default: _import("worldCup/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("worldCup/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("worldCup/pc")
          },
        },
      ]
    },
    // 世界杯狂欢节 WorldCup188 downloadAPP
    {
      name: "WorldCup188",
      path: "/WorldCup188",
      redirect: "/WorldCup188/pc",
      components: {
         default: _import("WorldCup188/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("WorldCup188/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("WorldCup188/pc")
          },
        },
      ]
    },
    // 下载 APP 免费领彩金 downloadAPP
    {
      name: "downloadAPP",
      path: "/downloadAPP",
      redirect: "/downloadAPP/pc",
      components: {
         default: _import("downloadAPP/index")
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("downloadAPP/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("downloadAPP/pc")
          },
        },
      ]
    },
    // 戰火重燃
    {
      name: "warAgain",
      path: "/warAgain",
      redirect: "/warAgain/h5",
      components: {
        default: _import('warAgain/index')
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("warAgain/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("warAgain/pc")
          },
        },
      ]
    },
    // 棋牌雙重禮
    {
      name: "DoubleChess",
      path: "/doubleChess",
      redirect: "/doubleChess/h5",
      components: {
        default: _import('doubleChess/index')
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("doubleChess/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("doubleChess/pc")
          },
        },
      ]
    },
    // 棋牌首存
    {
      name: "Chess",
      path: "/chess",
      redirect: "/chess/h5",
      components: {
        default: _import('chess/index')
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("chess/h5")
          }
        },
        {
          path: "pc",
          components: {
            default: _import("chess/pc")
          },
        },
      ]
    },
    // 激战世界杯
    {
      name: "fightWorldCup",
      path: "/fightWorldCup",
      redirect: "/fightWorldCup/h5",
      components: {
        default: _import('fightWorldCup/index')
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("fightWorldCup/h5")
          }
        },
        {
          path: "pc",
          components: {
            default: _import("fightWorldCup/pc")
          },
        },
      ]
    },
    // 激战世界杯
    {
      name: "worldCupFinal",
      path: "/worldCupFinal",
      components: {
        default: _import("worldCupFinal")
     },
    },
    {
      // 洗码活动_新增_1.31
      name: 'washCode_1.31',
      path: '/washCode_1.31',
      redirect: "/washCode_1.31/h5",
      components: {
        default: _import('washCode_1.31')
      },
      children: [
        {
          path: "h5",
          components: {
            default: _import("washCode_1.31/h5")
          },
        },
        {
          path: "pc",
          components: {
            default: _import("washCode_1.31/pc")
          },
        },
      ]
    },
  ]
})
