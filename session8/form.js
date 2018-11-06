function validateForm(){
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
 
    
    if (username == ""){
        document.getElementById('checkname').innerHTML = "Bạn chưa nhập tên";
    }
    if (password == "")
    {
        document.getElementById('checkpassword').innerHTML = "Bạn chưa nhập mật khẩu";
    }
}