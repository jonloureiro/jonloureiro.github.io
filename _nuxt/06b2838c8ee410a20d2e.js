(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{156:function(e,a,t){"use strict";var n={duration:{enter:.3,leave:.3},zPlus:function(){return{x:0,scale:1.4,opacity:0,delay:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}},zMinus:function(){return{x:0,scale:.6,opacity:0,delay:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}},xPlus:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{x:2e3,scale:1,opacity:1,delay:0}},xMinus:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{x:-1e3,scale:1,opacity:1,delay:0}}};a.a=n},157:function(e,a,t){var n=t(163);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t(16).default)("43233e31",n,!0,{})},162:function(e,a,t){"use strict";var n=t(157);t.n(n).a},163:function(e,a,t){(e.exports=t(15)(!1)).push([e.i,"div[data-v-34ebaaea]{display:flex;flex-direction:column;align-items:center;justify-content:center;color:#786998}h2[data-v-34ebaaea],p[data-v-34ebaaea]{margin:.25rem 0 0}a[data-v-34ebaaea],hr[data-v-34ebaaea]{color:#638688}",""])},174:function(e,a,t){"use strict";t.r(a);t(32);var n=t(33),o=t(156),i={name:"Curriculum",data:function(){return{pageName:"Curriculum"}},transition:{css:!1,enter:function(e,a){var t;switch(this.$store.state.route.from.name){case"index":t=o.a.xPlus();break;case null:t=o.a.zPlus(.5);break;default:t=o.a.zMinus()}var i=t,r=i.x,s=i.scale,u=i.opacity,l=i.delay;n.b.from(e,o.a.duration.enter,{x:r,scale:s,opacity:u,delay:l,ease:n.a.easeInOut,onComplete:a})},leave:function(e,a){var t;switch(this.$store.state.route.to.name){case"index":t=o.a.xPlus();break;default:t=o.a.zMinus()}var i=t,r=i.x,s=i.scale,u=i.opacity;n.b.to(e,o.a.duration.leave,{x:r,scale:s,opacity:u,ease:n.a.easeIn,onComplete:a})}}},r=(t(162),t(10)),s=Object(r.a)(i,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("section",[t("h2",[e._v("Ops... 😅")]),e._v(" "),t("p",[e._v(e._s(e.pageName)+" em construção!")]),e._v(" "),t("hr")]),e._v(" "),t("nav",[t("nuxt-link",{class:e.$options.name+"__link",attrs:{to:"/"}},[e._v("\n      Voltar\n    ")]),e._v("\n    ·\n    "),t("a",{attrs:{href:"https://github.com/jonloureiro/jonloureiro.github.io"}},[e._v("\n      Code\n    ")])],1)])},[],!1,null,"34ebaaea",null);s.options.__file="curriculum.vue";a.default=s.exports}}]);