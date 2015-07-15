define( [
		'jquery',
		'angular',
		'./properties',
		'./initialproperties',
		'./lib/js/extensionUtils',
		'text!./lib/css/style.css',
		'text!./template.ng.html'

	],
	function ( $, angular, props, initProps, extensionUtils, cssContent, ngTemplate ) {
		'use strict';

		extensionUtils.addStyleToHeader( cssContent );

		return {

			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: true},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {
				$scope.angularVersion = angular.version;
			}]
		};
	} );
