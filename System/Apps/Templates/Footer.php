<!-- Footer are 'sticky' -->
<footer class="columns footer content">
	<div class="column is-4">
		<p><i class="fab fa-html5 fa-3x"></i>&nbsp;<i class="fab fa-css3 fa-3x"></i></p>
		<p>This is a Sticky Footer.</p>
		<p><a target="_blank" href="@raw( 'mailto:vikry.yuansah@gmail.com' )">Vikry Yuansah </a><i class="fas fa-forward"></i> <a href="@( base_url() )">Vylma</a> @(VERSION), 2018 - @( date("Y") ).</p>
	</div>
	<div class="column is-4">
		<p><strong><a target="_blank" href="http://fortawesome.github.io/Font-Awesome/">Font Awesome</a></strong> is The iconic font and CSS toolkit</p>
		<div class="content">
			<i class="fab fa-twitter fa-2x fa-fw"></i><a class="list-group-item" target="_blank" href="https://twitter.com/uybeye">&nbsp; Twitter</a>
		</div>
		<div class="content">
			<i class="fab fa-facebook fa-2x fa-fw"></i><a class="list-group-item" target="_blank" href="#">&nbsp; Facebook</a>
		</div>
		<div class="content">
			<i class="fab fa-linkedin fa-2x fa-fw"></i><a class="list-group-item" target="_blank" href="https://id.linkedin.com/in/vikry-yuansyah-1265a4a7">&nbsp; Linkedin</a>
		</div>
		<div class="content">
			<i class="fas fa-envelope fa-2x fa-fw"></i><a class="list-group-item" href="@raw( 'mailto:vikry.yuansah@gmail.com' )">&nbsp; Email</a>
		</div>
	</div>
	<div class="column is-4">
		<p>Search & Email:</p>
		<div class="field has-addons">
			<div class="control">
				<input class="input" type="text" placeholder="Find a repository">
			</div>
			<div class="control">
				<a class="button is-info">
					Search
				</a>
			</div>
		</div>
		<div class="field is-grouped">
			<p class="control is-expanded">
				<input class="input" type="text" placeholder="Email Address">
			</p>
			<p class="control">
				<a class="button">
					Submit
				</a>
			</p>
		</div>
	</div>
</footer>
<!-- call footer assets -->
@( footer_assets() )

<!-- call datatable init asset -->
@( datatables_init() )
</body>
</html>
