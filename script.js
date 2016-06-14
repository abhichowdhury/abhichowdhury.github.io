var database = firebase.database();

$(document).ready(function() {
	$('.submittedText').hide();
	$('.errorText').hide();

	$('#submitBtn').click(function() {
		var inputVal = $('#formInput').val();
		if (inputVal) {
			database.ref('emails').push({
				email: inputVal
			});
			$('.errorText').hide();
			$('.submittedText').show();
			$('.formInputWrapper').hide();
			$('.submitButtonWrapper').hide();
		}
		else {
			$('.errorText').show();
		}
	});
});