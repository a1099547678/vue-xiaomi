(function(t){function a(a){for(var e,r,c=a[0],o=a[1],l=a[2],d=0,m=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);p&&p(a);while(m.length)m.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,a=0;a<n.length;a++){for(var s=n[a],e=!0,c=1;c<s.length;c++){var o=s[c];0!==i[o]&&(e=!1)}e&&(n.splice(a--,1),t=r(r.s=s[0]))}return t}var e={},i={app:0},n=[];function r(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,a,s){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(s,e,function(a){return t[a]}.bind(null,e));return s},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var p=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";s("08a0")},"08a0":function(t,a,s){},2106:function(t,a,s){},"270b":function(t,a,s){},"443d":function(t,a,s){"use strict";s("908b")},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r={name:"app",data:function(){return{data:""}},components:{},mounted:function(){}},c=r,o=(s("034f"),s("2877")),l=Object(o["a"])(c,i,n,!1,null,null,null),p=l.exports,d=s("8c4f"),m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav-header"),s("router-view"),s("sidebar"),s("nav-footer")],1)},v=[],h=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[t._m(0),s("div",{staticClass:"menu"},[s("div",{ref:"menuUnfoldImg",staticClass:"menu-unfoldImg",on:{mouseenter:function(a){return t.pull_MenuUnfoldImg(a)}}},[s("div",{staticClass:"w unfoldImg-list"},t._l(t.pulldata,(function(a,e){return s("a",{key:e,attrs:{href:"/#/product"+a.categoryId,target:"_blank"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://www.wszxd.com"+a.img,expression:"'http://www.wszxd.com' + item.img"}],attrs:{alt:""}}),s("br"),s("span",[t._v(t._s(""==a.name?"查看全部":a.name))]),s("br"),s("b",[t._v(t._s(null==a.price?"智能硬件":a.price+"元起"))])])})),0)]),s("div",{staticClass:"w menu-site"},[s("a",{staticClass:"XmLogo XmLogo-move",attrs:{href:"javascript:;"}}),s("div",{staticClass:"site-list"},t._l(t.nav,(function(a,e){return s("a",{key:e,attrs:{href:"javascript:;"},on:{mouseenter:function(a){return t.pull_SiteList(a,e)}}},[t._v(t._s(a.title))])})),0),t._m(1)])])])},u=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"nav"},[s("div",{staticClass:"w nav-title"},[s("a",{attrs:{href:"javascript:;"}},[t._v("小米商城")]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("MiUi")]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("Iot")]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("云服务")]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("天星数科")]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("有品")]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("小爱开发平台")]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("企业团购")]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("资质证照")]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("协议规则")]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("下载app")]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("智慧能生活")]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("Select Location")]),s("a",{staticClass:"nav-title-shopping shopping",attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("span",[t._v("购物车(0)")])]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("消息通知")]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("注册")]),s("span"),s("a",{attrs:{href:"javascript:;"}},[t._v("登录")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"site-seekBox"},[s("input",{attrs:{type:"text",placeholder:"耳机"}}),s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont"},[t._v("")])])])}],f={name:"nav-header",data:function(){return{nav:[{title:"小米手机",src:""},{title:"Redmi红米",src:""},{title:"电视",src:""},{title:"笔记本",src:""},{title:"家电",src:""},{title:"路由器",src:""},{title:"智能硬件",src:""},{title:"服务",src:""},{title:"社区",src:""}],ProductList:{XmList:[],RedmiList:[],TelevisionList:[],JotterList:[],AppliancesList:[],WifiList:[],PartsList:[]},pulldata:[]}},mounted:function(){this.getXmPhoneList("xiaomi","XmList",6),this.getXmPhoneList("redmi","RedmiList",6),this.getXmPhoneList("television","TelevisionList",6),this.getXmPhoneList("jotter","JotterList",6),this.getXmPhoneList("appliances","AppliancesList",6),this.getXmPhoneList("wifi","WifiList",6),this.getXmPhoneList("parts","PartsList",6)},methods:{getXmPhoneList:function(t,a,s){var e=this;this.axios.get("http://www.wszxd.com/product/"+t,{params:{begin:0,ending:s}}).then((function(t){e.ProductList[a]=t.data.data}))["catch"]((function(t){console.log(t)}))},pull_SiteList:function(t,a){var s=this.$refs.menuUnfoldImg;switch(s.style.height="228px",t.target.onmouseleave=function(){s.style.height=0},a){case 0:this.pulldata=this.ProductList.XmList;break;case 1:this.pulldata=this.ProductList.RedmiList;break;case 2:this.pulldata=this.ProductList.TelevisionList;break;case 3:this.pulldata=this.ProductList.JotterList;break;case 4:this.pulldata=this.ProductList.AppliancesList;break;case 5:this.pulldata=this.ProductList.WifiList;break;case 6:this.pulldata=this.ProductList.PartsList;break;case 7:s.style.height=0;break;default:s.style.height=0}},pull_MenuUnfoldImg:function(t){t.target.style.height="228px",t.target.onmouseleave=function(){this.style.height=0}}}},w=f,b=(s("b042"),Object(o["a"])(w,h,u,!1,null,null,null)),_=b.exports,g=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"w"},[s("ul",{staticClass:"service"},[s("li",[s("a",{attrs:{href:""}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v(" 预约维修服务 ")])]),s("li",[s("a",{attrs:{href:""}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v(" 7天无理由退货 ")])]),s("li",[s("a",{attrs:{href:""}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v(" 15天免费换货 ")])]),s("li",[s("a",{attrs:{href:""}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v(" 满99元包邮 ")])]),s("li",[s("a",{attrs:{href:""}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v(" 520余家售后网点 ")])])]),s("div")]),s("div",{staticClass:"w FooterSite"},[s("p",[s("b",[t._v("帮助中心")]),s("a",{attrs:{href:"javascript:;"}},[t._v("账户管理")]),s("a",{attrs:{href:"javascript:;"}},[t._v("购物指南")]),s("a",{attrs:{href:"javascript:;"}},[t._v("订单操作")])]),s("p",[s("b",[t._v("服务支持")]),s("a",{attrs:{href:"javascript:;"}},[t._v("售后政策")]),s("a",{attrs:{href:"javascript:;"}},[t._v("自助服务")]),s("a",{attrs:{href:"javascript:;"}},[t._v("相关下载")])]),s("p",[s("b",[t._v("线下门店")]),s("a",{attrs:{href:"javascript:;"}},[t._v("小米之家")]),s("a",{attrs:{href:"javascript:;"}},[t._v("服务网点")]),s("a",{attrs:{href:"javascript:;"}},[t._v("授权体验店")])]),s("p",[s("b",[t._v("关于小米")]),s("a",{attrs:{href:"javascript:;"}},[t._v("了解小米")]),s("a",{attrs:{href:"javascript:;"}},[t._v("加入小米")]),s("a",{attrs:{href:"javascript:;"}},[t._v("投资者关系")]),s("a",{attrs:{href:"javascript:;"}},[t._v("企业社会责任")]),s("a",{attrs:{href:"javascript:;"}},[t._v("廉洁举报")])]),s("p",[s("b",[t._v("关注我们")]),s("a",{attrs:{href:"javascript:;"}},[t._v("新浪微博")]),s("a",{attrs:{href:"javascript:;"}},[t._v("官方微信")]),s("a",{attrs:{href:"javascript:;"}},[t._v("联系我们")]),s("a",{attrs:{href:""}},[t._v("公益基金会")])]),s("p",[s("b",[t._v("特色服务")]),s("a",{attrs:{href:"javascript:;"}},[t._v("F码通道")]),s("a",{attrs:{href:"javascript:;"}},[t._v("礼物码")]),s("a",{attrs:{href:"javascript:;"}},[t._v("防伪查询")])]),s("ul",{staticClass:"tell"},[s("li",[t._v("400-100-5678")]),s("li",[t._v("8:00-18:00（仅收市话费)")]),s("li",[s("i",{staticClass:"iconfont"},[t._v(" ")]),t._v(" 人工客服 ")]),s("li",[t._v(" 关注小米： "),s("i",{staticClass:"iconfont"},[t._v("")]),s("i",{staticClass:"iconfont wx"},[t._v(" "),s("span",{staticClass:"erweima"})])])])]),s("div",{staticClass:"record"},[s("div",{staticClass:"w icp"},[s("div",{staticClass:"icp-logo"}),s("p",[s("a",{attrs:{href:""}},[t._v("小米商城")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("MIUI")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("米家")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("米聊")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("多看")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("游戏")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("政企服务")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("小米天猫店")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("小米集团隐私政策")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("小米公司儿童信息保护规则")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("小米商城隐私政策")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("小米商城用户协议")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("问题反馈")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("Select Location")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("北京互联网法院法律服务工作站")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("中国消费者协会")]),t._v("| "),s("a",{attrs:{href:""}},[t._v("北京市消费者协会")])]),s("p",[t._v(" ©"),s("a",{attrs:{href:""}},[t._v("mi.com")]),t._v("京ICP证110507号"),s("a",{attrs:{href:""}},[t._v("京ICP备10046444号")]),s("a",{attrs:{href:""}},[t._v("京公网安备11010802020134号")]),s("a",{attrs:{href:""}},[t._v("京网文[2020]0276-042号")])]),s("p",[s("a",{attrs:{href:""}},[t._v("（京）网械平台备字（2018）第00005号")]),s("a",{attrs:{href:""}},[t._v(" 互联网药品信息服务资格证 (京)-非经营性-2014-0090 ")]),s("a",{attrs:{href:""}},[t._v(" 营业执照")]),s("a",{attrs:{href:""}},[t._v("医疗器械质量公告")])]),s("p",[s("a",{attrs:{href:""}},[t._v("增值电信业务许可证")]),t._v(" 网络食品经营备案 京食药网食备202010048 "),s("a",{attrs:{href:""}},[t._v("食品经营许可证")])]),s("p",[t._v(" 违法和不良信息举报电话：171-5104-4404 "),s("a",{attrs:{href:""}},[t._v("知识产权侵权投诉")]),t._v(" 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试 ")]),s("div",{staticClass:"signboard"},[s("a",{staticClass:"truste",attrs:{href:"javascript:;"}}),s("a",{staticClass:"credit",attrs:{href:"javascript:;"}}),s("a",{staticClass:"credible",attrs:{href:"javascript:;"}}),s("a",{staticClass:"manage",attrs:{href:"javascript:;"}}),s("a",{staticClass:"safe",attrs:{href:"javascript:;"}})])]),s("div",{staticClass:"wish"},[t._v(" 让全球每个人都能享受科技带来的美好生活 ")])])])}],x={name:"nav-footer"},L=x,j=(s("443d"),Object(o["a"])(L,g,C,!1,null,null,null)),y=j.exports,E=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._m(0),t.flag?s("div",{staticClass:"backtop",on:{click:t.backtop}},[t._m(1)]):t._e()])},z=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"sidebar"},[s("a",{staticClass:"sidebar-item",attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("span",{staticClass:"item-title"},[t._v("手机App")])]),s("a",{staticClass:"sidebar-item",attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("span",{staticClass:"item-title"},[t._v("个人中心")])]),s("a",{staticClass:"sidebar-item",attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("span",{staticClass:"item-title"},[t._v("售后服务")])]),s("a",{staticClass:"sidebar-item",attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("span",{staticClass:"item-title"},[t._v("人工客服")])]),s("a",{staticClass:"sidebar-item",attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("span",{staticClass:"item-title"},[t._v("购物车")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"backtop-item",attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("span",{staticClass:"item-title"},[t._v("回顶部")])])}],O={name:"side-bar",data:function(){return{flag:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var a=document.documentElement.scrollTop;t.flag=a>600}))},methods:{backtop:function(){document.documentElement.scrollTop=0}}},S=O,k=(s("5d71"),Object(o["a"])(S,E,z,!1,null,"5f5263a3",null)),$=k.exports,T={name:"nav-home",components:{NavHeader:_,NavFooter:y,Sidebar:$},data:function(){return{}}},P=T,I=Object(o["a"])(P,m,v,!1,null,null,null),A=I.exports,D=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"index"},[s("div",{staticClass:"w swiper-box"},[s("swiper",{ref:"mySwiper",staticClass:"w",attrs:{options:t.swiperOptions}},t._l(t.SlideImg,(function(t,a){return s("swiper-slide",{key:a},[s("a",{attrs:{href:t.src}},[s("img",{staticClass:"swiper-no-swiping",staticStyle:{width:"1226px",height:"460px"},attrs:{src:t.src,alt:""}})])])})),1),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),s("div",{staticClass:"swiper-button-prev"}),s("div",{staticClass:"swiper-button-next"}),s("div",{staticClass:"commodity"},[s("ul",{staticClass:"commodity-list",on:{mouseenter:t.commodityShow}},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9)]),s("div",{staticClass:"commodity-site"},t._l(t.SiteList,(function(a,e){return s("ul",{key:e},t._l(a,(function(a,e){return s("li",{key:e},[s("a",{attrs:{href:"javascript:;"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://www.wszxd.com"+a.img,expression:"'http://www.wszxd.com' + item.img"}],attrs:{alt:""}}),t._v(" "+t._s(a.name)+" ")])])})),0)})),0)])],1),s("div",{staticClass:"w column"},[t._m(10),s("ul",{staticClass:"column-banner"},[s("li",[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://www.wszxd.com/public/banner/5d4298059889417157e8492750328492.webp",expression:"'http://www.wszxd.com/public/banner/5d4298059889417157e8492750328492.webp'"}],attrs:{alt:""}})]),s("li",[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://www.wszxd.com/public/banner/793913688bfaee26b755a0b0cc8575fd.webp",expression:"'http://www.wszxd.com/public/banner/793913688bfaee26b755a0b0cc8575fd.webp'"}],attrs:{alt:""}})]),s("li",[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://www.wszxd.com/public/banner/b30177d629bfbe2fb42251c1b8538f7b.webp",expression:"'http://www.wszxd.com/public/banner/b30177d629bfbe2fb42251c1b8538f7b.webp'"}],attrs:{alt:""}})])])]),s("div",{staticClass:"menu"},[s("div",{staticClass:"w menu-seckill"},[s("h2",[t._v("小米秒杀")]),t._m(11),s("div",{staticClass:"swiper2-box"},[s("swiper",{ref:"mySwiper2",attrs:{options:t.swiperOptions2}},t._l(t.seckillList,(function(a){return s("swiper-slide",{key:a.id,staticClass:"noSwiping"},[s("a",{staticClass:"noSwiping-shopbox",attrs:{href:"javascript:;"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://www.wszxd.com"+a.img,expression:"'http://www.wszxd.com' + item.img"}],staticClass:"noSwiping-shopbox-imgssize",attrs:{alt:""}}),s("p",{staticClass:"noSwiping-shopbox-pitem1"},[t._v(t._s(a.name))]),s("p",{staticClass:"noSwiping-shopbox-pitem2"},[t._v(t._s(a.intro))]),s("p",{staticClass:"noSwiping-shopbox-pitem3"},[t._v(" "+t._s(a.price)+"元 "),s("s",{staticClass:"color"},[t._v(t._s(a.worn_price)+"元")])])])])})),1),s("div",{staticClass:"swiper2-button-prev iconfont"}),s("div",{staticClass:"swiper2-button-next iconfont"})],1)]),s("div",{staticClass:"w banner_box"},[s("a",{attrs:{href:"javascript:;"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://www.wszxd.com/public/banner/431e5fd6bfd1b67d096928248be18303.webp",expression:"'http://www.wszxd.com/public/banner/431e5fd6bfd1b67d096928248be18303.webp'"}],attrs:{alt:""}})])]),s("div",{staticClass:"w miphone"},[s("h2",[t._v("手机")]),t._m(12),s("ul",{staticClass:"miphone-brick"},[s("li",{staticClass:"brick-list"},[s("a",{attrs:{href:""}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://www.wszxd.com/public/banner/c583f2edc613f1be20fa415910b13ce3.webp",expression:"'http://www.wszxd.com/public/banner/c583f2edc613f1be20fa415910b13ce3.webp'"}],attrs:{alt:""}})])]),t._l(t.phoneList,(function(a){return s("li",{key:a.id,staticClass:"brick-list"},[s("a",{attrs:{href:""}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://www.wszxd.com"+a.img,expression:"'http://www.wszxd.com' + item.img"}],attrs:{alt:""}}),s("span",[t._v(t._s(a.name))]),s("span",[t._v(t._s(a.intro))]),s("span",[t._v(t._s(a.price)+"元起")])])])}))],2)]),s("div",{staticClass:"w banner_box"},[s("a",{attrs:{href:"javascript:;"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://www.wszxd.com/public/banner/41d16e66381cfeda7b6b39ab67678d5e.webp",expression:"'http://www.wszxd.com/public/banner/41d16e66381cfeda7b6b39ab67678d5e.webp'"}],attrs:{alt:""}})])])]),s("div",[s("transition",{attrs:{name:"show-index-showcase"}},[""!==t.shopDataOne.hotList?s("index-showcase",{attrs:{msg:t.shopDataOne}}):t._e()],1)],1),s("div",{staticClass:"w banner_box"},[s("a",{attrs:{href:"javascript:;"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://www.wszxd.com/public/banner/59e8fc8ba9718c266882719fb4bbcedd.webp",expression:"'http://www.wszxd.com/public/banner/59e8fc8ba9718c266882719fb4bbcedd.webp'"}],attrs:{alt:""}})])]),s("div",[""!==t.shopDataTwo.hotList?s("index-showcase",{attrs:{msg:t.shopDataTwo}}):t._e()],1),s("div",{staticClass:"w banner_box"},[s("a",{attrs:{href:"javascript:;"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://www.wszxd.com/public/banner/88e35cffc82cd98cd53172460067af17.webp",expression:"'http://www.wszxd.com/public/banner/88e35cffc82cd98cd53172460067af17.webp'"}],attrs:{alt:""}})])]),s("div",[""!==t.shopDataThree.hotList?s("index-showcase",{attrs:{msg:t.shopDataThree}}):t._e()],1),s("div",{staticClass:"w banner_box"},[s("a",{attrs:{href:"javascript:;"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://www.wszxd.com/public/banner/431e5fd6bfd1b67d096928248be18303.webp",expression:"'http://www.wszxd.com/public/banner/431e5fd6bfd1b67d096928248be18303.webp'"}],attrs:{alt:""}})])]),s("div",{staticClass:"recall"},[s("div",{staticClass:"w recall-conference"},[s("h2",[t._v("视频")]),t._m(13),s("ul",{staticClass:"conference-vd"},t._l(t.videoList,(function(a,e){return s("li",{key:e,staticClass:"vd-list",on:{click:function(s){return t.showMivideo(a.src)}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.img,expression:"item.img"}],staticClass:"vd-list-picture",attrs:{alt:""}}),s("span",{staticClass:"iconfont vd-list-play"}),s("h3",{staticClass:"vd-list-title"},[t._v("Redmi 10X系列发布会")]),s("p",{staticClass:"vd-list-desc"},[t._v("Redmi 10X系列发布会")])])})),0)]),s("transition",{attrs:{name:"recall-mask"}},[t.miVideoOp?s("div",{staticClass:"recall-mask"}):t._e()]),s("transition",{attrs:{name:"mivideo-box"}},[t.miVideoOp?s("div",{staticClass:"mivideo-box"},[s("mi-video",{attrs:{msg:t.giveMivideo},on:{stopVideo:t.stopOp}})],1):t._e()])],1)])},N=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[t._v("小米 手机"),s("i",{staticClass:"iconfont"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[t._v("电视 盒子"),s("i",{staticClass:"iconfont"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[t._v("笔记本 显示器"),s("i",{staticClass:"iconfont"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[t._v("家电 插线板"),s("i",{staticClass:"iconfont"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[t._v("红米 手机"),s("i",{staticClass:"iconfont"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[t._v("智能 路由器"),s("i",{staticClass:"iconfont"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[t._v("电源 配件"),s("i",{staticClass:"iconfont"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[t._v("健康 儿童"),s("i",{staticClass:"iconfont"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[t._v("耳机 音箱"),s("i",{staticClass:"iconfont"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",[t._v("生活 箱包"),s("i",{staticClass:"iconfont"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"column-menu"},[s("li",[s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("span",[t._v("小米秒杀")])])]),s("li",[s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("span",[t._v("企业团购")])])]),s("li",[s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("span",[t._v("F码通道")])])]),s("li",[s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("span",[t._v("米粉卡")])])]),s("li",[s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("span",[t._v("以旧换新")])])]),s("li",[s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("span",[t._v("话费充值")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"seckill-time"},[s("div",{staticClass:"time-down"},[t._v("14:00 场")]),s("i",{staticClass:"iconfont time-ico"},[t._v("")]),s("div",{staticClass:"time-end"},[t._v("本场已结束")]),s("div",{staticClass:"time-exact"},[s("span",[t._v("00")]),s("b",[t._v(":")]),s("span",[t._v("00")]),s("b",[t._v(":")]),s("span",[t._v("00")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"miphone-more"},[s("a",{staticClass:"miphone-more-atim",attrs:{href:"javascript:;"}},[s("span",{staticClass:"atim-span"},[t._v("查看全部")]),s("i",{staticClass:"iconfont atim-ico"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"conference-more",attrs:{href:"javascript:;"}},[s("span",{staticClass:"more-span"},[t._v("查看全部")]),s("i",{staticClass:"iconfont more-ico"})])}],M=s("ade3"),q=(s("fb6a"),s("4795"),s("4160"),s("159b"),s("7212")),X=(s("a7a3"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"w cabinet"},[s("h2",[t._v(t._s(t.msg.classBox))]),s("ul",{staticClass:"cabinet-rbox"},t._l(t.msg.banner,(function(t,a){return s("li",{key:a,staticClass:"cabinet-rbox-list"},[s("a",{attrs:{href:""}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.img,expression:"item.img"}],staticClass:"rbox-list-imgs",attrs:{alt:""}})])])})),0),s("ul",{staticClass:"cabinet-lbox"},[s("ul",{staticClass:"cabinet-lbox-page"},t._l(t.msg.title,(function(a,e){return s("li",{key:e,class:[t.tabnum==e?"lbox-page-list-hover":"","lbox-page-list"],on:{mouseenter:function(a){return t.cutTab(a,e)}}},[t._v(" "+t._s(a.title)+" ")])})),0),t._l(t.showList,(function(a,e){return s("li",{key:e,staticClass:"cabinet-lbox-list"},[s("a",{attrs:{href:""}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://www.wszxd.com"+a.img,expression:"'http://www.wszxd.com' + item.img"}],staticClass:"lbox-list-imgs",attrs:{alt:""}}),s("p",{staticClass:"lbox-list-ps"},[t._v(t._s(a.name))]),s("p",{staticClass:"lbox-list-ps"},[t._v(t._s(a.intro))]),s("p",{staticClass:"lbox-list-ps"},[t._v(t._s(a.price)+"元 "),s("s",[t._v(t._s(null==a.worn_price?"":a.worn_price+"元"))])])])])})),s("li",{staticClass:"cabinet-lbox-list"},[s("a",{attrs:{href:""}},[s("p",{staticClass:"list-title"},[t._v(t._s(t.shopEnd.name))]),s("p",{staticClass:"list-price"},[t._v(t._s(t.shopEnd.price)+"元")]),s("img",{attrs:{src:"http://www.wszxd.com"+t.shopEnd.img,alt:""}})])]),t._m(0)],2)])])}),F=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"cabinet-lbox-list"},[s("a",{attrs:{href:""}},[s("div",{staticClass:"list-more"},[s("p",{staticClass:"list-more-ps"},[t._v("浏览更多")]),s("p",{staticClass:"list-more-hot"},[t._v("热门")]),s("div",{staticClass:"list-more-arr"},[s("i",{staticClass:"iconfont"},[t._v("")])])])])])}],V={name:"index-showcase",props:["msg"],data:function(){return{tabnum:0,showList:[],shopEnd:""}},created:function(){},mounted:function(){this.showList=this.msg.hotList,""!==this.msg.hotList&&(this.shopEnd=this.msg.shopEnd.hotshopEnd)},watch:{},methods:{cutTab:function(t,a){this.tabnum=a,0==a?(this.showList=this.msg.hotList,this.shopEnd=this.msg.shopEnd.hotshopEnd):1==a?(this.showList=this.msg.oneList,this.shopEnd=this.msg.shopEnd.oneshopEnd):2==a&&(this.showList=this.msg.twoList,this.shopEnd=this.msg.shopEnd.twoshopEnd)}}},R=V,B=(s("eebb"),Object(o["a"])(R,X,F,!1,null,null,null)),U=B.exports,W=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mi-vid"},[s("div",{staticClass:"vid-title"},[t._v(" Redmi 10X系列发布会 "),s("div",{staticClass:"iconfont vid-title-shut",on:{click:t.vidShow}})]),s("div",{staticClass:"vid-details"},[s("video",{ref:"detailsContent",staticClass:"details-content",attrs:{autoplay:""},on:{click:t.widgetPlay,timeupdate:t.videoStart,ended:t.restartPlay}},[s("source",{attrs:{src:t.msg,type:"video/mp4"}})]),t.playOp?s("div",{staticClass:"details-bigplay",on:{click:t.widgetPlay}},[s("i",{staticClass:"iconfont bigplay-ico"})]):t._e(),s("div",{staticClass:"details-widget"},[s("div",{staticClass:"widget-bar"},[s("div",{ref:"barMaxlong",staticClass:"bar-maxlong",on:{click:t.skipBar}},[s("div",{ref:"maxlongGolong",staticClass:"maxlong-golong"}),s("div",{staticClass:"maxlong-dot"})])]),s("div",{staticClass:"widget-play",on:{click:t.widgetPlay}},[s("transition",{attrs:{name:"icodh"}},[t.playOp?s("i",{staticClass:"iconfont play-ico"},[t._v("")]):t._e()]),s("transition",{attrs:{name:"icodh"}},[t.playOp?t._e():s("i",{staticClass:"iconfont play-ico"},[t._v("")])])],1),s("div",{staticClass:"widget-time"},[s("span",{staticClass:"time-span"},[t._v(t._s(t.nowTime))]),s("span",{staticClass:"time-span"},[t._v("/")]),s("span",{staticClass:"time-span"},[t._v(t._s(t.totalTime))])]),s("div",{ref:"widgetWhole",staticClass:"iconfont widget-whole",on:{click:t.fullBtn}}),s("div",{staticClass:"widget-volume"},[s("i",{class:[t.muteOp?"volume-ico-mute":"volume-ico","iconfont"]}),s("input",{ref:"volumeMaxlong",staticClass:"volume-maxlong",attrs:{type:"range",value:"100",max:"200",min:"0"},on:{input:t.adjustVolume}})])])])])},J=[],G=(s("e25e"),{name:"mi-video",props:["msg"],data:function(){return{playOp:!1,muteOp:!1,totalTime:"",nowTime:""}},mounted:function(){},methods:{vidShow:function(){this.$emit("stopVideo",{detailsContent:this.$refs.detailsContent,op:!1,stop:function(){this.detailsContent.pause()}})},widgetPlay:function(){var t=this.$refs.detailsContent;this.playOp?(t.play(),this.playOp=!1):(t.pause(),this.playOp=!0)},videoStart:function(){var t=this.$refs.detailsContent,a=this.$refs.barMaxlong,s=this.$refs.maxlongGolong,e=t.currentTime/t.duration*a.clientWidth;s.style.cssText=";width:"+e+"px;";var i=parseInt(t.duration/60)<10?"0"+parseInt(t.duration/60):parseInt(t.duration/60),n=parseInt(t.duration%60)<10?"0"+parseInt(t.duration%60):parseInt(t.duration%60);this.totalTime=i+":"+n;var r=parseInt(t.currentTime/60)<10?"0"+parseInt(t.currentTime/60):parseInt(t.currentTime/60),c=parseInt(t.currentTime%60)<10?"0"+parseInt(t.currentTime%60):parseInt(t.currentTime%60);this.nowTime=r+":"+c},skipBar:function(t){var a=t.offsetX/this.$refs.barMaxlong.clientWidth*this.$refs.detailsContent.duration;this.$refs.detailsContent.currentTime=a},restartPlay:function(){this.playOp=!0,this.$refs.detailsContent.currentTime=0},fullBtn:function(){var t=this.$refs.detailsContent;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen&&t.webkitRequestFullScreen(),console.log(t.requestFullscreen)},adjustVolume:function(t){var a=document.querySelector(".widget-volume input[type=range]"),s=t.target.value/200,e=100*s;this.$refs.detailsContent.volume=s,a.style.cssText=";background-size:"+e+"% 100%;",0==t.target.value?this.muteOp=!0:this.muteOp=!1}}}),H=G,K=(s("c857"),Object(o["a"])(H,W,J,!1,null,"7803f5a6",null)),Q=K.exports,Y={name:"index",components:{Swiper:q["Swiper"],SwiperSlide:q["SwiperSlide"],IndexShowcase:U,MiVideo:Q},directives:{swiper:q["directive"]},data:function(){var t;return{swiperOptions:Object(M["a"])({pagination:{el:".swiper-pagination"},effect:"fade",noSwiping:!0,speed:1500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0,loopPreventsSlide:!1},"pagination",{el:".swiper-pagination",clickable:!0}),swiperOptions2:{navigation:{nextEl:".swiper2-button-next",prevEl:".swiper2-button-prev"},autoplay:{delay:5e3,disableOnInteraction:!1},speed:1500,slidesPerView:4,slidesPerGroup:3,spaceBetween:20,noSwiping:!0,noSwipingClass:"swiper-wrapper"},SlideImg:[{id:0,src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e023dd94c146d0f27f7ae8e98213abff.jpg?thumb=1&w=1226&h=460&f=webp&q=90"},{id:1,src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/67e705d12eb50ff0d01c0a17d4428754.jpg?w=2452&h=920"},{id:2,src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/85fe83512254832000635fb15f048df5.jpg?thumb=1&w=1226&h=460&f=webp&q=90"},{id:3,src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e023dd94c146d0f27f7ae8e98213abff.jpg?thumb=1&w=1226&h=460&f=webp&q=90"},{id:4,src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dd1230a223865a9b98f4b2cd437eea08.jpg?thumb=1&w=1226&h=460&f=webp&q=90"}],SiteList:[],SiteListAll:(t={xiaomiList:[],redmiList:[],tvList:[],bookList:[],wiringList:[]},Object(M["a"])(t,"redmiList",[]),Object(M["a"])(t,"wifiList",[]),Object(M["a"])(t,"partsList",[]),Object(M["a"])(t,"rimproductList",[]),Object(M["a"])(t,"headsetList",[]),Object(M["a"])(t,"liveboxList",[]),t),seckillList:"",phoneList:"",videoList:[{img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=296&h=180&f=webp&q=90",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4"},{img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/101b19aca4bb489bcef0f503e44ec866.jpg?thumb=1&w=296&h=180&f=webp&q=90",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4"},{img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=296&h=180&f=webp&q=90",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4"},{img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e74c4ff741bcdfc5b28a48a43e4edc6d.jpg?thumb=1&w=266&h=162&f=webp&q=90",src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812358b69886e576c66a01f1f00affe9.mp4"}],shopDataOne:{classBox:"家电",title:[{title:"热门"},{title:"电影电视"}],banner:[{img:"http://www.wszxd.com/public/banner/116fc43816b87192be4e67cf762e8da5.webp"},{img:"http://www.wszxd.com/public/banner/dfbdabe36b2d630d57a015e6fb5eb3ea.webp"}],shopEnd:{hotshopEnd:"",oneshopEnd:""},hotList:"",oneList:[]},shopDataTwo:{classBox:"生活",title:[{title:"热门"},{title:"配件"}],banner:[{img:"http://www.wszxd.com/public/banner/9f64bbd58c3f5001bdf0688894f22cb6.webp"},{img:"http://www.wszxd.com/public/banner/9f6c89cf21efc23799f6130224cef007.webp"}],shopEnd:{hotshopEnd:"",oneshopEnd:""},hotList:"",oneList:[]},shopDataThree:{classBox:"搭配",title:[{title:"热门"},{title:"智能"},{title:"路由器"}],banner:[{img:"http://www.wszxd.com/public/banner/a660ce095e8f553a9ed1515265f4e9fc.webp"},{img:"http://www.wszxd.com/public/banner/6874615b3c50e837ffe532eb6ea4ef1a.webp"}],shopEnd:{hotshopEnd:"",oneshopEnd:"",twoshopEnd:""},hotList:"",oneList:[],twoList:[]},giveMivideo:"",miVideoOp:!1}},computed:{},mounted:function(){var t=this;this.axios.get("http://www.wszxd.com/product/xiaomi",{params:{begin:0,ending:8}}).then((function(a){t.SiteListAll.xiaomiList=t.group(a.data.data,6),t.seckillList=a.data.data,t.phoneList=a.data.data}))["catch"]((function(t){console.log(t)})),this.axios.get("http://www.wszxd.com/product/television",{params:{begin:0,ending:8}}).then((function(a){t.SiteListAll.tvList=t.group(a.data.data,6),t.shopDataOne.oneList=a.data.data.slice(0,8),t.shopDataOne.shopEnd.oneshopEnd=a.data.data[a.data.data.length-1]}))["catch"]((function(t){console.log(t)})),this.axios.get("http://www.wszxd.com/product/jotter",{params:{begin:0,ending:6}}).then((function(a){t.SiteListAll.bookList=t.group(a.data.data,6)}))["catch"]((function(t){console.log(t)})),this.axios.get("http://www.wszxd.com/product/appliances",{params:{begin:0,ending:6}}).then((function(a){t.SiteListAll.wiringList=t.group(a.data.data,6),t.shopDataOne.hotList=a.data.data.slice(0,6),t.shopDataOne.shopEnd.hotshopEnd=a.data.data[a.data.data.length-1]}))["catch"]((function(t){console.log(t)})),this.axios.get("http://www.wszxd.com/product/redmi",{params:{begin:0,ending:6}}).then((function(a){t.SiteListAll.redmiList=t.group(a.data.data,6)}))["catch"]((function(t){console.log(t)})),this.axios.get("http://www.wszxd.com/product/wifi",{params:{begin:0,ending:6}}).then((function(a){t.SiteListAll.wifiList=t.group(a.data.data,6),t.shopDataThree.twoList=a.data.data.slice(0,7),t.shopDataThree.shopEnd.twoshopEnd=a.data.data[a.data.data.length-1]}))["catch"]((function(t){console.log(t)})),this.axios.get("http://www.wszxd.com/product/parts",{params:{begin:0,ending:6}}).then((function(a){t.SiteListAll.partsList=t.group(a.data.data,5),t.shopDataThree.oneList=a.data.data.slice(0,7),t.shopDataThree.shopEnd.oneshopEnd=a.data.data[a.data.data.length-1]}))["catch"]((function(t){console.log(t)})),this.axios.get("http://www.wszxd.com/product/rimproduct",{params:{begin:0,ending:8}}).then((function(a){t.SiteListAll.rimproductList=t.group(a.data.data,6),t.shopDataTwo.hotList=a.data.data.slice(0,7),t.shopDataTwo.shopEnd.hotshopEnd=a.data.data[a.data.data.length-1]}))["catch"]((function(t){console.log(t)})),this.axios.get("http://www.wszxd.com/product/headset",{params:{begin:0,ending:8}}).then((function(a){t.SiteListAll.headsetList=t.group(a.data.data,6),t.shopDataThree.hotList=a.data.data.slice(0,7),t.shopDataThree.shopEnd.hotshopEnd=a.data.data[a.data.data.length-1]}))["catch"]((function(t){console.log(t)})),this.axios.get("http://www.wszxd.com/product/livebox",{params:{begin:0,ending:8}}).then((function(a){t.SiteListAll.liveboxList=t.group(a.data.data,6),t.shopDataTwo.oneList=a.data.data.slice(0,7),t.shopDataTwo.shopEnd.oneshopEnd=a.data.data[a.data.data.length-1]}))["catch"]((function(t){console.log(t)}))},methods:{group:function(t,a){var s=a,e=[];if(t.length>=s){for(var i=1,n=0;n<=t.length/s;n++){var r=t.slice(s*n,s*i);i++,e.push(r),0===e[e.length-1].length&&e.pop()}return e}console.log("数据不够，太短了")},showMivideo:function(t){this.miVideoOp||(this.miVideoOp=!0),this.giveMivideo=t},stopOp:function(t){t.stop();var a=this;setTimeout((function(){a.miVideoOp=t.op}),0)},commodityShow:function(){var t=document.querySelectorAll(".commodity-list li"),a=this;t.forEach((function(t,s){t.setAttribute("data-index",s),t.onmouseenter=function(){var t=this.getAttribute("data-index");a.SiteList=0==t?a.SiteListAll.xiaomiList:1==t?a.SiteListAll.tvList:2==t?a.SiteListAll.bookList:3==t?a.SiteListAll.wiringList:4==t?a.SiteListAll.redmiList:5==t?a.SiteListAll.wifiList:6==t?a.SiteListAll.partsList:7==t?a.SiteListAll.rimproductList:8==t?a.SiteListAll.headsetList:a.SiteListAll.liveboxList}}))}}},Z=Y,tt=(s("d44d"),Object(o["a"])(Z,D,N,!1,null,null,null)),at=tt.exports,st=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._v(" product ")])},et=[],it={name:"product"},nt=it,rt=Object(o["a"])(nt,st,et,!1,null,null,null),ct=rt.exports,ot=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._v(" detail ")])},lt=[],pt={name:"index"},dt=pt,mt=Object(o["a"])(dt,ot,lt,!1,null,null,null),vt=mt.exports,ht=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("order-header"),s("div",[t._v("cart")]),s("nav-footer")],1)},ut=[],ft=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._v("order-header")])},wt=[],bt={name:"order-header"},_t=bt,gt=Object(o["a"])(_t,ft,wt,!1,null,null,null),Ct=gt.exports,xt={name:"cart",components:{OrderHeader:Ct,NavFooter:y}},Lt=xt,jt=Object(o["a"])(Lt,ht,ut,!1,null,null,null),yt=jt.exports,Et=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("order-header"),s("router-view"),s("nav-footer")],1)},zt=[],Ot={name:"order",components:{OrderHeader:Ct,NavFooter:y}},St=Ot,kt=Object(o["a"])(St,Et,zt,!1,null,null,null),$t=kt.exports,Tt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._v(" order-list ")])},Pt=[],It={name:"order-list"},At=It,Dt=Object(o["a"])(At,Tt,Pt,!1,null,null,null),Nt=Dt.exports,Mt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._v(" order-confirm ")])},qt=[],Xt={name:"order-confirm"},Ft=Xt,Vt=Object(o["a"])(Ft,Mt,qt,!1,null,null,null),Rt=Vt.exports,Bt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._v(" order-pay ")])},Ut=[],Wt={name:"order-pay"},Jt=Wt,Gt=Object(o["a"])(Jt,Bt,Ut,!1,null,null,null),Ht=Gt.exports,Kt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[t._v(" alipay ")])},Qt=[],Yt={name:"alipay"},Zt=Yt,ta=Object(o["a"])(Zt,Kt,Qt,!1,null,null,null),aa=ta.exports;e["default"].use(d["a"]);var sa=[{path:"/",name:"home",component:A,redirect:"Index",children:[{path:"/index",name:"index",component:at},{path:"/product/:id",name:"product",component:ct},{path:"/detail/:id",name:"Detail",component:vt}]},{path:"/cart",name:"cart",component:yt},{path:"/order",name:"order",component:$t,children:[{path:"list",name:"order-list",component:Nt},{path:"confirm",name:"order-confirm",component:Rt},{path:"pay",name:"order-pay",component:Ht},{path:"alipay",name:"alipay",component:aa}]}],ea=new d["a"]({routes:sa}),ia=ea,na=s("bc3a"),ra=s.n(na),ca=s("21061"),oa=s.n(ca),la=s("caf9");e["default"].config.productionTip=!1,e["default"].use(oa.a,ra.a),e["default"].use(la["a"],{loading:s("7ae4"),error:s("7ae4")}),new e["default"]({router:ia,render:function(t){return t(p)}}).$mount("#app")},"5d71":function(t,a,s){"use strict";s("2106")},"7ae4":function(t,a,s){t.exports=s.p+"static/img/load.606c4909.svg"},"908b":function(t,a,s){},a835:function(t,a,s){},b042:function(t,a,s){"use strict";s("270b")},c39e:function(t,a,s){},c6f7:function(t,a,s){},c857:function(t,a,s){"use strict";s("c6f7")},d44d:function(t,a,s){"use strict";s("a835")},eebb:function(t,a,s){"use strict";s("c39e")}});
//# sourceMappingURL=app.7e197ce2.js.map