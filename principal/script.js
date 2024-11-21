document.addEventListener("DOMContentLoaded", Verificador)

function Verificador(){
    if (sessionStorage.getItem("Nombre") === ""){
        window.location.href="/index.html";
    }
}
