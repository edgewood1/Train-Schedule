
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

var database=firebase.database();

	var name;
	var destination;
	var time;
	var frequency;
	var counter=0;

// READ 

database.ref().on("value", function(snapshot) {

//make sure that there's something in the database if you're going to read it	
var exists=snapshot.exists();
if (exists) {

//grab the data in the database
  var data = snapshot.val();

  //how many sets of data are there? 
  var numberOfMovies=data.length;

// iterate through the data. 
for (var i=0; i<numberOfMovies; i++){
 var name=(data[i].title);
 var path=(data[i].posterPath);
 console.log(name + posterPath);
}

//grab the counter for adding more movies
 counter=numberOfMovies;
}
});

  /// WRITE

var movies={
};

 $("#submit-btn").on("click", function (event){
 	event.preventDefault();

 	name=$("#name").val().trim();
 	var title=$("#destination").val().trim();
 	var posterPath=$("#time").val().trim();
 	// frequency=$("#frequency").val().trim();


   database.ref(counter).set({
   			name: movies[name].title,
   			path: movies[name].posterPath,
   			counter:counter
  			 }); //database set

// counter++;

});