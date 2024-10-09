"use strict";
class Person {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
const personForm = document.querySelector('form');
personForm === null || personForm === void 0 ? void 0 : personForm.addEventListener('submit', event => {
    event.preventDefault();
    const emailElem = document.getElementById("email");
    const passwordElem = document.getElementById("password");
    const newPerson = new Person(emailElem.value, passwordElem.value);
    console.log(newPerson);
});
