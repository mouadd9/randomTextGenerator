 
let form = document.getElementById('myForm');
let button = document.getElementById('button');



const collectFormData = () => {
    const formData = {
        name: form.elements['name'].value,
        surname: form.elements['surname'].value
    }
    return formData;
}
button.addEventListener('click', collectFormData);

export {collectFormData}



