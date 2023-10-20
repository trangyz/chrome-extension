const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');
// console.log(text);
for (let i = 0; i < text.length; i++) {
    const insideElement = text[i].innerHTML;
    console.log('innerHTML was originally',text[i].innerHTML);

    let subString = '';
    let originalString = '';
    let inBracket = false;
    let firstLetter = false;
    for (let j = 0; j < insideElement.length; j++) {
        // if the elemetn is an opening bracket, we are inside the bracket..
        if (insideElement[j] === "<") {
            inBracket = true;
        } else if (inBracket) {
            continue;
        } else if (insideElement[j] === ">") {
            inBracket = false;
            firstLetter = true;
        } else {
            if (insideElement[j - 1] === " ") {
                firstLetter = true;
                // originalString += insideElement[j];
                // subString += insidelement[j];
            };
            if (insideElement[j - 1] === ">") {
                firstLetter = true;
            }
            if (insideElement[j - 1] === undefined) {
                firstLetter = true;
            }
            if (firstLetter) {
                subString += "<b>";
                subString += insideElement[j];
                subString += "</b>";
                firstLetter = false;
                originalString += insideElement[j];
            } else {
                subString += insideElement[j];
                originalString += insideElement[j];
            }
        }
    }
    if (subString) {
        // console.log('to be replaced with subString',subString);
        // console.log('where the originalString was ', originalString);
        // console.log('after the loop, innerHTML is ', text[i].innerHTML)
        text[i].innerHTML = text[i].innerHTML.replace(originalString, subString);
        console.log('after the loop, innerHTML is ', text[i].innerHTML)
    }
}
