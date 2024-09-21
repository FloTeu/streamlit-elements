"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5939],{685939:function(e,n,o){o.r(n),o.d(n,{default:function(){return c}});var t=o(487462),r=o(667294),i=o(397500),a=o(785893);let s=!1;var c=r.forwardRef((function(e,n){return s||(console.warn(["MUI: The SpeedDial component was moved from the lab to the core.","","You should use `import { SpeedDial } from '@mui/material'`","or `import SpeedDial from '@mui/material/SpeedDial'`"].join("\n")),s=!0),(0,a.jsx)(i.Z,(0,t.Z)({ref:n},e))}))},397500:function(e,n,o){var t=o(263366),r=o(487462),i=o(667294),a=(o(659864),o(386010)),s=o(327192),c=o(311496),l=o(471657),u=o(202734),d=o(706585),p=o(798850),f=o(998216),m=o(571579),v=o(251705),Z=o(949299),D=o(740839),w=o(785893);const h=["ref"],g=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],b=["ref"];function S(e){return"up"===e||"down"===e?"vertical":"right"===e||"left"===e?"horizontal":void 0}const x=(0,c.ZP)("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`direction${(0,f.Z)(o.direction)}`]]}})((({theme:e,ownerState:n})=>(0,r.Z)({zIndex:e.zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},"up"===n.direction&&{flexDirection:"column-reverse",[`& .${D.Z.actions}`]:{flexDirection:"column-reverse",marginBottom:-32,paddingBottom:48}},"down"===n.direction&&{flexDirection:"column",[`& .${D.Z.actions}`]:{flexDirection:"column",marginTop:-32,paddingTop:48}},"left"===n.direction&&{flexDirection:"row-reverse",[`& .${D.Z.actions}`]:{flexDirection:"row-reverse",marginRight:-32,paddingRight:48}},"right"===n.direction&&{flexDirection:"row",[`& .${D.Z.actions}`]:{flexDirection:"row",marginLeft:-32,paddingLeft:48}}))),E=(0,c.ZP)(p.Z,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(e,n)=>n.fab})((()=>({pointerEvents:"auto"}))),y=(0,c.ZP)("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.actions,!o.open&&n.actionsClosed]}})((({ownerState:e})=>(0,r.Z)({display:"flex",pointerEvents:"auto"},!e.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"}))),C=i.forwardRef((function(e,n){const o=(0,l.Z)({props:e,name:"MuiSpeedDial"}),c=(0,u.Z)(),p={enter:c.transitions.duration.enteringScreen,exit:c.transitions.duration.leavingScreen},{ariaLabel:C,FabProps:{ref:M}={},children:P,className:R,direction:T="up",hidden:k=!1,icon:F,onBlur:L,onClose:$,onFocus:N,onKeyDown:j,onMouseEnter:I,onMouseLeave:B,onOpen:z,open:K,TransitionComponent:_=d.Z,transitionDuration:A=p,TransitionProps:O}=o,U=(0,t.Z)(o.FabProps,h),V=(0,t.Z)(o,g),[Y,q]=(0,Z.Z)({controlled:K,default:!1,name:"SpeedDial",state:"open"}),G=(0,r.Z)({},o,{open:Y,direction:T}),H=(e=>{const{classes:n,open:o,direction:t}=e,r={root:["root",`direction${(0,f.Z)(t)}`],fab:["fab"],actions:["actions",!o&&"actionsClosed"]};return(0,s.Z)(r,D.D,n)})(G),J=i.useRef();i.useEffect((()=>()=>{clearTimeout(J.current)}),[]);const Q=i.useRef(0),W=i.useRef(),X=i.useRef([]);X.current=[X.current[0]];const ee=i.useCallback((e=>{X.current[0]=e}),[]),ne=(0,v.Z)(M,ee),oe=(e,n)=>o=>{X.current[e+1]=o,n&&n(o)};i.useEffect((()=>{Y||(Q.current=0,W.current=void 0)}),[Y]);const te=e=>{"mouseleave"===e.type&&B&&B(e),"blur"===e.type&&L&&L(e),clearTimeout(J.current),"blur"===e.type?J.current=setTimeout((()=>{q(!1),$&&$(e,"blur")})):(q(!1),$&&$(e,"mouseLeave"))},re=e=>{"mouseenter"===e.type&&I&&I(e),"focus"===e.type&&N&&N(e),clearTimeout(J.current),Y||(J.current=setTimeout((()=>{if(q(!0),z){z(e,{focus:"focus",mouseenter:"mouseEnter"}[e.type])}})))},ie=C.replace(/^[^a-z]+|[^\w:.-]+/gi,""),ae=i.Children.toArray(P).filter((e=>i.isValidElement(e))),se=ae.map(((e,n)=>{const o=e.props,{FabProps:{ref:a}={},tooltipPlacement:s}=o,c=(0,t.Z)(o.FabProps,b),l=s||("vertical"===S(T)?"left":"top");return i.cloneElement(e,{FabProps:(0,r.Z)({},c,{ref:oe(n,a)}),delay:30*(Y?n:ae.length-n),open:Y,tooltipPlacement:l,id:`${ie}-action-${n}`})}));return(0,w.jsxs)(x,(0,r.Z)({className:(0,a.default)(H.root,R),ref:n,role:"presentation",onKeyDown:e=>{j&&j(e);const n=e.key.replace("Arrow","").toLowerCase(),{current:o=n}=W;if("Escape"===e.key)return q(!1),X.current[0].focus(),void($&&$(e,"escapeKeyDown"));if(S(n)===S(o)&&void 0!==S(n)){e.preventDefault();const a=n===o?1:-1,s=(t=Q.current+a,r=0,i=X.current.length-1,t<r?r:t>i?i:t);X.current[s].focus(),Q.current=s,W.current=o}var t,r,i},onBlur:te,onFocus:re,onMouseEnter:re,onMouseLeave:te,ownerState:G},V,{children:[(0,w.jsx)(_,(0,r.Z)({in:!k,timeout:A,unmountOnExit:!0},O,{children:(0,w.jsx)(E,(0,r.Z)({color:"primary","aria-label":C,"aria-haspopup":"true","aria-expanded":Y,"aria-controls":`${ie}-actions`},U,{onClick:e=>{U.onClick&&U.onClick(e),clearTimeout(J.current),Y?(q(!1),$&&$(e,"toggle")):(q(!0),z&&z(e,"toggle"))},className:(0,a.default)(H.fab,U.className),ref:ne,ownerState:G,children:i.isValidElement(F)&&(0,m.Z)(F,["SpeedDialIcon"])?i.cloneElement(F,{open:Y}):F}))})),(0,w.jsx)(y,{id:`${ie}-actions`,role:"menu","aria-orientation":S(T),className:(0,a.default)(H.actions,!Y&&H.actionsClosed),ownerState:G,children:se})]}))}));n.Z=C},740839:function(e,n,o){o.d(n,{D:function(){return r}});var t=o(428979);function r(e){return(0,t.Z)("MuiSpeedDial",e)}const i=(0,o(976087).Z)("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]);n.Z=i}}]);