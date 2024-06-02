import {collectFormData } from "../main.js";
import {user} from "../classes/user.js";
 
const newUser = new user(collectFormData().name, collectFormData().surname);

