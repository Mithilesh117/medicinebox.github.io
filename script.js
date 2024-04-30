
const container = document.querySelector('.container');

container.addEventListener('mousemove', function(event) {

    const percentage = event.clientX / container.offsetWidth;
   
    const shift = -50 + percentage * 100;

    container.style.backgroundPosition = `${shift}% center`;
});
