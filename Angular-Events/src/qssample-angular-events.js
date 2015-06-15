define( [
		'jquery',
		'./properties',
		'./initialproperties',
		'./lib/js/extensionUtils',
		'text!./lib/css/style.css',
		'text!./template.ng.html'
	],
	function ( $, props, initProps, extensionUtils, cssContent, ngTemplate ) {
		'use strict';

		extensionUtils.addStyleToHeader( cssContent );

		console.log( 'Initializing - remove me' );

		return {

			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: false},
			template: ngTemplate,
			controller: ['$scope', '$element', function ( $scope, $element ) {

				console.log( '$scope', $scope.$parent.component.model);

				$scope.$on('$parent.component.model.Validating', function () {
					console.log('Validating');
				})

			}]
		};

	} );
