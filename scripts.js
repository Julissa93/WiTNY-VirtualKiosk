

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

$(document).ready(function(){
	$("#backtomain").click(function(){
	$("#blogpage").fadeOut("fast");
	$("#blogpage").toggle()
	$("#mainpage").fadeIn("fast");

	});
});

