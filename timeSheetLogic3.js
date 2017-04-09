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
var firstArrival;
var frequency;
var movies=[];
var markup;
var currentTime;
  var timeDifference; 
  var addTime;
var interval;  
var firstTime;
var currentTime;
var diffTime;
var tRemainder;
var tMinutes;
var nextTrain;
// Read 

var d = new Date(); // for now
console.log(d);
var h=d.getHours(); // => 9
var m=d.getMinutes(); // =>  30
var s=d.getSeconds(); // => 51


database.ref().limitToLast(5).on("child_added", function(snapshot) {

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
      movies[i].nextTrain + 
      "</td></tr>+"
       movies[i].tMinutes + 
      "</td></tr>+"
      ;
      }
//#data-table is an empty <tbody> tag that is filled in
      $("#data-table").append(markup);
}
});

/// WRITE

$("#submit-btn").on("click", function(event) {
  event.preventDefault();

  //grab the user input

  name = $("#name").val().trim();
  destination = $("#destination").val().trim();
  firstArrival = $("#time").val().trim();
  frequency = $("#frequency").val().trim();

  firstTime=moment(firstArrival, "hh:mm").subtract(1, "years");
   currentTime=moment();
   diffTime=moment().diff(moment(firstTime), "minutes");
   tRemainder=diffTime%frequency;
   tMinutes=frequency-tRemainder;
   nextTrain=moment().add(tMinutes, "minutes");

  
  database.ref().push({
    
    name: name,
    destination: destination,
    nextTrain: nextTrain,
    frequency: frequency,
    tMinutes: tMinutes


  });  

});