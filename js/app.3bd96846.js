(function(e){function t(t){for(var o,a,i=t[0],u=t[1],d=t[2],b=0,l=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(l.length)l.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==c[u]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},c={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var s=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"3cf7":function(e,t,n){"use strict";n("98a3")},"866a":function(e,t,n){"use strict";n("d5e8")},"98a3":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c=(n("a4d3"),n("e01a"),Object(o["f"])("h1",{class:"title"},[Object(o["e"])(" nkate "),Object(o["f"])("span",{class:"sub"},"stream pass")],-1)),r={class:"sub-title"},a={class:"content"},i={key:0,class:"emoji"},u={class:"amount"},d={class:"desc"},s={key:0,class:"youtube"};function b(e,t,n,b,l,j){var p=Object(o["m"])("ArrowIcon"),O=Object(o["m"])("YoutubeEmbed");return Object(o["g"])(),Object(o["c"])(o["a"],null,[c,Object(o["f"])("h2",r,[(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["l"])(e.seasons,(function(t){return Object(o["g"])(),Object(o["c"])("button",{onClick:function(n){return e.setCurrentSeason(t)},onDblclick:function(n){return e.renderWidget(t)},class:{"-active":t===e.currentSeason}},Object(o["n"])(t.title),43,["onClick","onDblclick"])})),256))]),(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["l"])(e.stages,(function(t,n){return Object(o["g"])(),Object(o["c"])("div",{class:["stage",{"-ready":t.ready,"-done":t.done,"-hasYoutube":t.hasYoutube}]},[Object(o["f"])("div",{class:"bar",title:t.done?"Виконано!":t.ready?"Заповнено, але не виконано.":"Не заповнено."},null,8,["title"]),Object(o["f"])("div",a,[Object(o["f"])("div",{class:"panel",onClick:function(o){return e.opened=t.hasYoutube?e.opened!==n?n:null:e.opened}},[t.emoji?(Object(o["g"])(),Object(o["c"])("div",i,Object(o["n"])(t.emoji),1)):Object(o["d"])("",!0),Object(o["f"])("div",u,Object(o["n"])(t.amount)+"₴",1),Object(o["f"])("div",d,Object(o["n"])(t.description),1),t.hasYoutube>0?(Object(o["g"])(),Object(o["c"])(p,{key:1})):Object(o["d"])("",!0)],8,["onClick"]),t.hasYoutube&&e.opened===n?(Object(o["g"])(),Object(o["c"])("div",s,[(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["l"])(t.youtube,(function(e){return Object(o["g"])(),Object(o["c"])(O,{youtube:e},null,8,["youtube"])})),256))])):Object(o["d"])("",!0)])],2)})),256))],64)}n("d81d");var l=n("5530"),j=n("d4ec"),p=n("bee2"),O=n("262e"),f=n("2caf"),y=n("9ab4"),m=Object(o["o"])("data-v-5085d017");Object(o["j"])("data-v-5085d017");var h={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},v=Object(o["f"])("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),g=Object(o["f"])("path",{fill:"currentColor",d:"M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"},null,-1);Object(o["h"])();var w=m((function(e,t,n,c,r,a){return Object(o["g"])(),Object(o["c"])("svg",h,[v,g])})),S=n("ce1f"),k=function(e){Object(O["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return n}(S["b"]);k.render=w,k.__scopeId="data-v-5085d017";var I=k,Y=Object(o["o"])("data-v-c34b34a0");Object(o["j"])("data-v-c34b34a0");var _={class:"wrapper"};Object(o["h"])();var M=Y((function(e,t,n,c,r,a){return Object(o["g"])(),Object(o["c"])("div",_,[Object(o["f"])("iframe",{src:"https://www.youtube.com/embed/"+e.youtube.id+"".concat(e.youtube.start?"?start="+e.youtube.start:""),frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},"\n    ",8,["src"])])})),D=function(e){Object(O["a"])(n,e);var t=Object(f["a"])(n);function n(){return Object(j["a"])(this,n),t.apply(this,arguments)}return n}(S["b"]);D=Object(y["a"])([Object(S["a"])({props:{youtube:Object}})],D);var x=D;n("866a");x.render=M,x.__scopeId="data-v-c34b34a0";var P=x;n("99af"),n("a15b"),n("13d5");function T(e){var t=!1;return e.stages.reduce((function(e,n,o){var c=!t&&!n.ready;return c&&(t=!0),"".concat(e,"\n")+"".concat(c?"##### ":"")+"**".concat(o+1," ").concat(n.done?"✅":n.ready?"⬜":n.emoji," ").concat(n.amount,"** — ").concat(n.description)+"".concat(n.youtube&&n.youtube.length>0?" (".concat(B(n.youtube),")"):"")}),"")+"\n\n##### >>>> [Stream Pass](https://pass.nkate.com/) <<<<"}function B(e){return 1===e.length?"[Дивитись](".concat(C(e[0]),")"):"Дивитись: "+e.map((function(e,t){return"[".concat(t+1," частина](").concat(C(e),")")})).join(", ")}function C(e){return"https://www.youtube.com/watch?v=".concat(e.id).concat(e.start?"&start="+e.start:"")}var A={title:"Season 1",stages:[{amount:1e3,description:"Допроходимо Clustertruck (згорю) 🔥",ready:!0,done:!0,youtube:[{id:"mvSQYobMn68"},{id:"MG54wswdgFM"},{id:"4uYKSIF9GcA"}]},{amount:2e3,description:"Джаст чутінг - відповідаю на анонімні культурні питання (буду червоніти)",ready:!0,done:!0,youtube:[{id:"OAT2_FYVA70",start:11069}]},{amount:3e3,description:" Кукінг стрім - готуємо бургери",ready:!0,done:!0,youtube:[{id:"JVfNPWWOfgE"}]},{amount:4e3,description:"Граю у Острів",ready:!0,done:!0,youtube:[{id:"lV_DK_Dit3Y"},{id:"LnKQTnOec_g"},{id:"HQDhlxcS4kQ"},{id:"LcDMLcugzgY"}]},{amount:5e3,description:"Граю у Spec Ops: The Line",ready:!0,done:!0,youtube:[{id:"dmHVTxIT804"}]},{amount:7e3,description:"Проходимо Ori and the Blind Forest (буду плакати) 🔥🔥",ready:!0,done:!0,youtube:[{id:"3JTdBa4f3oA"},{id:"gLMgvBUYCis"},{id:"guKqlKbt9nw"},{id:"YDfDItEXF_c",start:8853},{id:"QVJ7tXDeuUI"}]},{amount:8e3,description:"DIY - робимо штучний бонсай / працюємо з епоксидною смолою (надихаюсь токсичності)",ready:!0},{amount:1e4,emoji:"✋",description:"Граємо у Metal Gear Solid V: The Phantom Pain (моє знайомство з Кодзіма)",ready:!0,done:!0,youtube:[{id:"MIsojUshbBI"}]},{amount:12500,emoji:"🥑",description:"Minecraft (збираємось всі разом на город)",ready:!0},{amount:15e3,emoji:"💣",description:"DARK SOULS III 🔥🔥🔥",ready:!0,done:!0,youtube:[{id:"dDkEJhpWIxg"},{id:"tgqAXL6ya6c"},{id:"LZIgOlat-y0"},{id:"N3EThfuDB-c"},{id:"LTQVwX39Au0"},{id:"r_Y0a4jr9h8"},{id:"HOragHxsBU8"},{id:"1Bt79rMr-S4"},{id:"wVvjjhhNTPI"},{id:"1Bw9u-silHg"},{id:"rDFYX-SD-3o"},{id:"d2PdRIxp3FQ"},{id:"jeOZ3N60r4o"},{id:"iUp2I1oXydE"},{id:"vHMBxk6WzgY"},{id:"Rod6vBo8UWc"},{id:"VBcynV_RGsU"},{id:"u9qajANr9o8"},{id:"IzoOiI-yu3g"}]},{amount:25e3,emoji:"💀",description:"Пройти Alien: Isolation (мінус сердечко)",ready:!0},{amount:1e5,emoji:"🤫",description:"X"}]},L={title:"Season 2",stages:[{amount:5e3,description:"Граю Cuphead",emoji:"☕🤕",ready:!0,done:!0},{amount:1e4,description:"Марафон: 10 днів по 10 годин",emoji:"🏃‍♀️",ready:!0,done:!0},{amount:15e3,description:"Граю Hellblade",emoji:"😰",ready:!0,done:!1},{amount:2e4,description:"Граю Ori and the Will of the Wisps",emoji:"😭",ready:!0,done:!0},{amount:25e3,description:"Йога стрім",emoji:"🧘‍♀️",ready:!0,done:!1},{amount:3e4,description:"Граю TES: Skyrim",emoji:"🧙‍♂️",ready:!0,done:!1},{amount:35e3,description:"Кукінг стрім",emoji:"👩‍🍳",ready:!0,done:!0},{amount:4e4,description:"Граю Control",emoji:"👩‍🦰",ready:!0,done:!1},{amount:45e3,description:"Граю Sekiro",emoji:"🤺",ready:!1,done:!1},{amount:5e4,description:"Заводимо Patreon зі смаколиками",emoji:"🍪",ready:!1,done:!1}]},V=[L,A],W=function(e){Object(O["a"])(n,e);var t=Object(f["a"])(n);function n(){var e;return Object(j["a"])(this,n),e=t.apply(this,arguments),e.seasons=V,e.stages=[],e.opened=null,e}return Object(p["a"])(n,[{key:"mounted",value:function(){this.setCurrentSeason(this.seasons[0])}},{key:"setCurrentSeason",value:function(e){this.opened=null,this.currentSeason=e,this.stages=e.stages.map((function(e){return Object(l["a"])(Object(l["a"])({},e),{},{hasYoutube:!!e.youtube&&e.youtube.length>0})}))}},{key:"renderWidget",value:function(e){alert(T(e))}}]),n}(S["b"]);W=Object(y["a"])([Object(S["a"])({components:{ArrowIcon:I,YoutubeEmbed:P}})],W);var E=W;n("3cf7");E.render=b;var H=E;Object(o["b"])(H).mount("#app")},d5e8:function(e,t,n){}});
//# sourceMappingURL=app.3bd96846.js.map