(this.webpackJsonpssr=this.webpackJsonpssr||[]).push([[0],{19:function(e,t,a){e.exports=a(46)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(13),l=a.n(c),i=(a(24),a(25),a(16)),r=a(14),u=a(15),o=a(2),m=a(18),d=a(17),f=(a(26),function(e){var t=e.text,a=e.onClick,s=e.classValue;return n.a.createElement("button",{className:"custom-btn ".concat(s),onClick:a},t)}),h="https://api.spaceXdata.com/v3/launches?limit=24",v=a(3),E=a.n(v),g=(a(44),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={selectedYear:"",isSuccessfulLaunch:"",isSuccessfullLand:"",flightData:[],loader:!0},s.missionYearUI=s.missionYearUI.bind(Object(o.a)(s)),s.successfulLaunchUI=s.successfulLaunchUI.bind(Object(o.a)(s)),s.successfulLaunchUI=s.successfulLaunchUI.bind(Object(o.a)(s)),s.filterFunction=s.filterFunction.bind(Object(o.a)(s)),s.cardUI=s.cardUI.bind(Object(o.a)(s)),s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get(h).then((function(t){e.setState({flightData:t.data,api:h,loader:!1})}))}},{key:"filterFunction",value:function(e,t,a){var s=this,n=h,c="",l="",i="";if(this.setState({loader:!0}),e)c="&launch_year="+e,this.state.isSuccessfulLaunch&&(i="launch_success="+this.state.isSuccessfulLaunch),this.state.isSuccessfullLand&&(l="land_success="+this.state.isSuccessfullLand),this.state.selectedYear===e&&(e="",c=""),n=n+i+l+c,E.a.get(n).then((function(t){s.setState({flightData:t.data,loader:!1,selectedYear:e})}));else if(t){i="&launch_success="+t,this.state.selectedYear&&(c="&launch_year="+this.state.selectedYear),this.state.isSuccessfullLand&&(l="&land_success="+this.state.isSuccessfullLand),this.state.isSuccessfulLaunch===t&&(i="",t=""),n=n+i+l+c,E.a.get(n).then((function(e){s.setState({flightData:e.data,loader:!1,isSuccessfulLaunch:t})}))}else{l="&launch_success="+a,this.state.selectedYear&&(c="&launch_year="+this.state.selectedYear),this.state.isSuccessfulLaunch&&(i="&launch_success="+this.state.isSuccessfulLaunch),this.state.isSuccessfullLand===a&&(l="",a=""),n=n+i+l+c,E.a.get(n).then((function(e){s.setState({flightData:e.data,loader:!1,isSuccessfullLand:a})}))}}},{key:"missionYearUI",value:function(){var e=this;return n.a.createElement("div",{className:"row"},n.a.createElement("p",{className:"filter-title text-center"},"Launch Year"),Object(i.a)(Array(15)).map((function(t,a){var s=(a=2006+a)===e.state.selectedYear?"button-selected":"";return n.a.createElement("div",{className:"col-6 text-center",key:a},n.a.createElement(f,{text:a,classValue:s,onClick:function(){return e.filterFunction(a,!1,!1)}}))})))}},{key:"successfulLaunchUI",value:function(){var e=this;return n.a.createElement("div",{className:"row successfull-launch"},n.a.createElement("p",{className:"filter-title text-center"},"Successfull Launch"),n.a.createElement("div",{className:"col-6 text-center"},n.a.createElement(f,{text:"true",classValue:"true"===this.state.isSuccessfulLaunch?"button-selected":"",onClick:function(){return e.filterFunction(!1,"true",!1)}})),n.a.createElement("div",{className:"col-6 text-center"},n.a.createElement(f,{text:"false",classValue:"false"===this.state.isSuccessfulLaunch?"button-selected":"",onClick:function(){return e.filterFunction(!1,"false",!1)}})))}},{key:"successfullLandUI",value:function(){var e=this;return n.a.createElement("div",{className:"row successfull-launch"},n.a.createElement("p",{className:"filter-title text-center"},"Successfull Land"),n.a.createElement("div",{className:"col-6 text-center"},n.a.createElement(f,{text:"true",classValue:"true"===this.state.isSuccessfullLand?"button-selected":"",onClick:function(){return e.filterFunction(!1,!1,"true")}})),n.a.createElement("div",{className:"col-6 text-center"},n.a.createElement(f,{text:"false",classValue:"false"===this.state.isSuccessfullLand?"button-selected":"",onClick:function(){return e.filterFunction(!1,!1,"false")}})))}},{key:"cardUI",value:function(){return this.state.flightData.map((function(e,t){return n.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch card-wrapper",key:t},n.a.createElement("div",{className:"card-container"},n.a.createElement("div",{className:"image-wrapper"},n.a.createElement("img",{src:e.links.mission_patch,alt:e.mission_name+"image"})),n.a.createElement("p",{className:"mission-name"},n.a.createElement("b",null,e.mission_name," ")," "),n.a.createElement("p",{className:"mission-id"},n.a.createElement("strong",null,"Mission Ids ")," "),n.a.createElement("li",{className:"mission-id-res"},e.mission_id.length?e.mission_id[0]:"Not Present"),n.a.createElement("p",{className:"launch-year"},n.a.createElement("strong",null,"Launch Year : "),n.a.createElement("span",null,e.launch_year)),n.a.createElement("p",{className:"success"},n.a.createElement("strong",null,"Successfull Launch : "),n.a.createElement("span",null,e.launch_success?"true":"false")),n.a.createElement("p",{className:"landing"},n.a.createElement("strong",null,"Successfull Landing : "),n.a.createElement("span",null,e.rocket.first_stage.cores[0].land_success?"true":"false"))))}))}},{key:"render",value:function(){return n.a.createElement("section",{className:"row home-wrapper"},this.state.loader&&n.a.createElement("div",{className:"spinner-loading"},n.a.createElement("div",{className:"loader"})),n.a.createElement("div",{className:"col-12 col-sm-4 col-md-3 col-lg-2"},n.a.createElement("div",{className:"filter-section"},n.a.createElement("h3",null,"Filters"),this.missionYearUI(),this.successfulLaunchUI(),this.successfullLandUI())),n.a.createElement("div",{className:"col-12 col-sm-8 col-md-9 col-lg-10  mission-details"},n.a.createElement("div",{className:"row card-wrapper"},this.state.flightData&&this.state.flightData.length>0?this.cardUI():n.a.createElement("h1",null,"No Result found"))))}}]),a}(s.Component));var p=function(){return n.a.createElement("section",{className:"container-fluid"},n.a.createElement("h1",null,"SpacEx Launch Programs"),n.a.createElement(g,null),n.a.createElement("div",{className:"developer-name"},"Developed By ",n.a.createElement("strong",null,"Vikash Gupta, vik80sh@gmail.com")))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(45);l.a.hydrate(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var s=a.headers.get("content-type");404===a.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.811ab820.chunk.js.map