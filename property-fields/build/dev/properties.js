/*!

* property-fields - Sample to show how to select from a list of fields in the property panel.
*
* @version v0.1.0
* @link 
* @author Stefan Walther <https://github.com/stefanwalther>
* @license MIT
*/


/*!

 * property-fields - Sample to show how to select from a list of fields in the property panel.
 *
 * @version v0.1.0
 * @link
 * @author Stefan Walther <https://github.com/stefanwalther>
 * @license MIT
 */


/*global define*/
define( ['angular', 'qlik'], function ( angular, qlik ) {
	'use strict';

	var $injector = angular.injector( ['ng'] );
	var $q = $injector.get( "$q" );

	var app = qlik.currApp();

	// ****************************************************************************************
	// Helper Methods
	// ****************************************************************************************
	function getFieldList () {
		var defer = $q.defer();

		app.getList( "FieldList", function ( items ) {
			console.log( 'fieldList', items );

			defer.resolve( items.qFieldList.qItems.map( function ( item ) {
				return {
					value: item.qName,
					label: item.qName
				};
			} ) );
		} );

		return defer.promise;
	}

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
			appearance: appearanceSection,
			fieldList: {
				type: "string",
				ref: "selectedField",
				component: "dropdown",
				label: "Select field",
				defaultValue: "",
				options: getFieldList()
			},
			actionList: {
				type: "array",
				ref: "props.actionItems",
				label: "Add Fields",
				allowAdd: true,
				allowRemove: true,
				addTranslation: "Add Item",
				grouped: true,
				items: {
					fieldSelection: {
						type: "string",
						ref: "selectedField",
						component: "dropdown",
						label: "Select field",
						defaultValue: "",
						options: getFieldList()
					}
				}
			}
		}
	};

} );
