<?php
namespace Libraries;

defined('ROOT') OR exit('No direct script access allowed');

/**
 * This method serves to manage NSY framework sweetalert notifications
 * Attention, don't try to change the structure of the code, delete, or change. Because there is some code connected to the NSY system. So, be careful.
 */
Class Alerts {

	public static function pull_alerts($message)
	{
		if (!empty($message)) {
			if ($message == 'register-success') {
				echo '<script>Swal.fire("Success!", "Data has been sent!", "success");</script>';
			} elseif ($message == 'delete-success') {
				echo '<script>Swal.fire("Success!", "Data has been deleted!", "success");</script>';
			} elseif ($message == 'update-success') {
				echo '<script>Swal.fire("Success!", "Data has been updated!", "success");</script>';
			} elseif ($message == 'must-select') {
				echo '<script>Swal.fire("Warning!", "Data must be selected!", "warning");</script>';
			} else {
				echo '<pre>Message: there is no variable named <strong><i>' . $message . '</i></strong> in the <mark>pull_alerts()</mark> function.</pre>';
				echo "<pre>Stack trace:\n#0 libraries/Alerts.php:12</pre>";
				exit();
			}
		}
	}

}
