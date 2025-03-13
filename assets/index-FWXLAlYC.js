import{r as t,j as e,S as P,T as O,B as $,M as B,A as E,x as C,z as F,W as G}from"./index-C94LjWxh.js";import{L as H,A as W,D as q,f as S}from"./DatePicker-CzX-_7de.js";import{l as J,C as K}from"./index-BLSNQ0WD.js";import{G as g}from"./Grid-CadWwKob.js";import{T as M}from"./TextField-Cgvji-af.js";import{S as N,T as Q}from"./TablePagination-Bm-w6Wrp.js";import{T as U,a as V,c as j,d as a,b as X}from"./TableRow-D9gLSdBk.js";import{T as Y}from"./TableHead-z8A-iQpx.js";import{P as Z}from"./Person-0bM3299F.js";import{S as _}from"./Snackbar-C8MTT-3n.js";import{A as ee}from"./Alert-ap9Sp5d-.js";import"./InputLabel-Cnbk1tJc.js";import"./DialogContent-CtT_Tsm6.js";import"./MenuItem-COOgUMYe.js";const se=[{id:1,name:"김민수",nickname:"minsu",isPaid:!0,isAttended:!1,lastAttendance:"2023-05-15"},{id:2,name:"이지은",nickname:"jieun",isPaid:!0,isAttended:!0,lastAttendance:"2023-05-20"},{id:3,name:"박준호",nickname:"junho",isPaid:!1,isAttended:!1,lastAttendance:"2023-05-10"},{id:4,name:"최수연",nickname:"suyeon",isPaid:!0,isAttended:!0,lastAttendance:"2023-05-20"},{id:5,name:"정현우",nickname:"hyunwoo",isPaid:!1,isAttended:!1,lastAttendance:"2023-05-05"}],be=()=>{const[o,u]=t.useState([]),[h,T]=t.useState([]),[m,v]=t.useState(new Date),[l,w]=t.useState(""),[p,f]=t.useState(0),[c,k]=t.useState(10),[te,b]=t.useState(!0),[d,x]=t.useState({open:!1,message:"",severity:"success"}),[ae,ne]=t.useState(!0),[ie,re]=t.useState("regular"),[oe,le]=t.useState(!1),[ce,de]=t.useState(!1),[ue,he]=t.useState(null),[me,pe]=t.useState(""),D=s=>{w(s.target.value)},I=(s,n)=>{f(n)},L=s=>{k(parseInt(s.target.value,10)),f(0)},R=s=>{const n=o.map(r=>{if(r.id===s){const y=!r.isAttended;return{...r,isAttended:y,lastAttendance:y?S(m,"yyyy-MM-dd"):r.lastAttendance}}return r});u(n);const i=n.find(r=>r.id===s);x({open:!0,message:`${i.name} 회원의 출석 상태가 ${i.isAttended?"출석":"미출석"}으로 변경되었습니다.`,severity:"success"})},z=()=>{const s=o.map(n=>({...n,isAttended:!0,lastAttendance:S(m,"yyyy-MM-dd")}));u(s),x({open:!0,message:"모든 회원이 출석 체크되었습니다.",severity:"success"})},A=()=>{x({...d,open:!1})};return t.useEffect(()=>{const s=setTimeout(()=>{u(se),b(!1)},500);return()=>clearTimeout(s)},[]),t.useEffect(()=>{let s=[...o];if(l){const n=l.toLowerCase();s=s.filter(i=>i.name.toLowerCase().includes(n)||i.nickname.toLowerCase().includes(n))}T(s)},[o,l]),e.jsxs(H,{dateAdapter:W,adapterLocale:J,children:[e.jsxs(g,{container:!0,spacing:3,children:[e.jsx(g,{item:!0,xs:12,children:e.jsxs(P,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsx(O,{variant:"h5",children:"출석 체크"}),e.jsx($,{variant:"contained",color:"primary",onClick:z,children:"전체 출석 체크"})]})}),e.jsx(g,{item:!0,xs:12,children:e.jsxs(B,{children:[e.jsxs(P,{direction:{xs:"column",sm:"row"},spacing:2,marginBottom:3,alignItems:"center",children:[e.jsx(q,{label:"출석 날짜",value:m,onChange:s=>v(s),renderInput:s=>e.jsx(M,{...s}),inputFormat:"yyyy-MM-dd"}),e.jsx(M,{label:"회원 검색",variant:"outlined",value:l,onChange:D,placeholder:"이름, 아이디",InputProps:{startAdornment:e.jsx(N,{fontSize:"small",sx:{mr:1}})},sx:{width:300}})]}),e.jsx(U,{children:e.jsxs(V,{sx:{minWidth:750},"aria-labelledby":"tableTitle",children:[e.jsx(Y,{children:e.jsxs(j,{children:[e.jsx(a,{children:"프로필"}),e.jsx(a,{children:"이름"}),e.jsx(a,{children:"아이디"}),e.jsx(a,{children:"회비 납부 상태"}),e.jsx(a,{children:"최근 출석일"}),e.jsx(a,{children:"출석 상태"}),e.jsx(a,{children:"출석 체크"})]})}),e.jsxs(X,{children:[h.slice(p*c,p*c+c).map(s=>e.jsxs(j,{hover:!0,children:[e.jsx(a,{children:e.jsx(E,{src:`/assets/images/users/avatar-${s.id}.png`,alt:s.name,children:e.jsx(Z,{})})}),e.jsx(a,{children:s.name}),e.jsx(a,{children:s.nickname}),e.jsx(a,{children:e.jsx(C,{label:s.isPaid?"납부":"미납",color:s.isPaid?"success":"error",size:"small"})}),e.jsx(a,{children:s.lastAttendance}),e.jsx(a,{children:e.jsx(C,{label:s.isAttended?"출석":"미출석",color:s.isAttended?"success":"default",size:"small"})}),e.jsx(a,{children:e.jsx(F,{color:s.isAttended?"error":"success",onClick:()=>R(s.id),size:"small",children:s.isAttended?e.jsx(K,{}):e.jsx(G,{})})})]},s.id)),h.length===0&&e.jsx(j,{children:e.jsx(a,{colSpan:7,align:"center",children:"회원 정보가 없습니다."})})]})]})}),e.jsx(Q,{rowsPerPageOptions:[5,10,25],component:"div",count:h.length,rowsPerPage:c,page:p,onPageChange:I,onRowsPerPageChange:L,labelRowsPerPage:"페이지당 행 수:",labelDisplayedRows:({from:s,to:n,count:i})=>`${s}-${n} / 전체 ${i}`})]})})]}),e.jsx(_,{open:d.open,autoHideDuration:3e3,onClose:A,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(ee,{onClose:A,severity:d.severity,sx:{width:"100%"},children:d.message})})]})};export{be as default};
