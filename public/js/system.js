/*
BASE_URL Config Javascript
*/
function base_url(url) {
	var slash = "/";
	var slashes ="//";
	var protocol = location.protocol;
	var host = window.location.hostname;

	// change according to the name of your project folder
	var dirname = "vylma"; // defined
	// var dirname = ""; // undefined

	// if dirname not empty or defined
	if ( dirname ) {
		// then show this base_url with dirname + slash result
		var base_url = protocol + slashes + host + slash + dirname + slash;
		if ( url ) {
			return base_url + url;
		} else {
			return base_url;
		}
	} else {
		// else show base_url without dirname + slash result
		var base_url = protocol + slashes + host + slash;
		if ( url ) {
			return base_url + url;
		} else {
			return base_url;
		}
	}
}

// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

/*
Bulma Notification JS
 */
$(document).ready(function() {
	$(".notification > button.delete").click(function() {
		$(this).parent().addClass('is-hidden');
		return false;
	});
});

/*
Norma JS Initialize
 */
$(document).norma();
