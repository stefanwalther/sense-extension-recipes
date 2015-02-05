/*global
 define,
 require,
 window,
 console,
 _
 */
/*jslint    devel:true,
 white: true
 */
define( [
		'jquery',
		'underscore',
		'./custom-properties',
		'./initialproperties',
		'./lib/js/extensionUtils',
		'text!./lib/css/style.css',
		'text!./lib/templates/template.ng.html',
		'text!./lib/templates/templateContent.json'
	],
	function ( $, _, props, initProps, extensionUtils, cssContent, ngTemplate, templateContent ) {
		'use strict';

		extensionUtils.addStyleToHeader( cssContent );

		return {

			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: true},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {
				$scope.results = JSON.parse(templateContent);
				$scope.cats = _.groupBy( $scope.results, 'cat' );

				$scope.resultsFilter = 'checkbox';

				$scope.setFilter = function ( item ) {
					console.log( 'set filter', item );
					$scope.resultsFilter = item;
				};

				console.log( '$scope.$parent.layout', $scope.$parent.layout );
				console.log( 'results', $scope.results );

			}]
		};

	} );
