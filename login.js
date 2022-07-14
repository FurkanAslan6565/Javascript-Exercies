function login() {
    var eposta = document.getElementById("eposta").value;
    var sifre = document.getElementById("sifre").value;
    if (eposta == "berjinliza3434@aslan.com" && sifre == "121212") {
        document.getElementById("container").innerHTML = "Başarılı bir şekilde giriş yaptınız";
    } else {
        document.getElementById("container").innerHTML = "Girdilerinizi kontrol ediniz";
    }
}