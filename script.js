const imageSelect = document.getElementById('imageSelect');
        const displayedImage = document.getElementById('displayedImage');

        imageSelect.addEventListener("change", function () {
            const selectedValue = imageSelect.value; // Get the selected value from the dropdown
            const imageUrl = getImageUrl(selectedValue); // Call the function to get the image URL

            if (imageUrl) {
                displayedImage.src = imageUrl; // Set the image source
            } else {
                // Set a default image URL if there's an error or no match
                displayedImage.src = "/Images/defult.jpg";
            }
        });

        function getImageUrl(selectedValue) {
            switch (selectedValue) {
                case "image1":
                    return "Images/Image1.png";
                case "image2":
                    return "Images/Image2.png";
                case "image3":
                    return "Images/Image3.png";
                case "image4":
                    return "Images/Image4.png";
                case "image5":
                    return "Images/Image5.png";
                default:
                    return ""; // Return an empty string if no match is found
            }
        }

// const imageSelect = document.getElementById('imageSelect');
// const displayedImage = document.getElementById('displayedImage');


// imageSelect.addEventListener('change', function () {
 
//     const selectedImage = imageSelect.value;

    
//     displayedImage.src = selectedImage;
// });


// displayedImage.src = imageSelect.value;



// // lag logikk for hva som skal skje når options i imageSelector blir endret:
// const imageSelect = document.getElementById('imageSelect');
// const displayedImage = document.getElementById('displayedImage');

// imageSelector.addEventListener("change", function () {

//     if (variabel2) {
//         variabel1.src = variabel2;
//     } else {
//         variabel1.src = "URL TIL BILDE SOM VISES OM DET BLIR EN FEIL";
//     }
// });

// function funksjonsNavn(Imageselect) {
//     switch (displayedImage) {
//         case "image1":
//             return "Images/Image1.png";
//         case "image2":
//             return "Images/Image2.png";
//         case "image3":
//             return "Images/Image3.png";
//         case "image4":
//             return "Images/Image4.png";
//         case "image5":
//             return "Images/Image5.png";
//         default:
//             return "";
//     }
// }