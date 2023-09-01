/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
const infoText = document.querySelector('.info-text');
const points = document.querySelectorAll('.point');
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
points.forEach(point => {
    point.addEventListener('click', () => {
      if (point.style.top === '100px' && point.style.left === '150px') {
        infoText.textContent = "";
      } else if (point.style.top === '200px' && point.style.left === '300px') {
        infoText.textContent = "";
      } else if (point.style.top === '50px' && point.style.left === '400px') {
        infoText.textContent = "";
      }
      // Agrega más condiciones para otros puntos de interés
    });
  });
  points.forEach(point => {
      const cloud = point.querySelector('.cloud');
      const trueButton = cloud.querySelector('.true-button');
      const falseButton = cloud.querySelector('.false-button');
      const correctFeedback = cloud.querySelector('.feedback-correct');
      const incorrectFeedback = cloud.querySelector('.feedback-incorrect');
    
      trueButton.addEventListener('click', () => {
        // Simulando la verificación de respuesta verdadera
        const isCorrect = false; // Cambia esto según la lógica de tu juego
        showFeedback(isCorrect, correctFeedback, incorrectFeedback);
      });
    
      falseButton.addEventListener('click', () => {
        // Simulando la verificación de respuesta falsa
        const isCorrect = true; // Cambia esto según la lógica de tu juego
        showFeedback(isCorrect, correctFeedback, incorrectFeedback);
      });
    });
    
    function showFeedback(isCorrect, correctFeedback, incorrectFeedback) {
      if (isCorrect) {
        correctFeedback.classList.add('animate-feedback');
        correctFeedback.style.display = 'block';
        setTimeout(() => {
          correctFeedback.classList.remove('animate-feedback');
          correctFeedback.style.display = 'none';
        }, 2000); // 2000 ms (2 segundos) para mostrar la animación
      } else {
        incorrectFeedback.classList.add('animate-feedback');
        incorrectFeedback.style.display = 'block';
        setTimeout(() => {
          incorrectFeedback.classList.remove('animate-feedback');
          incorrectFeedback.style.display = 'none';
        }, 2000); // 2000 ms (2 segundos) para mostrar la animación
      }
    }
    