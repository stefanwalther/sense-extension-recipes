define( [
		'jquery',
		'underscore',
		'./properties',
		'./lib/js/extensionUtils',
		'text!./lib/css/style.css',
		'text!./lib/partials/template.ng.html'
	],
	function ( $, _, props, extensionUtils, cssContent, template ) {
		'use strict';
		extensionUtils.addStyleToHeader( cssContent );

		var dataPageSize = 500;
		var numColumns = 4;

		return {

			definition: props,
			initialProperties: {
				qHyperCubeDef: {
					qDimensions: [],
					qMeasures: [],
					qInitialDataFetch: [
						{
							qWidth: numColumns,
							qHeight: dataPageSize
						}
					]
				}
			},
			snapshot: {canTakeSnapshot: false},
			template: template,
			controller: ['$scope', function ( $scope ) {

				console.log( '$scope', $scope );
				console.log( '$scope.backendApi', $scope.backendApi );
				console.log( 'hc', $scope.layout.qHyperCube );

				$scope.fetchedCells = function () {
					var cells = 0;
					_.each( $scope.layout.qHyperCube.qDataPages, function ( item ) {
						cells += (item.qArea.qHeight * item.qArea.qWidth);
					} );
					return cells;
				};
				$scope.fetchedRows = function () {
					var rows = 0;
					_.each( $scope.layout.qHyperCube.qDataPages, function ( item ) {
						rows += (item.qArea.qHeight);
					} );
					return rows;
				};

				$scope.getMore = function () {

					console.info( 'getMore()' );
					console.log( 'getRowCount()', $scope.backendApi.getRowCount() );

					var lastrow = $scope.fetchedRows();

					var requestPage = [{
						qTop: lastrow + 1,
						qLeft: 0,
						qWidth: 10, //should be # of columns
						qHeight: Math.min( dataPageSize, $scope.backendApi.getRowCount() - lastrow )
					}];

					$scope.$parent.backendApi.getData( requestPage )
						.then( function ( dataPage ) {
							console.log( 'success', dataPage );
						} );
					//.catch( function ( result ) {
					//	console.error( 'catch', result );
					//} )
					//.finally( function ( result ) {
					//	console.log( 'finally' );
					//} );
				}

			}]
		};

	} );
