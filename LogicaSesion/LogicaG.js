function SaveUserT (Name, id){
    sessionStorage.setItem("Nombre",Name)
    sessionStorage.setItem("id",id)
}

if (sessionStorage.getItem("Nombre")){

}else{
    sessionStorage.setItem("Nombre","");
}   



