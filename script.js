// Define a function that contains the code to position the elements
function positionElements() {
    // Get all elements with the specified class name
    var elements = document.querySelectorAll(".draggable-element");

    // Loop through each element and set its position to a random value
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.style.left = Math.random() * 100 + "px";
        element.style.top = Math.random() * 100 + "px";
    }
}