webpackJsonp([1],[function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(){return f.default.Promise(function(e,t){var o=setTimeout(function(){t({errCode:-1,msg:"dd.ready初始化超时"})},2e3);N.ready(function(){console.log("初始化钉钉"),clearTimeout(o),e(!0)}),N.error(function(e){clearTimeout(o),console.error("dd error: "+JSON.stringify(e)),t({errCode:-1,msg:"dd.error配置信息不对"})})})}function c(){return f.default.Promise(function(e,t){var n;m.default.use(y.default),m.default.use(O.default),m.default.use(A.default);var i=new y.default({transitionOnLoad:!1});i.map((n={},r(n,w.config.BASE_PATH,{component:function(e){o.e(2,function(){var t=o(49).default;e(t)})},subRoutes:{"/":{component:function(e){o.e(3,function(){var t=o(55).default;e(t)})}},"/member":{component:function(e){o.e(4,function(){var t=o(65).default;e(t)})}}}}),r(n,w.config.BASE_PATH+"/user/sign_in",{component:function(e){o.e(5,function(){var t=o(73).default;e(t)})}}),n)),i.redirect({"*":w.config.BASE_PATH});var a=window.sessionStorage;a.clear();var c=1*a.getItem("count")||0;a.setItem("/",0),i.beforeEach(function(e){var t=e.to,o=e.from,n=e.next,i=a.getItem(t.path),r=a.getItem(o.path);i?i>r||!r?U("UPDATE_DIRECTION","forward"):U("UPDATE_DIRECTION","reverse"):(++c,a.setItem("count",c),"/"!==t.path&&a.setItem(t.path,c),U("UPDATE_DIRECTION","forward")),U("UPDATE_LOADING",!0),setTimeout(n,10)}),i.afterEach(function(){U("UPDATE_LOADING",!1)}),(0,_.sync)(C.default,i),i.start(T.default,"#app"),E.default.attach(document.body),e()})}function u(){return f.default.Promise(function(e,t){p.default.get("http://116.236.230.131:55002/auth/getConfig",{params:{corpid:getParamByName("corpid")||"ding1b56d2f4ba72e91635c2f4657eb6378f",appid:getParamByName("appid")||"2545",suitekey:getParamByName("suiteKey")||"suiteiyfdj0dfixywzqwg",paramUrl:document.URL},timeout:2e3}).then(function(o){if(200==o.status&&200==o.data.code){var n=o.data.result,i={agentId:n.agentId,corpId:n.corpId,timeStamp:n.timeStamp,nonceStr:n.nonceStr,signature:n.signature,type:0,jsApiList:["runtime.info","runtime.permission.requestAuthCode","biz.alipay.pay","biz.contact.choose","biz.contact.complexChoose","biz.contact.complexPicker","biz.contact.createGroup","biz.customContact.choose","biz.customContact.multipleChoose","biz.ding.post","biz.map.locate","biz.map.view","biz.util.openLink","biz.util.open","biz.util.share","biz.util.uploadImage","biz.util.previewImage","biz.util.datepicker","biz.util.timepicker","biz.util.datetimepicker","biz.util.chosen","biz.util.encrypt","biz.util.decrypt","biz.chat.pickConversation","biz.telephone.call","biz.navigation.setTitle","biz.navigation.setIcon","biz.navigation.close","biz.navigation.setRight","biz.navigation.setMenu","biz.user.get","ui.progressBar.setColors","device.base.getInterface","device.connection.getNetworkType","device.launcher.checkInstalledApps","device.launcher.launchApp","device.notification.confirm","device.notification.alert","device.notification.prompt","device.notification.showPreloader","device.notification.hidePreloader","device.notification.toast","device.notification.actionSheet","device.notification.modal","device.geolocation.get"]};e(i)}else t({errCode:-2,msg:"接口请求失败"})}).catch(function(e){t({errCode:-2,msg:"接口请求失败"})})})}var l=function(){function e(e,t){var o=[],n=!0,i=!1,r=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){i=!0,r=e}finally{try{!n&&c.return&&c.return()}finally{if(i)throw r}}return o}return function(t,o){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=o(1),f=i(d),s=o(5),p=i(s),g=o(31),m=i(g),b=o(32),y=i(b);o(37);var h=o(35),S=n(h),_=o(34),v=o(38),C=i(v),I=o(36),E=i(I),w=o(30),P=o(41),O=i(P),D=o(43),A=i(D),R=o(44),T=i(R),N=window.dd,U=C.default.commit||C.default.dispatch;m.default.config.debug=!0,m.default.config.devtools=!0,m.default.component("alert",S.Alert),m.default.component("loading",S.Loading);var L=null;f.default.Promise.all([u(),a()]).then(function(e){var t=l(e,2),o=t[0],n=t[1];console.log(o,n),L=o,n&&console.log("dd.ready")}).catch(function(e){console.log(e),e&&e.errCode==-1||e&&e.errCode==-2}).finally(function(){c().then(function(){document.querySelector("#init-loading").remove(),console.log("init vue 完成"),setTimeout(function(){null!=L?(N.config(L),U("DDCONFIG_SUCCESS",L)):U("DDCONFIG_ERROR",!1)},300)})}),window.getParamByName=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(t);return null!=o?unescape(o[2]):null}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(31),r=n(i),a=o(33),c=n(a),u=o(39),l=n(u);r.default.use(c.default),t.default=new c.default.Store({modules:{app:l.default}})},function(e,t,o){"use strict";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Object.defineProperty(t,"__esModule",{value:!0});var i,r=o(40),a={isLoading:!1,direction:"forward",ddConfig:null,ddConfigStatus:null,code:null,user:null,sys_level:null},c=(i={},n(i,r.UPDATE_LOADING,function(e,t){e.isLoading=t}),n(i,r.UPDATE_DIRECTION,function(e,t){e.direction=t}),n(i,r.DDCONFIG_SUCCESS,function(e,t){e.ddConfig=t,e.ddConfigStatus=!0}),n(i,r.DDCONFIG_ERROR,function(e,t){e.ddConfig=null,e.ddConfigStatus=!1}),n(i,r.UPDATE_CODE,function(e,t){e.code=t}),n(i,r.LOGIN_SUCCESS,function(e,t){e.user=t}),n(i,r.LOGIN_ERROR,function(e,t){e.user=!1}),n(i,r.UPDATE_SYS_LEVEL,function(e,t){e.sys_level=t}),i);t.default={state:a,mutations:c}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.UPDATE_LOADING="UPDATE_LOADING",t.UPDATE_DIRECTION="UPDATE_DIRECTION",t.DDCONFIG_SUCCESS="DDCONFIG_SUCCESS",t.DDCONFIG_ERROR="DDCONFIG_ERROR",t.UPDATE_CODE="UPDATE_CODE",t.LOGIN_SUCCESS="LOGIN_SUCCESS",t.LOGIN_ERROR="LOGIN_ERROR",t.UPDATE_SYS_LEVEL="UPDATE_SYS_LEVEL"},function(e,t,o){(function(e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=o(30),i={};i.install=function(e,o){e.cookie=function(e,t,o){var n,i,r,a;return arguments.length>1&&"[object Object]"!==String(t)?(o=$.extend({},o),null!==t&&void 0!==t||(o.expires=-1),"number"==typeof o.expires&&(n=24*o.expires*60*60*1e3,i=o.expires=new Date,i.setTime(i.getTime()+n)),t=String(t),document.cookie=[encodeURIComponent(e),"=",o.raw?t:t,o.expires?"; expires="+o.expires.toUTCString():"","; path=/",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")):(o=t||{},a=o.raw?function(e){return e}:decodeURIComponent,(r=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?a(r[1]):null)},e.prototype.base_path=n.config.BASE_PATH,e.prototype.goBack=function(e){if(e.$router._currentRoute.path.match("/pay/"))return void window.history.back();var t;try{t=e.$router._currentTransition.from.path,t?t.match("member")&&!$.localStorage.getItem("webapp_userInfo")?e.$router.replace(n.config.BASE_PATH):window.history.back():e.$router.replace(n.config.BASE_PATH)}catch(t){console.log(t),e.$router.replace(n.config.BASE_PATH)}},e.prototype.goRoute=function(e,t,o){!$.localStorage.getItem("webapp_userInfo")&&(e.match("member")||e.match("chat")||e.match("pay")||e.match("/tucao/publish"))?t.goLoginPage(t,e):o?t.$router.replace(n.config.BASE_PATH+e):t.$router.go(n.config.BASE_PATH+e)},e.prototype.localStorage={getItem:function(e){if("object"===("undefined"==typeof localStorage?"undefined":t(localStorage)))try{return JSON.parse(localStorage.getItem(e))}catch(e){alert("请关闭[无痕浏览]模式后再试!")}},setItem:function(e,o){if("object"===("undefined"==typeof localStorage?"undefined":t(localStorage)))try{return localStorage.setItem(e,JSON.stringify(o))}catch(e){alert("请关闭[无痕浏览]模式后再试!")}},removeItem:function(e){if("object"===("undefined"==typeof localStorage?"undefined":t(localStorage)))try{return localStorage.removeItem(e)}catch(e){alert("请关闭[无痕浏览]模式后再试!")}},getUseSize:function(){if("object"===("undefined"==typeof localStorage?"undefined":t(localStorage)))try{return JSON.stringify(localStorage).length}catch(e){alert("请关闭[无痕浏览]模式后再试!")}}},e.prototype.saveUserInfo=function(t){if(t?($.localStorage.setItem("webapp_userInfo",t),e.prototype.$myInfo=$.localStorage.getItem("webapp_userInfo")):$.localStorage.removeItem("webapp_userInfo"),t&&t.car&&t.car.type_id>0){var o={brand_id:t.car.brand_id,brand_name:t.car.brand_name,series_id:t.car.series_id,series_name:t.car.series_name,type_id:t.car.type_id,type_name:t.car.type_name};$.localStorage.setItem("myCar",o)}else $.localStorage.removeItem("myCar")},Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in t)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[o]:("00"+t[o]).substr((""+t[o]).length)));return e}},function(o){"object"===t(e)&&"object"===t(e.exports)?e.exports=o:window.bb?window.bb.bbPlugin=o:window.bb={bbPlugin:o}}(i)}).call(t,o(42)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t,o){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=o(1),r=t(i),a={};a.install=function(e,t){var o=window.dd;o?(e.prototype.setTitle=function(e){return r.default.Promise(function(t,n){o.biz.navigation.setTitle({title:e.title,onSuccess:function(e){t(e)},onFail:function(e){n(e)}})})},e.prototype.setRightText=function(e){return r.default.Promise(function(t,n){o.biz.navigation.setRight({show:!0,control:!!e.control&&e.control,text:e.text||"发送",onSuccess:function(e){t(e)},onFail:function(e){n(e)}})})}):console.error("dd没有定义")},function(t){"object"===n(e)&&"object"===n(e.exports)?e.exports=t:window.bb?window.bb.ddPlugin=t:window.bb={ddPlugin:t}}(a)}).call(t,o(42)(e))},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(31),r=n(i),a=o(45),c=n(a),u=o(46),l=n(u);o(47);var d=o(38),f=n(d),s=o(48),p=r.default.extend({template:c.default,store:f.default,vuex:{getters:{route:function(e){return e.route},isLoading:function(e){return e.app.isLoading},direction:function(e){return e.app.direction},ddConfig:function(e){return e.app.ddConfig},ddConfigStatus:function(e){return e.app.ddConfigStatus},code:function(e){return e.app.code}},actions:{getRequestAuthCode:s.getRequestAuthCode}},watch:{ddConfigStatus:function(e,t){e===!0&&this.getRequestAuthCode(this.ddConfig.corpId)}},ready:function(){console.log("APP ready 应该只执行一次")},data:function(){return l.default},methods:{},computed:{showConfigErrorDialog:function(){return this.ddConfigStatus===!1},showCodeErrorDialog:function(){return this.code===!1}}});t.default=p},function(e,t){e.exports='<div>\n    <router-view :transition="\'vux-pop-\' + (direction === \'forward\' ? \'in\' : \'out\')">\n\n    </router-view>\n    <alert :show="showConfigErrorDialog" title="发生错误">\n        dd.config配置失败\n    </alert>\n    <alert :show="showCodeErrorDialog" title="发生错误">\n        免登陆code获取失败\n    </alert>\n</div>'},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={routerTransition:{forward:"slideRL",back:"slideLR"}};t.default=o},function(e,t){},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function r(e,t){var o=e.dispatch,n=e.state;console.log(n.app.ddConfig.corpId),dd.runtime.permission.requestAuthCode({corpId:n.app.ddConfig.corpId||t,onSuccess:function(e){o(u.UPDATE_CODE,e.code),a({dispatch:o,state:n},e.code),console.log("获取到了免登陆code=>"+e.code)},onFail:function(e){o(u.UPDATE_CODE,!1),console.log("获取免登陆code失败")}})}function a(e,t){var o=e.dispatch,n=e.state;f.default.get("http://116.236.230.131:55002/user/getUserinfo",{params:{code:t,corpId:n.app.ddConfig.corpId,suiteKey:window.getParamByName("suiteKey")},timeout:5e3}).then(function(e){if(200==e.status&&200==e.data.code){var t=e.data.result;o(u.LOGIN_SUCCESS,t),o(u.UPDATE_SYS_LEVEL,t.sys_level)}else o(u.LOGIN_ERROR,!1)}).catch(function(e){o(u.LOGIN_ERROR,!1)})}Object.defineProperty(t,"__esModule",{value:!0}),t.getRequestAuthCode=r,t.getUserInfo=a;var c=o(40),u=i(c),l=o(1),d=(n(l),o(5)),f=n(d)}]);