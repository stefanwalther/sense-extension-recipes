/*global define*/
define( [
	'jquery',
	'qvangular',
	'text!./swr-simple-table.ng.html'

], function ( $, qvangular, ngTemplate, cssContent ) {
	'use strict';

	$( "<style>" ).html( cssContent ).appendTo( "head" );

	qvangular.directive( 'swrSimpleTable', [function () {

		return {
			restrict: 'EA',
			scope: {
				hc: '='
			},
			template: ngTemplate,
			link: function ( $scope ) {

				//console.log( 'swr-simpletable:data', $scope.hc );

			}
		};

	}] );

} );
