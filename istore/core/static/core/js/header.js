// let isMobile = {
//     Android: function () { return navigator.userAgent.match(/Android/i); },
//     BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
//     iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
//     Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
//     Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
//     any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
// };

// let device = document.querySelector('.menu');
// if (device) {
//     if (isMobile.any()) {
//         device.classList.add('touch');
//         let arrow = document.querySelectorAll(`.arrow`);

//         for (i = 0; i < arrow.length; i++) {
//             let thisLink = arrow[i].previousElementSibling;
//             let subMenu = arrow[i].nextElementSibling;
//             let thisArrow = arrow[i];

//             thisLink.classList.add('parent');
//             arrow[i].addEventListener('click', function () {
//                 subMenu.classList.toggle('open');
//                 thisArrow.classList.toggle('active');
//             })
//         }
//     } else {
//         device.classList.add('mouse');
//     }
// }



