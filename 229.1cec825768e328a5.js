"use strict";(self.webpackChunktareasApp=self.webpackChunktareasApp||[]).push([[229],{9229:(w,m,r)=>{r.r(m),r.d(m,{AuthModule:()=>b});var g=r(6814),n=r(95),l=r(5262),t=r(4946),f=r(304),d=r(3714),p=r(707);const h=[{path:"login",data:{title:"Login"},component:(()=>{var o;class i{constructor(e,a,c){this.formBuilder=e,this.authService=a,this.router=c,this.form=this.formBuilder.group({email:["admin@gmail.com",[n.kI.required]],password:["123456",[n.kI.required]]})}ingresar(){if(!this.form.valid)return;const e={email:this.form.get("email")?.value,password:this.form.get("password")?.value,name:"Jhosimar"};this.authService.login(e),this.router.navigateByUrl("/principal")}}return(o=i).\u0275fac=function(e){return new(e||o)(t.Y36(n.qu),t.Y36(f.e),t.Y36(l.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:17,vars:1,consts:[[1,"flex","with-background"],[1,"surface-card","p-4","shadow-2","border-round","w-full","lg:w-6"],[1,"text-center","mb-5"],["src","assets/images/logo.png","alt","Image","height","100",1,"mb-3"],[1,"text-900","text-3xl","font-medium","mb-3"],[1,"text-600","font-medium","line-height-3"],[3,"formGroup","ngSubmit"],["for","email1",1,"block","text-900","font-medium","mb-2"],["id","email1","type","text","formControlName","email","placeholder","Email","pInputText","",1,"w-full","mb-3"],["for","password1",1,"block","text-900","font-medium","mb-2"],["id","password1","type","password","formControlName","password","placeholder","Password","pInputText","",1,"w-full","mb-3"],["pButton","","pRipple","","label","Ingresar","icon","pi pi-user",1,"w-full"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"div",4),t._uU(5,"Bienvenido!"),t.qZA(),t.TgZ(6,"span",5),t._uU(7,"Por favor, ingrese sus credenciales."),t.qZA()(),t.TgZ(8,"form",6),t.NdJ("ngSubmit",function(){return a.ingresar()}),t.TgZ(9,"div")(10,"label",7),t._uU(11,"Email"),t.qZA(),t._UZ(12,"input",8),t.TgZ(13,"label",9),t._uU(14,"Password"),t.qZA(),t._UZ(15,"input",10)(16,"button",11),t.qZA()()()()),2&e&&(t.xp6(8),t.Q6J("formGroup",a.form))},dependencies:[n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,d.o,p.Hq],styles:[".flex[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:80px 0 50px}.with-background[_ngcontent-%COMP%]{background-image:url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg);background-size:cover;background-position:center}"]}),i})()},{path:"",redirectTo:"login",pathMatch:"full"}];let v=(()=>{var o;class i{}return(o=i).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(h),l.Bz]}),i})(),b=(()=>{var o;class i{}return(o=i).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,v,n.UX,d.j,p.hJ]}),i})()}}]);