import{a as v,b as M,c as x,d as C,e as S,f as j}from"./chunk-24ZTUQGN.js";import{a as R,b as w}from"./chunk-Q222OZG2.js";import{Aa as f,Ba as d,Ea as h,Ia as a,K as m,La as g,U as l,Za as A,ab as y,s as r,w as s,x as i,ya as u,za as c}from"./chunk-FRD72HZF.js";var b=[{path:"",redirectTo:"user",pathMatch:"full"},{path:"user",loadChildren:()=>import("./chunk-VV2KNUR4.js").then(t=>t.UserModule)},{path:"admin",loadChildren:()=>import("./chunk-PSKMGPPL.js").then(t=>t.AdminModule)}],T=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=i({type:t});static \u0275inj=r({imports:[a.forRoot(b),a]})}return t})();var _=(()=>{class t{translateService;constructor(o){this.translateService=o,this.translateService.setDefaultLang("en"),this.translateService.use(localStorage.getItem("lang")||"en")}title="exitExam";static \u0275fac=function(e){return new(e||t)(m(M))};static \u0275cmp=s({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,L){e&1&&l(0,"router-outlet")},dependencies:[h]})}return t})();var n=class{http;prefix;suffix;constructor(p,o="/assets/i18n/",e=".json"){this.http=p,this.prefix=o,this.suffix=e}getTranslation(p){return this.http.get(`${this.prefix}${p}${this.suffix}`)}};function I(t){return new n(t,"i18n/",".json")}var F=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=i({type:t,bootstrap:[_]});static \u0275inj=r({providers:[c(),g,A,y,C,S,R],imports:[d,T,j,w,x.forRoot({loader:{provide:v,useFactory:I,deps:[u]},defaultLanguage:"en"})]})}return t})();f().bootstrapModule(F,{ngZoneEventCoalescing:!0}).catch(t=>console.error(t));
