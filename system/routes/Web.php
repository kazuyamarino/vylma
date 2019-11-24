<?php
namespace Routes;

defined('ROOT') OR exit('No direct script access allowed');

use Core\NSY_Router as route;

Class Web
{

	public function __construct()
	{
		// define Web routes, the params format is :
		// Format = route::type('url', 'namespace\class_controller@method')
		// Route type : any, get, post, put, delete, options, & head

		// MVC Route
		route::any('vylma/', 'Controllers\Welcome@index');

		// HMVC Route
		route::any('vylma/hmvc', 'Modules\Controllers\Hello@index_hmvc');

		// Crud Route
		route::any('vylma/crud', 'Modules\Controllers\c_crud@crud_homepage');
		route::any('vylma/crud/(:any)', 'Modules\Controllers\c_crud@crud_homepage');
		route::any('vylma/crud/insert', 'Modules\Controllers\c_crud@crud_insert');
		route::any('vylma/crud/delete/(:num)', 'Modules\Controllers\c_crud@crud_delete');
		route::any('vylma/crud/multidelete', 'Modules\Controllers\c_crud@crud_multidelete');
		route::any('vylma/crud/update/(:num)', 'Modules\Controllers\c_crud@crud_update');
		route::any('vylma/crud/fetch/(:num)', 'Modules\Controllers\c_crud@crud_fetch');

		// Data route
		route::any('vylma/crud/data.json', 'Modules\Controllers\c_crud@crud_data');
	}

}
