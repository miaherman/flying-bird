window.onload = start;

/** The position of the bird relative to the left side of the page.*/
let left = 0;

/** Starts the program on page load. */
function start() {
   fly();
}

/** Sets an interval to make the bird 'fly' */
function fly() {
    setInterval(moveBirdToTheRight, 2)
}

/** Updates position of bird to the right */
function moveBirdToTheRight() {
    const bird = document.querySelector('img');

    // Update position
    left += 0.2;

    // Render position 
    bird.style.left = left + '%';
}

