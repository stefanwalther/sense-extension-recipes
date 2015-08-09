/*global define*/
define( [
	'qvangular',
	'!text./swr-version-check.ng.html'
], function ( qvangular,
			  ngTemplate ) {
	'use strict';

	var component = {
		restrict: 'A',
		replace: false,
		template: ngTemplate,
		scope: true,
		controller: ['$scope', function ( $scope ) {
			$scope.showWarning = false;
		}],
		link: function ( scope, elem, attrs ) {

		}
	};

	qvangular.directive( "swrVersionCheck", function () {
		return component;
	} );

	return component;

} );
