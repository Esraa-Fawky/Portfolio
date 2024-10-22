//                  **************************       Loading      **************************                    //

$(document).ready(function () {
    $("#loading").fadeOut(1800, function () {
        $("body").css("overflow", "auto")
    })
})

//                  **************************       colorBox      **************************                    //


const colorOptions = [
    { mainColor: '#E04343', secondaryColor: '#FFE800' }, // color1
    { mainColor: '#FF69B4', secondaryColor: '#8BC34A' }, // color2
    { mainColor: '#2E073F', secondaryColor: '#EBD3F8' }, // color3
    { mainColor: '#55AD9B', secondaryColor: '#F1F8E8' }, // color4
    { mainColor: '#C96868', secondaryColor: '#7EACB5' }, // color5
    { mainColor: '#32012F', secondaryColor: '#F97300' }  // color6
];

$("#colorChange .colorOptions li").click(function () {
    const index = $(this).index();
    
    if (index >= 0 && index < colorOptions.length) {
        document.documentElement.style.setProperty('--mainColor', colorOptions[index].mainColor);
        document.documentElement.style.setProperty('--secondryColor', colorOptions[index].secondaryColor);
    }
});

$(document).ready(function () {
    let optionsWidth = $(".colorOptions").outerWidth();
    $("#colorChange").css("left", -optionsWidth);
});

$("#colorChange i").click(function () {
    let optionsWidth = $(".colorOptions").outerWidth();
    if ($("#colorChange").css("left") == "0px") {
        $("#colorChange").animate({ "left": -optionsWidth }, 1000);
    } else {
        $("#colorChange").animate({ "left": 0 }, 900);
    }
})

//                  **************************       navbar   , arrowTop      **************************                    //

$(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
})


let aboutOffset = $("#about").offset().top;

$(window).scroll(function () {
    let currentOffset = $(window).scrollTop();
    if (currentOffset > aboutOffset) {
        $(".navbar").css({ "background-color": "rgba(0,0,0,0.5)", "transition": "all 1s" });
        $(".nav-link, .navbar-brand, .social-icons i").css({ "color": "#FFF0D1 " });

        $("#arrowTop").fadeIn(1000);
    } else {
        $(".navbar").css("background-color", "transparent");
        $(".nav-link, .navbar-brand, .social-icons i").css({ "color": "#333 " });

        $("#arrowTop").fadeOut(1000);
    }
});


$("#arrowTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800)
})



//            **************************             home page            **************************                       //


function animateHomeImg() {
    $(".homeImg").animate({ "top": "-10px" }, 1000)
        .animate({ "top": "0px" }, 1000)
        .animate({ "top": "15px" }, 1000, function () {
            animateHomeImg();
        });
}
animateHomeImg();

$(".caption a").append("<i class='fa-solid fa-arrow-right fa-lg'></i>");



//               **************************             testimonial                **************************               //      

$(document).ready(function () {
    $('.testimonialsContainer').owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        center: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 3
            },
            1200: {
                items: 4
            }
        },
        autoplayHoverPause: true,
        // animateOut: 'slideOutDown',
        // animateIn: 'flipInX',
    });
});
//               **************************             Contact(FORM)                **************************               //      

let inputs = document.querySelectorAll('input');
let alertMessage = document.getElementById('alert-message');
let btn = document.getElementById('btn');

btn.addEventListener("click", function (event) {
    let allFilled = true;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            allFilled = false; 
            break; 
        }
    }
    if (!allFilled) {
        alertMessage.classList.remove("d-none"); 
        event.preventDefault();
    } else {
        alertMessage.classList.add("d-none");
    }
});




