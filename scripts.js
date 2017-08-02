

$(document).ready(function(){
	$("#blogpage").toggle()
});


$(document).ready(function(){
	$("#blogbutton").click(function(){
	$("#mainpage").fadeOut("fast");
	$("#blogpage").toggle()
	$("#blogpage").fadeIn("fast");

	});
});
