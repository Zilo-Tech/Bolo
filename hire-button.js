$(document).ready(function() {
    $('#redirectSwitch').change(function() {
      if ($(this).is(':checked')) {
        
        window.location.href = 'switch-form.html';
      }
    });
  });