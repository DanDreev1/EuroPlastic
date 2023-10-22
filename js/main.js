document.getElementById("lang").addEventListener("click", function() {
    let target = document.getElementById("hide__lang");
    let nav = document.getElementById("nav");
    if (target.style.display === "inline-block") {
        nav.style.padding = "25px 0";
        target.style.display = "none"; // Hide the element
    } else {
        nav.style.padding = "25px 0 70px";
        target.style.display = "inline-block"; // Show the element
    }
});