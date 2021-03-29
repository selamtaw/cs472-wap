function handleDecorator() {
    increaseFont();
    setInterval(increaseFont, 500);
}

function increaseFont(){
    let textArea = document.getElementById("text-area");
    let fontSize = textArea.style.fontSize;
    if(!parseInt(fontSize))
    {
        textArea.style.fontSize = "12pt";

    }
    // alert('Hello, World' + textArea.style.fontSize);
    textArea.style.fontSize = parseInt(textArea.style.fontSize) + 2 + "pt";
    console.log(textArea.style.fontSize);
}

function handleBling() {
    let checked = document.getElementById("bling").checked;
    let textArea = document.getElementById("text-area");
    alert(checked);
    if(checked){
        textArea.style.fontWeight = "bold";
        textArea.style.textDecoration = "underline";
        textArea.style.color = "green";
        // document.body.style.backgroundImage = "url('./images/paper.gif')";
        document.body.style.backgroundColor = "greenyellow";
    }
    else{
        textArea.style.fontWeight = "normal";
        textArea.style.textDecoration = "none";
        textArea.style.color = "black";
        document.body.style.backgroundColor = "white";

    }
}


function handlePigLatin(){
    let textArea = document.getElementById("text-area");
    let words = textArea.value.split(" ");
    console.log(words);
    for(let i = 0; i < words.length; i++){
        let firstChar = words[i].charAt(0)
        if(firstChar === "a" || firstChar === "e" || firstChar === "i"||
            firstChar === "o" || firstChar === "u"){
            console.log(firstChar + "\n"+ words[i].substring(1));
            words[i] = words[i].substring(1).concat(firstChar.concat("way"));
        }
        else{
            words[i] = words[i].substring(1).concat(firstChar.concat("ay"));
        }
    }
    textArea.value = words.toString().replace(",", " ");

}

function handleMalkovitch(){
    let textArea = document.getElementById("text-area");
    let words = textArea.value.split(" ");
    console.log(words);
    for(let i = 0; i < words.length; i++){
        if(words[i].length >= 5)
            words[i] = "Malkovich";
    }
    textArea.value = words.toString().replace(",", " ");

}