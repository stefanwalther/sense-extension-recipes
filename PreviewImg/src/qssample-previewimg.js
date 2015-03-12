define( [
		'jquery',
		'./lib/js/extensionUtils',
		'text!./lib/css/style.css'
	],
	function ( $, extensionUtils, cssContent ) {
		'use strict';
		extensionUtils.addStyleToHeader( cssContent );

		return {

			snapshot: {canTakeSnapshot: true},
			paint: function ( $element /*, layout*/ ) {

				$element.empty();
				var $helloWorld = $( document.createElement( 'div' ) );
				$helloWorld.addClass( 'hello-world' );
				$helloWorld.html( 'Just a simple extension to test the different sizes of preview images."' );
				$element.append( $helloWorld );

			}
		};

	} );
