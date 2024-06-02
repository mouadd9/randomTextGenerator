
class user {
    constructor(name, surname){
        this._name = name;
        this._surname = surname;
    }
    
    static create(formData){
        
        return new user(formData.name, formData.surname);
    }
}

export {user};