(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,a){e.exports=a(291)},224:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),c=a.n(r),i=a(34),l=a(35),o=a(37),m=a(36),u=a(38),d=a(23),p=a(63),h=a(26),E=a(292),k=a(11),f=a(298),g="\u062f\u0627\u0634\u0628\u0648\u0631\u062f",b="\u0627\u0639\u0636\u0627\u0621\u200c\u062a\u06cc\u0645",v="\u062a\u0627\u06cc\u0645 \u0644\u0627\u06cc\u0646",S="\u062a\u0633\u06a9",y="\u0622\u0645\u0627\u0631",N="\u0627\u0633\u067e\u0631\u06cc\u0646\u062a",T="\u06af\u06cc\u062a",w="\u062a\u0646\u0638\u06cc\u0645\u0627\u062a",O="\u0627\u0639\u0644\u0627\u0646\u200c\u0647\u0627",j=E.a.Header,x=E.a.Sider,D=E.a.Content,V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).toggle=function(){a.setState({collapsed:!a.state.collapsed})},a.state={collapsed:!1,defaultKey:"1"},a.defaultKey="1",a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){switch(this.props.history.location.pathname){case"/":this.defaultKey="1";break;case"/collaborators":this.defaultKey="2";break;case"/timeline":this.defaultKey="3";break;case"/tasks":this.defaultKey="4";break;case"/statistics":this.defaultKey="5";break;case"/sprints":this.defaultKey="6";break;case"/remotegit":this.defaultKey="7";break;case"/settings":this.defaultKey="8";break;case"/notifications":this.defaultKey="9"}return s.a.createElement(E.a,{className:"ant-design-layout-ui-custom",direction:"rtl"},s.a.createElement(x,{trigger:null,className:"ant-design-slider",collapsible:!0,collapsed:this.state.collapsed},s.a.createElement("div",{style:{height:"100%"}},s.a.createElement("div",{className:"sidebar-menu-wrapper",style:{height:"100%"}},s.a.createElement("div",{className:"thin-side-bar"},s.a.createElement(k.a,{type:"home",className:"ant-design-ui-custom-thin-sidebar-item-icon"}),s.a.createElement(k.a,{type:"wechat",className:"ant-design-ui-custom-thin-sidebar-item-icon"}),s.a.createElement(k.a,{type:"notification",className:"ant-design-ui-custom-thin-sidebar-item-icon"}),s.a.createElement(k.a,{type:"search",className:"ant-design-ui-custom-thin-sidebar-item-icon"})),s.a.createElement(f.b,{theme:"light",mode:"inline",defaultSelectedKeys:[this.defaultKey]},s.a.createElement("div",{className:"logo"},s.a.createElement("p",{style:{display:this.state.collapsed?"none":"block"}},"\u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 \u0645\u062f\u06cc\u0631\u06cc\u062a \u067e\u0631\u0648\u0698\u0647")),s.a.createElement(f.b.Item,{key:"1"},s.a.createElement(h.b,{to:"/"},s.a.createElement("div",null,s.a.createElement(k.a,{type:"video-camera",className:"ant-design-ui-custom-sidebar-item-icon"}),s.a.createElement("span",{className:"fs-12"},g)))),s.a.createElement(f.b.Item,{key:"2"},s.a.createElement(h.b,{to:"/collaborators"},s.a.createElement("div",null,s.a.createElement(k.a,{type:"video-camera",className:"ant-design-ui-custom-sidebar-item-icon"}),s.a.createElement("span",{className:"fs-12"}," ",b," ")))),s.a.createElement(f.b.Item,{key:"3"},s.a.createElement(h.b,{to:"/timeline"},s.a.createElement("div",null,s.a.createElement(k.a,{type:"video-camera",className:"ant-design-ui-custom-sidebar-item-icon"}),s.a.createElement("span",{className:"fs-12"},v)))),s.a.createElement(f.b.Item,{key:"4"},s.a.createElement(h.b,{to:"/tasks"},s.a.createElement("div",null,s.a.createElement(k.a,{type:"video-camera",className:"ant-design-ui-custom-sidebar-item-icon"}),s.a.createElement("span",{className:"fs-12"}," ",S," ")))),s.a.createElement(f.b.Item,{key:"5"},s.a.createElement(h.b,{to:"/statistics"},s.a.createElement("div",null,s.a.createElement(k.a,{type:"video-camera",className:"ant-design-ui-custom-sidebar-item-icon"}),s.a.createElement("span",{className:"fs-12"},y)))),s.a.createElement(f.b.Item,{key:"6"},s.a.createElement(h.b,{to:"/sprints"},s.a.createElement("div",null,s.a.createElement(k.a,{type:"video-camera",className:"ant-design-ui-custom-sidebar-item-icon"}),s.a.createElement("span",{className:"fs-12"},N)))),s.a.createElement(f.b.Item,{key:"7"},s.a.createElement(h.b,{to:"/remotegit"},s.a.createElement("div",null,s.a.createElement(k.a,{type:"video-camera",className:"ant-design-ui-custom-sidebar-item-icon"}),s.a.createElement("span",{className:"fs-12"},T)))),s.a.createElement(f.b.Item,{key:"8"},s.a.createElement(h.b,{to:"/settings"},s.a.createElement("div",null,s.a.createElement(k.a,{type:"video-camera",className:"ant-design-ui-custom-sidebar-item-icon"}),s.a.createElement("span",{className:"fs-12"},w)))),s.a.createElement(f.b.Item,{key:"9"},s.a.createElement(h.b,{to:"/notifications"},s.a.createElement("div",null,s.a.createElement(k.a,{type:"video-camera",className:"ant-design-ui-custom-sidebar-item-icon"}),s.a.createElement("span",{className:"fs-12"},O)))))))),s.a.createElement(E.a,null,s.a.createElement(j,{style:{background:"#fff",padding:"0px"},className:"ant-design-header-ui-custom"},s.a.createElement(k.a,{className:"trigger",type:this.state.collapsed?"menu-fold":"menu-unfold",onClick:this.toggle})),s.a.createElement(D,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},this.props.children)))}}]),t}(n.Component),C=Object(d.e)(V),I=(a(223),a(224),a(297)),B=a(46),_=a.n(B),A=a(75),K=a(124),R=a(300),F=a(293),L=a(294),P=a(295),M=a(301),G=a(299),z=a(43),J=a(156),H=function(){return function(e){return e({type:"REQUEST_ALL_TASKS"}),fetch("https://mamaly100.pythonanywhere.com/Task/",{method:"GET",headers:new Headers({Accept:"application/json","Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(t){return e({type:"RECEIVE_ALL_TASKS",data:t,receiveAt:(new Date).toString().substring(15,25)})}).catch(function(t){return e(function(e){return{type:"FAILED_RECEIVE_ALL_TASKS",err:e}}(t))})}},U=J.a.TextArea,Q=J.a.Group,q=K.a.Option,W=s.a.createElement(k.a,{type:"loading",style:{fontSize:40},spin:!0}),X=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).showSuccessMessage=function(){R.a.success("\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0639\u0645\u0627\u0644 \u0634\u062f :)")},a.showErrorMassege=function(){R.a.error("\u062e\u0637\u0627 \u062f\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0633\u0631\u0648\u0631")},a.showModal=function(){var e=Object(A.a)(_.a.mark(function e(t){var n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.tasks.filter(function(e){return e.id===t}),a.setState({fetchingBacklog:!0,visible:!0}),e.next=4,fetch("https://mamaly100.pythonanywhere.com/Backlog/".concat(n[0].BackLogID),{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){a.setState({selectedBacklog:e,fetchingBacklog:!1})});case 4:e.sent,a.setState({taskTitle:n[0].title,taskId:t,taskPicker:n[0].picker,taskBacklog:n[0].BackLogID,taskDescription:n[0].description,taskState:n[0].TaskState,taskBacklogText:a.state.selectedBacklog.name});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleOk=function(){return a.setState({loading:!0}),fetch("https://mamaly100.pythonanywhere.com/Task/".concat(a.state.taskId,"/"),{method:"PUT",body:JSON.stringify({id:a.state.taskId,title:a.state.taskTitle,description:a.state.taskDescription,TaskState:a.state.taskState,picker:a.state.taskPicker,BackLogID:a.state.taskBacklog}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){a.setState({loading:!1,visible:!1}),a.props.dispatch(H()),a.showSuccessMessage()}).catch(function(e){return a.showErrorMassege()})},a.handleCancel=function(){a.setState({visible:!1,showEditor:!1})},a._renderTasks=function(){return s.a.createElement("div",{className:"task-wrapper p-4 mb-5"},s.a.createElement(F.a,{gutter:24,className:"d-flex flex-row-reverse"},s.a.createElement(L.a,{span:8},s.a.createElement("div",{className:"task-done-wrapper-"},s.a.createElement("div",{className:"task-done-wrapper-header"},s.a.createElement("h4",null,"\u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u0647\u0627")),s.a.createElement("div",{className:"task-done-wrapper-body"},a.props.tasks.map(function(e,t){return"DONE"===e.TaskState?s.a.createElement("div",{onClick:function(){return a.showModal(e.id)},className:"task-done-wrapper-body-item m-4",key:e.id},s.a.createElement("h3",null,e.title),s.a.createElement("p",{className:"mt-3 fs-12 project-task-description"},e.description)):null})))),s.a.createElement(L.a,{span:8},s.a.createElement("div",{className:"task-in-progress-wrapper"},s.a.createElement("div",{className:"task-undone-wrapper-header"},s.a.createElement("h4",null,"\u062f\u0631 \u062c\u0631\u06cc\u0627\u0646")),s.a.createElement("div",{className:"task-undone-wrapper-body"},a.props.tasks.map(function(e,t){return"IN_PROGRESS"===e.TaskState?s.a.createElement("div",{onClick:function(){return a.showModal(e.id)},className:"task-inProgress-wrapper-body-item m-4",key:e.id},s.a.createElement("h3",null,e.title),s.a.createElement("p",{className:"mt-3 fs-12"},e.description)):null})))),s.a.createElement(L.a,{span:8},s.a.createElement("div",{className:"task-done-wrapper-"},s.a.createElement("div",{className:"task-done-wrapper-header"},s.a.createElement("h4",null,"\u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f\u0647 \u0647\u0627")),s.a.createElement("div",{className:"task-undone-wrapper-body"},a.props.tasks.map(function(e,t){return"TO_DO"===e.TaskState?s.a.createElement("div",{onClick:function(){return a.showModal(e.id)},className:"task-undone-wrapper-body-item m-4",key:e.id},s.a.createElement("h3",null,e.title),s.a.createElement("p",{className:"mt-3 fs-12"},e.description)):null}))))),s.a.createElement("div",{className:"last-data-fetched-time"},s.a.createElement("p",null,a.props.receiveAt,s.a.createElement("span",{className:"fs-10"},"\u0622\u062e\u0631\u06cc\u0646 \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06cc"))))},a._renderSpinner=function(){return s.a.createElement("div",{className:"task-done-wrapper"},s.a.createElement(P.a,{indicator:W}))},a.toggleEditor=function(){a.setState({showEditor:!a.state.showEditor})},a.onSelect=function(){var e=Object(A.a)(_.a.mark(function e(t){var n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.state.backlogs.filter(function(e){return e.name===t});case 2:n=e.sent,a.setState({taskBacklog:n[0].id,taskBacklogText:t});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleSearch=function(e){var t;t=a.state.mainData.filter(function(t){return-1!==t.indexOf(e)}),a.setState({dataSource:t})},a._renderEditor=function(){return s.a.createElement("div",{dir:"rtl"},s.a.createElement("h3",{className:"mb-1"},"\u0639\u0646\u0648\u0627\u0646"),s.a.createElement(J.a,{defaultValue:a.state.taskTitle,className:"text-justify fs-12 mb-1",onChange:function(e){return a.setState({taskTitle:e.target.value})}}),s.a.createElement("h3",{className:"mb-1"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),s.a.createElement(U,{rows:4,defaultValue:a.state.taskDescription,className:"text-justify fs-12",onChange:function(e){return a.setState({taskDescription:e.target.value})}}),s.a.createElement("h3",{className:"mt-3 mb-1"},"\u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u0646\u062f\u0647"),s.a.createElement("p",{className:"fs-12"},"\u0646\u0627\u0645\u0634\u062e\u0635"),s.a.createElement("h3",{className:"mt-3 mb-1"},"\u0628\u06a9\u0644\u0627\u06af"),s.a.createElement(M.a,{dataSource:a.state.dataSource,style:{width:"100%"},onSelect:a.onSelect,onSearch:a.handleSearch,placeholder:"\u0628\u06a9\u0644\u0627\u06af \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"}),s.a.createElement("h3",{className:"mt-3 mb-1"},"\u0648\u0636\u0639\u06cc\u062a"),s.a.createElement(Q,{compact:!0},s.a.createElement(K.a,{defaultValue:"\u0648\u0636\u0639\u06cc\u062a \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f...",onChange:function(e){a.setState({taskState:e})},style:{width:"100%"}},s.a.createElement(q,{value:"DONE"},"\u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647"),s.a.createElement(q,{value:"TO_DO"},"\u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f\u0647"),s.a.createElement(q,{value:"IN_PROGRESS"},"\u062f\u0631 \u062c\u0631\u06cc\u0627\u0646"))))},a._renderTaskDetails=function(){return s.a.createElement("div",{dir:"rtl"},s.a.createElement("h3",{className:"mb-1"},"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"),s.a.createElement("p",{className:"text-justify fs-12"},a.state.taskDescription),s.a.createElement("h3",{className:"mt-3 mb-1"},"\u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u0646\u062f\u0647"),s.a.createElement("p",{className:"fs-12"},"\u0646\u0627\u0645\u0634\u062e\u0635"),s.a.createElement("h3",{className:"mt-3 mb-1"},"\u0628\u06a9\u0644\u0627\u06af"),s.a.createElement("p",{className:"fs-12"},a.state.taskBacklogText),s.a.createElement("h3",{className:"mt-3 mb-1"},"\u0648\u0636\u0639\u06cc\u062a"),s.a.createElement("p",{className:"fs-12"},"IN_PROGRESS"===a.state.taskState?"\u062f\u0631 \u062c\u0631\u06cc\u0627\u0646":"TO_DO"===a.state.taskState?"\u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f\u0647":"\u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647"))},a.state={isFetchedData:!0,loading:!1,visible:!1,taskId:"",taskBacklogText:"",taskPicker:"",taskBacklog:"",taskTitle:"",taskDescription:"",showEditor:!1,taskState:"",selectedBacklog:[],backlogs:[],mainData:[],dataSource:[]},a.TaskState={TO_DO:"\u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f\u0647",IN_PROGRESS:"\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645",DONE:"\u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;return(0,this.props.dispatch)(H()),fetch("https://mamaly100.pythonanywhere.com/Backlog/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){var a=[],n=[];t.map(function(e){return a.push(e.name),n.push(e.name),null}),e.setState({mainData:a,dataSource:n,backlogs:t})})}},{key:"render",value:function(){return s.a.createElement(n.Fragment,null,s.a.createElement(G.a,{className:"tasks-modal-custom",visible:this.state.visible,title:s.a.createElement("p",{className:"modal-header-title-text"},this.state.taskTitle),onOk:this.handleOk,onCancel:this.handleCancel,footer:[s.a.createElement(z.a,{key:"back",onClick:this.handleCancel},"\u0628\u0627\u0632\u06af\u0634\u062a"),s.a.createElement(z.a,{key:"submit",type:"primary",loading:this.state.loading,onClick:this.handleOk},"\u0627\u0639\u0645\u0627\u0644"),s.a.createElement(z.a,{key:"edit",type:"primary",onClick:this.toggleEditor},this.state.showEditor?"\u0627\u0639\u0645\u0627\u0644 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a":"\u0648\u06cc\u0631\u0627\u06cc\u0634")]},s.a.createElement("div",null,this.state.showEditor?this._renderEditor():this.state.fetchingBacklog?s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement(P.a,null)):this._renderTaskDetails())),this.props.isFetchingAllTasks?this._renderSpinner():this._renderTasks())}}]),t}(n.Component),Y=Object(d.e)(Object(p.b)(function(e){return e.Task},null)(X)),Z=a(296),$=J.a.Group,ee=K.a.Option,te=J.a.TextArea,ae=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleSearch=function(e){var t;t=a.state.mainData.filter(function(t){return-1!==t.indexOf(e)}),a.setState({dataSource:t})},a.onSelect=function(){var e=Object(A.a)(_.a.mark(function e(t){var n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.state.backlogs.filter(function(e){return e.name===t});case 2:n=e.sent,a.setState({taskBacklog:n[0].id});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.showSuccessMessage=function(){R.a.success("\u0648\u0638\u06cc\u0641\u0647 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0636\u0627\u0641\u0647 \u0634\u062f :)")},a.showErrorMassege=function(){R.a.error("\u062e\u0637\u0627 \u062f\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0633\u0631\u0648\u0631")},a.taskTitleValidating=function(){if(0===a.state.taskTitle.length){return a.setState({taskTitleValidating:{validateStatus:"error",help:"\u067e\u0631 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a"}}),!1}return a.setState({taskTitleValidating:{validateStatus:"success",help:""}}),!0},a.taskBacklogsValidating=function(){if(0===a.state.taskBacklog.length){return a.setState({taskBacklogsValidating:{validateStatus:"error",help:"\u067e\u0631 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a"}}),!1}return a.setState({taskBacklogsValidating:{validateStatus:"success",help:""}}),!0},a.taskDescriptionValidating=function(){if(0===a.state.taskDescription.length){return a.setState({taskDescriptionValidating:{validateStatus:"error",help:"\u067e\u0631 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a"}}),!1}return a.setState({taskDescriptionValidating:{validateStatus:"success",help:""}}),!0},a.taskStateValidating=function(){if(0===a.state.taskState.length){return a.setState({taskStateValidating:{validateStatus:"error",help:"\u067e\u0631 \u06a9\u0631\u062f\u0646 \u0627\u06cc\u0646 \u0641\u06cc\u0644\u062f \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a"}}),!1}return a.setState({taskStateValidating:{validateStatus:"success",help:""}}),!0},a.checkValidating=function(){var e=a.taskTitleValidating(),t=a.taskBacklogsValidating(),n=a.taskDescriptionValidating(),s=a.taskStateValidating();if(e&&t&&n&&s)return a.setState({loading:!0}),fetch("https://mamaly100.pythonanywhere.com/Task/",{method:"POST",body:JSON.stringify({title:a.state.taskTitle,description:a.state.taskDescription,TaskState:a.state.taskState,picker:a.state.taskPicker,BackLogID:a.state.taskBacklog}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){a.setState({loading:!1}),a.showSuccessMessage()}).catch(function(e){return a.showErrorMassege()})},a.state={taskTitle:"",taskBacklog:"",taskDescription:"",taskState:"",loading:!1,taskTitleValidating:{validateStatus:"",help:""},taskBacklogsValidating:{validateStatus:"",help:""},taskDescriptionValidating:{validateStatus:"",help:""},taskStateValidating:{validateStatus:"",help:""},backlogs:[],mainData:[],dataSource:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;return fetch("https://mamaly100.pythonanywhere.com/Backlog/",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){var a=[],n=[];t.map(function(e){return a.push(e.name),n.push(e.name),null}),e.setState({mainData:a,dataSource:n,backlogs:t})})}},{key:"render",value:function(){var e=this;return s.a.createElement(Z.a,null,s.a.createElement("div",{className:"create-task-wrapper"},s.a.createElement(F.a,{className:"d-flex flex-row-reverse mb-4 align-items-center"},s.a.createElement(L.a,{span:4},s.a.createElement("div",{className:"d-flex justify-content-end align-items-center"},s.a.createElement("p",{className:"mr-2 fs-13"},"\u0639\u0646\u0648\u0627\u0646 \u0648\u0638\u06cc\u0641\u0647"))),s.a.createElement(L.a,{span:8,className:"description-input-wrapper"},s.a.createElement(Z.a.Item,{hasFeedback:!0,validateStatus:this.state.taskTitleValidating.validateStatus,help:this.state.taskTitleValidating.help,className:"m-0"},s.a.createElement(J.a,{onChange:function(t){return e.setState({taskTitle:t.target.value})}})))),s.a.createElement(F.a,{className:"d-flex flex-row-reverse mb-4 align-items-center"},s.a.createElement(L.a,{span:4},s.a.createElement("div",{className:"d-flex justify-content-end align-items-center"},s.a.createElement("p",{className:"mr-2 fs-13"},"\u0628\u06a9\u0644\u0627\u06af"))),s.a.createElement(L.a,{span:8,className:"description-input-wrapper"},s.a.createElement(Z.a.Item,{hasFeedback:!0,validateStatus:this.state.taskBacklogsValidating.validateStatus,help:this.state.taskBacklogsValidating.help,className:"m-0"},s.a.createElement(M.a,{dataSource:this.state.dataSource,style:{width:"100%"},onSelect:this.onSelect,onSearch:this.handleSearch,placeholder:"\u0628\u06a9\u0644\u0627\u06af \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"})))),s.a.createElement(F.a,{className:"d-flex flex-row-reverse mb-4"},s.a.createElement(L.a,{span:4},s.a.createElement("div",{className:"d-flex justify-content-end align-items-center"},s.a.createElement("p",{className:"mr-2 fs-13"},"\u062a\u0648\u0635\u06cc\u0641\u0627\u062a \u0648\u0638\u06cc\u0641\u0647"))),s.a.createElement(L.a,{span:8,className:"description-input-wrapper"},s.a.createElement(Z.a.Item,{hasFeedback:!0,validateStatus:this.state.taskDescriptionValidating.validateStatus,help:this.state.taskDescriptionValidating.help,className:"m-0"},s.a.createElement(te,{onChange:function(t){return e.setState({taskDescription:t.target.value})},autosize:{minRows:3,maxRows:6}})))),s.a.createElement(F.a,{className:"d-flex flex-row-reverse mb-4 align-items-center"},s.a.createElement(L.a,{span:4},s.a.createElement("div",{className:"d-flex justify-content-end align-items-center"},s.a.createElement("p",{className:"mr-2 fs-13"},"\u0648\u0636\u0639\u06cc\u062a \u0648\u0638\u06cc\u0641\u0647"))),s.a.createElement(L.a,{span:8,className:"description-input-wrapper"},s.a.createElement(Z.a.Item,{hasFeedback:!0,validateStatus:this.state.taskStateValidating.validateStatus,help:this.state.taskStateValidating.help,className:"m-0"},s.a.createElement($,{compact:!0},s.a.createElement(K.a,{defaultValue:s.a.createElement("span",{className:"fn-12"},"\u0648\u0636\u0639\u06cc\u062a \u0648\u0638\u06cc\u0641\u0647 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"),onChange:function(t){return e.setState({taskState:t})},style:{width:"100%"},className:"custom-selection"},s.a.createElement(ee,{value:"DONE",style:{fontSize:"12px",textAlign:"right"}},"\u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647"),s.a.createElement(ee,{value:"TO_DO",style:{fontSize:"12px",textAlign:"right"}},"\u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f\u0647"),s.a.createElement(ee,{value:"IN_PROGRESS",style:{fontSize:"12px",textAlign:"right"}},"\u062f\u0631 \u062c\u0631\u06cc\u0627\u0646")))))),s.a.createElement(F.a,{className:"d-flex flex-row-reverse mb-4 align-items-center"},s.a.createElement(L.a,{span:4}),s.a.createElement(L.a,{span:8,className:"description-input-wrapper"},s.a.createElement(z.a,{type:"primary",onClick:this.checkValidating,loading:this.state.loading},"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u0648\u0638\u06cc\u0641\u0647")))))}}]),t}(n.Component),ne=I.a.TabPane,se=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).tabsChange=function(e){a.setState({activeTabs:e})},a.state={activeTabs:"7"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"task-ui-wrapper"},s.a.createElement("div",{className:"task-ui-tabs-wrapper"},s.a.createElement("div",{className:"task-ui-tabs"},s.a.createElement(I.a,{defaultActiveKey:"7",onChange:this.tabsChange},s.a.createElement(ne,{className:"tab-pane-item",tab:s.a.createElement("div",{className:"d-flex tabs-nav-item-wrapper align-items-center"},s.a.createElement("p",null,"\u062a\u0645\u0627\u0645 \u0648\u0638\u0627\u06cc\u0641"),s.a.createElement("div",{className:"tabs-nav-item-icon-all-task"})),key:"6"},"6"===this.state.activeTabs?s.a.createElement(Y,null):null),s.a.createElement(ne,{className:"tab-pane-item",tab:s.a.createElement("div",{className:"d-flex tabs-nav-item-wrapper align-items-center"},s.a.createElement("p",null,"\u0627\u06cc\u062c\u0627\u062f \u0648\u0638\u06cc\u0641\u0647 \u062c\u062f\u06cc\u062f"),s.a.createElement("div",{className:"tabs-nav-item-icon-create-task"})),key:"7"},"7"===this.state.activeTabs?s.a.createElement(ae,null):null)))))}}]),t}(n.Component),re=Object(d.e)(se),ce=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(C,null,s.a.createElement(d.c,null,s.a.createElement(d.a,{exact:!0,path:"/collaborators",render:function(){return s.a.createElement("div",null,"i am collaborators")}}),s.a.createElement(d.a,{exact:!0,path:"/timeline",render:function(){return s.a.createElement("div",null,"i am time line")}}),s.a.createElement(d.a,{exact:!0,path:"/tasks",render:re}),s.a.createElement(d.a,{exact:!0,path:"/statistics",render:function(){return s.a.createElement("div",null,"i am statistics")}}),s.a.createElement(d.a,{exact:!0,path:"/sprints",render:function(){return s.a.createElement("div",null,"i am sprint meetings")}}),s.a.createElement(d.a,{exact:!0,path:"/remotegit",render:function(){return s.a.createElement("div",null,"i am remote git")}}),s.a.createElement(d.a,{exact:!0,path:"/settings",render:function(){return s.a.createElement("div",null,"i am settings")}}),s.a.createElement(d.a,{exact:!0,path:"/notifications",render:function(){return s.a.createElement("div",null,"i am notification")}}),s.a.createElement(d.a,{exact:!0,path:"/",render:function(){return s.a.createElement("div",null,"I am dashboard")}})))}}]),t}(n.Component),ie=Object(d.e)(Object(p.b)()(ce)),le=a(155),oe=a(52),me=a(99),ue={tasks:[],isFetchingAllTasks:"",isFetchingTask:"",isPostingEditedTask:"",dateReceived:"",getError:"",errorText:"",task:[],taskForm:[]},de=Object(oe.c)({Task:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_ALL_TASKS":return Object(me.a)({},e,{isFetchingAllTasks:!0,isFetchingTask:!1,isPostingEditedTask:!1,getError:!1});case"RECEIVE_ALL_TASKS":return Object(me.a)({},e,{isFetchingAllTasks:!1,isFetchingTask:!1,isPostingEditedTask:!1,getError:!1,tasks:t.data,receiveAt:t.receiveAt});case"FAILED_RECEIVE_ALL_TASKS":return Object(me.a)({},e,{isFetchingAllTasks:!1,isFetchingTask:!1,isPostingEditedTask:!1,getError:!0,errorText:t.err});default:return e}}}),pe=Object(oe.d)(de,Object(oe.a)(le.a));c.a.render(s.a.createElement(p.a,{store:pe},s.a.createElement(h.a,null,s.a.createElement(ie,null))),document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.451b9c68.chunk.js.map