"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8044],{878044:function(e,n,o){o.r(n),o.d(n,{default:function(){return g},getLinkUtilityClass:function(){return v},linkClasses:function(){return h}});var r=o(263366),t=o(487462),i=o(667294),a=o(386010),u=o(327192),s=o(354844),l=o(441796),c=o(998216),d=o(311496),p=o(471657),m=o(579674),f=o(251705),b=o(923972),y=o(428979);function v(e){return(0,y.Z)("MuiLink",e)}var h=(0,o(976087).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Z=o(785893);const k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},C=(0,d.ZP)(b.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`underline${(0,c.Z)(o.underline)}`],"button"===o.component&&n.button]}})((({theme:e,ownerState:n})=>{const o=(0,s.D)(e,`palette.${(e=>x[e]||e)(n.color)}`)||n.color;return(0,t.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==o?(0,l.Fq)(o,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${h.focusVisible}`]:{outline:"auto"}})}));var g=i.forwardRef((function(e,n){const o=(0,p.Z)({props:e,name:"MuiLink"}),{className:s,color:l="primary",component:d="a",onBlur:b,onFocus:y,TypographyClasses:h,underline:x="always",variant:g="inherit"}=o,w=(0,r.Z)(o,k),{isFocusVisibleRef:D,onBlur:S,onFocus:F,ref:N}=(0,m.Z)(),[V,L]=i.useState(!1),M=(0,f.Z)(n,N),R=(0,t.Z)({},o,{color:l,component:d,focusVisible:V,underline:x,variant:g}),A=(e=>{const{classes:n,component:o,focusVisible:r,underline:t}=e,i={root:["root",`underline${(0,c.Z)(t)}`,"button"===o&&"button",r&&"focusVisible"]};return(0,u.Z)(i,v,n)})(R);return(0,Z.jsx)(C,(0,t.Z)({className:(0,a.default)(A.root,s),classes:h,color:l,component:d,onBlur:e=>{S(e),!1===D.current&&L(!1),b&&b(e)},onFocus:e=>{F(e),!0===D.current&&L(!0),y&&y(e)},ref:M,ownerState:R,variant:g},w))}))}}]);