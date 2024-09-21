"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1146],{691146:function(e,n,t){t.r(n),t.d(n,{Network:function(){return Z},NetworkCanvas:function(){return q},ResponsiveNetwork:function(){return P},ResponsiveNetworkCanvas:function(){return O},canvasDefaultProps:function(){return N},commonDefaultProps:function(){return b},svgDefaultProps:function(){return z},useNetwork:function(){return W},useNodeAnnotations:function(){return j}});var i=t(667294),o=t(543060),r=t(281472),d=t(785893),a=t(449742),c=t(627898),s=t(608691);function l(e){return e.index}function u(e,n){var t=e.get(n);if(!t)throw new Error("node not found: "+n);return t}function v(e){var n,t,i,o,r,d,a=l,v=function(e){return 1/Math.min(o[e.source.index],o[e.target.index])},f=(0,c.Z)(30),h=1;function g(i){for(var o=0,a=e.length;o<h;++o)for(var c,l,u,v,f,g,k,x=0;x<a;++x)l=(c=e[x]).source,v=(u=c.target).x+u.vx-l.x-l.vx||(0,s.Z)(d),f=u.y+u.vy-l.y-l.vy||(0,s.Z)(d),v*=g=((g=Math.sqrt(v*v+f*f))-t[x])/g*i*n[x],f*=g,u.vx-=v*(k=r[x]),u.vy-=f*k,l.vx+=v*(k=1-k),l.vy+=f*k}function k(){if(i){var d,c,s=i.length,l=e.length,v=new Map(i.map(((e,n)=>[a(e,n,i),e])));for(d=0,o=new Array(s);d<l;++d)(c=e[d]).index=d,"object"!==typeof c.source&&(c.source=u(v,c.source)),"object"!==typeof c.target&&(c.target=u(v,c.target)),o[c.source.index]=(o[c.source.index]||0)+1,o[c.target.index]=(o[c.target.index]||0)+1;for(d=0,r=new Array(l);d<l;++d)c=e[d],r[d]=o[c.source.index]/(o[c.source.index]+o[c.target.index]);n=new Array(l),x(),t=new Array(l),y()}}function x(){if(i)for(var t=0,o=e.length;t<o;++t)n[t]=+v(e[t],t,e)}function y(){if(i)for(var n=0,o=e.length;n<o;++n)t[n]=+f(e[n],n,e)}return null==e&&(e=[]),g.initialize=function(e,n){i=e,d=n,k()},g.links=function(n){return arguments.length?(e=n,k(),g):e},g.id=function(e){return arguments.length?(a=e,g):a},g.iterations=function(e){return arguments.length?(h=+e,g):h},g.strength=function(e){return arguments.length?(v="function"===typeof e?e:(0,c.Z)(+e),x(),g):v},g.distance=function(e){return arguments.length?(f="function"===typeof e?e:(0,c.Z)(+e),y(),g):f},g}var f=t(547148),h=t(587503);function g(){var e,n,t,i,o,r=(0,c.Z)(-30),d=1,a=1/0,l=.81;function u(t){var o,r=e.length,d=(0,f.Z)(e,h.x,h.y).visitAfter(g);for(i=t,o=0;o<r;++o)n=e[o],d.visit(k)}function v(){if(e){var n,t,i=e.length;for(o=new Array(i),n=0;n<i;++n)t=e[n],o[t.index]=+r(t,n,e)}}function g(e){var n,t,i,r,d,a=0,c=0;if(e.length){for(i=r=d=0;d<4;++d)(n=e[d])&&(t=Math.abs(n.value))&&(a+=n.value,c+=t,i+=t*n.x,r+=t*n.y);e.x=i/c,e.y=r/c}else{(n=e).x=n.data.x,n.y=n.data.y;do{a+=o[n.data.index]}while(n=n.next)}e.value=a}function k(e,r,c,u){if(!e.value)return!0;var v=e.x-n.x,f=e.y-n.y,h=u-r,g=v*v+f*f;if(h*h/l<g)return g<a&&(0===v&&(g+=(v=(0,s.Z)(t))*v),0===f&&(g+=(f=(0,s.Z)(t))*f),g<d&&(g=Math.sqrt(d*g)),n.vx+=v*e.value*i/g,n.vy+=f*e.value*i/g),!0;if(!(e.length||g>=a)){(e.data!==n||e.next)&&(0===v&&(g+=(v=(0,s.Z)(t))*v),0===f&&(g+=(f=(0,s.Z)(t))*f),g<d&&(g=Math.sqrt(d*g)));do{e.data!==n&&(h=o[e.data.index]*i/g,n.vx+=v*h,n.vy+=f*h)}while(e=e.next)}}return u.initialize=function(n,i){e=n,t=i,v()},u.strength=function(e){return arguments.length?(r="function"===typeof e?e:(0,c.Z)(+e),v(),u):r},u.distanceMin=function(e){return arguments.length?(d=e*e,u):Math.sqrt(d)},u.distanceMax=function(e){return arguments.length?(a=e*e,u):Math.sqrt(a)},u.theta=function(e){return arguments.length?(l=e*e,u):Math.sqrt(l)},u}function k(e,n){var t,i=1;function o(){var o,r,d=t.length,a=0,c=0;for(o=0;o<d;++o)a+=(r=t[o]).x,c+=r.y;for(a=(a/d-e)*i,c=(c/d-n)*i,o=0;o<d;++o)(r=t[o]).x-=a,r.y-=c}return null==e&&(e=0),null==n&&(n=0),o.initialize=function(e){t=e},o.x=function(n){return arguments.length?(e=+n,o):e},o.y=function(e){return arguments.length?(n=+e,o):n},o.strength=function(e){return arguments.length?(i=+e,o):i},o}var x=t(649446),y=t(43790);function m(){return m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},m.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}var C=(0,i.memo)((function(e){var n=e.node,t=e.animated,i=e.onClick,o=e.onMouseEnter,a=e.onMouseMove,c=e.onMouseLeave;return(0,d.jsx)(r.animated.circle,{"data-testid":"node."+n.id,transform:(0,r.to)([t.x,t.y,t.scale],(function(e,n,t){return"translate("+e+","+n+") scale("+t+")"})),r:(0,r.to)([t.size],(function(e){return e/2})),fill:t.color,strokeWidth:t.borderWidth,stroke:t.borderColor,opacity:t.opacity,onClick:i?function(e){return i(n,e)}:void 0,onMouseEnter:o?function(e){return o(n,e)}:void 0,onMouseMove:a?function(e){return a(n,e)}:void 0,onMouseLeave:c?function(e){return c(n,e)}:void 0})})),M=(0,i.memo)((function(e){var n=e.link,t=e.animated,i=e.blendMode;return(0,d.jsx)(r.animated.line,{"data-testid":"link."+n.id,stroke:t.color,style:{mixBlendMode:i},strokeWidth:n.thickness,strokeLinecap:"round",opacity:t.opacity,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2})})),b={layers:["links","nodes","annotations"],linkDistance:30,centeringStrength:1,repulsivity:10,distanceMin:1,distanceMax:1/0,iterations:120,nodeSize:12,activeNodeSize:18,inactiveNodeSize:8,nodeColor:"#000000",nodeBorderWidth:0,nodeBorderColor:{from:"color"},linkThickness:1,linkColor:{from:"source.color"},isInteractive:!0,defaultActiveNodeIds:[],nodeTooltip:function(e){var n=e.node;return(0,d.jsx)(a._5,{id:n.id,enableChip:!0,color:n.color})},annotations:[],animate:!0,motionConfig:"gentle",role:"img"},z=m({},b,{nodeComponent:C,linkComponent:M,linkBlendMode:"normal"}),N=m({},b,{renderNode:function(e,n){e.fillStyle=n.color,e.beginPath(),e.arc(n.x,n.y,n.size/2,0,2*Math.PI),e.fill(),n.borderWidth>0&&(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.stroke())},renderLink:function(e,n){e.strokeStyle=n.color,e.lineWidth=n.thickness,e.beginPath(),e.moveTo(n.source.x,n.source.y),e.lineTo(n.target.x,n.target.y),e.stroke()},pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),S=["index"],I=function(e){return(0,i.useMemo)((function(){return"function"==typeof e?e:function(){return e}}),[e])},W=function(e){var n=e.center,t=e.nodes,r=e.links,d=e.linkDistance,a=void 0===d?b.linkDistance:d,c=e.centeringStrength,s=void 0===c?b.centeringStrength:c,l=e.repulsivity,u=void 0===l?b.repulsivity:l,f=e.distanceMin,y=void 0===f?b.distanceMin:f,C=e.distanceMax,M=void 0===C?b.distanceMax:C,z=e.iterations,N=void 0===z?b.iterations:z,W=e.nodeSize,w=void 0===W?b.nodeSize:W,B=e.activeNodeSize,j=void 0===B?b.activeNodeSize:B,A=e.inactiveNodeSize,E=void 0===A?b.inactiveNodeSize:A,T=e.nodeColor,D=void 0===T?b.nodeColor:T,L=e.nodeBorderWidth,Z=void 0===L?b.nodeBorderWidth:L,P=e.nodeBorderColor,F=void 0===P?b.nodeBorderColor:P,R=e.linkThickness,q=void 0===R?b.linkThickness:R,O=e.linkColor,_=void 0===O?b.linkColor:O,H=e.isInteractive,G=void 0===H?b.isInteractive:H,J=e.defaultActiveNodeIds,K=void 0===J?b.defaultActiveNodeIds:J,Q=(0,i.useState)(null),U=Q[0],V=Q[1],X=(0,i.useState)(null),Y=X[0],$=X[1],ee=function(e){var n=e.centeringStrength,t=e.repulsivity,o=e.distanceMin,r=e.distanceMax,d=e.center,a=I(e.linkDistance),c=d[0],s=d[1];return(0,i.useMemo)((function(){return{link:v().distance((function(e){return a(e.data)})).strength(n),charge:g().strength(-t).distanceMin(o).distanceMax(r),center:k(c,s)}}),[a,n,t,o,r,c,s])}({linkDistance:a,centeringStrength:s,repulsivity:u,distanceMin:y,distanceMax:M,center:n});(0,i.useEffect)((function(){var e=t.map((function(e){return{id:e.id,data:m({},e),index:0,x:0,y:0,vx:0,vy:0}})),n=r.map((function(n){return{data:m({},n),index:0,source:e.find((function(e){return e.id===n.source})),target:e.find((function(e){return e.id===n.target}))}})),i=(0,h.Z)(e).force("link",ee.link.links(n)).force("charge",ee.charge).force("center",ee.center).stop();return i.tick(N),V(e),$(n),function(){i.stop()}}),[t,r,ee,N,V,$]);var ne=(0,i.useState)(K),te=ne[0],ie=ne[1],oe=function(e){var n=e.size,t=e.activeSize,r=e.inactiveSize,d=e.color,a=e.borderWidth,c=e.borderColor,s=e.isInteractive,l=e.activeNodeIds,u=(0,o.Fg)(),v=I(n),f=I(d),h=I(a),g=(0,x.Bf)(c,u),k=(0,i.useCallback)((function(e){var n=f(e.data);return{size:v(e.data),color:n,borderWidth:h(e.data),borderColor:g(m({},e,{color:n}))}}),[v,f,h,g]),y=I(t),p=(0,i.useCallback)((function(e){var n=f(e.data);return{size:y(e.data),color:n,borderWidth:h(e.data),borderColor:g(m({},e,{color:n}))}}),[y,f,h,g]),C=I(r),M=(0,i.useCallback)((function(e){var n=f(e.data);return{size:C(e.data),color:n,borderWidth:h(e.data),borderColor:g(m({},e,{color:n}))}}),[C,f,h,g]);return(0,i.useCallback)((function(e){return s&&0!==l.length?l.includes(e.id)?p(e):M(e):k(e)}),[k,p,M,s,l])}({size:w,activeSize:j,inactiveSize:E,color:D,borderWidth:Z,borderColor:F,isInteractive:G,activeNodeIds:te}),re=(0,i.useMemo)((function(){return null===U?null:U.map((function(e){return m({},e,oe(e))}))}),[U,oe]),de=(0,o.Fg)(),ae=I(q),ce=(0,x.Bf)(_,de),se=(0,i.useMemo)((function(){return null===Y||null===re?null:Y.map((function(e){var n=e.index,t=p(e,S),i={id:t.source.id+"."+t.target.id,data:t.data,index:n,source:re.find((function(e){return e.id===t.source.id})),target:re.find((function(e){return e.id===t.target.id}))};return m({},i,{thickness:ae(i),color:ce(i)})}))}),[Y,re,ae,ce]);return{nodes:re,links:se,activeNodeIds:te,setActiveNodeIds:ie}},w=function(e){return{x:e.x,y:e.y}},B=function(e){return{size:e.size,width:e.size,height:e.size}},j=function(e,n){return(0,y.O2)({data:e,annotations:n,getPosition:w,getDimensions:B})},A=function(e){var n=e.links,t=e.linkComponent,a=e.blendMode,c=(0,o.tf)(),s=c.animate,l=c.config,u=(0,i.useMemo)((function(){return[function(e){return{x1:e.source.x,y1:e.source.y,x2:e.source.x,y2:e.source.y,color:e.color,opacity:0}},function(e){return{x1:e.source.x,y1:e.source.y,x2:e.target.x,y2:e.target.y,color:e.color,opacity:1}}]}),[]),v=u[0],f=u[1],h=(0,r.useTransition)(n,{keys:function(e){return e.id},initial:f,from:v,enter:f,update:f,expires:!0,config:l,immediate:!s});return(0,d.jsx)(d.Fragment,{children:h((function(e,n){return(0,i.createElement)(t,{key:n.id,link:n,animated:e,blendMode:a})}))})},E=function(e){var n=e.nodes,t=e.nodeComponent,c=e.onMouseEnter,s=e.onMouseMove,l=e.onMouseLeave,u=e.onClick,v=e.tooltip,f=e.setActiveNodeIds,h=e.isInteractive,g=(0,o.tf)(),k=g.animate,x=g.config,y=(0,i.useMemo)((function(){return[function(e){return{x:e.x,y:e.y,size:e.size,color:e.color,borderWidth:e.borderWidth,borderColor:e.borderColor,scale:0,opacity:0}},function(e){return{x:e.x,y:e.y,size:e.size,color:e.color,borderWidth:e.borderWidth,borderColor:e.borderColor,scale:1,opacity:1}},function(e){return{x:e.x,y:e.y,size:e.size,color:e.color,borderWidth:e.borderWidth,borderColor:e.borderColor,scale:0,opacity:0}}]}),[]),m=y[0],p=y[1],C=y[2],M=(0,r.useTransition)(n,{keys:function(e){return e.id},initial:p,from:m,enter:p,update:p,leave:C,config:x,immediate:!k}),b=(0,a.lL)(),z=b.showTooltipFromEvent,N=b.hideTooltip,S=(0,i.useCallback)((function(e,n){z((0,i.createElement)(v,{node:e}),n),f([e.id]),null==c||c(e,n)}),[z,v,f,c]),I=(0,i.useCallback)((function(e,n){z((0,i.createElement)(v,{node:e}),n),null==s||s(e,n)}),[z,v,s]),W=(0,i.useCallback)((function(e,n){N(),f([]),null==l||l(e,n)}),[N,f,l]);return(0,d.jsx)(d.Fragment,{children:M((function(e,n){return(0,i.createElement)(t,{key:n.id,node:n,animated:e,onMouseEnter:h?S:void 0,onMouseMove:h?I:void 0,onMouseLeave:h?W:void 0,onClick:h?u:void 0})}))})},T=function(e){var n=e.nodes,t=e.annotations,i=j(n,t);return(0,d.jsx)(d.Fragment,{children:i.map((function(e,n){return(0,d.jsx)(y.q6,m({},e),n)}))})},D=["isInteractive","animate","motionConfig","theme","renderWrapper"],L=function(e){var n=e.width,t=e.height,r=e.margin,a=e.data,c=a.nodes,s=a.links,l=e.linkDistance,u=void 0===l?z.linkDistance:l,v=e.centeringStrength,f=void 0===v?z.centeringStrength:v,h=e.repulsivity,g=void 0===h?z.repulsivity:h,k=e.distanceMin,x=void 0===k?z.distanceMin:k,y=e.distanceMax,m=void 0===y?z.distanceMax:y,p=e.iterations,C=void 0===p?z.iterations:p,M=e.layers,b=void 0===M?z.layers:M,N=e.nodeComponent,S=void 0===N?z.nodeComponent:N,I=e.nodeSize,w=void 0===I?z.nodeSize:I,B=e.activeNodeSize,j=void 0===B?z.activeNodeSize:B,D=e.inactiveNodeSize,L=void 0===D?z.inactiveNodeSize:D,Z=e.nodeColor,P=void 0===Z?z.nodeColor:Z,F=e.nodeBorderWidth,R=void 0===F?z.nodeBorderWidth:F,q=e.nodeBorderColor,O=void 0===q?z.nodeBorderColor:q,_=e.linkComponent,H=void 0===_?z.linkComponent:_,G=e.linkThickness,J=void 0===G?z.linkThickness:G,K=e.linkColor,Q=void 0===K?z.linkColor:K,U=e.linkBlendMode,V=void 0===U?z.linkBlendMode:U,X=e.annotations,Y=void 0===X?z.annotations:X,$=e.isInteractive,ee=void 0===$?z.isInteractive:$,ne=e.defaultActiveNodeIds,te=void 0===ne?z.defaultActiveNodeIds:ne,ie=e.nodeTooltip,oe=void 0===ie?z.nodeTooltip:ie,re=e.onMouseEnter,de=e.onMouseMove,ae=e.onMouseLeave,ce=e.onClick,se=e.role,le=void 0===se?z.role:se,ue=e.ariaLabel,ve=e.ariaLabelledBy,fe=e.ariaDescribedBy,he=(0,o.Bs)(n,t,r),ge=he.margin,ke=he.innerWidth,xe=he.innerHeight,ye=he.outerWidth,me=he.outerHeight,pe=W({center:[ke/2,xe/2],nodes:c,links:s,linkDistance:u,centeringStrength:f,repulsivity:g,distanceMin:x,distanceMax:m,iterations:C,nodeSize:w,activeNodeSize:j,inactiveNodeSize:L,nodeColor:P,nodeBorderWidth:R,nodeBorderColor:O,linkThickness:J,linkColor:Q,isInteractive:ee,defaultActiveNodeIds:te}),Ce=pe.nodes,Me=pe.links,be=pe.activeNodeIds,ze=pe.setActiveNodeIds,Ne={links:null,nodes:null,annotations:null};b.includes("links")&&null!==Me&&(Ne.links=(0,d.jsx)(A,{links:Me,linkComponent:H,blendMode:V},"links")),b.includes("nodes")&&null!==Ce&&(Ne.nodes=(0,d.jsx)(E,{nodes:Ce,nodeComponent:S,onMouseEnter:re,onMouseMove:de,onMouseLeave:ae,onClick:ce,tooltip:oe,setActiveNodeIds:ze,isInteractive:ee},"nodes")),b.includes("annotations")&&null!==Ce&&(Ne.annotations=(0,d.jsx)(T,{nodes:Ce,annotations:Y},"annotations"));var Se=(0,i.useMemo)((function(){return{nodes:Ce||[],links:Me||[],activeNodeIds:be,setActiveNodeIds:ze}}),[Ce,Me,be,ze]);return(0,d.jsx)(o.tM,{width:ye,height:me,margin:ge,role:le,ariaLabel:ue,ariaLabelledBy:ve,ariaDescribedBy:fe,children:b.map((function(e,n){var t;return"function"==typeof e?(0,d.jsx)(i.Fragment,{children:(0,i.createElement)(e,Se)},n):null!=(t=null==Ne?void 0:Ne[e])?t:null}))})},Z=function(e){var n=e.isInteractive,t=void 0===n?z.isInteractive:n,i=e.animate,r=void 0===i?z.animate:i,a=e.motionConfig,c=void 0===a?z.motionConfig:a,s=e.theme,l=e.renderWrapper,u=p(e,D);return(0,d.jsx)(o.W2,{animate:r,isInteractive:t,motionConfig:c,renderWrapper:l,theme:s,children:(0,d.jsx)(L,m({isInteractive:t},u))})},P=function(e){return(0,d.jsx)(o.d,{children:function(n){var t=n.width,i=n.height;return(0,d.jsx)(Z,m({width:t,height:i},e))}})},F=["theme","isInteractive","animate","motionConfig","renderWrapper"],R=function(e){var n=e.width,t=e.height,r=e.margin,c=e.pixelRatio,s=void 0===c?N.pixelRatio:c,l=e.data,u=l.nodes,v=l.links,f=e.linkDistance,h=void 0===f?N.linkDistance:f,g=e.centeringStrength,k=void 0===g?N.centeringStrength:g,x=e.repulsivity,m=void 0===x?N.repulsivity:x,p=e.distanceMin,C=void 0===p?N.distanceMin:p,M=e.distanceMax,b=void 0===M?N.distanceMax:M,z=e.iterations,S=void 0===z?N.iterations:z,I=e.layers,w=void 0===I?N.layers:I,B=e.renderNode,A=void 0===B?N.renderNode:B,E=e.nodeSize,T=void 0===E?N.nodeSize:E,D=e.activeNodeSize,L=void 0===D?N.activeNodeSize:D,Z=e.inactiveNodeSize,P=void 0===Z?N.inactiveNodeSize:Z,F=e.nodeColor,R=void 0===F?N.nodeColor:F,q=e.nodeBorderWidth,O=void 0===q?N.nodeBorderWidth:q,_=e.nodeBorderColor,H=void 0===_?N.nodeBorderColor:_,G=e.renderLink,J=void 0===G?N.renderLink:G,K=e.linkThickness,Q=void 0===K?N.linkThickness:K,U=e.linkColor,V=void 0===U?N.linkColor:U,X=e.annotations,Y=void 0===X?N.annotations:X,$=e.isInteractive,ee=void 0===$?N.isInteractive:$,ne=e.defaultActiveNodeIds,te=void 0===ne?N.defaultActiveNodeIds:ne,ie=e.nodeTooltip,oe=void 0===ie?N.nodeTooltip:ie,re=e.onClick,de=(0,i.useRef)(null),ae=(0,o.Bs)(n,t,r),ce=ae.margin,se=ae.innerWidth,le=ae.innerHeight,ue=ae.outerWidth,ve=ae.outerHeight,fe=W({center:[se/2,le/2],nodes:u,links:v,linkDistance:h,centeringStrength:k,repulsivity:m,distanceMin:C,distanceMax:b,iterations:S,nodeSize:T,activeNodeSize:L,inactiveNodeSize:P,nodeColor:R,nodeBorderWidth:O,nodeBorderColor:H,linkThickness:Q,linkColor:V,isInteractive:ee,defaultActiveNodeIds:te}),he=fe.nodes,ge=fe.links,ke=fe.activeNodeIds,xe=fe.setActiveNodeIds,ye=j(he,Y),me=(0,y.zs)({annotations:ye}),pe=(0,i.useMemo)((function(){return{nodes:he||[],links:ge||[],activeNodeIds:ke,setActiveNodeIds:xe}}),[he,ge,ke,xe]),Ce=(0,o.Fg)();(0,i.useEffect)((function(){if(null!==de.current){de.current.width=ue*s,de.current.height=ve*s;var e=de.current.getContext("2d");e.scale(s,s),e.fillStyle=Ce.background,e.fillRect(0,0,ue,ve),e.translate(ce.left,ce.top),w.forEach((function(n){"links"===n&&null!==ge?ge.forEach((function(n){return J(e,n)})):"nodes"===n&&null!==he?he.forEach((function(n){return A(e,n)})):"annotations"===n?(0,y.dS)(e,{annotations:me,theme:Ce}):"function"==typeof n&&null!==he&&null!==ge&&n(e,pe)}))}}),[de,ue,ve,ce.left,ce.top,s,w,Ce,he,ge,A,J,me,pe]);var Me=(0,i.useCallback)((function(e){if(de.current&&null!==he){var n=(0,o.P6)(de.current,e),t=n[0],i=n[1];return he.find((function(e){return(0,o.Sp)(e.x,e.y,t-ce.left,i-ce.top)<=e.size/2}))}}),[de,ce,he]),be=(0,a.lL)(),ze=be.showTooltipFromEvent,Ne=be.hideTooltip,Se=(0,i.useCallback)((function(e){var n=Me(e);n?(ze((0,i.createElement)(oe,{node:n}),e),xe([n.id])):(Ne(),xe([]))}),[Me,ze,oe,Ne,xe]),Ie=(0,i.useCallback)((function(){Ne(),xe([])}),[Ne,xe]),We=(0,i.useCallback)((function(e){if(re){var n=Me(e);n&&re(n,e)}}),[Me,re]);return(0,d.jsx)("canvas",{ref:de,width:ue*s,height:ve*s,style:{width:ue,height:ve,cursor:ee?"auto":"normal"},onClick:ee?We:void 0,onMouseEnter:ee?Se:void 0,onMouseLeave:ee?Ie:void 0,onMouseMove:ee?Se:void 0})},q=function(e){var n=e.theme,t=e.isInteractive,i=void 0===t?N.isInteractive:t,r=e.animate,a=void 0===r?N.animate:r,c=e.motionConfig,s=void 0===c?N.motionConfig:c,l=e.renderWrapper,u=p(e,F);return(0,d.jsx)(o.W2,{isInteractive:i,animate:a,motionConfig:s,theme:n,renderWrapper:l,children:(0,d.jsx)(R,m({isInteractive:i},u))})},O=function(e){return(0,d.jsx)(o.d,{children:function(n){var t=n.width,i=n.height;return(0,d.jsx)(q,m({width:t,height:i},e))}})}}}]);