/*
Place any jQuery/helper plugins in here.
*/

/*
Show delete confirmation modal
 */
// For single delete row
$(document).on("click", "#delete-btn" ,function () {
	var url = $(this).data('url');
	Swal.fire({
		title: 'Are you sure?',
		text: "You won't be able to revert this!",
		type: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Yes, delete it!',
		cancelButtonText: 'No, cancel!',
		reverseButtons: true
	}).then((result) => {
		if (result.value) {
			window.location.href = url;
		}
	})
});

// For multiple delete row
$(document).on("click", "#multidelete-btn" ,function () {
	Swal.fire({
		title: 'Remove the selected data?',
		text: "You won't be able to revert this!",
		type: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Yes, delete all!',
		cancelButtonText: 'No, cancel!',
		reverseButtons: true
	}).then((result) => {
		if (result.value) {
			$('#multidelete-frm').submit();
		}
	})
});
