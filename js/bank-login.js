document.getElementById('bank-login-btn').addEventListener('click', function(){
    const userEmailInput = document.getElementById('user-email');
    const userEmail = userEmailInput.value;
    const userPasswordInput = document.getElementById('user-password');
    const userPassword = userPasswordInput.value;
 
    if(userEmail === 'admin@company.com' && userPassword === 'Admin'){
        window.location.href = 'banking.html';
    }else{
        console.log('Your User or Password Invalid');
    }


});
