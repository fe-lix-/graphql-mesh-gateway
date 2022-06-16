(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[681],{76325:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return h}});var r,t=a(22122),o=a(19756),i=(a(15007),a(64983)),d=a(99536),l=["components"],m={},s=(r="InlineAlert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),u={_frontmatter:m},p=d.Z;function h(e){var n=e.components,a=(0,o.Z)(e,l);return(0,i.mdx)(p,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"headers"},"Headers"),(0,i.mdx)("p",null,"To specify request headers for your mesh, you can add them inside the ",(0,i.mdx)("inlineCode",{parentName:"p"},"JSON")," file that describes your mesh, or you can add them when querying."),(0,i.mdx)("h2",{id:"configure-headers-in-your-mesh-file"},"Configure headers in your mesh file"),(0,i.mdx)("p",null,"To add headers directly to a source handler in your mesh file, for example ",(0,i.mdx)("inlineCode",{parentName:"p"},"mesh.json"),", add the ",(0,i.mdx)("inlineCode",{parentName:"p"},"operationHeaders")," object with key value pairs for your headers. The following example defines the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Store")," header for the Commerce source and multiple headers for the LiveSearch source."),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Header variables are not supported in the mesh file."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "Commerce",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://<host>/graphql",\n            "operationHeaders": {\n              "Store": "default"\n            }\n          }\n        }\n      },\n      {\n        "name": "LiveSearch",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://<host>/search/graphql"\n            "operationHeaders": {\n              "Magento-Environment-Id": "<environment_id>"\n              "Magento-Website-Code": "base"\n              "Magento-Store-Code": "main_website_store"\n              "Magento-Store-View-Code": "default"\n              "X-Api-Key": "search_gql"\n            }\n          }\n        }\n      }\n    ]\n  },\n}\n')),(0,i.mdx)("h2",{id:"add-or-update-headers-at-runtime"},"Add or update headers at runtime"),(0,i.mdx)("p",null,"When you use GraphiQL or another tool to interact with your mesh, you can add headers at runtime that are passed through the mesh to specified handler by using the following format:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Key"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"GGW-SH-<SourceName>-<HeaderName>"))),(0,i.mdx)("p",null,"Using this example, the components of the header name are:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"GGW-SH")," is a required string that indicates to the GraphQL Gateway Server that what follows is a source header."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"SourceName")," is the name of your previously created source or handler. The source names in the example in the previous section are ",(0,i.mdx)("inlineCode",{parentName:"li"},"Commerce")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"LiveSearch"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"HeaderName")," is the name of the header you are adding or modifying. Remember to add a corresponding value for your header.")),(0,i.mdx)("h3",{id:"override-a-default-value"},"Override a default value"),(0,i.mdx)("p",null,"Consider a scenario where the value of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Store")," header defined in the previous example is the store view with the most traffic. However, you have additional store views that allow international customers to shop in their native languages and currencies. You can override the predefined value for your UK store view by sending the following header information with your request:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Key"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"GGW-SH-Commerce-Store"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Value"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"uk"))))),(0,i.mdx)("h3",{id:"add-a-header-to-all-sources"},"Add a header to all sources"),(0,i.mdx)("p",null,"If you want to send a header to all sources in your mesh, you can replace the source handler name with ",(0,i.mdx)("inlineCode",{parentName:"p"},"*"),". For example:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Key"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"GGW-SH-*-trackingId"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Value"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"new-trackingId"))))),(0,i.mdx)("p",null,"This can be useful for authorization, authentication, and tracking headers that could be the same across multiple sources. If you want to apply a header to all sources except one, specify that source separately. For example:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Key"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"GGW-SH-*-trackingId"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Value"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"new-trackingId")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Key"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"GGW-SH-differentSource-trackingId"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"Value"),": ",(0,i.mdx)("inlineCode",{parentName:"li"},"different-trackingId"))))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gateway-headers-md-41015a275c6ce80e4402.js.map