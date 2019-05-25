(function () {
    "use strict";
    'use strict';
	var popupDelaySeconds = 60;

    var app = angular.module('viewCustom', ['angularLoad']);
	
	
	// START ------ Report a Problem------/

	app.controller('ActionContainerAfterController', [function () {
    var vm = this;

    vm.getPermalink = getPermalink;

    function getPermalink() {
        var permalink = encodeURIComponent(window.location.href);
        var formField = 'https://sunyoswego.formstack.com/forms/primo_report_issue_form?Permalink=' + permalink;
        return formField;
		}
	}]);

	app.component('prmActionContainerAfter', {
		bindings: { parentCtrl: '<' },
		controller: 'ActionContainerAfterController',
		template: `<div id="report-problem" layout="row" layout-align="center center">
					<a id="problemLink" target="_blank" href="{{$ctrl.getPermalink()}}" title="Report a problem">
					<img src="https://suny-osw.primo.exlibrisgroup.com/discovery/custom/01SUNY_OSW-01SUNY_OSW/img/warning.png">
					&nbsp;&nbsp;Report a problem with this item</a></div>`
	});
	// END ------ Report a Problem------/	
	
			
		// START - Chat widget	
		app.controller('prmExploreMainAfterController', function ($scope, $timeout,$window, checkPresenceService) {
        var vm = this;
		
		vm.showChat = false;		
		vm.toggleChat = function() {
			if(angular.equals($scope.myAskChatLabel, "Ask a Librarian"))
				$scope.redirectToURL();
			else
				vm.showChat = !vm.showChat;			
		}
		
        $scope.redirectToURL = function(){
            $window.open('https://www.oswego.edu/library/ask-librarian', '_blank');
        };
    
						
		vm.$onInit = checkPresenceService.getData().then(function(response) {
				if(response.data.match("unavailable")){
					$scope.myAskChatLabel =  "Ask a Librarian";
				}else{	
					$scope.myAskChatLabel = "Chat with a Librarian";
				}	
		});		
    }); 
 
	 app.service('checkPresenceService', function($http) {
		this.getData= function() {
			return $http({
				method: 'GET',
				url: 'https://libraryh3lp.com/presence/jid/penfield_reference/chat.libraryh3lp.com/js?cd=show_presence'
			});
		 }
	 });

	 //----------------------------
	 app.controller('serviceCtrl', function ($scope, $http) {
			$http({
				method: 'GET',
				url: 'https://libraryh3lp.com/presence/jid/penfield_reference/chat.libraryh3lp.com/js?cd=show_presence'
				}).then(function success(response) {				
					if(response.data.match("unavailable")){						 
						$scope.myChat = false;					
						$scope.myNoChat = true;
					}else{	
						$scope.myChat = true;
						$scope.myNoChat = false;
					}					
				}, function error(response) {
			});
	});

    app.component('prmExploreMainAfter',{
        bindings: {parentCtrl: '<'},
        controller: 'prmExploreMainAfterController',
        template: `<div id="libSideChat" class="hidden-xs hidden-sm hidden-md">
					<div >
						<div id="PopOutTrigger" ng-click="$ctrl.toggleChat()" class="trigger right">						
							{{myAskChatLabel}}							
						</div>		
						
						<div class="libraryh3lp" id="divPopOut" ng-show="$ctrl.showChat">						
							<div ng-app="serviceApp" ng-controller="serviceCtrl" ng-show="myChat">
							<button class="libraryh3lpbutton" type="button" ng-click="$ctrl.toggleChat()" aria-label="Close"><span aria-hidden="true">Close</span></button>
							
								<div jid="penfield_reference@chat.libraryh3lp.com">								  
									  <iframe src="https://us.libraryh3lp.com/chat/penfield_reference@chat.libraryh3lp.com?skin=11342"
									   frameborder="1" style="border: 2px inset black; width: 350px; height: 300px;">
									  </iframe>
								 </div>
							</div>						   
						</div>
					</div>
				  </div>`
    });
	// END - Chat widget	
	
})();

  


