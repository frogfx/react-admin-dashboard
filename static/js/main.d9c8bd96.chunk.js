(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,n){e.exports=n(88)},45:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(22),l=n.n(r),o=(n(45),n(7)),c=n(8),s=n(10),m=n(9),d=n(1),u=n(2),p=function(){return i.a.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("circle",{cx:"16",cy:"16",r:"16",fill:"#3751FF"}),i.a.createElement("path",{d:"M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z",fill:"url(#paint0_linear)"}),i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:"paint0_linear",x1:"11",y1:"9",x2:"23",y2:"23",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{stopColor:"white",stopOpacity:"0.7"}),i.a.createElement("stop",{offset:"1",stopColor:"white"}))))},h=u.a.create({container:{marginLeft:32,marginRight:32},title:{fontFamily:"Muli",fontStyle:"normal",fontWeight:"bold",fontSize:19,lineHeight:"24px",letterSpacing:"0.4px",color:"#A4A6B3",opacity:.7,marginLeft:12}});var C=function(){return i.a.createElement(d.Row,{className:Object(u.b)(h.container),horizontal:"center",vertical:"center"},i.a.createElement(p,null),i.a.createElement("span",{className:Object(u.b)(h.title)},"Dashboard Kit"))},g=n(17),b=n(33),f=u.a.create({activeContainer:{backgroundColor:"rgba(221,226,255, 0.08)"},activeBar:{borderLeft:"3px solid #DDE2FF"},activeTitle:{color:"#DDE2FF"},containerSubItem:{cursor:"pointer",":hover":{backgroundColor:"rgba(221,226,255, 0.08)"},paddingLeft:64,transition:"background-color 0.425s ease-in-out"},inactiveBar:{borderLeft:"3px solid #8b8d94"},title:{fontFamily:"Muli",fontSize:16,lineHeight:"20px",letterSpacing:"0.2px",color:"#A4A6B3",marginLeft:24}});var v=function(e,t){var n=e.active,a=e.icon,r=e.onClick,l=e.title;return i.a.createElement(d.Row,{key:"subitem-".concat(t),className:Object(u.b)(f.containerSubItem,n&&f.activeContainer,n?f.activeBar:f.inactiveBar),vertical:"center",onClick:r,style:{height:56}},a,i.a.createElement("span",{className:Object(u.b)(f.title,f.activeTitle)},l))},w=u.a.create({activeContainer:{backgroundColor:"rgba(221,226,255, 0.08)"},activeBar:{borderLeft:"3px solid #DDE2FF"},activeTitle:{color:"#DDE2FF"},container:{display:"flex",height:56,cursor:"pointer",":hover":{backgroundColor:"rgba(221,226,255, 0.08)"},paddingLeft:32,paddingRight:32,transition:"background-color 0.425s ease-in-out"},title:{fontFamily:"Muli",fontSize:16,lineHeight:"20px",letterSpacing:"0.2px",color:"#A4A6B3",marginLeft:24}});var E=function(e){var t=e.active,n=e.expanded,a=e.icon,r=e.subItems,l=void 0===r?[]:r,o=e.title,c=e.onClick,s=a;return i.a.createElement(d.Column,null,i.a.createElement(d.Row,{vertical:"center",onClick:c,className:"".concat(Object(u.b)(w.container,t&&w.activeContainer,t&&w.activeBar))},i.a.createElement(s,{fill:t?"#DDE2FF":"#9FA2B4",opacity:!t&&"0.4"}),i.a.createElement("span",{className:Object(u.b)(w.title,t&&w.activeTitle)},o)),l&&l.length?i.a.createElement(b.a,{title:o,expanded:n},l.map(function(e,t){return v(Object(g.a)({},e),t)})):i.a.createElement("div",null))},x=function(e){return i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{clipPath:"url(#clip0)"},i.a.createElement("path",{opacity:e.opacity||"",d:"M15.5232 8.94116H8.54412L13.1921 13.5891C13.3697 13.7667 13.6621 13.7812 13.8447 13.6091C14.9829 12.5367 15.7659 11.0912 15.9956 9.46616C16.035 9.18793 15.8041 8.94116 15.5232 8.94116V8.94116ZM15.0576 7.03528C14.8153 3.52176 12.0076 0.714119 8.49412 0.471767C8.22589 0.453237 8 0.679413 8 0.948236V7.5294H14.5815C14.8503 7.5294 15.0762 7.30352 15.0576 7.03528ZM6.58824 8.94116V1.96206C6.58824 1.68118 6.34147 1.45029 6.06353 1.48971C2.55853 1.985 -0.120585 5.04705 0.00412089 8.71675C0.132356 12.4856 3.37736 15.5761 7.14794 15.5288C8.6303 15.5103 10 15.0326 11.1262 14.2338C11.3585 14.0691 11.3738 13.727 11.1724 13.5256L6.58824 8.94116Z",fill:e.fill||"#9FA2B4"})),i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"clip0"},i.a.createElement("rect",{width:"16",height:"16",fill:"white"}))))},F=function(e){return i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{opacity:e.opacity||"",d:"M3.55556 5.33334H12.4444V10.6667H3.55556V5.33334ZM14.6667 8C14.6667 8.73639 15.2636 9.33334 16 9.33334V12C16 12.7364 15.4031 13.3333 14.6667 13.3333H1.33333C0.596944 13.3333 0 12.7364 0 12V9.33334C0.736389 9.33334 1.33333 8.73639 1.33333 8C1.33333 7.26362 0.736389 6.66667 0 6.66667V4.00001C0 3.26362 0.596944 2.66667 1.33333 2.66667H14.6667C15.4031 2.66667 16 3.26362 16 4.00001V6.66667C15.2636 6.66667 14.6667 7.26362 14.6667 8ZM13.3333 5.11112C13.3333 4.74292 13.0349 4.44445 12.6667 4.44445H3.33333C2.96514 4.44445 2.66667 4.74292 2.66667 5.11112V10.8889C2.66667 11.2571 2.96514 11.5556 3.33333 11.5556H12.6667C13.0349 11.5556 13.3333 11.2571 13.3333 10.8889V5.11112Z",fill:e.fill||"#9FA2B4"}))},k=function(e){return i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{clipPath:"url(#clip0)"},i.a.createElement("path",{opacity:e.opacity||"",d:"M5.50187 14.1984C5.50219 14.395 5.56031 14.5875 5.66937 14.7512L6.20344 15.5541C6.29467 15.6913 6.41841 15.8039 6.56366 15.8817C6.7089 15.9596 6.87114 16.0003 7.03594 16.0003H8.96438C9.12917 16.0003 9.29141 15.9596 9.43665 15.8817C9.5819 15.8039 9.70564 15.6913 9.79688 15.5541L10.3309 14.7512C10.44 14.5875 10.4982 14.3952 10.4984 14.1984L10.4997 13H5.50031L5.50187 14.1984ZM2.5 5.5C2.5 6.88656 3.01406 8.15156 3.86125 9.11812C4.3775 9.70718 5.185 10.9378 5.49281 11.9759C5.49406 11.9841 5.495 11.9922 5.49625 12.0003H10.5037C10.505 11.9922 10.5059 11.9844 10.5072 11.9759C10.815 10.9378 11.6225 9.70718 12.1388 9.11812C12.9859 8.15156 13.5 6.88656 13.5 5.5C13.5 2.45656 11.0284 -0.00937887 7.98281 -3.87451e-06C4.795 0.00968363 2.5 2.59281 2.5 5.5ZM8 3C6.62156 3 5.5 4.12156 5.5 5.5C5.5 5.77625 5.27625 6 5 6C4.72375 6 4.5 5.77625 4.5 5.5C4.5 3.57 6.07 2 8 2C8.27625 2 8.5 2.22375 8.5 2.5C8.5 2.77625 8.27625 3 8 3Z",fill:e.fill||"#9FA2B4"}),"/>"),i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"clip0"},i.a.createElement("rect",{width:"16",height:"16",fill:"white"}))))},y=function(e){return i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{opacity:e.opacity||"",d:"M2.4 7.2C3.2825 7.2 4 6.4825 4 5.6C4 4.7175 3.2825 4 2.4 4C1.5175 4 0.8 4.7175 0.8 5.6C0.8 6.4825 1.5175 7.2 2.4 7.2ZM13.6 7.2C14.4825 7.2 15.2 6.4825 15.2 5.6C15.2 4.7175 14.4825 4 13.6 4C12.7175 4 12 4.7175 12 5.6C12 6.4825 12.7175 7.2 13.6 7.2ZM14.4 8H12.8C12.36 8 11.9625 8.1775 11.6725 8.465C12.68 9.0175 13.395 10.015 13.55 11.2H15.2C15.6425 11.2 16 10.8425 16 10.4V9.6C16 8.7175 15.2825 8 14.4 8ZM8 8C9.5475 8 10.8 6.7475 10.8 5.2C10.8 3.6525 9.5475 2.4 8 2.4C6.4525 2.4 5.2 3.6525 5.2 5.2C5.2 6.7475 6.4525 8 8 8ZM9.92 8.8H9.7125C9.1925 9.05 8.615 9.2 8 9.2C7.385 9.2 6.81 9.05 6.2875 8.8H6.08C4.49 8.8 3.2 10.09 3.2 11.68V12.4C3.2 13.0625 3.7375 13.6 4.4 13.6H11.6C12.2625 13.6 12.8 13.0625 12.8 12.4V11.68C12.8 10.09 11.51 8.8 9.92 8.8ZM4.3275 8.465C4.0375 8.1775 3.64 8 3.2 8H1.6C0.7175 8 0 8.7175 0 9.6V10.4C0 10.8425 0.3575 11.2 0.8 11.2H2.4475C2.605 10.015 3.32 9.0175 4.3275 8.465Z",fill:e.fill||"#9FA2B4"}))},S=function(e){return i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{opacity:e.opacity||"",d:"M8 8C10.2094 8 12 6.20937 12 4C12 1.79063 10.2094 0 8 0C5.79063 0 4 1.79063 4 4C4 6.20937 5.79063 8 8 8ZM10.9937 9.01875L9.5 15L8.5 10.75L9.5 9H6.5L7.5 10.75L6.5 15L5.00625 9.01875C2.77812 9.125 1 10.9469 1 13.2V14.5C1 15.3281 1.67188 16 2.5 16H13.5C14.3281 16 15 15.3281 15 14.5V13.2C15 10.9469 13.2219 9.125 10.9937 9.01875Z",fill:e.fill||"#9FA2B4"}))},O=function(e){return i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{opacity:e.opacity||"",d:"M15 11.25V0.75C15 0.334375 14.6656 0 14.25 0H4C2.34375 0 1 1.34375 1 3V13C1 14.6562 2.34375 16 4 16H14.25C14.6656 16 15 15.6656 15 15.25V14.75C15 14.5156 14.8906 14.3031 14.7219 14.1656C14.5906 13.6844 14.5906 12.3125 14.7219 11.8313C14.8906 11.6969 15 11.4844 15 11.25ZM5 4.1875C5 4.08437 5.08437 4 5.1875 4H11.8125C11.9156 4 12 4.08437 12 4.1875V4.8125C12 4.91563 11.9156 5 11.8125 5H5.1875C5.08437 5 5 4.91563 5 4.8125V4.1875ZM5 6.1875C5 6.08437 5.08437 6 5.1875 6H11.8125C11.9156 6 12 6.08437 12 6.1875V6.8125C12 6.91563 11.9156 7 11.8125 7H5.1875C5.08437 7 5 6.91563 5 6.8125V6.1875ZM12.9187 14H4C3.44688 14 3 13.5531 3 13C3 12.45 3.45 12 4 12H12.9187C12.8594 12.5344 12.8594 13.4656 12.9187 14Z",fill:e.fill||"#9FA2B4"}))},j=function(e){return i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{opacity:e.opacity||"",d:"M15.2313 9.86557L13.9 9.09682C14.0344 8.37182 14.0344 7.62807 13.9 6.90307L15.2313 6.13432C15.3844 6.04682 15.4531 5.86557 15.4031 5.69682C15.0563 4.58432 14.4656 3.57807 13.6938 2.74057C13.575 2.61244 13.3813 2.58119 13.2313 2.66869L11.9 3.43744C11.3406 2.95619 10.6969 2.58432 10 2.34057V0.806191C10 0.631191 9.87814 0.478066 9.70627 0.440566C8.55939 0.184316 7.38439 0.196816 6.29377 0.440566C6.12189 0.478066 6.00002 0.631191 6.00002 0.806191V2.34369C5.30627 2.59057 4.66252 2.96244 4.10002 3.44057L2.77189 2.67182C2.61877 2.58432 2.42814 2.61244 2.30939 2.74369C1.53752 3.57807 0.946895 4.58432 0.60002 5.69994C0.546895 5.86869 0.61877 6.04994 0.771895 6.13744L2.10314 6.90619C1.96877 7.63119 1.96877 8.37494 2.10314 9.09994L0.771895 9.86869C0.61877 9.95619 0.55002 10.1374 0.60002 10.3062C0.946895 11.4187 1.53752 12.4249 2.30939 13.2624C2.42814 13.3906 2.62189 13.4218 2.77189 13.3343L4.10314 12.5656C4.66252 13.0468 5.30627 13.4187 6.00314 13.6624V15.1999C6.00314 15.3749 6.12502 15.5281 6.29689 15.5656C7.44377 15.8218 8.61877 15.8093 9.70939 15.5656C9.88127 15.5281 10.0031 15.3749 10.0031 15.1999V13.6624C10.6969 13.4156 11.3406 13.0437 11.9031 12.5656L13.2344 13.3343C13.3875 13.4218 13.5781 13.3937 13.6969 13.2624C14.4688 12.4281 15.0594 11.4218 15.4063 10.3062C15.4531 10.1343 15.3844 9.95307 15.2313 9.86557ZM8.00002 10.4999C6.62189 10.4999 5.50002 9.37807 5.50002 7.99994C5.50002 6.62182 6.62189 5.49994 8.00002 5.49994C9.37814 5.49994 10.5 6.62182 10.5 7.99994C10.5 9.37807 9.37814 10.4999 8.00002 10.4999Z",fill:e.fill||"#9FA2B4"}))},B=function(e){return i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("g",{clipPath:"url(#clip0)"},i.a.createElement("path",{opacity:e.opacity||"",d:"M5.035 11.3322C4.76344 11.0606 4.905 11.1372 4.25 10.9619C3.95281 10.8822 3.69156 10.7291 3.45531 10.5456L2.0375 14.0219C1.90031 14.3584 2.15656 14.7241 2.51969 14.7103L4.16625 14.6475L5.29875 15.8437C5.54875 16.1075 5.9875 16.0253 6.12469 15.6887L7.75125 11.7006C7.4125 11.8894 7.03656 12 6.64781 12C6.03844 12 5.46594 11.7628 5.035 11.3322ZM13.9625 14.0219L12.5447 10.5456C12.3084 10.7294 12.0472 10.8822 11.75 10.9619C11.0916 11.1381 11.2359 11.0612 10.965 11.3322C10.5341 11.7628 9.96125 12 9.35188 12C8.96313 12 8.58719 11.8891 8.24844 11.7006L9.875 15.6887C10.0122 16.0253 10.4513 16.1075 10.7009 15.8437L11.8338 14.6475L13.4803 14.7103C13.8434 14.7241 14.0997 14.3581 13.9625 14.0219ZM10.2188 10.625C10.6963 10.1391 10.7509 10.1809 11.4309 9.99562C11.865 9.87718 12.2044 9.53187 12.3206 9.08999C12.5544 8.20249 12.4938 8.30968 13.1316 7.66031C13.4494 7.33687 13.5734 6.8653 13.4572 6.42343C13.2238 5.53655 13.2234 5.66031 13.4572 4.77249C13.5734 4.33062 13.4494 3.85906 13.1316 3.53562C12.4938 2.88624 12.5544 2.99312 12.3206 2.10593C12.2044 1.66406 11.865 1.31874 11.4309 1.20031C10.5597 0.962493 10.6647 1.02468 10.0263 0.374993C9.70844 0.0515551 9.245 -0.0750074 8.81094 0.0434301C7.94 0.28093 8.06156 0.281243 7.18906 0.0434301C6.755 -0.0750074 6.29156 0.0512426 5.97375 0.374993C5.33594 1.02437 5.44094 0.962493 4.56938 1.20031C4.13531 1.31874 3.79594 1.66406 3.67969 2.10593C3.44625 2.99312 3.50656 2.88624 2.86875 3.53562C2.55094 3.85906 2.42656 4.33062 2.54313 4.77249C2.77656 5.65874 2.77688 5.53499 2.54313 6.42312C2.42688 6.86499 2.55094 7.33656 2.86875 7.66031C3.50656 8.30968 3.44594 8.20249 3.67969 9.08999C3.79594 9.53187 4.13531 9.87718 4.56938 9.99562C5.26875 10.1862 5.32094 10.1562 5.78125 10.625C6.19469 11.0459 6.83875 11.1212 7.33563 10.8069C7.53432 10.6807 7.76481 10.6137 8.00016 10.6137C8.23551 10.6137 8.466 10.6807 8.66469 10.8069C9.16125 11.1212 9.80531 11.0459 10.2188 10.625ZM5.05188 5.49874C5.05188 3.84156 6.37188 2.49812 8 2.49812C9.62813 2.49812 10.9481 3.84156 10.9481 5.49874C10.9481 7.15593 9.62813 8.49937 8 8.49937C6.37188 8.49937 5.05188 7.15593 5.05188 5.49874Z",fill:e.fill||"#9FA2B4"})),i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"clip0"},i.a.createElement("rect",{width:"16",height:"16",fill:"white"}))))},L=n(34),T=n(23);var N=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).defaultPath,t=void 0===e?"":e,n=Object(a.useState)(!1),i=Object(T.a)(n,2),r=i[0],l=i[1],o=Object(a.useState)({path:t,expanded:!0}),c=Object(T.a)(o,2),s=c[0],m=c[1],d=function(e,t){return s.path===e||!t&&0===s.path.indexOf("".concat(e,"/"))};return{isOpen:r,isExpanded:function(e){return d(e)&&s.expanded},isActive:d,onMenuItemClicked:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.expanded,a={path:e,expanded:void 0===n||n};return t.isCollapsible?d(e)?(a.path=s.path,a.expanded=!s.expanded,m(function(e){return Object(g.a)(Object(g.a)({},e),{},{expanded:!e.expanded})})):m(a):(l(!1),m(a))},setIsOpen:l}},M=u.a.create({separator:{borderTop:"1px solid #DFE0EB",marginTop:16,marginBottom:16,opacity:.06}}),R={bmBurgerButton:{position:"absolute",width:26,height:20,left:24,top:20},bmBurgerBars:{background:"#373a47"},bmBurgerBarsHover:{background:"#a90000"},bmCrossButton:{display:"none"},bmCross:{background:"#bdc3c7"},bmMenuWrap:{position:"fixed",height:"100%",width:255},bmMenu:{background:"#373a47"},bmItem:{outline:"none",":focus":{outline:"none"}},bmMorphShape:{fill:"#373a47"},bmOverlay:{background:"rgba(0, 0, 0, 0.3)"}};var H=function(){var e=N({defaultPath:"/ideas"}),t=e.isOpen,n=e.isExpanded,a=e.isActive,r=e.onMenuItemClicked,l=e.setIsOpen,o=window.innerWidth<=1080;return i.a.createElement(L.slide,{isOpen:!o||t,noOverlay:!o,disableCloseOnEsc:!0,styles:R,onStateChange:function(e){return l(e.isOpen)},noTransition:!o},i.a.createElement("div",{style:{paddingTop:30,paddingBottom:30}},i.a.createElement(C,null)),i.a.createElement(E,{title:"Dashboard",icon:B,onClick:function(){return r("/dashboard")},active:a("/dashboard")}),i.a.createElement(E,{title:"Overview",icon:x,onClick:function(){return r("/overview",{isCollapsible:!0})},active:a("/overview"),expanded:n("/overview"),subItems:[{title:"Sub Item 1",icon:i.a.createElement(S,{width:20,fill:"#DDE2FF"}),onClick:function(){return r("/overview/subitem1")},active:a("/overview/subitem1")},{title:"Sub Item 2",icon:i.a.createElement(k,{width:16,fill:"#DDE2FF"}),onClick:function(){return r("/overview/subitem2")},active:a("/overview/subitem2")},{title:"Sub Item 3",icon:i.a.createElement(y,{width:16,fill:"#DDE2FF"}),onClick:function(){return r("/overview/subitem3")},active:a("/overview/subitem3")},{title:"Sub Item 4",icon:i.a.createElement(j,{width:20,fill:"#DDE2FF"}),onClick:function(){return r("/overview/subitem4")},active:a("/overview/subitem4")}]}),i.a.createElement(E,{title:"Tickets",icon:F,onClick:function(){return r("/tickets")},active:a("/tickets")}),i.a.createElement(E,{title:"Ideas",icon:k,onClick:function(){return r("/ideas",{isCollapsible:!0})},active:a("/ideas"),expanded:n("/ideas"),subItems:[{title:"Sub Item 1",icon:i.a.createElement(S,{width:20,fill:"#DDE2FF"}),onClick:function(){return r("/ideas/subitem1")},active:a("/ideas/subitem1")},{title:"Sub Item 2",icon:i.a.createElement(k,{width:16,fill:"#DDE2FF"}),onClick:function(){return r("/ideas/subitem2")},active:a("/ideas/subitem2")},{title:"Sub Item 3",icon:i.a.createElement(y,{width:16,fill:"#DDE2FF"}),onClick:function(){return r("/ideas/subitem3")},active:a("/ideas/subitem3")},{title:"Sub Item 4",icon:i.a.createElement(j,{width:20,fill:"#DDE2FF"}),onClick:function(){return r("/ideas/subitem4")},active:a("/ideas/subitem4")}]}),i.a.createElement(E,{title:"Contacts",icon:y,onClick:function(){return r("/contacts")},active:a("/contacts")}),i.a.createElement(E,{title:"Agents",icon:S,onClick:function(){return r("/agents")},active:a("/agents")}),i.a.createElement(E,{title:"Articles",icon:O,onClick:function(){return r("/articles")},active:a("/articles")}),i.a.createElement("div",{className:Object(u.b)(M.separator)}),i.a.createElement(E,{title:"Settings",icon:j,onClick:function(){return r("/settings")},active:a("/settings")}),i.a.createElement(E,{title:"Subscription",icon:B,onClick:function(){return r("/subscription")},active:a("/subscription")}))},A=n(39),D=function(e){return i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("circle",{cx:"6.5",cy:"6.5",r:"5.75",stroke:"#C5C7CD",strokeWidth:"1.5"}),i.a.createElement("path",{d:"M11 11L15 15",stroke:"#C5C7CD",strokeWidth:"1.5",strokeLinecap:"round"}))},z=function(e){return i.a.createElement("svg",{width:"18",height:"19",viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M7.99999 19C9.10374 19 9.99905 18.1047 9.99905 17H6.00093C6.00093 18.1047 6.89624 19 7.99999 19ZM14.7309 14.3216C14.1272 13.6728 12.9975 12.6969 12.9975 9.5C12.9975 7.07188 11.295 5.12812 8.99937 4.65125V4C8.99937 3.44781 8.55187 3 7.99999 3C7.44812 3 7.00062 3.44781 7.00062 4V4.65125C4.70499 5.12812 3.00249 7.07188 3.00249 9.5C3.00249 12.6969 1.8728 13.6728 1.26905 14.3216C1.08155 14.5231 0.998429 14.7641 0.999991 15C1.00343 15.5125 1.40562 16 2.00312 16H13.9969C14.5944 16 14.9969 15.5125 15 15C15.0016 14.7641 14.9184 14.5228 14.7309 14.3216Z",fill:"#C5C7CD"}),i.a.createElement("circle",{cx:"13",cy:"5",r:"3.75",fill:"#3751FF",stroke:"#F7F8FC",strokeWidth:"1.5"}))},V=u.a.create({avatar:{height:35,width:35,borderRadius:50,marginLeft:14,border:"1px solid #DFE0EB"},container:{height:40},cursorPointer:{cursor:"pointer"},name:{fontFamily:"Muli",fontStyle:"normal",fontWeight:600,fontSize:14,lineHeight:"20px",textAlign:"right",letterSpacing:.2,"@media (max-width: 768px)":{display:"none"}},separator:{borderLeft:"1px solid #DFE0EB",marginLeft:32,marginRight:32,height:32,width:2,"@media (max-width: 768px)":{marginLeft:12,marginRight:12}},title:{fontFamily:"Muli",fontStyle:"normal",fontWeight:"bold",fontSize:24,lineHeight:"30px",letterSpacing:.3,"@media (max-width: 1080px)":{marginLeft:50},"@media (max-width: 468px)":{fontSize:20}},iconStyles:{cursor:"pointer",marginLeft:25,"@media (max-width: 768px)":{marginLeft:12}}});var W=function(e){e.icon;var t=e.title,n=Object(A.a)(e,["icon","title"]);return i.a.createElement(d.Row,Object.assign({className:Object(u.b)(V.container),vertical:"center",horizontal:"space-between"},n),i.a.createElement("span",{className:Object(u.b)(V.title)},t),i.a.createElement(d.Row,{vertical:"center"},i.a.createElement("div",{className:Object(u.b)(V.iconStyles)},i.a.createElement(D,null)),i.a.createElement("div",{className:Object(u.b)(V.iconStyles)},i.a.createElement(z,null)),i.a.createElement("div",{className:Object(u.b)(V.separator)}),i.a.createElement(d.Row,{vertical:"center"},i.a.createElement("span",{className:Object(u.b)(V.name,V.cursorPointer)},"Germ\xe1n Llorente"),i.a.createElement("img",{src:"https://avatars3.githubusercontent.com/u/21162888?s=460&v=4",alt:"avatar",className:Object(u.b)(V.avatar,V.cursorPointer)}))))},Z=n(3),I=Z.StyleSheet.create({container:{backgroundColor:"#FFFFFF",border:"1px solid #DFE0EB",borderRadius:4,cursor:"pointer",height:70,maxWidth:350,padding:"24px 32px 24px 32px",":hover":{borderColor:"#3751FF",":nth-child(n) > span":{color:"#3751FF"}}},title:{color:"#9FA2B4",fontFamily:"Muli",fontStyle:"normal",fontWeight:"bold",fontSize:19,lineHeight:"24px",letterSpacing:"0.4px",marginBottom:12,minWidth:102,textAlign:"center"},value:{color:"#252733",fontFamily:"Muli",fontStyle:"normal",fontWeight:"bold",fontSize:40,letterSpacing:"1px",lineHeight:"50px",textAlign:"center"}});for(var G=function(e){var t=e.className,n=void 0===t?"":t,a=e.title,r=e.value,l="".concat(Object(Z.css)(I.container)," ").concat(n);return i.a.createElement(d.Column,{flexGrow:1,className:l,horizontal:"center",vertical:"center"},i.a.createElement("span",{className:Object(Z.css)(I.title)},a),i.a.createElement("span",{className:Object(Z.css)(I.value)},r))},U=n(37),P=[],J=1;J<=24;J++)P.push({x:J,y:Math.floor(100*Math.random())});var _=u.a.create({container:{backgroundColor:"#FFFFFF",border:"1px solid #DFE0EB",borderRadius:4,cursor:"pointer"},graphContainer:{marginTop:24,marginLeft:0,marginRight:0,width:"100%"},graphSection:{padding:24},graphSubtitle:{fontFamily:"Muli",fontStyle:"normal",fontWeight:"normal",fontSize:12,lineHeight:"16px",letterSpacing:"0.1px",color:"#9FA2B4",marginTop:4,marginRight:8},graphTitle:{fontFamily:"Muli",fontStyle:"normal",fontWeight:"bold",fontSize:19,lineHeight:"24px",letterSpacing:"0.4px",color:"#252733"},legendTitle:{fontFamily:"Muli",fontStyle:"normal",fontWeight:"600",fontSize:12,lineHeight:"15px",letterSpacing:"0.1px",color:"#9FA2B4",marginLeft:8},separator:{backgroundColor:"#DFE0EB",width:1,minWidth:1},statContainer:{borderBottom:"1px solid #DFE0EB",padding:"24px 32px 24px 32px",height:"calc(114px - 48px)",":last-child":{border:"none"}},stats:{borderTop:"1px solid #DFE0EB",width:"100%"},statTitle:{fontFamily:"Muli",fontStyle:"normal",fontWeight:"600",fontSize:16,lineHeight:"22px",letterSpacing:"0.3px",textAlign:"center",color:"#9FA2B4",whiteSpace:"nowrap",marginBottom:6},statValue:{fontFamily:"Muli",fontStyle:"normal",fontWeight:"bold",fontSize:24,lineHeight:"30px",letterSpacing:"0.3px",textAlign:"center",color:"#252733"}}),q=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"renderLegend",value:function(e,t){return i.a.createElement(d.Row,{vertical:"center"},i.a.createElement("div",{style:{width:16,border:"2px solid",borderColor:e}}),i.a.createElement("span",{className:Object(u.b)(_.legendTitle)},t))}},{key:"renderStat",value:function(e,t){return i.a.createElement(d.Column,{flexGrow:1,className:Object(u.b)(_.statContainer),vertical:"center",horizontal:"center"},i.a.createElement("span",{className:Object(u.b)(_.statTitle)},e),i.a.createElement("span",{className:Object(u.b)(_.statValue)},t))}},{key:"render",value:function(){return i.a.createElement(d.Row,{flexGrow:1,className:Object(u.b)(_.container),horizontal:"center",breakpoints:{1024:"column"}},i.a.createElement(d.Column,{wrap:!0,flexGrow:7,flexBasis:"735px",className:Object(u.b)(_.graphSection),breakpoints:{1024:{width:"calc(100% - 48px)",flexBasis:"auto"}}},i.a.createElement(d.Row,{wrap:!0,horizontal:"space-between"},i.a.createElement(d.Column,null,i.a.createElement("span",{className:Object(u.b)(_.graphTitle)},"Today\u2019s trends"),i.a.createElement("span",{className:Object(u.b)(_.graphSubtitle)},"as of 25 May 2019, 09:41 PM")),this.renderLegend("#3751FF","Today")),i.a.createElement("div",{className:Object(u.b)(_.graphContainer)},i.a.createElement(U.a,{data:P,viewBoxWidth:500,pointsStrokeColor:"#3751FF",areaColor:"#3751FF",areaVisible:!0}))),i.a.createElement(d.Column,{className:Object(u.b)(_.separator),breakpoints:{1024:{display:"none"}}},i.a.createElement("div",null)),i.a.createElement(d.Column,{flexGrow:3,flexBasis:"342px",breakpoints:{1024:Object(u.b)(_.stats)}},this.renderStat("Resolved","449"),this.renderStat("Received","426"),this.renderStat("Average first response time","33m"),this.renderStat("Average response time","3h 8m"),this.renderStat("Resolution within SLA","94%")))}}]),n}(i.a.Component),K=Z.StyleSheet.create({container:{backgroundColor:"#FFFFFF",border:"1px solid #DFE0EB",borderRadius:4,padding:"24px 32px 12px 32px"},containerMobile:{padding:"12px 16px 6px 16px !important"},itemContainer:{marginLeft:-32,marginRight:-32,paddingLeft:32,paddingRight:32,paddingBottom:18,paddingTop:18,maxHeight:22,borderBottom:"1px solid #DFE0EB",":last-child":{borderBottom:"none"}},itemContainerMobile:{marginLeft:-16,marginRight:-16,paddingLeft:16,paddingRight:16},link:{fontFamily:"Muli",fontStyle:"normal",fontWeight:"600",fontSize:14,lineHeight:"20px",letterSpacing:"0.2px",color:"#3751FF",textAlign:"right",cursor:"pointer"},subtitle:{fontFamily:"Muli",fontStyle:"normal",fontWeight:"normal",fontSize:12,lineHeight:"16px",letterSpacing:"0.1px",color:"#9FA2B4"},subtitle2:{color:"#252733",marginLeft:2},title:{fontFamily:"Muli",fontStyle:"normal",fontWeight:"bold",fontSize:19,lineHeight:"24px",letterSpacing:"0.4px",color:"#252733"}}),$=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"renderItem",value:function(e,t){return i.a.createElement(d.Column,{flexGrow:1,className:Object(Z.css)(K.itemContainer),key:"item-".concat(t),breakpoints:{426:Object(Z.css)(K.itemContainerMobile)}},e)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.link,a=e.subtitle,r=e.subtitleTwo,l=e.items,o=e.containerStyles;return i.a.createElement(d.Column,{flexGrow:1,className:Object(Z.css)(K.container,o),breakpoints:{426:Object(Z.css)(K.containerMobile)}},i.a.createElement(d.Row,{horizontal:"space-between"},i.a.createElement(d.Column,null,i.a.createElement("span",{className:Object(Z.css)(K.title)},t),i.a.createElement(d.Row,{style:{marginTop:8,marginBottom:16}},i.a.createElement("span",{className:Object(Z.css)(K.subtitle)},a),r&&i.a.createElement("span",{className:Object(Z.css)(K.subtitle,K.subtitle2)},r))),i.a.createElement("span",{className:Object(Z.css)(K.link)},n)),l.map(this.renderItem))}}]),n}(i.a.Component),Q=Z.StyleSheet.create({itemTitle:{fontFamily:"Muli",fontStyle:"normal",fontWeight:"600",fontSize:14,lineHeight:"20px",letterSpacing:"0.2px",color:"#252733"},itemValue:{color:"#9FA2B4"}}),X=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"renderStat",value:function(e,t){return i.a.createElement(d.Row,{flexGrow:1,horizontal:"space-between",vertical:"center"},i.a.createElement("span",{className:Object(Z.css)(Q.itemTitle)},e),i.a.createElement("span",{className:Object(Z.css)(Q.itemTitle,Q.itemValue)},t))}},{key:"render",value:function(){return i.a.createElement($,{containerStyles:this.props.containerStyles,title:"Unresolved tickets",link:"View details",subtitle:"Group:",subtitleTwo:"Support",items:[this.renderStat("Waiting on Feature Request",4238),this.renderStat("Awaiting Customer Response",1005),this.renderStat("Awaiting Developer Fix",914),this.renderStat("Pending",281)]})}}]),n}(i.a.Component),Y=n(38),ee=function(e){return i.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("circle",{cx:"10",cy:"10",r:"10",fill:"#3751FF"}),i.a.createElement("path",{d:"M5 11L7.92929 13.9293C7.96834 13.9683 8.03166 13.9683 8.07071 13.9293L15 7",stroke:"white",strokeWidth:"1.7",strokeLinecap:"round"}))},te=function(e){return i.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("circle",{cx:"10",cy:"10",r:"9",stroke:"#C5C7CD",strokeWidth:"2"}))},ne=Z.StyleSheet.create({addButton:{backgroundColor:"#F0F1F7",color:"#9FA2B4",fontSize:20,padding:7},itemTitle:{color:"#252733",fontFamily:"Muli",fontStyle:"normal",fontWeight:"600",fontSize:14,letterSpacing:"0.2px",lineHeight:"20px"},itemValue:{color:"#9FA2B4"},greyTitle:{color:"#C5C7CD"},tagStyles:{borderRadius:5,cursor:"pointer",fontFamily:"Muli",fontStyle:"normal",fontWeight:"bold",fontSize:11,letterSpacing:"0.5px",lineHeight:"14px",padding:"5px 12px 5px 12px"},checkboxWrapper:{cursor:"pointer",marginRight:16}}),ae={URGENT:{text:"URGENT",backgroundColor:"#FEC400",color:"#FFFFFF"},NEW:{text:"NEW",backgroundColor:"#29CC97",color:"#FFFFFF"},DEFAULT:{text:"DEFAULT",backgroundColor:"#F0F1F7",color:"#9FA2B4"}},ie=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={items:[{title:"Finish ticket update",checked:!1,tag:ae.URGENT},{title:"Create new ticket example",checked:!1,tag:ae.NEW},{title:"Update ticket report",checked:!0,tag:ae.DEFAULT}]},e.renderTask=function(t,n){var a=t.title,r=t.tag,l=void 0===r?{}:r;return i.a.createElement(d.Row,{horizontal:"space-between",vertical:"center"},i.a.createElement(d.Row,null,e.renderCheckbox(n),i.a.createElement("span",{className:Object(Z.css)(ne.itemTitle)},a)),e.renderTag(l,n))},e.renderTag=function(t,n){var a=t.text,r=t.backgroundColor,l=t.color;return i.a.createElement(d.Row,{horizontal:"center",vertical:"center",style:{backgroundColor:r,color:l},className:Object(Z.css)(ne.tagStyles),onClick:function(){return e.onTagClick(n)}},a)},e.renderCheckbox=function(t){return i.a.createElement("div",{className:Object(Z.css)(ne.checkboxWrapper),onClick:function(){return e.onCheckboxClick(t)}},e.state.items[t].checked?i.a.createElement(ee,null):i.a.createElement(te,null))},e.onCheckboxClick=function(t){return e.setState(function(e){var n=e.items;return n[t].checked=!n[t].checked,{items:n}})},e.getNextTag=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"URGENT",t=["URGENT","NEW","DEFAULT"],n=(t.indexOf(e)+1)%3;return ae[t[n]]},e.onTagClick=function(t){return e.setState(function(n){var a=n.items;return a[t].tag=e.getNextTag(a[t].tag.text),{items:a}})},e.onAddButtonClick=function(){return e.setState(function(t){var n=t.items;return n.push({title:"Task ".concat(n.length+1),checked:!1,tag:e.getNextTag()}),{items:n}})},e.renderAddButton=function(){return i.a.createElement(d.Row,{horizontal:"center",vertical:"center",className:Object(Z.css)(ne.tagStyles,ne.addButton),onClick:e.onAddButtonClick},"+")},e}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement($,{containerStyles:this.props.containerStyles,title:"Tasks",link:"View all",subtitle:"Today",items:[i.a.createElement(d.Row,{horizontal:"space-between",vertical:"center"},i.a.createElement("span",{className:Object(Z.css)(ne.itemTitle,ne.greyTitle)},"Create new task"),this.renderAddButton())].concat(Object(Y.a)(this.state.items.map(this.renderTask)))})}}]),n}(i.a.Component),re=Z.StyleSheet.create({cardsContainer:{marginRight:-30,marginTop:-30},cardRow:{marginTop:30,"@media (max-width: 768px)":{marginTop:0}},miniCardContainer:{flexGrow:1,marginRight:30,"@media (max-width: 768px)":{marginTop:30,maxWidth:"none"}},todayTrends:{marginTop:30},lastRow:{marginTop:30},unresolvedTickets:{marginRight:30,"@media (max-width: 1024px)":{marginRight:0}},tasks:{marginTop:0,"@media (max-width: 1024px)":{marginTop:30}}});var le=function(){return i.a.createElement(d.Column,null,i.a.createElement(d.Row,{className:Object(Z.css)(re.cardsContainer),wrap:!0,flexGrow:1,horizontal:"space-between",breakpoints:{768:"column"}},i.a.createElement(d.Row,{className:Object(Z.css)(re.cardRow),wrap:!0,flexGrow:1,horizontal:"space-between",breakpoints:{384:"column"}},i.a.createElement(G,{className:Object(Z.css)(re.miniCardContainer),title:"Unresolved",value:"60"}),i.a.createElement(G,{className:Object(Z.css)(re.miniCardContainer),title:"Overdue",value:"16"})),i.a.createElement(d.Row,{className:Object(Z.css)(re.cardRow),wrap:!0,flexGrow:1,horizontal:"space-between",breakpoints:{384:"column"}},i.a.createElement(G,{className:Object(Z.css)(re.miniCardContainer),title:"Open",value:"43"}),i.a.createElement(G,{className:Object(Z.css)(re.miniCardContainer),title:"On hold",value:"64"}))),i.a.createElement("div",{className:Object(Z.css)(re.todayTrends)},i.a.createElement(q,null)),i.a.createElement(d.Row,{horizontal:"space-between",className:Object(Z.css)(re.lastRow),breakpoints:{1024:"column"}},i.a.createElement(X,{containerStyles:re.unresolvedTickets}),i.a.createElement(ie,{containerStyles:re.tasks})))},oe=(n(87),u.a.create({container:{height:"100%",minHeight:"100vh"},content:{marginTop:54},mainBlock:{backgroundColor:"#F7F8FC",padding:30,marginLeft:255,"@media (max-width: 1080px)":{marginLeft:0,padding:10}}})),ce=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={selectedItem:"Tickets"},e.resize=function(){return e.forceUpdate()},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this.state.selectedItem;return i.a.createElement(d.Row,{className:Object(u.b)(oe.container)},i.a.createElement(H,null),i.a.createElement(d.Column,{flexGrow:1,className:Object(u.b)(oe.mainBlock)},i.a.createElement(W,{title:e}),i.a.createElement("div",{className:Object(u.b)(oe.content)},i.a.createElement(le,null))))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.d9c8bd96.chunk.js.map