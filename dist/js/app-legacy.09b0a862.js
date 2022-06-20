(function(){"use strict";var e={9013:function(e,t,a){a(6992),a(8674),a(9601),a(7727);var n=a(144),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e.hasPlayers?a("BalanceList",{attrs:{players:e.players}}):e._e(),e.hasPlayers?a("AppLog",{attrs:{appEvents:e.appEvents}}):e._e(),a("main",{staticClass:"base"},[a("h1",{staticClass:"base__title"},[e._v("Монополия")]),a("div",{staticClass:"base__players"},[a("p",{staticClass:"base__notification",class:{"base__notification-hide":e.hasPlayers}},[e._v(" "+e._s(e.defaultNotification)+" ")]),a("div",{staticClass:"base__wrapper"},[a("div",{staticClass:"base__btn-wrapper"},[a("AddPlayersBtn",{staticClass:"base__add-players-btn",on:{"get-new-player":e.addNewPlayer}})],1),e.hasPlayers?a("div",{staticClass:"base__cards"},e._l(e.players,(function(t,n){return a("PlayerCard",{key:n,attrs:{name:t.name,balance:t.balance,isActive:t.isActive}},[a("BalanceOperations",{attrs:{currentIndex:n,players:e.players},on:{"increase-balance":e.increaseBalance,"decrease-balance":e.decreaseBalance}}),a("MoneySending",{attrs:{players:e.players,currentIndex:n},on:{"send-sum":e.sendSumToOtherPlayer}})],1)})),1):e._e()])])])],1)},i=[],r=(a(8862),a(8309),a(7042),a(2222),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"add-players-btn",on:{click:e.getNewPlayer}},[e._v("Добавить игрока")])}),l=[],c={data:function(){return{player:{name:"",balance:15e6,isActive:!0}}},methods:{getNewPlayer:function(){while(!this.player.name)this.player.name=prompt("Ведите имя игрока");this.$emit("get-new-player",this.player.name,this.player.balance,this.player.isActive),this.player.name=""}}},o=c,u=a(1001),p=(0,u.Z)(o,r,l,!1,null,"5eaf2a20",null),d=p.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"player-card",class:{inactive:!e.isActive}},[a("h3",{staticClass:"player-card__name"},[e._v(e._s(e.name))]),a("div",{staticClass:"player-card__balance balance"},[a("span",{staticClass:"balance__title"},[e._v("Баланс игрока(монет):")]),e._v(" "+e._s(e.formatBalance)+" ")]),e._t("default")],2)},v=[],_=(a(9653),a(4916),a(3123),a(9600),{components:{},props:{name:String,balance:Number,isActive:Boolean},methods:{},computed:{formatBalance:function(){for(var e=this.balance+"",t=e.split("").reverse(),a=[],n=0;n<t.length;n++)n%3===0?a.push(t[n]+" "):a.push(t[n]);return a.reverse().join("")}}}),m=_,f=(0,u.Z)(m,h,v,!1,null,"fab8e948",null),y=f.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"balance-operations"},[a("div",{staticClass:"balance-operations__in balance-operation"},[e._m(0),a("div",{staticClass:"balance-operation__main"},[a("span",[e._v("Сумма(тыс. монет): ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.balanceIn,expression:"balanceIn"}],staticClass:"balance-operation__input",attrs:{type:"text",disabled:!e.players[e.currentIndex].isActive},domProps:{value:e.balanceIn},on:{input:function(t){t.target.composing||(e.balanceIn=t.target.value)}}}),a("button",{staticClass:"balance-operation__btn",on:{click:e.increaseBalance}},[e._v(" > ")])])]),a("div",{staticClass:"balance-operations__out balance-operation"},[e._m(1),a("div",{staticClass:"balance-operation__main"},[a("span",[e._v("Сумма(тыс. монет): ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.balanceOut,expression:"balanceOut"}],staticClass:"balance-operation__input",attrs:{type:"text",disabled:!e.players[e.currentIndex].isActive},domProps:{value:e.balanceOut},on:{input:function(t){t.target.composing||(e.balanceOut=t.target.value)}}}),a("button",{staticClass:"balance-operation__btn",on:{click:e.decreaseBalance}},[e._v(" > ")])])])])},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"balance-operation__title"},[a("strong",[e._v("Приход")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"balance-operation__title"},[a("strong",[e._v("Расход")])])}],C={props:{currentIndex:Number,players:Array},data:function(){return{balanceIn:"",balanceOut:""}},methods:{increaseBalance:function(){this.$emit("increase-balance",1e3*this.balanceIn,this.currentIndex),this.balanceIn=""},decreaseBalance:function(){this.$emit("decrease-balance",1e3*this.balanceOut,this.currentIndex),this.balanceOut=""}}},w=C,x=(0,u.Z)(w,g,b,!1,null,"57949134",null),S=x.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"money-sending"},[a("h4",{staticClass:"money-sending__title"},[e._v("Отправить деньги")]),a("div",{staticClass:"money-sending__main"},[a("div",{staticClass:"money-sending__recipient"},[a("div",[e._v("Игроку:")]),a("form",{staticClass:"money-sending__choice choice"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.recepient,expression:"recepient"}],staticClass:"choice__slct",attrs:{disabled:!e.players[e.currentIndex].isActive},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.recepient=t.target.multiple?a:a[0]},e.getPlayerIndex]}},e._l(e.players,(function(t,n){return a("option",{key:n,attrs:{disabled:!e.players[n].isActive||n===e.currentIndex},domProps:{value:n}},[e._v(" "+e._s(t.name)+" ")])})),0)])]),a("div",{staticClass:"money-sending__sum sending"},[a("span",[e._v("Сумма(тыс. монет): ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sendingSum,expression:"sendingSum"}],staticClass:"sending__inp",attrs:{type:"text",disabled:!e.players[e.currentIndex].isActive},domProps:{value:e.sendingSum},on:{input:function(t){t.target.composing||(e.sendingSum=t.target.value)}}}),a("button",{staticClass:"sending__btn",attrs:{disabled:!e.players[e.currentIndex].isActive},on:{click:e.sendSumToOtherPlayer}},[e._v(" Отправить ")])])])])},A=[],I={props:{players:Array,currentIndex:Number},data:function(){return{sendingSum:"",recepient:0}},methods:{sendSumToOtherPlayer:function(){console.log(this.recepient),this.$emit("send-sum",1e3*this.sendingSum,this.currentIndex,this.recepient)},getPlayerIndex:function(e){this.recepient=e.target.selectedIndex,console.log(this.recepient)}},computed:{}},E=I,P=(0,u.Z)(E,O,A,!1,null,"6d02aa73",null),B=P.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"balance-list",class:{hide:e.hide}},[a("div",{staticClass:"balance-list__header"},[a("h3",{staticClass:"balance-list__title"},[e._v("Текущий баланс игроков:")]),a("span",{on:{click:e.hideList}},[e._v(e._s(e.hideShow))])]),a("div",{staticClass:"balance-list__main"},[a("div",{staticClass:"balance-list__player-name lists"},[e._m(0),a("ul",{staticClass:"lists__list"},e._l(e.players,(function(t,n){return a("li",{key:n,staticClass:"lists__item",class:{inactive:!t.isActive}},[e._v(" "+e._s(t.name)+" ")])})),0)]),a("div",{staticClass:"balance-list__player__balance lists"},[e._m(1),a("ul",{staticClass:"lists__list"},e._l(e.players,(function(t,n){return a("li",{key:n,staticClass:"balance-list__item",class:{inactive:!t.isActive}},[e._v(" "+e._s(e.formatBalance(t.balance))+" ")])})),0)])])])},T=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lists__title"},[a("strong",[e._v("Имя игрока")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lists__title"},[a("strong",[e._v("Баланс игрока(монет)")])])}],k={props:{players:Array},data:function(){return{hide:!1,hideShow:"Свернуть"}},methods:{formatBalance:function(e){for(var t=e+"",a=t.split("").reverse(),n=[],s=0;s<a.length;s++)s%3===0?n.push(a[s]+" "):n.push(a[s]);return n.reverse().join("")},hideList:function(){var e=this;this.hide?(this.hide=!1,this.hideShow="Свернуть"):(this.hide=!0,setTimeout((function(){e.hideShow="Развернуть"}),300))}}},$=k,L=(0,u.Z)($,N,T,!1,null,"4c7c19a3",null),j=L.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-log",class:{hide:e.hide}},[a("div",{staticClass:"app-log__header"},[a("h3",{staticClass:"app-log__title"},[e._v("Лог событий:")]),a("span",{on:{click:e.hideList}},[e._v(e._s(e.hideShow))])]),a("ul",{staticClass:"app-log__list"},e._l(e.appEvents,(function(t,n){return a("li",{key:n},[e._v(" "+e._s(e.getLogText(t))+" ")])})),0)])},F=[],M={props:{appEvents:Array},data:function(){return{hide:!1,hideShow:"Свернуть"}},methods:{getLogText:function(e){switch(+e.eventType){case 0:return"".concat(e.eventTime," Добавлен новый игрок ").concat(e.playerFirst);case 1:return"".concat(e.eventTime," Игрок ").concat(e.playerFirst," получил ").concat(this.formatBalance(e.sumIn)," монет");case 2:return"".concat(e.eventTime," Игрок ").concat(e.playerFirst," потерял ").concat(this.formatBalance(e.sumOut)," монет");case 3:return"".concat(e.eventTime," Игрок ").concat(e.playerFirst," перевел игроку ").concat(e.playerSecond," ").concat(this.formatBalance(e.sumOut)," монет");case 4:return"".concat(e.eventTime," Игрок ").concat(e.playerFirst," выбыл из игры")}},formatBalance:function(e){for(var t=e+"",a=t.split("").reverse(),n=[],s=0;s<a.length;s++)s%3===0?n.push(a[s]+" "):n.push(a[s]);return n.reverse().join("")},hideList:function(){var e=this;this.hide?(this.hide=!1,this.hideShow="Свернуть"):(this.hide=!0,setTimeout((function(){e.hideShow="Развернуть"}),300))}}},D=M,J=(0,u.Z)(D,Z,F,!1,null,"26de4fc8",null),H=J.exports,Y={name:"App",components:{AddPlayersBtn:d,PlayerCard:y,BalanceOperations:S,MoneySending:B,BalanceList:j,AppLog:H},data:function(){return{hasPlayers:!1,defaultNotification:"Список игроков пуст. Добавьте первого игрока.",players:[],appEvents:[]}},mounted:function(){localStorage.length&&(confirm("Вы желаете продолжить игру?")?(this.hasPlayers=!0,this.players=JSON.parse(localStorage.getItem("players")),this.appEvents=JSON.parse(localStorage.getItem("appEvents")),console.log(this.players)):localStorage.clear())},methods:{addNewPlayer:function(e,t,a){var n={name:e,balance:t,isActive:a};this.players.push(n),this.hasPlayers=!0,this.addNewEvent(0,0,0,e)},addNewEvent:function(){var e=new Date,t={eventTime:this.formatDate(e),eventType:arguments.length<=0?void 0:arguments[0],sumIn:arguments.length<=1?void 0:arguments[1],sumOut:arguments.length<=2?void 0:arguments[2],playerFirst:arguments.length<=3?void 0:arguments[3],playerSecond:arguments.length<=4?void 0:arguments[4]};this.appEvents.push(t);var a=JSON.stringify(this.players),n=JSON.stringify(this.appEvents);localStorage.setItem("players",a),localStorage.setItem("appEvents",n)},increaseBalance:function(e,t){this.players[t].balance+=+e,this.addNewEvent(1,e,0,this.players[t].name)},decreaseBalance:function(e,t){this.players[t].balance-=+e,this.checkActivity(t),this.addNewEvent(2,0,e,this.players[t].name)},sendSumToOtherPlayer:function(e,t,a){this.players[t].balance-=+e,this.players[a].balance+=+e,console.log(t),console.log(a),this.checkActivity(t),this.addNewEvent(3,0,e,this.players[t].name,this.players[a].name)},checkActivity:function(e){var t=this;this.players[e].balance<-5e6&&(this.players[e].isActive=!1,setTimeout((function(){t.addNewEvent(4,0,0,t.players[e].name)}),1))},formatDate:function(e){var t=e.getDate(),a=e.getMonth().length>1?e.getMonth():"0"+e.getMonth(),n=e.getFullYear(),s=e.getHours(),i=e.getMinutes().length>1?e.getMinutes():("0"+e.getMinutes()).slice(-2),r=e.getSeconds().length>1?e.getSeconds():("0"+e.getSeconds()).slice(-2);return"".concat(t,".").concat(a,".").concat(n," ").concat(s,":").concat(i,":").concat(r)}}},q=Y,z=(0,u.Z)(q,s,i,!1,null,null,null),G=z.exports;n.Z.config.productionTip=!1,new n.Z({render:function(e){return e(G)}}).$mount("#app")}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,i){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],i=e[u][2];for(var l=!0,c=0;c<n.length;c++)(!1&i||r>=i)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(l=!1,i<r&&(r=i));if(l){e.splice(u--,1);var o=s();void 0!==o&&(t=o)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,s,i]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,i,r=n[0],l=n[1],c=n[2],o=0;if(r.some((function(t){return 0!==e[t]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(c)var u=c(a)}for(t&&t(n);o<r.length;o++)i=r[o],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},n=self["webpackChunkmonopolia"]=self["webpackChunkmonopolia"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9013)}));n=a.O(n)})();
//# sourceMappingURL=app-legacy.09b0a862.js.map