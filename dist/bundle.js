/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/sweetalert2/dist/sweetalert2.css":
/*!*******************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.min.js ***!
  \**********************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){"use strict";var p={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};var e=e=>{var t={};for(const n in e)t[e[n]]="swal2-"+e[n];return t};const m=e(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","no-war"]),o=e(["success","warning","info","question","error"]),q="SweetAlert2:",D=e=>e.charAt(0).toUpperCase()+e.slice(1),a=e=>{console.warn("".concat(q," ").concat("object"==typeof e?e.join(" "):e))},l=e=>{console.error("".concat(q," ").concat(e))},V=[],N=(e,t)=>{e='"'.concat(e,'" is deprecated and will be removed in the next major release. Please use "').concat(t,'" instead.'),V.includes(e)||(V.push(e),a(e))},F=e=>"function"==typeof e?e():e,R=e=>e&&"function"==typeof e.toPromise,u=e=>R(e)?e.toPromise():Promise.resolve(e),U=e=>e&&Promise.resolve(e)===e,g=()=>document.body.querySelector(".".concat(m.container)),t=e=>{var t=g();return t?t.querySelector(e):null},n=e=>t(".".concat(e)),h=()=>n(m.popup),r=()=>n(m.icon),W=()=>n(m.title),z=()=>n(m["html-container"]),K=()=>n(m.image),_=()=>n(m["progress-steps"]),Y=()=>n(m["validation-message"]),f=()=>t(".".concat(m.actions," .").concat(m.confirm)),b=()=>t(".".concat(m.actions," .").concat(m.deny));const v=()=>t(".".concat(m.loader)),y=()=>t(".".concat(m.actions," .").concat(m.cancel)),Z=()=>n(m.actions),$=()=>n(m.footer),J=()=>n(m["timer-progress-bar"]),X=()=>n(m.close),G=()=>{var e=Array.from(h().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e,t)=>{e=parseInt(e.getAttribute("tabindex")),t=parseInt(t.getAttribute("tabindex"));return t<e?1:e<t?-1:0}),t=Array.from(h().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(e=>"-1"!==e.getAttribute("tabindex"));return(t=>{var n=[];for(let e=0;e<t.length;e++)-1===n.indexOf(t[e])&&n.push(t[e]);return n})(e.concat(t)).filter(e=>x(e))},Q=()=>s(document.body,m.shown)&&!s(document.body,m["toast-shown"])&&!s(document.body,m["no-backdrop"]),ee=()=>h()&&s(h(),m.toast);function te(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];const n=J();x(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition="width ".concat(e/1e3,"s linear"),n.style.width="0%"},10))}const i={previousBodyPadding:null},w=(t,e)=>{t.textContent="",e&&(e=(new DOMParser).parseFromString(e,"text/html"),Array.from(e.querySelector("head").childNodes).forEach(e=>{t.appendChild(e)}),Array.from(e.querySelector("body").childNodes).forEach(e=>{e instanceof HTMLVideoElement||e instanceof HTMLAudioElement?t.appendChild(e.cloneNode(!0)):t.appendChild(e)}))},s=(t,e)=>{if(!e)return!1;var n=e.split(/\s+/);for(let e=0;e<n.length;e++)if(!t.classList.contains(n[e]))return!1;return!0},ne=(t,n)=>{Array.from(t.classList).forEach(e=>{Object.values(m).includes(e)||Object.values(o).includes(e)||Object.values(n.showClass).includes(e)||t.classList.remove(e)})},C=(e,t,n)=>{ne(e,t),t.customClass&&t.customClass[n]&&("string"==typeof t.customClass[n]||t.customClass[n].forEach?A(e,t.customClass[n]):a("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(typeof t.customClass[n],'"')))},oe=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(".".concat(m.popup," > .").concat(m[t]));case"checkbox":return e.querySelector(".".concat(m.popup," > .").concat(m.checkbox," input"));case"radio":return e.querySelector(".".concat(m.popup," > .").concat(m.radio," input:checked"))||e.querySelector(".".concat(m.popup," > .").concat(m.radio," input:first-child"));case"range":return e.querySelector(".".concat(m.popup," > .").concat(m.range," input"));default:return e.querySelector(".".concat(m.popup," > .").concat(m.input))}},ie=e=>{var t;e.focus(),"file"!==e.type&&(t=e.value,e.value="",e.value=t)},ae=(e,t,n)=>{e&&t&&(t="string"==typeof t?t.split(/\s+/).filter(Boolean):t).forEach(t=>{Array.isArray(e)?e.forEach(e=>{n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)})},A=(e,t)=>{ae(e,t,!0)},k=(e,t)=>{ae(e,t,!1)},d=(e,t)=>{var n=Array.from(e.children);for(let e=0;e<n.length;e++){var o=n[e];if(o instanceof HTMLElement&&s(o,t))return o}},c=(e,t,n)=>{(n=n==="".concat(parseInt(n))?parseInt(n):n)||0===parseInt(n)?e.style[t]="number"==typeof n?"".concat(n,"px"):n:e.style.removeProperty(t)},B=function(e){e.style.display=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"flex"},P=e=>{e.style.display="none"},re=(e,t,n,o)=>{e=e.querySelector(t);e&&(e.style[n]=o)},se=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"flex";t?B(e,n):P(e)},x=e=>!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),ce=()=>!x(f())&&!x(b())&&!x(y()),le=e=>!!(e.scrollHeight>e.clientHeight),ue=e=>{var e=window.getComputedStyle(e),t=parseFloat(e.getPropertyValue("animation-duration")||"0"),e=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<t||0<e},de=100,E={},pe=()=>{E.previousActiveElement instanceof HTMLElement?(E.previousActiveElement.focus(),E.previousActiveElement=null):document.body&&document.body.focus()},me=o=>new Promise(e=>{if(!o)return e();var t=window.scrollX,n=window.scrollY;E.restoreFocusTimeout=setTimeout(()=>{pe(),e()},de),window.scrollTo(t,n)}),ge=()=>"undefined"==typeof window||"undefined"==typeof document,he='\n <div aria-labelledby="'.concat(m.title,'" aria-describedby="').concat(m["html-container"],'" class="').concat(m.popup,'" tabindex="-1">\n   <button type="button" class="').concat(m.close,'"></button>\n   <ul class="').concat(m["progress-steps"],'"></ul>\n   <div class="').concat(m.icon,'"></div>\n   <img class="').concat(m.image,'" />\n   <h2 class="').concat(m.title,'" id="').concat(m.title,'"></h2>\n   <div class="').concat(m["html-container"],'" id="').concat(m["html-container"],'"></div>\n   <input class="').concat(m.input,'" />\n   <input type="file" class="').concat(m.file,'" />\n   <div class="').concat(m.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(m.select,'"></select>\n   <div class="').concat(m.radio,'"></div>\n   <label for="').concat(m.checkbox,'" class="').concat(m.checkbox,'">\n     <input type="checkbox" />\n     <span class="').concat(m.label,'"></span>\n   </label>\n   <textarea class="').concat(m.textarea,'"></textarea>\n   <div class="').concat(m["validation-message"],'" id="').concat(m["validation-message"],'"></div>\n   <div class="').concat(m.actions,'">\n     <div class="').concat(m.loader,'"></div>\n     <button type="button" class="').concat(m.confirm,'"></button>\n     <button type="button" class="').concat(m.deny,'"></button>\n     <button type="button" class="').concat(m.cancel,'"></button>\n   </div>\n   <div class="').concat(m.footer,'"></div>\n   <div class="').concat(m["timer-progress-bar-container"],'">\n     <div class="').concat(m["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),fe=()=>{var e=g();return!!e&&(e.remove(),k([document.documentElement,document.body],[m["no-backdrop"],m["toast-shown"],m["has-column"]]),!0)},T=()=>{E.currentInstance.resetValidationMessage()},be=()=>{var e=h(),t=d(e,m.input),n=d(e,m.file);const o=e.querySelector(".".concat(m.range," input")),i=e.querySelector(".".concat(m.range," output"));var a=d(e,m.select),r=e.querySelector(".".concat(m.checkbox," input")),e=d(e,m.textarea);t.oninput=T,n.onchange=T,a.onchange=T,r.onchange=T,e.oninput=T,o.oninput=()=>{T(),i.value=o.value},o.onchange=()=>{T(),i.value=o.value}},ve=e=>"string"==typeof e?document.querySelector(e):e,ye=e=>{var t=h();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},we=e=>{"rtl"===window.getComputedStyle(e).direction&&A(g(),m.rtl)},Ce=(e,t)=>{if(e instanceof HTMLElement)t.appendChild(e);else if("object"==typeof e){var n=e,o=t;if(n.jquery)Ae(o,n);else w(o,n.toString())}else e&&w(t,e)},Ae=(t,n)=>{if(t.textContent="",0 in n)for(let e=0;e in n;e++)t.appendChild(n[e].cloneNode(!0));else t.appendChild(n.cloneNode(!0))},ke=(()=>{if(!ge()){var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&void 0!==e.style[n])return t[n]}return!1})(),Be=(e,t)=>{var n,o,i,a,r,s=Z(),c=v(),l=((t.showConfirmButton||t.showDenyButton||t.showCancelButton?B:P)(s),C(s,t,"actions"),s=s,n=c,o=t,i=f(),a=b(),r=y(),Pe(i,"confirm",o),Pe(a,"deny",o),Pe(r,"cancel",o),i),u=a,d=r,p=o;p.buttonsStyling?(A([l,u,d],m.styled),p.confirmButtonColor&&(l.style.backgroundColor=p.confirmButtonColor,A(l,m["default-outline"])),p.denyButtonColor&&(u.style.backgroundColor=p.denyButtonColor,A(u,m["default-outline"])),p.cancelButtonColor&&(d.style.backgroundColor=p.cancelButtonColor,A(d,m["default-outline"]))):k([l,u,d],m.styled),o.reverseButtons&&(o.toast?(s.insertBefore(r,i),s.insertBefore(a,i)):(s.insertBefore(r,n),s.insertBefore(a,n),s.insertBefore(i,n))),w(c,t.loaderHtml),C(c,t,"loader")};function Pe(e,t,n){se(e,n["show".concat(D(t),"Button")],"inline-block"),w(e,n["".concat(t,"ButtonText")]),e.setAttribute("aria-label",n["".concat(t,"ButtonAriaLabel")]),e.className=m[t],C(e,n,"".concat(t,"Button")),A(e,n["".concat(t,"ButtonClass")])}const xe=(e,t)=>{var n=X();w(n,t.closeButtonHtml),C(n,t,"closeButton"),se(n,t.showCloseButton),n.setAttribute("aria-label",t.closeButtonAriaLabel)},Ee=(e,t)=>{var n,o,i=g();i&&(o=i,"string"==typeof(n=t.backdrop)?o.style.background=n:n||A([document.documentElement,document.body],m["no-backdrop"]),o=i,(n=t.position)in m?A(o,m[n]):(a('The "position" parameter is not valid, defaulting to "center"'),A(o,m.center)),n=i,(o=t.grow)&&"string"==typeof o&&(o="grow-".concat(o))in m&&A(n,m[o]),C(i,t,"container"))};const Te=["input","file","range","select","radio","checkbox","textarea"],Se=(e,r)=>{const s=h();e=p.innerParams.get(e);const c=!e||r.input!==e.input;if(Te.forEach(e=>{var t=d(s,m[e]);{var n=e,o=r.inputAttributes,i=oe(h(),n);if(i){Le(i);for(const a in o)i.setAttribute(a,o[a])}}t.className=m[e],c&&P(t)}),r.input){if(c){e=r;if(S[e.input]){var t=Me(e.input);const n=S[e.input](t,e);B(t),setTimeout(()=>{ie(n)})}else l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'))}t=r,e=Me(t.input);"object"==typeof t.customClass&&A(e,t.customClass.input)}},Le=t=>{for(let e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}},Oe=(e,t)=>{e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},je=(e,t,n)=>{var o,i;n.inputLabel&&(e.id=m.input,o=document.createElement("label"),i=m["input-label"],o.setAttribute("for",e.id),o.className=i,"object"==typeof n.customClass&&A(o,n.customClass.inputLabel),o.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",o))},Me=e=>d(h(),m[e]||m.input),He=(e,t)=>{["string","number"].includes(typeof t)?e.value="".concat(t):U(t)||a('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t,'"'))},S={},Ie=(S.text=S.email=S.password=S.number=S.tel=S.url=(e,t)=>(He(e,t.inputValue),je(e,e,t),Oe(e,t),e.type=t.input,e),S.file=(e,t)=>(je(e,e,t),Oe(e,t),e),S.range=(e,t)=>{var n=e.querySelector("input"),o=e.querySelector("output");return He(n,t.inputValue),n.type=t.input,He(o,t.inputValue),je(n,e,t),e},S.select=(e,t)=>{var n;return e.textContent="",t.inputPlaceholder&&(n=document.createElement("option"),w(n,t.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)),je(e,e,t),e},S.radio=e=>(e.textContent="",e),S.checkbox=(e,t)=>{var n=oe(h(),"checkbox"),e=(n.value="1",n.id=m.checkbox,n.checked=Boolean(t.inputValue),e.querySelector("span"));return w(e,t.inputPlaceholder),n},S.textarea=(n,e)=>{He(n,e.inputValue),Oe(n,e),je(n,n,e);return setTimeout(()=>{if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(h()).width);new MutationObserver(()=>{var e=n.offsetWidth+(e=n,parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight));e>t?h().style.width="".concat(e,"px"):h().style.width=null}).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n},(e,t)=>{var n=z();C(n,t,"htmlContainer"),t.html?(Ce(t.html,n),B(n,"block")):t.text?(n.textContent=t.text,B(n,"block")):P(n),Se(e,t)}),qe=(e,t)=>{var n=$();se(n,t.footer),t.footer&&Ce(t.footer,n),C(n,t,"footer")},De=(e,t)=>{var e=p.innerParams.get(e),n=r();e&&t.icon===e.icon?(Ue(n,t),Ve(n,t)):t.icon||t.iconHtml?t.icon&&-1===Object.keys(o).indexOf(t.icon)?(l('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.icon,'"')),P(n)):(B(n),Ue(n,t),Ve(n,t),A(n,t.showClass.icon)):P(n)},Ve=(e,t)=>{for(const n in o)t.icon!==n&&k(e,o[n]);A(e,o[t.icon]),We(e,t),Ne(),C(e,t,"icon")},Ne=()=>{var e=h(),t=window.getComputedStyle(e).getPropertyValue("background-color"),n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let e=0;e<n.length;e++)n[e].style.backgroundColor=t},Fe='\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n',Re='\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n',Ue=(e,t)=>{let n=e.innerHTML,o;var i;t.iconHtml?o=ze(t.iconHtml):"success"===t.icon?(o=Fe,n=n.replace(/ style=".*?"/g,"")):o="error"===t.icon?Re:(i={question:"?",warning:"!",info:"i"},ze(i[t.icon])),n.trim()!==o.trim()&&w(e,o)},We=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])re(e,n,"backgroundColor",t.iconColor);re(e,".swal2-success-ring","borderColor",t.iconColor)}},ze=e=>'<div class="'.concat(m["icon-content"],'">').concat(e,"</div>"),Ke=(e,t)=>{var n=K();t.imageUrl?(B(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt),c(n,"width",t.imageWidth),c(n,"height",t.imageHeight),n.className=m.image,C(n,t,"image")):P(n)},_e=(e,t)=>{var n=g(),o=h(),n=(t.toast?(c(n,"width",t.width),o.style.width="100%",o.insertBefore(v(),r())):c(o,"width",t.width),c(o,"padding",t.padding),t.color&&(o.style.color=t.color),t.background&&(o.style.background=t.background),P(Y()),o),o=t;(n.className="".concat(m.popup," ").concat(x(n)?o.showClass.popup:""),o.toast)?(A([document.documentElement,document.body],m["toast-shown"]),A(n,m.toast)):A(n,m.modal);C(n,o,"popup"),"string"==typeof o.customClass&&A(n,o.customClass);o.icon&&A(n,m["icon-".concat(o.icon)])},Ye=(e,n)=>{const o=_();n.progressSteps&&0!==n.progressSteps.length?(B(o),o.textContent="",n.currentProgressStep>=n.progressSteps.length&&a("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),n.progressSteps.forEach((e,t)=>{var e=(e=>{const t=document.createElement("li");return A(t,m["progress-step"]),w(t,e),t})(e);o.appendChild(e),t===n.currentProgressStep&&A(e,m["active-progress-step"]),t!==n.progressSteps.length-1&&(e=(e=>{const t=document.createElement("li");if(A(t,m["progress-step-line"]),e.progressStepsDistance)c(t,"width",e.progressStepsDistance);return t})(n),o.appendChild(e))})):P(o)},Ze=(e,t)=>{var n=W();se(n,t.title||t.titleText,"block"),t.title&&Ce(t.title,n),t.titleText&&(n.innerText=t.titleText),C(n,t,"title")},$e=(e,t)=>{_e(e,t),Ee(e,t),Ye(e,t),De(e,t),Ke(e,t),Ze(e,t),xe(e,t),Ie(e,t),Be(e,t),qe(e,t),"function"==typeof t.didRender&&t.didRender(h())};function Je(){var e,t,n=p.innerParams.get(this);n&&(e=p.domCache.get(this),P(e.loader),ee()?n.icon&&B(r()):(t=(n=e).popup.getElementsByClassName(n.loader.getAttribute("data-button-to-replace"))).length?B(t[0],"inline-block"):ce()&&P(n.actions),k([e.popup,e.actions],m.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1)}const Xe=()=>f()&&f().click();const L=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ge=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},Qe=(e,t,n)=>{var o=G();if(o.length)return(t+=n)===o.length?t=0:-1===t&&(t=o.length-1),o[t].focus();h().focus()},et=["ArrowRight","ArrowDown"],tt=["ArrowLeft","ArrowUp"],nt=(e,n,t)=>{var o=p.innerParams.get(e);if(o&&(!n.isComposing&&229!==n.keyCode))if(o.stopKeydownPropagation&&n.stopPropagation(),"Enter"===n.key)e=e,s=n,i=o,F(i.allowEnterKey)&&s.target&&e.getInput()&&s.target instanceof HTMLElement&&s.target.outerHTML===e.getInput().outerHTML&&(["textarea","file"].includes(i.input)||(Xe(),s.preventDefault()));else if("Tab"===n.key){e=n;var i=o;var a=e.target,r=G();let t=-1;for(let e=0;e<r.length;e++)if(a===r[e]){t=e;break}e.shiftKey?Qe(i,t,-1):Qe(i,t,1);e.stopPropagation(),e.preventDefault()}else if([...et,...tt].includes(n.key)){var s=n.key,e=f(),c=b(),l=y();if(!(document.activeElement instanceof HTMLElement)||[e,c,l].includes(document.activeElement)){var u=et.includes(s)?"nextElementSibling":"previousElementSibling";let t=document.activeElement;for(let e=0;e<Z().children.length;e++){if(!(t=t[u]))return;if(t instanceof HTMLButtonElement&&x(t))break}t instanceof HTMLButtonElement&&t.focus()}}else if("Escape"===n.key){e=n,c=o,l=t;if(F(c.allowEscapeKey)){e.preventDefault();l(L.esc)}}};var ot={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const it=()=>{Array.from(document.body.children).forEach(e=>{e===g()||e.contains(g())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})},at=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},rt=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!s(document.body,m.iosfix)){var e=document.body.scrollTop;document.body.style.top="".concat(-1*e,"px"),A(document.body,m.iosfix);{e=g();let t;e.ontouchstart=e=>{t=st(e)},e.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}}var e=navigator.userAgent,t=!!e.match(/iPad/i)||!!e.match(/iPhone/i),n=!!e.match(/WebKit/i);t&&n&&!e.match(/CriOS/i)&&(h().scrollHeight>window.innerHeight-44&&(g().style.paddingBottom="".concat(44,"px")))}},st=e=>{var t,n=e.target,o=g();return!((t=e).touches&&t.touches.length&&"stylus"===t.touches[0].touchType||(t=e).touches&&1<t.touches.length)&&(n===o||!le(o)&&n instanceof HTMLElement&&"INPUT"!==n.tagName&&!("TEXTAREA"===n.tagName||le(z())&&z().contains(n)))},ct=()=>{var e;s(document.body,m.iosfix)&&(e=parseInt(document.body.style.top,10),k(document.body,m.iosfix),document.body.style.top="",document.body.scrollTop=-1*e)},lt=()=>{var e,t;null===i.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(i.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(i.previousBodyPadding+((e=document.createElement("div")).className=m["scrollbar-measure"],document.body.appendChild(e),t=e.getBoundingClientRect().width-e.clientWidth,document.body.removeChild(e),t),"px"))},ut=()=>{null!==i.previousBodyPadding&&(document.body.style.paddingRight="".concat(i.previousBodyPadding,"px"),i.previousBodyPadding=null)};function dt(e,t,n,o){ee()?ht(e,o):(me(n).then(()=>ht(e,o)),Ge(E)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),Q()&&(ut(),ct(),at()),k([document.documentElement,document.body],[m.shown,m["height-auto"],m["no-backdrop"],m["toast-shown"]])}function pt(e){e=void 0!==(t=e)?Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t):{isConfirmed:!1,isDenied:!1,isDismissed:!0};var t=ot.swalPromiseResolve.get(this),n=(e=>{const t=h();if(!t)return false;const n=p.innerParams.get(e);if(!n||s(t,n.hideClass.popup))return false;k(t,n.showClass.popup),A(t,n.hideClass.popup);const o=g();return k(o,n.showClass.backdrop),A(o,n.hideClass.backdrop),gt(e,t,n),true})(this);this.isAwaitingPromise()?e.isDismissed||(mt(this),t(e)):n&&t(e)}const mt=e=>{e.isAwaitingPromise()&&(p.awaitingPromise.delete(e),p.innerParams.get(e)||e._destroy())},gt=(e,t,n)=>{var o,i,a,r=g(),s=ke&&ue(t);"function"==typeof n.willClose&&n.willClose(t),s?(s=e,o=t,t=r,i=n.returnFocus,a=n.didClose,E.swalCloseEventFinishedCallback=dt.bind(null,s,t,i,a),o.addEventListener(ke,function(e){e.target===o&&(E.swalCloseEventFinishedCallback(),delete E.swalCloseEventFinishedCallback)})):dt(e,r,n.returnFocus,n.didClose)},ht=(e,t)=>{setTimeout(()=>{"function"==typeof t&&t.bind(e.params)(),e._destroy()})};function ft(e,t,n){const o=p.domCache.get(e);t.forEach(e=>{o[e].disabled=n})}function bt(e,t){if(e)if("radio"===e.type){var n=e.parentNode.parentNode.querySelectorAll("input");for(let e=0;e<n.length;e++)n[e].disabled=t}else e.disabled=t}const O={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},vt=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],yt={},wt=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Ct=e=>Object.prototype.hasOwnProperty.call(O,e),At=e=>-1!==vt.indexOf(e),kt=e=>yt[e],Bt=e=>{!1===e.backdrop&&e.allowOutsideClick&&a('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const n in e)t=n,Ct(t)||a('Unknown parameter "'.concat(t,'"')),e.toast&&(t=n,wt.includes(t)&&a('The parameter "'.concat(t,'" is incompatible with toasts'))),t=n,kt(t)&&N(t,kt(t));var t};const Pt=e=>{e.isAwaitingPromise()?(xt(p,e),p.awaitingPromise.set(e,!0)):(xt(ot,e),xt(p,e))},xt=(e,t)=>{for(const n in e)e[n].delete(t)};e=Object.freeze({hideLoading:Je,disableLoading:Je,getInput:function(e){var t=p.innerParams.get(e||this);return(e=p.domCache.get(e||this))?oe(e.popup,t.input):null},close:pt,isAwaitingPromise:function(){return!!p.awaitingPromise.get(this)},rejectPromise:function(e){var t=ot.swalPromiseReject.get(this);mt(this),t&&t(e)},handleAwaitingPromise:mt,closePopup:pt,closeModal:pt,closeToast:pt,enableButtons:function(){ft(this,["confirmButton","denyButton","cancelButton"],!1)},disableButtons:function(){ft(this,["confirmButton","denyButton","cancelButton"],!0)},enableInput:function(){bt(this.getInput(),!1)},disableInput:function(){bt(this.getInput(),!0)},showValidationMessage:function(e){var t=p.domCache.get(this),n=p.innerParams.get(this);w(t.validationMessage,e),t.validationMessage.className=m["validation-message"],n.customClass&&n.customClass.validationMessage&&A(t.validationMessage,n.customClass.validationMessage),B(t.validationMessage),(e=this.getInput())&&(e.setAttribute("aria-invalid",!0),e.setAttribute("aria-describedby",m["validation-message"]),ie(e),A(e,m.inputerror))},resetValidationMessage:function(){var e=p.domCache.get(this);e.validationMessage&&P(e.validationMessage),(e=this.getInput())&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),k(e,m.inputerror))},getProgressSteps:function(){return p.domCache.get(this).progressSteps},update:function(e){var t=h(),n=p.innerParams.get(this);if(!t||s(t,n.hideClass.popup))return a("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");t=(t=>{const n={};return Object.keys(t).forEach(e=>{if(At(e))n[e]=t[e];else a("Invalid parameter to update: ".concat(e))}),n})(e),n=Object.assign({},n,t),$e(this,n),p.innerParams.set(this,n),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})},_destroy:function(){var e=p.domCache.get(this),t=p.innerParams.get(this);t?(e.popup&&E.swalCloseEventFinishedCallback&&(E.swalCloseEventFinishedCallback(),delete E.swalCloseEventFinishedCallback),"function"==typeof t.didDestroy&&t.didDestroy(),e=this,Pt(e),delete e.params,delete E.keydownHandler,delete E.keydownTarget,delete E.currentInstance):Pt(this)}});const j=e=>{var t,n,o,i=h(),a=(i||new Cn,i=h(),v());ee()?P(r()):(t=i,e=e,n=Z(),o=v(),!e&&x(f())&&(e=f()),B(n),e&&(P(e),o.setAttribute("data-button-to-replace",e.className)),o.parentNode.insertBefore(o,e),A([t,n],m.loading)),B(a),i.setAttribute("data-loading","true"),i.setAttribute("aria-busy","true"),i.focus()},Et=(t,n)=>{const o=h(),i=e=>{St[n.input](o,Lt(e),n)};R(n.inputOptions)||U(n.inputOptions)?(j(f()),u(n.inputOptions).then(e=>{t.hideLoading(),i(e)})):"object"==typeof n.inputOptions?i(n.inputOptions):l("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof n.inputOptions))},Tt=(t,n)=>{const o=t.getInput();P(o),u(n.inputValue).then(e=>{o.value="number"===n.input?"".concat(parseFloat(e)||0):"".concat(e),B(o),o.focus(),t.hideLoading()}).catch(e=>{l("Error in inputValue promise: ".concat(e)),o.value="",B(o),o.focus(),t.hideLoading()})},St={select:(e,t,i)=>{const o=d(e,m.select),a=(e,t,n)=>{var o=document.createElement("option");o.value=n,w(o,t),o.selected=Ot(n,i.inputValue),e.appendChild(o)};t.forEach(e=>{var t=e[0],e=e[1];if(Array.isArray(e)){const n=document.createElement("optgroup");n.label=t,n.disabled=!1,o.appendChild(n),e.forEach(e=>a(n,e[1],e[0]))}else a(o,e,t)}),o.focus()},radio:(e,t,i)=>{const a=d(e,m.radio);t.forEach(e=>{var t=e[0],e=e[1],n=document.createElement("input"),o=document.createElement("label"),t=(n.type="radio",n.name=m.radio,n.value=t,Ot(t,i.inputValue)&&(n.checked=!0),document.createElement("span"));w(t,e),t.className=m.label,o.appendChild(n),o.appendChild(t),a.appendChild(o)});e=a.querySelectorAll("input");e.length&&e[0].focus()}},Lt=n=>{const o=[];return"undefined"!=typeof Map&&n instanceof Map?n.forEach((e,t)=>{let n=e;"object"==typeof n&&(n=Lt(n)),o.push([t,n])}):Object.keys(n).forEach(e=>{let t=n[e];"object"==typeof t&&(t=Lt(t)),o.push([e,t])}),o},Ot=(e,t)=>t&&t.toString()===e.toString(),jt=(e,t)=>{var n=p.innerParams.get(e);if(n.input){var o=((e,t)=>{var n,o=e.getInput();if(!o)return null;switch(t.input){case"checkbox":return o.checked?1:0;case"radio":return(n=o).checked?n.value:null;case"file":return(n=o).files.length?null!==n.getAttribute("multiple")?n.files:n.files[0]:null;default:return t.inputAutoTrim?o.value.trim():o.value}})(e,n);if(n.inputValidator){var i=e;var a=o;var r=t;const s=p.innerParams.get(i),c=(i.disableInput(),Promise.resolve().then(()=>u(s.inputValidator(a,s.validationMessage))));c.then(e=>{i.enableButtons(),i.enableInput(),e?i.showValidationMessage(e):("deny"===r?Mt:qt)(i,a)})}else e.getInput().checkValidity()?("deny"===t?Mt:qt)(e,o):(e.enableButtons(),e.showValidationMessage(n.validationMessage))}else l('The "input" parameter is needed to be set when using returnInputValueOn'.concat(D(t)))},Mt=(t,n)=>{const e=p.innerParams.get(t||void 0);e.showLoaderOnDeny&&j(b()),e.preDeny?(p.awaitingPromise.set(t||void 0,!0),Promise.resolve().then(()=>u(e.preDeny(n,e.validationMessage))).then(e=>{!1===e?(t.hideLoading(),mt(t)):t.close({isDenied:!0,value:void 0===e?n:e})}).catch(e=>It(t||void 0,e))):t.close({isDenied:!0,value:n})},Ht=(e,t)=>{e.close({isConfirmed:!0,value:t})},It=(e,t)=>{e.rejectPromise(t)},qt=(t,n)=>{const e=p.innerParams.get(t||void 0);e.showLoaderOnConfirm&&j(),e.preConfirm?(t.resetValidationMessage(),p.awaitingPromise.set(t||void 0,!0),Promise.resolve().then(()=>u(e.preConfirm(n,e.validationMessage))).then(e=>{x(Y())||!1===e?(t.hideLoading(),mt(t)):Ht(t,void 0===e?n:e)}).catch(e=>It(t||void 0,e))):Ht(t,n)},Dt=(n,e,o)=>{e.popup.onclick=()=>{var e,t=p.innerParams.get(n);t&&((e=t).showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton||t.timer||t.input)||o(L.close)}};let Vt=!1;const Nt=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(Vt=!0)}}},Ft=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,e.target!==t.popup&&!t.popup.contains(e.target)||(Vt=!0)}}},Rt=(n,o,i)=>{o.container.onclick=e=>{var t=p.innerParams.get(n);Vt?Vt=!1:e.target===o.container&&F(t.allowOutsideClick)&&i(L.backdrop)}},Ut=e=>"object"==typeof e&&e.jquery,Wt=e=>e instanceof Element||Ut(e);const zt=()=>{if(E.timeout)return e=J(),t=parseInt(window.getComputedStyle(e).width),e.style.removeProperty("transition"),e.style.width="100%",n=parseInt(window.getComputedStyle(e).width),t=t/n*100,e.style.removeProperty("transition"),e.style.width="".concat(t,"%"),E.timeout.stop();var e,t,n},Kt=()=>{var e;if(E.timeout)return e=E.timeout.start(),te(e),e};let _t=!1;const Yt={};const Zt=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const o in Yt){var n=e.getAttribute(o);if(n)return void Yt[o].fire({template:n})}};var $t=Object.freeze({isValidParameter:Ct,isUpdatableParameter:At,isDeprecatedParameter:kt,argsToParams:n=>{const o={};return"object"!=typeof n[0]||Wt(n[0])?["title","html","icon"].forEach((e,t)=>{t=n[t];"string"==typeof t||Wt(t)?o[e]=t:void 0!==t&&l("Unexpected type of ".concat(e,'! Expected "string" or "Element", got ').concat(typeof t))}):Object.assign(o,n[0]),o},isVisible:()=>x(h()),clickConfirm:Xe,clickDeny:()=>b()&&b().click(),clickCancel:()=>y()&&y().click(),getContainer:g,getPopup:h,getTitle:W,getHtmlContainer:z,getImage:K,getIcon:r,getInputLabel:()=>n(m["input-label"]),getCloseButton:X,getActions:Z,getConfirmButton:f,getDenyButton:b,getCancelButton:y,getLoader:v,getFooter:$,getTimerProgressBar:J,getFocusableElements:G,getValidationMessage:Y,isLoading:()=>h().hasAttribute("data-loading"),fire:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new this(...t)},mixin:function(n){class e extends this{_main(e,t){return super._main(e,Object.assign({},n,t))}}return e},showLoading:j,enableLoading:j,getTimerLeft:()=>E.timeout&&E.timeout.getTimerLeft(),stopTimer:zt,resumeTimer:Kt,toggleTimer:()=>{var e=E.timeout;return e&&(e.running?zt:Kt)()},increaseTimer:e=>{if(E.timeout)return e=E.timeout.increase(e),te(e,!0),e},isTimerRunning:()=>E.timeout&&E.timeout.isRunning(),bindClickHandler:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"data-swal-template";Yt[e]=this,_t||(document.body.addEventListener("click",Zt),_t=!0)}});class Jt{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=(new Date).getTime()-this.started.getTime()),this.remaining}increase(e){var t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Xt=["swal-title","swal-html","swal-footer"],Gt=e=>{const n={};return Array.from(e.querySelectorAll("swal-param")).forEach(e=>{M(e,["name","value"]);var t=e.getAttribute("name"),e=e.getAttribute("value");"boolean"==typeof O[t]?n[t]="false"!==e:"object"==typeof O[t]?n[t]=JSON.parse(e):n[t]=e}),n},Qt=e=>{const n={};return Array.from(e.querySelectorAll("swal-function-param")).forEach(e=>{var t=e.getAttribute("name"),e=e.getAttribute("value");n[t]=new Function("return ".concat(e))()}),n},en=e=>{const n={};return Array.from(e.querySelectorAll("swal-button")).forEach(e=>{M(e,["type","color","aria-label"]);var t=e.getAttribute("type");n["".concat(t,"ButtonText")]=e.innerHTML,n["show".concat(D(t),"Button")]=!0,e.hasAttribute("color")&&(n["".concat(t,"ButtonColor")]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(n["".concat(t,"ButtonAriaLabel")]=e.getAttribute("aria-label"))}),n},tn=e=>{var t={},e=e.querySelector("swal-image");return e&&(M(e,["src","width","height","alt"]),e.hasAttribute("src")&&(t.imageUrl=e.getAttribute("src")),e.hasAttribute("width")&&(t.imageWidth=e.getAttribute("width")),e.hasAttribute("height")&&(t.imageHeight=e.getAttribute("height")),e.hasAttribute("alt")&&(t.imageAlt=e.getAttribute("alt"))),t},nn=e=>{var t={},e=e.querySelector("swal-icon");return e&&(M(e,["type","color"]),e.hasAttribute("type")&&(t.icon=e.getAttribute("type")),e.hasAttribute("color")&&(t.iconColor=e.getAttribute("color")),t.iconHtml=e.innerHTML),t},on=e=>{const n={};var t=e.querySelector("swal-input"),t=(t&&(M(t,["type","label","placeholder","value"]),n.input=t.getAttribute("type")||"text",t.hasAttribute("label")&&(n.inputLabel=t.getAttribute("label")),t.hasAttribute("placeholder")&&(n.inputPlaceholder=t.getAttribute("placeholder")),t.hasAttribute("value")&&(n.inputValue=t.getAttribute("value"))),Array.from(e.querySelectorAll("swal-input-option")));return t.length&&(n.inputOptions={},t.forEach(e=>{M(e,["value"]);var t=e.getAttribute("value"),e=e.innerHTML;n.inputOptions[t]=e})),n},an=(e,t)=>{var n={};for(const a in t){var o=t[a],i=e.querySelector(o);i&&(M(i,[]),n[o.replace(/^swal-/,"")]=i.innerHTML.trim())}return n},rn=e=>{const t=Xt.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach(e=>{e=e.tagName.toLowerCase();t.includes(e)||a("Unrecognized element <".concat(e,">"))})},M=(t,n)=>{Array.from(t.attributes).forEach(e=>{-1===n.indexOf(e.name)&&a(['Unrecognized attribute "'.concat(e.name,'" on <').concat(t.tagName.toLowerCase(),">."),"".concat(n.length?"Allowed attributes are: ".concat(n.join(", ")):"To set the value, use HTML within the element.")])})},sn=10,cn=e=>{var t=h();e.target===t&&(e=g(),t.removeEventListener(ke,cn),e.style.overflowY="auto")},ln=(e,t)=>{ke&&ue(t)?(e.style.overflowY="hidden",t.addEventListener(ke,cn)):e.style.overflowY="auto"},un=(e,t,n)=>{rt(),t&&"hidden"!==n&&lt(),setTimeout(()=>{e.scrollTop=0})},dn=(e,t,n)=>{A(e,n.showClass.backdrop),t.style.setProperty("opacity","0","important"),B(t,"grid"),setTimeout(()=>{A(t,n.showClass.popup),t.style.removeProperty("opacity")},sn),A([document.documentElement,document.body],m.shown),n.heightAuto&&n.backdrop&&!n.toast&&A([document.documentElement,document.body],m["height-auto"])};var pn={email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function mn(e){var t,n,o;(t=e).inputValidator||Object.keys(pn).forEach(e=>{t.input===e&&(t.inputValidator=pn[e])}),e.showLoaderOnConfirm&&!e.preConfirm&&a("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),(n=e).target&&("string"!=typeof n.target||document.querySelector(n.target))&&("string"==typeof n.target||n.target.appendChild)||(a('Target parameter is not valid, defaulting to "body"'),n.target="body"),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),n=e,e=fe(),ge()?l("SweetAlert2 requires document to initialize"):((o=document.createElement("div")).className=m.container,e&&A(o,m["no-transition"]),w(o,he),(e=ve(n.target)).appendChild(o),ye(n),we(e),be())}let H;class I{constructor(){if("undefined"!=typeof window){H=this;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(t)),o=(Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}}),H._main(H.params));p.promise.set(this,o)}}_main(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=(Bt(Object.assign({},t,e)),E.currentInstance&&(E.currentInstance._destroy(),Q()&&at()),E.currentInstance=H,hn(e,t)),t=(mn(e),Object.freeze(e),E.timeout&&(E.timeout.stop(),delete E.timeout),clearTimeout(E.restoreFocusTimeout),fn(H));return $e(H,e),p.innerParams.set(H,e),gn(H,t,e)}then(e){return p.promise.get(this).then(e)}finally(e){return p.promise.get(this).finally(e)}}const gn=(l,u,d)=>new Promise((e,t)=>{const n=e=>{l.close({isDismissed:!0,dismiss:e})};var o,i,a;ot.swalPromiseResolve.set(l,e),ot.swalPromiseReject.set(l,t),u.confirmButton.onclick=()=>{var e,t;e=l,t=p.innerParams.get(e),e.disableButtons(),t.input?jt(e,"confirm"):qt(e,!0)},u.denyButton.onclick=()=>{var e,t;e=l,t=p.innerParams.get(e),e.disableButtons(),t.returnInputValueOnDeny?jt(e,"deny"):Mt(e,!1)},u.cancelButton.onclick=()=>{var e,t;e=l,t=n,e.disableButtons(),t(L.cancel)},u.closeButton.onclick=()=>{n(L.close)},e=l,t=u,a=n,(p.innerParams.get(e).toast?Dt:(Nt(t),Ft(t),Rt))(e,t,a),o=l,e=E,t=d,i=n,Ge(e),t.toast||(e.keydownHandler=e=>nt(o,e,i),e.keydownTarget=t.keydownListenerCapture?window:h(),e.keydownListenerCapture=t.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0),a=l,"select"===(t=d).input||"radio"===t.input?Et(a,t):["text","email","number","tel","textarea"].includes(t.input)&&(R(t.inputValue)||U(t.inputValue))&&(j(f()),Tt(a,t));{var r=d;const s=g(),c=h();"function"==typeof r.willOpen&&r.willOpen(c),e=window.getComputedStyle(document.body).overflowY,dn(s,c,r),setTimeout(()=>{ln(s,c)},sn),Q()&&(un(s,r.scrollbarPadding,e),it()),ee()||E.previousActiveElement||(E.previousActiveElement=document.activeElement),"function"==typeof r.didOpen&&setTimeout(()=>r.didOpen(c)),k(s,m["no-transition"])}bn(E,d,n),vn(u,d),setTimeout(()=>{u.container.scrollTop=0})}),hn=(e,t)=>{var n=(n="string"==typeof(n=e).template?document.querySelector(n.template):n.template)?(n=n.content,rn(n),Object.assign(Gt(n),Qt(n),en(n),tn(n),nn(n),on(n),an(n,Xt))):{},t=Object.assign({},O,t,n,e);return t.showClass=Object.assign({},O.showClass,t.showClass),t.hideClass=Object.assign({},O.hideClass,t.hideClass),t},fn=e=>{var t={popup:h(),container:g(),actions:Z(),confirmButton:f(),denyButton:b(),cancelButton:y(),loader:v(),closeButton:X(),validationMessage:Y(),progressSteps:_()};return p.domCache.set(e,t),t},bn=(e,t,n)=>{var o=J();P(o),t.timer&&(e.timeout=new Jt(()=>{n("timer"),delete e.timeout},t.timer),t.timerProgressBar&&(B(o),C(o,t,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&te(t.timer)})))},vn=(e,t)=>{t.toast||(F(t.allowEnterKey)?yn(e,t)||Qe(t,-1,1):wn())},yn=(e,t)=>t.focusDeny&&x(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&x(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!x(e.confirmButton))&&(e.confirmButton.focus(),!0),wn=()=>{document.activeElement instanceof HTMLElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()},Cn=("undefined"!=typeof window&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)&&(document.body.style.pointerEvents="none"),Object.assign(I.prototype,e),Object.assign(I,$t),Object.keys(e).forEach(e=>{I[e]=function(){if(H)return H[e](...arguments)}}),I.DismissReason=L,I.version="11.5.2",I);return Cn.default=Cn}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);

/***/ }),

