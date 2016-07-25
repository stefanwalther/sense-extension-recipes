/*global define*/
define( [], function () {
	'use strict';

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	// Appearance Panel
	var appearanceSection = {
		uses: "settings"
	};

	// Return values
	return {
		type: "items",
		component: "accordion",
		items: {
			appearance: appearanceSection
		}
	};

} );
