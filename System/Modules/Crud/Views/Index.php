<!-- call alerts method -->
@( pull_alerts($message) )
<div class="wrap">
	<hr>
	<div class="columns is-centered content">
		<div class="column is-5">
			<h5 class="has-text-centered"><a href="@( base_url() )">Back</a></h5>
			<h5>Users Registration</h5>
			<form action="@( base_url('crud/insert') )" method="POST" data-abide novalidate>
				<div data-abide-error class="is-error notification alert">
					<p>There are some errors in your form.</p>
				</div>

				<div class="field">
					<label class="label">Username&nbsp;<small>(required)</small>
						<input class="input" type="text" name="user_name" id="username-help" placeholder="3 - 50 characters" pattern="^[a-z0-9\._-]{3,50}$" required>
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
					<label class="label">Password&nbsp;<small>(required)</small>
						<input class="input" type="password" name="user_password" id="user-password-first" placeholder="5 - 16 characters" pattern="^[a-zA-Z0-9\.]{5,16}$" required>
						<span class="help is-error is-danger">
							<ul>
								<li>Password is required.</li>
								<li>Can only contain dot (&nbsp;.&nbsp;)</li>
							</ul>
						</span>
					</label>
				</div>

				<div class="field">
					<label class="label">Confirm Password&nbsp;<small>(required)</small>
						<input class="input" type="password" placeholder="5 - 16 characters" pattern="^[a-zA-Z0-9\.]{5,16}$" data-equalto="user-password-first" required>
						<span class="help is-error is-danger">The password did not match</span>
					</label>
					<p class="help" id="password-help">Enter your password here.</p>
				</div>

				<div class="field">
					<label class="label" for="radio-stat">Status Active&nbsp;<small>(required)</small></label>
					<div id="radio-stat" class="radio-group">
						<div class="control">
							<label class="radio">
								<input type="radio" name="user_status" value="Y" id="act-stat" required>&nbsp;Yes
							</label>
							<label class="radio">
								<input type="radio" name="user_status" value="N" id="deact-stat">&nbsp;No
							</label>
						</div>
						<span class="help">Must select at least one</span>
					</div>
				</div>

				<div class="field">
					<div id="term-cond" class="checkbox-group" data-validator-min="1" required>
						<div class="control">
							<label class="checkbox">
								<input type="checkbox" name="term-cond" value="Agree"><span class="modal-button" data-target="modal-normal">&nbsp;Terms & Conditions</span>
							</label>
						</div>

						<div id="modal-normal" class="modal">
							<div class="modal-background"></div>
							<div class="modal-content">
								<!-- content -->
								<div class="box">
									<h1>Terms &amp; Condition</h1>
									<p class="lead">You and Me... Last Man Standing!</p>
								</div>
								<!-- end content -->
							</div>
							<button class="modal-close is-large" aria-label="close"></button>
						</div>
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
		</div>
	</div>

	<div class="columns content">
		<div class="column is-full">
			<form id="multidelete-frm" action="@( base_url('crud/multidelete') )" method="POST" data-abide novalidate>
				<div class="columns">
					<div class="column is-6">
						<h5>Users Database</h5>
					</div>
					<div class="column is-6">
						<div class="field is-grouped is-pulled-right">
							<div class="control">
								<button id="reset-filter" class="button is-link" type="reset">Reset</button>
							</div>
							<div class="control">
								<button id="multidelete-btn" class="button is-danger" type="button">Delete Selected</button>
							</div>
						</div>
					</div>
				</div>
				<table id="example" class="display responsive" cellspacing="0" width="100%">
					<thead>
						<tr>
							<th></th>
							<th>ID</th>
							<th>User Code</th>
							<th>User Name</th>
							<th>User Status</th>
							<th>Create Date</th>
							<th>Update Date</th>
							<th>Additional Date</th>
							<th>Action</th>
						</tr>
					</thead>
				</table>
			</form>
		</div>
	</div>
</div>
