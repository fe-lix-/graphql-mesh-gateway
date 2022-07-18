(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[186],{13024:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return c}});var a,r=t(22122),o=t(19756),i=(t(15007),t(64983)),l=t(99536),d=t(73867),m=["components"],p={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),h={_frontmatter:p},u=l.Z;function c(e){var n=e.components,t=(0,o.Z)(e,m);return(0,i.mdx)(u,(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"graphql-handlers"},"GraphQL handlers"),(0,i.mdx)("p",null,"This handler allows you to load remote GraphQL schemas and use it with schema-stitching, based on ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql-tools"),". To get started, use the handler in your Mesh config file:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "MyGraphQLApi",\n      "handler": {\n        "graphql": {\n          "endpoint": "http://my-service-url:3000/graphql"\n        }\n      }\n    }\n  ]\n}\n')),(0,i.mdx)("p",null,"GraphQL handlers can also use local sources, see ",(0,i.mdx)("a",{parentName:"p",href:"../handlers/index.md#reference-local-files-in-handlers"},"Reference local file handlers")," for more information."),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"You can check out our example that uses schema stitching with a PostgreSQL data source.\n",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/postgres-geodb"},"Click here to open the example on GitHub")),(0,i.mdx)("h2",{id:"dynamic-header-values"},"Dynamic Header Values"),(0,i.mdx)(d.default,{mdxType:"Headers"}),(0,i.mdx)("h3",{id:"from-context"},"From Context"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "MyGraphQLApi",\n      "handler": {\n        "graphql": {\n          "endpoint": "http://my-service-url:3000/graphql",\n          "operationHeaders": {\n            "Authorization": "Bearer {context.headers[\'x-my-api-token\']}"\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,i.mdx)("h2",{id:"config-api-reference"},"Config API Reference"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"endpoint")," (type: ",(0,i.mdx)("inlineCode",{parentName:"li"},"String"),", required) - A url or file path to your remote GraphQL endpoint.\nIf you provide a path to a code file(js or ts),\nother options will be ignored and the schema exported from the file will be used directly."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"schemaHeaders")," (type: ",(0,i.mdx)("inlineCode",{parentName:"li"},"Any"),") - JSON object representing the Headers to add to the runtime of the API calls only for schema introspection"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"operationHeaders")," (type: ",(0,i.mdx)("inlineCode",{parentName:"li"},"JSON"),") - JSON object representing the Headers to add to the runtime of the API calls only for operation during runtime"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"useGETForQueries")," (type: ",(0,i.mdx)("inlineCode",{parentName:"li"},"Boolean"),") - Use HTTP GET for Query operations"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"method")," (type: ",(0,i.mdx)("inlineCode",{parentName:"li"},"String (GET | POST)"),") - HTTP method used for GraphQL operations")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-handlers-graphql-md-7e97762288d8a177d6c8.js.map