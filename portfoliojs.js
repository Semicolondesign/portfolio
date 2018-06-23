

// Quotes random generator
$(document).ready(function(){
var random = Math.floor((Math.random() * 3) + 1);
if (random == 1) {
$(".quote1").css("display","block");
} else if (random == 2) {
$(".quote2").css("display","block");
} else {
$(".quote3").css("display","block");
}
});

// Scrollto


$(document).ready(function(){
$('a[href^="#"]').on('click',function(e){
e.preventDefault();

var target = this.hash;
var $target = $(target);

$('html, body').animate({
	'scrollTop' : $target.offset().top
}, 1000, 'swing', function () {
	window.location.hash = target;
});


});

//main-text

$('.main-text-cont').on('click',function(e){
e.preventDefault();
});

$('div[class*="workhover"] a').on('click',function(){

$(this).closest(".imgcont").attr("name","bigview");
$(".blurrer").attr("name","active");
$(".positioner").attr("name","active");
$(".works").attr("name","hidden");
$(".closebtn").attr("name","active");
});

$('.closebtn').on('click',function(e){
e.preventDefault();

$('div[name="bigview"]').closest(".imgcont").attr("name","eki");
$(".blurrer").attr("name","");
$(".positioner").attr("name","");
$(".works").attr("name","");
$(".closebtn").attr("name","");

});

var int = 200;
$('.prev-btn').on('click',function(){
int--;

var txt1 = "He created my blog on Wordpress, what amazed me. He is very creative and I recommend him everybody who wants a website."
var txt2 = "He takes care of every detail, not like many web developer I've worked with, and he is very helpful. He made a good job on my website."
var txt3 = "Perfect work, awesome website, and great functionalities. I'm 100% satisfied." 
var txt4 = "Albert created me an eight page website with ecommerce functionality under a week. Perfect design, without any errors. I'd higly recommend him.";

var nam1 = "Ismail Musakhel";
var nam2 = "Navin Tamhanakar";
var nam3 = "Péter Nagy";
var nam4 = "Rudolf Lukeš";

if ( int % 4 == 1) { $('#inscenerev').text(txt1); $('#inscenename').text(nam1); } else if (int % 4 == 2) { $('#inscenerev').text(txt2); $('#inscenename').text(nam2); } else if (int % 4 == 3) { $('#inscenerev').text(txt3); $('#inscenename').text(nam3); } else if (int % 4 == 0) { $('#inscenerev').text(txt4); $('#inscenename').text(nam4); }
else { $('#inscenerev').text('error'); };


});

$('.next-btn').on('click',function(){
int++;

var txt1 = "He created my blog on Wordpress, what amazed me. He is very creative and I recommend him everybody who wants a website."
var txt2 = "He takes care of every detail, not like many web developer I've worked with, and he is very helpful. He made a good job on my website."
var txt3 = "Perfect work, awesome website, and great functionalities. I'm 100% satisfied." 
var txt4 = "Albert created me an eight page website with ecommerce functionality under a week. Excellent design, without any errors. I'd higly recommend him.";

var nam1 = "Ismail Musakhel";
var nam2 = "Navin Tamhanakar";
var nam3 = "Péter Nagy";
var nam4 = "Rudolf Lukeš";

if ( int % 4 == 1) { $('#inscenerev').text(txt1); $('#inscenename').text(nam1); } else if (int % 4 == 2) { $('#inscenerev').text(txt2); $('#inscenename').text(nam2); } else if (int % 4 == 3) { $('#inscenerev').text(txt3); $('#inscenename').text(nam3); } else if (int % 4 == 0) { $('#inscenerev').text(txt4); $('#inscenename').text(nam4); }
else { $('#inscenerev').text('error'); };
});


$('.contactme').on('submit',function(a){
a.preventDefault();

var email = $('#emailfield').val();
var message = $('#msgfield').val();

  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'lH7F2pAx5OAbysE3sxHF1g',
      'message': {
        'from_email': email,
        'to': [
          {
            'email': 'domotoralbert@gmail.com',
            'name': 'Albert Domotor',
            'type': 'to'
          }
        ],
        'subject': 'Message from portfolio site',
        'html': message
      }
    },
     error: function(xhr, status) {
    console.log(xhr.status); }
  });
   $('input , textarea').val('');
   $('input , textarea').attr('placeholder','Your message has been sent.');
  console.log('Your message has been sent!')
  $('.popup1').attr('id', 'active');
});

});
