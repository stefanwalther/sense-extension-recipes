/*global define*/
define( [], function () {
	'use strict';

	// ****************************************************************************************
	// Other Settings
	// ****************************************************************************************

	var stringProp = {
		ref: "props.stringProp",
		label: "String Setting:",
		type: "string",
		expression: "optional",
		show: true
	};

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	var propertyPanelDefinition = {
		uses: "settings",
		items: {
			customSettings: {
				type: "items",
				label: "Settings",
				items: {
					stringProp: stringProp
				}
			}
		}
	};

	// Return values
	return {
		type: "items",
		component: "accordion",
		items: {
			settings: propertyPanelDefinition
		}
	};

} );
