(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{cAcB:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{}var t=u("pMnS"),s=u("oBZk"),r=u("ZZ/e"),o=u("s7LF"),a=u("iInd");let b=(()=>{class l{constructor(l){this.router=l}}return l.ngInjectableDef=e.Lb({factory:function(){return new l(e.Mb(a.m))},token:l,providedIn:"root"}),l})();var d=u("jrvm"),g=u("mrSG");let c=(()=>{class l{constructor(l,n){this.alertCtrl=l,this.loadingCtrl=n,this.isLoading=!1}presentErrorAlert(l,n){return g.__awaiter(this,void 0,void 0,function*(){const u=yield this.alertCtrl.create({message:n,subHeader:l,buttons:["Dismiss"]});yield u.present()})}presentLoading(){return g.__awaiter(this,void 0,void 0,function*(){return this.isLoading=!0,yield this.loadingCtrl.create({duration:5e3}).then(l=>{l.present().then(()=>{console.log("presented"),this.isLoading||l.dismiss().then(()=>console.log("abort presenting"))})})})}dismissLoading(){return g.__awaiter(this,void 0,void 0,function*(){return this.isLoading=!1,yield this.loadingCtrl.dismiss().then(()=>console.log("dismissed"))})}}return l.ngInjectableDef=e.Lb({factory:function(){return new l(e.Mb(r.a),e.Mb(r.Fb))},token:l,providedIn:"root"}),l})();var h=u("pW6c");class p{constructor(l,n,u,e,i,t,s,r,a){this.authService=l,this.router=n,this.globalService=u,this.alertHdlrService=e,this.events=i,this.formBuilder=t,this.afAuth=s,this.authenticationService=r,this.menuCtrl=a,this.signInForm=this.formBuilder.group({email:["",o.k.required],password:["",o.k.required]}),console.log("SigninComponent")}ngOnInit(){this.signInForm.controls.email.setValue("ramkumar.siriyala@gmail.com"),this.signInForm.controls.password.setValue("password")}ionViewWillEnter(){this.menuCtrl.enable(!1)}ionViewDidLoad(){}onSignin(){const l=this.signInForm.value.email,n=this.signInForm.value.password;console.log("form ",this.signInForm),this.signinUser(l,n)}signinUser(l,n){this.alertHdlrService.presentLoading(),this.afAuth.auth.signInWithEmailAndPassword(l,n).then(l=>{console.log("signinUser ",l),console.log("user ",l.user),this.alertHdlrService.dismissLoading(),this.user=l.user,this.globalService.user=l.user,this.authenticationService.setCurrentUser(this.user),this.events.publish("user:login",this.user,Date.now()),console.log("this.user ",this.user),this.router.navigate(["/projects"])}).catch(l=>{this.alertHdlrService.dismissLoading(),console.log(l),this.alertHdlrService.presentErrorAlert("Alert!",l.message)})}}var m=u("irV9"),C=e.pb({encapsulation:0,styles:[[""]],data:{}});function v(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,46,"ion-content",[["padding",""]],null,null,null,s.S,s.m)),e.qb(1,49152,null,0,r.u,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,44,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var i=!0,t=l.component;return"submit"===n&&(i=!1!==e.Cb(l,4).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Cb(l,4).onReset()&&i),"ngSubmit"===n&&(i=!1!==t.onSignin()&&i),i},null,null)),e.qb(3,16384,null,0,o.o,[],null,null),e.qb(4,540672,null,0,o.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Eb(2048,null,o.a,null,[o.d]),e.qb(6,16384,null,0,o.i,[[4,o.a]],null,null),(l()(),e.rb(7,0,null,null,39,"ion-grid",[],null,null,null,s.U,s.o)),e.qb(8,49152,null,0,r.A,[e.h,e.k,e.x],null,null),(l()(),e.rb(9,0,null,0,37,"ion-row",[["color","primary"],["justify-content-center",""]],null,null,null,s.fb,s.z)),e.qb(10,49152,null,0,r.ib,[e.h,e.k,e.x],null,null),(l()(),e.rb(11,0,null,0,35,"ion-col",[["align-self-center",""],["size-lg","5"],["size-md","6"],["size-xs","12"]],null,null,null,s.R,s.l)),e.qb(12,49152,null,0,r.t,[e.h,e.k,e.x],null,null),(l()(),e.rb(13,0,null,0,33,"ion-card",[],null,null,null,s.Q,s.g)),e.qb(14,49152,null,0,r.m,[e.h,e.k,e.x],null,null),(l()(),e.rb(15,0,null,0,2,"div",[["text-center",""]],null,null,null,null,null)),(l()(),e.rb(16,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Login"])),(l()(),e.rb(18,0,null,0,24,"div",[["padding",""]],null,null,null,null,null)),(l()(),e.rb(19,0,null,null,11,"ion-item",[],null,null,null,s.Y,s.s)),e.qb(20,49152,null,0,r.H,[e.h,e.k,e.x],null,null),(l()(),e.rb(21,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,s.Z,s.t)),e.qb(22,49152,null,0,r.N,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Email"])),(l()(),e.rb(24,0,null,0,6,"ion-input",[["formControlName","email"],["name","email"],["placeholder","your@email.com"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Cb(l,26)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==e.Cb(l,26)._handleInputEvent(u.target.value)&&i),i},s.X,s.r)),e.qb(25,49152,null,0,r.G,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),e.qb(26,16384,null,0,r.Mb,[e.k],null,null),e.Eb(1024,null,o.f,function(l){return[l]},[r.Mb]),e.qb(28,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.f],[2,o.n]],{name:[0,"name"]},null),e.Eb(2048,null,o.g,null,[o.c]),e.qb(30,16384,null,0,o.h,[[4,o.g]],null,null),(l()(),e.rb(31,0,null,null,11,"ion-item",[],null,null,null,s.Y,s.s)),e.qb(32,49152,null,0,r.H,[e.h,e.k,e.x],null,null),(l()(),e.rb(33,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,s.Z,s.t)),e.qb(34,49152,null,0,r.N,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Password"])),(l()(),e.rb(36,0,null,0,6,"ion-input",[["formControlName","password"],["name","password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Cb(l,38)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==e.Cb(l,38)._handleInputEvent(u.target.value)&&i),i},s.X,s.r)),e.qb(37,49152,null,0,r.G,[e.h,e.k,e.x],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),e.qb(38,16384,null,0,r.Mb,[e.k],null,null),e.Eb(1024,null,o.f,function(l){return[l]},[r.Mb]),e.qb(40,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.f],[2,o.n]],{name:[0,"name"]},null),e.Eb(2048,null,o.g,null,[o.c]),e.qb(42,16384,null,0,o.h,[[4,o.g]],null,null),(l()(),e.rb(43,0,null,0,3,"div",[["padding",""]],null,null,null,null,null)),(l()(),e.rb(44,0,null,null,2,"ion-button",[["expand","block"],["size","large"],["type","submit"]],null,null,null,s.K,s.e)),e.qb(45,49152,null,0,r.k,[e.h,e.k,e.x],{disabled:[0,"disabled"],expand:[1,"expand"],size:[2,"size"],type:[3,"type"]},null),(l()(),e.Hb(-1,0,["Login"]))],function(l,n){var u=n.component;l(n,4,0,u.signInForm),l(n,22,0,"stacked"),l(n,25,0,"email","your@email.com","email"),l(n,28,0,"email"),l(n,34,0,"stacked"),l(n,37,0,"password","Password","password"),l(n,40,0,"password"),l(n,45,0,!u.signInForm.valid,"block","large","submit")},function(l,n){l(n,2,0,e.Cb(n,6).ngClassUntouched,e.Cb(n,6).ngClassTouched,e.Cb(n,6).ngClassPristine,e.Cb(n,6).ngClassDirty,e.Cb(n,6).ngClassValid,e.Cb(n,6).ngClassInvalid,e.Cb(n,6).ngClassPending),l(n,24,0,e.Cb(n,30).ngClassUntouched,e.Cb(n,30).ngClassTouched,e.Cb(n,30).ngClassPristine,e.Cb(n,30).ngClassDirty,e.Cb(n,30).ngClassValid,e.Cb(n,30).ngClassInvalid,e.Cb(n,30).ngClassPending),l(n,36,0,e.Cb(n,42).ngClassUntouched,e.Cb(n,42).ngClassTouched,e.Cb(n,42).ngClassPristine,e.Cb(n,42).ngClassDirty,e.Cb(n,42).ngClassValid,e.Cb(n,42).ngClassInvalid,e.Cb(n,42).ngClassPending)})}function f(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,1,"app-signin",[],null,null,null,v,C)),e.qb(1,114688,null,0,p,[b,a.m,d.a,c,r.d,o.b,m.a,h.a,r.Gb],null,null)],function(l,n){l(n,1,0)},null)}var k=e.nb("app-signin",p,f,{},{},[]);class w{constructor(){}ngOnInit(){}}var y=e.pb({encapsulation:0,styles:[[""]],data:{}});function q(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["signup works!"]))],null,null)}function A(l){return e.Ib(0,[(l()(),e.rb(0,0,null,null,1,"app-signup",[],null,null,null,q,y)),e.qb(1,114688,null,0,w,[],null,null)],function(l,n){l(n,1,0)},null)}var I=e.nb("app-signup",w,A,{},{},[]),S=u("SVse");class x{}u.d(n,"AuthModuleNgFactory",function(){return H});var H=e.ob(i,[],function(l){return e.zb([e.Ab(512,e.j,e.Z,[[8,[t.a,k,I]],[3,e.j],e.v]),e.Ab(4608,S.l,S.k,[e.s,[2,S.t]]),e.Ab(4608,r.b,r.b,[e.x,e.g]),e.Ab(4608,r.Hb,r.Hb,[r.b,e.j,e.p]),e.Ab(4608,r.Kb,r.Kb,[r.b,e.j,e.p]),e.Ab(4608,o.m,o.m,[]),e.Ab(4608,o.b,o.b,[]),e.Ab(1073742336,S.b,S.b,[]),e.Ab(1073742336,r.Db,r.Db,[]),e.Ab(1073742336,o.l,o.l,[]),e.Ab(1073742336,o.e,o.e,[]),e.Ab(1073742336,o.j,o.j,[]),e.Ab(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),e.Ab(1073742336,x,x,[]),e.Ab(1073742336,i,i,[]),e.Ab(1024,a.k,function(){return[[{path:"",component:p},{path:"register",component:w}]]},[])])})}}]);