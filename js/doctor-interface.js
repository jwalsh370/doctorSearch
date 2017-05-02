var Doctor = require('./../js/doctor.js').doctorModule;




var displayDoctors = function(doctors) {
  doctors.forEach(function(doctor) {
    $('#doctors').append('<tr class="info">'+
                            "<td>" + doctor.name + "</td>"+
                            "<td>" + doctor.specialties + "</td>"+
                            "<td>" + doctor.educations + "</td>" +
                           '</tr>'
                        );
  });
};

$(document).ready(function(){
  var currentDoctorObject = new Doctor();
  $('#allDoctors').submit(function(){
    event.preventDefault();
    var issue = $('#issue').val();
    $('#issue').val('');

    currentDoctorObject.getDoctors(issue, displayDoctors);
  });
});
