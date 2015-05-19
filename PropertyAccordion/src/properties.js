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

	var header1_item1 = {
		ref: "props.section1.item1",
		label: "Section 1 / Item 1",
		type: "string",
		expression: "optional"
	};
	var header1_item2 = {
		ref: "props.section1.item2",
		label: "Section 1 / Item 2",
		type: "string",
		expression: "optional"
	};

	var header2_item2 = {
		ref: "props.section2.item1",
		label: "Section 2 / Item 1",
		type: "string",
		expression: "optional"
	};
	var header2_item2 = {
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
			myCustomSection: {
				//type: "items", //<== not necessary to define "items"
				component: "expandable-items",
				label: "My Accordion Section",
				items: {
					header1: {
						type: "items",
						label: "Header 1",
						items: {
							header1_item1: header1_item1,
							header1_item2: header1_item2
						}
					},
					header2: {
						type: "items",
						label: "Header 2",
						items: {
							header2_item1: header2_item2,
							header2_item2: header2_item2
						}
					}
				}
			}
		}

	}
} );
