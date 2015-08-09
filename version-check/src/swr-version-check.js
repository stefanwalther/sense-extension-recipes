/*global define*/
define( [
		'jquery',
		'./properties',
		'./initial-properties',
		'text!./swr-version-check.ng.html',
		'./lib/js/extensionUtils',
		'text!./lib/css/main.css',

		// components
		'./components/swr-simple-table/swr-simple-table'
	],
	function ( $, props, initProps, ngTemplate, extensionUtils, cssContent ) {
		'use strict';

		extensionUtils.addStyleToHeader( cssContent );

		return {

			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: false},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {
			}]
		};

	} );
