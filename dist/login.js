"use strict";
const form = document.querySelector('form');
const email = document.querySelector('.username');
const password = document.querySelector('.password');
const submit = document.querySelector('.submit');
form.addEventListener('submit', (e) => {
    e.preventDefault();
});
