/*global define*/
define( [], function () {
	'use strict';

	// ****************************************************************************************
	// Properties used for the hypercube
	// ****************************************************************************************

	var dim1 = {
		ref: "props.dimension1",
		label: "Dimension",
		type: "string",
		expression: "optional"
	};

	var mea1 = {
		ref: "props.measure1",
		label: "Measure",
		type: "string",
		expression: "optional"
	};

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	// Appearance Panel
	var appearancePanel = {
		uses: "settings",
		items: {
			settings: {
				type: "items",
				label: "Data",
				items: {
					dim1: dim1,
					mea1: mea1
				}
			}
		}
	};

	// Return values
	return {
		type: "items",
		component: "accordion",
		items: {
			appearance: appearancePanel
		}
	};

} );
