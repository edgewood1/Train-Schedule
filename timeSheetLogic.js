// Initialize Firebase
var config = {
  apiKey: "AIzaSyDwfaeenpZiW3hfDMJD6WATZZXVru1444o",
  authDomain: "sample-afdc6.firebaseapp.com",
  databaseURL: "https://sample-afdc6.firebaseio.com",
  projectId: "sample-afdc6",
  storageBucket: "sample-afdc6.appspot.com",
  messagingSenderId: "480750601306"
};
firebase.initializeApp(config);

var database = firebase.database();

var name;
var destination;
var time;
var frequency;

//use a counter to name each movie
var counter = 0;

// READ 

database.ref().on("value", function(snapshot) {

  //make sure that there's something in the database if you're going to read it 
  var exists = snapshot.exists();
  if (exists) {
    //if data exists, place in variable
    var data = snapshot.val();

    //how many movies were in the database? 
    var number = data.length;

    //grab these movie properties -
    for (var i = 0; i < number; i++) {

      //grab the movie property "name" -  here, we're only grabbing the name of a movie. our app uses a different name - I think "title"
      var movieName = (data[i].name);
      console.log(movieName);
    }

    //grab the counter for adding more movies in the future
    counter = numberOfMovies;

      for (i=0; i<2; i++){
      markup = "<tr><td>"+
      movies[i].name+
      "</td><td>" + 
      movies[i].destination + 
      "</td><td>" + 
      movies[i].frequency + 
      "</td></tr>"+
      movies[i].time + 
      "</td></tr>"
      ;
console.log(movies[i].name);
      $("#data-table").append(markup);
      }
  }
});

/// WRITE

$("#submit-btn").on("click", function(event) {
  event.preventDefault();

  //grab the user input

  name = $("#name").val().trim();
  destination = $("#destination").val().trim();
  time = $("#time").val().trim();
  frequency = $("#frequency").val().trim();

  //save to database - use counter variable to save each movie. 

  database.ref(counter).set({
    name: name,
    destination: destination,
    time: time,
    frequency: frequency,
    counter: counter
  }); //database set

});