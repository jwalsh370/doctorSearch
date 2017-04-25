var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(zip, distance, issue, displayDoctors) {
   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + issue + '&location=' + distance + '%2C100&user_location=' + zip + '&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
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
