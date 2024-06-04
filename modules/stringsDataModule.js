import { user } from "./userController.js";
import { MessageGenerator } from "./message.js";

const returnString = (formData) => {
    const newUser =  new user(formData.name, formData.surname);
    const name = newUser.getName();
    const surname = newUser.getSurname();
    let message = new MessageGenerator();
    const highlightedName = `<span class="color dm-serif-display-pseudo">${surname} ${name}</span>`;
    let messages = message.generateMessage(highlightedName);
    document.getElementById("text").innerHTML = messages;
}

export {returnString};
