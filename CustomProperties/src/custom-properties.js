/*global define*/
define([
	'./props-string',
	'./props-checkbox'
], function ( stringProps, checkProps ) {
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
  // Property Panel Definition
  // ****************************************************************************************

    var propertyPanelDefinition = {
        uses: "settings",
        items: {
            stringProps: {
                type: "items",
                label: "String Properties",
                items: {
                    defaultString: stringProps.defaultString,
					expressionEmpty: stringProps.expressionEmpty,
					expressionAlways: stringProps.expressionAlways,
					expressionOptional: stringProps.expressionOptional,
					maxLength10: stringProps.maxLength10,
					maxLength10Optional: stringProps.maxLength10Optional
                }
            },
			checkBoxProps: {
				type: "items",
				label: "Checkbox Properties",
				items: {
					checkboxDefault: checkProps.checkboxDefault
				}
			}
        }
    };


    // Return values
    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: dimensions,
            measures: measures,
            sorting: sorting,
            settings: propertyPanelDefinition

        }
    };

});
