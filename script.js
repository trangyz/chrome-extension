// const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');
// // console.log(text);
// for (let i = 0; i < text.length; i++) {
//     const insideElement = text[i].innerHTML;

//     let subString = '';
//     let originalString = '';
//     let inBracket = false;
//     let firstLetter = false;
//     for (let j = 0; j < insideElement.length; j++) {
//         if (insideElement[j] === "<") {
//             inBracket = true;
//             continue;
//         }
//         if (inBracket) {
//             continue;
//         }
//         if (insideElement[j] === ">") {
//             inBracket = false;
//             firstLetter = true;
//             continue;
//         }
//         if (insideElement[j - 1] === " ") {
//             firstLetter = true;
//         }
//         if (insideElement[j - 1] === ">") {
//             firstLetter = true;
//         }
//         if (insideElement[j - 1] === undefined) {
//             firstLetter = true;
//         }
//         if (firstLetter) {
//             subString += "<b>";
//             subString += insideElement[j];
//             subString += "</b>";
//             firstLetter = false;
//             originalString += insideElement[j];
//         } else {
//             subString += insideElement[j];
//             originalString += insideElement[j];
//         }

//     }
//     if (subString) {
//         text[i].innerHTML = text[i].innerHTML.replace(originalString, subString);
//         console.log('after the loop, innerHTML is ', text[i].innerHTML)
//     }
// }

const elements = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');


elements.forEach(element => {
    Array.from(element.childNodes).forEach(child => {
        if (child.nodeType === 3) { // Check if the node is a text node
            // create a random color to add during the bold phase
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            let modifiedText = child.nodeValue.replace(/\b(\w)/g, `<b style = "color: #${randomColor}" >$1</b>`);
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = modifiedText;

            while (tempDiv.firstChild) {
                element.insertBefore(tempDiv.firstChild, child);
            }
            
            element.removeChild(child);
        }
    });
});
