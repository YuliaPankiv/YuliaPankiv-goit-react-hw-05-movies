"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[184],{5184:function(t,e,r){r.r(e);var n=r(9439),a=r(2791),c=r(7689),u=r(3243),s=r(184);e.default=function(){var t=(0,c.UO)().id,e=(0,a.useState)([]),r=(0,n.Z)(e,2),i=r[0],o=r[1];(0,a.useEffect)((function(){(0,u.tx)(t).then(o)}),[t]);var p=i.results;return(0,s.jsx)(s.Fragment,{children:(null===p||void 0===p?void 0:p.length)>0?p.map((function(t){var e=t.author,r=t.content,n=t.id;return(0,s.jsxs)("div",{children:[(0,s.jsxs)("h5",{children:["Author: ",e]}),(0,s.jsx)("p",{children:r})]},n)})):(0,s.jsx)("p",{children:"There are currently no reviews for this film."})})}},3243:function(t,e,r){r.d(e,{Df:function(){return s},Pg:function(){return o},Pt:function(){return f},tx:function(){return d},zv:function(){return l}});var n=r(5861),a=r(4687),c=r.n(a),u=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"c5d5f3c7e995d560efb7f68509bca849",language:"en-US",page:"1"}});function s(){return i.apply(this,arguments)}function i(){return i=(0,n.Z)(c().mark((function t(){var e,r,n,a,s=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:1,r="trending/all/day",t.prev=2,t.next=5,u.get("".concat(r),{params:{page:e}});case 5:return n=t.sent,a=n.data,console.log(a),t.abrupt("return",a);case 11:throw t.prev=11,t.t0=t.catch(2),t.t0;case 14:case"end":return t.stop()}}),t,null,[[2,11]])}))),i.apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e),t.prev=1,t.next=4,u.get(r);case 4:return n=t.sent,a=n.data,console.log(a),t.abrupt("return",a);case 10:throw t.prev=10,t.t0=t.catch(1),t.t0;case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/search/movie?query=".concat(e),t.prev=1,t.next=4,u.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/credits"),t.prev=1,t.next=4,u.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function d(t){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/reviews"),t.prev=1,t.next=4,u.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=184.fda70fb3.chunk.js.map