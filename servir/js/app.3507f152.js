(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/servir/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0134":function(e,t,a){"use strict";a("13d3")},"034f":function(e,t,a){"use strict";a("85ec")},"0dd2":function(e,t,a){e.exports=a.p+"img/friends.fdc84f3a.png"},"13d3":function(e,t,a){},1771:function(e,t,a){var n={"./conversation.png":"dfb9","./friends.png":"0dd2","./happy.png":"6d5d","./heart.png":"fa49","./hug.png":"e97e","./loading.icon":"c6b4","./loading.icon.vue":"c6b4","./love.png":"422c","./smileyface.icon":"78e9","./smileyface.icon.vue":"78e9"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="1771"},"422c":function(e,t,a){e.exports=a.p+"img/love.2b36ac21.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("img",{attrs:{src:a("1771")("./"+e.questions[e.currentQuestion].backgroundImage)}})]),n("div",{staticClass:"content"},[e.isCompleted?e._e():n("progress-bar",{attrs:{"current-step":e.currentQuestion+1,"total-steps":e.questions.length}}),e.isCompleted?e._e():n("question",{attrs:{"question-data":e.questions[e.currentQuestion],"next-step":e.nextStep}}),e.isCompleted?n("div",{staticStyle:{color:"#616161"}},[e.isLoading?n("div",[n("Loading-Icon"),n("h3",[e._v("Cargando resultado...")])],1):e._e(),e.isLoading?e._e():n("div",[n("SmileyFaceIcon"),n("h2",{staticStyle:{"text-align":"center"}},[e._v("¡Estás llamado para servir!")]),n("div",[n("p",[e._v(e._s(e.verses[e.selectedVerse].text))]),n("i",[e._v(e._s(e.verses[e.selectedVerse].chapter))])])],1)]):e._e()],1)])},s=[],o=(a("d81d"),a("a434"),a("2909")),i=a("5530"),c=[{question:"Un amigo/a está pasando por una situación difícil, ¿qué harías para ayudarle?",options:["Escuchar","Aconsejar","Animar","Consolar"],backgroundImage:"hug.png",multiple:!1},{question:"Habrá una fiesta en tu casa dentro de unas horas. ¿Qué harías para ayudar?",options:["Ayudar con la comida","Limpiar la casa","Mantener presentable la casa","Lavar los platos"],backgroundImage:"happy.png",multiple:!1},{question:"¿Qué ha sido lo más reciente que has hecho para ayudar en el hogar?",options:["Cocinar","Limpiar y ordenar la casa","Lavar los platos","Hacer compras/mandados","Lavar y planchar la ropa","Sacar la basura"],backgroundImage:"heart.png",multiple:!1},{question:"¿Qué has hecho por algún indigente o alguien en una dificultad financiera?",options:["Ofrendar dinero","Preguntar por sus necesidades","Ofrecer hospedaje en caso de necesitar","Donar ropa","Comprar y ofrecer comida","Ayudar a comprar víveres","Orar por él/ella"],backgroundImage:"love.png",multiple:!0},{question:"¿Algo que hayas hecho en la Iglesia?",options:["Dar la bienvenida a alguien nuevo","Ordenar algún salón","Dar buenos días","Preguntar a los hermanos cómo está","Ayudar en algún ministerio","Ofrecer ayudar a algún hermano","Ofrecer transporte a algún hermano"],backgroundImage:"friends.png",multiple:!0},{question:"¿Algo que hayas hecho durante la pandemia por otros?",options:["Orar por otros","Preguntar cómo se encuentra la otra persona","Hacer algún mandado","Animar","Escuchar","Compartir del evangelio","Compartir algún versículo"],backgroundImage:"conversation.png",multiple:!0}],l=c,u=l,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"progress-bar",style:e.getTotalSteps},e._l(e.currentStep,(function(e,t){return a("div",{key:t,staticClass:"step"})})),0)},p=[],f=(a("a9e3"),{name:"progressBar",props:{currentStep:Number,totalSteps:Number},computed:{getTotalSteps:function(){return{gridTemplateColumns:"repeat(".concat(this.totalSteps,", 1fr)")}}}}),h=f,g=(a("0134"),a("2877")),m=Object(g["a"])(h,d,p,!1,null,"27d991ea",null),v=m.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"question-container"},[a("div",{staticClass:"heading"},[e._v(" "+e._s(e.questionData.question)+" "+e._s(e.questionData.multiple?"(multiple)":"")+" ")]),a("div",{staticClass:"options"},e._l(e.questionData.options,(function(t,n){return a("div",{key:n,staticClass:"option",class:{selected:e.selectedOptions.includes(n)},on:{click:function(t){return e.selectOption(n)}}},[e._v(" "+e._s(t)+" ")])})),0),a("div",{staticClass:"next",on:{click:e.goNext}},[e._v("Siguiente")])])},y=[],x=(a("c975"),{name:"question",props:{questionData:Object,nextStep:Function},data:function(){return{selectedOptions:[]}},methods:{goNext:function(){this.selectedOptions.length>0&&(this.selectedOptions=[],this.nextStep())},selectOption:function(e){if(this.questionData.multiple){var t=this.selectedOptions.indexOf(e);t<0?this.selectedOptions.push(e):this.selectedOptions.splice(t,1)}else this.selectedOptions=[],this.selectedOptions[0]=e}}}),O=x,_=(a("ca49"),Object(g["a"])(O,b,y,!1,null,"5245593b",null)),q=_.exports,w=a("c6b4"),C=a("78e9"),j=[{text:"Les hablo así hermanos, porque ustedes han sido llamados a ser libres; pero no se valgan de esa libertad para dar rienda suelta a sus pasiones. Más bien sírvanse unos a otros con amor.",chapter:"Galatas 5:13 (NVI)"},{text:"Entonces Jesús se sentó, llamó a los doce y les dijo: Si alguno quiere ser el primero, que sea el último de todos y el servidor de todos.",chapter:"Marcos 9:35 (NVI)"},{text:"Cada uno ponga al servicio de los demás el don que haya recibido, administrando fielmente la gracia de Dios en sus diversas formas.",chapter:"1 Pedro 4:10 (NVI)"},{text:"Así alumbre vuestra luz delante de los hombres, para que vean vuestras buenas obras, y glorifiquen a vuestro Padre que está en los cielos.",chapter:"Mateo 5:16 (RV1960)"},{text:"Pues Dios no es injusto. No olvidará con cuánto esfuerzo han trabajado para él y cómo han demostrado su amor por él sirviendo a otros creyentes como todavía lo hacen.",chapter:"Hebreos 6:10 (NTV)"},{text:"Si el que te aborrece tuviere hambre, dale de comer pan, y si tuviere sed, dale de beber agua.",chapter:"Proverbios 25:21 (RV1960)"}],S={name:"App",components:{progressBar:v,question:q,LoadingIcon:w["default"],SmileyFaceIcon:C["default"]},data:function(){return{questions:null,currentQuestion:null,verses:j,isCompleted:!1,isLoading:!1,selectedVerse:null}},created:function(){var e=this;this.currentQuestion=0;var t=this.shuffleArray(u).splice(0,5);this.questions=t.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{options:Object(o["a"])(e.shuffleArray(t.options)).splice(0,4)})})),this.selectedVerse=Math.floor(Math.random()*j.length)},methods:{nextStep:function(){var e=this.currentQuestion+1;if(e<this.questions.length)this.currentQuestion=e;else{var t=this;this.isCompleted=!0,this.isLoading=!0,setTimeout((function(){t.isLoading=!1}),3e3)}},shuffleArray:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}}},k=S,I=(a("034f"),Object(g["a"])(k,r,s,!1,null,null,null)),L=I.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(L)}}).$mount("#app")},"5f5e":function(e,t,a){"use strict";a("a3e2")},6943:function(e,t,a){},"6d5d":function(e,t,a){e.exports=a.p+"img/happy.e739cc36.png"},"78e9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("svg",{attrs:{"enable-background":"new 0 0 497 497",viewBox:"0 0 497 497",xmlns:"http://www.w3.org/2000/svg"}},[a("g",[a("path",{attrs:{d:"m452.681 52.736c-4.182-2.559-8.767-4.525-13.638-5.778-1.254-4.871-3.219-9.456-5.778-13.638-3.116-5.092-10.413-5.092-13.529 0-2.56 4.182-4.525 8.768-5.779 13.638-4.87 1.254-9.455 3.219-13.638 5.778-5.092 3.116-5.092 10.412 0 13.529 4.182 2.559 8.767 4.525 13.638 5.779 1.254 4.87 3.219 9.456 5.778 13.638 3.116 5.092 10.412 5.092 13.529 0 2.559-4.182 4.524-8.767 5.778-13.638 4.87-1.254 9.456-3.219 13.638-5.779 5.093-3.117 5.093-10.413.001-13.529z",fill:"#fce3a0"}}),a("g",[a("path",{attrs:{d:"m497 248.5c0 107.199-67.879 198.545-163 233.4-26.658 9.768-55.457 15.1-85.5 15.1-137.243 0-248.5-111.257-248.5-248.5s111.257-248.5 248.5-248.5c30.022 0 58.8 5.324 85.443 15.079 95.151 34.839 163.057 126.2 163.057 233.421z",fill:"#ffce71"}}),a("path",{attrs:{d:"m171 248.5c0-107.199 67.821-198.566 162.942-233.421-26.658-9.769-55.398-15.079-85.442-15.079-137.243 0-248.5 111.257-248.5 248.5s111.257 248.5 248.5 248.5c30.044 0 58.842-5.331 85.5-15.1-95.121-34.855-163-126.201-163-233.4z",fill:"#ffb357"}})]),a("g",{attrs:{fill:"#ff8e9e"}},[a("path",{attrs:{d:"m170.14 259.168c-.063 20.152-20.629 36.424-45.934 36.345-25.306-.08-45.769-16.48-45.706-36.633.063-20.152 20.629-36.425 45.935-36.345 25.305.079 45.768 16.48 45.705 36.633z"}}),a("path",{attrs:{d:"m326.86 259.659c-.063 20.152 20.4 36.553 45.706 36.632s45.871-16.193 45.934-36.345-20.4-36.553-45.706-36.633c-25.305-.079-45.871 16.193-45.934 36.346z"}})]),a("path",{attrs:{d:"m285.53 231.493c.072-22.831-16.461-25.028-36.864-25.092-20.402-.064-36.949 2.029-37.02 24.86-.071 22.83 16.41 41.39 36.813 41.454 20.402.064 36.999-18.392 37.071-41.222z",fill:"#4c5659"}}),a("g",{attrs:{fill:"#313d40"}},[a("path",{attrs:{d:"m151.241 190.092c-.032 0-.063 0-.096 0-7.793 0-15.126 3.023-20.657 8.52-5.553 5.518-8.625 12.869-8.649 20.698-.013 4.142 3.334 7.51 7.477 7.523h.024c4.131 0 7.486-3.343 7.5-7.477.012-3.822 1.512-7.411 4.223-10.105s6.351-4.162 10.132-4.159c3.822.012 7.411 1.512 10.105 4.223s4.171 6.309 4.159 10.131c-.013 4.142 3.334 7.51 7.477 7.523h.024c4.131 0 7.487-3.343 7.5-7.477.048-16.16-13.059-29.349-29.219-29.4z"}}),a("path",{attrs:{d:"m346.192 190.703c-.032 0-.062 0-.093 0-16.118 0-29.257 13.088-29.308 29.217-.013 4.142 3.334 7.511 7.476 7.524 4.16-.021 7.511-3.334 7.524-7.476.025-7.875 6.439-14.265 14.308-14.265h.045c7.891.025 14.29 6.464 14.265 14.354-.013 4.142 3.334 7.51 7.477 7.523h.024c4.131 0 7.487-3.343 7.5-7.477.05-16.16-13.057-29.349-29.218-29.4z"}})]),a("g",{attrs:{fill:"#fce3a0"}},[a("path",{attrs:{d:"m117.551 412.666c-6.865-4.202-14.393-7.428-22.389-9.486-2.059-7.996-5.285-15.524-9.486-22.39-5.116-8.359-17.095-8.359-22.21 0-4.202 6.866-7.428 14.394-9.487 22.39-7.996 2.058-15.522 5.284-22.389 9.486-8.359 5.116-8.359 17.094 0 22.21 6.865 4.202 14.393 7.428 22.39 9.487 2.059 7.996 5.284 15.523 9.486 22.389 5.115 8.359 17.094 8.359 22.21 0 4.201-6.866 7.427-14.393 9.486-22.389 7.996-2.059 15.523-5.285 22.389-9.487 8.36-5.116 8.36-17.094 0-22.21z"}}),a("path",{attrs:{d:"m493.181 460.236c-4.182-2.559-8.767-4.525-13.638-5.778-1.254-4.871-3.219-9.456-5.778-13.638-3.116-5.092-10.413-5.092-13.529 0-2.56 4.182-4.525 8.768-5.779 13.638-4.87 1.254-9.455 3.219-13.638 5.778-5.092 3.116-5.092 10.412 0 13.529 4.182 2.559 8.767 4.525 13.638 5.779 1.254 4.87 3.219 9.456 5.778 13.638 3.116 5.092 10.412 5.092 13.529 0 2.559-4.182 4.524-8.767 5.778-13.638 4.87-1.254 9.456-3.219 13.638-5.779 5.093-3.117 5.093-10.413.001-13.529z"}})])])])])},r=[],s={name:"SmileyFaceIcon"},o=s,i=(a("d92a"),a("2877")),c=Object(i["a"])(o,n,r,!1,null,"40a2fc62",null);t["default"]=c.exports},"85ec":function(e,t,a){},a3e2:function(e,t,a){},c6b4:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("line",{attrs:{x1:"12",y1:"2",x2:"12",y2:"6"}}),a("line",{attrs:{x1:"12",y1:"18",x2:"12",y2:"22"}}),a("line",{attrs:{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"}}),a("line",{attrs:{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"}}),a("line",{attrs:{x1:"2",y1:"12",x2:"6",y2:"12"}}),a("line",{attrs:{x1:"18",y1:"12",x2:"22",y2:"12"}}),a("line",{attrs:{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"}}),a("line",{attrs:{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"}})])])},r=[],s=(a("a9e3"),{name:"LoadingIcon",props:{width:{type:Number,default:48},height:{type:Number,default:48}}}),o=s,i=(a("5f5e"),a("2877")),c=Object(i["a"])(o,n,r,!1,null,"454a79d6",null);t["default"]=c.exports},ca49:function(e,t,a){"use strict";a("cb0f")},cb0f:function(e,t,a){},d92a:function(e,t,a){"use strict";a("6943")},dfb9:function(e,t,a){e.exports=a.p+"img/conversation.401a9a60.png"},e97e:function(e,t,a){e.exports=a.p+"img/hug.0c4c00c5.png"},fa49:function(e,t,a){e.exports=a.p+"img/heart.28b884e2.png"}});
//# sourceMappingURL=app.3507f152.js.map