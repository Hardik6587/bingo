(this.webpackJsonpbingo=this.webpackJsonpbingo||[]).push([[0],[,,,,,,,,,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var i=n(0),m=n(1),s=n.n(m),g=n(7),t=n.n(g),c=(n(13),n(2)),r=n(5),l=(n(14),function(e){var a=e.item,n=e.cardIndex,m=e.selectCard;return Object(i.jsxs)("div",{className:"bingo-card",children:[a.selected&&!a.bingo&&Object(i.jsx)("img",{className:"bingo-selected",src:a.image,alt:a.name}),!a.selected&&Object(i.jsxs)("span",{className:"card-name",onClick:function(){m(n)},children:[" ",a.name," "]}),a.bingo&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{className:"bingo-done",src:"./images/bingo.jpg",alt:a.name}),Object(i.jsxs)("span",{className:"bingo-player",children:[" ",a.name," "]})]})]})}),o=function(){return[{name:"Alisson Becker",selected:!1,image:"./images/liverpool1.jpg"},{name:"Jordan Henderson",selected:!1,image:"./images/liverpool2.jpg"},{name:"Virgil Van Daijk",selected:!1,image:"./images/liverpool3.jpg"},{name:"Andrew Robertson",selected:!1,image:"./images/liverpool4.jpg"},{name:"Steven Gerrard",selected:!1,image:"./images/liverpool5.jpg"},{name:"Xander Shakiri",selected:!1,image:"./images/liverpool6.jpg"},{name:"Mohamed Salah",selected:!1,image:"./images/liverpool7.jpg"},{name:"Bobby Firminho",selected:!1,image:"./images/liverpool8.jpg"},{name:"Roman B\xfcrki",selected:!1,image:"./images/dortmund1.jpg"},{name:"Dan-Axel Zagadou",selected:!1,image:"./images/dortmund2.jpg"},{name:"Jadon Sancho",selected:!1,image:"./images/dortmund3.jpg"},{name:"Mahmoud Dahoud",selected:!1,image:"./images/dortmund4.jpg"},{name:"Erling Haaland",selected:!1,image:"./images/dortmund5.jpg"},{name:"Marco Reus",selected:!1,image:"./images/dortmund6.jpg"},{name:"Mats Hummels",selected:!1,image:"./images/dortmund7.jpg"},{name:"Nico Schulz",selected:!1,image:"./images/dortmund8.jpg"},{name:"Manuel Neuer",selected:!1,image:"./images/munich1.jpg"},{name:"Benjamin Pavard",selected:!1,image:"./images/munich2.jpg"},{name:"Serge Gnabry",selected:!1,image:"./images/munich3.jpg"},{name:"Robert Lewandowski",selected:!1,image:"./images/munich4.jpg"},{name:"Leroy San\xe9",selected:!1,image:"./images/munich5.jpg"},{name:"Douglas Costa",selected:!1,image:"./images/munich6.jpg"},{name:"J\xe9r\xf4me Boateng",selected:!1,image:"./images/munich7.jpg"},{name:"Thomas M\xfcller",selected:!1,image:"./images/munich8.jpg"},{name:"Paul Pogba",selected:!1,image:"./images/manchester1.jpg"},{name:"Edinson Cavani",selected:!1,image:"./images/manchester2.jpg"},{name:"Bruno Fernandes",selected:!1,image:"./images/manchester3.jpg"},{name:"Harry Maguire",selected:!1,image:"./images/manchester4.jpg"},{name:"Donny van de Beek",selected:!1,image:"./images/manchester5.jpg"},{name:"Luke Shaw",selected:!1,image:"./images/manchester6.jpg"},{name:"Fred",selected:!1,image:"./images/manchester7.jpg"},{name:"Marcus Rashford",selected:!1,image:"./images/manchester8.jpg"},{name:"Marc-Andr\xe9 ter Stegen",selected:!1,image:"./images/barcelona1.jpg"},{name:"Gerard Piqu\xe9",selected:!1,image:"./images/barcelona2.jpg"},{name:"Sergio Busquets",selected:!1,image:"./images/barcelona3.jpg"},{name:"Antoine Griezmann",selected:!1,image:"./images/barcelona4.jpg"},{name:"Lionel Messi",selected:!1,image:"./images/barcelona5.jpg"},{name:"Philippe Coutinho",selected:!1,image:"./images/barcelona6.jpg"},{name:"Jordi Alba",selected:!1,image:"./images/barcelona7.jpg"},{name:"Sergi Roberto",selected:!1,image:"./images/barcelona8.jpg"}]},d=function(e,a){for(var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=!0,m=e;m<e+5;m++)if(n)a[m].bingo=!0;else if(!0!==a[m].selected){i=!1;break}return i},j=function(e,a){for(var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=!0,m=0;m<5;m++)if(n)a[e+5*m].bingo=!0;else if(!0!==a[e+5*m].selected){i=!1;break}return i},u=function(e){for(var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!0,i=0;i<5;i++)if(a&&(e[5*i+i].bingo=!0),!0!==e[5*i+i].selected){n=!1;break}return n},p=function(e){for(var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!0,i=1;i<=5;i++)if(a&&(e[5*i-i].bingo=!0),!0!==e[5*i-i].selected){n=!1;break}return n},b={getRandomNumberForLoading:function(){return Math.floor(25*Math.random())},getBingoList:function(){for(var e=[{name:"Alisson Becker",selected:!1,image:"./images/liverpool1.jpg"},{name:"Jordan Henderson",selected:!1,image:"./images/liverpool2.jpg"},{name:"Virgil Van Daijk",selected:!1,image:"./images/liverpool3.jpg"},{name:"Andrew Robertson",selected:!1,image:"./images/liverpool4.jpg"},{name:"Steven Gerrard",selected:!1,image:"./images/liverpool5.jpg"},{name:"Xander Shakiri",selected:!1,image:"./images/liverpool6.jpg"},{name:"Mohamed Salah",selected:!1,image:"./images/liverpool7.jpg"},{name:"Bobby Firminho",selected:!1,image:"./images/liverpool8.jpg"},{name:"Roman B\xfcrki",selected:!1,image:"./images/dortmund1.jpg"},{name:"Dan-Axel Zagadou",selected:!1,image:"./images/dortmund2.jpg"},{name:"Jadon Sancho",selected:!1,image:"./images/dortmund3.jpg"},{name:"Mahmoud Dahoud",selected:!1,image:"./images/dortmund4.jpg"},{name:"Erling Haaland",selected:!1,image:"./images/dortmund5.jpg"},{name:"Marco Reus",selected:!1,image:"./images/dortmund6.jpg"},{name:"Mats Hummels",selected:!1,image:"./images/dortmund7.jpg"},{name:"Nico Schulz",selected:!1,image:"./images/dortmund8.jpg"},{name:"Manuel Neuer",selected:!1,image:"./images/munich1.jpg"},{name:"Benjamin Pavard",selected:!1,image:"./images/munich2.jpg"},{name:"Serge Gnabry",selected:!1,image:"./images/munich3.jpg"},{name:"Robert Lewandowski",selected:!1,image:"./images/munich4.jpg"},{name:"Leroy San\xe9",selected:!1,image:"./images/munich5.jpg"},{name:"Douglas Costa",selected:!1,image:"./images/munich6.jpg"},{name:"J\xe9r\xf4me Boateng",selected:!1,image:"./images/munich7.jpg"},{name:"Thomas M\xfcller",selected:!1,image:"./images/munich8.jpg"},{name:"Paul Pogba",selected:!1,image:"./images/manchester1.jpg"},{name:"Edinson Cavani",selected:!1,image:"./images/manchester2.jpg"},{name:"Bruno Fernandes",selected:!1,image:"./images/manchester3.jpg"},{name:"Harry Maguire",selected:!1,image:"./images/manchester4.jpg"},{name:"Donny van de Beek",selected:!1,image:"./images/manchester5.jpg"},{name:"Luke Shaw",selected:!1,image:"./images/manchester6.jpg"},{name:"Fred",selected:!1,image:"./images/manchester7.jpg"},{name:"Marcus Rashford",selected:!1,image:"./images/manchester8.jpg"},{name:"Marc-Andr\xe9 ter Stegen",selected:!1,image:"./images/barcelona1.jpg"},{name:"Gerard Piqu\xe9",selected:!1,image:"./images/barcelona2.jpg"},{name:"Sergio Busquets",selected:!1,image:"./images/barcelona3.jpg"},{name:"Antoine Griezmann",selected:!1,image:"./images/barcelona4.jpg"},{name:"Lionel Messi",selected:!1,image:"./images/barcelona5.jpg"},{name:"Philippe Coutinho",selected:!1,image:"./images/barcelona6.jpg"},{name:"Jordi Alba",selected:!1,image:"./images/barcelona7.jpg"},{name:"Sergi Roberto",selected:!1,image:"./images/barcelona8.jpg"}],a=new Set;25!==a.size;){var n=Math.floor(Math.random()*e.length);a.add(n)}for(var i=Object(r.a)(a),m=[],s=0;s<25;s++){var g=e[i[s]];12===s&&(g.selected=!0),m.push(g)}return m},checkOrSetRowBingo:d,checkOrSetColBingo:j,checkBingo:function(e,a){var n=5*parseInt(e/5),i=parseInt(e%5);d(n,a)&&d(n,a,!0),j(i,a)&&j(i,a,!0),u(a)&&u(a,!0),p(a)&&p(a,!0)},getAllPlayers:o},h=(n(15),Object(m.forwardRef)((function(e,a){var n=e.setLoading,s=Object(m.useState)(b.getAllPlayers().slice(0,25)),g=Object(c.a)(s,2),t=g[0],o=g[1],d=Object(m.useState)(!0),j=Object(c.a)(d,2),u=j[0],p=j[1];Object(m.useImperativeHandle)(a,(function(){return{resetBingo:function(){n(!0),o(b.getAllPlayers().slice(0,25)),p(!0)}}})),Object(m.useEffect)((function(){if(u){var e=document.querySelectorAll(".bingo-card"),a=setInterval((function(){var a=b.getRandomNumberForLoading(),n=e[a];n.classList.add("bingo-card-load"),setTimeout((function(){n.classList.remove("bingo-card-load")}),90)}),100);setTimeout((function(){clearInterval(a),n(!1),o(b.getBingoList()),p(!1)}),3200)}}),[u]);var h=function(e){var a=Object(r.a)(t);a[e].selected=!0,o(a),b.checkBingo(e,a)};return Object(i.jsx)("div",{className:"bingo",children:t&&t.map((function(e,a){return Object(i.jsx)(l,{item:e,cardIndex:a,selectCard:h},e.image)}))})})));n(16);var v=function(){var e=Object(m.useState)(!0),a=Object(c.a)(e,2),n=a[0],s=a[1],g=Object(m.useState)(!1),t=Object(c.a)(g,2),r=t[0],l=t[1],o=Object(m.useRef)(null);return Object(i.jsxs)(i.Fragment,{children:[n&&Object(i.jsx)("div",{className:"loading",children:"Loading...  Please wait..."}),r&&Object(i.jsx)("div",{className:"lets-play",children:"Game is Loaded. Let's Play"}),Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)("header",{className:"app-header",children:"Mind Game - Football Bingo"}),Object(i.jsx)("span",{className:"btn",onClick:function(){o.current.resetBingo()},children:"Reset Game"}),Object(i.jsx)(h,{setLoading:function(e){s(e),e||(l(!0),setTimeout(l,2e3))},ref:o})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(a){var n=a.getCLS,i=a.getFID,m=a.getFCP,s=a.getLCP,g=a.getTTFB;n(e),i(e),m(e),s(e),g(e)}))};t.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),f()}],[[17,1,2]]]);
//# sourceMappingURL=main.657c90ae.chunk.js.map