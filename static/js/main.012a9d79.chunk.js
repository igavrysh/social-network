(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{127:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(34),a=n(5),c="SEND-MESSAGE",s={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"}]},o=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:11,message:t.newMessageBody};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},134:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1_En6",selectedPage:"users_selectedPage__1mnwI"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk"}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var r=n(132),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"3d1ff9da-8bc0-4533-ba31-4c93b3db5b95"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="users?page=".concat(e,"&count=").concat(t);return a.get(n).then((function(e){return e.data}))},follow:function(e){var t="follow/".concat(e);return a.post(t,{})},unfollow:function(e){var t="follow/".concat(e);return a.delete(t)}},s={getProfile:function(e){var t="profile/".concat(e);return a.get(t).then((function(e){return e.data}))},getStatus:function(e){var t="profile/status/".concat(e);return a.get(t).then((function(e){return e}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e}))}},o={me:function(){return a.get("auth/me")},login:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},168:function(e,t,n){},169:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(65),o=n.n(s),i=(n(168),n(36)),u=n(37),l=n(39),d=n(38),f=(n(169),n(18)),j=n(15),b=n.n(j);console.log(b.a);var p=function(){return Object(r.jsxs)("nav",{className:b.a.nav,children:[Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/profile",activeclassname:b.a.active,children:"Profile"})}),Object(r.jsx)("div",{className:"".concat(b.a.item),children:Object(r.jsx)(f.b,{to:"/dialogs",activeclassname:b.a.active,children:"Messages"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/users",activeclassname:b.a.active,children:"Users"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)("a",{href:"/dialogs",to:"/dialogs",activeclassname:b.a.active,children:"News"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)("a",{href:"/dialogs",to:"/dialogs",activeclassname:b.a.active,children:"Music"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)("a",{href:"/dialogs",to:"/dialogs",activeclassname:b.a.active,children:"Settings"})})]})},g=n(11),h=n(14),O=n(10),m=n.n(O),v=n(21),x=n(34),w=n(5),P=n(16),_=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)(Object(w.a)({},e),r):e}))},S="FOLLOW",y="UNFOLLOW",C="SET_USERS",E="SET_CURRENT_PAGE",I="SET_TOTAL_USERS_COUNT",k="TOGGLE_IS_FETCHING",N="TOGGLE_IS_FOLLOWING_PROGRESS",U={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},F=function(e){return{type:S,userId:e}},T=function(e){return{type:y,userId:e}},z=function(e){return{type:E,currentPage:e}},A=function(e){return{type:I,totalUsersCount:e}},L=function(e){return{type:k,isFetching:e}},M=function(e,t){return{type:N,isFetching:e,userId:t}},R=function(){var e=Object(v.a)(m.a.mark((function e(t,n,r,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(M(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(M(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(w.a)(Object(w.a)({},e),{},{users:_(e.users,t.userId,"id",{followed:!0})});case y:return Object(w.a)(Object(w.a)({},e),{},{users:_(e.users,t.userId,"id",{followed:!1})});case C:return Object(w.a)(Object(w.a)({},e),{},{users:Object(x.a)(t.users)});case E:return Object(w.a)(Object(w.a)({},e),{},{currentPage:t.currentPage});case I:return Object(w.a)(Object(w.a)({},e),{},{totalUsersCount:t.totalUsersCount});case k:return Object(w.a)(Object(w.a)({},e),{},{isFetching:t.isFetching});case N:return Object(w.a)(Object(w.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(x.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},G=n(53),B=n(68),H=n(129),V=n(70),W=n.n(V),K=n(133),X=n.n(K),Y=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,s=e.onPageChanged,o=e.portionSize,i=void 0===o?10:o,u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var f=Math.ceil(u/i),j=Object(a.useState)(1),b=Object(H.a)(j,2),p=b[0],g=b[1],h=(p-1)*i+1,O=p*i;return Object(r.jsxs)("div",{className:W.a.paginator,children:[p>1&&Object(r.jsx)("button",{onClick:function(){g(p-1)},children:"PREV"}),l.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(r.jsx)("span",{className:X()(Object(B.a)({},W.a.selectedPage,c===e),W.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),f>p&&Object(r.jsx)("button",{onClick:function(){g(p+1)},children:"NEXT"})]})},J=n(134),q=n.n(J),Z=n.p+"static/media/user_avatar.8ccdaafd.jpg",Q=function(e){var t=e.user,n=e.followingInProgress,a=e.follow,c=e.unfollow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:q.a.userPhoto,children:Object(r.jsx)(f.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:Z,alt:""})})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.city"})]})]})]})},$=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,c=e.onPageChanged,s=e.users,o=Object(G.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(Y,{currentPage:t,onPageChanged:c,totalItemsCount:n,pageSize:a}),Object(r.jsx)("div",{children:s.map((function(e){return Object(r.jsx)(Q,{user:e,followingInProgress:o.followingInProgress,follow:o.follow,unfollow:o.unfollow},e.id)}))})]})},ee=n(41),te=n(9),ne=n(135),re=Object(ne.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ae=function(e){return e.usersPage.pageSize},ce=function(e){return e.usersPage.totalUsersCount},se=function(e){return e.usersPage.currentPage},oe=function(e){return e.usersPage.isFetching},ie=function(e){return e.usersPage.followingInProgress},ue=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return console.log("RENDER USERS"),Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(ee.a,{}):null,Object(r.jsx)($,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),le=Object(te.d)(Object(h.b)((function(e){return{users:re(e),pageSize:ae(e),totalUsersCount:ce(e),currentPage:se(e),isFetching:oe(e),followingInProgress:ie(e)}}),{follow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=P.c.follow.bind(P.c),R(n,e,r,F);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=P.c.unfollow.bind(P.c),R(n,e,r,T);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:z,setTotalUsersCount:A,toggleIsFetching:L,toggleFollowingProgress:M,getUsers:function(e,t){return function(){var n=Object(v.a)(m.a.mark((function n(r){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(L(!0)),r(z(e)),n.next=4,P.c.getUsers(e,t);case 4:a=n.sent,r(L(!1)),r((c=a.items,{type:C,users:c})),r(A(a.totalCount));case 8:case"end":return n.stop()}var c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ue),de=n(94),fe=n.n(de),je=function(e){return Object(r.jsxs)("header",{className:fe.a.header,children:[Object(r.jsx)("img",{src:"https://s2.logaster.com/static/v3/img/products/logo.png",alt:""}),Object(r.jsx)("div",{className:fe.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(r.jsx)(f.b,{to:"/login",children:"Login"})})]})},be=n(45),pe="samurai-network/auth/SET_USER_DATA",ge={userId:null,email:null,login:null,isAuth:!1},he=function(e,t,n,r){return{type:pe,payload:{userId:e,email:t,login:n,isAuth:r}}},Oe=function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r,a,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,s=r.email,t(he(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return Object(w.a)(Object(w.a)({},e),t.payload);default:return e}},ve=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(je,Object(w.a)({},this.props))}}]),n}(c.a.Component),xe=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(he(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ve),we=n(128),Pe=n(75),_e=n(33),Se=n(54),ye=n.n(Se),Ce=Object(we.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(_e.a)("Email","email",[Pe.b],_e.b),Object(_e.a)("Password","password",[Pe.b],_e.b,{type:"password"}),Object(_e.a)(null,"rememberMe",[],_e.b,{type:"checkbox"},"rememberMe"),n&&Object(r.jsx)("div",{className:ye.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),Ee=Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(v.a)(m.a.mark((function r(a){var c,s;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,P.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(Oe()):(s=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(be.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(g.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(Ce,{onSubmit:function(t){console.log(t),e.login(t.email,t.password,t.rememberMe)}})]})})),Ie={initialized:!1},ke="INITIALIZED_SUCCESS",Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return Object(w.a)(Object(w.a)({},e),{},{initialized:!0});default:return e}},Ue=n(127),Fe=n(97),Te={},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;return e},Ae=n(137),Le=n(130),Me=Object(te.c)({profilePage:Fe.b,dialogsPage:Ue.a,sidebar:ze,usersPage:D,auth:me,form:Le.a,app:Ne}),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,De=Object(te.e)(Me,Re(Object(te.a)(Ae.a)));window.__store__=De;var Ge=De;window.store=De;var Be=function(e){return function(t){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(ee.a,{}),children:Object(r.jsx)(e,Object(w.a)({},t))})}},He=c.a.lazy((function(){return n.e(4).then(n.bind(null,296))})),Ve=c.a.lazy((function(){return n.e(3).then(n.bind(null,295))})),We=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(xe,{}),Object(r.jsx)(p,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(g.b,{path:"/dialogs",render:Be(He)}),Object(r.jsx)(g.b,{path:"/profile/:userId?",render:Be(Ve)}),Object(r.jsx)(g.b,{path:"/users",render:function(){return Object(r.jsx)(le,{})}}),Object(r.jsx)(g.b,{path:"/login",render:function(){return Object(r.jsx)(Ee,{})}})]})]}):Object(r.jsx)(ee.a,{})}}]),n}(a.Component),Ke=Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){Promise.all([e(Oe())]).then((function(){e({type:ke})}))}}})(We),Xe=function(e){return Object(r.jsx)(f.a,{children:Object(r.jsx)(h.a,{store:Ge,children:Object(r.jsx)(Ke,{})})})},Ye=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,294)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};o.a.render(Object(r.jsx)(Xe,{}),document.getElementById("root")),Ye()},33:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var r=n(5),a=n(53),c=n(1),s=(n(0),n(90)),o=n(54),i=n.n(o),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return Object(c.jsxs)("div",{className:i.a.formControl+" "+(s?i.a.error:""),children:[Object(c.jsx)("div",{children:a}),s&&Object(c.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(c.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(c.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(c.jsxs)("div",{children:[Object(c.jsx)(s.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},o)),i]})}},41:function(e,t,n){"use strict";var r=n(1),a=(n(0),n.p+"static/media/tenor.37a77721.gif");t.a=function(e){return Object(r.jsx)("div",{style:{backgroundColor:"white"},children:Object(r.jsx)("img",{src:a,alt:""})})}},54:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},70:function(e,t,n){e.exports={paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi",selectedPage:"Paginator_selectedPage__3SIki"}},75:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},94:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return m}));var r=n(10),a=n.n(r),c=n(21),s=n(34),o=n(5),i=n(16),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",f="DELETE_POST",j={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"Its my first post",likesCount:10}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},p=function(e){return{type:l,profile:e}},g=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getProfile(e);case 2:r=t.sent,n(p(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case l:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case d:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case f:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}}},[[289,1,2]]]);
//# sourceMappingURL=main.012a9d79.chunk.js.map