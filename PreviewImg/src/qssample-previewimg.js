define( [
		'jquery',
		'./lib/js/extensionUtils',
		'text!./template.ng.html',
		'text!./lib/css/style.css'
	],
	function ( $, extensionUtils, ngTemplate, cssContent ) {
		'use strict';
		extensionUtils.addStyleToHeader( cssContent );

		return {

			snapshot: {
				canTakeSnapshot: false
			},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {

				//console.log( $scope.$parent.component.libraryInfo );

			}]
		};

	} );
