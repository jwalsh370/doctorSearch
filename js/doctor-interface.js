var doctor = require('./../js/doctor.js').doctorModule;
var mapApiKey = require('./../.env').mapApiKey;

var currentDoctorObject = new Doctor();

var doctorsDisplayed = function(doctors) {
  doctors.forEach(function(doctor) {
    $('#doctors').append('<tr class="info">'+
                          "<td>doctor.practices.name</td>"+
                          "<td>doctor.profile.first_name, doctor.profile.last_name</td>"+
                          "<td>doctor.profile.gender</td>"+
                          "<td>doctor.practices.phones.number</td>"+
                          "<td>doctor.website</td>"+
                          "<td>doctor.visit_address</td>"+
                        '</tr>');
  });
};

$(document).ready(function(){
  $('#doctorSearch').submit(function(){
    event.preventDefault();
    var issue = $('#issue').val();
    var zip = parseInt($('#zip').val());
    var distance = parseInt($('#distance').val());
    $('#zip').val('');
    $('#distance').val('');
    $('#issue').val('');

    currentDoctorObject.getDoctors(allDoctors, zip, distance, issue);
  });
});
