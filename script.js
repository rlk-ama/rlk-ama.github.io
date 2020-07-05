function displayMenu() {
  var x = document.getElementById("menu-h");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
} 
function removeMenu() {
  var x = document.getElementById("menu-h");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
} 
function submitForm() {
  $('form').get(0).reportValidity();

  var date = $('#date').val() || '';
  var email = $('#email').val() || ''; 

  var data = {
    'entry.1496796250': date,
    'entry.916265874': email,
  };
  if ($('form').get(0).checkValidity() && date && email) {
   $.ajax({
     type: 'POST',
     url: 'https://docs.google.com/forms/u/2/d/e/1FAIpQLSewFMUR94aX69kxneGoqtVHX9-fFBoRv9kBKTz9M_WTEye-sw/formResponse',
     data: data,
     contentType: 'application/json',
     dataType: 'jsonp',
     complete: function() {
       $('#submit_button').html('Thanks, we\'ll get in touch soon!');
       $('#submit_button').css("background-color", "#00AB84");
       $('#submit_button').prop("disabled", true);
     }
   });
  }
}
