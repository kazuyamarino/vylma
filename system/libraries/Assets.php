<?php
/**
* Attention, don't try to change the structure of the code, delete, or change.
* Because there is some code connected to the NSY system. So, be careful.
*
* Hi Welcome to NSY Assets Manager.
* The easiest & best assets manager in history.
* Made with love by Vikry Yuansah.
*
* How to use it? Simply follow this :
* https://github.com/kazuyamarino/nsy-docs/blob/master/USERGUIDE.md#introducting-to-nsy-assets-manager
*/

function header_assets()
{
	// Site Title
	Add::custom('<title>' . get_title() . ' ' . get_version() . ' | ' . get_codename() . '</title>');

	// Meta Tag
	Add::meta('charset="utf-8"', null);
	Add::meta('http-equiv="x-ua-compatible"', 'ie=edge');
	Add::meta('name="description"', get_desc());
	Add::meta('name="keywords"', get_keywords());
	Add::meta('name="author"', get_author());
	Add::meta('name="viewport"', 'width=device-width, initial-scale=1, shrink-to-fit=no');

	// Favicon
	Add::link('favicon.png', 'shortcut icon', null);

	// Font Awesome CSS
	Add::link('vendor/all.min.css', 'stylesheet', 'text/css');

	// Bulma CSS
	Add::link('bulma/css/bulma.min.css', 'stylesheet', 'text/css');
	Add::link('vendor/modal-fx.min.css', 'stylesheet', 'text/css');

	// Datatable CSS
	Add::link('vendor/dataTables.bulma.min.css', 'stylesheet', 'text/css');

	// Tooltip CSS
	Add::link('vendor/simptip.min.css', 'stylesheet', 'text/css');
	// Flatpickr CSS
	Add::link('vendor/flatpickr.min.css', 'stylesheet', 'text/css');

	// Main Style
	Add::link('main.css', 'stylesheet', 'text/css');

	// Modernizr JS
	Add::script('vendor/modernizr.min.js', 'text/javascript', 'UTF-8', null);
}

function footer_assets()
{
	// Jquery JS
	Add::script('vendor/jquery.min.js', 'text/javascript', 'UTF-8', null);
	Add::script('vendor/jquery-migrate.min.js', 'text/javascript', 'UTF-8', null);

	// Norma JS
	Add::script('vendor/norma.bulma.min.js', 'text/javascript', 'UTF-8', null);

	// WhatInput JS
	Add::script('vendor/what-input.min.js', 'text/javascript', 'UTF-8', null);

	// Datatables JS
	Add::script('vendor/jquery.dataTables.min.js', 'text/javascript', 'UTF-8', null);
	Add::script('vendor/dataTables.bulma.min.js', 'text/javascript', 'UTF-8', null);

	// Bulma modal-fx JS
	Add::script('vendor/modal-fx.min.js', 'text/javascript', 'UTF-8', null);

	// Flatpickr JS
	Add::script('vendor/flatpickr.min.js', 'text/javascript', 'UTF-8', null);

	// System JS
	Add::script('config/system.js', 'text/javascript', 'UTF-8', null);

	// Main JS
	Add::script('main.js', 'text/javascript', 'UTF-8', null);
}

function datatables_init()
{
	// Datatables init
	Add::script('datatables/init.js', 'text/javascript', 'UTF-8', null);
}

function datatables_crud_init()
{
	// Datatables init
	Add::script('datatables/init_crud.js', 'text/javascript', 'UTF-8', null);
}

function sweetalert_init()
{
	// Sweetalert init
	Add::script('vendor/sweetalert2.all.min.js', 'text/javascript', 'UTF-8', null);
	Add::script('vendor/polyfill.min.js', 'text/javascript', 'UTF-8', null);
}
