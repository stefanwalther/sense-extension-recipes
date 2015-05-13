define( [], function () {
	'use strict';

	// ****************************************************************************************
	// Dimensions & Measures
	// ****************************************************************************************
	var dimensions = {
		uses: "dimensions",
		min: 0,
		max: 1
	};

	var measures = {
		uses: "measures",
		min: 0,
		max: 1
	};

	var sorting = {
		uses: "sorting"
	};

	// ****************************************************************************************
	// Other Settings
	// ****************************************************************************************

	var showMyAccordion = {
		ref: "props.showMyAccordionPanel",
		label: "Show \"My Accordion Panel\"",
		type: "boolean",
		defaultValue: true
	};

	// ****************************************************************************************
	// New Accordion Panel
	// ****************************************************************************************

	var section1_item1 = {
		ref: "props.section1.item1",
		label: "Section 1 / Item 1",
		type: "string",
		expression: "optional"
	};
	var section1_item2 = {
		ref: "props.section1.item2",
		label: "Section 1 / Item 2",
		type: "string",
		expression: "optional"
	};

	var section2_item1 = {
		ref: "props.section2.item1",
		label: "Section 2 / Item 1",
		type: "string",
		expression: "optional"
	};
	var section2_item2 = {
		ref: "props.section2.item2",
		label: "Section 2 / Item 2",
		type: "string",
		expression: "optional",
		show: function ( data ) {

		}
	};

	// ****************************************************************************************
	// Property Panel Definition
	// ****************************************************************************************

	return {
		//type: "items", //<== working also without type: "items"
		component: "accordion",
		items: {
			dimensions: dimensions,
			measures: measures,
			sorting: sorting,
			appearance: {
				uses: "settings",
				items: {
					settings: {
						type: "items",
						label: "Settings",
						items: {
							testSetting: showMyAccordion
						}
					}
				}
			},
			myAccordionPanel: {
				//type: "items", //<== not necessary to define "items"
				component: "expandable-items",
				label: "My Accordion Panel",
				items: {
					section1: {
						type: "items",
						label: "Section 1",
						items: {
							section1_item1: section1_item1,
							section1_item2: section1_item2
						}
					},
					section2: {
						type: "items",
						label: "Section 1",
						items: {
							section2_item1: section2_item1,
							section2_item2: section2_item2
						}
					}

				}
			}
		}

	}
} );
