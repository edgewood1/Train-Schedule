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
var movies=[];
var markup;

// Read 

database.ref().limitToLast(2).on("child_added", function(snapshot) {

  //make sure that there's something in the database if you're going to read it 
  var exists = snapshot.exists();
  if (exists) {
    var data = snapshot.val();
    movies.push(data);   

  for (i=0; i<movies.length; i++){
//assign html markup along with the variables, which are then dynamically inserted into the html
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
//#data-table is an empty <tbody> tag that is filled in
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

  //save to database -  
  
  database.ref().push({
    
    name: name,
    destination: destination,
    time: time,
    frequency: frequency,

  });  

});