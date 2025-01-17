// Array of image sources and corresponding captions
const images = [
    'images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg' 
    , 'images/image7.jpg', 'images/image8.jpg'
];

const captions = [
    'Getting ready to start', 'My assistant is ready to go', 'Saw the task --> Got another coffee. Long day ahead', '"Rubberducking" my way through the lead task',
    'The pre-demo stress kicks in', 'Final meeting and almost wrapping up'
];

// Keep track of the current image index
let currentIndex = 0;

// Get the image element, caption, and buttons
const imageDisplay = document.getElementById('imageDisplay');
const imageCaption = document.getElementById('imageCaption');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Function to update the image and caption
function updateImage() {
    imageDisplay.src = images[currentIndex];
    imageCaption.textContent = captions[currentIndex];
}

// Event listener for the "previous" button (←)
prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Event listener for the "next" button (→)
nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Initialize the image and caption when the page loads
updateImage();