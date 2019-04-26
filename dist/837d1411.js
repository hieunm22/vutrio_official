!function(t){t.f[5]=function(e,n){Object.defineProperty(n,"__esModule",{value:!0});const r=t.r(25),i=t.r(24);n.default=class extends r.Component{constructor(){super(...arguments),this.state={active:2},this.data=[{img:"/assets/projects/factoryfinder.png",alt:"FactoryFinder (2017)",href:"https://www.factoryfinder.com"},{img:"/assets/projects/6kicks.png",alt:"6Kicks (2017)",href:"https://www.6kicks.com"},{img:"/assets/projects/talentmind.png",alt:"TalentMind (2018)",href:"https://talentmind.ai"},{img:"/assets/projects/bondecor.png",alt:"Bondecor (2019)",href:"https://www.bondecor.vn"},{img:"/assets/projects/tomo-relayer.png",alt:"TomoRelayer (2019)",href:"https://www.tomochain.com"}],this.onChangeImage=((t,e)=>{this.setState({active:t})}),this.toggleDetail=(t=>{console.log("detail for: ",t)}),this.reactSwipeEl=void 0}render(){const t=this.state.active,e=this.data[t].alt,n=e=>`swiper-image--container${e===t?" active":""}`;return r.createElement("div",null,r.createElement("h1",{className:"text-center"},e),r.createElement("div",null,r.createElement(i,{className:"project-swiper",swipeOptions:{continuous:!1,callback:this.onChangeImage},ref:t=>this.reactSwipeEl=t},this.data.map((t,e)=>r.createElement("div",{key:t.href,className:n(e)},r.createElement("img",{src:t.img}))))))}}},t.f[24]=function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=s(t.r(15)),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(t.r(25)),o=s(t.r(34)),a=s(t.r(10));function s(t){return t&&t.__esModule?t:{default:t}}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,f(e).apply(this,arguments))}var n,r,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,i.Component),n=e,(r=[{key:"componentDidMount",value:function(){this.swipe=(0,o.default)(this.containerEl,this.props.swipeOptions)}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.childCount,r=e.swipeOptions;(t.childCount!==n||!(0,a.default)(t.swipeOptions,r))&&(this.swipe.kill(),this.swipe=(0,o.default)(this.containerEl,this.props.swipeOptions))}},{key:"componentWillUnmount",value:function(){this.swipe.kill(),this.swipe=void 0}},{key:"next",value:function(){this.swipe.next()}},{key:"prev",value:function(){this.swipe.prev()}},{key:"slide",value:function(){var t;(t=this.swipe).slide.apply(t,arguments)}},{key:"getPos",value:function(){return this.swipe.getPos()}},{key:"getNumSlides",value:function(){return this.swipe.getNumSlides()}},{key:"render",value:function(){var t=this,e=this.props,n=e.id,r=e.className,o=e.style,a=e.children;return i.default.createElement("div",{id:n,ref:function(e){return t.containerEl=e},className:"react-swipe-container ".concat(r),style:o.container},i.default.createElement("div",{style:o.wrapper},i.default.Children.map(a,function(t){if(!t)return null;var e=t.props.style?function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){d(t,e,n[e])})}return t}({},o.child,t.props.style):o.child;return i.default.cloneElement(t,{style:e})})))}}])&&u(n.prototype,r),s&&u(n,s),e}();d(h,"propTypes",{swipeOptions:r.default.shape({startSlide:r.default.number,speed:r.default.number,auto:r.default.number,continuous:r.default.bool,disableScroll:r.default.bool,stopPropagation:r.default.bool,swiping:r.default.func,callback:r.default.func,transitionEnd:r.default.func}),style:r.default.shape({container:r.default.object,wrapper:r.default.object,child:r.default.object}),id:r.default.string,className:r.default.string,childCount:r.default.number}),d(h,"defaultProps",{swipeOptions:{},style:{container:{overflow:"hidden",visibility:"hidden",position:"relative"},wrapper:{overflow:"hidden",position:"relative"},child:{float:"left",width:"100%",position:"relative",transitionProperty:"transform"}},className:"",childCount:0});var v=h;n.default=v,e.exports=n.default},t.f[14]=function(t,e){t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},t.f[15]=function(e,n){e.exports=t.r(17)()},t.f[17]=function(e,n){var r=t.r(14);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function t(t,e,n,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},t.f[34]=function(t,e){var n,r;n=this,r=function(){return function(t,e){var n=function(){},r=function(t){setTimeout(t||n,0)},i={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,transitions:function(t){var e=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in e)if(void 0!==t.style[e[n]])return!0;return!1}(document.createElement("swipe"))};if(t){var o,a,s,c,u=t.children[0];e=e||{};var l,f,p=parseInt(e.startSlide,10)||0,d=e.speed||300,h=parseInt(e.widthOfSiblingSlidePreview,10)||0,v=e.continuous=void 0===e.continuous||e.continuous,y=e.auto||0,b={},_={},g={handleEvent:function(t){switch(t.type){case"touchstart":this.start(t);break;case"touchmove":this.move(t);break;case"touchend":r(this.end(t));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":r(this.transitionEnd(t));break;case"resize":r(m)}e.stopPropagation&&t.stopPropagation()},start:function(t){var e=t.touches[0];b={x:e.pageX,y:e.pageY,time:+new Date},f=void 0,_={},u.addEventListener("touchmove",this,!1),u.addEventListener("touchend",this,!1)},move:function(t){if(!(t.touches.length>1||t.scale&&1!==t.scale||e.disableScroll)){var n=t.touches[0];_={x:n.pageX-b.x,y:n.pageY-b.y},void 0===f&&(f=!!(f||Math.abs(_.x)<Math.abs(_.y))),f||(t.preventDefault(),T(),v?(x(j(p-1),_.x+a[j(p-1)],0),x(p,_.x+a[p],0),x(j(p+1),_.x+a[j(p+1)],0)):(_.x=_.x/(!p&&_.x>0||p==o.length-1&&_.x<0?Math.abs(_.x)/s+1:1),x(p-1,_.x+a[p-1],0),x(p,_.x+a[p],0),x(p+1,_.x+a[p+1],0)),e.swiping&&e.swiping(-_.x/s))}},end:function(t){var n=+new Date-b.time,r=Number(n)<250&&Math.abs(_.x)>20||Math.abs(_.x)>s/2,i=!p&&_.x>0||p==o.length-1&&_.x<0;v&&(i=!1);var c=_.x<0;f||(r&&!i?(c?(v?(O(j(p-1),-s,0),O(j(p+2),s,0)):O(p-1,-s,0),O(p,a[p]-s,d),O(j(p+1),a[j(p+1)]-s,d),p=j(p+1)):(v?(O(j(p+1),s,0),O(j(p-2),-s,0)):O(p+1,s,0),O(p,a[p]+s,d),O(j(p-1),a[j(p-1)]+s,d),p=j(p-1)),e.callback&&e.callback(p,o[p])):v?(O(j(p-1),-s,d),O(p,0,d),O(j(p+1),s,d)):(O(p-1,-s,d),O(p,0,d),O(p+1,s,d))),u.removeEventListener("touchmove",g,!1),u.removeEventListener("touchend",g,!1),u.removeEventListener("touchforcechange",function(){},!1)},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)==p&&(y&&k(),e.transitionEnd&&e.transitionEnd.call(t,p,o[p]))}};return m(),y&&k(),i.addEventListener?(i.touch&&(u.addEventListener("touchstart",g,!1),u.addEventListener("touchforcechange",function(){},!1)),i.transitions&&(u.addEventListener("webkitTransitionEnd",g,!1),u.addEventListener("msTransitionEnd",g,!1),u.addEventListener("oTransitionEnd",g,!1),u.addEventListener("otransitionend",g,!1),u.addEventListener("transitionend",g,!1)),window.addEventListener("resize",g,!1)):window.onresize=function(){m()},{setup:function(){m()},slide:function(t,e){T(),E(t,e)},prev:function(){T(),v?E(p-1):p&&E(p-1)},next:function(){T(),w()},stop:function(){T()},getPos:function(){return p},getNumSlides:function(){return c},kill:function(){T(),u.style.width="",u.style.left="";for(var t=o.length;t--;){var e=o[t];e.style.width="",e.style.left="",i.transitions&&x(t,0,0)}i.addEventListener?(u.removeEventListener("touchstart",g,!1),u.removeEventListener("webkitTransitionEnd",g,!1),u.removeEventListener("msTransitionEnd",g,!1),u.removeEventListener("oTransitionEnd",g,!1),u.removeEventListener("otransitionend",g,!1),u.removeEventListener("transitionend",g,!1),window.removeEventListener("resize",g,!1)):window.onresize=null}}}function m(){o=u.children,c=o.length,v=!(o.length<2)&&e.continuous,a=new Array(o.length),s=Math.round(t.getBoundingClientRect().width||t.offsetWidth)-2*h,u.style.width=o.length*s+"px";for(var n=o.length;n--;){var r=o[n];r.style.width=s+"px",r.setAttribute("data-index",n),i.transitions&&(r.style.left=n*-s+h+"px",O(n,p>n?-s:p<n?s:0,0))}v&&i.transitions&&(O(j(p-1),-s,0),O(j(p+1),s,0)),i.transitions||(u.style.left=p*-s+h+"px"),t.style.visibility="visible"}function w(){v?E(p+1):p<o.length-1&&E(p+1)}function j(t){return(o.length+t%o.length)%o.length}function E(t,n){if(p!=t){if(i.transitions){var c=Math.abs(p-t)/(p-t);if(v){var l=c;(c=-a[j(t)]/s)!==l&&(t=-c*o.length+t)}for(var f=Math.abs(p-t)-1;f--;)O(j((t>p?t:p)-f-1),s*c,0);t=j(t),O(p,s*c,n||d),O(t,0,n||d),v&&O(j(t-c),-s*c,0)}else t=j(t),function(t,n,r){if(!r)return void(u.style.left=n+"px");var i=+new Date,a=setInterval(function(){var s=+new Date-i;if(s>r)return u.style.left=n+"px",y&&k(),e.transitionEnd&&e.transitionEnd.call(event,p,o[p]),void clearInterval(a);u.style.left=(n-t)*(Math.floor(s/r*100)/100)+t+"px"},4)}(p*-s,t*-s,n||d);p=t,r(e.callback&&e.callback(p,o[p]))}}function O(t,e,n){x(t,e,n),a[t]=e}function x(t,e,n){var r=o[t],i=r&&r.style;i&&(i.webkitTransitionDuration=i.MozTransitionDuration=i.msTransitionDuration=i.OTransitionDuration=i.transitionDuration=n+"ms",i.webkitTransform="translate("+e+"px,0)translateZ(0)",i.msTransform=i.MozTransform=i.OTransform="translateX("+e+"px)")}function k(){clearTimeout(l),l=setTimeout(w,y)}function T(){y=0,clearTimeout(l)}}},t.exports?t.exports=r():n.Swipe=r()},t.f[10]=function(t,e){var n=200,r="__lodash_hash_undefined__",i=1,o=2,a=9007199254740991,s="[object Arguments]",c="[object Array]",u="[object AsyncFunction]",l="[object Boolean]",f="[object Date]",p="[object Error]",d="[object Function]",h="[object GeneratorFunction]",v="[object Map]",y="[object Number]",b="[object Null]",_="[object Object]",g="[object Proxy]",m="[object RegExp]",w="[object Set]",j="[object String]",E="[object Symbol]",O="[object Undefined]",x="[object ArrayBuffer]",k="[object DataView]",T=/^\[object .+?Constructor\]$/,P=/^(?:0|[1-9]\d*)$/,S={};S["[object Float32Array]"]=S["[object Float64Array]"]=S["[object Int8Array]"]=S["[object Int16Array]"]=S["[object Int32Array]"]=S["[object Uint8Array]"]=S["[object Uint8ClampedArray]"]=S["[object Uint16Array]"]=S["[object Uint32Array]"]=!0,S[s]=S[c]=S[x]=S[l]=S[k]=S[f]=S[p]=S[d]=S[v]=S[y]=S[_]=S[m]=S[w]=S[j]=S["[object WeakMap]"]=!1;var z="object"==typeof self&&self&&self.Object===Object&&self||Function("return this")(),L=e&&!e.nodeType&&e,A=L&&t&&!t.nodeType&&t,M=A&&A.exports===L,D=M&&(!1).process,C=function(){try{return D&&D.binding&&D.binding("util")}catch(t){}}(),I=C&&C.isTypedArray;function N(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function R(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function F(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}var U,W,$,B=Array.prototype,V=Function.prototype,X=Object.prototype,Y=z["__core-js_shared__"],q=V.toString,G=X.hasOwnProperty,H=(U=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",K=X.toString,Z=RegExp("^"+q.call(G).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),J=M?z.Buffer:void 0,Q=z.Symbol,tt=z.Uint8Array,et=X.propertyIsEnumerable,nt=B.splice,rt=Q?Q.toStringTag:void 0,it=Object.getOwnPropertySymbols,ot=J?J.isBuffer:void 0,at=(W=Object.keys,$=Object,function(t){return W($(t))}),st=Ct(z,"DataView"),ct=Ct(z,"Map"),ut=Ct(z,"Promise"),lt=Ct(z,"Set"),ft=Ct(z,"WeakMap"),pt=Ct(Object,"create"),dt=Ft(st),ht=Ft(ct),vt=Ft(ut),yt=Ft(lt),bt=Ft(ft),_t=Q?Q.prototype:void 0,gt=_t?_t.valueOf:void 0;function mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function jt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Et(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new jt;++e<n;)this.add(t[e])}function Ot(t){var e=this.__data__=new wt(t);this.size=e.size}function xt(t,e){var n=$t(t),r=!n&&Wt(t),i=!n&&!r&&Bt(t),o=!n&&!r&&!i&&Gt(t),a=n||r||i||o,s=a?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],c=s.length;for(var u in t)!e&&!G.call(t,u)||a&&("length"==u||i&&("offset"==u||"parent"==u)||o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||Rt(u,c))||s.push(u);return s}function kt(t,e){for(var n=t.length;n--;)if(Ut(t[n][0],e))return n;return-1}function Tt(t){return null==t?void 0===t?O:b:rt&&rt in Object(t)?function(t){var e=G.call(t,rt),n=t[rt];try{t[rt]=void 0;var r=!0}catch(t){}var i=K.call(t);r&&(e?t[rt]=n:delete t[rt]);return i}(t):function(t){return K.call(t)}(t)}function Pt(t){return qt(t)&&Tt(t)==s}function St(t,e,n,r,a){return t===e||(null==t||null==e||!qt(t)&&!qt(e)?t!=t&&e!=e:function(t,e,n,r,a,u){var d=$t(t),h=$t(e),b=d?c:Nt(t),g=h?c:Nt(e),O=(b=b==s?_:b)==_,T=(g=g==s?_:g)==_,P=b==g;if(P&&Bt(t)){if(!Bt(e))return!1;d=!0,O=!1}if(P&&!O)return u||(u=new Ot),d||Gt(t)?At(t,e,n,r,a,u):function(t,e,n,r,a,s,c){switch(n){case k:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case x:return!(t.byteLength!=e.byteLength||!s(new tt(t),new tt(e)));case l:case f:case y:return Ut(+t,+e);case p:return t.name==e.name&&t.message==e.message;case m:case j:return t==e+"";case v:var u=R;case w:var d=r&i;if(u||(u=F),t.size!=e.size&&!d)return!1;var h=c.get(t);if(h)return h==e;r|=o,c.set(t,e);var b=At(u(t),u(e),r,a,s,c);return c.delete(t),b;case E:if(gt)return gt.call(t)==gt.call(e)}return!1}(t,e,b,n,r,a,u);if(!(n&i)){var S=O&&G.call(t,"__wrapped__"),z=T&&G.call(e,"__wrapped__");if(S||z){var L=S?t.value():t,A=z?e.value():e;return u||(u=new Ot),a(L,A,n,r,u)}}if(!P)return!1;return u||(u=new Ot),function(t,e,n,r,o,a){var s=n&i,c=Mt(t),u=c.length,l=Mt(e).length;if(u!=l&&!s)return!1;for(var f=u;f--;){var p=c[f];if(!(s?p in e:G.call(e,p)))return!1}var d=a.get(t);if(d&&a.get(e))return d==e;var h=!0;a.set(t,e),a.set(e,t);for(var v=s;++f<u;){p=c[f];var y=t[p],b=e[p];if(r)var _=s?r(b,y,p,e,t,a):r(y,b,p,t,e,a);if(!(void 0===_?y===b||o(y,b,n,r,a):_)){h=!1;break}v||(v="constructor"==p)}if(h&&!v){var g=t.constructor,m=e.constructor;g!=m&&"constructor"in t&&"constructor"in e&&!("function"==typeof g&&g instanceof g&&"function"==typeof m&&m instanceof m)&&(h=!1)}return a.delete(t),a.delete(e),h}(t,e,n,r,a,u)}(t,e,n,r,St,a))}function zt(t){return!(!Yt(t)||(e=t,H&&H in e))&&(Vt(t)?Z:T).test(Ft(t));var e}function Lt(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||X,e!==r)return at(t);var e,n,r,i=[];for(var o in Object(t))G.call(t,o)&&"constructor"!=o&&i.push(o);return i}function At(t,e,n,r,a,s){var c=n&i,u=t.length,l=e.length;if(u!=l&&!(c&&l>u))return!1;var f=s.get(t);if(f&&s.get(e))return f==e;var p=-1,d=!0,h=n&o?new Et:void 0;for(s.set(t,e),s.set(e,t);++p<u;){var v=t[p],y=e[p];if(r)var b=c?r(y,v,p,e,t,s):r(v,y,p,t,e,s);if(void 0!==b){if(b)continue;d=!1;break}if(h){if(!N(e,function(t,e){if(i=e,!h.has(i)&&(v===t||a(v,t,n,r,s)))return h.push(e);var i})){d=!1;break}}else if(v!==y&&!a(v,y,n,r,s)){d=!1;break}}return s.delete(t),s.delete(e),d}function Mt(t){return function(t,e,n){var r=e(t);return $t(t)?r:function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}(r,n(t))}(t,Ht,It)}function Dt(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function Ct(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return zt(n)?n:void 0}mt.prototype.clear=function(){this.__data__=pt?pt(null):{},this.size=0},mt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},mt.prototype.get=function(t){var e=this.__data__;if(pt){var n=e[t];return n===r?void 0:n}return G.call(e,t)?e[t]:void 0},mt.prototype.has=function(t){var e=this.__data__;return pt?void 0!==e[t]:G.call(e,t)},mt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=pt&&void 0===e?r:e,this},wt.prototype.clear=function(){this.__data__=[],this.size=0},wt.prototype.delete=function(t){var e=this.__data__,n=kt(e,t);return!(n<0||(n==e.length-1?e.pop():nt.call(e,n,1),--this.size,0))},wt.prototype.get=function(t){var e=this.__data__,n=kt(e,t);return n<0?void 0:e[n][1]},wt.prototype.has=function(t){return kt(this.__data__,t)>-1},wt.prototype.set=function(t,e){var n=this.__data__,r=kt(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},jt.prototype.clear=function(){this.size=0,this.__data__={hash:new mt,map:new(ct||wt),string:new mt}},jt.prototype.delete=function(t){var e=Dt(this,t).delete(t);return this.size-=e?1:0,e},jt.prototype.get=function(t){return Dt(this,t).get(t)},jt.prototype.has=function(t){return Dt(this,t).has(t)},jt.prototype.set=function(t,e){var n=Dt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},Et.prototype.add=Et.prototype.push=function(t){return this.__data__.set(t,r),this},Et.prototype.has=function(t){return this.__data__.has(t)},Ot.prototype.clear=function(){this.__data__=new wt,this.size=0},Ot.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Ot.prototype.get=function(t){return this.__data__.get(t)},Ot.prototype.has=function(t){return this.__data__.has(t)},Ot.prototype.set=function(t,e){var r=this.__data__;if(r instanceof wt){var i=r.__data__;if(!ct||i.length<n-1)return i.push([t,e]),this.size=++r.size,this;r=this.__data__=new jt(i)}return r.set(t,e),this.size=r.size,this};var It=it?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a)}return o}(it(t),function(e){return et.call(t,e)}))}:function(){return[]},Nt=Tt;function Rt(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||P.test(t))&&t>-1&&t%1==0&&t<e}function Ft(t){if(null!=t){try{return q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ut(t,e){return t===e||t!=t&&e!=e}(st&&Nt(new st(new ArrayBuffer(1)))!=k||ct&&Nt(new ct)!=v||ut&&"[object Promise]"!=Nt(ut.resolve())||lt&&Nt(new lt)!=w||ft&&"[object WeakMap]"!=Nt(new ft))&&(Nt=function(t){var e=Tt(t),n=e==_?t.constructor:void 0,r=n?Ft(n):"";if(r)switch(r){case dt:return k;case ht:return v;case vt:return"[object Promise]";case yt:return w;case bt:return"[object WeakMap]"}return e});var Wt=Pt(function(){return arguments}())?Pt:function(t){return qt(t)&&G.call(t,"callee")&&!et.call(t,"callee")},$t=Array.isArray;var Bt=ot||function(){return!1};function Vt(t){if(!Yt(t))return!1;var e=Tt(t);return e==d||e==h||e==u||e==g}function Xt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function Yt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function qt(t){return null!=t&&"object"==typeof t}var Gt=I?function(t){return function(e){return t(e)}}(I):function(t){return qt(t)&&Xt(t.length)&&!!S[Tt(t)]};function Ht(t){return null!=(e=t)&&Xt(e.length)&&!Vt(e)?xt(t):Lt(t);var e}t.exports=function(t,e){return St(t,e)}}}($fsx);