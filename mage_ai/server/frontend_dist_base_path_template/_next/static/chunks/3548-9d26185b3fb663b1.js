"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3548],{4015:function(e,n,t){t.d(n,{$b:function(){return s},I5:function(){return l},Nk:function(){return d},gI:function(){return a}});var i=t(25976),o=t(44897),r=t(42631),c=t(70515),d=i.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-h093u4-0"})([""," ",""],(function(e){return!e.width&&"\n    width: ".concat(40*c.iI,"px;\n  ")}),(function(e){return e.width&&"\n    width: ".concat(e.width,"px;\n  ")})),l=i.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-h093u4-1"})(["padding:","px;"," ",""],2.5*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).dashboard,";\n    border-left: 1px solid ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n    border-right: 1px solid ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n    border-top-left-radius: ").concat(r.n_,"px;\n    border-top-right-radius: ").concat(r.n_,"px;\n    border-top: 1px solid ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.lightBackground&&"\n    background-color: ".concat((e.theme.background||o.Z.background).panel,"\n  ")})),a=i.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-h093u4-2"})(["align-items:center;justify-content:space-between;"," "," ",""],(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).dashboard,";\n    border-left: 1px solid ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n    border-right: 1px solid ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n    border-top: 1px solid ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n    display: ").concat((null===e||void 0===e?void 0:e.display)||"flex",";\n    padding-bottom: ").concat(1*c.iI+((null===e||void 0===e?void 0:e.paddingVerticalAddition)||0),"px;\n    padding-left: ").concat(c.cd*c.iI,"px;\n    padding-top: ").concat(1*c.iI+((null===e||void 0===e?void 0:e.paddingVerticalAddition)||0),"px;\n  ")}),(function(e){return e.columnFlex&&"\n    display: flex;\n    flex-direction: column;\n  "}),(function(e){return e.lightBackground&&"\n    background-color: ".concat((e.theme.background||o.Z.background).panel,"\n  ")})),s=i.default.div.withConfig({displayName:"indexstyle__FooterStyle",componentId:"sc-h093u4-3"})(["padding:","px ","px;"," ",""],2.5*c.iI,2*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).panel,";\n    border-bottom-left-radius: ").concat(r.n_,"px;\n    border-bottom-right-radius: ").concat(r.n_,"px;\n    border-bottom: 1px solid ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n    border-left: 1px solid ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n    border-right: 1px solid ").concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.topBorder&&"\n    border-top: 1px solid ".concat((e.theme.interactive||o.Z.interactive).defaultBorder,";\n  ")}))},55729:function(e,n,t){t.d(n,{Z:function(){return M}});var i=t(82394),o=t(75582),r=t(82684),c=t(69864),d=t(71180),l=t(15338),a=t(97618),s=t(55485),u=t(85854),p=t(48670),v=t(65956),h=t(82359),m=t(88543),g=t(38276),f=t(30160),x=t(17488),j=t(69650),b=t(12468),Z=t(35686),_=t(77417),y=t(25976),k=t(44897),P=t(42631),w=t(70515),O=y.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1b0w59t-0"})(["border-radius:","px;padding:","px;",""],P.n_,w.cd*w.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||k.Z.background).codeArea,";\n  ")})),C=t(72473),I=t(72191),N=t(70320),S=t(81728),B=t(42122),E=t(72619),A=t(23780),D=t(28598);function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var M=function(e){var n,t,y,k=e.cancelButtonText,P=e.contained,L=e.header,M=e.onCancel,F=e.onSaveSuccess,V=e.rootProject,T=(0,A.VI)(null,{},[],{uuid:"settings/workspace/preferences"}),U=(0,o.Z)(T,1)[0],R=(0,r.useState)(null),W=R[0],q=R[1],z=(0,r.useState)(!1),G=z[0],K=z[1],Y=(0,_.Z)(),$=Y.fetchProjects,J=Y.project,Q=Y.projectPlatformActivated,X=Y.rootProject,ee=(0,r.useMemo)((function(){return V?X:J}),[J,X,V]),ne=ee||{},te=ne.name,ie=ne.openai_api_key,oe=ne.project_uuid,re=(0,r.useMemo)((function(){return"demo.mage.ai"===window.location.hostname}),[]);(0,r.useEffect)((function(){W||q(ee)}),[ee,W]);var ce=(0,c.Db)(Z.ZP.projects.useUpdate(te),{onSuccess:function(e){return(0,E.wD)(e,{callback:function(e){var n,t=e.project;$(),q(t),K(!1),(0,N.hY)(null===t||void 0===t||null===(n=t.features)||void 0===n?void 0:n[h.d.LOCAL_TIMEZONE]),F&&(null===F||void 0===F||F(t))},onErrorCallback:function(e,n){return U({errors:n,response:e})}})}}),de=(0,o.Z)(ce,2),le=de[0],ae=de[1].isLoading,se=(0,r.useCallback)((function(e){return le({project:H(H({},e),{},{root_project:V})})}),[V,le]),ue=(0,D.jsxs)(D.Fragment,{children:[L,(0,D.jsxs)(v.Z,{noPadding:!0,children:[(0,D.jsxs)(g.Z,{p:w.cd,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(u.Z,{level:5,children:"Project name"})}),(0,D.jsx)(f.ZP,{default:!0,monospace:!0,children:te})]}),(0,D.jsx)(l.Z,{light:!0}),(0,D.jsxs)(g.Z,{p:w.cd,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(u.Z,{level:5,children:"Project UUID"})}),(0,D.jsx)(f.ZP,{default:!!oe,monospace:!0,muted:!oe,children:oe||"Not required"})]}),(0,D.jsx)(l.Z,{light:!0}),(0,D.jsx)(g.Z,{p:w.cd,children:(0,D.jsxs)(s.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,D.jsxs)(a.Z,{flexDirection:"column",children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(u.Z,{level:5,children:"Help improve Mage"})}),(0,D.jsxs)(f.ZP,{default:!0,children:["Please contribute usage statistics to help improve the developer experience for you and everyone in the community. Learn more ",(0,D.jsx)(p.Z,{href:"https://docs.mage.ai/contributing/statistics/overview",openNewWindow:!0,children:"here"}),"."]})]}),(0,D.jsx)(g.Z,{mr:w.cd}),(0,D.jsx)(j.Z,{checked:null===W||void 0===W?void 0:W.help_improve_mage,compact:!0,id:"help_improve_mage_toggle",onCheck:function(){return q((function(e){return H(H({},e),{},{help_improve_mage:!(null!==W&&void 0!==W&&W.help_improve_mage)})}))}})]})})]}),(0,D.jsx)(g.Z,{mt:w.HN}),(0,D.jsx)(m.Z,{description:"Global settings that are applied to all pipelines in this project.",title:"Pipeline settings",children:(0,D.jsx)(m.S,{description:"Every time a trigger is created or updated in this pipeline, automatically persist it in code.",title:"Save triggers in code automatically",toggleSwitch:{checked:!(null===W||void 0===W||null===(n=W.pipelines)||void 0===n||null===(t=n.settings)||void 0===t||null===(y=t.triggers)||void 0===y||!y.save_in_code_automatically),onCheck:function(e){return q((function(n){var t,i,o,r,c,d;return H(H({},n),{},{pipelines:H(H({},null===n||void 0===n?void 0:n.pipelines),{},{settings:H(H({},null===n||void 0===n||null===(t=n.pipelines)||void 0===t?void 0:t.settings),{},{triggers:H(H({},null===n||void 0===n||null===(i=n.pipelines)||void 0===i||null===(o=i.settings)||void 0===o?void 0:o.triggers),{},{save_in_code_automatically:e(null===n||void 0===n||null===(r=n.pipelines)||void 0===r||null===(c=r.settings)||void 0===c||null===(d=c.triggers)||void 0===d?void 0:d.save_in_code_automatically)})})})})}))}}})}),(0,D.jsx)(g.Z,{mt:w.HN}),(0,D.jsx)(v.Z,{noPadding:!0,overflowVisible:!0,children:(0,D.jsxs)(g.Z,{p:w.cd,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsxs)(u.Z,{level:5,children:["Features\xa0",(0,D.jsx)(p.Z,{bold:!0,href:"https://docs.mage.ai/development/project/features",largeSm:!0,openNewWindow:!0,children:"(docs)"})]})}),Object.entries((0,B.gR)(null===W||void 0===W?void 0:W.features,[h.d.CODE_BLOCK_V2])||{}).map((function(e,n){var t=(0,o.Z)(e,2),r=t[0],c=t[1],d=Q&&!V&&(null===ee||void 0===ee?void 0:ee.features_override)&&r in(null===ee||void 0===ee?void 0:ee.features_override);return(0,D.jsx)(g.Z,{mt:0===n?0:1,children:(0,D.jsxs)(s.ZP,{alignItems:"center",children:[(0,D.jsxs)(a.Z,{flex:1,children:[(0,D.jsx)(j.Z,{disabled:d,checked:!!c,compact:!0,onCheck:function(){return q((function(e){return H(H({},e),{},{features:H(H({},null===W||void 0===W?void 0:W.features),{},(0,i.Z)({},r,!c))})}))}}),(0,D.jsx)(g.Z,{mr:w.cd}),(0,D.jsxs)(a.Z,{children:[(0,D.jsx)(f.ZP,{default:!c,monospace:!0,children:(0,S.vg)(r)}),r===h.d.LOCAL_TIMEZONE&&(0,D.jsx)(g.Z,{ml:1,children:(0,D.jsx)(b.Z,H({},N.EB))})]})]}),d&&(0,D.jsx)(f.ZP,{monospace:!0,muted:!0,small:!0,children:"overridden"})]})},r)}))]})}),(0,D.jsx)(g.Z,{mt:w.HN}),(0,D.jsx)(v.Z,{noPadding:!0,children:(0,D.jsxs)(g.Z,{p:w.cd,children:[(0,D.jsx)(g.Z,{mb:1,children:(0,D.jsx)(u.Z,{level:5,children:"OpenAI"})}),ie&&!G?(0,D.jsxs)(s.ZP,H(H({},s.A0),{},{children:[(0,D.jsx)(f.ZP,{default:!0,monospace:!0,children:"API key: ********"}),(0,D.jsx)(d.ZP,{iconOnly:!0,onClick:function(){return K(!0)},secondary:!0,title:"Edit",children:(0,D.jsx)(C.Edit,{size:I.bL})})]})):(0,D.jsx)(x.Z,{disabled:re,label:re?"Entering API key is disabled on demo":"API key",monospace:!0,onChange:function(e){return q((function(n){return H(H({},n),{},{openai_api_key:e.target.value})}))},primary:!0,setContentOnMount:!0,value:(null===W||void 0===W?void 0:W.openai_api_key)||""})]})}),(0,D.jsx)(g.Z,{mt:w.HN}),(0,D.jsxs)(s.ZP,{alignItems:"center",children:[(0,D.jsx)(d.ZP,{id:"save-project-settings",loading:ae,onClick:function(){var e={features:null===W||void 0===W?void 0:W.features,help_improve_mage:null===W||void 0===W?void 0:W.help_improve_mage,openai_api_key:null===W||void 0===W?void 0:W.openai_api_key,pipelines:null===W||void 0===W?void 0:W.pipelines};!0===(null===ee||void 0===ee?void 0:ee.help_improve_mage)&&!1===(null===W||void 0===W?void 0:W.help_improve_mage)&&(e.deny_improve_mage=!0),se(e)},primary:!0,children:"Save project settings"}),M&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(g.Z,{mr:w.cd}),(0,D.jsx)(d.ZP,{onClick:M,secondary:!0,children:k||"Cancel"})]})]})]});return P?(0,D.jsx)(O,{children:ue}):ue}}}]);