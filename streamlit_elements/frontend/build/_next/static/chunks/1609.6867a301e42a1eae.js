"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1609],{661609:function(e,t,i){i.r(t),i.d(t,{HeatMap:function(){return z},HeatMapCanvas:function(){return D},ResponsiveHeatMap:function(){return q},ResponsiveHeatMapCanvas:function(){return _},canvasDefaultProps:function(){return p},commonDefaultProps:function(){return m},computeCells:function(){return C},computeLayout:function(){return y},computeSizeScale:function(){return w},getCellAnnotationDimensions:function(){return P},getCellAnnotationPosition:function(){return M},svgDefaultProps:function(){return b},useCellAnnotations:function(){return L},useComputeCells:function(){return O},useHeatMap:function(){return T}});var n=i(667294),o=i(543060),r=i(475370),a=i(569680),l=i(649446),d=i(43790),c=i(449742),u=i(785893),s=i(955342),h=i(66871),f=i(75837),v=i(281472);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},g.apply(this,arguments)}function x(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}var m={layers:["grid","axes","cells","legends","annotations"],forceSquare:!1,xInnerPadding:0,xOuterPadding:0,yInnerPadding:0,yOuterPadding:0,sizeVariation:!1,opacity:1,activeOpacity:1,inactiveOpacity:.15,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.8]]},enableGridX:!1,enableGridY:!1,enableLabels:!0,label:"formattedValue",labelTextColor:{from:"color",modifiers:[["darker",2]]},colors:{type:"sequential",scheme:"brown_blueGreen"},emptyColor:"#000000",legends:[],annotations:[],isInteractive:!0,hoverTarget:"rowColumn",tooltip:(0,n.memo)((function(e){var t=e.cell;return null===t.formattedValue?null:(0,u.jsx)(c._5,{id:t.serieId+" - "+t.data.x,value:t.formattedValue,enableChip:!0,color:t.color})})),animate:!0,motionConfig:"gentle"},b=g({},m,{axisTop:{},axisRight:null,axisBottom:null,axisLeft:{},borderRadius:0,cellComponent:"rect"}),p=g({},m,{axisTop:{},axisRight:null,axisBottom:null,axisLeft:{},renderCell:"rect",pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),y=function(e){var t=e.width,i=e.height,n=e.rows,o=e.columns,r=t,a=i,l=0,d=0;if(e.forceSquare){var c=Math.max(t/o,0),u=Math.max(i/n,0),s=Math.min(c,u);l=(t-(r=s*o))/2,d=(i-(a=s*n))/2}return{offsetX:l,offsetY:d,width:r,height:a}},C=function(e){var t=e.data,i=e.width,n=e.height,o=e.xInnerPadding,r=e.xOuterPadding,a=e.yInnerPadding,l=e.yOuterPadding,d=e.forceSquare,c=new Set,u=[],h=[],v=[];t.forEach((function(e){u.push(e.id),e.data.forEach((function(t){c.add(t.x);var i=null;void 0!==t.y&&null!==t.y&&(h.push(t.y),i=t.y),v.push({id:e.id+"."+t.x,serieId:e.id,value:i,data:t})}))}));var x=Array.from(c),m=y({width:i,height:n,columns:x.length,rows:u.length,forceSquare:d}),b=m.width,p=m.height,C=m.offsetX,w=m.offsetY,M=(0,f.NB)((0,s.Z)().domain(x).range([0,b]).paddingOuter(r).paddingInner(o)),P=(0,f.NB)((0,s.Z)().domain(u).range([0,p]).paddingOuter(l).paddingInner(a)),O=M.bandwidth(),I=P.bandwidth(),S=v.map((function(e){return g({},e,{x:M(e.data.x)+O/2,y:P(e.serieId)+I/2,width:O,height:I})}));return{width:b,height:p,offsetX:C,offsetY:w,xScale:M,yScale:P,minValue:Math.min.apply(Math,h),maxValue:Math.max.apply(Math,h),cells:S}},w=function(e,t,i){if(!e)return function(){return 1};var n=(0,h.Z)().domain(e.values?e.values:[t,i]).range(e.sizes);return function(e){return null===e?1:n(e)}},M=function(e){return{x:e.x,y:e.y}},P=function(e){return{size:Math.max(e.width,e.height),width:e.width,height:e.height}},O=function(e){var t=e.data,i=e.width,o=e.height,r=e.xInnerPadding,a=e.xOuterPadding,l=e.yInnerPadding,d=e.yOuterPadding,c=e.forceSquare;return(0,n.useMemo)((function(){return C({data:t,width:i,height:o,xInnerPadding:r,xOuterPadding:a,yInnerPadding:l,yOuterPadding:d,forceSquare:c})}),[t,i,o,r,a,l,d,c])},I={cell:function(e,t){return e.id===t.id},row:function(e,t){return e.serieId===t.serieId},column:function(e,t){return e.data.x===t.data.x},rowColumn:function(e,t){return e.serieId===t.serieId||e.data.x===t.data.x}},S=function(e){var t,i,r,a=e.cells,d=e.minValue,c=e.maxValue,u=e.sizeVariation,s=e.colors,h=e.emptyColor,f=e.opacity,v=e.activeOpacity,x=e.inactiveOpacity,m=e.borderColor,b=e.label,p=e.labelTextColor,y=e.valueFormat,C=e.activeIds,M=(0,n.useMemo)((function(){return w(t,i,r)}),[t=u,i=d,r=c]),P=(0,n.useMemo)((function(){return"function"==typeof s?null:(0,l.EB)(s,{min:d,max:c})}),[s,d,c]),O=(0,n.useCallback)((function(e){if(null!==e.value){if("function"==typeof s)return s(e);if(null!==P)return P(e.value)}return h}),[s,P,h]),I=(0,o.Fg)(),S=(0,l.Bf)(m,I),T=(0,l.Bf)(p,I),L=(0,o.O_)(y),W=(0,o.LR)(b);return{cells:(0,n.useMemo)((function(){return a.map((function(e){var t=f;C.length>0&&(t=C.includes(e.id)?v:x);var i=M(e.value),n=g({},e,{width:e.width*i,height:e.height*i,formattedValue:null!==e.value?L(e.value):null,opacity:t});return n.label=W(n),n.color=O(n),n.borderColor=S(n),n.labelTextColor=T(n),n}))}),[a,M,O,S,T,L,W,C,f,v,x]),colorScale:P}},T=function(e){var t=e.data,i=e.valueFormat,o=e.width,r=e.height,a=e.xOuterPadding,l=void 0===a?m.xOuterPadding:a,d=e.xInnerPadding,c=void 0===d?m.xInnerPadding:d,u=e.yOuterPadding,s=void 0===u?m.yOuterPadding:u,h=e.yInnerPadding,f=void 0===h?m.yInnerPadding:h,v=e.forceSquare,g=void 0===v?m.forceSquare:v,x=e.sizeVariation,b=void 0===x?m.sizeVariation:x,p=e.colors,y=void 0===p?m.colors:p,C=e.emptyColor,w=void 0===C?m.emptyColor:C,M=e.opacity,P=void 0===M?m.opacity:M,T=e.activeOpacity,L=void 0===T?m.activeOpacity:T,W=e.inactiveOpacity,k=void 0===W?m.inactiveOpacity:W,j=e.borderColor,E=void 0===j?m.borderColor:j,B=e.label,R=void 0===B?m.label:B,V=e.labelTextColor,F=void 0===V?m.labelTextColor:V,A=e.hoverTarget,z=void 0===A?m.hoverTarget:A,q=(0,n.useState)(null),X=q[0],Y=q[1],G=O({data:t,width:o,height:r,xOuterPadding:l,xInnerPadding:c,yOuterPadding:s,yInnerPadding:f,forceSquare:g}),H=G.width,D=G.height,_=G.offsetX,N=G.offsetY,Z=G.cells,J=G.xScale,K=G.yScale,Q=G.minValue,U=G.maxValue,$=(0,n.useMemo)((function(){if(!X)return[];var e=I[z];return Z.filter((function(t){return e(t,X)})).map((function(e){return e.id}))}),[Z,X,z]),ee=S({cells:Z,minValue:Q,maxValue:U,sizeVariation:b,colors:y,emptyColor:w,opacity:P,activeOpacity:L,inactiveOpacity:k,borderColor:E,label:R,labelTextColor:F,valueFormat:i,activeIds:$});return{width:H,height:D,offsetX:_,offsetY:N,cells:ee.cells,xScale:J,yScale:K,colorScale:ee.colorScale,activeCell:X,setActiveCell:Y}},L=function(e,t){return(0,d.O2)({data:e,annotations:t,getPosition:M,getDimensions:P})},W=(0,n.memo)((function(e){var t=e.cell,i=e.borderWidth,r=e.borderRadius,a=e.animatedProps,l=e.onMouseEnter,d=e.onMouseMove,c=e.onMouseLeave,s=e.onClick,h=e.enableLabels,f=(0,o.Fg)(),x=(0,n.useMemo)((function(){return{onMouseEnter:l?l(t):void 0,onMouseMove:d?d(t):void 0,onMouseLeave:c?c(t):void 0,onClick:s?s(t):void 0}}),[t,l,d,c,s]);return(0,u.jsxs)(v.animated.g,g({"data-testid":"cell."+t.id,style:{cursor:"pointer"},opacity:a.opacity},x,{transform:(0,v.to)([a.x,a.y,a.scale],(function(e,t,i){return"translate("+e+", "+t+") scale("+i+")"})),children:[(0,u.jsx)(v.animated.rect,{transform:(0,v.to)([a.width,a.height],(function(e,t){return"translate("+-.5*e+", "+-.5*t+")"})),fill:a.color,width:a.width,height:a.height,stroke:a.borderColor,strokeWidth:i,rx:r,ry:r},t.id),h&&(0,u.jsx)(v.animated.text,{textAnchor:"middle",dominantBaseline:"central",fill:a.labelTextColor,style:g({},f.labels.text,{fill:void 0,userSelect:"none"}),children:t.label})]}))})),k=(0,n.memo)((function(e){var t=e.cell,i=e.borderWidth,r=e.animatedProps,a=e.onMouseEnter,l=e.onMouseMove,d=e.onMouseLeave,c=e.onClick,s=e.enableLabels,h=(0,o.Fg)(),f=(0,n.useMemo)((function(){return{onMouseEnter:a?a(t):void 0,onMouseMove:l?l(t):void 0,onMouseLeave:d?d(t):void 0,onClick:c?c(t):void 0}}),[t,a,l,d,c]);return(0,u.jsxs)(v.animated.g,g({"data-testid":"cell."+t.id,style:{cursor:"pointer"},opacity:r.opacity},f,{transform:(0,v.to)([r.x,r.y],(function(e,t){return"translate("+e+", "+t+")"})),children:[(0,u.jsx)(v.animated.circle,{r:(0,v.to)([r.width,r.height],(function(e,t){return Math.min(e,t)/2})),fill:r.color,fillOpacity:r.opacity,strokeWidth:i,stroke:r.borderColor}),s&&(0,u.jsx)(v.animated.text,{dominantBaseline:"central",textAnchor:"middle",fill:r.labelTextColor,style:g({},h.labels.text,{fill:void 0}),children:t.label})]}))})),j=function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:0,borderColor:e.borderColor,labelTextColor:e.labelTextColor,scale:0}},E=function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:e.opacity,borderColor:e.borderColor,labelTextColor:e.labelTextColor,scale:1}},B=function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:0,borderColor:e.borderColor,labelTextColor:e.labelTextColor,scale:0}},R=function(e){var t,i=e.cells,r=e.cellComponent,a=e.borderRadius,l=e.borderWidth,d=e.isInteractive,s=e.setActiveCell,h=e.onMouseEnter,f=e.onMouseMove,g=e.onMouseLeave,x=e.onClick,m=e.tooltip,b=e.enableLabels,p=(0,o.tf)(),y=p.animate,C=p.config,w=(0,v.useTransition)(i,{keys:function(e){return e.id},initial:E,from:j,enter:E,update:E,leave:B,config:C,immediate:!y}),M=(0,c.lL)(),P=M.showTooltipFromEvent,O=M.hideTooltip,I=(0,n.useMemo)((function(){if(d)return function(e){return function(t){P((0,n.createElement)(m,{cell:e}),t),s(e),null==h||h(e,t)}}}),[d,P,m,s,h]),S=(0,n.useMemo)((function(){if(d)return function(e){return function(t){P((0,n.createElement)(m,{cell:e}),t),null==f||f(e,t)}}}),[d,P,m,f]),T=(0,n.useMemo)((function(){if(d)return function(e){return function(t){O(),s(null),null==g||g(e,t)}}}),[d,O,s,g]),L=(0,n.useMemo)((function(){if(d)return function(e){return function(t){null==x||x(e,t)}}}),[d,x]);return t="rect"===r?W:"circle"===r?k:r,(0,u.jsx)(u.Fragment,{children:w((function(e,i){return(0,n.createElement)(t,{cell:i,borderRadius:a,borderWidth:l,animatedProps:e,enableLabels:b,onMouseEnter:I,onMouseMove:S,onMouseLeave:T,onClick:L})}))})},V=function(e){var t=e.cells,i=e.annotations,n=L(t,i);return(0,u.jsx)(u.Fragment,{children:n.map((function(e,t){return(0,u.jsx)(d.q6,g({},e),t)}))})},F=["isInteractive","animate","motionConfig","theme","renderWrapper"],A=function(e){var t=e.data,i=e.layers,l=void 0===i?b.layers:i,d=e.valueFormat,c=e.width,s=e.height,h=e.margin,f=e.forceSquare,v=void 0===f?b.forceSquare:f,x=e.xInnerPadding,m=void 0===x?b.xInnerPadding:x,p=e.xOuterPadding,y=void 0===p?b.xOuterPadding:p,C=e.yInnerPadding,w=void 0===C?b.yInnerPadding:C,M=e.yOuterPadding,P=void 0===M?b.yOuterPadding:M,O=e.sizeVariation,I=void 0===O?b.sizeVariation:O,S=e.cellComponent,L=void 0===S?b.cellComponent:S,W=e.opacity,k=void 0===W?b.opacity:W,j=e.activeOpacity,E=void 0===j?b.activeOpacity:j,B=e.inactiveOpacity,F=void 0===B?b.inactiveOpacity:B,A=e.borderRadius,z=void 0===A?b.borderRadius:A,q=e.borderWidth,X=void 0===q?b.borderWidth:q,Y=e.borderColor,G=void 0===Y?b.borderColor:Y,H=e.enableGridX,D=void 0===H?b.enableGridX:H,_=e.enableGridY,N=void 0===_?b.enableGridY:_,Z=e.axisTop,J=void 0===Z?b.axisTop:Z,K=e.axisRight,Q=void 0===K?b.axisRight:K,U=e.axisBottom,$=void 0===U?b.axisBottom:U,ee=e.axisLeft,te=void 0===ee?b.axisLeft:ee,ie=e.enableLabels,ne=void 0===ie?b.enableLabels:ie,oe=e.label,re=void 0===oe?b.label:oe,ae=e.labelTextColor,le=void 0===ae?b.labelTextColor:ae,de=e.colors,ce=void 0===de?b.colors:de,ue=e.emptyColor,se=void 0===ue?b.emptyColor:ue,he=e.legends,fe=void 0===he?b.legends:he,ve=e.annotations,ge=void 0===ve?b.annotations:ve,xe=e.isInteractive,me=void 0===xe?b.isInteractive:xe,be=e.onMouseEnter,pe=e.onMouseMove,ye=e.onMouseLeave,Ce=e.onClick,we=e.hoverTarget,Me=void 0===we?b.hoverTarget:we,Pe=e.tooltip,Oe=void 0===Pe?b.tooltip:Pe,Ie=e.role,Se=e.ariaLabel,Te=e.ariaLabelledBy,Le=e.ariaDescribedBy,We=(0,o.Bs)(c,s,h),ke=We.margin,je=We.innerWidth,Ee=We.innerHeight,Be=We.outerWidth,Re=We.outerHeight,Ve=T({data:t,valueFormat:d,width:je,height:Ee,forceSquare:v,xInnerPadding:m,xOuterPadding:y,yInnerPadding:w,yOuterPadding:P,sizeVariation:I,colors:ce,emptyColor:se,opacity:k,activeOpacity:E,inactiveOpacity:F,borderColor:G,label:re,labelTextColor:le,hoverTarget:Me}),Fe=Ve.width,Ae=Ve.height,ze=Ve.offsetX,qe=Ve.offsetY,Xe=Ve.xScale,Ye=Ve.yScale,Ge=Ve.cells,He=Ve.colorScale,De=Ve.activeCell,_e=Ve.setActiveCell,Ne=(0,n.useMemo)((function(){return g({},ke,{top:ke.top+qe,left:ke.left+ze})}),[ke,ze,qe]),Ze={grid:null,axes:null,cells:null,legends:null,annotations:null};l.includes("grid")&&(Ze.grid=(0,u.jsx)(r.rj,{width:Fe,height:Ae,xScale:D?Xe:null,yScale:N?Ye:null},"grid")),l.includes("axes")&&(Ze.axes=(0,u.jsx)(r.dk,{xScale:Xe,yScale:Ye,width:Fe,height:Ae,top:J,right:Q,bottom:$,left:te},"axes")),l.includes("cells")&&(Ze.cells=(0,u.jsx)(n.Fragment,{children:(0,u.jsx)(R,{cells:Ge,cellComponent:L,borderRadius:z,borderWidth:X,isInteractive:me,setActiveCell:_e,onMouseEnter:be,onMouseMove:pe,onMouseLeave:ye,onClick:Ce,tooltip:Oe,enableLabels:ne})},"cells")),l.includes("legends")&&null!==He&&(Ze.legends=(0,u.jsx)(n.Fragment,{children:fe.map((function(e,t){return(0,n.createElement)(a.Bo,g({},e,{key:t,containerWidth:Fe,containerHeight:Ae,scale:He}))}))},"legends")),l.includes("annotations")&&ge.length>0&&(Ze.annotations=(0,u.jsx)(V,{cells:Ge,annotations:ge},"annotations"));var Je={cells:Ge,activeCell:De,setActiveCell:_e};return(0,u.jsx)(o.tM,{width:Be,height:Re,margin:Object.assign({},Ne,{top:Ne.top,left:Ne.left}),role:Ie,ariaLabel:Se,ariaLabelledBy:Te,ariaDescribedBy:Le,children:l.map((function(e,t){var i;return"function"==typeof e?(0,u.jsx)(n.Fragment,{children:(0,n.createElement)(e,Je)},t):null!=(i=null==Ze?void 0:Ze[e])?i:null}))})},z=function(e){var t=e.isInteractive,i=void 0===t?b.isInteractive:t,n=e.animate,r=void 0===n?b.animate:n,a=e.motionConfig,l=void 0===a?b.motionConfig:a,d=e.theme,c=e.renderWrapper,s=x(e,F);return(0,u.jsx)(o.W2,{animate:r,isInteractive:i,motionConfig:l,renderWrapper:c,theme:d,children:(0,u.jsx)(A,g({isInteractive:i},s))})},q=function(e){return(0,u.jsx)(o.d,{children:function(t){var i=t.width,n=t.height;return(0,u.jsx)(z,g({width:i,height:n},e))}})},X=function(e,t){var i=t.cell,n=i.x,o=i.y,r=i.width,a=i.height,l=i.color,d=i.borderColor,c=i.opacity,u=i.labelTextColor,s=i.label,h=t.borderWidth,f=t.enableLabels,v=t.theme;e.save(),e.globalAlpha=c,e.fillStyle=l,h>0&&(e.strokeStyle=d,e.lineWidth=h),e.fillRect(n-r/2,o-a/2,r,a),h>0&&e.strokeRect(n-r/2,o-a/2,r,a),f&&(e.fillStyle=u,e.font=(v.labels.text.fontWeight?v.labels.text.fontWeight+" ":"")+v.labels.text.fontSize+"px "+v.labels.text.fontFamily,e.textAlign="center",e.textBaseline="middle",e.fillText(s,n,o)),e.restore()},Y=function(e,t){var i=t.cell,n=i.x,o=i.y,r=i.width,a=i.height,l=i.color,d=i.borderColor,c=i.opacity,u=i.labelTextColor,s=i.label,h=t.borderWidth,f=t.enableLabels,v=t.theme;e.save(),e.globalAlpha=c;var g=Math.min(r,a)/2;e.fillStyle=l,h>0&&(e.strokeStyle=d,e.lineWidth=h),e.beginPath(),e.arc(n,o,g,0,2*Math.PI),e.fill(),h>0&&e.stroke(),f&&(e.fillStyle=u,e.font=(v.labels.text.fontWeight?v.labels.text.fontWeight+" ":"")+v.labels.text.fontSize+"px "+v.labels.text.fontFamily,e.textAlign="center",e.textBaseline="middle",e.fillText(s,n,o)),e.restore()},G=["theme","isInteractive","animate","motionConfig","renderWrapper"],H=function(e){var t,i=e.data,l=e.layers,s=void 0===l?p.layers:l,h=e.valueFormat,f=e.width,v=e.height,x=e.margin,m=e.xInnerPadding,b=void 0===m?p.xInnerPadding:m,y=e.xOuterPadding,C=void 0===y?p.xOuterPadding:y,w=e.yInnerPadding,M=void 0===w?p.yInnerPadding:w,P=e.yOuterPadding,O=void 0===P?p.yOuterPadding:P,I=e.forceSquare,S=void 0===I?p.forceSquare:I,W=e.sizeVariation,k=void 0===W?p.sizeVariation:W,j=e.renderCell,E=void 0===j?p.renderCell:j,B=e.opacity,R=void 0===B?p.opacity:B,V=e.activeOpacity,F=void 0===V?p.activeOpacity:V,A=e.inactiveOpacity,z=void 0===A?p.inactiveOpacity:A,q=e.borderWidth,G=void 0===q?p.borderWidth:q,H=e.borderColor,D=void 0===H?p.borderColor:H,_=e.enableGridX,N=void 0===_?p.enableGridX:_,Z=e.enableGridY,J=void 0===Z?p.enableGridY:Z,K=e.axisTop,Q=void 0===K?p.axisTop:K,U=e.axisRight,$=void 0===U?p.axisRight:U,ee=e.axisBottom,te=void 0===ee?p.axisBottom:ee,ie=e.axisLeft,ne=void 0===ie?p.axisLeft:ie,oe=e.enableLabels,re=void 0===oe?p.enableLabels:oe,ae=e.label,le=void 0===ae?p.label:ae,de=e.labelTextColor,ce=void 0===de?p.labelTextColor:de,ue=e.colors,se=void 0===ue?p.colors:ue,he=e.emptyColor,fe=void 0===he?p.emptyColor:he,ve=e.legends,ge=void 0===ve?p.legends:ve,xe=e.annotations,me=void 0===xe?p.annotations:xe,be=e.isInteractive,pe=void 0===be?p.isInteractive:be,ye=e.onClick,Ce=e.hoverTarget,we=void 0===Ce?p.hoverTarget:Ce,Me=e.tooltip,Pe=void 0===Me?p.tooltip:Me,Oe=e.role,Ie=e.ariaLabel,Se=e.ariaLabelledBy,Te=e.ariaDescribedBy,Le=e.pixelRatio,We=void 0===Le?p.pixelRatio:Le,ke=(0,n.useRef)(null),je=(0,o.Bs)(f,v,x),Ee=je.margin,Be=je.innerWidth,Re=je.innerHeight,Ve=je.outerWidth,Fe=je.outerHeight,Ae=T({data:i,valueFormat:h,width:Be,height:Re,xInnerPadding:b,xOuterPadding:C,yInnerPadding:M,yOuterPadding:O,forceSquare:S,sizeVariation:k,colors:se,emptyColor:fe,opacity:R,activeOpacity:F,inactiveOpacity:z,borderColor:D,label:le,labelTextColor:ce,hoverTarget:we}),ze=Ae.width,qe=Ae.height,Xe=Ae.offsetX,Ye=Ae.offsetY,Ge=Ae.xScale,He=Ae.yScale,De=Ae.cells,_e=Ae.colorScale,Ne=Ae.activeCell,Ze=Ae.setActiveCell,Je=(0,n.useMemo)((function(){return g({},Ee,{top:Ee.top+Ye,left:Ee.left+Xe})}),[Ee,Xe,Ye]),Ke=L(De,me),Qe=(0,d.zs)({annotations:Ke});t="function"==typeof E?E:"circle"===E?Y:X;var Ue=(0,o.Fg)(),$e=(0,n.useMemo)((function(){return{cells:De,activeCell:Ne,setActiveCell:Ze}}),[De,Ne,Ze]);(0,n.useEffect)((function(){if(null!==ke.current){var e=ke.current.getContext("2d");e&&(ke.current.width=Ve*We,ke.current.height=Fe*We,e.scale(We,We),e.fillStyle=Ue.background,e.fillRect(0,0,Ve,Fe),e.translate(Je.left,Je.top),s.forEach((function(i){"grid"===i?(e.lineWidth=Ue.grid.line.strokeWidth,e.strokeStyle=Ue.grid.line.stroke,N&&(0,r.FA)(e,{width:ze,height:qe,scale:Ge,axis:"x"}),J&&(0,r.FA)(e,{width:ze,height:qe,scale:He,axis:"y"})):"axes"===i?(0,r.DZ)(e,{xScale:Ge,yScale:He,width:ze,height:qe,top:Q,right:$,bottom:te,left:ne,theme:Ue}):"cells"===i?(e.textAlign="center",e.textBaseline="middle",De.forEach((function(i){t(e,{cell:i,borderWidth:G,enableLabels:re,theme:Ue})}))):"legends"===i&&null!==_e?ge.forEach((function(t){(0,a.aJ)(e,g({},t,{containerWidth:ze,containerHeight:qe,scale:_e,theme:Ue}))})):"annotations"===i?(0,d.dS)(e,{annotations:Qe,theme:Ue}):"function"==typeof i&&i(e,$e)})))}}),[ke,We,Ve,Fe,ze,qe,Je,s,$e,De,t,N,J,Q,$,te,ne,Ge,He,Ue,G,re,_e,ge,Qe]);var et=(0,c.lL)(),tt=et.showTooltipFromEvent,it=et.hideTooltip,nt=(0,n.useCallback)((function(e){if(null!==ke.current){var t=(0,o.P6)(ke.current,e),i=t[0],r=t[1],a=De.find((function(e){return(0,o.zn)(e.x+Je.left-e.width/2,e.y+Je.top-e.height/2,e.width,e.height,i,r)}));void 0!==a?(Ze(a),tt((0,n.createElement)(Pe,{cell:a}),e)):(Ze(null),it())}}),[ke,De,Je,Ze,tt,it,Pe]),ot=(0,n.useCallback)((function(){Ze(null),it()}),[Ze,it]),rt=(0,n.useCallback)((function(e){null!==Ne&&(null==ye||ye(Ne,e))}),[Ne,ye]);return(0,u.jsx)("canvas",{ref:ke,width:Ve*We,height:Fe*We,style:{width:Ve,height:Fe},onMouseEnter:pe?nt:void 0,onMouseMove:pe?nt:void 0,onMouseLeave:pe?ot:void 0,onClick:pe?rt:void 0,role:Oe,"aria-label":Ie,"aria-labelledby":Se,"aria-describedby":Te})},D=function(e){var t=e.theme,i=e.isInteractive,n=void 0===i?p.isInteractive:i,r=e.animate,a=void 0===r?p.animate:r,l=e.motionConfig,d=void 0===l?p.motionConfig:l,c=e.renderWrapper,s=x(e,G);return(0,u.jsx)(o.W2,{isInteractive:n,animate:a,motionConfig:d,theme:t,renderWrapper:c,children:(0,u.jsx)(H,g({isInteractive:n},s))})},_=function(e){return(0,u.jsx)(o.d,{children:function(t){var i=t.width,n=t.height;return(0,u.jsx)(D,g({width:i,height:n},e))}})}}}]);