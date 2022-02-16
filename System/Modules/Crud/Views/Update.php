<div class="wrap">
	<hr>
	<div class="columns is-centered content">
		<div class="column is-5">
			<h5 class="has-text-centered"><a href="@( base_url('crud') )">Back</a></h5>

			<h5>Users Information</h5>
			<form action="@( base_url('crud/update/'. $data['id']. '') )" method="POST" data-abide novalidate>
				<div data-abide-error class="is-error notification alert">
					<p>There are some errors in your form.</p>
				</div>

				<div class="field">
					<label class="label">Username&nbsp;<small>(required)</small>
						<input class="input" type="text" name="user_name" id="username-help" placeholder="3 - 50 characters" value="@( $data['user_name'] )" pattern="^[a-z0-9\._-]{3,50}$" required>
						<span class="help is-error is-danger">
							<ul>
								<li>Username must be lowercase</li>
								<li>Can only contain dot (&nbsp;.&nbsp;), underscore (&nbsp;_&nbsp;), & minus (&nbsp;-&nbsp;)</li>
							</ul>
						</span>
					</label>
					<p class="help" id="username-help">Enter your username here.</p>
				</div>

				<div class="field">
					<label class="label">Password
						<input class="input" type="password" name="user_password" id="user-password-first" placeholder="5 - 16 characters" pattern="^[a-zA-Z0-9\.]{5,16}$">
						<span class="help is-error is-danger">
							<ul>
								<li>Password is required.</li>
								<li>Can only contain dot (&nbsp;.&nbsp;)</li>
							</ul>
						</span>
					</label>
				</div>

				<div class="field">
					<label class="label">Confirm Password
						<input class="input" type="password" placeholder="5 - 16 characters" pattern="^[a-zA-Z0-9\.]{5,16}$" data-equalto="user-password-first">
						<span class="help is-error is-danger">The password did not match</span>
					</label>
					<p class="help" id="password-help">Enter your password here.</p>
				</div>

				<div class="field">
					<label class="label" for="radio-stat">Status Active&nbsp;<small>(required)</small></label>
					<div id="radio-stat" class="radio-group">
						<div class="control">
							<label class="radio">
								<input type="radio" name="user_status" value="Y" id="act-stat" @( terner( ('Y' == $data['user_status']), 'checked', '') ) required>&nbsp;Yes
							</label>
							<label class="radio">
								<input type="radio" name="user_status" value="N" id="deact-stat" @( terner( ('N' == $data['user_status']), 'checked', '' ) )>&nbsp;No
							</label>
						</div>
						<span class="help">Must select at least one</span>
					</div>
				</div>

				<div class="field is-grouped">
					<div class="control">
						<button class="button is-link" type="submit">Submit</button>
					</div>
					<div class="control">
						<button class="button is-text" type="reset">Reset</button>
					</div>
				</div>
			</form>
			<br>
		</div>
	</div>
</div>
