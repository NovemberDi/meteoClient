(function(){"use strict";var t={4902:function(t,e,s){var n=s(9242),a=(s(7658),s(3396)),i=s(7139);const o=t=>((0,a.dD)("data-v-307cffc7"),t=t(),(0,a.Cn)(),t),r=o((()=>(0,a._)("div",{class:"texture"},null,-1))),l={class:"offline"},c={class:"navPanel"};function d(t,e,s,o,d,u){const m=(0,a.up)("router-view"),h=(0,a.up)("SettingButton"),p=(0,a.up)("HomeButton"),f=(0,a.up)("HistoryButton"),y=(0,a.up)("SettingModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("div",{class:(0,i.C_)(["filter",{nightFilter:d.nightMode}])},null,2),(0,a._)("div",{class:(0,i.C_)(["nightFilter",{nightFilterOn:d.nightMode}])},null,2),(0,a._)("div",{class:(0,i.C_)(["root",{night:d.nightMode}]),onselectstart:"return false"},[(0,a.wy)((0,a._)("div",l,"сенсор недоступен",512),[[n.F8,!d.isAliveSensor]]),(0,a.Wm)(m,{class:"router",time:d.time,onOnChangeMode:e[0]||(e[0]=t=>d.nightMode=!d.nightMode),autoMode:d.autoMode,nightMode:d.nightMode,sensors:d.sensors,circleSize:d.circleSize,queryResult:d.queryResult,wsAlive:d.wsAlive,onOnQuery:u.getData},null,8,["time","autoMode","nightMode","sensors","circleSize","queryResult","wsAlive","onOnQuery"]),(0,a._)("div",c,[(0,a.Wm)(h,{onClick:e[1]||(e[1]=t=>d.settingView=!d.settingView),nightMode:d.nightMode},null,8,["nightMode"]),(0,a.Wm)(p,{nightMode:d.nightMode,onClick:e[2]||(e[2]=e=>t.$router.push("/"))},null,8,["nightMode"]),(0,a.Wm)(f,{nightMode:d.nightMode,onClick:e[3]||(e[3]=e=>t.$router.push("/history"))},null,8,["nightMode"])]),(0,a.wy)((0,a.Wm)(y,{onClick:e[4]||(e[4]=(0,n.iM)((t=>d.settingView=!1),["self"])),autoMode:d.autoMode,onSwitchAutoMode:e[5]||(e[5]=t=>d.autoMode=!d.autoMode)},null,8,["autoMode"]),[[n.F8,d.settingView]])],2)],64)}var u={data(){return{nightMode:!1,autoMode:!0,settingView:!1,queryResult:[],timeOfSun:{dawn:7,sunset:21},sensors:{inTemp:null,inTempAHT:null,hum:null,outTemp:null,press:null,ppm:null,ppmState:{green:!1,yellow:!1,orange:!1,red:!1}},isAliveSensor:!1,ws:null,wsAlive:!1,time:{blink:!1,hour:"",min:"",day:"",date:"",month:"",year:""},circleSize:{cxy:125,r:100}}},methods:{connect(){this.ws=new WebSocket("wss://peredaifile.ru:3031"),this.ws.onopen=()=>{this.wsAlive=!0},this.ws.onmessage=t=>{let e=JSON.parse(t.data);if("sensors"==e.type){if(this.sensors.inTemp=-(-e.value.inTemp).toFixed(1),this.sensors.outTemp=-(-e.value.outTemp).toFixed(1),this.sensors.press=-(-e.value.press).toFixed(),this.sensors.inTempAHT=e.value.inTempAHT,this.sensors.hum=-(-e.value.hum).toFixed(),this.sensors.ppm=-(-e.value.ppm).toFixed(),this.isAliveSensor=e.value.isAlive,this.sensors.ppm<600){for(let t in this.sensors.ppmState)this.sensors.ppmState[t]=!1;this.sensors.ppmState.green=!0}if(this.sensors.ppm>600&&this.sensors.ppm<1201){for(let t in this.sensors.ppmState)this.sensors.ppmState[t]=!1;this.sensors.ppmState.yellow=!0}if(this.sensors.ppm>1200&&this.sensors.ppm<5001){for(let t in this.sensors.ppmState)this.sensors.ppmState[t]=!1;this.sensors.ppmState.orange=!0}if(this.sensors.ppm>5e3){for(let t in this.sensors.ppmState)this.sensors.ppmState[t]=!1;this.sensors.ppmState.red=!0}}"queryResult"==e.type&&(this.queryResult=e.value)},this.ws.onerror=t=>{console.log("WSerror")},this.ws.onclose=t=>{console.log("WSclose"),this.reconnect()}},getData(t){this.ws.send(JSON.stringify({type:"getData",value:{startTime:t.startTime,endTime:t.endTime}}))},getTime(){let t=new Date,e={0:"ВС",1:"ПН",2:"ВТ",3:"СР",4:"ЧТ",5:"ПТ",6:"СБ"},s=()=>{this.time.hour=t.getHours(),this.time.min=t.getMinutes(),this.time.hour/10<1?this.time.hour="0"+this.time.hour:this.time.hour,this.time.min/10<1?this.time.min="0"+this.time.min:this.time.min,this.time.blink=!this.time.blink,this.autoMode&&this.autoModePlay(this.time.hour)},n=()=>{this.time.date=t.getDate(),this.time.month=t.getMonth()+1,this.time.year=t.getFullYear(),this.time.day=e[t.getDay()],this.time.date/10<1?this.time.date="0"+this.time.date:this.time.date,this.time.month/10<1?this.time.month="0"+this.time.month:this.time.month};s(),n(),setInterval((()=>{t=new Date,s(),n()}),1e3)},reconnect(){this.ws=null;try{setTimeout((()=>this.connect()),1e4)}catch{console.log("Не удачно!")}},autoModePlay(t){t>=this.timeOfSun.dawn&&t<=this.timeOfSun.sunset?this.nightMode=!1:this.nightMode=!0}},mounted(){this.getTime(),this.connect(),setInterval((()=>{try{this.ws.send(JSON.stringify({type:"ping"}))}catch(t){console.log("WS is down: ",t)}}),6e5)}},m=s(89);const h=(0,m.Z)(u,[["render",d],["__scopeId","data-v-307cffc7"]]);var p=h;const f={class:"blink"};function y(t,e,s,o,r,l){return(0,a.wg)(),(0,a.iD)("div",{class:"header",onClick:e[0]||(e[0]=(...t)=>l.toFull&&l.toFull(...t)),onselectstart:"return false"},[(0,a._)("div",{class:(0,i.C_)(["date",{dayDate:!s.nightMode}])},(0,i.zw)(s.time.date)+"."+(0,i.zw)(s.time.month)+"."+(0,i.zw)(s.time.year)+" "+(0,i.zw)(s.time.day),3),(0,a._)("div",{class:(0,i.C_)(["clock",{dayClock:!s.nightMode}])},[(0,a._)("div",null,(0,i.zw)(s.time.hour),1),(0,a._)("div",f,[(0,a.wy)((0,a._)("div",null,":",512),[[n.F8,s.time.blink]])]),(0,a._)("div",null,(0,i.zw)(s.time.min),1)],2)])}var g={name:"MainClock",props:{time:{type:Object},nightMode:{type:Boolean}},methods:{async toFull(){try{await navigator.wakeLock.request("screen")}catch(t){console.log(t),alert("Удержание экрана недоступно!")}document.documentElement.webkitRequestFullscreen()}}};const v=(0,m.Z)(g,[["render",y],["__scopeId","data-v-30e50914"]]);var S=v;const _=t=>((0,a.dD)("data-v-2debb2c7"),t=t(),(0,a.Cn)(),t),w={class:"sensorPanelWrap"},M={class:"sensor inTemp"},x={class:"value"},b=_((()=>(0,a._)("br",null,null,-1))),D={class:"textData"},T=_((()=>(0,a._)("div",{class:"icon"},null,-1))),C={class:"sensor outTemp"},k={class:"value"},O=_((()=>(0,a._)("br",null,null,-1))),z={class:"textData"},B=_((()=>(0,a._)("div",{class:"icon"},null,-1))),W={class:"sensor hum"},F={class:"value"},I=_((()=>(0,a._)("br",null,null,-1))),H={class:"textData"},A=_((()=>(0,a._)("div",{class:"icon"},null,-1))),U={class:"sensor ppm"},j={class:"value__ppm"},L=_((()=>(0,a._)("br",null,null,-1))),Z={class:"textData__ppm"},P=_((()=>(0,a._)("br",null,null,-1))),R=_((()=>(0,a._)("div",{class:"icon"},null,-1))),q={class:"sensor press"},E={class:"value"},V=_((()=>(0,a._)("br",null,null,-1))),J={class:"textData"},N=_((()=>(0,a._)("div",{class:"icon"},null,-1)));function Y(t,e,s,n,o,r){const l=(0,a.up)("MainClock"),c=(0,a.up)("CirclePpm");return(0,a.wg)(),(0,a.iD)("div",w,[(0,a.Wm)(l,{time:s.time,nightMode:s.nightMode},null,8,["time","nightMode"]),(0,a._)("div",{class:(0,i.C_)(["panel",{dayPanel:!s.nightMode}]),onClick:e[0]||(e[0]=(...t)=>r.changeMode&&r.changeMode(...t))},[(0,a._)("div",M,[(0,a._)("div",x,[(0,a.Uk)(" Дом "),b,(0,a._)("p",D,(0,i.zw)(s.sensors.inTemp),1),(0,a.Uk)(" °C ")]),T]),(0,a._)("div",C,[(0,a._)("div",k,[(0,a.Uk)(" Улица "),O,(0,a.Uk)(),(0,a._)("p",z,(0,i.zw)(s.sensors.outTemp),1),(0,a.Uk)(" °C ")]),B]),(0,a._)("div",W,[(0,a._)("div",F,[(0,a.Uk)(" Влажность "),I,(0,a.Uk)(),(0,a._)("p",H,(0,i.zw)(s.sensors.hum),1),(0,a.Uk)(" % ")]),A]),(0,a._)("div",U,[(0,a.Wm)(c,{ppmState:s.sensors.ppmState,circleSize:s.circleSize,nightMode:s.nightMode},null,8,["ppmState","circleSize","nightMode"]),(0,a._)("div",j,[(0,a.Uk)(" CO₂ "),L,(0,a.Uk)(),(0,a._)("p",Z,(0,i.zw)(s.sensors.ppm),1),(0,a.Uk)(),P,(0,a.Uk)(" ppm ")]),R]),(0,a._)("div",q,[(0,a._)("div",E,[(0,a.Uk)(" Давление "),V,(0,a.Uk)(),(0,a._)("p",J,(0,i.zw)(s.sensors.press),1),(0,a.Uk)(" мм ")]),N])],2)])}var $={name:"SensorPanel",props:{time:{type:Object},autoMode:{type:Boolean},nightMode:{type:Boolean},sensors:{type:Object},circleSize:{type:Object}},methods:{changeMode(){this.autoMode||this.$emit("onChangeMode")}}};const G=(0,m.Z)($,[["render",Y],["__scopeId","data-v-2debb2c7"]]);var Q=G;const X=t=>((0,a.dD)("data-v-023ed9b6"),t=t(),(0,a.Cn)(),t),K={class:"settingBtnWrap"},tt=X((()=>(0,a._)("path",{d:"M15.2 6l-1.1-0.2c-0.1-0.2-0.1-0.4-0.2-0.6l0.6-0.9 0.5-0.7-2.6-2.6-0.7 0.5-0.9 0.6c-0.2-0.1-0.4-0.1-0.6-0.2l-0.2-1.1-0.2-0.8h-3.6l-0.2 0.8-0.2 1.1c-0.2 0.1-0.4 0.1-0.6 0.2l-0.9-0.6-0.7-0.4-2.5 2.5 0.5 0.7 0.6 0.9c-0.2 0.2-0.2 0.4-0.3 0.6l-1.1 0.2-0.8 0.2v3.6l0.8 0.2 1.1 0.2c0.1 0.2 0.1 0.4 0.2 0.6l-0.6 0.9-0.5 0.7 2.6 2.6 0.7-0.5 0.9-0.6c0.2 0.1 0.4 0.1 0.6 0.2l0.2 1.1 0.2 0.8h3.6l0.2-0.8 0.2-1.1c0.2-0.1 0.4-0.1 0.6-0.2l0.9 0.6 0.7 0.5 2.6-2.6-0.5-0.7-0.6-0.9c0.1-0.2 0.2-0.4 0.2-0.6l1.1-0.2 0.8-0.2v-3.6l-0.8-0.2zM15 9l-1.7 0.3c-0.1 0.5-0.3 1-0.6 1.5l0.9 1.4-1.4 1.4-1.4-0.9c-0.5 0.3-1 0.5-1.5 0.6l-0.3 1.7h-2l-0.3-1.7c-0.5-0.1-1-0.3-1.5-0.6l-1.4 0.9-1.4-1.4 0.9-1.4c-0.3-0.5-0.5-1-0.6-1.5l-1.7-0.3v-2l1.7-0.3c0.1-0.5 0.3-1 0.6-1.5l-1-1.4 1.4-1.4 1.4 0.9c0.5-0.3 1-0.5 1.5-0.6l0.4-1.7h2l0.3 1.7c0.5 0.1 1 0.3 1.5 0.6l1.4-0.9 1.4 1.4-0.9 1.4c0.3 0.5 0.5 1 0.6 1.5l1.7 0.3v2z"},null,-1))),et=X((()=>(0,a._)("path",{d:"M8 4.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5c0-1.9-1.6-3.5-3.5-3.5zM8 10.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5z"},null,-1))),st=[tt,et];function nt(t,e,s,n,o,r){return(0,a.wg)(),(0,a.iD)("div",K,[((0,a.wg)(),(0,a.iD)("svg",{class:(0,i.C_)(["settingBtn",{nightBtn:s.nightMode,dayBtn:!s.nightMode}]),viewBox:"0 0 17 17"},st,2))])}var at={name:"SettingButton",props:{nightMode:{type:Boolean}}};const it=(0,m.Z)(at,[["render",nt],["__scopeId","data-v-023ed9b6"]]);var ot=it;const rt=t=>((0,a.dD)("data-v-0776e31c"),t=t(),(0,a.Cn)(),t),lt={class:"homeBtnWrap"},ct=rt((()=>(0,a._)("path",{d:"M7.98 1.984l7 6h-2.003v6H9.96V10.97H5.997v3.016H2.982v-6H.979l7-6z"},null,-1))),dt=[ct];function ut(t,e,s,n,o,r){return(0,a.wg)(),(0,a.iD)("div",lt,[((0,a.wg)(),(0,a.iD)("svg",{class:(0,i.C_)(["homeBtn",{nightBtn:s.nightMode,dayBtn:!s.nightMode}]),viewBox:"0 0 17 17"},dt,2))])}var mt={name:"HomeButton",props:{nightMode:{type:Boolean}}};const ht=(0,m.Z)(mt,[["render",ut],["__scopeId","data-v-0776e31c"]]);var pt=ht;const ft=t=>((0,a.dD)("data-v-5f68207f"),t=t(),(0,a.Cn)(),t),yt={class:"historyBtnWrap"},gt=ft((()=>(0,a._)("path",{d:"M14 .978H4.062l-2.03 2.006h-.006v12h10v-12H3.002l1.06-1h8.954v11.928l.984-1V.978z"},null,-1))),vt=[gt];function St(t,e,s,n,o,r){return(0,a.wg)(),(0,a.iD)("div",yt,[((0,a.wg)(),(0,a.iD)("svg",{class:(0,i.C_)(["historyBtn",{nightBtn:s.nightMode,dayBtn:!s.nightMode}]),viewBox:"0 0 16 16"},vt,2))])}var _t={name:"HistoryButton",props:{nightMode:{type:Boolean}}};const wt=(0,m.Z)(_t,[["render",St],["__scopeId","data-v-5f68207f"]]);var Mt=wt;const xt=t=>((0,a.dD)("data-v-2cd62662"),t=t(),(0,a.Cn)(),t),bt={class:"setting"},Dt={class:"settingBlock"},Tt=xt((()=>(0,a._)("h1",null,"Настройки",-1))),Ct={class:"settingContent"},kt={class:"settingItem"},Ot=xt((()=>(0,a._)("h3",null,"Режим день/ночь",-1)));function zt(t,e,s,n,o,r){return(0,a.wg)(),(0,a.iD)("div",bt,[(0,a._)("div",Dt,[Tt,(0,a._)("div",Ct,[(0,a._)("div",kt,[Ot,(0,a._)("div",null,[(0,a.Uk)(" ручной "),(0,a._)("div",{class:(0,i.C_)(["switchBtn",{switchOn:s.autoMode}]),onClick:e[0]||(e[0]=(...t)=>r.switchAutoMode&&r.switchAutoMode(...t))},null,2),(0,a.Uk)(" авто ")])])])])])}var Bt={name:"SettingModal",props:{autoMode:{type:Boolean}},methods:{switchAutoMode(){this.$emit("switchAutoMode")}}};const Wt=(0,m.Z)(Bt,[["render",zt],["__scopeId","data-v-2cd62662"]]);var Ft=Wt;const It=["cx","cy","r"],Ht=["cx","cy","r"],At=["cx","cy","r"],Ut=["cx","cy","r"];function jt(t,e,s,n,o,r){return(0,a.wg)(),(0,a.iD)("svg",{class:(0,i.C_)([{nightSvg:s.nightMode},"circleSvg"])},[(0,a._)("circle",{class:(0,i.C_)({current:s.ppmState.green}),cx:s.circleSize.cxy,cy:s.circleSize.cxy,r:s.circleSize.r,transform:"rotate(112)",stroke:"#7dff63"},null,10,It),(0,a._)("circle",{class:(0,i.C_)({current:s.ppmState.yellow}),cx:s.circleSize.cxy,cy:s.circleSize.cxy,r:s.circleSize.r,transform:"rotate(194)",stroke:"#fffc63"},null,10,Ht),(0,a._)("circle",{class:(0,i.C_)({current:s.ppmState.orange}),cx:s.circleSize.cxy,cy:s.circleSize.cxy,r:s.circleSize.r,transform:"rotate(276)",stroke:"#f74c23"},null,10,At),(0,a._)("circle",{class:(0,i.C_)({current:s.ppmState.red}),cx:s.circleSize.cxy,cy:s.circleSize.cxy,r:s.circleSize.r,transform:"rotate(-2)",stroke:"#f70000"},null,10,Ut)],2)}var Lt={name:"CirclePpm",props:{ppmState:{type:Object},circleSize:{type:Object},nightMode:{type:Boolean}},methods:{setCircleSize(){let t=document.documentElement.clientWidth,e=document.documentElement.clientHeight;t>450&&t<=900&&e>800?(this.circleSize.cxy=180,this.circleSize.r=160):(this.circleSize.cxy=125,this.circleSize.r=100)}},mounted(){this.setCircleSize(),window.addEventListener("resize",this.setCircleSize)}};const Zt=(0,m.Z)(Lt,[["render",jt],["__scopeId","data-v-3b525a97"]]);var Pt=Zt;const Rt={id:"chart",class:"chart"};function qt(t,e,s,n,i,o){const r=(0,a.up)("apexchart");return(0,a.wg)(),(0,a.iD)("div",Rt,[(0,a.Wm)(r,{type:"area",height:"250px",options:i.chartOptions,series:i.series},null,8,["options","series"])])}var Et={name:"BarChart",props:{dataSet:{type:Object}},data(){return{series:[{name:"Улица",data:[]},{name:"Дом",data:[]}],chartOptions:{chart:{type:"area"},title:{text:"Температура",align:"left",margin:10,offsetX:50,offsetY:5,floating:!0,style:{fontSize:"14px",fontWeight:"bold",fontFamily:"Jura",color:"#fffde0"}},dataLabels:{enabled:!0,enabledOnSeries:[2,3],formatter:function(t){return t.toFixed(1)+" °C"}},colors:["#F1c063","#008110","#2e80c7","#c75e2e"],stroke:{curve:"smooth"},legend:{labels:{useSeriesColors:!0}},yaxis:{labels:{formatter:t=>t?t.toFixed(1):t,style:{colors:"#fffde0"}}},xaxis:{type:"datetime",categories:[(new Date).toISOString()],labels:{datetimeUTC:!1,style:{colors:"#fffde0"}}},tooltip:{x:{format:"dd.MM.yyyy HH:mm"}},noData:{text:"Нет данных"},chart:{toolbar:{show:!0,tools:{zoomin:!1,zoomout:!1}},animations:{enabled:!1,easing:"easeinout",speed:800,animateGradually:{enabled:!1,delay:150},dynamicAnimation:{enabled:!0,speed:350}},locales:[{name:"ru",options:{months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],shortMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}}],defaultLocale:"ru"}}}},methods:{},watch:{dataSet(t){this.series=t.series}}};const Vt=(0,m.Z)(Et,[["render",qt],["__scopeId","data-v-3cd6655a"]]);var Jt=Vt;const Nt=t=>((0,a.dD)("data-v-d9c37f8a"),t=t(),(0,a.Cn)(),t),Yt={class:"LeftBtnWrap"},$t=Nt((()=>(0,a._)("svg",{class:"LeftBtn",viewBox:"0 0 34 50"},[(0,a._)("defs"),(0,a._)("polygon",{class:"cls-1",points:"34 50 0 25 34 0 22 25 34 50"})],-1))),Gt=[$t];function Qt(t,e,s,n,i,o){return(0,a.wg)(),(0,a.iD)("div",Yt,Gt)}var Xt={name:"LeftButton"};const Kt=(0,m.Z)(Xt,[["render",Qt],["__scopeId","data-v-d9c37f8a"]]);var te=Kt;const ee=t=>((0,a.dD)("data-v-22641d02"),t=t(),(0,a.Cn)(),t),se={class:"LeftBtnWrap"},ne=ee((()=>(0,a._)("svg",{class:"LeftBtn",viewBox:"0 0 34 50"},[(0,a._)("defs"),(0,a._)("polygon",{class:"cls-1",points:"0 50 34 25 0 0 12 25 0 50"})],-1))),ae=[ne];function ie(t,e,s,n,i,o){return(0,a.wg)(),(0,a.iD)("div",se,ae)}var oe={name:"RightButton"};const re=(0,m.Z)(oe,[["render",ie],["__scopeId","data-v-22641d02"]]);var le=re;const ce={class:"chart"};function de(t,e,s,n,i,o){const r=(0,a.up)("apexchart");return(0,a.wg)(),(0,a.iD)("div",ce,[(0,a.Wm)(r,{type:"area",height:"150px",options:i.chartOptions,series:i.series},null,8,["options","series"])])}var ue={name:"SecondChart",props:{dataSet:{type:Object}},data(){return{series:[{name:"Улица",data:[]}],chartOptions:{chart:{type:"area"},title:{text:"Атмосферное давление",align:"left",margin:10,offsetX:50,offsetY:5,floating:!0,style:{fontSize:"14px",fontWeight:"bold",fontFamily:"Jura",color:"#fffde0"}},dataLabels:{enabled:!0,formatter:function(t){return t.toFixed()+" мм"}},colors:["#ED3B83"],stroke:{curve:"smooth"},legend:{labels:{useSeriesColors:!0}},yaxis:{labels:{formatter:t=>t?t.toFixed(0):t,style:{colors:"#fffde0"}}},xaxis:{type:"datetime",categories:[(new Date).toISOString()],labels:{datetimeUTC:!1,style:{colors:"#fffde0"}}},tooltip:{x:{format:"dd.MM.yyyy HH:mm"}},noData:{text:"Нет данных.."},chart:{toolbar:{show:!0,tools:{zoomin:!1,zoomout:!1}},animations:{enabled:!1,easing:"easeinout",speed:800,animateGradually:{enabled:!1,delay:150},dynamicAnimation:{enabled:!0,speed:350}},locales:[{name:"ru",options:{months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],shortMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}}],defaultLocale:"ru"}}}},methods:{},watch:{dataSet(t){this.chartOptions={xaxis:{categories:t.categories}},this.series=t.series}}};const me=(0,m.Z)(ue,[["render",de],["__scopeId","data-v-1a9590a0"]]);var he=me;const pe={class:"chart"};function fe(t,e,s,n,i,o){const r=(0,a.up)("apexchart");return(0,a.wg)(),(0,a.iD)("div",pe,[(0,a.Wm)(r,{type:"line",height:"150px",options:i.chartOptions,series:i.series},null,8,["options","series"])])}var ye={name:"ThirdChart",props:{dataSet:{type:Object}},data(){return{yaxis:[{labels:{formatter:t=>t?t.toFixed(0):t,style:{colors:"#fffde0"}}},{opposite:!0,logarithmic:!1,logBase:10,tickAmount:4,floating:!0,labels:{formatter:t=>t?t.toFixed(0):t,style:{colors:"#fffde0"}}}],series:[{name:"Влажность",data:[],type:"column"},{name:"CO₂",data:[],type:"line"}],chartOptions:{chart:{type:"line"},title:{text:"Влажность и CO₂",align:"left",margin:10,offsetX:40,offsetY:5,floating:!0,style:{fontSize:"14px",fontWeight:"bold",fontFamily:"Jura",color:"#fffde0"}},dataLabels:{enabled:!0,enabledOnSeries:[1],formatter:function(t){return t.toFixed()}},colors:["#4eabda","#40af05"],stroke:{curve:"smooth"},legend:{labels:{useSeriesColors:!0}},xaxis:{type:"datetime",categories:[(new Date).toISOString()],labels:{datetimeUTC:!1,style:{colors:"#fffde0"}}},tooltip:{x:{format:"dd.MM.yyyy HH:mm"}},noData:{text:"Нет данных.."},chart:{toolbar:{show:!0,tools:{zoomin:!1,zoomout:!1}},animations:{enabled:!1,easing:"easeinout",speed:800,animateGradually:{enabled:!1,delay:150},dynamicAnimation:{enabled:!0,speed:350}},locales:[{name:"ru",options:{months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],shortMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}}],defaultLocale:"ru"}}}},methods:{},watch:{dataSet(t){this.yaxis[1].min=function(){return Math.min(...t.series[1].data.map((t=>t[1])))},this.chartOptions={yaxis:this.yaxis},this.series=t.series}}};const ge=(0,m.Z)(ye,[["render",fe],["__scopeId","data-v-1bc1f344"]]);var ve=ge,Se=[S,Q,ot,Ft,Pt,pt,Mt,Jt,te,le,he,ve];const _e={class:"historyChartsWrap",onselectstart:"return false"},we={class:"topBar"},Me={class:"bottomBar"},xe={class:"inputWrap"},be={class:"inputWrap"};function De(t,e,s,o,r,l){const c=(0,a.up)("LeftButton"),d=(0,a.up)("RightButton"),u=(0,a.up)("BarChart"),m=(0,a.up)("SecondChart"),h=(0,a.up)("ThirdChart");return(0,a.wg)(),(0,a.iD)("div",_e,[(0,a._)("div",we,[(0,a._)("div",{class:(0,i.C_)(["day intervalButton",{current:r.selector.day}]),onClick:e[0]||(e[0]=t=>l.setSelector("day"))},"Сутки",2),(0,a._)("div",{class:(0,i.C_)(["week intervalButton",{current:r.selector.week}]),onClick:e[1]||(e[1]=t=>l.setSelector("week"))},"Неделя",2),(0,a._)("div",{class:(0,i.C_)(["month intervalButton",{current:r.selector.month}]),onClick:e[2]||(e[2]=t=>l.setSelector("month"))},"Месяц",2),(0,a._)("div",{class:(0,i.C_)(["year intervalButton",{current:r.selector.year}]),onClick:e[3]||(e[3]=t=>l.setSelector("year"))},"Год",2)]),(0,a._)("div",Me,[(0,a.Wm)(c,{onClick:l.moveLeft},null,8,["onClick"]),(0,a._)("div",xe,[(0,a.wy)((0,a._)("input",{class:(0,i.C_)(["input",{currentInput:r.selector.interval}]),type:"date","onUpdate:modelValue":e[4]||(e[4]=t=>r.startInput=t),onInput:e[5]||(e[5]=(...t)=>l.updateStart&&l.updateStart(...t)),onClick:e[6]||(e[6]=t=>l.setSelector("interval"))},null,34),[[n.nr,r.startInput]])]),(0,a._)("div",be,[(0,a.wy)((0,a._)("input",{class:(0,i.C_)(["input",{currentInput:r.selector.interval}]),type:"date","onUpdate:modelValue":e[7]||(e[7]=t=>r.endInput=t),onInput:e[8]||(e[8]=(...t)=>l.updateEnd&&l.updateEnd(...t)),onClick:e[9]||(e[9]=t=>l.setSelector("interval"))},null,34),[[n.nr,r.endInput]])]),(0,a.Wm)(d,{onClick:l.moveRight},null,8,["onClick"])]),(0,a.Wm)(u,{dataSet:r.dataSet.temp},null,8,["dataSet"]),(0,a.Wm)(m,{dataSet:r.dataSet.press},null,8,["dataSet"]),(0,a.Wm)(h,{dataSet:r.dataSet.hum},null,8,["dataSet"])])}var Te={data(){return{selector:{day:!0,week:!1,month:!1,year:!1,interval:!1},startInput:"",endInput:"",startTime:"",endTime:"",rangeOfDays:1,dataSet:{temp:{},press:{},humPpm:{}}}},props:{queryResult:{type:Object},wsAlive:{type:Boolean}},methods:{updateStart(t){this.startTime=Date.parse(t.target.value),this.getData()},updateEnd(t){this.endTime=Date.parse(t.target.value)+864e5,this.getData()},getData(){this.wsAlive?this.$emit("onQuery",{startTime:this.startTime,endTime:this.endTime}):setTimeout((()=>{this.getData()}),100)},setSelector(t){for(let e in this.selector)this.selector[e]=!1;this.selector[t]=!0,this.selector.interval||(this.setNewDate(),this.getData())},setNewDate(){this.selector.day&&(this.rangeOfDays=1),this.selector.week&&(this.rangeOfDays=7),this.selector.month&&(this.rangeOfDays=31),this.selector.year&&(this.rangeOfDays=366),this.startTime=(new Date).setHours((new Date).getHours()-24*this.rangeOfDays),this.endTime=Date.now()},moveLeft(){this.startTime-=864e5*this.rangeOfDays,this.endTime-=864e5*this.rangeOfDays,this.getData()},moveRight(){this.startTime+=864e5*this.rangeOfDays,this.endTime+=864e5*this.rangeOfDays,this.getData()},makeDataSet(t){if(t.length>0){let e=t.filter(((t,e,s)=>!!this.selector.day||(0==e||e==s.length-1||(t.content.outTemp>s[e-1].content.outTemp&&t.content.outTemp>s[e+1].content.outTemp||t.content.outTemp<s[e-1].content.outTemp&&t.content.outTemp<s[e+1].content.outTemp||void 0)))),s=1;this.selector.day&&(s=4),this.selector.week&&(s=20),this.selector.month&&(s=50),this.selector.year&&(s=70),this.selector.interval&&(s=2*(1- -((new Date(this.endTime)-new Date(this.startTime))/864e5).toFixed()));let n=t.filter(((t,e,n)=>{if((e+1)%s==0)return!0})),a=e.reduce((function(t,e,s,n){if(0==s)return{max:- -e.content.outTemp,min:- -e.content.outTemp,categories:[e.content.timestamp,e.content.timestamp]};let a=t.max,i=t.min,o=t.categories;return- -e.content.outTemp>t.max&&(a=- -e.content.outTemp,o[0]=e.content.timestamp),- -e.content.outTemp<t.min&&(i=- -e.content.outTemp,o[1]=e.content.timestamp),{max:a,min:i,categories:o}}),{});this.dataSet.temp={series:[{name:"Дом",data:[...e.map((t=>[t.content.timestamp,- -t.content.inTemp]))]},{name:"Улица",data:[...e.map((t=>[t.content.timestamp,- -t.content.outTemp]))]},{name:"min",data:[[a.categories[1],a.min]]},{name:"max",data:[[a.categories[0],a.max]]}],categories:e.map((t=>t.content.timestamp))},this.dataSet.press={series:[{name:"Дом",data:[...n.map((t=>- -t.content.press))]}],categories:n.map((t=>t.content.timestamp))},this.dataSet.hum={series:[{name:"Влажность",data:[...n.map((t=>[t.content.timestamp,- -t.content.hum]))]},{name:"CO₂",data:[...n.map((t=>[t.content.timestamp,- -t.content.ppm]))]}]}}}},watch:{queryResult(t){setTimeout((()=>{this.makeDataSet(t)}),200)},startTime(t){this.startInput=new Date(t).toISOString().slice(0,10)},endTime(t){this.endInput=new Date(t).toISOString().slice(0,10)}},mounted(){this.setNewDate(),this.getData()}};const Ce=(0,m.Z)(Te,[["render",De],["__scopeId","data-v-1b66c4f0"]]);var ke=Ce,Oe=s(2483);const ze=[{path:"/",component:Q},{path:"/history",component:ke}],Be=(0,Oe.p7)({routes:ze,history:(0,Oe.r5)()});var We=Be,Fe=s(407),Ie=s.n(Fe);const He=(0,n.ri)(p);Se.forEach((t=>He.component(t.name,t))),He.use(We).use(Ie()).mount("#app")}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,i){if(!n){var o=1/0;for(d=0;d<t.length;d++){n=t[d][0],a=t[d][1],i=t[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[l])}))?n.splice(l--,1):(r=!1,i<o&&(o=i));if(r){t.splice(d--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[n,a,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,o=n[0],r=n[1],l=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(l)var d=l(s)}for(e&&e(n);c<o.length;c++)i=o[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(d)},n=self["webpackChunkmeteoclient"]=self["webpackChunkmeteoclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(4902)}));n=s.O(n)})();
//# sourceMappingURL=app.c7236b2d.js.map