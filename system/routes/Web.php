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
		route::any('', 'Controllers\Welcome@index');

		// HMVC Route
		route::any('hmvc', 'Modules\Controllers\Hello@index_hmvc');

		// Crud Route
		route::any('crud', 'Modules\Controllers\c_crud@crud_homepage');
		route::any('crud/(:any)', 'Modules\Controllers\c_crud@crud_homepage');
		route::any('crud/insert', 'Modules\Controllers\c_crud@crud_insert');
		route::any('crud/delete/(:num)', 'Modules\Controllers\c_crud@crud_delete');
		route::any('crud/multidelete', 'Modules\Controllers\c_crud@crud_multidelete');
		route::any('crud/update/(:num)', 'Modules\Controllers\c_crud@crud_update');
		route::any('crud/fetch/(:num)', 'Modules\Controllers\c_crud@crud_fetch');

		// Data route
		route::any('crud/data.json', 'Modules\Controllers\c_crud@crud_data');
	}

}
