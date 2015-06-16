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

		return {

			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: false},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {

				//console.log( 'model', $scope.component.model);

				/**
				 * Validated event.
				 *
				 * @description The data has been recalculated and new valid data is available.
				 */
				$scope.component.model.Validated.bind( function () {
					console.info( 'Validated' );
				} );

				/**
				 * Invalidated event.
				 *
				 * @description The data has been invalidated, for example by a user selection. Do not use the data.
				 */
				$scope.component.model.Invalidated.bind( function () {
					console.info( 'Invalidated' );
				} );

				/**
				 * Aborted event.
				 *
				 * @description Calculation has been aborted.
				 */
				$scope.component.model.Aborted.bind( function () {
					console.info( 'Aborted' );
				} );

				/**
				 * Cancelled event.
				 *
				 * @description Calculation has been cancelled.
				 */
				$scope.component.model.Cancelled.bind( function () {
					console.info( 'Cancelled' );
				} );
			}]
		};
	} );
