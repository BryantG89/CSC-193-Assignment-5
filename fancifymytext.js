const fancySchmancy = document.getElementById("FancyShmancyChoice");
const boringBetty = document.getElementById("BoringBettyChoice");


fancySchmancy.addEventListener("change", applyStyles);
boringBetty.addEventListener("change", removeStyles);


function biggerButton() 
{
   document.getElementById("textInputArea").style.fontSize = "24px";
}

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
    textArea.style.fontSize = "12px";
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

// function fancifyOption() {
//     document.getElementById("inputTextArea").style.color = "blue";
//     document.getElementById("inputTextArea").style.fontWeight = "bold";
//     document.getElementById("inputTextArea").style.textDecoration = "underline";
//   }
  
//   function boringOption() {
//     document.getElementById("myTextArea").style.color = "black";
//     document.getElementById("myTextArea").style.fontWeight = "normal";
//     document.getElementById("myTextArea").style.textDecoration = "none";
//   }