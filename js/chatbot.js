/* ================= CHAT TOGGLE ================= */

const chatToggle = document.getElementById("chatToggle");
const chatbox = document.getElementById("chatbox");
const closeChat = document.getElementById("closeChat");

chatToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // evita conflictos con otros toggles
    chatbox.classList.toggle("hidden");
});

closeChat.addEventListener("click", () => {
    chatbox.classList.add("hidden");
});


/* ================= CHAT LOGIC ================= */

const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");
const typing = document.getElementById("typing");


function addMessage(text, type){
    const div = document.createElement("div");
    div.className = "message " + type;
    div.textContent = text;
    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;
}


function botReply(userText){

    typing.style.display = "block";

    setTimeout(()=>{

        typing.style.display = "none";

        let reply = "Estoy aquí para escucharte 💙";

        if(userText.includes("ans"))
            reply = "Respira profundo conmigo cuenta hasta 4.";
        else if(userText.includes("trist"))
            reply = "No estás solo. Hablar ayuda mucho 💙.";
        else if(userText.includes("fel"))
            reply = "¡Eso es genial! Sigue cultivando esa emoción 🌞.";

        addMessage(reply,"bot");

    },1200);
}


/* ================= ENVIAR MENSAJE ================= */

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", (e)=>{
    if(e.key === "Enter") sendMessage();
});


function sendMessage(){

    const text = input.value.trim();
    if(!text) return;

    addMessage(text,"user");
    input.value="";

    botReply(text.toLowerCase());
}