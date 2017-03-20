!function(){"use strict";angular.module("inspinia",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","highcharts-ng","smart-table","ngBootbox"])}(),angular.module("inspinia").factory("mainService",["$http","API_URL","$log","$q",function(e,t,a,o){var i=function(){var i=o.defer(),n={method:"GET",url:t+"api/dashboard/userrequest"};return e(n).then(function(e){i.resolve(e)},function(e,t){i.reject(e),a.error(e,t)}),i.promise},n=function(){var i=o.defer(),n={method:"GET",url:t+"api/dashboard/platformrequest"};return e(n).then(function(e){i.resolve(e)},function(e,t){i.reject(e),a.error(e,t)}),i.promise},l=function(){var i=o.defer(),n={method:"GET",url:t+"api/dashboard/alexarequest"};return e(n).then(function(e){i.resolve(e)},function(e,t){i.reject(e),a.error(e,t)}),i.promise};return{getUserRequest:i,getPlatformRequest:n,getAlexaRequest:l}}]),angular.module("inspinia").controller("MainController",["$rootScope","$state",function(e,t){var a=this;a.userName="Admin",a.helloText="Welcome to Robotic Process Automation Dashboard",a.descriptionText="It is a next gen intelligent step to workforce management",a.userName="Admin"}]),angular.module("inspinia").controller("DashboardController",["$rootScope","$state","mainService",function(e,t,a){var o=this;o.userRequestLoading=!0,a.getUserRequest().then(function(e){var t={chart:{type:"column"},title:{text:e.data.data.title},subtitle:{text:""},xAxis:{categories:e.data.data.categories,crosshair:!0},yAxis:{min:0,title:{text:""}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{series:{dataLabels:{enabled:!0,format:"{point.y}"}},column:{pointPadding:.2,borderWidth:0}},series:e.data.data.series};o.userRequestConfig=t,o.userRequestLoading=!1}),o.platformRequestLoading=!0,a.getPlatformRequest().then(function(e){var t={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:e.data.data.title},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{series:{dataLabels:{enabled:!0,format:"{point.name}: {point.y:.1f}%"}},pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},series:[{name:"Platforms",colorByPoint:!0,data:e.data.data.data}]};o.platformRequestConfig=t,o.platformRequestLoading=!1}),o.alexaRequestLoading=!0,a.getAlexaRequest().then(function(e){var t={chart:{type:"column"},title:{text:e.data.data.title},subtitle:{text:""},xAxis:{categories:e.data.data.categories,crosshair:!0},yAxis:{min:0,title:{text:""}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{series:{dataLabels:{enabled:!0,format:"{point.y}"}},column:{pointPadding:.2,borderWidth:0}},series:e.data.data.data};o.alexaRequestConfig=t,o.alexaRequestLoading=!1})}]),angular.module("inspinia").controller("LogoutController",["$state",function(e){e.go("login")}]),angular.module("inspinia").factory("loginService",["$http","API_URL","$log","$q",function(e,t,a,o){var i=function(i){var n=o.defer(),l={method:"POST",url:t+"api/login",data:i};return e(l).then(function(e){n.resolve(e)},function(e,t){n.reject(e),a.error(e,t)}),n.promise};return{login:i}}]),angular.module("inspinia").controller("LoginController",["$state","loginService","$rootScope","$window",function(e,t,a,o){var i=this;i.doLogin=function(n){if(n){var l={email:i.formData.email,password:i.formData.password};a.AuthCode="",o.localStorage.setItem("AuthCode",""),t.login(l).then(function(t){1===t.data.status?(o.localStorage.setItem("AuthCode",t.data.data.token),a.AuthCode=t.data.data.token,e.go("index.main")):alert(t.data.message)})}}}]),angular.module("inspinia").controller("ForgotPasswordController",["$state",function(e){var t=this;t.submit=function(e){}}]),angular.module("inspinia").factory("botService",["$http","API_URL","$log","$q",function(e,t,a,o){var i=function(){var i=o.defer(),n={method:"GET",url:t+"api/bot/leaverequest"};return e(n).then(function(e){i.resolve(e)},function(e,t){i.reject(e),a.error(e,t)}),i.promise},n=function(){var i=o.defer(),n={method:"GET",url:t+"api/bot/travelrequest"};return e(n).then(function(e){i.resolve(e)},function(e,t){i.reject(e),a.error(e,t)}),i.promise};return{getLeaveRequest:i,getTravelRequest:n}}]),angular.module("inspinia").controller("BotController",["botService",function(e){var t=this;t.leaveRequestLoading=!0,e.getLeaveRequest().then(function(e){t.leaveRequestData=e.data.data}),e.getTravelRequest().then(function(e){t.travelRequestData=e.data.data})}]),angular.module("inspinia").factory("alexaService",["$http","API_URL","$log","$q",function(e,t,a,o){var i=function(){var i=o.defer(),n={method:"GET",url:t+"api/alexa/leaverequest"};return e(n).then(function(e){i.resolve(e)},function(e,t){i.reject(e),a.error(e,t)}),i.promise},n=function(){var i=o.defer(),n={method:"GET",url:t+"api/alexa/travelrequest"};return e(n).then(function(e){i.resolve(e)},function(e,t){i.reject(e),a.error(e,t)}),i.promise};return{getLeaveRequest:i,getTravelRequest:n}}]),angular.module("inspinia").controller("AlexaController",["alexaService",function(e){var t=this;e.getLeaveRequest().then(function(e){console.log(e),t.leaveRequestData=e.data.data}),e.getTravelRequest().then(function(e){t.travelRequestData=e.data.data})}]),angular.element(document).ready(function(e){function t(){var e=angular.element("body > #wrapper").height()-61;angular.element(".sidebard-panel").css("min-height",e+"px");var t=angular.element("nav.navbar-default").height(),a=angular.element("#page-wrapper").height();t>a&&angular.element("#page-wrapper").css("min-height",t+"px"),a>t&&angular.element("#page-wrapper").css("min-height",angular.element(window).height()+"px"),angular.element("body").hasClass("fixed-nav")&&(t>a?angular.element("#page-wrapper").css("min-height",t+"px"):angular.element("#page-wrapper").css("min-height",angular.element(window).height()-60+"px"))}angular.element(window).bind("load resize scroll",function(){angular.element("body").hasClass("body-small")||t()}),angular.element(window).scroll(function(){angular.element(window).scrollTop()>0&&!angular.element("body").hasClass("fixed-nav")?angular.element("#right-sidebar").addClass("sidebar-top"):angular.element("#right-sidebar").removeClass("sidebar-top")}),e(function(){t()}),angular.element(window).bind("load resize",function(){angular.element(document).width()<769?angular.element("body").addClass("body-small"):angular.element("body").removeClass("body-small")})}),function(){"use strict";function e(e,t,a){e.debug("RunBlock Start"),a.localStorage.getItem("AuthCode")&&(t.defaults.headers.common.Authorization="Bearer "+a.localStorage.getItem("AuthCode"),t.defaults.headers.common.Accept="application/json;odata=verbose"),e.debug("RunBlock End")}e.$inject=["$log","$http","$window"],angular.module("inspinia").run(e),angular.module("inspinia").constant("API_URL","http://localhost:5000/")}(),function(){"use strict";function e(e,t){e.state("login",{url:"/login",templateUrl:"app/login/login.html",controller:"LoginController",controllerAs:"lc"}).state("forgotpassword",{url:"/forgotpassword",templateUrl:"app/forgot-password/forgot-password.html",controller:"ForgotPasswordController",controllerAs:"fpc"}).state("logout",{url:"/logout",controller:"LogoutController",controllerAs:"lgc"}).state("index",{"abstract":!0,url:"/index",templateUrl:"app/components/common/content.html"}).state("index.main",{url:"/main",templateUrl:"app/main/main.html",data:{pageTitle:"Example view"},controller:"DashboardController",controllerAs:"dc"}).state("index.bot",{url:"/bot",templateUrl:"app/bot/bot.html",data:{pageTitle:"BOT Dashboard"},controller:"BotController",controllerAs:"bc"}).state("index.alexa",{url:"/alexa",templateUrl:"app/alexa/alexa.html",data:{pageTitle:"Alexa Dashboard"},controller:"AlexaController",controllerAs:"ac"}),t.otherwise("/login")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("inspinia").config(e)}(),angular.module("inspinia").directive("sideNavigation",["$timeout",function(e){return{restrict:"A",link:function(t,a){t.$watch("authentication.user",function(){e(function(){a.metisMenu()})})}}}]).directive("minimalizaSidebar",["$timeout",function(e){return{restrict:"A",template:'<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',controller:["$scope",function(t){t.minimalize=function(){angular.element("body").toggleClass("mini-navbar"),!angular.element("body").hasClass("mini-navbar")||angular.element("body").hasClass("body-small")?(angular.element("#side-menu").hide(),e(function(){angular.element("#side-menu").fadeIn(400)},200)):angular.element("#side-menu").removeAttr("style")}}]}}]),angular.module("inspinia").run(["$templateCache",function(e){e.put("app/alexa/alexa.html",'<div class="wrapper wrapper-content animated fadeInRight"><div class="row"><div class="col-lg-12"><div class="tabs-container"><uib-tabset><uib-tab heading="Leave Requests"><div class="panel-body"><div class="row"><table class="table table-striped table-bordered table-hover"><thead class="thead-inverse"><tr><th>Employee</th><th>Leave Type</th><th>Request Source</th><th>Start</th><th>End</th></tr></thead><tbody><tr ng-repeat="row in ac.leaveRequestData"><td class="text-capitalize">{{row.name}}</td><td class="text-capitalize">{{row.leave_type}}</td><td class="text-capitalize">{{row.request_source}}</td><td>{{row.start_date | date}}</td><td>{{row.end_date | date}}</td></tr></tbody></table></div></div></uib-tab><uib-tab heading="Travel Requests"><div class="panel-body"><div class="row"><table class="table table-striped table-bordered table-hover"><thead class="thead-inverse"><tr><th>Employee</th><th>From</th><th>To</th><th>Travel Option</th><th>Travel Date</th><th>Request Source</th><th>Request Date</th></tr></thead><tbody><tr ng-repeat="row in cc.travelRequestData"><td class="text-capitalize">{{row.name}}</td><td class="text-capitalize">{{row.source}}</td><td class="text-capitalize">{{row.destination}}</td><td class="text-capitalize">{{row.travel_options}}</td><td>{{row.destination_reach_date | date}}</td><td class="text-capitalize">{{row.request_source}}</td><td>{{row.request_date | date}}</td></tr></tbody></table></div></div></uib-tab></uib-tabset></div></div></div></div>'),e.put("app/bot/bot.html",'<div class="wrapper wrapper-content animated"><div class="row"><div class="col-lg-12"><div class="tabs-container"><uib-tabset><uib-tab heading="Leave Requests"><div class="panel-body"><div class="row"><table class="table table-striped table-bordered table-hover"><thead class="thead-inverse"><tr><th>Employee</th><th>Leave Type</th><th>Request Source</th><th>Start</th><th>End</th></tr></thead><tbody><tr ng-repeat="row in bc.leaveRequestData"><td class="text-capitalize">{{row.name}}</td><td class="text-capitalize">{{row.leave_type}}</td><td class="text-capitalize">{{row.request_source}}</td><td>{{row.start_date | date}}</td><td>{{row.end_date | date}}</td></tr></tbody></table></div></div></uib-tab><uib-tab heading="Travel Requests"><div class="panel-body"><div class="row"><table class="table table-striped table-bordered table-hover"><thead class="thead-inverse"><tr><th>Employee</th><th>From</th><th>To</th><th>Travel Option</th><th>Travel Date</th><th>Request Source</th><th>Request Date</th></tr></thead><tbody><tr ng-repeat="row in bc.travelRequestData"><td class="text-capitalize">{{row.name}}</td><td class="text-capitalize">{{row.source}}</td><td class="text-capitalize">{{row.destination}}</td><td class="text-capitalize">{{row.travel_options}}</td><td class="text-capitalize">{{row.destination_reach_date | date}}</td><td>{{row.request_source}}</td><td>{{row.request_date | date}}</td></tr></tbody></table></div></div></uib-tab></uib-tabset></div></div></div></div>'),e.put("app/forgot-password/forgot-password.html",'<div class="passwordBox animated"><div class="row login-container"><div class="col-md-12"><div class="ibox-content"><h2 class="font-bold">Forgot password</h2><p>Enter your email address and your password will be reset and emailed to you.</p><div class="row"><div class="col-lg-12"><form class="m-t" name="forgotPasswordForm" ng-submit="fpc.submit(forgotPasswordForm.$valid)" novalidate=""><div class="form-group"><input name="email" type="email" class="form-control" placeholder="Email" ng-model="fpc.email" ng-minlength="6" required=""><p ng-show="forgotPasswordForm.email.$invalid && !forgotPasswordForm.email.$pristine" class="help-block">A valid email is required.</p></div><button type="submit" class="btn btn-primary block full-width m-b" ng-disabled="forgotPasswordForm.$invalid">Send new password</button></form><a href="" ui-sref="login"><small>Back to Login</small></a></div></div></div></div></div><hr><div class="row text-white"><div class="col-md-6">Experion</div><div class="col-md-6 text-right"><small>&copy; 2016-2017</small></div></div></div>'),e.put("app/main/main.html",'<div class="wrapper wrapper-content animated"><div class="row"><div class="col-lg-12"><div class="text-center m-t-lg"><h1>{{main.helloText}}</h1><small>{{main.descriptionText}}</small></div><br><div class="row"><div class="col-lg-6"><div class="ibox float-e-margins"><div class="ibox-title"><div ibox-tools=""></div></div><div class="ibox-content"><span ng-if="!dc.userRequestLoading"><highchart id="chart1" config="dc.userRequestConfig" class="span10"></highchart></span><div class="text-center" ng-if="dc.userRequestLoading">Loading...</div></div></div></div><div class="col-lg-6"><div class="ibox float-e-margins"><div class="ibox-title"><div ibox-tools=""></div></div><div class="ibox-content"><span ng-if="!dc.platformRequestLoading"><highchart id="chart2" config="dc.platformRequestConfig" class="span10"></highchart></span><div class="text-center" ng-if="dc.platformRequestLoading">Loading...</div></div></div></div></div><div class="row"><div class="col-lg-12"><div class="ibox float-e-margins"><div class="ibox-title"><div ibox-tools=""></div></div><div class="ibox-content"><span ng-if="!dc.alexaRequestLoading"><highchart id="chart3" config="dc.alexaRequestConfig" style="width: 80%; height: 400px; margin: 0 auto"></highchart></span><div class="text-center" ng-if="dc.alexaRequestLoading">Loading...</div></div></div></div></div></div></div></div>'),e.put("app/login/login.html",'<div class="loginColumns animated"><div class="row text-white login-container"><div class="col-md-6"><h2 class="font-bold margin-top-0">Welcome to Experion BOT Dashboard</h2><p><small>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.</small></p><p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</small></p><p><small>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</small></p><p><small>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</small></p></div><div class="col-md-6"><div class="ibox-content"><form class="m-t" name="loginForm" ng-submit="lc.doLogin(loginForm.$valid)" novalidate=""><div class="form-group"><input name="email" type="email" class="form-control" placeholder="Email" ng-model="lc.formData.email" ng-minlength="6" required=""><p ng-show="loginForm.formData.email.$invalid && !loginForm.formData.email.$pristine" class="help-block">A valid email is required.</p></div><div class="form-group"><input name="password" type="password" class="form-control" placeholder="Password" ng-model="lc.formData.password" ng-minlength="6" required=""><p ng-show="loginForm.formData.password.$error.minlength" class="help-block">Password is too short.</p></div><button type="submit" class="btn btn-primary block full-width m-b" ng-disabled="loginForm.$invalid">Login</button> <a href="" ui-sref="forgotpassword"><small>Forgot password?</small></a></form></div></div></div><hr><div class="row text-white"><div class="col-md-6">Experion Technologies</div><div class="col-md-6 text-right"><small>&copy; 2016-2017</small></div></div></div>'),e.put("app/components/common/content.html",'<div id="wrapper"><div ng-include="\'app/components/common/navigation.html\'"></div><div id="page-wrapper" class="gray-bg {{$state.current.name}}"><div ng-include="\'app/components/common/topnavbar.html\'"></div><div ui-view=""></div><div ng-include="\'app/components/common/footer.html\'"></div></div></div>'),e.put("app/components/common/footer.html",'<div class="footer"><div><strong>Copyright</strong> Experion Technologies &copy; 2017</div></div>'),e.put("app/components/common/ibox_tools.html",'<div class="ibox-tools" uib-dropdown=""><a ng-click="showhide()"><i class="fa fa-chevron-up"></i></a> <a uib-dropdown-toggle="" href=""><i class="fa fa-wrench"></i></a><ul uib-dropdown-menu=""><li><a href="">Config option 1</a></li><li><a href="">Config option 2</a></li></ul><a ng-click="closebox()"><i class="fa fa-times"></i></a></div>'),e.put("app/components/common/navigation.html",'<nav class="navbar-default navbar-static-side" role="navigation"><div class="sidebar-collapse"><ul side-navigation="" class="nav metismenu" id="side-menu"><li class="nav-header"><div class="profile-element" uib-dropdown=""><a href=""><span class="clear"><span class="block m-t-xs"><strong class="font-bold">{{main.userName}}</strong></span></span></a><ul uib-dropdown-menu="" class="animated flipInX m-t-xs"><li><a href="">Logout</a></li></ul></div><div class="logo-element">Exp Bot</div></li><li ui-sref-active="active"><a ui-sref="index.main"><i class="fa fa-tachometer"></i> <span class="nav-label">Dashboard</span></a></li><li ui-sref-active="active"><a ui-sref="index.bot"><i class="fa fa-android"></i> <span class="nav-label">BOT</span></a></li><li ui-sref-active="active"><a ui-sref="index.alexa"><i class="fa fa-amazon"></i> <span class="nav-label">Alexa</span></a></li></ul></div></nav>'),e.put("app/components/common/topnavbar.html",'<div class="row border-bottom"><nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0"><div class="navbar-header"><span minimaliza-sidebar=""></span><form role="search" class="navbar-form-custom" method="post" action=""><div class="form-group"><input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search"></div></form></div><ul class="nav navbar-top-links navbar-right"><li><a ui-sref="logout" href=""><i class="fa fa-sign-out"></i> Log out</a></li></ul></nav></div>')}]);
//# sourceMappingURL=../maps/scripts/app-69eb11e39b.js.map