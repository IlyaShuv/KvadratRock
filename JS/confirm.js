function Confirm() {
	$(document).ready(function() {
			$('#continue').prop('disabled', true);
			$('#agree').change(function() {
				$('#continue').prop('disabled', function(i, val) {
					return !val;
				})
			});
		})
}