const wesLink = document.querySelector('.wes');

wesLink.addEventListener('click', function(e) {
    const shouldChangePage = confirm('This website may be malicious! Do you wish to proceed?');
    
    if (!shouldChangePage) {
        e.preventDefault();
        // window.location = e.currentTarget.href; (Another option)
    }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(e) {
    const name = e.currentTarget.name.value;
    if(name.includes('Chad')) {
        alert('Sorry bro');
        e.preventDefault();
    }
});

function logEvent(e) {
    console.log(e.type);
    console.log(e.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
// 'keyup'
// 'keydown'
// 'focus'
// 'blur'
