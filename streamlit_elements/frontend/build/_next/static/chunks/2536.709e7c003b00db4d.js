"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2536],{232536:function(e,n,t){t.r(n),t.d(n,{Pie:function(){return y},PieCanvas:function(){return T},ResponsivePie:function(){return w},ResponsivePieCanvas:function(){return j},defaultProps:function(){return p},useNormalizedData:function(){return k},usePie:function(){return m},usePieArcs:function(){return R},usePieFromBox:function(){return O},usePieLayerContext:function(){return x}});var i=t(667294),r=t(543060),a=t(957944),o=t(569680),l=t(785893),s=t(393072);function d(e,n){return n<e?-1:n>e?1:n>=e?0:NaN}function u(e){return e}var c=t(744915);var f=t(649446),v=t(449742);function g(){return g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},g.apply(this,arguments)}function h(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}var L,b=function(e){var n=e.width,t=e.height,i=e.legends,r=e.data,a=e.toggleSerie;return(0,l.jsx)(l.Fragment,{children:i.map((function(e,i){var s;return(0,l.jsx)(o.$6,g({},e,{containerWidth:n,containerHeight:t,data:null!=(s=e.data)?s:r,toggleSerie:e.toggleSerie?a:void 0}),i)}))})},p={id:"id",value:"value",sortByValue:!1,innerRadius:0,padAngle:0,cornerRadius:0,layers:["arcLinkLabels","arcs","arcLabels","legends"],startAngle:0,endAngle:360,fit:!0,activeInnerRadiusOffset:0,activeOuterRadiusOffset:0,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableArcLabels:!0,arcLabel:"formattedValue",arcLabelsSkipAngle:0,arcLabelsRadiusOffset:.5,arcLabelsTextColor:{theme:"labels.text.fill"},enableArcLinkLabels:!0,arcLinkLabel:"id",arcLinkLabelsSkipAngle:0,arcLinkLabelsOffset:0,arcLinkLabelsDiagonalLength:16,arcLinkLabelsStraightLength:24,arcLinkLabelsThickness:1,arcLinkLabelsTextOffset:6,arcLinkLabelsTextColor:{theme:"labels.text.fill"},arcLinkLabelsColor:{theme:"axis.ticks.line.stroke"},colors:{scheme:"nivo"},defs:[],fill:[],isInteractive:!0,animate:!0,motionConfig:"gentle",transitionMode:"innerRadius",tooltip:function(e){var n=e.datum;return(0,l.jsx)(v._5,{id:n.id,value:n.formattedValue,enableChip:!0,color:n.color})},legends:[],role:"img",pixelRatio:"undefined"!=typeof window&&null!=(L=window.devicePixelRatio)?L:1},A=["points"],k=function(e){var n=e.data,t=e.id,a=void 0===t?p.id:t,o=e.value,l=void 0===o?p.value:o,s=e.valueFormat,d=e.colors,u=void 0===d?p.colors:d,c=(0,r.LR)(a),v=(0,r.LR)(l),h=(0,r.O_)(s),L=(0,f.U)(u,"id");return(0,i.useMemo)((function(){return n.map((function(e){var n,t=c(e),i=v(e),r={id:t,label:null!=(n=e.label)?n:t,hidden:!1,value:i,formattedValue:h(i),data:e};return g({},r,{color:L(r)})}))}),[n,c,v,h,L])},R=function(e){var n=e.data,t=e.startAngle,a=e.endAngle,o=e.innerRadius,l=e.outerRadius,f=e.padAngle,v=e.sortByValue,h=e.activeId,L=e.activeInnerRadiusOffset,b=e.activeOuterRadiusOffset,p=e.hiddenIds,A=(0,i.useMemo)((function(){var e=function(){var e=u,n=d,t=null,i=(0,s.Z)(0),r=(0,s.Z)(c.BZ),a=(0,s.Z)(0);function o(o){var l,s,d,u,f,v=o.length,g=0,h=new Array(v),L=new Array(v),b=+i.apply(this,arguments),p=Math.min(c.BZ,Math.max(-c.BZ,r.apply(this,arguments)-b)),A=Math.min(Math.abs(p)/v,a.apply(this,arguments)),k=A*(p<0?-1:1);for(l=0;l<v;++l)(f=L[h[l]=l]=+e(o[l],l,o))>0&&(g+=f);for(null!=n?h.sort((function(e,t){return n(L[e],L[t])})):null!=t&&h.sort((function(e,n){return t(o[e],o[n])})),l=0,d=g?(p-v*k)/g:0;l<v;++l,b=u)s=h[l],u=b+((f=L[s])>0?f*d:0)+k,L[s]={data:o[s],index:l,value:f,startAngle:b,endAngle:u,padAngle:A};return L}return o.value=function(n){return arguments.length?(e="function"===typeof n?n:(0,s.Z)(+n),o):e},o.sortValues=function(e){return arguments.length?(n=e,t=null,o):n},o.sort=function(e){return arguments.length?(t=e,n=null,o):t},o.startAngle=function(e){return arguments.length?(i="function"===typeof e?e:(0,s.Z)(+e),o):i},o.endAngle=function(e){return arguments.length?(r="function"===typeof e?e:(0,s.Z)(+e),o):r},o.padAngle=function(e){return arguments.length?(a="function"===typeof e?e:(0,s.Z)(+e),o):a},o}().value((function(e){return e.value})).startAngle((0,r.Ht)(t)).endAngle((0,r.Ht)(a)).padAngle((0,r.Ht)(f));return v||e.sortValues(null),e}),[t,a,f,v]);return(0,i.useMemo)((function(){var e=n.filter((function(e){return!p.includes(e.id)}));return{dataWithArc:A(e).map((function(e){var n=Math.abs(e.endAngle-e.startAngle);return g({},e.data,{arc:{index:e.index,startAngle:e.startAngle,endAngle:e.endAngle,innerRadius:h===e.data.id?o-L:o,outerRadius:h===e.data.id?l+b:l,thickness:l-o,padAngle:e.padAngle,angle:n,angleDeg:(0,r.vi)(n)}})})),legendData:n.map((function(e){return g({},e,{hidden:p.includes(e.id)})}))}}),[A,n,p,h,o,L,l,b])},m=function(e){var n=e.data,t=e.radius,o=e.innerRadius,l=e.startAngle,s=void 0===l?p.startAngle:l,d=e.endAngle,u=void 0===d?p.endAngle:d,c=e.padAngle,f=void 0===c?p.padAngle:c,v=e.sortByValue,h=void 0===v?p.sortByValue:v,L=e.cornerRadius,b=void 0===L?p.cornerRadius:L,A=e.activeInnerRadiusOffset,k=void 0===A?p.activeInnerRadiusOffset:A,m=e.activeOuterRadiusOffset,O=void 0===m?p.activeOuterRadiusOffset:m,x=(0,i.useState)(null),C=x[0],M=x[1],I=(0,i.useState)([]),y=I[0],w=I[1],W=R({data:n,startAngle:s,endAngle:u,innerRadius:o,outerRadius:t,padAngle:f,sortByValue:h,activeId:C,activeInnerRadiusOffset:k,activeOuterRadiusOffset:O,hiddenIds:y}),S=(0,i.useCallback)((function(e){w((function(n){return n.indexOf(e)>-1?n.filter((function(n){return n!==e})):[].concat(n,[e])}))}),[]);return g({},W,{arcGenerator:(0,a.aG)({cornerRadius:b,padAngle:(0,r.Ht)(f)}),setActiveId:M,toggleSerie:S})},O=function(e){var n=e.data,t=e.width,o=e.height,l=e.innerRadius,s=void 0===l?p.innerRadius:l,d=e.startAngle,u=void 0===d?p.startAngle:d,c=e.endAngle,f=void 0===c?p.endAngle:c,v=e.padAngle,L=void 0===v?p.padAngle:v,b=e.sortByValue,k=void 0===b?p.sortByValue:b,m=e.cornerRadius,O=void 0===m?p.cornerRadius:m,x=e.fit,C=void 0===x?p.fit:x,M=e.activeInnerRadiusOffset,I=void 0===M?p.activeInnerRadiusOffset:M,y=e.activeOuterRadiusOffset,w=void 0===y?p.activeOuterRadiusOffset:y,W=(0,i.useState)(null),S=W[0],T=W[1],j=(0,i.useState)([]),B=j[0],V=j[1],E=(0,i.useMemo)((function(){var e,n=Math.min(t,o)/2,i=n*Math.min(s,1),r=t/2,l=o/2;if(C){var d=(0,a.CU)(r,l,n,u-90,f-90),c=d.points,v=h(d,A),g=Math.min(t/v.width,o/v.height),L={width:v.width*g,height:v.height*g};L.x=(t-L.width)/2,L.y=(o-L.height)/2,r=(r-v.x)/v.width*v.width*g+L.x,l=(l-v.y)/v.height*v.height*g+L.y,e={box:v,ratio:g,points:c},n*=g,i*=g}return{centerX:r,centerY:l,radius:n,innerRadius:i,debug:e}}),[t,o,s,u,f,C,O]),P=R({data:n,startAngle:u,endAngle:f,innerRadius:E.innerRadius,outerRadius:E.radius,padAngle:L,sortByValue:k,activeId:S,activeInnerRadiusOffset:I,activeOuterRadiusOffset:w,hiddenIds:B}),G=(0,i.useCallback)((function(e){V((function(n){return n.indexOf(e)>-1?n.filter((function(n){return n!==e})):[].concat(n,[e])}))}),[]);return g({arcGenerator:(0,a.aG)({cornerRadius:O,padAngle:(0,r.Ht)(L)}),setActiveId:T,toggleSerie:G},P,E)},x=function(e){var n=e.dataWithArc,t=e.arcGenerator,r=e.centerX,a=e.centerY,o=e.radius,l=e.innerRadius;return(0,i.useMemo)((function(){return{dataWithArc:n,arcGenerator:t,centerX:r,centerY:a,radius:o,innerRadius:l}}),[n,t,r,a,o,l])},C=function(e){var n=e.center,t=e.data,r=e.arcGenerator,o=e.borderWidth,s=e.borderColor,d=e.isInteractive,u=e.onClick,c=e.onMouseEnter,f=e.onMouseMove,g=e.onMouseLeave,h=e.setActiveId,L=e.tooltip,b=e.transitionMode,p=(0,v.lL)(),A=p.showTooltipFromEvent,k=p.hideTooltip,R=(0,i.useMemo)((function(){if(d)return function(e,n){null==u||u(e,n)}}),[d,u]),m=(0,i.useMemo)((function(){if(d)return function(e,n){A((0,i.createElement)(L,{datum:e}),n),h(e.id),null==c||c(e,n)}}),[d,A,h,c]),O=(0,i.useMemo)((function(){if(d)return function(e,n){A((0,i.createElement)(L,{datum:e}),n),null==f||f(e,n)}}),[d,A,f]),x=(0,i.useMemo)((function(){if(d)return function(e,n){k(),h(null),null==g||g(e,n)}}),[d,k,h,g]);return(0,l.jsx)(a.Bs,{center:n,data:t,arcGenerator:r,borderWidth:o,borderColor:s,transitionMode:b,onClick:R,onMouseEnter:m,onMouseMove:O,onMouseLeave:x})},M=["isInteractive","animate","motionConfig","theme","renderWrapper"],I=function(e){var n=e.data,t=e.id,o=void 0===t?p.id:t,s=e.value,d=void 0===s?p.value:s,u=e.valueFormat,c=e.sortByValue,f=void 0===c?p.sortByValue:c,v=e.layers,g=void 0===v?p.layers:v,h=e.startAngle,L=void 0===h?p.startAngle:h,A=e.endAngle,R=void 0===A?p.endAngle:A,m=e.padAngle,M=void 0===m?p.padAngle:m,I=e.fit,y=void 0===I?p.fit:I,w=e.innerRadius,W=void 0===w?p.innerRadius:w,S=e.cornerRadius,T=void 0===S?p.cornerRadius:S,j=e.activeInnerRadiusOffset,B=void 0===j?p.activeInnerRadiusOffset:j,V=e.activeOuterRadiusOffset,E=void 0===V?p.activeOuterRadiusOffset:V,P=e.width,G=e.height,D=e.margin,F=e.colors,H=void 0===F?p.colors:F,Z=e.borderWidth,X=void 0===Z?p.borderWidth:Z,_=e.borderColor,N=void 0===_?p.borderColor:_,Y=e.enableArcLabels,U=void 0===Y?p.enableArcLabels:Y,z=e.arcLabel,$=void 0===z?p.arcLabel:z,q=e.arcLabelsSkipAngle,J=void 0===q?p.arcLabelsSkipAngle:q,K=e.arcLabelsTextColor,Q=void 0===K?p.arcLabelsTextColor:K,ee=e.arcLabelsRadiusOffset,ne=void 0===ee?p.arcLabelsRadiusOffset:ee,te=e.arcLabelsComponent,ie=e.enableArcLinkLabels,re=void 0===ie?p.enableArcLinkLabels:ie,ae=e.arcLinkLabel,oe=void 0===ae?p.arcLinkLabel:ae,le=e.arcLinkLabelsSkipAngle,se=void 0===le?p.arcLinkLabelsSkipAngle:le,de=e.arcLinkLabelsOffset,ue=void 0===de?p.arcLinkLabelsOffset:de,ce=e.arcLinkLabelsDiagonalLength,fe=void 0===ce?p.arcLinkLabelsDiagonalLength:ce,ve=e.arcLinkLabelsStraightLength,ge=void 0===ve?p.arcLinkLabelsStraightLength:ve,he=e.arcLinkLabelsThickness,Le=void 0===he?p.arcLinkLabelsThickness:he,be=e.arcLinkLabelsTextOffset,pe=void 0===be?p.arcLinkLabelsTextOffset:be,Ae=e.arcLinkLabelsTextColor,ke=void 0===Ae?p.arcLinkLabelsTextColor:Ae,Re=e.arcLinkLabelsColor,me=void 0===Re?p.arcLinkLabelsColor:Re,Oe=e.arcLinkLabelComponent,xe=e.defs,Ce=void 0===xe?p.defs:xe,Me=e.fill,Ie=void 0===Me?p.fill:Me,ye=e.isInteractive,we=void 0===ye?p.isInteractive:ye,We=e.onClick,Se=e.onMouseEnter,Te=e.onMouseMove,je=e.onMouseLeave,Be=e.tooltip,Ve=void 0===Be?p.tooltip:Be,Ee=e.transitionMode,Pe=void 0===Ee?p.transitionMode:Ee,Ge=e.legends,De=void 0===Ge?p.legends:Ge,Fe=e.role,He=void 0===Fe?p.role:Fe,Ze=(0,r.Bs)(P,G,D),Xe=Ze.outerWidth,_e=Ze.outerHeight,Ne=Ze.margin,Ye=Ze.innerWidth,Ue=Ze.innerHeight,ze=k({data:n,id:o,value:d,valueFormat:u,colors:H}),$e=O({data:ze,width:Ye,height:Ue,fit:y,innerRadius:W,startAngle:L,endAngle:R,padAngle:M,sortByValue:f,cornerRadius:T,activeInnerRadiusOffset:B,activeOuterRadiusOffset:E}),qe=$e.dataWithArc,Je=$e.legendData,Ke=$e.arcGenerator,Qe=$e.centerX,en=$e.centerY,nn=$e.radius,tn=$e.innerRadius,rn=$e.setActiveId,an=$e.toggleSerie,on=(0,r.yU)(Ce,qe,Ie),ln={arcLinkLabels:null,arcs:null,arcLabels:null,legends:null};re&&g.includes("arcLinkLabels")&&(ln.arcLinkLabels=(0,l.jsx)(a._D,{center:[Qe,en],data:qe,label:oe,skipAngle:se,offset:ue,diagonalLength:fe,straightLength:ge,strokeWidth:Le,textOffset:pe,textColor:ke,linkColor:me,component:Oe},"arcLinkLabels")),g.includes("arcs")&&(ln.arcs=(0,l.jsx)(C,{center:[Qe,en],data:qe,arcGenerator:Ke,borderWidth:X,borderColor:N,isInteractive:we,onClick:We,onMouseEnter:Se,onMouseMove:Te,onMouseLeave:je,setActiveId:rn,tooltip:Ve,transitionMode:Pe},"arcs")),U&&g.includes("arcLabels")&&(ln.arcLabels=(0,l.jsx)(a.Xr,{center:[Qe,en],data:qe,label:$,radiusOffset:ne,skipAngle:J,textColor:Q,transitionMode:Pe,component:te},"arcLabels")),De.length>0&&g.includes("legends")&&(ln.legends=(0,l.jsx)(b,{width:Ye,height:Ue,data:Je,legends:De,toggleSerie:an},"legends"));var sn=x({dataWithArc:qe,arcGenerator:Ke,centerX:Qe,centerY:en,radius:nn,innerRadius:tn});return(0,l.jsx)(r.tM,{width:Xe,height:_e,margin:Ne,defs:on,role:He,children:g.map((function(e,n){return void 0!==ln[e]?ln[e]:"function"==typeof e?(0,l.jsx)(i.Fragment,{children:(0,i.createElement)(e,sn)},n):null}))})},y=function(e){var n=e.isInteractive,t=void 0===n?p.isInteractive:n,i=e.animate,a=void 0===i?p.animate:i,o=e.motionConfig,s=void 0===o?p.motionConfig:o,d=e.theme,u=e.renderWrapper,c=h(e,M);return(0,l.jsx)(r.W2,{animate:a,isInteractive:t,motionConfig:s,renderWrapper:u,theme:d,children:(0,l.jsx)(I,g({isInteractive:t},c))})},w=function(e){return(0,l.jsx)(r.d,{children:function(n){var t=n.width,i=n.height;return(0,l.jsx)(y,g({width:t,height:i},e))}})},W=["isInteractive","theme","renderWrapper"],S=function(e){var n=e.data,t=e.id,s=void 0===t?p.id:t,d=e.value,u=void 0===d?p.value:d,c=e.valueFormat,h=e.sortByValue,L=void 0===h?p.sortByValue:h,b=e.startAngle,A=void 0===b?p.startAngle:b,R=e.endAngle,m=void 0===R?p.endAngle:R,x=e.padAngle,C=void 0===x?p.padAngle:x,M=e.fit,I=void 0===M?p.fit:M,y=e.innerRadius,w=void 0===y?p.innerRadius:y,W=e.cornerRadius,S=void 0===W?p.cornerRadius:W,T=e.activeInnerRadiusOffset,j=void 0===T?p.activeInnerRadiusOffset:T,B=e.activeOuterRadiusOffset,V=void 0===B?p.activeOuterRadiusOffset:B,E=e.width,P=e.height,G=e.margin,D=e.pixelRatio,F=void 0===D?1:D,H=e.colors,Z=void 0===H?p.colors:H,X=e.borderWidth,_=void 0===X?p.borderWidth:X,N=e.borderColor,Y=void 0===N?p.borderColor:N,U=e.enableArcLabels,z=void 0===U?p.enableArcLabels:U,$=e.arcLabel,q=void 0===$?p.arcLabel:$,J=e.arcLabelsSkipAngle,K=void 0===J?p.arcLabelsSkipAngle:J,Q=e.arcLabelsTextColor,ee=void 0===Q?p.arcLabelsTextColor:Q,ne=e.arcLabelsRadiusOffset,te=void 0===ne?p.arcLabelsRadiusOffset:ne,ie=e.enableArcLinkLabels,re=void 0===ie?p.enableArcLinkLabels:ie,ae=e.arcLinkLabel,oe=void 0===ae?p.arcLinkLabel:ae,le=e.arcLinkLabelsSkipAngle,se=void 0===le?p.arcLinkLabelsSkipAngle:le,de=e.arcLinkLabelsOffset,ue=void 0===de?p.arcLinkLabelsOffset:de,ce=e.arcLinkLabelsDiagonalLength,fe=void 0===ce?p.arcLinkLabelsDiagonalLength:ce,ve=e.arcLinkLabelsStraightLength,ge=void 0===ve?p.arcLinkLabelsStraightLength:ve,he=e.arcLinkLabelsThickness,Le=void 0===he?p.arcLinkLabelsThickness:he,be=e.arcLinkLabelsTextOffset,pe=void 0===be?p.arcLinkLabelsTextOffset:be,Ae=e.arcLinkLabelsTextColor,ke=void 0===Ae?p.arcLinkLabelsTextColor:Ae,Re=e.arcLinkLabelsColor,me=void 0===Re?p.arcLinkLabelsColor:Re,Oe=e.isInteractive,xe=void 0===Oe?p.isInteractive:Oe,Ce=e.onClick,Me=e.onMouseMove,Ie=e.tooltip,ye=void 0===Ie?p.tooltip:Ie,we=e.legends,We=void 0===we?p.legends:we,Se=(0,i.useRef)(null),Te=(0,r.Fg)(),je=(0,r.Bs)(E,P,G),Be=je.margin,Ve=je.innerWidth,Ee=je.innerHeight,Pe=je.outerWidth,Ge=je.outerHeight,De=k({data:n,id:s,value:u,valueFormat:c,colors:Z}),Fe=O({data:De,width:Ve,height:Ee,fit:I,innerRadius:w,startAngle:A,endAngle:m,padAngle:C,sortByValue:L,cornerRadius:S,activeInnerRadiusOffset:j,activeOuterRadiusOffset:V}),He=Fe.dataWithArc,Ze=Fe.arcGenerator,Xe=Fe.centerX,_e=Fe.centerY,Ne=Fe.radius,Ye=Fe.innerRadius,Ue=Fe.setActiveId,ze=(0,f.Bf)(Y,Te),$e=(0,a.DW)({data:He,label:q,skipAngle:K,offset:te,textColor:ee}),qe=(0,a.Uz)({data:He,skipAngle:se,offset:ue,diagonalLength:fe,straightLength:ge,label:oe,linkColor:me,textOffset:pe,textColor:ke});(0,i.useEffect)((function(){if(Se.current){Se.current.width=Pe*F,Se.current.height=Ge*F;var e=Se.current.getContext("2d");e.scale(F,F),e.fillStyle=Te.background,e.fillRect(0,0,Pe,Ge),e.save(),e.translate(Be.left,Be.top),Ze.context(e),e.save(),e.translate(Xe,_e),He.forEach((function(n){e.beginPath(),e.fillStyle=n.color,e.strokeStyle=ze(n),e.lineWidth=_,Ze(n.arc),e.fill(),_>0&&e.stroke()})),!0===re&&(0,a.Vf)(e,qe,Te,Le),!0===z&&(0,a.N5)(e,$e,Te),e.restore(),We.forEach((function(n){(0,o.as)(e,g({},n,{data:He,containerWidth:Ve,containerHeight:Ee,theme:Te}))}))}}),[Se,Ve,Ee,Pe,Ge,Be.top,Be.left,F,Xe,_e,Ze,He,ze,z,$e,re,qe,Le,We,Te]);var Je=(0,i.useMemo)((function(){return He.map((function(e){return g({id:e.id},e.arc)}))}),[He]),Ke=function(e){if(!Se.current)return null;var n=(0,r.P6)(Se.current,e),t=n[0],i=n[1],o=(0,a.oO)(Be.left+Xe,Be.top+_e,Ne,Ye,Je,t,i);return o?He.find((function(e){return e.id===o.id})):null},Qe=(0,v.lL)(),en=Qe.showTooltipFromEvent,nn=Qe.hideTooltip,tn=function(e){var n=Ke(e);n?(null==Me||Me(n,e),Ue(n.id),en((0,i.createElement)(ye,{datum:n}),e)):(Ue(null),nn())};return(0,l.jsx)("canvas",{ref:Se,width:Pe*F,height:Ge*F,style:{width:Pe,height:Ge,cursor:xe?"auto":"normal"},onMouseEnter:xe?tn:void 0,onMouseMove:xe?tn:void 0,onMouseLeave:xe?function(){nn()}:void 0,onClick:xe?function(e){if(Ce){var n=Ke(e);n&&Ce(n,e)}}:void 0})},T=function(e){var n=e.isInteractive,t=void 0===n?p.isInteractive:n,i=e.theme,a=e.renderWrapper,o=h(e,W);return(0,l.jsx)(r.W2,{isInteractive:t,renderWrapper:a,theme:i,children:(0,l.jsx)(S,g({isInteractive:t},o))})},j=function(e){return(0,l.jsx)(r.d,{children:function(n){var t=n.width,i=n.height;return(0,l.jsx)(T,g({width:t,height:i},e))}})}}}]);