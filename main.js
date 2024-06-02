 
let form = document.getElementById('myForm');
let button = document.getElementById('button');

button.addEventListener('click', collectFormData);

const collectFormData = () => {
    const formData = {
        name: form.elements['name'].value,
        surname: form.elements['surname'].value
    }
    return formData;
}

export {collectFormData}



