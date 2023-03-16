alert ("საიტი სატესტო რეჟიმშია!");

// console.log ($("#burger"));

// document.getElementById ("burger");
// console.log (document.getElementById ("burger"));
// $(document).ready(function() {
//     console.log();
//     $('#burger').on('click', function() {
//         // console.log ("clicked");
//         // $("#headerNav").addClass("active");
//         if($("#headerNav").hasClass("active")){
//             $("#headerNav").removeClass("active");
//         }else {
//             $("#headerNav").addClass("active");
//         }
//     })
// });

$(document).ready(function() {
    console.log();
    $('#burger').on('click', function() {
        $("#headerNav").toggleClass("active");
    });
});

$(document).ready(function() {
    console.log();
    $('#seeMore').on('click', function() {
    window.open("https://www.behance.net/gallery/163002689/Zaza-Animated-short-film")
    });
});

$(document).ready(function() {
    console.log();
    $('#facebook').on('click', function() {
    window.open("https://www.facebook.com/GanimationSlim")
    });
});

$(document).ready(function() {
    console.log();
    $('#instagram').on('click', function() {
    window.open("https://www.instagram.com/giogorelashvili/")
    });
});

$(document).ready(function() {
    console.log();
    $('#youtube').on('click', function() {
    window.open("https://www.youtube.com/channel/UCSWQme6-b5WPCFBKN-akuvg")
    });
});

$(document).ready(function() {
    console.log();
    $('#aboutProject').on('click', function() {
    window.open("https://www.behance.net/gallery/163002689/Zaza-Animated-short-film")
    });
});

$(document).ready(function() {
    console.log();
    $('#shortFilmZaza').on('click', function() {
    window.open("https://www.youtube.com/watch?v=dTU12bZoX6A")
    });
});

$(document).ready(function() {
    console.log();
    $('#annecy').on('click', function() {
    window.open("https://www.annecyfestival.com/home")
    });
});


