/*! DataTables Bulma integration
 * ©2011-2015 SpryMedia Ltd - datatables.net/license
 */
(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				root = window;
			}

			if ( ! $ || ! $.fn.dataTable ) {
				$ = require('datatables.net')(root, $).$;
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;


$.extend( DataTable.ext.classes, {
	sWrapper: "dataTables_wrapper dt-bulma is-size-8",
	sFilterInput: "input is-small",
	sFilter:"dataTables_filter is-size-8",
	sLengthSelect: "select is-primary",
	sProcessing: "dataTables_processing panel",
	sPageButton: "pagination-link",
	sPagePrevious: "pagination-previous",
	sPageNext: "pagination-next",
	sPageButtonActive: "is-current",
	sPageButtonDisabled: "disabled",
	sPaging: "pagination dataTables_paginate is-size-8 ",
	sInfo: "dataTables_info is-size-8",
	sLength:"dataTables_length is-size-8"
} );


/* Set the defaults for DataTables initialisation */
$.extend( true, DataTable.defaults, {
	dom: "<'columns'<'column is-6'l><'column is-6'f>><'columns'<'column is-12 table-container'tr>><'columns'<'column is-5'i><'column is-7'p>>",
	renderer: "bulma"
} );


/* Page button renderer */
DataTable.ext.renderer.pageButton.bulma = function ( settings, host, idx, buttons, page, pages ) {
	var api = new DataTable.Api( settings );
	var classes = settings.oClasses;
	var lang = settings.oLanguage.oPaginate;
	var aria = settings.oLanguage.oAria.paginate || {};
	var btnDisplay, btnClass;
	var tag;

	var attach = function( container, buttons ) {
		var i, ien, node, button;
		var clickHandler = function ( e ) {
			e.preventDefault();
			if ( !$(e.currentTarget).hasClass('disabled') && api.page() != e.data.action ) {
				api.page( e.data.action ).draw( 'page' );
			}
		};

		for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
			button = buttons[i];

			if ( $.isArray( button ) ) {
				attach( container, button );
			}
			else {
				btnDisplay = '';
				btnClass = '';
				tag = null;

				switch ( button ) {
					case 'ellipsis':
						btnDisplay = '&hellip;';
						btnClass = 'disabled';
						tag = null;
						break;

					case 'first':
						btnDisplay = lang.sFirst;
						btnClass = button + (page > 0 ?
							'' : ' disabled');
						tag = page > 0 ? 'a' : null;
						break;

					case 'previous':
						btnDisplay = lang.sPrevious;
						btnClass = button + (page > 0 ?
							'' : ' disabled');
						tag = page > 0 ? 'a' : null;
						break;

					case 'next':
						btnDisplay = lang.sNext;
						btnClass = button + (page < pages-1 ?
							'' : ' disabled');
						tag = page < pages-1 ? 'a' : null;
						break;

					case 'last':
						btnDisplay = lang.sLast;
						btnClass = button + (page < pages-1 ?
							'' : ' disabled');
						tag = page < pages-1 ? 'a' : null;
						break;

					default:
						btnDisplay = button + 1;
						btnClass = page === button ?
							'is-current' : '';
						tag = page === button ?
							null : 'a';
						break;
				}

				if ( btnDisplay ) {
					node = $('<li>', {
							'class': classes.sPageButton+' '+btnClass,
							'aria-controls': settings.sTableId,
							'aria-label': aria[ button ],
							'tabindex': settings.iTabIndex,
							'id': idx === 0 && typeof button === 'string' ?
								settings.sTableId +'_'+ button :
								null
						} )
						.append( tag ?
							$('<'+tag+'/>', {'href': '#'} ).html( btnDisplay ) :
							btnDisplay
						)
						.appendTo( container );

					settings.oApi._fnBindAction(
						node, {action: button}, clickHandler
					);
				}
			}
		}
	};

	attach(
		$(host).empty().html('<ul class="pagination-list"/>').children('ul'),
		buttons
	);
};


return DataTable;
}));
