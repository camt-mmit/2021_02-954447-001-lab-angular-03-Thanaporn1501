"use strict";(self.webpackChunkmy_ng3=self.webpackChunkmy_ng3||[]).push([[162],{162:(O,h,r)=>{r.r(h),r.d(h,{MyFormModule:()=>P});var g=r(9808),d=r(4354),e=r(7587);let A=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-my-form"]],decls:9,vars:0,consts:[[1,"cmp"],[1,"cmp-nav"],[1,"nav"],[1,"nav-item"],["routerLink","./input",1,"nav-link","btn","btn-link","mb-3"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h2"),e._uU(2,"My-form"),e.qZA(),e.TgZ(3,"nav",1),e.TgZ(4,"ul",2),e.TgZ(5,"li",3),e.TgZ(6,"a",4),e._uU(7,"Simple Form"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(8,"router-outlet"))},directives:[d.yS,d.lC],styles:[""]}),i})(),T=(()=>{class i{constructor(){let t=localStorage.getItem("my-form");this.data=t?JSON.parse(t):{}}updateStorage(){localStorage.setItem("my-form",JSON.stringify(this.data)),console.log(this.data)}update(t){this.data=t,this.updateStorage()}getData(){return this.data}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var y=r(727);class S extends y.w0{constructor(n,t){super()}schedule(n,t=0){return this}}const m={setInterval(...i){const{delegate:n}=m;return((null==n?void 0:n.setInterval)||setInterval)(...i)},clearInterval(i){const{delegate:n}=m;return((null==n?void 0:n.clearInterval)||clearInterval)(i)},delegate:void 0};var b=r(8737),F=r(6063);class u{constructor(n,t=u.now){this.schedulerActionCtor=n,this.now=t}schedule(n,t=0,o){return new this.schedulerActionCtor(this,n).schedule(o,t)}}u.now=F.l.now;const x=new class C extends u{constructor(n,t=u.now){super(n,t),this.actions=[],this._active=!1,this._scheduled=void 0}flush(n){const{actions:t}=this;if(this._active)return void t.push(n);let o;this._active=!0;do{if(o=n.execute(n.state,n.delay))break}while(n=t.shift());if(this._active=!1,o){for(;n=t.shift();)n.unsubscribe();throw o}}}(class q extends S{constructor(n,t){super(n,t),this.scheduler=n,this.work=t,this.pending=!1}schedule(n,t=0){if(this.closed)return this;this.state=n;const o=this.id,s=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(s,o,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(s,this.id,t),this}requestAsyncId(n,t,o=0){return m.setInterval(n.flush.bind(n,this),o)}recycleAsyncId(n,t,o=0){if(null!=o&&this.delay===o&&!1===this.pending)return t;m.clearInterval(t)}execute(n,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const o=this._execute(n,t);if(o)return o;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,t){let s,o=!1;try{this.work(n)}catch(a){o=!0,s=a||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),s}unsubscribe(){if(!this.closed){const{id:n,scheduler:t}=this,{actions:o}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,b.P)(o,this),null!=n&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null,super.unsubscribe()}}});var U=r(4482),w=r(5403),l=r(3075),f=r(6964);function I(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",13),e.TgZ(2,"div",14),e.TgZ(3,"label"),e._uU(4),e.qZA(),e.TgZ(5,"span",15),e._uU(6,"::"),e.qZA(),e.qZA(),e.TgZ(7,"div",3),e.TgZ(8,"div",16),e.TgZ(9,"div",17),e._UZ(10,"input",18),e.TgZ(11,"div",19),e.TgZ(12,"span",20),e.NdJ("click",function(){const a=e.CHM(t).index;return e.oxw().deleteSlibing(a)}),e.TgZ(13,"mat-icon"),e._uU(14,"delete"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=n.index;e.xp6(4),e.hij("Slibing ",t+1,""),e.xp6(6),e.Q6J("formControlName",t)}}let J=(()=>{class i{constructor(t){this.fb=t,this.update=new e.vpe}ngOnInit(){console.debug(this.data),this.formGroup=this.fb.group({name:[this.data.name||null],age:[this.data.age||null],gender:[this.data.gender||null],address:[this.data.address||null],slibings:this.fb.array((this.data.slibings||[]).map(t=>this.fb.control([t])))}),this.formGroup.valueChanges.pipe(function M(i,n=x){return(0,U.e)((t,o)=>{let s=null,a=null,p=null;const Z=()=>{if(s){s.unsubscribe(),s=null;const c=a;a=null,o.next(c)}};function k(){const c=p+i,v=n.now();if(v<c)return s=this.schedule(void 0,c-v),void o.add(s);Z()}t.subscribe(new w.Q(o,c=>{a=c,p=n.now(),s||(s=n.schedule(k,i),o.add(s))},()=>{Z(),o.complete()},void 0,()=>{a=s=null}))})}(1e3)).subscribe(t=>this.update.emit(t))}get slibings(){return this.formGroup.get("slibings")}addSlibing(){this.slibings.push(this.fb.control(null))}deleteSlibing(t){this.slibings.removeAt(t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.qu))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-simple-form"]],inputs:{data:"data"},outputs:{update:"update"},decls:46,vars:5,consts:[[3,"formGroup"],[1,"row","mb-3"],[1,"cmp-form","col-lg-2","d-flex","justify-content-between"],[1,"col-lg-10"],["formControlName","name",1,"form-control"],["formControlName","age",1,"form-control"],["formControlName","gender",1,"form-control"],[3,"value"],["formControlName","address",1,"form-control"],["formArrayName","slibings",1,"mb-3"],[1,"col-lg-10","mb-3"],["type","button",1,"btn","btn-success","d-flex",3,"click"],[4,"ngFor","ngForOf"],[1,"row"],[1,"slibing","col-lg-2"],[1,"ps-3"],[1,"d-flex"],[1,"input-group"],["type","text",1,"form-control",3,"formControlName"],[1,"input-group-append"],["id","basic-addon2",1,"input-group-text",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"label"),e._uU(4,"Name"),e.qZA(),e.TgZ(5,"span"),e._uU(6,"::"),e.qZA(),e.qZA(),e.TgZ(7,"div",3),e._UZ(8,"input",4),e.qZA(),e.qZA(),e.TgZ(9,"div",1),e.TgZ(10,"div",2),e.TgZ(11,"label"),e._uU(12,"Age"),e.qZA(),e.TgZ(13,"span"),e._uU(14,"::"),e.qZA(),e.qZA(),e.TgZ(15,"div",3),e._UZ(16,"input",5),e.qZA(),e.qZA(),e.TgZ(17,"div",1),e.TgZ(18,"div",2),e.TgZ(19,"label"),e._uU(20,"Gender"),e.qZA(),e.TgZ(21,"span"),e._uU(22,"::"),e.qZA(),e.qZA(),e.TgZ(23,"div",3),e.TgZ(24,"select",6),e.TgZ(25,"option",7),e._uU(26,"-- Please select --"),e.qZA(),e.TgZ(27,"option",7),e._uU(28,"Male"),e.qZA(),e.TgZ(29,"option",7),e._uU(30,"Female"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(31,"div",1),e.TgZ(32,"div",2),e.TgZ(33,"label"),e._uU(34,"Address"),e.qZA(),e.TgZ(35,"span"),e._uU(36,"::"),e.qZA(),e.qZA(),e.TgZ(37,"div",3),e._UZ(38,"textarea",8),e.qZA(),e.qZA(),e.TgZ(39,"div",9),e.TgZ(40,"div",10),e.TgZ(41,"button",11),e.NdJ("click",function(){return o.addSlibing()}),e.TgZ(42,"mat-icon"),e._uU(43,"add"),e.qZA(),e._uU(44,"Slibings "),e.qZA(),e.qZA(),e.YNc(45,I,15,2,"div",12),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",o.formGroup),e.xp6(25),e.Q6J("value",null),e.xp6(2),e.Q6J("value","male"),e.xp6(2),e.Q6J("value","female"),e.xp6(16),e.Q6J("ngForOf",o.slibings.controls))},directives:[l.JL,l.sg,l.Fj,l.JJ,l.u,l.EJ,l.YN,l.Kr,l.CE,f.Hw,g.sg],styles:[""]}),i})();const _=[{path:"",component:A,children:[{path:"",redirectTo:"simple-form",pathMatch:"full"},{path:"simple-form",component:(()=>{class i{constructor(t){this.dataService=t,this.data={}}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-simple-form-page"]],decls:5,vars:1,consts:[[1,"cmp-component"],[3,"data","update"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h3"),e._uU(2,"Simple Form"),e.qZA(),e._UZ(3,"hr"),e.TgZ(4,"app-simple-form",1),e.NdJ("update",function(a){return o.dataService.update(a)}),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("data",o.dataService.getData()))},directives:[J],styles:[""]}),i})()}]}];let N=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[d.Bz.forChild(_)],d.Bz]}),i})(),P=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[g.ez,N,l.UX,f.Ps]]}),i})()}}]);