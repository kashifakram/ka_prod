(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{217:function(t,e,n){"use strict";var o={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],icons:[{icon:"mdi-twitter",link:"https://twitter.com/iamkashifakram"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},head:{title:"Home Page",htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""}],script:[{src:"/bodybg.js",body:!0}]}},r=n(77),c=n(100),l=n.n(c),d=n(317),f=n(322),h=n(319),v=n(312),m=n(320),x=n(321),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("v-container",{attrs:{fluid:""}},[n("nuxt")],1)],1),t._v(" "),n("v-footer",{attrs:{absolute:!t.fixed,app:""}},[t._l(t.icons,(function(e){return n("a",{key:e.icon,staticClass:"white--text",attrs:{href:e.link,target:"_blank"}},[n("v-icon",{attrs:{size:"24px",color:"white"}},[t._v("\n      "+t._s(e.icon)+"\n    ")])],1)})),t._v(" "),n("v-spacer"),t._v(" "),n("span",[t._v("© Kashif Akram "+t._s((new Date).getFullYear()))])],2)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a,VContainer:f.a,VFooter:h.a,VIcon:v.a,VMain:m.a,VSpacer:x.a})},237:function(t,e,n){n(238),t.exports=n(239)},277:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("ac065e1c",content,!0,{sourceMap:!1})},278:function(t,e,n){var o=n(47),r=n(52),c=n(53),l=n(54),d=o(!1),f=r(c),h=r(l);d.push([t.i,'@font-face{font-family:"heading";src:url('+f+') format("truetype");font-display:swap}@font-face{font-family:"regular";src:url('+h+') format("truetype");font-display:swap}p{line-height:1.8}.sidefixed{position:fixed;top:25vh;right:5vh}a{text-decoration:none}a:hover{text-decoration:underline;-webkit-text-decoration-color:orange;text-decoration-color:orange}a p{color:#fff}body{margin:0;padding:0}body canvas{position:absolute;display:inline;height:100vh;min-height:100vh;top:20%;left:0;z-index:0}',""]),t.exports=d},53:function(t,e,n){t.exports=n.p+"fonts/NotoSerif-Bold.d393a95.ttf"},54:function(t,e,n){t.exports=n.p+"fonts/Ubuntu-Regular.fbdecfc.ttf"},69:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=n(77),c=n(100),l=n.n(c),d=n(317),f=n(318),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-row",{staticClass:"flex-column",staticStyle:{position:"relative","z-index":"2"},attrs:{justify:"center",align:"center","align-content":"center"}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)],1)}),[],!1,null,"19a55300",null);e.a=component.exports;l()(component,{VApp:d.a,VRow:f.a})}},[[237,13,4,14]]]);