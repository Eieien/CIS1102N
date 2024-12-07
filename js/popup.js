// Get the modal
var modal = document.getElementById("portfolio-selector");

// Get the button that opens the modal
var btn = document.getElementById("See-portfolios");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close")) {
        modal.style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}