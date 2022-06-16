(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[732],{60513:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return i},default:function(){return c}});var r,t=a(22122),o=a(19756),m=(a(15007),a(64983)),s=a(99536),l=["components"],i={},p=(r="InlineAlert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),d={_frontmatter:i},h=s.Z;function c(e){var n=e.components,a=(0,o.Z)(e,l);return(0,m.mdx)(h,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"transforms"},"Transforms"),(0,m.mdx)("p",null,"While ",(0,m.mdx)("a",{parentName:"p",href:"source-handlers.md"},"handlers")," let you bring outside sources into API Mesh for Adobe Developer App Builder, ",(0,m.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/transforms/index.md"},"transforms")," allow you to modify the schema in order to control the contents of your GraphQL requests and responses."),(0,m.mdx)("p",null,"The API Mesh currently supports the following ",(0,m.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/transforms/index.md"},"transforms"),":"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#rename"},"Rename")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#prefix"},"Prefix")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#filter-schema"},"Filter")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#replace"},"Replace")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#type-merge"},"Type Merge")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#naming-convention"},"Naming Convention"))),(0,m.mdx)("p",null,"Additionally, these transforms are available but are not fully supported at this time:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"/graphql-mesh-gateway/reference/transforms/encapsulate.md"},"Encapsulate")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"/graphql-mesh-gateway/reference/transforms/federation.md"},"Federation"))),(0,m.mdx)("p",null,"Other ",(0,m.mdx)("a",{parentName:"p",href:"getting-started.md"},"GraphQL Mesh")," transforms are not supported."),(0,m.mdx)("h2",{id:"prefix"},"Prefix"),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/transforms/prefix.md"},"Prefix")," transforms allow you to add prefixes to existing types and root operations. ",(0,m.mdx)("inlineCode",{parentName:"p"},"prefix")," is similar to ",(0,m.mdx)("inlineCode",{parentName:"p"},"rename")," in that it allows you to modify names to avoid conflicts, simplify complicated names, and change the appearance of your query. In contrast with ",(0,m.mdx)("inlineCode",{parentName:"p"},"rename"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"prefix"),' is simpler and only allows you to append a prefix to the existing name. In the example below, we differentiate our sources by adding an "AEM',(0,m.mdx)("em",{parentName:"p"},'" prefix to the ',(0,m.mdx)("a",{parentName:"em",href:"https://experienceleague.adobe.com/docs/experience-manager-cloud-service.html"},"AEM"),' source and a  "Venia'),'" prefix to the the ',(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/pwa-studio/"},"PWA")," source."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "AEM",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://example1.com/graphql"\n          }\n        },\n        "transforms": [\n          {\n            "prefix": {\n              "includeRootOperations": true,\n              "value": "AEM_"\n            }\n          }\n        ]\n      },\n       {\n        "name": "PWA",\n        "handler": {\n          "graphql": {\n            "endpoint": "http://example2.com/graphql"\n          }\n        },\n        "transforms": [\n          {\n            "prefix": {\n              "includeRootOperations": true,\n              "value": "Venia_"\n            }\n          }\n        ]\n      }\n    ]\n  },\n}\n')),(0,m.mdx)("h2",{id:"rename"},"Rename"),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/transforms/rename.md"},"Rename")," transforms allow you to rename a GraphQL field, type, or field argument. Renaming allows you to avoid conflicting names, simplify complicated names, and make queries look more like mutations. In the example below, we rename a long API field name from ",(0,m.mdx)("inlineCode",{parentName:"p"},"integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost")," to the shorter ",(0,m.mdx)("inlineCode",{parentName:"p"},"CreateCustomerToken"),"."),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"rename")," elements can contain arrays of individual renaming operations, defined in separate ",(0,m.mdx)("inlineCode",{parentName:"p"},"renames")," objects. Each of these objects must define the ",(0,m.mdx)("inlineCode",{parentName:"p"},"from")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"to")," values."),(0,m.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"You can use ",(0,m.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/transforms/rename.md#config-api-reference"},"RegEx flags")," to enable the use of regular expressions when renaming using this transform. For example, you could use the key value pair ",(0,m.mdx)("inlineCode",{parentName:"p"},"field: api(.*)")," in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"from"),' object to rename any field of the corresponding type that begins with "api".'),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "Magento REST",\n        "handler": {\n          "openapi": {\n            "source": "https://www.example.com/rest/all/schema?services=all"\n          }\n        },\n          "transforms": [\n            {\n              "rename": {\n              "renames": [\n                {\n                  "from": {\n                    "type": "Mutation",\n                    "field": "integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost"\n                  },\n                  "to": {\n                    "type": "Mutation",\n                    "field": "CreateCustomerToken"\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    ]\n  },\n}\n')),(0,m.mdx)("h2",{id:"filter-schema"},"Filter schema"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/transforms/filter-schema.md"},"Filter Schema")," transform allows you to specify which schema elements to include or exclude in your mesh. You can include or exclude entire queries and mutations, or place restrictions on which types can appear in your calls."),(0,m.mdx)("p",null,"For example, you might want to exclude deprecated queries, mutations, and types from your schema so that your integration is not affected when these entities are removed. In the example below, the deprecated Adobe Commerce  ",(0,m.mdx)("inlineCode",{parentName:"p"},"category")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"customerOrders")," queries are filtered out of the ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/pwa-studio/"},"PWA")," handler."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "AEM",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://example1.com/graphql"\n          }\n        }\n      },\n      {\n        "name": "PWA",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://example2.com/graphql"\n          }\n        },\n        "transforms": [\n          {\n            "filterSchema": {\n              "filters": [\n                "Query.!category",\n                "Query.!customerOrders"\n              ]\n            }\n          }\n        ]\n      }\n    ]\n  },\n}\n')),(0,m.mdx)("h2",{id:"replace"},"Replace"),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/transforms/replace-field.md"},"Replace")," transforms allow you to replace the configuration properties of one field with another, which allows you to hoist field values from a subfield to its parent. Use this transform to clean up redundant looking queries or replace field types. In the example below, the ",(0,m.mdx)("inlineCode",{parentName:"p"},"parent")," field is being replaced by the ",(0,m.mdx)("inlineCode",{parentName:"p"},"child")," field."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "PWA",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://example2.com/graphql"\n          }\n        },\n          "transforms": [\n            {\n              "replaceField": {\n              "replacements": [\n                {\n                  "from": {\n                    "type": "Query",\n                    "field": "parent"\n                  },\n                  "to": {\n                    "type": "<your_API_Response>",\n                    "field": "child",\n                  "scope": "hoistvalue"\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    ]\n  },\n}\n')),(0,m.mdx)("h2",{id:"type-merge"},"Type Merge"),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/transforms/type-merging.md"},"Type Merge")," transforms allow you to combine multiple sources by merging a type from each source. For example, you could combine responses from two different APIs on a single field, provided you ",(0,m.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/transforms/rename.md"},"rename")," the fields you want to stitch to the same name. For more information, see this ",(0,m.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/multiple-apis.md#merging-types-from-different-sources-using-type-merging"},"GraphQL Mesh Example"),"."),(0,m.mdx)("h2",{id:"naming-convention"},"Naming Convention"),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/transforms/naming-convention.md"},"Naming Convention")," transforms allow you to apply casing and other conventions to your response. In the example below, ",(0,m.mdx)("inlineCode",{parentName:"p"},"enumValues")," fields are converted to uppercase, while ",(0,m.mdx)("inlineCode",{parentName:"p"},"fieldNames")," are converted to camel case to enforce consistency."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "PWA",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://example2.com/graphql"\n          }\n        },\n        "transforms": [\n          {\n            "namingConvention": {\n              "enumValues": "upperCase",\n              "fieldNames": "camelCase"\n            }\n          }\n        ]\n      }\n    ]\n  },\n}\n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gateway-transforms-md-23ad87bb527d3c8e3706.js.map