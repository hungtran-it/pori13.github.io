(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-vendors~2bca4819"],{"1c09":function(t,e,n){
/*! For license information please see vue-image-lightbox.min.js.LICENSE.txt */
window,t.exports=function(n){var i={};function s(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}return s.m=n,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s(s.s=3)}([function(t,e,n){},function(At,Ot,Mt){var Nt;!function(s,a,m){"use strict";var o=["","webkit","Moz","MS","ms","o"],t=a.createElement("div"),r=Math.round,g=Math.abs,y=Date.now;function c(t,e,n){return setTimeout(d(t,n),e)}function n(t,e,n){return Array.isArray(t)&&(u(t,n[e],n),1)}function u(t,e,n){if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==m)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(var i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function e(n,t,e){var i="DEPRECATED METHOD: "+t+"\n"+e+" AT \n";return function(){var t=new Error("get-stack-trace"),e=t&&t.stack?t.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",t=s.console&&(s.console.warn||s.console.log);return t&&t.call(s.console,i,e),n.apply(this,arguments)}}var l="function"!=typeof Object.assign?function(t){if(t===m||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==m&&null!==i)for(var s in i)i.hasOwnProperty(s)&&(e[s]=i[s])}return e}:Object.assign,i=e(function(t,e,n){for(var i=Object.keys(e),s=0;s<i.length;)n&&t[i[s]]!==m||(t[i[s]]=e[i[s]]),s++;return t},"extend","Use `assign`."),h=e(function(t,e){return i(t,e,!0)},"merge","Use `assign`.");function p(t,e,n){var i=e.prototype;(e=t.prototype=Object.create(i)).constructor=t,e._super=i,n&&l(e,n)}function d(t,e){return function(){return t.apply(e,arguments)}}function f(t,e){return"function"==typeof t?t.apply(e&&e[0]||m,e):t}function v(t,e){return t===m?e:t}function T(e,t,n){u(w(t),function(t){e.addEventListener(t,n,!1)})}function b(e,t,n){u(w(t),function(t){e.removeEventListener(t,n,!1)})}function x(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function _(t,e){return-1<t.indexOf(e)}function w(t){return t.trim().split(/\s+/g)}function E(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function I(t){return Array.prototype.slice.call(t,0)}function C(t,n,e){for(var i=[],s=[],o=0;o<t.length;){var r=n?t[o][n]:t[o];E(s,r)<0&&i.push(t[o]),s[o]=r,o++}return i=e?n?i.sort(function(t,e){return t[n]>e[n]}):i.sort():i}function S(t,e){for(var n,i=e[0].toUpperCase()+e.slice(1),s=0;s<o.length;){if((n=(n=o[s])?n+i:e)in t)return n;s++}return m}var L=1;function P(t){t=t.ownerDocument||t;return t.defaultView||t.parentWindow||s}var A="ontouchstart"in s,O=S(s,"PointerEvent")!==m,M=A&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),N="touch",k="mouse",z=["x","y"],D=["clientX","clientY"];function R(e,t){var n=this;this.manager=e,this.callback=t,this.element=e.element,this.target=e.options.inputTarget,this.domHandler=function(t){f(e.options.enable,[e])&&n.handler(t)},this.init()}function $(t,e,n){var i=n.pointers.length,s=n.changedPointers.length,o=1&e&&i-s==0,s=12&e&&i-s==0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,function(t,e){var n=t.session,i=e.pointers,s=i.length;n.firstInput||(n.firstInput=B(e)),1<s&&!n.firstMultiple?n.firstMultiple=B(e):1===s&&(n.firstMultiple=!1);var o,r,a=n.firstInput,c=n.firstMultiple,u=(c||a).center,l=e.center=X(i);e.timeStamp=y(),e.deltaTime=e.timeStamp-a.timeStamp,e.angle=W(u,l),e.distance=q(u,l),o=n,s=(r=e).center,a=o.offsetDelta||{},u=o.prevDelta||{},l=o.prevInput||{},1!==r.eventType&&4!==l.eventType||(u=o.prevDelta={x:l.deltaX||0,y:l.deltaY||0},a=o.offsetDelta={x:s.x,y:s.y}),r.deltaX=u.x+(s.x-a.x),r.deltaY=u.y+(s.y-a.y),e.offsetDirection=Y(e.deltaX,e.deltaY);var h,p,d,f,v,a=F(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=a.x,e.overallVelocityY=a.y,e.overallVelocity=g(a.x)>g(a.y)?a.x:a.y,e.scale=c?(a=c.pointers,q(i[0],i[1],D)/q(a[0],a[1],D)):1,e.rotation=c?(v=c.pointers,W(i[1],i[0],D)+W(v[1],v[0],D)):0,e.maxPointers=!n.prevInput||e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers,c=e,v=(i=n).lastInterval||c,n=c.timeStamp-v.timeStamp,8!=c.eventType&&(25<n||v.velocity===m)?(h=(d=F(n,n=c.deltaX-v.deltaX,f=c.deltaY-v.deltaY)).x,p=d.y,d=g(d.x)>g(d.y)?d.x:d.y,f=Y(n,f),i.lastInterval=c):(d=v.velocity,h=v.velocityX,p=v.velocityY,f=v.direction),c.velocity=d,c.velocityX=h,c.velocityY=p,c.direction=f;t=t.element;x(e.srcEvent.target,t)&&(t=e.srcEvent.target),e.target=t}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function B(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:r(t.pointers[n].clientX),clientY:r(t.pointers[n].clientY)},n++;return{timeStamp:y(),pointers:e,center:X(e),deltaX:t.deltaX,deltaY:t.deltaY}}function X(t){var e=t.length;if(1===e)return{x:r(t[0].clientX),y:r(t[0].clientY)};for(var n=0,i=0,s=0;s<e;)n+=t[s].clientX,i+=t[s].clientY,s++;return{x:r(n/e),y:r(i/e)}}function F(t,e,n){return{x:e/t||0,y:n/t||0}}function Y(t,e){return t===e?1:g(t)>=g(e)?t<0?2:4:e<0?8:16}function q(t,e,n){var i=e[(n=n||z)[0]]-t[n[0]],n=e[n[1]]-t[n[1]];return Math.sqrt(i*i+n*n)}function W(t,e,n){var i=e[(n=n||z)[0]]-t[n[0]],n=e[n[1]]-t[n[1]];return 180*Math.atan2(n,i)/Math.PI}R.prototype={handler:function(){},init:function(){this.evEl&&T(this.element,this.evEl,this.domHandler),this.evTarget&&T(this.target,this.evTarget,this.domHandler),this.evWin&&T(P(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&b(this.element,this.evEl,this.domHandler),this.evTarget&&b(this.target,this.evTarget,this.domHandler),this.evWin&&b(P(this.element),this.evWin,this.domHandler)}};var j={mousedown:1,mousemove:2,mouseup:4},V="mousedown",H="mousemove mouseup";function U(){this.evEl=V,this.evWin=H,this.pressed=!1,R.apply(this,arguments)}p(U,R,{handler:function(t){var e=j[t.type];1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:k,srcEvent:t}))}});var G={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},K={2:N,3:"pen",4:k,5:"kinect"},Z="pointerdown",J="pointermove pointerup pointercancel";function Q(){this.evEl=Z,this.evWin=J,R.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}s.MSPointerEvent&&!s.PointerEvent&&(Z="MSPointerDown",J="MSPointerMove MSPointerUp MSPointerCancel"),p(Q,R,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),s=G[i],o=K[t.pointerType]||t.pointerType,r=o==N,i=E(e,t.pointerId,"pointerId");1&s&&(0===t.button||r)?i<0&&(e.push(t),i=e.length-1):12&s&&(n=!0),i<0||(e[i]=t,this.callback(this.manager,s,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(i,1))}});var tt={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function et(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,R.apply(this,arguments)}p(et,R,{handler:function(t){var e,n=tt[t.type];1===n&&(this.started=!0),this.started&&(e=function(t,e){var n=I(t.touches),t=I(t.changedTouches);return[n=12&e?C(n.concat(t),"identifier",!0):n,t]}.call(this,t,n),12&n&&e[0].length-e[1].length==0&&(this.started=!1),this.callback(this.manager,n,{pointers:e[0],changedPointers:e[1],pointerType:N,srcEvent:t}))}});var nt={touchstart:1,touchmove:2,touchend:4,touchcancel:8},it="touchstart touchmove touchend touchcancel";function st(){this.evTarget=it,this.targetIds={},R.apply(this,arguments)}function ot(){R.apply(this,arguments);var t=d(this.handler,this);this.touch=new st(this.manager,t),this.mouse=new U(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function rt(t){var e,n,t=t.changedPointers[0];t.identifier===this.primaryTouch&&(e={x:t.clientX,y:t.clientY},this.lastTouches.push(e),n=this.lastTouches,setTimeout(function(){var t=n.indexOf(e);-1<t&&n.splice(t,1)},2500))}p(st,R,{handler:function(t){var e=nt[t.type],n=function(t,e){var n=I(t.touches),i=this.targetIds;if(3&e&&1===n.length)return i[n[0].identifier]=!0,[n,n];var s,o=I(t.changedTouches),r=[],a=this.target,c=n.filter(function(t){return x(t.target,a)});if(1===e)for(s=0;s<c.length;)i[c[s].identifier]=!0,s++;for(s=0;s<o.length;)i[o[s].identifier]&&r.push(o[s]),12&e&&delete i[o[s].identifier],s++;return r.length?[C(c.concat(r),"identifier",!0),r]:void 0}.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:N,srcEvent:t})}}),p(ot,R,{handler:function(t,e,n){var i=n.pointerType==N,s=n.pointerType==k;if(!(s&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)!function(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,rt.call(this,e)):12&t&&rt.call(this,e)}.call(this,e,n);else if(s&&function(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var s=this.lastTouches[i],o=Math.abs(e-s.x),s=Math.abs(n-s.y);if(o<=25&&s<=25)return!0}return!1}.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var at=S(t.style,"touchAction"),ct=at!==m,ut="compute",lt="manipulation",ht="none",pt="pan-x",dt="pan-y",ft=function(){if(!ct)return!1;var e={},n=s.CSS&&s.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(t){e[t]=!n||s.CSS.supports("touch-action",t)}),e}();function vt(t,e){this.manager=t,this.set(e)}vt.prototype={set:function(t){t==ut&&(t=this.compute()),ct&&this.manager.element.style&&ft[t]&&(this.manager.element.style[at]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var e=[];return u(this.manager.recognizers,function(t){f(t.options.enable,[t])&&(e=e.concat(t.getTouchAction()))}),function(t){if(_(t,ht))return ht;var e=_(t,pt),n=_(t,dt);return e&&n?ht:e||n?e?pt:dt:_(t,lt)?lt:"auto"}(e.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,s=_(i,ht)&&!ft.none,o=_(i,dt)&&!ft["pan-y"],r=_(i,pt)&&!ft["pan-x"];if(s){var a=1===t.pointers.length,i=t.distance<2,t=t.deltaTime<250;if(a&&i&&t)return}if(!r||!o)return s||o&&6&n||r&&24&n?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function mt(t){this.options=l({},this.defaults,t||{}),this.id=L++,this.manager=null,this.options.enable=v(this.options.enable,!0),this.state=1,this.simultaneous={},this.requireFail=[]}function gt(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}function yt(t){return 16==t?"down":8==t?"up":2==t?"left":4==t?"right":""}function Tt(t,e){e=e.manager;return e?e.get(t):t}function bt(){mt.apply(this,arguments)}function xt(){bt.apply(this,arguments),this.pX=null,this.pY=null}function _t(){bt.apply(this,arguments)}function wt(){mt.apply(this,arguments),this._timer=null,this._input=null}function Et(){bt.apply(this,arguments)}function It(){bt.apply(this,arguments)}function Ct(){mt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function St(t,e){return(e=e||{}).recognizers=v(e.recognizers,St.defaults.preset),new Lt(t,e)}function Lt(t,e){this.options=l({},St.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new(this.options.inputClass||(O?Q:M?st:A?ot:U))(this,$),this.touchAction=new vt(this,this.options.touchAction),Pt(this,!0),u(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function Pt(n,i){var s,o=n.element;o.style&&(u(n.options.cssProps,function(t,e){s=S(o.style,e),i?(n.oldCssProps[s]=o.style[s],o.style[s]=t):o.style[s]=n.oldCssProps[s]||""}),i||(n.oldCssProps={}))}mt.prototype={defaults:{},set:function(t){return l(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(n(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Tt(t,this)).id]||(e[t.id]=t).recognizeWith(this),this},dropRecognizeWith:function(t){return n(t,"dropRecognizeWith",this)||(t=Tt(t,this),delete this.simultaneous[t.id]),this},requireFailure:function(t){if(n(t,"requireFailure",this))return this;var e=this.requireFail;return-1===E(e,t=Tt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(n(t,"dropRequireFailure",this))return this;t=Tt(t,this);t=E(this.requireFail,t);return-1<t&&this.requireFail.splice(t,1),this},hasRequireFailures:function(){return 0<this.requireFail.length},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(e){var n=this,t=this.state;function i(t){n.manager.emit(t,e)}t<8&&i(n.options.event+gt(t)),i(n.options.event),e.additionalEvent&&i(e.additionalEvent),8<=t&&i(n.options.event+gt(t))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},recognize:function(t){t=l({},t);if(!f(this.options.enable,[this,t]))return this.reset(),void(this.state=32);56&this.state&&(this.state=1),this.state=this.process(t),30&this.state&&this.tryEmit(t)},process:function(t){},getTouchAction:function(){},reset:function(){}},p(bt,mt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=6&e,t=this.attrTest(t);return i&&(8&n||!t)?16|e:i||t?4&n?8|e:2&e?4|e:2:32}}),p(xt,bt,{defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var t=this.options.direction,e=[];return 6&t&&e.push(dt),24&t&&e.push(pt),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,s=t.direction,o=t.deltaX,r=t.deltaY;return s&e.direction||(i=6&e.direction?(s=0===o?1:o<0?2:4,n=o!=this.pX,Math.abs(t.deltaX)):(s=0===r?1:r<0?8:16,n=r!=this.pY,Math.abs(t.deltaY))),t.direction=s,n&&i>e.threshold&&s&e.direction},attrTest:function(t){return bt.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=yt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),p(_t,bt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[ht]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){var e;1!==t.scale&&(e=t.scale<1?"in":"out",t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),p(wt,mt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!i||!n||12&t.eventType&&!s)this.reset();else if(1&t.eventType)this.reset(),this._timer=c(function(){this.state=8,this.tryEmit()},e.time,this);else if(4&t.eventType)return 8;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=y(),this.manager.emit(this.options.event,this._input)))}}),p(Et,bt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[ht]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),p(It,bt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return xt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return 30&n?e=t.overallVelocity:6&n?e=t.overallVelocityX:24&n&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&g(e)>this.options.velocity&&4&t.eventType},emit:function(t){var e=yt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),p(Ct,mt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[lt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(i&&s&&n){if(4!=t.eventType)return this.failTimeout();s=!this.pTime||t.timeStamp-this.pTime<e.interval,n=!this.pCenter||q(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,n&&s?this.count+=1:this.count=1,this._input=t,0==this.count%e.taps)return this.hasRequireFailures()?(this._timer=c(function(){this.state=8,this.tryEmit()},e.interval,this),2):8}return 32},failTimeout:function(){return this._timer=c(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),St.VERSION="2.0.7",St.defaults={domEvents:!1,touchAction:ut,enable:!0,inputTarget:null,inputClass:null,preset:[[Et,{enable:!1}],[_t,{enable:!1},["rotate"]],[It,{direction:6}],[xt,{direction:6},["swipe"]],[Ct],[Ct,{event:"doubletap",taps:2},["tap"]],[wt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Lt.prototype={set:function(t){return l(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e,n=this.session;if(!n.stopped){this.touchAction.preventDefaults(t);var i=this.recognizers,s=n.curRecognizer;(!s||8&s.state)&&(s=n.curRecognizer=null);for(var o=0;o<i.length;)e=i[o],2===n.stopped||s&&e!=s&&!e.canRecognizeWith(s)?e.reset():e.recognize(t),!s&&14&e.state&&(s=n.curRecognizer=e),o++}},get:function(t){if(t instanceof mt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(n(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),(t.manager=this).touchAction.update(),t},remove:function(t){return n(t,"remove",this)||!(t=this.get(t))||-1!==(t=E(e=this.recognizers,t))&&(e.splice(t,1),this.touchAction.update()),this;var e},on:function(t,e){if(t!==m&&e!==m){var n=this.handlers;return u(w(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==m){var n=this.handlers;return u(w(t),function(t){e?n[t]&&n[t].splice(E(n[t],e),1):delete n[t]}),this}},emit:function(t,e){var n,i,s;this.options.domEvents&&(n=t,i=e,(s=a.createEvent("Event")).initEvent(n,!0,!0),(s.gesture=i).target.dispatchEvent(s));var o=this.handlers[t]&&this.handlers[t].slice();if(o&&o.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var r=0;r<o.length;)o[r](e),r++}},destroy:function(){this.element&&Pt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},l(St,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:32,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:24,DIRECTION_ALL:30,Manager:Lt,Input:R,TouchAction:vt,TouchInput:st,MouseInput:U,PointerEventInput:Q,TouchMouseInput:ot,SingleTouchInput:et,Recognizer:mt,AttrRecognizer:bt,Tap:Ct,Pan:xt,Swipe:It,Pinch:_t,Rotate:Et,Press:wt,on:T,off:b,each:u,merge:h,extend:i,assign:l,inherit:p,bindFn:d,prefixed:S}),(void 0!==s?s:"undefined"!=typeof self?self:{}).Hammer=St,(Nt=function(){return St}.call(Ot,Mt,Ot,At))===m||(At.exports=Nt)}(window,document)},function(t,e,n){"use strict";var i=n(0);n.n(i).a},function(t,e,n){"use strict";n.r(e);function i(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{on:{click:function(t){return t.stopPropagation(),n.closeLightBox(t)}}},[i("transition",{attrs:{mode:"out-in",name:"vue-lb-content-transition"},on:{afterEnter:n.enableImageTransition,beforeLeave:n.disableImageTransition}},[n.media?i("div",{directives:[{name:"show",rawName:"v-show",value:n.lightBoxOn,expression:"lightBoxOn"}],ref:"container",staticClass:"vue-lb-container"},[i("div",{staticClass:"vue-lb-content"},[i("div",{staticClass:"vue-lb-header"},[i("span"),n._v(" "),n.closable?i("button",{staticClass:"vue-lb-button-close",attrs:{type:"button",title:n.closeText}},[n._t("close",[i("CloseIcon")])],2):n._e()]),n._v(" "),i("div",{staticClass:"vue-lb-figure",on:{click:function(t){t.stopPropagation()}}},[i("transition",{attrs:{mode:"out-in",name:n.modalImageTransitionName}},["video"!==n.media[n.select].type?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:n.media[n.select].src,loading:n.media[n.select].src,error:n.media[n.select].src},expression:"{\n                src: media[select].src,\n                loading: media[select].src,\n                error: media[select].src,\n              }"}],key:n.media[n.select].src,staticClass:"vue-lb-modal-image",attrs:{srcset:n.media[n.select].srcset||"",alt:n.media[n.select].caption}}):i("video",{key:n.media[n.select].sources[0].src,ref:"video",attrs:{width:n.media[n.select].width,height:n.media[n.select].height,autoplay:n.media[n.select].autoplay,controls:""}},n._l(n.media[n.select].sources,function(t){return i("source",{key:t.src,attrs:{src:t.src,type:t.type}})}),0)]),n._v(" "),n._t("customCaption",[i("div",{directives:[{name:"show",rawName:"v-show",value:n.showCaption,expression:"showCaption"}],staticClass:"vue-lb-info",domProps:{innerHTML:n._s(n.media[n.select].caption)}})]),n._v(" "),i("div",{staticClass:"vue-lb-footer"},[i("div",{staticClass:"vue-lb-footer-info"}),n._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:n.showFooterCount,expression:"showFooterCount"}],staticClass:"vue-lb-footer-count"},[n._t("footer",[n._v("\n                "+n._s(n.select+1)+" / "+n._s(n.media.length)+"\n              ")],{current:n.select+1,total:n.media.length})],2)])],2)]),n._v(" "),i("div",{staticClass:"vue-lb-thumbnail-wrapper"},[n.showThumbs?i("div",{staticClass:"vue-lb-thumbnail"},[1<n.media.length?i("button",{staticClass:"vue-lb-thumbnail-arrow vue-lb-thumbnail-left",attrs:{type:"button",title:n.previousThumbText},on:{click:function(t){return t.stopPropagation(),n.previousImage()}}},[n._t("previousThumb",[i("LeftArrowIcon")])],2):n._e(),n._v(" "),n._l(n.imagesThumb,function(t,e){return i("div",{directives:[{name:"show",rawName:"v-show",value:e>=n.thumbIndex.begin&&e<=n.thumbIndex.end,expression:"index >= thumbIndex.begin && index <= thumbIndex.end"},{name:"lazy",rawName:"v-lazy:background-image",value:t,expression:"image",arg:"background-image"}],key:"string"==typeof t.src?""+t.src+e:e,class:"vue-lb-modal-thumbnail"+(n.select===e?"-active":""),on:{click:function(t){return t.stopPropagation(),n.showImage(e)}}},[t.type?n._t("videoIcon",[i("VideoIcon")]):n._e()],2)}),n._v(" "),1<n.media.length?i("button",{staticClass:"vue-lb-thumbnail-arrow vue-lb-thumbnail-right",attrs:{type:"button",title:n.nextThumbText},on:{click:function(t){return t.stopPropagation(),n.nextImage()}}},[n._t("nextThumb",[i("RightArrowIcon")])],2):n._e()],2):n._e()]),n._v(" "),1<n.media.length?i("button",{staticClass:"vue-lb-arrow vue-lb-left",attrs:{type:"button",title:n.previousText},on:{click:function(t){return t.stopPropagation(),n.previousImage()}}},[n._t("previous",[i("LeftArrowIcon")])],2):n._e(),n._v(" "),1<n.media.length?i("button",{staticClass:"vue-lb-arrow vue-lb-right",attrs:{type:"button",title:n.nextText},on:{click:function(t){return t.stopPropagation(),n.nextImage()}}},[n._t("next",[i("RightArrowIcon")])],2):n._e()]):n._e()])],1)}function s(){var t=this.$createElement;return(t=this._self._c||t)("span",[t("svg",{attrs:{fill:"white",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 512 512"}},[t("path",{attrs:{d:"M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"}})])])}function o(t,e,n,i,s,o,r,a){var c,u,l="function"==typeof t?t.options:t;return e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):s&&(c=a?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c&&(l.functional?(l._injectStyles=c,u=l.render,l.render=function(t,e){return c.call(e),u(t,e)}):(a=l.beforeCreate,l.beforeCreate=a?[].concat(a,c):[c])),{exports:t,options:l}}s._withStripped=i._withStripped=!0;var r=o({},s,[],!1,null,null,null);r.options.__file="src/components/LeftArrowIcon.vue";function a(){var t=this.$createElement;return(t=this._self._c||t)("span",[t("svg",{attrs:{fill:"white",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 512 512"}},[t("path",{attrs:{d:"M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"}})])])}var c=r.exports;a._withStripped=!0;var u=o({},a,[],!1,null,null,null);u.options.__file="src/components/RightArrowIcon.vue";function l(){var t=this.$createElement;return(t=this._self._c||t)("span",[t("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{fill:"white",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 512 512"}},[t("path",{attrs:{d:"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"}})])])}var h=u.exports;l._withStripped=!0;r=o({},l,[],!1,null,null,null);r.options.__file="src/components/CloseIcon.vue";function p(){var t=this.$createElement;return(t=this._self._c||t)("svg",{staticStyle:{"enable-background":"new 0 0 271.953 271.953",margin:"12px"},attrs:{x:"0px",y:"0px",viewBox:"0 0 271.953 271.953","xml:space":"preserve"}},[t("g",[t("g",[t("path",{staticStyle:{fill:"#fff"},attrs:{d:"M135.977,271.953c75.097,0,135.977-60.879,135.977-135.977S211.074,0,135.977,0S0,60.879,0,135.977    S60.879,271.953,135.977,271.953z M250.197,135.977c0,62.979-51.241,114.22-114.22,114.22s-114.22-51.241-114.22-114.22    s51.241-114.22,114.22-114.22S250.197,72.998,250.197,135.977z"}}),this._v(" "),t("path",{staticStyle:{fill:"#fff"},attrs:{d:"M112.295,205.031c2.692,1.115,5.434,1.659,8.235,1.659c5.662,0,11.183-2.208,15.344-6.375    l48.93-48.952c8.496-8.496,8.485-22.273-0.011-30.769l-48.957-48.952c-4.161-4.161-9.73-6.375-15.393-6.375    c-2.801,0-5.461,0.544-8.153,1.659c-8.126,3.367-13.255,11.297-13.255,20.097v97.903    C99.034,193.729,104.164,201.664,112.295,205.031z M120.791,88.613v-1.588l48.952,48.952l-48.952,48.952V88.613z"}})])])])}u=r.exports;p._withStripped=!0;r=o({},p,[],!1,null,null,null);r.options.__file="src/components/VideoIcon.vue";var d,r=r.exports;"undefined"!=typeof window&&(d=n(1));r={components:{LeftArrowIcon:c,RightArrowIcon:h,CloseIcon:u,VideoIcon:r},props:{media:{type:Array,required:!0},disableScroll:{type:Boolean,default:!0},showLightBox:{type:Boolean,default:!0},closable:{type:Boolean,default:!0},startAt:{type:Number,default:0},nThumbs:{type:Number,default:7},showThumbs:{type:Boolean,default:!0},showFooterCount:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},autoPlayTime:{type:Number,default:3e3},siteLoading:{type:String,default:""},showCaption:{type:Boolean,default:!1},lengthToLoadMore:{type:Number,default:0},closeText:{type:String,default:"Close (Esc)"},previousText:{type:String,default:"Previous"},nextText:{type:String,default:"Next"},previousThumbText:{type:String,default:"Previous"},nextThumbText:{type:String,default:"Next"}},data:function(){return{select:this.startAt,lightBoxOn:this.showLightBox,timer:null,modalImageTransitionName:"vue-lb-modal-image-no-transition"}},computed:{thumbIndex:function(){var t=Math.floor(this.nThumbs/2);return this.select>=t&&this.select<this.media.length-t?{begin:this.select-t+(1-this.nThumbs%2),end:this.select+t}:this.select<t?{begin:0,end:this.nThumbs-1}:{begin:this.media.length-this.nThumbs,end:this.media.length-1}},imagesThumb:function(){var e=this;return this.siteLoading?this.media.map(function(t){return{src:t.thumb,type:t.type,loading:e.siteLoading,error:e.siteLoading}}):this.media.map(function(t){return{src:t.thumb,type:t.type}})}},watch:{lightBoxOn:function(t){null!=document&&this.onToggleLightBox(t)},select:function(){this.$emit("onImageChanged",this.select),this.select>=this.media.length-this.lengthToLoadMore-1&&this.$emit("onLoad"),this.select===this.media.length-1&&this.$emit("onLastIndex"),0===this.select&&this.$emit("onFirstIndex"),this.select===this.startAt&&this.$emit("onStartIndex")}},mounted:function(){var t,e=this;this.autoPlay&&(this.timer=setInterval(function(){e.nextImage()},this.autoPlayTime)),this.onToggleLightBox(this.lightBoxOn),this.$refs.container&&((t=new d(this.$refs.container)).on("swiperight",function(){e.previousImage()}),t.on("swipeleft",function(){e.nextImage()}))},beforeDestroy:function(){document.removeEventListener("keydown",this.addKeyEvent),this.autoPlay&&clearInterval(this.timer)},methods:{onLightBoxOpen:function(){this.$emit("onOpened"),this.disableScroll&&document.querySelector("html").classList.add("no-scroll"),document.querySelector("body").classList.add("vue-lb-open"),document.addEventListener("keydown",this.addKeyEvent),this.$refs.video&&this.$refs.video.autoplay&&this.$refs.video.play()},onLightBoxClose:function(){this.$emit("onClosed"),this.disableScroll&&document.querySelector("html").classList.remove("no-scroll"),document.querySelector("body").classList.remove("vue-lb-open"),document.removeEventListener("keydown",this.addKeyEvent),this.$refs.video&&(this.$refs.video.pause(),this.$refs.video.currentTime=0)},onToggleLightBox:function(t){t?this.onLightBoxOpen():this.onLightBoxClose()},showImage:function(t){this.$set(this,"select",t),this.$set(this,"lightBoxOn",!0)},addKeyEvent:function(t){37===t.keyCode&&this.previousImage(),39===t.keyCode&&this.nextImage(),27===t.keyCode&&this.closeLightBox()},closeLightBox:function(){this.closable&&this.$set(this,"lightBoxOn",!1)},nextImage:function(){this.$set(this,"select",(this.select+1)%this.media.length)},previousImage:function(){this.$set(this,"select",(this.select+this.media.length-1)%this.media.length)},enableImageTransition:function(){this.$set(this,"modalImageTransitionName","vue-lb-modal-image-transition")},disableImageTransition:function(){this.$set(this,"modalImageTransitionName","vue-lb-modal-image-no-transition")}}},n(2),r=o(r,i,[],!1,null,null,null);r.options.__file="src/components/LightBox.vue",e.default=r.exports}])},"6e25":function(t,e,n){}}]);