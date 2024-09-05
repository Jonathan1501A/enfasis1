function enviar() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();
    let raw = JSON.stringify({
        "nombres": document.getElementById("nombres").value,
        "apellidos": document.getElementById("apellidos").value,
        "tema": document.getElementById("tema").value
    });  
    let requestOptions = { 
        method: "POST",
        headers: myHeaders, 
        body: raw,
        redirect: "follow"
    };    
    fetch("http://localhost:6500/desarrollo/", requestOptions)
        .then((response) => response.text())
        //.then((result) => cargar (result))
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}