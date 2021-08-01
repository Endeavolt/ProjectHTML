$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY>20){
      $('.navbar').addClass("sticky");
  }else{
      $('.navbar').removeClass("sticky");
  }
      if(this.scrollY > 500){
          $('.btn').addClass("show");
      }else{
      }
    
  });
  


});




function button(){
  console.log("Button Click");

}

function initMap() {
  // The location of Uluru
  const uluru = { lat: 47.670722, lng: -2.960611 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}


// Email Sending 

(function() {
  // https://dashboard.emailjs.com/admin/integration
  emailjs.init("user_FOtjYlbaUcPGjYFU2V7vN");
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
    
      // these IDs from the previous steps
      emailjs.sendForm('service_byk8y77', 'template_7iqzmc7', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}

