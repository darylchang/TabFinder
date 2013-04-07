function getText(){
    return document.body.innerText;
}
function getHTML(){
    return document.body.outerHTML;
}
console.log(getText());             //Gives you all the text on the page
console.log(getHTML());             //Gives you the whole HTML of the page

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) { 
        if(request.method == "getText"){
            sendResponse({data: document.body.innerText, method: "getText"}); //same as innerText
        }
    }
);