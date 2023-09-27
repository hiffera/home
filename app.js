function send() {

    let name = document.getElementById("name").value;

    let message = document.getElementById('message').value;  

    if (message=='') {
        document.getElementById('warning').innerText = 'Введите сообщение!';
    } 
    //if (name=='') { document.getElementById('warning').innerText = 'Введите имя!';} 
    else{
        document.getElementById('warning').innerText = "";
        document.getElementById('result').innerText += `\n ${name}: ${message}`;
        message='Ваше сообщение...';
    }

}