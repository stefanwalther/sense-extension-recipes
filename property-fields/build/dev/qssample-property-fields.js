/*!

* property-fields - Sample to show how to select from a list of fields in the property panel.
*
* @version v0.1.0
* @link 
* @author Stefan Walther <https://github.com/stefanwalther>
* @license MIT
*/


/*global define*/
define( [
		'./properties',
		'./initialproperties',
		'text!./template.ng.html'
	],
	function ( props, initProps, ngTemplate ) {
		'use strict';

		return {
			definition: props,
			initialProperties: initProps,
			support: {
				export: false,
				exportData: false,
				snapshot: false
			},
			snapshot: {canTakeSnapshot: true},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {
				$scope.msg = 'Hello AngularJS';
			}]
		};
	} );
