(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{87:function(e,t,a){"use strict";a.r(t);var n=a(53),r=a.n(n),c=a(55),s=a(8),o=a(0),i=a.n(o),l=(a(9),a(73)),f=a.n(l),u=a(6),p=a(41),m=a.n(p),d=a(14);t.default=Object(o.memo)((function(e){var t=e.isTopMsgVisible,a=e.setIsTopMsgVisible,n=e.setHeaderPosTop,p=e.setBodyMarginTop,b=Object(o.useState)({offerText:void 0,secText:void 0,linkText:void 0,link:"/"}),h=Object(s.a)(b,2),T=h[0],x=h[1],_=T.offerText,k=T.secText,g=T.linkText,v=T.link,w=t?"top_msg w-100 fc fsxs bg_white fc_pri pos_rel no_wrap sb-hid":"hid",E=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://run.mocky.io/v3/56013304-21d4-4d49-b53f-09e74de9bd83");case 3:t=e.sent,console.log("Top Message data fetch successful: ",t),x((function(){return{offerText:t.data.offerText,secText:t.data.secText,linkText:t.data.linkText,link:t.data.link}})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Top msg data fetching failed. Error: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){E()}),[]),i.a.createElement("div",{className:w},i.a.createElement("div",{className:"mar-0-auto of-scr sb-hid"},i.a.createElement(l.SkeletonTheme,{color:d.b,highlightColor:d.c},i.a.createElement("i",{className:"fas fa-crown mar_l-4 mar_r-8"}),i.a.createElement("span",null,i.a.createElement("strong",null,_||i.a.createElement(f.a,{width:320}))," ",k),i.a.createElement(u.b,{to:v,className:"mar_l-4 link-active fwb link_foc_u mar_r-24"},g),i.a.createElement("button",{className:"btn bg_white fc_33 pos_abs-0-0-r h-100 pad_0-8 cur foc_btn_icon_op-1",onClick:function(){a((function(){return!1})),n((function(){return"0px"})),p((function(){return"48px"}))}},i.a.createElement("i",{className:"w-100 fcc h-100 fas fa-times op-5"})))))}))}}]);
//# sourceMappingURL=8.ebf3e4d7.chunk.js.map