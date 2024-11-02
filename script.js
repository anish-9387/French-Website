// Add event listeners to each food item
document.querySelectorAll("ul li strong").forEach(item => {
    item.addEventListener("click", () => {
        const imageName = item.getAttribute("data-img");

        // Set the image source for the popup based on the food item clicked
        const popupImage = document.querySelector(".popup-image");
        popupImage.src = `./Assets/${imageName}.jpg`;  // Assuming the images are named after data-img values

        // Show overlay and popup
        document.querySelector(".blur-overlay").style.display = "block";
        document.querySelector(".image-popup").style.display = "block";
    });
});

// Close the popup when the close button is clicked
document.querySelector(".close-btn").addEventListener("click", () => {
    document.querySelector(".blur-overlay").style.display = "none";
    document.querySelector(".image-popup").style.display = "none";
});
