/*global define*/
define( [
    'qlik',
		'./properties',
		'./initialproperties',
		'text!./template.ng.html'
	],
	function ( qlik, props, initProps, ngTemplate ) {
		'use strict';

		return {
			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: true},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {

        var app = qlik.currApp();

        var cubeDef1 = {

          qDimensions: [{
            qDef: {
              qFieldDefs: "Dim1"
            }
          }],
          qMeasures: [{
            qDef: {
              qDef: "=Sum(Expression1)"
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

        var cubeDef2 = {

          qDimensions: [{
            qDef: {
              qFieldDefs: "Dim1"
            }
          }],
          qMeasures: [{
            qDef: {
              qDef: "=Sum(Expression2)"
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

        app.createCube( cubeDef1, function ( reply ) {
          console.log('hc1', reply);
          $scope.hc1 = reply;
        } );
        app.createCube( cubeDef2, function ( reply ) {
          console.log('hc2', reply);
          $scope.hc2 = reply;
        } );

			}]
		};
	} );
