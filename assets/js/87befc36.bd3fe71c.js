"use strict";(self.webpackChunkkmhfr_docs=self.webpackChunkkmhfr_docs||[]).push([[2725],{3439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(3274),i=n(789),a=n(5841);const r={sidebar_position:11,title:"Facilities-Regulation-Status"},d="API",c={id:"Guide/API/facilities/facilities_regulation_status",title:"Facilities-Regulation-Status",description:"This is a guide of facilities-regulation-status enpoint",source:"@site/docs/Guide/API/facilities/facilities_regulation_status.mdx",sourceDirName:"Guide/API/facilities",slug:"/Guide/API/facilities/facilities_regulation_status",permalink:"/docs/Guide/API/facilities/facilities_regulation_status",draft:!1,unlisted:!1,editUrl:"https://github.com/uonafya/kmhfr-docs/tree/main/docs/Guide/API/facilities/facilities_regulation_status.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Facilities-Regulation-Status"},sidebar:"tutorialSidebar",previous:{title:"Facilities-Regulating-Body",permalink:"/docs/Guide/API/facilities/facilities_regulating_body"},next:{title:"Facilities-Regulator-Sync",permalink:"/docs/Guide/API/facilities/facilities_regulator_sync"}},l={},o=[{value:"<code>api facilities_regulation_status_read</code>",id:"api-facilities_regulation_status_read",level:3},{value:"<code>api facilities_regulation_status_create</code>",id:"api-facilities_regulation_status_create",level:3},{value:"<code>api facilities_regulation_status_update</code>",id:"api-facilities_regulation_status_update",level:3},{value:"<code>api facilities_regulation_status_partial_update</code>",id:"api-facilities_regulation_status_partial_update",level:3},{value:"<code>api facilities_regulation_status_delete</code>",id:"api-facilities_regulation_status_delete",level:3}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"api",children:"API"})}),"\n",(0,s.jsx)(t.p,{children:"This is a guide of facilities-regulation-status enpoint"}),"\n","\n",(0,s.jsx)(t.h3,{id:"api-facilities_regulation_status_read",children:(0,s.jsx)(t.code,{children:"api facilities_regulation_status_read"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Code samples"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('https://api.kmhfr.health.go.ke/api/facilities/regulation_status/{id}/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET /api/facilities/regulation_status/{id}/"})}),"\n",(0,s.jsx)(t.p,{children:"Retrieves a particular regulation status"}),"\n",(0,s.jsx)("h3",{id:"api_facilities_regulation_status_read-parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"In"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsx)(t.td,{children:"path"}),(0,s.jsx)(t.td,{children:"string(uuid)"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"A UUID string identifying this regulation status."})]})})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Example responses"}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"200 Response"}),"\n"]}),"\n",(0,s.jsx)(a.A,{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\n  "next_state_name": "string",\n  "previous_state_name": "string",\n  "created": "2019-08-24T14:15:22Z",\n  "updated": "2019-08-24T14:15:22Z",\n  "deleted": true,\n  "active": true,\n  "search": "string",\n  "name": "string",\n  "description": "string",\n  "is_initial_state": true,\n  "is_final_state": true,\n  "is_default": true,\n  "created_by": 0,\n  "updated_by": 0,\n  "previous_status": "e735b27b-e10f-476e-9c51-4e2f6baade73",\n  "next_status": "dd007b8c-2b00-49a9-a744-39cf59834d69"\n}\n'})})}),"\n",(0,s.jsx)("h3",{id:"api_facilities_regulation_status_read-responses",children:"Responses"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Status"}),(0,s.jsx)(t.th,{children:"Meaning"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Schema"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"200"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,s.jsx)(t.td,{children:"none"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/Guide/API/schema#regulationstatus",children:"RegulationStatus"})})]})})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"To perform this operation, you must be authenticated by means of one of the following methods:\nBasic"})}),"\n",(0,s.jsx)(t.h3,{id:"api-facilities_regulation_status_create",children:(0,s.jsx)(t.code,{children:"api facilities_regulation_status_create"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Code samples"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'const inputBody = \'{\n  "created": "2019-08-24T14:15:22Z",\n  "updated": "2019-08-24T14:15:22Z",\n  "deleted": true,\n  "active": true,\n  "name": "string",\n  "description": "string",\n  "is_initial_state": true,\n  "is_final_state": true,\n  "is_default": true,\n  "created_by": 0,\n  "updated_by": 0,\n  "previous_status": "e735b27b-e10f-476e-9c51-4e2f6baade73",\n  "next_status": "dd007b8c-2b00-49a9-a744-39cf59834d69"\n}\';\nconst headers = {\n  \'Content-Type\':\'application/json\',\n  \'Accept\':\'application/json\'\n};\n\nfetch(\'https://api.kmhfr.health.go.ke/api/facilities/regulation_status/\',\n{\n  method: \'POST\',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"POST /api/facilities/regulation_status/"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Lists and creates regulation statuses"})}),"\n",(0,s.jsx)(t.p,{children:"name -- name of a regulation status\ndescription -- description of a regulation status\nCreated --  Date the record was Created\nUpdated -- Date the record was Updated\nCreated_by -- User who created the record\nUpdated_by -- User who updated the record\nactive  -- Boolean is the record active\ndeleted -- Boolean is the record deleted"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Body parameter"}),"\n"]}),"\n",(0,s.jsx)(a.A,{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "created": "2019-08-24T14:15:22Z",\n  "updated": "2019-08-24T14:15:22Z",\n  "deleted": true,\n  "active": true,\n  "name": "string",\n  "description": "string",\n  "is_initial_state": true,\n  "is_final_state": true,\n  "is_default": true,\n  "created_by": 0,\n  "updated_by": 0,\n  "previous_status": "e735b27b-e10f-476e-9c51-4e2f6baade73",\n  "next_status": "dd007b8c-2b00-49a9-a744-39cf59834d69"\n}\n'})})}),"\n",(0,s.jsx)("h3",{id:"api_facilities_regulation_status_create-parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"In"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"body"}),(0,s.jsx)(t.td,{children:"body"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/Guide/API/schema#regulationstatus",children:"RegulationStatus"})}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"none"})]})})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Example responses"}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"201 Response"}),"\n"]}),"\n",(0,s.jsx)(a.A,{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\n  "next_state_name": "string",\n  "previous_state_name": "string",\n  "created": "2019-08-24T14:15:22Z",\n  "updated": "2019-08-24T14:15:22Z",\n  "deleted": true,\n  "active": true,\n  "search": "string",\n  "name": "string",\n  "description": "string",\n  "is_initial_state": true,\n  "is_final_state": true,\n  "is_default": true,\n  "created_by": 0,\n  "updated_by": 0,\n  "previous_status": "e735b27b-e10f-476e-9c51-4e2f6baade73",\n  "next_status": "dd007b8c-2b00-49a9-a744-39cf59834d69"\n}\n'})})}),"\n",(0,s.jsx)("h3",{id:"api_facilities_regulation_status_create-responses",children:"Responses"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Status"}),(0,s.jsx)(t.th,{children:"Meaning"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Schema"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"201"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.2",children:"Created"})}),(0,s.jsx)(t.td,{children:"none"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/Guide/API/schema#regulationstatus",children:"RegulationStatus"})})]})})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"To perform this operation, you must be authenticated by means of one of the following methods:\nBasic"})}),"\n",(0,s.jsx)(t.h3,{id:"api-facilities_regulation_status_update",children:(0,s.jsx)(t.code,{children:"api facilities_regulation_status_update"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Code samples"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'const inputBody = \'{\n  "created": "2019-08-24T14:15:22Z",\n  "updated": "2019-08-24T14:15:22Z",\n  "deleted": true,\n  "active": true,\n  "name": "string",\n  "description": "string",\n  "is_initial_state": true,\n  "is_final_state": true,\n  "is_default": true,\n  "created_by": 0,\n  "updated_by": 0,\n  "previous_status": "e735b27b-e10f-476e-9c51-4e2f6baade73",\n  "next_status": "dd007b8c-2b00-49a9-a744-39cf59834d69"\n}\';\nconst headers = {\n  \'Content-Type\':\'application/json\',\n  \'Accept\':\'application/json\'\n};\n\nfetch(\'https://api.kmhfr.health.go.ke/api/facilities/regulation_status/{id}/\',\n{\n  method: \'PUT\',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"PUT /api/facilities/regulation_status/{id}/"})}),"\n",(0,s.jsx)(t.p,{children:"Retrieves a particular regulation status"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Body parameter"}),"\n"]}),"\n",(0,s.jsx)(a.A,{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "created": "2019-08-24T14:15:22Z",\n  "updated": "2019-08-24T14:15:22Z",\n  "deleted": true,\n  "active": true,\n  "name": "string",\n  "description": "string",\n  "is_initial_state": true,\n  "is_final_state": true,\n  "is_default": true,\n  "created_by": 0,\n  "updated_by": 0,\n  "previous_status": "e735b27b-e10f-476e-9c51-4e2f6baade73",\n  "next_status": "dd007b8c-2b00-49a9-a744-39cf59834d69"\n}\n'})})}),"\n",(0,s.jsx)("h3",{id:"api_facilities_regulation_status_update-parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"In"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"body"}),(0,s.jsx)(t.td,{children:"body"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/Guide/API/schema#regulationstatus",children:"RegulationStatus"})}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"none"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsx)(t.td,{children:"path"}),(0,s.jsx)(t.td,{children:"string(uuid)"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"A UUID string identifying this regulation status."})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Example responses"}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"200 Response"}),"\n"]}),"\n",(0,s.jsx)(a.A,{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\n  "next_state_name": "string",\n  "previous_state_name": "string",\n  "created": "2019-08-24T14:15:22Z",\n  "updated": "2019-08-24T14:15:22Z",\n  "deleted": true,\n  "active": true,\n  "search": "string",\n  "name": "string",\n  "description": "string",\n  "is_initial_state": true,\n  "is_final_state": true,\n  "is_default": true,\n  "created_by": 0,\n  "updated_by": 0,\n  "previous_status": "e735b27b-e10f-476e-9c51-4e2f6baade73",\n  "next_status": "dd007b8c-2b00-49a9-a744-39cf59834d69"\n}\n'})})}),"\n",(0,s.jsx)("h3",{id:"api_facilities_regulation_status_update-responses",children:"Responses"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Status"}),(0,s.jsx)(t.th,{children:"Meaning"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Schema"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"200"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,s.jsx)(t.td,{children:"none"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/Guide/API/schema#regulationstatus",children:"RegulationStatus"})})]})})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"To perform this operation, you must be authenticated by means of one of the following methods:\nBasic"})}),"\n",(0,s.jsx)(t.h3,{id:"api-facilities_regulation_status_partial_update",children:(0,s.jsx)(t.code,{children:"api facilities_regulation_status_partial_update"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Code samples"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'const inputBody = \'{\n  "created": "2019-08-24T14:15:22Z",\n  "updated": "2019-08-24T14:15:22Z",\n  "deleted": true,\n  "active": true,\n  "name": "string",\n  "description": "string",\n  "is_initial_state": true,\n  "is_final_state": true,\n  "is_default": true,\n  "created_by": 0,\n  "updated_by": 0,\n  "previous_status": "e735b27b-e10f-476e-9c51-4e2f6baade73",\n  "next_status": "dd007b8c-2b00-49a9-a744-39cf59834d69"\n}\';\nconst headers = {\n  \'Content-Type\':\'application/json\',\n  \'Accept\':\'application/json\'\n};\n\nfetch(\'https://api.kmhfr.health.go.ke/api/facilities/regulation_status/{id}/\',\n{\n  method: \'PATCH\',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"PATCH /api/facilities/regulation_status/{id}/"})}),"\n",(0,s.jsx)(t.p,{children:"Retrieves a particular regulation status"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Body parameter"}),"\n"]}),"\n",(0,s.jsx)(a.A,{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "created": "2019-08-24T14:15:22Z",\n  "updated": "2019-08-24T14:15:22Z",\n  "deleted": true,\n  "active": true,\n  "name": "string",\n  "description": "string",\n  "is_initial_state": true,\n  "is_final_state": true,\n  "is_default": true,\n  "created_by": 0,\n  "updated_by": 0,\n  "previous_status": "e735b27b-e10f-476e-9c51-4e2f6baade73",\n  "next_status": "dd007b8c-2b00-49a9-a744-39cf59834d69"\n}\n'})})}),"\n",(0,s.jsx)("h3",{id:"api_facilities_regulation_status_partial_update-parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"In"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"body"}),(0,s.jsx)(t.td,{children:"body"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/Guide/API/schema#regulationstatus",children:"RegulationStatus"})}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"none"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsx)(t.td,{children:"path"}),(0,s.jsx)(t.td,{children:"string(uuid)"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"A UUID string identifying this regulation status."})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Example responses"}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"200 Response"}),"\n"]}),"\n",(0,s.jsx)(a.A,{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\n  "next_state_name": "string",\n  "previous_state_name": "string",\n  "created": "2019-08-24T14:15:22Z",\n  "updated": "2019-08-24T14:15:22Z",\n  "deleted": true,\n  "active": true,\n  "search": "string",\n  "name": "string",\n  "description": "string",\n  "is_initial_state": true,\n  "is_final_state": true,\n  "is_default": true,\n  "created_by": 0,\n  "updated_by": 0,\n  "previous_status": "e735b27b-e10f-476e-9c51-4e2f6baade73",\n  "next_status": "dd007b8c-2b00-49a9-a744-39cf59834d69"\n}\n'})})}),"\n",(0,s.jsx)("h3",{id:"api_facilities_regulation_status_partial_update-responses",children:"Responses"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Status"}),(0,s.jsx)(t.th,{children:"Meaning"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Schema"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"200"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,s.jsx)(t.td,{children:"none"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/Guide/API/schema#regulationstatus",children:"RegulationStatus"})})]})})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"To perform this operation, you must be authenticated by means of one of the following methods:\nBasic"})}),"\n",(0,s.jsx)(t.h3,{id:"api-facilities_regulation_status_delete",children:(0,s.jsx)(t.code,{children:"api facilities_regulation_status_delete"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Code samples"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"\nfetch('https://api.kmhfr.health.go.ke/api/facilities/regulation_status/{id}/',\n{\n  method: 'DELETE'\n\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"DELETE /api/facilities/regulation_status/{id}/"})}),"\n",(0,s.jsx)(t.p,{children:"Retrieves a particular regulation status"}),"\n",(0,s.jsx)("h3",{id:"api_facilities_regulation_status_delete-parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"In"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsx)(t.td,{children:"path"}),(0,s.jsx)(t.td,{children:"string(uuid)"}),(0,s.jsx)(t.td,{children:"true"}),(0,s.jsx)(t.td,{children:"A UUID string identifying this regulation status."})]})})]}),"\n",(0,s.jsx)("h3",{id:"api_facilities_regulation_status_delete-responses",children:"Responses"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Status"}),(0,s.jsx)(t.th,{children:"Meaning"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Schema"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"204"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.5",children:"No Content"})}),(0,s.jsx)(t.td,{children:"none"}),(0,s.jsx)(t.td,{children:"None"})]})})]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"To perform this operation, you must be authenticated by means of one of the following methods:\nBasic"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5841:(e,t,n)=>{n.d(t,{A:()=>r});n(9474);var s=n(8923);const i={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var a=n(3274);function r(e){let{children:t,minHeight:n,url:r="http://localhost:3000",style:d,bodyStyle:c}=e;return(0,a.jsxs)("div",{className:i.browserWindow,style:{...d,minHeight:n},children:[(0,a.jsxs)("div",{className:i.browserWindowHeader,children:[(0,a.jsxs)("div",{className:i.buttons,children:[(0,a.jsx)("span",{className:i.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:i.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:i.dot,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,s.A)(i.browserWindowAddressBar,"text--truncate"),children:r}),(0,a.jsx)("div",{className:i.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:i.bar}),(0,a.jsx)("span",{className:i.bar}),(0,a.jsx)("span",{className:i.bar})]})})]}),(0,a.jsx)("div",{className:i.browserWindowBody,style:c,children:t})]})}},789:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(9474);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);