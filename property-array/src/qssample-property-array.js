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
				exportData: false,
				snapshot: false
			},
			snapshot: {canTakeSnapshot: true},
			paint: function ( $element, layout ) {

				var output = '';
				if ( layout.listItems && layout.listItems.length > 0 ) {
					console.log(layout.listItems);
					for ( var i = 0;  i < layout.listItems.length; i++ ) {
						output += '<hr/>';
						output += '<b>Index:</b> ' + i + 1 + '<br/>';
						output += '<b>Label:</b> ' + layout.listItems[i].label + '<br/>';
						output += '<b>Html:</b> ' + layout.listItems[i].text + '<br/>'
					}
				}
				$element.html( output );

			}
		};
	} );
