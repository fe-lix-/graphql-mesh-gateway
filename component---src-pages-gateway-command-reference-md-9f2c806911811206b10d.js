(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[134],{782:function(e,a,n){"use strict";n.r(a),n.d(a,{_frontmatter:function(){return o},default:function(){return l}});var m=n(22122),t=n(19756),d=(n(15007),n(64983)),s=n(99536),i=["components"],o={},r={_frontmatter:o},p=s.Z;function l(e){var a=e.components,n=(0,t.Z)(e,i);return(0,d.mdx)(p,(0,m.Z)({},r,n,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"command-reference"},"Command Reference"),(0,d.mdx)("p",null,"The API Mesh for Adobe Developer App Builder CLI allows you to manage and modify meshes. This page covers commands exclusive to the API Mesh. For authorization and other Adobe I/O Extensible CLI commands, refer to the ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-cli#commands"},"Adobe IO CLI command list"),". For installation instructions, refer to ",(0,d.mdx)("a",{parentName:"p",href:"getting-started.md"},"Getting Started"),"."),(0,d.mdx)("p",null,"All commands on this page support the ",(0,d.mdx)("inlineCode",{parentName:"p"},"--help")," argument, which provides information about the command."),(0,d.mdx)("h2",{id:"aio-api-meshcreate"},"aio api-mesh:create"),(0,d.mdx)("p",null,"Creates a new mesh based on the settings in the specified ",(0,d.mdx)("inlineCode",{parentName:"p"},"JSON")," file in your working directory. After creating your mesh, you will receive a  ",(0,d.mdx)("inlineCode",{parentName:"p"},"meshId"),", like ",(0,d.mdx)("inlineCode",{parentName:"p"},"12a3b4c5-6d78-4012-3456-7e890fa1bcde"),", to refer to it in the future. For more information, see ",(0,d.mdx)("a",{parentName:"p",href:"create-mesh.md"},"Creating a mesh"),"."),(0,d.mdx)("h3",{id:"usage"},"Usage"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:create [FILE]\n")),(0,d.mdx)("h3",{id:"arguments"},"Arguments"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"FILE")," The JSON file that contains your mesh's handlers and transforms."),(0,d.mdx)("h3",{id:"example"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:create mesh.json\n")),(0,d.mdx)("h4",{id:"response"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-terminal"},"Successfully created a mesh with the ID: 12a3b4c5-6d78-4012-3456-7e890fa1bcde\n")),(0,d.mdx)("h2",{id:"aio-api-meshupdate"},"aio api-mesh:update"),(0,d.mdx)("p",null,"Updates an existing mesh based on the settings in the specified ",(0,d.mdx)("inlineCode",{parentName:"p"},"JSON")," file. For more information, see ",(0,d.mdx)("a",{parentName:"p",href:"create-mesh.md#update-an-existing-mesh"},"Updating a mesh"),"."),(0,d.mdx)("h3",{id:"usage-1"},"Usage"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:update [MESHID] [FILE]\n")),(0,d.mdx)("h3",{id:"arguments-1"},"Arguments"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"MESHID")," The name of the existing meshId that you want to update."),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"FILE")," The JSON file that contains your mesh's handlers and transforms."),(0,d.mdx)("h3",{id:"example-1"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:update mesh1 mesh.json\n")),(0,d.mdx)("h4",{id:"response-1"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-terminal"},"Successfully updated the mesh with the id: 12a3b4c5-6d78-4012-3456-7e890fa1bcde\n")),(0,d.mdx)("h2",{id:"aio-api-meshget"},"aio api-mesh:get"),(0,d.mdx)("p",null,"Retrieves the current ",(0,d.mdx)("inlineCode",{parentName:"p"},"JSON")," mesh file for the specified mesh."),(0,d.mdx)("h3",{id:"usage-2"},"Usage"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:get [MESHID] [DOWNLOAD]\n")),(0,d.mdx)("h3",{id:"arguments-2"},"Arguments"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"MESHID")," The name of the existing meshId that you want to view."),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"DOWNLOAD")," (Optional) specify the local filename to create from the mesh."),(0,d.mdx)("h3",{id:"example-2"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:get 12a3b4c5-6d78-4012-3456-7e890fa1bcde\n")),(0,d.mdx)("h4",{id:"response-2"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-terminal"},'Successfully retrieved mesh {\n  "lastUpdated": "2022-06-01T12:12:12.0000",\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "Commerce",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://<your_commerce_site>/graphql/"\n          }\n        }\n      },\n      {\n        "name": "AEM",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://<your_AEM_site>/endpoint.json"\n          }\n        }\n      },\n      {\n        "name": "LiveSearch",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://<your_commerce_site>/search/graphql",\n            "operationHeaders": {\n              "Magento-Store-View-Code": "default",\n              "Magento-Website-Code": "base",\n              "Magento-Store-Code": "main_website_store",\n              "Magento-Environment-Id": "<your_environment_id>",\n              "x-api-key": "search_gql",\n              "Content-Type": "application/json"\n            },\n            "schemaHeaders": {\n              "Magento-Store-View-Code": "default",\n              "Magento-Website-Code": "base",\n              "Magento-Store-Code": "main_website_store",\n              "Magento-Environment-Id": "<your_environment_id>",\n              "x-api-key": "search_gql",\n              "Content-Type": "application/json"\n            }\n          }\n        }\n      }\n    ]\n  },\n  "meshId": "12a3b4c5-6d78-4012-3456-7e890fa1bcde",\n  "lastUpdatedBy": {\n    "firstName": "User",\n    "lastName": "Name",\n    "userEmail": "uname@domain.com",\n    "userId": "A4BF2F3C61FC531A0A494210@AdobeID",\n    "displayName": "User%20Name"\n  }\n}\n')),(0,d.mdx)("h2",{id:"aio-api-meshdelete-meshid"},"aio api-mesh:delete meshId"),(0,d.mdx)("p",null,"Deletes the mesh from the selected workspace."),(0,d.mdx)("h3",{id:"usage-3"},"Usage"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:delete [MESHID]\n")),(0,d.mdx)("h3",{id:"arguments-3"},"Arguments"),(0,d.mdx)("p",null,"  MESHID    The name of the existing meshId that you want to view."),(0,d.mdx)("h3",{id:"example-3"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:delete 12a3b4c5-6d78-4012-3456-7e890fa1bcde\n")),(0,d.mdx)("h3",{id:"response-3"},"Response"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-terminal"},"Successfully deleted 12a3b4c5-6d78-4012-3456-7e890fa1bcde\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gateway-command-reference-md-9f2c806911811206b10d.js.map