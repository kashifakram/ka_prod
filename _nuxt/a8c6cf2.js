(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{385:function(e,t,r){"use strict";r.r(t);r(29),r(11);var o=r(379),n=r(381),m={mixins:[o.validationMixin],data:function(){return{formData:{name:"",email:"",company:"",message:""},submitStatus:""}},validations:{formData:{name:{required:n.required,maxLength:Object(n.maxLength)(100)},email:{required:n.required,email:n.email},company:{required:n.required,maxLength:Object(n.maxLength)(100)},message:{required:n.required,maxLength:Object(n.maxLength)(500)}}},props:["cardClasses","cardHeadingClasses","cardTextClasses","cardMainParaClasses"],computed:{nameErrors:function(){var e=[];return this.$v.formData.name.$dirty?(!this.$v.formData.name.maxLength&&e.push("Name must be at most 100 characters long"),!this.$v.formData.name.required&&e.push("Name is required."),e):e},companyErrors:function(){var e=[];return this.$v.formData.company.$dirty?(!this.$v.formData.company.maxLength&&e.push("Company must be at most 100 characters long"),!this.$v.formData.company.required&&e.push("Company is required."),e):e},emailErrors:function(){var e=[];return this.$v.formData.email.$dirty?(!this.$v.formData.email.email&&e.push("Must be valid e-mail"),!this.$v.formData.email.required&&e.push("E-mail is required"),e):e},messageErrors:function(){var e=[];return this.$v.formData.message.$dirty?(!this.$v.formData.message.maxLength&&e.push("Message must be at most 500 characters long"),!this.$v.formData.message.required&&e.push("Message is required."),e):e}},methods:{clear:function(){this.$v.$reset(),this.formData.name="",this.formData.email="",this.formData.company="",this.formData.message="",this.$refs.contactFormStatus.innerHTML=""},showText:function(e){alert("You message has been delivered"),this.clear()},submit:function(e){var t=this;this.$v.$touch();var r=this.$refs.contactFormStatus;this.$v.$invalid?(this.submitStatus="ERROR",r.innerHTML="There's some error"):fetch("https://formspree.io/f/mwkaozal",{method:"POST",body:JSON.stringify(this.formData),headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return t.showText(e)})).catch((function(e){r.innerHTML="There's some error "+e}))}}},c=r(77),l=r(99),d=r.n(l),f=r(393),v=r(368),h=r(316),$=r(474),D=r(480),component=Object(c.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"info darken-1",class:e.cardClasses,attrs:{id:"contactCard"}},[r("v-card-title",{class:e.cardHeadingClasses},[e._v("\n        Contact Me\n      ")]),e._v(" "),r("v-card-text",{class:e.cardTextClasses},[r("div",{staticClass:"font-weight-bold text-body-1"},[e._v("Feeling getting in touch?")]),e._v(" "),r("p",[e._v("Please provide following basic details about you, or email me at "),r("a",{attrs:{href:"mailto:kashif@kashifakram.com?subject=Big News&body=Write your message"}},[r("span",{staticClass:"pa-2 font-weight-bold text-body-1 info darken-4"},[e._v(" kashif@kashifakram.com")])]),e._v(" and I'll get back to you ASAP.")]),e._v(" "),r("hr",{staticClass:"my-3"}),e._v(" "),r("form",{ref:"contactForm",staticClass:"info darken-4 pa-12 elevation-8",attrs:{autocomplete:"true"}},[r("v-card-title",{staticClass:"px-0 text-h6 text-center"},[e._v("\n  Let's get in touch\n")]),e._v(" "),r("v-text-field",{ref:"name",attrs:{"error-messages":e.nameErrors,counter:100,label:"Name",required:""},on:{input:function(t){return e.$v.formData.name.$touch()},blur:function(t){return e.$v.formData.name.$touch()}},model:{value:e.$v.formData.name.$model,callback:function(t){e.$set(e.$v.formData.name,"$model","string"==typeof t?t.trim():t)},expression:"$v.formData.name.$model"}}),e._v(" "),r("v-text-field",{attrs:{"error-messages":e.emailErrors,label:"E-mail",required:""},on:{input:function(t){return e.$v.formData.email.$touch()},blur:function(t){return e.$v.formData.email.$touch()}},model:{value:e.$v.formData.email.$model,callback:function(t){e.$set(e.$v.formData.email,"$model","string"==typeof t?t.trim():t)},expression:"$v.formData.email.$model"}}),e._v(" "),r("v-text-field",{attrs:{"error-messages":e.companyErrors,label:"Company",counter:100,required:""},on:{input:function(t){return e.$v.formData.company.$touch()},blur:function(t){return e.$v.formData.company.$touch()}},model:{value:e.$v.formData.company.$model,callback:function(t){e.$set(e.$v.formData.company,"$model","string"==typeof t?t.trim():t)},expression:"$v.formData.company.$model"}}),e._v(" "),r("v-textarea",{attrs:{"error-messages":e.messageErrors,counter:500,required:"",clearable:"","clear-icon":"mdi-close-circle",label:"Message"},on:{input:function(t){return e.$v.formData.message.$touch()},blur:function(t){return e.$v.formData.message.$touch()}},model:{value:e.$v.formData.message.$model,callback:function(t){e.$set(e.$v.formData.message,"$model","string"==typeof t?t.trim():t)},expression:"$v.formData.message.$model"}}),e._v(" "),r("v-btn",{staticClass:"mt-12 mr-8",attrs:{color:"info darken-1",rounded:"",width:"40%"},on:{click:e.submit}},[e._v("\n    submit\n  ")]),e._v(" "),r("v-btn",{staticClass:"mt-12 mr-8",attrs:{color:"primary darken-4",rounded:""},on:{click:e.clear}},[e._v("\n    clear\n  ")]),e._v(" "),r("p",{ref:"contactFormStatus",attrs:{id:"contactFormStatus"}})],1)])],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:f.a,VCard:v.a,VCardText:h.b,VCardTitle:h.c,VTextField:$.a,VTextarea:D.a})}}]);