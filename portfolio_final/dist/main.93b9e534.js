!function(e){function t(t){for(var r,o,c=t[0],l=t[1],u=t[2],m=0,d=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+"templates/"+({1:"mnt/c/Users/michi/Projects/michielglibert.github.io/portfolio_final/node_modules/react-static/lib/browser/components/Default404"}[e]||e)+"."+{1:"8e135d23"}[e]+".js"}(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}a[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://michiel.me/",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;i.push([100,2]),n()}({100:function(e,t,n){n(101),n(130),e.exports=n(140)},133:function(e,t,n){var r={".":25,"./":25,"./index":25,"./index.js":25};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=133},146:function(e,t,n){"use strict";n.r(t),function(e){var r=n(0),a=n.n(r),i=n(16),o=n.n(i),c=n(96),l=n(40);if(t.default=l.a,"undefined"!=typeof document){var u=document.getElementById("root"),s=u.hasChildNodes()?o.a.hydrate:o.a.render,m=function(e){s(a.a.createElement(c.AppContainer,null,a.a.createElement(e,null)),u)};m(l.a),e&&e.hot&&e.hot.accept("./App",(function(){m(l.a)}))}}.call(this,n(147)(e))},243:function(e,t,n){},40:function(e,t,n){"use strict";var r=n(5),a=n.n(r),i=n(6),o=n.n(i),c=n(7),l=n.n(c),u=n(8),s=n.n(u),m=n(4),d=n.n(m),f=n(1),p=n.n(f),h=n(0),g=n.n(h),v=n(2),x=n(38);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}function y(){var e=p()(['\n  color: black;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: "CircularStd", sans-serif;\n  margin: 0 64px;\n  font-size: 12pt;\n  cursor: pointer;\n']);return y=function(){return e},e}function w(){var e=p()(["\n  display: flex;\n  justify-content: center;\n  padding: 48px;\n\n  @media screen and (max-width: 992px) {\n    display: none;\n  }\n"]);return w=function(){return e},e}var k=v.a.nav(w()),E=Object(v.a)(x.Link)(y()),j=function(e){l()(n,e);var t=b(n);function n(){return a()(this,n),t.apply(this,arguments)}return o()(n,[{key:"render",value:function(){return g.a.createElement(k,null,g.a.createElement(E,{to:"about",spy:!0,smooth:!0,duration:1200,ignoreCancelEvents:!0},"Over mijzelf"),g.a.createElement(E,{to:"career",spy:!0,smooth:!0,duration:1200,ignoreCancelEvents:!0},"Carriere"),g.a.createElement(E,{to:"projects",spy:!0,smooth:!0,duration:1200,ignoreCancelEvents:!0},"Projecten"),g.a.createElement(E,{to:"contact",spy:!0,smooth:!0,duration:1200,ignoreCancelEvents:!0},"Contact"))}}]),n}(h.Component),N=n(88),S=n.n(N),z=n(89),R=n.n(z),D=n(20),P=n.n(D);function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}function O(){var e=p()(["\n\tcursor: pointer;\n\ttext-decoration: none;\n\tbox-sizing: content-box;\n\tmargin-top: 32px;\n\tfont-size: 50pt;\n\tcolor: white;\n"]);return O=function(){return e},e}function _(){var e=p()(['\n\tfont-size: 16pt;\n\tfont-family: "Open Sans", sans-serif;\n\tcolor: #707070;\n\tmargin: 0;\n\tletter-spacing: 2px;\n']);return _=function(){return e},e}function F(){var e=p()(["\n\tfont-size: 18pt;\n\tfont-weight: 500;\n\tmargin: 0;\n"]);return F=function(){return e},e}function I(){var e=p()(["\n\tfont-size: 30pt;\n\tfont-weight: 700;\n\tmargin: 6px 0;\n"]);return I=function(){return e},e}function A(){var e=p()(["\n\ttext-align: center;\n\tflex-grow: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tpadding: 12px;\n\t@media screen and (max-width: 767px) {\n\t\tpadding: 12px;\n\t}\n\t@media screen and (max-width: 500px) {\n\t\tflex-grow: 0;\n\t}\n"]);return A=function(){return e},e}function M(){var e=p()(["\n\tmax-width: 100%;\n\tmax-height: 100%;\n\tborder-radius: 500px;\n"]);return M=function(){return e},e}function T(){var e=p()(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 100%;\n\tmax-width: 250px;\n\tflex-grow: 1;\n\tpadding: 16px;\n\t@media screen and (max-width: 500px) {\n\t\theight: 50%;\n\t}\n"]);return T=function(){return e},e}function U(){var e=p()(["\n\tdisplay: flex;\n\tmax-width: 550px;\n\twidth: 90%;\n\tflex-grow: 1;\n\tmax-height: 200px;\n\tbackground-color: white;\n\tborder-radius: 6px;\n\tbox-shadow: 0 0 10px;\n\tmargin: 16px;\n\tmargin-top: -112px;\n\n\t@media screen and (max-width: 500px) {\n\t\tmargin-top: 0;\n\t\tpadding: 8px;\n\t\twidth: 90%;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tmax-height: 400px;\n\t}\n"]);return U=function(){return e},e}function B(){var e=p()(["\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\t@media screen and (max-width: 767px) {\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t}\n"]);return B=function(){return e},e}function H(){var e=p()(["\n\theight: 100vh;\n\twidth: 100%;\n\tbackground-image: url(",");\n\tbackground-size: cover;\n\t@media screen and (max-height: 700px) {\n\t\tmin-height: 700px;\n\t}\n"]);return H=function(){return e},e}var G=v.a.div(H(),R.a),L=v.a.div(B()),J=v.a.div(U()),V=v.a.div(T()),K=Object(v.a)(P.a)(M()),W=v.a.div(A()),q=v.a.h1(I()),Z=v.a.h3(F()),Q=v.a.h3(_()),X=Object(v.a)(x.Link)(O()),Y=function(e){l()(n,e);var t=C(n);function n(){return a()(this,n),t.apply(this,arguments)}return o()(n,[{key:"render",value:function(){return g.a.createElement(G,null,g.a.createElement(j,null),g.a.createElement(L,null,g.a.createElement(J,null,g.a.createElement(V,null,g.a.createElement(K,{src:S.a})),g.a.createElement(W,null,g.a.createElement(q,null,"Hi!"),g.a.createElement(Z,null,"I'm Michiel Glibert"),g.a.createElement(Q,null,"DEVELOPER"))),g.a.createElement(X,{to:"about",spy:!0,smooth:!0,duration:1200,ignoreCancelEvents:!0},g.a.createElement("i",{className:"fas fa-chevron-down"}))))}}]),n}(h.Component),$=n(90),ee=n.n($);function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}function ne(){var e=p()(["\n\tfont-size: 15pt;\n"]);return ne=function(){return e},e}function re(){var e=p()(["\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 6px;\n\tobject-fit: cover;\n"]);return re=function(){return e},e}function ae(){var e=p()(["\n\twidth: 75%;\n\tpadding: 16px;\n\t@media screen and (max-width: 1260px) {\n\t\twidth: 100%;\n\t}\n"]);return ae=function(){return e},e}function ie(){var e=p()(["\n\twidth: 25%;\n\tpadding: 16px;\n\t@media screen and (max-width: 1260px) {\n\t\tdisplay: none;\n\t}\n"]);return ie=function(){return e},e}function oe(){var e=p()(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin: 0 auto;\n\tmax-width: 1200px;\n\tpadding: 96px 16px;\n\t@media screen and (max-width: 1260px) {\n\t\tpadding: 16px;\n\t}\n"]);return oe=function(){return e},e}var ce=v.a.div(oe()),le=v.a.div(ie()),ue=v.a.div(ae()),se=Object(v.a)(P.a)(re()),me=v.a.p(ne()),de=function(e){l()(n,e);var t=te(n);function n(){return a()(this,n),t.apply(this,arguments)}return o()(n,[{key:"render",value:function(){return g.a.createElement(ce,{id:"about","data-aos":"fade"},g.a.createElement(le,null,g.a.createElement(se,{src:ee.a})),g.a.createElement(ue,null,g.a.createElement("h1",null,"Over mijzelf"),g.a.createElement("h3",null,"Hi! "),g.a.createElement(me,null,"Ik ben Michiel, geboren in Gent en getogen in Evergem. Al van kleins af aan ben ik geïnspireerd door computers. Op jonge leeftijd schreef ik zelf mijn eigen eenvoudige programma's in Java. Dit heeft er toe geleid dat ik in mijn verdere leven voor de opleiding Toegepaste Informatica heb gekozen aan"," ",g.a.createElement("a",{href:"https://www.hogent.be/",target:"_blank"},"Hogeschool Gent"),". Tijdens deze opleiding heb ik enorm veel praktijkervaring opgedaan. Na 3 jaar heb ik deze opleiding met succes kunnen afronden. De laatste 14 weken van mijn opleiding heb ik een stage gevolgd bij"," ",g.a.createElement("a",{href:"https://kayzr.com/",target:"_blank"},"Kayzr")," ","waar ik aan de slag ging als Full Stack Developer."),g.a.createElement(me,null,"Na mijn opleiding heb ik toch gekozen om nog niet te gaan werken. Ik had het gevoel dat ik nog meer capaciteiten had en ik had daarnaast nog de motivatie om verder te studeren. Dit heeft ertoe geleid dat ik ben begonnen aan een schakelprogramma naar Industrieel Ingenieur: Informatica aan"," ",g.a.createElement("a",{href:"https://www.ugent.be/",target:"_blank"},"Universiteit Gent"),". Momenteel zit ik in mijn masterjaar en als alles goed gaat ben ik vanaf juni officieel afgestudeerd 🎓"),g.a.createElement(me,null,"Sociaal contact is voor mij zeer belangrijk, ook tijdens mijn job. Zelfstandig werken kan ik zeker, maar ik heb niks liever dan een goede groepsfeer! Uit teamwork haal ik enorm veel motivatie en dat geeft mijn productiviteit een boost."),g.a.createElement(me,null,"Verder ben ik niet alleen een gepassioneerde IT'er, maar ook gewoon een aangename persoon. Alhoewel ik er kan van genieten om wat vitamine D op te doen in mijn tuin, geniet ik er nog meer van om een stapje in de wereld te zetten. De kans is daarom ook groot dat je mij in Evergem of Gent eens tegen het lijf loopt 😎")))}}]),n}(h.Component),fe=(n(9),n(18)),pe=n.n(fe),he=function(e){var t=e.animate,n=e.className,r=e.layout,a=e.children;return g.a.createElement("div",{className:pe()(n,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":"2-columns"===r,"vertical-timeline--one-column":"1-column"===r})},a)};he.defaultProps={animate:!0,className:"",layout:"2-columns"};var ge=he,ve=n(36),xe=n.n(ve),be=n(97),ye=function(e){var t=e.children,n=e.className,r=e.contentArrowStyle,a=e.contentStyle,i=e.date,o=e.dateClassName,c=e.icon,l=e.iconClassName,u=e.iconOnClick,s=e.onTimelineElementClick,m=e.iconStyle,d=e.id,f=e.position,p=e.style,h=e.textClassName,v=(e.visibilitySensorProps,Object(be.a)({triggerOnce:!0})),x=xe()(v,3),b=x[0],y=x[1];x[2];return g.a.createElement("div",{id:d,className:pe()(n,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===f,"vertical-timeline-element--right":"right"===f,"vertical-timeline-element--no-children":""===t}),style:p},g.a.createElement("div",{ref:b},g.a.createElement(g.a.Fragment,null,g.a.createElement("span",{style:m,onClick:u,className:pe()(l,"vertical-timeline-element-icon",{"bounce-in":y,"is-hidden":!y})},c),g.a.createElement("div",{style:a,onClick:s,className:pe()(h,"vertical-timeline-element-content",{"bounce-in":y,"is-hidden":!y})},g.a.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),t,g.a.createElement("span",{className:pe()(o,"vertical-timeline-element-date")},i)))))};ye.defaultProps={children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconClassName:"",iconOnClick:null,onTimelineElementClick:null,iconStyle:null,id:"",style:null,date:"",position:"",textClassName:"",visibilitySensorProps:{partialVisibility:!0,offset:{bottom:40}}};var we=ye;function ke(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}function Ee(){var e=p()(["\n\t@media screen and (max-width: 767px) {\n\t\tfont-size: 10pt;\n\t}\n"]);return Ee=function(){return e},e}function je(){var e=p()(["\n\t@media screen and (max-width: 767px) {\n\t\tfont-size: 12pt;\n\t}\n"]);return je=function(){return e},e}function Ne(){var e=p()(["\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);return Ne=function(){return e},e}function Se(){var e=p()(["\n\tmargin: 0 auto;\n\tpadding: 96px 0;\n\tmax-width: 960px;\n\t@media screen and (max-width: 1260px) {\n\t\tpadding: 32px 0;\n\t}\n"]);return Se=function(){return e},e}function ze(){var e=p()(["\n\tbackground-color: #f4f4f4;\n"]);return ze=function(){return e},e}var Re=v.a.div(ze()),De=Object(v.a)(ge)(Se()),Pe=v.a.div(Ne()),Ce=v.a.h3(je()),Oe=v.a.h4(Ee()),_e=function(e){l()(n,e);var t=ke(n);function n(){return a()(this,n),t.apply(this,arguments)}return o()(n,[{key:"render",value:function(){return g.a.createElement(Re,{id:"career"},g.a.createElement(De,{layout:"1-column"},g.a.createElement(we,{className:"vertical-timeline-element--work",contentStyle:{background:"#247AFD",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #247AFD"},date:"2020 - ...",iconStyle:{background:"#247AFD",color:"#fff"},icon:g.a.createElement(Pe,null,g.a.createElement("i",{className:"fas fa-briefcase"}))},g.a.createElement(Ce,{className:"vertical-timeline-element-title"},"Open voor opportuniteiten"),g.a.createElement("p",null,"Ik ben momenteel opzoek naar een job in de IT, bij voorkeur in web en mobile development")),g.a.createElement(we,{className:"vertical-timeline-element--education",date:"2019 - 2020",iconStyle:{background:"#FFAB0F",color:"#fff"},icon:g.a.createElement(Pe,null,g.a.createElement("i",{className:"fas fa-graduation-cap"}))},g.a.createElement(Ce,{className:"vertical-timeline-element-title"},"Master Industrieel Ingenieur: Informatica"),g.a.createElement(Oe,{className:"vertical-timeline-element-subtitle"},"Universiteit Gent")),g.a.createElement(we,{className:"vertical-timeline-element--education",date:"2018 - 2019",iconStyle:{background:"#FFAB0F",color:"#fff"},icon:g.a.createElement(Pe,null,g.a.createElement("i",{className:"fas fa-graduation-cap"}))},g.a.createElement(Ce,{className:"vertical-timeline-element-title"},"Schakelprogramma Industrieel Ingenieur: Informatica"),g.a.createElement(Oe,{className:"vertical-timeline-element-subtitle"},"Universiteit Gent")),g.a.createElement(we,{className:"vertical-timeline-element--work",date:"februari 2018 - mei 2018",iconStyle:{background:"#247AFD",color:"#fff"},icon:g.a.createElement(Pe,null,g.a.createElement("i",{className:"fas fa-briefcase"}))},g.a.createElement(Ce,{className:"vertical-timeline-element-title"},"Full Stack Developer"),g.a.createElement(Oe,{className:"vertical-timeline-element-subtitle"},"Kayzr")),g.a.createElement(we,{className:"vertical-timeline-element--education",date:"2015 - 2018",iconStyle:{background:"#FFAB0F",color:"#fff"},icon:g.a.createElement(Pe,null,g.a.createElement("i",{className:"fas fa-graduation-cap"}))},g.a.createElement(Ce,{className:"vertical-timeline-element-title"},"Professionele Bachelor in de Toegepaste Informatica"),g.a.createElement(Oe,{className:"vertical-timeline-element-subtitle"},"Hogeschool Gent"),g.a.createElement("p",null,"Web en Mobile Apps")),g.a.createElement(we,{iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"},icon:g.a.createElement(Pe,null,g.a.createElement("i",{className:"fas fa-school"})),date:"2009 - 2015"},g.a.createElement(Ce,{className:"vertical-timeline-element-title"},"Handel TSO"),g.a.createElement(Oe,{className:"vertical-timeline-element-subtitle"},"Sint-Franciscus Evergem"))))}}]),n}(h.Component),Fe=n(17),Ie=n.n(Fe),Ae=n(15),Me=n.n(Ae),Te=(n(159),n(248)),Ue=n(249),Be=n(91),He=n.n(Be),Ge=n(92),Le=n.n(Ge),Je=n(93),Ve=n.n(Je);n(160),n(94);function Ke(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}function We(){var e=p()(["\n\tborder-radius: 6px;\n\tmax-height: 300px;\n\tmax-width: 100%;\n\tmargin: 16px;\n\t@media screen and (max-width: 1200px) {\n\t\tmargin: 0;\n\t}\n"]);return We=function(){return e},e}function qe(){var e=p()(["\n\ttext-align: center;\n\tflex-grow: 1;\n\twidth: 50%;\n\t@media screen and (max-width: 1200px) {\n\t\twidth: 100%;\n\t}\n"]);return qe=function(){return e},e}function Ze(){var e=p()(["\n\tcolor: #333333;\n"]);return Ze=function(){return e},e}function Qe(){var e=p()(["\n\tmargin-top: 0;\n"]);return Qe=function(){return e},e}function Xe(){var e=p()(["\n\twidth: 60%;\n\tpadding: 16px;\n\t@media screen and (max-width: 1200px) {\n\t\twidth: 100%;\n\t}\n"]);return Xe=function(){return e},e}function Ye(){var e=p()(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 16px;\n\tmin-height: 450px;\n\t@media screen and (max-width: 1200px) {\n\t\tflex-direction: column-reverse;\n\t}\n"]);return Ye=function(){return e},e}function $e(){var e=p()(["\n\tcursor: ",";\n\topacity: ",";\n\tfont-size: 48pt;\n\tpadding: 0 32px;\n\t@media screen and (max-width: 860px) {\n\t\tpadding: 0 16px;\n\t\tfont-size: 24pt;\n\t}\n"]);return $e=function(){return e},e}function et(){var e=p()(["\n\tflex-grow: 1;\n\ttext-align: center;\n"]);return et=function(){return e},e}function tt(){var e=p()(["\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 8px 16px;\n"]);return tt=function(){return e},e}function nt(){var e=p()(["\n\tmargin: 0 auto;\n\tmax-width: 1200px;\n\tpadding: 96px 16px;\n\t@media screen and (max-width: 1260px) {\n\t\tpadding: 16px;\n\t}\n"]);return nt=function(){return e},e}var rt=v.a.div(nt()),at=v.a.div(tt()),it=v.a.h1(et()),ot=v.a.i($e(),(function(e){return e.disabled?"default":"pointer"}),(function(e){return e.disabled?.4:1})),ct=v.a.div(Ye()),lt=v.a.div(Xe()),ut=v.a.h2(Qe()),st=v.a.div(Ze()),mt=v.a.div(qe()),dt=Object(v.a)(P.a)(We()),ft=function(e){l()(n,e);var t=Ke(n);function n(){var e;a()(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),Me()(Ie()(e),"state",{projects:[{title:"Solomon Elections",description:"Met dit project werd een online platform ontwikkeld waarmee inwoners van de Solomoneilanden eenvoudig de plaats konden terugvinden waar zij konden stemmen.\n\t\t\t\t Voor een land dat nog volop in ontwikkeling is, was dit een grote hulp voor de lokale verkiezingen van 2019.\n\t\t\t\t Daarnaast bood het platform ook de resultaten aan van de voorgaande verkiezingen. \n\t\t\t\t Deze applicatie werd ontwikkeld tijdens mijn schakeljaar als opdracht voor het opleidingsonderdeel Project.\n\t\t\t\t Hierbij hebben 4 andere groepsleden en ik deze applicatie vanaf 0 op 8 weken tijd ontwikkeld.\n\t\t\t\t Rekeninghoudend met het feit dat dit moest gebeuren na de vele lesuren was dit een hele klus.\n\t\t\t\t Gelukkig is doorzetten en teamwork\t1 van mijn specialiteiten 😉",img:He.a,url:"https://solomonelections.net/"},{title:"Survey Master",description:"Survey master is een klein project dat werd ontwikkeld voor het vak Webapps in het laatste jaar van mijn bachelor.\n\t\t\t\t\t Het doel hiervan was om louter mijn capaciteiten met Javascript frameworks te kunnen aantonen, wat aardig gelukt was.\n\t\t\t\t\t Met de applicatie kan een nieuw account worden aangemaakt en vervolgens geantwoord worden op korte vragen.\n\t\t\t\t\t Hierbij kan dan de verdeling gezien worden van wat andere gebruikers als antwoord gaven.\n\t\t\t\t\t Er kunnen zelf ook vragen worden toegevoegd inclusief comments en likes 👍\n\t\t\t\t ",img:Le.a,url:"https://surveyymaster.herokuapp.com/"},{title:"CoCare",description:"Dit was een platform dat werd ontwikkeld tijdens mijn bachelor voor een klant als opdracht voor het opleidingsonderdeel Project.\n\t\t\t\t\t Het hoofddoel van de applicatie was om voor gescheiden ouders een handig kostenoverzicht te geven om de kosten eenvoudiger te kunnen delen.\n\t\t\t\t\t Hierbij waren enkele extra functionaliteiten aanwezig zoals informatie over het kind en een kenniscentrum.\n\t\t\t\t\t Deze applicatie had zowel een mobile app als een web app 💻\n\t\t\t\t\t",img:Ve.a}],position:0,disableButtons:!1}),Me()(Ie()(e),"goLeft",(function(){e.state.disableButtons||(e.setState({disableButtons:!0}),e.state.position>0&&e.setState((function(e){return{position:e.position-1}})),setTimeout((function(){e.setState({disableButtons:!1})}),500))})),Me()(Ie()(e),"goRight",(function(){e.state.disableButtons||(e.setState({disableButtons:!0}),e.state.position<e.state.projects.length-1&&e.setState((function(e){return{position:e.position+1}})),setTimeout((function(){e.setState({disableButtons:!1})}),500))})),e}return o()(n,[{key:"render",value:function(){var e=this.state,t=e.projects,n=e.position;return g.a.createElement(rt,{id:"projects","data-aos":"fade-in"},g.a.createElement(at,null,g.a.createElement(ot,{disabled:0==n,onClick:this.goLeft},g.a.createElement("i",{className:"fas fa-chevron-left"})),g.a.createElement(it,null,"Projecten"),g.a.createElement(ot,{disabled:n==t.length-1,onClick:this.goRight},g.a.createElement("i",{className:"fas fa-chevron-right"}))),g.a.createElement(Te.a,null,g.a.createElement(Ue.a,{key:n,timeout:300,classNames:"example"},g.a.createElement(ct,null,g.a.createElement(lt,null,g.a.createElement(ut,null,t[n].title),g.a.createElement(st,null,t[n].description)),g.a.createElement(mt,null,g.a.createElement("a",t[n].url&&{href:t[n].url,target:"_blank"},g.a.createElement(dt,{src:t[n].img})))))))}}]),n}(h.Component);function pt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}function ht(){var e=p()(["\n\tmargin-top: 64px;\n\tfont-size: 11pt;\n"]);return ht=function(){return e},e}function gt(){var e=p()(["\n\tfont-size: 100pt;\n\tcolor: ",";\n\n\t@media screen and (max-width: 900px) {\n\t\tfont-size: 80pt;\n\t}\n"]);return gt=function(){return e},e}function vt(){var e=p()(["\n\tmargin-bottom: 0;\n\tfont-weight: 500;\n\tcolor: ",";\n\t@media screen and (max-width: 900px) {\n\t\tfont-size: 22pt;\n\t}\n"]);return vt=function(){return e},e}function xt(){var e=p()(["\n\tflex-grow: 1;\n\tmax-width: 300px;\n\twidth: 100%;\n\ttext-decoration: none;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 300px;\n\tborder-radius: 6px;\n\tbox-shadow: 0 0 10;\n\tpadding: 32px;\n\tmargin: 32px;\n\tbackground-color: ",";\n\t@media screen and (max-width: 1200px) {\n\t\tmargin: 16px;\n\t}\n\t@media screen and (max-width: 900px) {\n\t\tmax-width: 250px;\n\t\theight: 220px;\n\t\tmargin: 12px;\n\t\tpadding: 16px;\n\t}\n\t@media screen and (max-width: 600px) {\n\t\tmargin: 16px 48px;\n\t}\n\n\ttransition: opacity 0.25s;\n\n\t&:hover {\n\t\topacity: 0.8;\n\t}\n"]);return xt=function(){return e},e}function bt(){var e=p()(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\t@media screen and (max-width: 600px) {\n\t\tflex-direction: column;\n\t}\n"]);return bt=function(){return e},e}function yt(){var e=p()(["\n\ttext-align: center;\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n\tpadding: 96px 16px 32px 16px;\n\t@media screen and (max-width: 1260px) {\n\t\tpadding: 16px;\n\t}\n"]);return yt=function(){return e},e}function wt(){var e=p()(["\n\tbackground-color: #f4f4f4;\n"]);return wt=function(){return e},e}var kt=v.a.div(wt()),Et=v.a.div(yt()),jt=v.a.div(bt()),Nt=v.a.a(xt(),(function(e){return e.color?e.color:"white"})),St=v.a.h1(vt(),(function(e){return e.color?e.color:"black"})),zt=v.a.i(gt(),(function(e){return e.color?e.color:"black"})),Rt=v.a.footer(ht()),Dt=function(e){l()(n,e);var t=pt(n);function n(){return a()(this,n),t.apply(this,arguments)}return o()(n,[{key:"render",value:function(){return g.a.createElement(kt,null,g.a.createElement(Et,{id:"contact","data-aos":"fade-in"},g.a.createElement("h1",null,"Contact"),g.a.createElement(jt,null,g.a.createElement(Nt,{href:"mailto:michiel.glibert@gmail.com"},g.a.createElement(zt,{className:"fas fa-at"}),g.a.createElement(St,null,"E-Mail")),g.a.createElement(Nt,{href:"https://www.linkedin.com/in/michielglibert/",target:"_blank",color:"rgb(0, 119, 181)"},g.a.createElement(zt,{className:"fab fa-linkedin-in",color:"white"}),g.a.createElement(St,{color:"white"},"LinkedIn")),g.a.createElement(Nt,{href:"https://github.com/michielglibert",target:"_blank",color:"black"},g.a.createElement(zt,{className:"fab fa-github",color:"white"}),g.a.createElement(St,{color:"white"},"Github"))),g.a.createElement(Rt,null,"Made with ❤ by Michiel")))}}]),n}(h.Component),Pt=n(95),Ct=n.n(Pt);n(243),n(244),n(245);function Ot(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s()(this,n)}}function _t(){var e=p()(["\n\tfont-size: 15pt;\n"]);return _t=function(){return e},e}var Ft=v.a.div(_t()),It=function(e){l()(n,e);var t=Ot(n);function n(){return a()(this,n),t.apply(this,arguments)}return o()(n,[{key:"componentDidMount",value:function(){Ct.a.init({duration:700,once:!0})}},{key:"render",value:function(){return g.a.createElement(Ft,null,g.a.createElement(Y,null),g.a.createElement(de,null),g.a.createElement(_e,null),g.a.createElement(ft,null),g.a.createElement(Dt,null))}}]),n}(h.Component);t.a=It},55:function(e,t,n){"use strict";n.r(t);t.default=[{location:"/mnt/c/Users/michi/Projects/michielglibert.github.io/portfolio_final/node_modules/react-static-plugin-styled-components",plugins:[],hooks:{}},{location:"/mnt/c/Users/michi/Projects/michielglibert.github.io/portfolio_final/node_modules/react-static-plugin-favicons",plugins:[],hooks:{}},{location:"/mnt/c/Users/michi/Projects/michielglibert.github.io/portfolio_final",plugins:[],hooks:{}}]},70:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",(function(){return f}));var r=n(37),a=n.n(r),i=n(84),o=n.n(i),c=n(0),l=n.n(c),u=n(26),s=n.n(u);Object(u.setHasBabelPlugin)();var m={loading:function(){return null},error:function(e){return console.error(e.error),l.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},d=s()(o()({id:"/mnt/c/Users/michi/Projects/michielglibert.github.io/portfolio_final/node_modules/react-static/lib/browser/components/Default404",load:function(){return Promise.all([n.e(1).then(n.t.bind(null,98,7))]).then((function(e){return e[0]}))},path:function(){return a.a.join(e,"/mnt/c/Users/michi/Projects/michielglibert.github.io/portfolio_final/node_modules/react-static/lib/browser/components/Default404")},resolve:function(){return 98},chunkName:function(){return"mnt/c/Users/michi/Projects/michielglibert.github.io/portfolio_final/node_modules/react-static/lib/browser/components/Default404"}}),m);d.template="/mnt/c/Users/michi/Projects/michielglibert.github.io/portfolio_final/node_modules/react-static/lib/browser/components/Default404",t.default={"/mnt/c/Users/michi/Projects/michielglibert.github.io/portfolio_final/node_modules/react-static/lib/browser/components/Default404":d};var f="/mnt/c/Users/michi/Projects/michielglibert.github.io/portfolio_final/node_modules/react-static/lib/browser/components/Default404"}.call(this,"/")},88:function(e,t,n){e.exports=n.p+"static/propic.7f0d1849.jpg"},89:function(e,t,n){e.exports=n.p+"static/mountains.215d01db.jpg"},90:function(e,t,n){e.exports=n.p+"static/lappy.ac7e3a18.jpg"},91:function(e,t,n){e.exports=n.p+"static/solomon.4cb6480f.jpg"},92:function(e,t,n){e.exports=n.p+"static/surveymaster.57e74e76.jpg"},93:function(e,t,n){e.exports=n.p+"static/cocare.b9447180.jpg"}});