var apiKey = require('./../.env').apiKey;
var apiUrl = 'https://api.betterdoctor.com/2016-03-01/doctors?query=';
var apiLocation = '&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=';


function Doctor() {
}

Doctor.prototype.getDoctors = function( issue, displayDoctors) {
   $.get(apiUrl + issue + apiLocation + apiKey).then(function(response) {
     console.log(response);
    var allDoctors = [];
    response.doctors.forEach(function(doctor){
      var newDoctor = {};
      newDoctor.name = doctor.first_name + " " + doctor.last_name;
      newDoctor.specialties = doctor.specialties;
      newDoctor.education = doctor.educations;
        allDoctors.push(newDoctor);
    });
    displayDoctors(allDoctors);
  }).fail(function(error) {
  });
};



exports.doctorModule = Doctor;
