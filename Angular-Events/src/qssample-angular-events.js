define( [
		'jquery',
		'./lib/js/extensionUtils',
		'text!./lib/css/style.css',
		'text!./template.ng.html'
	],
	function ( $, extUtils, cssContent, ngTemplate ) {
		'use strict';

		extUtils.addStyleToHeader( cssContent );

		return {

			snapshot: {canTakeSnapshot: false},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {

				var events = $scope.events =  [];

				/**
				 * Validated event.
				 *
				 * @description The data has been recalculated and new valid data is available.
				 */
				$scope.component.model.Validated.bind( function () {
					console.info( 'Validated' );
					events.push({ ts: extUtils.timeStamp(), event: 'Validated'});
				} );

				/**
				 * Invalidated event.
				 *
				 * @description The data has been invalidated, for example by a user selection. Do not use the data.
				 */
				$scope.component.model.Invalidated.bind( function () {
					console.info( 'Invalidated' );
					events.push({ ts: extUtils.timeStamp(), event: 'Invalidated'});
				} );

				/**
				 * Aborted event.
				 *
				 * @description Calculation has been aborted.
				 */
				$scope.component.model.Aborted.bind( function () {
					console.info( 'Aborted' );
					events.push({ ts: extUtils.timeStamp(), event: 'Aborted'});
				} );

				 /**
				 * Cancelled event.
				 *
				 * @description Calculation has been cancelled.
				 */
				$scope.component.model.Cancelled.bind( function () {
					console.info( 'Cancelled' );
					events.push({ ts: extUtils.timeStamp(), event: 'Cancelled'});

				} );

				/**
				 * Closed event.
				 *
				 * @description Connection to the Qlik engine has been closed for this object.
				 */
				$scope.component.model.Closed.bind( function () {
					console.info( 'Closed' );
					events.push({ ts: extUtils.timeStamp(), event: 'Closed'});

				} );
			}]
		};
	} );
