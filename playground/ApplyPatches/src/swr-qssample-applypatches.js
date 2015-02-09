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
		'angular',
		'jquery',
		'underscore',
		'./properties',
		'./initialproperties',
		'text!./lib/partials/template.ng.html',
		'./lib/js/extensionUtils',
		'text!./lib/css/style.css'
	],
	function ( angular, $, _, props, initProps, ngTemplate, extensionUtils, cssContent ) {
		'use strict';

		extensionUtils.addStyleToHeader( cssContent );

		return {

			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: false},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {

				$scope.useSetProperties = function () {

					var val = $( '#' + $scope.layout.qInfo.qId + '_text1' ).val();
					$scope.backendApi.getProperties()
						.then( function ( reply ) {
							reply.props.stringProp = val;
							$scope.backendApi.setProperties( reply )
								.then( function ( reply ) {
									console.log( 'useSetProperties.setProperties -> promise', reply );
									angular.noop();
								});
						} );
				};

				$scope.useApplyPatches = function () {

					var val = $( '#' + $scope.layout.qInfo.qId + '_text1' ).val();

					var patches = [{
						"qPath": "/props/stringProp",
						"qOp": "replace",
						"qValue": "\"" + val + "\""
					}];

					$scope.backendApi.applyPatches( patches, false )
						.then( function ( reply ) {
							console.log( 'applyPatches.promise', reply );
							angular.noop();
						} );
				};

				$scope.useSaveChanges = function () {

					var val = $( '#' + $scope.layout.qInfo.qId + '_text1' ).val();
					$scope.backendApi.getProperties()
						.then( function ( reply ) {

							console.log( 'useSaveChanges.getProperties->reply', reply );
							reply.props.stringProp = val;

							$scope.backendApi.save()
								.then( function ( saveReply ) {
									console.log( 'useSaveChanges.save->reply', saveReply );
									angular.noop();
								} )
						} )

				};

			}]
		};

	} );
