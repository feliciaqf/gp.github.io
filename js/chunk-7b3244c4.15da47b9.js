(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7b3244c4"],{"0350":function(t,i,s){"use strict";s.r(i);var e={name:"Luckyway",components:{Roadmap:s("e9a6").a},data:function(){return{vid:null,bg:!0}},created:function(){document.documentElement.classList.add("transparent")},beforeDestroy:function(){document.documentElement.classList.remove("transparent")}},a=(s("06ab"),s("0c7c")),o=Object(a.a)(e,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("Roadmap",{attrs:{canvasHeight:76,defaultVid:this.vid,cellSize:12}})],1)}),[],!1,null,null,null);i.default=o.exports},"06ab":function(t,i,s){"use strict";s("9d7a")},1:function(t,i){},"9d7a":function(t,i,s){},a546:function(t,i,s){"use strict";var e=s("53ca");function a(t,i){this.supportsCanvas=!!document.createElement("canvas").getContext,this.datas=[],this.beginTag=0,this.beginBigTag=0,this.bigData=[],this.bigNum0=0,this.bigNum1=0,this.offset=[],this.lastBig=0,this.lastBigPos=[0,0],this.bigFlag=!1,this.bigEyeData=new Array,this.bigEyeNum0=0,this.bigEyeNum1=0,this.totalNum=0,this.bankerNum=0,this.playerNum=0,this.tieNum=0,this.bPairNum=0,this.pPairNum=0,this.shupy=0,this.sumbig=0,this.sumsmall=0,this.sumdan=0,this.sumshuang=0,this.baozi=0,this.diceDrawCount=0,this.opt={gameType:"BAC",canvas:null,canvasWidth:180,canvasHeight:70,gridColor:"#eeeeee1a",bankerColor:"#FF6666",playerColor:"#8095FF",tieColor:"#24b253",cellSize:12,strokeWidth:1.5,lineWidth:.5,zoom:1,beadRow:6},this.init(t,i)}function o(){this.status="0",this.pair="0",this.maxLine=6,this.isNewLine=!1,this.color=[];for(var t=0;t<6;t++)this.color[t]=0;for(this.tieSize=[],t=0;t<6;t++)this.tieSize[t]=0;for(this.position=[],t=0;t<6;t++)this.position[t]=0;for(this.bigEyeLoc=[],t=0;t<100;t++)this.tieSize[t]=0;for(this.smallLoc=[],t=0;t<100;t++)this.smallLoc[t]=0;for(this.yueyouLoc=[],t=0;t<100;t++)this.yueyouLoc[t]=0;this.columnSize=0,this.size=0}function h(t,i){return Array.prototype.forEach.call(t,(function(t,s){i(t,s)}))}s("6c7b"),s("ac6a"),a.prototype.drawPath=function(){this.canvas;for(var t=this.opt,i=t.cellSize,s=t.beadColumn,e=t.beadRow,a=(t.totalColumn,t.beadColumn,1);a<s;a++){var o=(i+t.lineWidth)*a,h=(i+t.lineWidth)*e;this.drawLine([o,0],[o,h],t.lineWidth,t.gridColor)}for(a=1;a<e;a++)o=(i+t.lineWidth)*s,h=(i+t.lineWidth)*a,this.drawLine([0,h],[o,h],t.lineWidth,t.gridColor)},a.prototype.drawBeads=function(){if("SHB"==this.opt.gameType)return this.drawBeadsDice();var t=this.bigData,i=this.opt.beadColumn,s=0,e=t.length,a=0;for(e+1>i&&(s=e-i,this.beginBigTag=s);s<e;s++){for(var o=t[s],h=0;h<6;h++)0==o.tieSize[h]&&"0"==o.color[h]||this.bigWay(a,h,o.tieSize[h],o.color[h]);a++}},a.prototype.bigWay=function(t,i,s,e){var a,o,h=this.opt.cellSize,l=this.opt.lineWidth,n=this.opt.strokeWidth,r=this.opt.gridColor,u=this.opt.bankerColor,p=this.opt.playerColor,m=this.opt.tieColor;if(a=i*(h+l)+l,o=t*(h+l)+l,0!=e){var c=h/2,g=c-n;"1"==e&&this.drawCircle(o+c,a+c,g,"#FFF",n,u),"2"==e&&this.drawCircle(o+c,a+c,g,"#FFF",n,p)}var b=h/2,d=.1*h;0!=s&&s<4?1==s?this.drawLine([o+d/2,a+2*b],[o+2*b-d/2,a],n,m):2==s?(this.drawLine([o+d/2,a+.7*b*2],[o+.7*b*2,a+d/2],n,m),this.drawLine([o+.4*b+d/2,a+2*b-+d/2],[o+2*b-d/2,a+.4*c+d/2],n,m)):3==s&&(this.drawLine([o,a+1.2*b+d/2],[o+.4*b*2+d/2,a+d/2],2,m),this.drawLine([o+.8*b+d/2,a+2*b],[o+2*b-d/2,a+.4*b*2],2,m),this.drawLine([o+d/2,a+2*b],[o+2*b-d/2,a],n,m)):s>=4&&(s>=10?this.showText(o+b/1.5-2,a+b+b/2+d/2,s+"","8pt Calibri",r):this.showText(o+b/1.5-.5,a+b+b/2+d/2,s+"","8pt Calibri",r))},a.prototype.drawBeadsDice=function(){var t=this.datas,i=this.opt.beadColumn,s=this.opt.beadRow,e=Math.ceil(i/2),a=(Math.floor(i/2)-1)*s,o=t.length,h=this.diceDrawCount;(0==h||h>a)&&(h=a-s+1),this.diceDrawCount=h;var l=o-h;l=l<0?0:l;for(var n=0;l<o;l++){var r=t[l],u=0+Math.floor(n/s),p=n%s,m="围",c=this.opt.tieColor,g=e+Math.floor(n/s),b=n%s,d="围",y=this.opt.tieColor;n++,"1"==r.bigsmall?(m="大",c=this.opt.bankerColor):"2"==r.bigsmall&&(m="小",c=this.opt.playerColor),"2"==r.singledouble?(d="双",y=this.opt.bankerColor):"1"==r.singledouble&&(d="单",y=this.opt.playerColor),this.bigWayDice(u,p,m,c),this.bigWayDice(g,b,d,y)}this.diceDrawCount++},a.prototype.bigWayDice=function(t,i,s,e){var a=this.canvas,o=this.opt.cellSize,h=o/2,l=t*(o+this.opt.lineWidth)+h,n=i*(o+this.opt.lineWidth)+h,r=h;a.fillStyle=e,a.beginPath(),a.arc(l,n,h,0,2*Math.PI,!1),a.closePath(),a.fill(),a.beginPath(),a.font="bold "+r+"px verdana, sans-serif",a.fillStyle="#FFFFFF",a.fillText(s,l-h+r/2,n+r/2-2*this.opt.lineWidth),a.closePath(),a.fill()},a.prototype.drawCircle=function(t,i,s,e,a,o){var h=this.canvas;h.beginPath(),h.arc(t,i,s,0,2*Math.PI,!1),h.fillStyle=e,h.lineWidth=a,h.strokeStyle=o,h.stroke()},a.prototype.drawLine=function(t,i,s,e){var a=this.canvas;a.beginPath(),a.moveTo(t[0],t[1]),a.lineTo(i[0],i[1]),a.lineWidth=s,a.strokeStyle=e,a.stroke()},a.prototype.showText=function(t,i,s,e,a){var o=this.canvas;o.beginPath(),o.font=e,o.fillStyle=a,o.fillText(s,t,i),o.stroke()},a.prototype.clearDraw=function(t,i,s){var e=this.opt.zoom;t.clearRect(0,0,i*e,s*e)},a.prototype.removeAll=function(){this.datas=[],this.removeAllNotDataList()},a.prototype.removeAllNotDataList=function(){this.totalNum=0,this.bankerNum=0,this.playerNum=0,this.tieNum=0,this.bPairNum=0,this.pPairNum=0,this.bigData=[],this.lastBig=0,this.lastBigEye=0,this.lastSmall=0,this.lastYueyou=0,this.bigNum0=0,this.bigNum1=0,this.lastBigPos0=0,this.lastBigPos1=0,this.bigEyeNum0=0,this.bigEyeNum1=0,this.smallNum0=0,this.smallNum1=0,this.yueyouNum0=0,this.yueyouNum1=0,this.isBigEyeInit=!1,this.isSmallInit=!1,this.isYueyouInit=!1,this.bigFlag=!1,this.smallFlag=!1,this.bigEyeFlag=!1,this.yueyouFlag=!1},a.prototype.setIList=function(t){var i=t.roundRes;for(var s in i)if(i.hasOwnProperty(s)){var e=this.formatItem(i[s]);this.setItem(e)}},a.prototype.appendIList=function(t){var i=this.datas;this.datas=new Array;for(var s=0;s<i.length;s++)this.setItem(i[s]);var e=this.formatItem(t);this.setItem(e)},a.prototype.setItem=function(t){this.checkData(t,this.datas.length),this.datas.push(t)},a.prototype.formatItem=function(t){var i=new o;return"SHB"==this.opt.gameType?(i.bigsmall=t.bigsmall,i.singledouble=t.singledouble):"ROU"==this.opt.gameType||"ROU"==this.opt.gameType||(t.banker_val>t.player_val?i.status="1":t.banker_val<t.player_val?i.status="2":i.status="3",i.pair=t.pair),i},a.prototype.checkData=function(t,i){if(this.totalNum++,"SHB"==this.opt.gameType)"1"==t.bigsmall?this.sumbig++:"2"==t.bigsmall&&this.sumsmall++,"1"==t.singledouble?this.sumdan++:"2"==t.singledouble&&this.sumshuang++,"3"==t.bigsmall&&"3"==t.singledouble&&this.baozi++;else if("ROU"==this.opt.gameType);else if("ROU"==this.opt.gameType);else{var s=t.status;switch(s){case"3":this.tieNum++;break;case"1":this.bankerNum++;break;case"2":this.playerNum++}switch(t.pair){case"1":this.bPairNum++;break;case"2":this.pPairNum++;break;case"3":this.bPairNum++,this.pPairNum++}var e=this.bigData,a=this.bigEyeData,h=this.lastBig,l=this.lastBigEye,n=this.lastSmall,r=this.lastYueyou,u=this.bigNum0,p=this.bigNum1,m=this.lastBigPos,c=this.lastBigPos0,g=this.lastBigPos1,b=this.bigEyeNum0,d=this.bigEyeNum1,y=this.smallNum0,f=this.smallNum1,v=this.yueyouNum0,N=this.yueyouNum1,w=this.bigFlag,C=this.isBigEyeInit,z=this.isSmallInit,L=this.isYueyouInit;if(0==e.length&&"3"==s)0==h?(W=new o,e.push(W)):W=e[0],W.tieSize[0]=1;else if("3"==s){var S=e[m[0]];void 0!==S&&(S.tieSize[m[1]]=S.tieSize[m[1]]+1)}else if(h==s){var k=e[u];if(k.size=k.size+1,"0"==k.color[p])k.position[p]=i,k.color[p]=s,m[0]=u,m[1]=p,p!=k.maxLine-1&&(p+=1);else if(k.size>k.maxLine){var B;u+k.size-k.maxLine>e.length-1?((B=new o).maxLine=p,e.push(B)):void 0===(B=e[u+k.size-k.maxLine])&&(B=new o,e.push(B),B.maxLine=p-1),w?(B.position[0]=i,B.color[0]=s,m[0]=u+k.size-k.maxLine,m[1]=0):(B.maxLine=p,B.position[p]=i,B.color[p]=s,m[0]=u+k.size-k.maxLine,m[1]=p)}else{var P=e[u+1];P.maxLine=p-1,P.position[p-1]=i,P.color[p-1]=s,m[0]=u,m[1]=p-1}h=s,t.position[0]=m[1]}else{var W;0!=h&&(u+=1),(0==h||u>e.length-1)&&(W=new o,e.push(W)),(W=e[u]).position[0]=i,W.color[0]=s,m[0]=u,m[1]=0,p=1,W.size=W.size+1,h=s,w=1==W.maxLine,t.position[0]=m[1]}if("3"==s)return;this.bigData=e,this.bigEyeData=a,this.lastBig=h,this.lastBigEye=l,this.lastSmall=n,this.lastYueyou=r,this.bigNum0=u,this.bigNum1=p,this.lastBigPos0=c,this.lastBigPos1=g,this.bigEyeNum0=b,this.bigEyeNum1=d,this.smallNum0=y,this.smallNum1=f,this.yueyouNum0=v,this.yueyouNum1=N,this.bigFlag=w,this.isBigEyeInit=C,this.isSmallInit=z,this.isYueyouInit=L}},a.prototype.init=function(t,i){if(this.supportsCanvas){var s=this;h(arguments,(function(t){if("object"===Object(e.a)(t))for(var i in t)"callback"===i&&"function"==typeof t[i]?s.opt.callback=t[i].bind(s):i in s.opt&&(s.opt[i]=t[i]);else"function"==typeof t&&(s.opt.callback=t.bind(s))})),s.opt.cellSize*=s.opt.zoom,s.opt.strokeWidth*=s.opt.zoom,s.opt.lineWidth*=s.opt.zoom,s.opt.beadColumn=Math.floor(s.opt.canvasWidth/(s.opt.cellSize+s.opt.lineWidth)*s.opt.zoom),s.canvas=s.opt.canvas}else alert("对不起，当前浏览器不支持Canvas，无法使用本控件！")},i.a=function(t,i){return new a(t,i)}}}]);