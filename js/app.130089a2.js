(function(){var t={772:function(){},990:function(t,s,i){var e={"./bear.gif":54,"./cat.gif":148,"./dog.gif":119,"./fox.gif":810,"./hedgehog.gif":205,"./lion.gif":209,"./monkey.gif":289,"./mouse.gif":407,"./otter.gif":391,"./panda.gif":266,"./parrot.gif":363,"./paw-prints.gif":384,"./rabbit.gif":623,"./raccoon.gif":471,"./snake.gif":827,"./spouting-whale.gif":940,"./star.gif":65,"./sun.gif":312,"./thinking-face.gif":34,"./tiger.gif":837,"./turtle.gif":914,"./wolf.gif":702};function n(t){var s=o(t);return i(s)}function o(t){if(!i.o(e,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e[t]}n.keys=function(){return Object.keys(e)},n.resolve=o,t.exports=n,n.id=990},482:function(t,s,i){"use strict";var e=i(144),n=i(726),o=function(){var t=this,s=t._self._c;return s(n.Z,[s("router-view")],1)},r=[],u={name:"App",data:()=>({})},a=u,c=i(1),l=(0,c.Z)(a,o,r,!1,null,null,null),f=l.exports,p=i(345),g=i(149),m=function(){var t=this,s=t._self._c;t._self._setupProxy;return s(g.Z,{staticClass:"main_conponent"},[s("h1",[t._v("나와 어울리는 동물은?")]),s("img",{staticClass:"mainImg",attrs:{src:i(34),alt:"main"}}),s("p",[t._v("재미로보는 MBTI 유형별"),s("br"),t._v(" 어울리는 동물 테스트")]),s("router-link",{staticClass:"goTest",attrs:{to:{name:"test"}}},[t._v("테스트하러가기")])],1)},h=[],d=i(772),v=i.n(d),_=v(),b=(0,c.Z)(_,m,h,!1,null,"ea7fe0d2",null),x=b.exports,k=i(675),y=i(951),w=function(){var t=this,s=t._self._c;return s(g.Z,{staticClass:"test_content"},[s(k.Z,{staticClass:"progress_bar",attrs:{height:"25",color:"#5eb5e0"},model:{value:t.progressValue,callback:function(s){t.progressValue=s},expression:"progressValue"}},[s("span",[t._v(" "+t._s(t.count?Math.ceil(t.count):1)+" / 12")])]),s(y.xy,{attrs:{mode:"out-in"}},t._l(t.questionsList,(function(i){return t.count-1==i.id?s("div",{key:i.id,staticClass:"questions_wrap"},[s("div",{staticClass:"qestions_title"},[s("h1",[t._v("Q. "+t._s(t.count?Math.ceil(t.count):1))]),s("h2",[t._v(t._s(i.title))])]),s("button",{staticClass:"result_btn btnA",on:{click:function(s){return t.resultA()}}},[t._v(t._s(i.A))]),s("button",{staticClass:"result_btn btnB",on:{click:function(s){return t.resultB()}}},[t._v(t._s(i.B))])]):t._e()})),0)],1)},C=[],Z=i(629),P={name:"Questions",data:()=>({mbti:"",count:1,progressValue:100/12,E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0}),components:{router:M},methods:{...(0,Z.nv)(["getQuestions"]),plusNum(){var t=this.$router;this.count<12?(this.count+=1,this.progressValue=100/12*this.count):this.count>=12&&(2==this.E?this.mbti+="E":this.mbti+="I",2==this.S?this.mbti+="S":this.mbti+="N",2==this.T?this.mbti+="T":this.mbti+="F",2==this.J?this.mbti+="J":this.mbti+="P",t.push({name:"result",query:{value:this.mbti}}))},resultA(){this.plusNum();const t=this.questionsList[this.count-2].type;"EI"==t&&this.E++,"SN"==t&&this.S++,"TF"==t&&this.T++,"JP"==t&&this.J++},resultB(){this.plusNum();const t=this.questionsList[this.count-2].type;"EI"==t&&this.I++,"SN"==t&&this.N++,"TF"==t&&this.F++,"JP"==t&&this.P++}},computed:(0,Z.Se)(["questionsList"]),created(){this.getQuestions()}},O=P,S=(0,c.Z)(O,w,C,!1,null,null,null),T=S.exports,q=function(){var t=this,s=t._self._c;return s(g.Z,{staticClass:"result_conponent"},[t._l(t.resultList,(function(e){return e.mbti==t.$route.query.value?s("div",{key:e.id,staticClass:"result_wrap"},[s("h1",[t._v("나와 어울리는 동물은 바로")]),s("img",{staticClass:"mainImg",attrs:{src:i(990)(`./${e.img}`),alt:"main"}}),s("h2",[t._v(t._s(e.title+e.animal))]),s("div",{staticClass:"result_box"},[s("p",[t._v(t._s(e.content))])]),s("div",{staticClass:"soulmate"},[t._l(t.resultList,(function(n){return n.mbti==e.soulmate?s("div",{key:n.id,staticClass:"soulmate_good"},[s("h3",[t._v("나와 잘 맞는 친구")]),s("img",{attrs:{src:i(990)(`./${n.img}`)}}),s("p",[t._v(t._s(n.title+n.animal))])]):t._e()})),t._l(t.resultList,(function(n){return n.mbti==e.bad?s("div",{key:n.id,staticClass:"soulmate_bad"},[s("h3",[t._v("나와 안 맞는 친구")]),s("img",{attrs:{src:i(990)(`./${n.img}`)}}),s("p",[t._v(t._s(n.title+n.animal))])]):t._e()}))],2)]):t._e()})),s("div",{staticClass:"btn_flex"},[s("router-link",{staticClass:"goTest",attrs:{to:"/"}},[t._v("다시 검사하기")]),s("a",{staticClass:"goKakao",on:{click:t.kakaoShare}},[t._v("카카오톡 공유하기")])],1),s("div",{staticClass:"pitapet_link"},[s("p",[t._v("반려동물을 기르고 계시다면? ")]),s("router-link",{staticClass:"pitapet_btn",attrs:{to:"#"}},[t._v("반려동물 자랑하러가기")])],1)],2)},L=[],N={name:"result",methods:{...(0,Z.nv)(["getResult"]),kakaoShare(){window.Kakao.Share.sendCustom({templateId:88462,installTalk:!0})}},computed:(0,Z.Se)(["resultList"]),created(){this.getResult()}},j=N,E=(0,c.Z)(j,q,L,!1,null,"687c0b81",null),I=E.exports;e.ZP.use(p.ZP);var M=new p.ZP({mode:"history",base:"/animal-test/",routes:[{path:"/",name:"main",component:x},{path:"/TestView",name:"test",component:T,props:!0},{path:"/ResultView",name:"result",component:I,props:!0}]}),Q=i(945);const F={question:[]},R={questionsList:t=>t.question},V={async getQuestions({commit:t}){const s=await Q.Z.get("http://localhost:3000/question");t("setQuestions",s.data)}},J={setQuestions:(t,s)=>t.question=s};var $={state:F,getters:R,actions:V,mutations:J};const A={result:[]},B={resultList:t=>t.result},K={async getResult({commit:t}){const s=await Q.Z.get("http://localhost:3000/result");t("setResult",s.data)}},D={setResult:(t,s)=>t.result=s};var U={state:A,getters:B,actions:K,mutations:D};e.ZP.use(Z.ZP);var z=new Z.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{QuestionModule:$,ResultModule:U}}),G=i(154);e.ZP.use(G.Z);var H=new G.Z({});e.ZP.config.productionTip=!1;const W="314f25c5c54567722bd749e73589765e";window.Kakao.init(W),new e.ZP({router:M,store:z,vuetify:H,render:t=>t(f)}).$mount("#app")},54:function(t,s,i){"use strict";t.exports=i.p+"img/bear.0a0e8459.gif"},148:function(t,s,i){"use strict";t.exports=i.p+"img/cat.c9d14edf.gif"},119:function(t,s,i){"use strict";t.exports=i.p+"img/dog.2183caf3.gif"},810:function(t,s,i){"use strict";t.exports=i.p+"img/fox.6b550f5c.gif"},205:function(t,s,i){"use strict";t.exports=i.p+"img/hedgehog.39bf71fc.gif"},209:function(t,s,i){"use strict";t.exports=i.p+"img/lion.2e4433ce.gif"},289:function(t,s,i){"use strict";t.exports=i.p+"img/monkey.6a88fb9e.gif"},407:function(t,s,i){"use strict";t.exports=i.p+"img/mouse.891a0b19.gif"},391:function(t,s,i){"use strict";t.exports=i.p+"img/otter.09f11dcc.gif"},266:function(t,s,i){"use strict";t.exports=i.p+"img/panda.7e069440.gif"},363:function(t,s,i){"use strict";t.exports=i.p+"img/parrot.6ce4bdaf.gif"},384:function(t,s,i){"use strict";t.exports=i.p+"img/paw-prints.e463e372.gif"},623:function(t,s,i){"use strict";t.exports=i.p+"img/rabbit.0e13f6dd.gif"},471:function(t,s,i){"use strict";t.exports=i.p+"img/raccoon.717b9ec8.gif"},827:function(t,s,i){"use strict";t.exports=i.p+"img/snake.85f9f8a0.gif"},940:function(t,s,i){"use strict";t.exports=i.p+"img/spouting-whale.da7fba8a.gif"},65:function(t,s,i){"use strict";t.exports=i.p+"img/star.7a024a46.gif"},312:function(t,s,i){"use strict";t.exports=i.p+"img/sun.24a84238.gif"},34:function(t,s,i){"use strict";t.exports=i.p+"img/thinking-face.fdc2c7e2.gif"},837:function(t,s,i){"use strict";t.exports=i.p+"img/tiger.9c36a348.gif"},914:function(t,s,i){"use strict";t.exports=i.p+"img/turtle.9e1cf8b4.gif"},702:function(t,s,i){"use strict";t.exports=i.p+"img/wolf.0c44fe2c.gif"}},s={};function i(e){var n=s[e];if(void 0!==n)return n.exports;var o=s[e]={exports:{}};return t[e](o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(s,e,n,o){if(!e){var r=1/0;for(l=0;l<t.length;l++){e=t[l][0],n=t[l][1],o=t[l][2];for(var u=!0,a=0;a<e.length;a++)(!1&o||r>=o)&&Object.keys(i.O).every((function(t){return i.O[t](e[a])}))?e.splice(a--,1):(u=!1,o<r&&(r=o));if(u){t.splice(l--,1);var c=n();void 0!==c&&(s=c)}}return s}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[e,n,o]}}(),function(){i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,{a:s}),s}}(),function(){i.d=function(t,s){for(var e in s)i.o(s,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.p="/animal-test/"}(),function(){var t={143:0};i.O.j=function(s){return 0===t[s]};var s=function(s,e){var n,o,r=e[0],u=e[1],a=e[2],c=0;if(r.some((function(s){return 0!==t[s]}))){for(n in u)i.o(u,n)&&(i.m[n]=u[n]);if(a)var l=a(i)}for(s&&s(e);c<r.length;c++)o=r[c],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(l)},e=self["webpackChunkanimal_test"]=self["webpackChunkanimal_test"]||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}();var e=i.O(void 0,[998],(function(){return i(482)}));e=i.O(e)})();
//# sourceMappingURL=app.130089a2.js.map