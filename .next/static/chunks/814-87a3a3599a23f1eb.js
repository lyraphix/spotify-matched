(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[814],{4444:function(e,t,a){"use strict";a.d(t,{$s:function(){return g},L:function(){return o},LL:function(){return f},ZR:function(){return d},eu:function(){return u},hl:function(){return c},m9:function(){return m},ru:function(){return l},zI:function(){return h}}),a(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r=function(e){let t=[],a=0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<128?t[a++]=n:n<2048?(t[a++]=n>>6|192,t[a++]=63&n|128):(64512&n)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++r)),t[a++]=n>>18|240,t[a++]=n>>12&63|128,t[a++]=n>>6&63|128,t[a++]=63&n|128):(t[a++]=n>>12|224,t[a++]=n>>6&63|128,t[a++]=63&n|128)}return t},n=function(e){let t=[],a=0,r=0;for(;a<e.length;){let n=e[a++];if(n<128)t[r++]=String.fromCharCode(n);else if(n>191&&n<224){let i=e[a++];t[r++]=String.fromCharCode((31&n)<<6|63&i)}else if(n>239&&n<365){let i=e[a++],s=e[a++],o=e[a++],l=((7&n)<<18|(63&i)<<12|(63&s)<<6|63&o)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{let i=e[a++],s=e[a++];t[r++]=String.fromCharCode((15&n)<<12|(63&i)<<6|63&s)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let a=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let n=e[t],i=t+1<e.length,s=i?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=n>>2,u=(3&n)<<4|s>>4,h=(15&s)<<2|l>>6,d=63&l;o||(d=64,i||(h=64)),r.push(a[c],a[u],a[h],a[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):n(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let a=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let n=a[e.charAt(t++)],i=t<e.length,s=i?a[e.charAt(t)]:0;++t;let o=t<e.length,l=o?a[e.charAt(t)]:64;++t;let c=t<e.length,u=c?a[e.charAt(t)]:64;if(++t,null==n||null==s||null==l||null==u)throw Error();let h=n<<2|s>>4;if(r.push(h),64!==l){let e=s<<4&240|l>>2;if(r.push(e),64!==u){let e=l<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){let t=r(e);return i.encodeByteArray(t,!0)},o=function(e){return s(e).replace(/\./g,"")};function l(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function c(){try{return"object"==typeof indexedDB}catch(e){return!1}}function u(){return new Promise((e,t)=>{try{let a=!0,r="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(r);n.onsuccess=()=>{n.result.close(),a||self.indexedDB.deleteDatabase(r),e(!0)},n.onupgradeneeded=()=>{a=!1},n.onerror=()=>{var e;t((null===(e=n.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function h(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class d extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name="FirebaseError",Object.setPrototypeOf(this,d.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,f.prototype.create)}}class f{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){let a=t[0]||{},r=`${this.service}/${e}`,n=this.errors[e],i=n?n.replace(p,(e,t)=>{let r=a[t];return null!=r?String(r):`<${t}?>`}):"Error",s=`${this.serviceName}: ${i} (${r}).`,o=new d(r,s,a);return o}}let p=/\{\$([^}]+)}/g;function g(e,t=1e3,a=2){let r=t*Math.pow(a,e);return Math.min(144e5,r+Math.round(.5*r*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e){return e&&e._delegate?e._delegate:e}},9008:function(e,t,a){e.exports=a(3121)},2238:function(e,t,a){"use strict";a.d(t,{Jn:function(){return b},KN:function(){return w},Xd:function(){return p},qX:function(){return g}});var r=a(8463),n=a(3333),i=a(4444),s=a(6531);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let l="@firebase/app",c="0.9.3",u=new n.Yd("@firebase/app"),h={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},d=new Map,f=new Map;function p(e){let t=e.name;if(f.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;for(let a of(f.set(t,e),d.values()))!function(e,t){try{e.container.addComponent(t)}catch(a){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,a)}}(a,e);return!0}function g(e,t){let a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(t)}let m=new i.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."}),b="9.17.1";function w(e,t,a){var n;let i=null!==(n=h[e])&&void 0!==n?n:e;a&&(i+=`-${a}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),u.warn(e.join(" "));return}p(new r.wA(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let y="firebase-heartbeat-store",v=null;function I(){return v||(v=(0,s.X3)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(y)}}).catch(e=>{throw m.create("idb-open",{originalErrorMessage:e.message})})),v}async function E(e){try{let t=await I();return t.transaction(y).objectStore(y).get(_(e))}catch(e){if(e instanceof i.ZR)u.warn(e.message);else{let t=m.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}async function S(e,t){try{let a=await I(),r=a.transaction(y,"readwrite"),n=r.objectStore(y);return await n.put(t,_(e)),r.done}catch(e){if(e instanceof i.ZR)u.warn(e.message);else{let t=m.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}function _(e){return`${e.name}!${e.options.appId}`}class C{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new A(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),a=D();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(e=>e.date===a))?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),a=Date.now();return a-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=D(),{heartbeatsToSend:t,unsentEntries:a}=function(e,t=1024){let a=[],r=e.slice();for(let n of e){let e=a.find(e=>e.agent===n.agent);if(e){if(e.dates.push(n.date),T(a)>t){e.dates.pop();break}}else if(a.push({agent:n.agent,dates:[n.date]}),T(a)>t){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function D(){let e=new Date;return e.toISOString().substring(0,10)}class A{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await E(this.app);return e||{heartbeats:[]}}}async overwrite(e){var t;let a=await this._canUseIndexedDBPromise;if(a){let a=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let a=await this._canUseIndexedDBPromise;if(a){let a=await this.read();return S(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}}}function T(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}p(new r.wA("platform-logger",e=>new o(e),"PRIVATE")),p(new r.wA("heartbeat",e=>new C(e),"PRIVATE")),w(l,c,""),w(l,c,"esm2017"),w("fire-js","")},8463:function(e,t,a){"use strict";a.d(t,{wA:function(){return r}}),a(4444);class r{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}},3333:function(e,t,a){"use strict";var r,n;a.d(t,{Yd:function(){return u},in:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i=[];(n=r||(r={}))[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT";let s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...a)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),n=l[t];if(n)console[n](`[${r}]  ${e.name}:`,...a);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},3059:function(e,t,a){"use strict";let r,n,i,s;var o=a(2238),l=a(3333),c=a(4444),u=a(8463),h=a(6531);let d="@firebase/installations",f="0.6.3",p=`w:${f}`,g="FIS_v2",m=new c.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function b(e){return e instanceof c.ZR&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function y(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function v(e,t){let a=await t.json(),r=a.error;return m.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function I({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function E(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S({appConfig:e,heartbeatServiceProvider:t},{fid:a}){let r=w(e),n=I(e),i=t.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&n.append("x-firebase-client",e)}let s={fid:a,authVersion:g,appId:e.appId,sdkVersion:p},o={method:"POST",headers:n,body:JSON.stringify(s)},l=await E(()=>fetch(r,o));if(l.ok){let e=await l.json(),t={fid:e.fid||a,registrationStatus:2,refreshToken:e.refreshToken,authToken:y(e.authToken)};return t}throw await v("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let A=new Map;function T(e,t){let a=D(e);B(a,t),function(e,t){let a=(!L&&"BroadcastChannel"in self&&((L=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{B(e.data.key,e.data.fid)}),L);a&&a.postMessage({key:e,fid:t}),0===A.size&&L&&(L.close(),L=null)}(a,t)}function B(e,t){let a=A.get(e);if(a)for(let e of a)e(t)}let L=null,M="firebase-installations-store",$=null;function O(){return $||($=(0,h.X3)("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(M)}})),$}async function N(e,t){let a=D(e),r=await O(),n=r.transaction(M,"readwrite"),i=n.objectStore(M),s=await i.get(a);return await i.put(t,a),await n.done,s&&s.fid===t.fid||T(e,t.fid),t}async function k(e){let t=D(e),a=await O(),r=a.transaction(M,"readwrite");await r.objectStore(M).delete(t),await r.done}async function j(e,t){let a=D(e),r=await O(),n=r.transaction(M,"readwrite"),i=n.objectStore(M),s=await i.get(a),o=t(s);return void 0===o?await i.delete(a):await i.put(o,a),await n.done,o&&(!s||s.fid!==o.fid)&&T(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P(e){let t;let a=await j(e.appConfig,a=>{let r=function(e){let t=e||{fid:function(){try{let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;let a=function(e){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);return t.substr(0,22)}(e);return C.test(a)?a:""}catch(e){return""}}(),registrationStatus:0};return R(t)}(a),n=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){let e=Promise.reject(m.create("app-offline"));return{installationEntry:t,registrationPromise:e}}let a={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=F(e,a);return{installationEntry:a,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:x(e)}:{installationEntry:t}}(e,r);return t=n.registrationPromise,n.installationEntry});return""===a.fid?{installationEntry:await t}:{installationEntry:a,registrationPromise:t}}async function F(e,t){try{let a=await S(e,t);return N(e.appConfig,a)}catch(a){throw b(a)&&409===a.customData.serverCode?await k(e.appConfig):await N(e.appConfig,{fid:t.fid,registrationStatus:0}),a}}async function x(e){let t=await H(e.appConfig);for(;1===t.registrationStatus;)await _(100),t=await H(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:a}=await P(e);return a||t}return t}function H(e){return j(e,e=>{if(!e)throw m.create("installation-not-found");return R(e)})}function R(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V({appConfig:e,heartbeatServiceProvider:t},a){let r=function(e,{fid:t}){return`${w(e)}/${t}/authTokens:generate`}(e,a),n=function(e,{refreshToken:t}){let a=I(e);return a.append("Authorization",`${g} ${t}`),a}(e,a),i=t.getImmediate({optional:!0});if(i){let e=await i.getHeartbeatsHeader();e&&n.append("x-firebase-client",e)}let s={installation:{sdkVersion:p,appId:e.appId}},o={method:"POST",headers:n,body:JSON.stringify(s)},l=await E(()=>fetch(r,o));if(l.ok){let e=await l.json(),t=y(e);return t}throw await v("Generate Auth Token",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t=!1){let a;let r=await j(e.appConfig,r=>{var n;if(!K(r))throw m.create("not-registered");let i=r.authToken;if(!t&&2===(n=i).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(n))return r;if(1===i.requestStatus)return a=W(e,t),r;{if(!navigator.onLine)throw m.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return a=z(e,t),t}}),n=a?await a:r.authToken;return n}async function W(e,t){let a=await U(e.appConfig);for(;1===a.authToken.requestStatus;)await _(100),a=await U(e.appConfig);let r=a.authToken;return 0===r.requestStatus?q(e,t):r}function U(e){return j(e,e=>{if(!K(e))throw m.create("not-registered");let t=e.authToken;return 1===t.requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function z(e,t){try{let a=await V(e,t),r=Object.assign(Object.assign({},t),{authToken:a});return await N(e.appConfig,r),a}catch(a){if(b(a)&&(401===a.customData.serverCode||404===a.customData.serverCode))await k(e.appConfig);else{let a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await N(e.appConfig,a)}throw a}}function K(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e){let{installationEntry:t,registrationPromise:a}=await P(e);return a?a.catch(console.error):q(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t=!1){await Z(e);let a=await q(e,t);return a.token}async function Z(e){let{registrationPromise:t}=await P(e);t&&await t}function J(e){return m.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y="installations",Q=e=>{let t=e.getProvider("app").getImmediate(),a=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw J("App Configuration");if(!e.name)throw J("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw J(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r=(0,o.qX)(t,"heartbeat");return{app:t,appConfig:a,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ee=e=>{let t=e.getProvider("app").getImmediate(),a=(0,o.qX)(t,Y).getImmediate();return{getId:()=>X(a),getToken:e=>G(a,e)}};(0,o.Xd)(new u.wA(Y,Q,"PUBLIC")),(0,o.Xd)(new u.wA("installations-internal",ee,"PRIVATE")),(0,o.KN)(d,f),(0,o.KN)(d,f,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et="analytics",ea="https://www.googletagmanager.com/gtag/js",er=new l.Yd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){return Promise.all(e.map(e=>e.catch(e=>e)))}async function ei(e,t,a,r,n,i){let s=r[n];try{if(s)await t[s];else{let e=await en(a),r=e.find(e=>e.measurementId===n);r&&await t[r.appId]}}catch(e){er.error(e)}e("config",n,i)}async function es(e,t,a,r,n){try{let i=[];if(n&&n.send_to){let e=n.send_to;Array.isArray(e)||(e=[e]);let r=await en(a);for(let a of e){let e=r.find(e=>e.measurementId===a),n=e&&t[e.appId];if(n)i.push(n);else{i=[];break}}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",r,n||{})}catch(e){er.error(e)}}let eo=new c.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'}),el=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};async function ec(e){var t;let{appId:a,apiKey:r}=e,n={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",a),s=await fetch(i,n);if(200!==s.status&&304!==s.status){let e="";try{let a=await s.json();(null===(t=a.error)||void 0===t?void 0:t.message)&&(e=a.error.message)}catch(e){}throw eo.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function eu(e,t=el,a){let{appId:r,apiKey:n,measurementId:i}=e.options;if(!r)throw eo.create("no-app-id");if(!n){if(i)return{measurementId:i,appId:r};throw eo.create("no-api-key")}let s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new ed;return setTimeout(async()=>{o.abort()},void 0!==a?a:6e4),eh({appId:r,apiKey:n,measurementId:i},s,o,t)}async function eh(e,{throttleEndTimeMillis:t,backoffCount:a},r,n=el){var i;let{appId:s,measurementId:o}=e;try{await new Promise((e,a)=>{let n=Math.max(t-Date.now(),0),i=setTimeout(e,n);r.addEventListener(()=>{clearTimeout(i),a(eo.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}catch(e){if(o)return er.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:s,measurementId:o};throw e}try{let t=await ec(e);return n.deleteThrottleMetadata(s),t}catch(u){if(!function(e){if(!(e instanceof c.ZR)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(u)){if(n.deleteThrottleMetadata(s),o)return er.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${null==u?void 0:u.message}]`),{appId:s,measurementId:o};throw u}let t=503===Number(null===(i=null==u?void 0:u.customData)||void 0===i?void 0:i.httpStatus)?(0,c.$s)(a,n.intervalMillis,30):(0,c.$s)(a,n.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:a+1};return n.setThrottleMetadata(s,l),er.debug(`Calling attemptFetch again in ${t} millis`),eh(e,l,r,n)}}class ed{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ef(e,t,a,r,n){if(n&&n.global){e("event",a,r);return}{let n=await t,i=Object.assign(Object.assign({},r),{send_to:n});e("event",a,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(){if(!(0,c.hl)())return er.warn(eo.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,c.eu)()}catch(e){return er.warn(eo.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function eg(e,t,a,i,s,o,l){var c;let u=eu(e);u.then(t=>{a[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&er.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>er.error(e)),t.push(u);let h=ep().then(e=>e?i.getId():void 0),[d,f]=await Promise.all([u,h]);!function(e){let t=window.document.getElementsByTagName("script");for(let a of Object.values(t))if(a.src&&a.src.includes(ea)&&a.src.includes(e))return a;return null}(o)&&function(e,t){let a=document.createElement("script");a.src=`${ea}?l=${e}&id=${t}`,a.async=!0,document.head.appendChild(a)}(o,d.measurementId),n&&(s("consent","default",n),n=void 0),s("js",new Date);let p=null!==(c=null==l?void 0:l.config)&&void 0!==c?c:{};return p.origin="firebase",p.update=!0,null!=f&&(p.firebase_id=f),s("config",d.measurementId,p),r&&(s("set",r),r=void 0),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.app=e}_delete(){return delete eb[this.app.options.appId],Promise.resolve()}}let eb={},ew=[],ey={},ev="dataLayer",eI=!1,eE="@firebase/analytics",eS="0.9.3";(0,o.Xd)(new u.wA(et,(e,{options:t})=>{let a=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return function(e,t,a){!function(){let e=[];if((0,c.ru)()&&e.push("This is a browser extension environment."),(0,c.zI)()||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),a=eo.create("invalid-analytics-context",{errorInfo:t});er.warn(a.message)}}();let r=e.options.appId;if(!r)throw eo.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)er.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw eo.create("no-api-key")}if(null!=eb[r])throw eo.create("already-exists",{id:r});if(!eI){var n,o;let e,t;e=[],Array.isArray(window[ev])?e=window[ev]:window[ev]=e;let{wrappedGtag:a,gtagCore:r}=(n="gtag",t=function(...e){window[ev].push(arguments)},window[n]&&"function"==typeof window[n]&&(t=window[n]),window[n]=(o=t,async function(e,t,a){try{"event"===e?await es(o,eb,ew,t,a):"config"===e?await ei(o,eb,ew,ey,t,a):"consent"===e?o("consent","update",a):o("set",t)}catch(e){er.error(e)}}),{gtagCore:t,wrappedGtag:window[n]});s=a,i=r,eI=!0}eb[r]=eg(e,ew,ey,t,i,ev,a);let l=new em(e);return l}(a,r,t)},"PUBLIC")),(0,o.Xd)(new u.wA("analytics-internal",function(e){try{let t=e.getProvider(et).getImmediate();return{logEvent:(e,a,r)=>(function(e,t,a,r){ef(s,eb[(e=(0,c.m9)(e)).app.options.appId],t,a,r).catch(e=>er.error(e))})(t,e,a,r)}}catch(e){throw eo.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),(0,o.KN)(eE,eS),(0,o.KN)(eE,eS,"esm2017")},3977:function(e,t,a){"use strict";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,a(2238).KN)("firebase","9.17.1","app")},6462:function(e,t,a){"use strict";a(3069)},6531:function(e,t,a){"use strict";var r;let n,i;a.d(t,{X3:function(){return g}});let s=(e,t)=>t.some(t=>e instanceof t),o=new WeakMap,l=new WeakMap,c=new WeakMap,u=new WeakMap,h=new WeakMap,d={get(e,t,a){if(e instanceof IDBTransaction){if("done"===t)return l.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return f(e[t])},set:(e,t,a)=>(e[t]=a,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,a)=>{let r=()=>{e.removeEventListener("success",n),e.removeEventListener("error",i)},n=()=>{t(f(e.result)),r()},i=()=>{a(e.error),r()};e.addEventListener("success",n),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&o.set(t,e)}).catch(()=>{}),h.set(t,e),t}(e);if(u.has(e))return u.get(e);let a="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),f(o.get(this))}:function(...e){return f(t.apply(p(this),e))}:function(e,...a){let r=t.call(p(this),e,...a);return c.set(r,e.sort?e.sort():[e]),f(r)}:(t instanceof IDBTransaction&&function(e){if(l.has(e))return;let t=new Promise((t,a)=>{let r=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",i),e.removeEventListener("abort",i)},n=()=>{t(),r()},i=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",n),e.addEventListener("error",i),e.addEventListener("abort",i)});l.set(e,t)}(t),s(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,d):t;return a!==e&&(u.set(e,a),h.set(a,e)),a}let p=e=>h.get(e);function g(e,t,{blocked:a,upgrade:r,blocking:n,terminated:i}={}){let s=indexedDB.open(e,t),o=f(s);return r&&s.addEventListener("upgradeneeded",e=>{r(f(s.result),e.oldVersion,e.newVersion,f(s.transaction))}),a&&s.addEventListener("blocked",()=>a()),o.then(e=>{i&&e.addEventListener("close",()=>i()),n&&e.addEventListener("versionchange",()=>n())}).catch(()=>{}),o}let m=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],w=new Map;function y(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(w.get(t))return w.get(t);let a=t.replace(/FromIndex$/,""),r=t!==a,n=b.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!(n||m.includes(a)))return;let i=async function(e,...t){let i=this.transaction(e,n?"readwrite":"readonly"),s=i.store;return r&&(s=s.index(t.shift())),(await Promise.all([s[a](...t),n&&i.done]))[0]};return w.set(t,i),i}d={...r=d,get:(e,t,a)=>y(e,t)||r.get(e,t,a),has:(e,t)=>!!y(e,t)||r.has(e,t)}}}]);