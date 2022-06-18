const form = document.querySelector('form') as HTMLFormElement;
const email = document.querySelector('.username') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const submit = document.querySelector('.submit') as HTMLInputElement;

form.addEventListener('submit', (e) => { 
    e.preventDefault();
});