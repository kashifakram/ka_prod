(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{342:function(t,e,o){"use strict";o.r(e);var c={data:function(){return{localDialog:!1}},props:{value:Boolean,project:Object},created:function(){this.localDialog=this.dialog},computed:{show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},projectTechs:function(){return project?project.techs:[]}}},r=o(77),n=o(100),l=o.n(n),v=o(376),d=o(377),h=o(323),_=o(485),f=o(492),j=o(491),w=o(486),m=o(312),x=o(397),C=o(386),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{transition:"dialog-bottom-transition","hide-overlay":"",width:t.$vuetify.breakpoint.mdAndUp?"60vw":"100vw"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[o("v-card",{staticClass:"mx-auto"},[o("v-img",{attrs:{src:t.project?t.project.bigImg:""}},[o("v-toolbar",{staticClass:"text-center",attrs:{color:"transparent",width:"15%",elevation:"0"}},[o("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!1}}},[o("v-icon",{staticClass:"font-weight-bold",attrs:{color:"info",size:"36"}},[t._v("mdi-close")])],1)],1)],1),t._v(" "),o("v-card-title",[t._v(t._s(t.project?t.project.title:""))]),t._v(" "),o("v-card-text",[o("div",{staticClass:"my-4 text-subtitle-1"},[t._v("\n        "+t._s(t.project?t.project.subtitle:"")+"\n      ")]),t._v(" "),o("div",[t._v(t._s(t.project?t.project.description:""))])]),t._v(" "),o("v-divider",{staticClass:"mx-4"}),t._v(" "),o("v-card-title",[t._v("Technologies Used")]),t._v(" "),t.project?o("v-card-text",[o("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""}},t._l(t.project.techs,(function(e,i){return o("v-chip",{key:i},[t._v(t._s(e))])})),1)],1):t._e(),t._v(" "),o("v-card-actions",[o("a",{staticClass:"text-body-1 info darken-4 px-8 py-2 font-weight-bold",attrs:{text:"",href:t.project?t.project.link:"#",target:"_blank"}},[t._v("\n        Live Link\n      ")])]),t._v(" "),o("v-divider")],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VChip:_.a,VChipGroup:f.a,VDialog:j.a,VDivider:w.a,VIcon:m.a,VImg:x.a,VToolbar:C.a})}}]);