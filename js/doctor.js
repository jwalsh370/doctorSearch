
var apiUrl = "https://api.betterdoctor.com/2016-03-01/doctors?query=";
var apiLocation = "&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=";
var apiKey = require('./../.env').apiKey;


function Doctor() {
}

Doctor.prototype.getDoctors = function(issue, displayDoctors) {
   $.get(apiUrl + issue + apiLocation + apiKey)
    .then(function(response) {
      var allDoctors = [];
      response.data.forEach(function(doctor) {
      var newDoctor = {};
      newDoctor.name = doctor.profile.first_name + " " + doctor.profile.last_name;
      newDoctor.specialties = doctor.profile.specialties;
      newDoctor.education = doctor.profile.educations;
        allDoctors.push(newDoctor);
    });
    displayDoctors(allDoctors);
  })

  .fail(function(error) {
     $('#error').text(error.responseJSON.message);
  });
};



exports.doctorModule = Doctor;
