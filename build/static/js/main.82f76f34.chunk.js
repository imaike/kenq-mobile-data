(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(n,e,t){},146:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),a=t(13),o=t.n(a),c=(t(68),t(1)),l=t(5),u=t(6),s=t(7),d=t(3),p=t(8),m=(t(69),t(2)),b=t(11),f=t(58),g=t.n(f),x=Object(b.a)({setState:function(n){for(var e=Object.keys(n),t=0;t<e.length;t+=1)this[e[t]]=n[e[t]]},getState:function(n){var e=this[n];return g()(e)},displayAdmin:!0,displayStatements:!1,displayDemonstration:!1,displayData:!1,displayDelete:!1,displayPresort:!1,displaySort:!1,displayPostsort:!1,displaySurvey:!1});function h(){var n=Object(c.a)(["\n  height: 480px;\n  width: 1270px;\n  background: whitesmoke;\n"]);return h=function(){return n},n}function v(){var n=Object(c.a)(["\n  font-size: 30px;\n"]);return v=function(){return n},n}function k(){var n=Object(c.a)(["\n  margin-top: 50px;\n  grid-column-start: 1;\n  grid-column-end: 5;\n  grid-row-start: 2;\n  /* border: 2px solid red; */\n"]);return k=function(){return n},n}function y(){var n=Object(c.a)(["\n  appearance: none;\n  position: relative;\n  font-family: HelveticaNeue-CondensedBlack, Arial, Helvetica, sans-serif;\n  margin-left: 5px;\n  width: 250px;\n  margin-top: 2px;\n  height: 250px;\n  background: #55b262;\n  color: #323232;\n  font-weight: 900;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  grid-column-start: 4;\n  grid-row-start: 1;\n  font-size: 1300%;\n  text-align: center;\n  user-select: none;\n  border: 0px solid black;\n  outline: none;\n\n  p {\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  &:active {\n    background-color: #448e4e;\n  }\n"]);return y=function(){return n},n}function j(){var n=Object(c.a)(["\n  position: relative;\n  font-family: HelveticaNeue-CondensedBlack, Arial, Helvetica, sans-serif;\n  appearance: none;\n  width: 250px;\n  height: 140px;\n  margin-top: 10px;\n  margin-bottom: 15px;\n  margin-left: 46px;\n  color: #323232;\n  background: #1985c5;\n  border: 0px solid #666;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  font-size: 300%;\n  text-align: center;\n  line-height: 1.05em;\n\n  &:active {\n    background-color: #146a9d;\n  }\n"]);return j=function(){return n},n}function w(){var n=Object(c.a)(["\n  position: relative;\n  font-family: HelveticaNeue-CondensedBlack, Arial, Helvetica, sans-serif;\n  appearance: none;\n  height: 140px;\n  width: 250px;\n  margin-left: 45px;\n  margin-bottom: 15px;\n  margin-top: 10px;\n  color: #323232;\n  background: #1985c5;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  border: 0px solid #666;\n  font-size: 300%;\n  text-align: center;\n  line-height: 1em;\n\n  &:active {\n    background-color: #146a9d;\n  }\n"]);return w=function(){return n},n}function O(){var n=Object(c.a)(["\n  width: 250px;\n  grid-column-start: 3;\n  grid-row-start: 1;\n  /* border: 2px solid yellow; */\n\n  input {\n    width: 250px;\n    font-size: 20px;\n    margin-bottom: 30px;\n  }\n"]);return O=function(){return n},n}function C(){var n=Object(c.a)(["\n  grid-column-start: 2;\n  grid-row-start: 1;\n  /* border: 2px solid yellow; */\n"]);return C=function(){return n},n}function E(){var n=Object(c.a)(["\n  grid-column-start: 1;\n  grid-row-start: 1;\n  /* border: 2px solid yellow; */\n"]);return E=function(){return n},n}function S(){var n=Object(c.a)(["\n  display: grid;\n  justify-items: center;\n  grid-template-columns: 341px 342px 342px 341px;\n  grid-template-rows: 350px auto;\n  width: 1366px;\n  height: 1004px;\n  background-color: #323232;\n  color: white;\n  padding-top: 20px;\n  visibility: ",";\n  animation: "," 0.2s linear;\n  transition: visibility 1s linear;\n"]);return S=function(){return n},n}function z(){var n=Object(c.a)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]);return z=function(){return n},n}function N(){var n=Object(c.a)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]);return N=function(){return n},n}var A=function(n){console.log(n.target.id);var e=n.target.id;"StatementsButton"===e&&x.setState({displayAdmin:!1,displayStatements:!0}),"goButton"===e&&x.setState({displayAdmin:!1,displayPresort:!0})},B=function(n){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){console.log("TCL: Admin -> render -> props",this.props);var n=this.props,e=n.projectName,t=n.email;return i.a.createElement(T,null,i.a.createElement(L,null,i.a.createElement(R,{id:"emailButton",onClick:A},"Email Results"),i.a.createElement(R,{id:"informationButton",onClick:A},"Information")),i.a.createElement(P,null,i.a.createElement(V,{id:"deleteButton",onClick:A},"Delete Data"),i.a.createElement(V,{id:"StatementsButton",onClick:A},"Statements")),i.a.createElement(U,null,i.a.createElement("label",{htmlFor:"projectNameInput"},"Project Name:",i.a.createElement("input",{id:"projectNameInput",type:"text",name:"projectName",defaultValue:e})),i.a.createElement("label",{htmlFor:"emailAddressInput"},"Email Address:",i.a.createElement("input",{id:"emailAddressInput",type:"text",name:"email",defaultValue:t}))),i.a.createElement(J,{id:"goButton",onClick:A},"Q"),i.a.createElement(F,null,i.a.createElement(G,null,"Results"),i.a.createElement(W,null)))}}]),e}(r.Component),H=Object(b.b)(B),D=Object(m.b)(N()),I=Object(m.b)(z()),T=m.a.div(S(),function(n){return n.out?"hidden":"visible"},function(n){return n.out?I:D}),L=m.a.div(E()),P=m.a.div(C()),U=m.a.div(O()),R=m.a.button(w()),V=m.a.button(j()),J=m.a.button(y()),F=m.a.div(k()),G=m.a.div(v()),W=m.a.div(h());function q(){var n=Object(c.a)(["\n  display: flex;\n  align-items: end;\n"]);return q=function(){return n},n}function M(){var n=Object(c.a)(["\n  position: relative;\n  font-family: HelveticaNeue-CondensedBlack, Arial, Helvetica, sans-serif;\n  appearance: none;\n  height: 40px;\n  width: 100px;\n  margin-left: 45px;\n  margin-top: 20px;\n  color: #323232;\n  background: #1985c5;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  border: 0px solid #666;\n  font-size: 150%;\n  text-align: center;\n  line-height: 1em;\n\n  &:active {\n    background-color: #146a9d;\n  }\n"]);return M=function(){return n},n}function Q(){var n=Object(c.a)(["\n  width: 1366px;\n  height: 1004px;\n  background-color: #323232;\n  color: whitesmoke;\n  padding: 20px;\n  visibility: ",";\n  animation: "," 0.2s linear;\n  transition: visibility 1s linear;\n"]);return Q=function(){return n},n}function X(){var n=Object(c.a)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]);return X=function(){return n},n}function $(){var n=Object(c.a)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]);return $=function(){return n},n}var K=function(){console.log("clicked"),x.setState({displayAdmin:!0,displayStatements:!1})},Y=function(n){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this.props.columnStatements,e=n.statementList;return console.log("TCL: Statements -> render -> statementList",n),i.a.createElement(en,null,i.a.createElement(rn,null,i.a.createElement("h1",null,"Statements"),i.a.createElement(tn,{onClick:K},"Return")),i.a.createElement("ol",null,e.map(function(n){return i.a.createElement("li",{key:n.statementNum},n.statement)})))}}]),e}(r.Component),Z=Object(b.b)(Y),_=Object(m.b)($()),nn=Object(m.b)(X()),en=m.a.div(Q(),function(n){return n.out?"hidden":"visible"},function(n){return n.out?nn:_}),tn=m.a.button(M()),rn=m.a.div(q()),an=t(23);t(145);function on(){var n=Object(c.a)(["\n  background-color: lightpink;\n  font-size: 25px;\n  box-sizing: border-box;\n  font-weight: normal;\n  width: 40px;\n  height: 35px;\n"]);return on=function(){return n},n}function cn(){var n=Object(c.a)(["\n  background-color: lightpink;\n  box-sizing: border-box;\n  font-size: 25px;\n  font-weight: bold;\n  width: 40px;\n  height: 35px;\n  border: 3px solid black;\n"]);return cn=function(){return n},n}var ln=function(n){return n.border?i.a.createElement(un,{id:"pink-"+n.index,onClick:n.onClick},"-"):i.a.createElement(sn,{id:"pink-"+n.index,onClick:n.onClick},"-")},un=m.a.button(cn()),sn=m.a.button(on());function dn(){var n=Object(c.a)(["\n  background-color: #c7f6c7;\n  font-size: 25px;\n  box-sizing: border-box;\n  font-weight: normal;\n  width: 40px;\n  height: 35px;\n"]);return dn=function(){return n},n}function pn(){var n=Object(c.a)(["\n  background-color: #c7f6c7;\n  box-sizing: border-box;\n  font-size: 25px;\n  font-weight: bold;\n  width: 40px;\n  height: 35px;\n  border: 3px solid black;\n"]);return pn=function(){return n},n}var mn=function(n){return n.border?i.a.createElement(bn,{id:"green-"+n.index,onClick:n.onClick},"+"):i.a.createElement(fn,{id:"green-"+n.index,onClick:n.onClick},"+")},bn=m.a.button(pn()),fn=m.a.button(dn());function gn(){var n=Object(c.a)(["\n  background-color: rgba(211, 211, 211, 0.6);\n  font-size: 25px;\n  box-sizing: border-box;\n  font-weight: normal;\n  width: 40px;\n  height: 35px;\n"]);return gn=function(){return n},n}function xn(){var n=Object(c.a)(["\n  background-color: rgba(211, 211, 211, 0.6);\n  box-sizing: border-box;\n  font-size: 25px;\n  font-weight: bold;\n  width: 40px;\n  height: 35px;\n  border: 3px solid black;\n"]);return xn=function(){return n},n}var hn=function(n){return n.border?i.a.createElement(vn,{id:"yellow-"+n.index,onClick:n.onClick},"?"):i.a.createElement(kn,{id:"yellow-"+n.index,onClick:n.onClick},"?")},vn=m.a.button(xn()),kn=m.a.button(gn()),yn=function(n,e,t){var r=t.statementList.slice(),i=n.target.id.split("-"),a=i[0],o=i[1];"green"===a&&(r[o].cardColor="greenSortCard",r[o].divColor="isPositiveStatement",r[o].sortValue=111,r[o].greenChecked=!0,r[o].pinkChecked=!1,r[o].yellowChecked=!1),"yellow"===a&&(r[o].cardColor="yellowSortCard",r[o].divColor="isUncertainStatement",r[o].pinkChecked=!1,r[o].yellowChecked=!0,r[o].greenChecked=!1,r[o].sortValue=222),"pink"===a&&(r[o].cardColor="pinkSortCard",r[o].divColor="isNegativeStatement",r[o].pinkChecked=!0,r[o].yellowChecked=!1,r[o].greenChecked=!1,r[o].sortValue=333),t.statements=Object(an.a)(r),sessionStorage.setItem("columnStatements",JSON.stringify(t)),e()};var jn=function(n){var e=n.columnStatements.statementList;return i.a.createElement("div",{className:"is-scrollable listDiv"},e.map(function(e,t){return i.a.createElement("div",{id:t,key:e.statement,className:"level levelDiv ".concat(e.divColor)},i.a.createElement("div",{className:"is-pulled-left",style:{display:"flex",marginRight:25}},i.a.createElement(ln,{index:t,border:e.pinkChecked,key:"".concat(e.statement,"-pink"),onClick:function(e){yn(e,n.forceUpdate,n.columnStatements)}}),i.a.createElement(hn,{index:t,border:e.yellowChecked,key:"".concat(e.statement,"-yellow"),onClick:function(e){yn(e,n.forceUpdate,n.columnStatements)}}),i.a.createElement(mn,{index:t,border:e.greenChecked,key:"".concat(e.statement,"-green"),onClick:function(e){yn(e,n.forceUpdate,n.columnStatements)}})),i.a.createElement("div",{className:"level-item levelItemCustom"},e.statement))}))};function wn(){var n=Object(c.a)(["\n  font-family: HelveticaNeue-CondensedBlack, Arial, Helvetica, sans-serif;\n  appearance: none;\n  height: 40px;\n  width: 100px;\n  font-size: 25px;\n  margin-left: 845px;\n  margin-top: 20px;\n  color: whitesmoke;\n  background: #323232;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  border: 0px solid #666;\n  text-align: center;\n  line-height: 1em;\n\n  &:active {\n    background-color: #146a9d;\n  }\n"]);return wn=function(){return n},n}function On(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  margin: 0;\n  width: 100%;\n  padding-left: 50px;\n  height: 120px;\n  background: steelblue;\n  text-align: center;\n  color: white;\n  font-size: 35px;\n"]);return On=function(){return n},n}function Cn(){var n=Object(c.a)(["\n  width: 1366px;\n  height: 1004px;\n  background-color: #323232;\n  color: whitesmoke;\n  visibility: ",";\n  animation: "," 0.2s linear;\n  transition: visibility 1s linear;\n"]);return Cn=function(){return n},n}function En(){var n=Object(c.a)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]);return En=function(){return n},n}function Sn(){var n=Object(c.a)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]);return Sn=function(){return n},n}var zn=function(){console.log("clicked"),x.setState({displayAdmin:!0,displayPresort:!1})},Nn=function(n){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this,e=this.props,t=e.titleText,r=(e.nextButtonText,e.columnStatements);return i.a.createElement(Hn,null,i.a.createElement(Dn,null,i.a.createElement("div",null,t),i.a.createElement("div",null,i.a.createElement(In,{onClick:zn},"Next"))),i.a.createElement(jn,{columnStatements:r,forceUpdate:function(){n.forceUpdate()}}))}}]),e}(r.Component),An=Object(m.b)(Sn()),Bn=Object(m.b)(En()),Hn=m.a.div(Cn(),function(n){return n.out?"hidden":"visible"},function(n){return n.out?Bn:An}),Dn=m.a.div(On()),In=m.a.button(wn());function Tn(){var n=Object(c.a)(["\n  background-color: black;\n  /* width: 1366px;\n  height: 1024px;\n  \n  padding: 20px; */\n"]);return Tn=function(){return n},n}var Ln=function(n){function e(){return Object(l.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=x.getState("displayAdmin"),e=x.getState("displayPresort"),t=x.getState("displayStatements"),r=this.props,a=r.adminData,o=r.columnStatements,c=r.preSortData;return i.a.createElement(Un,null,n&&i.a.createElement(H,Object.assign({},a,{out:n})),t&&i.a.createElement(Z,{out:t,columnStatements:o}),e&&i.a.createElement(Nn,Object.assign({},c,{out:e,columnStatements:o})))}}]),e}(r.Component),Pn=Object(b.b)(Ln),Un=m.a.div(Tn());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Rn=new XMLHttpRequest,Vn={};Rn.onreadystatechange=function(){4===this.readyState&&200===this.status&&(Vn=JSON.parse(Rn.responseText),o.a.render(i.a.createElement(Pn,Vn),document.getElementById("root")))},Rn.open("GET","".concat(".","/SETTINGS.json"),!0),Rn.send(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},63:function(n,e,t){n.exports=t(146)},68:function(n,e,t){},69:function(n,e,t){}},[[63,1,2]]]);
//# sourceMappingURL=main.82f76f34.chunk.js.map