// usersInfo;
const submit = document.querySelector('.submit');
submit.addEventListener('click',function() {
    const username = document.querySelector('.username').value;
    const alerts = document.querySelector('.alert').style;
    const alerts1 = document.querySelector('.alert-success').style;


    const user = document.querySelector('.User');
    const password = document.querySelector('.password').value;

    const pass = document.querySelector('.pass');

    const userArray = ['mohammad','mohammad amin','mohammad reza'];

    const isLogin = userArray.includes(username);

    if(password.length < 3) {
        pass.innerHTML = "This password is easy";
    } else if (password.length < 10) {
        pass.innerHTML = "This password is medium";
    } else {
        pass.innerHTML = "This is password is hard";
    }

    if (isLogin === true) {
        alerts1.display = 'inline-block';
        user.innerHTML = username;
    } else {
        alerts.display = 'inline-block';
    }
})