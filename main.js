
import {returnString} from "./modules/messageController.js"

let form = document.getElementById('myForm');
let button = document.getElementById('button');
let formData = {};
let test = 0;
button.addEventListener('click', ()=>{
 formData = {
        name: form.elements['name'].value,
        surname: form.elements['surname'].value
    }
    if (formData.name && formData.surname) {
        document.getElementById('error').style.display = 'none';
        returnString(formData);
    }
    else{
        document.getElementById('error').style.display = 'block';
        
    }
 
});

   


