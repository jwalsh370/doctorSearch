var doctor = require('./../js/doctor.js').doctorModule;
var getDoctors = require('./../js/doctor.js').getDoctors;

var doctorsDisplayed = function(doctors) {
  doctors.forEach(function(doctor) {
    $('#doctors').append('<tr class="info">'+
                          "<td>doctor.data.practices.name</td>"+
                          "<td>doctor.data.profile.first_name, doctor.data.profile.last_name, doctor.data.profile.title</td>"+
                          "<td>doctor.data.profile.gender</td>"+
                          "<td>doctor.data.practices.phones.number</td>"+
                          "<td>doctor.data.website</td>"+
                          "<td>doctor.data.visit_address</td>"+
                        '</tr>');
  });
};

$(document).ready(function(){
  var currentDoctorObject = new Doctor();

  $('#doctorSearch').submit(function(){
    event.preventDefault();

    currentDoctorObject.getDoctors(medicalIssue);
  });
});