/***/ "./src/js/screenPatterns.js":
/*!**********************************!*\
  !*** ./src/js/screenPatterns.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "difficultyScreen": () => (/* binding */ difficultyScreen),
/* harmony export */   "topBox": () => (/* binding */ topBox)
/* harmony export */ });
/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
const difficultyScreen = {
    
    tag: "div",
    cls: "difficulty",
    content: [
        {
            tag: "div",
            cls: "difficulty_box",
            content: [
                {
                    tag: "div",
                    cls: "difficulty_select",
                    content: [
                        {
                            tag: "h1",
                            cls: "difficulty_select-title",
                            content: "easy",
                        },
                    ],
                },
                {
                    tag: "div",
                    cls: "difficulty_select",
                    content: [
                        {
                            tag: "h1",
                            cls: "difficulty_select-title",
                            content: "normal",
                        },
                    ],
                },
                {
                    tag: "div",
                    cls: "difficulty_select",
                    content: [
                        {
                            tag: "h1",
                            cls: "difficulty_select-title",
                            content: "hard",
                        },
                    ],
                },
            ],
        },
        {
            tag: "button",
            cls: "difficulty_button",
            content: "choose",
        },
    ],
}   

const topBox = {
    tag: 'div',
    cls: 'game__top-box',
    content: [
        {
            tag: 'div',
            cls: 'game__top-box_timer',
            content: '00:00'
        },
        {
            tag: 'button',
            cls: 'restart_button',
            content: 'restart game',

        }           
    ]
}


