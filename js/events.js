// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

// let last_known_scroll_position = 0;
// let ticking = false;

// function doSomething(scroll_pos) {

//     let navbar = document.querySelector('nav');
//     navbar.classList.add('sticky-top')
// }

// window.addEventListener('scroll', function(e) {
//     let last_known_scroll_position = window.scrollY,
//     navbar = document.querySelector('#hidden-navbar');

//     if (last_known_scroll_position > 870) {
//         window.requestAnimationFrame(function() {
//             navbar.classList.remove('hidden')
//         });
//     } else {
//         window.requestAnimationFrame(function() {
//             navbar.classList.add('hidden')
//         });
//     }
// });