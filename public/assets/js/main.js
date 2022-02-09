/**
 * Place any jQuery/helper plugins in here.
*/

/**
 * Show delete confirmation modal
 */
// For single delete row
$(document).on("click", "#delete-btn" ,function () {
	var url = $(this).data("url");
	Swal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		type: "warning",
		showCancelButton: true,
		confirmButtonText: "Yes, delete it!",
		cancelButtonText: "No, cancel!",
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
		title: "Remove the selected data?",
		text: "You won't be able to revert this!",
		type: "warning",
		showCancelButton: true,
		confirmButtonText: "Yes, delete all!",
		cancelButtonText: "No, cancel!",
		reverseButtons: true
	}).then((result) => {
		if (result.value) {
			$("#multidelete-frm").submit();
		}
	})
});

/**
 * Flatpickr Datetime Function
 * @type {datetime}
 */
// Single date
$(".single-date").flatpickr({
	dateFormat: "Y-m-d",
});

// Range date
$(".range-date").flatpickr({
    mode: "range",
	dateFormat: "Y-m-d",
});

// Alternative date
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
$(".alt-date").flatpickr({
	altInput: true,
    altFormat: "j F, Y",
    dateFormat: "Y-m-d",
	defaultDate: date
});
