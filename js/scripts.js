// Foundation
$(document).foundation();


// Go Modal
$('#myModal').foundation('reveal', 'open');

// Joyride
// $("#joyride").foundation('joyride', 'start');
$( "#joyride" ).click(function(e) {
  $(document).foundation('joyride', 'start');
});