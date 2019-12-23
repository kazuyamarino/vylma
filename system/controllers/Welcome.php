<?php
namespace Controllers;

defined('ROOT') OR exit('No direct script access allowed');

use Core\NSY_Controller;
use Carbon\Carbon;
use Libraries\Cookie;
use Models\Model_Welcome;
use Modules\Homepage\Models\Model_Hello;

class Welcome extends NSY_Controller
{

	public function __construct()
	{

	}

	public function index()
	{
		// Load MVC view page
		$this->load_template("header")->load_view(null, "index")->load_template("footer");
	}

}
