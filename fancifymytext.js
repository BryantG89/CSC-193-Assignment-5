const fancySchmancy = document.getElementById("FancyShmancyChoice");
const boringBetty = document.getElementById("BoringBettyChoice");


fancySchmancy.addEventListener("change", applyStyles);
boringBetty.addEventListener("change", removeStyles);

// Event Button for making input text size larger
function biggerButton() 
{
   document.getElementById("textInputArea").style.fontSize = "24px";
}

// Event Button for making "moo" string concatenation
function mooButton()
{
    var textArea = document.getElementById("textInputArea");
    var upperText = textArea.value.toUpperCase();
    var sentences = upperText.split(/([.!?]+)/);

    for (var i = 0; i < sentences.length; i += 2) 
    {
    var sentence = sentences[i];
        if (/\s/.test(sentence)) 
        {
            var words = sentence.split(/\s+/);
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    var newtext = sentences.join("");
    textArea.value = newtext;
}

// Event handler that alerts user when a font style has been picked
function sendAlert() 
{
    alert("A Font Style Was Chosen");
}

// Event handler that changes style when fancy schmancy button chosen
function applyStyles() 
{
  var fancyShmancyRadioButton = document.getElementById("FancyShmancyChoice");
    if (fancyShmancyRadioButton.checked) 
    {
        var textArea = document.getElementById("textInputArea");
        textArea.style.fontSize = "24px";
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

// Event handler that removes styles 
function removeStyles() 
{
    var textArea = document.getElementById("textInputArea");
    textArea.style.fontSize = "13px";
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

