// Mobile-navigation-menu
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

const toggleMenu = () => {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        menu.classList.add('showMenu');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
};

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
    (menuItem) => {
        menuItem.addEventListener('click', toggleMenu);
    },
);

// form validation

const form = document.getElementById('form_id');
const clientName = document.getElementById('fname'); // get the name
const email = document.getElementById('email'); // get the email
const messageType = document.querySelector('.errorMessage'); // get the message
const emailRegex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const comment = document.getElementById('textareaid');
let counter = 0;
const ParagraphError = document.querySelector('.Paragraph-errors');

// for setting errors for fname
const setError = (element, message) => {
    messageType.textContent = message;
    clientName.classList.add('error');
    clientName.classList.remove('success');
    ParagraphError.style.display = 'block';
};

// for setting errors for email
const setErrorEmail = (element, message) => {
    messageType.textContent = message;
    email.classList.add('error');
    email.classList.remove('success');
    ParagraphError.style.display = 'block';
};
// for setting errors for comment
const setErrorComment = (element, message) => {
    messageType.textContent = message;
    comment.classList.add('error');
    comment.classList.remove('success');
    ParagraphError.style.display = 'block';
};

// for setting the the success message
const setSuccess = () => {
    messageType.textContent = '';
    clientName.classList.add('success');
    clientName.classList.remove('error');
    email.classList.add('success');
    email.classList.remove('error');
    ParagraphError.style.display = 'block';
};

const validateInputs = () => {
    const usernameValue = clientName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = comment.value.trim();

    // name validation
    if (usernameValue === '') {
        setError(clientName, 'Username is required');
        return;
    }
    if (usernameValue.length > 30) {
        setError(clientName, 'Username should not exceed 30 characters or be less than 3');
        return;
    }
    if (usernameValue.length < 3) {
        setError(clientName, 'Username should not be less than 3');
        return;
    }
    setSuccess(clientName);
    counter += 1;

    // email validation
    if (emailValue === '') {
        setErrorEmail(email, 'Email is required');
        return;
    }
    if (emailValue !== emailValue.toLowerCase()) {
        setErrorEmail(email, 'Email should be in lowercase');
        return;
    }

    if (!emailRegex.test(emailValue)) {
        setErrorEmail(email, 'Please enter a valide email adress');
        return;
    }

    setSuccess(email);
    counter += 1;

    // comment validation
    if (messageValue === '') {
        setErrorComment(Comment, 'Please add a message');
    } else if (messageValue.split('').length > 500) {
        setErrorComment(Comment, 'Message should be short and do not exceed 500 characters');
    } else {
        setSuccess(Comment);
        counter += 1;
    }
};

// the validation when the form is submitted
form.addEventListener('submit', (e) => {
    // prevent sumitting

    validateInputs(); // tocheck the form for validation

    // making decisions
    if (counter === 3) {
        messageType.classList.replace('errorMessage', 'submitted');
        messageType.textContent = 'Submitted';
        ParagraphError.style.display = 'block';
    } else {
        counter = 0;
        e.preventDefault();
    }
});