let pwdText = null;

function pwdMatch(){

    const pwdConfirm = document.getElementById('user_pwd_confirm').value;
    const pwd = document.getElementById('user_pwd').value;
    const pwdRow = document.getElementById('pwd-row')

        if (!(pwdText)){
            pwdText = document.createElement('p')
            pwdText.textContent = ''
                pwdRow.appendChild(pwdText);
        }


    if (pwd == pwdConfirm){
        pwdConfirm.style.cssText += "border:1px solid green";
        pwd.style.cssText += "border:1px solid green";
        return pwdText.textContent = 'Passwords Match';
        
    } else {
        pwdConfirm.style.cssText += "border:1px solid red";
        pwd.style.cssText += "border:1px solid red";
        return pwdText.textContent = 'Passwords Do Not Match';
    }
}