/*global define*/
define( [
	'jquery',
	'qvangular',
	'text!./swr-simpletable.ng.html',
	'text!./swr-simpletable.css'

], function ( $, qvangular, ngTemplate, cssContent ) {
	'use strict';

	$( "<style>" ).html( cssContent ).appendTo( "head" );

	qvangular.directive( 'swrSimpleTable', [function () {

		//console.log( 'swr-simpletable' );

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