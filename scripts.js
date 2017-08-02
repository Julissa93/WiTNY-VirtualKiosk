

$(document).ready(function(){
	$("#blogpage").toggle()
	$("#announcements").toggle()
	$("#suggestions").toggle()
});

// blog
$(document).ready(function(){
	$("#blogbutton").click(function(){
	$("#mainpage").fadeOut("fast");
	$("#blogpage").toggle()
	$("#blogpage").fadeIn("fast");
	});
});

// announcements
$(document).ready(function(){
	$("#announcementsbutton").click(function(){
	$("#mainpage").fadeOut("fast");
	$("#announcements").toggle()
	$("#announcements").fadeIn("fast");
	});
});

// suggestions
$(document).ready(function(){
	$("#suggestionsbutton").click(function(){
	$("#mainpage").fadeOut("fast");
	$("#suggestions").toggle()
	$("#suggestions").fadeIn("fast");
	});
});

// back1
$(document).ready(function(){
	$("#backtomain").click(function(){
	$("#blogpage").fadeOut("fast");
	$("#blogpage").toggle()
	$("#mainpage").fadeIn("fast");

	});
});

// back2
$(document).ready(function(){
	$("#backtomain2").click(function(){
	$("#announcements").fadeOut("fast");
	$("#announcements").toggle()
	$("#mainpage").fadeIn("fast");

	});
});

// back3
$(document).ready(function(){
	$("#backtomain3").click(function(){
	$("#suggestions").fadeOut("fast");
	$("#suggestions").toggle()
	$("#mainpage").fadeIn("fast");

	});
});


