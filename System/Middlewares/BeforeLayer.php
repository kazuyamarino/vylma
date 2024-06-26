<?php

namespace System\Middlewares;

use Optimus\Onion\Onion;
use Optimus\Onion\LayerInterface;

class BeforeLayer implements LayerInterface
{

	public function __construct()
	{
		/*
		Instantiate a model class here!
		 */
	}

	public function peel(mixed $object, \Closure $next)
	{
		$condition = 1;

		if ($condition == 1) {
			/*
			Response if condition true,
			Result from before middleware here.
			 */
			$object = 'Before Core';

			$response = $next($object);
		} else {
			/*
			Response if condition false.
			 */
			$object = 'Middleware : Access controller canceled';

			echo $object;

			exit();
		}
	}
}
