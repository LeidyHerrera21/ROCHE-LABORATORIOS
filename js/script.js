const toggleBtn = document.getElementById("darkModeToggle");
const icon = toggleBtn.querySelector(".icon");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    /* animación */
    toggleBtn.classList.add("animate");

    setTimeout(()=>{
        toggleBtn.classList.remove("animate");
    },500);

    /* cambiar icono */
    if(document.body.classList.contains("dark-mode")){
        icon.textContent="☀️";
    }else{
        icon.textContent="🌙";
    }
});


const canvas = document.getElementById("medicineParticles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 420;

let particles=[];

class Particle{
 constructor(){
   this.x = canvas.width/2;
   this.y = canvas.height/2;
   this.size = Math.random()*4+1;
   this.speedX=(Math.random()-0.5)*6;
   this.speedY=(Math.random()-0.5)*6;
   this.life=100;
 }

 update(){
   this.x+=this.speedX;
   this.y+=this.speedY;
   this.life--;
 }

 draw(){
   ctx.fillStyle="rgba(255,255,255,0.8)";
   ctx.beginPath();
   ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
   ctx.fill();
 }
}

function explode(){
 for(let i=0;i<120;i++){
   particles.push(new Particle());
 }
}

explode();

function animate(){
 ctx.clearRect(0,0,canvas.width,canvas.height);

 particles.forEach((p,i)=>{
   p.update();
   p.draw();
   if(p.life<=0) particles.splice(i,1);
 });

 requestAnimationFrame(animate);
}

animate();

/* ¿Cómo te sientes hoy?*/ 

const emotions = document.querySelectorAll(".emotion-card");
const result = document.getElementById("emotionResult");
const advice = document.getElementById("emotionAdvice");

const tips = {
    "Feliz":" Sigue haciendo lo que amas y comparte tu energía positiva.",
    "Calmado":" Excelente momento para reflexionar o meditar.",
    "Ansioso":" Respira profundo durante 30 segundos y toma una pausa.",
    "Triste":" Hablar con alguien cercano puede ayudarte a sentirte mejor."
};

emotions.forEach(card => {

    card.addEventListener("click", () => {

        emotions.forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        const emotion = card.dataset.emotion;

        result.textContent = emotion;
        advice.textContent = tips[emotion];

        advice.style.animation = "none";
        advice.offsetHeight;
        advice.style.animation = "fadeAdvice .8s forwards";
    });

});

