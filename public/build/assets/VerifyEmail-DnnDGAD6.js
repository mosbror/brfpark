import{C as c,i as g,c as p,w as i,o as r,a as o,u as t,d as y,b as n,g as v,h as b,e as a,n as x,P as h,f as k}from"./app-D0YWdeSp.js";import{_}from"./GuestLayout--mXre98Y.js";import{P as w}from"./PrimaryButton-DgIU9oUP.js";import"./ApplicationLogo-CwPIfStL.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V={key:0,class:"mb-4 text-sm font-medium text-green-600"},B={class:"mt-4 flex items-center justify-between"},j={__name:"VerifyEmail",props:{status:{type:String}},setup(d){const l=d,s=c({}),u=()=>{s.post(route("verification.send"))},m=g(()=>l.status==="verification-link-sent");return(f,e)=>(r(),p(_,null,{default:i(()=>[o(t(y),{title:"Email Verification"}),e[2]||(e[2]=n("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1)),m.value?(r(),v("div",V," A new verification link has been sent to the email address you provided during registration. ")):b("",!0),n("form",{onSubmit:k(u,["prevent"])},[n("div",B,[o(w,{class:x({"opacity-25":t(s).processing}),disabled:t(s).processing},{default:i(()=>e[0]||(e[0]=[a(" Resend Verification Email ")])),_:1},8,["class","disabled"]),o(t(h),{href:f.route("logout"),method:"post",as:"button",class:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},{default:i(()=>e[1]||(e[1]=[a("Log Out")])),_:1},8,["href"])])],32)]),_:1}))}};export{j as default};
