var apiKey = require('./../.env').apiKey;

function Doctor() {
}

exports.getDoctors = function(medicalIssue, searchResults) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key='+apiKey)
    .then(function(result) {
      console.log(result);
      var allDoctors=[];
      result.data.forEach(function(doctor) {
        var individualDoctor = {};

        individualDoctor.practiceName = data.practices.name;
        individualDoctor.phone = data.practices.phones.number;
        individualDoctor.website = doctor.website; 
        individualDoctor.office = doctor.name;
        individualDoctor.address = doctor.visit_address;

        allDoctors.push(individualDoctor);
    })
    .fail(function(error){
      $('#error').text(error.responseJSON.message);
    });
  });
};

exports.doctorModule = Doctor;
