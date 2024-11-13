/*! For license information please see 9c01c35a.11863db8.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57286],{57915:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.frame.addscripttag","title":"Frame.addScriptTag() method","description":"Adds a `` tag into the page with the desired url or content.","source":"@site/versioned_docs/version-23.8.0/api/puppeteer.frame.addscripttag.md","sourceDirName":"api","slug":"/api/puppeteer.frame.addscripttag","permalink":"/api/puppeteer.frame.addscripttag","draft":false,"unlisted":false,"tags":[],"version":"23.8.0","frontMatter":{"sidebar_label":"Frame.addScriptTag"},"sidebar":"api","previous":{"title":"Frame.$eval","permalink":"/api/puppeteer.frame._eval"},"next":{"title":"Frame.addStyleTag","permalink":"/api/puppeteer.frame.addstyletag"}}');var a=t(74848),s=t(28453);const i={sidebar_label:"Frame.addScriptTag"},d="Frame.addScriptTag() method",p={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"frameaddscripttag-method",children:"Frame.addScriptTag() method"})}),"\n",(0,a.jsxs)(r.p,{children:["Adds a ",(0,a.jsx)(r.code,{children:"<script>"})," tag into the page with the desired url or content."]}),"\n",(0,a.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  addScriptTag(\n    options: FrameAddScriptTagOptions,\n  ): Promise<ElementHandle<HTMLScriptElement>>;\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(r.p,{children:"Description"})})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"options"})}),(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"/api/puppeteer.frameaddscripttagoptions",children:"FrameAddScriptTagOptions"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(r.p,{children:"Options for the script."})})]})})]}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(r.p,{children:["Promise<",(0,a.jsx)(r.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<HTMLScriptElement>>"]}),"\n",(0,a.jsxs)(r.p,{children:["An ",(0,a.jsx)(r.a,{href:"/api/puppeteer.elementhandle",children:"element handle"})," to the injected ",(0,a.jsx)(r.code,{children:"<script>"})," element."]})]})}function o(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},21020:(e,r,t)=>{var n=t(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,s={},c=null,l=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!p.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:a,type:e,key:c,ref:l,props:s,_owner:d.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>d});var n=t(96540);const a={},s=n.createContext(a);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);