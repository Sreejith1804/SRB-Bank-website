function validatePassword(){
    var pwd1 = document.getElementById("pwd1");
    var pwd = document.getElementById("pwd");
    if(pwd1!=pwd){
        alert("Password don't match");
        return false;
    }
}