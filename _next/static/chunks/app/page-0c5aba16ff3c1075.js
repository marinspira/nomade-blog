(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9630:function(e,t,s){Promise.resolve().then(s.bind(s,1391))},1391:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return g}});var n=s(3827),a=s(8940),o=s(5514),c=s.n(o),i=s(4090),r=s(4876),l=s(8792),d=function(e){let t=new Date(e),s=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getFullYear()).slice(2);return"".concat(s,".").concat(n,".").concat(a)};function u(e){let{src:t}=e,[s,a]=(0,i.useState)({x:1500,y:-270});return(0,n.jsx)("div",{onMouseDown:e=>{let t=e.clientX-s.x,n=e.clientY-s.y,o=e=>{a({x:e.clientX-t,y:e.clientY-n})},c=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",c)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",c)},children:(0,n.jsx)("img",{src:t,alt:"Draggable Image",style:{position:"absolute",left:"".concat(s.x,"px"),top:"".concat(s.y,"px"),scale:7,opacity:.7,cursor:"grab"}})})}var m=function(e){let{params:t}=e,{posts:s}=(0,i.useContext)(a.L),[o,m]=(0,i.useState)([]),[h,x]=(0,i.useState)({});return(0,i.useEffect)(()=>{if(s.length>0){m(s.map(e=>{let{imageUrl:t}=(0,r.y)(e.content);return t||""})),console.log(s);let e=s[0].title,t=s[0].id;x({texto:e,id:t,author:s[0].author.displayName,authorImg:s[0].author.image.url,date:d(s[0].published)})}},[s]),(0,n.jsxs)("div",{className:c().row,children:[(0,n.jsxs)(l.default,{className:c().column,href:"/post/".concat(h.id),children:[(0,n.jsxs)("div",{className:c().content,children:[(0,n.jsx)("span",{children:"\xdaltimo post"}),(0,n.jsx)("h1",{children:h.texto}),(0,n.jsxs)("div",{className:c().details,children:[(0,n.jsxs)("div",{className:c().itens,children:[(0,n.jsxs)("div",{className:c().author,children:[(0,n.jsx)("img",{src:h.authorImg,alt:h.author}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:"Autor:"}),(0,n.jsx)("br",{}),h.author]})]}),(0,n.jsxs)("div",{className:c().date,children:[(0,n.jsx)("span",{children:"Postado:"}),(0,n.jsx)("p",{children:h.date})]})]}),(0,n.jsx)("button",{children:"Ler post"})]})]}),(0,n.jsx)("div",{className:c().gradientOverlay}),(0,n.jsx)("img",{className:c().firstImage,src:o[0],alt:""})]}),(0,n.jsxs)("div",{className:c().column2,children:[(0,n.jsx)("div",{className:c().map,children:(0,n.jsx)(u,{src:"/nomade-blog/_next/static/media/map5.a771d714.svg"})}),(0,n.jsx)("div",{className:c().posts,children:s.map((e,t)=>(0,n.jsx)("div",{className:c().post,children:(0,n.jsxs)(l.default,{href:"/post/".concat(e.id),children:[(0,n.jsx)("label",{children:e.labels}),(0,n.jsx)("h2",{className:c().title,children:e.title}),(0,n.jsx)("div",{className:c().gradientOverlay}),(0,n.jsx)("img",{src:o[t],alt:e.title})]},e.id)},t))})]})]})},h=s(6138),x=s.n(h),_=function(){return(0,n.jsx)("header",{className:x().header,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("img",{className:x().logo,src:"/nomade-blog/_next/static/media/logo5.3f050bcd.png",alt:"logo"}),(0,n.jsx)("span",{children:"blog de viagem"})]})})};function g(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_,{}),(0,n.jsx)(m,{})]})}},8940:function(e,t,s){"use strict";s.d(t,{L:function(){return c},o:function(){return i}});var n=s(3827),a=s(7908),o=s(4090);let c=(0,o.createContext)();function i(e){let{children:t}=e,[s,i]=(0,o.useState)([]);return(0,o.useEffect)(()=>{(async()=>{try{let e=await a.Z.get("https://www.googleapis.com/blogger/v3/blogs/8843549498875885847/posts?key=AIzaSyDKlUF9eOK_ybiaNuvqMYBSxCyT-UCSSwI");i(e.data.items)}catch(e){console.error("Erro ao buscar posts do Blogger:",e)}})()},[]),(0,n.jsx)(c.Provider,{value:{posts:s},children:t})}},4876:function(e,t,s){"use strict";function n(e){let t=e.match(/<img.*?src="(.*?)".*?\/>/);return t&&t[1]?{imageUrl:t[1],html:e.replace(t[0],"")}:{imageUrl:null,html:e}}s.d(t,{y:function(){return n}})},6138:function(e){e.exports={header:"section_header__FY9xV",logo:"section_logo__T5mas"}},5514:function(e){e.exports={column:"section_column__1jHXr",firstImage:"section_firstImage__R9duk",content:"section_content__wjIPJ",gradientOverlay:"section_gradientOverlay__dLVoA",title:"section_title__Y69be",column2:"section_column2__BB_R4",row:"section_row__Hco9p",posts:"section_posts__oN8ea",post:"section_post__EFqo7",details:"section_details__NBe9a",itens:"section_itens__Dlfws",author:"section_author__HlGtZ"}}},function(e){e.O(0,[908,792,971,69,744],function(){return e(e.s=9630)}),_N_E=e.O()}]);