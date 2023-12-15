var clickCount = 0;

function biggerButton() 
{
    if (clickCount === 0)
    {
    alert("Hello, world!");
    clickCount++; 
    
    // Disable radio button after first click
    document.getElementById("biggerButton").disabled = true;

    // Enable the button with a time delay
    setTimeout(function()
    {
        document.getElementById("biggerButton").disabled = false;

    }, 1000);


    }
}

function sendAlert() 
{
    alert("Radio Buttons clicked");
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