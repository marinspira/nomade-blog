(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[605],{1909:function(t,n,e){Promise.resolve().then(e.bind(e,4717))},4717:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return u}});var o=e(3827),c=e(7908),s=e(4090);let r=t=>({__html:t});var l=e(4876),i=e(8372),a=e.n(i),u=function(t){let{id:n}=t,[e,i]=(0,s.useState)(null);return(0,s.useEffect)(()=>{c.Z.get("https://www.googleapis.com/blogger/v3/blogs/8843549498875885847/posts/".concat(n,"?key=AIzaSyDKlUF9eOK_ybiaNuvqMYBSxCyT-UCSSwI")).then(t=>{let n=t.data,{imageUrl:e,html:o}=(0,l.y)(n.content);i({html:o,imageUrl:e,post:n})}).catch(t=>{console.log("catch",n),console.error(t)})},[n]),(0,o.jsx)("div",{children:e?(0,o.jsxs)("div",{className:a().row,children:[(0,o.jsx)("div",{className:a().imgContent,children:(0,o.jsx)("img",{src:e.imageUrl,alt:""})}),(0,o.jsxs)("div",{className:a().contentContent,children:[(0,o.jsx)("h2",{children:e.post.title}),(0,o.jsx)("div",{dangerouslySetInnerHTML:r(e.html)})]})]}):(0,o.jsx)("p",{children:"Carregando..."})})}},4876:function(t,n,e){"use strict";function o(t){let n=t.match(/<img.*?src="(.*?)".*?\/>/);return n&&n[1]?{imageUrl:n[1],html:t.replace(n[0],"")}:{imageUrl:null,html:t}}e.d(n,{y:function(){return o}})},8372:function(t){t.exports={row:"secton_row__SoFbP",imgContent:"secton_imgContent__cLdIU",contentContent:"secton_contentContent__kYnK4"}}},function(t){t.O(0,[908,971,69,744],function(){return t(t.s=1909)}),_N_E=t.O()}]);