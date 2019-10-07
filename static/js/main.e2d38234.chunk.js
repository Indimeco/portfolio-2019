(window["webpackJsonpportfolio-2019"]=window["webpackJsonpportfolio-2019"]||[]).push([[0],{22:function(t,n,e){t.exports=e(33)},27:function(t,n,e){},33:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(8),c=e.n(o),i=(e(27),e(1)),l={darkCerulean:"#003B7A",absoluteZero:"#0056B3",periwinkle:"#CAE5FF",raisinBlack:"#262626",gunMetal:"#30343F",ghostWhite:"#FAFAFF"},u={fg:l.raisinBlack,bg:l.ghostWhite,fgAccent:l.absoluteZero,bgAccent:l.periwinkle},m={fg:l.ghostWhite,bg:l.gunMetal,fgAccent:l.periwinkle,bgAccent:l.raisinBlack},f={colors:{fg:u.fg,fgAccent:u.fgAccent,bg:u.bg,bgAccent:u.bgAccent}},s=e(2);function d(){var t=Object(s.a)(["\n\tcolor: ",";\n\tbackground-color: ",";\n"]);return d=function(){return t},t}var g=i.c.main(d(),(function(t){return t.theme.colors.fg}),(function(t){return t.theme.colors.bg}));function h(){var t=Object(s.a)(["\n\tmargin-left: ",";\n\tmargin-right: ",";\n\n\t@media only screen and (min-width: ",") {\n\t\tmargin-left: ",";\n\t\tmargin-right: ",";\n\t}\n"]);return h=function(){return t},t}var p=function(){return Object(i.b)(h(),"10px","10px","768px","60px","60px")};function v(){var t=Object(s.a)(["\n\tcolor: ",";\n\tfont-size: ",";\n\tfont-family: ",";\n\tmargin: 0 0 "," 0;\n"]);return v=function(){return t},t}function b(){var t=Object(s.a)(["\n\tcolor: ",";\n\tfont-size: ",";\n\tfont-family: ",";\n\tmargin: 0 0 "," 0;\n"]);return b=function(){return t},t}var E=function(t){var n=t.theme;return Object(i.b)(b(),n.colors.fg,"calc(2.5vw + 2.5vh + .5vmin)","monospace","60px")},w=function(t){var n=t.theme;return Object(i.b)(v(),n.colors.fg,"calc(1.2vw + 1.2vh + .4vmin);","monospace","10px")};function y(){var t=Object(s.a)(["\n\t","\n\tbackground-color: transparent;\n\tborder: none;\n\tcolor: ",";\n\tcursor: pointer;\n\tfont-size: ",";\n\tmargin: 0;\n\tpadding: 0 ",";\n\ttext-decoration: none;\n\t&:hover {\n\t\tcolor: ",";\n\t}\n"]);return y=function(){return t},t}function x(){var t=Object(s.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tbackground-color: ",";\n\ttop: 0;\n\tmin-height: 7vh;\n\tmargin-bottom: 0;\n"]);return x=function(){return t},t}var j=i.c.nav(x(),(function(t){return t.theme.colors.bg})),O=i.c.button(y(),w,(function(t){return t.theme.colors.fg}),"calc(0.5vw + 0.5vh + .3vmin);","10px",(function(t){return t.theme.colors.fgAccent})),k=e(4),A=[{href:"https://www.linkedin.com/in/indimeco/",icon:k.b},{href:"http://steamcommunity.com/id/PancakeEngineering/myworkshopfiles/",icon:k.c},{href:"https://github.com/Indimeco",icon:k.a}],C=[["Hi, I'm a self taught web developer",k.a,"from the USA"],["I work in the React",k.a,"and Node",k.a,"ecosystem"]],I=[{name:"QRPG",image:"images/icon.png",href:"https://steamcommunity.com/sharedfiles/filedetails/?id=902748466",description:"QRPG is a Steam Workshop mod that provides UI and Data Management solutions for playing Role Playing Games within the physics sandbox game Tabletop Simulator.",content:[{blurb:"Open source and collaboration are the heart of development",paragraph:"QRPG was my first taste of working with other developers to create a product. It was a product we all passionately wanted to make and share with the community. Despite our inexperience and the limitations of our environment this was a wonderful experience."},{blurb:"Products live or die by sustainability",paragraph:"At its height, QRPG had over 13,000 followers on the Steam Workshop. The functionalities and combined utilities of QRPG were very sought after, but there were glaring issues with the netcode and rendering engine of Tabletop Simulator. Pair this last fact with the ever-flowing and inevitable breaking changes to the Tabletop Simulator Lua API and we have a huge maintenence cost. After distributing QRPG the dev team, mostly because of the aforementioned struggles, wanted to move on. Since then I have only worked on critical bugfixes and documentation enhancements. Working with the unstable engine and legacy scripting code base is too laborious to implement and maintain new features."}]},{name:"My Little Charlotte",image:"images/icon.png",href:"https://github.com/Indimeco/my-little-charlotte",description:"My Little Charlotte is a data scraping and data analysis tool, built using Puppeteer and Node JS.",content:[{blurb:"Automation is worth the effort.",paragraph:"In the fall of 2018 the organization I was working for wanted to move massive amounts of content from one CMS to another. They had no technical solution for this and planned to test it all using a force of QAs. This was unacceptable to me so I took it upon myself to prototype this tool that would collect and analyze the data across our different CMS. The prototype was a success and I continued to develop My Little Charlotte until it reached production quality and was feature complete."}]}],S=["About","Portfolio","Contact"],P=A,z="Great work is born of",F=["sustainability","communication","extensibility"],W=C,G={colors:{fg:m.fg,fgAccent:m.fgAccent,bg:m.bg,bgAccent:m.bgAccent}},M=function(){return a.a.createElement(i.a,{theme:G},a.a.createElement(j,{"data-test":"navigation"},S.map((function(t){return a.a.createElement(O,{key:t,"data-test":"navigation-item",onClick:(n=t,function(){var t=document.querySelector("#".concat(n));t&&t.scrollIntoView({behavior:"smooth"})})},t);var n}))))};function R(){var t=Object(s.a)(["\n\t"," background-color: transparent;\n\tborder: none;\n\tcolor: ",";\n\tcursor: pointer;\n\tfont-size: ",";\n\tmargin: 0;\n\tpadding: 0 ",";\n\ttext-decoration: none;\n\t&:hover {\n\t\tcolor: ",";\n\t}\n"]);return R=function(){return t},t}function T(){var t=Object(s.a)(["\n\tpadding: ",";\n\tbackground-color: ",";\n\ttext-align: right;\n"]);return T=function(){return t},t}var B=i.c.footer(T(),"20px",(function(t){return t.theme.colors.bg})),Q=i.c.a(R(),w,(function(t){return t.theme.colors.fg}),"calc(0.5vw + 0.5vh + .3vmin);","10px",(function(t){return t.theme.colors.fgAccent})),L=function(){return a.a.createElement(i.a,{theme:G},a.a.createElement(B,{"data-test":"footer"},a.a.createElement(Q,{href:"https://github.com/Indimeco/portfolio-2019"},"View this page's source code")))},D=function(t){var n=t.children;return a.a.createElement(i.a,{theme:f},a.a.createElement(a.a.Fragment,null,a.a.createElement(M,null),a.a.createElement(g,null,n),a.a.createElement(L,null)))};function J(){var t=Object(s.a)(["\n\twidth: calc(10vw + 10vh + 0.5vmin);\n\tborder-radius: 50%;\n"]);return J=function(){return t},t}function N(){var t=Object(s.a)(["\n\tmargin-right: 10vw;\n"]);return N=function(){return t},t}function V(){var t=Object(s.a)(["\n\t"," margin-bottom: ",";\n\n\t@media only screen and (min-width: ",") {\n\t\ttext-align: center;\n\t}\n"]);return V=function(){return t},t}function q(){var t=Object(s.a)(["\n\t"," font-size: ",";\n\tfont-weight: 600;\n\tmargin-bottom: ",";\n\tmargin-top: 0;\n\n\t@media only screen and (min-width: ",") {\n\t\ttext-align: center;\n\t}\n"]);return q=function(){return t},t}function H(){var t=Object(s.a)(["\n\t"," min-height: 100vh;\n\n\tdisplay: flex;\n\talign-items: center;\n\n\t@media only screen and (min-width: ",") {\n\t\tjustify-content: space-around;\n\t}\n"]);return H=function(){return t},t}var U=i.c.header(H(),p,"768px"),Z=i.c.h1(q(),E,"calc(5vw + 5vh + .5vmin)","10px","768px"),$=i.c.div(V(),E,"10px","768px"),_=i.c.div(N()),K=i.c.img(J()),X=function(){return a.a.createElement(U,{"data-test":"heading"},a.a.createElement(_,null,a.a.createElement(Z,null,"Loren Ipsum"),a.a.createElement($,null,"Web Developer")),a.a.createElement(K,{src:"images/icon.png",alt:"Jacob's Headshot"}))},Y=e(6),tt=e(18);function nt(){var t=Object(s.a)(["\n\t",";\n\tdisplay: block;\n\tborder: 3px solid ",";\n\tbackground-color: transparent;\n\tcolor: ",";\n\tpadding: ",";\n\tmargin: "," 0;\n\tcursor: pointer;\n\n\t&:hover,\n\t&:focus {\n\t\tborder: 3px solid ",";\n\t\tbackground-color: ",";\n\t\tcolor: ",";\n\t}\n\n\t@media only screen and (min-width: ",") {\n\t\tmargin: "," auto;\n\t}\n"]);return nt=function(){return t},t}function et(){var t=Object(s.a)(["\n\t",";\n\tmargin-bottom: ",";\n"]);return et=function(){return t},t}function rt(){var t=Object(s.a)(["\n\t",";\n\tfont-size: ",";\n\tmargin-bottom: ",";\n"]);return rt=function(){return t},t}var at=i.c.h3(rt(),E,"calc(1.7vw + 1.7vh + .4vmin);","20px"),ot=i.c.p(et(),w,"20px"),ct=i.c.button(nt(),w,(function(t){return t.theme.colors.fgAccent}),(function(t){return t.theme.colors.fgAccent}),"10px","20px",(function(t){return t.theme.colors.fgAccent}),(function(t){return t.theme.colors.bgAccent}),(function(t){return t.theme.colors.fgAccent}),"768px","60px");function it(){var t=Object(s.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 3fr 1fr;\n"]);return it=function(){return t},t}function lt(){var t=Object(s.a)([""]);return lt=function(){return t},t}function ut(){var t=Object(s.a)([""]);return ut=function(){return t},t}var mt=i.c.div(ut()),ft=i.c.div(lt()),st=i.c.div(it()),dt=function(t){var n=t.item,e=n.name,r=n.description,o=n.content,c=t.onChange;Object(tt.a)(t,["item","onChange"]);return a.a.createElement(ft,null,a.a.createElement(st,null,a.a.createElement("div",null,a.a.createElement(at,null,e),a.a.createElement(ot,null,r)),a.a.createElement(ct,{onClick:function(){return c(null)}},"Go back")),o.map((function(t,n){var r=t.blurb,o=t.paragraph;return a.a.createElement(mt,{key:e+n,"data-test":"portfolio-item-content"},a.a.createElement(ot,null,r),a.a.createElement(ot,null,o))})))};function gt(){var t=Object(s.a)(["\n\theight: 30vh;\n\n\t&,\n\ta,\n\timg {\n\t\twidth: 100%;\n\t\tmax-height: 100%;\n\t}\n\n\timg {\n\t\tobject-fit: cover;\n\t}\n"]);return gt=function(){return t},t}function ht(){var t=Object(s.a)(["\n\tpadding: "," 0;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 2fr;\n\tgrid-column-gap: 5vw;\n"]);return ht=function(){return t},t}var pt=i.c.div(ht(),"60px"),vt=i.c.div(gt()),bt=function(t){var n=t.onChange;return a.a.createElement(ct,{onClick:n},"View details")},Et=function(t){var n=t.name,e=t.description;return a.a.createElement(a.a.Fragment,null,a.a.createElement(at,null,n),a.a.createElement(ot,null,e))},wt=function(t){var n=t.item,e=t.onChange;return a.a.createElement(pt,{"data-test":"portfolio-item"},a.a.createElement(vt,null,a.a.createElement("a",{href:n.href},a.a.createElement("img",{src:n.image,alt:"alt"}))),a.a.createElement("div",null,a.a.createElement(Et,{name:n.name,description:n.description}),a.a.createElement(bt,{onChange:e})))},yt=function(){var t=Object(r.useState)(null),n=Object(Y.a)(t,2),e=n[0],o=n[1];return a.a.createElement("div",{"data-test":"portfolio"},e?a.a.createElement(dt,{item:e,onChange:o}):a.a.createElement("div",null,I.map((function(t){return a.a.createElement(wt,{item:t,onChange:function(){return o(t)},key:t.name})}))))};function xt(){var t=Object(s.a)(["\n\t",";\n"]);return xt=function(){return t},t}function jt(){var t=Object(s.a)(["\n\t",";\n"]);return jt=function(){return t},t}function Ot(){var t=Object(s.a)(["\n\tpadding-top: ",";\n\tpadding-bottom: ",";\n\t",";\n"]);return Ot=function(){return t},t}function kt(){var t=Object(s.a)(["\n\t\tbackground-image: linear-gradient(to top, "," 10%, "," 90%);\n\t"]);return kt=function(){return t},t}var At=i.c.section(Ot(),"30px","30px",(function(t){var n=t.theme.colors,e=t.alternate,r=e?n.bg:n.bgAccent,a=e?n.bgAccent:n.bg;return Object(i.b)(kt(),r,a)})),Ct=i.c.div(jt(),p),It=i.c.h2(xt(),E);function St(){var t=Object(s.a)(["\n\twidth: 100%;\n"]);return St=function(){return t},t}function Pt(){var t=Object(s.a)(["\n\tmin-height: 100vh;\n\tdisplay: flex;\n\talign-items: flex-start;\n\tjustify-content: center;\n"]);return Pt=function(){return t},t}var zt=i.c.div(Pt()),Ft=i.c.div(St()),Wt=function(t){var n=t.children;return a.a.createElement(zt,null,a.a.createElement(Ft,null,n))},Gt=function(t){var n=t.name,e=t.title,r=t.alternate,o=t.children;return a.a.createElement(At,{id:n,alternate:r,"data-test":"section"},a.a.createElement(Wt,null,a.a.createElement(Ct,null,e&&a.a.createElement(It,null,e),o)))};function Mt(){var t=Object(s.a)(["\n\tbackground-color: transparent;\n\tborder: none;\n\tcolor: ",";\n\tcursor: pointer;\n\tfont-size: ",";\n\tmargin: 0;\n\tpadding: 0 ",";\n\ttext-decoration: none;\n\t&:hover {\n\t\tcolor: ",";\n\t}\n"]);return Mt=function(){return t},t}function Rt(){var t=Object(s.a)(["\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n"]);return Rt=function(){return t},t}var Tt=i.c.div(Rt()),Bt=i.c.a(Mt(),(function(t){return t.theme.colors.fg}),"calc(5vw + 5vh + .5vmin)","10px",(function(t){return t.theme.colors.fgAccent})),Qt=e(9),Lt=function(){return a.a.createElement(Tt,{"data-test":"social"},P.map((function(t){var n=t.href,e=t.icon;return a.a.createElement(Bt,{key:"social"+n,href:n},a.a.createElement(Qt.a,{icon:e}))})))},Dt=e(35);function Jt(){var t=Object(s.a)(["\n\t","\n\ttext-align: center;\n\n\ttransition: opacity linear ","ms;\n\topacity: 0;\n\n\t&.fade-enter-active {\n\t\topacity: 1;\n\t}\n\t&.fade-exit-active {\n\t\topacity: 0;\n\t}\n"]);return Jt=function(){return t},t}function Nt(){var t=Object(s.a)(["\n\t","\n\ttext-align: center;\n"]);return Nt=function(){return t},t}function Vt(){var t=Object(s.a)([""]);return Vt=function(){return t},t}var qt=i.c.div(Vt()),Ht=i.c.div(Nt(),E),Ut=i.c.div(Jt(),E,1e3),Zt=F,$t=z,_t=function(){var t=Object(r.useState)(Zt[0]),n=Object(Y.a)(t,2),e=n[0],o=n[1],c=Object(r.useState)(!1),i=Object(Y.a)(c,2),l=i[0],u=i[1];return Object(r.useEffect)((function(){u(!0)}),[]),a.a.createElement(Wt,null,a.a.createElement(qt,{"data-test":"rotary"},a.a.createElement(Ht,null,$t),a.a.createElement(Dt.a,{in:l,classNames:"fade",timeout:2e3,onEntered:function(){u(!1)},onExited:function(){var t=Zt.findIndex((function(t){return t===e})),n=t+1<Zt.length?t+1:0;o(Zt[n]),u(!0)}},a.a.createElement(Ut,null,e))))},Kt=e(3),Xt=e.n(Kt);function Yt(){var t=Object(s.a)([""]);return Yt=function(){return t},t}function tn(){var t=Object(s.a)(["\n\t",";\n\tmargin: 0 ",";\n"]);return tn=function(){return t},t}function nn(){var t=Object(s.a)(["\n\t",";\n\tfont-size: ",";\n"]);return nn=function(){return t},t}function en(){var t=Object(s.a)(["\n\ttext-align: ",";\n\tmargin-bottom: ",";\n"]);return en=function(){return t},t}var rn=i.c.div(en(),(function(t){return t.altStyle?"right":"left"}),"120px");rn.propTypes={alt:Xt.a.bool};var an=i.c.span(nn(),E,"calc(1.7vw + 1.7vh + .4vmin);"),on=i.c.span(tn(),E,"20px"),cn=i.c.span(Yt()),ln=function(){return a.a.createElement(an,null,a.a.createElement(cn,null,"_"))},un=function(){return a.a.createElement(an,null,"> ")},mn=function(){return a.a.createElement(Wt,null,a.a.createElement("div",{"data-test":"log"},W.map((function(t,n){return a.a.createElement(rn,{key:"entry".concat(n),"data-test":"log-entry",altStyle:n%2!==0},a.a.createElement(un,null),t.map((function(t,e){return"string"===typeof t?a.a.createElement(an,{key:"entry-text".concat(n,"-").concat(e)},t):a.a.createElement(on,{key:"entry-icon".concat(n,"-").concat(e),"data-test":"log-entry-icon"},a.a.createElement(Qt.a,{icon:t}))})),a.a.createElement(ln,null))}))))},fn=function(){return a.a.createElement("div",{"data-test":"about"},a.a.createElement(_t,null),a.a.createElement(mn,null))},sn=function(){return a.a.createElement(D,null,a.a.createElement(X,{title:"Loren Ipsum",description:"Web Developer"}),a.a.createElement(Gt,{name:"About"},a.a.createElement(fn,null)),a.a.createElement(Gt,{title:"Check out my projects",name:"Portfolio",alternate:!0},a.a.createElement(yt,null)),a.a.createElement(Gt,{title:"Find me online",name:"Contact"},a.a.createElement(Lt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(sn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.e2d38234.chunk.js.map