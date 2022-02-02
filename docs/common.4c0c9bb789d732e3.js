"use strict";(self.webpackChunkweather=self.webpackChunkweather||[]).push([[592],{1748:(M,_,a)=>{a.d(_,{h:()=>p});var n=a(5e3),u=a(520),l=a(4004),r=a(8505),e=a(9646);let p=(()=>{class s{constructor(t){this.http=t,this.DOAMIN="http://dataservice.accuweather.com",this.MOCK_PATH="./assets/mocks/accuWeatherApi",this.API_KEY="FjttvB4XFLUwg6OFX5YSKb4eBKWGze8I",this.useMock=!1,this.locationsMap=new Map,this.useMock&&(this.useMock=!confirm("Using mock!\nDo you want to switch to live API?"))}get isMock(){return this.useMock&&(0,n.X6Q)()}findLocationByCoords(t,i){const c=this.isMock?`${this.MOCK_PATH}/findLocation.json`:`${this.DOAMIN}/locations/v1/cities/geoposition/search`,h=`${t},${i}`,v=this.setParams().set("q",h);return this.http.get(c,{params:v}).pipe((0,l.U)(m=>(this.addLocationData(m),m.Key)))}locationAutoComplete(t){const i=this.isMock?`${this.MOCK_PATH}/autoComplete.json`:`${this.DOAMIN}/locations/v1/cities/autocomplete`,c=this.setParams().set("q",t);return this.http.get(i,{params:c}).pipe((0,r.b)(h=>h.forEach(v=>this.addLocationData(v))))}getLocationData(t){const i=this.locationsMap.get(t);if(i)return(0,e.of)(i);const c=this.isMock?`${this.MOCK_PATH}/findLocation.json`:`${this.DOAMIN}/locations/v1/${t}`,h=this.setParams();return this.http.get(c,{params:h}).pipe((0,r.b)(v=>this.addLocationData(v)))}currentWeather(t){const i=this.isMock?`${this.MOCK_PATH}/currentWeather.json`:`${this.DOAMIN}/currentconditions/v1/${t}`,c=this.setParams();return this.http.get(i,{params:c}).pipe((0,l.U)(h=>h[0]))}forecast(t){const i=this.isMock?`${this.MOCK_PATH}/forecast.json`:`${this.DOAMIN}/forecasts/v1/daily/5day/${t}`,c=this.setParams().set("metric",!0);return this.http.get(i,{params:c})}setParams(){const t=new u.LE;return this.isMock&&(t.toString=()=>""),t.set("apikey",this.API_KEY)}addLocationData(t){this.locationsMap.set(t.Key,t)}}return s.\u0275fac=function(t){return new(t||s)(n.LFG(u.eN))},s.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},3558:(M,_,a)=>{a.d(_,{H:()=>n,_:()=>u});class n{constructor(r,e){this.locationKey=r.Key,this.locationName=r.LocalizedName,this.current={temp:e.Temperature.Metric.Value,text:e.WeatherText,icon:e.WeatherIcon},this.link=e.Link,this.mobileLink=e.MobileLink}}class u extends n{constructor(r,e,p){super(r,e),this.forecast=p.DailyForecasts.map(s=>({date:1e3*s.EpochDate,minTemp:s.Temperature.Minimum.Value,maxTemp:s.Temperature.Maximum.Value}))}}},3591:(M,_,a)=>{a.d(_,{G:()=>r});var n=a(1135),u=a(4004),l=a(5e3);let r=(()=>{class e{constructor(){this.LS_KEY="favorites",this._favorites=new n.X(this.getDataFromLocalStorage()),this.favorites$=this._favorites.asObservable(),this.favorites$.subscribe(()=>{this.saveDataToLocalStorage()})}isFavorite(s){return this.favorites$.pipe((0,u.U)(o=>o.includes(s)))}addFavorite(s){const o=this._favorites.value;o.push(s),this._favorites.next(o)}removeFavorite(s){const o=this._favorites.value,t=o.indexOf(s);o.splice(t,1),this._favorites.next(o)}getDataFromLocalStorage(){const s=localStorage.getItem(this.LS_KEY);if(s){const o=JSON.parse(s);if(Array.isArray(o))return o.filter(t=>"string"==typeof t)}return[]}saveDataToLocalStorage(){const s=JSON.stringify(this._favorites.value);localStorage.setItem(this.LS_KEY,s)}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);