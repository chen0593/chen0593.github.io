window.onload = init;

function init() {
	document.querySelector('#profileForm').onsubmit=formSubmit;
}

function formSubmit(e) {
	e.preventDefault();

   $(".overlay-container").fadeIn(1000, function(){
   		updateCard();
   });
   
	$('.overlay-container').delay(500).fadeOut(500);
}

function updateCard () {
	document.querySelector('#ipname').innerHTML=document.forms["profileForm"]["fname"].value;

	document.querySelector('#ipemail').innerHTML=document.forms["profileForm"]["email"].value;

	document.querySelector('#ipadd').innerHTML=document.forms["profileForm"]["address"].value + ", " + document.forms["profileForm"]["city"].value;

	document.querySelector('#ippc').innerHTML=document.forms["profileForm"]["province"].value + ", " + document.forms["profileForm"]["pc"].value;
}