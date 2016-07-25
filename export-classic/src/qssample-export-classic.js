/*global define*/
define( [
		'./properties',
		'./initialproperties'
	],
	function ( props, initProps ) {
		'use strict';

		return {
			definition: props,
			initialProperties: initProps,
			support: {
				export: false,
				exportData: function( layout ) {
					return layout.qHyperCube.qDataPages[0].qMatrix.length;
				},
				// exportData: true,
				snapshot: false
			},
			paint: function( $element, layout ) {
				$element.html('this is the export');
			}
		};
	} );
