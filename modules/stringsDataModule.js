import { user } from "./userController.js";

let lastMessageIndex = -1;

const returnString = (formData) => {
    const { _name: name, _surname: surname } =  user.create(formData);
    const highlightedName = `<span class="color dm-serif-display-pseudo">${surname} ${name}</span>`;

    let messages = [
        `${highlightedName}, we are happy to inform you that you won a cat !!`,
        `${highlightedName}, you are loved and cared for.`,
        `Have a blessed day, ${highlightedName}.`,
        `kill yourself, oh you're white, thought you were a nigger for a while<br> MY BAD !`,
        `kihl houwa lah`,
        `${highlightedName} is god's failure`
    ];

    let index;
    do {
        index = Math.floor(Math.random() * messages.length);
    } while (messages.length > 1 && index === lastMessageIndex); 

    lastMessageIndex = index;
    document.getElementById("text").innerHTML = messages[index];
}

export {returnString};
