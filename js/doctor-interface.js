var Doctor = require('./../js/doctor.js').doctorModule;


var currentDoctorObject = new Doctor();

var displayDoctors = function(doctors) {
  doctors.forEach(function(doctor) {
    $('#doctors').append('<tr class="info">'+
                          "<td>Doctor.practices.name</td>"+
                          "<td>Doctor.profile.first_name, Doctor.profile.last_name</td>"+
                          "<td>Doctor.profile.gender</td>"+
                          "<td>Doctor.practices.phones.number</td>"+
                          "<td>Doctor.website</td>"+
                          "<td>Doctor.visit_address</td>"+
                          "<td>Doctor.specialties</td>"+
                          "<td>Doctor.educations"+
                        '</tr>');
  });
};

$(document).ready(function(){
  $('#allDoctors').submit(function(){
    event.preventDefault();
    var issue = $('#issue').val();
    $('#issue').val('');

    currentDoctorObject.getDoctors(displayDoctors,issue);
  });
});
