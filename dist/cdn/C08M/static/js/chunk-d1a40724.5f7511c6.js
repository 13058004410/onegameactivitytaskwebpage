(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1a40724"],{"092d":function(t,e,n){"use strict";function o(t){var e=t.parentNode;e&&e.removeChild(t)}n.d(e,"a",(function(){return o}))},"0d38":function(t,e,n){},1175:function(t,e,n){},2241:function(t,e,n){"use strict";var o,i=n("c31d"),a=n("2b0e"),s=n("2638"),c=n.n(s),r=n("d282"),l=n("a142"),u=n("ea8e"),d=n("b1d2"),h=n("6605"),v=n("b650"),f=n("9884"),p=Object(r["a"])("goods-action"),m=p[0],b=p[1],g=m({mixins:[Object(f["b"])("vanGoodsAction")],props:{safeAreaInsetBottom:{type:Boolean,default:!0}},render:function(){var t=arguments[0];return t("div",{class:b({unfit:!this.safeAreaInsetBottom})},[this.slots()])}}),C=n("48f4"),_=Object(r["a"])("goods-action-button"),k=_[0],y=_[1],O=k({mixins:[Object(f["a"])("vanGoodsAction")],props:Object(i["a"])({},C["c"],{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),computed:{isFirst:function(){var t=this.parent&&this.parent.children[this.index-1];return!t||t.$options.name!==this.$options.name},isLast:function(){var t=this.parent&&this.parent.children[this.index+1];return!t||t.$options.name!==this.$options.name}},methods:{onClick:function(t){this.$emit("click",t),Object(C["b"])(this.$router,this)}},render:function(){var t=arguments[0];return t(v["a"],{class:y([{first:this.isFirst,last:this.isLast},this.type]),attrs:{size:"large",type:this.type,icon:this.icon,color:this.color,loading:this.loading,disabled:this.disabled},on:{click:this.onClick}},[this.slots()||this.text])}}),S=Object(r["a"])("dialog"),w=S[0],T=S[1],N=S[2],B=w({mixins:[Object(h["a"])()],props:{title:String,theme:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,overlay:{type:Boolean,default:!0},allowHtml:{type:Boolean,default:!0},transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},closeOnPopstate:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(n){!1!==n&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1}))):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){var t=this;this.$emit("opened"),this.$nextTick((function(){var e;null==(e=t.$refs.dialog)||e.focus()}))},onClosed:function(){this.$emit("closed")},onKeydown:function(t){var e=this;if("Escape"===t.key||"Enter"===t.key){if(t.target!==this.$refs.dialog)return;var n={Enter:this.showConfirmButton?function(){return e.handleAction("confirm")}:l["h"],Escape:this.showCancelButton?function(){return e.handleAction("cancel")}:l["h"]};n[t.key](),this.$emit("keydown",t)}},genRoundButtons:function(){var t=this,e=this.$createElement;return e(g,{class:T("footer")},[this.showCancelButton&&e(O,{attrs:{size:"large",type:"warning",text:this.cancelButtonText||N("cancel"),color:this.cancelButtonColor,loading:this.loading.cancel},class:T("cancel"),on:{click:function(){t.handleAction("cancel")}}}),this.showConfirmButton&&e(O,{attrs:{size:"large",type:"danger",text:this.confirmButtonText||N("confirm"),color:this.confirmButtonColor,loading:this.loading.confirm},class:T("confirm"),on:{click:function(){t.handleAction("confirm")}}})])},genButtons:function(){var t,e=this,n=this.$createElement,o=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[d["c"],T("footer")]},[this.showCancelButton&&n(v["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||N("cancel"),nativeType:"button"},class:T("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(v["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||N("confirm"),nativeType:"button"},class:[T("confirm"),(t={},t[d["a"]]=o,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])},genContent:function(t,e){var n=this.$createElement;if(e)return n("div",{class:T("content")},[e]);var o=this.message,i=this.messageAlign;if(o){var a,s,r={class:T("message",(a={"has-title":t},a[i]=i,a)),domProps:(s={},s[this.allowHtml?"innerHTML":"textContent"]=o,s)};return n("div",{class:T("content",{isolated:!t})},[n("div",c()([{},r]))])}}},render:function(){var t=arguments[0];if(this.shouldRender){var e=this.message,n=this.slots(),o=this.slots("title")||this.title,i=o&&t("div",{class:T("header",{isolated:!e&&!n})},[o]);return t("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||e,tabIndex:0},class:[T([this.theme]),this.className],style:{width:Object(u["a"])(this.width)},ref:"dialog",on:{keydown:this.onKeydown}},[i,this.genContent(o,n),"round-button"===this.theme?this.genRoundButtons():this.genButtons()])])}}});function x(t){return document.body.contains(t)}function j(){o&&o.$destroy(),o=new(a["default"].extend(B))({el:document.createElement("div"),propsData:{lazyRender:!1}}),o.$on("input",(function(t){o.value=t}))}function $(t){return l["g"]?Promise.resolve():new Promise((function(e,n){o&&x(o.$el)||j(),Object(i["a"])(o,$.currentOptions,t,{resolve:e,reject:n})}))}$.defaultOptions={value:!0,title:"",width:"",theme:null,message:"",overlay:!0,className:"",allowHtml:!0,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1,callback:function(t){o["confirm"===t?"resolve":"reject"](t)}},$.alert=$,$.confirm=function(t){return $(Object(i["a"])({showCancelButton:!0},t))},$.close=function(){o&&(o.value=!1)},$.setDefaultOptions=function(t){Object(i["a"])($.currentOptions,t)},$.resetDefaultOptions=function(){$.currentOptions=Object(i["a"])({},$.defaultOptions)},$.resetDefaultOptions(),$.install=function(){a["default"].use(B)},$.Component=B,a["default"].prototype.$dialog=$;e["a"]=$},"26b8":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-view"},[e("div",{staticClass:"title-nr"}),e("div",{staticClass:"nr-item"},[e("p",[e("span",[t._v("活动期间（12月25日-01月03日）")]),t._v("ONE体育新老会员完成每日签到即可领取。")])]),e("div",{staticClass:"table-title"},[e("div",[t._v("签到天数")]),e("div",[t._v("当日累计存款")]),e("div",[t._v("签到红利")]),e("div",[t._v("流水")])]),e("table",[e("tbody",[e("tr",[e("td",[t._v("第1天")]),e("td",[t._v("≥500CNY"),e("br"),t._v("/72USDT")]),e("td",[t._v("18CNY "),e("br"),t._v("/3USDT")]),e("td",[t._v("3倍")])]),e("tr",[e("td",[t._v("第2天")]),e("td",[t._v("≥1000CNY "),e("br"),t._v("/142USDT ")]),e("td",[t._v("58CNY "),e("br"),t._v("/8USDT")]),e("td",[t._v("3倍")])]),e("tr",[e("td",[t._v("第3天")]),e("td",[t._v("≥1000CNY "),e("br"),t._v("/142USDT")]),e("td",[t._v("58CNY "),e("br"),t._v("/8USDT")]),e("td",[t._v("3倍")])]),e("tr",[e("td",[t._v("第4天")]),e("td",[t._v("≥2000CNY "),e("br"),t._v("/285USDT")]),e("td",[t._v("88CNY "),e("br"),t._v("/12USDT")]),e("td",[t._v("3倍")])]),e("tr",[e("td",[t._v("第5天")]),e("td",[t._v("≥2000CNY "),e("br"),t._v("/285USDT")]),e("td",[t._v("88CNY "),e("br"),t._v("/12USDT")]),e("td",[t._v("3倍")])]),e("tr",[e("td",[t._v("第6天")]),e("td",[t._v("≥2000CNY "),e("br"),t._v("/285USDT")]),e("td",[t._v("88CNY "),e("br"),t._v("/12USDT")]),e("td",[t._v("3倍")])]),e("tr",[e("td",[t._v("第7天")]),e("td",[t._v("≥5000CNY "),e("br"),t._v("/714USDT")]),e("td",[t._v("238CNY "),e("br"),t._v("/34USDT")]),e("td",[t._v("3倍")])]),e("tr",[e("td",[t._v("第8天")]),e("td",[t._v("≥5000CNY "),e("br"),t._v("/714USDT")]),e("td",[t._v("238CNY "),e("br"),t._v("/34USDT")]),e("td",[t._v("3倍")])]),e("tr",[e("td",[t._v("第9天")]),e("td",[t._v("≥5000CNY "),e("br"),t._v("/714USDT")]),e("td",[t._v("238CNY "),e("br"),t._v("/34USDT")]),e("td",[t._v("3倍")])]),e("tr",[e("td",[t._v("第10天")]),e("td",[t._v("≥8888CNY "),e("br"),t._v("/1270USDT")]),e("td",[t._v("388CNY "),e("br"),t._v("/55USDT")]),e("td",[t._v("3倍")])]),e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("完成连续签到10天")]),e("td",[t._v("888CNY "),e("br"),t._v("/126USDT")]),e("td",[t._v("3倍")])])])]),e("div",{staticClass:"example"},[e("p",[t._v(" 注：当日完成签到条件后，联系在线客服领取。过时视为自动放弃。 ")])]),e("div",{staticClass:"title-gz"}),e("div",{staticClass:"gz-item"},[e("p",[t._v("1.活动期间（12月25日-1月03日）ONE体育新老会员可根据活动要求完成每日签到存款即可领取每日签到红利，最高"),e("span",[t._v("388CNY/55USDT")]),t._v("。完成连续签到 "),e("span",[t._v("10天")]),t._v("即可额外领取"),e("span",[t._v("888CNY/126USDT")]),t._v("红利，如会员连续签到中途中断，依然可以参与下一日的签到，但无法领取最终完成10天签到额外红利。例：会员A连续签到3天 后，第4天没有完成签到条件，那么会员A无法领取第4天的签到奖励，但是会员A依然可以参与第5天和后续的签到，但是无法参与领取最终签到10天的红利了。 ")]),e("p",[t._v("2.活动红利需完成"),e("span",[t._v("3倍流水")]),t._v("，限体育场馆。")]),e("p",[t._v("3.有效投注额仅计算已结算并产生输赢结果的注单，任何走盘、取消赛事、对冲、赔率＜1.5的注单、连串过关、提前兑现，将不计算在有效流水内。")]),e("p",[t._v("4.本活动与洗码优惠共享，不与其存送优惠共享。例：会员A当日存款1000CNY，此笔存款参与其他存送类优惠，那么此笔1000CNY存款不计算为签到存款。")]),e("p",[t._v("5.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育会员账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。")]),e("p",[t._v("6.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。")])])])}],a=n("5530"),s=n("c7eb"),c=n("1da1"),r=(n("e17f"),n("2241")),l=(n("b64b"),n("2f62")),u=n("281a"),d={components:{Dialog:r["a"]},data:function(){return{loginStatus:!1,token:"",loginName:"",u2token:"",website:!1,ticketApp:!1}},created:function(){var t=this;return Object(c["a"])(Object(s["a"])().mark((function e(){var n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t,window.loadTicket=t.loadTicketApp,setTimeout((function(){n.ticketApp||n.website||1!==Object(u["a"])()||(window.location="nbapp://getTicket?data={}")}),1e3),window.addEventListener("message",t.onMessage),t.openPCHandle("sendDataIframe");case 5:case"end":return e.stop()}}),e)})))()},computed:{h5TokenStore:function(){return this.$store.state.h5Token}},destroyed:function(){window.removeEventListener("message",this.onMessage)},methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(l["b"])(["AWebToken","AH5Token"])),Object(l["c"])({setAppinfoTickt:"SET_APPINFO_TICKET",setAppinfoLoginName:"SET_APPINFO_LOGINNAME"})),{},{openPCHandle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a["a"])({message:t},e);window.parent.postMessage(n,"*")},onMessage:function(t){var e={loadTicket:this.loadTicket},n=e[t.data.message];n&&n(t.data)},loadTicket:function(t){this.website=!0},loadTicketApp:function(t){var e=this;return Object(c["a"])(Object(s["a"])().mark((function n(){var o;return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ticketApp=!0,""==e.$store.state.appInfo.ticket&&""==e.$store.state.appInfo.loginName){n.next=3;break}return n.abrupt("return");case 3:o=null,n.prev=4,o=JSON.parse(t),n.next=11;break;case 8:return n.prev=8,n.t0=n["catch"](4),n.abrupt("return");case 11:if(e.setAppinfoTickt(o.ticket),e.setAppinfoLoginName(o.loginName),e.$loading.show({text:"Loading"}),!(Object.keys(e.$store.state.h5Token).length<1)){n.next=17;break}return n.next=17,e.AH5Token();case 17:e.$loading.hide();case 18:case"end":return n.stop()}}),n,null,[[4,8]])})))()},jumpKefuNative:function(){this.website?this.openPCHandle("openService"):window.location="nbapp://openServicePage?data={}"}})},h=d,v=(n("2906"),n("4c02"),n("2877")),f=Object(v["a"])(h,o,i,!1,null,"7c452d6d",null);e["default"]=f.exports},2906:function(t,e,n){"use strict";n("e81c")},"2fcb":function(t,e,n){},"4c02":function(t,e,n){"use strict";n("0d38")},"4cf9":function(t,e,n){},"4d75":function(t,e,n){},6605:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var o={zIndex:2e3,lockCount:0,stack:[],find:function(t){return this.stack.filter((function(e){return e.vm===t}))[0]},remove:function(t){var e=this.find(t);if(e){e.vm=null,e.overlay=null;var n=this.stack.indexOf(e);this.stack.splice(n,1)}}},i=n("c31d"),a=n("6e47"),s=n("ba31"),c=n("092d"),r={className:"",customStyle:{}};function l(t){return Object(s["c"])(a["a"],{on:{click:function(){t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}})}function u(t){var e=o.find(t);if(e){var n=t.$el,a=e.config,s=e.overlay;n&&n.parentNode&&n.parentNode.insertBefore(s.$el,n),Object(i["a"])(s,r,a,{show:!0})}}function d(t,e){var n=o.find(t);if(n)n.config=e;else{var i=l(t);o.stack.push({vm:t,config:e,overlay:i})}u(t)}function h(t){var e=o.find(t);e&&(e.overlay.show=!1)}function v(t){var e=o.find(t);e&&(Object(c["a"])(e.overlay.$el),o.remove(t))}var f=n("1325"),p=n("a8c1"),m=n("3875");function b(t){return"string"===typeof t?document.querySelector(t):t()}function g(t){var e=void 0===t?{}:t,n=e.ref,o=e.afterPortal;return{props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,e=this.getContainer,i=n?this.$refs[n]:this.$el;e?t=b(e):this.$parent&&(t=this.$parent.$el),t&&t!==i.parentNode&&t.appendChild(i),o&&o.call(this)}}}}var C=n("5fbe"),_={mixins:[Object(C["a"])((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{onPopstate:function(){this.close(),this.shouldReopen=!1},handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?f["b"]:f["a"];e(window,"popstate",this.onPopstate)}}}},k={transitionAppear:Boolean,value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}};function y(t){return void 0===t&&(t={}),{mixins:[m["a"],_,g({afterPortal:function(){this.overlay&&u()}})],provide:function(){return{vanPopup:this}},props:k,data:function(){return this.onReopenCallback=[],{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(e){var n=e?"open":"close";this.inited=this.inited||this.value,this[n](),t.skipToggleEvent||this.$emit(n)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.shouldReopen&&(this.$emit("input",!0),this.shouldReopen=!1)},beforeDestroy:function(){v(this),this.opened&&this.removeLock(),this.getContainer&&Object(c["a"])(this.$el)},deactivated:function(){this.value&&(this.close(),this.shouldReopen=!0)},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(o.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.addLock(),this.onReopenCallback.forEach((function(t){t()})))},addLock:function(){this.lockScroll&&(Object(f["b"])(document,"touchstart",this.touchStart),Object(f["b"])(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.add("van-overflow-hidden"),o.lockCount++)},removeLock:function(){this.lockScroll&&o.lockCount&&(o.lockCount--,Object(f["a"])(document,"touchstart",this.touchStart),Object(f["a"])(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.remove("van-overflow-hidden"))},close:function(){this.opened&&(h(this),this.opened=!1,this.removeLock(),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=Object(p["b"])(t.target,this.$el),o=n.scrollHeight,i=n.offsetHeight,a=n.scrollTop,s="11";0===a?s=i>=o?"00":"01":a+i>=o&&(s="10"),"11"===s||"vertical"!==this.direction||parseInt(s,2)&parseInt(e,2)||Object(f["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){t.updateZIndex(t.overlay?1:0),t.overlay?d(t,{zIndex:o.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):h(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++o.zIndex+t},onReopen:function(t){this.onReopenCallback.push(t)}}}}},"6e47":function(t,e,n){"use strict";var o=n("2638"),i=n.n(o),a=n("c31d"),s=n("d282"),c=n("a142"),r=n("ba31"),l=n("1325"),u=Object(s["a"])("overlay"),d=u[0],h=u[1];function v(t){Object(l["c"])(t,!0)}function f(t,e,n,o){var s=Object(a["a"])({zIndex:e.zIndex},e.customStyle);return Object(c["c"])(e.duration)&&(s.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",i()([{directives:[{name:"show",value:e.show}],style:s,class:[h(),e.className],on:{touchmove:e.lockScroll?v:c["h"]}},Object(r["b"])(o,!0)]),[null==n.default?void 0:n.default()])])}f.props={show:Boolean,zIndex:[Number,String],duration:[Number,String],className:null,customStyle:Object,lockScroll:{type:Boolean,default:!0}},e["a"]=d(f)},a71a:function(t,e,n){},e17f:function(t,e,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("bc1b"),n("1175"),n("4cf9"),n("2fcb")},e81c:function(t,e,n){}}]);