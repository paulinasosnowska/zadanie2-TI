$(document).ready(function() {
	$('#NAGLOWEK').click(function() {
		$(this).fadeOut('slow');
	});
});
$(document).ready(function() {
$("#strona_glowna").click(function() {
	$('body').load("index.htm");
});
});


$(document).ready(function() {
	$('#inner').mouseenter(function() {
		$(this).animate({
			width : "150px",
			height : "150px"
		}, 1500);
		$(this).fadeTo('slow', 0.85);
	});
	
$(document).ready(function(){
      alert("Witamy na stronie!");
   });
});

var imageCount = 1;
var total = 5;

function photo(x) {
	var image = document.getElementById('image');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "img/img"+ imageCount +".jpg";
	}
	
window.setInterval(function photoA() {
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "img/img"+ imageCount +".jpg";
	},5000);

$(".change_layout").click(function() {
		$("table").css("border", "1px solid black");
		$("#STOPKA").css("color", "black");
});
		