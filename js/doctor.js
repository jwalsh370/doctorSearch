var apiKey = require('../.env').apiKey;

function Doctor() {
}

Doctor.prototype.findDoctorIssue = function(zip, distance, issue, allDoctors) {
   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + issue + '&location=' + location + '%2C100&user_location=' + location + '&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    var allDoctors = [];
    response.doctors.forEach(function(doctor){
      var newDoctor = {};
      newDoctor.name = doctor.first_name + " " + doctor.last_name;
      newDoctor.specialties = doctor.specialties;
      newDoctor.education = doctor.educations;
        allDoctors.push(newDoctor);
      newDoctor
    })
  }).fail(function(error) {
  });
};



exports.doctorModule = Doctor;
