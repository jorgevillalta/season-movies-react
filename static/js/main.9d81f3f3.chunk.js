(window["webpackJsonpseason-movies-react"]=window["webpackJsonpseason-movies-react"]||[]).push([[0],{123:function(e,t,n){e.exports=n(167)},167:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(12),c=n.n(a),i=n(35),s=n(13),u=n(15),l=n(48),p=n(171),f=n(28),O=n(172),m=n(10);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1?arguments[1]:void 0,o=t[r.type];return o?o(n,r):n}},v=function(e,t){return d({type:e},t)},E=function(e,t,n){return function(r){return r(v("".concat(e,"_START"),{request:n})),t(n).then((function(t){return r(v("".concat(e,"_SUCCESS"),{response:t}))})).catch((function(t){return r(v("".concat(e,"_ERROR"),{error:t}))}))}},j={isLoading:!1,response:null,request:null},y=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j,o=function(e,t){return d({},e,{isLoading:!0,request:t.request})},a=function(e,t){return d({},e,{isLoading:!1,response:t.response})},c=function(e,t){return d({},e,{isLoading:!1,error:t.error})};return g(r,d((t={},Object(m.a)(t,"".concat(e,"_START"),o),Object(m.a)(t,"".concat(e,"_SUCCESS"),a),Object(m.a)(t,"".concat(e,"_ERROR"),c),t),n))},w=n(17),h=n.n(w),_=n(30);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var S=Object({NODE_ENV:"production",PUBLIC_URL:"/season-movies-react",REACT_APP_MOVIE_DB_API_KEY:"33ef91cd9e22b07296ac1826b0c0c4a9",REACT_APP_MOVIE_DB_BASE_URL:"https://api.themoviedb.org/3",REACT_APP_MOVIE_IMAGE_BASE_URL:"https://image.tmdb.org/t/p/w"}),D=S.REACT_APP_MOVIE_DB_API_KEY,I=S.REACT_APP_MOVIE_DB_BASE_URL,M=function(e,t){var n="".concat(I).concat(e,"?api_key=").concat(D,"&language=en-US");return t&&Object.keys(t).forEach((function(e){return n+="&".concat(e,"=").concat(t[e])})),n},L=function(e){return fetch(e).then((function(e){return e.json().then((function(t){return e.ok?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t):Promise.reject(t)}))}))},C=function(){var e=Object(_.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.movieId,r=M("/movie/".concat(n)),e.abrupt("return",L(r));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(_.a)(h.a.mark((function e(t){var n,r,o,a,c,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.date,r=void 0===n?new Date:n,o=t.page,a=void 0===o?1:o,r instanceof Date){e.next=3;break}return e.abrupt("return",Promise.reject("incorrect date object"));case 3:return(c=new Date(r.getTime())).setMonth(r.getMonth()-1),i=M("/discover/movie",{page:a,language:"en-US",region:"US",sort_by:"popularity.desc",include_adult:!1,"primary_release_date.gte":c.toISOString().split("T")[0],"primary_release_date.lte":r.toISOString().split("T")[0]}),e.abrupt("return",L(i));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return E("GET_MOVIES",x,{date:e,page:t,reset:n})},T=n(29);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300;return"".concat("https://image.tmdb.org/t/p/w").concat(e)},V=function(e){return e?Object(T.a)(e.results.map((function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return R({},e,{backdrop_path:e.backdrop_path&&"".concat(B(t)).concat(e.backdrop_path),poster_path:e.poster_path&&"".concat(B(t)).concat(e.poster_path)})}(e)})).sort((function(e,t){return t.popularity-e.popularity}))):null};function N(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  justify-content: space-between;\n  align-content: stretch;\n  align-items: flex-start;\n\n  & > * {\n    margin: 6px;\n  }\n"]);return N=function(){return e},e}var G=s.c.div(N());var U=function(e){var t=e.isLoading,n=e.children;return t?o.a.createElement(p.o,{size:50,value:null}):n||null},F=n(69),Y=n(22),q=n(1);var H,W=(H=s.c.div.withConfig({displayName:"MoviePoster",componentId:"sc-1ltn66a-0"})(["display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-content:stretch;align-items:center;cursor:pointer;max-width:",";& > *{margin-bottom:2px;}"],(function(e){return e.maxWidth||"100%"})),function(e){return r.createElement(H,Object.assign({className:e.loading&&q.a.SKELETON},e))}),K=s.c.img.withConfig({displayName:"MoviePoster__Image",componentId:"sc-1ltn66a-1"})(["max-width:100%;"]),J=Object(s.c)((function(e){var t=Object(F.a)({},e);return r.createElement(p.p,Object.assign({fill:!0,intent:Y.a.PRIMARY},t))})).withConfig({displayName:"MoviePoster__Title",componentId:"sc-1ltn66a-2"})([""]);W.Image=K,W.Title=J;var $=W,z=function(e){var t=e.movie,n=e.onClick;return o.a.createElement($,{onClick:n,maxWidth:"300px"},o.a.createElement($.Image,{src:t.poster_path}),o.a.createElement($.Title,null,t.title))},Q=function(e){var t=e.movie,n=Object(u.c)(),a=Object(r.useCallback)((function(){return n({type:"OPEN_MOVIE_MODAL",movieId:t.id})}),[n,t.id]);return o.a.createElement(z,{movie:t,onClick:a})},X=function(e){var t=e.movies,n=e.isLoading;return o.a.createElement(G,null,t&&t.map((function(e){return o.a.createElement(Q,{movie:e,key:e.id})})),o.a.createElement(U,{isLoading:n}))};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ee,te=Object(s.c)(p.b).withConfig({displayName:"MovieModal__StyledDialog",componentId:"sc-1d4f9nh-0"})([""]),ne=function(e){return e=e||{},Object(r.useMemo)((function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{date:e.release_date&&new Date(e.release_date).toLocaleDateString()||"",genres:e.genres?e.genres.map((function(e){return e.name})).join(", "):"",budget:e.budget&&"$".concat(e.budget.toLocaleString())||"(unknown)"})}),[e])},re=function(){var e=Object(u.c)(),t=Object(u.d)((function(e){return{isOpen:e.movieBrowser.movieModal.isOpen||!1,movieId:e.movieBrowser.movieModal.movieId,isLoading:e.movieBrowser.movieDetails.isLoading||!1,response:e.movieBrowser.movieDetails.response}}),u.b),n=t.isOpen,a=t.movieId,c=t.isLoading,i=t.response;Object(r.useEffect)((function(){a&&e(function(e){return E("GET_MOVIE_DETAILS",C,{movieId:e})}(a))}),[e,a]);var s=ne(i),l=s.title,f=s.date,O=s.genres,m=s.overview,b=s.popularity,d=s.budget,g=Object(r.useCallback)((function(){e({type:"CLOSE_MOVIE_MODAL"})}),[e]);return o.a.createElement(te,{title:null,onClose:g,isOpen:n},o.a.createElement("div",{className:q.a.DIALOG_BODY},o.a.createElement(U,{isLoading:c},o.a.createElement(p.d,null,l),o.a.createElement(p.e,null,f),o.a.createElement(p.e,null,O),o.a.createElement("p",null,m),o.a.createElement("p",null,"Popularity: ",b),o.a.createElement("p",null,"Budget: ",d))))},oe=s.c.div.withConfig({displayName:"MoviePage__StyledContentDiv",componentId:"sc-1hx1xb2-0"})(["&&{margin-top:64px;}"]),ae=s.c.div.withConfig({displayName:"MoviePage__StyledGridDiv",componentId:"sc-1hx1xb2-1"})(["&&{display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-content:stretch;align-items:flex-start;& > *{margin:12px;}}"]),ce=function(){var e=Object(u.c)(),t=Object(r.useState)(1),n=Object(l.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(new Date("1983-06-13")),s=Object(l.a)(i,2),m=s[0],b=s[1],d=Object(u.d)((function(e){return e.movieBrowser.movieList})),g=d.response,v=d.isLoading,E=V(g);return Object(r.useEffect)((function(){e(A(m,1,!0))}),[e,m]),Object(r.useEffect)((function(){var t=function(){if(!v&&function(e){var t=e.document.documentElement.scrollHeight,n=e.document.documentElement.clientHeight;return(e.pageYOffset+n)/t}(window)>.8){var t=a+1;e(A(m,t)),c(t)}};return window.onscroll=t,function(){return window.removeEventListener("scroll",t)}}),[e,a,v,m]),o.a.createElement(o.a.Fragment,null,o.a.createElement(p.k,{fixedToTop:!0,className:"bp3-dark"},o.a.createElement(p.l,{align:f.a.LEFT},o.a.createElement(p.m,null,"Season Movies"))),o.a.createElement(oe,null,o.a.createElement("div",null),o.a.createElement(ae,null,o.a.createElement("div",null,o.a.createElement(O.a,{formatDate:function(e){return e.toLocaleDateString()},onChange:function(e,t){t&&b(new Date(e))},parseDate:function(e){return new Date(e)},placeholder:"D/M/YYYY",minDate:new Date("1902-01-01")})),o.a.createElement("div",null,o.a.createElement(X,{movies:E,isLoading:v})))),o.a.createElement(re,null))},ie=n(16),se=n(71),ue=n(72),le=n(73);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var fe,Oe=g({isOpen:!1,movieId:void 0},(ee={},Object(m.a)(ee,"OPEN_MOVIE_MODAL",(function(e,t){return{isOpen:!0,movieId:t.movieId}})),Object(m.a)(ee,"CLOSE_MOVIE_MODAL",(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{isOpen:!1})})),ee));function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de=function(e,t){var n=e.response?e.response.results:[];return be({},e,{isLoading:!1,response:be({},t.response,{results:[].concat(Object(T.a)(n),Object(T.a)(t.response.results))})})},ge=Object(ie.combineReducers)({movieModal:Oe,movieList:y("GET_MOVIES",(fe={},Object(m.a)(fe,"".concat("GET_MOVIES","_START"),(function(e,t){var n=e.response&&!t.request.reset?be({},e.response):void 0;return be({},e,{isLoading:!0,request:t.request,response:n})})),Object(m.a)(fe,"".concat("GET_MOVIES","_SUCCESS"),de),fe)),movieSearch:y("SEARCH_MOVIES",Object(m.a)({},"".concat("SEARCH_MOVIES","_SUCCESS"),de)),movieDetails:y("GET_MOVIE_DETAILS")}),ve=Object(ie.combineReducers)({movieBrowser:ge}),Ee=Object(ue.createLogger)(),je=Object(ie.createStore)(ve,void 0,Object(se.composeWithDevTools)(Object(ie.compose)(Object(ie.applyMiddleware)(le.a,Ee))));function ye(){var e=Object(i.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n  }\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n  }\n"]);return ye=function(){return e},e}var we=Object(s.b)(ye()),he={colors:{lightGray1:"#CED9E0",lightGray2:"#D8E1E8",lightGray3:"#E1E8ED",lightGray4:"#EBF1F5",lightGray5:"#F5F8FA"}};var _e=function(){return o.a.createElement(s.a,{theme:he},o.a.createElement(u.a,{store:je},o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,null),o.a.createElement(we,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(161),n(162),n(163),n(164),n(165),n(166);c.a.render(o.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[123,1,2]]]);
//# sourceMappingURL=main.9d81f3f3.chunk.js.map