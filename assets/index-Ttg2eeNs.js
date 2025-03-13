import{c as I,j as e,r,T as o,M as w,I as c,a0 as te,D as C,U as N,E as U,x as ne,L as se,n as V,o as ae,A as re,p as B,a1 as ie,z as oe,B as p}from"./index-C94LjWxh.js";import{G as n}from"./Grid-CadWwKob.js";import{T as x,S as z}from"./TextField-Cgvji-af.js";import{a as i,I as H}from"./InputLabel-Cnbk1tJc.js";import{F as S}from"./FormControlLabel-Dv_Ijfjm.js";import{S as D,a as le}from"./Switch-MGY1N_dZ.js";import{M as l}from"./MenuItem-COOgUMYe.js";import{L as ce}from"./LoadingButton-Dsc-v8oU.js";import{D as xe}from"./Delete-D_oeM_0b.js";import{D as O,a as G,b as q}from"./DialogContent-CtT_Tsm6.js";import{D as J}from"./DialogTitle-B1KuyPDx.js";import{D as de}from"./DialogContentText-BPyELWIe.js";import{S as me}from"./Snackbar-C8MTT-3n.js";import{A as he}from"./Alert-ap9Sp5d-.js";const ue=I(e.jsx("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V8h16z"}),"CalendarToday"),pe=I(e.jsx("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"}),"Notifications"),je=I(e.jsx("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"}),"People"),Le=()=>{const[K,M]=r.useState(!1),[s,P]=r.useState({basicFee:5e4,paymentDueDay:5,notificationBeforeDays:3,enableNotification:!0,enableLateFeeNotification:!0,lateFeePercent:5,autoManagePaymentStatus:!0,exemptRoles:["admin"]}),[d,k]=r.useState([{id:1,name:"홍길동",email:"hong@example.com",reason:"운영진",exemptUntil:null},{id:2,name:"장하은",email:"jang@example.com",reason:"개인 사유",exemptUntil:"2023-12-31"},{id:3,name:"윤도현",email:"yoon@example.com",reason:"스터디 공간 제공",exemptUntil:null}]),[m,A]=r.useState(null),[Q,F]=r.useState(!1),[X,L]=r.useState(!1),[f,E]=r.useState(""),[T,R]=r.useState(""),[j,h]=r.useState({open:!1,message:"",severity:"success"}),u=t=>{const{name:a,value:b}=t.target;P({...s,[a]:b})},g=t=>{const{name:a,checked:b}=t.target;P({...s,[a]:b})},Y=()=>{M(!0),setTimeout(()=>{M(!1),h({open:!0,message:"회비 설정이 성공적으로 저장되었습니다.",severity:"success"})},800)},Z=()=>{E(""),R(""),F(!0)},v=()=>{F(!1)},_=()=>{if(!f){h({open:!0,message:"면제 사유를 입력해주세요.",severity:"error"});return}const t={id:Math.max(...d.map(a=>a.id))+1,name:"신규회원",email:"new@example.com",reason:f,exemptUntil:T||null};k([...d,t]),v(),h({open:!0,message:"회비 면제 회원이 추가되었습니다.",severity:"success"})},$=t=>{A(t),L(!0)},y=()=>{L(!1),A(null)},ee=()=>{if(!m)return;const t=d.filter(a=>a.id!==m.id);k(t),y(),h({open:!0,message:"회비 면제 회원이 삭제되었습니다.",severity:"success"})},W=()=>{h({...j,open:!1})};return e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{item:!0,xs:12,children:e.jsx(o,{variant:"h5",children:"회비 설정"})}),e.jsx(n,{item:!0,xs:12,md:8,children:e.jsxs(w,{children:[e.jsx(o,{variant:"h6",sx:{mb:3},children:"기본 설정"}),e.jsxs(n,{container:!0,spacing:3,children:[e.jsxs(n,{item:!0,xs:12,sm:6,children:[e.jsx(x,{fullWidth:!0,name:"basicFee",label:"기본 회비",type:"number",value:s.basicFee,onChange:u,InputProps:{startAdornment:e.jsx(c,{position:"start",children:e.jsx(te,{color:"primary"})}),endAdornment:e.jsx(c,{position:"end",children:"원"})}}),e.jsx(i,{children:"월 기본 회비 금액을 설정합니다."})]}),e.jsxs(n,{item:!0,xs:12,sm:6,children:[e.jsx(x,{fullWidth:!0,name:"paymentDueDay",label:"납부 기한 일",type:"number",value:s.paymentDueDay,onChange:u,InputProps:{startAdornment:e.jsx(c,{position:"start",children:e.jsx(ue,{color:"primary"})}),inputProps:{min:1,max:31}}}),e.jsx(i,{children:"매월 납부 기한일을 설정합니다. (1-31)"})]}),e.jsxs(n,{item:!0,xs:12,children:[e.jsx(C,{sx:{my:2}}),e.jsx(o,{variant:"h6",sx:{mb:2},children:"알림 설정"})]}),e.jsxs(n,{item:!0,xs:12,sm:6,children:[e.jsx(S,{control:e.jsx(D,{name:"enableNotification",checked:s.enableNotification,onChange:g,color:"primary"}),label:"회비 납부 알림 사용"}),e.jsx(i,{children:"납부 기한 전에 회원들에게 알림을 전송합니다."})]}),e.jsxs(n,{item:!0,xs:12,sm:6,children:[e.jsx(x,{fullWidth:!0,name:"notificationBeforeDays",label:"사전 알림 일수",type:"number",value:s.notificationBeforeDays,onChange:u,disabled:!s.enableNotification,InputProps:{startAdornment:e.jsx(c,{position:"start",children:e.jsx(pe,{color:s.enableNotification?"primary":"disabled"})}),endAdornment:e.jsx(c,{position:"end",children:"일 전"}),inputProps:{min:1,max:10}}}),e.jsx(i,{children:"납부 기한으로부터 몇 일 전에 알림을 전송할지 설정합니다."})]}),e.jsxs(n,{item:!0,xs:12,sm:6,children:[e.jsx(S,{control:e.jsx(D,{name:"enableLateFeeNotification",checked:s.enableLateFeeNotification,onChange:g,color:"primary"}),label:"연체 알림 사용"}),e.jsx(i,{children:"납부 기한이 지난 회원들에게 알림을 전송합니다."})]}),e.jsxs(n,{item:!0,xs:12,sm:6,children:[e.jsx(x,{fullWidth:!0,name:"lateFeePercent",label:"연체료 비율",type:"number",value:s.lateFeePercent,onChange:u,InputProps:{endAdornment:e.jsx(c,{position:"end",children:"%"}),inputProps:{min:0,max:100}}}),e.jsx(i,{children:"연체 시 부과되는 추가 비율을 설정합니다. (0으로 설정 시 없음)"})]}),e.jsxs(n,{item:!0,xs:12,children:[e.jsx(C,{sx:{my:2}}),e.jsx(o,{variant:"h6",sx:{mb:2},children:"자동화 설정"})]}),e.jsxs(n,{item:!0,xs:12,children:[e.jsx(S,{control:e.jsx(D,{name:"autoManagePaymentStatus",checked:s.autoManagePaymentStatus,onChange:g,color:"primary"}),label:"자동 회비 상태 관리"}),e.jsx(i,{children:"새 달이 시작되면 자동으로 모든 회원의 납부 상태를 미납으로 변경합니다."})]}),e.jsx(n,{item:!0,xs:12,children:e.jsxs(N,{fullWidth:!0,children:[e.jsx(H,{id:"exempt-roles-label",children:"자동 면제 역할"}),e.jsxs(z,{labelId:"exempt-roles-label",name:"exemptRoles",multiple:!0,value:s.exemptRoles,onChange:u,renderValue:t=>e.jsx(U,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:t.map(a=>e.jsx(ne,{label:a==="admin"?"관리자":a},a))}),children:[e.jsx(l,{value:"admin",children:"관리자"}),e.jsx(l,{value:"staff",children:"스태프"}),e.jsx(l,{value:"contributor",children:"기여자"})]}),e.jsx(i,{children:"선택된 역할을 가진 회원은 자동으로 회비가 면제됩니다."})]})}),e.jsxs(n,{item:!0,xs:12,children:[e.jsx(C,{sx:{my:2}}),e.jsx(U,{sx:{display:"flex",justifyContent:"flex-end"},children:e.jsx(ce,{variant:"contained",color:"primary",startIcon:e.jsx(le,{}),loading:K,onClick:Y,children:"설정 저장"})})]})]})]})}),e.jsx(n,{item:!0,xs:12,md:4,children:e.jsx(w,{title:"회비 면제 회원",secondary:e.jsx(p,{variant:"contained",size:"small",startIcon:e.jsx(je,{}),onClick:Z,children:"추가"}),children:e.jsx(se,{children:d.length>0?d.map(t=>e.jsxs(V,{divider:!0,children:[e.jsx(ae,{children:e.jsx(re,{alt:t.name,children:t.name.charAt(0)})}),e.jsx(B,{primary:t.name,secondary:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"body2",color:"textSecondary",children:t.email}),e.jsxs(o,{variant:"body2",color:"textSecondary",children:["사유: ",t.reason]}),t.exemptUntil&&e.jsxs(o,{variant:"body2",color:"textSecondary",children:["기간: ~ ",t.exemptUntil]})]})}),e.jsx(ie,{children:e.jsx(oe,{edge:"end","aria-label":"delete",color:"error",onClick:()=>$(t),children:e.jsx(xe,{})})})]},t.id)):e.jsx(V,{children:e.jsx(B,{primary:"회비 면제 회원이 없습니다"})})})})}),e.jsxs(O,{open:Q,onClose:v,maxWidth:"xs",fullWidth:!0,children:[e.jsx(J,{children:"회비 면제 회원 추가"}),e.jsx(G,{children:e.jsxs(n,{container:!0,spacing:2,sx:{mt:1},children:[e.jsx(n,{item:!0,xs:12,children:e.jsxs(N,{fullWidth:!0,children:[e.jsx(H,{children:"회원 선택"}),e.jsxs(z,{label:"회원 선택",defaultValue:"",children:[e.jsx(l,{value:"",children:e.jsx("em",{children:"회원 선택"})}),e.jsx(l,{value:"1",children:"홍길동"}),e.jsx(l,{value:"2",children:"김영희"}),e.jsx(l,{value:"3",children:"이철수"})]})]})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(x,{fullWidth:!0,label:"면제 사유*",value:f,onChange:t=>E(t.target.value),required:!0})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(x,{fullWidth:!0,label:"면제 기간 (선택)",type:"date",value:T,onChange:t=>R(t.target.value),InputLabelProps:{shrink:!0},helperText:"지정하지 않으면 무기한 면제됩니다."})})]})}),e.jsxs(q,{children:[e.jsx(p,{onClick:v,children:"취소"}),e.jsx(p,{onClick:_,variant:"contained",color:"primary",children:"추가"})]})]}),e.jsxs(O,{open:X,onClose:y,children:[e.jsx(J,{children:"회비 면제 삭제"}),e.jsx(G,{children:e.jsxs(de,{children:[m==null?void 0:m.name,"님의 회비 면제를 삭제하시겠습니까?"]})}),e.jsxs(q,{children:[e.jsx(p,{onClick:y,children:"취소"}),e.jsx(p,{onClick:ee,variant:"contained",color:"error",children:"삭제"})]})]}),e.jsx(me,{open:j.open,autoHideDuration:3e3,onClose:W,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(he,{onClose:W,severity:j.severity,sx:{width:"100%"},children:j.message})})]})};export{Le as default};
