(this["webpackJsonp@nexys/tabular"]=this["webpackJsonp@nexys/tabular"]||[]).push([[0],{136:function(e,t,a){e.exports=a(305)},141:function(e,t,a){},219:function(e,t){},221:function(e,t){},305:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(131),l=a.n(r),i=(a(141),a(10)),o=a(11),m=a(13),c=a(12),u=a(14),N=a(31),f=a(26),p=a(68),d=a.n(p),h=a(132),k=a(133),v=a.n(k),b=function(){var e=Object(h.a)(d.a.mark((function e(t,a){var s,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new v.a.Workbook,n=s.addWorksheet(a),t.map((function(e,t){return e.map((function(e,a){var s=n.cell(t+1,a+1);switch("object"!==typeof e&&(e={content:e}),typeof e.content){case"number":s.number(e.content);break;case"string":e.content.startsWith("http://")||e.content.startsWith("https://")?s.link(e):s.string(e.content);break;default:s.string("N/A")}return e.style&&s.style(e.style),!0})),!0})),e.next=5,s.writeToBuffer();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=function(e){return"ok"===e?"green":"inactive"===e?"red":"pending"===e?"orange":null},E=function(){return Math.ceil(1e3*Math.random())},g=function(e,t){return new Blob([e],{type:t})},w=a(69),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).onClick=function(){var e=a.state.content,t=JSON.parse(e);b(t,"Users").then((function(e){var t=g(e,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),a=window.URL.createObjectURL(t);window.location=a}))},a.handleChange=function(e){try{var t=e.target.value;a.setState({content:t})}catch(s){}},a.loadUsersSimple=function(){var e=w.splice(0,10).map((function(e){return[e.firstName,e.lastName]})),t=["first name","last name"].map((function(e){return{content:e,style:{font:{bold:!0}}}}));e.unshift(t),a.setState({jsContent:e})},a.loadUsersAdvanced=function(){var e={font:{color:"blue",bold:!0}},t=w.map((function(t){var a={font:{color:y(t.status)}},s={content:t.status,style:a},n={content:E(),style:e};return[t.firstName,t.lastName,s,n]}));a.setState({jsContent:t})},a.renderNav=function(){var e=[{id:1,name:"user simple",fx:a.loadUsersSimple},{id:2,name:"user advanced",fx:a.loadUsersAdvanced}];return n.a.createElement("ul",{className:"nav"},e.map((function(e){return n.a.createElement("li",{key:e.id,className:"nav-item"},n.a.createElement("button",{className:"nav-link",onClick:e.fx},"Load example #",e.name))})))},a.state={content:"",jsContent:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.content;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Tabular Export"),n.a.createElement("p",null,"Turn ",n.a.createElement("code",null,"JSON")," lists into Excel files (.xlsx)."),this.renderNav(),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("textarea",{className:"form-control",style:{minWidth:"100%",height:"400px"},placeholder:"insert your json here",value:e,onChange:this.handleChange}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:this.onClick},"Download ",n.a.createElement("i",{className:"fa fa-file-excel"})))))}}]),t}(n.a.Component),C=function(e,t,a){var s={},n=[];return e.map((function(e,r){var l=r%a,i=t[l+1];return i&&(s[i]=e),l===a-1&&(n.push(s),s={}),!0})),n},O=a(30),x=a.n(O),S=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.options.map((function(e,t){return n.a.createElement("option",{key:t,value:e.id},e.name||e.label)}));return this.props.placeholder&&e.unshift(n.a.createElement("option",{key:"placeholder",value:"",disabled:!0,selected:!0,hidden:!0},this.props.placeholder)),n.a.createElement("select",{className:"form-control",value:this.props.value,onChange:this.props.onChange,disabled:this.props.disabled},n.a.createElement("option",null,this.props.defaultValue),e)}}]),t}(n.a.Component),A=x.a.Select()(S),M=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("input",{className:this.props.className,type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:this.props.onChange,onFocus:this.props.onFocus,onBlur:this.props.onBlur,disabled:this.props.disabled,style:this.props.style,autoFocus:this.props.autoFocus})}}]),t}(n.a.Component),L=x.a.Input()(M),B=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("textarea",{className:"form-control",value:this.props.value,onChange:this.props.onChange,onBlur:this.props.handleBlur,rows:this.props.rows,cols:this.props.cols,placeholder:this.props.placeholder,disabled:this.props.disabled,style:{minWidth:"100%",height:"400px"}})}}]),t}(n.a.Component),F=x.a.Textarea()(B),J=a(20),W=a.n(J),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).getXlsx=function(){var e=a.state.form.mapAttributes,t=a.getContent();if(t.length){var s=Object.keys(e).map((function(t){return e[t]})),n=t.map((function(e){var t=[];return s.map((function(a){t.push(e[a])})),t})),r=[s.map((function(e){return{content:e,style:{font:{bold:!0}}}}))].concat(n);b(r,"Users").then((function(e){var t=g(e,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),a=window.URL.createObjectURL(t);window.location=a}))}},a.getContent=function(){var e=a.state.form,t=e.nSeqLen,s=e.mapAttributes,n=e.content.split("\n");return C(n,s,t)},a.getJson=function(){var e=a.getContent();a.setState({json:e})},a.handleChange=function(e){try{var t=e.target.value.split("\n");a.setState({lines:t})}catch(s){}},a.updateForm=function(e){var t=W.a.ds.updateObject(a.state.form,e);a.setState({form:t})},a.renderMapAttributes=function(e){return e?Array(e).fill(null).map((function(e,t){return n.a.createElement("div",{key:t,className:"row"},n.a.createElement("div",{className:"col-sm-1"},"#",t+1),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement(L,{name:"mapAttributes."+(t+1),onChange:a.updateForm})))})):null},a.state={nSeqLen:2,form:{mapAttributes:{}},json:null},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"renderJson",value:function(){var e=this.state.json;return e?n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-1"},n.a.createElement("code",null,JSON.stringify(e,null,2)))):null}},{key:"render",value:function(){var e=this.state,t=e.lines,a=e.form.nSeqLen,s=Array(100).fill(null).map((function(e,t){return{id:t+1,name:t+1}}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Lines to Rows"),n.a.createElement("p",null,"Turn multi-line encoded list in tables."),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(F,{placeholder:"insert the content of the file here",name:"content",value:t,onChange:this.updateForm}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement(A,{name:"nSeqLen",onChange:this.updateForm,options:s}))),this.renderMapAttributes(a),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:this.getXlsx},"Download ",n.a.createElement("i",{className:"fa fa-file-excel"})),"\xa0",n.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:this.getJson},"JSON ",n.a.createElement("i",{className:"fa fa-file-code"})))),this.renderJson())}}]),t}(n.a.Component),T={borderTop:"1px solid #e5e5e5",borderBottom:"1px solid #e5e5e5",boxShadow:"0 .25rem .75rem rgba(0, 0, 0, .05)"},U=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("div",{style:T,className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"},n.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},n.a.createElement(N.b,{to:"/"},"Xlsx Tabular")),n.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},n.a.createElement(N.b,{className:"p-2 text-dark",to:"/tables"},"Rows To Xlsx"),n.a.createElement(N.b,{className:"p-2 text-dark",to:"/lines"},"Lines to rows")))),n.a.createElement("main",{role:"main"},n.a.createElement("div",{classNameName:"container"},e.children)))},G=function(){return n.a.createElement("p",null,"Select an option from the menu above")},H=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(N.a,null,n.a.createElement(U,null,n.a.createElement(f.c,null,n.a.createElement(f.a,{exact:!0,path:"/tables",component:function(){return n.a.createElement(j,null)}}),n.a.createElement(f.a,{exact:!0,path:"/lines",component:function(){return n.a.createElement(R,null)}}),n.a.createElement(f.a,{component:function(){return n.a.createElement(G,null)}}))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},69:function(e){e.exports=JSON.parse('[{"firstName":"Montana","lastName":"Betts","status":"inactive"},{"firstName":"Greyson","lastName":"Farrell","status":"ok"},{"firstName":"Irving","lastName":"Lawson","status":"ok"},{"firstName":"Eadie","lastName":"Jimenez","status":"ok"},{"firstName":"Zakary","lastName":"Savage","status":"pending"},{"firstName":"Evie","lastName":"Humphries","status":"inactive"},{"firstName":"Georga","lastName":"Mcconnell","status":"ok"},{"firstName":"Leja","lastName":"Fitzgerald","status":"ok"},{"firstName":"Gordon","lastName":"Bernard","status":"ok"},{"firstName":"Sheldon","lastName":"Morrow","status":"ok"},{"firstName":"Brennan","lastName":"Emery","status":"ok"},{"firstName":"Cieran","lastName":"Steele","status":"pending"},{"firstName":"Gareth","lastName":"Sargent","status":"ok"},{"firstName":"Bessie","lastName":"Calderon","status":"ok"},{"firstName":"Marshall","lastName":"Mcdonald","status":"ok"},{"firstName":"Camilla","lastName":"Swan","status":"ok"},{"firstName":"Anjali","lastName":"Mcnamara","status":"ok"},{"firstName":"Atif","lastName":"Whitehead","status":"ok"},{"firstName":"Fathima","lastName":"Fraser","status":"ok"},{"firstName":"Arthur","lastName":"Santana","status":"ok"},{"firstName":"Laylah","lastName":"Morris","status":"inactive"},{"firstName":"Wiktor","lastName":"Griffiths","status":"inactive"},{"firstName":"Jardel","lastName":"Fulton","status":"ok"},{"firstName":"Alby","lastName":"Leech","status":"ok"},{"firstName":"Astrid","lastName":"Medrano","status":"ok"},{"firstName":"Rhiannan","lastName":"Huff","status":"ok"},{"firstName":"Debra","lastName":"Palacios","status":"inactive"},{"firstName":"Maliha","lastName":"Henderson","status":"ok"},{"firstName":"Dave","lastName":"Waller","status":"ok"},{"firstName":"Raheem","lastName":"Mcdowell","status":"ok"},{"firstName":"Richard","lastName":"Hail","status":"ok"},{"firstName":"Nikki","lastName":"Larson","status":"ok"},{"firstName":"Bodhi","lastName":"Woodward","status":"ok"},{"firstName":"Annabella","lastName":"Pickett","status":"ok"},{"firstName":"Anastasia","lastName":"Shaffer","status":"ok"},{"firstName":"Usman","lastName":"Brennan","status":"ok"},{"firstName":"Sade","lastName":"Hays","status":"inactive"},{"firstName":"Iosif","lastName":"Jacobson","status":"ok"},{"firstName":"Lilith","lastName":"Glenn","status":"ok"},{"firstName":"Viola","lastName":"Ahmed","status":"ok"},{"firstName":"Macsen","lastName":"Albert","status":"ok"},{"firstName":"Zayna","lastName":"Shields","status":"inactive"},{"firstName":"Prisha","lastName":"Hawkins","status":"inactive"},{"firstName":"King","lastName":"Rowe","status":"pending"},{"firstName":"Amy-Louise","lastName":"Waters","status":"inactive"},{"firstName":"Ewan","lastName":"Kirkpatrick","status":"ok"},{"firstName":"Lesley","lastName":"Bernal","status":"ok"},{"firstName":"Tomasz","lastName":"Blevins","status":"inactive"},{"firstName":"Gloria","lastName":"Lawrence","status":"pending"},{"firstName":"Aditya","lastName":"Whiteley","status":"ok"},{"firstName":"Uzair","lastName":"Combs","status":"inactive"},{"firstName":"Jason","lastName":"Beasley","status":"ok"},{"firstName":"Alanah","lastName":"Schultz","status":"ok"},{"firstName":"Ellie","lastName":"Sanchez","status":"ok"},{"firstName":"Sian","lastName":"Davey","status":"ok"},{"firstName":"Asim","lastName":"Xiong","status":"ok"},{"firstName":"Denzel","lastName":"Reed","status":"ok"},{"firstName":"Griffin","lastName":"Barrett","status":"ok"},{"firstName":"Shannon","lastName":"Marsden","status":"ok"},{"firstName":"Jeanne","lastName":"Coffey","status":"ok"},{"firstName":"Kacper","lastName":"Mitchell","status":"ok"},{"firstName":"Diya","lastName":"Anthony","status":"ok"},{"firstName":"Gladys","lastName":"Cross","status":"inactive"},{"firstName":"Asher","lastName":"Forster","status":"ok"},{"firstName":"Everly","lastName":"Wallace","status":"pending"},{"firstName":"Ronnie","lastName":"Castaneda","status":"ok"},{"firstName":"Danielle","lastName":"Summers","status":"inactive"},{"firstName":"Riley-James","lastName":"Lynch","status":"ok"},{"firstName":"Faith","lastName":"Whyte","status":"pending"},{"firstName":"Usama","lastName":"Plant","status":"ok"},{"firstName":"Alec","lastName":"Thomson","status":"ok"},{"firstName":"Sadie","lastName":"Greene","status":"pending"},{"firstName":"Catrin","lastName":"Guest","status":"ok"},{"firstName":"Mila","lastName":"Grimes","status":"inactive"},{"firstName":"Olivia-Rose","lastName":"Mcguire","status":"pending"},{"firstName":"Jay","lastName":"Neville","status":"pending"},{"firstName":"Shanaya","lastName":"Pruitt","status":"ok"},{"firstName":"Arfa","lastName":"Mcclure","status":"pending"},{"firstName":"Tania","lastName":"Pope","status":"pending"},{"firstName":"Trey","lastName":"Moses","status":"inactive"},{"firstName":"Roisin","lastName":"Whittington","status":"ok"},{"firstName":"Yosef","lastName":"Crosby","status":"ok"},{"firstName":"Aimie","lastName":"Jeffery","status":"ok"},{"firstName":"Traci","lastName":"Arroyo","status":"ok"},{"firstName":"Abu","lastName":"Bush","status":"ok"},{"firstName":"Ho","lastName":"Nairn","status":"ok"},{"firstName":"Clayton","lastName":"Harrington","status":"ok"},{"firstName":"Hadassah","lastName":"Bloggs","status":"inactive"},{"firstName":"Tatiana","lastName":"Felix","status":"ok"},{"firstName":"Ciaran","lastName":"Ho","status":"ok"},{"firstName":"Huw","lastName":"Farrington","status":"ok"},{"firstName":"Milosz","lastName":"Paine","status":"pending"},{"firstName":"Evie-Mai","lastName":"Martin","status":"ok"},{"firstName":"Momina","lastName":"Andrew","status":"ok"},{"firstName":"Luther","lastName":"Bellamy","status":"ok"},{"firstName":"Jemimah","lastName":"Mayo","status":"ok"},{"firstName":"Loren","lastName":"Cornish","status":"ok"},{"firstName":"Bluebell","lastName":"Lam","status":"ok"},{"firstName":"Muhamed","lastName":"Hammond","status":"ok"},{"firstName":"Alisa","lastName":"Donovan","status":"ok"}]')}},[[136,1,2]]]);
//# sourceMappingURL=main.a80142dd.chunk.js.map