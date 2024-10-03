let menu=0
document.querySelector(".materias svg").addEventListener("click",()=>{
    if (menu===0) {
        document.querySelector(".materias svg path").style.fill="#fff"
        document.querySelector("#menu").style="z-index: 5;"
        document.querySelector(".menuHamburquesa").style="width: 10rem;padding-left: 2rem;left: 0rem;"
        document.querySelector("#tibook").style.display="flex"  
        menu=1
    } else {
        document.querySelector(".materias svg path").style.fill="#000"
        document.querySelector(".menuHamburquesa").style="width: 0rem;padding-left: 0rem;left: -10rem;"
        document.querySelector("#tibook").style.display="none" 
        menu=0
    }

})
const noti = document.getElementById('noti');
const notificaciones = document.getElementById('notificaciones');

noti.addEventListener('click', function() {
    if (!notificaciones.open) {
        notificaciones.show();
    } else {
        notificaciones.close();
    }
});

document.querySelector("#regalo").addEventListener("click",()=>{    
    document.querySelector("#dialogRegalo").showModal();
    document.querySelector(".question").innerHTML="hola"
    
    document.querySelector("#exit").addEventListener("click",()=>{
        document.querySelector("#dialogRegalo").close();
    })
    console.log("hola");
    
})
//------------------------------------------------------------------
const LeftBox = document.getElementById("left");
const QuestionModal = document.getElementById("QuestionModal");
const AnswerModal = document.getElementById("AnswerModal");
const IconBusqueda = document.getElementById("busqueda");
const SendModal = document.getElementById("Send");
let Question = document.getElementById("Question");
let Answer = document.getElementById("Answer");
QuestionModal.style="display:none;"
CierreF = document.getElementById("CierreF");

CierreF.addEventListener("click",()=>{
    AnswerModal.close()
})

