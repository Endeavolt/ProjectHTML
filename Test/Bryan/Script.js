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
          $('.btn').removeClass("show");
      }
      if(this.scrollY > 1980 ){
        $('.btn').addClass("end");
    }else{
        $('.btn').removeClass("end");
    }
  });
  
  // slide-up script
  $('.btn').click(function(){
      $('html').animate({scrollTop : 0})
  });

});




function button(){
  console.log("Button Click");

}


function initMap() {
    // The location of Uluru
    const uluru = { lat: 47.670722, lng: -2.960611 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
