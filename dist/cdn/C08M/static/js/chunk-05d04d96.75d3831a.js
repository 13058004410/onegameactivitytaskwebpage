(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05d04d96"],{"092d":function(t,e,n){"use strict";function i(t){var e=t.parentNode;e&&e.removeChild(t)}n.d(e,"a",(function(){return i}))},"217d":function(t,e,n){t.exports=n.p+"cdn/C08M/static/img/hdgz_title_pc.70db8a65.png"},2554:function(t,e,n){},3511:function(t,e){var n=TypeError,i=9007199254740991;t.exports=function(t){if(t>i)throw n("Maximum allowed index exceeded");return t}},"3c29":function(t,e,n){t.exports=n.p+"cdn/C08M/static/img/hdnr_title_pc.501ad288.png"},"4d75":function(t,e,n){},"54eb":function(t,e,n){t.exports=n.p+"cdn/C08M/static/img/hdsj_title_pc.bda791d1.png"},6605:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var i={zIndex:2e3,lockCount:0,stack:[],find:function(t){return this.stack.filter((function(e){return e.vm===t}))[0]},remove:function(t){var e=this.find(t);if(e){e.vm=null,e.overlay=null;var n=this.stack.indexOf(e);this.stack.splice(n,1)}}},o=n("c31d"),a=n("6e47"),c=n("ba31"),s=n("092d"),r={className:"",customStyle:{}};function l(t){return Object(c["c"])(a["a"],{on:{click:function(){t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}})}function u(t){var e=i.find(t);if(e){var n=t.$el,a=e.config,c=e.overlay;n&&n.parentNode&&n.parentNode.insertBefore(c.$el,n),Object(o["a"])(c,r,a,{show:!0})}}function d(t,e){var n=i.find(t);if(n)n.config=e;else{var o=l(t);i.stack.push({vm:t,config:e,overlay:o})}u(t)}function f(t){var e=i.find(t);e&&(e.overlay.show=!1)}function h(t){var e=i.find(t);e&&(Object(s["a"])(e.overlay.$el),i.remove(t))}var v=n("1325"),p=n("a8c1"),m=n("3875");function b(t){return"string"===typeof t?document.querySelector(t):t()}function g(t){var e=void 0===t?{}:t,n=e.ref,i=e.afterPortal;return{props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,e=this.getContainer,o=n?this.$refs[n]:this.$el;e?t=b(e):this.$parent&&(t=this.$parent.$el),t&&t!==o.parentNode&&t.appendChild(o),i&&i.call(this)}}}}var y=n("5fbe"),k={mixins:[Object(y["a"])((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{onPopstate:function(){this.close(),this.shouldReopen=!1},handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?v["b"]:v["a"];e(window,"popstate",this.onPopstate)}}}},C={transitionAppear:Boolean,value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}};function O(t){return void 0===t&&(t={}),{mixins:[m["a"],k,g({afterPortal:function(){this.overlay&&u()}})],provide:function(){return{vanPopup:this}},props:C,data:function(){return this.onReopenCallback=[],{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(e){var n=e?"open":"close";this.inited=this.inited||this.value,this[n](),t.skipToggleEvent||this.$emit(n)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.shouldReopen&&(this.$emit("input",!0),this.shouldReopen=!1)},beforeDestroy:function(){h(this),this.opened&&this.removeLock(),this.getContainer&&Object(s["a"])(this.$el)},deactivated:function(){this.value&&(this.close(),this.shouldReopen=!0)},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(i.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.addLock(),this.onReopenCallback.forEach((function(t){t()})))},addLock:function(){this.lockScroll&&(Object(v["b"])(document,"touchstart",this.touchStart),Object(v["b"])(document,"touchmove",this.onTouchMove),i.lockCount||document.body.classList.add("van-overflow-hidden"),i.lockCount++)},removeLock:function(){this.lockScroll&&i.lockCount&&(i.lockCount--,Object(v["a"])(document,"touchstart",this.touchStart),Object(v["a"])(document,"touchmove",this.onTouchMove),i.lockCount||document.body.classList.remove("van-overflow-hidden"))},close:function(){this.opened&&(f(this),this.opened=!1,this.removeLock(),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=Object(p["b"])(t.target,this.$el),i=n.scrollHeight,o=n.offsetHeight,a=n.scrollTop,c="11";0===a?c=o>=i?"00":"01":a+o>=i&&(c="10"),"11"===c||"vertical"!==this.direction||parseInt(c,2)&parseInt(e,2)||Object(v["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){t.updateZIndex(t.overlay?1:0),t.overlay?d(t,{zIndex:i.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):f(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++i.zIndex+t},onReopen:function(t){this.onReopenCallback.push(t)}}}}},"6e47":function(t,e,n){"use strict";var i=n("2638"),o=n.n(i),a=n("c31d"),c=n("d282"),s=n("a142"),r=n("ba31"),l=n("1325"),u=Object(c["a"])("overlay"),d=u[0],f=u[1];function h(t){Object(l["c"])(t,!0)}function v(t,e,n,i){var c=Object(a["a"])({zIndex:e.zIndex},e.customStyle);return Object(s["c"])(e.duration)&&(c.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",o()([{directives:[{name:"show",value:e.show}],style:c,class:[f(),e.className],on:{touchmove:e.lockScroll?h:s["h"]}},Object(r["b"])(i,!0)]),[null==n.default?void 0:n.default()])])}v.props={show:Boolean,zIndex:[Number,String],duration:[Number,String],className:null,customStyle:Object,lockScroll:{type:Boolean,default:!0}},e["a"]=d(v)},"77d1":function(t,e,n){},"99af":function(t,e,n){"use strict";var i=n("23e7"),o=n("d039"),a=n("e8b5"),c=n("861d"),s=n("7b0b"),r=n("07fa"),l=n("3511"),u=n("8418"),d=n("65f0"),f=n("1dde"),h=n("b622"),v=n("2d00"),p=h("isConcatSpreadable"),m=v>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=f("concat"),g=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},y=!m||!b;i({target:"Array",proto:!0,arity:1,forced:y},{concat:function(t){var e,n,i,o,a,c=s(this),f=d(c,0),h=0;for(e=-1,i=arguments.length;e<i;e++)if(a=-1===e?c:arguments[e],g(a))for(o=r(a),l(h+o),n=0;n<o;n++,h++)n in a&&u(f,h,a[n]);else l(h+1),u(f,h++,a);return f.length=h,f}})},a71a:function(t,e,n){},a84c:function(t,e,n){"use strict";n("77d1")},b258:function(t,e,n){},b8bb:function(t,e,n){t.exports=n.p+"cdn/C08M/static/img/biaoge_pc.936de35f.png"},d399:function(t,e,n){"use strict";var i=n("c31d"),o=n("2b0e"),a=n("d282"),c=n("a142"),s=0;function r(t){t?(s||document.body.classList.add("van-toast--unclickable"),s++):(s--,s||document.body.classList.remove("van-toast--unclickable"))}var l=n("6605"),u=n("ad06"),d=n("543e"),f=Object(a["a"])("toast"),h=f[0],v=f[1],p=h({mixins:[Object(l["a"])()],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,closeOnClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{onClick:function(){this.closeOnClick&&this.close()},toggleClickable:function(){var t=this.value&&this.forbidClick;this.clickable!==t&&(this.clickable=t,r(t))},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")},genIcon:function(){var t=this.$createElement,e=this.icon,n=this.type,i=this.iconPrefix,o=this.loadingType,a=e||"success"===n||"fail"===n;return a?t(u["a"],{class:v("icon"),attrs:{classPrefix:i,name:e||n}}):"loading"===n?t(d["a"],{class:v("loading"),attrs:{type:o}}):void 0},genMessage:function(){var t=this.$createElement,e=this.type,n=this.message;if(Object(c["c"])(n)&&""!==n)return"html"===e?t("div",{class:v("text"),domProps:{innerHTML:n}}):t("div",{class:v("text")},[n])}},render:function(){var t,e=arguments[0];return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[e("div",{directives:[{name:"show",value:this.value}],class:[v([this.position,(t={},t[this.type]=!this.icon,t)]),this.className],on:{click:this.onClick}},[this.genIcon(),this.genMessage()])])}}),m=n("092d"),b={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",overlay:!1,onClose:null,onOpened:null,duration:2e3,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null,closeOnClick:!1,closeOnClickOverlay:!1},g={},y=[],k=!1,C=Object(i["a"])({},b);function O(t){return Object(c["e"])(t)?t:{message:t}}function S(t){return document.body.contains(t)}function j(){if(c["g"])return{};if(y=y.filter((function(t){return!t.$el.parentNode||S(t.$el)})),!y.length||k){var t=new(o["default"].extend(p))({el:document.createElement("div")});t.$on("input",(function(e){t.value=e})),y.push(t)}return y[y.length-1]}function x(t){return Object(i["a"])({},t,{overlay:t.mask||t.overlay,mask:void 0,duration:void 0})}function w(t){void 0===t&&(t={});var e=j();return e.value&&e.updateZIndex(),t=O(t),t=Object(i["a"])({},C,g[t.type||C.type],t),t.clear=function(){e.value=!1,t.onClose&&(t.onClose(),t.onClose=null),k&&!c["g"]&&e.$on("closed",(function(){clearTimeout(e.timer),y=y.filter((function(t){return t!==e})),Object(m["a"])(e.$el),e.$destroy()}))},Object(i["a"])(e,x(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout((function(){e.clear()}),t.duration)),e}var $=function(t){return function(e){return w(Object(i["a"])({type:t},O(e)))}};["loading","success","fail"].forEach((function(t){w[t]=$(t)})),w.clear=function(t){y.length&&(t?(y.forEach((function(t){t.clear()})),y=[]):k?y.shift().clear():y[0].clear())},w.setDefaultOptions=function(t,e){"string"===typeof t?g[t]=e:Object(i["a"])(C,t)},w.resetDefaultOptions=function(t){"string"===typeof t?g[t]=null:(C=Object(i["a"])({},b),g={})},w.allowMultiple=function(t){void 0===t&&(t=!0),k=t},w.install=function(){o["default"].use(p)},o["default"].prototype.$toast=w;e["a"]=w},e7e5:function(t,e,n){"use strict";n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("b258")},efdc:function(t,e,n){"use strict";n("2554")},f1c8:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{ref:"main",staticClass:"bg"},[e("div",{staticClass:"activict"},[e("img",{staticClass:"activic-title",attrs:{src:n("54eb"),alt:""}}),e("p",{staticClass:"time"},[t._v("2021年6月04日至2021年7月31日")]),e("img",{staticClass:"activic-title",attrs:{src:n("3c29"),alt:""}}),t._m(0),t._m(1),e("div",{staticClass:"service-btn",on:{click:t.getService}}),e("img",{staticClass:"activic-title",attrs:{src:n("217d"),alt:""}}),e("p",[t._v("1.活动彩金无需流水即可提款，仅限竞彩厅 ;")]),e("p",[t._v("2.符合条件的会员请在注单结算后48小时内，将用户名、注单截图提交给在线客服进行领取 ；")]),e("p",[t._v("3.串关中必须至少一场赔率≥1.7 ;")]),e("p",[t._v("4.最终解释权归活动方所有 ")])])])},o=[function(){var t=this,e=t._self._c;return e("p",[t._v("玩家投注体育竞彩任意串关（其中至少一场赔率 "),e("span",[t._v("≥1.7")]),t._v("）且过关成功，即可申请中奖金额"),e("span",[t._v("*5%")]),t._v("的额外奖金，当天上限"),e("span",[t._v("5000CNY")]),t._v("。奖金无需流水可直接提款。联系客服即可领取")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"info"},[e("img",{attrs:{src:n("b8bb"),alt:""}})])}],a=(n("e7e5"),n("d399")),c=n("5530"),s=(n("a15b"),n("4e82"),n("ac1f"),n("1276"),n("e9c4"),n("99af"),n("8237")),r=n.n(s),l=n("8e1e"),u=n("a078"),d=n("bc3a"),f=n.n(d),h={data:function(){return{isToken:""}},created:function(){this.getJcToken()},mounted:function(){var t={message:"reloadPageSize",height:this.$refs.main.clientHeight};window.parent.postMessage(t,"*")},methods:{openPCHandle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(c["a"])({message:t},e);window.parent.postMessage(n,"*")},sortString:function(t){return t.split("").sort().reverse().join("")},randomFn:function(){for(var t="",e=0;e<6;e++){var n=9*Math.random();n=parseInt(n,10),t+=n}return t},getJcToken:function(){var t=this,e="a6ydgchQ0gGY5NTGd70uMg3jR9wfgQBi",n=n=this.$store.state.appInfo.v,i=Date.parse(new Date),o=r()(Date.now()+this.randomFn()),a="eKGABC1F9i0NSiGvnvCWfzmeFdMMxPjE",c={productId:e},s=this.sortString(JSON.stringify(c))+o+a+n+"";return f.a.post("https://onecaipiao.com/_glaxy_e1s2e8_/webToken",c,{headers:{qid:o,appid:a,v:n,timestamp:i,sign:r()(s),domainName:document.domain}}).then((function(e){"0000"==e.data.head.errCode&&(t.isToken=e.data.body.info)})).catch((function(t){}))},getService:function(){var t=this.$store.state.appInfo.productId,e=e=this.$store.state.appInfo.v,n=Date.parse(new Date),i=r()(n+Object(l["i"])(6)),o="eKGABC1F9i0NSiGvnvCWfzmeFdMMxPjE",c=(navigator.userAgent,4),s=this.isToken,d="/jc/customerService",h="".concat(o,".").concat(c,".").concat(i,".").concat(n).concat(s?"."+s:"",".").concat(e,".").concat(d),v=u["a"].salt,p=r()(r()(h)+v),m={productId:t};return f.a.post(this.$api.global.ttkefuUrl,m,{headers:{qid:i,appid:o,v:e,timestamp:n,platform:c,sign:p,token:this.isToken}}).then((function(t){if(200!==t.data.head.errCode)return Object(a["a"])(t.data.body.errMsg);var e=window.open("baout:blank","","fullscreen=1");e.moveTo(0,0),e.resizeTo(440,800),e.focus(),e.location=t.data.body.clientUrl})).catch((function(t){return Object(a["a"])("获取客服链接失败")}))}}},v=h,p=(n("efdc"),n("a84c"),n("2877")),m=Object(p["a"])(v,i,o,!1,null,"28e4683e",null);e["default"]=m.exports}}]);