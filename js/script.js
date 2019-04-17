$(document).ready(function() {
	  $(".card").click(function(){
		console.log("Restaurant's Rest URL : https://api.myjson.com/bins/rh90o");
		$.get("demo_test.asp", function(data, status){
			alert("Data: " + data + "\nStatus: " + status);
		});
	  });	
});



