import{c as v,j as e,g as L,a as U,r as m,u as T,s as D,b as E,d as P,m as B,e as X,f as R,k as z,C as I,h as F,D as H,i as d,l as W,B as G,T as c,L as N,R as K,n as O,o as Y,A as q,p as J}from"./index-C94LjWxh.js";import{G as t}from"./Grid-CadWwKob.js";import{P as Q}from"./PeopleAlt-Do7Vm4sr.js";function Z(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function _(n){return parseFloat(n)}const ee=v(e.jsx("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2M5 8V7h2v3.82C5.84 10.4 5 9.3 5 8m14 0c0 1.3-.84 2.4-2 2.82V7h2z"}),"EmojiEvents"),te=v(e.jsx("path",{fillRule:"evenodd",d:"m9 17 3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"}),"HowToReg"),ne=v([e.jsx("path",{d:"M5 8h2v8H5zm7 0H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 6h-1v-4h1zm7-6h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 6h-1v-4h1z"},"0"),e.jsx("path",{d:"M2 4v16h20V4zm2 14V6h16v12z"},"1")],"Money"),se=v(e.jsx("path",{d:"M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2m-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m13-6v11c0 1.1-.9 2-2 2H4v-2h17V7z"}),"Payments");function ae(n){return L("MuiSkeleton",n)}U("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const re=n=>{const{classes:r,variant:a,animation:s,hasChildren:l,width:i,height:o}=n;return P({root:["root",a,s,l&&"withChildren",l&&!i&&"fitContent",l&&!o&&"heightAuto"]},ae,r)},w=z`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,S=z`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,ie=typeof w!="string"?R`
        animation: ${w} 2s ease-in-out 0.5s infinite;
      `:null,oe=typeof S!="string"?R`
        &::after {
          animation: ${S} 2s linear 0.5s infinite;
        }
      `:null,ce=D("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(n,r)=>{const{ownerState:a}=n;return[r.root,r[a.variant],a.animation!==!1&&r[a.animation],a.hasChildren&&r.withChildren,a.hasChildren&&!a.width&&r.fitContent,a.hasChildren&&!a.height&&r.heightAuto]}})(B(({theme:n})=>{const r=Z(n.shape.borderRadius)||"px",a=_(n.shape.borderRadius);return{display:"block",backgroundColor:n.vars?n.vars.palette.Skeleton.bg:X(n.palette.text.primary,n.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${r}/${Math.round(a/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(n.vars||n).shape.borderRadius}},{props:({ownerState:s})=>s.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:s})=>s.hasChildren&&!s.width,style:{maxWidth:"fit-content"}},{props:({ownerState:s})=>s.hasChildren&&!s.height,style:{height:"auto"}},{props:{animation:"pulse"},style:ie||{animation:`${w} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(n.vars||n).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:oe||{"&::after":{animation:`${S} 2s linear 0.5s infinite`}}}]}})),C=m.forwardRef(function(r,a){const s=T({props:r,name:"MuiSkeleton"}),{animation:l="pulse",className:i,component:o="span",height:p,style:f,variant:y="text",width:b,...u}=s,j={...s,animation:l,component:o,variant:y,hasChildren:!!u.children},x=re(j);return e.jsx(ce,{as:o,ref:a,className:E(x.root,i),ownerState:j,...u,style:{width:b,height:p,...f}})}),le={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},h=m.forwardRef(function({border:r=!0,boxShadow:a,children:s,subheader:l,content:i=!0,contentSX:o={},darkTitle:p,divider:f=!0,elevation:y,secondary:b,shadow:u,sx:j={},title:x,codeHighlight:de=!1,codeString:he,modal:V=!1,...A},$){return e.jsxs(I,{elevation:y||0,sx:[k=>({position:"relative",border:r?"1px solid":"none",borderRadius:1,borderColor:"grey.A800",boxShadow:a&&!r?u||k.customShadows.z1:"inherit",":hover":{boxShadow:a?u||k.customShadows.z1:"inherit"},...V&&{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"calc(100% - 50px)",sm:"auto"},maxWidth:768,"& .MuiCardContent-root":{overflowY:"auto",minHeight:"auto",maxHeight:"calc(100vh - 200px)"}}}),j],ref:$,...A,children:[!p&&x&&e.jsx(F,{sx:le,slotProps:{title:{variant:"subtitle1"}},title:x,action:b,subheader:l}),x&&f&&e.jsx(H,{}),i&&e.jsx(d,{sx:o,children:s}),!i&&s]})}),g=3,M=()=>e.jsx(I,{children:e.jsx(d,{children:e.jsxs(t,{container:!0,spacing:g,children:[e.jsx(t,{item:!0,xs:12,children:e.jsxs(t,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:g,children:[e.jsx(t,{item:!0,xs:!0,zeroMinWidth:!0,children:e.jsx(t,{container:!0,spacing:1,children:e.jsx(t,{item:!0,xs:12,children:e.jsx(C,{variant:"text",height:30})})})}),e.jsx(t,{item:!0,children:e.jsx(C,{variant:"rectangular",width:90,height:30})})]})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(C,{variant:"rectangular",height:300})})]})})}),pe=()=>{const[n,r]=m.useState(!0),a=W(),[s,l]=m.useState({activeUsers:24,paidMembers:18,unpaidMembers:6,totalFees:18e5,attendanceRanking:[{id:1,name:"김철수",attendance:"95%",avatar:"/avatar1.jpg"},{id:2,name:"이영희",attendance:"90%",avatar:"/avatar2.jpg"},{id:3,name:"박지민",attendance:"85%",avatar:"/avatar3.jpg"}]});return m.useEffect(()=>{r(!1)},[]),e.jsxs(t,{container:!0,spacing:g,children:[e.jsxs(t,{item:!0,xs:12,children:[e.jsx(G,{variant:"contained",color:"primary",onClick:()=>a("/login"),sx:{mb:2},children:"로그인 페이지로 이동"}),e.jsxs(t,{container:!0,spacing:g,children:[e.jsx(t,{item:!0,lg:3,md:6,sm:6,xs:12,children:e.jsx(h,{content:!1,boxShadow:!0,children:e.jsx(d,{children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsxs(t,{container:!0,alignItems:"center",justifyContent:"space-between",children:[e.jsx(t,{item:!0,children:e.jsx(c,{variant:"subtitle1",color:"inherit",children:"현재 접속 회원 수"})}),e.jsx(t,{item:!0,children:e.jsx(Q,{fontSize:"large",color:"primary"})})]})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(c,{variant:"h3",children:[n?"-":s.activeUsers,"명"]})})]})})})}),e.jsx(t,{item:!0,lg:3,md:6,sm:6,xs:12,children:e.jsx(h,{content:!1,boxShadow:!0,children:e.jsx(d,{children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsxs(t,{container:!0,alignItems:"center",justifyContent:"space-between",children:[e.jsx(t,{item:!0,children:e.jsx(c,{variant:"subtitle1",color:"inherit",children:"이번 달 회비 납부 인원"})}),e.jsx(t,{item:!0,children:e.jsx(te,{fontSize:"large",color:"success"})})]})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(c,{variant:"h3",children:[n?"-":s.paidMembers,"명"]})})]})})})}),e.jsx(t,{item:!0,lg:3,md:6,sm:6,xs:12,children:e.jsx(h,{content:!1,boxShadow:!0,children:e.jsx(d,{children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsxs(t,{container:!0,alignItems:"center",justifyContent:"space-between",children:[e.jsx(t,{item:!0,children:e.jsx(c,{variant:"subtitle1",color:"inherit",children:"이번 달 회비 미납 인원"})}),e.jsx(t,{item:!0,children:e.jsx(se,{fontSize:"large",color:"error"})})]})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(c,{variant:"h3",children:[n?"-":s.unpaidMembers,"명"]})})]})})})}),e.jsx(t,{item:!0,lg:3,md:6,sm:6,xs:12,children:e.jsx(h,{content:!1,boxShadow:!0,children:e.jsx(d,{children:e.jsxs(t,{container:!0,spacing:2,children:[e.jsx(t,{item:!0,xs:12,children:e.jsxs(t,{container:!0,alignItems:"center",justifyContent:"space-between",children:[e.jsx(t,{item:!0,children:e.jsx(c,{variant:"subtitle1",color:"inherit",children:"현재 모인 회비 금액"})}),e.jsx(t,{item:!0,children:e.jsx(ne,{fontSize:"large",color:"primary"})})]})}),e.jsx(t,{item:!0,xs:12,children:e.jsxs(c,{variant:"h3",children:[n?"-":s.totalFees.toLocaleString(),"원"]})})]})})})})]})]}),e.jsx(t,{item:!0,xs:12,md:6,children:e.jsx(h,{title:"이번 달 참석률 랭킹",content:!1,children:n?e.jsx(M,{}):e.jsx(d,{children:e.jsx(N,{children:s.attendanceRanking.map((i,o)=>e.jsxs(K.Fragment,{children:[e.jsxs(O,{alignItems:"center",children:[e.jsx(Y,{children:e.jsx(q,{alt:i.name,src:i.avatar,sx:{bgcolor:["error.main","primary.main","secondary.main"][o]},children:o+1})}),e.jsx(J,{primary:i.name,secondary:`참석률: ${i.attendance}`}),o===0&&e.jsx(ee,{color:"warning",fontSize:"large"})]}),o<s.attendanceRanking.length-1&&e.jsx(H,{})]},i.id))})})})}),e.jsx(t,{item:!0,xs:12,md:6,children:e.jsx(h,{title:"공지사항",children:n?e.jsx(M,{}):e.jsx(d,{children:e.jsx(c,{variant:"body1",children:"이번 달 스터디 일정이 업데이트 되었습니다. 자세한 내용은 공지사항을 확인해주세요."})})})})]})};export{pe as default};
