

$(document).ready(function(){
	$("#blogpage").toggle()
	$("#slideshow-bob").toggle()
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

// slideshow
$(document).ready(function(){
	$("#photosbutton").click(function(){
	$("#blogpage").fadeOut("fast");
	$("#slideshow-bob").toggle()
	$("#slideshow-bob").fadeIn("fast");
	});
});

//videos 
$(document).ready(function(){
	$("#videosbutton").click(function(){
	$("#blogpage").fadeOut("fast");
	$("#videos").toggle()
	$("#videos").fadeIn("fast");
	});
});

//back to blog from videos
$(document).ready(function(){
	$("#backtoblog2").click(function(){
	$("#videos").fadeOut("fast");
	$("#videos").toggle()
	$("#blogpage").fadeIn("fast");

	});
});

//back to blog page from photos
$(document).ready(function(){
	$("#backtoblog").click(function(){
	$("#slideshow-bob").fadeOut("fast");
	$("#slideshow-bob").toggle()
	$("#blogpage").fadeIn("fast");

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






/*4 videos page*/
$(document).ready(function() {
  $('.video-gallery').magnificPopup({
  delegate: 'a', 
  type: 'iframe',
  gallery:{
    enabled:true
  }
});
});
