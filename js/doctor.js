
var url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=';
var location = '&location=45.5231%2C-122.6765%2C100&user_location=45.5231%2C-122.6765&skip=0&limit=40&user_key=';
var apiKey = require('./../.env').apiKey;


function Doctor() {
}

Doctor.prototype.getDoctors = function(issue, displayDoctors) {
   $.get(url + issue + location + apiKey)
    .then(function(response) {
      var allDoctors = [];
      response.data.forEach(function(doctor) {
      var newDoctor = {};
      newDoctor.name = doctor.profile.first_name + " " + doctor.profile.last_name;
      newDoctor.gender = doctor.profile.gender;
      newDoctor.title = doctor.profile.title;
      newDoctor.specialties = doctor.specialties[0].name;
      newDoctor.practice = doctor.practices[0].name;
        allDoctors.push(newDoctor);
    });
    displayDoctors(allDoctors);
  })

  .fail(function(error) {
     $('#error').text(error.responseJSON.message);
  });
};


exports.doctorModule = Doctor;
