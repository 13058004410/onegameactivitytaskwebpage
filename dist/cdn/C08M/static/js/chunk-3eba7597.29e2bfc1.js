(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3eba7597"],{"092d":function(t,e,n){"use strict";function o(t){var e=t.parentNode;e&&e.removeChild(t)}n.d(e,"a",(function(){return o}))},1175:function(t,e,n){},2241:function(t,e,n){"use strict";var o,i=n("c31d"),a=n("2b0e"),s=n("2638"),c=n.n(s),r=n("d282"),l=n("a142"),u=n("ea8e"),d=n("b1d2"),h=n("6605"),f=n("b650"),v=n("9884"),p=Object(r["a"])("goods-action"),m=p[0],b=p[1],g=m({mixins:[Object(v["b"])("vanGoodsAction")],props:{safeAreaInsetBottom:{type:Boolean,default:!0}},render:function(){var t=arguments[0];return t("div",{class:b({unfit:!this.safeAreaInsetBottom})},[this.slots()])}}),C=n("48f4"),k=Object(r["a"])("goods-action-button"),y=k[0],O=k[1],w=y({mixins:[Object(v["a"])("vanGoodsAction")],props:Object(i["a"])({},C["c"],{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),computed:{isFirst:function(){var t=this.parent&&this.parent.children[this.index-1];return!t||t.$options.name!==this.$options.name},isLast:function(){var t=this.parent&&this.parent.children[this.index+1];return!t||t.$options.name!==this.$options.name}},methods:{onClick:function(t){this.$emit("click",t),Object(C["b"])(this.$router,this)}},render:function(){var t=arguments[0];return t(f["a"],{class:O([{first:this.isFirst,last:this.isLast},this.type]),attrs:{size:"large",type:this.type,icon:this.icon,color:this.color,loading:this.loading,disabled:this.disabled},on:{click:this.onClick}},[this.slots()||this.text])}}),S=Object(r["a"])("dialog"),_=S[0],B=S[1],T=S[2],j=_({mixins:[Object(h["a"])()],props:{title:String,theme:String,width:[Number,String],message:String,className:null,callback:Function,beforeClose:Function,messageAlign:String,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showCancelButton:Boolean,overlay:{type:Boolean,default:!0},allowHtml:{type:Boolean,default:!0},transition:{type:String,default:"van-dialog-bounce"},showConfirmButton:{type:Boolean,default:!0},closeOnPopstate:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{onClickOverlay:function(){this.handleAction("overlay")},handleAction:function(t){var e=this;this.$emit(t),this.value&&(this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,(function(n){!1!==n&&e.loading[t]&&e.onClose(t),e.loading.confirm=!1,e.loading.cancel=!1}))):this.onClose(t))},onClose:function(t){this.close(),this.callback&&this.callback(t)},onOpened:function(){var t=this;this.$emit("opened"),this.$nextTick((function(){var e;null==(e=t.$refs.dialog)||e.focus()}))},onClosed:function(){this.$emit("closed")},onKeydown:function(t){var e=this;if("Escape"===t.key||"Enter"===t.key){if(t.target!==this.$refs.dialog)return;var n={Enter:this.showConfirmButton?function(){return e.handleAction("confirm")}:l["h"],Escape:this.showCancelButton?function(){return e.handleAction("cancel")}:l["h"]};n[t.key](),this.$emit("keydown",t)}},genRoundButtons:function(){var t=this,e=this.$createElement;return e(g,{class:B("footer")},[this.showCancelButton&&e(w,{attrs:{size:"large",type:"warning",text:this.cancelButtonText||T("cancel"),color:this.cancelButtonColor,loading:this.loading.cancel},class:B("cancel"),on:{click:function(){t.handleAction("cancel")}}}),this.showConfirmButton&&e(w,{attrs:{size:"large",type:"danger",text:this.confirmButtonText||T("confirm"),color:this.confirmButtonColor,loading:this.loading.confirm},class:B("confirm"),on:{click:function(){t.handleAction("confirm")}}})])},genButtons:function(){var t,e=this,n=this.$createElement,o=this.showCancelButton&&this.showConfirmButton;return n("div",{class:[d["c"],B("footer")]},[this.showCancelButton&&n(f["a"],{attrs:{size:"large",loading:this.loading.cancel,text:this.cancelButtonText||T("cancel"),nativeType:"button"},class:B("cancel"),style:{color:this.cancelButtonColor},on:{click:function(){e.handleAction("cancel")}}}),this.showConfirmButton&&n(f["a"],{attrs:{size:"large",loading:this.loading.confirm,text:this.confirmButtonText||T("confirm"),nativeType:"button"},class:[B("confirm"),(t={},t[d["a"]]=o,t)],style:{color:this.confirmButtonColor},on:{click:function(){e.handleAction("confirm")}}})])},genContent:function(t,e){var n=this.$createElement;if(e)return n("div",{class:B("content")},[e]);var o=this.message,i=this.messageAlign;if(o){var a,s,r={class:B("message",(a={"has-title":t},a[i]=i,a)),domProps:(s={},s[this.allowHtml?"innerHTML":"textContent"]=o,s)};return n("div",{class:B("content",{isolated:!t})},[n("div",c()([{},r]))])}}},render:function(){var t=arguments[0];if(this.shouldRender){var e=this.message,n=this.slots(),o=this.slots("title")||this.title,i=o&&t("div",{class:B("header",{isolated:!e&&!n})},[o]);return t("transition",{attrs:{name:this.transition},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],attrs:{role:"dialog","aria-labelledby":this.title||e,tabIndex:0},class:[B([this.theme]),this.className],style:{width:Object(u["a"])(this.width)},ref:"dialog",on:{keydown:this.onKeydown}},[i,this.genContent(o,n),"round-button"===this.theme?this.genRoundButtons():this.genButtons()])])}}});function x(t){return document.body.contains(t)}function $(){o&&o.$destroy(),o=new(a["default"].extend(j))({el:document.createElement("div"),propsData:{lazyRender:!1}}),o.$on("input",(function(t){o.value=t}))}function N(t){return l["g"]?Promise.resolve():new Promise((function(e,n){o&&x(o.$el)||$(),Object(i["a"])(o,N.currentOptions,t,{resolve:e,reject:n})}))}N.defaultOptions={value:!0,title:"",width:"",theme:null,message:"",overlay:!0,className:"",allowHtml:!0,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1,callback:function(t){o["confirm"===t?"resolve":"reject"](t)}},N.alert=N,N.confirm=function(t){return N(Object(i["a"])({showCancelButton:!0},t))},N.close=function(){o&&(o.value=!1)},N.setDefaultOptions=function(t){Object(i["a"])(N.currentOptions,t)},N.resetDefaultOptions=function(){N.currentOptions=Object(i["a"])({},N.defaultOptions)},N.resetDefaultOptions(),N.install=function(){a["default"].use(j)},N.Component=j,a["default"].prototype.$dialog=N;e["a"]=N},"2fcb":function(t,e,n){},"35e3":function(t,e,n){"use strict";n("6f0b")},"4cf9":function(t,e,n){},"4d75":function(t,e,n){},6605:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var o={zIndex:2e3,lockCount:0,stack:[],find:function(t){return this.stack.filter((function(e){return e.vm===t}))[0]},remove:function(t){var e=this.find(t);if(e){e.vm=null,e.overlay=null;var n=this.stack.indexOf(e);this.stack.splice(n,1)}}},i=n("c31d"),a=n("6e47"),s=n("ba31"),c=n("092d"),r={className:"",customStyle:{}};function l(t){return Object(s["c"])(a["a"],{on:{click:function(){t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}})}function u(t){var e=o.find(t);if(e){var n=t.$el,a=e.config,s=e.overlay;n&&n.parentNode&&n.parentNode.insertBefore(s.$el,n),Object(i["a"])(s,r,a,{show:!0})}}function d(t,e){var n=o.find(t);if(n)n.config=e;else{var i=l(t);o.stack.push({vm:t,config:e,overlay:i})}u(t)}function h(t){var e=o.find(t);e&&(e.overlay.show=!1)}function f(t){var e=o.find(t);e&&(Object(c["a"])(e.overlay.$el),o.remove(t))}var v=n("1325"),p=n("a8c1"),m=n("3875");function b(t){return"string"===typeof t?document.querySelector(t):t()}function g(t){var e=void 0===t?{}:t,n=e.ref,o=e.afterPortal;return{props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,e=this.getContainer,i=n?this.$refs[n]:this.$el;e?t=b(e):this.$parent&&(t=this.$parent.$el),t&&t!==i.parentNode&&t.appendChild(i),o&&o.call(this)}}}}var C=n("5fbe"),k={mixins:[Object(C["a"])((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{onPopstate:function(){this.close(),this.shouldReopen=!1},handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?v["b"]:v["a"];e(window,"popstate",this.onPopstate)}}}},y={transitionAppear:Boolean,value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}};function O(t){return void 0===t&&(t={}),{mixins:[m["a"],k,g({afterPortal:function(){this.overlay&&u()}})],provide:function(){return{vanPopup:this}},props:y,data:function(){return this.onReopenCallback=[],{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(e){var n=e?"open":"close";this.inited=this.inited||this.value,this[n](),t.skipToggleEvent||this.$emit(n)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.shouldReopen&&(this.$emit("input",!0),this.shouldReopen=!1)},beforeDestroy:function(){f(this),this.opened&&this.removeLock(),this.getContainer&&Object(c["a"])(this.$el)},deactivated:function(){this.value&&(this.close(),this.shouldReopen=!0)},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(o.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.addLock(),this.onReopenCallback.forEach((function(t){t()})))},addLock:function(){this.lockScroll&&(Object(v["b"])(document,"touchstart",this.touchStart),Object(v["b"])(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.add("van-overflow-hidden"),o.lockCount++)},removeLock:function(){this.lockScroll&&o.lockCount&&(o.lockCount--,Object(v["a"])(document,"touchstart",this.touchStart),Object(v["a"])(document,"touchmove",this.onTouchMove),o.lockCount||document.body.classList.remove("van-overflow-hidden"))},close:function(){this.opened&&(h(this),this.opened=!1,this.removeLock(),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=Object(p["b"])(t.target,this.$el),o=n.scrollHeight,i=n.offsetHeight,a=n.scrollTop,s="11";0===a?s=i>=o?"00":"01":a+i>=o&&(s="10"),"11"===s||"vertical"!==this.direction||parseInt(s,2)&parseInt(e,2)||Object(v["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){t.updateZIndex(t.overlay?1:0),t.overlay?d(t,{zIndex:o.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):h(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++o.zIndex+t},onReopen:function(t){this.onReopenCallback.push(t)}}}}},"6e47":function(t,e,n){"use strict";var o=n("2638"),i=n.n(o),a=n("c31d"),s=n("d282"),c=n("a142"),r=n("ba31"),l=n("1325"),u=Object(s["a"])("overlay"),d=u[0],h=u[1];function f(t){Object(l["c"])(t,!0)}function v(t,e,n,o){var s=Object(a["a"])({zIndex:e.zIndex},e.customStyle);return Object(c["c"])(e.duration)&&(s.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",i()([{directives:[{name:"show",value:e.show}],style:s,class:[h(),e.className],on:{touchmove:e.lockScroll?f:c["h"]}},Object(r["b"])(o,!0)]),[null==n.default?void 0:n.default()])])}v.props={show:Boolean,zIndex:[Number,String],duration:[Number,String],className:null,customStyle:Object,lockScroll:{type:Boolean,default:!0}},e["a"]=d(v)},"6f0b":function(t,e,n){},a417:function(t,e,n){"use strict";n("d4d8")},a71a:function(t,e,n){},c270:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-view"},[e("div",{staticClass:"title-nr"}),e("div",{staticClass:"tiger-gift"},[e("p",[t._v("活动1：虎年体育红包")])]),e("div",{staticClass:"table-title"},[e("div",{staticClass:"table-title1"},[e("p",[t._v("体育周")]),e("p",[t._v("累计有效流水")])]),e("div",[t._v("红包")]),e("div",[t._v("流水要求")])]),e("table",[e("tbody",[e("tr",[e("td",[t._v(" ≥5000CNY "),e("br"),t._v(" /720USDT ")]),e("td",[t._v(" ≥88CNY "),e("br"),t._v(" /12USDT ")]),e("td",[t._v("1倍水")])]),e("tr",[e("td",[t._v(" ≥50000CNY "),e("br"),t._v(" /7200USDT ")]),e("td",[t._v(" ≥588CNY "),e("br"),t._v(" /84USDT ")]),e("td",[t._v("1倍水")])]),e("tr",[e("td",[t._v(" ≥200000CNY "),e("br"),t._v(" /28600USDT ")]),e("td",[t._v(" 1288CNY "),e("br"),t._v(" /184USDT ")]),e("td",[t._v("1倍水")])])])]),e("div",{staticClass:"tiger-gift"},[e("p",[t._v("活动2：虎年真人红包")])]),e("div",{staticClass:"table-title"},[e("div",{staticClass:"table-title1"},[e("p",[t._v("真人周")]),e("p",[t._v("累计有效流水")])]),e("div",[t._v("红包")]),e("div",[t._v("流水要求")])]),e("table",[e("tbody",[e("tr",[e("td",[t._v(" ≥30000CNY"),e("br"),t._v(" /4285USDT ")]),e("td",[t._v(" 88CNY"),e("br"),t._v(" /12USDT ")]),e("td",[t._v("1倍水")])]),e("tr",[e("td",[t._v(" ≥300000CNY "),e("br"),t._v(" /42857USDT ")]),e("td",[t._v(" 588CNY "),e("br"),t._v(" /84USDT ")]),e("td",[t._v("1倍水")])]),e("tr",[e("td",[t._v(" ≥800000CNY "),e("br"),t._v(" /112585USDT ")]),e("td",[t._v(" 1288CNY"),e("br"),t._v(" /184USDT ")]),e("td",[t._v("1倍水")])])])]),e("div",{staticClass:"title-gz"}),e("div",{staticClass:"tiger-gift"}),e("div",{staticClass:"gz-item"},[e("p",[t._v(" 1.虎年活动期间（1月31日-2月27日）所有新老会员满足活动条件（自然周满足相应场馆有效流水）即可联系在线客服领虎年红包。注：捕鱼类游戏流水不计算为真人有效流水。 ")]),e("p",[t._v(" 2.相应场馆红包需完成对应场馆"),e("span",[t._v("1倍流水")]),t._v("即可。 ")]),e("p",[t._v(" 3.本活动与洗码优惠共享，不与其他任意活动共享投注流水。 ")]),e("p",[t._v("4.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号。如有会员有任何违规行为，我们将保留无限期审核扣回红利及所产生利润的权利。")]),e("p",[t._v(" 5.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。 ")])])])}],a=n("5530"),s=n("c7eb"),c=n("1da1"),r=(n("e17f"),n("2241")),l=(n("b64b"),n("2f62")),u=n("281a"),d={components:{Dialog:r["a"]},data:function(){return{loginStatus:!1,token:"",loginName:"",u2token:"",website:!1,ticketApp:!1}},created:function(){var t=this;return Object(c["a"])(Object(s["a"])().mark((function e(){var n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t,window.loadTicket=t.loadTicketApp,setTimeout((function(){n.ticketApp||n.website||1!==Object(u["a"])()||(window.location="nbapp://getTicket?data={}")}),1e3),window.addEventListener("message",t.onMessage),t.openPCHandle("sendDataIframe");case 5:case"end":return e.stop()}}),e)})))()},computed:{h5TokenStore:function(){return this.$store.state.h5Token}},destroyed:function(){window.removeEventListener("message",this.onMessage)},methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(l["b"])(["AWebToken","AH5Token"])),Object(l["c"])({setAppinfoTickt:"SET_APPINFO_TICKET",setAppinfoLoginName:"SET_APPINFO_LOGINNAME"})),{},{openPCHandle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a["a"])({message:t},e);window.parent.postMessage(n,"*")},onMessage:function(t){var e={loadTicket:this.loadTicket},n=e[t.data.message];n&&n(t.data)},loadTicket:function(t){this.website=!0},loadTicketApp:function(t){var e=this;return Object(c["a"])(Object(s["a"])().mark((function n(){var o;return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ticketApp=!0,""==e.$store.state.appInfo.ticket&&""==e.$store.state.appInfo.loginName){n.next=3;break}return n.abrupt("return");case 3:o=null,n.prev=4,o=JSON.parse(t),n.next=11;break;case 8:return n.prev=8,n.t0=n["catch"](4),n.abrupt("return");case 11:if(e.setAppinfoTickt(o.ticket),e.setAppinfoLoginName(o.loginName),e.$loading.show({text:"Loading"}),!(Object.keys(e.$store.state.h5Token).length<1)){n.next=17;break}return n.next=17,e.AH5Token();case 17:e.$loading.hide();case 18:case"end":return n.stop()}}),n,null,[[4,8]])})))()},jumpKefuNative:function(){this.website?this.openPCHandle("openService"):window.location="nbapp://openServicePage?data={}"}})},h=d,f=(n("a417"),n("35e3"),n("2877")),v=Object(f["a"])(h,o,i,!1,null,"5fa17c2c",null);e["default"]=v.exports},d4d8:function(t,e,n){},e17f:function(t,e,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("bc1b"),n("1175"),n("4cf9"),n("2fcb")}}]);