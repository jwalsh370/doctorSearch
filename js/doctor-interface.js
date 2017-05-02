var Doctor = require('./../js/doctor.js').doctorModule;




var displayDoctors = function(doctors) {
  doctors.forEach(function(doctor) {
    $('#doctors').append('<tr class="info">'+
                            "<td>" + doctor.name + "</td>"+
                            "<td>" + doctor.gender + "</td>"+
                            "<td>" + doctor.title + "</td>" +
                            "<td>" + doctor.specialties + "</td>" +
                            "<td>" + doctor.insurance + "</td>" +
                            "<td>" + doctor.practice + "</td>" +
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