function ViewFetch(){
    fetch("https://66e0bd7e2fb67ac16f2a7a28.mockapi.io/Espaniol")
    .then(res => res.json())
    .then(data =>{
        document.querySelector(".seccionQuestion").innerHTML=''
        data.forEach(obj => {
            document.querySelector(".seccionQuestion").innerHTML+=`
            <div class="pregunta">
                    <div class="user">
                        <div class="user_name">
                            <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                            <p class="name">${obj.user}</p>
                        </div>
                        <div class="date">09/09/2024 - 6:10 p.m.</div>
                    </div>
                    <div class="question">${obj.pregunta}</div>
                    <div class="responder">
                        <button class="responderButton" data-id="${obj.id}">Responder</button>
                        <button class="verRespuestasButton" id="ver" data-id="${obj.id}">Ver Respuestas</button>
                    </div>
                    <div class="respuestas" id="CajaR${obj.id}">
                        
                    </div>
                </div>
            `
            const BoxAnswer = document.getElementById(`CajaR${obj.id}`);
            ShowAnswers()
            function ShowAnswers(){
                obj.respuestas.forEach(Respuestas =>{
                    BoxAnswer.innerHTML+=`
                        <div class="respuestaC">
                            <div class="rUser">
                                <div class="rUSer_name">
                                    <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="">
                                    <p class="rName">${Respuestas.user}</p>
                                </div>
                                <div class="dateAnswers">09/09/2024 - 6:12 p.m.</div>
                            </div>
                            <div class="rRespuesta">
                                ${Respuestas.respuesta}
                            </div>
                            <div class="stars">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 256 256"><path fill="gray" d="M237.28 97.87A14.18 14.18 0 0 0 224.76 88l-60.25-4.87l-23.22-56.2a14.37 14.37 0 0 0-26.58 0L91.49 83.11L31.24 88a14.18 14.18 0 0 0-12.52 9.89A14.43 14.43 0 0 0 23 113.32l46 39.61l-14 59.25a14.4 14.4 0 0 0 5.59 15a14.1 14.1 0 0 0 15.91.6l51.5-31.66l51.58 31.71a14.1 14.1 0 0 0 15.91-.6a14.4 14.4 0 0 0 5.59-15l-14-59.25L233 113.32a14.43 14.43 0 0 0 4.28-15.45m-12.14 6.37l-48.69 42a6 6 0 0 0-1.92 5.92l14.88 62.79a2.35 2.35 0 0 1-.95 2.57a2.24 2.24 0 0 1-2.6.1L131.14 184a6 6 0 0 0-6.28 0l-54.72 33.61a2.24 2.24 0 0 1-2.6-.1a2.35 2.35 0 0 1-1-2.57l14.88-62.79a6 6 0 0 0-1.92-5.92l-48.69-42a2.37 2.37 0 0 1-.73-2.65a2.28 2.28 0 0 1 2.07-1.65l63.92-5.16a6 6 0 0 0 5.06-3.69l24.63-59.6a2.35 2.35 0 0 1 4.38 0l24.63 59.6a6 6 0 0 0 5.06 3.69l63.92 5.16a2.28 2.28 0 0 1 2.07 1.65a2.37 2.37 0 0 1-.68 2.66"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 256 256"><path fill="gray" d="M237.28 97.87A14.18 14.18 0 0 0 224.76 88l-60.25-4.87l-23.22-56.2a14.37 14.37 0 0 0-26.58 0L91.49 83.11L31.24 88a14.18 14.18 0 0 0-12.52 9.89A14.43 14.43 0 0 0 23 113.32l46 39.61l-14 59.25a14.4 14.4 0 0 0 5.59 15a14.1 14.1 0 0 0 15.91.6l51.5-31.66l51.58 31.71a14.1 14.1 0 0 0 15.91-.6a14.4 14.4 0 0 0 5.59-15l-14-59.25L233 113.32a14.43 14.43 0 0 0 4.28-15.45m-12.14 6.37l-48.69 42a6 6 0 0 0-1.92 5.92l14.88 62.79a2.35 2.35 0 0 1-.95 2.57a2.24 2.24 0 0 1-2.6.1L131.14 184a6 6 0 0 0-6.28 0l-54.72 33.61a2.24 2.24 0 0 1-2.6-.1a2.35 2.35 0 0 1-1-2.57l14.88-62.79a6 6 0 0 0-1.92-5.92l-48.69-42a2.37 2.37 0 0 1-.73-2.65a2.28 2.28 0 0 1 2.07-1.65l63.92-5.16a6 6 0 0 0 5.06-3.69l24.63-59.6a2.35 2.35 0 0 1 4.38 0l24.63 59.6a6 6 0 0 0 5.06 3.69l63.92 5.16a2.28 2.28 0 0 1 2.07 1.65a2.37 2.37 0 0 1-.68 2.66"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 256 256"><path fill="gray" d="M237.28 97.87A14.18 14.18 0 0 0 224.76 88l-60.25-4.87l-23.22-56.2a14.37 14.37 0 0 0-26.58 0L91.49 83.11L31.24 88a14.18 14.18 0 0 0-12.52 9.89A14.43 14.43 0 0 0 23 113.32l46 39.61l-14 59.25a14.4 14.4 0 0 0 5.59 15a14.1 14.1 0 0 0 15.91.6l51.5-31.66l51.58 31.71a14.1 14.1 0 0 0 15.91-.6a14.4 14.4 0 0 0 5.59-15l-14-59.25L233 113.32a14.43 14.43 0 0 0 4.28-15.45m-12.14 6.37l-48.69 42a6 6 0 0 0-1.92 5.92l14.88 62.79a2.35 2.35 0 0 1-.95 2.57a2.24 2.24 0 0 1-2.6.1L131.14 184a6 6 0 0 0-6.28 0l-54.72 33.61a2.24 2.24 0 0 1-2.6-.1a2.35 2.35 0 0 1-1-2.57l14.88-62.79a6 6 0 0 0-1.92-5.92l-48.69-42a2.37 2.37 0 0 1-.73-2.65a2.28 2.28 0 0 1 2.07-1.65l63.92-5.16a6 6 0 0 0 5.06-3.69l24.63-59.6a2.35 2.35 0 0 1 4.38 0l24.63 59.6a6 6 0 0 0 5.06 3.69l63.92 5.16a2.28 2.28 0 0 1 2.07 1.65a2.37 2.37 0 0 1-.68 2.66"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 256 256"><path fill="gray" d="M237.28 97.87A14.18 14.18 0 0 0 224.76 88l-60.25-4.87l-23.22-56.2a14.37 14.37 0 0 0-26.58 0L91.49 83.11L31.24 88a14.18 14.18 0 0 0-12.52 9.89A14.43 14.43 0 0 0 23 113.32l46 39.61l-14 59.25a14.4 14.4 0 0 0 5.59 15a14.1 14.1 0 0 0 15.91.6l51.5-31.66l51.58 31.71a14.1 14.1 0 0 0 15.91-.6a14.4 14.4 0 0 0 5.59-15l-14-59.25L233 113.32a14.43 14.43 0 0 0 4.28-15.45m-12.14 6.37l-48.69 42a6 6 0 0 0-1.92 5.92l14.88 62.79a2.35 2.35 0 0 1-.95 2.57a2.24 2.24 0 0 1-2.6.1L131.14 184a6 6 0 0 0-6.28 0l-54.72 33.61a2.24 2.24 0 0 1-2.6-.1a2.35 2.35 0 0 1-1-2.57l14.88-62.79a6 6 0 0 0-1.92-5.92l-48.69-42a2.37 2.37 0 0 1-.73-2.65a2.28 2.28 0 0 1 2.07-1.65l63.92-5.16a6 6 0 0 0 5.06-3.69l24.63-59.6a2.35 2.35 0 0 1 4.38 0l24.63 59.6a6 6 0 0 0 5.06 3.69l63.92 5.16a2.28 2.28 0 0 1 2.07 1.65a2.37 2.37 0 0 1-.68 2.66"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 256 256"><path fill="gray" d="M237.28 97.87A14.18 14.18 0 0 0 224.76 88l-60.25-4.87l-23.22-56.2a14.37 14.37 0 0 0-26.58 0L91.49 83.11L31.24 88a14.18 14.18 0 0 0-12.52 9.89A14.43 14.43 0 0 0 23 113.32l46 39.61l-14 59.25a14.4 14.4 0 0 0 5.59 15a14.1 14.1 0 0 0 15.91.6l51.5-31.66l51.58 31.71a14.1 14.1 0 0 0 15.91-.6a14.4 14.4 0 0 0 5.59-15l-14-59.25L233 113.32a14.43 14.43 0 0 0 4.28-15.45m-12.14 6.37l-48.69 42a6 6 0 0 0-1.92 5.92l14.88 62.79a2.35 2.35 0 0 1-.95 2.57a2.24 2.24 0 0 1-2.6.1L131.14 184a6 6 0 0 0-6.28 0l-54.72 33.61a2.24 2.24 0 0 1-2.6-.1a2.35 2.35 0 0 1-1-2.57l14.88-62.79a6 6 0 0 0-1.92-5.92l-48.69-42a2.37 2.37 0 0 1-.73-2.65a2.28 2.28 0 0 1 2.07-1.65l63.92-5.16a6 6 0 0 0 5.06-3.69l24.63-59.6a2.35 2.35 0 0 1 4.38 0l24.63 59.6a6 6 0 0 0 5.06 3.69l63.92 5.16a2.28 2.28 0 0 1 2.07 1.65a2.37 2.37 0 0 1-.68 2.66"/></svg>
                            </div>
                        </div>
                    `
                })
                document.querySelectorAll("#ver").forEach(VerAnswer=>{
                    VerAnswer.addEventListener("click", Show)
                    
                })
                function Show(e){
                    console.log("ver");
                    const id = e.target.getAttribute("data-id");
                    document.querySelectorAll(".respuestaC").forEach(cj=>{
                        document.querySelector(`#CajaR${id}`).style="height:auto"
                    })
                }
            }
        });
        document.querySelectorAll(".responderButton").forEach(Res => {
            Res.addEventListener("click", (e) => {
            
            AnswerModal.showModal();
    
            const Answer = document.getElementById("Answer");
            Answer.value = ''; 
    
            const currentId = e.target.getAttribute("data-id");
    
            console.log('ID de la pregunta:', currentId);
    
            const sendButton = document.getElementById("SendR");
    
            sendButton.onclick = async () => {
    
                if (Answer.value.trim() === '') {
                    console.error('La respuesta está vacía.');
                    return;
                }
                
                console.log('Respuesta a enviar:', Answer.value);
                console.log('Enviando a ID:', currentId);
    
                try {
                    await AddNewAnswer(Answer.value, currentId);
                    AnswerModal.close();
                } catch (error) {
                    console.error('Error al enviar la respuesta:', error);
                }
            };
        });
    });

    })
    document.getElementById("question").addEventListener("click",()=>{
        QuestionModal.style="display:flex;"
        QuestionModal.showModal()
        Question.addEventListener("change",(e)=>{
            SendModal.addEventListener("click",()=>{
                AddNewQuestion(e.target.value)
                QuestionModal.style="display:none;"
                QuestionModal.close()
            })
        })
    })  
};

async function AddNewAnswer(Q,id) {
    
    const response = await fetch(`https://66e0bd7e2fb67ac16f2a7a28.mockapi.io/Espaniol/${id}`);
    const data= await response.json()

    let Nueva = {
        "user": "User",
        "respuesta": Q,
        "perfil": "https://randomuser.me/api/portraits/women/1.jpg"
    }
    
    const NuevasRespuestas = data.respuestas
    NuevasRespuestas.push(Nueva)
    console.log(data);
    
    
    const task = Q;
    if(task.trim() === ''){
        return;
    }
    
    await fetch(`https://66e0bd7e2fb67ac16f2a7a28.mockapi.io/Espaniol/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify({respuestas : NuevasRespuestas})
    });
    Q.value = '';
    ViewFetch()
};

async function AddNewQuestion(Q) {    
    const task = Q;
    if(task.trim() === ''){
        return;
    }
    
    await fetch('https://66e0bd7e2fb67ac16f2a7a28.mockapi.io/Espaniol',{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify({
            "user": "User",
            "perfil": "https://randomuser.me/api/portraits/men/1.jpg",
            "pregunta": task,
            "respuestas": [
            ]
        })
    });
    Q.value = '';
    ViewFetch()
};
ViewFetch()