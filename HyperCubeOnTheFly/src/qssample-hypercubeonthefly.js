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
		'qlik',
		'./properties',
		'./initialproperties',
		'./lib/js/extensionUtils',
		'text!./lib/css/style.css',
		'text!./hypercubeonthefly.ng.html',

		// no return value
		'./lib/directives/swr-simpletable/swr-simpletable'
	],
	function ( $, _, qlik, props, initProps, extensionUtils, cssContent, ngTemplate ) {
		'use strict';

		extensionUtils.addStyleToHeader( cssContent );

		return {

			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: true},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {

				var app = qlik.currApp();
				$scope.hyperCube;

				function createHyperCube () {

					if ( $scope.hyperCube ) {
						console.log( 'existing cube', $scope.hyperCube );
						app.destroySessionObject( $scope.hyperCube.qInfo.qId ).then( function ( reply ) {
							console.log( 'destroySessionObject result', reply );
						} );
					}

					if ( $scope.layout.props && !_.isEmpty( $scope.layout.props.dimension1 ) && !_.isEmpty( $scope.layout.props.measure1 ) ) {

						var cubeDef = {

							qDimensions: [{
								qDef: {
									qFieldDefs: [$scope.layout.props.dimension1],
									qSortCriterias: [
										{
											qSortByAscii: 1
										}
									]
								}
							}],
							qMeasures: [{
								qDef: {
									qDef: "=" + $scope.layout.props.measure1
								}
							}],
							qInterColumnSortOrder: [0, 1],
							qInitialDataFetch: [
								{
									qTop: 0,
									qLeft: 0,
									qHeight: 100,
									qWidth: 2
								}
							]
						};

						app.createCube( cubeDef, function ( reply ) {
							console.log( 'cube', reply );
							$scope.hyperCube = reply;
						} );
					}

				}

				$scope.$watchCollection( 'layout.props', function ( newVal ) {
					console.log( 'new Vals', newVal );
					createHyperCube();
				} );
				createHyperCube();

			}]
		}
			;
	} )
;
