var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.findDoctorIssue = function (issue, location) {
  return $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + issue + '&location=' + location + '%2C100&user_location=' + location + '&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    return DoctorResponse(response);
  }).fail(function(error) {
  });
};

  var DoctorResponse = function (response) {
        var allDoctors = [];
        response.data.forEach(doctor => {
          var newDoctor = {};
          newDoctor.name = doctor.profile.first_name + " " + doctor.profile.last_name;
          newDoctor.title = doctor.profile.title;
          // newDoctor.img = doctor.profile.image_url;
          newDoctor.bio = doctor.profile.bio;
          newDoctor.specialties = doctor.specialties;
          newDoctor.education = doctor.educations;
          // newDoctor.practices = doctor.practices.map(practice => {
          //   var prac = {};
          //   prac.name = practice.name;
          //   prac.newPatients = practice.accepts_new_patients;
          //   prac.location = {lat: practice.lat, lng: practice.lon};
          //   prac.distance = practice.distance;
          //   prac.address = practice.visit_address;
          //   prac.phone = practice.phones;
          //   return prac;
          });
          allDoctors.push(newDoctor);
        })
        return allDoctors;
      };

exports.doctorModule = Doctor;
