<?php
defined('ROOT') OR exit('No direct script access allowed');
?>
<!doctype html>
<html class="no-js" lang="<?php echo LANGUAGE_CODE; ?>">
<head>
	<?php
	// call header assets method
	pull::header_assets();
	?>
</head>
<body>
	<!--[if lte IE 9]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
	<![endif]-->

	<header class="columns header has-text-centered content">
		<div class="column is-full">
			<div class="columns is-vcentered">
				<div class="column is-2">
					<img src="<?php echo IMG_DIR ?>logo.png" width="200"/>
				</div>
				<div class="column is-8">
					<h2>Welcome to Project Vylma</h2>
					<p>NSY PHP Framework + Bulma CSS Framework.</p>
					<p>A very simple PHP Framework that works well on MVC or HMVC mode.</p>
				</div>
				<div class="column is-2">
					<a target="_blank" href="https://github.com/kazuyamarino/nsy"><i class="fab fa-github fa-5x"></i>
						<p>View On Github</p>
					</a>
				</div>
			</div>
		</div>
	</header>
