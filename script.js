
const imageSelect = document.getElementById('imageSelect');
const displayedImage = document.getElementById('displayedImage');


imageSelect.addEventListener('change', function () {
 
    const selectedImage = imageSelect.value;

    
    displayedImage.src = selectedImage;
});


displayedImage.src = imageSelect.value;