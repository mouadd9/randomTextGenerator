import {collectFormData } from "./main.js";

class user {
    constructor(name, surname){
        this._name = name;
        this._surname = surname;
    }
}
 
const newUser = new user(collectFormData().name, collectFormData().surname);

export {newUser};