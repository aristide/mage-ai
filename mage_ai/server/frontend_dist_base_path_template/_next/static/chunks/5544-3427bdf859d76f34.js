"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5544],{81066:function(e,n,t){t.d(n,{B:function(){return p}});var o=t(82394),r=t(46732),i=t(68562),l=t(72473),c=t(8059),u=t(70515),a=t(28598);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p={bold:!0,greyBorder:!0,paddingBottom:9,paddingTop:9};n.Z=function(e){var n=e.addButtonMenuOpen,t=e.addButtonMenuRef,o=e.isLoading,s=e.label,f=e.menuItems,b=e.onClick,h=e.onClickCallback;return(0,a.jsx)(r.Z,{disableKeyboardShortcuts:!0,items:f,onClickCallback:h,onClickOutside:h,open:n,parentRef:t,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/NewItemMenu",children:(0,a.jsx)(i.ZP,d(d({},p),{},{background:c.eW,beforeElement:(0,a.jsx)(l.Add,{size:2.5*u.iI}),loading:o,onClick:function(e){e.preventDefault(),null==b||b()},uuid:"shared/AddButton/index",children:s}))})}},55072:function(e,n,t){t.d(n,{Et:function(){return p},Q:function(){return d}});t(82684);var o=t(71180),r=t(55485),i=t(38276),l=t(31748),c=t(72473),u=t(79633),a=t(70515),s=t(28598),d=30,p=9;n.ZP=function(e){var n=e.page,t=e.maxPages,d=e.onUpdate,p=e.totalPages,f=[],b=t;if(b>p)f=Array.from({length:p},(function(e,n){return n}));else{var h=Math.floor(b/2),g=n-h;n+h>=p?(g=p-b+2,b-=2):n-h<=0?(g=0,b-=2):(b-=4,g=n-Math.floor(b/2)),f=Array.from({length:b},(function(e,n){return n+g}))}return(0,s.jsx)(s.Fragment,{children:p>0&&(0,s.jsxs)(r.ZP,{alignItems:"center",children:[(0,s.jsx)(o.ZP,{disabled:0===n,onClick:function(){return d(n-1)},children:(0,s.jsx)(c.PaginateArrowLeft,{size:1.5*a.iI,stroke:l.Av})}),!f.includes(0)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{ml:1,children:(0,s.jsx)(o.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(0)},children:1})},0),!f.includes(1)&&(0,s.jsx)(i.Z,{ml:1,children:(0,s.jsx)(o.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),f.map((function(e){return(0,s.jsx)(i.Z,{ml:1,children:(0,s.jsx)(o.ZP,{backgroundColor:e===n&&u.a$,borderLess:!0,noBackground:!0,notClickable:e===n,onClick:function(){e!==n&&d(e)},children:e+1})},e)})),!f.includes(p-1)&&(0,s.jsxs)(s.Fragment,{children:[!f.includes(p-2)&&(0,s.jsx)(i.Z,{ml:1,children:(0,s.jsx)(o.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,s.jsx)(i.Z,{ml:1,children:(0,s.jsx)(o.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return d(p-1)},children:p})},p-1)]}),(0,s.jsx)(i.Z,{ml:1}),(0,s.jsx)(o.ZP,{disabled:n===p-1,onClick:function(){return d(n+1)},children:(0,s.jsx)(c.PaginateArrowRight,{size:1.5*a.iI,stroke:l.Av})})]})})}},85544:function(e,n,t){t.d(n,{Z:function(){return J}});var o=t(82394),r=t(75582),i=t(82684),l=t(34376),c=t(81066),u=t(79757),a=t(50724),s=t(97618),d=t(55485),p=t(46732),f=t(68562),b=t(89515),h=t(38276),g=t(30160),j=t(17488),m=t(71180),x=t(69650),y=t(9518),k=t(44897),O=t(42631),C=t(47041),v=t(70515),Z=74*v.iI,P=48*v.iI,w=y.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-18n432u-0"})(["position:absolute;border-radius:","px;overflow:hidden;width:","px;display:none;"," "," "," "," ",""],O.n_,Z,(function(e){return"\n    background-color: ".concat((e.theme||k.Z).background.panel,";\n    border: ").concat(O.mP,"px ").concat(O.M8," ").concat((e.theme||k.Z).interactive.defaultBackground,";\n    box-shadow: ").concat((e.theme.shadow||k.Z.shadow).window,";\n  ")}),(function(e){return e.display&&"\n    display: block;\n  "}),(function(e){return e.compact&&"\n    width: ".concat(.75*Z,"px;\n  ")}),(function(e){return void 0!==e.left&&"\n    left: ".concat(e.left,"px;\n  ")}),(function(e){return void 0!==e.top&&"\n    top: ".concat(e.top,"px;\n  ")})),I=y.default.div.withConfig({displayName:"indexstyle__MainStyle",componentId:"sc-18n432u-1"})(["display:flex;border-radius:","px;overflow:hidden;height:","px;"," ",""],O.n_,P,(function(e){return"\n    background-color: ".concat((e.theme||k.Z).background.content,";\n    border: ").concat(O.YF,"px ").concat(O.M8," ").concat((e.theme||k.Z).interactive.defaultBackground,";\n  ")}),(function(e){return e.compact&&"\n    height: ".concat(P/2,"px;\n  ")})),B=y.default.aside.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-18n432u-2"})(["width:100%;overflow:auto;"," ",""],C.w5,(function(e){return"\n    border-right: ".concat(O.YF,"px ").concat(O.M8," ").concat((e.theme||k.Z).background.panel,";\n  ")})),M=y.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-18n432u-3"})(["width:100%;overflow:auto;",""],C.w5),S=(0,y.css)(["display:flex;align-items:center;justify-content:space-between;padding:","px ","px;"],v.iI,2*v.iI),T=y.default.div.withConfig({displayName:"indexstyle__OptionStyle",componentId:"sc-18n432u-4"})([""," padding-top:","px;padding-bottom:","px;&:hover{cursor:pointer;","}",""],S,1.5*v.iI,1.5*v.iI,(function(e){return"\n      background-color: ".concat((e.theme||k.Z).monotone.black,";\n    ")}),(function(e){return e.highlighted&&"\n    background-color: ".concat((e.theme||k.Z).monotone.black,";\n  ")})),D=y.default.div.withConfig({displayName:"indexstyle__ToggleValueStyle",componentId:"sc-18n432u-5"})([""," ",""],S,(function(e){return"\n    border-bottom: ".concat(O.YF,"px ").concat(O.M8," ").concat((e.theme||k.Z).borders.medium2,";\n  ")})),A=t(72473),E=t(15610),R=t(11498),L=t(55072),_=t(81728),F=t(28598);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var z=function(e){var n,t,l,c=e.children,u=e.compact,p=e.onClickCallback,f=e.onClickOutside,b=e.onSecondaryClick,j=e.open,y=e.options,k=void 0===y?{}:y,O=e.parentRef,C=e.query,v=e.resetLimitOnApply,Z=e.resetPageOnApply,P=e.setOpen,S=e.toggleValueMapping,N=(0,i.useState)(null),z=N[0],G=N[1],K=(0,i.useState)(k),q=K[0],Y=K[1];(0,i.useEffect)((function(){Y(k)}),[k]);var $=((null==O||null===(n=O.current)||void 0===n||null===(t=n.getBoundingClientRect)||void 0===t?void 0:t.call(n))||{}).top,Q=void 0===$?0:$,H=Object.keys(k);return(0,F.jsxs)(a.Z,{onClickOutside:f,open:!0,children:[(0,F.jsx)("div",{ref:O,children:c}),(0,F.jsxs)(w,{compact:u,display:j,top:Q-5,children:[(0,F.jsxs)(I,{compact:u,children:[(0,F.jsx)(s.Z,{flex:"1",children:(0,F.jsx)(B,{children:H.map((function(e){return(0,F.jsxs)(T,{highlighted:z===e,onMouseEnter:function(){return G(e)},children:[(0,F.jsx)(g.ZP,{children:(0,_.J3)((0,_.kC)(e))}),(0,F.jsx)(A.ChevronRight,{})]},e)}))})}),(0,F.jsx)(s.Z,{flex:"2",children:(0,F.jsx)(M,{children:z&&Object.entries((null===(l=q||k)||void 0===l?void 0:l[z])||{}).map((function(e){var n,t=(0,r.Z)(e,2),i=t[0],l=t[1],c=null==S?void 0:S[z],u=("function"==typeof(null==c?void 0:c[i])?(0,_.kC)(null==c||null===(n=c[i])||void 0===n?void 0:n.call(c)):null==c?void 0:c[i])||i;return(0,F.jsxs)(D,{children:[(0,F.jsx)(g.ZP,{title:c?null:u,width:200,children:u}),(0,F.jsx)(x.Z,{checked:l,onCheck:function(){return Y((function(e){return V(V({},e),{},(0,o.Z)({},z,V(V({},null==e?void 0:e[z]),{},(0,o.Z)({},i,!l))))}))}})]},i)}))})})]}),(0,F.jsx)(h.Z,{m:1,children:(0,F.jsxs)(d.ZP,{children:[(0,F.jsx)(m.ZP,{onClick:function(){var e=Object.entries(q).reduce((function(e,n){var t=(0,r.Z)(n,2),o=t[0],i=t[1],l=[];return Object.entries(i).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0];return n[1]&&l.push(t)})),e[o]=l,e}),{});null==p||p(C,e);var n={addingMultipleValues:!0,itemsPerPage:L.Q,pushHistory:!0,resetLimitParams:v,resetPage:Z};null!=C&&C[R.$D.LIMIT]&&(n.itemsPerPage=+(null==C?void 0:C[R.$D.LIMIT])),(0,E.g)(C,e,n)},secondary:!0,children:"Apply"}),(0,F.jsx)(h.Z,{mr:1}),(0,F.jsx)(m.ZP,{noBackground:!0,onClick:function(){P(!1),null==b||b()},children:"Defaults"})]})})]})]})},G=t(12468),K=t(35526),q=t(24944),Y=t(42122),$=t(50178);function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var J=function(e){var n=e.addButtonProps,t=e.children,o=e.deleteRowProps,m=e.extraActionButtonProps,x=e.filterOptions,y=void 0===x?{}:x,k=e.filterValueLabelMapping,O=e.groupButtonProps,C=e.moreActionsMenuItems,Z=e.onClickFilterDefaults,P=e.onFilterApply,w=e.query,I=void 0===w?{}:w,B=e.resetLimitOnFilterApply,M=e.resetPageOnFilterApply,S=e.secondaryButtonProps,T=e.searchProps,D=e.selectedRowId,E=e.setSelectedRow,R=e.showDivider,L=(0,l.useRouter)(),_=(0,$.Ct)(null==L?void 0:L.basePath),N=(0,i.useRef)(null),V=(0,i.useRef)(null),Q=(0,i.useRef)(null),J=(0,i.useRef)(null),U=(0,i.useRef)(null),W=(0,i.useState)(!1),X=W[0],ee=W[1],ne=(0,i.useState)(!1),te=ne[0],oe=ne[1],re=(0,i.useState)(!1),ie=re[0],le=re[1],ce=(0,i.useState)(!1),ue=ce[0],ae=ce[1],se=(0,i.useState)(null),de=se[0],pe=se[1],fe=!D,be=(0,i.useCallback)((function(){return ee(!1)}),[]),he=(0,i.useCallback)((function(){return oe(!1)}),[]),ge=(0,i.useCallback)((function(){return le(!1)}),[]),je=(0,i.useCallback)((function(){return ae(null)}),[]),me=(0,i.useCallback)((function(){return pe(null)}),[]),xe=m||{},ye=xe.Icon,ke=xe.confirmationDescription,Oe=xe.confirmationMessage,Ce=xe.disabled,ve=void 0===Ce?fe:Ce,Ze=xe.isLoading,Pe=xe.label,we=xe.onClick,Ie=xe.openConfirmationDialogue,Be=xe.tooltip,Me=o||{},Se=Me.confirmationMessage,Te=Me.isLoading,De=Me.item,Ae=Me.onDelete,Ee=T||{},Re=Ee.placeholder,Le=Ee.onChange,_e=Ee.value,Fe=(0,i.useMemo)((function(){return Object.entries(y).reduce((function(e,n){var t=(0,r.Z)(n,2),o=t[0],i=t[1];return e[o]={},i.forEach((function(n){var t,r=(null===(t=I["".concat(o,"[]")])||void 0===t?void 0:t.includes(n))||!1;e[o][n]=r})),e}),{})}),[y,I]),Ne=n||{},Ve=Ne.label,ze=Ne.menuItems,Ge=Ne.onClick,Ke=Ne.isLoading,qe=(0,i.useMemo)((function(){return(0,F.jsx)(c.Z,{addButtonMenuOpen:X,addButtonMenuRef:N,isLoading:Ke,label:Ve,menuItems:ze,onClick:Ge||function(){return ee((function(e){return!e}))},onClickCallback:be})}),[Ve,ze,X,be,Ke,Ge]),Ye=S||{},$e=Ye.beforeIcon,Qe=Ye.disabled,He=Ye.label,Je=Ye.onClick,Ue=Ye.isLoading,We=Ye.tooltip,Xe=(0,i.useMemo)((function(){return(0,F.jsx)(f.ZP,{beforeElement:$e,bold:!0,disabled:Qe,greyBorder:!0,loading:Ue,onClick:Je,outline:!0,paddingBottom:9,paddingTop:9,title:We,uuid:"Table/Toolbar/SecondaryButton",children:He})}),[Ue,Je,$e,Qe,He,We]),en=(0,i.useMemo)((function(){return(0,Y.dw)(Fe)}),[Fe]),nn=(0,i.useMemo)((function(){return(0,F.jsx)(z,{compact:!0,onClickCallback:function(e,n){P&&(null==P||P(e,n)),he&&(null==he||he())},onClickOutside:he,onSecondaryClick:Z,open:te,options:Fe,parentRef:V,query:I,resetLimitOnApply:B,resetPageOnApply:M,setOpen:oe,toggleValueMapping:k,children:(0,F.jsx)(f.ZP,H(H({},c.B),{},{afterElement:en>0?(0,F.jsx)(u.Z,{cyan:!0,noVerticalPadding:!0,children:(0,F.jsx)(g.ZP,{bold:!0,inverted:!0,children:en})}):null,beforeElement:(0,F.jsx)(A.Filter,{size:2*v.iI}),onClick:function(){return oe((function(e){return!e}))},uuid:"Table/Toolbar/FilterButton",children:"Filter"}))})}),[he,te,Fe,k,en,Z,P,I,B,M]),tn=O||{},on=tn.groupByLabel,rn=tn.menuItems,ln=(0,i.useMemo)((function(){return(0,F.jsx)(p.Z,{disableKeyboardShortcuts:!0,items:rn,onClickCallback:ge,onClickOutside:ge,open:ie,parentRef:Q,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/GroupMenu",children:(0,F.jsx)(f.ZP,H(H({},c.B),{},{beforeElement:(0,F.jsx)(A.Group,{size:2.5*v.iI}),onClick:function(){le((function(e){return!e}))},uuid:"Table/Toolbar/GroupButton",children:on?"Grouped by ".concat(on):"Group"}))})}),[ge,ie,on,rn]),cn=(0,i.useMemo)((function(){return(0,F.jsx)(p.Z,{disableKeyboardShortcuts:!0,items:C,onClickCallback:je,onClickOutside:je,open:ue,parentRef:J,roundedStyle:!0,topOffset:1,uuid:"Table/Toolbar/MoreActionsMenu",children:(0,F.jsx)(G.Z,H(H({},K.k2),{},{label:"More actions",children:(0,F.jsx)(f.ZP,{Icon:A.Ellipsis,bold:!0,disabled:fe,greyBorder:!0,onClick:function(){return ae((function(e){return!e}))},smallIcon:!0,uuid:"Table/Toolbar/MoreActionsButton"})}))})}),[je,fe,ue,C]);return(0,F.jsxs)(d.ZP,{alignItems:"center",children:[n&&qe,S&&(0,F.jsx)(h.Z,{ml:1,children:Xe}),t,R&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(h.Z,{ml:"12px"}),(0,F.jsx)(q.lZ,{})]}),(n||S||t)&&(0,F.jsx)(h.Z,{mr:K.I6}),nn,(null==rn?void 0:rn.length)>0&&(0,F.jsx)(h.Z,{ml:K.I6,children:ln}),!_&&we&&(0,F.jsxs)(h.Z,{ml:K.I6,children:[(0,F.jsx)(G.Z,H(H({},K.k2),{},{label:Be,children:(0,F.jsx)(f.ZP,{Icon:!Ze&&ye,bold:!0,disabled:ve,greyBorder:!0,loading:Ze,onClick:Ie?function(){return pe(K.Nb.FIRST)}:we,smallIcon:!0,uuid:"Table/Toolbar/ExtraActionButton",children:Pe})})),(0,F.jsx)(a.Z,{onClickOutside:me,open:de===K.Nb.FIRST,children:(0,F.jsx)(b.Z,{onCancel:me,onClick:function(){null==we||we(),me(),null==E||E(null)},subtitle:ke,title:Oe,top:K.Au,width:K.OK})})]}),!_&&Ae&&(0,F.jsxs)(h.Z,{ml:K.I6,children:[(0,F.jsx)(G.Z,H(H({},K.k2),{},{label:"Delete ".concat(De),children:(0,F.jsx)(f.ZP,{Icon:!Te&&A.Trash,bold:!0,disabled:fe,greyBorder:!0,loading:Te,onClick:function(){return pe(K.Nb.SECOND)},smallIcon:!0,uuid:"Table/Toolbar/DeleteButton"})})),(0,F.jsx)(a.Z,{onClickOutside:me,open:de===K.Nb.SECOND,children:(0,F.jsx)(b.Z,{danger:!0,onCancel:me,onClick:function(){null==Ae||Ae(D),me(),null==E||E(null)},subtitle:Se,title:"Are you sure you want to delete the ".concat(De," ").concat(D,"?"),top:K.Au,width:K.OK})})]}),!_&&(null==C?void 0:C.length)>0&&(0,F.jsx)(h.Z,{ml:K.I6,children:cn}),Le&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(h.Z,{ml:K.I6}),(0,F.jsx)(s.Z,{flex:1,children:(0,F.jsx)(j.Z,H(H({},K.hZ),{},{afterIcon:_e?(0,F.jsx)(A.Close,{}):null,afterIconClick:function(){var e;Le(""),null==U||null===(e=U.current)||void 0===e||e.focus()},onChange:function(e){return Le(e.target.value)},paddingVertical:9,placeholder:Re||null,ref:U,value:_e}))})]})]})}}}]);