/***/ }),

/***/ "./src/js/templateEngine.js":
/*!**********************************!*\
  !*** ./src/js/templateEngine.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "templateEngine": () => (/* binding */ templateEngine)
/* harmony export */ });
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
function templateEngine(block) {
    if (block === undefined || block === null || block === false) {
        return document.createTextNode("");
    }
    if (
        typeof block === "string" ||
        typeof block === "number" ||
        block === true
    ) {
        return document.createTextNode(block);
    }
    if (Array.isArray(block)) {
        const fragment = document.createDocumentFragment();

        block.forEach((element) => {
            fragment.appendChild(templateEngine(element));
        });

        return fragment;
    }
    const result = document.createElement(block.tag);

    if (block.cls) {
        const classes = [].concat(block.cls);
        classes.forEach((cls) => {
            result.classList.add(cls);
        });
    }

    if (block.attrs) {
        const keys = Object.keys(block.attrs);

        keys.forEach((key) => {
            result.setAttribute(key, block.attrs[key]);
        });
    }

    result.appendChild(templateEngine(block.content));

    return result;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_templateEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/templateEngine */ "./src/js/templateEngine.js");
/* harmony import */ var _js_screenPatterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/screenPatterns */ "./src/js/screenPatterns.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _node_modules_sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/sweetalert2/dist/sweetalert2.min.js */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var _node_modules_sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_sweetalert2_dist_sweetalert2_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/sweetalert2/dist/sweetalert2.css */ "./node_modules/sweetalert2/dist/sweetalert2.css");
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */














