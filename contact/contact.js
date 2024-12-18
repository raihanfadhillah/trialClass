function sendEmail(){
    //variabel input
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    //email penerima
    let emailReceiver ="raihanfadhillah02@gmail.com";

    //createElement = method membuat element/tag html baru;
    let a = document.createElement("a");
    
    //format pengiriman email
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=${message}`;

    //buka link di tab baru
    a.target = "_blank";
    a.click();//triger fungsi klik pada element/tag <a></a>
}