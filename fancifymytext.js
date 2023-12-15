function biggerButton() 
{
    alert("Hello, world!");
}

function sendAlert() 
{
    alert("Radio Button clicked");
}

function applyStyles() {
    var textArea = document.getElementById("textInputArea");
    textArea.style.fontSize = "24pt";

    var fancyShmancyRadioButton = document.getElementById("FancyShmancyChoice");
    if (fancyShmancyRadioButton.checked) 
    {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

function removeStyles() 
{
    var textArea = document.getElementById("textInput");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}