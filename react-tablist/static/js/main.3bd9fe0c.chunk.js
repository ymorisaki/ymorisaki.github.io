(this["webpackJsonpreact-tab"]=this["webpackJsonpreact-tab"]||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),l=n.n(i),u=n(1),o=n(2),c=n(11),s=function(e){var t=e.id,n=e.state,a=e.children;return r.a.createElement(r.a.Fragment,null,n===t&&r.a.createElement("div",{id:t,role:"tabpanel"},a))};function m(){var e=Object(u.a)(['\n  margin-bottom: 100px;\n\n  > ul[role="tablist"] {\n    display: flex;\n    padding: 0;\n\n    > li {\n      margin-top: 0;\n      margin-bottom: 0;\n      list-style: none;\n      background-color: #ddd;\n\n      > a {\n        display: block;\n        padding: 10px 30px;\n        text-decoration: none;\n        color: #000;\n\n        &[aria-selected="true"] {\n          background-color: #000;\n          color: #fff;\n        }\n      }\n    }\n  }\n\n  div[role="tabpanel"] {\n    padding: 20px 40px;\n    border: 1px solid #ccc;\n\n    p {\n      margin-bottom: 20px;\n      line-height: 1.6;\n    }\n\n    b {\n      font-weight: normal;\n      font-size: 22px;\n    }\n\n    button {\n      margin-bottom: 20px;\n      padding: 5px 20px;\n      border: 2px solid #ccc;\n      border-radius: 10px;\n    }\n  }\n']);return m=function(){return e},e}var p=o.a.div(m()),d=function(e){var t=e.title,n=e.content,i=Object(a.useRef)([]),l=Object(a.useRef)(0);if(0===l.current){for(var u=0,o=t.length;u<o;u++)i.current.push("tab-".concat(Math.random().toString(32).substring(2)));l.current++}var m=Object(a.useState)(i.current[0]),d=Object(c.a)(m,2),b=d[0],v=d[1],E=function(e,t){var n,a,r,i;t&&(e.currentTarget.tabIndex=-1,null===(n=t.querySelector("a"))||void 0===n||n.focus(),null===(a=t.querySelector("a"))||void 0===a||a.setAttribute("tabindex","0"),v("".concat(null===(r=t.querySelector("a"))||void 0===r?void 0:r.getAttribute("aria-controls"))),e.currentTarget.setAttribute("aria-selected","false"),null===(i=t.querySelector("a"))||void 0===i||i.setAttribute("aria-selected","true"))};return r.a.createElement(p,null,r.a.createElement("ul",{role:"tablist"},t.map((function(e,t){return r.a.createElement("li",{key:i.current[t]},r.a.createElement("a",{href:"#".concat(i.current[t]),tabIndex:0===t?0:-1,role:"tab","aria-controls":i.current[t],"aria-selected":0===t?"true":"false",onClick:function(e){return function(e){var t;e.preventDefault(),v("".concat(e.currentTarget.getAttribute("aria-controls"))),null===(t=e.currentTarget.closest('ul[role="tablist"]'))||void 0===t||t.querySelectorAll("a").forEach((function(e){e.tabIndex=-1,e.setAttribute("aria-selected","false")})),e.currentTarget.tabIndex=0,e.currentTarget.setAttribute("aria-selected","true")}(e)},onKeyDown:function(e){return function(e){var t,n;"ArrowRight"===e.key&&E(e,null===(t=e.currentTarget.parentElement)||void 0===t?void 0:t.nextElementSibling);"ArrowLeft"===e.key&&E(e,null===(n=e.currentTarget.parentElement)||void 0===n?void 0:n.previousElementSibling)}(e)}},e))}))),r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement(s,{id:i.current[t],key:i.current[t],state:b},e)}))))},b=function(e){var t=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("b",null,t)),r.a.createElement("button",{type:"button"},"\u30d5\u30a9\u30fc\u30ab\u30b9\u30c1\u30a7\u30c3\u30af"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam delectus nihil voluptatem earum vel illo animi asperiores.",r.a.createElement("br",null),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam asperiores.",r.a.createElement("br",null),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam delectus nihil voluptatem earum vel illo animi asperiores.",r.a.createElement("br",null),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam delectus nihil voluptatem earum vel illo animi asperiores."))},v=function(e){var t=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("b",null,t)),r.a.createElement("button",{type:"button"},"\u30d5\u30a9\u30fc\u30ab\u30b9\u30c1\u30a7\u30c3\u30af"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam delectus nihil voluptatem earum vel illo animi asperiores.",r.a.createElement("br",null),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam delectus nihil voluptatem earum vel illo animi asperiores.",r.a.createElement("br",null),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam delectus nihil voluptatem earum vel illo animi asperiores.",r.a.createElement("br",null),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam delectus nihil voluptatem earum vel illo animi asperiores.",r.a.createElement("br",null),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam delectus nihil voluptatem earum vel illo animi asperiores."))},E=function(e){var t=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("b",null,t)),r.a.createElement("button",{type:"button"},"\u30d5\u30a9\u30fc\u30ab\u30b9\u30c1\u30a7\u30c3\u30af"),r.a.createElement("p",null,"\u3042\u306e\u30a4\u30fc\u30cf\u30c8\u30fc\u30f4\u30a9\u306e\u3059\u304d\u3068\u304a\u3063\u305f\u98a8\u3001\u590f\u3067\u3082\u5e95\u306b\u51b7\u305f\u3055\u3092\u3082\u3064\u9752\u3044\u305d\u3089\u3001\u3046\u3064\u304f\u3057\u3044\u68ee\u3067\u98fe\u3089\u308c\u305f\u30e2\u30ea\u30fc\u30aa\u5e02\u3001\u90ca\u5916\u306e\u304e\u3089\u304e\u3089\u3072\u304b\u308b\u8349\u306e\u6ce2\u3002\u307e\u305f\u305d\u306e\u306a\u304b\u3067\u3044\u3063\u3057\u3087\u306b\u306a\u3063\u305f\u305f\u304f\u3055\u3093\u306e\u3072\u3068\u305f\u3061\u3001\u30d5\u30a1\u30bc\u30fc\u30ed\u3068\u30ed\u30b6\u30fc\u30ed\u3001\u7f8a\u98fc\u306e\u30df\u30fc\u30ed\u3084\u3001\u9854\u306e\u8d64\u3044\u3053\u3069\u3082\u305f\u3061\u3001\u5730\u4e3b\u306e\u30c6\u30fc\u30e2\u3001\u5c71\u732b\u535a\u58eb\u306e\u30dc\u30fc\u30ac\u30f3\u30c8\u30fb\u30c7\u30b9\u30c8\u30a5\u30d1\u30fc\u30b4\u306a\u3069\u3001\u3044\u307e\u3053\u306e\u6697\u3044\u5de8\u304d\u306a\u77f3\u306e\u5efa\u7269\u306e\u306a\u304b\u3067\u8003\u3048\u3066\u3044\u308b\u3068\u3001\u307f\u3093\u306a\u3080\u304b\u3057\u98a8\u306e\u306a\u3064\u304b\u3057\u3044\u9752\u3044\u5e7b\u71c8\u306e\u3088\u3046\u306b\u601d\u308f\u308c\u307e\u3059\u3002\u3067\u306f\u3001\u308f\u305f\u304f\u3057\u306f\u3044\u3064\u304b\u306e\u5c0f\u3055\u306a\u307f\u3060\u3057\u3092\u3064\u3051\u306a\u304c\u3089\u3001\u3057\u305a\u304b\u306b\u3042\u306e\u5e74\u306e\u30a4\u30fc\u30cf\u30c8\u30fc\u30f4\u30a9\u306e\u4e94\u6708\u304b\u3089\u5341\u6708\u307e\u3067\u3092\u66f8\u304d\u3064\u3051\u307e\u3057\u3087\u3046\u3002"),r.a.createElement("p",null,"\u3042\u306e\u30a4\u30fc\u30cf\u30c8\u30fc\u30f4\u30a9\u306e\u3059\u304d\u3068\u304a\u3063\u305f\u98a8\u3001\u590f\u3067\u3082\u5e95\u306b\u51b7\u305f\u3055\u3092\u3082\u3064\u9752\u3044\u305d\u3089\u3001\u3046\u3064\u304f\u3057\u3044\u68ee\u3067\u98fe\u3089\u308c\u305f\u30e2\u30ea\u30fc\u30aa\u5e02\u3001\u90ca\u5916\u306e\u304e\u3089\u304e\u3089\u3072\u304b\u308b\u8349\u306e\u6ce2\u3002\u307e\u305f\u305d\u306e\u306a\u304b\u3067\u3044\u3063\u3057\u3087\u306b\u306a\u3063\u305f\u305f\u304f\u3055\u3093\u306e\u3072\u3068\u305f\u3061\u3001\u30d5\u30a1\u30bc\u30fc\u30ed\u3068\u30ed\u30b6\u30fc\u30ed\u3001\u7f8a\u98fc\u306e\u30df\u30fc\u30ed\u3084\u3001\u9854\u306e\u8d64\u3044\u3053\u3069\u3082\u305f\u3061\u3001\u5730\u4e3b\u306e\u30c6\u30fc\u30e2\u3001\u5c71\u732b\u535a\u58eb\u306e\u30dc\u30fc\u30ac\u30f3\u30c8\u30fb\u30c7\u30b9\u30c8\u30a5\u30d1\u30fc\u30b4\u306a\u3069\u3001\u3044\u307e\u3053\u306e\u6697\u3044\u5de8\u304d\u306a\u77f3\u306e\u5efa\u7269\u306e\u306a\u304b\u3067\u8003\u3048\u3066\u3044\u308b\u3068\u3001\u307f\u3093\u306a\u3080\u304b\u3057\u98a8\u306e\u306a\u3064\u304b\u3057\u3044\u9752\u3044\u5e7b\u71c8\u306e\u3088\u3046\u306b\u601d\u308f\u308c\u307e\u3059\u3002\u3067\u306f\u3001\u308f\u305f\u304f\u3057\u306f\u3044\u3064\u304b\u306e\u5c0f\u3055\u306a\u307f\u3060\u3057\u3092\u3064\u3051\u306a\u304c\u3089\u3001\u3057\u305a\u304b\u306b\u3042\u306e\u5e74\u306e\u30a4\u30fc\u30cf\u30c8\u30fc\u30f4\u30a9\u306e\u4e94\u6708\u304b\u3089\u5341\u6708\u307e\u3067\u3092\u66f8\u304d\u3064\u3051\u307e\u3057\u3087\u3046\u3002"))};function f(){var e=Object(u.a)(["\n  max-width: 1000px;\n  margin: auto;\n  padding: 30px;\n"]);return f=function(){return e},e}var g=o.a.div(f()),q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null,r.a.createElement(d,{title:["Tab1","Tab2","Tab3"],content:[r.a.createElement(b,{title:"Tab1"}),r.a.createElement(v,{title:"Tab2"}),r.a.createElement(E,{title:"Tab3"})]}),r.a.createElement(d,{title:["Tab4","Tab5","Tab6","Tab7","Tab8"],content:[r.a.createElement(E,{title:"Tab4"}),r.a.createElement(b,{title:"Tab5"}),r.a.createElement(v,{title:"Tab6"}),r.a.createElement(E,{title:"Tab7"}),r.a.createElement(b,{title:"Tab8"})]})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3bd9fe0c.chunk.js.map