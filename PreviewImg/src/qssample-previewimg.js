define( [
		'jquery',
		'./lib/js/extensionUtils',
		'text!./lib/css/style.css'
	],
	function ( $, extensionUtils, cssContent ) {
		'use strict';
		extensionUtils.addStyleToHeader( cssContent );

		return {

			snapshot: {canTakeSnapshot: false}
		};

	} );
