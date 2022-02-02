"use strict";(self.webpackChunkweather=self.webpackChunkweather||[]).push([[8],{1008:(k,g,r)=>{r.r(g),r.d(g,{WeatherPageModule:()=>H});var d=r(9808),u=r(1787),h=r(4004),F=r(9300),P=r(8505),v=r(3900),x=r(9841),W=r(262),O=r(9646),w=r(3558),e=r(5e3),f=r(1748),L=r(3591),m=r(3075),S=r(8372),y=r(7322),M=r(7531),T=r(3092),U=r(508);function J(t,n){if(1&t&&(e.TgZ(0,"mat-option",5),e._uU(1),e.qZA()),2&t){const a=n.$implicit;e.Q6J("value",a),e.xp6(1),e.hij(" ",a," ")}}let D=(()=>{class t{constructor(a){this.accuWeatherApi=a,this.placeSelected=new e.vpe,this.searchForm=new m.NI,this.filteredOptions$=this.searchForm.valueChanges.pipe((0,S.b)(1e3),(0,v.w)(o=>this.accuWeatherApi.locationAutoComplete(o)),(0,h.U)(o=>(this.results=o,o.map(c=>c.LocalizedName))))}ngOnInit(){}selectPlace(a){var o;const c=null===(o=this.results)||void 0===o?void 0:o.find(s=>s.LocalizedName===a);c&&this.placeSelected.emit(c.Key)}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(f.h))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-search-place"]],outputs:{placeSelected:"placeSelected"},decls:8,vars:5,consts:[["appearance","fill"],["type","text","matInput","",3,"formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(a,o){if(1&a&&(e.TgZ(0,"mat-form-field",0),e.TgZ(1,"mat-label"),e._uU(2,"Search place"),e.qZA(),e._UZ(3,"input",1),e.TgZ(4,"mat-autocomplete",2,3),e.NdJ("optionSelected",function(s){return o.selectPlace(s.option.value)}),e.YNc(6,J,2,2,"mat-option",4),e.ALo(7,"async"),e.qZA(),e.qZA()),2&a){const c=e.MAs(5);e.xp6(3),e.Q6J("formControl",o.searchForm)("matAutocomplete",c),e.xp6(3),e.Q6J("ngForOf",e.lcZ(7,3,o.filteredOptions$))}},directives:[y.KE,y.hX,M.Nt,m.Fj,T.ZL,m.JJ,m.oH,T.XC,d.sg,U.ey],pipes:[d.Ov],styles:[""]}),t})();var E=r(7423),N=r(9772),I=r(3874),Z=r(5141);let Y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-daily-temp-card"]],inputs:{dailyTemp:"dailyTemp"},decls:11,vars:14,consts:[["id","wrapper"]],template:function(a,o){1&a&&(e.TgZ(0,"div",0),e.TgZ(1,"h4"),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.ALo(6,"date"),e.qZA(),e.TgZ(7,"h2"),e._uU(8),e.ALo(9,"temp"),e.ALo(10,"temp"),e.qZA(),e.qZA()),2&a&&(e.xp6(2),e.Oqu(e.xi3(3,4,o.dailyTemp.date,"EEE")),e.xp6(3),e.Oqu(e.xi3(6,7,o.dailyTemp.date,"dd/MM")),e.xp6(3),e.AsE("",e.lcZ(9,10,o.dailyTemp.minTemp)," - ",e.lcZ(10,12,o.dailyTemp.maxTemp),""))},pipes:[d.uU,Z.e],styles:["#wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;border:solid 1px black;border-radius:.5em;padding:.5em}"]}),t})();function G(t,n){1&t&&e._UZ(0,"app-daily-temp-card",8),2&t&&e.Q6J("dailyTemp",n.$implicit)}let K=(()=>{class t{constructor(){this.isFavorite=!1,this.favoriteToggled=new e.vpe}ngOnInit(){}toggleFavorite(){this.favoriteToggled.emit(!this.isFavorite)}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-weather-card"]],inputs:{weatherData:"weatherData",isFavorite:"isFavorite"},outputs:{favoriteToggled:"favoriteToggled"},decls:19,vars:8,consts:[["id","wrapper"],["id","header"],["id","details"],["id","favorite"],["mat-icon-button","","color","warn",3,"matTooltip","click"],["id","text-box"],["id","forecast"],[3,"dailyTemp",4,"ngFor","ngForOf"],[3,"dailyTemp"]],template:function(a,o){1&a&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"img"),e.TgZ(4,"div"),e.TgZ(5,"p"),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.ALo(9,"temp"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",3),e.TgZ(11,"button",4),e.NdJ("click",function(){return o.toggleFavorite()}),e.TgZ(12,"mat-icon"),e._uU(13),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",5),e.TgZ(15,"h1"),e._uU(16),e.qZA(),e.qZA(),e.TgZ(17,"div",6),e.YNc(18,G,1,1,"app-daily-temp-card",7),e.qZA(),e.qZA()),2&a&&(e.xp6(6),e.Oqu(o.weatherData.locationName),e.xp6(2),e.Oqu(e.lcZ(9,6,o.weatherData.current.temp)),e.xp6(3),e.Q6J("matTooltip",o.isFavorite?"Remove from favorites":"Add to favorites"),e.xp6(2),e.Oqu(o.isFavorite?"favorite":"favorite_border"),e.xp6(3),e.Oqu(o.weatherData.current.text),e.xp6(2),e.Q6J("ngForOf",o.weatherData.forecast))},directives:[E.lW,N.gM,I.Hw,d.sg,Y],pipes:[Z.e],styles:["[_nghost-%COMP%]{width:100%;max-width:1000px}#wrapper[_ngcontent-%COMP%]{border:solid 1px black;border-radius:1em;box-shadow:#000 0 0 2px 2px;padding:1em}#text-box[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}#header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}#header[_ngcontent-%COMP%]   #details[_ngcontent-%COMP%]{display:flex}#forecast[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,auto);grid-column-gap:1em}"]}),t})();function Q(t,n){if(1&t){const a=e.EpF();e.ynx(0),e.TgZ(1,"app-weather-card",3),e.NdJ("favoriteToggled",function(c){return e.CHM(a),e.oxw().toggleFavorite(c)}),e.ALo(2,"async"),e.qZA(),e.BQk()}if(2&t){const a=n.ngIf,o=e.oxw();e.xp6(1),e.Q6J("weatherData",a)("isFavorite",e.lcZ(2,2,o.isFavorite$)||!1)}}function R(t,n){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Place not found"),e.qZA())}let $=(()=>{class t{constructor(a,o,c,s){this.activatedRoute=a,this.router=o,this.accuWeatherApi=c,this.favoritesService=s,this.notFound=!1,this.key="",this.weather$=this.activatedRoute.params.pipe((0,h.U)(i=>i.key),(0,F.h)(i=>{const l=!!+i;return this.notFound=!l,l}),(0,P.b)(i=>{this.key=i,this.isFavorite$=this.favoritesService.isFavorite(i)}),(0,v.w)(i=>(0,x.a)([this.accuWeatherApi.getLocationData(i),this.accuWeatherApi.currentWeather(i),this.accuWeatherApi.forecast(i)])),(0,h.U)(i=>new w._(...i)),(0,W.K)(()=>(this.notFound=!0,(0,O.of)(null))))}ngOnInit(){}redirectToLocation(a){return this.router.navigate(["../",a],{relativeTo:this.activatedRoute})}toggleFavorite(a){a?this.favoritesService.addFavorite(this.key):this.favoritesService.removeFavorite(this.key)}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(f.h),e.Y36(L.G))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-weather-page"]],decls:6,vars:4,consts:[[3,"placeSelected"],[4,"ngIf","ngIfElse"],["not_found",""],[3,"weatherData","isFavorite","favoriteToggled"]],template:function(a,o){if(1&a&&(e.TgZ(0,"main"),e.TgZ(1,"app-search-place",0),e.NdJ("placeSelected",function(s){return o.redirectToLocation(s)}),e.qZA(),e.YNc(2,Q,3,4,"ng-container",1),e.ALo(3,"async"),e.YNc(4,R,2,0,"ng-template",null,2,e.W1O),e.qZA()),2&a){const c=e.MAs(5);e.xp6(2),e.Q6J("ngIf",!o.notFound&&e.lcZ(3,2,o.weather$))("ngIfElse",c)}},directives:[D,d.O5,K],pipes:[d.Ov],styles:["main[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}"]}),t})();function C(t,n,a,o,c,s,i){try{var l=t[s](i),p=l.value}catch(b){return void a(b)}l.done?n(p):Promise.resolve(p).then(o,c)}function A(t){return function(){var n=this,a=arguments;return new Promise(function(o,c){var s=t.apply(n,a);function i(p){C(s,o,c,i,l,"next",p)}function l(p){C(s,o,c,i,l,"throw",p)}i(void 0)})}}var z=r(6805),B=r(158);const V=[{path:"",redirectTo:"0"},{path:":key",component:$,canActivate:[(()=>{class t{constructor(a,o){this.router=a,this.accuWeatherApi=o}canActivate(a){var o=this;return A(function*(){if(+a.params.key)return!0;try{const i=yield o.findUserLocationKey();return o.router.createUrlTree([B.n.WEATHER,i])}catch(i){return!0}})()}findUserLocationKey(){var a=this;return new Promise((o,c)=>{navigator.geolocation.getCurrentPosition(function(){var s=A(function*(i){const l=a.accuWeatherApi.findLocationByCoords(i.coords.latitude,i.coords.longitude),p=yield function j(t,n){const a="object"==typeof n;return new Promise((o,c)=>{let i,s=!1;t.subscribe({next:l=>{i=l,s=!0},error:c,complete:()=>{s?o(i):a?o(n.defaultValue):c(new z.K)}})})}(l);o(p)});return function(i){return s.apply(this,arguments)}}(),s=>{console.error(s),c()})})}}return t.\u0275fac=function(a){return new(a||t)(e.LFG(u.F0),e.LFG(f.h))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()]}];let X=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild(V)],u.Bz]}),t})();var q=r(8107);let H=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,X,q.m]]}),t})()}}]);