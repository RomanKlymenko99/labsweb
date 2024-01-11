function convertToImages() {
    var text = document.getElementById("source-text").value;
    var resultText = document.getElementById("result-text");
    resultText.innerHTML = "";

    for (var i = 0; i < text.length; i++) {
        var image = document.createElement("img");
        var imagePath = "images/" + text[i].toLowerCase() + ".png";
        image.src = imagePath;
        image.alt = text[i];

        resultText.appendChild(image);
    }
}