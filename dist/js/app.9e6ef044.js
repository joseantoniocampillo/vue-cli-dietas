(function(e){function t(t){for(var s,c,o=t[0],r=t[1],l=t[2],u=0,_=[];u<o.length;u++)c=o[u],n[c]&&_.push(n[c][0]),n[c]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);d&&d(t);while(_.length)_.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var r=a[o];0!==n[r]&&(s=!1)}s&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},n={app:0},i=[];function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=r;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"1e6f":function(e,t,a){},3757:function(e,t,a){},"481d":function(e,t,a){e.exports=a.p+"img/redondo_europa.0a03308b.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("DietasPage")],1)},i=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"miclase"},["Kms"===e.pantalla?s("div",[s("div",{staticClass:"columns is-mobile tablarita"},[e._l(["6 - 8","14 - 16","21 - 23"],function(t,a){return s("div",{key:a,staticClass:"column"},[s("h4",[e._v(e._s(t))])])}),s("div",{staticClass:"column"},[s("a",{staticClass:"button is-success is-outlined is-focused is-size-5",on:{click:e.agregarJornada}},[e._v("+")])])],2),e._l(e.jornadas,function(t,a){return s("div",{key:"jor-"+a,staticClass:"columns is-mobile"},[s("div",{staticClass:"column bandera",style:e.desayuno(t)},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.desa_nac,expression:"jornada.desa_nac"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.desa_nac)?e._i(t.desa_nac,null)>-1:t.desa_nac},on:{click:function(a){return e.remueve_ext(t,"desa_")},change:function(a){var s=t.desa_nac,n=a.target,i=!!n.checked;if(Array.isArray(s)){var c=null,o=e._i(s,c);n.checked?o<0&&e.$set(t,"desa_nac",s.concat([c])):o>-1&&e.$set(t,"desa_nac",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(t,"desa_nac",i)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.desa_ext,expression:"jornada.desa_ext"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.desa_ext)?e._i(t.desa_ext,null)>-1:t.desa_ext},on:{click:function(a){return e.remueve_nac(t,"desa_")},change:function(a){var s=t.desa_ext,n=a.target,i=!!n.checked;if(Array.isArray(s)){var c=null,o=e._i(s,c);n.checked?o<0&&e.$set(t,"desa_ext",s.concat([c])):o>-1&&e.$set(t,"desa_ext",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(t,"desa_ext",i)}}})]),s("div",{staticClass:"column bandera",style:e.comida(t)},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.comi_nac,expression:"jornada.comi_nac"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.comi_nac)?e._i(t.comi_nac,null)>-1:t.comi_nac},on:{click:function(a){return e.remueve_ext(t,"comi_")},change:function(a){var s=t.comi_nac,n=a.target,i=!!n.checked;if(Array.isArray(s)){var c=null,o=e._i(s,c);n.checked?o<0&&e.$set(t,"comi_nac",s.concat([c])):o>-1&&e.$set(t,"comi_nac",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(t,"comi_nac",i)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.comi_ext,expression:"jornada.comi_ext"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.comi_ext)?e._i(t.comi_ext,null)>-1:t.comi_ext},on:{click:function(a){return e.remueve_nac(t,"comi_")},change:function(a){var s=t.comi_ext,n=a.target,i=!!n.checked;if(Array.isArray(s)){var c=null,o=e._i(s,c);n.checked?o<0&&e.$set(t,"comi_ext",s.concat([c])):o>-1&&e.$set(t,"comi_ext",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(t,"comi_ext",i)}}})]),s("div",{staticClass:"column bandera",style:e.cena(t)},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.cena_nac,expression:"jornada.cena_nac"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.cena_nac)?e._i(t.cena_nac,null)>-1:t.cena_nac},on:{click:function(a){return e.remueve_ext(t,"cena_")},change:function(a){var s=t.cena_nac,n=a.target,i=!!n.checked;if(Array.isArray(s)){var c=null,o=e._i(s,c);n.checked?o<0&&e.$set(t,"cena_nac",s.concat([c])):o>-1&&e.$set(t,"cena_nac",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(t,"cena_nac",i)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.cena_ext,expression:"jornada.cena_ext"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.cena_ext)?e._i(t.cena_ext,null)>-1:t.cena_ext},on:{click:function(a){return e.remueve_nac(t,"cena_")},change:function(a){var s=t.cena_ext,n=a.target,i=!!n.checked;if(Array.isArray(s)){var c=null,o=e._i(s,c);n.checked?o<0&&e.$set(t,"cena_ext",s.concat([c])):o>-1&&e.$set(t,"cena_ext",s.slice(0,o).concat(s.slice(o+1)))}else e.$set(t,"cena_ext",i)}}})]),s("div",{staticClass:"column bandera"},[s("a",{staticClass:"is-size-6"},[e._v(e._s(a+1))]),s("a",{staticClass:"button is-danger is-outlined is-focused is-size-5",on:{click:function(t){return e.removeJornada(a)}}},[e._v("-")])])])}),s("div",{staticClass:"footer"},[s("div",{staticClass:"columns is-mobile"},[e._l(["Des.","Com.","Cen."],function(t,a){return s("div",{key:a,staticClass:"column"},[s("h4",[e._v(e._s(t))])])}),s("div",{staticClass:"column"})],2),s("div",{staticClass:"columns is-mobile"},[e._l(["desa_","comi_","cena_"],function(t,n){return s("div",{key:n,staticClass:"column"},[s("h4",[s("img",{attrs:{src:a("caa6"),alt:""}}),e._v("\n            "+e._s(e.items[t+"nac"])+"\n          ")])])}),s("div",{staticClass:"column"})],2),s("div",{staticClass:"columns is-mobile"},[e._l(["desa_","comi_","cena_"],function(t,n){return s("div",{key:n,staticClass:"column"},[s("h4",[s("img",{attrs:{src:a("481d"),alt:""}}),e._v("\n            "+e._s(e.items[t+"ext"])+"\n          ")])])}),s("div",{staticClass:"column"})],2),s("div",{staticClass:"is-inline-block"},[s("p",{staticClass:"is-size-5"},[e._v("Total "+e._s(e.calculatotal)+" €")]),s("a",{staticClass:"button is-danger is-outlined is-hovered is-size-5",on:{click:function(t){return e.borratodo()}}},[e._v("Borrar todo")])])])],2):s("div",{staticClass:"field"},[s("div",[s("Kms",{attrs:{dietas:e.calculatotal}})],1)]),s("div",[s("a",{staticClass:"button is-info is-outlined is-hovered is-size-5",attrs:{id:"mybutton"},on:{click:function(t){e.pantalla="Kms"===e.pantalla?"Dietas":"Kms"}}},[e._v(e._s(e.pantalla))])])])},o=[],r=(a("ac6a"),a("c5f6"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},["ind"===e.modo?a("table",{staticClass:"table"},[a("tr",[a("td",[e._v("Kms Mensualidad")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.kms_mes,expression:"kms_mes"}],staticClass:"input has-text-right is-pulled-right",staticStyle:{"max-width":"60%"},attrs:{autofocus:"",type:"number",placeholder:"Kms"},domProps:{value:e.kms_mes},on:{change:function(t){return e.setKm_mes()},input:function(t){t.target.composing||(e.kms_mes=t.target.value)}}})])]),a("tr",[a("td",[e._v("Horas Extra")]),a("td",{staticClass:"has-text-right"},[e._v(e._s(e.horas_extra.toFixed(2))+" €")])]),a("tr",[a("td",[e._v("Horas de Presencia")]),a("td",{staticClass:"has-text-right"},[e._v(e._s(e.horas_presencia.toFixed(2))+" €")])]),a("tr",[a("td",[e._v("Horas de Nocturnidad")]),a("td",{staticClass:"has-text-right"},[e._v(e._s(e.horas_nocturnidad.toFixed(2))+" €")])])]):e._e(),a("table",{staticClass:"table"},[a("tr",[a("td",[e._v("Kms Viaje")]),a("td",{staticClass:"has-text-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.kms_viaje,expression:"kms_viaje"}],staticClass:"input has-text-right is-pulled-right",staticStyle:{"max-width":"60%"},attrs:{autofocus:"",type:"number",placeholder:"Kms"},domProps:{value:e.kms_viaje},on:{change:function(t){return e.setKm_via()},input:function(t){t.target.composing||(e.kms_viaje=t.target.value)}}})])]),a("tr",[a("td",[a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.modo,expression:"modo"}],attrs:{type:"radio",value:"ind",name:"algo",checked:""},domProps:{checked:e._q(e.modo,"ind")},on:{change:function(t){e.modo="ind"}}}),e._v("\n          Individual\n        ")])]),a("td",{staticClass:"has-text-right"},[a("label",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.modo,expression:"modo"}],attrs:{type:"radio",value:"dob",name:"algo"},domProps:{checked:e._q(e.modo,"dob")},on:{change:function(t){e.modo="dob"}}}),e._v("\n          Doble tripulación\n        ")])])]),a("tr",[a("td",[e._v("Por "+e._s("ind"===this.modo?this.kms_viaje:this.kms_viaje/2)+" kms")]),a("td",{staticClass:"has-text-right"},[e._v(e._s(this.viaje_kms_euros.toFixed(2))+" €")])]),a("tr",[a("td",{staticClass:"has-background-warning"},[e._v("Dietas")]),a("td",{staticClass:"has-text-right has-background-warning"},[e._v(e._s(this.dietas)+" €")])]),a("tr",[a("td",{staticClass:"has-background-primary"},[e._v("Resumen de viaje")]),a("td",{staticClass:"has-text-right has-background-primary is-size-5"},[e._v(e._s((this.viaje_kms_euros+Number(this.dietas)).toFixed(2))+" €")])])]),"dob"===e.modo?a("table",{staticClass:"table"},[a("tr",[a("td",[e._v("Para Horas Extra")]),a("td",{staticClass:"has-text-right"},[e._v(e._s((.5*this.viaje_kms_euros).toFixed(2))+" €")])]),a("tr",[a("td",[e._v("Para Horas de Presencia")]),a("td",{staticClass:"has-text-right"},[e._v(e._s((.4*this.viaje_kms_euros).toFixed(2))+" €")])]),a("tr",[a("td",[e._v("Para Horas de Nocturnidad")]),a("td",{staticClass:"has-text-right"},[e._v(e._s((.1*this.viaje_kms_euros).toFixed(2))+" €")])])]):e._e()])}),l=[],d={name:"Kms",props:["dietas"],created:function(){this.kms_mes=JSON.parse(localStorage.getItem("KM_MES")),this.kms_viaje=JSON.parse(localStorage.getItem("KM_VIAJE")),this.modo="ind"},data:function(){return{kms_mes:null,kms_viaje:null,valores:{hasta10:.0185,masde10:.0329,dobles:.0175},modo:""}},methods:{setKm_mes:function(){localStorage.setItem("KM_MES",JSON.stringify(this.kms_mes))},setKm_via:function(){localStorage.setItem("KM_VIAJE",JSON.stringify(this.kms_viaje))}},computed:{precio_especifico:function(){return this.kms_mes<=1e4?this.valores.hasta10:((this.kms_mes-1e4)*this.valores.masde10+1e4*this.valores.hasta10)/this.kms_mes},horas_extra:function(){return this.kms_mes*this.precio_especifico*.5},horas_presencia:function(){return this.kms_mes*this.precio_especifico*.4},horas_nocturnidad:function(){return this.kms_mes*this.precio_especifico*.1},viaje:function(){return{rendimiento_kms:this.kms_viaje}},viaje_kms_euros:function(){return"ind"===this.modo?this.kms_viaje*this.precio_especifico:this.kms_viaje*this.valores.dobles},nomina:function(){return[["Horas Extra",this.horas_extra],["Horas Presencia",this.horas_presencia],["Horas Nocturnidad",this.horas_nocturnidad],["Salario base","930,34"]]}}},u=d,_=(a("733a"),a("2877")),m=Object(_["a"])(u,r,l,!1,null,"1a009b8a",null),v=m.exports,h="clave_storage",f={name:"DietasPage",components:{Kms:v},created:function(){this.jornadas=JSON.parse(localStorage.getItem(h)||[{desa_nac:null,comi_nac:null,cena_nac:null,desa_ext:null,comi_ext:null,cena_ext:null}])},data:function(){return{kms:{type:Number},pantalla:"Kms",precio:{conceptos:["desa_nac","desa_ext","comi_nac","comi_ext","cena_nac","cena_ext"],dieta2018:[7.9458,12.8263,19.8571,24.9445,17.3872,21.2292]},jornadas:[{desa_nac:null,comi_nac:null,cena_nac:null,desa_ext:null,comi_ext:null,cena_ext:null}],color_nac:"background-image:linear-gradient(red 35%, yellow 35%, yellow 65%, red 65%); color:#fff;",color_ext:"#003399"}},methods:{remueve_ext:function(e,t){e[t+"ext"]=!1},remueve_nac:function(e,t){e[t+"nac"]=!1},agregarJornada:function(){this.jornadas.push({desa_nac:null,comi_nac:null,cena_nac:null,desa_ext:null,comi_ext:null,cena_ext:null}),localStorage.setItem(h,JSON.stringify(this.jornadas))},removeJornada:function(e){this.jornadas.splice(e,1),localStorage.setItem(h,JSON.stringify(this.jornadas))},desayuno:function(e){var t=e.desa_nac,a=e.desa_ext;return localStorage.setItem(h,JSON.stringify(this.jornadas)),t?"".concat(this.color_nac,";"):a?"background: ".concat(this.color_ext,";"):"background: white;"},comida:function(e){var t=e.comi_nac,a=e.comi_ext;return localStorage.setItem(h,JSON.stringify(this.jornadas)),t?"".concat(this.color_nac,";"):a?"background: ".concat(this.color_ext,";"):"background: white;"},cena:function(e){var t=e.cena_nac,a=e.cena_ext;return localStorage.setItem(h,JSON.stringify(this.jornadas)),t?"".concat(this.color_nac,";"):a?"background: ".concat(this.color_ext,";"):"background: white;"},borratodo:function(){this.jornadas=[{desa_nac:null,comi_nac:null,cena_nac:null,desa_ext:null,comi_ext:null,cena_ext:null}],localStorage.setItem(h,JSON.stringify(this.jornadas))}},computed:{sumados:function(){var e=this,t={};return this.precio.conceptos.forEach(function(a,s){t[a]=e.jornadas.filter(function(e){return e[a]}).length*e.precio.dieta2018[s]}),t},items:function(){var e=this,t={};return this.precio.conceptos.forEach(function(a){t[a]=e.jornadas.filter(function(e){return e[a]}).length}),t},calculatotal:function(){var e=this,t={},a=0;return this.precio.conceptos.forEach(function(s,n){a+=t[s]=e.jornadas.filter(function(e){return e[s]}).length*e.precio.dieta2018[n]}),a.toFixed(2)}}},p=f,g=(a("6d81"),Object(_["a"])(p,c,o,!1,null,"9a3ba0dc",null)),x=g.exports,k={title:"Dietas y Kms",name:"app",components:{DietasPage:x}},b=k,y=(a("034f"),Object(_["a"])(b,n,i,!1,null,null,null)),j=y.exports,C=(a("92c6"),a("9483"));function w(e){var t=e.$options.title;if(t)return"function"===typeof t?t.call(e):t}Object(C["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var S={created:function(){var e=w(this);e&&(document.title=e)}};s["a"].config.productionTip=!1,s["a"].mixin(S),new s["a"]({render:function(e){return e(j)}}).$mount("#app")},"64a9":function(e,t,a){},"6d81":function(e,t,a){"use strict";var s=a("3757"),n=a.n(s);n.a},"733a":function(e,t,a){"use strict";var s=a("1e6f"),n=a.n(s);n.a},caa6:function(e,t,a){e.exports=a.p+"img/spain.36938bbe.svg"}});
//# sourceMappingURL=app.9e6ef044.js.map