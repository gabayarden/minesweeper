(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(39)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),l=(n(18),n(1)),s=n(2),c=n(5),u=n(3),h=n(4),p=(n(20),n(8)),m=(n(22),n(24),n(26),function(e){return r.a.createElement("div",{className:"field-group"},r.a.createElement("input",{type:"text",value:e.value,name:e.name,onChange:e.onChange,required:!0}),r.a.createElement("span",{className:"highlight"}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",null,e.label))}),d=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.height,n=e.width,a=e.numOfMines;return r.a.createElement("div",{className:"game-options"},r.a.createElement("div",{className:"flags-number"},r.a.createElement("div",{className:"flag-pic"}),r.a.createElement("span",{className:"number"},this.props.flagsNumber)," left"),r.a.createElement(m,{name:"height",value:t,onChange:this.props.handleChange,label:"Height"}),r.a.createElement(m,{name:"width",value:n,onChange:this.props.handleChange,label:"Width"}),r.a.createElement(m,{name:"numOfMines",value:a,onChange:this.props.handleChange,label:"# Of Mines"}),r.a.createElement("button",{className:"btn red",onClick:this.props.onNewGame},"Start!"),r.a.createElement("div",{className:"superman-option"},r.a.createElement("input",{name:"isSupermanMode",id:"isSupermanMode",type:"checkbox",onChange:this.props.handleChange})," ",r.a.createElement("label",{htmlFor:"isSupermanMode"},"Superman")," "),r.a.createElement("div",{className:"footer"},"By Yarden Gabay"))}}]),t}(a.Component),v=(n(28),n(7)),g=n(11),f=n(6),b=(n(30),n(32),"Mine"),y="Number",k="Empty",w="Up",O="Down",C="Right",E="Left",N=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"isEven",value:function(e){return e%2===0}},{key:"shouldComponentUpdate",value:function(e,t){return e.gameNumber!==this.props.gameNumber||e.cell.isOpen!==this.props.cell.isOpen||e.cell.isFlagged!==this.props.cell.isFlagged}},{key:"generateButtonStyles",value:function(){var e=[],t=this.props.cell,n=t.row,a=t.col,r=this.isEven(n)&&this.isEven(a)||!this.isEven(n)&&!this.isEven(a)?"dark":"light";return e.push(r),e}},{key:"generateCellStyles",value:function(){var e=[],t=this.props.cell,n=t.value,a=t.isOpen,r=t.row,i=t.col;if(n&&n>0){var o="number-color-"+n;e.push(o)}var l=this.isEven(r)&&this.isEven(i)||!this.isEven(r)&&!this.isEven(i)?"dark":"light";return e.push(l),e.push("cell"),a&&e.push("open"),e}},{key:"renderButton",value:function(){var e=this.props,t=e.onCellClick,n=e.gameOver;return r.a.createElement("button",{disabled:n,className:this.generateButtonStyles().join(" "),onClick:t})}},{key:"renderCellContent",value:function(){var e=this.props.cell,t=e.value,n=e.type;return n===b?r.a.createElement("div",{className:"led-red"}):n===y?r.a.createElement("span",null,t):void 0}},{key:"renderFlag",value:function(){var e=this.props.cell,t=e.isOpen;return e.isFlagged&&!t?r.a.createElement("div",{className:"flag"}):null}},{key:"render",value:function(){return r.a.createElement("div",{className:this.generateCellStyles().join(" ")},this.renderFlag(),this.renderButton(),r.a.createElement("span",{className:"cell-content"},this.renderCellContent()))}}]),t}(a.Component),S=function(e,t,n){var a=Object(v.a)({},e[t][n],{isOpen:!0});e[t][n]=a},j=function(e,t,n,a){for(var r=e-1;r<=e+1;r++)for(var i=t-1;i<=t+1;i++)if(M(n,r,i)){var o=n[r][i];o.isOpen||o.isFlagged||a.push(o)}},M=function(e,t,n){var a=e.length;if(t<0||t>a-1)return!1;var r=e[t].length;return!(n<0||n>r-1)},x=(n(35),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onMove",value:function(){var e=this.props,t=e.dimentions,n=e.type,a=this.props.currentLocation,r=a.row,i=a.col,o=null;switch(n){case w:o={row:r-t.maxScreenHeight,col:i};break;case O:o={row:r+t.maxScreenHeight,col:i};break;case C:o={row:r,col:i+t.maxScreenWidth};break;case E:o={row:r,col:i-t.maxScreenWidth};break;default:o={}}this.props.onMoveBoard(o)}},{key:"shouldShow",value:function(){var e=this.props,t=e.dimentions,n=e.type,a=e.currentLocation,r=!1;switch(n){case w:r=a.row-t.maxScreenHeight>=0;break;case O:r=a.row+t.maxScreenHeight<t.allCellsHeight;break;case C:r=a.col+t.maxScreenWidth<t.allCellsWidth;break;case E:r=a.col-t.maxScreenWidth>=0;break;default:r=!1}return r}},{key:"generateStyle",value:function(){var e="nav-button "+this.props.type;return this.shouldShow()||(e+=" hide"),e}},{key:"render",value:function(){var e=this;return r.a.createElement("span",{className:this.generateStyle(),onClick:function(){return e.onMove()}})}}]),t}(a.Component)),F=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={cells:n.props.cells,gameOver:!1,currentLocation:{row:0,col:0},maxScreenWidth:0,maxScreenHeight:0},n.updateMaxDimensions=n.updateMaxDimensions.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.state.currentLocation;e.gameNumber>this.props.gameNumber&&(t={row:0,col:0}),this.setState({cells:e.cells,gameOver:!1,currentLocation:t})}},{key:"componentDidMount",value:function(){this.updateMaxDimensions(),window.addEventListener("resize",this.updateMaxDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateMaxDimensions)}},{key:"updateMaxDimensions",value:function(){var e=Math.floor((window.innerHeight-100)/45),t=Math.floor((window.innerWidth-340)/45);this.setState({maxScreenHeight:e,maxScreenWidth:t})}},{key:"onCellClick",value:function(e,t){var n=t.row,a=t.col;if(!this.state.gameOver){var r=Object(g.a)(this.state.cells),i=r[n][a],o=!1;this.wasFlagPressed(e)?(this.onCellFlagged(r,n,a),this.checkForWinning()&&(o=!0,this.props.onWin())):(this.exposeCellsByClickedType(r,i),i.type!==b||i.isFlagged||(o=!0,this.props.onLose())),this.setState({cells:r,gameOver:o})}}},{key:"wasFlagPressed",value:function(e){return e.shiftKey}},{key:"exposeCellsByClickedType",value:function(e,t){var n=t.row,a=t.col,r=t.isFlagged,i=t.type;if(!r)switch(i){case b:!function(e,t){t.forEach(function(t){var n=Object(v.a)({},e[t.row][t.col],{isOpen:!0});e[t.row][t.col]=n})}(e,this.props.minePlaces);break;case k:!function(e,t,n){var a=[];for(a.push(e[t][n]);a.length>0;){var r=a.pop(),i=r.row,o=r.col;S(e,i,o),r.type===k&&j(i,o,e,a)}}(e,n,a);break;default:S(e,n,a)}}},{key:"onCellFlagged",value:function(e,t,n){var a=e[t][n].isFlagged;if(this.props.hasFlags()||a){var r=Object(v.a)({},e[t][n],{isFlagged:!a});e[t][n]=r,this.props.onCellFlaggedChanged(r.isFlagged)}}},{key:"checkForWinning",value:function(){var e=!0,t=!1,n=void 0;try{for(var a,r=this.state.cells[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){var i=a.value,o=!0,l=!1,s=void 0;try{for(var c,u=i[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var h=c.value;if(!h.isFlagged&&h.type===b||h.isFlagged&&h.type!==b)return!1}}catch(p){l=!0,s=p}finally{try{o||null==u.return||u.return()}finally{if(l)throw s}}}}catch(p){t=!0,n=p}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}return!0}},{key:"onMoveBoard",value:function(e){this.setState({currentLocation:e})}},{key:"renderBoard",value:function(){var e=this,t=this.state,n=t.cells,a=t.maxScreenWidth,i=t.maxScreenHeight,o=t.currentLocation;return function(e,t,n,a,r){for(var i=[],o=t;o<t+a&&!(o>=e.length);o++){var l=[];i.push(l);for(var s=n;s<n+r&&!(s>=e[o].length);s++)l.push(e[o][s])}return i}(n,o.row,o.col,i,a).map(function(t,n){return r.a.createElement("div",{key:n,className:"row"},e.renderCellsInRow(t))})}},{key:"renderCellsInRow",value:function(e){var t=this;return e.map(function(e){var n=e.key,a=e.row,i=e.col;return r.a.createElement(N,{key:n,onCellClick:function(e){return t.onCellClick(e,{row:a,col:i})},cell:e,gameOver:t.state.gameOver,gameNumber:t.props.gameNumber})})}},{key:"generateDimentionsForNavigationButtons",value:function(){var e=this.state,t=e.maxScreenHeight,n=e.maxScreenWidth,a=e.cells,r={maxScreenHeight:t,maxScreenWidth:n,allCellsHeight:0,allCellsWidth:0};return a.length>0&&a[0].length>0&&(r.allCellsHeight=a.length,r.allCellsWidth=a[0].length),r}},{key:"render",value:function(){var e=this.generateDimentionsForNavigationButtons(),t=this.state.currentLocation;return r.a.createElement("div",{className:"board"},r.a.createElement(x,{dimentions:e,type:O,onMoveBoard:this.onMoveBoard.bind(this),currentLocation:t}),r.a.createElement(x,{dimentions:e,type:w,onMoveBoard:this.onMoveBoard.bind(this),currentLocation:t}),r.a.createElement(x,{dimentions:e,type:E,onMoveBoard:this.onMoveBoard.bind(this),currentLocation:t}),r.a.createElement(x,{dimentions:e,type:C,onMoveBoard:this.onMoveBoard.bind(this),currentLocation:t}),this.renderBoard())}}]),t}(a.Component),W=function(e,t,n){return{key:e,row:t,col:n,value:null,isOpen:!1,isFlagged:!1}},B=function(e,t,n,a){t.forEach(function(r,i){if(!r){var o=L(n,i,e),l=W(i+a*n,n,i);0===o?l.type=k:(l.type=y,l.value=o),t[i]=l}})},L=function(e,t,n){for(var a=0,r=e-1;r<=e+1;r++)for(var i=t-1;i<=t+1;i++)P(r,i,n)&&a++;return a},P=function(e,t,n){if(e>n.length-1||e<0)return!1;var a=n[e];return!(t>a.length-1||t<0)&&(a[t]&&a[t].type===b)},H=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.gameNumber!==this.props.gameNumber}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.width,a=e.numOfMines,i=e.onCellFlaggedChanged,o=e.hasFlags,l=function(e){var t=e.height,n=e.width,a=e.numOfMines;if(a>t*n)return[];for(var r=t*n,i=[],o=[];i.length<a;){var l=Math.floor(Math.random()*r);if(-1===o.indexOf(l)){var s=Math.floor(l/n),c=l%n;i.push({row:s,col:c}),o.push(l)}}return i}({height:t,width:n,numOfMines:a}),s=function(e){var t=e.height,n=e.width,a=e.minePlaces;if(!t||!n||!a)return[];for(var r=new Array(parseInt(t)),i=0;i<t;i++)r[i]=new Array(parseInt(n)).fill(null);return a&&a.forEach(function(e){var t=e.row,a=e.col,i=W(t+n*a,t,a);i.type=b,r[t][a]=i}),r.forEach(function(e,t){B(r,e,t,n)}),r}({height:t,width:n,minePlaces:l});return r.a.createElement("div",{className:"board-wrapper"},r.a.createElement(F,{cells:s,minePlaces:l,onCellFlaggedChanged:i,hasFlags:o,onWin:this.props.onWin,onLose:this.props.onLose,gameNumber:this.props.gameNumber}))}}]),t}(a.Component),D=(n(37),function(e){return r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"popup-inner"},r.a.createElement("h2",null,e.title),e.content,r.a.createElement("div",{className:"popup-footer"},r.a.createElement("button",{className:"btn red",onClick:e.onClick},e.actionText))))}),G=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={height:10,width:10,numOfMines:15,flags:15,gameNumber:1,isSupermanMode:!1,popup:{}},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleGameOptionChange",value:function(e){var t=e.target.name,n=e.target.value;"checkbox"===e.target.type&&(n=e.target.checked),this.isValidInput(e)&&this.setState(Object(p.a)({},t,n))}},{key:"isValidInput",value:function(e){var t=e.target.value;return"checkbox"===e.target.type||!(""!==t&&t<=0||isNaN(t))}},{key:"handleNewGame",value:function(){var e=this.state,t=e.height,n=e.width,a=e.numOfMines;a>t*n||this.setState(function(e,r){return{height:t,width:n,numOfMines:a,flags:a,gameNumber:e.gameNumber+1}})}},{key:"onCellFlaggedChanged",value:function(e){var t=e?this.state.flags-1:this.state.flags+1;this.setState({flags:t})}},{key:"renderPopup",value:function(){var e=this.state.popup,t=e.show,n=e.title,a=e.content,i=e.actionText,o=e.onClick;if(t)return r.a.createElement(D,{title:n,content:a,actionText:i,onClick:o})}},{key:"closePopup",value:function(){this.setState({popup:{open:!1}})}},{key:"openWinningPopup",value:function(){var e=this;this.setState({popup:{show:!0,title:"You Won!",content:"Great job, you did find all the mines!",actionText:"Start Over",onClick:function(){e.closePopup(),e.handleNewGame()}}})}},{key:"openLosingPopup",value:function(){var e=this;this.setState({popup:{show:!0,title:"You Lost :(",content:"You hitted a mine! you can try again...",actionText:"Start Over",onClick:function(){e.closePopup(),e.handleNewGame()}}})}},{key:"render",value:function(){var e=this,t=this.state,n=t.height,a=t.width,i=t.numOfMines,o=t.flags,l=t.gameNumber,s=["game-container"];return this.state.isSupermanMode&&s.push("superman-mode"),r.a.createElement("div",{className:s.join(" ")},this.renderPopup(),r.a.createElement(d,{onNewGame:this.handleNewGame.bind(this),flagsNumber:o,handleChange:this.handleGameOptionChange.bind(this),height:n,width:a,numOfMines:i}),r.a.createElement(H,{height:n,width:a,numOfMines:i,onCellFlaggedChanged:this.onCellFlaggedChanged.bind(this),gameNumber:l,hasFlags:function(){return e.state.flags>0},onWin:this.openWinningPopup.bind(this),onLose:this.openLosingPopup.bind(this)}))}}]),t}(a.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(G,null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,2,1]]]);
//# sourceMappingURL=main.1bb3a84f.chunk.js.map