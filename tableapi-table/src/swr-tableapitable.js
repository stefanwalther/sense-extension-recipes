define([
        'jquery',
		'qlik',
        './properties',
        './initialproperties',
        './lib/js/extensionUtils',
        'text!./lib/css/style.css'
],
function ($, qlik, props, initProps, extensionUtils, cssContent) {
    'use strict';
    extensionUtils.addStyleToHeader(cssContent);

    return {

        definition: props,
        initialProperties: initProps,
        snapshot: { canTakeSnapshot: true },
        paint: function ( $element, layout ) {

			if (qlik.table) {
				var qTable = qlik.table( this );

				$element.empty();

				var $exportButton = $( document.createElement( 'button' ) );
				$exportButton.html( 'Export' );
				$exportButton.bind( 'click', function () {

					var exportConfig = {
						download: true,
						filename: 'my-export.xlsx',
						format: 'OOXML'
					};

					qTable.exportData( exportConfig, function ( reply ) {
						console.log( 'Created export file: ', reply );
					} );
				} );
				$element.append( $exportButton );

				var table = '<table border="1">';
				table += '<thead>';
				table += '<tr>';
				for ( var i = 0; i < qTable.headers.length; i++ ) {
					table += '<th>' + qTable.headers[i].qFallbackTitle + '</th>';
				}
				table += '</tr>';
				table += '</thead>';

				table += '<tbody>';
				for ( var r = 0; r < qTable.rows.length; r++ ) {
					table += '<tr>';
					for ( var c = 0; c < qTable.rows[r].cells.length; c++ ) {
						table += '<td>';
						table += qTable.rows[r].cells[c].qText;
						table += '</td>';
					}
					table += '</tr>';
				}
				table += '</tbody>';
				table += '</table>';
				$element.append( table );
			} else {
				console.error('qlik.table is not available in the current version.');
			}

        }
    };

});
