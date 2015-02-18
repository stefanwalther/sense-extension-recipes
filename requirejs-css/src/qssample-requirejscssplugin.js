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
		'jquery',
		'underscore',
		'./properties',

		// no return value
		'css!./lib/css/style.css'
	],
	function ( $, _, props, initProps ) {
		'use strict';

		return {

			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: true},
			paint: function ( $element, layout ) {

				$element.empty();
				var $output = $( document.createElement( 'div' ) );
				$output.addClass( 'qsSample_requireJS_CSS' );
				var html = '<p class="description">If you see a green message below ("Yes, CSS plugin is working"), then the requireJS plugin is working properly.<br/>Should work in the following versions: Qlik Sense 1.0, 1.1, 1.2 (Desktop + Server).<br/></p>';
				html += '<br/><br/><p class="status">Yes, CSS plugin is working.</p>';
				$output.html( html );
				$element.append( $output );

			}
		};

	} );