window.application = {
    blocks: {},
    screens: {renderDifficultyScreen},
    difficultyLevel: {},
    cardsTotal:[],
    cardsOpened:[],
    cardsToCompare: [],
    cardsLength: [],
    cardHideTimer: [],
    gameTimer: [],
}


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
};

function renderDifficultyScreen() {
    container.innerHTML = '';
    container.appendChild((0,_js_templateEngine__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(_js_screenPatterns__WEBPACK_IMPORTED_MODULE_1__.difficultyScreen));
    const difficultySelectBox = document.querySelector('.difficulty_box');
    const button = document.querySelector('.difficulty_button')
    difficultySelectBox.addEventListener('click', (event) => {
        const target = event.target;
        window.application.difficultyLevel = target.textContent;
        button.textContent = window.application.difficultyLevel;
    })
    button.addEventListener('click', () => {
        if (window.application.difficultyLevel === 'easy') {
            renderGame(3, 2)
        }
        if (window.application.difficultyLevel === 'normal') {
            renderGame(6, 4)
        }
        if (window.application.difficultyLevel === 'hard') {
            renderGame(9, 6)
        }
    })
};

function renderGame(difficulty, time) {
    window.application.gameTimer.forEach(item => {
        clearInterval(item);
    });
    window.application.gameTimer = [];
    window.application.cardsTotal = [];
    window.application.difficultyLevel = {};
    
    const cards = ['6 бубны.png','6 крести.png', '6 пики.png', '6 черви.png', '7 бубны.png', '7 крести.png', '7 пики.png', '7 черви.png', '8 бубны.png','8 крести.png', '8 пики.png', '8 черви.png', '9 бубны.png','9 крести.png', '9 пики.png', '9 черви.png', '10 бубны.png','10 крести.png', '10 пики.png', '10 черви.png', 'валет бубны.png','валет крести.png', 'валет пики.png', 'валет черви.png', 'дама бубны.png','дама крести.png', 'дама пики.png', 'дама черви.png', 'король бубны.png','король крести.png', 'король пики.png', 'король черви.png', 'туз бубны.png','туз крести.png', 'туз пики.png', 'туз черви.png'];
    container.innerHTML = '';
    container.appendChild((0,_js_templateEngine__WEBPACK_IMPORTED_MODULE_0__.templateEngine)(_js_screenPatterns__WEBPACK_IMPORTED_MODULE_1__.topBox));

    shuffle(cards);
    cards.length = difficulty;
    const generatedCards = [...cards, ...cards];

    shuffle(generatedCards); 
    
    renderCards(generatedCards); 
    
    restartCurrentGame (difficulty, time);

    timeCount (time);
};

function restartCurrentGame (difficulty, time) {
    const restartButton = document.querySelector('.restart_button');
    restartButton.addEventListener('click', () => {
        renderGame(difficulty, time);  
    })
}

function renderCards(array) {
    window.application.cardsTotal = array;
    window.application.cardsOpened = [];
    for (let i = 0; i < array.length; i++) {
        const card = document.createElement('img'); 
        card.classList.add('game__card');  
        card.src = 'static/' + array[i];
        container.appendChild(card);
        const cardCover =  document.createElement('img');
        cardCover.classList.add('game__card-cover', 'game__card-cover_hidden');
        container.appendChild(cardCover);

        hideCards(card, cardCover);
        
        openCards(cardCover, card, array[i]);
        
    };
}

function hideCards(card, cardCover) {
    let hideCards = setInterval(() => { 
        card.classList.add('game__card_hidden');
        cardCover.classList.remove('game__card-cover_hidden');
        window.application.cardHideTimer.push(hideCards);
        window.application.cardHideTimer.forEach(item => {
            clearInterval(item);
        });
    }, 5000);
}

function openCards(cardCover, card, arrayCard) {
    cardCover.addEventListener('click', (event) => {
        let target = event.target
        target = arrayCard;
        card.classList.remove('game__card_hidden');
        cardCover.classList.add('game__card-cover_hidden');
        window.application.cardsToCompare.push(target);
        if (window.application.cardsToCompare.length > 1) {
            compareCards();
        }            
    });
}

function compareCards() {
    let card1 = window.application.cardsToCompare[0];
    let card2 = window.application.cardsToCompare[1];
    if (card1 === card2) {
        playerWin(window.application.cardsToCompare);
        window.application.cardsToCompare = [];
        
    } else {
        window.application.cardsToCompare = [];
        window.application.difficultyLevel = {};
        window.application.gameTimer.forEach(item => {
            clearInterval(item);
        });
        window.application.gameTimer = [];

        _node_modules_sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_3___default().fire({
            title: 'Oops!',
            text: 'Try again!',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        renderDifficultyScreen();
    };  
}

function playerWin (cardsOpened) {
    window.application.cardsOpened.push(cardsOpened);
    let array2 = window.application.cardsTotal;
    let array1 = window.application.cardsOpened.flat();
    if (array1.length === array2.length) {
        _node_modules_sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_3___default().fire({
            title: 'Congratulations!',
            text: 'You won!',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
        renderDifficultyScreen();
    }
}

function timeCount (time) {
    const timeBox = document.querySelector('.game__top-box_timer');
    timeBox.textContent = `${time}:00`;
    let timeMinut = parseInt(time) * 60;

    let timer = setInterval(function () {
        let seconds = timeMinut%60;
        let minutes = timeMinut/60%60;
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        timeBox.innerHTML = strTimer;

        --timeMinut;
        window.application.gameTimer.push(timer);
        
        if (timeMinut <= 0) {
            clearInterval(timer);
            _node_modules_sweetalert2_dist_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_3___default().fire({
                title: 'Sorry!',
                text: 'The time is over',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            renderDifficultyScreen();
        } 
    }, 1000)
}










})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map