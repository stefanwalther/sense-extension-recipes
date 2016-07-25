/*global define*/
define( [], function () {
	'use strict';

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	// Appearance Panel
	var appearancePanel = {
		uses: "settings",
		items: {
			settings: {
				type: "items",
				label: "Add Items",
				items: {
					myItems: {
						type: "array",
						ref: "listItems",
						label: "List Items",
						itemTitleRef: "label",
						allowAdd: true,
						allowRemove: true,
						addTranslation: "Add Item",
						items: {
							label: {
								type: "string",
								ref: "label",
								label: "Label",
								expression: "optional"
							},
							textarea: {
								label: "Text",
								component: "textarea",
								maxlength: 100,//you shouldn't write too much
								ref: "text",
								defaultValue: ''
							}
						}
					}
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
