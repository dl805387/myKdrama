(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},61:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var c=a(3),s=a.n(c),n=a(42),i=a.n(n),r=(a(49),a(9)),l=(a(50),a(25)),o=a(11),d=(a(51),a(32)),j=d.a.initializeApp({apiKey:"AIzaSyAOPofQdhnNr7m71shZHs9t4TPpwa5-A-8",authDomain:"mykdrama-9be57.firebaseapp.com",projectId:"mykdrama-9be57",storageBucket:"mykdrama-9be57.appspot.com",messagingSenderId:"586699840037",appId:"1:586699840037:web:1138081ab56927c9f33dcc",measurementId:"G-FB6SGSGKVK"});d.a.analytics();var h=j,u=a(22),b=a(24),m=a(43);u.b.add(b.a,b.d,b.f,b.c,b.b,m.a,b.e);var p=a(14),O=(a(61),a(2));var g=function(e){var t=e.email,a=e.setEmail,c=e.password,s=e.setPassword,n=e.handleLogin,i=e.handleSignup,r=e.hasAccount,l=e.setHasAccount,o=e.emailError,d=e.passwordError,j=e.clearErrors,h=e.clearInputs,u=e.setLoginPopup;return Object(O.jsxs)("div",{className:"loginPopup",children:[Object(O.jsx)(p.a,{icon:["far","times-circle"],size:"4x",className:"exit",onClick:function(e){e.preventDefault(),u(!1),j(),h()}}),Object(O.jsxs)("div",{className:"loginSection",children:[Object(O.jsx)("h2",{className:"loginTitle",children:"Login"}),Object(O.jsxs)("div",{className:"bottomSpace",children:[Object(O.jsx)("label",{className:"loginLabel",children:"Username"}),Object(O.jsxs)("div",{className:"loginPassword",children:[Object(O.jsx)(p.a,{icon:"user",size:"2x",className:"loginIcon"}),Object(O.jsx)("input",{className:"loginInput",type:"text",placeholder:"pseudo email address",autoFocus:!0,required:!0,value:t,onChange:function(e){a(e.target.value)}})]}),Object(O.jsx)("p",{className:"error",children:o})]}),Object(O.jsx)("label",{className:"loginLabel",children:"Password"}),Object(O.jsxs)("div",{className:"loginPassword",children:[Object(O.jsx)(p.a,{icon:"lock",size:"2x",className:"loginIcon"}),Object(O.jsx)("input",{className:"loginInput",type:"password",placeholder:"at least 6 characters",required:!0,value:c,onChange:function(e){s(e.target.value)}})]}),Object(O.jsx)("p",{className:"error",children:d}),Object(O.jsx)("div",{children:r?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{className:"signBtn",onClick:n,children:"Sign In"}),Object(O.jsxs)("p",{className:"loginMessage",children:["Don't have an account ? ",Object(O.jsx)("span",{className:"signLabel",onClick:function(){l(!r),j(),h()},children:"Sign Up"})]})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{className:"signBtn",onClick:i,children:"Sign Up"}),Object(O.jsxs)("p",{className:"loginMessage",children:["Have an account ? ",Object(O.jsx)("span",{className:"signLabel",onClick:function(){l(!r),j(),h()},children:"Sign In"})]})]})})]})]})},f=a(21).default;var x=function(){var e=Object(o.f)(),t=Object(c.useState)(""),a=Object(r.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(""),l=Object(r.a)(i,2),d=l[0],j=l[1],u=Object(c.useState)(""),b=Object(r.a)(u,2),m=b[0],x=b[1],v=Object(c.useState)(""),N=Object(r.a)(v,2),k=N[0],w=N[1],I=Object(c.useState)(""),D=Object(r.a)(I,2),S=D[0],_=D[1],y=Object(c.useState)(!1),C=Object(r.a)(y,2),T=C[0],E=C[1],L=Object(c.useState)(!1),P=Object(r.a)(L,2),W=P[0],z=P[1],A=function(){j(""),x("")},F=function(){w(""),_("")},B=function(t){t&&""!==t&&f.post("https://mykdrama.herokuapp.com/getUserID",{username:t}).then((function(t){t.data[0]&&localStorage.setItem("userID",t.data[0].userID),e.push("/home")}))};return Object(c.useEffect)((function(){h.auth().onAuthStateChanged((function(e){e?(A(),n(e)):n("")}))}),[]),Object(c.useEffect)((function(){s&&""!==s&&f.post("https://mykdrama.herokuapp.com/getUserID",{username:s.email}).then((function(e){e.data[0]&&localStorage.setItem("userID",e.data[0].userID)}))}),[s]),Object(O.jsx)("div",{className:"header",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{onClick:function(t){t.preventDefault(),e.push("/home")},children:Object(O.jsx)(p.a,{icon:"home",size:"2x",className:"homeIcon"})}),Object(O.jsx)("li",{onClick:function(t){t.preventDefault(),e.push("/search")},children:Object(O.jsx)("p",{children:"Search"})}),Object(O.jsx)("li",{onClick:function(t){t.preventDefault(),e.push("/myKdrama")},children:Object(O.jsx)("p",{children:"myKdrama"})}),s?Object(O.jsx)("li",{className:"loginNav",onClick:function(){h.auth().signOut(),localStorage.clear(),e.push("/home"),window.scrollTo(0,0)},children:Object(O.jsx)("p",{children:"Logout"})}):Object(O.jsx)("li",{className:"loginNav",onClick:function(e){e.preventDefault(),z(!0)},children:Object(O.jsx)("p",{children:"Login"})}),W&&Object(O.jsx)(g,{email:d,setEmail:j,password:m,setPassword:x,handleLogin:function(){F();var e=!1;h.auth().signInWithEmailAndPassword(d,m).catch((function(t){switch(e=!0,t.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":w(t.message);break;case"auth/wrong-password":_(t.message)}})).then((function(){e||z(!1),B(d)}))},handleSignup:function(){F();var e=!1;h.auth().createUserWithEmailAndPassword(d,m).catch((function(t){switch(e=!0,t.code){case"auth/email-already-in-use":case"auth/invalid-email":w(t.message);break;case"auth/weak-password":_(t.message)}})).then((function(){e||f.post("https://mykdrama.herokuapp.com/addUser",{username:d}).then((function(){z(!1),B(d)}))}))},hasAccount:T,setHasAccount:E,emailError:k,passwordError:S,clearErrors:F,clearInputs:A,setLoginPopup:z})]})})};a(82);var v=function(){return Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsx)("p",{children:"Created by Danny Lin"}),Object(O.jsx)("p",{children:"K-drama data from The Movie Database API"}),Object(O.jsx)("p",{children:Object(O.jsx)("a",{href:"https://github.com/dl805387/myKdrama",target:"_blank",children:"Github"})})]})};a(83);var N=function(e){var t=Object(o.f)(),a=e.result,c=e.reco;return Object(O.jsxs)("div",{className:"tvShow",onClick:function(){localStorage.setItem("showID",a.id),t.push("/detail/"+a.name.replace(/\s/g,""))},children:[Object(O.jsx)("img",{className:c?"recoPic":"showPic",src:"https://image.tmdb.org/t/p/w500"+a.poster_path,alt:a.name}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("p",{className:"showTitle",children:a.name}),Object(O.jsxs)("p",{className:"infoBody",children:["First Air Date: ",a.first_air_date]}),Object(O.jsxs)("p",{className:"infoBody",children:["User Rating: ",a.vote_average," /10"]}),Object(O.jsxs)("div",{className:"starRatings",children:[Object(O.jsxs)("div",{className:"starRatingsTop",style:{width:parseFloat((10*a.vote_average).toFixed(2))+"%"},children:[Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"})]}),Object(O.jsxs)("div",{className:"starRatingsBottom",children:[Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"})]})]}),Object(O.jsx)("p",{className:c?"noFooter":"infoFooter",children:"Click for more detail!"})]})]})},k=(a(84),a(21).default);var w=function(){var e=Object(c.useState)(1),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),i=Object(r.a)(n,2),l=i[0],o=i[1],d=function(e){k.get("https://api.themoviedb.org/3/discover/tv?api_key=2c3c49c8f9892c1b17ebf32c4b74bed0&language=en-US&sort_by=popularity.desc&page="+e+"&with_genres=18&include_null_first_air_dates=false&with_original_language=ko&with_watch_monetization_types=flatrate").then((function(t){var a=t.data.results.filter((function(e){return"ko"===e.original_language&&null!==e.poster_path}));o(a),s(e)}))},j=function(e){return e===a?"pageBtn currPage":"pageBtn"};return Object(c.useEffect)((function(){window.scrollTo(0,0),d(1)}),[]),Object(c.useEffect)((function(){window.scrollTo(0,0)}),[a]),Object(O.jsxs)("div",{className:"homePage",children:[Object(O.jsxs)("div",{className:"pagesSection forMobile",children:[Object(O.jsx)("button",{className:j(1),onClick:function(e){e.preventDefault(),d(1)},children:"1"}),Object(O.jsx)("button",{className:j(2),onClick:function(e){e.preventDefault(),d(2)},children:"2"}),Object(O.jsx)("button",{className:j(3),onClick:function(e){e.preventDefault(),d(3)},children:"3"}),Object(O.jsx)("button",{className:j(4),onClick:function(e){e.preventDefault(),d(4)},children:"4"}),Object(O.jsx)("button",{className:j(5),onClick:function(e){e.preventDefault(),d(5)},children:"5"}),Object(O.jsx)("button",{className:j(6)+" btnEnd",onClick:function(e){e.preventDefault(),d(6)},children:"6"}),Object(O.jsx)("button",{className:j(7)+" btnEnd",onClick:function(e){e.preventDefault(),d(7)},children:"7"}),Object(O.jsx)("button",{className:j(8)+" btnEnd",onClick:function(e){e.preventDefault(),d(8)},children:"8"}),Object(O.jsx)("button",{className:j(9)+" btnLast",onClick:function(e){e.preventDefault(),d(9)},children:"9"})]}),Object(O.jsx)("div",{className:"tvShows",children:0!==l.length&&l.map((function(e){return Object(O.jsx)(N,{result:e},e.id)}))}),Object(O.jsxs)("div",{className:"pagesSection",children:[Object(O.jsx)("button",{className:j(1),onClick:function(e){e.preventDefault(),d(1)},children:"1"}),Object(O.jsx)("button",{className:j(2),onClick:function(e){e.preventDefault(),d(2)},children:"2"}),Object(O.jsx)("button",{className:j(3),onClick:function(e){e.preventDefault(),d(3)},children:"3"}),Object(O.jsx)("button",{className:j(4),onClick:function(e){e.preventDefault(),d(4)},children:"4"}),Object(O.jsx)("button",{className:j(5),onClick:function(e){e.preventDefault(),d(5)},children:"5"}),Object(O.jsx)("button",{className:j(6)+" btnEnd",onClick:function(e){e.preventDefault(),d(6)},children:"6"}),Object(O.jsx)("button",{className:j(7)+" btnEnd",onClick:function(e){e.preventDefault(),d(7)},children:"7"}),Object(O.jsx)("button",{className:j(8)+" btnEnd",onClick:function(e){e.preventDefault(),d(8)},children:"8"}),Object(O.jsx)("button",{className:j(9)+" btnLast",onClick:function(e){e.preventDefault(),d(9)},children:"9"})]})]})},I=(a(85),a(21).default);var D=function(e){var t=Object(c.useState)({}),a=Object(r.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)([]),l=Object(r.a)(i,2),o=l[0],d=l[1],j=Object(c.useState)(!1),h=Object(r.a)(j,2),u=h[0],b=h[1],m=Object(c.useState)("notValid"),g=Object(r.a)(m,2),f=g[0],x=g[1],v=Object(c.useState)("notValid"),k=Object(r.a)(v,2),w=k[0],D=k[1],S=Object(c.useState)(!1),_=Object(r.a)(S,2),y=_[0],C=_[1];Object(c.useEffect)((function(){localStorage.getItem("userID")&&"0"!==localStorage.getItem("userID")&&C(!0),window.scrollTo(0,0),I.get("https://api.themoviedb.org/3/tv/"+localStorage.getItem("showID")+"?api_key=2c3c49c8f9892c1b17ebf32c4b74bed0&language=en-US").then((function(e){n(e.data),T(e.data),E(e.data)})),I.get("https://api.themoviedb.org/3/tv/"+localStorage.getItem("showID")+"/recommendations?api_key=2c3c49c8f9892c1b17ebf32c4b74bed0&language=en-US&page=1").then((function(e){var t=e.data.results.filter((function(e){return"ko"===e.original_language&&null!==e.poster_path}));d(t),0===t.length&&b(!0)}))}),[e.location]);var T=function(e){I.post("https://mykdrama.herokuapp.com/existWatched",{userID:localStorage.getItem("userID"),showID:e.id}).then((function(e){var t;for(var a in e.data[0]){t=e.data[0][a];break}0===t&&x("valid")}))},E=function(e){I.post("https://mykdrama.herokuapp.com/existWatchlater",{userID:localStorage.getItem("userID"),showID:e.id}).then((function(e){var t;for(var a in e.data[0]){t=e.data[0][a];break}0===t&&D("valid")}))};return Object(O.jsx)("div",{children:s!=={}&&Object(O.jsxs)("div",{className:"detailPage",children:[Object(O.jsxs)("div",{className:"detailUpper",children:[Object(O.jsxs)("div",{className:"detailBody",children:[Object(O.jsx)("p",{className:"detailTitle",children:s.name}),s.poster_path&&Object(O.jsx)("img",{className:"poster",src:"https://image.tmdb.org/t/p/w200"+s.poster_path,alt:s.name}),Object(O.jsx)("p",{className:"bodyText",children:s.original_name}),Object(O.jsx)("p",{className:"bodyText",children:s.first_air_date}),Object(O.jsxs)("div",{className:"detailRating",children:[Object(O.jsxs)("p",{className:"vote",children:[s.vote_average,"/10"]}),Object(O.jsxs)("div",{className:"starRatings",children:[Object(O.jsxs)("div",{className:"starRatingsTop",style:{width:parseFloat((10*s.vote_average).toFixed(2))+"%"},children:[Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"})]}),Object(O.jsxs)("div",{className:"starRatingsBottom",children:[Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"}),Object(O.jsx)("span",{children:"\u2605"})]})]})]}),Object(O.jsx)("p",{className:"bodyText",children:function(){if(!s.genres)return"";for(var e="Genres: ",t=0;t<s.genres.length;t++)t<s.genres.length-1?e=e+s.genres[t].name+", ":e+=s.genres[t].name;return e}()}),Object(O.jsxs)("p",{className:"bodyText",children:["Seasons: ",s.number_of_seasons]}),Object(O.jsxs)("p",{className:"bodyText",children:["Episodes: ",s.number_of_episodes]}),Object(O.jsxs)("div",{className:"iconWithText",children:[Object(O.jsx)(p.a,{icon:"angle-double-right",size:"2x",className:"angleRight"}),Object(O.jsx)("p",{className:"subTitle",children:"Synopsis"})]}),Object(O.jsx)("p",{className:"synopsis",children:s.overview}),y?Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:f,onClick:function(e){e.preventDefault(),"valid"===f&&I.post("https://mykdrama.herokuapp.com/addWatched",{userID:localStorage.getItem("userID"),poster:s.poster_path,name:s.name,showID:s.id}).then((function(){x("notValid")}))},children:"Add to Watched"}),Object(O.jsx)("button",{className:w,onClick:function(e){e.preventDefault(),"valid"===w&&I.post("https://mykdrama.herokuapp.com/addWatchlater",{userID:localStorage.getItem("userID"),poster:s.poster_path,name:s.name,showID:s.id}).then((function(){D("notValid")}))},children:"Add to Watch Later"})]}):Object(O.jsx)("p",{className:"instr",children:"Log in to add shows to watch/watch later"})]}),s.backdrop_path&&Object(O.jsx)("div",{className:"backdrop",style:{backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original"+s.backdrop_path,")")}})]}),Object(O.jsxs)("div",{className:"detailLower",children:[Object(O.jsxs)("div",{className:"iconWithText",children:[Object(O.jsx)(p.a,{icon:"angle-double-right",size:"2x",className:"angleRight orange"}),Object(O.jsx)("p",{className:"subTitle",children:"Recommendations"})]}),Object(O.jsxs)("div",{className:"scroll",children:[Object(O.jsx)("div",{className:"recommendations",children:0!==o.length&&o.map((function(e){return Object(O.jsx)(N,{result:e,reco:!0,userID:localStorage.getItem("userID")},e.id)}))}),u&&Object(O.jsxs)("div",{className:"iconWithText",children:[Object(O.jsx)("p",{className:"message",children:"No Recommendations"}),Object(O.jsx)(p.a,{icon:"sad-tear",size:"2x",className:"orange"})]})]})]})]})})},S=(a(86),a(21).default);var _=function(){var e="2c3c49c8f9892c1b17ebf32c4b74bed0",t=Object(c.useState)([]),a=Object(r.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)([]),l=Object(r.a)(i,2),o=l[0],d=l[1];return Object(c.useEffect)((function(){S.get("https://api.themoviedb.org/3/discover/tv?api_key="+e+"&language=en-US&sort_by=popularity.desc&page=1&with_genres=18&include_null_first_air_dates=false&with_original_language=ko&with_watch_monetization_types=flatrate").then((function(t){for(var a=[],c=1;c<=t.data.total_pages;c++)S.get("https://api.themoviedb.org/3/discover/tv?api_key="+e+"&language=en-US&sort_by=popularity.desc&page="+c+"&with_genres=18&include_null_first_air_dates=false&with_original_language=ko&with_watch_monetization_types=flatrate").then((function(e){e.data.results.map((function(e){a.push(e)}))}));n(a)}))}),[]),Object(O.jsxs)("div",{className:"searchPage",children:[Object(O.jsx)("input",{className:"searchInput",placeholder:"start typing",onChange:function(e){var t;e.preventDefault(),t=e.target.value,d(s.filter((function(e){return e.name.toLowerCase().replace(/-|\s/g,"").includes(t.toLowerCase().replace(/-|\s/g,""))&&null!==e.poster_path||e.original_name.toLowerCase().replace(/-|\s/g,"").includes(t.toLowerCase().replace(/-|\s/g,""))&&null!==e.poster_path})).slice(0,40))}}),Object(O.jsx)("div",{className:"tvShows",children:0!==o.length&&o.map((function(e){return Object(O.jsx)(N,{result:e},e.id)}))})]})},y=(a(87),a(88),a(21).default);var C=function(e){var t=Object(o.f)(),a=e.data,s=e.dramaID,n=e.fromWatched,i=Object(c.useState)(!0),l=Object(r.a)(i,2),d=l[0],j=l[1];return Object(O.jsx)("div",{className:"dramaCard",children:d&&Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{className:"cardPic",onClick:function(){localStorage.setItem("showID",a.showID),t.push("/detail/"+a.name.replace(/\s/g,""))},src:"https://image.tmdb.org/t/p/w400"+a.poster,alt:a.name}),Object(O.jsx)("div",{className:"onTop",children:Object(O.jsx)("div",{className:"circle",children:Object(O.jsx)(p.a,{icon:"trash-alt",size:"2x",className:"trashIcon",onClick:function(e){e.preventDefault(),function(e){n?y.post("https://mykdrama.herokuapp.com/deleteWatched",{watchedID:e}).then((function(){j(!1)})):y.post("https://mykdrama.herokuapp.com/deleteWatchlater",{watchlaterID:e}).then((function(){j(!1)}))}(s)}})})})]},a.showID)})},T=a(21).default;var E=function(e){var t=Object(c.useState)([]),a=Object(r.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)([]),l=Object(r.a)(i,2),o=l[0],d=l[1];return Object(c.useEffect)((function(){window.scrollTo(0,0),localStorage.getItem("userID")&&"0"!==localStorage.getItem("userID")&&(T.post("https://mykdrama.herokuapp.com/getWatched",{userID:localStorage.getItem("userID")}).then((function(e){n(e.data)})),T.post("https://mykdrama.herokuapp.com/getWatchlater",{userID:localStorage.getItem("userID")}).then((function(e){d(e.data)})))}),[e.location]),Object(O.jsxs)("div",{className:"myKdramaPage",children:[Object(O.jsxs)("div",{className:"arrowTitle",children:[Object(O.jsx)(p.a,{icon:"angle-double-right",size:"2x",className:"purpleAngleRight"}),Object(O.jsx)("p",{className:"watchTitle",children:"Watched"})]}),Object(O.jsx)("div",{className:"horzScroll",children:Object(O.jsx)("div",{className:"myDramas",children:0!==s.length&&s.map((function(e){return Object(O.jsx)(C,{data:e,dramaID:e.watchedID,fromWatched:!0},e.showID)}))})}),Object(O.jsxs)("div",{className:"arrowTitle",children:[Object(O.jsx)(p.a,{icon:"angle-double-right",size:"2x",className:"blueAngleRight"}),Object(O.jsx)("p",{className:"watchTitle",children:"Watch Later"})]}),Object(O.jsx)("div",{className:"horzScroll",children:Object(O.jsx)("div",{className:"myDramas",children:0!==o.length&&o.map((function(e){return Object(O.jsx)(C,{data:e,dramaID:e.watchlaterID,fromWatched:!1},e.showID)}))})}),0===s.length&&0===o.length&&Object(O.jsxs)("div",{className:"emptyMessage",children:[Object(O.jsx)("p",{children:"So far empty :("}),Object(O.jsx)("p",{children:"Go look for some K-dramas!"})]})]})},L=a(21).default;var P=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){L.get("https://mykdrama.herokuapp.com/").then((function(){s(!1)}))}),[]),Object(O.jsx)("div",{children:a?Object(O.jsx)("div",{className:"sleepCover",children:Object(O.jsxs)("div",{className:"sleepScreen",children:[Object(O.jsx)("div",{className:"col-3",children:Object(O.jsx)("div",{className:"snippet","data-title":".dot-spin",children:Object(O.jsx)("div",{className:"stage",children:Object(O.jsx)("div",{className:"dot-spin"})})})}),Object(O.jsx)("p",{children:"Connecting to server"}),Object(O.jsx)("p",{children:"Please wait a few seconds"}),Object(O.jsx)("p",{children:"Backend hosted on Heroku"})]})}):Object(O.jsxs)(l.a,{children:[Object(O.jsx)(x,{}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:w}),Object(O.jsx)(o.a,{exact:!0,path:"/home",component:w}),Object(O.jsx)(o.a,{path:"/detail/:name",component:D}),Object(O.jsx)(o.a,{exact:!0,path:"/search",component:_}),Object(O.jsx)(o.a,{exact:!0,path:"/myKdrama",component:E})]}),Object(O.jsx)(v,{})]})})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),W()}},[[89,1,2]]]);
//# sourceMappingURL=main.cfe85b09.chunk.js.map