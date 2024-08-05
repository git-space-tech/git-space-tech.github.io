// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


$('.custom_slick_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.slick_slider_nav',
    responsive: [{
        breakpoint: 768,
        settings: {
            dots: false
        }
    }]
})

$('.slick_slider_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.custom_slick_slider',
    centerMode: false,
    focusOnSelect: true,
    variableWidth: true
});

// Students
function selectOption(button) {
    var buttons = document.querySelectorAll('.option-button');
    buttons.forEach((btn) => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
    console.log("Selected: " + button.getAttribute('data-value'));
    let value = button.getAttribute('data-value');
    if(value === "school"){
        document.getElementById('college').style.display = 'none';
    }else{
        document.getElementById('school').style.display = 'none';
    }
    document.getElementById(value).style.display = 'flex';
}




/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(25.381597705429346, 82.97646406714452),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}