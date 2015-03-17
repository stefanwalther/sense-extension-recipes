define( [
		'jquery',
		/*'underscore',*/
		'./properties',
		'./initialproperties',
		'./lib/js/extensionUtils',
		'text!./lib/css/bootstrap.css'
	],
	function ( $, /*_,*/ props, initProps, extensionUtils, cssContent ) {
		'use strict';

		extensionUtils.addStyleToHeader( cssContent );

		console.log( 'Initializing - remove me' );

		return {

			definition: props,
			initialProperties: initProps,
			snapshot: {canTakeSnapshot: true},
			paint: function ( $element /*, layout*/ ) {

				$element.empty();
				var $helloWorld = $( document.createElement( 'div' ) );
				$helloWorld.addClass( 'hello-world' );
				$helloWorld.html( 'Bootstrap clashes the styles of Qlik Sense"' );
				$element.append( $helloWorld );

			}
		};

	} );
