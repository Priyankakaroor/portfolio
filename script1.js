
// Open Popup
function openPopup(title, description, imageSrc) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-description").innerText = description;
    document.getElementById("popup-image").src = imageSrc;
    document.getElementById("popup-modal").style.display = "flex";
}

// Close Popup
function closePopup() {
    document.getElementById("popup-modal").style.display = "none";
}
// Get modal element
var modal = document.getElementById("popupModal");

// Get the button that opens the modal
var btn = document.getElementById("openPopupBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
