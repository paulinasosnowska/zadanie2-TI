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

$("#formularz").click(function(){
		$(".content_load").load("formularz.htm");
		});
		
$(document).ready(function(){	
$("#btt_wyslij").click(function() {
		$("#imie").css('background-color', '#FFFFFF');
		if ($("#imie").val().length == 0) {
			$("#imie").css('background-color', 'yellow');

		}
	});
	$("#btt_wyslij").click(function() {
		$("#nazwisko").css('background-color', '#FFFFFF');
		if ($("#nazwisko").val().length == 0) {
			$("#nazwisko").css('background-color', 'yellow');

		}
	});
	$("#btt_wyslij").click(function() {
		$("#email").css('background-color', '#FFFFFF');
		if ($("#email").val().length == 0) {
			$("#email").css('background-color', 'yellow');

		}
	});
	$("#btt_wyslij").click(function() {
		$("#email").css('background-color', 'yellow');

		var mail = /\S+@\S+\.\S+/;
		if (!mail.test($("#email").val())) {
			alert("Zły ades e-mail");
			$("#email").css('background-color', 'yellow');

		};
	});
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
		