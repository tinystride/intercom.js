var localStorage = undefined;

// Checks if the browser has a working localStorage implementation
var isLocalStorageSupported = function() {
	try {
		window.localStorage['local-storage-test'] = 1;
		return true
	} catch (error) {
		return false
	}
};

if (isLocalStorageSupported) {
	localStorage = window.localStorage
}
