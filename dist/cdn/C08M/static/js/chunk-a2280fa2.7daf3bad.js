(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2280fa2","chunk-2d2080c9","chunk-2d0c7382","chunk-2d0ab717","chunk-2d0da019","chunk-2d0a3fc4","chunk-2d2308f1","chunk-2d0cc481"],{"0509":function(t,n,e){t.exports=e.p+"cdn/C08M/static/img/title-1.2c0fe133.png"},"092d":function(t,n,e){"use strict";function o(t){var n=t.parentNode;n&&n.removeChild(t)}e.d(n,"a",(function(){return o}))},1175:function(t,n,e){},"14fd":function(t,n,e){t.exports=e.p+"cdn/C08M/static/img/content-title-2.be302ab4.png"},2241:function(t,n,e){"use strict";var o,i=e("c31d"),a=e("2b0e"),s=e("2638"),c=e.n(s),r=e("d282"),l=e("a142"),u=e("ea8e"),d=e("b1d2"),h=e("6605"),f=e("b650"),v=e("9884"),p=Object(r["a"])("goods-action"),m=p[0],g=p[1],b=m({mixins:[Object(v["b"])("vanGoodsAction")],props:{safeAreaInsetBottom:{type:Boolean,default:!0}},render:function(){var t=arguments[0];return t("div",{class:g({unfit:!this.safeAreaInsetBottom})},[this.slots()])}}),C=e("48f4"),y=Object(r["a"])("goods-action-button"),k=y[0],O=y[1],S=k({mixins:[Object(v["a"])("vanGoodsAction")],props:Object(i["a"])({},C["c"],{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),computed:{isFirst:function(){var t=this.parent&&this.parent.children[this.index-1];return!t||t.$options.name!==this.$options.name},isLast:function(){var t=this.parent&&this.parent.children[this.index+1];return!t||t.$options.name!==this.$options.name}},methods:{onClick:function(t){this.$emit("click",t),Object(C["b"])(this.$router,this)}},render:function(){var t=arguments[0];return t(f["a"],{class:O([{first:this.isFirst,last:this.isLast},this.type]),attrs:{size:"large",type:this.type,icon:this.icon,color:this.color,loading:this.loading,disabled:this.disabled},on:{click:this.onClick}},[this.slots()||this.text])}}),w=Object(r["a"])("dialog"),_=w[0],x=w[1],N=w[2],B=_({mixins:[Object(h["a"])()],props:{title:String,theme:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,overlay:{type:Boolean,default:!0},allowHtml:{type:Boolean,default:!0},transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},closeOnPopstate:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var n=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(e){!1!==e&&n.loading[t]&&n.onClose(t),n.loading.confirm=!1,n.loading.cancel=!1}))):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){var t=this;this.$emit("opened"),this.$nextTick((function(){var n;null==(n=t.$refs.dialog)||n.focus()}))},onClosed:function(){this.$emit("closed")},onKeydown:function(t){var n=this;if("Escape"===t.key||"Enter"===t.key){if(t.target!==this.$refs.dialog)return;var e={Enter:this.showConfirmButton?function(){return n.handleAction("confirm")}:l["h"],Escape:this.showCancelButton?function(){return n.handleAction("cancel")}:l["h"]};e[t.key](),this.$emit("keydown",t)}},genRoundButtons:function(){var t=this,n=this.$createElement;return n(b,{class:x("footer")},[this.showCancelButton&&n(S,{attrs:{size:"large",type:"warning",text:this.cancelButtonText||N("cancel"),color:this.cancelButtonColor,loading:this.loading.cancel},class:x("cancel"),on:{click:function(){t.handleAction("cancel")}}}),this.showConfirmButton&&n(S,{attrs:{size:"large",type:"danger",text:this.confirmButtonText||N("confirm"),color:this.confirmButtonColor,loading:this.loading.confirm},class:x("confirm"),on:{click:function(){t.handleAction("confirm")}}})])},genButtons:function(){var t,n=this,e=this.$createElement,o=this.showCancelButton&&this.showConfirmButton;return e("div",{class:[d["c"],x("footer")]},[this.showCancelButton&&e(f["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||N("cancel"),nativeType:"button"},class:x("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){n.handleAction("cancel")}}}),this.showConfirmButton&&e(f["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||N("confirm"),nativeType:"button"},class:[x("confirm"),(t={},t[d["a"]]=o,t)],style:{color:this.confirmButtonColor},on:{click:function(){n.handleAction("confirm")}}})])},genContent:function(t,n){var e=this.$createElement;if(n)return e("div",{class:x("content")},[n]);var o=this.message,i=this.messageAlign;if(o){var a,s,r={class:x("message",(a={"has-title":t},a[i]=i,a)),domProps:(s={},s[this.allowHtml?"innerHTML":"textContent"]=o,s)};return e("div",{class:x("content",{isolated:!t})},[e("div",c()([{},r]))])}}},render:function(){var t=arguments[0];if(this.shouldRender){var n=this.message,e=this.slots(),o=this.slots("title")||this.title,i=o&&t("div",{class:x("header",{isolated:!n&&!e})},[o]);return t("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||n,tabIndex:0},class:[x([this.theme]),this.className],style:{width:Object(u["a"])(this.width)},ref:"dialog",on:{keydown:this.onKeydown}},[i,this.genContent(o,e),"round-button"===this.theme?this.genRoundButtons():this.genButtons()])])}}});function T(t){return document.body.contains(t)}function j(){o&&o.$destroy(),o=new(a["default"].extend(B))({el:document.createElement("div"),propsData:{lazyRender:!1}}),o.$on("input",(function(t){o.value=t}))}function $(t){return l["g"]?Promise.resolve():new Promise((function(n,e){o&&T(o.$el)||j(),Object(i["a"])(o,$.currentOptions,t,{resolve:n,reject:e})}))}$.defaultOptions={value:!0,title:"",width:"",theme:null,message:"",overlay:!0,className:"",allowHtml:!0,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1,callback:function(t){o["confirm"===t?"resolve":"reject"](t)}},$.alert=$,$.confirm=function(t){return $(Object(i["a"])({showCancelButton:!0},t))},$.close=function(){o&&(o.value=!1)},$.setDefaultOptions=function(t){Object(i["a"])($.currentOptions,t)},$.resetDefaultOptions=function(){$.currentOptions=Object(i["a"])({},$.defaultOptions)},$.resetDefaultOptions(),$.install=function(){a["default"].use(B)},$.Component=B,a["default"].prototype.$dialog=$;n["a"]=$},"2fcb":function(t,n,e){},"4cea":function(t,n,e){t.exports=e.p+"cdn/C08M/static/img/zbs_pic_pc.bf733c1b.png"},"4cf9":function(t,n,e){},"4d75":function(t,n,e){},"504e":function(t,n,e){t.exports=e.p+"cdn/C08M/static/img/content-title-1.a9a31a4f.png"},6605:function(t,n,e){"use strict";e.d(n,"a",(function(){return O}));var o={zIndex:2e3,lockCount:0,stack:[],find:function(t){return this.stack.filter((function(n){return n.vm===t}))[0]},remove:function(t){var n=this.find(t);if(n){n.vm=null,n.overlay=null;var e=this.stack.indexOf(n);this.stack.splice(e,1)}}},i=e("c31d"),a=e("6e47"),s=e("ba31"),c=e("092d"),r={className:"",customStyle:{}};function l(t){return Object(s["c"])(a["a"],{on:{click:function(){t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}})}function u(t){var n=o.find(t);if(n){var e=t.$el,a=n.config,s=n.overlay;e&&e.parentNode&&e.parentNode.insertBefore(s.$el,e),Object(i["a"])(s,r,a,{show:!0})}}function d(t,n){var e=o.find(t);if(e)e.config=n;else{var i=l(t);o.stack.push({vm:t,config:n,overlay:i})}u(t)}function h(t){var n=o.find(t);n&&(n.overlay.show=!1)}function f(t){var n=o.find(t);n&&(Object(c["a"])(n.overlay.$el),o.remove(t))}var v=e("1325"),p=e("a8c1"),m=e("3875");function g(t){return"string"===typeof t?document.querySelector(t):t()}function b(t){var n=void 0===t?{}:t,e=n.ref,o=n.afterPortal;return{props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,n=this.getContainer,i=e?this.$refs[e]:this.$el;n?t=g(n):this.$parent&&(t=this.$parent.$el),t&&t!==i.parentNode&&t.appendChild(i),o&&o.call(this)}}}}var C=e("5fbe"),y={mixins:[Object(C["a"])((function(t,n){this.handlePopstate(n&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{onPopstate:function(){this.close(),this.shouldReopen=!1},handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var n=t?v["b"]:v["a"];n(window,"popstate",this.onPopstate)}}}},k={transitionAppear:Boolean,value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}};function O(t){return void 0===t&&(t={}),{mixins:[m["a"],y,b({afterPortal:function(){this.overlay&&u()}})],provide:function(){return{vanPopup:this}},props:k,data:function(){return this.onReopenCallback=[],{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(n){var e=n?"open":"close";this.inited=this.inited||this.value,this[e](),t.skipToggleEvent||this.$emit(e)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.shouldReopen&&(this.$emit("input",!0),this.shouldReopen=!1)},beforeDestroy:function(){f(this),this.opened&&this.removeLock(),this.getContainer&&Object(c["a"])(this.$el)},deactivated:function(){this.value&&(this.close(),this.shouldReopen=!0)},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(o.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.addLock(),this.onReopenCallback.forEach((function(t){t()})))},addLock:function(){this.lockScroll&&(Object(v["b"])(document,"touchstart",this.touchStart),Object(v["b"])(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.add("van-overflow-hidden"),o.lockCount++)},removeLock:function(){this.lockScroll&&o.lockCount&&(o.lockCount--,Object(v["a"])(document,"touchstart",this.touchStart),Object(v["a"])(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.remove("van-overflow-hidden"))},close:function(){this.opened&&(h(this),this.opened=!1,this.removeLock(),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var n=this.deltaY>0?"10":"01",e=Object(p["b"])(t.target,this.$el),o=e.scrollHeight,i=e.offsetHeight,a=e.scrollTop,s="11";0===a?s=i>=o?"00":"01":a+i>=o&&(s="10"),"11"===s||"vertical"!==this.direction||parseInt(s,2)&parseInt(n,2)||Object(v["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){t.updateZIndex(t.overlay?1:0),t.overlay?d(t,{zIndex:o.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):h(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++o.zIndex+t},onReopen:function(t){this.onReopenCallback.push(t)}}}}},"6a80":function(t,n,e){t.exports=e.p+"cdn/C08M/static/img/enter-button.f55f5964.png"},"6e47":function(t,n,e){"use strict";var o=e("2638"),i=e.n(o),a=e("c31d"),s=e("d282"),c=e("a142"),r=e("ba31"),l=e("1325"),u=Object(s["a"])("overlay"),d=u[0],h=u[1];function f(t){Object(l["c"])(t,!0)}function v(t,n,e,o){var s=Object(a["a"])({zIndex:n.zIndex},n.customStyle);return Object(c["c"])(n.duration)&&(s.animationDuration=n.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",i()([{directives:[{name:"show",value:n.show}],style:s,class:[h(),n.className],on:{touchmove:n.lockScroll?f:c["h"]}},Object(r["b"])(o,!0)]),[null==e.default?void 0:e.default()])])}v.props={show:Boolean,zIndex:[Number,String],duration:[Number,String],className:null,customStyle:Object,lockScroll:{type:Boolean,default:!0}},n["a"]=d(v)},a2ac:function(t,n,e){t.exports=e.p+"cdn/C08M/static/img/banner.3fb492ad.jpg"},a71a:function(t,n,e){},c3f6:function(t,n,e){},c851:function(t,n,e){"use strict";e("c3f6")},d1e5:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t._self._c;return n("div",{staticClass:"winningstreak-page-pc"},[n("van-image",{attrs:{width:"100%",src:e("a2ac")}}),n("van-image",{staticClass:"enter-button-img",attrs:{width:"248px",height:"70px",src:e("6a80")},on:{click:t.openAG}}),n("div",{staticClass:"content-view"},[n("van-image",{staticStyle:{"margin-bottom":"6px"},attrs:{width:"194px",height:"100px",src:e("0509")}}),n("h2",[t._v(" 连赢争霸，王者属谁，ONE游戏联合旗舰厅隆重推出-百家乐连赢争霸赛，连赢争霸您就是王者。 ")]),n("van-image",{staticStyle:{"margin-top":"40px"},attrs:{width:"267px",height:"83px",src:e("504e")}}),n("h3",[t._v("第一重：连赢送好礼")]),t._m(0),n("van-image",{staticStyle:{"margin-top":"40px"},attrs:{width:"331px",height:"83px",src:e("14fd")}}),n("h3",[t._v("第二重：连赢争霸赛")]),n("h4",[t._v(" 旗舰厅会员单笔投注≥500CNY/72USDT，且连赢局数≥8局，即可入围第二重榜单，获取相应争霸排名奖励。 ")]),n("van-image",{staticStyle:{"margin-top":"40px"},attrs:{width:"960px",height:"277px",src:e("4cea")}}),n("div",{staticClass:"activities-title-two"},[n("van-image",{staticStyle:{"margin-top":"20px","margin-bottom":"10px"},attrs:{width:"194px",height:"100px",src:e("ed95")}}),n("p",[t._v("1. ONE游戏全体会员都可参与，进入AG旗舰厅即可参与，无需报名；")]),n("p",[t._v(" 2. 本活动仅限旗舰厅“庄”“闲”“庄免佣”玩法，连环百家乐/多台百家乐不参与此活动，若玩家有投注该玩法或其他玩法，不中断连赢局数； ")]),n("p",[t._v(" 3. 投注庄闲玩法，开牌结果为和，不中断连赢，对冲投注则连赢中断，且追究相应违规责任，连赢局数隔日不清零； ")]),t._m(1),n("p",[t._v(" 5. 连赢送好礼与连赢争霸赛不冲突，可同时享有，连赢好礼奖金完成连赢后系统自动派发到账(连赢局数若不中断，将不计算连赢且不派彩)，连赢争霸奖金于活动结束后48小时内派发到账； ")]),n("p",[t._v(" 6. 本活动中连赢送好礼会员达成连赢后，根据用户连赢记录中，单笔最低投注额划分其对应投注分档（如：会员A连赢12局，1-11局每局下注1000CNY，第12局下注500CNY，那么会员此次连赢划分为500CNY的投注分档，会员可领取1888CNY连赢奖金）； ")]),t._m(2),n("p",[t._v(" 8. 本活动连赢争霸赛排名按照连赢局数、连赢记录中的投注额度、连赢记录中最后一局投注时间，决定总排名先后，杜绝同名次情况； ")]),n("p",[t._v(" 9. 同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE游戏账号。如有会员有任何违规，我们将保留无限期审核扣回红利及所产生利润的权利； ")]),n("p",[t._v(" 10. 会员参加任何优惠活动则被视为认可并同意遵守这些规则以及ONE游戏的有关规定，愿意受其约束，最终解释权归ONE游戏所有。 ")])],1)],1)],1)},i=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"table-view"},[n("dl",[n("div",{staticClass:"title-view"},[n("dt",[t._v("连赢局数")]),n("dt",[t._v("最低单笔投注")]),n("dt",[t._v("奖金")])]),n("div",{staticClass:"body-view"},[n("dd",[n("p",[t._v("连赢6-8局")])]),n("dd",[n("span",[t._v("3USDT/21CNY")]),n("span",[t._v("29USDT/200CNY")]),n("span",[t._v("72USDT/500CNY")]),n("span",[t._v("143USDT/1000CNY")])]),n("dd",[n("strong",[t._v("2USDT/12CNY")]),n("strong",[t._v("13USDT/88CNY")]),n("strong",[t._v("56USDT/388CNY")]),n("strong",[t._v("84USDT/588CNY")])])])]),n("dl",[n("div",{staticClass:"title-view"},[n("dt",[t._v("连赢局数")]),n("dt",[t._v("最低单笔投注")]),n("dt",[t._v("奖金")])]),n("div",{staticClass:"body-view"},[n("dd",[n("p",[t._v("连赢9-11局")])]),n("dd",[n("span",[t._v("3USDT/21CNY")]),n("span",[t._v("29USDT/200CNY")]),n("span",[t._v("72USDT/500CNY")]),n("span",[t._v("143USDT/1000CNY")])]),n("dd",[n("strong",[t._v("9USDT/58CNY")]),n("strong",[t._v("27USDT/188CNY")]),n("strong",[t._v("127USDT/888CNY")]),n("strong",[t._v("184USDT/1288CNY")])])])]),n("dl",[n("div",{staticClass:"title-view"},[n("dt",[t._v("连赢局数")]),n("dt",[t._v("最低单笔投注")]),n("dt",[t._v("奖金")])]),n("div",{staticClass:"body-view"},[n("dd",[n("p",[t._v("连赢12局及以上")])]),n("dd",[n("span",[t._v("3USDT/21CNY")]),n("span",[t._v("29USDT/200CNY")]),n("span",[t._v("72USDT/500CNY")]),n("span",[t._v("143USDT/1000CNY")])]),n("dd",[n("strong",[t._v("16USDT/108CNY")]),n("strong",[t._v("99USDT/688CNY")]),n("strong",[t._v("270USDT/1888CNY")]),n("strong",[t._v("556USDT/3888CNY")])])])])])},function(){var t=this,n=t._self._c;return n("p",[t._v(" 4. 连赢争霸赛按最高排名派奖，连赢送好礼奖金"),n("i",[t._v("无需流水")]),t._v("，连赢争霸赛奖金需完成"),n("i",[t._v("3倍流水")]),t._v("，仅限真人厅； ")])},function(){var t=this,n=t._self._c;return n("p",[t._v(" 7. 本活动中，"),n("i",[t._v("连赢8局及以上")]),t._v("且单笔投注额大于等于"),n("i",[t._v("500CNY/72USDT")]),t._v("，即可进入连赢争霸赛排行榜； ")])}],a=e("5530"),s=e("c7eb"),c=e("1da1"),r=(e("e17f"),e("2241")),l=e("2f62"),u={components:{Dialog:r["a"]},data:function(){return{loginStatus:!1,token:"",loginName:"",u2token:"",website:!1}},mounted:function(){var t=this;setInterval((function(){var n=Math.max(t.$refs.main.clientHeight,t.$refs.main.scrollHeight);t.openPCHandle("reloadPageSize",{height:n})}),0)},created:function(){var t=this;return Object(c["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:window.addEventListener("message",t.onMessage),t.openPCHandle("sendDataIframe");case 2:case"end":return n.stop()}}),n)})))()},destroyed:function(){window.removeEventListener("message",this.onMessage)},methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(l["b"])(["AWebToken","AH5Token"])),Object(l["c"])({setAppinfoTickt:"SET_APPINFO_TICKET",setAppinfoLoginName:"SET_APPINFO_LOGINNAME"})),{},{openPCHandle:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=Object(a["a"])({message:t},n);window.parent.postMessage(e,"*")},openAG:function(){this.website?this.openPCHandle("openGameAGQJ"):this.$router.push({path:"/winningstreak"})},onMessage:function(t){var n={loadTicket:this.loadTicket},e=n[t.data.message];e&&e(t.data)},loadTicket:function(t){this.loginStatus=t.loginStatus,this.token=t.token,this.loginName=t.loginName,this.u2token=t.u2token}})},d=u,h=(e("c851"),e("2877")),f=Object(h["a"])(d,o,i,!1,null,"5a96ab70",null);n["default"]=f.exports},e17f:function(t,n,e){"use strict";e("68ef"),e("a71a"),e("9d70"),e("3743"),e("4d75"),e("e3b3"),e("bc1b"),e("1175"),e("4cf9"),e("2fcb")},ed95:function(t,n,e){t.exports=e.p+"cdn/C08M/static/img/title-2.7fadbe29.png"}}]);