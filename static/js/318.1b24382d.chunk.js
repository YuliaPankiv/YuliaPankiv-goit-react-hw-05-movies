"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[318],{8318:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var r=n(9439),a=n(2791),c=n(7689),u=n(3243),s=n(5861),i=n(4687),o=n.n(i),l=n(184);function f(){var t=(0,a.useContext)(g).changeSlide;return(0,l.jsxs)("div",{className:"arrows",children:[(0,l.jsx)("div",{className:"arrow left",onClick:function(){return t(-1)}}),(0,l.jsx)("div",{className:"arrow right",onClick:function(){return t(1)}})]})}function h(t){var e=t.title;return(0,l.jsx)("div",{className:"slide-title",children:e})}function p(t){var e=t.src,n=t.alt;return(0,l.jsx)("img",{src:e,alt:n,className:"slide-image"})}function v(t){var e=t.data,n=e.profile_path,r=e.name,a=e.character;return(0,l.jsx)(l.Fragment,{children:n&&(0,l.jsxs)("div",{className:"slide",children:[(0,l.jsx)(p,{src:"https://image.tmdb.org/t/p/w200/".concat(n),alt:r,width:50}),(0,l.jsx)(h,{title:r}),(0,l.jsx)(h,{title:"Character: ".concat(a)})]})})}function d(){var t=(0,a.useContext)(g),e=t.slideNumber,n=t.items;return(0,l.jsx)("div",{className:"slide-list",style:{transform:"translateX(-".concat(100*e,"%)")},children:n&&n.map((function(t,e){return(0,l.jsx)(v,{data:t},e)}))})}function m(t){var e=t.number,n=(0,a.useContext)(g),r=n.goToSlide,c=n.slideNumber;return(0,l.jsx)("div",{className:"dot ".concat(c===e?"selected":""),onClick:function(){return r(e)}})}function x(){var t=(0,a.useContext)(g).slidesCount;return(0,l.jsx)("div",{className:"dots",children:function(){for(var e=[],n=0;n<t;n++)e.push((0,l.jsx)(m,{number:n},"dot-".concat(n)));return e}()})}var g=(0,a.createContext)(),w=function(t){var e=t.width,n=t.height,c=t.autoPlay,u=t.autoPlayTime,i=t.movie,h=(0,a.useState)([]),p=(0,r.Z)(h,2),v=p[0],m=p[1],w=(0,a.useState)(0),j=(0,r.Z)(w,2),y=j[0],b=j[1],k=(0,a.useState)(null),C=(0,r.Z)(k,2),N=C[0],Z=C[1],_=i.cast;(0,a.useEffect)((function(){if(_){var t=function(){var t=(0,s.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.filter((function(t){return t.profile_path}));case 2:e=t.sent,m(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[_]);var S=(0,a.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=0;e=y+t<0?v.length-1:(y+t)%v.length,b(e)}),[v.length,y]);return(0,a.useEffect)((function(){if(c){var t=setInterval((function(){S(1)}),u);return function(){clearInterval(t)}}}),[c,u,S,v.length,y]),(0,l.jsx)("div",{style:{width:e,height:n},className:"slider",onTouchStart:function(t){var e=t.touches[0].clientX;Z(e)},onTouchMove:function(t){if(null!==N){var e=t.touches[0].clientX,n=N-e;n>10&&S(1),n<-10&&S(-1),Z(null)}},children:(0,l.jsx)(g.Provider,{value:{goToSlide:function(t){b(t%v.length)},changeSlide:S,slidesCount:v.length,slideNumber:y,items:v},children:v.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{}),(0,l.jsx)(d,{}),(0,l.jsx)(x,{})]})})})};w.defaultProps={autoPlay:!1,autoPlayTime:3e3,width:"100%",height:"100%"};var j=w;var y=function(){var t=(0,c.UO)().id,e=(0,a.useState)([]),n=(0,r.Z)(e,2),s=n[0],i=n[1];(0,a.useEffect)((function(){(0,u.zv)(t).then(i)}),[t]);var o=s.cast;return(0,l.jsx)(l.Fragment,{children:o&&(0,l.jsx)(j,{movie:s})})}},3243:function(t,e,n){n.d(e,{Df:function(){return s},Pg:function(){return o},Pt:function(){return f},tx:function(){return d},zv:function(){return p}});var r=n(5861),a=n(4687),c=n.n(a),u=n(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"c5d5f3c7e995d560efb7f68509bca849",language:"en-US",page:"1"}});function s(){return i.apply(this,arguments)}function i(){return i=(0,r.Z)(c().mark((function t(){var e,n,r,a,s=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:1,n="trending/all/day",t.prev=2,t.next=5,u.get("".concat(n),{params:{page:e}});case 5:return r=t.sent,a=r.data,console.log(a),t.abrupt("return",a);case 11:throw t.prev=11,t.t0=t.catch(2),t.t0;case 14:case"end":return t.stop()}}),t,null,[[2,11]])}))),i.apply(this,arguments)}function o(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e),t.prev=1,t.next=4,u.get(n);case 4:return r=t.sent,a=r.data,console.log(a),t.abrupt("return",a);case 10:throw t.prev=10,t.t0=t.catch(1),t.t0;case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/search/movie?query=".concat(e),t.prev=1,t.next=4,u.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function p(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/credits"),t.prev=1,t.next=4,u.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/reviews"),t.prev=1,t.next=4,u.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=318.1b24382d.chunk.js.map