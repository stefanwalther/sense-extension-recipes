define( [
		'jquery',
		/*'underscore',*/
		'./properties',
		'./initialproperties',
		'./lib/js/extensionUtils',
		'text!./lib/css/style.css'
	],
	function ( $, /*_,*/ props, initProps, extensionUtils, cssContent ) {
		'use strict';

		extensionUtils.addStyleToHeader( cssContent );

		console.log( 'Initializing - remove me' );

		return {

			definition: props,
			initialProperties: initProps,
			paint: function ( $element /*, layout*/ ) {

				$element.empty();

				var $noBootstrap = $( document.createElement( 'div' ) );
				$noBootstrap.html( '<button>Should not be bootstrap style</button><br/><br/>' );
				$element.append( $noBootstrap );

				var $bootstrapStyle = $( document.createElement( 'div' ) );
				$bootstrapStyle.addClass( 'bootstrap' );
				$bootstrapStyle.html( '<button class="btn btn-success">Should be bootstrap style</button><br/>' );
				$element.append( $bootstrapStyle );

			}
		};

	} );
